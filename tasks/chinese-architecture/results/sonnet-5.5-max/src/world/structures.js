// Compound structures: perimeter walls, moon gates, corridors, terrace balustrades, corner towers,
// the memorial archway (牌坊) and the arched bridge.
import { M } from '../voxel/palette.js';
import { XC } from './layout.js';
import { buildRoof, rectEdges, rectVerts } from './roofs.js';
import { ROOF } from './styles.js';
import { column, lantern } from './parts.js';
import { plaque } from './mainHall.js';
import { buildPavilion } from './buildings.js';

// ---------------------------------------------------------------------------
// walls
// ---------------------------------------------------------------------------

/**
 * One wall column at grid (x, z): `hc` = base level of the wall (top face of the local ground),
 * `hg` = the terrain top face of this exact column (the wall reaches down to it).
 */
function wallColumn(grid, x, z, hc, hg, o) {
  const red = o.red ?? 5;
  const yTopRed = hc + 1 + red;
  for (let y = Math.min(hg, hc); y <= yTopRed; y++) {
    let id;
    if (y <= hc) id = M.STONE_D;
    else if (y === hc + 1) id = M.STONE;
    else if (y === yTopRed) id = M.RED_D;
    else id = M.RED;
    grid.set(x, y, z, id);
  }
}

/** tile cap over a wall column: eave layer (wide) + ridge layer (narrow) */
function wallCap(grid, x, z, hc, o, wide, axis) {
  const y0 = hc + 2 + (o.red ?? 5);
  // eave layer
  for (let d = -wide; d <= wide; d++) {
    const px = axis === 'z' ? x + d : x;
    const pz = axis === 'z' ? z : z + d;
    const edge = Math.abs(d) === wide;
    grid.set(px, y0, pz, edge ? M.T3 : ((x + z) & 1) === 0 ? M.T1 : M.T2);
  }
  for (let d = -(wide - 2); d <= wide - 2; d++) {
    const px = axis === 'z' ? x + d : x;
    const pz = axis === 'z' ? z : z + d;
    grid.set(px, y0 + 1, pz, Math.abs(d) === wide - 2 ? M.T2 : M.T3);
  }
}

/**
 * Wall along z (constant x = XC+u) between z0..z1, or along x (constant z) between u0..u1.
 * thickness 3.
 */
export function wallRun(grid, maps, o) {
  const { H, idx } = maps;
  const th = 1; // half thickness (total 3)
  if (o.axis === 'z') {
    const x0 = XC + o.u;
    for (let z = o.z0; z <= o.z1; z++) {
      const hc = o.base ?? H[idx(x0, z)];
      for (let d = -th; d <= th; d++) wallColumn(grid, x0 + d, z, hc, H[idx(x0 + d, z)], o);
      wallCap(grid, x0, z, hc, o, 2, 'z');
    }
  } else {
    const z0 = o.z;
    for (let u = o.u0; u <= o.u1; u++) {
      const x = XC + u;
      const hc = o.base ?? H[idx(x, z0)];
      for (let d = -th; d <= th; d++) wallColumn(grid, x, z0 + d, hc, H[idx(x, z0 + d)], o);
      wallCap(grid, x, z0, hc, o, 2, 'x');
    }
  }
}

/** Circular "moon gate" carved through a wall running along x (passage along z). */
export function moonGate(grid, cx, zc, yFloor, r = 3.6) {
  const yc = yFloor + r - 0.4;
  const R = Math.ceil(r + 2);
  for (let dz = -3; dz <= 3; dz++)
    for (let dy = -R; dy <= R; dy++)
      for (let dx = -R; dx <= R; dx++) {
        const d = Math.hypot(dx, dy - (yc - Math.round(yc)));
        const y = Math.round(yc) + dy;
        if (y < yFloor) continue;
        if (d <= r) grid.set(cx + dx, y, zc + dz, 0);
        else if (d <= r + 1.25 && Math.abs(dz) <= 2) grid.set(cx + dx, y, zc + dz, M.MARBLE);
      }
  // threshold
  for (let dz = -3; dz <= 3; dz++) for (let dx = -Math.floor(r); dx <= Math.floor(r); dx++) grid.set(cx + dx, yFloor - 1, zc + dz, M.SLAB1);
}

