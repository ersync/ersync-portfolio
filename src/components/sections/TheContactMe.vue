<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="contact" class="relative w-full overflow-hidden bg-[#F7F9FB] py-16">
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(160deg, #f4fcfc 0%, #f1f1f2 35%, #f1f3f3 55%, #e4f1f2 100%);
        filter: blur(80px);
      "
    />
    <div class="container relative z-10">
      <div>
        <div class="flex items-center justify-start gap-2">
          <div class="h-7 w-[2.5px] rounded-md bg-teal-500" />
          <h2 class="font-VarelaRound text-3xl font-bold text-gray-800">Contact Me</h2>
        </div>
        <p class="mb-12 mt-1 text-sm text-gray-600 sm:text-base">
          Let's create something amazing and useful together
        </p>
      </div>

      <div class="item-center flex flex-col justify-center gap-4 md:flex-row custom-md:gap-6">
        <!-- Contact Info Cards -->
        <div class="shrink-0 grow space-y-6 md:max-w-[400px]">
          <div
            class="rounded-xl bg-white/90 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div class="flex items-center space-x-4">
              <div class="rounded-lg bg-teal-50 p-3">
                <EnvelopeIcon class="size-6 text-teal-500" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Email</h3>
                <p class="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  contact@emadrahimi.dev
                </p>
              </div>
            </div>
          </div>

          <div
            class="rounded-xl bg-white/90 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div class="flex items-center space-x-4">
              <div class="rounded-lg bg-teal-50 p-3">
                <MapPinIcon class="size-6 text-teal-500" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Location</h3>
                <p class="text-teal-600">Iran</p>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <a
              href="#"
              class="flex items-center rounded-xl bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <font-awesome-icon class="size-6 text-teal-500" :icon="['fab', 'github']" />
            </a>
            <a
              href="#"
              class="flex items-center rounded-xl bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <font-awesome-icon class="size-6 text-teal-500" :icon="['fab', 'linkedin']" />
            </a>
            <a
              href="#"
              class="flex items-center rounded-xl bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <font-awesome-icon class="size-6 text-teal-500" :icon="['fab', 'x-twitter']" />
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <form class="grow rounded-xl bg-white/90 p-8 shadow-sm md:max-w-[400px]">
          <div class="space-y-6">
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                class="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:border-teal-500 focus:ring-1"
                placeholder="Your name"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                class="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:border-teal-500 focus:ring-1"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">Message</label>
              <textarea
                class="h-32 w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:border-teal-500 focus:ring-1"
                placeholder="Your message"
              />
            </div>
            <button
              class="w-full rounded-lg bg-teal-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style></style>
<script setup lang="ts"></script>
