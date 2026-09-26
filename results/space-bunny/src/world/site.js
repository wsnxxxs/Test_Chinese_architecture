/**
 * 总平面：地面、道路、院墙、御河平桥、远山，以及全部建筑的落位。
 *
 * 坐标：X 向东，Z 向南。中轴 = X 0；南入口在 +Z，北端宝塔在 -Z。
 */
import * as THREE from 'three';
import { P } from '../core/palette.js';
import { buildFlatGrid } from '../core/voxel.js';
import * as K from './parts.js';
import { Pen, mainHall, sideHall, mountainGate, bellDrumTower, pagoda, corridor } from './buildings.js';

export const SITE = {
  wallX: 106,       // 东西院墙
  wallZSouth: 96,   // 南院墙
  wallZNorth: -172, // 北院墙
  gateZ: 90,
  riverZ0: 100,
  riverZ1: 115,
  pagodaZ: -128,
  hallZ: -34,
};

/** 带世界平移的画笔：复用 Pen 的旋转，再整体平移到 (ox, oz) */
class Placed extends Pen {
  constructor(target, rot, ox, oz) {
    super(target, rot);
    this.ox = ox;
    this.oz = oz;
  }

  _p(x, z) {
    const a = super._p(x, z);
    return [a[0] + this.ox, a[1] + this.oz];
  }
}

/** 确定性哈希噪声 */
function hash2(x, z) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// ======================================================================
//  地面
// ======================================================================

/** 宫城内铺装：御道 + 庭院 + 建筑周边石坪 + 草地 */
function precinctColor(x, z) {
  const n = hash2(Math.floor(x / 2), Math.floor(z / 2));

  // 御道（中轴大道）
  if (Math.abs(x) <= 13 && z <= 99 && z >= -160) {
    if (Math.abs(x) <= 5 && Math.floor(z / 4) % 2 === 0) return P.stoneLight;
    if (Math.abs(x) > 10) return P.paveAlt;
    return n > 0.5 ? P.pave : P.paveLight;
  }

  const apron = (cx, cz, hw, hd) => Math.abs(x - cx) <= hw && Math.abs(z - cz) <= hd;
  if (apron(0, SITE.hallZ, 52, 32)) return n > 0.6 ? P.court : P.courtWarm;
  if (apron(0, SITE.gateZ, 34, 18)) return n > 0.6 ? P.court : P.courtWarm;
  if (apron(62, 20, 28, 36) || apron(-62, 20, 28, 36)) return n > 0.6 ? P.court : P.courtWarm;
  if (apron(48, -88, 26, 32) || apron(-48, -88, 26, 32)) return n > 0.6 ? P.court : P.courtWarm;
  if (apron(64, 70, 20, 20) || apron(-64, 70, 20, 20)) return n > 0.6 ? P.court : P.courtWarm;
  if (apron(0, SITE.pagodaZ, 26, 26)) return n > 0.6 ? P.court : P.courtWarm;
  if (apron(50, -33, 13, 30) || apron(-50, -33, 13, 30)) return n > 0.5 ? P.pave : P.paveAlt;

  // 横向连接路
  if (Math.abs(z - 48) <= 5 && Math.abs(x) <= 94) return n > 0.5 ? P.pave : P.paveAlt;
  if (Math.abs(z + 8) <= 6 && Math.abs(x) <= 94) return n > 0.5 ? P.pave : P.paveAlt;
  if (Math.abs(z + 68) <= 5 && Math.abs(x) <= 78) return n > 0.5 ? P.pave : P.paveAlt;
  if ((Math.abs(x - 48) <= 4 || Math.abs(x + 48) <= 4) && z <= -60 && z >= -118) return n > 0.5 ? P.pave : P.paveAlt;
  if ((Math.abs(x - 30) <= 4 || Math.abs(x + 30) <= 4) && z <= -110 && z >= -160) return n > 0.5 ? P.pave : P.paveAlt;

  // 庭院铺装网格线
  if (Math.abs(x) <= 92 && z <= 88 && z >= -76) {
    const gx = Math.abs(((x / 4) | 0) * 4 - x) < 0.6;
    const gz = Math.abs(((z / 4) | 0) * 4 - z) < 0.6;
    if (gx || gz) return P.paveAlt;
    return n > 0.5 ? P.court : P.courtWarm;
  }

  // 草地
  if (n > 0.84) return P.grassDry;
  if (n > 0.55) return P.grassAlt;
  if (n < 0.18) return P.grassDark;
  return P.grass;
}

