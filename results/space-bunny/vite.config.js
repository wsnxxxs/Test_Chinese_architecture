import { defineConfig } from 'vite';

export default defineConfig({
  // 相对路径打包，dist 可放在任意子目录下直接静态托管
  base: './',
  server: {
    host: '127.0.0.1'
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1200
  }
});
