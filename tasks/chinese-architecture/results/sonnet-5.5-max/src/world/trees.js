// Voxel trees & plants.  All functions paint through a Brush in grid space; (x, y, z) is the ground
// contact point, y = first free voxel above the ground.
import { M } from '../voxel/palette.js';
import { hash3, mulberry32 } from '../voxel/rng.js';

function crown(b, cx, cy, cz, rx, ry, rz, cols, seed, drop = 0.28) {
  b.ball(cx, cy, cz, rx, ry, rz, cols[0], (x, y, z, d) => {
    const h = hash3(x, y, z, seed);
    if (d > 0.6 && h < drop * (d - 0.4) * 3) return null; // airy edges
    const t = (y - (cy - ry)) / (2 * ry + 0.001);
    let i = t > 0.62 ? 2 : t > 0.3 ? 1 : 0;
    const j = hash3(x * 3, y * 5, z * 7, seed + 9);
    if (j > 0.82) i = Math.min(2, i + 1);
    else if (j < 0.14) i = Math.max(0, i - 1);
    return cols[i];
  });
}

/** Chinese pine with layered "cloud" crowns and a twisting trunk. */
export function pine(b, x, y, z, seed = 1, h = 14) {
  const rnd = mulberry32(seed * 7919 + 13);
  const cols = [M.PINE3, M.PINE1, M.PINE2];
  // trunk (2x2 base thinning to 1x1) with a lean
  let tx = x;
  let tz = z;
  b.box(x - 1, y, z - 1, x + 1, y, z + 1, M.TRUNK2);
  for (let i = 0; i < h; i++) {
    if (i === Math.floor(h * 0.4)) tx += rnd() < 0.5 ? -1 : 1;
    if (i === Math.floor(h * 0.7)) tz += rnd() < 0.5 ? -1 : 1;
    b.set(tx, y + i, tz, i % 5 === 3 ? M.TRUNK2 : M.TRUNK);
    if (i < h * 0.45) b.set(tx + 1, y + i, tz, M.TRUNK);
  }
  const layers = 3 + (h > 12 ? 1 : 0);
  for (let i = 0; i < layers; i++) {
    const yy = y + h - 2 - i * 3.4;
    const r = 3 + (layers - i) * 1.5 + rnd() * 1.2;
    const ox = (rnd() - 0.5) * 5 + (i % 2 ? 2 : -2);
    const oz = (rnd() - 0.5) * 5;
    const cx = Math.round(tx + ox);
    const cz = Math.round(tz + oz);
    crown(b, cx, Math.round(yy), cz, r, 1.9, r * 0.85, cols, seed + i * 31, 0.34);
    // branch to the crown
    const steps = Math.max(Math.abs(cx - tx), Math.abs(cz - tz));
    for (let s = 0; s < steps; s++) {
      const px = Math.round(tx + ((cx - tx) * s) / steps);
      const pz = Math.round(tz + ((cz - tz) * s) / steps);
      b.set(px, Math.round(yy) - 1, pz, M.TRUNK2);
    }
  }
  crown(b, tx, y + h + 1, tz, 2.4, 1.6, 2.4, cols, seed + 77, 0.2);
}

/** Columnar cypress / juniper. */
export function cypress(b, x, y, z, seed = 1, h = 16) {
  const cols = [M.CYP1, M.CYP2, M.PINE2];
  b.box(x, y, z, x, y + 2, z, M.TRUNK2);
  for (let i = 2; i <= h; i++) {
    const t = i / h;
    const r = Math.max(0.5, 3.1 * Math.pow(1 - t, 0.7) + (i < 4 ? 0 : 0));
    const R = Math.ceil(r);
    for (let dz = -R; dz <= R; dz++)
      for (let dx = -R; dx <= R; dx++) {
        const d = Math.hypot(dx, dz);
        if (d > r + 0.2) continue;
        const hh = hash3(x + dx, y + i, z + dz, seed);
        if (d > r - 0.9 && hh < 0.28) continue;
        const col = hh > 0.75 ? cols[2] : hh < 0.3 ? cols[0] : cols[1];
        b.set(x + dx, y + i, z + dz, col);
      }
  }
}

