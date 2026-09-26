import fs from 'node:fs/promises';
import path from 'node:path';
/** Small deterministic bundler for this project's named ES modules; no npm/CDN dependency. */
export async function standalone(root) {
  const order=['geometry.js','materials.js','spec.js','wheels.js','vehicle.js','orbit.js','studio.js','main.js'];
  let bundle="const __modules = { three: globalThis.THREE };\n";
  for(const name of order){
    const source=await fs.readFile(path.join(root,'src',name),'utf8');
    const names=[...source.matchAll(/^export\s+(?:const|let|class|function)\s+(\w+)/gm)].map(m=>m[1]);
    const body=source.replace(/import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g,(_,alias,spec)=>`const ${alias} = __modules[${JSON.stringify(spec.replace('./',''))}];`)
      .replace(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g,(_,imports,spec)=>`const {${imports}} = __modules[${JSON.stringify(spec.replace('./',''))}];`)
      .replace(/\bexport\s+(?=(?:const|let|class|function)\b)/g,'');
    bundle+=`\n// ---- ${name} ----\n__modules[${JSON.stringify(name)}] = (() => {\n${body}\nreturn {${names.join(',')}};\n})();\n`;
  }
  const library=await fs.readFile(path.join(root,'public/vendor/three.r140.min.js'),'utf8');
  const licenses=(await fs.readFile(path.join(root,'LICENSE'),'utf8'))+'\n\n'+(await fs.readFile(path.join(root,'public/vendor/LICENSE.three.txt'),'utf8'));
  const css=await fs.readFile(path.join(root,'src/style.css'),'utf8');
  const favicon=await fs.readFile(path.join(root,'public/favicon.svg'),'utf8');
  let html=await fs.readFile(path.join(root,'index.html'),'utf8');
  html=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link rel="stylesheet"[^>]*>/,`<style>${css}</style>`)
    .replace(/href="\.\/public\/favicon.svg"/,`href="data:image/svg+xml,${encodeURIComponent(favicon)}"`);
  const fallback=`} catch(error) { console.error(error);document.querySelector('#loader').hidden=true;document.querySelector('#error-panel').hidden=false;document.querySelector('#runtime-status').textContent='LOAD ERROR';document.querySelector('#error-message').textContent='3D 初始化失败，请确认浏览器启用 WebGL。'+error.message; }`;
  const code=library+'\ntry {\n'+bundle+'\n'+fallback;
  html=html.replace('</head>',`<!--\n${licenses}\n-->\n</head>`);
  html=html.replace('</body>',`<script>\n${code.replaceAll('</script>','<\\/script>')}\n</script>\n</body>`);
  return { html, bundle };
}
