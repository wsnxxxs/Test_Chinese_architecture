import { C } from '../voxel/palette.js';
import { GY, SX, SZ } from '../config.js';

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeNoise(seed = 1337) {
  const hash = (x, z) => {
    let h = Math.imul(x, 374761393) ^ Math.imul(z, 668265263) ^ seed;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  const sm = (t) => t * t * (3 - 2 * t);
  const vn = (x, z) => {
    const xi = Math.floor(x), zi = Math.floor(z);
    const fx = sm(x - xi), fz = sm(z - zi);
    const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1);
    return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
  };
  const fbm = (x, z) => vn(x, z) * 0.57 + vn(x * 2.1 + 5.3, z * 2.1 + 9.1) * 0.29 + vn(x * 4.3 + 11.7, z * 4.3 + 3.9) * 0.14;
  return { vn, fbm };
}

const GRASS = new Set([C.grass, C.grass2, C.grass3]);

/** 地形：院外北侧为缓丘（背山），东西两侧有起伏，院内平整 */
export function terrain(w, noise) {
  const hm = new Int16Array(SX * SZ);
  for (let z = 0; z < SZ; z++) {
    for (let x = 0; x < SX; x++) {
      let h = GY;
      if (z < 20) {
        const k = Math.sin((Math.PI * z) / 20);
        h += Math.round(k * (2 + 7 * noise.fbm(x * 0.06, z * 0.12)));
      }
      const out = x < 24 ? x : x >= 168 ? SX - 1 - x : -1;
      if (out >= 0 && z >= 16) {
        const k = Math.sin(Math.PI * Math.min(1, out / 23));
        h += Math.round(k * 3.2 * noise.fbm(x * 0.08 + 7, z * 0.08));
      }
      hm[z * SX + x] = h;
      const n = noise.fbm(x * 0.15 + 3, z * 0.15 + 1);
      const g = n < 0.4 ? C.grass3 : n < 0.62 ? C.grass : C.grass2;
      for (let y = 0; y < h; y++) w.set(x, y, z, y === h - 1 ? g : y >= h - 3 ? C.dirt : C.soil);
    }
  }
  return hm;
}

function leafBlob(w, rng, cx, cy, cz, rx, ry, rz, colors) {
  const ex = Math.ceil(rx), ey = Math.ceil(ry), ez = Math.ceil(rz);
  for (let dy = -ey; dy <= ey; dy++) {
    for (let dz = -ez; dz <= ez; dz++) {
      for (let dx = -ex; dx <= ex; dx++) {
        const q = (dx / rx) ** 2 + (dy / ry) ** 2 + (dz / rz) ** 2;
        if (q > 1) continue;
        if (q > 0.55 && rng() < 0.35) continue;
        const x = cx + dx, y = cy + dy, z = cz + dz;
        if (w.get(x, y, z)) continue;
        w.set(x, y, z, colors[(rng() * colors.length) | 0]);
      }
    }
  }
}

function trunk(w, x, y, z, h, c = C.trunk) {
  for (let k = 0; k < h; k++) w.set(x, y + k, z, c);
}

