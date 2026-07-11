<script setup lang="ts">
import TheNavigation from '@/components/desktop-navigation/TheNavigation.vue'
import IconSprite from '@/ui/base/IconSprite.vue'
import TheHero from '@/components/sections/TheHero.vue'
import TheAbout from '@/components/sections/TheAbout.vue'
import TheProjects from '@/components/sections/TheProjects.vue'
import TheJourney from '@/components/sections/TheJourney.vue'
import TheContactMe from '@/components/sections/TheContactMe.vue'
import TheFooter from '@/components/sections/TheFooter.vue'
import MobileNavigation from '@/components/mobile-navigation/MobileNavigation.vue'
</script>

<template>
  <div>
    <MobileNavigation />
    <IconSprite />
    <TheNavigation />
    <TheHero />
    <TheAbout />
    <TheProjects />
    <TheJourney />
    <TheContactMe />
    <TheFooter />
  </div>
</template>
