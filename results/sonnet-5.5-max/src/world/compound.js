// Layout of the compound: surface painting (courtyards, paths, beds) and planting.
import { M } from '../voxel/palette.js';
import { hash2, mulberry32, noise2 } from '../voxel/rng.js';
import { SX, SZ, XC } from './layout.js';
import { S, Z, WX, PAD, inPond } from './terrain.js';
import { pine, cypress, broadleaf, willow, bamboo, bush, flowers } from './trees.js';
import { taihu } from './props.js';

/** Paint all courtyard surfaces and roads. */
export function paintSurfaces(P) {
  const { rect, rectU, disc } = P;
  const bedU = (u0, u1, z0, z1) => {
    rectU(u0, u1, z0, z1, S.GRASS);
    rectU(u0, u1, z0, z0, S.COPING);
    rectU(u0, u1, z1, z1, S.COPING);
    rectU(u0, u0, z0, z1, S.COPING);
    rectU(u1, u1, z0, z1, S.COPING);
  };

  // ---- T1: gate courtyard ---------------------------------------------------
  rectU(0, 82, Z.t2t1 + 1, Z.wallS - 1, S.PAVE);
  rectU(79, 82, Z.t2t1 + 1, Z.wallS - 1, S.GRASS);
  bedU(9, 30, 268, 301);
  bedU(66, 77, 248, 299);
  rect(XC + 4, 273, XC + 38, 277, S.GRAVEL);
  rect(XC - 38, 273, XC - 4, 277, S.GRAVEL);

  // ---- T2: main courtyard ---------------------------------------------------
  rectU(0, 82, Z.t3t2 + 1, Z.t2t1, S.PAVE);
  bedU(10, 36, 163, 174);
  bedU(10, 36, 181, 207);
  bedU(10, 36, 215, 232);
  rect(XC + 4, 176, XC + 48, 180, S.GRAVEL);
  rect(XC - 48, 176, XC - 4, 180, S.GRAVEL);
  rect(XC + 4, 208, XC + 48, 212, S.GRAVEL);
  rect(XC - 48, 208, XC - 4, 212, S.GRAVEL);
  disc(0, 196, 8, S.PAVE);

  // ---- T3: main hall precinct ----------------------------------------------
  rectU(0, 42, Z.t4t3 + 1, Z.t3t2, S.PAVE);
  bedU(54, 80, 100, 146);
  rectU(46, 50, Z.t4t3 + 3, Z.t3t2 - 2, S.GRAVEL);
  rectU(50, 58, 120, 124, S.GRAVEL); // lane to the monks' quarters

  // ---- T4: rear garden -----------------------------------------------------
  rectU(0, 48, 58, Z.t4t3, S.PAVE);
  disc(-58, 70, 16, S.PAVE);
  disc(58, 70, 16, S.PAVE);
  rect(XC + 34, 68, XC + 46, 72, S.GRAVEL);
  rect(XC - 46, 68, XC - 34, 72, S.GRAVEL);
  bedU(56, 80, 34, 52);
  rectU(4, 36, 40, 44, S.GRAVEL); // path to the octagonal pavilions
  rectU(0, 4, Z.wallN + 1, Z.t4t3, S.SLAB, { mirror: false });
  // centre lane of the axis road through every courtyard
  rectU(-4, 4, Z.t4t3 + 1, Z.wallS, S.SLAB, { mirror: false });
  rectU(-4, 4, Z.wallN + 1, Z.t4t3, S.SLAB, { mirror: false });

  // ---- outside -------------------------------------------------------------
  rectU(0, 44, Z.wallS + 1, 349, S.PLAZA);
  rectU(-4, 4, 350, SZ - 1, S.SLAB, { mirror: false, skip: S.BED }); // keep the pond bed (and its water) under the bridge
  // ring road (tree-lined) and its connection to the plaza
  rectU(96, 102, 12, 334, S.GRAVEL);
  rect(XC - 102, 12, XC + 102, 18, S.GRAVEL);
  rectU(44, 96, 328, 334, S.GRAVEL);
  // farmland in the two front corners, cut into plots by dirt paths
  for (const s of [-1, 1]) {
    for (let bu = 60; bu < 116; bu += 14) {
      for (let bz = 336; bz < 392; bz += 16) {
        if (Math.abs(bu + 6) < 12) continue;
        const h = hash2(bu * 3 + s, bz, 9);
        const style = h < 0.34 ? S.FIELD1 : h < 0.67 ? S.FIELD2 : S.FIELD3;
        // keep off the pond (rows z 352..384 inside |u| < 78)
        if (bz > 348 && bu < 80) continue;
        const u0 = s > 0 ? bu : -bu - 11;
        rect(XC + u0, bz, XC + u0 + 11, bz + 12, style);
      }
    }
  }
  // gravel lane beside the pond
  rectU(80, 84, 336, 392, S.GRAVEL);
}

