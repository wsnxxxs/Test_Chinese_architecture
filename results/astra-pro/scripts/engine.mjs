import { access, readFile, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { constants } from 'node:fs';

export const ENGINE_VERSION = '0.180.0';
export const engineFiles = {
  'three.module.min.js': 'build/three.module.min.js',
  'three.core.min.js': 'build/three.core.min.js',
  'OrbitControls.js': 'examples/jsm/controls/OrbitControls.js',
  'LICENSE': 'LICENSE',
};
export const localImports = {
  three:'./vendor/three.module.min.js',
  'three/addons/controls/OrbitControls.js':'./vendor/OrbitControls.js',
};
export const remoteImports = {
  three:`https://cdn.jsdelivr.net/npm/three@${ENGINE_VERSION}/build/three.module.js`,
  'three/addons/controls/OrbitControls.js':`https://cdn.jsdelivr.net/npm/three@${ENGINE_VERSION}/examples/jsm/controls/OrbitControls.js`,
};
export async function engineInstalled(root) {
  try {
    const pkg=JSON.parse(await readFile(join(root,'node_modules/three/package.json'),'utf8'));
    if(pkg.version!==ENGINE_VERSION)throw new Error(`Expected Three.js ${ENGINE_VERSION}, got ${pkg.version}. Run npm install.`);
    await Promise.all(Object.values(engineFiles).map(path=>access(join(root,'node_modules/three',path),constants.R_OK)));
    return true;
  } catch (error) {if(error.code==='ENOENT')return false;throw error;}
}
export function mapHTML(html, imports) {
  return html.replace(/(<script type="importmap" id="engine-imports">)[\s\S]*?(<\/script>)/,
    `$1\n${JSON.stringify({imports},null,2)}\n$2`);
}
export async function copyEngine(root, output) {
  await mkdir(join(output,'vendor'),{recursive:true});
  await Promise.all(Object.entries(engineFiles).map(([name,path])=>copyFile(join(root,'node_modules/three',path),join(output,'vendor',name))));
}
