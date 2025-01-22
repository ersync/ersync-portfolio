<template>
  <div
    v-show="isOpen"
    @click="$emit('click')"
    class="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm transition-opacity duration-300"
    :class="isOpen ? 'opacity-100' : 'opacity-0'"
  />
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  click: []
}>()
</script>
