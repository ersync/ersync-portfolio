<script setup lang="ts">
import PrincipleCard from '@/ui/PrincipleCard.vue'
import SkillCard from '@/ui/SkillCard.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import HighlightGrid from '@/ui/base/HighlightGrid.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
</script>

<template>
  <div
    id="about"
    class="relative min-h-screen w-full overflow-hidden bg-[#F7F9FB] py-20 dark:bg-[#1b1b1f]"
  >
    <!-- Light Mode Specific Background -->
    <div
      class="absolute inset-0 dark:hidden"
      style="
        background: linear-gradient(160deg, #f4fcfc 0%, #efeff2 35%, #f0f2f2 55%, #e4f1f2 100%);
        filter: blur(80px);
      "
    />
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#F1F5F9]/30 via-transparent to-[#E6FFF9]/20 dark:hidden"
    />

    <!-- Decorative Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Top decoration -->
      <svg
        class="max-md:rotate-4 absolute -right-20 -top-10 h-full w-1/2 -rotate-6"
        viewBox="0 0 500 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #14b8a6; stop-opacity: 0.05" />
            <stop offset="100%" style="stop-color: #14b8a6; stop-opacity: 0.1" />
          </linearGradient>
        </defs>

        <path d="M250,0 L500,0 L500,180 C400,150 300,140 250,0" fill="url(#grad1)" />
        <path
          d="M300,0 L500,0 L500,140 C420,120 350,100 300,0"
          fill="#14b8a6"
          fill-opacity="0.03"
        />
      </svg>

      <!-- Bottom wave -->
      <svg class="absolute bottom-0 left-0 h-[200px] w-full">
        <use xlink:href="#bottom-wave" />
      </svg>
    </div>

    <!-- Content -->
    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader title="About Me" subtitle="" />
      </FadeUpOnScroll>

      <!-- Intro Section -->
      <FadeUpOnScroll :delay="200">
        <div
          class="mt-1 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-between"
        >
          <!-- Text Content -->
          <div class="space-y-5 text-gray-600 dark:text-[#E0E0E0]">
            <p class="leading-relaxed">
              Hi! I'm <strong class="font-VarelaRound">Emad</strong>, a web developer from Iran with
              a passion for crafting digital experiences. I specialize in
              <span class="rounded-md bg-gray-200/60 px-1 py-0.5 dark:bg-gray-500/25"
                >Ruby on Rails</span
              >
              and
              <span class="rounded-md bg-gray-200/60 px-1 py-0.5 dark:bg-gray-500/25">Vue.js</span>,
              bringing ideas to life by building features that solve problems and make things
              better. With every project, I combine technical precision and creative problem-solving
              to deliver solutions that leave a lasting impact.
            </p>
            <p class="leading-relaxed">
              Outside of coding, you'll catch me cheering at live sporting events, learning from
              developer communities, and exploring new technologies. I enjoy helping others when I
              can, as I believe we grow better together.
            </p>
          </div>

          <!-- Grid Content -->
          <HighlightGrid />
        </div>
      </FadeUpOnScroll>

      <!-- Skills Section -->
      <FadeUpOnScroll :delay="400">
        <div class="mt-12">
          <h3
            class="mb-6 text-center text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-left"
          >
            Core Technologies
          </h3>
          <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <SkillCard
              title="Ruby on Rails"
              description="backend"
              icon-name="rails"
              variant="red"
            />
            <SkillCard title="Vue.js" description="frontend" icon-name="vue" variant="green" />
            <SkillCard
              title="TypeScript"
              description="language"
              icon-name="typescript"
              variant="blue"
            />
            <SkillCard
              title="PostgreSQL"
              description="database"
              icon-name="postgresql"
              variant="cyan"
            />
          </div>
        </div>
      </FadeUpOnScroll>

      <!-- Development Principles Section -->
      <FadeUpOnScroll :delay="600">
        <div class="mt-20">
          <h3
            class="mb-6 text-center text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-left"
          >
            Development Principles
          </h3>
          <div class="grid gap-6 md:grid-cols-3">
            <PrincipleCard
              title="Clean Code"
              icon-name="lightning"
              description="Writing maintainable, well-documented code that stands the test of time"
              variant="teal"
            />
            <PrincipleCard
              title="Problem Solving"
              icon-name="setting"
              description="Breaking down complex challenges into manageable solutions."
              variant="rose"
            />
            <PrincipleCard
              title="Continuous Learning"
              icon-name="clock"
              description="Staying current with best practices and emerging technologies."
              variant="blue"
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </div>
</template>
