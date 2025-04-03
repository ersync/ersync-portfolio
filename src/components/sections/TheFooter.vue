<template>
  <footer
    class="mt-auto border-t border-gray-100 bg-white py-8 backdrop-blur dark:border-gray-800 dark:bg-[#171918] dark:backdrop-blur-xl"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6">
        <!-- Connect Section -->
        <div class="text-center">
          <h3
            class="mb-2 bg-gradient-to-r from-gray-800/75 via-pink-700/50 to-teal-600/80 bg-clip-text font-Poppins text-sm font-medium text-transparent dark:from-gray-200/90 dark:via-pink-400/70 dark:to-teal-400/90 sm:text-lg"
          >
            "Indeed, with hardship comes ease"
          </h3>
        </div>

        <!-- Copyright Section -->
        <div class="text-center">
          <p class="mb-1 text-[11px] text-gray-600 dark:text-gray-400 sm:mb-2 sm:text-[14px]">
            Designed & Crafted with
            <span class="inline-block animate-pulse text-pink-500 dark:text-pink-400"
              ><font-awesome-icon class="w-3" :icon="['fas', 'heart']"
            /></span>
            by Emad Rahimi
          </p>
          <p class="text-[10px] text-gray-400 dark:text-gray-500 sm:text-sm">
            © {{ new Date().getFullYear() }} All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
