import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicitly define env file loading (usually not necessary, but added for thoroughness)
  envPrefix: 'VITE_',
  // For debugging environment variables during build
  define: {
    __ENV_CHECK__: JSON.stringify(process.env.VITE_GOOGLE_MAPS_API_KEY ? 'API Key found' : 'API Key not found')
  }
})
