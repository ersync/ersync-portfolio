<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import IconSprite from '@/components/IconSprite.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
  <IconSprite />
  <NavBar />
  <HeroSection />
  <div id="about" class="h-screen w-full bg-green-400" />
  <div id="projects" class="h-screen w-full bg-red-400" />
  <div id="services" class="h-screen w-full bg-blue-400" />
  <div id="contact" class="h-screen w-full bg-teal-300" />
</template>
