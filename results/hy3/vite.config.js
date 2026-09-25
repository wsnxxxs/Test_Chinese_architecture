import { defineConfig } from 'vite';

export default defineConfig({
  // 使用相对路径，方便 build 后直接静态托管 / 预览
  base: './',
  server: {
    host: true,
    open: true
  }
});
