import { defineStore } from 'pinia'
import { ref } from 'vue'

export type NavItemName = 'home' | 'about' | 'projects' | 'contact' | 'services'

export const useNavigationStore = defineStore('navigation', () => {
  const activeSection = ref<NavItemName>('home')

  const setActiveSection = (section: NavItemName) => {
    console.log('Setting active section:', section) // Debug log
    activeSection.value = section
  }

  return {
    activeSection,
    setActiveSection
  }
})
