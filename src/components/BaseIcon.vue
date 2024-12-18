<script setup lang="ts">

type NavigationIconName = "home" | "about" | "project" | "contact" | "services"
interface Props {
  name: NavigationIconName,
  className?: string,
  size?: number,
  color?: string,
  strokeWidth?: number
}

withDefaults(defineProps<Props>(),{
  size: 20,
  className: "",
  color: "black",
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
  >
    <use :href="`#${name}`" />
  </svg>
</template>

<style scoped>

</style>
