<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

defineProps<{
  type: 'email' | 'location'
}>()
</script>

<template>
  <div
    class="rounded-xl bg-white/90 p-6 shadow-lg shadow-teal-500/5 backdrop-blur transition-shadow duration-300 hover:shadow-md dark:bg-[#1A1A1A]/80 dark:backdrop-blur-xl"
  >
    <div class="flex items-center space-x-4">
      <div class="rounded-lg bg-teal-50 p-3 dark:bg-teal-900/30">
        <EnvelopeIcon v-if="type === 'email'" class="size-6 text-teal-500 dark:text-teal-400" />
        <MapPinIcon v-else class="size-6 text-teal-500 dark:text-teal-400" />
      </div>
      <div>
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ type === 'email' ? 'Email' : 'Location' }}
        </h3>
        <p
          v-if="type === 'email'"
          class="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent dark:from-teal-400 dark:to-teal-500"
        >
          contact@emadrahimi.dev
        </p>
        <p v-else class="text-teal-600 dark:text-teal-400">Iran</p>
      </div>
    </div>
  </div>
</template>
