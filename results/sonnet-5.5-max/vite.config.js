import { defineConfig } from 'vite';

export default defineConfig({
  // relative base so the built `dist/` can be hosted from any sub-path
  base: './',
  server: { host: '127.0.0.1', port: 5173, strictPort: false },
  preview: { host: '127.0.0.1', port: 4173 },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1500,
  },
});
