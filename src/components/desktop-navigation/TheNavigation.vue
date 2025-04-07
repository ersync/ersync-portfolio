<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { debounce } from 'lodash'
import type { DebouncedFunc } from 'lodash'
import NavigationItem from '@/components/desktop-navigation/NavigationItem.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'
import { useDeviceDetection } from '@/composables/useDeviceDetection'

const navigation = useNavigationStore()
const { isMobileDevice } = useDeviceDetection()
const sections: NavItemName[] = ['home', 'about', 'projects', 'journey', 'contact']
const isHovered = ref(false)
const showText = ref(false)

let hoverTimer: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = () => {
  hoverTimer = setTimeout(() => {
    isHovered.value = true
    setTimeout(() => {
      showText.value = true
    }, 50)
  }, 100)
}

const handleMouseLeave = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  showText.value = false
  setTimeout(() => {
    isHovered.value = false
  }, 50)
}

const handleScroll = (): void => {
  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 50 && rect.bottom >= 50) {
        navigation.setActiveSection(sectionId)
      }
    }
  })
}

const debouncedScroll: DebouncedFunc<typeof handleScroll> = debounce(handleScroll, 200)

onMounted(() => {
  window.addEventListener('scroll', debouncedScroll as EventListener)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll as EventListener)
  debouncedScroll.cancel()
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }
})
</script>
<template>
  <header
    v-show="!isMobileDevice"
    class="fixed left-6 top-1/2 z-50 -translate-y-1/2 hidden min-[1350px]:block"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <nav
      class="backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-2xl px-4 py-6 shadow-xl shadow-teal-500/10 transition-all duration-300"
      :class="{ 'nav-expanded': isHovered }"
    >
      <ul class="flex flex-col items-start justify-center gap-y-4">
        <NavigationItem
          v-for="section in sections"
          :key="section"
          :name="section"
          :is-sidebar-expanded="showText"
        />
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.nav-expanded {
  transform: translateX(0.5rem);
}
</style>
