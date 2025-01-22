<script setup lang="ts">
import { onMounted, ref, onUnmounted, nextTick } from 'vue'
import bgDesktop from '@/assets/images/hero/bg-desktop.png'
import bgMobile from '@/assets/images/hero/bg-mobile.png'
import Typed from 'typed.js'
import BaseIcon from '@/ui/base/BaseIcon.vue'

const shouldShow = ref(false)
const typedElement = ref<HTMLElement | null>(null)
let typedInstance: Typed | null = null

const initializeTyped = () => {
  if (typedElement.value) {
    typedInstance = new Typed(typedElement.value, {
      strings: [
        'a Developer',
        'a Nature Explorer',
        'a Problem Solver',
        'a Lifelong Learner',
        'Turning Coffee into Code'
      ],
      typeSpeed: 110,
      backSpeed: 70,
      backDelay: 2000,
      loop: true
    })
  }
}

const destroyTyped = () => {
  typedInstance?.destroy()
  typedInstance = null
}

const initializeWithDelay = () => {
  shouldShow.value = true
  void nextTick(() => {
    if (typedElement.value) {
      initializeTyped()
    }
  })
}

onMounted(() => {
  setTimeout(initializeWithDelay, 100)
})

onUnmounted(() => {
  destroyTyped()
})
</script>

<template>
  <div id="home" class="relative h-screen w-full overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 hidden bg-cover bg-no-repeat md:block md:bg-right lg:bg-left-bottom"
      :style="{ backgroundImage: `url(${bgDesktop})` }"
    />
    <div
      class="absolute inset-0 bg-cover bg-left-bottom bg-no-repeat md:hidden"
      :style="{ backgroundImage: `url(${bgMobile})` }"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 flex w-full items-center justify-center">
      <!-- Theme-based overlay with gradient -->

      <div class="light-gradient absolute inset-0" />
      <div class="dark-gradient absolute inset-0" />

      <!-- Animated orbs -->
      <div
        class="animate-pulse-slow absolute left-0 top-[-20%] z-[1] size-[50%] rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-200/25"
      />
      <div
        class="animate-pulse-slow absolute bottom-[-20%] right-0 z-[1] size-[50%] rounded-full bg-teal-300/20 blur-3xl dark:bg-pink-200/25"
      />

      <!-- Content -->
      <Transition appear name="zoom-in">
        <div
          v-if="shouldShow"
          class="relative z-[2] ml-[18vw] flex w-full select-none flex-col items-start justify-center custom-md:ml-[16vw]"
        >
          <h1
            class="text-center font-Raleway text-[28px] font-bold text-black/100 drop-shadow-sm dark:text-white/85 dark:drop-shadow-lg xs:text-[38px] sm:text-[48px] md:text-[56px] custom-md:text-[64px]"
          >
            Emad Rahimi
          </h1>

          <p
            class="font-Poppins text-[17px] font-bold text-gray-900 dark:font-medium dark:text-white/85 xs:text-[22px] sm:text-[25px] md:text-[28px]"
          >
            I am
            <span
              class="typed-span text-shadow-sm font-extrabold text-teal-800 dark:font-semibold dark:text-[#4c927e]"
              ref="typedElement"
            />
          </p>

          <div class="social-media mt-8 flex items-center justify-center gap-8 md:justify-start">
            <a href="https://github.com/ersync" class="transition-all duration-300 hover:scale-110">
              <base-icon
                name="github"
                class="h-auto w-[34px] p-2 text-[#121212] transition-all hover:text-teal-600 dark:text-[#ffffffe4] dark:hover:text-[#4c927e] sm:w-9"
              />
            </a>

            <a href="linkedin.com/" class="transition-all duration-300 hover:scale-110">
              <base-icon
                name="linkedin"
                class="h-auto w-[32px] p-2 pb-[10px] text-[#101010] transition-all hover:text-teal-600 dark:text-[#ffffffe4] dark:hover:text-[#4c927e] sm:w-[34px]"
              />
            </a>

            <a href="twitter.com/" class="transition-all duration-300 hover:scale-110">
              <base-icon
                name="x"
                class="h-auto w-[31px] p-2 text-[#121212] transition-all hover:text-teal-600 dark:text-[#ffffffe4] dark:hover:text-[#4c927e] sm:w-[33px]"
              />
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.typed-cursor {
  color: #0f766e !important;
}

.dark .typed-cursor {
  color: #4c927e !important;
}

.zoom-in-enter-from {
  opacity: 0;
  transform: scale(0.89);
}

.zoom-in-enter-active {
  transition: all 1s ease-out;
}

.zoom-in-enter-to {
  opacity: 1;
  transform: scale(1);
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.typed-span,
.typed-cursor {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .typed-span,
.dark .typed-cursor {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.light-gradient {
  opacity: 1;
  transition: opacity 1400ms ease;
}

@media (max-width: 640px) {
  .light-gradient {
    background: linear-gradient(
      -54deg,
      #ffffff00 0%,
      #ffffff31 20%,
      #ffffff21 40%,
      #ffffff60 50%,
      #ffffff89 57%,
      #ffffff60 58%,
      #ffffff71 62%,
      #ffffff17 75%,
      #ffffff1a 100%
    );
  }
}

@media (min-width: 641px) {
  .light-gradient {
    background: linear-gradient(
      -11deg,
      transparent 0%,
      rgba(255, 255, 255, 0.01) 10%,
      rgba(255, 255, 255, 0.01) 20%,
      rgba(255, 255, 255, 0.4) 52%,
      rgba(255, 255, 255, 0.53) 59%,
      rgba(255, 255, 255, 0.62) 60%,
      rgba(255, 255, 255, 0.4) 70%,
      rgba(255, 255, 255, 0.3) 79%,
      rgba(255, 255, 255, 0.31) 100%,
      transparent 100%
    );
  }
}

.dark-gradient {
  opacity: 0;
  transition: opacity 1400ms ease;
}

@media (max-width: 640px) {
  .dark-gradient {
    background: linear-gradient(
      to bottom left,
      rgba(18, 18, 18, 0.03),
      rgba(18, 18, 18, 0.6),
      rgba(18, 18, 18, 0.75),
      rgba(18, 18, 18, 0.6)
    );
  }
}

@media (min-width: 641px) {
  .dark-gradient {
    background: linear-gradient(
      -121deg,
      rgba(255, 255, 255, 0.01),
      rgba(18, 18, 18, 0.35),
      rgba(18, 18, 18, 0.55),
      rgba(18, 18, 18, 0.65),
      rgba(18, 18, 18, 0.19)
    );
  }
}

:is(.dark .light-gradient) {
  opacity: 0;
}

:is(.dark .dark-gradient) {
  opacity: 1;
}

.text-shadow-sm {
  text-shadow: 0 0 1.7px rgba(210, 210, 210, 1);
}

@media (min-width: 1810px) {
  .social-media {
    margin-left: 82px;
  }
}
</style>
