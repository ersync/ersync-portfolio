<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import MileStoneCard from '@/components/sections/journey/JourneyTimeline/MileStoneCard.vue'
import { usePhaseStore } from '@/stores/phaseStore'

const phase = usePhaseStore()
const timelineRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Reset animations on phase change
watch(
  () => phase.selectedPhase.value,
  () => {
    isVisible.value = false
    setTimeout(() => {
      isVisible.value = true
    }, 50)
  }
)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (timelineRef.value) {
    observer.observe(timelineRef.value)
  }
})
</script>

<template>
  <div ref="timelineRef" class="relative" :class="{ 'timeline-visible': isVisible }">
    <!-- Main vertical line -->
    <div
      class="timeline-line absolute inset-y-0 left-4 w-1"
      :style="{ backgroundColor: `${phase.currentPhaseColor.value}80` }"
    />

    <!-- Timeline items -->
    <div class="space-y-8">
      <div
        v-for="(milestone, index) in phase.currentPhaseContent.value?.milestones"
        :key="milestone.title"
        class="milestone-item relative pl-12"
        :style="{ animationDelay: `${index * 100 + 300}ms` }"
      >
        <!-- Timeline node/point -->
        <div class="timeline-node absolute left-2.5 top-4 z-10">
          <div
            class="relative size-4 rounded-full"
            :style="{ backgroundColor: phase.currentPhaseColor.value }"
          >
            <div
              class="absolute -left-1/2 -top-1/2 size-8 animate-ping rounded-full opacity-20"
              :style="{ backgroundColor: phase.currentPhaseColor.value }"
            />
          </div>
        </div>

        <!-- Connector line -->
        <div
          class="connector absolute left-4 top-6 h-px w-8"
          :style="{
            backgroundColor: phase.currentPhaseColor.value,
            animationDelay: `${index * 100 + 300}ms`
          }"
        />

        <div class="milestone-card" :style="{ animationDelay: `${index * 120 + 350}ms` }">
          <MileStoneCard :milestone-data="milestone" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Initial states */
.timeline-line {
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
}

.timeline-node {
  opacity: 0;
  transform: scale(0);
}

.milestone-item {
  opacity: 0;
  transform: translateX(-20px);
}

.connector {
  transform: scaleX(0);
  transform-origin: left;
  opacity: 0;
}

.milestone-card {
  opacity: 0;
  transform: translateX(-10px);
}

/* Animation triggers */
.timeline-visible .timeline-line {
  animation: growLine 0.5s linear forwards;
}

.timeline-visible .timeline-node {
  animation: scaleIn 0.2s ease-out forwards;
}

.timeline-visible .milestone-item {
  animation: slideIn 0.3s ease-out forwards;
}

.timeline-visible .connector {
  animation: growConnector 0.2s ease-out forwards;
}

.timeline-visible .milestone-card {
  animation: fadeSlideIn 0.3s ease-out forwards;
}

@keyframes growLine {
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes scaleIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes growConnector {
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes fadeSlideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
