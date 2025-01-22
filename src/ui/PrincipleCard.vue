<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '@/ui/base/BaseIcon.vue'

type ColorScheme = 'teal' | 'rose' | 'blue'

interface Props {
  title: string
  description: string
  iconName: string
  variant: ColorScheme
}

const props = defineProps<Props>()

const colorSchemes = {
  teal: {
    bg: 'bg-white/60 dark:bg-[#1A1A1A]/90',
    iconBg: 'bg-[#f0fdfa] dark:bg-[#172919]',
    icon: 'text-[#0d9488] dark:text-[#2dd4bf]',
    shadow: 'shadow-sm dark:shadow-lg dark:shadow-teal-500/5'
  },
  rose: {
    bg: 'bg-white/60 dark:bg-[#1A1A1A]/90',
    iconBg: 'bg-[#fff1f288] dark:bg-[#291719]',
    icon: 'text-[#e11d48] dark:text-[#fb7185]',
    shadow: 'shadow-sm dark:shadow-lg dark:shadow-rose-500/5'
  },
  blue: {
    bg: 'bg-white/60 dark:bg-[#1A1A1A]/90',
    iconBg: 'bg-[#dbeafe88] dark:bg-[#171929]',
    icon: 'text-[#2563eb] dark:text-[#60a5fa]',
    shadow: 'shadow-sm dark:shadow-lg dark:shadow-blue-500/5'
  }
} as const

const scheme = computed(() => colorSchemes[props.variant])
</script>

<template>
  <div
    class="rounded-lg p-6 backdrop-blur transition-all dark:backdrop-blur-xl"
    :class="[scheme.bg, scheme.shadow]"
  >
    <div
      class="mb-4 flex size-12 items-center justify-center rounded-lg transition-colors"
      :class="scheme.iconBg"
    >
      <base-icon :name="iconName" :class="scheme.icon" size="24px" :stroke-width="1" />
    </div>
    <h4 class="mb-2 font-medium text-gray-900 dark:text-gray-100">
      {{ title }}
    </h4>
    <p class="text-[12px] text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>
