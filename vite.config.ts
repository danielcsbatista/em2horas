import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
     istanbul({
      cypress: true, // Instrumenta apenas durante testes Cypress
      exclude: ['node_modules', 'cypress', 'coverage'],
    }),
  ],
  base: '/em2horas/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