// ---------------------------------------------------------------------------
// corridor (回廊): lean-to roof along a wall.  Local frame: +x along the corridor,
// +z = open side (courtyard); the wall is at local z = -4.
// ---------------------------------------------------------------------------
export function buildCorridor(b, half, o = {}) {
  const colH = 5;
  const step = 6;
  const zc = 4; // front column line
  // floor
  b.box(-half, -1, -5, half, -1, 6, M.STONE2);
  for (let x = -half; x <= half; x++) if ((x & 3) === 0) b.box(x, -1, -5, x, -1, 6, M.STONE_D);
  // columns
  const cols = [];
  for (let x = -half; x <= half; x += step) cols.push(x);
  if (cols[cols.length - 1] !== half) cols.push(half);
  for (const x of cols) column(b, x, zc, 0, colH, { base: M.STONE });
  // beam
  for (let x = -half; x <= half; x++) {
    b.set(x, colH, zc, M.BLUE);
    b.set(x, colH, zc + 1, M.RED_D);
    if (((x + 60) % 3) === 0) b.set(x, colH, zc + 1, M.GOLD);
  }
  for (const x of cols) {
    b.set(x, colH, zc + 1, M.GREEN);
    b.set(x, colH + 1, zc + 1, M.GREEN);
  }
  // lean-to roof
  const rb = b.child(0, 0, 1);
  const A = half + 2;
  const B = 6;
  buildRoof(rb, {
    A,
    B,
    edges: [
      { nx: 0, nz: 1, c: B, limit: Infinity },
      { nx: 0, nz: -1, c: B, limit: -1 },
      { nx: 1, nz: 0, c: A, limit: -1 },
      { nx: -1, nz: 0, c: A, limit: -1 },
    ],
    verts: [],
    y0: colH + 1,
    H: 3.2,
    rhoMax: 11,
    p: 1.5,
    curl: [1, 2],
    lift: { L: 0, T: 6 },
    thick: 2,
    ceilY: colH + 1,
    wallRho: 4,
    plateRho: 2,
    ridgeH: 1,
    hipW: 0,
    colors: { ...ROOF.gray, trim: M.T2 },
  });
  // little lanterns every second column
  for (let i = 0; i < cols.length; i += 2) lantern(b, cols[i], 1, zc + 2, false);
}

// ---------------------------------------------------------------------------
// corner tower (角楼): brick block on the wall corner topped with a small pavilion
// ---------------------------------------------------------------------------
export function buildCornerTower(b, baseTop) {
  // b sits at ground level (y = local ground) ; block from ground to baseTop
  const h = 5;
  for (let y = 0; y <= baseTop; y++)
    for (let z = -h; z <= h; z++)
      for (let x = -h; x <= h; x++) {
        const edge = Math.abs(x) === h || Math.abs(z) === h;
        b.set(x, y, z, y === 0 ? M.STONE_D : y === baseTop ? M.MARBLE : edge ? (((x + z + y) & 3) === 0 ? M.BRICK2 : M.BRICK) : M.BRICK);
      }
  const p = b.child(0, baseTop + 1, 0);
  buildPavilion(p, { half: 3, colH: 7, ov: 4, plat: 1, rise: 8, scheme: 'green', rails: true });
}

