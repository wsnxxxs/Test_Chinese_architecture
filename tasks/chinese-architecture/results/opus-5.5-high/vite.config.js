import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { host: true, open: false },
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: { manualChunks: { three: ['three'] } },
    },
  },
});
