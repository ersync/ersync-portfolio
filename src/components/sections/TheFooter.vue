<template>
  <footer class="mt-auto border-t border-gray-100 bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6">
        <!-- Connect Section -->
        <div class="text-center">
          <h3
            class="mb-2 bg-gradient-to-r from-gray-800/75 via-pink-700/50 to-teal-700/75 bg-clip-text font-Poppins text-sm font-medium text-transparent sm:text-lg"
          >
            "Indeed, with hardship comes ease"
          </h3>
        </div>

        <!-- Copyright Section -->
        <div class="text-center">
          <p class="mb-1 text-[11px] text-gray-600 sm:mb-2 sm:text-[15px]">
            Crafted with
            <span class="inline-block animate-pulse text-pink-500"
              ><font-awesome-icon class="w-3" :icon="['fas', 'heart']"
            /></span>
            by Emad Rahimi
          </p>
          <p class="text-[10px] text-gray-400 sm:text-sm">
            © {{ new Date().getFullYear() }} All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
