import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5199,
    strictPort: true,
    host: '127.0.0.1',
  },
  preview: {
    port: 5288,
    strictPort: true,
    host: '127.0.0.1',
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1200,
  },
});
