import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    plugins: [viteCompression()],
    watch: {
      usePolling: true,
    },
  }
})
