import { ref } from 'vue'

export type NavItemName = 'home' | 'about' | 'projects' | 'experience' | 'contact'

const activeSection = ref<NavItemName>('home')

const navigationStore = {
  get activeSection() {
    return activeSection.value
  },

  setActiveSection(section: NavItemName) {
    activeSection.value = section
  }
}

export const useNavigationStore = () => navigationStore
