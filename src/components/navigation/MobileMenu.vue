<template>
  <div class="md:hidden">
    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="fixed right-6 top-6 z-50 flex size-12 items-center justify-center rounded-2xl border border-gray-100 bg-gradient-to-br from-white/85 to-white/95 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-teal-200/40"
      :class="{ 'shadow-md shadow-teal-300/30': isOpen }"
    >
      <div class="relative size-5">
        <span
          v-for="i in 3"
          :key="i"
          :class="[
            'absolute left-0 h-0.5 w-full rounded-full transition-all duration-300',
            'bg-gradient-to-r from-teal-400 via-teal-500 to-pink-400',
            i === 1 && `top-0 ${isOpen ? 'translate-y-2 rotate-45' : ''}`,
            i === 2 && `top-2 ${isOpen ? 'opacity-0' : ''}`,
            i === 3 && `top-4 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`
          ]"
        />
      </div>
    </button>

    <!-- Backdrop -->
    <div
      v-show="isOpen"
      @click="toggleMenu"
      class="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm transition-opacity duration-300"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
    />

    <!-- Navigation Menu -->
    <nav
      class="ease-out-cubic fixed left-0 top-0 z-40 h-full w-[67%] max-w-[350px] border-r border-white/50 bg-gradient-to-br from-gray-50/85 to-gray-100/85 backdrop-blur-xl transition-all duration-500"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      @click.stop
    >
      <!-- Decorative Light Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -left-[20%] -top-[40%] size-[500px] rounded-full bg-teal-300/20 blur-3xl"
        />
        <div
          class="absolute -right-[30%] top-[60%] size-[400px] rounded-full bg-pink-300/20 blur-3xl"
        />
      </div>

      <!-- Content Container -->
      <div class="relative flex h-full flex-col p-8">
        <!-- Profile Section -->
        <div class="mb-8">
          <div class="mb-6 size-20 rounded-2xl bg-gradient-to-br from-teal-400 to-pink-400 p-1">
            <div class="flex size-full items-center justify-center rounded-xl bg-white/85">
              <span
                class="bg-gradient-to-br from-teal-500 to-pink-500 bg-clip-text text-xl font-bold text-transparent font-VarelaRound"
                >Emad</span
              >
            </div>
          </div>
          <p class="font-medium text-teal-600">Full Stack Developer</p>
        </div>

        <!-- Navigation -->
        <div class="-ml-4 flex-1">
          <ul class="space-y-1">
            <li v-for="item in menuItems" :key="item.name" @click="handleNavigation(item.name)">
              <a
                class="group flex items-center space-x-3 rounded-xl p-4 transition-all duration-300 hover:bg-white/70 hover:shadow-sm hover:shadow-teal-100/80"
                :class="{ 'bg-white/70': navigation.activeSection === item.name }"
              >
                <div
                  class="flex size-8 items-center justify-center rounded-xl border border-teal-50 bg-gradient-to-br from-gray-50 to-white/40 shadow-sm transition-all duration-300 group-hover:border-teal-100 group-hover:shadow-md"
                >
                  <font-awesome-icon
                    class="size-[14px]"
                    :class="
                      navigation.activeSection === item.name ? 'text-teal-600' : 'text-teal-500/80'
                    "
                    :icon="['fas', item.icon]"
                  />
                </div>
                <div>
                  <span
                    class="block font-VarelaRound text-sm font-medium"
                    :class="
                      navigation.activeSection === item.name ? 'text-teal-600' : 'text-gray-700'
                    "
                  >
                    {{ item.text }}
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!-- Add this right before the closing div of the Status & Social Links section -->
        <div class="mt-6 flex items-center justify-center">
  <span class="text-xs text-gray-400 font-light tracking-wider">
    ersync-portfolio {{portfolioVersion}}
  </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'
import { version } from "../../../package.json"
const portfolioVersion = `v${version}`

const navigation = useNavigationStore()
const isOpen = ref(false)

interface MenuItem {
  text: string
  name: NavItemName
  icon: string
}

const menuItems: MenuItem[] = [
  {
    text: 'Home',
    name: 'home',
    icon: 'home'
  },
  {
    text: 'About Me',
    name: 'about',
    icon: 'user'
  },
  {
    text: 'Projects',
    name: 'projects',
    icon: 'code'
  },
  {
    text: 'Journey',
    name: 'journey',
    icon: 'road'
  },
  {
    text: 'Contact Me',
    name: 'contact',
    icon: 'envelope'
  }
]

const handleNavigation = (itemName: NavItemName) => {
  navigation.setActiveSection(itemName)

  const targetSection = document.getElementById(itemName)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }

  // Close the mobile menu after navigation
  isOpen.value = false
  document.body.style.overflow = ''
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}
</script>

<style>
@keyframes ease-out-cubic {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
