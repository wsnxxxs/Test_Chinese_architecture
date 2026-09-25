/**
 * VoxelWorld —— 全场景体素容器 + 隐藏面剔除几何生成（SPEC §1）。
 *
 * 坐标约定（本文件定义，全体 builder 保持一致）：
 *   体素 (x,y,z) 是边长 1 的立方，**中心**位于 (x,y,z)，占据 [x-.5,x+.5]×[y-.5,y+.5]×[z-.5,z+.5]。
 *   → fill(-46,46)、cylY(cx=0) 关于整数中点严格镜像对称；y=0 层半数没入地面，避免与地平面共面。
 *
 * 内部假设（SPEC §1 允许自行权衡内存/速度）：
 *   key = 打包整数 (x+2048)*4096² + (y+2048)*4096 + (z+2048)，有效范围 -2048..2047
 *   （L.extent 仅 ±320、最高塔约 140，余量充足）。数值 key 比 "x,y,z" 字符串省数倍内存，
 *   且 6 邻位查询 = key + 常量增量，无临时字符串。越界坐标丢弃并计入 stats().dropped（首次 warn）。
 *
 * 剔除规则：
 *   普通层的面只被普通层遮挡；发光层的面被「普通层 ∪ 发光层」遮挡。
 *   → 灯笼「发光芯」被实体包住时不产生多余面，实体外壳也不会出现破洞或共面闪烁。
 *
 * 内存：几何用分块可增长缓冲（固定 65536 条目/块，浪费上限一块 ≈2.4MB，绝不一次性申请巨型数组），
 *   最后按精确长度落到 position/normal/color 三个 Float32Array + 一个 Uint32Array 索引
 *   （每 quad 4 顶点 6 索引，比非索引省 1/3 顶点）。
 */

import * as THREE from 'three';

/* ------------------------------------------------------------ key 打包 */
const OFF = 2048;
const SPAN = 4096;
const KZ = 1;
const KY = SPAN;
const KX = SPAN * SPAN;
const MIN_COORD = -OFF;
const MAX_COORD = SPAN - OFF - 1;

const num = (v) => {
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : 0;
};

const pack = (x, y, z) => (x + OFF) * KX + (y + OFF) * KY + (z + OFF) * KZ;

/** key → [x,y,z]（写进 out 避免分配） */
function unpackInto(key, out) {
  const c = key % SPAN;
  const t = (key - c) / SPAN;
  const b = t % SPAN;
  const a = (t - b) / SPAN;
  out[0] = a - OFF;
  out[1] = b - OFF;
  out[2] = c - OFF;
}

const lo = (a, b) => Math.min(Math.floor(num(a)), Math.floor(num(b)));
const hi = (a, b) => Math.max(Math.floor(num(a)), Math.floor(num(b)));

/* ------------------------------------------------ 6 个方向（含 AO 侧邻） */
// corners: 4 顶点偏移，从外侧看为 CCW；索引 0-1-2 / 0-2-3 即两个正面三角形。
// dKey:    邻位 key 增量；sides: 该面 4 个侧向邻格增量（廉价 AO 用）。
const FACES = [
  {
    dKey: KX, nx: 1, ny: 0, nz: 0,
    corners: new Float32Array([0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5]),
    sides: new Int32Array([KX + KY, KX - KY, KX + KZ, KX - KZ]),
  },
  {
    dKey: -KX, nx: -1, ny: 0, nz: 0,
    corners: new Float32Array([-0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5]),
    sides: new Int32Array([-KX + KY, -KX - KY, -KX + KZ, -KX - KZ]),
  },
  {
    dKey: KY, nx: 0, ny: 1, nz: 0,
    corners: new Float32Array([-0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5]),
    sides: new Int32Array([KY + KX, KY - KX, KY + KZ, KY - KZ]),
  },
  {
    dKey: -KY, nx: 0, ny: -1, nz: 0,
    corners: new Float32Array([-0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5]),
    sides: new Int32Array([-KY + KX, -KY - KX, -KY + KZ, -KY - KZ]),
  },
  {
    dKey: KZ, nx: 0, ny: 0, nz: 1,
    corners: new Float32Array([-0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5]),
    sides: new Int32Array([KZ + KX, KZ - KX, KZ + KY, KZ - KY]),
  },
  {
    dKey: -KZ, nx: 0, ny: 0, nz: -1,
    corners: new Float32Array([0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5]),
    sides: new Int32Array([-KZ + KX, -KZ - KX, -KZ + KY, -KZ - KY]),
  },
];

