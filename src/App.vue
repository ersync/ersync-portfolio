<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import TheNavigation from '@/components/desktop-navigation/TheNavigation.vue'
import IconSprite from '@/ui/base/IconSprite.vue'
import TheHero from '@/components/sections/TheHero.vue'
import TheAbout from '@/components/sections/TheAbout.vue'
import TheProjects from '@/components/sections/TheProjects.vue'
import TheJourney from '@/components/sections/TheJourney.vue'
import TheContactMe from '@/components/sections/TheContactMe.vue'
import TheFooter from '@/components/sections/TheFooter.vue'
import MobileNavigation from '@/components/mobile-navigation/MobileNavigation.vue'

import bgDesktop from '@/assets/images/hero/bg-desktop.png'
import bgMobile from '@/assets/images/hero/bg-mobile.png'

import skeletonLoader from '@/assets/images/projects/skeleton-loader.png'
import tmdbClone from '@/assets/images/projects/tmdb-clone.png'
import portfolio from '@/assets/images/projects/portfolio.png'
import portfolioDark from '@/assets/images/projects/portfolio-dark.png'
import persogenApi from '@/assets/images/projects/persogen-api.png'
import persianCoffeeshop from '@/assets/images/projects/persian-coffeeshop.png'
import vueChatlog from '@/assets/images/projects/vue-chatlog.png'

const isLoading = ref(true)
const themeStore = useThemeStore()

onMounted(async () => {
  try {
    const MIN_TIME = 2000
    const MAX_TIME = 6000

    const allImages = [
      bgDesktop, bgMobile, skeletonLoader, tmdbClone,
      portfolio, portfolioDark, persogenApi,
      persianCoffeeshop, vueChatlog
    ]

    const loadSingleImage = (src: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img: HTMLImageElement = new Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src = src
      })
    }

    const loadAllImages = Promise.all(
      allImages.map(src => loadSingleImage(src))
    )

    const minWaitTime = new Promise(
      resolve => setTimeout(resolve, MIN_TIME)
    )

    const maxWaitTime = new Promise(
      resolve => setTimeout(resolve, MAX_TIME)
    )

    const successCondition = Promise.all([
      loadAllImages,
      minWaitTime
    ])

    await Promise.race([
      successCondition,
      maxWaitTime
    ])

    isLoading.value = false
  } catch (error) {
    console.error('Loading error:', error)
    isLoading.value = false
  }
})
</script>

<template>
  <!-- Loading Screen -->
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
    :class="[
      themeStore.isDark ? 'bg-[#121212]' : 'bg-white',
      { 'opacity-100': isLoading, 'opacity-0 pointer-events-none': !isLoading }
    ]"
  >
    <div class="flex flex-col items-center space-y-4">
      <div class="relative size-16">
        <div class="absolute inset-0 animate-ping rounded-full bg-teal-500/30" />
        <div class="absolute inset-2 animate-pulse rounded-full bg-teal-500/50" />
        <div
          class="absolute inset-4 animate-spin rounded-full border-2 border-transparent border-t-teal-500"
        />
      </div>
      <p :class="themeStore.isDark ? 'text-gray-400' : 'text-gray-500'">Loading amazing stuff...</p>
    </div>
  </div>

  <!-- Main Content -->
  <div
    v-else
    class="transition-opacity duration-500"
    :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
  >
    <MobileNavigation />
    <IconSprite />
    <TheNavigation />
    <TheHero />
    <TheAbout />
    <TheProjects />
    <TheJourney />
    <TheContactMe />
    <TheFooter />
  </div>
</template>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}
</style>
