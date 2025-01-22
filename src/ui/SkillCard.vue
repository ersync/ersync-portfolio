<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'
import { computed } from 'vue'

type ColorScheme = 'red' | 'green' | 'blue' | 'cyan'

interface Props {
  title: string
  description: string
  iconName: string
  variant: ColorScheme
}

const props = defineProps<Props>()

const colorSchemes = {
  red: {
    bg: 'bg-[#fff1f2d9] dark:bg-[rgba(31,17,19,0.8)]',
    iconBg: 'bg-[#fae6e7] dark:bg-[#291719]',
    icon: 'text-[#e11d48] dark:text-[#ff4569]',
    shadow: 'shadow-[0_2px_4px_-1px_rgba(251,113,133,0.2)] dark:shadow-lg dark:shadow-rose-500/5'
  },
  green: {
    bg: 'bg-[#f4fff3e9] dark:bg-[rgba(17,31,19,0.8)]',
    iconBg: 'bg-[#e6fae7] dark:bg-[#162919]',
    icon: 'text-[#059669] dark:text-[#34d399]',
    shadow: 'shadow-[0_2px_4px_-1px_rgba(52,211,153,0.2)] dark:shadow-lg dark:shadow-emerald-500/5'
  },
  blue: {
    bg: 'bg-[#eff6ffd9] dark:bg-[rgba(17,19,31,0.8)]',
    iconBg: 'bg-[#e6e7fa] dark:bg-[#162133]',
    icon: 'text-[#2563eb] dark:text-[#60a5fa]',
    shadow: 'shadow-[0_2px_4px_-1px_rgba(59,130,246,0.2)] dark:shadow-lg dark:shadow-blue-500/5'
  },
  cyan: {
    bg: 'bg-[#eafefed9] dark:bg-[rgba(11,28,34,0.9)]',
    iconBg: 'bg-[#e6f7fa] dark:bg-[#162429]',
    icon: 'text-[#0891b2] dark:text-[#22d3ee]',
    shadow: 'shadow-[0_2px_4px_-1px_rgba(34,211,238,0.2)] dark:shadow-lg dark:shadow-cyan-500/5'
  }
} as const

const scheme = computed(() => colorSchemes[props.variant])
</script>

<template>
  <div
    class="group flex items-center space-x-3 rounded-lg p-3 backdrop-blur transition-all hover:shadow-md dark:backdrop-blur-xl"
    :class="[scheme.bg, scheme.shadow]"
  >
    <div
      class="flex size-10 items-center justify-center rounded-lg transition-colors"
      :class="scheme.iconBg"
    >
      <base-icon :name="iconName" :class="scheme.icon" size="24px" />
    </div>
    <div>
      <div class="font-medium text-gray-900 dark:text-gray-100 max-sm:text-[12px]">
        {{ title }}
      </div>
      <div class="text-sm text-gray-500/90 dark:text-gray-400 max-sm:text-[12px]">
        {{ description }}
      </div>
    </div>
  </div>
</template>