const AO_STEP = 0.11;  // SPEC §1: shade = 1 - 0.11 * occupied
const JITTER = 0.03;   // ±3% 确定性抖动

/** 确定性 hash → [-1, 1] */
function hashNoise(x, y, z) {
  let h = Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791);
  h ^= h >>> 15;
  h = Math.imul(h, 2246822519);
  h ^= h >>> 13;
  return (h >>> 0) / 2147483648 - 1;
}

/* ------------------------------------------------ 可增长分块缓冲 */
const CHUNK_ITEMS = 1 << 16;

class ChunkStream {
  constructor(Ctor, stride) {
    this.Ctor = Ctor;
    this.stride = stride;
    this.chunks = [];
    this.cur = null;
    this.off = 0;         // 当前条目在底层数组的起始下标
    this.chunkItems = 0;  // 当前块容量（条目数）
    this.chunkEnd = 0;    // 当前块已用浮点/整数个数
    this.items = 0;       // 已提交条目总数
  }

  /** 开启一个条目并返回可写底层数组（换块后引用会变，必须每次重取） */
  reserve() {
    if (this.cur === null || this.chunkEnd + this.stride > this.cur.length) {
      this.chunks.push(this.cur = new this.Ctor(CHUNK_ITEMS * this.stride));
      this.chunkEnd = 0;
      this.chunkItems = 0;
    }
    this.off = this.chunkEnd;
    this.chunkEnd += this.stride;
    this.chunkItems++;
    this.items++;
    return this.cur;
  }

  /** 交错存储拆成 comps 份精确长度的数组 */
  split(perComp, comps) {
    const stride = perComp * comps;
    const out = [];
    for (let c = 0; c < comps; c++) out.push(new this.Ctor(this.items * perComp));
    const cursor = new Int32Array(comps + 1).fill(-1);
    for (let n = 0; n < this.chunks.length; n++) {
      const src = this.chunks[n];
      const isLast = n === this.chunks.length - 1;
      const limit = isLast ? this.chunkItems : (src.length / stride) | 0;
      for (let i = 0, j = 0; i < limit; i++, j += stride) {
        for (let c = 0; c < comps; c++) {
          const dst = out[c];
          const base = ++cursor[c];
          const k = base * perComp;
          const s = j + c * perComp;
          for (let p = 0; p < perComp; p++) dst[k + p] = src[s + p];
        }
      }
    }
    this.free();
    return out;
  }

  /** 非交错时（或按 stride 连续存储时）拷成精确长度数组 */
  collect() {
    const out = new this.Ctor(this.items * this.stride);
    let w = 0;
    for (let n = 0; n < this.chunks.length; n++) {
      const src = this.chunks[n];
      const cnt = n === this.chunks.length - 1 ? this.chunkItems * this.stride : src.length;
      out.set(src.subarray(0, cnt), w);
      w += cnt;
    }
    this.free();
    return out;
  }

  free() {
    this.chunks.length = 0;
    this.cur = null;
    this.chunkEnd = 0;
    this.chunkItems = 0;
    this.items = 0;
  }
}

/* ================================================================ 容器 */
export class VoxelWorld {
  constructor() {
    this.solid = new Map();
    this.glow = new Map();
    /** 记录 opts.jitter===0 的格；抖动在 buildMeshes 阶段裁决，故 set 的先后顺序决定最终状态 */
    this._noJitter = new Set();
    this.dropped = 0;
    this._warned = false;
    this._built = { quads: 0, glowQuads: 0 };
    this._group = null;
  }

  /* ------------------------------------------------------ 写入原语 */

  /** 写一个体素。color: 0xRRGGBB；opts: { glow:false, jitter:1 } */
  set(x, y, z, color, opts) {
    const px = Math.floor(num(x));
    const py = Math.floor(num(y));
    const pz = Math.floor(num(z));
    if (px < MIN_COORD || px > MAX_COORD || py < MIN_COORD || py > MAX_COORD || pz < MIN_COORD || pz > MAX_COORD) {
      this.dropped++;
      if (!this._warned) {
        this._warned = true;
        console.warn(`[VoxelWorld] 出现越界坐标（有效范围 ${MIN_COORD}..${MAX_COORD}），已忽略；累计见 stats().dropped`);
      }
      return false;
    }
    const key = pack(px, py, pz);
    const c = color === undefined || color === null ? 0xffffff : color | 0;
    if (opts && opts.glow) {
      this.solid.delete(key);          // 同格后写者生效，避免两层重叠导致共面闪烁
      this.glow.set(key, c);
    } else {
      this.glow.delete(key);
      this.solid.set(key, c);
    }
    if (opts && opts.jitter === 0) this._noJitter.add(key);
    else this._noJitter.delete(key);
    return true;
  }

