<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import ContactInfoCard from '@/components/sections/contact-me/ContactInfoCard.vue'
import SocialLinks from '@/components/sections/contact-me/SocialLinks.vue'
import ContactForm from '@/components/sections/contact-me/ContactForm.vue'

const isLoaded = ref(false)

const isMobile = ref(window.innerWidth < 768)

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 200)

  handleResize()
  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
  <section id="contact" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <div class="absolute inset-0 z-0">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900"></div>

      <div
        class="absolute -left-20 bottom-1/4 md:h-64 md:w-64 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl animate-float-reverse glow"
      ></div>
      <div
        class="absolute -right-20 top-1/4 md:h-72 md:w-72 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl animate-float-delay glow indigo-glow"
      ></div>
      <div
        class="absolute right-1/3 top-2/3 md:h-48 md:w-48 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow glow cyan-glow"
      ></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <!-- Decorative waves -->
      <svg
        class="absolute -right-20 -top-10 h-full w-1/2 -rotate-6 max-md:rotate-4 opacity-10"
        viewBox="0 0 500 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="contactGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #14b8a6; stop-opacity: 0.2" />
            <stop offset="100%" style="stop-color: #14b8a6; stop-opacity: 0.4" />
          </linearGradient>
        </defs>

        <path d="M250,0 L500,0 L500,180 C400,150 300,140 250,0" fill="url(#contactGrad1)" />
        <path
          d="M300,0 L500,0 L500,140 C420,120 350,100 300,0"
          fill="#14b8a6"
          fill-opacity="0.15"
        />
      </svg>

      <!-- Bottom wave -->
      <div class="absolute bottom-0 left-0 h-[200px] w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-full w-full opacity-10">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,2,0,3.38Z"
            fill="url(#contactBottomGradient)"
            class="shape-fill"
          ></path>
          <defs>
            <linearGradient id="contactBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0d9488" stop-opacity="0.3" />
              <stop offset="50%" stop-color="#14b8a6" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader
          title="Contact Me"
          subtitle="Let's create something amazing and useful together"
        />
      </FadeUpOnScroll>

      <div class="mt-10 flex flex-col justify-center gap-8 md:flex-row md:gap-10">
        <!-- Contact Info Cards -->
        <FadeUpOnScroll :delay="200" class="shrink-0 grow space-y-6 md:max-w-[400px]">
          <div
            class="space-y-6 transition-all duration-500"
            :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          >
            <!-- Info Cards Container -->
            <div
              class="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg glow-container"
            >
              <ContactInfoCard type="email" />
              <div class="my-6 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
              <ContactInfoCard type="location" />
              <div class="my-6 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
              <SocialLinks />
            </div>
          </div>
        </FadeUpOnScroll>

        <!-- Contact Form -->
        <FadeUpOnScroll :delay="400" class="grow md:max-w-[500px]">
          <div
            class="relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm shadow-sm transition-all duration-500 hover:shadow-lg glow-container-form"
            :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          >
            <ContactForm />
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glow {
  filter: blur(40px);
  animation: glow-pulse 12s ease-in-out infinite;
  will-change: opacity, filter;
}

.indigo-glow {
  box-shadow: 0 0 60px 15px rgba(99, 102, 241, 0.12);
}

.cyan-glow {
  box-shadow: 0 0 60px 15px rgba(34, 211, 238, 0.12);
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.5;
    filter: blur(40px);
  }
  50% {
    opacity: 0.3;
    filter: blur(50px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(20px) translateX(-15px);
  }
}

@keyframes float-delay {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(15px);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(15px) translateX(10px);
  }
}

.animate-float-reverse {
  animation: float-reverse 24s ease-in-out infinite;
  will-change: transform;
}

.animate-float-delay {
  animation: float-delay 30s ease-in-out infinite;
  will-change: transform;
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
  animation-delay: 2s;
  will-change: transform;
}

.glow-container {
  position: relative;
}

.glow-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
  filter: blur(20px);
}

.glow-container-form {
  position: relative;
}

.glow-container-form::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
  filter: blur(20px);
}
</style>
