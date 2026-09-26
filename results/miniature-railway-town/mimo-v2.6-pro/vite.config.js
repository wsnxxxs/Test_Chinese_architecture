import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    host: 'localhost',
  },
  preview: {
    port: 4173,
    host: 'localhost',
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1200,
  },
});
