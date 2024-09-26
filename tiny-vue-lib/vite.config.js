import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoImportPlugin from '@opentiny/unplugin-tiny-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImportPlugin('vite'),
    vueDevTools(),
  ],
  define: {
    'process.env': { 
      ...process.env,
      TINY_MODE: 'pc' 
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
