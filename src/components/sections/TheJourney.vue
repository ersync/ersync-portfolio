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
  { value: '10+', label: 'Projects Completed' },
  { value: '1000+', label: 'Learning Hours' },
  { value: '500+', label: 'GitHub Contributions' }
]

provide('getStatusClass', getStatusClass)
provide('selectedPhaseContent', selectedPhaseContent)
</script>

<template>
  <section id="journey" class="min-h-screen bg-gradient-to-b from-gray-100 to-white px-4 py-16">
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
