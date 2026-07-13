<script setup lang="ts">
import { usePhaseStore } from '@/stores/phaseStore'

const phaseStore = usePhaseStore()

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="grid gap-3 md:grid-cols-3">
    <button
      v-for="phase in phaseStore.phasesSummaries.value"
      :key="phase.id"
      type="button"
      class="phase-card group relative flex min-h-24 items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-teal-300/60"
      :class="
        modelValue === phase.id
          ? '-translate-y-1 bg-slate-900/95 shadow-2xl shadow-black/30'
          : 'border-white/[0.06] bg-slate-950/40 opacity-60 hover:border-white/[0.12] hover:bg-slate-900/60 hover:opacity-100'
      "
      :style="
        modelValue === phase.id
          ? {
              borderColor: `${phase.color}90`,
              background: `linear-gradient(135deg, ${phase.color}18, rgba(15, 23, 42, 0.96) 55%)`,
              boxShadow: `0 18px 45px rgba(0,0,0,.28), 0 0 0 1px ${phase.color}18, 0 0 28px ${phase.color}18`
            }
          : undefined
      "
      :aria-pressed="modelValue === phase.id"
      @click="emit('update:modelValue', phase.id)"
    >
      <span
        class="absolute inset-x-0 bottom-0 transition-all duration-300"
        :class="modelValue === phase.id ? 'h-1 opacity-100' : 'h-0.5 opacity-35'"
        :style="{
          width: `${phase.progress}%`,
          backgroundColor: phase.color,
          boxShadow: `0 0 12px ${phase.color}`
        }"
        aria-hidden="true"
      />

      <span
        v-if="modelValue === phase.id"
        class="absolute right-3 top-3 flex items-center gap-1.5 font-mono text-[8px] tracking-[0.12em] uppercase"
        :style="{ color: phase.color }"
      >
        <span class="size-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
        Viewing
      </span>

      <span
        class="relative flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white/[0.025] transition-transform duration-300 group-hover:scale-[1.03]"
        :style="{
          color: modelValue === phase.id ? phase.color : '#64748b',
          borderColor: modelValue === phase.id ? `${phase.color}55` : 'rgba(255,255,255,0.06)'
        }"
      >
        <component :is="phase.icon" class="size-5" />
      </span>

      <span class="min-w-0 flex-1">
        <span class="flex items-center justify-between gap-3 pr-12">
          <span class="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            {{ phase.period }}
          </span>
          <span class="font-mono text-[10px]" :style="{ color: phase.color }">
            {{ phase.progress }}%
          </span>
        </span>
        <span
          class="mt-1.5 block text-sm font-semibold transition-colors"
          :class="
            modelValue === phase.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
          "
        >
          {{ phase.label }}
        </span>
      </span>
    </button>
  </div>
</template>
