interface RecaptchaApi {
  ready(callback: () => void): void
  execute(siteKey: string, options: { action: string }): Promise<string>
}

type RecaptchaWindow = Window & {
  grecaptcha?: RecaptchaApi
}

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
let loader: Promise<RecaptchaApi | null> | undefined

const loadRecaptcha = (): Promise<RecaptchaApi | null> => {
  if (!siteKey) return Promise.resolve(null)
  if (loader) return loader

  loader = new Promise((resolve, reject) => {
    const recaptchaWindow = window as RecaptchaWindow

    const resolveWhenReady = () => {
      const recaptcha = recaptchaWindow.grecaptcha

      if (!recaptcha) {
        reject(new Error('reCAPTCHA failed to initialize'))
        return
      }

      recaptcha.ready(() => resolve(recaptcha))
    }

    if (recaptchaWindow.grecaptcha) {
      resolveWhenReady()
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-recaptcha-loader]'
    )

    if (existingScript) {
      existingScript.addEventListener('load', resolveWhenReady, { once: true })
      existingScript.addEventListener(
        'error',
        () => reject(new Error('reCAPTCHA failed to load')),
        {
          once: true
        }
      )
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
    script.async = true
    script.defer = true
    script.dataset.recaptchaLoader = ''
    script.addEventListener('load', resolveWhenReady, { once: true })
    script.addEventListener('error', () => reject(new Error('reCAPTCHA failed to load')), {
      once: true
    })
    document.head.append(script)
  })

  return loader
}

export const getRecaptchaToken = async (action: string): Promise<string | null> => {
  const recaptcha = await loadRecaptcha()
  if (!recaptcha || !siteKey) return null

  return recaptcha.execute(siteKey, { action })
}
