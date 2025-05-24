import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import * as fs from "node:fs"

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    cors: true,
    https: {
      key: fs.readFileSync("du-key.pem"),
      cert: fs.readFileSync("du.pem")
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
