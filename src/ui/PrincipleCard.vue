<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'

defineProps<{
  index: string
  title: string
  description: string
  iconName: string
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950/45 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/20 hover:bg-slate-900/70 sm:p-6"
  >
    <div class="flex items-center justify-between">
      <span class="font-mono text-[10px] text-slate-600">{{ index }}</span>
      <BaseIcon
        :name="iconName"
        class="text-slate-600 transition-colors group-hover:text-cyan-300"
        size="20px"
        :stroke-width="1"
      />
    </div>
    <div class="mt-9 h-px w-10 bg-slate-700 transition-colors group-hover:bg-cyan-300/60" />
    <h4 class="mt-4 font-semibold text-slate-100">{{ title }}</h4>
    <p class="mt-2 text-sm leading-6 text-slate-500">{{ description }}</p>
  </article>
</template>
