import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { port: 5467, strictPort: true },
  preview: { port: 5468, strictPort: true },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1400,
  },
});
