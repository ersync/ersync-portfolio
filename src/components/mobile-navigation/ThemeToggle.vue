<template>
  <button
    @click="$emit('toggle')"
    @mouseenter="$emit('hover', true)"
    @mouseleave="$emit('hover', false)"
    class="theme-toggle -ml-2 scale-75 md:scale-90"
    :class="{ 'is-dark': isDark }"
  >
    <div class="toggle-background" />
    <div class="toggle-thumb" :class="{ 'is-dark': isDark }">
      <!-- Sun Icon -->
      <svg
        v-if="!isDark"
        class="icon sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <!-- Moon Icon -->
      <svg v-else class="icon moon" viewBox="0 0 24 24">
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
        <g class="stars" v-if="isHovered">
          <circle cx="15" cy="9" r="1" />
          <circle cx="18" cy="12" r="0.5" />
          <circle cx="16" cy="15" r="0.8" />
        </g>
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean
  isHovered: boolean
}>()

defineEmits<{
  toggle: []
  hover: [value: boolean]
}>()
</script>

<style scoped>
.theme-toggle {
  @apply relative w-16 h-8 rounded-full p-1 transition-all duration-500;
  background: linear-gradient(90deg, rgba(13, 148, 136, 0.2), rgba(236, 72, 153, 0.2));
}

.theme-toggle:hover {
  background: linear-gradient(90deg, rgba(13, 148, 136, 0.3), rgba(236, 72, 153, 0.3));
}

.toggle-background {
  @apply absolute inset-0 rounded-full transition-opacity duration-300;
  background: linear-gradient(45deg, #0d9488, #ec4899);
  opacity: 0;
}

.is-dark .toggle-background {
  opacity: 1;
}

.toggle-thumb {
  @apply w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-500;
  transform: translateX(0) rotate(0deg);
}

.toggle-thumb.is-dark {
  transform: translateX(32px) rotate(180deg);
}

.icon {
  @apply w-4 h-4 transition-all duration-300;
}

.sun {
  @apply text-teal-500 w-4 h-4;
}

.moon {
  @apply text-pink-500;
  fill: currentColor;
}

.moon path {
  transform: rotate(36deg);
  transform-origin: center;
}

.stars circle {
  fill: #fff;
  opacity: 0;
  animation: twinkle 1.5s ease-in-out infinite alternate;
}

.stars circle:nth-child(2) {
  animation-delay: 0.2s;
}

.stars circle:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes twinkle {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.theme-toggle:hover .sun path:last-child {
  transform: scale(1.2);
}
</style>
