import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // <-- Make sure this is imported

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // <-- Make sure this is added to the plugins array
  ],
})
