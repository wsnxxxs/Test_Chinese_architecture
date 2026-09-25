// Dense voxel grid + "Brush": a transformed (translate + 90° rotation) painting cursor
// so every building can be authored in its own local coordinates (+z = front).

export class VoxelGrid {
  constructor(sx, sy, sz) {
    this.sx = sx;
    this.sy = sy;
    this.sz = sz;
    this.data = new Uint8Array(sx * sy * sz);
  }

  inside(x, y, z) {
    return x >= 0 && x < this.sx && y >= 0 && y < this.sy && z >= 0 && z < this.sz;
  }

  index(x, y, z) {
    return x + this.sx * (z + this.sz * y);
  }

  get(x, y, z) {
    if (x < 0 || x >= this.sx || y < 0 || y >= this.sy || z < 0 || z >= this.sz) return 0;
    return this.data[x + this.sx * (z + this.sz * y)];
  }

  set(x, y, z, id) {
    if (id === undefined || id === null) return;
    if (x < 0 || x >= this.sx || y < 0 || y >= this.sy || z < 0 || z >= this.sz) return;
    this.data[x + this.sx * (z + this.sz * y)] = id;
  }

  /** Inclusive box fill (corner order irrelevant). */
  box(x0, y0, z0, x1, y1, z1, id) {
    if (id === undefined || id === null) return;
    if (x0 > x1) [x0, x1] = [x1, x0];
    if (y0 > y1) [y0, y1] = [y1, y0];
    if (z0 > z1) [z0, z1] = [z1, z0];
    x0 = Math.max(x0, 0);
    y0 = Math.max(y0, 0);
    z0 = Math.max(z0, 0);
    x1 = Math.min(x1, this.sx - 1);
    y1 = Math.min(y1, this.sy - 1);
    z1 = Math.min(z1, this.sz - 1);
    const { sx, sz, data } = this;
    for (let y = y0; y <= y1; y++) {
      for (let z = z0; z <= z1; z++) {
        const row = sx * (z + sz * y);
        for (let x = x0; x <= x1; x++) data[row + x] = id;
      }
    }
  }

  /** Height of the highest solid voxel in a column, or -1. */
  top(x, z) {
    for (let y = this.sy - 1; y >= 0; y--) if (this.data[x + this.sx * (z + this.sz * y)]) return y;
    return -1;
  }

  countSolid() {
    let n = 0;
    const d = this.data;
    for (let i = 0; i < d.length; i++) if (d[i]) n++;
    return n;
  }
}

// Rotation matrices [a, b, c, d]: world = (a*lx + b*lz, c*lx + d*lz)
// "facing" = world direction that the local +z (front) points to.
export const FACING = {
  S: [1, 0, 0, 1], // front toward +z (south)
  E: [0, 1, -1, 0], // front toward +x (east)
  N: [-1, 0, 0, -1], // front toward -z (north)
  W: [0, -1, 1, 0], // front toward -x (west)
};

export class Brush {
  constructor(grid, ox = 0, oy = 0, oz = 0, m = FACING.S) {
    this.grid = grid;
    this.ox = ox;
    this.oy = oy;
    this.oz = oz;
    this.a = m[0];
    this.b = m[1];
    this.c = m[2];
    this.d = m[3];
  }

  /** New brush whose origin is (lx,ly,lz) in this brush's local space, rotated by `facing`. */
  child(lx = 0, ly = 0, lz = 0, facing = 'S') {
    const r = FACING[facing];
    const { a, b, c, d } = this;
    return new Brush(this.grid, this.ox + a * lx + b * lz, this.oy + ly, this.oz + c * lx + d * lz, [
      a * r[0] + b * r[2],
      a * r[1] + b * r[3],
      c * r[0] + d * r[2],
      c * r[1] + d * r[3],
    ]);
  }

