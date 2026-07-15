<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrow?: string
    subtitleEmphasis?: boolean
  }>(),
  { eyebrow: 'Portfolio', subtitle: '', subtitleEmphasis: false }
)
</script>

<template>
  <header class="mb-10 sm:mb-14">
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
        class="section-caption max-w-xl lg:justify-self-end lg:text-right"
        :class="
          subtitleEmphasis
            ? 'text-base leading-6 text-teal-50 sm:text-lg sm:leading-7'
            : 'text-[0.95rem] leading-6 text-slate-300 sm:text-[1.05rem] sm:leading-7'
        "
      >
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>
