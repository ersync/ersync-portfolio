import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
      includePublic: true,
      logStats: true,
      png: {
        quality: 90
      },
      jpeg: {
        quality: 90
      },
      jpg: {
        quality: 90
      },
      webp: {
        lossless: false,
        quality: 90,
        alphaQuality: 90,
        force: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]'

          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]

          if (/png|jpe?g|svg|gif|tiff|webp/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    host: '0.0.0.0'
  }
})
