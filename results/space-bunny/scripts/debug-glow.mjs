/** 诊断：扫描发光层，定位所有灯笼体素的世界坐标分布。 */
import { VoxelCanvas } from '../src/core/voxel.js';
import { P } from '../src/core/palette.js';
import { buildWorld } from '../src/world/site.js';

const solid = new VoxelCanvas('solid');
const glow = new VoxelCanvas('glow');
buildWorld(solid, glow);

const OX = 700, OZ = 1000, SX = 4096, PLANE = SX * 512;
function decode(k) {
  const az = k % PLANE;
  return { x: (az % SX) - OX, y: (az / SX) | 0, z: Math.floor(k / PLANE) - OZ };
}

function scan(map, label) {
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9, minZ = 1e9, maxZ = -1e9;
  const clusters = new Map();
  for (const [k, c] of map) {
    const p = decode(k);
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
    minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
    if (c !== P.lantern) continue;
    // 按 40 单位网格聚类，方便看出是哪栋建筑
    const key = `${Math.round(p.x / 40) * 40},${Math.round(p.z / 40) * 40}`;
    const e = clusters.get(key) || { n: 0, yMin: 1e9, yMax: -1e9 };
    e.n++; e.yMin = Math.min(e.yMin, p.y); e.yMax = Math.max(e.yMax, p.y);
    clusters.set(key, e);
  }
  console.log(`\n[${label}] 总数 ${map.size}`);
  console.log(`  包围盒 x[${minX},${maxX}] y[${minY},${maxY}] z[${minZ},${maxZ}]`);
  console.log('  灯笼体素聚类 (x,z) -> 个数 / y 范围:');
  for (const [k, v] of [...clusters.entries()].sort()) {
    console.log(`    ${k.padEnd(12)} n=${String(v.n).padStart(4)}  y[${v.yMin},${v.yMax}]`);
  }
}

scan(solid.cells, 'solid');
scan(glow.cells, 'glow');
