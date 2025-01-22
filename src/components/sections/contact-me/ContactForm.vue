<script setup lang="ts">
import { ref } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'

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
  <form
    @submit="handleSubmit"
    action="https://formspree.io/f/xnnnewqv"
    method="POST"
    class="rounded-xl bg-white/90 p-8 shadow-lg shadow-teal-500/5 backdrop-blur dark:bg-[#1A1A1A]/80 dark:backdrop-blur-xl"
  >
    <div class="space-y-6">
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          class="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-800 outline-none focus:border-teal-500 focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-teal-400"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          class="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-800 outline-none focus:border-teal-500 focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-teal-400"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >Message</label
        >
        <textarea
          name="message"
          class="h-32 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-800 outline-none focus:border-teal-500 focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-teal-400"
          placeholder="Your message"
          required
        />
      </div>
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full rounded-lg bg-teal-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500"
      >
        {{ isLoading ? 'Sending...' : 'Send Message' }}
      </button>

      <p
        v-if="isSubmitted"
        class="animate-fade-in text-center font-medium text-[13px] text-teal-500 dark:text-teal-400"
      >
        Thank you! Your message has been sent successfully.
      </p>

      <!-- reCAPTCHA notice -->
      <small class="block text-center text-[11px] text-gray-500 dark:text-gray-400">
        Bad robots not allowed! Protected by reCAPTCHA - <br/>
        <a href="https://policies.google.com/privacy"
        class="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-500"
        target="_blank"
        rel="noopener noreferrer"
        >boring legal stuff</a>
      </small>
    </div>
  </form>
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
</style>
