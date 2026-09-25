import { GLOW } from './voxel.js';

const G = (c) => c | GLOW;

export const C = {
  red: 0xb32a20, pillar: 0x8c1c16, door: 0x5c1a12, wood: 0x6b4226, woodD: 0x3e2a1a,
  lattice: 0x3a2314, paper: 0xe0c58a,
  gold: 0xe6b73c, yellow: 0xe0a726, yellowTrim: 0xf7d770,
  gray: 0x4d5762, grayD: 0x8a949c, bluegray: 0x3f6178, green: 0x2f8a78, blue: 0x2b6fa8, greenD: 0x1f5a4a,
  stone: 0xc2bcae, stoneD: 0x8f8a7e, marble: 0xece8de, white: 0xf1ede2, redD: 0x7a1d14,
  lant: 0xff4a30, lantD: 0xffb347,
};

const shade = (hex, f) => {
  const r = Math.min(255, Math.round(((hex >> 16) & 255) * f));
  const g = Math.min(255, Math.round(((hex >> 8) & 255) * f));
  const b = Math.min(255, Math.round((hex & 255) * f));
  return (r << 16) | (g << 8) | b;
};
const mod = (a, n) => ((a % n) + n) % n;

/** Local building frame: front faces +z; rot turns the front toward +x(1), -z(2), -x(3). */
function local(g, cx, cz, rot = 0) {
  const T = (x, z) =>
    rot === 0 ? [cx + x, cz + z] : rot === 1 ? [cx + z, cz - x] : rot === 2 ? [cx - x, cz - z] : [cx - z, cz + x];
  const L = {
    set(x, y, z, c) { const p = T(x, z); g.set(p[0], y, p[1], c); },
    box(x0, y0, z0, x1, y1, z1, c) {
      for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
        for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
          for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++) L.set(x, y, z, c);
    },
  };
  return L;
}

// ---------------------------------------------------------------- roof
// Concave profile: shallow near the eaves (2 voxels in per layer), steeper above.
const cum = (j) => (j <= 2 ? 2 * j : j + 2);

function roof(L, hx0, hz0, y, o) {
  const { style = 'hip', max = 99, tile, trim, gableCol = C.white, spire = 3 } = o;
  const alt = shade(tile, 0.85);
  let top = y - 1, lastHx = 0, lastHz = 0, lastRidge = false;
  for (let j = 0; j < max; j++) {
    const hz = hz0 - cum(j);
    const hx = style === 'gable' && j > 2 ? hx0 - cum(2) : hx0 - cum(j);
    if (hz < 0 || hx < 0) break;
    const yy = y + j;
    const nhz = hz0 - cum(j + 1);
    const nhx = style === 'gable' ? hx : hx0 - cum(j + 1);
    const ridge = j < max - 1 && (nhz < 0 || nhx < 0);
    for (let x = -hx; x <= hx; x++) {
      for (let z = -hz; z <= hz; z++) {
        const ex = Math.abs(x) === hx, ez = Math.abs(z) === hz;
        let c;
        if (ridge || (ex && ez)) c = trim;
        else if (j === 0 && (ex || ez)) c = trim;
        else if (style === 'gable' && j > 2 && ex) c = gableCol;
        else {
          const alongX = hz - Math.abs(z) < hx - Math.abs(x);
          c = (alongX ? Math.abs(x) : Math.abs(z)) % 2 === 0 ? tile : alt;
        }
        L.set(x, yy, z, c);
      }
    }
    if (j === 0) {
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        L.set(sx * hx, y + 1, sz * hz, trim);
        L.set(sx * hx, y + 1, sz * (hz - 1), trim);
        L.set(sx * (hx - 1), y + 1, sz * hz, trim);
        L.set(sx * (hx + 1), y + 1, sz * hz, trim);
        L.set(sx * hx, y + 1, sz * (hz + 1), trim);
        L.set(sx * (hx + 1), y + 2, sz * hz, trim);
        L.set(sx * hx, y + 2, sz * (hz + 1), trim);
      }
    }
    top = yy; lastHx = hx; lastHz = hz; lastRidge = ridge;
  }
  if (lastHx === 0 && lastHz === 0 && spire) {
    for (let i = 1; i <= spire; i++) L.set(0, top + i, 0, C.gold);
    L.set(1, top + 2, 0, C.gold); L.set(-1, top + 2, 0, C.gold);
    L.set(0, top + 2, 1, C.gold); L.set(0, top + 2, -1, C.gold);
    top += spire;
  } else if (lastRidge && style !== 'pyr') {
    for (const s of [-1, 1]) {
      L.set(s * lastHx, top + 1, 0, C.gold);
      L.set(s * lastHx, top + 2, 0, C.gold);
      L.set(s * (lastHx - 1), top + 2, 0, C.gold);
    }
    top += 2;
  }
  return top + 1;
}

