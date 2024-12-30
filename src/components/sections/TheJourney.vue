<script setup lang="ts">
import { useJourneyData } from '@/composables/useJourneyData'
import JourneyPhaseBar from '@/components/sections/journey/JourneyPhaseBar.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import JourneyStats from '@/components/sections/journey/JourneyStats.vue'
import JourneyTimeline from '@/components/sections/journey/JourneyTimeline/JourneyTimeline.vue'
import { provide } from 'vue'

const { selectedPhase, selectedPhaseContent, getStatusClass } = useJourneyData()

const stats = [
  { value: '10+', label: 'Technologies Mastered' },
  { value: '15+', label: 'Projects Completed' },
  { value: '1000+', label: 'Learning Hours' },
  { value: '300+', label: 'GitHub Contributions' }
]

provide('getStatusClass', getStatusClass)
provide('selectedPhaseContent', selectedPhaseContent)
</script>

<template>
  <section id="journey" class="relative min-h-screen w-full overflow-hidden bg-[#F7F9FB] py-16">
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(160deg, #f4fcfc 0%, #efeff2 35%, #f0f2f2 55%, #e4f1f2 100%);
        filter: blur(80px);
      "
    />
    <div class="container relative z-10 mx-auto">
      <SectionHeader
        title="Learning Journey & Growth"
        subtitle="Tracking my evolution from web fundamentals to full-stack expertise"
      />

      <JourneyStats :stats="stats" />

      <JourneyPhaseBar v-model="selectedPhase" />

      <JourneyTimeline v-if="selectedPhase" />

      <div v-else class="h-[500px] py-12 text-center text-gray-500">
        Select a journey phase above to explore my learning path
      </div>
    </div>
  </section>
</template>
