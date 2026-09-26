import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  build: {
    // three.js 单独分块（体积大属正常，放宽告警阈值）
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
  },
});