  wx(lx, lz) {
    return this.ox + this.a * lx + this.b * lz;
  }
  wz(lx, lz) {
    return this.oz + this.c * lx + this.d * lz;
  }

  /** local -> grid coordinates [x, y, z] */
  pos(lx, ly, lz) {
    return [this.wx(lx, lz), this.oy + ly, this.wz(lx, lz)];
  }

  set(lx, ly, lz, id) {
    this.grid.set(this.ox + this.a * lx + this.b * lz, this.oy + ly, this.oz + this.c * lx + this.d * lz, id);
  }

  get(lx, ly, lz) {
    return this.grid.get(this.ox + this.a * lx + this.b * lz, this.oy + ly, this.oz + this.c * lx + this.d * lz);
  }

  /** Inclusive local box. */
  box(x0, y0, z0, x1, y1, z1, id) {
    const ax = this.ox + this.a * x0 + this.b * z0;
    const az = this.oz + this.c * x0 + this.d * z0;
    const bx = this.ox + this.a * x1 + this.b * z1;
    const bz = this.oz + this.c * x1 + this.d * z1;
    this.grid.box(ax, this.oy + y0, az, bx, this.oy + y1, bz, id);
  }

  /** Box filled by fn(x,y,z) -> id (undefined/null skips, 0 carves). */
  boxFn(x0, y0, z0, x1, y1, z1, fn) {
    if (x0 > x1) [x0, x1] = [x1, x0];
    if (y0 > y1) [y0, y1] = [y1, y0];
    if (z0 > z1) [z0, z1] = [z1, z0];
    for (let y = y0; y <= y1; y++)
      for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) this.set(x, y, z, fn(x, y, z));
  }

  /** Filled vertical cylinder around (cx,cz) with radius r. */
  cyl(cx, cz, r, y0, y1, id) {
    const rr = (r + 0.35) * (r + 0.35);
    const R = Math.ceil(r + 1);
    for (let z = -R; z <= R; z++)
      for (let x = -R; x <= R; x++) {
        if (x * x + z * z <= rr) for (let y = y0; y <= y1; y++) this.set(cx + x, y, cz + z, id);
      }
  }

  /** Ellipsoid; fn(x,y,z,dist) can override / drop voxels. */
  ball(cx, cy, cz, rx, ry, rz, id, fn) {
    const X = Math.ceil(rx);
    const Y = Math.ceil(ry);
    const Z = Math.ceil(rz);
    for (let y = -Y; y <= Y; y++)
      for (let z = -Z; z <= Z; z++)
        for (let x = -X; x <= X; x++) {
          const d = (x * x) / (rx * rx + 0.01) + (y * y) / (ry * ry + 0.01) + (z * z) / (rz * rz + 0.01);
          if (d <= 1) {
            const v = fn ? fn(cx + x, cy + y, cz + z, d) : id;
            this.set(cx + x, cy + y, cz + z, v === undefined ? id : v);
          }
        }
  }

  /**
   * Stamp an ASCII model. layers[y][row][col]; row 0 = back (-z), col 0 = -x.
   * '.' or ' ' = untouched. The model is centred on (lx, lz) and rests on ly.
   */
  model(lx, ly, lz, layers, legend) {
    const h = layers.length;
    let w = 0;
    let dpt = 0;
    for (const L of layers) {
      dpt = Math.max(dpt, L.length);
      for (const row of L) w = Math.max(w, row.length);
    }
    const cx = Math.floor((w - 1) / 2);
    const cz = Math.floor((dpt - 1) / 2);
    for (let y = 0; y < h; y++) {
      const L = layers[y];
      for (let z = 0; z < L.length; z++) {
        const row = L[z];
        for (let x = 0; x < row.length; x++) {
          const ch = row[x];
          if (ch === '.' || ch === ' ') continue;
          const id = legend[ch];
          if (id === undefined) continue;
          this.set(lx + x - cx, ly + y, lz + z - cz, id);
        }
      }
    }
  }
}