  /** 只查普通层（SPEC §1） */
  get(x, y, z) {
    const v = this.solid.get(pack(Math.floor(num(x)), Math.floor(num(y)), Math.floor(num(z))));
    return v === undefined ? null : v;
  }

  isGlow(x, y, z) {
    return this.glow.has(pack(Math.floor(num(x)), Math.floor(num(y)), Math.floor(num(z))));
  }

  /** 任意层占用（builder 需要避让/叠加判断时用） */
  has(x, y, z) {
    const k = pack(Math.floor(num(x)), Math.floor(num(y)), Math.floor(num(z)));
    return this.solid.has(k) || this.glow.has(k);
  }

  /** 闭区间长方体（端点自动排序） */
  fill(x0, y0, z0, x1, y1, z1, color, opts) {
    const ax = lo(x0, x1), bx = hi(x0, x1);
    const ay = lo(y0, y1), by = hi(y0, y1);
    const az = lo(z0, z1), bz = hi(z0, z1);
    for (let y = ay; y <= by; y++) {
      for (let z = az; z <= bz; z++) {
        for (let x = ax; x <= bx; x++) this.set(x, y, z, color, opts);
      }
    }
    return this;
  }

  /** 空心盒：只有 6 面皮 */
  shell(x0, y0, z0, x1, y1, z1, color, opts) {
    const ax = lo(x0, x1), bx = hi(x0, x1);
    const ay = lo(y0, y1), by = hi(y0, y1);
    const az = lo(z0, z1), bz = hi(z0, z1);
    for (let y = ay; y <= by; y++) {
      const yEdge = y === ay || y === by;
      for (let z = az; z <= bz; z++) {
        const zEdge = z === az || z === bz;
        for (let x = ax; x <= bx; x++) {
          if (yEdge || zEdge || x === ax || x === bx) this.set(x, y, z, color, opts);
        }
      }
    }
    return this;
  }

  /** Y 向圆柱；opts.hollow=true → 只有外圈环（塔身、井口） */
  cylY(cx, cz, y0, y1, r, color, opts) {
    const ox = Math.floor(num(cx));
    const oz = Math.floor(num(cz));
    const rr = Math.max(0, num(r));
    const reach = Math.ceil(rr);
    const r2 = rr * rr;
    const innerR = Math.max(0, rr - 1);
    const inner2 = innerR * innerR;
    const ay = lo(y0, y1), by = hi(y0, y1);
    const hollow = !!(opts && opts.hollow);
    for (let y = ay; y <= by; y++) {
      for (let z = oz - reach; z <= oz + reach; z++) {
        const dz = z - oz;
        for (let x = ox - reach; x <= ox + reach; x++) {
          const dx = x - ox;
          const d2 = dx * dx + dz * dz;
          if (d2 > r2) continue;
          if (hollow && d2 <= inner2) continue;
          this.set(x, y, z, color, opts);
        }
      }
    }
    return this;
  }

  /** 椭球；opts.hollow=true → 仅表面 */
  ell(cx, cy, cz, rx, ry, rz, color, opts) {
    const ox = num(cx), oy = num(cy), oz = num(cz);
    const a = Math.max(0.5, num(rx)), b = Math.max(0.5, num(ry)), c = Math.max(0.5, num(rz));
    const x0 = Math.floor(ox - a), x1 = Math.floor(ox + a);
    const y0 = Math.floor(oy - b), y1 = Math.floor(oy + b);
    const z0 = Math.floor(oz - c), z1 = Math.floor(oz + c);
    const ia = 1 / (a * a), ib = 1 / (b * b), ic = 1 / (c * c);
    const q = (dx, dy, dz) => dx * dx * ia + dy * dy * ib + dz * dz * ic;
    const hollow = !!(opts && opts.hollow);
    for (let y = y0; y <= y1; y++) {
      const dy = y - oy;
      for (let z = z0; z <= z1; z++) {
        const dz = z - oz;
        for (let x = x0; x <= x1; x++) {
          const dx = x - ox;
          if (q(dx, dy, dz) > 1) continue;
          if (hollow &&
            q(dx + 1, dy, dz) <= 1 && q(dx - 1, dy, dz) <= 1 &&
            q(dx, dy + 1, dz) <= 1 && q(dx, dy - 1, dz) <= 1 &&
            q(dx, dy, dz + 1) <= 1 && q(dx, dy, dz - 1) <= 1) continue;
          this.set(x, y, z, color, opts);
        }
      }
    }
    return this;
  }

