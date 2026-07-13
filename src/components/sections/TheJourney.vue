<script setup lang="ts">
import JourneyPhaseBar from '@/components/sections/journey/JourneyPhaseBar.vue'
import JourneyStats from '@/components/sections/journey/JourneyStats.vue'
import JourneyTimeline from '@/components/sections/journey/JourneyTimeline/JourneyTimeline.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import { usePhaseStore } from '@/stores/phaseStore'

const phase = usePhaseStore()
const stats = [
  { value: '10+', label: 'Technologies used' },
  { value: '15+', label: 'Projects completed' },
  { value: '4+', label: 'Years learning' },
  { value: '300+', label: 'GitHub contributions' }
]
</script>

<template>
  <section id="journey" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <SectionBackdrop tone="amber" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="03 / Journey"
          title="Learning in public."
          subtitle="A practical path from web fundamentals to full-stack product work."
        />
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="150">
        <JourneyStats :stats="stats" />
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="250">
        <div class="mb-8">
          <JourneyPhaseBar v-model="phase.selectedPhase.value" />
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="350">
        <JourneyTimeline v-if="phase.selectedPhase.value" />
      </FadeUpOnScroll>
    </div>
  </section>
</template>
