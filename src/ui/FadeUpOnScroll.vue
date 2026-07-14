<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  }
})

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!elementRef.value || !('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting
  })

  observer.observe(elementRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
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
