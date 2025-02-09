import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Correct import for Tailwind
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: process.env.PORT || 5173,
    strictPort: true,
    cors: {
      origin: ["https://movieon-w4po.onrender.com"],
      credentials: true,
    }
  },
  // Add preview configuration to handle the blocked host error
  preview: {
    allowedHosts: ['movieon-w4po.onrender.com'],
    port: process.env.PORT || 5173,
    host: true
  }
})