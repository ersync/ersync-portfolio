<script setup lang="ts">
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'

const socialLinks = [
  {
    icon: 'github',
    url: 'https://github.com/ersync',
    label: 'GitHub',
    color: 'from-slate-700 to-slate-800',
    hoverGlow: 'rgba(20, 184, 166, 0.2)'
  },
  {
    icon: 'linkedin',
    url: 'https://linkedin.com/in/erahimidev',
    label: 'LinkedIn',
    color: 'from-teal-800 to-teal-900',
    hoverGlow: 'rgba(20, 184, 166, 0.2)'
  },
  {
    icon: 'x-twitter',
    url: 'https://x.com/emadrahimidev',
    label: 'Twitter',
    color: 'from-slate-700 to-slate-800',
    hoverGlow: 'rgba(20, 184, 166, 0.2)'
  }
]
</script>

<template>
  <FadeUpOnScroll :delay="400">
    <div class="flex flex-wrap gap-4">
      <a
        v-for="{ icon, url, label, color, hoverGlow } in socialLinks"
        :key="url"
        :href="url"
        :aria-label="label"
        rel="noopener noreferrer"
        target="_blank"
        class="social-link group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30"
        :style="`--hover-glow: ${hoverGlow}`"
      >
        <div
          class="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-20"
          :class="`bg-gradient-to-br ${color}`"
        ></div>

        <font-awesome-icon
          class="relative z-10 h-6 w-6 text-slate-300 transition-all duration-300 group-hover:text-teal-400"
          :icon="['fab', icon]"
        />

        <div
          class="absolute inset-0 rounded-xl bg-teal-500/5 opacity-0 transition-transform duration-700 ease-out group-hover:opacity-100 group-hover:scale-[2.5]"
        ></div>
      </a>
    </div>
  </FadeUpOnScroll>
</template>

<style scoped>
.social-link {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 15px -3px var(--hover-glow),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.group:hover .fa-github,
.group:hover .fa-linkedin,
.group:hover .fa-x-twitter {
  animation: icon-pulse 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes icon-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
</style>
