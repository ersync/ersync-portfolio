<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

const navigation = useNavigationStore()
const links: Array<{ label: string; name: NavItemName }> = [
  { label: 'About', name: 'about' },
  { label: 'Work', name: 'projects' },
  { label: 'Experience', name: 'experience' },
  { label: 'Contact', name: 'contact' }
]
let animationFrame: number | undefined

const navigateTo = (name: NavItemName) => {
  navigation.setActiveSection(name)
  document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' })
}

const updateActiveSection = () => {
  animationFrame = undefined

  const marker = window.scrollY + Math.min(window.innerHeight * 0.32, 260)
  let activeSection: NavItemName = 'home'

  links.forEach((link) => {
    const section = document.getElementById(link.name)
    if (section && section.offsetTop <= marker) activeSection = link.name
  })

  const reachedPageEnd =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
  if (reachedPageEnd) activeSection = 'contact'

  if (navigation.activeSection !== activeSection) navigation.setActiveSection(activeSection)
}

const scheduleActiveSectionUpdate = () => {
  if (animationFrame !== undefined) return
  animationFrame = window.requestAnimationFrame(updateActiveSection)
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true })
  window.addEventListener('resize', scheduleActiveSectionUpdate)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scheduleActiveSectionUpdate)
  window.removeEventListener('resize', scheduleActiveSectionUpdate)
  if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame)
})
</script>
<template>
  <header class="fixed inset-x-0 top-0 z-50 hidden px-6 pt-4 lg:block">
    <nav
      aria-label="Primary navigation"
      class="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#050a14]/80 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <button
        type="button"
        class="group flex items-center gap-3 rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
        @click="navigateTo('home')"
      >
        <img
          src="@/assets/images/logos/er-mark.svg"
          class="size-9 transition-transform duration-300 group-hover:-translate-y-0.5"
          alt=""
        />
        <span class="text-sm font-semibold text-slate-100">Emad Rahimi</span>
      </button>

      <ul class="flex items-center gap-1">
        <li v-for="link in links" :key="link.name">
          <button
            type="button"
            class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
            :class="
              navigation.activeSection === link.name
                ? 'bg-teal-300/[0.1] text-teal-100 shadow-[inset_0_0_0_1px_rgba(94,234,212,0.12)]'
                : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
            "
            :aria-current="navigation.activeSection === link.name ? 'page' : undefined"
            @click="navigateTo(link.name)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <a
        href="mailto:contact@emadrahimi.dev"
        class="rounded-xl bg-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
      >
        Let’s talk
      </a>
    </nav>
  </header>
</template>
