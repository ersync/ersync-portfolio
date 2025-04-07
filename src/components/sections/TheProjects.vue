<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Project } from '@/types/project'
import { projects } from '@/data/projects'
import type { FilterCategory } from '@/types/projectCategory'
import { isProjectCategory, categories } from '@/types/projectCategory'
import SectionHeader from '@/ui/SectionHeader.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'

const selectedCategory = ref<FilterCategory>('all')
const isLoaded = ref(false)
const hoveredProjectImage = ref<string | number | null>(null)

const isMobile = ref(window.innerWidth < 768)

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)

  setTimeout(() => {
    isLoaded.value = true
  }, 200)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

const filteredProjects = computed<Project[]>(() => {
  const category = selectedCategory.value
  if (category === 'all') return projects
  if (isProjectCategory(category)) {
    return projects.filter((project) => project.category.includes(category))
  }
  return projects
})

const getProjectImage = (projectImage: string | [string, string]) => {
  if (Array.isArray(projectImage)) {
    return projectImage[1]
  }
  return projectImage
}

const getCategoryColor = (category: FilterCategory) => {
  const colorMap = {
    all: 'from-teal-500 to-cyan-500',
    web: 'from-teal-500 to-cyan-500',
    mobile: 'from-amber-500 to-orange-500',
    desktop: 'from-emerald-500 to-green-500',
    backend: 'from-teal-500 to-cyan-500'
  }

  return colorMap[category as keyof typeof colorMap] || colorMap.all
}

const setHoveredImage = (id: string | number | null) => {
  hoveredProjectImage.value = id
}
</script>

<template>
  <section id="projects" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>

      <!-- Animated orbs -->
      <div
        class="absolute -left-20 top-1/4 md:h-64 md:w-64 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl animate-float-reverse glow"
      ></div>
      <div
        class="absolute -right-20 bottom-1/4 md:h-72 md:w-72 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl animate-float-delay glow indigo-glow"
      ></div>
      <div
        class="absolute right-1/3 top-2/3 md:h-48 md:w-48 h-24 w-24 rounded-full bg-amber-400/10 blur-3xl animate-float glow amber-glow"
      ></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <!-- Decorative waves -->
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

    <div class="container relative z-10">
      <!-- Header -->
      <FadeUpOnScroll>
        <SectionHeader title="Projects" subtitle="Personal development journey" />
      </FadeUpOnScroll>

      <!-- Category Filter -->
      <FadeUpOnScroll :delay="200">
        <div class="mb-12 flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="group relative overflow-hidden rounded-lg border px-5 py-2.5 font-medium transition-all duration-300 backdrop-blur-sm"
            :class="[
              selectedCategory === category
                ? `bg-gradient-to-r ${getCategoryColor(category)} text-white border-transparent shadow-lg shadow-${category === 'all' ? 'teal' : category}-500/20`
                : 'bg-slate-800/90 text-white border-slate-700 hover:bg-slate-700'
            ]"
          >
            <span class="relative z-10">{{
              category.charAt(0).toUpperCase() + category.slice(1)
            }}</span>
            <div
              class="absolute inset-0 bg-grid-pattern opacity-10"
              :class="selectedCategory === category ? 'opacity-20' : 'opacity-5'"
            ></div>
          </button>
        </div>
      </FadeUpOnScroll>

      <!-- Projects Grid -->
      <FadeUpOnScroll :delay="400">
        <TransitionGroup
          tag="div"
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
          name="list"
          mode="out-in"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group relative mx-auto w-full max-w-[330px] overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-800/60 shadow-lg shadow-teal-500/5 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20"
            :style="{
              opacity: isLoaded ? '1' : '0',
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: `${300 + filteredProjects.indexOf(project) * 100}ms`
            }"
          >
            <!-- Project Image container -->
            <div
              class="relative h-[200px] overflow-hidden cursor-pointer"
              @mouseenter="setHoveredImage(project.id)"
              @mouseleave="setHoveredImage(null)"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-white/5"></div>

              <img
                :src="getProjectImage(project.image)"
                :alt="project.title"
                loading="lazy"
                class="size-full object-cover transition-all duration-700"
                :class="{
                  'scale-[1.08] blur-sm':
                    hoveredProjectImage === project.id && hoveredProjectImage !== null
                }"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 z-20"
                :class="{ 'opacity-100': hoveredProjectImage === project.id }"
              ></div>

              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 z-30"
                :class="{ 'opacity-100': hoveredProjectImage === project.id }"
              >
                <h3 class="text-2xl font-bold text-white drop-shadow-lg">{{ project.title }}</h3>
              </div>
            </div>

            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-slate-100">
                {{ project.title }}
              </h3>
              <p class="mb-5 line-clamp-2 text-sm text-slate-400">
                {{ project.description }}
              </p>

              <div class="mb-6 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 px-3 py-1.5 text-xs font-medium text-teal-300 backdrop-blur-sm"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-3">
                <a
                  :href="project.demoLink"
                  class="project-btn btn-primary flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                </a>

                <a
                  :href="project.githubLink"
                  class="project-btn btn-secondary flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 btn-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </FadeUpOnScroll>
    </div>
  </section>
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

.amber-glow {
  box-shadow: 0 0 60px 15px rgba(251, 191, 36, 0.12);
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

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(15px) translateX(10px);
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

.animate-float {
  animation: float 18s ease-in-out infinite;
  will-change: transform;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  filter: blur(4px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-btn {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 0.375rem;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  text-align: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.btn-primary {
  background: rgba(15, 23, 42, 0.3);
  color: #fff;
  border: 1px solid rgba(20, 184, 166, 0.3);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.12);
  backdrop-filter: blur(8px);
}

.btn-primary:hover {
  border-color: rgba(20, 184, 166, 0.8);
  box-shadow: 0 6px 16px rgba(20, 184, 166, 0.25);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(100, 116, 139, 0.3);
  color: #e2e8f0;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.btn-secondary:hover {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(148, 163, 184, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.btn-secondary::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  padding: 1px;
  background: linear-gradient(95deg, rgba(56, 189, 248, 0.5), rgba(20, 184, 166, 0.5));
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-secondary:hover::before {
  opacity: 1;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.project-btn:hover .btn-icon {
  transform: translateX(3px);
}
</style>