// ---------------------------------------------------------------- platform
function base(L, hw, hd, plat, sw, gate) {
  const ex = hw + 3, ez = hd + 3;
  L.box(-ex, 0, -ez, ex, plat - 2, ez, C.stoneD);
  for (let x = -ex; x <= ex; x++) for (let z = -ez; z <= ez; z++) {
    const edge = Math.abs(x) === ex || Math.abs(z) === ez;
    L.set(x, plat - 1, z, edge ? C.marble : (x + z) % 2 === 0 ? C.stone : shade(C.stone, 0.93));
  }
  // stairs (front, and back too for a gate)
  const sides = gate ? [1, -1] : [1];
  for (const s of sides) {
    for (let k = 0; k <= plat - 2; k++) {
      for (let dz = 0; dz < 2; dz++) {
        const z = s * (ez + 1 + 2 * k + dz);
        L.box(-sw, 0, z, sw, plat - 2 - k, z, C.marble);
        L.box(0, plat - 2 - k, z, 0, plat - 2 - k, z, C.stoneD); // 御路 carpet
      }
    }
  }
  // balustrade with gaps at stairs
  for (let x = -ex; x <= ex; x++) for (let z = -ez; z <= ez; z++) {
    if (!(Math.abs(x) === ex || Math.abs(z) === ez)) continue;
    if (Math.abs(x) <= sw && Math.abs(z) === ez && (z > 0 || gate)) continue;
    const post = (x + z) % 3 === 0;
    L.set(x, plat, z, C.marble);
    if (post) L.set(x, plat + 1, z, C.white);
  }
}