// ---------------------------------------------------------------------------
// planting
// ---------------------------------------------------------------------------
export function plantCompound(R, maps) {
  const { H, idx } = maps;
  const gy = (u, z) => H[idx(XC + u, z)];
  const both = (u, fn) => {
    fn(u, 1);
    fn(-u, -1);
  };

  // gate courtyard: ginkgo pair, cypress lines, hedges
  both(19, (u, s) => {
    broadleaf(R, XC + u, gy(u, 282), 282, 'ginkgo', 11 + s, 10, 7);
    bush(R, XC + u + (s > 0 ? 6 : -6), gy(u, 296), 296, 2.5, 1.8, undefined, 5 + s);
    bush(R, XC + u - (s > 0 ? 6 : -6), gy(u, 296), 296, 2.5, 1.8, undefined, 7 + s);
    bush(R, XC + u, gy(u, 296), 296, 2.5, 1.8, undefined, 3 + s);
  });
  for (let z = 250; z <= 296; z += 8) {
    both(72, (u, s) => cypress(R, XC + u, gy(u, z), z, z * 7 + s, 15 + ((z / 8) & 1) * 2));
  }
  both(72, (u, s) => bamboo(R, XC + u + s * 4, gy(u, 262), 262, 3 + s, 6));

  // main courtyard: pines
  for (const z of [170, 194, 222]) both(22, (u, s) => pine(R, XC + u, gy(u, z), z, z + s * 3, 14));
  for (const z of [168, 190, 228]) both(30, (u, s) => bush(R, XC + u, gy(u, z), z, 2.2, 1.6, [M.LEAF1, M.LEAF2, M.GRASS4], z));
  both(14, (u, s) => flowers(R, XC + u - 3, 164, XC + u + 3, 173, gy(u, 168), 3, 0.4));
  both(23, (u, s) => flowers(R, XC + u - 4, 183, XC + u + 4, 186, gy(u, 185), 5, 0.5));
  both(23, (u, s) => flowers(R, XC + u - 4, 216, XC + u + 4, 220, gy(u, 218), 7, 0.5));

  // main hall precinct: side gardens around the monks' quarters
  both(66, (u, s) => {
    pine(R, XC + u - s * 2, gy(u, 101), 101, 21 + s, 15);
    pine(R, XC + u + s * 6, gy(u, 149), 149, 25 + s, 13);
    bamboo(R, XC + u - s * 9, gy(u, 96), 96, 31 + s, 9, 3);
    bamboo(R, XC + u + s * 12, gy(u, 98), 98, 33 + s, 8, 3);
    bamboo(R, XC + u + s * 12, gy(u, 146), 146, 35 + s, 7, 3);
    taihu(R, XC + u - s * 10, gy(u, 141), 141, 3, 5, 3, 4 + s);
    taihu(R, XC + u - s * 6, gy(u, 105), 105, 2, 3, 2, 6 + s);
    bush(R, XC + u + s * 11, gy(u, 137), 137, 2.5, 1.6, [M.BLOOM1, M.BLOOM2, M.BLOOM3], 4 + s);
    bush(R, XC + u - s * 10, gy(u, 112), 112, 2.2, 1.5, [M.BLOOM1, M.BLOOM2, M.BLOOM3], 8 + s);
  });

  // rear garden
  both(30, (u, s) => {
    cypress(R, XC + u, gy(u, 34), 34, 41 + s, 17);
    broadleaf(R, XC + u, gy(u, 78), 78, 'blossom', 53 + s, 7, 5);
  });
  both(68, (u, s) => {
    bamboo(R, XC + u, gy(u, 42), 42, 61 + s, 9, 3.5);
    broadleaf(R, XC + u - s * 6, gy(u, 46), 46, 'maple', 63 + s, 8, 5);
    taihu(R, XC + u - s * 2, gy(u, 30), 30, 3, 5, 3, 9 + s);
  });
  both(52, (u, s) => {
    broadleaf(R, XC + u, gy(u, 30), 30, 'maple', 71 + s, 8, 5);
  });
  // strip of low hedges along the inside of the walls (south)
  for (const u of [-58, -46, 46, 58]) bush(R, XC + u, gy(u, 302), 302, 2.6, 1.7, undefined, u);
}

