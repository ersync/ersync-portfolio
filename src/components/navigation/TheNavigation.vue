<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'
// Import type definition for the debounced function
import type { DebouncedFunc } from 'lodash'
import NavigationItem from '@/components/navigation/NavigationItem.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

// Get the navigation store instance
const navigation = useNavigationStore()

// Define our section names with proper typing
const sections: NavItemName[] = ['home', 'about', 'projects', 'services', 'contact']

// Define our scroll handler with explicit return type
const handleScroll = (): void => {
  sections.forEach((sectionId) => {
    // Get the DOM element for each section
    const element = document.getElementById(sectionId)
    if (element) {
      // Get the element's position relative to the viewport
      const rect = element.getBoundingClientRect()
      // Check if the section is in view (within 50px of the top)
      if (rect.top <= 50 && rect.bottom >= 50) {
        navigation.setActiveSection(sectionId)
      }
    }
  })
}

// Create our debounced scroll handler with proper typing
// DebouncedFunc tells TypeScript this is a debounced version of our original function
const debouncedScroll: DebouncedFunc<typeof handleScroll> = debounce(handleScroll, 200)

// Set up scroll listener when component mounts
onMounted(() => {
  window.addEventListener('scroll', debouncedScroll as EventListener)
  // Call once immediately to set initial active section
  handleScroll()
})

// Clean up scroll listener when component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll as EventListener)
  // Cancel any pending debounced calls
  debouncedScroll.cancel()
})
</script>

<template>
  <header class="fixed top-1/2 z-50 ml-3 hidden -translate-y-1/2 md:block">
    <nav>
      <ul class="flex flex-col items-start justify-center gap-y-2">
        <NavigationItem v-for="section in sections" :key="section" :name="section" />
      </ul>
    </nav>
  </header>
</template>
