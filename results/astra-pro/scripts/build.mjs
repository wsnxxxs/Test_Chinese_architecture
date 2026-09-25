/** A tiny, portable static-site build. No backend or build-tool dependency. */
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { copyEngine, engineInstalled, localImports, mapHTML, remoteImports, ENGINE_VERSION } from './engine.mjs';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const output=join(root,'dist');
try {
  const offline=await engineInstalled(root);
  if(process.argv.includes('--offline')&&!offline)throw new Error('Offline build requires Three.js. Run npm install first.');
  await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
  await cp(join(root,'src'),join(output,'src'),{recursive:true});
  await cp(join(root,'public'),join(output,'public'),{recursive:true});
  let html=await readFile(join(root,'index.html'),'utf8');
  if(offline)await copyEngine(root,output);
  html=mapHTML(html,offline?localImports:remoteImports);
  await writeFile(join(output,'index.html'),html);
  await writeFile(join(output,'build-info.json'),JSON.stringify({name:'云阙 · 方寸山河',engine:`three@${ENGINE_VERSION}`,offline,entry:'index.html',builtAt:new Date().toISOString()},null,2));
  console.log(`\n✓ Static build complete → dist/\n✓ Three.js ${ENGINE_VERSION}: ${offline?'bundled locally; no runtime network requests':'CDN mode (network required at runtime)'}`);
  if(!offline)console.warn('\nNOTE: npm dependency is not installed. This is a valid CDN-backed static build, NOT an offline bundle.\nFor a fully offline build, run: npm install && npm run build -- --offline\n');
} catch(error) {console.error(`Build failed: ${error.message}`);process.exitCode=1;}
