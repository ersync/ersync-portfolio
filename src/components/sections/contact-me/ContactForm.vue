<script setup lang="ts">
import { computed, ref } from 'vue'
import { getRecaptchaToken } from '@/services/recaptcha'

type ContactField = 'name' | 'email' | 'message' | null

const activeField = ref<ContactField>(null)
const isLoading = ref(false)
const submissionState = ref<'idle' | 'success' | 'error'>('idle')

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

    const token = await getRecaptchaToken('contact_form')
    if (token) {
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
      <div>
        <h3 class="font-display text-2xl font-semibold tracking-tight text-white">Send a note.</h3>
        <p class="mt-2 text-sm leading-6 text-slate-300">
          A few details are enough to get started.
        </p>

        <div class="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
          <div
            class="field-group relative border-b border-white/15 pb-1 focus-within:border-teal-300/70"
          >
            <label for="contact-name" class="block text-xs font-semibold text-slate-300">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              class="w-full border-0 bg-transparent px-0 py-2.5 text-base text-white outline-none placeholder:text-slate-500"
              placeholder="Jane Smith"
              autocomplete="name"
              required
              @focus="activeField = 'name'"
              @blur="activeField = null"
            />
          </div>

          <div
            class="field-group relative border-b border-white/15 pb-1 focus-within:border-teal-300/70"
          >
            <label for="contact-email" class="block text-xs font-semibold text-slate-300">
              Email address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              class="w-full border-0 bg-transparent px-0 py-2.5 text-base text-white outline-none placeholder:text-slate-500"
              placeholder="jane@example.com"
              autocomplete="email"
              required
              @focus="activeField = 'email'"
              @blur="activeField = null"
            />
          </div>

          <div
            class="field-group relative border-b border-white/15 pb-1 focus-within:border-teal-300/70 sm:col-span-2"
          >
            <label for="contact-message" class="block text-xs font-semibold text-slate-300">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              class="h-36 w-full resize-none border-0 bg-transparent px-0 py-2.5 text-base leading-6 text-white outline-none placeholder:text-slate-500"
              placeholder="What are you hoping to build?"
              required
              @focus="activeField = 'message'"
              @blur="activeField = null"
            />
          </div>
        </div>
      </div>

      <div class="mt-8 space-y-4">
        <button
          type="submit"
          class="flex w-full items-center justify-center rounded-xl bg-teal-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_8px_28px_rgba(45,212,191,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-teal-200 hover:shadow-[0_10px_32px_rgba(45,212,191,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 disabled:cursor-wait disabled:opacity-70"
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
          class="flex items-center justify-between pt-2 text-[10px] font-semibold tracking-wide text-slate-400 uppercase"
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