/** 远景地形高度：宫城范围为平台，御河为河床，其余为远山 */
function terrainHeight(x, z) {
  if (Math.abs(x) < 200 && z > 98 && z < 117) return -4;       // 河床
  if (Math.abs(x) < 240 && z > -290 && z < 200) return -0.5;   // 宫城台地（略低于精细地面）

  const bumps = [
    [-440, -340, 270, 96], [460, -390, 280, 104], [-530, 150, 240, 78],
    [550, 220, 250, 84], [-190, -560, 300, 100], [270, -600, 320, 110],
    [-640, -90, 220, 70], [650, -70, 230, 74], [-330, 440, 260, 68], [400, 470, 270, 72],
    [-720, 310, 250, 82], [730, 350, 260, 86], [-80, 620, 300, 76], [120, -700, 320, 92],
  ];
  let h = 0;
  for (const [bx, bz, r, hh] of bumps) {
    const d = Math.hypot(x - bx, z - bz) / r;
    if (d < 1) {
      let v = hh * Math.pow(Math.cos(d * Math.PI * 0.5), 1.8);
      const a = Math.atan2(z - bz, x - bx);
      v *= 0.70 + 0.30 * (0.5 + 0.5 * Math.sin(a * 3.3 + bx * 0.11) * Math.cos(a * 2.1 - bz * 0.07));
      v += (hash2(Math.round(x / 26), Math.round(z / 26)) - 0.5) * hh * 0.20;
      if (v > h) h = v;
    }
  }
  return Math.round(h / 5) * 5;
}

function terrainColor(x, z, h) {
  const n = hash2(Math.floor(x / 12), Math.floor(z / 12));
  if (h <= 0) {
    const g = hash2(Math.floor(x / 52), Math.floor(z / 52)) * 0.66
      + hash2(Math.floor(x / 17), Math.floor(z / 17)) * 0.34;
    return g > 0.63 ? P.grassAlt : (g < 0.35 ? P.grassDark : P.grass);
  }
  if (h < 10) return n > 0.5 ? P.grassDark : P.hillNear;
  if (h < 34) return n > 0.5 ? P.hillNear : P.hillMid;
  if (h < 78) return n > 0.5 ? P.hillMid : P.hillFar;
  return n > 0.5 ? P.hillFar : P.peak;
}

