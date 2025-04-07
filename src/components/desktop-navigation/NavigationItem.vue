<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from '@/ui/base/BaseIcon.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

interface Props {
  name: NavItemName
  isSidebarExpanded?: boolean
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

const containerClasses = computed(() =>
  [
    'flex items-center relative cursor-pointer group transition-all duration-300 rounded-xl',
    isActive.value ? 'text-teal-400' : 'text-gray-400'
  ].join(' ')
)

const indicatorClasses = computed(() =>
  [
    'absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 rounded-full transition-all duration-300',
    isActive.value ? 'bg-teal-400' : 'bg-transparent group-hover:bg-teal-400/50'
  ].join(' ')
)

const textClasses = computed(() =>
  [
    'pl-3 font-medium text-sm whitespace-nowrap origin-left',
    isActive.value ? 'text-teal-400' : 'text-gray-400 group-hover:text-gray-200'
  ].join(' ')
)
</script>
<template>
  <li @click="handleClick" :class="containerClasses" class="py-2 px-3 w-full">
    <div :class="indicatorClasses"></div>
    <div class="flex items-center gap-3 pl-3">
      <div class="relative">
        <BaseIcon
          :name="name"
          class="size-5 transition-transform duration-300 group-hover:scale-110 z-10"
          :class="{
            'text-teal-400': isActive,
            'text-gray-400 group-hover:text-gray-200': !isActive
          }"
        />
        <div
          v-if="isActive"
          class="absolute inset-0 bg-teal-400/20 blur-md rounded-full size-5"
        ></div>
      </div>
      <span
        :class="textClasses"
        :style="{
          opacity: isSidebarExpanded ? '1' : '0',
          transform: isSidebarExpanded ? 'translateX(0)' : 'translateX(-10px)',
          width: isSidebarExpanded ? 'auto' : '0',
          transition: 'opacity 150ms ease-out, transform 200ms, width 200ms',
          transitionProperty: isSidebarExpanded ? 'all' : 'opacity, transform, width',
          transitionDuration: isSidebarExpanded ? '200ms' : '100ms'
        }"
      >
        {{ capitalizedName }}
      </span>
    </div>
  </li>
</template>
<style scoped>
li {
  position: relative;
  transition: all 0.3s ease;
}
li:hover {
  transform: translateX(2px);
}
li.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: theme('colors.teal.400');
  border-radius: 0 4px 4px 0;
}
</style>
