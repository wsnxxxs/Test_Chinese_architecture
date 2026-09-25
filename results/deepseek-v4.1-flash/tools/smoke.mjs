/**
 * tools/smoke.mjs — 纯 Node 端跑一遍体素生成，用于定位异常与统计用量
 * 用法：node tools/smoke.mjs
 */
import { VoxelBuilder } from '../src/voxel.js';
import { buildGround, buildPaving, buildWalls, buildScreenWall, buildProps } from '../src/site.js';
import { buildGate, buildMainHall, buildSideHall, buildRearHall } from '../src/buildings.js';
import { buildTower, buildPagoda } from '../src/towers.js';

const b = new VoxelBuilder();
const t0 = Date.now();

const stages = [
  ['ground', () => buildGround(b)],
  ['paving+walls', () => { buildPaving(b); buildWalls(b); buildScreenWall(b); }],
  ['main hall', () => buildMainHall(b)],
  ['gate+wings', () => { buildGate(b); buildSideHall(b, -1); buildSideHall(b, 1); buildRearHall(b); }],
  ['towers', () => { buildTower(b, -1, 'bell'); buildTower(b, 1, 'drum'); buildPagoda(b); }],
  ['props', () => buildProps(b)]
];

for (const [name, fn] of stages) {
  const s = Date.now();
  fn();
  console.log(`  ${name.padEnd(14)} +${String(Date.now() - s).padStart(5)}ms   solid=${b.solid.size} glow=${b.glow.size}`);
}

const t1 = Date.now();
const out = b.build({});
console.log(`\nmeshing ${Date.now() - t1}ms`);
console.log(`authored ${out.authored}  culled ${out.hiddenCulled}  drawn ${out.drawn}`);
console.log(`total ${Date.now() - t0}ms`);
