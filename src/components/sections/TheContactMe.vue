<script setup lang="ts">
import SectionHeader from '@/ui/SectionHeader.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import ContactInfoCard from '@/components/sections/contact-me/ContactInfoCard.vue'
import SocialLinks from '@/components/sections/contact-me/SocialLinks.vue'
import ContactForm from '@/components/sections/contact-me/ContactForm.vue'
</script>

<template>
  <section
    id="contact"
    class="relative w-full overflow-hidden bg-[#F7F9FB] py-20 dark:bg-[#1b1b1f]"
  >
    <div
      class="absolute inset-0"
      :style="{
        background: 'linear-gradient(160deg, var(--gradient-colors))',
        '--gradient-colors': 'var(--gradient)',
        filter: 'blur(80px)'
      }"
    />
    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          title="Contact Me"
          subtitle="Let's create something amazing and useful together"
        />
      </FadeUpOnScroll>

      <div class="item-center flex flex-col justify-center gap-4 md:flex-row custom-md:gap-6">
        <!-- Contact Info Cards -->
        <FadeUpOnScroll :delay="200" class="shrink-0 grow space-y-6 md:max-w-[400px]">
          <div class="space-y-6">
            <ContactInfoCard type="email" />
            <ContactInfoCard type="location" />
            <SocialLinks />
          </div>
        </FadeUpOnScroll>

        <!-- Contact Form -->
        <FadeUpOnScroll :delay="400" class="grow md:max-w-[400px]">
          <ContactForm />
        </FadeUpOnScroll>
      </div>
    </div>
  </section>
</template>