/** Round broadleaf tree (ginkgo / maple / blossom), palette chosen by kind. */
export function broadleaf(b, x, y, z, kind = 'ginkgo', seed = 1, h = 9, r = 6) {
  const pal = {
    ginkgo: [M.GINK3, M.GINK1, M.GINK2],
    maple: [M.MAPLE3, M.MAPLE1, M.MAPLE2],
    blossom: [M.BLOOM3, M.BLOOM1, M.BLOOM2],
    oak: [M.LEAF1, M.LEAF2, M.GRASS4],
    willow: [M.WILLOW1, M.WILLOW2, M.WILLOW2],
  }[kind];
  const rnd = mulberry32(seed * 313 + 5);
  b.box(x - 1, y, z - 1, x, y, z, M.TRUNK2);
  b.box(x, y, z, x, y + h, z, M.TRUNK);
  b.box(x - 1, y + 1, z - 1, x - 1, y + Math.floor(h * 0.6), z - 1, M.TRUNK);
  // main crown + a few lobes
  crown(b, x, y + h + Math.round(r * 0.35), z, r, r * 0.78, r, pal, seed, 0.3);
  for (let i = 0; i < 3; i++) {
    const a = rnd() * Math.PI * 2;
    const lx = Math.round(x + Math.cos(a) * r * 0.75);
    const lz = Math.round(z + Math.sin(a) * r * 0.75);
    crown(b, lx, y + h - 1 + Math.round(rnd() * 3), lz, r * 0.55, r * 0.5, r * 0.55, pal, seed + i * 5, 0.3);
  }
}

/** Weeping willow: crown + hanging strands. */
export function willow(b, x, y, z, seed = 1, h = 8) {
  const rnd = mulberry32(seed * 101 + 3);
  b.box(x, y, z, x, y + h, z, M.TRUNK);
  b.box(x + 1, y, z, x + 1, y + 3, z, M.TRUNK2);
  crown(b, x, y + h + 1, z, 5, 3, 5, [M.WILLOW1, M.WILLOW1, M.WILLOW2], seed, 0.25);
  for (let a = 0; a < 26; a++) {
    const ang = (a / 26) * Math.PI * 2;
    const rr = 4 + rnd() * 2.4;
    const sx = Math.round(x + Math.cos(ang) * rr);
    const sz = Math.round(z + Math.sin(ang) * rr);
    const len = 4 + Math.floor(rnd() * 6);
    for (let i = 0; i < len; i++) {
      if (rnd() < 0.12) continue;
      b.set(sx, y + h - 1 - i, sz, i > len - 3 ? M.WILLOW2 : M.WILLOW1);
    }
  }
}

/** Bamboo clump. */
export function bamboo(b, x, y, z, seed = 1, n = 7, spread = 2.6) {
  const rnd = mulberry32(seed * 57 + 11);
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2;
    const rr = rnd() * spread;
    const px = Math.round(x + Math.cos(a) * rr);
    const pz = Math.round(z + Math.sin(a) * rr);
    const h = 11 + Math.floor(rnd() * 8);
    let cx = px;
    let cz = pz;
    for (let j = 0; j < h; j++) {
      if (j > 6 && rnd() < 0.09) cx += rnd() < 0.5 ? -1 : 1;
      b.set(cx, y + j, cz, j % 4 === 3 ? M.BAMBOO_S : M.BAMBOO2);
      // leaves in the upper third
      if (j > h * 0.55 && (j & 1) === 0) {
        const d = rnd() < 0.5 ? 1 : -1;
        if (rnd() < 0.7) b.set(cx + d, y + j, cz, rnd() < 0.5 ? M.BAMBOO1 : M.BAMBOO2);
        if (rnd() < 0.7) b.set(cx, y + j, cz + d, rnd() < 0.5 ? M.BAMBOO1 : M.BAMBOO2);
        if (rnd() < 0.3) b.set(cx + d * 2, y + j - 1, cz, M.BAMBOO1);
      }
    }
    b.set(cx, y + h, cz, M.BAMBOO2);
    b.set(cx + 1, y + h - 1, cz, M.BAMBOO1);
    b.set(cx - 1, y + h - 1, cz, M.BAMBOO1);
    b.set(cx, y + h - 1, cz + 1, M.BAMBOO1);
    b.set(cx, y + h - 1, cz - 1, M.BAMBOO1);
  }
}

/** Low shrub / hedge blob. */
export function bush(b, x, y, z, rx = 2.5, ry = 1.7, mat = [M.LEAF1, M.LEAF2, M.GRASS4], seed = 1) {
  crown(b, x, y + Math.floor(ry) - 1, z, rx, ry, rx, mat, seed, 0.2);
}

/** Flower bed patch of random flowers on grass. */
export function flowers(b, x0, z0, x1, z1, y, seed = 1, density = 0.35) {
  const cols = [M.F_PINK, M.F_WHITE, M.F_YELLOW, M.F_PURPLE, M.F_RED];
  for (let z = z0; z <= z1; z++)
    for (let x = x0; x <= x1; x++) {
      const h = hash3(x, 0, z, seed);
      if (h < density) b.set(x, y, z, cols[Math.floor(hash3(x, 1, z, seed + 1) * cols.length)]);
      else if (h < density + 0.25) b.set(x, y, z, M.LEAF1);
    }
}