/** 阶梯化高度场网格（每格一个顶面 + 必要侧壁），远景体素感但极省面 */
function buildTerraced({ x0, z0, x1, z1, cell }) {
  const nx = Math.ceil((x1 - x0) / cell);
  const nz = Math.ceil((z1 - z0) / cell);
  const H = new Float32Array(nx * nz);
  const C = new Uint8Array(nx * nz * 3);
  const cache = new Map();
  const toLin = (hex) => {
    let c = cache.get(hex);
    if (!c) { c = new THREE.Color(hex); cache.set(hex, c); }
    return c;
  };
  for (let gz = 0; gz < nz; gz++) {
    for (let gx = 0; gx < nx; gx++) {
      const ax = x0 + gx * cell;
      const az = z0 + gz * cell;
      const h = terrainHeight(ax + cell / 2, az + cell / 2);
      const idx = gz * nx + gx;
      H[idx] = h;
      const c = toLin(terrainColor(ax + cell / 2, az + cell / 2, h));
      C[idx * 3] = Math.min(255, c.r * 255) | 0;
      C[idx * 3 + 1] = Math.min(255, c.g * 255) | 0;
      C[idx * 3 + 2] = Math.min(255, c.b * 255) | 0;
    }
  }

  let quads = nx * nz;
  for (let gz = 0; gz < nz; gz++) {
    for (let gx = 0; gx < nx; gx++) {
      const h = H[gz * nx + gx];
      const nb = (dx, dz) => {
        const ax = gx + dx, az = gz + dz;
        if (ax < 0 || az < 0 || ax >= nx || az >= nz) return -99;
        return H[az * nx + ax];
      };
      if (h > nb(1, 0)) quads++;
      if (h > nb(-1, 0)) quads++;
      if (h > nb(0, 1)) quads++;
      if (h > nb(0, -1)) quads++;
    }
  }

  const positions = new Float32Array(quads * 4 * 3);
  const normals = new Int8Array(quads * 4 * 3);
  const colors = new Uint8Array(quads * 4 * 3);
  const indices = new Uint32Array(quads * 6);
  let q = 0;

  const emit = (verts, nrm) => {
    const base = q * 12;
    for (let k = 0; k < 4; k++) {
      positions[base + k * 3] = verts[k][0];
      positions[base + k * 3 + 1] = verts[k][1];
      positions[base + k * 3 + 2] = verts[k][2];
      normals[base + k * 3] = nrm[0] * 127;
      normals[base + k * 3 + 1] = nrm[1] * 127;
      normals[base + k * 3 + 2] = nrm[2] * 127;
    }
    const b = q * 4;
    indices[q * 6] = b; indices[q * 6 + 1] = b + 1; indices[q * 6 + 2] = b + 2;
    indices[q * 6 + 3] = b; indices[q * 6 + 4] = b + 2; indices[q * 6 + 5] = b + 3;
    q++;
  };
  const paint = (gi) => {
    const base = (q - 1) * 12;
    for (let k = 0; k < 4; k++) {
      colors[base + k * 3] = C[gi * 3];
      colors[base + k * 3 + 1] = C[gi * 3 + 1];
      colors[base + k * 3 + 2] = C[gi * 3 + 2];
    }
  };

  for (let gz = 0; gz < nz; gz++) {
    for (let gx = 0; gx < nx; gx++) {
      const gi = gz * nx + gx;
      const h = H[gi];
      const ax = x0 + gx * cell;
      const az = z0 + gz * cell;
      emit([[ax, h, az], [ax, h, az + cell], [ax + cell, h, az + cell], [ax + cell, h, az]], [0, 1, 0]);
      paint(gi);

      const side = (dx, dz, nrm) => {
        const ax2 = gx + dx, az2 = gz + dz;
        const outside = ax2 < 0 || az2 < 0 || ax2 >= nx || az2 >= nz;
        const nh = outside ? Math.min(0, h) : H[az2 * nx + ax2];
        if (h <= nh) return;
        const x0e = ax + (dx > 0 ? cell : 0);
        const z0e = az + (dz > 0 ? cell : 0);
        if (dx > 0) emit([[x0e, nh, z0e], [x0e, h, z0e], [x0e, h, z0e + cell], [x0e, nh, z0e + cell]], nrm);
        else if (dx < 0) emit([[x0e, nh, z0e + cell], [x0e, h, z0e + cell], [x0e, h, z0e], [x0e, nh, z0e]], nrm);
        else if (dz > 0) emit([[x0e, nh, z0e], [x0e + cell, nh, z0e], [x0e + cell, h, z0e], [x0e, h, z0e]], nrm);
        else emit([[x0e + cell, nh, z0e], [x0e, nh, z0e], [x0e, h, z0e], [x0e + cell, h, z0e]], nrm);
        paint(gi);
      };
      side(1, 0, [1, 0, 0]);
      side(-1, 0, [-1, 0, 0]);
      side(0, 1, [0, 0, 1]);
      side(0, -1, [0, 0, -1]);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3, true));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeBoundingSphere();
  return { geometry, quads };
}

// ======================================================================
//  院墙 / 河 / 桥
// ======================================================================

/** 红墙 + 琉璃瓦墙帽 */
function redWall(b, axis, at, from, to) {
  const h = 12;
  for (let p = from; p <= to; p += 1) {
    const along = axis === 'x' ? p : at;
    const across = axis === 'x' ? at : p;
    b.box(along - 1, 0, across - 1, along + 1, 1, across + 1, P.stoneDark);
    b.box(along, 2, across - 1, along, 2, across + 1, P.stone);
    for (let dy = 3; dy <= h; dy++) {
      b.box(along, dy, across - 1, along, dy, across + 1, dy % 4 === 0 ? P.wallRedDark : P.wallRed);
    }
    for (let dy = h + 1; dy <= h + 2; dy++) {
      for (let e = -1; e <= 1; e++) {
        const x = axis === 'x' ? along + e : across + e;
        const z = axis === 'x' ? across + e : along + e;
        b.set(x, dy, z, Math.abs(p) % 3 === 0 ? P.glazeGoldLight : P.glazeGold);
      }
    }
    b.set(axis === 'x' ? along : across, h + 3, axis === 'x' ? across : along, P.glazeGoldDark);
  }
}

