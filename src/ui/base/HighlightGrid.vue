<script setup lang="ts">
const highlights = [
  { number: '01', title: 'Architecture', detail: 'Make change cheaper' },
  { number: '02', title: 'Interfaces', detail: 'Make intent obvious' },
  { number: '03', title: 'Performance', detail: 'Make speed felt' },
  { number: '04', title: 'Delivery', detail: 'Make the work real' }
]
</script>

<template>
  <aside
    class="grid min-h-[25rem] grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/[0.16] bg-white/[0.16] shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
    aria-label="Areas of focus"
  >
    <div
      v-for="item in highlights"
      :key="item.number"
      class="group relative flex flex-col justify-between overflow-hidden bg-[#0b192b] p-5 transition-colors duration-300 hover:bg-[#102238] sm:p-6"
    >
      <div
        class="absolute -right-12 -top-12 size-28 rounded-full bg-cyan-400/[0.06] blur-2xl transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
      <span
        class="relative font-display text-3xl font-semibold tracking-[-0.06em] text-cyan-200/85 sm:text-4xl"
      >
        {{ item.number }}
      </span>
      <div class="relative">
        <div class="mb-4 h-0.5 w-10 bg-cyan-300/80 transition-all duration-300 group-hover:w-16" />
        <h3 class="font-display text-base font-semibold text-slate-100 sm:text-lg">
          {{ item.title }}
        </h3>
        <p class="mt-1 text-xs leading-5 text-slate-200 sm:text-sm">{{ item.detail }}</p>
      </div>
    </div>
  </aside>
</template>
