import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'dist');
const threeRoot = dirname(dirname(fileURLToPath(import.meta.resolve('three'))));

rmSync(output, { recursive: true, force: true });
mkdirSync(join(output, 'assets', 'controls'), { recursive: true });
cpSync(join(root, 'index.html'), join(output, 'index.html'));
cpSync(join(threeRoot, 'build', 'three.module.js'), join(output, 'assets', 'three.module.js'));
cpSync(join(threeRoot, 'examples', 'jsm', 'controls', 'OrbitControls.js'), join(output, 'assets', 'controls', 'OrbitControls.js'));
cpSync(join(threeRoot, 'LICENSE'), join(output, 'assets', 'THREE-LICENSE.txt'));
