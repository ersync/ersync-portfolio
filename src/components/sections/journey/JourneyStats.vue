<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

defineProps<{
  stats: Stat[]
}>()
</script>

<template>
  <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-xl bg-white/90 p-6 text-center shadow-lg shadow-emerald-500/5 backdrop-blur transition-all duration-300 hover:shadow-lg dark:bg-[#1A1A1A]/80 dark:backdrop-blur-xl"
    >
      <div class="mb-2 text-3xl font-bold text-teal-500 dark:text-teal-400">
        {{ stat.value }}
      </div>
      <div class="text-gray-600 dark:text-gray-400">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>
