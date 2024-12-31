import { defineStore } from 'pinia'
import { ref } from 'vue'

export type NavItemName = 'home' | 'about' | 'projects' | 'journey' | 'contact'

export const useNavigationStore = defineStore('navigation', () => {
  const activeSection = ref<NavItemName>('home')

  const setActiveSection = (section: NavItemName) => {
    activeSection.value = section
  }

  return {
    activeSection,
    setActiveSection
  }
})
