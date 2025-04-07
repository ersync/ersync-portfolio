<template>
  <li @click="$emit('navigate', item.name)">
    <a
      class="group cursor-pointer flex items-center space-x-3 rounded-xl p-3 transition-all duration-300 hover:shadow-sm"
      :class="[
        activeSection === item.name ? 'bg-white/5' : '',
        'hover:bg-white/5 hover:shadow-teal-900/30'
      ]"
    >
      <div
        class="flex size-8 items-center justify-center rounded-xl border border-teal-900/30 bg-gradient-to-br from-gray-800 to-gray-900/40 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:border-teal-800 group-hover:shadow-md"
      >
        <font-awesome-icon
          class="size-[14px]"
          :class="[activeSection === item.name ? 'text-teal-400' : 'text-teal-400/30']"
          :icon="['fas', item.icon]"
        />
      </div>
      <div>
        <span
          class="block font-VarelaRound text-sm font-medium"
          :class="[activeSection === item.name ? 'text-teal-400' : 'text-gray-400']"
        >
          {{ item.text }}
        </span>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { NavItemName } from '@/stores/navigationStore'

interface MenuItem {
  text: string
  name: NavItemName
  icon: string
}

defineProps<{
  item: MenuItem
  activeSection: NavItemName
}>()

defineEmits<{
  navigate: [name: NavItemName]
}>()
</script>
