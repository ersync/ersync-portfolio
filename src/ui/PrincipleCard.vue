<script lang="ts" setup="">
import BaseIcon from '@/ui/base/BaseIcon.vue'
interface Props {
  iconName: string
  title: string
  description: string
  iconColor: string
  iconBgColor: string
}
const props = defineProps<Props>()
</script>

<template>
  <div
    class="rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center"
  >
    <div
      class="mb-4 flex size-12 items-center justify-center rounded-lg"
      :style="{ 'background-color': iconBgColor }"
    >
      <base-icon :name="props.iconName" :color="props.iconColor" size="24px" :stroke-width="1" />
    </div>
    <h4 class="mb-2 font-medium text-gray-900">
      {{ props.title }}
    </h4>
    <p class="text-[12px] text-gray-600">
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped></style>
