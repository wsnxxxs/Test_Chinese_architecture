import { cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('index.html', 'dist/index.html');
cpSync('main.js', 'dist/main.js');
cpSync('vendor', 'dist/vendor', { recursive: true });
