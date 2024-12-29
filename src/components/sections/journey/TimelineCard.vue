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
  <div class="mb-16 grid grid-cols-1 gap-6 md:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-xl bg-white p-6 text-center shadow-sm"
    >
      <div class="mb-2 text-3xl font-bold text-emerald-500">
        {{ stat.value }}
      </div>
      <div class="text-gray-600">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>
