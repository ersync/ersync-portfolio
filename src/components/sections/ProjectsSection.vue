<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import type { Project } from '@/types/project'
import type {ProjectCategory, FilterCategory} from '@/types/projectCategory'
import  {isProjectCategory, categories} from '@/types/projectCategory'

const selectedCategory = ref<FilterCategory>('all')

const filteredProjects = computed(() => {
  const category = selectedCategory.value
  if (category === 'all') return projects
  if(isProjectCategory(category)){
  return projects.filter((project) => project.category.includes(category))
  }
})
</script>

<template>
  <section
    id="projects"
    class="relative w-full overflow-hidden bg-gray-50 bg-gradient-to-br from-[#fbfbfb] via-gray-50 to-gray-300 py-16"
  >
    <div class="container relative z-10 mx-auto">
      <!--  Title  -->
      <div>
        <div class="flex items-center justify-start gap-2">
          <div class="h-7 w-[2.5px] rounded-md bg-teal-500" />
          <h2 class="font-VarelaRound text-3xl font-bold text-gray-800">Projects</h2>
        </div>
        <p class="mb-8 mt-1 text-sm text-gray-600 sm:text-base">
          Exploring innovation through code and creativity
        </p>
      </div>

      <!-- Category Filter -->
      <div class="mb-12 flex gap-4">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'rounded-md px-4 py-2 transition-all duration-300',
            selectedCategory === category
              ? 'bg-teal-500 text-white shadow-md'
              : 'border border-gray-200 bg-white text-gray-700 hover:bg-teal-50'
          ]"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>

      <!-- Projects Container -->
      <div
        class="flex flex-wrap justify-center justify-items-center gap-6 md:gap-4 custom-md:gap-6 custom-lg:justify-start custom-lg:pl-[50px]"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="w-[308px] overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:w-[280px] md:w-[295px] custom-md:w-[308px]"
        >
          <!-- Project Image container  -->
          <div
            class="relative h-[181px] overflow-hidden bg-gray-100 shadow-sm sm:h-[164px] md:h-[173px] custom-md:h-[181px]"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="size-full object-cover object-left"
            />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
          </div>

          <div class="p-6 md:p-4 custom-md:p-5">
            <h3 class="mb-3 text-xl font-semibold text-gray-800">
              {{ project.title }}
            </h3>
            <p class="mb-4 line-clamp-4 text-[13px] text-gray-600 md:text-[14px]">
              {{ project.description }}
            </p>

            <div class="mb-6 grid grid-cols-2 gap-2">
              <span
                v-for="(tech, index) in project.technologies"
                :key="index"
                class="rounded-full border border-teal-100/30 bg-teal-50 px-3 py-1 text-[13px] font-medium text-teal-600 md:text-sm"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-2 text-[13px] md:gap-3 md:text-sm">
              <a
                :href="project.demoLink"
                class="flex-1 rounded-md bg-teal-500 px-4 py-2 text-center text-white shadow-sm transition-colors hover:bg-teal-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                :href="project.githubLink"
                class="flex-1 rounded-md border border-gray-200 px-4 py-2 text-center text-gray-700 transition-colors hover:bg-gray-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  backdrop-filter: blur(10px);
}
</style>
