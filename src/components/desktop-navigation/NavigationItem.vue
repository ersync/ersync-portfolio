<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '@/ui/base/BaseIcon.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

interface Props {
  name: NavItemName
}
const props = defineProps<Props>()

const navigation = useNavigationStore()

const isActive = computed(() => navigation.activeSection === props.name)

const capitalizedName = computed(() => props.name.charAt(0).toUpperCase() + props.name.slice(1))

const handleClick = () => {
  navigation.setActiveSection(props.name)

  const targetSection = document.getElementById(props.name)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const hoverClasses = 'hover:w-full hover:bg-sage-light hover:text-white dark:hover:bg-teal-400'
const activeClasses = 'text-white bg-sage-light dark:bg-teal-400'
const inactiveClasses = 'text-charcoal bg-[#fcfcfc] dark:bg-[#2d3748] dark:text-white'

const navItemClasses = computed(() => {
  return [
    'group shadow-[0_2px_3px_1px_rgba(178,215,209,0.25)] dark:shadow-[0_2px_3px_1px_rgba(45,212,191,0.25)] flex size-14 cursor-pointer items-center justify-start overflow-hidden rounded-full p-[1.1rem] transition-[width] duration-300',
    isActive.value ? activeClasses : inactiveClasses,
    hoverClasses
  ].join(' ')
})

const labelClasses = computed(() => {
  return isActive.value ? 'text-sage-light dark:text-teal-400' : 'text-white dark:text-[#2d3748]'
})
</script>

<template>
  <li :class="navItemClasses" @click="handleClick">
    <!-- Icon -->
    <BaseIcon :name="name" color="currentColor" class="shrink-0" />

    <!-- Label -->
    <span
      class="pl-2 font-OpenSans text-[0.9rem] font-semibold transition-all duration-0 group-hover:inline-block group-hover:bg-sage-light group-hover:text-white dark:group-hover:bg-teal-400"
      :class="labelClasses"
    >
      {{ capitalizedName }}
    </span>
  </li>
</template>

<style scoped></style>
