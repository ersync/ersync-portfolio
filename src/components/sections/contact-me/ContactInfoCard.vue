<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
defineProps<{
  type: 'email' | 'location'
}>()
</script>
<template>
  <FadeUpOnScroll :delay="200">
    <div
      class="relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:transform hover:-translate-y-1"
    >
      <div class="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-teal-500/10 blur-xl"></div>
      <div class="absolute -left-4 -bottom-4 h-12 w-12 rounded-full bg-indigo-500/10 blur-xl"></div>
      <div class="relative z-10 flex items-center space-x-4">
        <div class="rounded-lg bg-gradient-to-br from-teal-900/40 to-teal-800/20 p-3 shadow-sm">
          <EnvelopeIcon v-if="type === 'email'" class="h-6 w-6 text-teal-400" />
          <MapPinIcon v-else class="h-6 w-6 text-teal-400" />
        </div>
        <div>
          <h3 class="font-semibold text-slate-100">
            {{ type === 'email' ? 'Email' : 'Location' }}
          </h3>
          <p
            v-if="type === 'email'"
            class="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent font-medium transition-all duration-300 hover:from-teal-300 hover:to-teal-200"
          >
            contact@emadrahimi.dev
          </p>
          <p v-else class="font-medium text-teal-400">
            <span class="relative">
              Iran
              <span
                class="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-400/30 transition-all duration-500 group-hover:w-full"
              ></span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </FadeUpOnScroll>
</template>
<style scoped>
div:hover .h-6 {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
