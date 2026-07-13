<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'

type ColorScheme = 'red' | 'green' | 'blue' | 'cyan'

defineProps<{
  title: string
  description: string
  iconName: string
  variant: ColorScheme
}>()

const accents = {
  red: 'text-rose-300 bg-rose-400/10 border-rose-400/15',
  green: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/15',
  blue: 'text-blue-300 bg-blue-400/10 border-blue-400/15',
  cyan: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/15'
} as const
</script>

<template>
  <article
    class="group flex min-h-32 flex-col justify-between rounded-2xl border border-white/[0.07] bg-slate-950/45 p-4 backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.13] hover:bg-slate-900/70 sm:p-5"
  >
    <div
      class="flex size-10 items-center justify-center rounded-xl border"
      :class="accents[variant]"
    >
      <BaseIcon :name="iconName" size="20px" />
    </div>
    <div class="mt-5">
      <h4 class="text-sm font-semibold text-slate-100 sm:text-base">{{ title }}</h4>
      <p class="mt-0.5 text-xs text-slate-500">{{ description }}</p>
    </div>
  </article>
</template>
