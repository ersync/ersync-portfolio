<script setup lang="ts">
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import SkillCard from '@/ui/SkillCard.vue'
import HighlightGrid from '@/ui/base/HighlightGrid.vue'

const capabilities = [
  { title: 'Rails systems', description: 'APIs, data models, and background work' },
  { title: 'Vue interfaces', description: 'Clear components and responsive states' },
  { title: 'Product polish', description: 'Performance, accessibility, and useful details' }
]

const skills = [
  { title: 'Ruby on Rails', description: 'Systems & APIs', iconName: 'rails', variant: 'red' },
  { title: 'Vue.js', description: 'Product interfaces', iconName: 'vue', variant: 'green' },
  { title: 'TypeScript', description: 'Safer frontends', iconName: 'typescript', variant: 'blue' },
  { title: 'PostgreSQL', description: 'Durable data', iconName: 'postgresql', variant: 'cyan' },
  { title: 'React', description: 'Components', iconName: 'react', variant: 'cyan' },
  { title: 'Svelte', description: 'Lean web products', iconName: 'svelte', variant: 'orange' }
] as const
</script>

<template>
  <section
    id="about"
    class="deferred-section relative min-h-screen w-full overflow-hidden py-16 sm:py-20"
  >
    <SectionBackdrop tone="blue" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="01 / About"
          title="Built with intent."
          subtitle="A full-stack perspective shaped by backend depth, interface care, and product thinking."
        />
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="100">
        <div class="grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article
            class="relative overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-[#0a182a]/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-9"
          >
            <div
              class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-transparent"
            />
            <div
              class="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-blue-400/15 blur-3xl"
              aria-hidden="true"
            />

            <div class="relative flex h-full flex-col justify-between">
              <div>
                <h3
                  class="mx-auto max-w-xl text-center font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:mx-0 sm:text-left sm:text-5xl"
                >
                  I build web products<span class="block sm:inline"> end to end.</span>
                </h3>
                <p class="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Rails on the backend, Vue in the browser, and close attention to everything people
                  feel between them.
                </p>
              </div>

              <div class="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div v-for="item in capabilities" :key="item.title">
                  <h4 class="text-sm font-semibold text-white">{{ item.title }}</h4>
                  <p class="mt-1 text-sm leading-5 text-slate-300">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </article>

          <HighlightGrid />
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="160">
        <div class="mt-14">
          <h3 class="mb-6 font-display text-2xl font-semibold tracking-tight text-white">
            Core stack
          </h3>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <SkillCard v-for="skill in skills" :key="skill.title" v-bind="skill" />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </section>
</template>
