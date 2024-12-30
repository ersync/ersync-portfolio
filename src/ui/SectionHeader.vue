<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div>
    <div class="flex items-center justify-start gap-2">
      <div class="h-7 w-[2.5px] rounded-md bg-teal-500" />
      <h2 class="font-VarelaRound text-2xl font-bold text-gray-800 sm:text-3xl">
        {{ title }}
      </h2>
    </div>
    <p class="mb-16 mt-1 text-sm text-gray-600 sm:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
