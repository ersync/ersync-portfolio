<script setup lang="ts">
import { ref } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'

const isSubmitted = ref(false)
const isLoading = ref(false)
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()!

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  isLoading.value = true
  const form = e.target as HTMLFormElement
  if (!form) return
  try {
    // Execute reCAPTCHA first
    await recaptchaLoaded()
    const token = await executeRecaptcha('contact_form')
    // Create FormData and append reCAPTCHA token
    const formData = new FormData(form)
    formData.append('g-recaptcha-response', token)
    const response = await fetch('https://formspree.io/f/xnnnewqv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
    if (response.ok) {
      isSubmitted.value = true
      form.reset()
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <FadeUpOnScroll>
    <form
      @submit="handleSubmit"
      action="https://formspree.io/f/xnnnewqv"
      method="POST"
      class="rounded-xl p-4 transition-all duration-300"
    >
      <div class="space-y-6">
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-300">Name</label>
          <input
            type="text"
            name="name"
            class="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-slate-200 outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <input
            type="email"
            name="email"
            class="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-slate-200 outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-300">Message</label>
          <textarea
            name="message"
            class="h-32 w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-slate-200 outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full rounded-lg bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-3 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 focus:ring-2 focus:ring-teal-400/50"
        >
          <span v-if="isLoading" class="flex items-center justify-center">
            <svg
              class="mr-2 h-4 w-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
          <span v-else>Send Message</span>
        </button>
        <p v-if="isSubmitted" class="animate-fade-in text-center font-medium text-teal-400">
          Thank you! Your message has been sent successfully.
        </p>
        <small class="block text-center text-[11px] text-slate-400">
          Bad robots not allowed! Protected by reCAPTCHA -
          <a
            href="https://policies.google.com/privacy"
            class="text-teal-400 transition-colors duration-300 hover:text-teal-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            boring legal stuff
          </a>
        </small>
      </div>
    </form>
  </FadeUpOnScroll>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

input,
textarea {
  backdrop-filter: blur(8px);
}

@keyframes glowPulse {
  0%,
  100% {
    text-shadow: 0 0 8px rgba(20, 184, 166, 0.3);
  }
  50% {
    text-shadow: 0 0 16px rgba(20, 184, 166, 0.6);
  }
}

.animate-fade-in {
  animation:
    fadeIn 0.5s ease-out forwards,
    glowPulse 2s ease-in-out infinite 0.5s;
}
</style>
