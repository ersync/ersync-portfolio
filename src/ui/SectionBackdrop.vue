<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type BackdropTone = 'teal' | 'violet' | 'amber' | 'blue'

const props = withDefaults(
  defineProps<{
    tone?: BackdropTone
  }>(),
  { tone: 'teal' }
)

const colors = {
  teal: ['rgba(20, 184, 166, 0.14)', 'rgba(14, 116, 144, 0.08)'],
  violet: ['rgba(139, 92, 246, 0.13)', 'rgba(37, 99, 235, 0.08)'],
  amber: ['rgba(245, 158, 11, 0.1)', 'rgba(139, 92, 246, 0.07)'],
  blue: ['rgba(59, 130, 246, 0.11)', 'rgba(6, 182, 212, 0.07)']
} as const

const backdropStyle = computed(() => ({
  '--glow-primary': colors[props.tone][0],
  '--glow-secondary': colors[props.tone][1]
}))
const toneClass = computed(() => `tone-${props.tone}`)

const backdrop = ref<HTMLElement>()
const isVisible = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry?.isIntersecting ?? false
    },
    { rootMargin: '0px 0px -16% 0px', threshold: 0.08 }
  )

  if (backdrop.value) observer.observe(backdrop.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div
    ref="backdrop"
    class="section-backdrop absolute inset-0 z-0 overflow-hidden"
    :class="[toneClass, { 'is-visible': isVisible }]"
    :style="backdropStyle"
    aria-hidden="true"
  >
    <div class="section-grid absolute inset-0" />
  </div>
</template>

<style scoped>
.section-backdrop {
  background: linear-gradient(180deg, transparent 0%, rgba(7, 16, 29, 0.72) 48%, transparent 100%);
}

.section-backdrop::before,
.section-backdrop::after {
  position: absolute;
  inset: 0;
  content: '';
  opacity: 0;
  transition:
    opacity 1.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.section-backdrop::before {
  background: radial-gradient(circle at 8% 18%, var(--glow-primary), transparent 30rem);
  transform: translate3d(-3rem, 1.5rem, 0) scale(0.9);
}

.section-backdrop::after {
  background: radial-gradient(circle at 92% 78%, var(--glow-secondary), transparent 32rem);
  transform: translate3d(3rem, -1.5rem, 0) scale(0.9);
}

.section-backdrop.is-visible::before {
  opacity: 0.45;
  transform: translate3d(0, 0, 0) scale(1);
  transition-delay: 320ms;
}

.section-backdrop.is-visible::after {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  transition-delay: 620ms;
}

.section-grid {
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.028) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 10%, transparent 74%);
}

@media (min-width: 640px) {
  .section-backdrop.is-visible::before {
    opacity: 1;
  }

  .section-backdrop.tone-amber::before {
    background: radial-gradient(circle at 8% 18%, rgba(245, 158, 11, 0.12), transparent 30rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-backdrop::before,
  .section-backdrop::after {
    transition: none;
  }
}
</style>
