<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'

type ColorScheme = 'red' | 'green' | 'blue' | 'cyan' | 'orange'

defineProps<{
  title: string
  description: string
  iconName: string
  variant: ColorScheme
}>()

const accents = {
  red: 'text-rose-300 bg-rose-400/15 border-rose-400/25',
  green: 'text-emerald-300 bg-emerald-400/15 border-emerald-400/25',
  blue: 'text-blue-300 bg-blue-400/15 border-blue-400/25',
  cyan: 'text-cyan-300 bg-cyan-400/15 border-cyan-400/25',
  orange: 'text-orange-300 bg-orange-400/15 border-orange-400/25'
} as const
</script>

<template>
  <article
    class="group flex min-h-32 flex-col justify-between rounded-2xl border border-white/[0.16] bg-[#0b192b] p-4 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-white/25 hover:bg-[#102238] sm:p-5"
  >
    <div
      class="flex size-10 items-center justify-center rounded-xl border"
      :class="accents[variant]"
    >
      <BaseIcon :name="iconName" size="20px" />
    </div>
    <div class="mt-5">
      <h4 class="text-sm font-semibold text-white sm:text-base">{{ title }}</h4>
      <p class="mt-0.5 text-xs text-slate-200">{{ description }}</p>
    </div>
  </article>
</template>
