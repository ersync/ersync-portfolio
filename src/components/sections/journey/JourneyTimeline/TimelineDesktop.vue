<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import MileStoneCard from '@/components/sections/journey/JourneyTimeline/MileStoneCard.vue'
import { usePhaseStore } from '@/stores/phaseStore'

const phase = usePhaseStore()
const timelineRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

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
  <div
    ref="timelineRef"
    class="relative overflow-x-auto px-4"
    :class="{ 'timeline-visible': isVisible }"
  >
    <div class="relative">
      <div
        class="timeline-line absolute top-[234px] h-1 w-full -translate-y-1/2"
        :style="{ backgroundColor: phase.currentPhaseColor.value }"
      />

      <div
        class="relative flex min-h-[500px] items-center justify-start pb-8 lg:justify-between mt-10"
      >
        <div
          v-for="(milestone, index) in phase.currentPhaseContent.value?.milestones"
          :key="milestone.title"
          class="milestone-item relative w-[170px] first:ml-[60px] last:mr-[60px]"
          :style="{ animationDelay: `${index * 100 + 200}ms` }"
        >
          <div class="absolute left-[50%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
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

          <!-- Card Container -->
          <div
            class="milestone-card absolute left-1/2 w-[295px] -translate-x-1/2 custom-md:w-[275px] lg:w-[295px]"
            :class="[index % 2 === 0 ? '-top-8 -translate-y-full' : 'top-8']"
            :style="{ animationDelay: `${index * 120 + 250}ms` }"
          >
            <MileStoneCard :milestone-data="milestone" />

            <!-- Connector line -->
            <div
              class="connector absolute left-1/2 w-px"
              :class="[index % 2 === 0 ? 'top-full h-8' : 'bottom-full h-8']"
              :style="{ backgroundColor: phase.currentPhaseColor.value }"
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

.timeline-line {
  transform: scaleX(0);
  transform-origin: left;
  opacity: 1;
}

.milestone-item {
  opacity: 0;
  transform: translateY(20px);
}

.milestone-card {
  opacity: 0;
}

.connector {
  transform: scaleY(0);
  transform-origin: top;
}

.timeline-visible .timeline-line {
  animation: growLine 0.3s ease-out forwards;
}

.timeline-visible .milestone-item {
  animation: fadeInUp 0.3s ease-out forwards;
}

.timeline-visible .milestone-card {
  animation: fadeIn 0.3s ease-out forwards;
}

.timeline-visible .connector {
  animation: growConnector 0.2s ease-out forwards;
}

@keyframes growLine {
  from {
    transform: scaleX(0) translateY(-50%);
  }
  to {
    transform: scaleX(1) translateY(-50%);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes growConnector {
  to {
    transform: scaleY(1);
  }
}
</style>
