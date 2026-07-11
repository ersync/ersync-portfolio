<script setup lang="ts">
import PrincipleCard from '@/ui/PrincipleCard.vue'
import SkillCard from '@/ui/SkillCard.vue'
import SectionHeader from '@/ui/SectionHeader.vue'
import HighlightGrid from '@/ui/base/HighlightGrid.vue'
import FadeUpOnScroll from '@/ui/FadeUpOnScroll.vue'
import SectionBackdrop from '@/ui/SectionBackdrop.vue'
</script>

<template>
  <div id="about" class="relative min-h-screen w-full overflow-hidden py-16 sm:py-20">
    <SectionBackdrop />

    <div class="container relative z-10">
      <FadeUpOnScroll>
        <SectionHeader title="About Me" subtitle="" />
      </FadeUpOnScroll>

      <!-- Intro Section -->
      <FadeUpOnScroll :delay="200">
        <div
          class="mt-4 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-between"
        >
          <div
            class="space-y-4 sm:space-y-5 backdrop-blur-sm rounded-xl p-4 sm:p-6 bg-slate-800/30 border border-slate-700/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(15,118,110,0.1),0_10px_15px_-6px_rgba(15,118,110,0.05)] transition-shadow duration-300"
          >
            <div class="space-y-3">
              <div
                class="flex items-center text-lg sm:text-xl"
                style="font-family: 'Plus Jakarta Sans', sans-serif"
              >
                Hello there! I'm
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400 mx-1 font-medium"
                >
                  Emad
                </span>
                <span class="text-teal-500 ml-0.5">👋🏻</span>
              </div>

              <p
                class="text-base leading-relaxed text-slate-300"
                style="font-family: 'Inter', sans-serif"
              >
                A web developer from Iran with a passion for transforming ideas into elegant digital
                experiences. I craft
                <span class="relative inline-block px-1.5 py-0.5 mx-0.5 group">
                  <span
                    class="absolute inset-0 bg-teal-500/10 rounded-md transform group-hover:scale-105 transition duration-200"
                  ></span>
                  <span class="relative text-teal-400">Ruby on Rails</span>
                </span>
                and
                <span class="relative inline-block px-1.5 py-0.5 mx-0.5 group">
                  <span
                    class="absolute inset-0 bg-teal-500/10 rounded-md transform group-hover:scale-105 transition duration-200"
                  ></span>
                  <span class="relative text-teal-400">Vue.js</span>
                </span>
                solutions that solve real problems and enhance user experiences.
              </p>
            </div>

            <p
              class="text-sm leading-relaxed text-slate-400"
              style="font-family: 'Inter', sans-serif"
            >
              My approach combines <span class="text-slate-300">technical precision</span> with
              <span class="text-slate-300">creative problem-solving</span>, resulting in code that's
              not just functional but thoughtfully crafted. When I'm not immersed in code, you'll
              find me cheering at live sporting events, engaging with developer communities, and
              exploring emerging technologies that push the boundaries of what's possible on the
              web.
            </p>

            <div class="pt-1 sm:pt-2 flex items-center justify-start space-x-2">
              <div class="h-1 w-1 rounded-full bg-teal-400"></div>
              <div class="h-1 w-1 rounded-full bg-teal-400"></div>
              <div
                class="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
              ></div>
            </div>
          </div>

          <!-- Grid Content -->
          <HighlightGrid class="glow-container" />
        </div>
      </FadeUpOnScroll>

      <!-- Skills Section -->
      <FadeUpOnScroll :delay="400">
        <div class="mt-16">
          <h3
            class="mb-8 text-xl font-semibold text-slate-200 text-center sm:text-left relative inline-block"
          >
            <span class="relative z-10">Core Technologies</span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-teal-500/20 rounded-full"></span>
          </h3>
          <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <SkillCard
              title="RoR"
              description="backend"
              icon-name="rails"
              variant="red"
              class="skill-card"
            />
            <SkillCard
              title="Vue.js"
              description="frontend"
              icon-name="vue"
              variant="green"
              class="skill-card"
            />
            <SkillCard
              title="TypeScript"
              description="language"
              icon-name="typescript"
              variant="blue"
              class="skill-card"
            />
            <SkillCard
              title="PostgreSQL"
              description="database"
              icon-name="postgresql"
              variant="cyan"
              class="skill-card"
            />
          </div>
        </div>
      </FadeUpOnScroll>

      <!-- Development Principles Section -->
      <FadeUpOnScroll :delay="600">
        <div class="mt-20">
          <h3
            class="mb-8 text-xl font-semibold text-slate-200 text-center sm:text-left relative inline-block"
          >
            <span class="relative z-10">Development Principles</span>
            <span class="absolute -bottom-1 left-0 w-full h-1 bg-teal-500/20 rounded-full"></span>
          </h3>
          <div class="grid gap-6 md:grid-cols-3">
            <PrincipleCard
              title="Clean Code"
              icon-name="lightning"
              description="Writing maintainable, well-documented code that stands the test of time"
              variant="teal"
              class="principle-card"
            />
            <PrincipleCard
              title="Problem Solving"
              icon-name="setting"
              description="Breaking down complex challenges into manageable solutions."
              variant="rose"
              class="principle-card"
            />
            <PrincipleCard
              title="Continuous Learning"
              icon-name="clock"
              description="Staying current with best practices and emerging technologies."
              variant="blue"
              class="principle-card"
            />
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(51, 65, 85, 0.5);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -5px rgba(15, 118, 110, 0.15);
}

.principle-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(51, 65, 85, 0.5);
  backdrop-filter: blur(8px);
  background: rgba(30, 41, 59, 0.5);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.principle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(15, 118, 110, 0.15);
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
  background: radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
  filter: blur(30px);
}

.tag-highlight {
  display: inline-block;
  padding: 0px 3px;
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 0.375rem;
  font-weight: 500;
  color: #2dd4bf;
  transition: all 0.2s ease;
}

.tag-highlight:hover {
  background: rgba(45, 212, 191, 0.15);
  transform: translateY(-1px);
}
</style>