  /**
   * 正多棱柱（宝塔八角：sides=8, rot=Math.PI/8 → 平面正好朝正南北/正东西）。
   * 内判定：转到局部帧后折进单个扇区，用 R = apothem / cos(d) 的 |cos| 距离判据。
   * opts.hollow=true → 仅外圈（用四个水平邻位的同一判据求边缘）。
   */
  prism(cx, cz, y0, y1, r, sides, rot, color, opts) {
    const n = Math.max(3, Math.floor(num(sides)));
    const ox = Math.floor(num(cx)), oz = Math.floor(num(cz));
    const rr = Math.max(0.5, num(r));
    const seg = (Math.PI * 2) / n;
    const half = seg / 2;
    const cosHalf = Math.cos(half);
    const apothem = rr * cosHalf;
    const reach = Math.floor(apothem + 0.5);
    const rot0 = num(rot);
    const ay = lo(y0, y1), by = hi(y0, y1);
    const hollow = !!(opts && opts.hollow);

    const within = (dx, dz) => {
      const len2 = dx * dx + dz * dz;
      if (len2 > rr * rr) return false;
      if (len2 < 1e-6) return true;
      const len = Math.sqrt(len2);
      let ang = Math.atan2(dz, dx) - rot0;
      ang %= seg;
      if (ang < 0) ang += seg;
      const d = Math.abs(ang - half);
      return len * Math.max(cosHalf, Math.cos(d)) <= apothem;
    };

    for (let y = ay; y <= by; y++) {
      for (let z = oz - reach; z <= oz + reach; z++) {
        const dz = z - oz;
        for (let x = ox - reach; x <= ox + reach; x++) {
          const dx = x - ox;
          if (!within(dx, dz)) continue;
          if (hollow && within(dx + 1, dz) && within(dx - 1, dz) && within(dx, dz + 1) && within(dx, dz - 1)) continue;
          this.set(x, y, z, color, opts);
        }
      }
    }
    return this;
  }

  /** 把另一个 world 平移拷贝进本 world（含发光层与 jitter 设置） */
  copyFrom(other, dx = 0, dy = 0, dz = 0) {
    if (!other || !other.solid) return this;
    const ox = Math.round(num(dx)), oy = Math.round(num(dy)), oz = Math.round(num(dz));
    const xyz = [0, 0, 0];
    const srcJitter = other._noJitter;
    for (const [k, c] of other.solid) {
      unpackInto(k, xyz);
      this.set(xyz[0] + ox, xyz[1] + oy, xyz[2] + oz, c, srcJitter.has(k) ? { jitter: 0 } : undefined);
    }
    for (const [k, c] of other.glow) {
      unpackInto(k, xyz);
      this.set(xyz[0] + ox, xyz[1] + oy, xyz[2] + oz, c, { glow: true });
    }
    return this;
  }

  /* ------------------------------------------------------ 查询 / 统计 */

  count() { return this.solid.size + this.glow.size; }

  clear() {
    this.solid.clear();
    this.glow.clear();
    this._noJitter.clear();
    this.dropped = 0;
    this._built.quads = 0;
    this._built.glowQuads = 0;
    return this;
  }

  stats() {
    const q = this._built.quads + this._built.glowQuads;
    return {
      voxels: this.count(),
      solid: this.solid.size,
      glow: this.glow.size,
      quads: q,
      solidQuads: this._built.quads,
      glowQuads: this._built.glowQuads,
      triangles: q * 2,
      vertices: q * 4,
      dropped: this.dropped,
    };
  }

  /* ------------------------------------------------ 几何生成（单次合批） */

