<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'

type ColorScheme = 'red' | 'green' | 'blue' | 'cyan' | 'orange'

defineProps<{
  title: string
  description: string
  iconName: string
  variant: ColorScheme
  index: number
}>()

const accents = {
  red: 'text-rose-300',
  green: 'text-emerald-300',
  blue: 'text-blue-300',
  cyan: 'text-cyan-300',
  orange: 'text-orange-300'
} as const
</script>

<template>
  <article
    class="skill-card group relative flex min-h-24 items-center gap-4 py-5 transition-transform duration-300 hover:-translate-y-1 sm:py-6"
    :class="accents[variant]"
    :style="{ '--skill-index': index }"
  >
    <div class="relative flex size-12 shrink-0 items-center justify-center">
      <span
        class="skill-glow absolute inset-2 rounded-full bg-current opacity-15 blur-lg transition-all duration-300 group-hover:inset-0 group-hover:opacity-30"
        aria-hidden="true"
      />
      <BaseIcon
        :name="iconName"
        size="28px"
        class="skill-icon relative transition-transform duration-300 group-hover:scale-110"
      />
    </div>

    <div class="min-w-0">
      <h4 class="text-sm font-semibold text-white sm:text-base">{{ title }}</h4>
      <p class="mt-1 text-xs leading-5 text-slate-400">{{ description }}</p>
    </div>

    <span
      class="skill-line absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-current to-transparent opacity-70 transition-transform duration-300 group-hover:scale-x-100"
      aria-hidden="true"
    />
  </article>
</template>

<style scoped>
.skill-card {
  animation: skill-lift 15s calc(var(--skill-index) * 2.5s) linear infinite;
}

.skill-glow {
  animation: skill-glow 15s calc(var(--skill-index) * 2.5s) linear infinite;
}

.skill-icon {
  animation: skill-icon 15s calc(var(--skill-index) * 2.5s) linear infinite;
}

.skill-line {
  animation: skill-line 15s calc(var(--skill-index) * 2.5s) linear infinite;
}

@keyframes skill-lift {
  0%,
  16.67%,
  100% {
    transform: translateY(0);
  }
  2.33%,
  14.34% {
    transform: translateY(-0.25rem);
  }
}

@keyframes skill-glow {
  0%,
  16.67%,
  100% {
    opacity: 0.15;
    transform: scale(1);
  }
  2.33%,
  14.34% {
    opacity: 0.3;
    transform: scale(1.5);
  }
}

@keyframes skill-icon {
  0%,
  16.67%,
  100% {
    transform: scale(1);
  }
  2.33%,
  14.34% {
    transform: scale(1.1);
  }
}

@keyframes skill-line {
  0%,
  16.67%,
  100% {
    transform: scaleX(0);
  }
  2.33%,
  14.34% {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-glow,
  .skill-icon,
  .skill-line {
    animation: none;
  }
}
</style>
