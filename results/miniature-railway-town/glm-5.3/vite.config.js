import { defineConfig } from 'vite';

// 端口严格锁定 15103，禁止自动换端口
export default defineConfig({
  base: './',
  server: {
    host: '127.0.0.1',
    port: 15103,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 15103,
    strictPort: true,
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
