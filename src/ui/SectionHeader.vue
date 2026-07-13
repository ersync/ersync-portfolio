<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle: string
    eyebrow?: string
    subtitleEmphasis?: boolean
  }>(),
  { eyebrow: 'Portfolio', subtitleEmphasis: false }
)
</script>

<template>
  <header class="mb-12 sm:mb-16">
    <div class="flex items-center gap-3 text-teal-200">
      <span class="h-0.5 w-7 rounded-full bg-current" />
      <p class="font-display text-xs font-semibold tracking-[0.08em] uppercase">{{ eyebrow }}</p>
    </div>
    <div class="mt-3 grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)]">
      <h2
        class="font-display text-4xl font-semibold tracking-[-0.045em] text-slate-50 sm:text-5xl lg:text-6xl"
      >
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="max-w-xl"
        :class="
          subtitleEmphasis
            ? 'font-display text-lg font-medium leading-7 tracking-[-0.015em] text-teal-50 sm:text-xl'
            : 'text-sm leading-6 text-slate-300 sm:text-base'
        "
      >
        {{ subtitle }}
      </p>
    </div>
    <div class="mt-6 h-px bg-gradient-to-r from-white/15 via-white/[0.04] to-transparent" />
  </header>
</template>
