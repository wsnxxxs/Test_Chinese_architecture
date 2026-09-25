// Double-eaved hall (重檐): outer colonnade ("gallery") + inner body, a lower skirt roof and a
// large upper roof.  Used for the Main Hall (hip roof, imperial yellow) and the Sutra Pavilion.
import { M } from '../voxel/palette.js';
import { buildRoof, rectEdges, rectVerts, roofProfile } from './roofs.js';
import { ROOF } from './styles.js';
import { slab, column, bracketRing, lantern, fengling } from './parts.js';
import { paintWalls } from './hall.js';

const fillKinds = (kind, n) => Array.from({ length: n }, () => kind);

/**
 * s: {
 *   xsO, zsO, xsI, zsI        outer colonnade / inner body column lines (symmetric)
 *   tiers: [{h, mx, mzB, mzF}] platform tiers (bottom first), margins relative to the outer ring
 *   colH1, upperH             lower column height, height of the upper wall band
 *   lower: {front, back, left, right}  bay kinds for the lower body walls
 *   upperKind                 'band' etc for the upper wall band
 *   skirt: {scheme, ov, rise, p, L, T}
 *   upper: {type, scheme, ov, rise, gable, L, T}
 *   floor                     floor colour id
 *   interior(b, info)         callback for altar/statues
 *   lanterns                  hang lanterns along the front gallery
 * }
 */
