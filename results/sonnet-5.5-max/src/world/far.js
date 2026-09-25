// Far landscape: two rings of coarse voxels (4 and 16 units) forming rolling hills and misty
// mountains around the detailed compound.  Heights are shared with the fine terrain so the seam
// disappears (the fine terrain blends towards the quantised coarse height at its border).
import { VoxelGrid } from '../voxel/grid.js';
import { M } from '../voxel/palette.js';
import { fbm2, noise2, hash3, smoothstep, clamp, lerp } from '../voxel/rng.js';
import { ORIGIN, SX, SZ } from './layout.js';

// fine grid rectangle in world units
export const FINE = {
  x0: ORIGIN.x,
  x1: ORIGIN.x + SX,
  z0: ORIGIN.z,
  z1: ORIGIN.z + SZ,
};

/** base rolling terrain, world units (matches terrain.js `natural` at the seam) */
export function baseHeight(wx, wz) {
  const u = wx + 0.5; // world x -> axis coordinate (axis voxel centred on x = 0)
  const z = wz - ORIGIN.z; // grid z
  const north = 14 * smoothstep(110, 0, z);
  const side = 6 * smoothstep(74, 128, Math.abs(u));
  const n = fbm2(u * 0.035 + 40, z * 0.035 + 17, 3, 3) * 3.6 + noise2(u * 0.12, z * 0.12, 9) * 1.1;
  return 7 + north + side + n;
}

/** mountain mass added on top of the base terrain */
export function mountHeight(wx, wz) {
  // distance from the compound (world origin ~ centre of the fine grid)
  const dx = Math.max(Math.abs(wx) - 150, 0);
  const dzN = Math.max(-190 - wz, 0);
  const dzS = Math.max(wz - 260, 0);
  const dist = Math.hypot(dx, dzN + dzS);
  // mountain layout: big range to the north, medium hills to the sides, gentle in the south
  const north = smoothstep(-260, -760, wz);
  const side = smoothstep(260, 900, Math.abs(wx)) * 0.7;
  const south = smoothstep(420, 1100, wz) * 0.34;
  const A = Math.max(north, side, south);
  const ridge = 1 - Math.abs(2 * fbm2(wx * 0.0034 + 11, wz * 0.0048 - 7, 5, 4) - 1);
  const peaks = Math.pow(ridge, 2.0);
  const detail = fbm2(wx * 0.02, wz * 0.02, 13, 3);
  const swell = smoothstep(300, 1100, dist);
  return A * swell * (14 + 330 * peaks + 24 * detail);
}

export function farHeight(wx, wz) {
  return baseHeight(wx, wz) + mountHeight(wx, wz);
}

/** height (world units) of the coarse cell (cs wide, vs tall) containing (wx, wz) - quantised */
export function coarseQuant(wx, wz, cs, vs = cs) {
  const cx = Math.floor(wx / cs) * cs + cs / 2;
  const cz = Math.floor(wz / cs) * cs + cs / 2;
  return Math.max(vs, Math.round(farHeight(cx, cz) / vs) * vs);
}

/** land use on low ground: 0 meadow, 1 forest patch, 2 farmland */
function landClass(wx, wz) {
  if (noise2(wx * 0.011 + 3, wz * 0.011 - 9, 41) > 0.6) return 1;
  if (noise2(wx * 0.017 - 5, wz * 0.017 + 2, 43) > 0.64) return 2;
  return 0;
}

function cellColor(h, slope, wx, wz, y, cls = 0) {
  const r = hash3(Math.floor(wx / 4), y, Math.floor(wz / 4), 31);
  const n = noise2(wx * 0.008, wz * 0.008, 19);
  if (h < 26) {
    if (cls === 1) return r > 0.66 ? M.PINE2 : r > 0.3 ? M.PINE1 : M.CYP1;
    if (cls === 2) {
      const b = hash3(Math.floor(wx / 26), 0, Math.floor(wz / 26), 5);
      const crop = b < 0.34 ? M.CROP1 : b < 0.67 ? M.CROP2 : M.CROP3;
      return Math.floor(wx / 4) % 3 === 0 ? M.SOIL : crop;
    }
    return r > 0.7 ? M.GRASS2 : r > 0.35 ? M.GRASS1 : M.GRASS3;
  }
  if (h < 120) return r > 0.7 ? M.PINE2 : r > 0.32 ? M.PINE1 : M.PINE3;
  if (h < 220) {
    if (slope > 2 && r > 0.55 + n * 0.25) return r > 0.8 ? M.ROCK_L : M.ROCK;
    return r > 0.7 ? M.PINE1 : r > 0.35 ? M.CYP1 : M.PINE3;
  }
  // high crests: pale rock with a few pines
  if (r > 0.86) return M.PINE3;
  return r > 0.55 ? M.ROCK_L : r > 0.2 ? M.ROCK : M.ROCK2;
}

