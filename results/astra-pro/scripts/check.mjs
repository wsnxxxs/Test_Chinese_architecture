import { spawnSync } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
let failed=false;
for(const folder of ['src','scripts','tests'])for(const file of await readdir(join(root,folder))){
  if(!/\.(m?js)$/.test(file))continue;
  const result=spawnSync(process.execPath,['--check',join(root,folder,file)],{encoding:'utf8'});
  if(result.status!==0){console.error(result.stderr);failed=true;}else console.log(`✓ Syntax: ${folder}/${file}`);
}
if(failed)process.exitCode=1;
