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

const isLoading = ref(true)
const themeStore = useThemeStore()

onMounted(async () => {
  try {
    themeStore.init()

    const images = Array.from(document.images)
    const unloadedImages = images.filter((img) => !img.complete)
    const IMAGE_TIMEOUT = 2000

    const loadImages = Promise.all(
      unloadedImages.map((img) =>
        Promise.race([
          new Promise((resolve) => {
            img.onload = () => resolve(true)
            img.onerror = () => resolve(false)
          }),
          new Promise((resolve) => setTimeout(() => resolve(false), IMAGE_TIMEOUT))
        ])
      )
    )

    const minLoadingTime = new Promise((resolve) => setTimeout(() => resolve(true), 2000))

    await Promise.all([loadImages, minLoadingTime])
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
    class="fixed inset-0 z-50 flex items-center justify-center"
    :class="themeStore.isDark ? 'bg-[#121212]' : 'bg-white'"
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
    :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
    class="transition-opacity duration-500"
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
