<script setup lang="ts">
import MileStoneCard from '@/components/sections/journey/JourneyTimeline/MileStoneCard.vue'
import { inject } from 'vue'

import type { PhaseDetails } from '@/types/journey'

const phaseContent = inject<PhaseDetails>('selectedPhaseContent', {
  milestones: [],
  tools: []
})
</script>

<template>
  <div class="relative">
    <!-- Main vertical line -->
    <div class="absolute inset-y-0 left-4 w-1 bg-emerald-300/50" />

    <!-- Timeline items -->
    <div class="space-y-8">
      <div
        v-for="milestone in phaseContent?.milestones"
        :key="milestone.title"
        class="relative pl-12"
      >
        <!-- Timeline node/point -->
        <div class="absolute left-2.5 top-4 z-10">
          <div class="relative size-4 rounded-full bg-emerald-300">
            <div
              class="absolute -left-1/2 -top-1/2 size-8 animate-ping rounded-full bg-emerald-500 opacity-20"
            />
          </div>
        </div>

        <!-- Connector line -->
        <div class="absolute left-4 top-6 h-px w-8 bg-emerald-200" />

        <MileStoneCard :milestone-data="milestone" />
      </div>
    </div>
  </div>
</template>
