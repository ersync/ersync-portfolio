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
    class="rounded-xl bg-slate-800/30 py-5 px-4 shadow-[0_0_11px_rgba(20,184,166,0.11)] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border border-slate-700/50"
  >
    <div class="mb-4 flex items-start justify-between">
      <h3 class="font-semibold tracking-normal text-slate-200">
        {{ milestoneData.title }}
      </h3>
      <span
        :class="[
          'rounded-full px-2 py-1 text-[10px]',
          phase.getMilestoneStatusClass(milestoneData.status),
          'bg-opacity-20 text-opacity-90'
        ]"
      >
        {{ milestoneData.status }}
      </span>
    </div>
    <p class="mb-3 line-clamp-2 text-sm leading-relaxed text-slate-300">
      {{ milestoneData.description }}
    </p>
    <div class="flex flex-wrap gap-1.5">
      <span v-for="tech in milestoneData.technologies" :key="tech" class="tag-highlight">
        {{ tech }}
      </span>
    </div>
    <div class="mt-3 text-center text-xs text-slate-400">
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
.tag-highlight {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 0.375rem;
  font-size: 0.6rem;
  font-weight: 500;
  color: #2dd4bf;
  transition: all 0.2s ease;
}
.tag-highlight:hover {
  background: rgba(45, 212, 191, 0.15);
  transform: translateY(-1px);
}
</style>
