<script setup lang="ts">
interface Stat {
  value: string
  label: string
}
defineProps<{
  stats: Stat[]
}>()
</script>

<template>
  <div class="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-xl bg-slate-800/30 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border border-slate-700/50 glow-container"
    >
      <div class="mb-2 text-3xl font-bold text-teal-400">
        {{ stat.value }}
      </div>
      <div class="text-slate-300">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow-container {
  position: relative;
}
.glow-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
  filter: blur(20px);
}
.glow-container:hover::after {
  background: radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%);
}
</style>