const TREES = {
  pine(w, rng, x, gy, z) {
    const th = 7 + ((rng() * 3) | 0);
    let tx = x, tz = z;
    for (let k = 0; k < th; k++) {
      if (k === 4 && rng() < 0.6) tx += rng() < 0.5 ? 1 : -1;
      w.set(tx, gy + k, tz, C.trunk);
    }
    const pads = 3 + ((rng() * 2) | 0);
    for (let i = 0; i < pads; i++) {
      const py = gy + th - 3 + i * 2;
      const ox = Math.round((rng() - 0.5) * 5), oz = Math.round((rng() - 0.5) * 5);
      const r = 3.8 - i * 0.55 + rng() * 0.8;
      for (let k = 0; k <= Math.max(Math.abs(ox), Math.abs(oz)); k++) {
        w.set(tx + Math.round((ox * k) / Math.max(1, Math.abs(ox), Math.abs(oz))), py - 1, tz + Math.round((oz * k) / Math.max(1, Math.abs(ox), Math.abs(oz))), C.trunk2);
      }
      leafBlob(w, rng, tx + ox, py, tz + oz, r, 1.3, r * 0.9, [C.pine, C.pine2, C.pine3]);
    }
    for (let y = gy + th - 3; y < gy + th + pads * 2 - 3; y++) if (!w.get(tx, y, tz)) w.set(tx, y, tz, C.trunk);
  },
  cypress(w, rng, x, gy, z) {
    trunk(w, x, gy, z, 3, C.trunk2);
    const hc = 10 + ((rng() * 4) | 0);
    for (let k = 0; k < hc; k++) {
      const r = 2.7 * (1 - (k / hc) ** 1.4) + 0.5;
      const e = Math.ceil(r);
      for (let dz = -e; dz <= e; dz++) {
        for (let dx = -e; dx <= e; dx++) {
          const d = dx * dx + dz * dz;
          if (d > r * r || (d > r * r * 0.5 && rng() < 0.3)) continue;
          if (!w.get(x + dx, gy + 3 + k, z + dz)) w.set(x + dx, gy + 3 + k, z + dz, rng() < 0.5 ? C.cypress : rng() < 0.6 ? C.cypress2 : C.pine3);
        }
      }
    }
  },
  ginkgo(w, rng, x, gy, z) {
    const th = 6 + ((rng() * 2) | 0);
    trunk(w, x, gy, z, th + 3);
    leafBlob(w, rng, x, gy + th + 4, z, 5, 5.5, 5, [C.ginkgo, C.ginkgo2, C.ginkgo3]);
    // 落叶
    for (let i = 0; i < 26; i++) {
      const a = rng() * Math.PI * 2, d = 1 + rng() * 5;
      const fx = x + Math.round(Math.cos(a) * d), fz = z + Math.round(Math.sin(a) * d);
      if (!w.get(fx, gy, fz) && w.get(fx, gy - 1, fz)) w.set(fx, gy - 1, fz, rng() < 0.5 ? C.ginkgo : C.ginkgo2);
    }
  },
  maple(w, rng, x, gy, z) {
    const th = 4 + ((rng() * 2) | 0);
    trunk(w, x, gy, z, th + 2);
    leafBlob(w, rng, x, gy + th + 3, z, 4.2, 3.4, 4.2, [C.maple, C.maple2, C.maple3]);
  },
  blossom(w, rng, x, gy, z) {
    const th = 3 + ((rng() * 2) | 0);
    trunk(w, x, gy, z, th + 2, C.trunk2);
    leafBlob(w, rng, x, gy + th + 3, z, 3.8, 2.8, 3.8, [C.blossom, C.blossom2, C.blossom3]);
  },
  willow(w, rng, x, gy, z) {
    trunk(w, x, gy, z, 7, C.trunk2);
    leafBlob(w, rng, x, gy + 8, z, 4.6, 2.6, 4.6, [C.willow, C.willow2]);
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2 + rng() * 0.2;
      const r = 3 + rng() * 1.8;
      const sx = x + Math.round(Math.cos(a) * r), sz = z + Math.round(Math.sin(a) * r);
      const len = 3 + ((rng() * 4) | 0);
      for (let k = 0; k < len; k++) if (!w.get(sx, gy + 7 - k, sz)) w.set(sx, gy + 7 - k, sz, k & 1 ? C.willow : C.willow2);
    }
  },
  bush(w, rng, x, gy, z) {
    leafBlob(w, rng, x, gy + 1, z, 2, 1.4, 2, [C.pine2, C.grass3, C.pine]);
  },
};

/** 在 (x,z) 种树；force 时无视地面类型并铺设树池 */
export function plant(w, rng, kind, x, z, force = false) {
  const gt = w.top(x, z);
  if (gt < 0) return false;
  const ground = w.get(x, gt, z);
  if (!force && !GRASS.has(ground)) return false;
  if (force) {
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) w.set(x + dx, gt, z + dz, dx || dz ? C.stoneTop : C.dirt);
  }
  TREES[kind](w, rng, x, gt + 1, z);
  return true;
}

export function scatterFlowers(w, rng, n, x0, z0, x1, z1) {
  const cols = [C.flowerY, C.flowerW, C.flowerP, C.grass3, C.grass3, C.lotusFlower];
  for (let i = 0; i < n; i++) {
    const x = x0 + ((rng() * (x1 - x0)) | 0), z = z0 + ((rng() * (z1 - z0)) | 0);
    const gt = w.top(x, z);
    if (gt < 0 || !GRASS.has(w.get(x, gt, z))) continue;
    w.set(x, gt + 1, z, cols[(rng() * cols.length) | 0]);
  }
}

export { GRASS };
