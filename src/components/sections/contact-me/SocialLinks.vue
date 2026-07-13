<script setup lang="ts">
const socialLinks = [
  {
    icon: 'github',
    url: 'https://github.com/ersync',
    label: 'GitHub'
  },
  {
    icon: 'linkedin',
    url: 'https://linkedin.com/in/erahimidev',
    label: 'LinkedIn'
  }
]
</script>

<template>
  <div class="flex flex-wrap gap-3.5">
    <a
      v-for="{ icon, url, label } in socialLinks"
      :key="url"
      :href="url"
      :aria-label="label"
      rel="noopener noreferrer"
      target="_blank"
      class="group relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-white/[0.06] bg-white/[0.01] text-slate-400 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-teal-400/5 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
    >
      <font-awesome-icon class="size-5" :icon="['fab', icon]" />
    </a>
  </div>
</template>
