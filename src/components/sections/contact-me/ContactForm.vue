<script setup lang="ts">
import { computed, ref } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'

type ContactField = 'name' | 'email' | 'message' | null

const activeField = ref<ContactField>(null)
const isLoading = ref(false)
const submissionState = ref<'idle' | 'success' | 'error'>('idle')
const recaptcha = useReCaptcha()

const spotlightStyle = computed(() => {
  const styles = {
    name: {
      top: '5%',
      left: '10%',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 75%)',
      opacity: 1
    },
    email: {
      top: '25%',
      left: '30%',
      background: 'radial-gradient(circle, rgba(167, 139, 250, 0.22), transparent 75%)',
      opacity: 1
    },
    message: {
      top: '50%',
      left: '20%',
      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.22), transparent 75%)',
      opacity: 1
    }
  } as const

  return activeField.value
    ? styles[activeField.value]
    : {
        top: '50%',
        left: '50%',
        background: 'transparent',
        opacity: 0
      }
})

const handleSubmit = async (event: SubmitEvent) => {
  const form = event.currentTarget as HTMLFormElement
  isLoading.value = true
  submissionState.value = 'idle'

  try {
    const formData = new FormData(form)

    if (recaptcha) {
      await recaptcha.recaptchaLoaded()
      const token = await recaptcha.executeRecaptcha('contact_form')
      formData.append('g-recaptcha-response', token)
    }

    const response = await fetch('https://formspree.io/f/xnnnewqv', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })

    if (!response.ok) throw new Error('Contact form submission failed')

    submissionState.value = 'success'
    form.reset()
  } catch (error) {
    submissionState.value = 'error'
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="relative flex h-full flex-col justify-center">
    <div
      class="pointer-events-none absolute z-0 size-80 rounded-full blur-[60px] transition-all duration-500 ease-out"
      :style="spotlightStyle"
      aria-hidden="true"
    />

    <form
      action="https://formspree.io/f/xnnnewqv"
      method="POST"
      class="relative z-10 flex h-full flex-col justify-between p-1"
      :aria-busy="isLoading"
      @submit.prevent="handleSubmit"
    >
      <div class="space-y-6">
        <div>
          <label
            for="contact-name"
            class="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            class="w-full rounded-xl border border-white/[0.06] bg-white/[0.01] px-4 py-3 text-sm text-slate-100 outline-none transition duration-300 placeholder:text-slate-600 focus:border-teal-400/40 focus:bg-white/[0.03] focus:ring-4 focus:ring-teal-400/5"
            placeholder="Your name"
            autocomplete="name"
            required
            @focus="activeField = 'name'"
            @blur="activeField = null"
          />
        </div>

        <div>
          <label
            for="contact-email"
            class="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase"
          >
            Email address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            class="w-full rounded-xl border border-white/[0.06] bg-white/[0.01] px-4 py-3 text-sm text-slate-100 outline-none transition duration-300 placeholder:text-slate-600 focus:border-teal-400/40 focus:bg-white/[0.03] focus:ring-4 focus:ring-teal-400/5"
            placeholder="you@example.com"
            autocomplete="email"
            required
            @focus="activeField = 'email'"
            @blur="activeField = null"
          />
        </div>

        <div>
          <label
            for="contact-message"
            class="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            class="h-32 w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.01] px-4 py-3 text-sm text-slate-100 outline-none transition duration-300 placeholder:text-slate-600 focus:border-teal-400/40 focus:bg-white/[0.03] focus:ring-4 focus:ring-teal-400/5"
            placeholder="Tell me a little about your idea"
            required
            @focus="activeField = 'message'"
            @blur="activeField = null"
          />
        </div>
      </div>

      <div class="mt-8 space-y-4">
        <button
          type="submit"
          class="flex w-full items-center justify-center rounded-xl bg-teal-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_4px_15px_rgba(45,212,191,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-teal-300 hover:shadow-[0_6px_25px_rgba(45,212,191,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 disabled:cursor-wait disabled:opacity-70"
          :disabled="isLoading"
        >
          <svg
            v-if="isLoading"
            class="mr-2 size-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Z"
            />
          </svg>
          {{ isLoading ? 'Sending…' : 'Send message' }}
        </button>

        <p
          v-if="submissionState !== 'idle'"
          class="text-center text-sm font-semibold"
          :class="submissionState === 'success' ? 'text-teal-300' : 'text-rose-300'"
          role="status"
          aria-live="polite"
        >
          {{
            submissionState === 'success'
              ? 'Thank you. Your message has been sent.'
              : 'Something went wrong. Please try again or email me directly.'
          }}
        </p>

        <div
          class="flex items-center justify-between pt-2 text-[10px] font-semibold tracking-wider text-slate-500 uppercase"
        >
          <span>Protected by reCAPTCHA</span>
          <a
            href="https://policies.google.com/privacy"
            class="text-teal-400 transition-colors hover:text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy & terms
          </a>
        </div>
      </div>
    </form>
  </div>
</template>
