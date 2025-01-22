<script setup lang="ts">
import JourneyPhaseBar from '@/components/sections/journey/JourneyPhaseBar.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import JourneyStats from '@/components/sections/journey/JourneyStats.vue'
import JourneyTimeline from '@/components/sections/journey/JourneyTimeline/JourneyTimeline.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import { usePhaseStore } from '@/stores/phaseStore'

const phase = usePhaseStore()

const stats = [
  { value: '10+', label: 'Technologies Mastered' },
  { value: '15+', label: 'Projects Completed' },
  { value: '1000+', label: 'Learning Hours' },
  { value: '300+', label: 'GitHub Contributions' }
]
</script>

<template>
  <section
    id="journey"
    class="relative min-h-screen w-full overflow-hidden bg-[#F7F9FB] py-20 dark:bg-[#1b1b1f]"
  >
    <div class="absolute inset-0" style="filter: blur(80px)" />
    <div class="container relative z-10">
      <!-- Header -->
      <FadeUpOnScroll>
        <SectionHeader
          title="Journey & Growth Path"
          subtitle="Tracking my evolution from fundamentals to full-stack"
        />
      </FadeUpOnScroll>

      <!-- Stats -->
      <FadeUpOnScroll :delay="200">
        <JourneyStats :stats="stats" />
      </FadeUpOnScroll>

      <!-- Phase Bar -->
      <FadeUpOnScroll :delay="400">
        <JourneyPhaseBar v-model="phase.selectedPhase.value" />
      </FadeUpOnScroll>

      <!-- Timeline or Message -->
      <FadeUpOnScroll :delay="600">
        <JourneyTimeline v-if="phase.selectedPhase.value" />

        <div v-else class="h-[500px] py-12 text-center text-gray-500">
          Select a journey phase above to explore my learning path
        </div>
      </FadeUpOnScroll>
    </div>
  </section>
</template>
