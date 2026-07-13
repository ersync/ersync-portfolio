<script setup lang="ts">
import { computed } from 'vue'

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
</script>

<template>
  <div
    class="section-backdrop absolute inset-0 z-0 overflow-hidden"
    :style="backdropStyle"
    aria-hidden="true"
  >
    <div class="section-grid absolute inset-0" />
  </div>
</template>

<style scoped>
.section-backdrop {
  background:
    radial-gradient(circle at 8% 18%, var(--glow-primary), transparent 30rem),
    radial-gradient(circle at 92% 78%, var(--glow-secondary), transparent 32rem),
    linear-gradient(180deg, #050816 0%, #07101d 48%, #050914 100%);
}

.section-grid {
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.028) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 10%, transparent 74%);
}
</style>
