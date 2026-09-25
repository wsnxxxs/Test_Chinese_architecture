// Chunked, face-culled voxel mesher with per-vertex ambient occlusion.
// Output attributes: position, normal, color (linear, jitter*AO baked), aMat (glow, gloss).
import { BufferGeometry, Float32BufferAttribute, BufferAttribute, Box3, Sphere, Vector3 } from 'three';
import { PAL } from './palette.js';
import { hash3 } from './rng.js';

function disposeArray() {
  this.array = null;
}

const FACES = [
  { n: [1, 0, 0], u: [0, 1, 0], v: [0, 0, 1] }, // +X
  { n: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0] }, // -X
  { n: [0, 1, 0], u: [0, 0, 1], v: [1, 0, 0] }, // +Y
  { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1] }, // -Y
  { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] }, // +Z
  { n: [0, 0, -1], u: [0, 1, 0], v: [1, 0, 0] }, // -Z
];
const CORNERS = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
];

/**
 * @param {VoxelGrid} grid
 * @param {object} o
 * @param {number} [o.chunk=32]
 * @param {number} [o.scale=1]           world size of one voxel
 * @param {number[]} [o.offset=[0,0,0]]  world position of grid corner (0,0,0), in world units
 * @param {number} [o.aoMin=0.55]        AO multiplier for fully occluded corners
 * @param {boolean} [o.skipBottom=true]  drop -Y faces of the y=0 layer
 * @returns {{geometry: BufferGeometry, faces: number}[]}
 */
