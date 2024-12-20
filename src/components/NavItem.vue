<script lang="ts" setup>
import { computed } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'

type NavItemName = 'home' | 'about' | 'projects' | 'contact' | 'services'

interface Props {
  name: NavItemName
}

const props = withDefaults(defineProps<Props>(), {})

const capitalizedName = computed(() => {
  return props.name.charAt(0).toUpperCase() + props.name.slice(1)
})
</script>

<template>
  <li
    class="group flex w-[55.19px] cursor-pointer items-center justify-start overflow-hidden rounded-full bg-white p-[1.1rem] text-[#45505b] transition-[width] duration-300 hover:w-full hover:bg-[#97C4B8] hover:text-white"
  >
    <BaseIcon :name="name" :color="'currentColor'" class="shrink-0" />
    <span
      class="pl-2 font-OpenSans text-[0.9rem] font-semibold text-white group-hover:inline-block"
      >{{ capitalizedName }}</span
    >
  </li>
</template>

<style scoped></style>
