/**
 * Reusable architectural parts (DOM-free, Three.js-free).
 *
 * Each function writes voxels into a VoxelBuilder. Every shape is symmetric about its own
 * local x centre, which is what allows the site to be assembled from centred and mirrored
 * placements while staying exactly symmetric about the world x = 0 axis.
 */

/** Perimeter walker: calls fn(x, z, ox, oz) for every ring cell, with the outward normal. */
function eachRing(x0, z0, x1, z1, fn) {
  for (let x = x0; x <= x1; x++) {
    fn(x, z0, 0, -1);
    if (z1 !== z0) fn(x, z1, 0, 1);
  }
  for (let z = z0 + 1; z <= z1 - 1; z++) {
    fn(x0, z, -1, 0);
    if (x1 !== x0) fn(x1, z, 1, 0);
  }
}

/** 斗拱 — bracket sets. Two stacked rows of blocks with outward-protruding 拱 arms. */
export function dougongBand(b, {
  x0, z0, x1, z1, y, key = 'woodLight', armKey = 'wood',
  capKey = 'gold', step = 3, rows = 2,
} = {}) {
  for (let r = 0; r < rows; r++) {
    const yy = y + r;
    const offset = r * Math.floor(step / 2);
    eachRing(x0, z0, x1, z1, (x, z, ox, oz) => {
      b.set(x, yy, z, key);
      const phase = (Math.abs(x) + Math.abs(z) + offset) % step;
      if (phase === 0) {
        if (ox) b.set(x + ox, yy, z, armKey);
        if (oz) b.set(x, yy, z + oz, armKey);
        if (ox && oz) b.set(x + ox, yy, z + oz, armKey);
      }
      if (r === rows - 1 && phase === Math.floor(step / 2)) {
        b.set(x, yy + 1, z, capKey);
      }
    });
  }
}

/**
 * 立柱 — columns around a perimeter.
 * Column positions are generated as symmetric offsets from the centre, never as
 * `x0 + k*spacing`, so the ring stays exactly mirror-symmetric for any footprint.
 */
export function columnRing(b, {
  x0, z0, x1, z1, y0, y1, key = 'wallRed', spacing = 4, baseKey = 'stoneDark',
} = {}) {
  const cx = Math.round((x0 + x1) / 2);
  const cz = Math.round((z0 + z1) / 2);
  const xs = new Set([x0, x1]);
  for (let k = spacing; cx - k >= x0; k += spacing) { xs.add(cx - k); xs.add(cx + k); }
  const zs = new Set([z0, z1]);
  for (let k = spacing; cz - k >= z0; k += spacing) { zs.add(cz - k); zs.add(cz + k); }
  const put = (x, z) => {
    b.column(x, z, y0, y1, key);
    if (baseKey) b.set(x, y0 - 1, z, baseKey);
  };
  for (const x of xs) { put(x, z0); put(x, z1); }
  for (const z of zs) { put(x0, z); put(x1, z); }
  put(x0, z0); put(x1, z0); put(x0, z1); put(x1, z1);
}

/**
 * 台阶 — stepped access to a platform.
 * axis 'z': `a0..a1` is the x span and `edge`/`dir` live on z.
 * axis 'x': `a0..a1` is the z span and `edge`/`dir` live on x.
 * Surfaces descend one voxel per step from `yTop` - 1 down to 1.
 */
export function stairs(b, {
  axis = 'z', a0, a1, edge, dir = 1, yTop, key = 'stone', treadKey = 'stoneLight', imperial = true,
} = {}) {
  const steps = Math.max(1, yTop - 1);
  for (let i = 0; i < steps; i++) {
    const surf = yTop - 1 - i;
    const p = edge + dir * i;
    for (let a = a0; a <= a1; a++) {
      const x = axis === 'z' ? a : p;
      const z = axis === 'z' ? p : a;
      for (let y = 1; y <= surf; y++) b.set(x, y, z, key);
      b.set(x, surf, z, treadKey);
    }
  }
  // 御路 — the central carved ramp (symmetric about the stair centre)
  if (imperial) {
    const c = Math.round((a0 + a1) / 2);
    for (let i = 0; i < steps; i++) {
      const p = edge + dir * i;
      for (const off of [-1, 0, 1]) {
        const x = axis === 'z' ? c + off : p;
        const z = axis === 'z' ? p : c + off;
        b.set(x, yTop - 1 - i, z, 'stoneLight');
      }
    }
  }
}

