import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Rend le serveur accessible depuis l'extérieur du container
    port: 5173,       // Définit le port
    strictPort: true, // Évite le changement de port si 5173 est occupé
    hmr: {
      protocol: 'ws', // Protocole pour Hot Module Replacement
      host: 'localhost' // HMR fonctionne correctement avec localhost sur l'hôte
    }
  }
})