// ---------------------------------------------------------------- one storey
function tier(L, o) {
  const { hw, hd, by, wallH, style = 'hip', max = 99, tile, trim, gableCol,
    door = false, gate = false, open = false, lanterns = false, dw = 2, spire = 3 } = o;
  const xs = [], zs = [];
  if (open) { xs.push(-hw, hw); zs.push(-hd, hd); }
  else {
    const nx = Math.max(2, Math.round(hw / 3)), nz = Math.max(2, Math.round(hd / 3));
    for (let i = 0; i <= nx; i++) xs.push(-hw + Math.round((i * 2 * hw) / nx));
    for (let i = 0; i <= nz; i++) zs.push(-hd + Math.round((i * 2 * hd) / nz));
  }
  const top = by + wallH - 1;
  const pil = (x, z) => L.box(x, by, z, x, top, z, C.pillar);
  for (const x of xs) if (!(gate && Math.abs(x) <= dw)) { pil(x, hd); pil(x, -hd); }
  for (const z of zs) { pil(hw, z); pil(-hw, z); }

  const tall = wallH >= 6;
  const wy0 = tall ? by + 2 : by + 1, wy1 = tall ? top - 2 : top - 1;
  const window = (x0, z0, x1, z1) => {
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++)
      for (let y = wy0; y <= wy1; y++) L.set(x, y, z, (x + y + z) % 2 === 0 ? C.lattice : C.paper);
  };

  if (!open) {
    const seg = (x0, z0, x1, z1) => L.box(x0, by, z0, x1, top, z1, C.red);
    for (const zz of [-hd + 1, hd - 1]) {
      if (gate) { seg(-hw + 1, zz, -dw - 1, zz); seg(dw + 1, zz, hw - 1, zz); }
      else seg(-hw + 1, zz, hw - 1, zz);
    }
    seg(-hw + 1, -hd + 1, -hw + 1, hd - 1);
    seg(hw - 1, -hd + 1, hw - 1, hd - 1);
    if (wallH >= 4) {
      for (let i = 0; i < xs.length - 1; i++) {
        const mid = Math.round((xs[i] + xs[i + 1]) / 2);
        if (Math.abs(mid) <= dw + 1 && (door || gate)) { window(mid - 1, -hd + 1, mid, -hd + 1); continue; }
        if (Math.abs(xs[i + 1] - xs[i]) < 3) continue;
        window(mid - 1, hd - 1, mid, hd - 1);
        window(mid - 1, -hd + 1, mid, -hd + 1);
      }
      for (let i = 0; i < zs.length - 1; i++) {
        if (Math.abs(zs[i + 1] - zs[i]) < 3) continue;
        const mid = Math.round((zs[i] + zs[i + 1]) / 2);
        window(hw - 1, mid - 1, hw - 1, mid);
        window(-hw + 1, mid - 1, -hw + 1, mid);
      }
    }
    if (door) {
      L.box(-dw, by, hd - 1, dw, top - 1, hd - 1, C.door);
      for (let x = -dw; x <= dw; x++) for (let y = by + 1; y <= top - 2; y++)
        if ((x + y) % 2 === 0 && x !== 0) L.set(x, y, hd - 1, C.gold);
      L.box(-dw, top, hd - 1, dw, top, hd - 1, C.gold);
    }
    if (gate) L.box(-dw, top, hd - 1, dw, top, hd - 1, C.wood), L.box(-dw, top, -hd + 1, dw, top, -hd + 1, C.wood);
  } else {
    for (let x = -hw; x <= hw; x++) for (let z = -hd; z <= hd; z++) {
      if (Math.abs(x) !== hw && Math.abs(z) !== hd) continue;
      if (z === hd && Math.abs(x) <= 1) continue;
      L.set(x, by, z, C.red);
    }
  }

  // dougong (bracket sets) — two stepped corbel courses under the eaves
  const P = [C.blue, C.gold, C.green, C.gold];
  const y1 = by + wallH;
  const rect = (ex, ez, y, off, inner) => {
    for (let x = -ex; x <= ex; x++) for (let z = -ez; z <= ez; z++) {
      const per = Math.abs(x) === ex || Math.abs(z) === ez;
      L.set(x, y, z, per ? P[mod(x + z + off, 4)] : inner);
    }
  };
  rect(hw + 1, hd + 1, y1, 0, C.woodD);
  rect(hw + 2, hd + 2, y1 + 1, 2, C.redD);

  if (lanterns) {
    for (const x of xs) {
      if (gate && Math.abs(x) <= dw) continue;
      L.set(x, y1 - 1, hd + 1, G(C.lant));
      L.set(x, y1 - 2, hd + 1, G(C.lantD));
    }
  }
  return roof(L, hw + 3, hd + 3, y1 + 2, { style, max, tile, trim, gableCol, spire });
}

// ---------------------------------------------------------------- public buildings
export function hall(g, o) {
  const { cx, cz, rot = 0, hw, hd, plat = 2, wallH = 6, style = 'hip', tile, trim, double = false,
    gate = false, sw = 2, gableCol = C.white } = o;
  const L = local(g, cx, cz, rot);
  base(L, hw, hd, plat, sw, gate);
  const common = { tile, trim, gableCol, style, gate, door: !gate, lanterns: true, dw: sw };
  if (double) {
    const by = tier(L, { ...common, hw, hd, by: plat, wallH, style: 'hip', max: 3 });
    tier(L, { ...common, hw: hw - 4, hd: hd - 4, by, wallH: 5, lanterns: false, door: false, gate: false });
  } else tier(L, { ...common, hw, hd, by: plat, wallH });
}

