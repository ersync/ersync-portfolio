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
  <section id="contact" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <SectionBackdrop tone="teal" />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          eyebrow="04 / Contact"
          title="Let’s make it real."
          subtitle="Have a useful idea, an interesting problem, or a team that values thoughtful work? My inbox is open."
        />
      </FadeUpOnScroll>

      <div
        class="mx-auto mt-10 flex max-w-5xl flex-col items-stretch justify-center gap-8 lg:flex-row lg:gap-10"
      >
        <FadeUpOnScroll :delay="150" class="w-full shrink-0 grow lg:max-w-[420px]">
          <div
            class="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0c0f1e]/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.12] sm:p-8"
          >
            <div class="space-y-6">
              <div>
                <h3 class="font-display text-xl font-bold text-white tracking-tight">Reach out</h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-400">
                  Whether you have a project in mind, want to collaborate, or just say hello, I'd
                  love to hear from you.
                </p>
              </div>

              <div class="space-y-4">
                <div
                  class="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.005] p-5 transition-colors duration-300 hover:border-white/[0.08] hover:bg-white/[0.015]"
                >
                  <div class="flex items-center space-x-4">
                    <div
                      class="rounded-xl bg-teal-500/10 border border-teal-500/20 p-2.5 text-teal-400"
                    >
                      <EnvelopeIcon class="size-5" />
                    </div>
                    <div>
                      <h4
                        class="text-[10px] font-extrabold uppercase tracking-widest text-slate-500"
                      >
                        Email Address
                      </h4>
                      <a
                        href="mailto:contact@emadrahimi.dev"
                        class="mt-0.5 block text-sm font-semibold text-slate-200 transition-colors hover:text-teal-300"
                      >
                        contact@emadrahimi.dev
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.005] p-5 transition-colors duration-300 hover:border-white/[0.08] hover:bg-white/[0.015]"
                >
                  <div class="flex items-center space-x-4">
                    <div
                      class="rounded-xl bg-teal-500/10 border border-teal-500/20 p-2.5 text-teal-400"
                    >
                      <MapPinIcon class="size-5" />
                    </div>
                    <div>
                      <h4
                        class="text-[10px] font-extrabold uppercase tracking-widest text-slate-500"
                      >
                        Location
                      </h4>
                      <p class="mt-0.5 text-sm font-semibold text-slate-200">Tehran, Iran</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 border-t border-white/[0.05] pt-6">
              <h4
                class="mb-4 text-[10px] font-extrabold tracking-widest text-slate-500 uppercase select-none"
              >
                Connect elsewhere
              </h4>
              <SocialLinks />
            </div>
          </div>
        </FadeUpOnScroll>

        <FadeUpOnScroll :delay="220" class="w-full grow lg:max-w-[580px]">
          <div
            class="h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0f1e]/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.12] sm:p-8"
          >
            <ContactForm />
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  </section>
</template>
