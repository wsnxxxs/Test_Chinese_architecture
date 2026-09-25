// Terrain: stepped terraces inside the compound, natural rolling hills outside, a lotus pond
// in front of the gate, courtyard paving, paths and planting beds.
import { M } from '../voxel/palette.js';
import { fbm2, noise2, hash2, hash3, smoothstep, clamp, lerp } from '../voxel/rng.js';
import { SX, SZ, XC } from './layout.js';
import { FINE, RING1, coarseQuant } from './far.js';

const SEAM = 14; // width (voxels) of the blend band at the grid border
export const G0 = 8; // base ground level (top face of the natural ground)
export const T = { T0: 8, T1: 10, T2: 13, T3: 16, T4: 19 };

// key z lines (grid coords)
export const Z = {
  wallN: 26,
  t4t3: 89, // z <= 89 is T4
  t3t2: 158, // z <= 158 is T3
  t2t1: 236, // z <= 236 is T2
  wallS: 306, // z <= 306 (inside) is T1
};
export const WX = 84; // compound half width (wall centre line)

export const PAD = { pondZ: 368, pondRx: 74, pondRz: 15 };

/** surface style ids */
export const S = { GRASS: 0, PAVE: 1, SLAB: 2, GRAVEL: 3, COPING: 4, DRIP: 5, BED: 6, SAND: 7, ROCK: 8, DIRT: 9, PLAZA: 10, FLOOR: 11, FIELD1: 12, FIELD2: 13, FIELD3: 14 };

export function terraceAt(z) {
  if (z <= Z.t4t3) return T.T4;
  if (z <= Z.t3t2) return T.T3;
  if (z <= Z.t2t1) return T.T2;
  if (z <= Z.wallS) return T.T1;
  return T.T0;
}

function terraceSmooth(z) {
  return (
    T.T4 -
    3 * smoothstep(Z.t4t3 - 9, Z.t4t3 + 9, z) -
    3 * smoothstep(Z.t3t2 - 9, Z.t3t2 + 9, z) -
    3 * smoothstep(Z.t2t1 - 9, Z.t2t1 + 9, z) -
    2 * smoothstep(Z.wallS - 9, Z.wallS + 9, z)
  );
}

function natural(u, z) {
  const north = 14 * smoothstep(110, 0, z);
  const side = 6 * smoothstep(74, 128, Math.abs(u));
  const n = fbm2(u * 0.035 + 40, z * 0.035 + 17, 3, 3) * 3.6 + noise2(u * 0.12, z * 0.12, 9) * 1.1;
  return G0 - 1 + north + side + n;
}

export function inPond(u, z) {
  const dx = u / PAD.pondRx;
  const dz = (z - PAD.pondZ) / PAD.pondRz;
  // superellipse-ish outline with a wobbly rim
  const wob = 1 + 0.06 * Math.sin(u * 0.19 + 1.3) + 0.05 * Math.sin(u * 0.41 + z * 0.3);
  const d = Math.pow(Math.abs(dx), 2.6) + Math.pow(Math.abs(dz), 2.2);
  return d < wob;
}

function distToCompound(u, z) {
  const dx = Math.max(Math.abs(u) - WX, 0);
  const dz = Math.max(Z.wallN - z, 0, z - Z.wallS);
  return Math.hypot(dx, dz);
}

