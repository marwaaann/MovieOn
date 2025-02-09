import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true,  // Allows external access (useful for Render)
    port: process.env.PORT || 5173,  // Use Render's assigned port or default to 5173
    strictPort:true,
    allowedHosts:["https://movieon-w4po.onrender.com"]
  }
})