/** 御河驳岸 + 平桥 */
function riverAndBridge(b) {
  const z0 = SITE.riverZ0;
  const z1 = SITE.riverZ1;
  for (let z = z0 - 4; z < z0; z++) b.box(-220, 0, z, 220, 0, z, P.stoneDark);
  for (let z = z1; z < z1 + 4; z++) b.box(-220, 0, z, 220, 0, z, P.stoneDark);
  for (const sx of [-1, 1]) {
    for (let z = z0 - 4; z < z1 + 4; z++) {
      b.box(sx * 16, 1, z, sx * 20, 1, z, P.stone);
      b.set(sx * 220, 1, z, P.stone);
    }
  }
  for (const bx of [-12, 12]) b.box(bx - 1, -3, z0 - 2, bx + 1, -1, z1 + 2, P.stoneDark);
  b.box(-16, 1, z0 - 4, 16, 1, z1 + 4, P.marbleShade);
  b.box(-16, 2, z0 - 4, -14, 2, z1 + 4, P.marble);
  b.box(14, 2, z0 - 4, 16, 2, z1 + 4, P.marble);
  for (let z = z0 - 4; z <= z1 + 4; z += 2) b.box(-14, 2, z, 14, 2, z, P.marble);
  for (const sx of [-1, 1]) {
    for (let z = z0 - 4; z <= z1 + 4; z++) {
      b.box(sx * 16, 2, z, sx * 16, 4, z, P.stoneLight);
      b.set(sx * 16, 5, z, P.marble);
      if ((z - z0) % 7 === 0) {
        b.box(sx * 16, 2, z, sx * 16, 6, z, P.marble);
        b.set(sx * 16, 7, z, P.stoneLight);
      }
    }
  }
}

// ======================================================================
//  建筑落位
// ======================================================================

export function placeBuildings(b, g) {
  const lights = [];
  const buildings = [];

  const place = (name, x, z, rot, fn) => {
    const pen = new Placed(b, rot, x, z);
    const gpen = new Placed(g, rot, x, z);
    const r = fn(pen, gpen);
    buildings.push({ name, x, z, rot, top: r.top });
    for (const l of r.lights) lights.push(l);
    return r;
  };

  // 中轴：山门 → 主殿 → 宝塔
  place('mountain-gate', 0, SITE.gateZ, 0, (p, gp) => mountainGate(p, p, gp));
  place('main-hall', 0, SITE.hallZ, 0, (p, gp) => mainHall(p, p, gp));
  place('pagoda', 0, SITE.pagodaZ, 0, (p, gp) => pagoda(p, gp));

  // 钟鼓楼（东钟西鼓）
  place('bell-tower', 66, 68, 0, (p, gp) => bellDrumTower(p, p, gp, { kind: 'bell' }));
  place('drum-tower', -66, 68, 0, (p, gp) => bellDrumTower(p, p, gp, { kind: 'drum' }));

  // 东西配殿（歇山，脊沿南北，正面朝中庭）
  place('side-hall-e', 62, 20, 1, (p, gp) => sideHall(p, p, gp, { scale: 1 }));
  place('side-hall-w', -62, 20, 3, (p, gp) => sideHall(p, p, gp, { scale: 1 }));
  place('rear-hall-e', 48, -90, 1, (p, gp) => sideHall(p, p, gp, { scale: 0.78 }));
  place('rear-hall-w', -48, -90, 3, (p, gp) => sideHall(p, p, gp, { scale: 0.78 }));

  // 连接廊（配殿北端 → 主殿台基）
  place('corridor-e', 50, -33, 0, (p) => corridor(p));
  place('corridor-w', -50, -33, 0, (p) => corridor(p));

  return { lights, buildings };
}

// ======================================================================
//  院落陈设
// ======================================================================