export function pagoda(g, cx, cz, rot) {
  const L = local(g, cx, cz, rot);
  base(L, 9, 9, 3, 2, false);
  let by = 3;
  const hws = [9, 7, 5, 3];
  hws.forEach((hw, i) => {
    const last = i === hws.length - 1;
    by = tier(L, {
      hw, hd: hw, by, wallH: i < 2 ? 5 : 4, style: 'hip', max: last ? 99 : 3,
      tile: i % 2 ? C.gray : C.bluegray, trim: C.gold, door: i === 0, lanterns: i === 0, spire: 6,
    });
  });
}

export function pavilion(g, cx, cz, tile = C.green) {
  const L = local(g, cx, cz, 0);
  base(L, 4, 4, 2, 2, false);
  tier(L, { hw: 4, hd: 4, by: 2, wallH: 6, style: 'hip', tile, trim: C.gold, open: true, spire: 4 });
  L.box(-1, 2, -1, 1, 2, 1, C.stoneD); // stone table
  L.box(-1, 3, -1, 1, 3, 1, C.marble);
}

export function tower(g, cx, cz, kind) {
  const L = local(g, cx, cz, 0);
  base(L, 7, 7, 3, 2, false);
  const by = tier(L, { hw: 7, hd: 7, by: 3, wallH: 6, style: 'hip', max: 3, tile: C.gray, trim: C.gold, door: true, lanterns: true });
  tier(L, { hw: 3, hd: 3, by, wallH: 5, style: 'hip', tile: C.gray, trim: C.gold, open: true, spire: 4 });
  L.box(-3, by + 4, 0, 3, by + 4, 0, C.woodD); // beam
  if (kind === 'bell') {
    L.box(-1, by + 1, -1, 1, by + 3, 1, C.gold);
    L.box(0, by + 1, 0, 0, by + 1, 0, C.woodD);
  } else {
    L.box(-1, by + 1, -1, 1, by + 3, 1, C.red);
    L.box(-1, by + 2, -1, 1, by + 2, 1, C.gold);
  }
}

export function lion(g, cx, cz, rot = 0) {
  const L = local(g, cx, cz, rot);
  L.box(-1, 0, -1, 1, 1, 1, C.stoneD);
  L.box(-1, 2, -1, 1, 3, 0, C.marble);   // body
  L.box(-1, 2, 1, 1, 2, 1, C.marble);    // forelegs
  L.box(-1, 4, 0, 1, 5, 1, C.marble);    // head
  L.box(-2, 4, 0, -2, 5, 1, C.gold); L.box(2, 4, 0, 2, 5, 1, C.gold); // mane
  L.set(0, 4, 2, C.stoneD);              // muzzle
}

export function paifang(g, cx, cz) {
  const L = local(g, cx, cz, 0);
  for (const x of [-9, -3, 3, 9]) {
    L.box(x, 0, 0, x + 1, 1, 1, C.stoneD);
    L.box(x, 2, 0, x + 1, x === -3 || x === 3 ? 12 : 9, 1, C.pillar);
  }
  L.box(-9, 9, 0, 10, 10, 1, C.red);
  L.box(-9, 10, 0, 10, 10, 1, C.gold);
  L.box(-3, 12, 0, 4, 13, 1, C.red);
  L.box(-3, 13, 0, 4, 13, 1, C.gold);
  const R = (ox, y, hx, hz) => roof(local(g, cx + ox, cz, 0), hx, hz, y, { style: 'hip', tile: C.green, trim: C.gold, spire: 2 });
  R(0, 14, 7, 3);
  R(-7, 11, 4, 3);
  R(8, 11, 4, 3);
  L.set(0, 11, 0, C.gold);
}

