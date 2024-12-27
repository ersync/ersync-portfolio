<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import NavItem from '@/components/navigation/NavItem.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

const navigation = useNavigationStore()

const sections: NavItemName[] = ['home', 'about', 'projects', 'services', 'contact']

const handleScroll = () => {
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId)

    if (element) {
      const rect = element.getBoundingClientRect()

      if (rect.top <= 50 && rect.bottom >= 50) {
        navigation.setActiveSection(sectionId)
      }
    }
  })
}

const debouncedScroll = debounce(handleScroll, 200)

onMounted(() => {
  window.addEventListener('scroll', debouncedScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll)
  debouncedScroll.cancel()
})
</script>

<template>
  <header class="fixed top-1/2 z-50 ml-3 hidden -translate-y-1/2 md:block">
    <nav>
      <ul class="flex flex-col items-start justify-center gap-y-2">
        <NavItem
          v-for="section in sections"
          :key="section"
          :name="section"
        />
      </ul>
    </nav>
  </header>
</template>
