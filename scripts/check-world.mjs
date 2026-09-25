// 无浏览器自检：生成体素世界并网格化，输出统计信息（npm run check）
import { generateWorld } from '../src/build/layout.js';
import { buildWorldMeshes, createVoxelMaterial } from '../src/voxel/mesher.js';
import { paletteArrays } from '../src/voxel/palette.js';
import { AXIS_X } from '../src/config.js';

let t = performance.now();
const w = generateWorld();
const genMs = performance.now() - t;
t = performance.now();
const { group, faces } = buildWorldMeshes(w, paletteArrays(), createVoxelMaterial());
const meshMs = performance.now() - t;

// 中轴对称性检查：比较 x 与镜像 x' = 2*AXIS_X-1-x 两列在院墙内的建筑体素
let same = 0, total = 0;
for (let y = 3; y < w.sy; y++) {
  for (let z = 20; z < 250; z++) {
    for (let x = 24; x < AXIS_X; x++) {
      const a = w.get(x, y, z), b = w.get(2 * AXIS_X - 1 - x, y, z);
      if (!a && !b) continue;
      total++;
      if (!!a === !!b) same++;
    }
  }
}

console.log(`体素世界  ${w.sx}×${w.sy}×${w.sz}`);
console.log(`实体体素  ${w.count().toLocaleString()}（生成 ${genMs.toFixed(0)} ms）`);
console.log(`可见面    ${faces.toLocaleString()}，区块 ${group.children.length}（网格化 ${meshMs.toFixed(0)} ms）`);
console.log(`建筑      ${w.labels.map((l) => l.name).join('、')}`);
console.log(`灯火      ${w.lights.length} 处`);
console.log(`中轴对称  院内体素占位镜像一致率 ${((same / total) * 100).toFixed(1)}%（树木随机分布除外）`);
if (faces < 1000 || w.labels.length < 5) {
  console.error('自检失败');
  process.exit(1);
}
