<script setup lang="ts">
import TheNavigation from '@/components/navigation/TheNavigation.vue'
import IconSprite from '@/ui/base/IconSprite.vue'
import TheHero from '@/components/sections/TheHero.vue'
import TheAbout from '@/components/sections/TheAbout.vue'
import TheProjects from '@/components/sections/TheProjects.vue'
</script>

<template>
  <IconSprite />
  <TheNavigation />
  <TheHero />
  <TheAbout />
  <TheProjects />
  <div id="services" class="h-screen w-full bg-blue-400" />
  <div id="contact" class="h-screen w-full bg-teal-300" />
</template>
