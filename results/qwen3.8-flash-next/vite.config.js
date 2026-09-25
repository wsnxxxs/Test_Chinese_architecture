import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { port: 5178, host: true, open: false },
  preview: { port: 5178, host: true },
  build: { target: 'esnext', chunkSizeWarningLimit: 2000 },
});
