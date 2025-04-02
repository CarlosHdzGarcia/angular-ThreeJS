import { defineConfig } from 'vite';
import angular from '@vitejs/plugin-angular';

export default defineConfig({
  plugins: [angular()],
  logLevel: 'info', // Puedes cambiar a 'warn', 'error' o 'silent'
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
