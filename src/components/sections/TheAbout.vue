<script setup lang="ts">
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import PrincipleCard from '@/ui/PrincipleCard.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import SkillCard from '@/ui/SkillCard.vue'
import HighlightGrid from '@/ui/base/HighlightGrid.vue'

const workStages = [
  {
    number: '01',
    title: 'Find the signal',
    description: 'Strip the problem down to what matters.'
  },
  {
    number: '02',
    title: 'Build the spine',
    description: 'Shape reliable data, APIs, and components.'
  },
  {
    number: '03',
    title: 'Refine the feel',
    description: 'Tune speed, accessibility, and interaction.'
  }
]

const skills = [
  { title: 'Ruby on Rails', description: 'Systems & APIs', iconName: 'rails', variant: 'red' },
  { title: 'Vue.js', description: 'Product interfaces', iconName: 'vue', variant: 'green' },
  { title: 'TypeScript', description: 'Safer frontends', iconName: 'typescript', variant: 'blue' },
  { title: 'PostgreSQL', description: 'Durable data', iconName: 'postgresql', variant: 'cyan' }
] as const

const principles = [
  {
    index: '01',
    title: 'Clarity over cleverness',
    description: 'Code should explain itself before a comment has to.',
    iconName: 'lightning'
  },
  {
    index: '02',
    title: 'Useful beats impressive',
    description: 'A polished solution still starts with the right problem.',
    iconName: 'setting'
  },
  {
    index: '03',
    title: 'Small details compound',
    description: 'Speed, copy, spacing, and states all shape trust.',
    iconName: 'clock'
  }
]
</script>

<template>
  <section id="about" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
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
            class="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/55 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9"
          >
            <div
              class="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl"
              aria-hidden="true"
            />

            <div class="relative">
              <p class="text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">
                From the database to the last 8 pixels
              </p>
              <h3
                class="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl"
              >
                I turn fuzzy ideas into web products that feel clear, quick, and dependable.
              </h3>
              <p class="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                I’m Emad, a full-stack developer in Tehran. I’m happiest where product decisions,
                backend systems, and interface details meet.
              </p>

              <ol class="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                <li
                  v-for="stage in workStages"
                  :key="stage.number"
                  class="grid gap-2 py-4 sm:grid-cols-[2.5rem_11rem_1fr] sm:items-center"
                >
                  <span class="font-mono text-[10px] text-cyan-300">{{ stage.number }}</span>
                  <span class="text-sm font-semibold text-slate-200">{{ stage.title }}</span>
                  <span class="text-sm text-slate-500">{{ stage.description }}</span>
                </li>
              </ol>
            </div>
          </article>

          <HighlightGrid />
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="160">
        <div class="mt-14">
          <div class="mb-6 flex items-end justify-between gap-4">
            <div>
              <p class="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                Daily toolkit
              </p>
              <h3 class="mt-1 text-xl font-semibold text-slate-100">The four I trust</h3>
            </div>
            <p class="hidden text-sm text-slate-500 sm:block">Small stack. Deep familiarity.</p>
          </div>
          <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <SkillCard v-for="skill in skills" :key="skill.title" v-bind="skill" />
          </div>
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="220">
        <div class="mt-14">
          <div class="mb-6">
            <p class="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">
              Working principles
            </p>
            <h3 class="mt-1 text-xl font-semibold text-slate-100">A quiet operating system</h3>
          </div>
          <div class="grid gap-3 md:grid-cols-3">
            <PrincipleCard
              v-for="principle in principles"
              :key="principle.title"
              v-bind="principle"
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </section>
</template>
