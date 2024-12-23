<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import Typed from 'typed.js'
import BaseIcon from '@/components/base/BaseIcon.vue'

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
    <div class="absolute inset-0 bg-[#f5f5f5]/85">
      <!-- Content -->
      <div class="absolute left-[10.4rem] top-[23.5rem] text-charcoal antialiased">
        <h1 class="font-Raleway text-[4rem] leading-[5rem]">Emad Rahimi</h1>
        <p class="font-Poppins text-[1.6rem] font-medium">
          I am <span class="typed-span text-sage" ref="typedElement" />
        </p>

        <div class="mt-8 flex items-center justify-start gap-8">
          <a href="https://github.com/ersync"
            ><base-icon
              name="github"
              class="h-auto w-9 p-2 text-charcoal transition-all hover:text-sage"
          /></a>

          <a href="linkedin.com/"
            ><base-icon
              name="linkedin"
              class="h-auto w-[34px] p-2 pb-[10px] text-charcoal transition-all hover:text-sage"
          /></a>

          <a href="twitter.com/"
            ><base-icon
              name="x"
              class="h-auto w-[33px] p-2 text-charcoal transition-all hover:text-sage"
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
