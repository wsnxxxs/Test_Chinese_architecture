/**
 * VoxelBuilder — DOM-free, Three.js-free voxel accumulator.
 *
 * The whole building complex is authored as integer voxel coordinates on a 1x1x1 grid.
 * Cells are stored in a Map keyed by "x,y,z" so that later writes overwrite earlier ones
 * (which lets roofs be carved after walls are placed, etc.). The renderer later turns the
 * grouped cells into one THREE.InstancedMesh per palette key.
 */
import { PALETTE, styleOf } from './palette.js';

const keyOf = (x, y, z) => x + ',' + y + ',' + z;

export class VoxelBuilder {
  constructor() {
    /** @type {Map<string, {x:number,y:number,z:number,k:string}>} */
    this.cells = new Map();
  }

  get size() {
    return this.cells.size;
  }

  /** Place one voxel. Coordinates must be integers (voxel grid). */
  set(x, y, z, k) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(z)) {
      throw new Error(`Voxel coordinates must be integers, got (${x}, ${y}, ${z})`);
    }
    if (!PALETTE[k]) throw new Error(`Unknown palette key: ${k}`);
    this.cells.set(keyOf(x, y, z), { x, y, z, k });
    return this;
  }

  /** Read a key back (undefined when empty). */
  get(x, y, z) {
    const c = this.cells.get(keyOf(x, y, z));
    return c ? c.k : undefined;
  }

  has(x, y, z) {
    return this.cells.has(keyOf(x, y, z));
  }

  remove(x, y, z) {
    this.cells.delete(keyOf(x, y, z));
    return this;
  }

  /** Inclusive axis-aligned solid box. */
  box(x0, y0, z0, x1, y1, z1, k) {
    const [ax, bx] = x0 <= x1 ? [x0, x1] : [x1, x0];
    const [ay, by] = y0 <= y1 ? [y0, y1] : [y1, y0];
    const [az, bz] = z0 <= z1 ? [z0, z1] : [z1, z0];
    for (let x = ax; x <= bx; x++)
      for (let y = ay; y <= by; y++)
        for (let z = az; z <= bz; z++) this.set(x, y, z, k);
    return this;
  }

  /** Remove every voxel in an inclusive box. */
  clearBox(x0, y0, z0, x1, y1, z1) {
    const [ax, bx] = x0 <= x1 ? [x0, x1] : [x1, x0];
    const [ay, by] = y0 <= y1 ? [y0, y1] : [y1, y0];
    const [az, bz] = z0 <= z1 ? [z0, z1] : [z1, z0];
    for (let x = ax; x <= bx; x++)
      for (let y = ay; y <= by; y++)
        for (let z = az; z <= bz; z++) this.cells.delete(keyOf(x, y, z));
    return this;
  }

  /** Hollow shell: 4 side walls only (no top / bottom). */
  walls(x0, y0, z0, x1, y1, z1, k) {
    const [ax, bx] = x0 <= x1 ? [x0, x1] : [x1, x0];
    const [ay, by] = y0 <= y1 ? [y0, y1] : [y1, y0];
    const [az, bz] = z0 <= z1 ? [z0, z1] : [z1, z0];
    for (let y = ay; y <= by; y++) {
      for (let x = ax; x <= bx; x++) { this.set(x, y, az, k); this.set(x, y, bz, k); }
      for (let z = az; z <= bz; z++) { this.set(ax, y, z, k); this.set(bx, y, z, k); }
    }
    return this;
  }

  /** Flat rectangle at height y (inclusive). */
  rect(y, x0, z0, x1, z1, k) {
    const [ax, bx] = x0 <= x1 ? [x0, x1] : [x1, x0];
    const [az, bz] = z0 <= z1 ? [z0, z1] : [z1, z0];
    for (let x = ax; x <= bx; x++) for (let z = az; z <= bz; z++) this.set(x, y, z, k);
    return this;
  }

  /** Flat rectangle *outline* of given thickness at height y. */
  rectRing(y, x0, z0, x1, z1, k, thickness = 1) {
    const [ax, bx] = x0 <= x1 ? [x0, x1] : [x1, x0];
    const [az, bz] = z0 <= z1 ? [z0, z1] : [z1, z0];
    for (let x = ax; x <= bx; x++) {
      for (let t = 0; t < thickness; t++) {
        this.set(x, y, az + t, k);
        this.set(x, y, bz - t, k);
      }
    }
    for (let z = az; z <= bz; z++) {
      for (let t = 0; t < thickness; t++) {
        this.set(ax + t, y, z, k);
        this.set(bx - t, y, z, k);
      }
    }
    return this;
  }

  /** Vertical column of voxels. */
  column(x, z, y0, y1, k) {
    const [ay, by] = y0 <= y1 ? [y0, y1] : [y1, y0];
    for (let y = ay; y <= by; y++) this.set(x, y, z, k);
    return this;
  }

  /** Copy every voxel of `other` into this builder, offset by (dx,dy,dz). */
  stamp(other, dx = 0, dy = 0, dz = 0) {
    for (const c of other.cells.values()) this.set(c.x + dx, c.y + dy, c.z + dz, c.k);
    return this;
  }

  /** Group cells by palette key -> { key, style, positions: Float64Array-ish array }. */
  byKey() {
    /** @type {Map<string, {key:string, style:string, count:number, xs:number[], ys:number[], zs:number[]}>} */
    const groups = new Map();
    for (const c of this.cells.values()) {
      let g = groups.get(c.k);
      if (!g) {
        g = { key: c.k, style: styleOf(c.k), count: 0, xs: [], ys: [], zs: [] };
        groups.set(c.k, g);
      }
      g.xs.push(c.x); g.ys.push(c.y); g.zs.push(c.z);
      g.count++;
    }
    return groups;
  }

  /** Inclusive integer bounding box of all voxels. */
  bounds() {
    if (this.cells.size === 0) return { xMin: 0, xMax: 0, yMin: 0, yMax: 0, zMin: 0, zMax: 0 };
    let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, zMin = Infinity, zMax = -Infinity;
    for (const c of this.cells.values()) {
      if (c.x < xMin) xMin = c.x; if (c.x > xMax) xMax = c.x;
      if (c.y < yMin) yMin = c.y; if (c.y > yMax) yMax = c.y;
      if (c.z < zMin) zMin = c.z; if (c.z > zMax) zMax = c.z;
    }
    return { xMin, xMax, yMin, yMax, zMin, zMax };
  }

  /**
   * Exact mirror test across the x = 0 plane.
   * Returns { total, missing, extra, sample } — `missing` counts voxels whose mirror
   * image (same y,z, negated x) does not exist.
   */
  symmetryReport() {
    let missing = 0;
    const sample = [];
    for (const c of this.cells.values()) {
      if (!this.cells.has(keyOf(-c.x, c.y, c.z))) {
        missing++;
        if (sample.length < 12) sample.push({ x: c.x, y: c.y, z: c.z, k: c.k });
      }
    }
    return { total: this.cells.size, missing, sample };
  }

  /** Same as symmetryReport but also requires the mirrored voxel to share the palette key. */
  colorSymmetryReport() {
    let missing = 0;
    let mismatched = 0;
    const sample = [];
    for (const c of this.cells.values()) {
      const m = this.cells.get(keyOf(-c.x, c.y, c.z));
      if (!m) {
        missing++;
        if (sample.length < 12) sample.push({ x: c.x, y: c.y, z: c.z, k: c.k, why: 'missing' });
      } else if (m.k !== c.k) {
        mismatched++;
        if (sample.length < 12) sample.push({ x: c.x, y: c.y, z: c.z, k: c.k, mirror: m.k, why: 'key' });
      }
    }
    return { total: this.cells.size, missing, mismatched, sample };
  }
}

export { keyOf as voxelKey };
