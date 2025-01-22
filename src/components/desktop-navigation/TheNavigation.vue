<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import type { DebouncedFunc } from 'lodash'
import NavigationItem from '@/components/desktop-navigation/NavigationItem.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

const navigation = useNavigationStore()

const sections: NavItemName[] = ['home', 'about', 'projects', 'journey', 'contact']

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
