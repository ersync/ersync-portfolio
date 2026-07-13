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
    class="grid min-h-[25rem] grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] shadow-2xl shadow-black/20"
    aria-label="Areas of focus"
  >
    <div
      v-for="item in highlights"
      :key="item.number"
      class="group relative flex flex-col justify-between overflow-hidden bg-[#07101d]/95 p-5 transition-colors duration-300 hover:bg-[#0a1626] sm:p-6"
    >
      <div
        class="absolute -right-12 -top-12 size-28 rounded-full bg-cyan-400/[0.06] blur-2xl transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
      <span class="relative font-mono text-[10px] text-slate-600">{{ item.number }}</span>
      <div class="relative">
        <div class="mb-4 h-px w-8 bg-cyan-300/60 transition-all duration-300 group-hover:w-14" />
        <h3 class="font-display text-base font-semibold text-slate-100 sm:text-lg">
          {{ item.title }}
        </h3>
        <p class="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{{ item.detail }}</p>
      </div>
    </div>
  </aside>
</template>
