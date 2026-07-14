<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import NavigationItem from '@/components/desktop-navigation/NavigationItem.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

const navigation = useNavigationStore()
const sections: NavItemName[] = ['home', 'about', 'projects', 'journey', 'contact']
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries.find((entry) => entry.isIntersecting)
      if (!activeEntry) return

      navigation.setActiveSection(activeEntry.target.id as NavItemName)
    },
    { rootMargin: '-50px 0px -90% 0px' }
  )

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) observer?.observe(section)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
<template>
  <header class="fixed left-6 top-1/2 z-50 -translate-y-1/2 hidden min-[1350px]:block">
    <nav
      aria-label="Primary navigation"
      class="navigation-panel rounded-2xl border border-gray-800 bg-gray-900/80 px-4 py-6 shadow-xl shadow-teal-500/10 backdrop-blur-md transition-transform duration-300"
    >
      <ul class="flex flex-col items-start justify-center gap-y-4">
        <NavigationItem v-for="section in sections" :key="section" :name="section" />
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.navigation-panel:hover,
.navigation-panel:focus-within {
  transform: translateX(0.5rem);
}

.navigation-panel :deep(.navigation-label) {
  width: 0;
  opacity: 0;
  transform: translateX(-10px);
}

.navigation-panel:hover :deep(.navigation-label),
.navigation-panel:focus-within :deep(.navigation-label) {
  width: auto;
  opacity: 1;
  transform: translateX(0);
}
</style>
