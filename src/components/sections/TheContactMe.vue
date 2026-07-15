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
  <section id="contact" class="deferred-section relative w-full overflow-hidden py-16 sm:py-24">
    <SectionBackdrop tone="teal" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="04 / Contact"
          title="Let’s make it real."
          subtitle="Have something in mind? I’d be glad to hear about it."
          subtitle-emphasis
        />
      </FadeUpOnScroll>

      <div
        class="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-0"
      >
        <FadeUpOnScroll :delay="120" class="w-full lg:col-start-1 lg:row-start-1">
          <a
            href="mailto:contact@emadrahimi.dev"
            class="group block border-y border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 lg:mt-6"
          >
            <span class="flex items-start justify-between gap-4">
              <span class="flex size-10 items-center justify-center text-teal-200">
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
            <span
              class="mt-4 block text-xs font-semibold tracking-[0.08em] text-slate-400 uppercase"
            >
              Email
            </span>
            <span
              class="mt-1 block break-all font-display text-lg font-semibold text-white sm:text-xl"
            >
              contact@emadrahimi.dev
            </span>
          </a>
        </FadeUpOnScroll>

        <FadeUpOnScroll :delay="180" class="w-full lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div
            class="contact-panel relative h-full overflow-hidden rounded-[2rem] border border-sky-200/10 p-6 sm:p-8"
          >
            <div
              class="pointer-events-none absolute -bottom-40 -left-28 size-80 rounded-full bg-cyan-500/[0.025] blur-3xl"
              aria-hidden="true"
            />
            <div class="relative z-10">
              <ContactForm />
            </div>
          </div>
        </FadeUpOnScroll>

        <FadeUpOnScroll :delay="220" class="w-full self-end lg:col-start-1 lg:row-start-2 lg:pb-6">
          <div class="border-t border-white/10 pt-6">
            <p class="flex items-center gap-2 text-sm text-slate-300">
              <MapPinIcon class="size-4 text-teal-200" />
              Based in Kurdistan, Iran
            </p>
            <div class="mt-5">
              <SocialLinks />
            </div>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-panel {
  background:
    radial-gradient(ellipse at 100% 3%, rgba(44, 82, 135, 0.055), transparent 24%),
    radial-gradient(ellipse at 72% 17%, rgba(34, 64, 107, 0.035), transparent 28%),
    radial-gradient(circle at 8% 94%, rgba(10, 75, 94, 0.07), transparent 38%),
    linear-gradient(145deg, #0b1a2b 0%, #07111f 44%, #030812 72%, #010308 100%);
  box-shadow:
    inset 0 1px 0 rgba(186, 230, 253, 0.05),
    0 32px 100px rgba(0, 0, 0, 0.62);
}

.contact-panel::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    118deg,
    transparent 18%,
    rgba(125, 190, 231, 0.02) 47%,
    transparent 72%
  );
  content: '';
}
</style>
