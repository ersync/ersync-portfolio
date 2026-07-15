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

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return

      isVisible.value = true
      observer?.disconnect()
    },
    { threshold: 0.12 }
  )

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
      'transition-all duration-600 ease-out',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
    ]"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>
