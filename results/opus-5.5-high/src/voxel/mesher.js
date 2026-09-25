import * as THREE from 'three';
import { GY } from '../config.js';

// 六个面：法线轴 a，方向 s，两条切线轴 t1/t2（t1 × t2 = +a，保证逆时针绕序）
const FACES = [];
for (let a = 0; a < 3; a++) {
  for (const s of [1, -1]) {
    const t1 = (a + 1) % 3;
    const t2 = (a + 2) % 3;
    const corners = s > 0 ? [[0, 0], [1, 0], [1, 1], [0, 1]] : [[0, 0], [0, 1], [1, 1], [1, 0]];
    FACES.push({ a, s, t1, t2, corners });
  }
}
// 顶点环境光遮蔽等级（0 = 最暗）
const AO = [0.5, 0.68, 0.85, 1.0];

class Buf {
  constructor(Type, n) {
    this.T = Type;
    this.a = new Type(n);
    this.n = 0;
  }
  reserve(k) {
    if (this.n + k > this.a.length) {
      const b = new this.T(Math.max(this.a.length * 2, this.n + k));
      b.set(this.a);
      this.a = b;
    }
  }
  view() {
    return this.a.slice(0, this.n);
  }
}

function hash3(x, y, z) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1103515245);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

/**
 * 对区块 [x0,x1)×[z0,z1)（整高）进行面剔除网格化：
 * 只输出与空气相邻的面，并逐顶点烘焙 AO 与颜色抖动。
 */
export function meshChunk(world, pal, x0, z0, x1, z1) {
  const { sx, sy, sz, data } = world;
  const solid = (x, y, z) => {
    if (y < 0) return 1;
    if (y >= sy) return 0;
    if (x < 0 || z < 0 || x >= sx || z >= sz) return y < GY ? 1 : 0;
    return data[(y * sz + z) * sx + x] !== 0 ? 1 : 0;
  };

  const pos = new Buf(Float32Array, 1 << 16);
  const nor = new Buf(Int8Array, 1 << 16);
  const col = new Buf(Uint16Array, 1 << 16);
  const emi = new Buf(Uint8Array, 1 << 14);
  const idx = new Buf(Uint32Array, 1 << 16);
  let vcount = 0;
  let faces = 0;

  const p = [0, 0, 0];
  const q = [0, 0, 0];
  const r = [0, 0, 0];
  const ao = [0, 0, 0, 0];

  for (let y = 0; y < sy; y++) {
    for (let z = z0; z < z1; z++) {
      const row = (y * sz + z) * sx;
      for (let x = x0; x < x1; x++) {
        const c = data[row + x];
        if (!c) continue;
        p[0] = x; p[1] = y; p[2] = z;
        const jit = 1 + (hash3(x, y, z) - 0.5) * 2 * pal.jitter[c];
        const cr = pal.rgb[c * 3] * jit;
        const cg = pal.rgb[c * 3 + 1] * jit;
        const cb = pal.rgb[c * 3 + 2] * jit;
        const em = Math.round(Math.min(1, pal.emit[c] / 1.5) * 255);

        for (let f = 0; f < 6; f++) {
          const F = FACES[f];
          q[0] = x; q[1] = y; q[2] = z;
          q[F.a] += F.s;
          if (solid(q[0], q[1], q[2])) continue;

          for (let k = 0; k < 4; k++) {
            const d1 = F.corners[k][0] ? 1 : -1;
            const d2 = F.corners[k][1] ? 1 : -1;
            r[0] = q[0]; r[1] = q[1]; r[2] = q[2];
            r[F.t1] += d1;
            const s1 = solid(r[0], r[1], r[2]);
            r[F.t1] -= d1; r[F.t2] += d2;
            const s2 = solid(r[0], r[1], r[2]);
            r[F.t1] += d1;
            const cc = solid(r[0], r[1], r[2]);
            ao[k] = s1 && s2 ? 0 : 3 - (s1 + s2 + cc);
          }

          pos.reserve(12); nor.reserve(12); col.reserve(12); emi.reserve(4); idx.reserve(6);
          for (let k = 0; k < 4; k++) {
            const vx = [p[0], p[1], p[2]];
            vx[F.a] += F.s > 0 ? 1 : 0;
            vx[F.t1] += F.corners[k][0];
            vx[F.t2] += F.corners[k][1];
            pos.a[pos.n++] = vx[0];
            pos.a[pos.n++] = vx[1];
            pos.a[pos.n++] = vx[2];
            nor.a[nor.n++] = F.a === 0 ? 127 * F.s : 0;
            nor.a[nor.n++] = F.a === 1 ? 127 * F.s : 0;
            nor.a[nor.n++] = F.a === 2 ? 127 * F.s : 0;
            const l = AO[ao[k]];
            col.a[col.n++] = Math.min(65535, Math.round(cr * l * 65535));
            col.a[col.n++] = Math.min(65535, Math.round(cg * l * 65535));
            col.a[col.n++] = Math.min(65535, Math.round(cb * l * 65535));
            emi.a[emi.n++] = em;
          }
          const b = vcount;
          // 选择亮度和较大的一对对角点作为三角剖分对角线，避免 AO 各向异性
          if (ao[1] + ao[3] > ao[0] + ao[2]) {
            idx.a.set([b + 1, b + 2, b + 3, b + 3, b, b + 1], idx.n);
          } else {
            idx.a.set([b, b + 1, b + 2, b, b + 2, b + 3], idx.n);
          }
          idx.n += 6;
          vcount += 4;
          faces++;
        }
      }
    }
  }
  if (!faces) return null;

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos.view(), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor.view(), 3, true));
  g.setAttribute('color', new THREE.BufferAttribute(col.view(), 3, true));
  g.setAttribute('aEmit', new THREE.BufferAttribute(emi.view(), 1, true));
  const ind = idx.view();
  g.setIndex(new THREE.BufferAttribute(vcount < 65536 ? new Uint16Array(ind) : ind, 1));
  g.computeBoundingSphere();
  g.computeBoundingBox();
  return { geometry: g, faces };
}

/** 创建带“夜间自发光”能力的体素材质 */
export function createVoxelMaterial() {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86, metalness: 0.0 });
  const uniforms = { uGlow: { value: 0 } };
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uGlow = uniforms.uGlow;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aEmit;\nvarying float vEmit;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvEmit = aEmit;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vEmit;\nuniform float uGlow;')
      .replace(
        '#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vColor.rgb * vEmit * uGlow;'
      );
  };
  mat.userData.uniforms = uniforms;
  return mat;
}

/** 将整个世界按区块网格化 */
export function buildWorldMeshes(world, pal, material, chunk = 48) {
  const group = new THREE.Group();
  let faces = 0;
  for (let z0 = 0; z0 < world.sz; z0 += chunk) {
    for (let x0 = 0; x0 < world.sx; x0 += chunk) {
      const res = meshChunk(world, pal, x0, z0, Math.min(world.sx, x0 + chunk), Math.min(world.sz, z0 + chunk));
      if (!res) continue;
      const mesh = new THREE.Mesh(res.geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
      faces += res.faces;
    }
  }
  return { group, faces };
}
