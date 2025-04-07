<script setup lang="ts">
import PrincipleCard from '@/ui/PrincipleCard.vue'
import SkillCard from '@/ui/SkillCard.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import HighlightGrid from '@/ui/base/HighlightGrid.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import { ref, onMounted } from 'vue'

const isMobile = ref(window.innerWidth < 768)

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
  <div id="about" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>

      <div
        class="absolute -left-20 top-1/4 md:h-64 md:w-64 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl animate-float-reverse glow"
      ></div>
      <div
        class="absolute -right-20 bottom-1/4 md:h-72 md:w-72 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl animate-float-delay glow indigo-glow"
      ></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div class="absolute bottom-0 left-0 h-[200px] w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-full w-full opacity-10">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,2,0,3.38Z"
            fill="url(#bottomGradient)"
            class="shape-fill"
          ></path>
          <defs>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0d9488" stop-opacity="0.3" />
              <stop offset="50%" stop-color="#14b8a6" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader title="About Me" subtitle="" />
      </FadeUpOnScroll>

      <!-- Intro Section -->
      <FadeUpOnScroll :delay="200">
        <div
          class="mt-4 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-between"
        >
          <!-- Text Content -->
          <div
            class="space-y-4 sm:space-y-5 backdrop-blur-sm rounded-xl p-4 sm:p-6 bg-slate-800/30 border border-slate-700/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(15,118,110,0.1),0_10px_15px_-6px_rgba(15,118,110,0.05)] transition-shadow duration-300"
          >
            <p
              class="text-base sm:text-lg leading-relaxed text-slate-300"
              style="font-family: 'Gotham Rounded', sans-serif"
            >
              <div class="flex text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Hello there! I'm
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400"
                >
                  &nbspEmad</span
                >
                <span class="block text-teal-500 max-sm:text-[14px] ml-1.5">👋🏻</span>
              </div>
              A web developer from Iran with a passion for transforming ideas into elegant digital
              experiences. I craft
              <span class="relative inline-block px-1 sm:px-2 py-0.5 mx-0.5 group">
                <span
                  class="absolute inset-0 bg-teal-500/10 rounded-md transform group-hover:scale-105 transition duration-200"
                ></span>
                <span class="relative text-teal-400 font-medium">Ruby on Rails</span>
              </span>
              and
              <span class="relative inline-block px-1 sm:px-2 py-0.5 mx-0.5 group">
                <span
                  class="absolute inset-0 bg-teal-500/10 rounded-md transform group-hover:scale-105 transition duration-200"
                ></span>
                <span class="relative text-teal-400 font-medium">Vue.js</span>
              </span>
              solutions that solve real problems and enhance user experiences.
            </p>

            <p
              class="text-sm sm:text-base leading-relaxed text-slate-300"
              style="font-family: 'Gotham Rounded', sans-serif"
            >
              My approach combines <span class="font-medium">technical precision</span> with
              <span class="font-medium">creative problem-solving</span>, resulting in code that's
              not just functional but thoughtfully crafted. When I'm not immersed in code, you'll
              find me cheering at live sporting events, engaging with developer communities, and
              exploring emerging technologies that push the boundaries of what's possible on the
              web.
            </p>

            <div class="pt-1 sm:pt-2 flex items-center justify-start space-x-2">
              <div class="h-1 w-1 rounded-full bg-teal-400"></div>
              <div class="h-1 w-1 rounded-full bg-teal-400"></div>
              <div
                class="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
              ></div>
            </div>
          </div>

          <!-- Grid Content -->
          <HighlightGrid class="glow-container" />
        </div>
      </FadeUpOnScroll>

      <!-- Skills Section -->
      <FadeUpOnScroll :delay="400">
        <div class="mt-16">
          <h3
            class="mb-8 text-xl font-semibold text-slate-200 text-center sm:text-left relative inline-block"
          >
            <span class="relative z-10">Core Technologies</span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-teal-500/20 rounded-full"></span>
          </h3>
          <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <SkillCard
              title="RoR"
              description="backend"
              icon-name="rails"
              variant="red"
              class="skill-card"
            />
            <SkillCard
              title="Vue.js"
              description="frontend"
              icon-name="vue"
              variant="green"
              class="skill-card"
            />
            <SkillCard
              title="TypeScript"
              description="language"
              icon-name="typescript"
              variant="blue"
              class="skill-card"
            />
            <SkillCard
              title="PostgreSQL"
              description="database"
              icon-name="postgresql"
              variant="cyan"
              class="skill-card"
            />
          </div>
        </div>
      </FadeUpOnScroll>

      <!-- Development Principles Section -->
      <FadeUpOnScroll :delay="600">
        <div class="mt-20">
          <h3
            class="mb-8 text-xl font-semibold text-slate-200 text-center sm:text-left relative inline-block"
          >
            <span class="relative z-10">Development Principles</span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-teal-500/20 rounded-full"></span>
          </h3>
          <div class="grid gap-6 md:grid-cols-3">
            <PrincipleCard
              title="Clean Code"
              icon-name="lightning"
              description="Writing maintainable, well-documented code that stands the test of time"
              variant="teal"
              class="principle-card"
            />
            <PrincipleCard
              title="Problem Solving"
              icon-name="setting"
              description="Breaking down complex challenges into manageable solutions."
              variant="rose"
              class="principle-card"
            />
            <PrincipleCard
              title="Continuous Learning"
              icon-name="clock"
              description="Staying current with best practices and emerging technologies."
              variant="blue"
              class="principle-card"
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glow {
  filter: blur(40px);
  animation: glow-pulse 12s ease-in-out infinite;
  will-change: opacity, filter;
}

.indigo-glow {
  box-shadow: 0 0 60px 15px rgba(99, 102, 241, 0.12);
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.5;
    filter: blur(40px);
  }
  50% {
    opacity: 0.3;
    filter: blur(50px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(20px) translateX(-15px);
  }
}

@keyframes float-delay {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(15px);
  }
}

.animate-float-reverse {
  animation: float-reverse 24s ease-in-out infinite;
  will-change: transform;
}

.animate-float-delay {
  animation: float-delay 30s ease-in-out infinite;
  will-change: transform;
}

.skill-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(51, 65, 85, 0.5);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -5px rgba(15, 118, 110, 0.15);
}

.principle-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(51, 65, 85, 0.5);
  backdrop-filter: blur(8px);
  background: rgba(30, 41, 59, 0.5);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.principle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.15);
}

.glow-container {
  position: relative;
}

.glow-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
  filter: blur(30px);
}

.tag-highlight {
  display: inline-block;
  padding: 0px 3px;
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 0.375rem;
  font-weight: 500;
  color: #2dd4bf;
  transition: all 0.2s ease;
}

.tag-highlight:hover {
  background: rgba(45, 212, 191, 0.15);
  transform: translateY(-1px);
}
</style>
