<template>
  <div class="-ml-3">
    <img src="@/assets/images/logos/logo-dark.png" class="mb-2 h-12" alt="" />
    <p class="text-sm font-medium" :class="isDark ? 'text-teal-400' : 'text-teal-600'">
      <span>•</span> Full Stack Developer
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()
</script>
