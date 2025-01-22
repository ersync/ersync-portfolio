<template>
  <div
    class="w-[47%] rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur dark:bg-[#1A1A1A]/80 dark:shadow-lg dark:shadow-teal-500/5 dark:backdrop-blur-xl"
  >
    <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">
      {{ title }}
    </div>
    <div class="text-sm text-gray-500 dark:text-gray-400">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
