<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="mb-12">
    <div class="mb-1 flex items-center justify-start gap-2">
      <div class="h-7 w-[2.5px] rounded-md bg-teal-500" />
      <h2 class="font-VarelaRound text-3xl font-bold text-gray-800 dark:text-[#E0E0E0] sm:text-3xl">
        {{ title }}
      </h2>
    </div>
    <p class="text-sm text-gray-400/80 sm:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
