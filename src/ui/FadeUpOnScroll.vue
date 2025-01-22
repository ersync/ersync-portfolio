<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

const elementRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(elementRef, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
})
</script>

<template>
  <div
    ref="elementRef"
    :class="[
      'transition-all duration-700 ease-out',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    ]"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>
