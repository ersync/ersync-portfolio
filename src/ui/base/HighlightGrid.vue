<script setup lang="ts">
const highlights = [
  { value: 'Rails + Vue', label: 'Core stack', tone: 'text-teal-300' },
  { value: '4+ years', label: 'Building for the web', tone: 'text-emerald-300' },
  { value: 'Product minded', label: 'Beyond the ticket', tone: 'text-sky-300' },
  { value: 'Team player', label: 'Clear collaboration', tone: 'text-violet-300' }
]
</script>

<template>
  <aside
    class="relative w-full overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-xl shadow-black/20 sm:p-6 lg:max-w-[430px]"
    aria-label="Developer highlights"
  >
    <div
      class="absolute -right-16 -top-20 size-48 rounded-full bg-teal-400/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="absolute -bottom-24 -left-12 size-48 rounded-full bg-blue-500/10 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative">
      <p class="text-xs font-medium tracking-[0.18em] text-slate-500 uppercase">At a glance</p>
      <h3 class="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
        Full-stack, with a backend bias.
      </h3>
      <p class="mt-2 max-w-sm text-sm leading-6 text-slate-400">
        Comfortable moving from data models and APIs to the details people actually interact with.
      </p>

      <div class="mt-6 grid grid-cols-2 gap-3">
        <div
          v-for="item in highlights"
          :key="item.value"
          class="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-4 transition-colors hover:border-slate-600 hover:bg-slate-800/80"
        >
          <p class="text-sm font-semibold sm:text-base" :class="item.tone">{{ item.value }}</p>
          <p class="mt-1 text-xs leading-5 text-slate-500">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>
