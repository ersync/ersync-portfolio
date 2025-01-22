<script setup lang="ts">
import { ref, computed } from 'vue'
import { Project } from '@/types/project'
import { projects } from '@/data/projects'
import type { FilterCategory } from '@/types/projectCategory'
import { isProjectCategory, categories } from '@/types/projectCategory'
import { useThemeStore } from '@/stores/themeStore'
import SectionHeader from '@/ui/SectionHeader.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'

const themeStore = useThemeStore()
const selectedCategory = ref<FilterCategory>('all')

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
    return themeStore.isDark ? projectImage[1] : projectImage[0]
  }
  return projectImage
}
</script>

<template>
  <section id="projects" class="relative min-h-screen w-full bg-[#F7F9FB] py-20 dark:bg-[#1b1b1f]">
    <div class="container">
      <!-- Header -->
      <FadeUpOnScroll>
        <SectionHeader title="Projects" subtitle="Personal development journey" />
      </FadeUpOnScroll>

      <!-- Category Filter -->
      <FadeUpOnScroll :delay="200">
        <div class="mb-12 flex flex-wrap gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'rounded-md px-4 py-2 transition-all duration-300',
              selectedCategory === category
                ? 'bg-teal-500 text-white dark:border-teal-500 dark:bg-teal-600'
                : 'border border-gray-200 bg-white text-gray-700 hover:bg-teal-50 dark:border-gray-700 dark:bg-[#1A1A1A]/80 dark:text-gray-300 dark:hover:bg-teal-900/30'
            ]"
          >
            {{ category.charAt(0).toUpperCase() + category.slice(1) }}
          </button>
        </div>
      </FadeUpOnScroll>

      <!-- Projects Grid -->
      <FadeUpOnScroll :delay="400">
        <TransitionGroup
          tag="div"
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-4 custom-md:gap-8 lg:grid-cols-3 lg:gap-4"
          name="list"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="mx-auto w-[330px] overflow-hidden rounded-lg shadow-[0_0_15px_rgba(20,184,166,0.22)] transition-all duration-300 sm:w-[280px] md:w-[295px] custom-md:w-[330px] lg:w-[280px] custom-lg:w-[330px]"
          >
            <!-- Project Image container  -->
            <div
              class="relative h-[200px] overflow-hidden bg-gray-100 shadow-sm md:h-[173px] custom-md:h-[194px] lg:h-[173px]"
            >
              <img
                :src="getProjectImage(project.image)"
                :alt="project.title"
                loading="lazy"
                class="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div class="absolute inset-0 bg-gray-400/15" />
            </div>

            <div
              class="bg-white/90 p-[21px] backdrop-blur dark:bg-[#1d1d1d]/80 dark:backdrop-blur-xl sm:p-4 md:p-6"
            >
              <h3 class="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-100">
                {{ project.title }}
              </h3>
              <p
                class="mb-4 line-clamp-2 text-[13px] text-gray-600 dark:text-gray-400 md:text-[15px]"
              >
                {{ project.description }}
              </p>

              <div class="mb-6 flex flex-wrap items-center justify-center gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="w-[48%] rounded-full bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 md:text-[13px]"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-3">
                <a
                  :href="project.demoLink"
                  class="flex-1 rounded-md bg-teal-500 px-4 py-2 text-center text-sm text-white transition-all hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 sm:px-2 md:px-4 lg:px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  :href="project.githubLink"
                  class="flex-1 rounded-md border border-gray-200 px-4 py-2 text-center text-sm text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
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
.project-card {
  @apply overflow-hidden rounded-lg transition-all duration-300;
}

/* Transitions for filtering */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