export function stoneLamp(g, x, z) {
  g.box(x, 0, z, x, 2, z, C.stoneD);
  g.box(x - 1, 3, z - 1, x + 1, 3, z + 1, C.stone);
  g.set(x, 4, z, G(C.lantD));
  g.box(x - 1, 5, z - 1, x + 1, 5, z + 1, C.stoneD);
  g.set(x, 6, z, C.stone);
}

export function wallSeg(g, x0, z0, x1, z1) {
  const alongX = z0 === z1;
  const t = 1; // 2 voxels thick
  const bx = alongX ? [x0, x1, z0, z0 + t] : [x0, x0 + t, z0, z1];
  g.box(bx[0], 0, bx[2], bx[1], 4, bx[3], C.red);
  g.box(bx[0], 0, bx[2], bx[1], 0, bx[3], C.stoneD);
  g.box(bx[0] - (alongX ? 0 : 1), 5, bx[2] - (alongX ? 1 : 0), bx[1] + (alongX ? 0 : 1), 5, bx[3] + (alongX ? 1 : 0), C.gray);
  g.box(bx[0], 6, bx[2], bx[1], 6, bx[3], C.grayD);
  // pilasters
  const len = alongX ? Math.abs(x1 - x0) : Math.abs(z1 - z0);
  for (let i = 0; i <= len; i += 8) {
    const a = (alongX ? Math.min(x0, x1) : Math.min(z0, z1)) + i;
    if (alongX) g.box(a, 1, bx[2] - 0, a, 4, bx[3], C.pillar);
    else g.box(bx[0], 1, a, bx[1], 4, a, C.pillar);
  }
}

export function incenseBurner(g, x, z) {
  g.box(x - 2, 0, z - 2, x + 2, 0, z + 2, C.stoneD);
  g.box(x - 1, 1, z - 1, x + 1, 2, z + 1, C.gold);
  g.box(x - 2, 3, z - 2, x + 2, 3, z + 2, C.gold);
  g.box(x - 1, 4, z - 1, x + 1, 4, z + 1, C.woodD);
  g.set(x, 5, z, G(0xff7a2a));
  for (const s of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) g.box(x + s[0], 1, z + s[1], x + s[0], 2, z + s[1], C.gold);
}

// ---------------------------------------------------------------- trees
export function pine(g, x, y, z, h = 9) {
  g.box(x, y, z, x, y + 3, z, C.wood);
  const dark = 0x2a5a2c, light = 0x3d7a3a;
  let r = 3;
  for (let yy = y + 3, i = 0; yy < y + h; yy += 2, i++) {
    const rr = Math.max(0, r - Math.floor(i * 0.9));
    for (let dx = -rr; dx <= rr; dx++) for (let dz = -rr; dz <= rr; dz++) {
      if (Math.abs(dx) + Math.abs(dz) > rr + 1) continue;
      g.set(x + dx, yy, z + dz, (dx + dz + yy) % 3 ? dark : light);
      if (rr > 0) g.set(x + dx, yy + 1, z + dz, dark);
    }
  }
  g.set(x, y + h + 1, z, light);
}

export function blossom(g, x, y, z, col, trunkH = 4, r = 3) {
  g.box(x, y, z, x, y + trunkH, z, C.wood);
  g.box(x + 1, y + trunkH - 1, z, x + 1, y + trunkH, z, C.wood);
  const cy = y + trunkH + 1;
  for (let dx = -r; dx <= r; dx++) for (let dy = -2; dy <= 2; dy++) for (let dz = -r; dz <= r; dz++) {
    if (dx * dx + dz * dz + dy * dy * 1.6 > r * r + 1) continue;
    const j = Math.sin(dx * 7.3 + dy * 3.1 + dz * 5.7 + x);
    if (j > 0.75) continue;
    g.set(x + dx, cy + dy, z + dz, j > 0.2 ? col : shade(col, 0.88));
  }
}
