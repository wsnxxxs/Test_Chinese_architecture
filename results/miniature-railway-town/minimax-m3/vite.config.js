import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 5199,
    strictPort: false,
    host: '127.0.0.1',
  },
  preview: {
    port: 4199,
    strictPort: false,
    host: '127.0.0.1',
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});