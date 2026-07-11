<script setup lang="ts">
import ContactForm from '@/components/sections/contact-me/ContactForm.vue'
import ContactInfoCard from '@/components/sections/contact-me/ContactInfoCard.vue'
import SocialLinks from '@/components/sections/contact-me/SocialLinks.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
</script>

<template>
  <section id="contact" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <SectionBackdrop />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader title="Contact Me" subtitle="Let's create something useful together" />
      </FadeUpOnScroll>

      <div class="mt-10 flex flex-col justify-center gap-8 md:flex-row md:gap-10">
        <FadeUpOnScroll :delay="150" class="shrink-0 grow md:max-w-[400px]">
          <div
            class="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 shadow-sm backdrop-blur-sm"
          >
            <ContactInfoCard type="email" />
            <div class="my-6 h-px bg-gradient-to-r from-slate-700 to-transparent" />
            <ContactInfoCard type="location" />
            <div class="my-6 h-px bg-gradient-to-r from-slate-700 to-transparent" />
            <SocialLinks />
          </div>
        </FadeUpOnScroll>

        <FadeUpOnScroll :delay="250" class="grow md:max-w-[500px]">
          <div
            class="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 shadow-sm backdrop-blur-sm"
          >
            <ContactForm />
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  </section>
</template>
