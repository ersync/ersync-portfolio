<script setup lang="ts">
interface Props {
  name: string
  className?: string
  size?: string
  color?: string
  strokeWidth?: number
  stroke?: string
}

withDefaults(defineProps<Props>(), {
  size: '20px',
  className: '',
  color: '',
  strokeWidth: 2,
  stroke: ''
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    :color="color"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    aria-hidden="true"
    class="transition-all duration-100"
  >
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<style scoped></style>
