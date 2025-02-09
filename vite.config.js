import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 5173,
    strictPort: true,
    cors: {
      origin: ["*"],
      credentials: true,
    }
  },
  preview: {
    allowedHosts: ['movieon-w4po.onrender.com'],
    port: process.env.PORT || 5173,
    host: true
  }
})