/**
 * 门 — a doorway on a wall plane.
 * axis 'z' => the wall normal is z and `span` is an x range; axis 'x' => normal is x.
 */
export function doorway(b, {
  axis = 'z', wall = 0, from = 0, to = 0, y0 = 1, y1 = 4,
  leafKey = 'woodDark', frameKey = 'wallRedDark', studKey = 'gold', studs = true,
} = {}) {
  for (let a = from; a <= to; a++) {
    for (let y = y0; y <= y1; y++) {
      const x = axis === 'z' ? a : wall;
      const z = axis === 'z' ? wall : a;
      const edge = a === from || a === to || y === y0 || y === y1;
      b.set(x, y, z, edge ? frameKey : leafKey);
      if (studs && !edge && (a - from) % 2 === 0 && (y - y0) % 2 === 1) {
        b.set(x, y, z, studKey);
      }
    }
  }
  return { x: axis === 'z' ? Math.round((from + to) / 2) : wall, z: axis === 'z' ? wall : Math.round((from + to) / 2) };
}

/** 匾额 — a hanging name board above a doorway. */
export function plaque(b, { axis = 'z', wall = 0, cx = 0, y = 0, halfWidth = 3, key = 'woodDark', textKey = 'gold' } = {}) {
  for (let a = cx - halfWidth; a <= cx + halfWidth; a++) {
    const x = axis === 'z' ? a : wall;
    const z = axis === 'z' ? wall : a;
    b.set(x, y, z, key);
    if (a !== cx - halfWidth && a !== cx + halfWidth && Math.abs(a - cx) % 2 === 0) {
      b.set(x, y, z, textKey);
    }
  }
}

/**
 * 棂窗 — a lattice window. The lattice parity is measured from the window's own edge so
 * mirrored copies stay exact mirror images.
 */
export function latticeWindow(b, {
  axis = 'z', wall = 0, from = 0, to = 0, y0 = 1, y1 = 3,
  frameKey = 'wood', latticeKey = 'woodDark', paperKey = 'plaster',
} = {}) {
  for (let a = from; a <= to; a++) {
    for (let y = y0; y <= y1; y++) {
      const x = axis === 'z' ? a : wall;
      const z = axis === 'z' ? wall : a;
      const onBorder = a === from || a === to || y === y0 || y === y1;
      const lattice = (a - from) % 2 === 0 || (y - y0) % 2 === 0;
      b.set(x, y, z, onBorder ? frameKey : lattice ? latticeKey : paperKey);
    }
  }
}

/** 灯笼 — a glowing lantern with a red frame, gold cap and a tassel. */
export function lantern(b, { x, y, z, half = 1, glowKey = 'lanternGlow', frameKey = 'lanternRed', capKey = 'gold' } = {}) {
  b.box(x - half, y, z - half, x + half, y + 2 * half, z + half, glowKey);
  b.rectRing(y, x - half, z - half, x + half, z + half, frameKey);
  b.rectRing(y + 2 * half, x - half, z - half, x + half, z + half, frameKey);
  for (const dx of [-half, half]) {
    for (const dz of [-half, half]) b.column(x + dx, z + dz, y, y + 2 * half, frameKey);
  }
  b.box(x - half, y + 2 * half + 1, z - half, x + half, y + 2 * half + 1, z + half, capKey);
  b.column(x, z, y + 2 * half + 2, y + 2 * half + 3, 'woodDark');   // 吊绳
  b.set(x, y - 1, z, capKey);                                        // 下坠
  b.set(x, y - 2, z, frameKey);
}

