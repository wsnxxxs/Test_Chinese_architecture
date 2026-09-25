/** Development/preview file server only. No application backend or API routes. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { engineInstalled, engineFiles, localImports, mapHTML } from './engine.mjs';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const args=process.argv.slice(2),dist=args.includes('--dist');
const value=(key,fallback)=>{const i=args.indexOf(key);return i<0?fallback:args[i+1];};
const port=Number(value('--port',process.env.PORT||(dist?'4173':'5173'))),host=value('--host','127.0.0.1');
if(!Number.isInteger(port)||port<1||port>65535||!host){console.error('Invalid --port or --host');process.exit(1);}
const base=dist?join(root,'dist'):root;
const installed=!dist&&await engineInstalled(root);
if(dist){try{await stat(join(base,'index.html'));}catch{console.error('dist/ not found. Run npm run build first.');process.exit(1);}}
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const server=createServer(async(req,res)=>{
  try {
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{Allow:'GET, HEAD'});return res.end('Method not allowed');}
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname.includes('\0')){res.writeHead(400);return res.end('Bad request');}
    let file;
    if(installed&&pathname.startsWith('/vendor/')){
      const requested=pathname.slice('/vendor/'.length),mapped=engineFiles[requested];
      if(!mapped){res.writeHead(404);return res.end('Not found');}
      file=join(root,'node_modules/three',mapped);
    }else{
      file=resolve(base,'.'+(pathname==='/'?'/index.html':pathname));
      if(file!==base&&!file.startsWith(base+sep)){res.writeHead(403);return res.end('Forbidden');}
    }
    const info=await stat(file);if(info.isDirectory())file=join(file,'index.html');
    let data=await readFile(file);
    if(installed&&file===join(base,'index.html'))data=Buffer.from(mapHTML(data.toString(),localImports));
    res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Content-Length':data.length,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:data);
  }catch(error){const code=['ENOENT','ENOTDIR'].includes(error.code)?404:400;res.writeHead(code,{'Content-Type':'text/plain; charset=utf-8'});res.end(code===404?'Not found':'Bad request');}
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?`Port ${port} is in use. Try npm run dev -- --port ${port+1}`:error);process.exitCode=1;});
server.listen(port,host,()=>{
  console.log(`\n  云阙 · 方寸山河\n  ${dist?'Preview':'Local'}: http://${host}:${port}\n  ${installed?'Local Three.js dependency found. Runtime is fully offline.':dist?'Serving dist/ static output.':'Using pinned Three.js CDN. Run npm install for offline development.'}\n`);
});
process.on('SIGINT',()=>server.close(()=>process.exit(0)));
process.on('SIGTERM',()=>server.close(()=>process.exit(0)));
