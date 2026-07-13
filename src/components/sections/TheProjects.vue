<script setup lang="ts">
import { computed, ref } from 'vue'
import { projects } from '@/data/projects'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import type { Project } from '@/types/project'
import { categories, isProjectCategory } from '@/types/projectCategory'
import type { FilterCategory } from '@/types/projectCategory'

const selectedCategory = ref<FilterCategory>('all')

const filteredProjects = computed<Project[]>(() => {
  const category = selectedCategory.value
  if (!isProjectCategory(category)) return projects
  return projects.filter((project) => project.category.includes(category))
})

const projectImage = (image: Project['image']) => (Array.isArray(image) ? image[1] : image)
</script>

<template>
  <section id="projects" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <SectionBackdrop tone="violet" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="02 / Selected work"
          title="Projects with a pulse."
          subtitle="A mix of production-minded systems, experiments, and interfaces built to solve something real."
        />
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="100">
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div
            class="inline-flex rounded-xl border border-white/[0.07] bg-slate-950/45 p-1 backdrop-blur-xl"
            aria-label="Filter projects"
          >
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="rounded-lg px-4 py-2 text-xs font-semibold capitalize transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              :class="
                selectedCategory === category
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:bg-white/[0.05] hover:text-slate-200'
              "
              :aria-pressed="selectedCategory === category"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
          <p class="font-mono text-[10px] tracking-[0.16em] text-slate-600 uppercase">
            {{ filteredProjects.length.toString().padStart(2, '0') }} projects
          </p>
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="160">
        <TransitionGroup tag="div" name="project-list" class="grid gap-5 md:grid-cols-2">
          <article
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="project-card group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur-xl"
            :class="index === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-[1.22fr_0.78fr]' : ''"
          >
            <div
              class="relative overflow-hidden bg-slate-900"
              :class="index === 0 ? 'min-h-64 lg:min-h-[25rem]' : 'aspect-[16/10]'"
            >
              <img
                :src="projectImage(project.image)"
                :alt="`${project.title} project preview`"
                loading="lazy"
                class="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-white/[0.03]"
                aria-hidden="true"
              />
              <div class="absolute left-4 top-4 flex items-center gap-2">
                <span
                  v-if="index === 0"
                  class="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 font-mono text-[9px] tracking-[0.14em] text-white uppercase backdrop-blur-xl"
                >
                  Featured
                </span>
                <span
                  class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 font-mono text-[9px] tracking-[0.12em] text-slate-300 uppercase backdrop-blur-xl"
                >
                  {{ project.category.join(' + ') }}
                </span>
              </div>
            </div>

            <div
              class="flex flex-col p-5 sm:p-7"
              :class="index === 0 ? 'justify-between lg:p-9' : ''"
            >
              <div>
                <div class="flex items-start justify-between gap-5">
                  <div>
                    <p class="font-mono text-[10px] text-violet-300">
                      {{ (index + 1).toString().padStart(2, '0') }}
                    </p>
                    <h3
                      class="mt-2 font-display text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl"
                    >
                      {{ project.title }}
                    </h3>
                  </div>
                  <a
                    :href="project.demoLink"
                    class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/[0.09] text-slate-400 transition hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-violet-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Open ${project.title}`"
                  >
                    <svg
                      class="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                </div>

                <p
                  class="mt-4 text-sm leading-6 text-slate-400"
                  :class="index === 0 ? 'max-w-md sm:text-base' : ''"
                >
                  {{ project.description }}
                </p>
              </div>

              <div class="mt-7">
                <ul class="flex flex-wrap gap-x-4 gap-y-2" aria-label="Technologies used">
                  <li
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="font-mono text-[10px] text-slate-500 before:mr-1.5 before:text-violet-400 before:content-['+']"
                  >
                    {{ tech }}
                  </li>
                </ul>

                <a
                  :href="project.githubLink"
                  class="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source
                  <svg
                    class="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-5-5 5 5-5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </TransitionGroup>
      </FadeUpOnScroll>
    </div>
  </section>
</template>

<style scoped>
.project-card::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  border-radius: inherit;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.035);
}

.project-list-enter-active,
.project-list-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
