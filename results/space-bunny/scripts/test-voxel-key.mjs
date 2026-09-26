/** 体素键编解码自检：确认 buildVoxelGeometry 还原出的坐标与写入一致。 */
import { VoxelCanvas, buildVoxelGeometry, vkey } from '../src/core/voxel.js';

const cv = new VoxelCanvas('t');
const samples = [
  [0, 0, 0], [5, 7, -9], [-120, 63, 240], [130, 3, -150], [0, 111, -128], [-62, 0, 20],
];
for (const s of samples) cv.set(s[0], s[1], s[2], 0xff8800);

const { geometry, quads } = buildVoxelGeometry(cv);
const pos = geometry.getAttribute('position');
const nor = geometry.getAttribute('normal');
const idx = geometry.getIndex();
const bb = geometry.boundingBox;

console.log('体素数:', cv.size, '| 面数:', quads, '| 顶点数:', pos.count, '| 索引:', idx.count);
console.log('包围盒 min:', bb.min.toArray().join(','), '| max:', bb.max.toArray().join(','));

// 逐顶点核对：坐标必须是整数，且必须落在 6 个样本体素的外包范围内
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
let nonInteger = 0;
for (let i = 0; i < pos.count; i++) {
  const vx = pos.getX(i);
  const vy = pos.getY(i);
  const vz = pos.getZ(i);
  if (!Number.isInteger(vx) || !Number.isInteger(vy) || !Number.isInteger(vz)) nonInteger++;
  if (vx < minX) minX = vx;
  if (vx > maxX) maxX = vx;
  if (vy < minY) minY = vy;
  if (vy > maxY) maxY = vy;
  if (vz < minZ) minZ = vz;
  if (vz > maxZ) maxZ = vz;
}
const expectMinX = -120, expectMaxX = 131, expectMinY = 0, expectMaxY = 112, expectMinZ = -150, expectMaxZ = 241;
const rangeOk = minX === expectMinX && maxX === expectMaxX && minY === expectMinY
  && maxY === expectMaxY && minZ === expectMinZ && maxZ === expectMaxZ;

console.log('实际范围 x[' + minX + ',' + maxX + '] y[' + minY + ',' + maxY + '] z[' + minZ + ',' + maxZ + ']');
console.log('非整数顶点:', nonInteger);
console.log('范围还原:', rangeOk ? 'OK' : 'FAIL');

// 法线必须是 6 个单位轴向量之一
let badNormal = 0;
for (let i = 0; i < nor.count; i++) {
  const nx = Math.round(nor.getX(i));
  const ny = Math.round(nor.getY(i));
  const nz = Math.round(nor.getZ(i));
  const l1 = Math.abs(nx) + Math.abs(ny) + Math.abs(nz);
  if (l1 !== 1) badNormal++;
}
console.log('异常法线:', badNormal, badNormal === 0 ? 'OK' : 'FAIL');

// 键唯一性 + 往返一致
const keys = new Set();
let roundTrip = true;
for (const s of samples) {
  const k = vkey(s[0], s[1], s[2]);
  keys.add(k);
  if (cv.get(s[0], s[1], s[2]) !== 0xff8800) roundTrip = false;
}
console.log('键唯一:', keys.size === samples.length ? 'OK' : 'FAIL', '| 读写往返:', roundTrip ? 'OK' : 'FAIL');

const pass = rangeOk && nonInteger === 0 && badNormal === 0 && keys.size === samples.length && roundTrip;
console.log(pass ? '\n==> 自检通过' : '\n==> 自检失败');
process.exit(pass ? 0 : 1);
