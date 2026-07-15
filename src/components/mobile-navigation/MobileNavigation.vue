<template>
  <div>
    <!-- Mobile Navigatin Bar -->
    <nav
      class="mobile-nav fixed inset-x-0 z-50 flex h-[60px] items-center justify-between border-b border-white/[0.06] bg-[#050a14]/85 px-4 backdrop-blur-xl lg:hidden"
      :class="{ 'nav-up': !isVisible }"
    >
      <a
        href="#home"
        class="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
        aria-label="Emad Rahimi, home"
      >
        <img
          src="@/assets/images/logos/er-mark.svg"
          class="size-10 drop-shadow-[0_7px_18px_rgba(45,212,191,0.14)]"
          alt=""
        />
      </a>

      <MenuButton :is-open="isOpen" @toggle="toggleMenu" />
    </nav>

    <MenuBackdrop :is-open="isOpen" @click="toggleMenu" />

    <nav
      id="mobile-navigation-panel"
      :aria-hidden="!isOpen"
      :inert="!isOpen"
      class="ease-out-cubic fixed left-0 top-0 z-50 h-full w-[67%] max-w-[350px] transition-all duration-500"
      :class="[
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'border-r border-white/5',
        'bg-gradient-to-br from-[#161120] to-[#1b1d1ccc]',
        'backdrop-blur-xl'
      ]"
      @click.stop
    >
      <BackgroundDecoration />

      <div class="relative flex h-full select-none flex-col py-8 pl-8 pr-5">
        <ProfileHeader />

        <div class="-ml-3 mb-4 mt-7 h-px w-full bg-white/10" />

        <nav class="-ml-4 flex-1">
          <ul class="space-y-1">
            <NavigationItem
              v-for="item in menuItems"
              :key="item.name"
              :item="item"
              :active-section="navigation.activeSection"
              @navigate="handleNavigation"
            />
          </ul>
        </nav>

      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

import MenuButton from '@/components/mobile-navigation/MenuButton.vue'
import MenuBackdrop from '@/components/mobile-navigation/MenuBackdrop.vue'
import BackgroundDecoration from '@/components/mobile-navigation/BackgroundDecoration.vue'
import ProfileHeader from '@/components/mobile-navigation/ProfileHeader.vue'
import NavigationItem from '@/components/mobile-navigation/NavigationItem.vue'

const SCROLL_DELTA = 30
const NAVBAR_HEIGHT = 60
const NAVIGATION_DELAY = 1000

interface MenuItem {
  text: string
  name: NavItemName
}

const menuItems: MenuItem[] = [
  { text: 'Home', name: 'home' },
  { text: 'About Me', name: 'about' },
  { text: 'Projects', name: 'projects' },
  { text: 'Experience', name: 'experience' },
  { text: 'Contact Me', name: 'contact' }
]

const navigation = useNavigationStore()
const isOpen = ref(false)
const isVisible = ref(true)
const lastScrollTop = ref(0)
const isNavigating = ref(false)
let navigationTimer: number | undefined

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

const handleNavigation = (itemName: NavItemName) => {
  navigation.setActiveSection(itemName)
  isVisible.value = true
  isNavigating.value = true

  const targetSection = document.getElementById(itemName)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })

    navigationTimer = window.setTimeout(() => {
      lastScrollTop.value = window.pageYOffset || document.documentElement.scrollTop
      isNavigating.value = false
    }, NAVIGATION_DELAY)
  }

  closeMenu()
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.clearTimeout(navigationTimer)
  document.body.style.overflow = ''
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