/** 石狮 — plinth + seated lion. Symmetric about its own x. */
export function stoneLion(b, { x, y, z, key = 'stone', darkKey = 'stoneDark' } = {}) {
  b.box(x - 2, y, z - 2, x + 2, y + 1, z + 2, darkKey);          // 须弥座
  b.box(x - 1, y + 2, z - 1, x + 1, y + 4, z + 1, key);          // 身
  b.box(x - 1, y + 5, z - 1, x + 1, y + 6, z + 1, key);          // 头
  b.set(x - 2, y + 5, z, darkKey); b.set(x + 2, y + 5, z, darkKey); // 耳
  b.set(x - 1, y + 5, z - 2, key); b.set(x + 1, y + 5, z - 2, key); // 鬃
  b.set(x - 1, y + 5, z + 2, key); b.set(x + 1, y + 5, z + 2, key);
  b.set(x, y + 7, z, darkKey);                                      // 顶饰
  b.set(x - 1, y + 3, z - 2, key); b.set(x + 1, y + 3, z - 2, key); // 前爪
}

/** 香炉 — bronze incense burner on a stone base. */
export function incenseBurner(b, { x, y, z, key = 'bronze', baseKey = 'stone' } = {}) {
  b.box(x - 1, y, z - 1, x + 1, y, z + 1, baseKey);
  b.box(x - 1, y + 1, z - 1, x + 1, y + 2, z + 1, key);
  b.rectRing(y + 2, x - 1, z - 1, x + 1, z + 1, 'gold');
  b.box(x, y + 3, z, x, y + 4, z, key);
  b.set(x, y + 5, z, 'gold');
}

/** 栏杆 — railing posts and panels around a platform edge. */
export function railing(b, { x0, z0, x1, z1, y, key = 'stoneLight', postKey = 'stone' } = {}) {
  eachRing(x0, z0, x1, z1, (x, z, ox, oz) => {
    const post = (Math.abs(x) + Math.abs(z)) % 3 === 0;
    b.set(x, y, z, post ? postKey : key);
    b.set(x, y + 1, z, post ? postKey : key);
  });
}

/** 放生池 — water surface with a stone rim. */
export function pool(b, { x0, z0, x1, z1, y = 0, waterKey = 'water', rimKey = 'stone' } = {}) {
  b.rect(y, x0, z0, x1, z1, waterKey);
  b.rectRing(y, x0, z0, x1, z1, rimKey, 1);
  b.rectRing(y + 1, x0, z0, x1, z1, rimKey, 1);
}

/**
 * 树 — a voxel tree. The canopy is generated from a radius that depends only on |dx|,
 * so the shape is symmetric about its own centre and mirrored pairs stay identical.
 */
export function tree(b, { x, z, y = 1, seed = 1, trunkKey = 'trunk', leafKey = 'foliage', leafDarkKey = 'foliageDark' } = {}) {
  // A tiny deterministic hash, independent of any PRNG state, so ordering never matters.
  // |x| is hashed so that a tree at +x and its twin at -x are identical (mirror-perfect).
  const ax = Math.abs(x);
  const h = (n) => {
    let v = Math.imul((ax * 73856093) ^ (z * 19349663) ^ (seed * 83492791) ^ (n * 2654435761), 0x85ebca6b);
    v = Math.imul(v ^ (v >>> 13), 0xc2b2ae35);
    return ((v ^ (v >>> 16)) >>> 0) / 4294967296;
  };
  const trunkH = 4 + Math.floor(h(1) * 3);
  const R = 3 + Math.floor(h(2) * 2);
  b.column(x, z, y, y + trunkH, trunkKey);
  const cy = y + trunkH + R - 1;
  for (let dy = -R; dy <= R; dy++) {
    const rad = Math.round(Math.sqrt(Math.max(0, R * R - dy * dy)));
    for (let dx = -rad; dx <= rad; dx++) {
      for (let dz = -rad; dz <= rad; dz++) {
        if (dx * dx + dy * dy + dz * dz > R * R) continue;
        const key = h(Math.abs(dx) * 31 + Math.abs(dz) * 7 + (dy + 8)) > 0.62 ? leafDarkKey : leafKey;
        b.set(x + dx, cy + dy, z + dz, key);
      }
    }
  }
}