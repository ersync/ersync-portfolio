<script setup lang="ts">
import JourneyPhaseBar from '@/components/sections/journey/JourneyPhaseBar.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import JourneyStats from '@/components/sections/journey/JourneyStats.vue'
import JourneyTimeline from '@/components/sections/journey/JourneyTimeline/JourneyTimeline.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import { usePhaseStore } from '@/stores/phaseStore'
import { ref, onMounted } from 'vue'

const phase = usePhaseStore()
const stats = [
  { value: '10+', label: 'Technologies Mastered' },
  { value: '15+', label: 'Projects Completed' },
  { value: '1000+', label: 'Learning Hours' },
  { value: '300+', label: 'GitHub Contributions' }
]

const isMobile = ref(window.innerWidth < 768)

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
  <section id="journey" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>

      <div
        class="absolute -left-20 top-1/3 md:h-64 md:w-64 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl animate-float-reverse glow"
      ></div>
      <div
        class="absolute -right-20 bottom-1/3 md:h-72 md:w-72 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl animate-float-delay glow indigo-glow"
      ></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <!-- Bottom wave -->
      <div class="absolute bottom-0 left-0 h-[200px] w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-full w-full opacity-10">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,2,0,3.38Z"
            fill="url(#journeyBottomGradient)"
            class="shape-fill"
          ></path>
          <defs>
            <linearGradient id="journeyBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0d9488" stop-opacity="0.3" />
              <stop offset="50%" stop-color="#14b8a6" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

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
        <div
          class="backdrop-blur-sm rounded-xl p-4 bg-slate-800/30 border border-slate-700/50 shadow-sm mb-8"
        >
          <JourneyPhaseBar v-model="phase.selectedPhase.value" />
        </div>
      </FadeUpOnScroll>

      <!-- Timeline or Message -->
      <FadeUpOnScroll :delay="600">
        <JourneyTimeline v-if="phase.selectedPhase.value" />
        <div
          v-else
          class="h-[500px] py-12 text-center text-slate-400 backdrop-blur-sm rounded-xl p-6 bg-slate-800/30 border border-slate-700/50 shadow-sm mt-8"
        >
          Select a journey phase above to explore my learning path
        </div>
      </FadeUpOnScroll>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glow {
  filter: blur(40px);
  animation: glow-pulse 12s ease-in-out infinite;
  will-change: opacity, filter;
}

.indigo-glow {
  box-shadow: 0 0 60px 15px rgba(99, 102, 241, 0.12);
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.5;
    filter: blur(40px);
  }
  50% {
    opacity: 0.3;
    filter: blur(50px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(20px) translateX(-15px);
  }
}

@keyframes float-delay {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(15px);
  }
}

.animate-float-reverse {
  animation: float-reverse 24s ease-in-out infinite;
  will-change: transform;
}

.animate-float-delay {
  animation: float-delay 30s ease-in-out infinite;
  will-change: transform;
}
</style>
