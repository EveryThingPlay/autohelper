import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'

import manifest from './manifest'

import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import VueDevTools from 'vite-plugin-vue-devtools'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,vue}']
      },
      includeAssets: [
          "**/*",
      ],
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallbackAllowlist: [/^index.html$/]
      },
      // @ts-ignore
      manifest,
    }),
    vue(),
    VueDevTools(),
    mkcert()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "icons": path.resolve(__dirname, "node_modules/vue-material-design-icons")
    }
  }
})
