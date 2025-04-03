<template>
  <div>
    <!-- Mobile Navigation Bar -->
    <nav
      class="mobile-nav fixed inset-x-0 z-50 flex h-[60px] items-center justify-between bg-white/85 px-4 shadow-[0_0_15px_rgba(20,184,166,0.1)] backdrop-blur-lg dark:bg-[#1b1b1fdd] md:flex-row-reverse"
      :class="{ 'nav-up': !isVisible }"
    >
      <!-- Theme Toggle -->
      <ThemeToggle
        :is-dark="themeStore.isDark"
        :is-hovered="isHovered"
        @toggle="themeStore.toggleTheme"
        @hover="(value) => (isHovered = value)"
      />

      <div class="-ml-3 w-24 md:ml-0">
        <img src="@/assets/images/logos/logo-light.png" class="object-fit dark:hidden" alt="" />
        <img src="@/assets/images/logos/logo-dark.png" class="hidden dark:block" alt="" />
      </div>

      <!-- Menu Toggle Button -->
      <MenuButton class="md:hidden" :is-open="isOpen" @toggle="toggleMenu" />
    </nav>

    <!-- Mobile Menu Backdrop -->
    <MenuBackdrop class="md:hidden" :is-open="isOpen" @click="toggleMenu" />

    <!-- Mobile Navigation Menu -->
    <nav
      class="ease-out-cubic fixed left-0 top-0 z-50 h-full w-[67%] max-w-[350px] transition-all duration-500 md:hidden"
      :class="[
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'border-r border-white/10 dark:border-white/5',
        'bg-gradient-to-br from-gray-50/85 to-gray-100/85 dark:from-[#161120] dark:to-[#1b1d1ccc]',
        'backdrop-blur-xl'
      ]"
      @click.stop
    >
      <!-- Background Decorative Elements -->
      <BackgroundDecoration :is-dark="themeStore.isDark" />

      <!-- Menu Content -->
      <div class="relative flex h-full select-none flex-col py-8 pl-8 pr-5">
        <!-- Profile Header -->
        <ProfileHeader :is-dark="themeStore.isDark" />

        <!-- Divider -->
        <div
          class="-ml-3 mb-4 mt-7 h-px w-full"
          :class="themeStore.isDark ? 'bg-white/10' : 'bg-black/5'"
        />

        <!-- Navigation Menu Items -->
        <nav class="-ml-4 flex-1">
          <ul class="space-y-1">
            <NavigationItem
              v-for="item in menuItems"
              :key="item.name"
              :item="item"
              :is-dark="themeStore.isDark"
              :active-section="navigation.activeSection"
              @navigate="handleNavigation"
            />
          </ul>
        </nav>

        <!-- Version Footer -->
        <div class="mt-6 flex items-center justify-center">
          <span class="text-xs font-light tracking-wider text-gray-500 dark:text-gray-400">
            ersync-portfolio {{ portfolioVersion }}
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'
import { version } from '../../../package.json'

import ThemeToggle from '@/components/mobile-navigation/ThemeToggle.vue'
import MenuButton from '@/components/mobile-navigation/MenuButton.vue'
import MenuBackdrop from '@/components/mobile-navigation/MenuBackdrop.vue'
import BackgroundDecoration from '@/components/mobile-navigation/BackgroundDecoration.vue'
import ProfileHeader from '@/components/mobile-navigation/ProfileHeader.vue'
import NavigationItem from '@/components/mobile-navigation/NavigationItem.vue'

// Constants
const SCROLL_DELTA = 30
const NAVBAR_HEIGHT = 60
const NAVIGATION_DELAY = 1000

// Interface definitions
interface MenuItem {
  text: string
  name: NavItemName
  icon: string
}

// Menu configuration
const menuItems: MenuItem[] = [
  { text: 'Home', name: 'home', icon: 'home' },
  { text: 'About Me', name: 'about', icon: 'user' },
  { text: 'Projects', name: 'projects', icon: 'code' },
  { text: 'Journey', name: 'journey', icon: 'road' },
  { text: 'Contact Me', name: 'contact', icon: 'envelope' }
]

// State management
const navigation = useNavigationStore()
const portfolioVersion = `v${version}`

// Reactive references
const isOpen = ref(false)
const isVisible = ref(true)
const lastScrollTop = ref(0)
const isHovered = ref(false)
const isNavigating = ref(false)

// Scroll handling
const handleScroll = () => {
  if (isNavigating.value) return

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollDifference = Math.abs(lastScrollTop.value - currentScrollTop)

  if (scrollDifference <= SCROLL_DELTA) return

  if (currentScrollTop > lastScrollTop.value && currentScrollTop > NAVBAR_HEIGHT) {
    isVisible.value = false
  } else if (currentScrollTop + window.innerHeight < document.documentElement.scrollHeight) {
    isVisible.value = true
  }

  lastScrollTop.value = currentScrollTop
}

// Navigation handling
const handleNavigation = (itemName: NavItemName) => {
  navigation.setActiveSection(itemName)
  isVisible.value = true
  isNavigating.value = true

  const targetSection = document.getElementById(itemName)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      lastScrollTop.value = window.pageYOffset || document.documentElement.scrollTop
      isNavigating.value = false
    }, NAVIGATION_DELAY)
  }

  closeMenu()
}

// UI state management
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes ease-out-cubic {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-nav {
  transition: transform 0.5s ease-in-out;
  transform: translateY(0);
}

.nav-up {
  transform: translateY(-100px) !important;
}
</style>
