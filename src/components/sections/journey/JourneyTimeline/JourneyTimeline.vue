<script setup lang="ts">
import TimelineDesktop from '@/components/sections/journey/JourneyTimeline/TimelineDesktop.vue'
import TimelineMobile from '@/components/sections/journey/JourneyTimeline/TimelineMobile.vue'
</script>

<template>
  <Transition name="timeline" appear>
    <div class="relative w-full">
      <TimelineDesktop class="hidden custom-md:block" />
      <TimelineMobile class="custom-md:hidden" />
    </div>
  </Transition>
</template>

<style scoped>
.timeline-enter-active,
.timeline-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.timeline-enter-from,
.timeline-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