export function meshGrid(grid, o = {}) {
  const chunk = o.chunk ?? 32;
  const sc = Array.isArray(o.scale) ? o.scale : [o.scale ?? 1, o.scale ?? 1, o.scale ?? 1];
  const off = o.offset ?? [0, 0, 0];
  const aoMin = o.aoMin ?? 0.55;
  const skipBottom = o.skipBottom ?? true;
  const seed = o.seed ?? 7;
  const { sx, sy, sz, data } = grid;
  const aoTab = [aoMin, aoMin + (1 - aoMin) * 0.38, aoMin + (1 - aoMin) * 0.72, 1];

  const solid = (x, y, z) =>
    x >= 0 && x < sx && y >= 0 && y < sy && z >= 0 && z < sz && data[x + sx * (z + sz * y)] !== 0 ? 1 : 0;

  const results = [];
  const aoV = [0, 0, 0, 0];

  for (let cy0 = 0; cy0 < sy; cy0 += chunk) {
    for (let cz0 = 0; cz0 < sz; cz0 += chunk) {
      for (let cx0 = 0; cx0 < sx; cx0 += chunk) {
        const x1 = Math.min(cx0 + chunk, sx);
        const y1 = Math.min(cy0 + chunk, sy);
        const z1 = Math.min(cz0 + chunk, sz);

        // ---- pass 1: count visible faces
        let nFaces = 0;
        for (let y = cy0; y < y1; y++) {
          for (let z = cz0; z < z1; z++) {
            const row = sx * (z + sz * y);
            for (let x = cx0; x < x1; x++) {
              if (data[row + x] === 0) continue;
              if (!solid(x + 1, y, z)) nFaces++;
              if (!solid(x - 1, y, z)) nFaces++;
              if (!solid(x, y + 1, z)) nFaces++;
              if (!solid(x, y - 1, z) && !(skipBottom && y === 0)) nFaces++;
              if (!solid(x, y, z + 1)) nFaces++;
              if (!solid(x, y, z - 1)) nFaces++;
            }
          }
        }
        if (nFaces === 0) continue;

        const pos = new Float32Array(nFaces * 12);
        const nor = new Float32Array(nFaces * 12);
        const col = new Float32Array(nFaces * 12);
        const mat = new Float32Array(nFaces * 8);
        const idx = new Uint32Array(nFaces * 6);
        let f = 0;

        // ---- pass 2: emit faces
        for (let y = cy0; y < y1; y++) {
          for (let z = cz0; z < z1; z++) {
            const row = sx * (z + sz * y);
            for (let x = cx0; x < x1; x++) {
              const id = data[row + x];
              if (id === 0) continue;

              // per-voxel colour jitter
              const jit = 1 + PAL.j[id] * (hash3(x, y, z, seed) * 2 - 1);
              const cr = PAL.r[id] * jit;
              const cg = PAL.g[id] * jit;
              const cb = PAL.b[id] * jit;
              const glow = PAL.glow[id];
              const gloss = PAL.gloss[id];

              for (let d = 0; d < 6; d++) {
                const F = FACES[d];
                const n = F.n;
                const u = F.u;
                const v = F.v;
                if (solid(x + n[0], y + n[1], z + n[2])) continue;
                if (skipBottom && d === 3 && y === 0) continue;

                // AO for the 4 corners
                const ax = x + n[0];
                const ay = y + n[1];
                const az = z + n[2];
                for (let k = 0; k < 4; k++) {
                  const su = CORNERS[k][0] ? 1 : -1;
                  const sv = CORNERS[k][1] ? 1 : -1;
                  const s1 = solid(ax + su * u[0], ay + su * u[1], az + su * u[2]);
                  const s2 = solid(ax + sv * v[0], ay + sv * v[1], az + sv * v[2]);
                  const c = solid(
                    ax + su * u[0] + sv * v[0],
                    ay + su * u[1] + sv * v[1],
                    az + su * u[2] + sv * v[2],
                  );
                  aoV[k] = s1 && s2 ? 0 : 3 - (s1 + s2 + c);
                }

                const bx = x + (n[0] > 0 ? 1 : 0);
                const by = y + (n[1] > 0 ? 1 : 0);
                const bz = z + (n[2] > 0 ? 1 : 0);
                const p0 = f * 12;
                for (let k = 0; k < 4; k++) {
                  const i = CORNERS[k][0];
                  const j = CORNERS[k][1];
                  const px = bx + i * u[0] + j * v[0];
                  const py = by + i * u[1] + j * v[1];
                  const pz = bz + i * u[2] + j * v[2];
                  const o3 = p0 + k * 3;
                  pos[o3] = (px + off[0]) * sc[0];
                  pos[o3 + 1] = (py + off[1]) * sc[1];
                  pos[o3 + 2] = (pz + off[2]) * sc[2];
                  nor[o3] = n[0];
                  nor[o3 + 1] = n[1];
                  nor[o3 + 2] = n[2];
                  const a = aoTab[aoV[k]];
                  col[o3] = cr * a;
                  col[o3 + 1] = cg * a;
                  col[o3 + 2] = cb * a;
                  const o2 = f * 8 + k * 2;
                  mat[o2] = glow;
                  mat[o2 + 1] = gloss;
                }

                const v0 = f * 4;
                const i0 = f * 6;
                if (aoV[0] + aoV[2] > aoV[1] + aoV[3]) {
                  idx[i0] = v0;
                  idx[i0 + 1] = v0 + 1;
                  idx[i0 + 2] = v0 + 2;
                  idx[i0 + 3] = v0;
                  idx[i0 + 4] = v0 + 2;
                  idx[i0 + 5] = v0 + 3;
                } else {
                  idx[i0] = v0 + 1;
                  idx[i0 + 1] = v0 + 2;
                  idx[i0 + 2] = v0 + 3;
                  idx[i0 + 3] = v0 + 1;
                  idx[i0 + 4] = v0 + 3;
                  idx[i0 + 5] = v0;
                }
                f++;
              }
            }
          }
        }

        const g = new BufferGeometry();
        g.setAttribute('position', new Float32BufferAttribute(pos, 3));
        g.setAttribute('normal', new Float32BufferAttribute(nor, 3));
        g.setAttribute('color', new Float32BufferAttribute(col, 3));
        g.setAttribute('aMat', new Float32BufferAttribute(mat, 2));
        g.setIndex(new BufferAttribute(idx, 1));
        // the CPU copies are not needed after the GPU upload (halves the JS heap)
        for (const name of ['position', 'normal', 'color', 'aMat']) g.getAttribute(name).onUpload(disposeArray);
        g.index.onUpload(disposeArray);
        const mn = new Vector3((cx0 + off[0]) * sc[0], (cy0 + off[1]) * sc[1], (cz0 + off[2]) * sc[2]);
        const mx = new Vector3((x1 + off[0]) * sc[0], (y1 + off[1]) * sc[1], (z1 + off[2]) * sc[2]);
        g.boundingBox = new Box3(mn, mx);
        g.boundingSphere = new Sphere().setFromPoints([mn, mx]);
        results.push({ geometry: g, faces: nFaces });
      }
    }
  }
  return results;
}
