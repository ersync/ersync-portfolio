<template>
  <li @click="$emit('navigate', item.name)">
    <a
      class="group flex items-center space-x-3 rounded-xl p-3 transition-all duration-300"
      :class="[
        activeSection === item.name ? (isDark ? 'bg-white/5' : 'bg-white/70') : '',
        isDark
          ? 'hover:bg-white/5 hover:shadow-teal-900/30'
          : 'hover:bg-white/70 hover:shadow-teal-100/80',
        'hover:shadow-sm'
      ]"
    >
      <div
        class="flex size-8 items-center justify-center rounded-xl transition-all duration-300"
        :class="[
          isDark
            ? 'border-teal-900/30 bg-gradient-to-br from-gray-800 to-gray-900/40 group-hover:border-teal-800'
            : 'border-teal-50 bg-gradient-to-br from-gray-50 to-white/40 group-hover:border-teal-100',
          'border shadow-[0_2px_8px_-1px_rgba(0,0,0,0.10)] group-hover:shadow-md'
        ]"
      >
        <font-awesome-icon
          class="size-[14px]"
          :class="[
            activeSection === item.name
              ? isDark
                ? 'text-teal-400'
                : 'text-teal-500'
              : isDark
                ? 'text-teal-400/30'
                : 'text-teal-500/40'
          ]"
          :icon="['fas', item.icon]"
        />
      </div>
      <div>
        <span
          class="block font-VarelaRound text-sm font-medium"
          :class="[
            activeSection === item.name
              ? isDark
                ? 'text-teal-400'
                : 'text-teal-500'
              : isDark
                ? 'text-gray-400'
                : 'text-gray-700'
          ]"
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
  isDark: boolean
  activeSection: NavItemName
}>()

defineEmits<{
  navigate: [name: NavItemName]
}>()
</script>
