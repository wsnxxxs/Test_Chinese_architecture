import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createSceneData } from '../src/scene-data.js';
import { BUILDINGS, WALK_EDGES, WALK_NODES, roofFootprint } from '../src/layout.js';
import { randomGenerator } from '../src/palette.js';
import { mapHTML, localImports } from '../scripts/engine.mjs';
const data=createSceneData();

test('11 distinct buildings, with a dominant main hall and all requested types',()=>{
  assert.equal(BUILDINGS.length,11);assert.equal(new Set(BUILDINGS.map(b=>b.id)).size,11);
  for(const kind of ['main','hall','side','gate','bell','drum','pagoda','pavilion'])assert.ok(BUILDINGS.some(b=>b.kind===kind));
  const main=BUILDINGS.find(b=>b.id==='main');
  for(const b of BUILDINGS.filter(b=>b!==main))assert.ok(main.w*main.d>b.w*b.d);
});
test('Every off-axis building has an exact mirrored partner',()=>{
  for(const b of BUILDINGS.filter(b=>b.x!==0)){
    const other=BUILDINGS.find(o=>o.x===-b.x&&o.z===b.z);
    assert.ok(other,b.id);assert.equal(other.w,b.w);assert.equal(other.d,b.d);assert.equal(other.height,b.height);
    assert.ok(Math.abs(other.rotation+b.rotation)<1e-8);
  }
});
test('Roof footprints do not overlap; at least 3 world units separate neighbors',()=>{
  const f=BUILDINGS.map(roofFootprint);
  for(let i=0;i<f.length;i++)for(let j=i+1;j<f.length;j++){
    const a=f[i],b=f[j],dx=Math.max(0,Math.abs(a.x-b.x)-(a.w+b.w)/2),dz=Math.max(0,Math.abs(a.z-b.z)-(a.d+b.d)/2);
    assert.ok(Math.hypot(dx,dz)>=3-1e-6,`${BUILDINGS[i].id} vs ${BUILDINGS[j].id}: ${Math.hypot(dx,dz)}`);
  }
});
test('Every road, stair and bridge destination is reachable from the entrance',()=>{
  const graph=Object.fromEntries(Object.keys(WALK_NODES).map(key=>[key,[]]));
  for(const [a,b] of WALK_EDGES){assert.ok(graph[a]&&graph[b]);graph[a].push(b);graph[b].push(a);}
  const seen=new Set(['entry']),queue=['entry'];
  for(let i=0;i<queue.length;i++)for(const neighbor of graph[queue[i]])if(!seen.has(neighbor)){seen.add(neighbor);queue.push(neighbor);}
  assert.equal(seen.size,Object.keys(WALK_NODES).length);
});
test('All circulation segments are orthogonal and nonzero',()=>{
  for(const [a,b] of WALK_EDGES){const A=WALK_NODES[a],B=WALK_NODES[b];assert.ok((A[0]===B[0])!==(A[1]===B[1]),`${a} - ${b}`);}
});
test('All voxel transforms have positive dimensions and finite values',()=>{
  for(const b of data.boxes){for(const key of ['x','y','z','sx','sy','sz','rotation'])assert.ok(Number.isFinite(b[key]),key);assert.ok(b.sx>0&&b.sy>0&&b.sz>0);assert.match(b.color,/^#[0-9a-f]{6}$/i);}
});
test('The scene stays within a reasonable 60k voxel and 400k triangle budget',()=>{
  assert.ok(data.boxes.length>15000);assert.ok(data.boxes.length<60000);assert.ok(data.boxes.length*12<400000);
  assert.equal(new Set(data.boxes.map(b=>b.group)).size,5);
});
test('The model is grounded and the complete scene fits its planned bounds',()=>{
  for(const b of data.boxes){assert.ok(Math.abs(b.x)<=54);assert.ok(Math.abs(b.z)<=64);assert.ok(b.y-b.sy/2>=-3.5);assert.ok(b.y+b.sy/2<=29);}
});
test('Fixed seeds generate byte-identical geometry',()=>{
  const hash=d=>createHash('sha256').update(JSON.stringify(d)).digest('hex');
  assert.equal(hash(data),hash(createSceneData()));
});
test('Different seeds vary the surface treatment without changing the layout',()=>{
  const other=createSceneData(17);assert.deepEqual(other.buildings,data.buildings);assert.notEqual(other.boxes[0].color+other.boxes[4].color, data.boxes[0].color+data.boxes[4].color);
});
test('PRNG never leaves [0,1)',()=>{const r=randomGenerator();for(let i=0;i<10000;i++){const n=r();assert.ok(n>=0&&n<1);}});
test('Local build import map replaces all CDN references in the engine block',()=>{
  const input='<script type="importmap" id="engine-imports">{"imports":{"three":"https://example.com"}}</script>';
  const output=mapHTML(input,localImports);assert.ok(output.includes('./vendor/three.module.min.js'));assert.ok(!output.includes('https://'));
});
