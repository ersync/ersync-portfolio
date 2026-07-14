<script setup lang="ts">
const principles = [
  {
    title: 'Make it clear',
    description: 'People should understand the product and the code without decoding either.'
  },
  {
    title: 'Make it useful',
    description: 'The right outcome matters more than an impressive implementation.'
  },
  {
    title: 'Make it last',
    description: 'Small choices in speed, structure, and states compound into trust.'
  }
]
</script>

<template>
  <aside
    class="principles-section deferred-section relative overflow-hidden border-y border-white/10 bg-[#06101c] py-12 sm:py-16"
  >
    <div
      class="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
    />
    <div class="container relative grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
      <div>
        <h2 class="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          Good work should feel obvious.
        </h2>
        <p class="mt-3 max-w-md text-base leading-7 text-slate-300">
          Three checks keep the work grounded when the technical choices get noisy.
        </p>
      </div>

      <div
        class="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
      >
        <div v-for="principle in principles" :key="principle.title" class="bg-[#091526] p-5 sm:p-6">
          <h3 class="font-semibold text-cyan-200">{{ principle.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-300">{{ principle.description }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>
