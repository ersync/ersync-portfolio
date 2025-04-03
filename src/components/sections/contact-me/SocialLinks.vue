<script setup lang="ts">
const socialLinks = [
  { icon: 'github', url: 'https://github.com/ersync' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/erahimidev' },
  { icon: 'x-twitter', url: 'https://x.com/emadrahimidev' }
]
</script>

<template>
  <div class="flex space-x-4">
    <a
      v-for="{ icon, url } in socialLinks"
      :key="url"
      :href="url"
      rel="noopener noreferrer"
      target="_blank"
      class="flex items-center rounded-xl bg-white/90 p-3 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-md dark:bg-[#1A1A1A]/80 dark:shadow-lg dark:shadow-teal-500/5 dark:backdrop-blur-xl"
    >
      <font-awesome-icon class="size-6 text-teal-500 dark:text-teal-400" :icon="['fab', icon]" />
    </a>
  </div>
</template>