export function buildDoubleEave(b, s) {
  const { xsO, zsO, xsI, zsI } = s;
  const x0O = xsO[0], x1O = xsO[xsO.length - 1], z0O = zsO[0], z1O = zsO[zsO.length - 1];
  const x0I = xsI[0], x1I = xsI[xsI.length - 1], z0I = zsI[0], z1I = zsI[zsI.length - 1];

  // ---- platform ----------------------------------------------------------
  let yF = 0;
  for (const t of s.tiers) {
    slab(b, x0O - t.mx, x1O + t.mx, z0O - t.mzB, z1O + t.mzF, yF, t.h, s.platStyle);
    yF += t.h;
  }
  const top = s.tiers[s.tiers.length - 1];
  b.box(x0O - top.mx + 1, yF - 1, z0O - top.mzB + 1, x1O + top.mx - 1, yF - 1, z1O + top.mzF - 1, M.MARBLE);
  b.box(x0O, yF - 1, z0O, x1O, yF - 1, z1O, s.floorOuter ?? M.STONE2); // gallery floor
  b.box(x0I, yF - 1, z0I, x1I, yF - 1, z1I, s.floor ?? M.STONE_D); // hall floor

  // ---- levels --------------------------------------------------------------
  const colH1 = s.colH1;
  const yB1 = yF + colH1; // outer architrave
  const ceilY1 = yB1 + 3;

  // skirt roof geometry (needed early to know where the upper wall band starts)
  const sk = s.skirt;
  const A1 = x1O + sk.ov;
  const B1 = z1O + sk.ov;
  const rInX = A1 - x1I;
  const rInZ = B1 - z1I;
  const rIn = Math.max(rInX, rInZ);
  const skSpec = { y0: ceilY1 - 1, H: sk.rise, rhoMax: rIn + 1.5, p: sk.p ?? 1.5, curl: sk.curl ?? [2, 3] };
  const ySkirtIn = Math.round(roofProfile(skSpec, rIn));
  const ySkirtTop = ySkirtIn + 1;
  const yU1 = ySkirtTop + s.upperH; // top of upper wall band
  const yB2 = yU1 + 1; // upper architrave
  const ceilY2 = yB2 + 3;

  // ---- columns -------------------------------------------------------------
  const colOpt = { color: s.colColor ?? M.RED };
  for (const x of xsO) {
    column(b, x, z0O, yF, colH1, colOpt);
    column(b, x, z1O, yF, colH1, colOpt);
  }
  for (const z of zsO) {
    column(b, x0O, z, yF, colH1, colOpt);
    column(b, x1O, z, yF, colH1, colOpt);
  }
  // through-columns of the inner body
  const tall = ceilY2 - yF;
  for (const x of xsI) {
    for (const z of zsI) {
      const ring = x === x0I || x === x1I || z === z0I || z === z1I;
      column(b, x, z, yF, ring ? yU1 - yF + 1 : tall, colOpt);
    }
  }

  // ---- walls ---------------------------------------------------------------
  const nx = xsI.length - 1;
  const nz = zsI.length - 1;
  const lower = s.lower;
  paintWalls(b, xsI, zsI, x0I, x1I, z0I, z1I - 1, 1, 1, yF, yF + colH1 - 1, lower, s.wallOpt);
  const plain = { front: fillKinds('plain', nx), back: fillKinds('plain', nx), left: fillKinds('plain', nz), right: fillKinds('plain', nz) };
  paintWalls(b, xsI, zsI, x0I, x1I, z0I, z1I - 1, 1, 1, yF + colH1, ySkirtTop, plain, s.wallOpt);
  const band = { front: fillKinds(s.upperKind ?? 'band', nx), back: fillKinds(s.upperKind ?? 'band', nx), left: fillKinds(s.upperKind ?? 'band', nz), right: fillKinds(s.upperKind ?? 'band', nz) };
  paintWalls(b, xsI, zsI, x0I, x1I, z0I, z1I - 1, 1, 1, ySkirtTop + 1, yU1, band, s.wallOpt);

  // ---- brackets --------------------------------------------------------------
  bracketRing(b, x0O, x1O, z0O, z1O, yB1, xsO, zsO, s.brackets);
  bracketRing(b, x0I, x1I, z0I, z1I, yB2, xsI, zsI, s.brackets);

  // ---- roofs -----------------------------------------------------------------
  const skColors = ROOF[sk.scheme];
  const skRoof = buildRoof(b, {
    A: A1,
    B: B1,
    edges: rectEdges(A1, B1),
    verts: rectVerts(A1, B1),
    y0: skSpec.y0,
    H: skSpec.H,
    rhoMax: skSpec.rhoMax,
    p: skSpec.p,
    curl: skSpec.curl,
    lift: { L: sk.L ?? 3, T: sk.T ?? 11 },
    thick: 2,
    ceilY: ceilY1,
    skip: (x, z) => Math.abs(x) <= x1I && Math.abs(z) <= z1I,
    beasts: true,
    hipW: 0.75,
    colors: skColors,
  });

  const up = s.upper;
  const A2 = x1I + up.ov;
  const B2 = z1I + up.ov;
  let edges2;
  if (up.type === 'xieshan') edges2 = rectEdges(A2, B2, { x: up.ov + (up.gable ?? 3) });
  else edges2 = rectEdges(A2, B2);
  const upColors = ROOF[up.scheme];
  const upRoof = buildRoof(b, {
    A: A2,
    B: B2,
    edges: edges2,
    verts: rectVerts(A2, B2),
    y0: ceilY2 - 1,
    H: up.rise,
    rhoMax: B2,
    p: up.p ?? 1.6,
    curl: up.curl ?? [2, 3],
    lift: { L: up.L ?? 4, T: up.T ?? 13 },
    thick: 2,
    ceilY: ceilY2,
    wallRho: up.ov,
    plateRho: up.ov - 2.5,
    gableAt: up.type === 'xieshan' ? true : undefined,
    beasts: true,
    chiwen: true,
    hipW: up.hipW ?? 1.1,
    ridgeH: up.ridgeH ?? 2,
    colors: upColors,
  });

  // wind bells
  for (const [sx, sz, r, A, B] of [
    [1, 1, skRoof, A1, B1], [-1, 1, skRoof, A1, B1], [1, -1, skRoof, A1, B1], [-1, -1, skRoof, A1, B1],
    [1, 1, upRoof, A2, B2], [-1, 1, upRoof, A2, B2], [1, -1, upRoof, A2, B2], [-1, -1, upRoof, A2, B2],
  ]) {
    const t = r.topAt(sx * A, sz * B);
    if (t > -30000) fengling(b, sx * A, t - 3, sz * B);
  }

  // ---- gallery lanterns ------------------------------------------------------
  if (s.lanterns) {
    const ly = yF + colH1 - 6;
    for (let i = 0; i < xsO.length - 1; i++) lantern(b, Math.round((xsO[i] + xsO[i + 1]) / 2), ly, z1O + 1, true);
    for (const x of [x0O, x1O]) {
      for (let i = 0; i < zsO.length - 1; i++) {
        const zz = Math.round((zsO[i] + zsO[i + 1]) / 2);
        lantern(b, x + (x > 0 ? 1 : -1), ly, zz, true);
      }
    }
  }

  const info = {
    yF, yB1, ceilY1, ySkirtTop, yU1, yB2, ceilY2,
    x0O, x1O, z0O, z1O, x0I, x1I, z0I, z1I,
    roofTop: upRoof.ridgeTop, A1, B1, A2, B2,
  };
  if (s.interior) s.interior(b, info);
  return info;
}
