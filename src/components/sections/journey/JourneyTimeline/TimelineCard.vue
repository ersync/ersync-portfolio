<script setup lang="ts">
import { inject } from 'vue'

interface TimelineItem {
  title: string
  status: string
  description: string
  technologies: string[]
  timeframe: string
}

defineProps<{
  item: TimelineItem
}>()

const getStatusClass = inject('getStatusClass')
</script>

<template>
  <div class="rounded-lg bg-white p-4 pb-2 shadow-md transition-all duration-300 hover:shadow-lg">
    <div class="mb-4 flex items-start justify-between">
      <h3 class="font-VarelaRound text-sm font-semibold tracking-normal text-gray-600">
        {{ item.title }}
      </h3>
      <span :class="['rounded-full px-2 py-0.5 text-xs', getStatusClass(item.status)]">
        {{ item.status }}
      </span>
    </div>
    <p class="mb-2 line-clamp-2 text-[13px] text-gray-600">
      {{ item.description }}
    </p>
    <div class="flex flex-wrap gap-1">
      <span
        v-for="tech in item.technologies"
        :key="tech"
        class="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700"
      >
        {{ tech }}
      </span>
    </div>
    <div class="mt-2 text-center text-[12px] text-gray-500">
      {{ item.timeframe }}
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
