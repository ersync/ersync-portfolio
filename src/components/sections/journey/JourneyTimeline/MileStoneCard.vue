<script setup lang="ts">
import { usePhaseStore } from '@/stores/phaseStore'
const phase = usePhaseStore()
defineProps<{
  milestoneData: Milestone
}>()

import type { Milestone } from '@/types/journey'
</script>

<template>
  <div
    class="rounded-lg bg-white/90 p-4 pb-2 shadow-md backdrop-blur transition-all duration-300 hover:shadow-lg dark:bg-[#1A1A1A]/80 dark:shadow-[0_0_11px_rgba(20,184,166,0.11)] dark:backdrop-blur-xl"
  >
    <div class="mb-4 flex items-start justify-between">
      <h3
        class="font-VarelaRound text-sm font-semibold tracking-normal text-gray-600 dark:text-gray-200"
      >
        {{ milestoneData.title }}
      </h3>
      <span
        :class="[
          'rounded-full px-2 py-0.5 text-xs',
          phase.getMilestoneStatusClass(milestoneData.status),
          'dark:bg-opacity-20 dark:text-opacity-90'
        ]"
      >
        {{ milestoneData.status }}
      </span>
    </div>
    <p class="mb-2 line-clamp-2 text-[13px] text-gray-600 dark:text-gray-300">
      {{ milestoneData.description }}
    </p>
    <div class="flex flex-wrap gap-1">
      <span
        v-for="tech in milestoneData.technologies"
        :key="tech"
        class="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
      >
        {{ tech }}
      </span>
    </div>
    <div class="mt-2 text-center text-[12px] text-gray-500 dark:text-gray-400">
      {{ milestoneData.timeframe }}
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