export function placeProps(b) {
  // 山门前：华表、石狮、旗杆
  for (const s of [-1, 1]) {
    K.huabiao(b, s * 20, 0, 102, 18);
    K.stoneLion(b, s * 31, 0, 102, -s);
    for (const dx of [-3, 3]) {
      b.pillar(s * 40 + dx, 100, 0, 15, P.woodBrown);
      b.set(s * 40 + dx, 16, 100, P.gold);
    }
  }
  // 主殿前：香炉 + 石狮
  K.censer(b, 0, 0, -4);
  for (const s of [-1, 1]) K.stoneLion(b, s * 18, 0, -7, -s);
  // 塔院前
  for (const s of [-1, 1]) K.stoneLion(b, s * 12, 0, -104, -s);

  // 东西碑（四对）
  for (const z of [4, -20]) {
    for (const s of [-1, 1]) K.stele(b, s * 27, 0, z, 13);
  }
  // 前院配殿前的大鼎
  for (const s of [-1, 1]) K.censer(b, s * 34, 0, 20);

  // 墙根古树
  const treeSpots = [
    [-98, 86], [98, 86], [-98, 50], [98, 50], [-98, 12], [98, 12],
    [-98, -28], [98, -28], [-98, -66], [98, -66], [-98, -120], [98, -120],
    [-98, -158], [98, -158], [-46, 62], [46, 62], [-42, -4], [42, -4],
    [-40, -68], [40, -68], [-22, 118], [22, 118], [-124, 30], [124, 30],
    [-124, -60], [124, -60], [-70, -140], [70, -140],
  ];
  for (const [x, z] of treeSpots) K.broadleaf(b, x, 0, z, 12 + Math.round(hash2(x, z) * 5));

  // 中轴御道两侧松（对称）
  for (let i = 0; i < 6; i++) {
    const z = 72 - i * 32;
    for (const s of [-1, 1]) K.pine(b, s * 25, 0, z, 13 + (i % 3) * 2);
  }
  // 塔院松
  for (const [x, z] of [[-32, -128], [32, -128], [-32, -152], [32, -152], [-32, -104], [32, -104]]) {
    K.pine(b, x, 0, z, 15);
  }
  // 墙外远景松林
  for (let i = 0; i < 76; i++) {
    const a = (i / 76) * Math.PI * 2 + 0.3;
    const r = 165 + hash2(i, 7) * 155;
    const x = Math.round(Math.cos(a) * r);
    const z = Math.round(Math.sin(a) * r * 0.95) - 30;
    if (Math.abs(x) < 140 && z > -190 && z < 140) continue;
    K.pine(b, x, Math.max(0, terrainHeight(x, z)), z, 12 + Math.round(hash2(i, 13) * 7));
  }

  // 宫城外草甸灌木，打破大片平铺
  for (let i = 0; i < 150; i++) {
    const a = hash2(i, 31) * Math.PI * 2;
    const r = 150 + hash2(i, 41) * 430;
    const x = Math.round(Math.cos(a) * r);
    const z = Math.round(Math.sin(a) * r) - 30;
    if (Math.abs(x) < 132 && z > -196 && z < 136) continue;
    const gy = terrainHeight(x, z);
    if (gy > 34) continue;
    const w = 1 + Math.round(hash2(i, 53) * 2);
    b.box(x, gy, z, x + w, gy, z + (w % 2), hash2(i, 61) > 0.5 ? P.leafDark : P.grassDark);
  }
}

// ======================================================================
//  总装
// ======================================================================

export function buildWorld(b, g) {
  const t0 = performance.now();

  // 院墙
  redWall(b, 'z', SITE.wallX, SITE.wallZNorth, SITE.wallZSouth);
  redWall(b, 'z', -SITE.wallX, SITE.wallZNorth, SITE.wallZSouth);
  redWall(b, 'x', SITE.wallZSouth, -SITE.wallX, -18);
  redWall(b, 'x', SITE.wallZSouth, 18, SITE.wallX);
  redWall(b, 'x', SITE.wallZNorth, -SITE.wallX, -15);
  redWall(b, 'x', SITE.wallZNorth, 15, SITE.wallX);
  riverAndBridge(b);

  const { lights, buildings } = placeBuildings(b, g);
  placeProps(b);

  const voxels = b.size;

  const far = buildTerraced({ x0: -840, z0: -860, x1: 840, z1: 880, cell: 10 });
  const near = buildFlatGrid({
    x0: -124, z0: -196, x1: 124, z1: 98, cell: 2, y: 0,
    colorAt: (x, z) => precinctColor(x + 1, z + 1),
  });
  const water = buildFlatGrid({
    x0: -220, z0: SITE.riverZ0, x1: 220, z1: SITE.riverZ1, cell: 2, y: -1.0,
    colorAt: (x, z) => {
      const w = Math.sin(x * 0.28 + z * 0.09) * 0.5 + 0.5;
      return w > 0.74 ? P.waterFoam : (w > 0.36 ? P.water : P.waterDeep);
    },
  });

  return {
    ground: far, near, water, lights, buildings, voxels,
    ms: performance.now() - t0,
  };
}
