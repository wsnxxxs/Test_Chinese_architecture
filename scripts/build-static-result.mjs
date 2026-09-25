import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output);
cpSync(join(root, 'index.html'), join(output, 'index.html'));
cpSync(join(root, 'assets'), join(output, 'assets'), { recursive: true });