export function buildTerrainMaps() {
  const H = new Int16Array(SX * SZ);
  const SURF = new Uint8Array(SX * SZ);
  const SIDE = new Uint8Array(SX * SZ); // 1 => stone flanks, 0 => earth flanks
  const idx = (x, z) => x + z * SX;

  for (let z = 0; z < SZ; z++) {
    for (let x = 0; x < SX; x++) {
      const u = x - XC;
      const i = idx(x, z);
      const nat = natural(u, z);
      const d = distToCompound(u, z);
      let h;
      if (d === 0) {
        h = terraceAt(z);
        SIDE[i] = 1;
      } else {
        const zc = clamp(z, Z.wallN, Z.wallS + 30);
        const tn = terraceSmooth(zc);
        const k = smoothstep(0, 26, d);
        h = lerp(tn, nat, k);
        SIDE[i] = 0;
      }
      // blend towards the quantised coarse terrain at the border of the fine grid (seamless seam)
      const e = Math.min(x, SX - 1 - x, z, SZ - 1 - z);
      if (e < SEAM) {
        const px = x < SEAM ? FINE.x0 - 2 : x > SX - 1 - SEAM ? FINE.x1 + 2 : x + FINE.x0 + 0.5;
        const pz = z < SEAM ? FINE.z0 - 2 : z > SZ - 1 - SEAM ? FINE.z1 + 2 : z + FINE.z0 + 0.5;
        h = lerp(h, coarseQuant(px, pz, RING1.cs, RING1.vs), smoothstep(SEAM, 0, e));
      }
      H[i] = Math.round(h);
      SURF[i] = S.GRASS;
    }
  }

  // ---- pond ----------------------------------------------------------------
  for (let z = 0; z < SZ; z++)
    for (let x = 0; x < SX; x++) {
      const u = x - XC;
      const i = idx(x, z);
      if (inPond(u, z)) {
        H[i] = 5;
        SURF[i] = S.BED;
        SIDE[i] = 1;
      }
    }
  // coping ring: any non-pond cell touching a pond cell
  for (let z = 1; z < SZ - 1; z++)
    for (let x = 1; x < SX - 1; x++) {
      const i = idx(x, z);
      if (SURF[i] === S.BED) continue;
      let near = false;
      for (let dz = -1; dz <= 1 && !near; dz++)
        for (let dx = -1; dx <= 1; dx++) if (SURF[idx(x + dx, z + dz)] === S.BED) near = true;
      if (near) {
        H[i] = G0;
        SURF[i] = S.COPING;
        SIDE[i] = 1;
      }
    }

  return { H, SURF, SIDE, idx };
}

// ---------------------------------------------------------------------------
// painting helpers (surface styles)
// ---------------------------------------------------------------------------
export function makePainter(maps) {
  const { SURF, idx } = maps;
  const rect = (x0, z0, x1, z1, style, o = {}) => {
    for (let z = Math.max(0, Math.min(z0, z1)); z <= Math.min(SZ - 1, Math.max(z0, z1)); z++)
      for (let x = Math.max(0, Math.min(x0, x1)); x <= Math.min(SX - 1, Math.max(x0, x1)); x++) {
        if (o.only !== undefined && SURF[idx(x, z)] !== o.only) continue;
        if (o.skip !== undefined && SURF[idx(x, z)] === o.skip) continue;
        SURF[idx(x, z)] = style;
      }
  };
  /** rect in axis coordinates, mirrored about the axis */
  const rectU = (u0, u1, z0, z1, style, o = {}) => {
    rect(XC + u0, z0, XC + u1, z1, style, o);
    if (o.mirror !== false) rect(XC - u1, z0, XC - u0, z1, style, o);
  };
  const disc = (u, z, r, style) => {
    for (let dz = -r; dz <= r; dz++)
      for (let dx = -r; dx <= r; dx++)
        if (dx * dx + dz * dz <= r * r) SURF[idx(XC + u + dx, z + dz)] = style;
  };
  return { rect, rectU, disc };
}

const GRASSES = [M.GRASS1, M.GRASS2, M.GRASS3, M.GRASS4];

