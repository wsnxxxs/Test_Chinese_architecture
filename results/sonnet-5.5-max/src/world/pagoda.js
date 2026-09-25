// Octagonal multi-storey pagoda (楼阁式塔) with upturned eaves, red corner pillars,
// lit windows and a gilded finial (塔刹).
import { M } from '../voxel/palette.js';
import { buildRoof, octEdges, octVerts } from './roofs.js';
import { ROOF } from './styles.js';
import { inOct, fillOct, stairsZ } from './parts.js';

export function buildPagoda(b, o = {}) {
  const scheme = ROOF[o.scheme ?? 'brown'];
  const tiers = o.tiers ?? 7;
  // inradius of each tier's body, wall band height
  const radii = o.radii ?? [8, 8, 7, 7, 6, 6, 5];
  const bands = o.bands ?? [7, 6, 6, 5, 5, 5, 5];
  const ov = 4;
  const body = o.body ?? M.TAN;

  // ---- base: two-tier octagonal 须弥座 ---------------------------------------
  const rb = radii[0] + 6;
  fillOct(b, rb, 0, 0, M.STONE_D);
  fillOct(b, rb, 1, 1, M.MARBLE2);
  fillOct(b, rb, 2, 2, M.MARBLE);
  fillOct(b, rb - 2, 3, 3, M.MARBLE2);
  fillOct(b, rb - 2, 4, 4, M.MARBLE);
  fillOct(b, rb - 3, 4, 4, M.SLAB1);
  // waist pattern
  for (let z = -rb; z <= rb; z++)
    for (let x = -rb; x <= rb; x++) {
      if (inOct(x, z, rb) && !inOct(x, z, rb - 1) && (((x + z) >> 1) & 1) === 0) b.set(x, 1, z, M.STONE);
    }
  // stairs on the four cardinal sides
  stairsZ(b, -2, 2, rb, 0, 3, { run: 2, ribbon: true });
  for (const f of ['N', 'E', 'W']) stairsZ(b.child(0, 0, 0, f), -2, 2, rb, 0, 3, { run: 2, ribbon: true });
  // railing around the upper base
  const rr = rb - 3;
  for (let z = -rr; z <= rr; z++)
    for (let x = -rr; x <= rr; x++) {
      if (!inOct(x, z, rr) || inOct(x, z, rr - 1)) continue;
      if (Math.abs(x) <= 2 || Math.abs(z) <= 2) continue; // stair openings
      const post = ((x + z) & 3) === 0;
      b.set(x, 5, z, M.MARBLE);
      if (post) b.box(x, 6, z, x, 7, z, M.MARBLE);
      else b.set(x, 7, z, M.MARBLE2);
    }

  let y = 5;
  const anchors = { lamps: [] };
  for (let k = 0; k < tiers; k++) {
    const r = radii[k];
    const rNext = k < tiers - 1 ? radii[k + 1] : -1;
    const band = bands[k];
    const yTop = y + band - 1;

    // body
    fillOct(b, r, y, yTop, body);
    // brick courses
    for (let yy = y; yy <= yTop; yy++)
      for (let z = -r; z <= r; z++)
        for (let x = -r; x <= r; x++)
          if (inOct(x, z, r) && !inOct(x, z, r - 1)) {
            const id = yy === y ? M.TAN_D : yy === yTop ? M.RED_D : ((x + z + (yy & 1) * 2) & 3) === 0 ? M.TAN_D : body;
            b.set(x, yy, z, id);
          }
    // red corner pillars at octagon vertices
    for (const [vx, vz] of octVerts(r)) {
      const px = Math.round(vx);
      const pz = Math.round(vz);
      // pull one voxel inside if needed so pillars sit on the shell
      let qx = px;
      let qz = pz;
      if (!inOct(qx, qz, r)) {
        qx -= Math.sign(qx);
        qz -= Math.sign(qz);
      }
      for (let yy = y + 1; yy < yTop; yy++) b.set(qx, yy, qz, M.RED);
    }
    // doors (lower tier) / lit window niches (upper tiers) on the four cardinal faces
    const doorTop = Math.min(yTop - 1, y + 4);
    for (const [fx, fz, ax] of [[r, 0, 'z'], [-r, 0, 'z'], [0, r, 'x'], [0, -r, 'x']]) {
      for (let d = -1; d <= 1; d++) {
        const px = ax === 'z' ? fx : d;
        const pz = ax === 'z' ? d : fz;
        for (let yy = y + 1; yy <= doorTop; yy++) {
          const lintel = yy === doorTop;
          b.set(px, yy, pz, lintel ? M.RED_D : k === 0 ? M.BLACK : M.WINDOW);
        }
      }
    }
    // lit window slits on the diagonal faces
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) {
        for (let a = 1; a <= r; a++)
          for (let c = 1; c <= r; c++) {
            if (Math.abs(a - c) > 1 || !inOct(a, c, r) || inOct(a, c, r - 1)) continue;
            for (let yy = y + 2; yy <= Math.min(yTop - 2, y + 3); yy++) b.set(sx * a, yy, sz * c, M.WINDOW);
          }
      }
    // blue-green bracket band right under the eaves
    for (let z = -r; z <= r; z++)
      for (let x = -r; x <= r; x++)
        if (inOct(x, z, r) && !inOct(x, z, r - 1)) b.set(x, yTop, z, (x + z) & 1 ? M.BLUE : M.GREEN);

    // eave roof ring / final pyramid
    const R = r + ov;
    const y0 = yTop - 1;
    let rho = ov;
    if (rNext > 0) rho = R - rNext;
    const last = k === tiers - 1;
    const spec = {
      A: R, B: R,
      edges: octEdges(R),
      verts: octVerts(R),
      y0,
      H: last ? 8 : 4.5,
      rhoMax: last ? R : rho + 1.2,
      p: 1.4,
      curl: [1.6, 2.5],
      lift: { L: 2.4, T: 6 },
      thick: 2,
      ceilY: yTop + 1,
      wallRho: last ? ov : Infinity,
      plateRho: last ? ov - 2 : Infinity,
      skip: rNext > 0 ? (x, z) => inOct(x, z, rNext) : undefined,
      beasts: false,
      hipW: 0.9,
      ridgeH: 1,
      colors: scheme,
      finial: last ? { layers: FINIAL } : undefined,
    };
    const roof = buildRoof(b, spec);
    // next body starts under the inner edge of this roof
    if (!last) {
      const innerTop = Math.round(y0 + spec.H * Math.pow(Math.min(rho, spec.rhoMax) / spec.rhoMax, spec.p));
      // fill the gap between this body's top and the roof inner edge
      fillOct(b, rNext, yTop + 1, innerTop, body);
      y = innerTop;
      anchors.lamps.push(b.pos(0, yTop - 2, r));
    } else {
      anchors.top = roof.ridgeTop + FINIAL.length;
    }
  }
  return { anchors, height: y + 22 };
}

// 塔刹: lotus base, gourd, stacked rings, spire
const FINIAL = [
  [2, M.GOLD_D],
  [1, M.GOLD],
  [1, M.GOLD_L],
  [0, M.GOLD],
  [1, M.GOLD],
  [0, M.GOLD_L],
  [1, M.GOLD],
  [0, M.GOLD_L],
  [1, M.GOLD_D],
  [0, M.GOLD],
  [1, M.GOLD_L],
  [0, M.GOLD],
  [0, M.GOLD_L],
  [0, M.GOLD],
  [0, M.GOLD_L],
  [0, M.GOLD],
];
