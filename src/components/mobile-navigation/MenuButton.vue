<template>
  <button
    @click="$emit('toggle')"
    class="flex items-center justify-center px-1.5 transition-all duration-300"
  >
    <div class="relative flex size-4 flex-col justify-between py-px">
      <span
        v-for="i in 3"
        :key="i"
        :class="[
          ' left-0 h-0.5 w-full rounded-full transition-all duration-300',
          'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-500',
          i === 1 && `${isOpen ? 'translate-y-1.5 rotate-45' : ''}`,
          i === 2 && `${isOpen ? 'opacity-0' : ''}`,
          i === 3 && `${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`
        ]"
      />
    </div>
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