/** palette id for the top voxel of a column */
export function surfaceColor(style, x, z, y) {
  const u = x - XC;
  switch (style) {
    case S.GRASS: {
      const n = noise2(x * 0.23, z * 0.23, 5) * 0.75 + hash3(x, y, z, 3) * 0.25;
      if (n < 0.34) return M.GRASS3;
      if (n < 0.62) return M.GRASS1;
      if (n < 0.86) return M.GRASS2;
      return M.GRASS4;
    }
    case S.PAVE: {
      if (x % 8 === 0 || z % 8 === 0) return M.PAVE_J;
      return (((x >> 2) + (z >> 2)) & 1) === 0 ? M.PAVE1 : M.PAVE2;
    }
    case S.PLAZA: {
      if (x % 6 === 0 || z % 6 === 0) return M.PAVE_J;
      return (((x / 6) | 0) + ((z / 6) | 0)) & 1 ? M.SLAB2 : M.SLAB1;
    }
    case S.SLAB: {
      const au = Math.abs(u);
      if (au <= 1) return z % 6 === 0 ? M.SLAB2 : M.SLAB1; // central imperial lane
      if (au === 2) return M.PAVE_J;
      if (au >= 5) return M.STONE2;
      return z % 4 === 0 ? M.STONE_D : (z >> 2) & 1 ? M.STONE : M.STONE2;
    }
    case S.GRAVEL:
      return hash3(x, 0, z, 8) > 0.72 ? M.GRAVEL : hash3(x, 1, z, 8) > 0.5 ? M.STONE2 : M.PAVE2;
    case S.COPING:
      return ((x + z) & 1) === 0 ? M.STONE : M.MARBLE2;
    case S.DRIP:
      return hash3(x, 2, z, 9) > 0.5 ? M.STONE_D : M.GRAVEL;
    case S.BED:
      return hash3(x, y, z, 4) > 0.7 ? M.SAND : M.BED;
    case S.SAND:
      return M.SAND;
    case S.ROCK:
      return hash3(x, y, z, 5) > 0.5 ? M.ROCK : M.ROCK_L;
    case S.DIRT:
      return hash3(x, y, z, 6) > 0.6 ? M.DIRT2 : M.DIRT;
    case S.FLOOR:
      return M.STONE2;
    case S.FIELD1:
    case S.FIELD2:
    case S.FIELD3: {
      // crop rows; direction alternates between neighbouring plots
      const rows = ((x >> 4) + (z >> 4)) & 1 ? x : z;
      if (rows % 3 === 0) return M.SOIL;
      const c = style === S.FIELD1 ? M.CROP1 : style === S.FIELD2 ? M.CROP2 : M.CROP3;
      return hash3(x, y, z, 12) > 0.8 ? M.GRASS4 : c;
    }
    default:
      return M.GRASS1;
  }
}

/** Fill the voxel grid from the height map. */
export function fillTerrain(grid, maps) {
  const { H, SURF, SIDE, idx } = maps;
  const { data, sx, sz } = grid;
  for (let z = 0; z < SZ; z++) {
    for (let x = 0; x < SX; x++) {
      const i = idx(x, z);
      const h = H[i];
      const style = SURF[i];
      const side = SIDE[i];
      for (let y = 0; y < h; y++) {
        const depth = h - 1 - y;
        let id;
        if (depth === 0) id = surfaceColor(style, x, z, y);
        else if (depth <= 3) {
          if (side) id = ((x + z + depth) & 1) === 0 ? M.STONE : M.STONE2;
          else id = style === S.GRASS && depth === 1 ? (hash2(x, z, 2) > 0.5 ? M.DIRT : M.GRASS3) : hash3(x, y, z, 6) > 0.5 ? M.DIRT : M.DIRT2;
        } else id = side ? M.STONE_D : y < 3 ? M.ROCK2 : M.DIRT2;
        data[x + sx * (z + sz * y)] = id;
      }
      // meadow decoration: wild flowers and grass tufts standing on the surface
      if (style === S.GRASS && h < SY_MAX) {
        const r = hash2(x, z, 88);
        if (r < 0.017) data[x + sx * (z + sz * h)] = FLOWERS[Math.floor(hash2(x, z, 89) * FLOWERS.length)];
        else if (r < 0.06) data[x + sx * (z + sz * h)] = hash2(x, z, 90) > 0.5 ? M.GRASS_D : M.GRASS3;
      }
    }
  }
}

const FLOWERS = [M.F_PINK, M.F_WHITE, M.F_YELLOW, M.F_PURPLE, M.F_WHITE, M.F_YELLOW];
const SY_MAX = 100;
