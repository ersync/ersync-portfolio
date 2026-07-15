<script setup lang="ts">
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import SkillCard from '@/ui/SkillCard.vue'

const approach = [
  {
    number: '01',
    title: 'Model the real problem',
    description: 'Start with the data, constraints, and behavior—not the framework.'
  },
  {
    number: '02',
    title: 'Make intent visible',
    description:
      'Interfaces should explain themselves through hierarchy, feedback, and sensible states.'
  },
  {
    number: '03',
    title: 'Leave it easier to change',
    description:
      'Clear architecture and focused code keep today’s decision from becoming tomorrow’s trap.'
  }
]

const skills = [
  { title: 'Ruby on Rails', description: 'Systems & APIs', iconName: 'rails', variant: 'red' },
  { title: 'Vue.js', description: 'Product interfaces', iconName: 'vue', variant: 'green' },
  { title: 'React', description: 'Components', iconName: 'react', variant: 'cyan' },
  { title: 'Svelte', description: 'Lean web products', iconName: 'svelte', variant: 'orange' },
  { title: 'TypeScript', description: 'Safer frontends', iconName: 'typescript', variant: 'blue' },
  { title: 'PostgreSQL', description: 'Durable data', iconName: 'postgresql', variant: 'cyan' }
] as const
</script>

<template>
  <section id="about" class="deferred-section relative w-full overflow-hidden py-16 sm:py-24">
    <SectionBackdrop tone="blue" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader eyebrow="01 / About" title="The whole product matters." />
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="100">
        <div
          class="grid gap-12 border-y border-white/10 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-14"
        >
          <div>
            <h3
              class="max-w-xl font-display text-[1.625rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2.5rem]"
            >
              From data model to final interaction.
            </h3>
            <p class="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I work across Rails and PostgreSQL systems, browser interfaces, and the decisions
              between them. The goal is not maximum complexity. It is a product that feels clear,
              performs reliably, and remains understandable after launch.
            </p>
          </div>

          <ol>
            <li
              v-for="item in approach"
              :key="item.number"
              class="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/10 py-6 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr]"
            >
              <span class="font-mono text-xs font-semibold text-cyan-200">{{ item.number }}</span>
              <div>
                <h4 class="font-display text-lg font-semibold text-white">{{ item.title }}</h4>
                <p class="mt-2 max-w-lg text-sm leading-6 text-slate-400">{{ item.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="160">
        <div class="mt-12 select-none sm:mt-16">
          <h3 class="mb-4 font-display text-2xl font-semibold tracking-tight text-white">
            Core stack
          </h3>
          <div class="grid grid-cols-2 gap-x-6 gap-y-0 sm:grid-cols-3 sm:gap-x-10">
            <SkillCard
              v-for="(skill, index) in skills"
              :key="skill.title"
              v-bind="skill"
              :index="index"
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </section>
</template>