// ---------------------------------------------------------------------------
// 牌坊 – ceremonial archway
// ---------------------------------------------------------------------------
export function buildPaifang(b) {
  const colX = [-16, -8, 8, 16];
  const hC = 14; // column height (centre pair)
  const hS = 11; // side pair
  // stone drum bases and columns (3x3 wooden columns)
  colX.forEach((x, i) => {
    const h = Math.abs(x) === 8 ? hC : hS;
    b.box(x - 2, 0, -2, x + 2, 1, 2, M.MARBLE2);
    b.box(x - 2, 1, -2, x + 2, 1, 2, M.MARBLE);
    b.box(x - 1, 2, -1, x + 1, 2 + h, 1, M.RED);
    b.box(x - 1, 2 + h + 1, -1, x + 1, 2 + h + 1, 1, M.GOLD_D);
    // back struts
    b.box(x, 2, -4, x, 5, -4, M.RED_D);
    b.box(x, 2, -3, x, 2, -3, M.RED_D);
  });
  // beams
  const paintBeam = (x0, x1, y, h) => {
    for (let x = x0; x <= x1; x++)
      for (let yy = y; yy < y + h; yy++)
        for (let z = -1; z <= 1; z++) {
          const c = yy === y + h - 1 ? M.BLUE_D : ((x + yy) & 3) === 0 ? M.GOLD : yy === y ? M.GREEN : M.BLUE;
          b.set(x, yy, z, c);
        }
  };
  paintBeam(-8, 8, 2 + hC - 4, 4); // centre upper beam
  paintBeam(-17, 17, 2 + hS - 3, 3); // long lower beam
  paintBeam(-17, -9, 2 + hS - 7, 2);
  paintBeam(9, 17, 2 + hS - 7, 2);
  // brackets under roofs
  for (const x of [-16, -8, 0, 8, 16]) {
    const y = x === 0 || Math.abs(x) === 8 ? 2 + hC + 2 : 2 + hS + 2;
    b.box(x - 1, y, -2, x + 1, y, 2, M.GREEN);
    b.box(x - 1, y + 1, -2, x + 1, y + 1, 2, M.BLUE);
  }
  // plaque
  plaque(b, 0, 2 + hC - 5, 2, 13, 5, 4, 41);
  // roofs: centre higher
  const roofAt = (cx, y0, A, B, H) => {
    const rb = b.child(cx, 0, 0);
    buildRoof(rb, {
      A, B,
      edges: rectEdges(A, B),
      verts: rectVerts(A, B),
      y0,
      H,
      rhoMax: B,
      p: 1.5,
      curl: [1.5, 2.5],
      lift: { L: 2, T: 6 },
      thick: 2,
      ceilY: y0 + 1,
      wallRho: 2.5,
      plateRho: 0,
      beasts: false,
      chiwen: false,
      hipW: 0.8,
      colors: ROOF.green,
    });
  };
  roofAt(0, 2 + hC + 4, 12, 5, 5);
  roofAt(-12, 2 + hS + 4, 7, 5, 4);
  roofAt(12, 2 + hS + 4, 7, 5, 4);
  // lanterns
  for (const x of [-12, 0, 12]) lantern(b, x, 2 + hS - 12, 2, true);
}

// ---------------------------------------------------------------------------
// arched bridge over the pond
// ---------------------------------------------------------------------------
export function buildBridge(grid, cxg, zc, halfLen, rise, waterY, bedY) {
  const halfW = 4;
  const deckH = (dz) => 8 + Math.round(rise * (1 - (dz / halfLen) ** 2));
  const archR = halfLen * 0.62;
  const archH = rise - 1;
  for (let dz = -halfLen; dz <= halfLen; dz++) {
    const z = zc + dz;
    const yd = deckH(dz);
    for (let dx = -halfW; dx <= halfW; dx++) {
      const x = cxg + dx;
      // solid body from bed to deck, minus the arch opening
      for (let y = bedY - 1; y <= yd; y++) {
        const ay = y - waterY + 0.5;
        const inArch = (dz / archR) ** 2 + (ay / archH) ** 2 <= 1 && y >= bedY && y < yd - 1;
        if (inArch) {
          grid.set(x, y, z, 0);
          continue;
        }
        let id = M.STONE;
        if (y === yd) id = Math.abs(dx) <= 1 ? M.SLAB1 : Math.abs(dx) === halfW ? M.MARBLE : M.SLAB2;
        else if (y === yd - 1) id = ((dz + dx) & 1) === 0 ? M.STONE2 : M.STONE;
        else id = ((dz + y) & 1) === 0 ? M.STONE2 : M.STONE_D;
        grid.set(x, y, z, id);
      }
    }
    // balustrades
    for (const dx of [-halfW, halfW]) {
      const x = cxg + dx;
      const post = (dz + halfLen) % 4 === 0;
      grid.set(x, yd + 1, z, M.MARBLE);
      grid.set(x, yd + 3, z, M.MARBLE);
      if ((dz & 1) === 0) grid.set(x, yd + 2, z, M.MARBLE);
      if (post) {
        grid.set(x, yd + 2, z, M.MARBLE);
        grid.set(x, yd + 4, z, M.MARBLE2);
      }
    }
  }
}
