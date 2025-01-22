<template>
  <div class="absolute inset-0 overflow-hidden">
    <div
      class="absolute -left-[70%] -top-[40%] size-[500px] rounded-full blur-3xl transition-colors duration-500"
      :class="isDark ? 'bg-teal-500/10' : 'bg-teal-300/20'"
    />
    <div
      class="absolute -right-[21%] top-[45%] h-[500px] w-[400px] rounded-full blur-3xl transition-colors duration-500"
      :class="isDark ? 'bg-pink-800/10' : 'bg-pink-300/25'"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()
</script>
