<script setup lang="ts">
interface Props {
  name: string
  className?: string
  size?: number
  color?: string
  strokeWidth?: number
}

withDefaults(defineProps<Props>(), {
  size: 20,
  className: '',
  color: 'black',
  strokeWidth: 2
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    :color="color"
    :stroke-width="strokeWidth"
    aria-hidden="true"
    class="transition-all duration-100"
  >
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<style scoped></style>
