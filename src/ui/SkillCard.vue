<script lang="ts" setup="">
import BaseIcon from '@/ui/base/BaseIcon.vue'
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  iconName: string
  iconColor: string
  iconBgColor: string
  backgroundColor: string
  shadowColor: ShadowColor
}
const props = defineProps<Props>()

type ShadowColor = 'red' | 'green' | 'blue' | 'cyan'

const shadowVariants: Record<ShadowColor, string> = {
  red: 'shadow-[0_2px_4px_-1px_rgba(251,113,133,0.2)]',
  green: 'shadow-[0_2px_4px_-1px_rgba(52,211,153,0.2)]',
  blue: 'shadow-[0_2px_4px_-1px_rgba(59,130,246,0.2)]',
  cyan: 'shadow-[0_2px_4px_-1px_rgba(34,211,238,0.2)]'
} as const

const shadowClass = computed((): string => {
  return shadowVariants[props.shadowColor]
})

</script>

<template>
  <div
    class="group flex items-center space-x-3 rounded-lg p-3 backdrop-blur transition-all hover:shadow-md"
    :class="shadowClass"
    :style="{ 'background-color': backgroundColor }"
  >
    <div
      class="flex size-10 items-center justify-center rounded-lg"
      :style="{ 'background-color': iconBgColor }"
    >
      <base-icon :name="iconName" :color="iconColor" size="24px" />
    </div>
    <div>
      <div class="max-sm:text-[12px] font-medium text-gray-900 ">
        {{ title }}
      </div>

      <div class="max-sm:text-[12px] text-sm text-gray-500/90">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
