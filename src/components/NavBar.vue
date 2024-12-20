<script setup lang="ts">
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <header class="fixed top-1/2 ml-2 -translate-y-1/2">
    <nav>
      <ul class="flex flex-col items-start justify-center gap-y-2.5">
        <NavItem name="home" />
        <NavItem name="about" />
        <NavItem name="projects" />
        <NavItem name="services" />
        <NavItem name="contact" />
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
