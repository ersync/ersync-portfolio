<script setup lang="ts">
import NavBar from '@/components/navigation/NavBar.vue'
import IconSprite from '@/components/base/IconSprite.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
</script>

<template>
  <IconSprite />
  <NavBar />
  <HeroSection />
  <AboutSection />
  <div
    id="services"
    class="h-screen w-full bg-blue-400"
  />
  <div
    id="contact"
    class="h-screen w-full bg-teal-300"
  />
</template>