  /**
   * @param {{roughness?:number, metalness?:number, flatShading?:boolean}} [matOpts]
   * @returns {THREE.Group} 主体 Mesh +（存在发光面时）发光 Mesh
   */
  buildMeshes(matOpts = {}) {
    const mo = matOpts || {};
    const group = new THREE.Group();
    group.name = 'voxel-world';

    const layers = [];
    this._emitLayer(this.solid, null, false, layers);
    this._emitLayer(this.glow, this.solid, true, layers);

    for (const l of layers) {
      if (l.isGlow) {
        const mat = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
        const mesh = new THREE.Mesh(l.geo, mat);
        mesh.name = 'voxel-glow';
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        group.add(mesh);
      } else {
        const mat = new THREE.MeshStandardMaterial({
          vertexColors: true,
          roughness: mo.roughness === undefined ? 0.92 : mo.roughness,
          metalness: mo.metalness === undefined ? 0 : mo.metalness,
          flatShading: mo.flatShading === undefined ? true : mo.flatShading,
        });
        const mesh = new THREE.Mesh(l.geo, mat);
        mesh.name = 'voxel-solid';
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
      }
    }

    group.userData.stats = this.stats();
    this._group = group;
    return group;
  }

  /**
   * 单层隐藏面剔除 + 顶点色（廉价 AO）。
   * @param src    出面的体素表
   * @param extra  额外遮挡表（发光层需避开实体；普通层传 null）
   * @param isGlow 发光层不做 AO / 抖动
   * @param out    输出 { geo, quads, isGlow }
   */
  _emitLayer(src, extra, isGlow, out) {
    const noJitter = this._noJitter;   // 只读：允许重复 buildMeshes 得到一致结果

    const verts = new ChunkStream(Float32Array, 9);  // pos3 + nrm3 + col3
    const idx = new ChunkStream(Uint32Array, 3);     // 每 quad 两个三角形
    const rgbCache = new Map();
    const scratch = new THREE.Color();
    const xyz = [0, 0, 0];

    let quads = 0;

    for (const [key, hex] of src) {
      unpackInto(key, xyz);
      const x = xyz[0], y = xyz[1], z = xyz[2];

      let rgb = rgbCache.get(hex);
      if (rgb === undefined) {
        scratch.set(hex);                  // new THREE.Color(hex) 语义：自动 sRGB → linear
        rgb = [scratch.r, scratch.g, scratch.b];
        rgbCache.set(hex, rgb);
      }

      let mul = 1;
      if (!isGlow && !noJitter.has(key)) mul = 1 + JITTER * hashNoise(x, y, z);
      const baseMul = mul;

      for (let f = 0; f < 6; f++) {
        const face = FACES[f];
        const nk = key + face.dKey;
        if (src.has(nk)) continue;                // 同层相邻 → 隐藏
        if (extra !== null && extra.has(nk)) continue;

        let m = baseMul;
        if (!isGlow) {
          const s = face.sides;
          let occ = 0;
          if (src.has(key + s[0])) occ++;
          if (src.has(key + s[1])) occ++;
          if (src.has(key + s[2])) occ++;
          if (src.has(key + s[3])) occ++;
          m *= 1 - AO_STEP * occ;
        }

        const cr = face.corners;
        const v0 = quads * 4;
        const r = rgb[0] * m, g = rgb[1] * m, b = rgb[2] * m;

        for (let i = 0; i < 4; i++) {
          const co = i * 3;
          const a = verts.reserve();
          const o = verts.off;
          a[o] = x + cr[co];
          a[o + 1] = y + cr[co + 1];
          a[o + 2] = z + cr[co + 2];
          a[o + 3] = face.nx;
          a[o + 4] = face.ny;
          a[o + 5] = face.nz;
          a[o + 6] = r;
          a[o + 7] = g;
          a[o + 8] = b;
        }

        let a = idx.reserve();
        let o = idx.off;
        a[o] = v0; a[o + 1] = v0 + 1; a[o + 2] = v0 + 2;
        a = idx.reserve();
        o = idx.off;
        a[o] = v0; a[o + 1] = v0 + 2; a[o + 2] = v0 + 3;

        quads++;
      }
    }

    this._built[isGlow ? 'glowQuads' : 'quads'] = quads;
    if (quads === 0) {
      verts.free();
      idx.free();
      return;
    }

    const [position, normal, color] = verts.split(3, 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(color, 3));
    geo.setIndex(new THREE.BufferAttribute(idx.collect(), 1));
    geo.computeBoundingSphere();

    out.push({ geo, quads, isGlow });
  }

  /** 释放 buildMeshes 产生的几何与材质 */
  disposeMeshes() {
    if (!this._group) return;
    this._group.traverse((o) => {
      if (!o.isMesh) return;
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    this._group = null;
  }
}
