<script lang="ts" setup="">
import HighlightCard from '@/ui/base/HighlightCard.vue'
</script>

<template>
  <div class="flex h-full flex-wrap items-stretch justify-center gap-4 sm:shrink-0 lg:max-w-[50%]">
    <div
      class="w-[47%] rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur dark:bg-[#1A1A1A]/80 dark:shadow-lg dark:shadow-teal-500/5 dark:backdrop-blur-xl"
    >
      <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">
        Fu<span class="relative font-bold text-red-400/90"
          >ll
          <span class="absolute left-[2px] top-[7.2px] h-[2px] w-[8px] bg-red-400/50" />
          <span class="absolute left-[2px] top-[12.4px] h-[2px] w-[8px] bg-red-400/50" />
          <span class="absolute left-[2px] top-[17.5px] h-[2px] w-[8px] bg-red-400/50" />
        </span>
        Stack
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400">Developer</div>
    </div>

    <HighlightCard title="Team" subtitle="Player" />
    <HighlightCard title="2+ Years" subtitle="Experience" />
    <HighlightCard title="Problem" subtitle="Solver" />
  </div>
</template>

<style scoped></style>
