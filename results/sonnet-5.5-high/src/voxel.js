import * as THREE from 'three';

export const GLOW = 0x1000000; // flag: emissive (unlit) voxel
const OFF_Y = 8;

const DIRS = [
  { n: [1, 0, 0], u: [0, 1, 0], v: [0, 0, 1] },
  { n: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0] },
  { n: [0, 1, 0], u: [0, 0, 1], v: [1, 0, 0] },
  { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1] },
  { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] },
  { n: [0, 0, -1], u: [0, 1, 0], v: [1, 0, 0] },
];
const CORNERS = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
const AO = [0.5, 0.68, 0.84, 1.0];

const key = (x, y, z) => ((x + 512) * 2048 + (y + OFF_Y)) * 1024 + (z + 512);

function hash(x, y, z) {
  const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return s - Math.floor(s);
}

export class VoxelGrid {
  constructor() { this.m = new Map(); }

  set(x, y, z, c) {
    this.m.set(key(Math.round(x), Math.round(y), Math.round(z)), c);
  }
  has(x, y, z) { return this.m.has(key(x, y, z)); }

  box(x0, y0, z0, x1, y1, z1, c) {
    for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
      for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
        for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++) this.set(x, y, z, c);
  }

  /** Builds face-culled, ambient-occluded geometry. Returns {solid, glow, voxels, faces}. */
  build() {
    const out = [{ p: [], c: [], n: [] }, { p: [], c: [], n: [] }];
    const lin = new Map();
    const tmp = new THREE.Color();
    const linear = (hex) => {
      let v = lin.get(hex);
      if (!v) { tmp.setHex(hex); v = [tmp.r, tmp.g, tmp.b]; lin.set(hex, v); }
      return v;
    };
    let faces = 0;
    const ao = [0, 0, 0, 0];

    for (const [k, val] of this.m) {
      const z = (k % 1024) - 512;
      const t = Math.floor(k / 1024);
      const y = (t % 2048) - OFF_Y;
      const x = Math.floor(t / 2048) - 512;
      const glow = (val & GLOW) !== 0;
      const rgb = linear(val & 0xffffff);
      const jitter = glow ? 1 : 0.94 + 0.12 * hash(x, y, z);
      const o = out[glow ? 1 : 0];

      for (const d of DIRS) {
        const [nx, ny, nz] = d.n;
        if (this.has(x + nx, y + ny, z + nz)) continue;
        const [ux, uy, uz] = d.u, [vx, vy, vz] = d.v;
        for (let i = 0; i < 4; i++) {
          const [su, sv] = CORNERS[i];
          const bx = x + nx, by = y + ny, bz = z + nz;
          const s1 = this.has(bx + su * ux, by + su * uy, bz + su * uz) ? 1 : 0;
          const s2 = this.has(bx + sv * vx, by + sv * vy, bz + sv * vz) ? 1 : 0;
          const cr = this.has(bx + su * ux + sv * vx, by + su * uy + sv * vy, bz + su * uz + sv * vz) ? 1 : 0;
          ao[i] = glow ? 3 : (s1 && s2) ? 0 : 3 - (s1 + s2 + cr);
        }
        const order = ao[0] + ao[2] > ao[1] + ao[3] ? [1, 2, 3, 1, 3, 0] : [0, 1, 2, 0, 2, 3];
        for (const i of order) {
          const [su, sv] = CORNERS[i];
          o.p.push(
            x + 0.5 + 0.5 * (nx + su * ux + sv * vx),
            y + 0.5 + 0.5 * (ny + su * uy + sv * vy),
            z + 0.5 + 0.5 * (nz + su * uz + sv * vz),
          );
          o.n.push(nx, ny, nz);
          const b = AO[ao[i]] * jitter;
          o.c.push(rgb[0] * b, rgb[1] * b, rgb[2] * b);
        }
        faces++;
      }
    }

    const mk = (o) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(o.p, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(o.n, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(o.c, 3));
      g.computeBoundingSphere();
      return g;
    };
    return { solid: mk(out[0]), glow: mk(out[1]), voxels: this.m.size, faces };
  }
}
