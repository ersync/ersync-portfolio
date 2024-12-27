<script setup lang="ts">
import PrincipleCard from '@/ui/PrincipleCard.vue'
import SkillCard from '@/ui/SkillCard.vue'
</script>

<template>
  <div
    id="about"
    class="relative h-screen min-h-min w-full overflow-hidden bg-gradient-to-br from-[#fbfbfb] via-gray-50 to-gray-300 py-16"
  >
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

        <circle cx="450" cy="50" r="3" fill="#14b8a6" fill-opacity="0.1" />
        <circle cx="470" cy="70" r="2" fill="#14b8a6" fill-opacity="0.1" />
        <circle cx="430" cy="40" r="2" fill="#14b8a6" fill-opacity="0.1" />
      </svg>

      <!-- Bottom wave -->

      <svg class="absolute bottom-0 left-0 h-[200px] w-full">
        <use xlink:href="#bottom-wave" />
      </svg>
    </div>

    <!-- Content -->
    <div class="container relative z-10">
      <!-- Section Title -->
      <div class="flex items-center justify-start gap-2">
        <div class="h-7 w-[2.5px] rounded-md bg-teal-500" />
        <h2 class="font-VarelaRound text-3xl font-bold text-gray-800">About Me</h2>
      </div>

      <!-- Main Content -->

      <!-- Intro Section -->
      <div
        class="mt-8 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-between"
      >
        <!-- Text Content -->
        <div class="space-y-5">
          <p class="leading-relaxed text-gray-600">
            Hi! I'm <strong>Emad</strong>, a web developer from Iran with a passion for crafting
            digital experiences. I specialize in
            <span class="rounded-md bg-gray-200/60 px-1 py-0.5">Ruby on Rails</span> and
            <span class="rounded-md bg-gray-200/60 px-1 py-0.5">Vue.js</span>, spending my time
            squashing bugs and building features to solve tricky problems and make life easier. My
            work blends Middle Eastern creativity with modern web technologies for a unique
            perspective on every project.
          </p>
          <p class="leading-relaxed text-gray-600">
            Outside of coding, you'll catch me cheering at live sporting events, learning from
            developer communities, and exploring new technologies. I enjoy helping others when I
            can, as I believe we grow better together.
          </p>
        </div>

        <!-- Grid Content -->
        <div
          class="flex h-full flex-wrap items-stretch justify-center gap-4 sm:shrink-0 lg:max-w-[50%]"
        >
          <div class="w-[47%] rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur">
            <div class="text-2xl font-bold text-teal-600">2+ Years</div>
            <div class="text-sm text-gray-500">Experience</div>
          </div>
          <div class="w-[47%] rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur">
            <div class="text-2xl font-bold text-teal-600">
              Fu<span class="relative font-bold text-red-400/90"
                >ll
                <span class="absolute left-[2px] top-[7.2px] h-[2px] w-[8px] bg-red-400/50" />
                <span class="absolute left-[2px] top-[12.4px] h-[2px] w-[8px] bg-red-400/50" />
                <span class="absolute left-[2px] top-[17.5px] h-[2px] w-[8px] bg-red-400/50" />
              </span>
              Stack
            </div>
            <div class="text-sm text-gray-500">Developer</div>
          </div>
          <div class="w-[47%] rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur">
            <div class="text-2xl font-bold text-teal-600">Problem</div>
            <div class="text-sm text-gray-500">Solver</div>
          </div>
          <div class="w-[47%] rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur">
            <div class="text-2xl font-bold text-teal-600">Team</div>
            <div class="text-sm text-gray-500">Player</div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mt-12">
        <h3 class="mb-6 text-center text-xl font-semibold text-gray-800 sm:text-left">
          Technical Skills
        </h3>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <!-- Rails -->
          <SkillCard
            title="Ruby on Rails"
            description="backend"
            icon-name="rails"
            icon-color="#e11d48"
            icon-bg-color="#fff1f2"
            background-color="#fff7f7d9"
            shadow-color="red"
          />

          <SkillCard
            title="Vue.js"
            description="front"
            icon-name="vue"
            icon-color="#059669"
            icon-bg-color="#ecfdf5"
            background-color="#f9fff9d9"
            shadow-color="green"
          />

          <SkillCard
            title="TypeScript"
            description="language"
            icon-name="typescript"
            icon-color="#2563eb"
            icon-bg-color="#eff6ff"
            background-color="#eff6ffd9"
            shadow-color="blue"
          />

          <SkillCard
            title="PostgreSQL"
            description="database"
            icon-name="postgresql"
            icon-color="#e11d48"
            icon-bg-color="#eef2ff"
            background-color="#f5fefea7"
            shadow-color="cyan"
          />
        </div>
      </div>
      <!-- Development Principles Section -->
      <div class="mt-20">
        <h3 class="mb-6 text-center text-xl font-semibold text-gray-800 sm:text-left">
          Development Principles
        </h3>
        <div class="grid gap-6 md:grid-cols-3">
          <principle-card
            title="Clean Code"
            icon-name="lightning"
            description="Writing maintainable, well-documented code that stads the test of time"
            icon-color="#0d9488"
            icon-bg-color="#f0fdfa"
          />

          <principle-card
            title="Problem Solving"
            icon-name="setting"
            description="Breaking down complex challenges into manageable solutions."
            icon-color="#e11d48"
            icon-bg-color="#fff1f288"
          />

          <principle-card
            title="Continuous Learning"
            icon-name="clock"
            description="Staying current with best practices and emerging technologies."
            icon-color="#2563eb"
            icon-bg-color="#dbeafe88"
          />
        </div>
      </div>
    </div>
  </div>
</template>
