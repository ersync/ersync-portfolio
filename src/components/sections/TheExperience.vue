<script setup lang="ts">
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'

const outcomes = [
  {
    value: '4.8/5',
    label: 'average client rating',
    detail: 'Public client feedback reflecting accurate work and reliable communication.'
  },
  {
    value: '100%',
    label: 'success and on-time delivery',
    detail: 'A public record of reliable execution and positive client feedback.'
  }
]
</script>

<template>
  <section id="experience" class="deferred-section relative w-full overflow-hidden py-16 sm:py-24">
    <SectionBackdrop tone="amber" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="03 / Experience"
          title="Work that shipped."
          subtitle="Independent work, reliable delivery, and client trust."
        />
      </FadeUpOnScroll>

      <FadeUpOnScroll :delay="80">
        <article
          class="grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:py-14"
        >
          <div>
            <p class="font-mono text-xs font-semibold tracking-[0.1em] text-amber-200 uppercase">
              2025–Present
            </p>
            <h3
                class="mt-4 max-w-md font-display text-[1.8125rem] font-semibold tracking-[-0.04em] text-white sm:text-[2.1875rem]"
            >
              Independent Software Developer
            </h3>
            <p class="mt-4 text-base leading-7 text-slate-300">Freelance via Karlancer</p>
            <a
              href="https://www.karlancer.com/profile/932817"
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition-colors hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              View public profile
              <span class="transition-transform group-hover:translate-x-1" aria-hidden="true"
                >→</span
              >
            </a>
          </div>

          <div class="grid gap-8 sm:grid-cols-2">
            <div
              v-for="outcome in outcomes"
              :key="outcome.label"
              class="border-l border-white/10 pl-6"
            >
              <p
                class="font-display text-5xl font-semibold tracking-[-0.06em] text-teal-200 sm:text-6xl"
              >
                {{ outcome.value }}
              </p>
              <h4 class="mt-3 text-base font-semibold text-white">{{ outcome.label }}</h4>
              <p class="mt-2 max-w-sm text-sm leading-6 text-slate-300">{{ outcome.detail }}</p>
            </div>
          </div>
        </article>
      </FadeUpOnScroll>
    </div>
  </section>
</template>
