<template>
  <div class="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-slate-900" />
    <div class="section-grid absolute inset-0 opacity-60" />
    <div class="absolute -left-24 top-1/4 size-64 rounded-full bg-teal-400/10 blur-3xl" />
    <div class="absolute -right-24 bottom-1/4 size-72 rounded-full bg-indigo-500/10 blur-3xl" />
  </div>
</template>

<style scoped>
.section-grid {
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.025) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}
</style>
