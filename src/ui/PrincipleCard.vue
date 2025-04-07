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
    bg: 'bg-[#1A1A1A]/90',
    iconBg: 'bg-[#172919]',
    icon: 'text-[#2dd4bf]',
    shadow: 'shadow-lg shadow-teal-500/5'
  },
  rose: {
    bg: 'bg-[#1A1A1A]/90',
    iconBg: 'bg-[#291719]',
    icon: 'text-[#fb7185]',
    shadow: 'shadow-lg shadow-rose-500/5'
  },
  blue: {
    bg: 'bg-[#1A1A1A]/90',
    iconBg: 'bg-[#171929]',
    icon: 'text-[#60a5fa]',
    shadow: 'shadow-lg shadow-blue-500/5'
  }
} as const
const scheme = computed(() => colorSchemes[props.variant])
</script>
<template>
  <div class="rounded-lg p-6 backdrop-blur-xl" :class="[scheme.bg, scheme.shadow]">
    <div
      class="mb-4 flex size-12 items-center justify-center rounded-lg transition-colors"
      :class="scheme.iconBg"
    >
      <base-icon :name="iconName" :class="scheme.icon" size="24px" :stroke-width="1" />
    </div>
    <h4 class="mb-2 font-medium text-gray-100">
      {{ title }}
    </h4>
    <p class="text-[12px] text-gray-400">
      {{ description }}
    </p>
  </div>
</template>
