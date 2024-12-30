<template>
  <footer class="bg-gray-50 py-12 mt-auto border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6">
        <!-- Connect Section -->
        <div class="text-center">
          <h3 class="text-sm sm:text-lg font-medium font-Poppins bg-gradient-to-r from-gray-800/75 via-pink-700/50 to-teal-700/75 bg-clip-text text-transparent mb-2">
            "Indeed, with hardship comes ease"
          </h3>
        </div>

        <!-- Copyright Section -->
        <div class="text-center">
          <p class="text-gray-600 mb-1 sm:mb-2 text-[11px] sm:text-[15px]">
            Crafted with <span class="text-pink-500 inline-block animate-pulse"><font-awesome-icon class="w-3" :icon="['fas', 'heart']" /></span> by Emad Rahimi
          </p>
          <p class="text-gray-400 text-[10px] sm:text-sm">
            © {{ new Date().getFullYear() }} All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
