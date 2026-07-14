<script setup lang="ts">
import ContactForm from '@/components/sections/contact-me/ContactForm.vue'
import SocialLinks from '@/components/sections/contact-me/SocialLinks.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import EnvelopeIcon from '@heroicons/vue/24/outline/EnvelopeIcon.js'
import MapPinIcon from '@heroicons/vue/24/outline/MapPinIcon.js'
</script>

<template>
  <section
    id="contact"
    class="deferred-section relative min-h-screen w-full overflow-hidden py-16 sm:py-20"
  >
    <SectionBackdrop tone="teal" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="04 / Contact"
          title="Let’s make it real."
          subtitle="Have a useful idea, an interesting problem, or a team that values thoughtful work? My inbox is open."
          subtitle-emphasis
        />
      </FadeUpOnScroll>

      <div
        class="mx-auto mt-10 flex max-w-5xl flex-col items-stretch justify-center gap-6 lg:flex-row"
      >
        <FadeUpOnScroll :delay="120" class="w-full shrink-0 grow lg:max-w-[420px]">
          <aside
            class="flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.13] bg-[#091526] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <div>
              <h3 class="font-display text-2xl font-semibold tracking-tight text-white">
                Reach out directly.
              </h3>
              <p class="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                Projects, collaborations, questions, or a simple hello are all welcome.
              </p>

              <a
                href="mailto:contact@emadrahimi.dev"
                class="group mt-8 block rounded-2xl border border-teal-300/25 bg-teal-300/[0.08] p-5 transition-colors hover:border-teal-200/50 hover:bg-teal-300/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
              >
                <span class="flex items-start justify-between gap-4">
                  <span
                    class="flex size-10 items-center justify-center rounded-xl bg-teal-300/15 text-teal-200"
                  >
                    <EnvelopeIcon class="size-5" />
                  </span>
                  <svg
                    class="size-4 text-teal-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
                <span class="mt-5 block text-sm text-teal-100/80">Email is the fastest way</span>
                <span class="mt-1 block break-all font-display text-lg font-semibold text-white">
                  contact@emadrahimi.dev
                </span>
              </a>
            </div>

            <div class="mt-10 border-t border-white/10 pt-6">
              <p class="flex items-center gap-2 text-sm text-slate-300">
                <MapPinIcon class="size-4 text-teal-200" />
                Based in Kurdistan, Iran
              </p>
              <div class="mt-5">
                <SocialLinks />
              </div>
            </div>
          </aside>
        </FadeUpOnScroll>

        <FadeUpOnScroll :delay="180" class="w-full grow lg:max-w-[580px]">
          <div
            class="h-full overflow-hidden rounded-[2rem] border border-white/[0.13] bg-[#091526] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <ContactForm />
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  </section>
</template>
