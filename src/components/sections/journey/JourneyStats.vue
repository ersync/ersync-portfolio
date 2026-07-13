<script setup lang="ts">
defineProps<{
  stats: Array<{
    value: string
    label: string
  }>
}>()
</script>

<template>
  <dl class="my-10 grid grid-cols-2 gap-3 md:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="grid rounded-2xl border border-white/[0.13] bg-[#0a1725] p-4 text-center shadow-lg shadow-black/15 sm:p-5"
    >
      <dt class="text-xs font-medium leading-5 text-slate-300 sm:text-sm">{{ stat.label }}</dt>
      <dd
        class="row-start-1 mb-1 font-display text-2xl font-semibold text-teal-200 drop-shadow-[0_0_12px_rgba(94,234,212,0.25)] sm:text-3xl"
      >
        {{ stat.value }}
      </dd>
    </div>
  </dl>
</template>
