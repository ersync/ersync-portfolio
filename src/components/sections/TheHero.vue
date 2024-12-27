<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import Typed from 'typed.js'
import BaseIcon from '@/ui/base/BaseIcon.vue'

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

onMounted(() => {
  initializeTyped()
})

onUnmounted(() => {
  destroyTyped()
})
</script>

<template>
  <div id="home" class="relative h-screen w-full">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-left-top bg-no-repeat"
      style="background-image: url('/src/assets/background.jpg')"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 flex w-full items-center justify-center bg-[#f5f5f5]/85">
      <!-- Content -->
      <div
        class="ml-[18vw] flex w-full flex-col items-start justify-center text-charcoal antialiased custom-md:ml-[14vw]"
      >
        <h1
          class="text-center font-Raleway text-[28px] xs:text-[38px] sm:text-[48px] md:text-[56px] custom-md:text-[64px]"
        >
          Emad Rahimi
        </h1>
        <p
          class="font-Poppins text-[17px] font-medium xs:text-[22px] sm:text-[25px] md:text-[28px]"
        >
          I am <span class="typed-span text-sage" ref="typedElement" />
        </p>
        <div class="mt-8 flex items-center justify-center gap-8 md:justify-start">
          <a href="https://github.com/ersync"
            ><base-icon
              name="github"
              class="h-auto w-[34px] p-2 text-charcoal transition-all hover:text-sage sm:w-9"
          /></a>

          <a href="linkedin.com/"
            ><base-icon
              name="linkedin"
              class="h-auto w-[32px] p-2 pb-[10px] text-charcoal transition-all hover:text-sage sm:w-[34px]"
          /></a>

          <a href="twitter.com/"
            ><base-icon
              name="x"
              class="h-auto w-[31px] p-2 text-charcoal transition-all hover:text-sage sm:w-[33px]"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typed-cursor {
  color: #79a79f !important;
}
</style>
