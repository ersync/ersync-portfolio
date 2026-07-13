<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle: string
    eyebrow?: string
  }>(),
  { eyebrow: 'Portfolio' }
)
</script>

<template>
  <header class="mb-12 sm:mb-16">
    <p class="font-mono text-[11px] font-semibold tracking-[0.2em] text-teal-300 uppercase">
      {{ eyebrow }}
    </p>
    <div class="mt-3 grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)]">
      <h2
        class="font-display text-4xl font-semibold tracking-[-0.045em] text-slate-50 sm:text-5xl lg:text-6xl"
      >
        {{ title }}
      </h2>
      <p v-if="subtitle" class="max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
        {{ subtitle }}
      </p>
    </div>
    <div class="mt-6 h-px bg-gradient-to-r from-white/15 via-white/[0.04] to-transparent" />
  </header>
</template>
