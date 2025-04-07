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
    gradientFrom: 'from-rose-500/10',
    gradientTo: 'to-rose-500/5',
    iconGradient: 'from-rose-400 to-red-500',
    textAccent: 'text-rose-400',
    borderAccent: 'border-rose-400/10',
    hoverGlow: 'hover:shadow-rose-500/20'
  },
  green: {
    gradientFrom: 'from-emerald-500/10',
    gradientTo: 'to-emerald-500/5',
    iconGradient: 'from-emerald-400 to-green-500',
    textAccent: 'text-emerald-400',
    borderAccent: 'border-emerald-400/10',
    hoverGlow: 'hover:shadow-emerald-500/20'
  },
  blue: {
    gradientFrom: 'from-blue-500/10',
    gradientTo: 'to-blue-500/5',
    iconGradient: 'from-blue-400 to-indigo-500',
    textAccent: 'text-blue-400',
    borderAccent: 'border-blue-400/10',
    hoverGlow: 'hover:shadow-blue-500/20'
  },
  cyan: {
    gradientFrom: 'from-cyan-500/10',
    gradientTo: 'to-cyan-500/5',
    iconGradient: 'from-cyan-400 to-teal-500',
    textAccent: 'text-cyan-400',
    borderAccent: 'border-cyan-400/10',
    hoverGlow: 'hover:shadow-cyan-500/20'
  }
} as const
const scheme = computed(() => colorSchemes[props.variant])
</script>
<template>
  <div
    class="group relative flex items-center gap-4 overflow-hidden rounded-2xl border bg-gray-900/40 p-4 backdrop-blur-xl transition-all duration-300 ease-out"
    :class="[`bg-gradient-to-br ${scheme.gradientFrom} ${scheme.gradientTo}`, scheme.borderAccent]"
  >
    <!-- Glass morphism design element -->
    <div
      class="absolute inset-0 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 bg-gray-800/5"
    ></div>
    <!-- Modern floating icon with gradient -->
    <div
      class="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-gray-800/80 shadow-sm transition-all duration-300"
    >
      <div
        class="absolute inset-0 rounded-xl bg-gradient-to-br opacity-10 transition-opacity duration-300 group-hover:opacity-20"
        :class="`${scheme.iconGradient}`"
      ></div>
      <base-icon
        :name="iconName"
        :class="`${scheme.textAccent} transition-all duration-300 group-hover:scale-110`"
        size="22px"
      />
    </div>
    <!-- Content with modern typography -->
    <div class="flex flex-col">
      <h4 class="mb-0.5 font-medium tracking-tight text-white max-sm:text-sm">
        {{ title }}
      </h4>
      <p class="text-sm font-normal text-gray-300/90 max-sm:text-xs">
        {{ description }}
      </p>
    </div>
  </div>
</template>
