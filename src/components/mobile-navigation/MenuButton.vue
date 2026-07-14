<template>
  <button
    type="button"
    class="menu-trigger"
    :class="{ 'is-open': isOpen }"
    :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
    :aria-expanded="isOpen"
    aria-controls="mobile-navigation-panel"
    @click="$emit('toggle')"
  >
    <span class="menu-glyph" aria-hidden="true">
      <span class="menu-line menu-line-top" />
      <span class="menu-line menu-line-middle" />
      <span class="menu-line menu-line-bottom" />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
.menu-trigger {
  position: relative;
  display: grid;
  width: 40px;
  height: 40px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #e8f3f0;
  cursor: pointer;
}

.menu-trigger:focus-visible {
  outline: 2px solid rgba(94, 234, 212, 0.72);
  outline-offset: 2px;
}

.menu-glyph {
  position: relative;
  display: block;
  width: 21px;
  height: 16px;
}

.menu-line {
  position: absolute;
  right: 0;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transform-origin: center;
  transition:
    inset 280ms cubic-bezier(0.22, 1, 0.36, 1),
    width 280ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 160ms ease,
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.menu-line-top {
  top: 0;
  width: 100%;
}

.menu-line-middle {
  top: 50%;
  width: 62%;
  transform: translateY(-50%);
}

.menu-line-bottom {
  right: auto;
  bottom: 0;
  left: 0;
  width: 78%;
}

.is-open .menu-line-top,
.is-open .menu-line-bottom {
  top: 50%;
  right: 0;
  bottom: auto;
  left: 0;
  width: 100%;
}

.is-open .menu-line-top {
  transform: translateY(-50%) rotate(45deg);
}

.is-open .menu-line-middle {
  opacity: 0;
  transform: translateY(-50%) scaleX(0);
}

.is-open .menu-line-bottom {
  transform: translateY(-50%) rotate(-45deg);
}

@media (prefers-reduced-motion: reduce) {
  .menu-line {
    transition: none;
  }
}
</style>
