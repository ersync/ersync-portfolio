<script setup lang="ts">
import { inject } from 'vue'
import MileStoneCard from '@/components/sections/journey/JourneyTimeline/MileStoneCard.vue'

import type { PhaseDetails } from '@/types/journey'

const phaseContent = inject<PhaseDetails>('selectedPhaseContent', {
  milestones: [],
  tools: []
})
</script>

<template>
  <div class="relative overflow-x-auto px-4">
    <div class="relative">
      <!-- Main horizontal line -->
      <div class="absolute top-[234px] h-1 w-full -translate-y-1/2 bg-emerald-300" />

      <!-- Timeline content container -->
      <div class="relative flex min-h-[500px] items-center justify-start pb-8 lg:justify-between">
        <!-- Timeline items -->
        <div
          v-for="(milestone, index) in phaseContent?.milestones"
          :key="milestone.title"
          class="relative w-[170px] first:ml-[60px] last:mr-[60px]"
        >
          <!-- Timeline node/point -->
          <div class="absolute left-[50%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div class="relative size-4 rounded-full bg-emerald-500">
              <div
                class="absolute -left-1/2 -top-1/2 size-8 animate-ping rounded-full bg-emerald-500 opacity-20"
              />
            </div>
          </div>

          <!-- Card Container -->
          <div
            class="absolute left-1/2 w-[290px] -translate-x-1/2 custom-md:w-[270px] lg:w-[290px]"
            :class="[index % 2 === 0 ? '-top-8 -translate-y-full' : 'top-8']"
          >
            <MileStoneCard :milestone-data="milestone" />

            <!-- Connector line -->
            <div
              class="absolute left-1/2 w-px bg-emerald-300"
              :class="[index % 2 === 0 ? 'top-full h-8' : 'bottom-full h-8']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
