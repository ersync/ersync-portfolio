<script setup lang="ts">
import TimelineDesktop from '@/components/sections/journey/JourneyTimeline/TimelineDesktop.vue'
import TimelineMobile from '@/components/sections/journey/JourneyTimeline/TimelineMobile.vue'
</script>

<template>
  <div class="relative w-full">
    <TimelineDesktop class="hidden custom-md:block" />
    <TimelineMobile class="custom-md:hidden" />
  </div>
</template>
