<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const activeCard = ref(0)

const skillItems = [
  {
    title: 'Team',
    subtitle: 'Player',
    titleClass: 'text-xl font-bold text-indigo-400',
    activeClass: 'bg-gradient-to-br from-indigo-500/20 to-blue-500/10'
  },
  {
    title: '2+ Years',
    subtitle: 'Experience',
    titleClass: 'text-xl font-bold text-emerald-400 whitespace-nowrap',
    activeClass: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10'
  },
  {
    title: 'Problem',
    subtitle: 'Solver',
    titleClass: 'text-xl font-bold text-amber-400',
    activeClass: 'bg-gradient-to-br from-amber-500/20 to-orange-500/10'
  },
  {
    title: 'Creative',
    subtitle: 'Thinker',
    titleClass: 'text-xl font-bold text-purple-400',
    activeClass: 'bg-gradient-to-br from-purple-500/20 to-pink-500/10'
  }
]

const getCardClasses = (index: number) => {
  return activeCard.value === index
    ? `${skillItems[index].activeClass} shadow-lg active-card`
    : 'bg-slate-800/40 shadow inactive-card'
}

onMounted(() => {
  isVisible.value = true
})

const rotateFocus = () => {
  activeCard.value = (activeCard.value + 1) % 4
}

// Start rotation every 3 seconds
onMounted(() => {
  setInterval(rotateFocus, 3000)
})
</script>

<template>
  <div
    class="relative flex h-full flex-col justify-center rounded-3xl p-8 shadow-xl bg-slate-900 simple-shadow teal-outer-border"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden rounded-3xl">
      <div
        class="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute right-20 bottom-5 h-24 w-24 rounded-full bg-amber-400/10 blur-3xl animate-pulse"
        style="animation-delay: 2s"
      ></div>
    </div>

    <!-- Main skills card -->
    <div
      class="w-[260px] relative mb-6 overflow-hidden rounded-2xl bg-slate-800/50 p-6 backdrop-blur-md shadow-lg border border-slate-700/30 transform transition-all duration-700 teal-glow"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    >
      <div
        class="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-teal-400/10 to-cyan-400/05 blur-xl"
      ></div>
      <div
        class="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-gradient-to-br from-red-400/10 to-amber-400/05 blur-xl"
      ></div>

      <div class="flex items-center justify-center text-center">
        <div>
          <div class="flex items-center">
            <div
              class="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent"
            >
              Full
            </div>
            <div class="relative mx-1 text-3xl font-extrabold">
              <span class="ml-1 bg-cyan-400 bg-clip-text text-transparent">Stack</span>
              <div class="hamburger-icon absolute -left-[18px] top-1/2 -translate-y-1/2">
                <span class="block h-0.5 w-3 bg-cyan-400 mb-1 rounded-full"></span>
                <span class="block h-0.5 w-3 bg-cyan-400 mb-1 rounded-full"></span>
                <span class="block h-0.5 w-30 bg-cyan-400 rounded-full"></span>
              </div>
            </div>
          </div>
          <div class="mt-1 text-base font-medium text-slate-300">Developer</div>
        </div>
      </div>
    </div>

    <!-- Skills cards grid with interactive focus -->
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="(item, index) in skillItems"
        :key="index"
        class="skill-card relative overflow-hidden rounded-xl p-4 border border-slate-700/30 transition-all duration-500 transform-gpu"
        :class="getCardClasses(index)"
      >
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div class="relative z-10">
          <div :class="item.titleClass">{{ item.title }}</div>
          <div class="text-slate-300">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>

    <!-- Progress indicator -->
    <div class="mt-6 flex justify-center gap-2">
      <button
        v-for="i in 4"
        :key="i"
        @click="activeCard = i - 1"
        class="h-1.5 rounded-full transition-all duration-300"
        :class="activeCard === i - 1 ? 'w-6 bg-teal-500' : 'w-1.5 bg-slate-600'"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.active-card {
  transform: scale(1.05);
  z-index: 10;
}

.inactive-card {
  transform: scale(1);
  z-index: 1;
}

/* Add transform-gpu to use hardware acceleration */
.transform-gpu {
  transform: translateZ(0);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.hamburger-icon {
  animation: pulsate 2s ease-in-out infinite alternate;
}

@keyframes pulsate {
  0% {
    opacity: 0.7;
    transform: translateY(-50%) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 8px 8px;
}

.skill-card {
  backdrop-filter: blur(10px);
}

.teal-glow {
  box-shadow:
    0 0 14px 2px rgba(20, 184, 166, 0.1),
    0 4px 4px -1px rgba(0, 0, 0, 0.14);
}

.teal-outer-border {
  position: relative;
  box-shadow:
    0 0 0 1px rgba(20, 184, 166, 0.1),
    0 0 20px 4px rgba(20, 184, 166, 0.1),
    0 0 15px rgba(0, 0, 0, 0.1);
}
</style>