/**
 * Build one coarse ring.  Returns {grid, scale, offset} for the mesher.
 * rect: world rect of the ring, hole: world rect to leave empty.
 */
function buildRing(cs, vs, x0, z0, nx, nz, hole, maxCells) {
  const g = new VoxelGrid(nx, maxCells, nz);
  const H = new Int16Array(nx * nz);
  for (let j = 0; j < nz; j++)
    for (let i = 0; i < nx; i++) {
      const cx = x0 + (i + 0.5) * cs;
      const cz = z0 + (j + 0.5) * cs;
      if (hole && cx > hole.x0 && cx < hole.x1 && cz > hole.z0 && cz < hole.z1) continue;
      const base = farHeight(cx, cz);
      let h = Math.max(1, Math.round(base / vs));
      if (base < 24 && landClass(cx, cz) === 1) h += 1; // forest canopy
      H[i + j * nx] = Math.min(h, maxCells);
    }
  for (let j = 0; j < nz; j++)
    for (let i = 0; i < nx; i++) {
      const h = H[i + j * nx];
      if (!h) continue;
      const wx = x0 + (i + 0.5) * cs;
      const wz = z0 + (j + 0.5) * cs;
      // slope = max height difference to 4-neighbours (cells)
      let slope = 0;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ii = clamp(i + di, 0, nx - 1);
        const jj = clamp(j + dj, 0, nz - 1);
        slope = Math.max(slope, Math.abs(H[ii + jj * nx] - h));
      }
      for (let y = 0; y < h; y++) {
        const depth = h - 1 - y;
        // slopes keep the vegetation colour of their elevation so terraces do not read as bare bands
        const cls = landClass(wx, wz);
        const id = depth < 7 ? cellColor((y + 1) * vs, slope, wx, wz, y, cls) : M.ROCK2;
        g.set(i, y, j, id);
      }
    }
  return { grid: g, scale: [cs, vs, cs], offset: [x0 / cs, 0, z0 / cs] };
}

export const RING1 = { cs: 4, vs: 3, margin: 176 }; // (SX + 2*margin) and (SZ + 2*margin) must be multiples of RING2.cs
export const RING2 = { cs: 16, vs: 5 };

export function buildFar() {
  // ring 1: 4x2x4 cells, 240 units of margin around the fine grid
  const { cs: cs1, vs: vs1, margin: m1 } = RING1;
  const r1 = {
    x0: FINE.x0 - m1,
    z0: FINE.z0 - m1,
    nx: (SX + 2 * m1) / cs1,
    nz: (SZ + 2 * m1) / cs1,
  };
  const ring1 = buildRing(cs1, vs1, r1.x0, r1.z0, r1.nx, r1.nz, { x0: FINE.x0, x1: FINE.x1, z0: FINE.z0, z1: FINE.z1 }, 90);

  // ring 2: 16-unit cells further out (its rect must be aligned to ring 1's outer edge)
  const { cs: cs2, vs: vs2 } = RING2;
  const w1 = r1.nx * cs1;
  const d1 = r1.nz * cs1;
  // margins in cells of ring 2 (west/east 68, north 90, south 38)
  const mW = 68;
  const mN = 90;
  const mS = 38;
  const x0 = r1.x0 - cs2 * mW;
  const z0 = r1.z0 - cs2 * mN;
  const nx = Math.round((w1 + 2 * cs2 * mW) / cs2);
  const nz = Math.round((d1 + cs2 * (mN + mS)) / cs2);
  const ring2 = buildRing(cs2, vs2, x0, z0, nx, nz, {
    x0: r1.x0,
    x1: r1.x0 + w1,
    z0: r1.z0,
    z1: r1.z0 + d1,
  }, 80);
  return [ring1, ring2];
}
