// Generic single-storey hall: platform + columns + walls + brackets + roof.
import { M } from '../voxel/palette.js';
import { buildRoof, rectEdges, gableEdges, rectVerts } from './roofs.js';
import { ROOF } from './styles.js';
import { slab, column, bracketRing, facade, lantern, fengling } from './parts.js';

/**
 * Paint the four wall lines of a rectangular hall body.
 * Lines: front z=zFront, back z=z0+inB, left x=x0+inS, right x=x1-inS.  Kinds per bay:
 * front/back follow xs, left/right follow zs (back -> front).
 */
export function paintWalls(b, xs, zs, x0, x1, z0, zFront, inB, inS, yA, yB, kinds, fo = {}) {
  facade(b, xs, zFront, yA, yB, kinds.front, fo);
  const bn = b.child(0, 0, 0, 'N');
  facade(bn, xs.map((v) => -v).reverse(), -(z0 + inB), yA, yB, kinds.back.slice().reverse(), fo);
  // side walls run from the back row to the front wall line
  const cols = zs.filter((z) => z <= zFront);
  if (cols[cols.length - 1] < zFront) cols.push(zFront);
  const nb = cols.length - 1;
  const kr = kinds.right.slice(0, nb);
  const kl = kinds.left.slice(0, nb);
  while (kr.length < nb) kr.push('wall');
  while (kl.length < nb) kl.push('wall');
  const be = b.child(0, 0, 0, 'E');
  facade(be, cols.map((v) => -v).reverse(), x1 - inS, yA, yB, kr.slice().reverse(), fo);
  const bw = b.child(0, 0, 0, 'W');
  facade(bw, cols, -(x0 + inS), yA, yB, kl, fo);
}

/**
 * spec:
 *   xs, zs       column lines (ascending, symmetric about 0)
 *   plat         platform height in layers (0 = none)
 *   margin       {s, b, f}: platform margin at sides/back/front
 *   colH         column height
 *   front/back/left/right : bay kinds arrays (left/right run along z)
 *   frontInset   front wall recess behind the front column row (0 = flush)
 *   roof         { type: 'xieshan'|'hip'|'gable'|'hard', scheme, ov, rise, lift, p, gable, thick }
 *   inner        place interior columns on every grid crossing
 *   lanterns     hang palace lanterns along the front
 * returns metrics used by callers.
 */
export function buildHall(b, s) {
  const xs = s.xs;
  const zs = s.zs;
  const x0 = xs[0];
  const x1 = xs[xs.length - 1];
  const z0 = zs[0];
  const z1 = zs[zs.length - 1];
  const plat = s.plat ?? 0;
  const mg = { s: 3, b: 3, f: 4, ...(s.margin ?? {}) };
  const colH = s.colH ?? 9;
  const fi = s.frontInset ?? 0;
  const yF = plat; // floor level (first free layer)

  // ---- platform -----------------------------------------------------------
  if (plat > 0) {
    slab(b, x0 - mg.s, x1 + mg.s, z0 - mg.b, z1 + mg.f, 0, plat, s.platStyle);
    b.box(x0 - mg.s + 1, plat - 1, z0 - mg.b + 1, x1 + mg.s - 1, plat - 1, z1 + mg.f - 1, s.apron ?? M.MARBLE);
    b.box(x0, plat - 1, z0, x1, plat - 1, z1, s.floor ?? M.STONE2);
  }

  // ---- columns ------------------------------------------------------------
  const colOpt = { color: s.colColor ?? M.RED };
  for (const x of xs) {
    column(b, x, z0, yF, colH, colOpt);
    column(b, x, z1, yF, colH, colOpt);
  }
  for (const z of zs) {
    column(b, x0, z, yF, colH, colOpt);
    column(b, x1, z, yF, colH, colOpt);
  }
  if (s.inner) for (const x of xs) for (const z of zs) column(b, x, z, yF, colH, colOpt);

  // ---- walls --------------------------------------------------------------
  const yw0 = yF;
  const yw1 = yF + colH - 1;
  const fo = s.wallOpt ?? {};
  const kinds = {
    front: s.front ?? [],
    back: s.back ?? [],
    left: s.left ?? [],
    right: s.right ?? [],
  };
  // walls sit one voxel behind the column line so the pillars stand proud of the wall
  const inF = fi || 1;
  const zFront = z1 - inF;
  paintWalls(b, xs, zs, x0, x1, z0, zFront, 1, 1, yw0, yw1, kinds, fo);

  // ---- beams & brackets ---------------------------------------------------
  const yBeam = yF + colH;
  bracketRing(b, x0, x1, z0, z1, yBeam, xs, zs, s.brackets);
  const ceilY = yBeam + 3;

  // ---- roof ---------------------------------------------------------------
  const r = s.roof;
  const ov = r.ov ?? 6;
  const cx = 0;
  const cz = (z0 + z1) >> 1;
  const rb = b.child(cx, 0, cz);
  const A = x1 + (r.type === 'hard' ? 0 : r.type === 'gable' ? (r.ovx ?? 2) : ov);
  const B = (z1 - z0) / 2 + ov;
  const colors = ROOF[r.scheme ?? 'green'];
  const rise = r.rise ?? Math.round(B * 0.75);
  let edges;
  if (r.type === 'xieshan') edges = rectEdges(A, B, { x: ov + (r.gable ?? 3) });
  else if (r.type === 'hip') edges = rectEdges(A, B);
  else edges = gableEdges(B);
  const roofInfo = buildRoof(rb, {
    A,
    B,
    edges,
    verts: rectVerts(A, B),
    y0: ceilY - 1,
    H: rise,
    rhoMax: B,
    p: r.p ?? 1.55,
    curl: r.curl ?? [2, 3],
    lift: r.lift ?? { L: r.type === 'hard' ? 0 : 3, T: 11 },
    thick: r.thick ?? 2,
    ceilY,
    wallRho: ov,
    plateRho: ov - 2.5,
    gableAt: r.type === 'xieshan' || r.type === 'gable' || r.type === 'hard' ? true : undefined,
    endGable: r.type === 'gable' || r.type === 'hard',
    beasts: r.beasts ?? true,
    chiwen: r.chiwen ?? true,
    hipW: r.hipW ?? 0.75,
    colors: r.type === 'hard' ? { ...colors, gable: M.BRICK, gableTrim: M.BRICK2 } : colors,
  });

  // ---- ornaments ----------------------------------------------------------
  if (s.lanterns) {
    const ly = yF + colH - 6;
    for (let i = 0; i < xs.length - 1; i++) {
      const cxm = Math.round((xs[i] + xs[i + 1]) / 2);
      lantern(b, cxm, ly, z1 + 1, true);
    }
  }
  if (s.bells ?? true) {
    // wind-bells hanging from the four eave corners
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const t = roofInfo.topAt(sx * A, sz * B);
      if (t > -30000) fengling(rb, sx * A, t - 3, sz * B);
    }
  }

  return { x0, x1, z0, z1, yF, yBeam, ceilY, roofTop: roofInfo.ridgeTop, A, B, cz, roofInfo };
}