/** Scatter trees in the outer landscape. */
export function plantOutside(R, maps) {
  const { H, SURF, idx } = maps;
  const rnd = mulberry32(2024);
  let count = 0;
  // tree-lined avenue along the ring road (alternating species, both sides)
  const inner = ['blossom', 'maple'];
  const outer = ['ginkgo', 'oak', 'maple'];
  for (let z = 26, k = 0; z < 328; z += 14, k++) {
    for (const s of [-1, 1]) {
      for (const side of [-1, 1]) {
        const px = XC + s * (99 + side * 8);
        const pz = z + (side > 0 ? 7 : 0);
        if (SURF[idx(px, pz)] !== S.GRASS) continue;
        const list = side < 0 ? inner : outer;
        const kind = list[(k + (s > 0 ? 1 : 0)) % list.length];
        broadleaf(R, px, H[idx(px, pz)], pz, kind, px * 7 + pz, 6 + (k & 1), side < 0 ? 4 : 5.5);
        count++;
      }
    }
  }
  for (let z = 4; z < SZ - 4; z += 7) {
    for (let x = 4; x < SX - 4; x += 7) {
      const px = x + Math.floor((rnd() - 0.5) * 6);
      const pz = z + Math.floor((rnd() - 0.5) * 6);
      const u = px - XC;
      // skip the compound, the plaza / pond forecourt and the ring road corridor
      if (Math.abs(u) < WX + 20 && pz > Z.wallN - 20 && pz < Z.wallS + 12) continue;
      if (pz >= 300 && Math.abs(u) < 78) continue;
      if (Math.abs(Math.abs(u) - 99) < 15) continue;
      if (pz < 22 && Math.abs(u) < 112) continue;
      if (pz >= 330 && Math.abs(u) > 56 && Math.abs(u) < 118) continue; // farmland corners
      if (inPond(u, pz) || inPond(u, pz + 5) || inPond(u, pz - 5)) continue;
      const i = idx(px, pz);
      if (SURF[i] !== S.GRASS) continue;
      // keep clear of roads
      let near = false;
      for (const [dx, dz] of [[4, 0], [-4, 0], [0, 4], [0, -4]]) {
        const st = SURF[idx(px + dx, pz + dz)];
        if (st !== S.GRASS) near = true;
      }
      if (near) continue;
      const dens = noise2(px * 0.022 + 5, pz * 0.022 + 9, 21);
      if (dens < 0.4 || rnd() > 0.55 + (dens - 0.4)) continue;
      const y = H[i];
      const k = rnd();
      const seed = px * 131 + pz;
      if (k < 0.32) pine(R, px, y, pz, seed, 11 + Math.floor(rnd() * 5));
      else if (k < 0.5) cypress(R, px, y, pz, seed, 13 + Math.floor(rnd() * 6));
      else if (k < 0.68) broadleaf(R, px, y, pz, 'oak', seed, 7 + Math.floor(rnd() * 3), 5 + rnd() * 2);
      else if (k < 0.78) broadleaf(R, px, y, pz, 'maple', seed, 7, 5);
      else if (k < 0.86) broadleaf(R, px, y, pz, 'ginkgo', seed, 8, 6);
      else if (k < 0.93) broadleaf(R, px, y, pz, 'blossom', seed, 6, 4.5);
      else bamboo(R, px, y, pz, seed, 7, 3);
      count++;
    }
  }
  // willows around the pond
  for (let a = 0; a < 14; a++) {
    const u = -70 + a * 10.5 + (hash2(a, 3, 5) - 0.5) * 3;
    const z = PAD.pondZ + (a & 1 ? 20 : -21) + Math.round((hash2(a, 4, 5) - 0.5) * 3);
    const x = Math.round(XC + u);
    if (Math.abs(u) < 26) continue;
    if (SURF[idx(x, z)] !== S.GRASS) continue;
    willow(R, x, H[idx(x, z)], z, 90 + a, 8);
  }
  // garden rocks by the pond
  for (const u of [-62, -47, 47, 62]) {
    const z = PAD.pondZ - 20;
    taihu(R, XC + u, H[idx(XC + u, z)], z, 3, 5, 3, Math.abs(u));
  }
  return count;
}
