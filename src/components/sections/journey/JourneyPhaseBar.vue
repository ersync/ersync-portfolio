<script setup lang="ts">
import { usePhaseStore } from '@/stores/phaseStore'
const phase = usePhaseStore()

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="mb-4 select-none px-4">
    <div class="relative mx-auto flex h-[250px] max-w-4xl items-center justify-between">
      <div class="absolute inset-x-0 mx-auto h-0.5 bg-gray-700/50" style="width: 85%">
        <div
          class="absolute h-1 bg-gradient-to-r from-[#00DEB6] via-[#6366F1] to-[#F43F5E] transition-all duration-300 ease-in-out"
          :style="{
            width:
              props.modelValue === 'basics'
                ? '0%'
                : props.modelValue === 'frontend'
                  ? '50%'
                  : '100%',
            opacity: '0.7'
          }"
        >
          <div class="absolute size-full blur-[2px]" />
        </div>
      </div>

      <div v-for="(phase, index) in phase.phasesSummaries.value" :key="index">
        <div class="block md:hidden">
          <div
            class="relative z-10 cursor-pointer transition-all duration-300"
            :class="[
              phase.id === props.modelValue ? 'scale-110' : 'scale-100 hover:scale-105',
              index == 1 ? '-ml-4' : ''
            ]"
            @click="emit('update:modelValue', phase.id)"
          >
            <div class="relative size-14">
              <div
                class="absolute inset-0 blur-md transition-opacity duration-300"
                :class="phase.id === props.modelValue ? 'opacity-30' : 'opacity-10'"
                :style="`background: ${phase.color}`"
              />

              <div class="relative size-full">
                <svg class="size-14">
                  <circle
                    cx="28"
                    cy="28"
                    r="25"
                    :stroke-width="phase.id === props.modelValue ? 4 : 2"
                    fill="gray-900"
                    class="transition-all"
                  />

                  <circle
                    class="progress-ring transition-all duration-300"
                    cx="28"
                    cy="28"
                    r="25"
                    :stroke="phase.color"
                    :stroke-width="phase.id === props.modelValue ? 4 : 2"
                    fill="none"
                    :style="`
                      stroke-dasharray: ${2 * Math.PI * 25};
                      stroke-dashoffset: ${2 * Math.PI * 25 * (1 - phase.progress / 100)};
                      opacity: ${phase.id === props.modelValue ? 1 : 0.5};
                    `"
                  />

                  <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    class="text-xs transition-all duration-300 fill-gray-400"
                    :fill="phase.id === props.modelValue ? phase.color : '#94A3B8'"
                  >
                    {{ phase.progress }}%
                  </text>
                </svg>

                <div
                  class="absolute -bottom-5 left-1/2 size-4 -translate-x-1/2 transition-all duration-300"
                  :class="phase.id === props.modelValue ? 'opacity-85' : 'opacity-65'"
                  :style="`color: ${phase.color}`"
                >
                  <component :is="phase.icon" class="size-full" />
                </div>
              </div>
            </div>

            <div
              class="absolute left-1/2 mt-5 flex -translate-x-1/2 flex-col items-center justify-center gap-0.5 whitespace-nowrap"
            >
              <span
                class="scale-95 font-VarelaRound text-xs duration-0"
                :class="phase.id === props.modelValue ? 'font-semibold' : 'font-medium'"
                :style="`color: ${phase.id === props.modelValue ? phase.color : '#74779B'}`"
              >
                {{ phase.label }}
              </span>
              <span
                class="text-[10px] transition-colors duration-300"
                :class="phase.id === props.modelValue ? 'text-gray-300' : 'text-gray-500'"
              >
                {{ phase.period }}
              </span>
            </div>
          </div>
        </div>

        <div class="hidden md:block">
          <div
            class="relative z-10 cursor-pointer transition-all duration-300"
            :class="[phase.id === props.modelValue ? 'scale-110' : 'scale-100 hover:scale-105']"
            @click="emit('update:modelValue', phase.id)"
          >
            <div class="relative size-20">
              <div
                class="absolute inset-0 blur-[15px] transition-opacity duration-300"
                :class="phase.id === props.modelValue ? 'opacity-20' : 'opacity-10'"
                :style="`background: ${phase.color}`"
              />

              <div class="relative size-full">
                <svg class="size-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    :stroke-width="phase.id === props.modelValue ? 4 : 2"
                    fill="gray-900"
                    class="transition-all"
                  />

                  <circle
                    class="progress-ring transition-all duration-300"
                    cx="40"
                    cy="40"
                    r="36"
                    :stroke="phase.color"
                    :stroke-width="phase.id === props.modelValue ? 4 : 2"
                    fill="none"
                    :style="`
                      stroke-dasharray: ${2 * Math.PI * 36};
                      stroke-dashoffset: ${2 * Math.PI * 36 * (1 - phase.progress / 100)};
                      opacity: ${phase.id === props.modelValue ? 1 : 0.5};
                    `"
                  />

                  <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    class="text-sm transition-all duration-300 fill-gray-400"
                    :fill="phase.id === props.modelValue ? phase.color : '#94A3B8'"
                  >
                    {{ phase.progress }}%
                  </text>
                </svg>

                <div
                  class="absolute -bottom-7 left-1/2 h-6 w-5 -translate-x-1/2 transition-all duration-300"
                  :class="phase.id === props.modelValue ? 'opacity-95' : 'opacity-70'"
                  :style="`color: ${phase.color}`"
                >
                  <component :is="phase.icon" class="size-full" />
                </div>
              </div>
            </div>

            <div
              class="absolute left-1/2 mt-7 flex -translate-x-1/2 flex-col items-center justify-center gap-1 whitespace-nowrap"
            >
              <span
                class="scale-95 font-VarelaRound text-sm duration-0"
                :class="phase.id === props.modelValue ? 'font-semibold' : 'font-medium'"
                :style="`color: ${phase.id === props.modelValue ? phase.color : '#74779B'}`"
              >
                {{ phase.label }}
              </span>
              <span
                class="text-xs transition-colors duration-300"
                :class="phase.id === props.modelValue ? 'text-gray-300' : 'text-gray-500'"
              >
                {{ phase.period }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-ring {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: all 0.5s ease;
  filter: brightness(1.1);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
}

.active-glow {
  animation: pulse 2s infinite;
}
</style>
