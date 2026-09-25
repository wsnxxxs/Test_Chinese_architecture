// The secondary buildings: gate, hall of heavenly kings, side halls, bell/drum towers,
// pavilions and the sutra pavilion.
import { M } from '../voxel/palette.js';
import { buildHall } from './hall.js';
import { buildDoubleEave } from './doubleEave.js';
import { buildRoof, rectEdges, rectVerts, octEdges, octVerts } from './roofs.js';
import { ROOF } from './styles.js';
import {
  slab, stairsZ, railX, railZ, column, bracketRing, lantern, fengling, woodRailX, woodRailZ, forSides,
  fillOct, octShell,
} from './parts.js';
import { stoneLion, bell, drum, stoneLamp, censer, stele } from './props.js';
import { plaque } from './mainHall.js';

// ---------------------------------------------------------------------------
// 山门 – the Mountain Gate
// ---------------------------------------------------------------------------
export function buildGate(b) {
  const xs = [-15, -6, 6, 15];
  const zs = [-8, 0, 8];
  const info = buildHall(b, {
    xs,
    zs,
    plat: 2,
    margin: { s: 4, b: 3, f: 4 },
    colH: 10,
    front: ['wall', 'open', 'wall'],
    back: ['wall', 'open', 'wall'],
    left: ['wall', 'wall'],
    right: ['wall', 'wall'],
    roof: { type: 'xieshan', scheme: 'green', ov: 6, rise: 12, gable: 3 },
    inner: true,
    lanterns: true,
    wallOpt: { wall: M.RED },
  });
  const yF = info.yF;
  // side chambers: paint the front/back of the flank bays with lattice windows
  // open door leaves (gold studded) standing against the passage sides
  for (const sx of [-5, 5]) {
    for (let y = yF; y < yF + 8; y++)
      for (let z = -2; z <= 2; z++) {
        const edge = z === -2 || z === 2 || y === yF + 7;
        const stud = !edge && ((z + 2) & 1) === 1 && ((y - yF) & 1) === 1;
        b.set(sx, y, z, edge ? M.RED_D : stud ? M.GOLD : M.RED);
      }
  }
  // gilded plaque hanging across the top of the passage (front & back)
  plaque(b, 0, yF + 7, info.z1 - 1, 9, 3, 2, 5);
  plaque(b.child(0, 0, 0, 'N'), 0, yF + 7, -info.z0 - 1, 9, 3, 2, 6);
  // stairs (single step) and lions
  stairsZ(b, -5, 5, info.z1 + 4, 0, 2, { run: 3, ramp: [-1, 1] });
  stoneLion(b, -10, 0, info.z1 + 9, 'S', { body: M.LION });
  stoneLion(b, 10, 0, info.z1 + 9, 'S', { body: M.LION });
  return { info };
}

// ---------------------------------------------------------------------------
// 天王殿 – Hall of the Heavenly Kings (through-hall between courtyards)
// ---------------------------------------------------------------------------
export function buildTianwang(b) {
  const xs = [-21, -13, -5, 5, 13, 21];
  const zs = [-7, 0, 7];
  const info = buildHall(b, {
    xs,
    zs,
    plat: 3,
    margin: { s: 3, b: 3, f: 4 },
    colH: 10,
    front: ['window', 'door', 'open', 'door', 'window'],
    back: ['window', 'door', 'open', 'door', 'window'],
    left: ['wall', 'wall'],
    right: ['wall', 'wall'],
    roof: { type: 'xieshan', scheme: 'green', ov: 6, rise: 13, gable: 3 },
    inner: true,
    lanterns: true,
  });
  plaque(b, 0, info.yF + 7, info.z1 - 1, 9, 3, 2, 9);
  plaque(b.child(0, 0, 0, 'N'), 0, info.yF + 7, -info.z0 - 1, 9, 3, 2, 10);
  stairsZ(b, -6, 6, info.z1 + 4, 0, 3, { run: 2, ramp: [-1, 1] });
  railX(b, -24, -8, info.z1 + 4, 3);
  railX(b, 8, 24, info.z1 + 4, 3);
  railZ(b, -24, info.z0 - 3, info.z1 + 4, 3);
  railZ(b, 24, info.z0 - 3, info.z1 + 4, 3);
  railX(b, -24, 24, info.z0 - 3, 3);
  // interior: a laughing Buddha altar
  const yF = info.yF;
  b.box(-3, yF, -1, 3, yF + 1, 2, M.RED_D);
  b.box(-2, yF + 2, 0, 2, yF + 4, 1, M.BUDDHA);
  b.box(-1, yF + 5, 0, 1, yF + 6, 1, M.SKIN);
  return { info };
}

// ---------------------------------------------------------------------------
// 配殿 – side halls.  Local front (+z) faces the courtyard axis.
// ---------------------------------------------------------------------------
export function buildSideHall(b, o = {}) {
  const type = o.roofType ?? 'gable';
  const info = buildHall(b, {
    xs: [-9, -3, 3, 9],
    zs: [-4, 4],
    plat: 2,
    margin: { s: 2, b: 2, f: 3 },
    colH: 8,
    front: ['window', 'door', 'window'],
    back: ['wall', 'wall', 'wall'],
    left: ['wall'],
    right: ['wall'],
    roof: {
      type,
      scheme: o.scheme ?? 'gray',
      ov: 4,
      ovx: 2,
      rise: o.rise ?? 8,
      gable: 2,
      lift: { L: type === 'hard' ? 0 : 2, T: 8 },
    },
    lanterns: false,
    inner: false,
    brackets: { ext: 1 },
  });
  // three small lanterns
  const ly = info.yF + 2;
  for (const x of [-6, 0, 6]) lantern(b, x, ly, info.z1 + 1, false);
  stairsZ(b, -2, 2, info.z1 + 3, 0, 2, { run: 2 });
  return { info };
}

// ---------------------------------------------------------------------------
// 钟楼 / 鼓楼 – two-storey towers: brick podium with an arched passage, open pavilion above
// ---------------------------------------------------------------------------
export function buildTower(b, kind = 'bell') {
  const anchors = {};
  const H = 11; // podium half size
  const PH = 8; // podium height
  // podium body
  for (let y = 0; y < PH - 2; y++) {
    for (let z = -H; z <= H; z++)
      for (let x = -H; x <= H; x++) {
        const edge = Math.abs(x) === H || Math.abs(z) === H;
        if (!edge && y > 0) continue;
        let id;
        if (y === 0) id = M.STONE_D;
        else id = ((x + (y & 1) * 2 + z) & 3) === 0 ? M.BRICK2 : M.BRICK;
        b.set(x, y, z, id);
      }
  }
  b.box(-H + 1, 0, -H + 1, H - 1, PH - 3, H - 1, M.BRICK); // solid core
  // cornice + top
  b.box(-H - 1, PH - 2, -H - 1, H + 1, PH - 2, H + 1, M.MARBLE2);
  b.box(-H - 1, PH - 1, -H - 1, H + 1, PH - 1, H + 1, M.MARBLE);
  // arched passage through the podium along z
  for (let z = -H - 1; z <= H + 1; z++) {
    for (let y = 1; y <= 5; y++) {
      const half = y <= 3 ? 2 : y === 4 ? 2 : 1;
      for (let x = -half; x <= half; x++) b.set(x, y, z, 0);
    }
    b.set(-3, 1, z, M.STONE);
    b.set(3, 1, z, M.STONE);
  }
  // stone frame around the arch openings
  for (const z of [-H, H]) {
    for (let y = 1; y <= 5; y++) {
      const half = y <= 4 ? 3 : 2;
      b.set(-half, y, z, M.MARBLE);
      b.set(half, y, z, M.MARBLE);
    }
    b.set(-2, 5, z, M.MARBLE);
    b.set(2, 5, z, M.MARBLE);
  }
  // parapet railing around the podium top
  const yT = PH; // first free layer
  railX(b, -H, H, -H, yT);
  railX(b, -H, H, H, yT);
  railZ(b, -H, -H, H, yT);
  railZ(b, H, -H, H, yT);

  // upper pavilion
  const xs = [-9, -3, 3, 9];
  const zs = [-9, -3, 3, 9];
  const colH = 9;
  for (const x of xs) {
    column(b, x, -9, yT, colH);
    column(b, x, 9, yT, colH);
  }
  for (const z of zs) {
    column(b, -9, z, yT, colH);
    column(b, 9, z, yT, colH);
  }
  // low wooden balustrades between the columns
  for (let i = 0; i < 3; i++) {
    const a = xs[i] + 1;
    const c = xs[i + 1] - 1;
    woodRailX(b, a, c, 9, yT + 1);
    woodRailX(b, a, c, -9, yT + 1);
    woodRailZ(b, 9, a, c, yT + 1);
    woodRailZ(b, -9, a, c, yT + 1);
  }
  const yB = yT + colH;
  bracketRing(b, -9, 9, -9, 9, yB, xs, zs);
  const ceilY = yB + 3;
  const ov = 6;
  const A = 9 + ov;
  buildRoof(b, {
    A, B: A,
    edges: rectEdges(A, A, { x: ov + 3 }),
    verts: rectVerts(A, A),
    y0: ceilY - 1,
    H: 12,
    rhoMax: A,
    p: 1.55,
    curl: [2, 3],
    lift: { L: 3, T: 11 },
    thick: 2,
    ceilY,
    wallRho: ov,
    plateRho: ov - 2.5,
    gableAt: true,
    beasts: true,
    chiwen: true,
    colors: ROOF.green,
  });
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) fengling(b, sx * A, ceilY - 1 + 1, sz * A);

  // the instrument itself
  if (kind === 'bell') {
    // beam and hanging bell
    b.box(-9, yB - 1, 0, 9, yB - 1, 0, M.WOOD_D);
    bell(b, 0, yT + 2, 0);
    anchors.bell = b.pos(0, yT + 6, 0);
  } else {
    drum(b, 0, yT, 0);
    anchors.drum = b.pos(0, yT + 4, 0);
  }
  // corner lanterns
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) lantern(b, sx * 10, yB - 6, sz * 10, true);
  return { anchors, top: ceilY + 12 };
}

// ---------------------------------------------------------------------------
// 亭 – square pyramid-roofed pavilion (攒尖顶)
// ---------------------------------------------------------------------------
export function buildPavilion(b, o = {}) {
  const half = o.half ?? 4;
  const colH = o.colH ?? 8;
  const ov = o.ov ?? 5;
  const plat = o.plat ?? 2;
  const A = half + ov;
  slab(b, -half - 2, half + 2, -half - 2, half + 2, 0, plat);
  b.box(-half - 1, plat - 1, -half - 1, half + 1, plat - 1, half + 1, M.MARBLE);
  const cols = [-half, half];
  for (const x of cols) for (const z of cols) column(b, x, z, plat, colH);
  // low bench rails
  if (o.rails ?? true) {
    woodRailX(b, -half + 1, half - 1, -half, plat + 1);
    woodRailZ(b, -half, -half + 1, half - 1, plat + 1);
    woodRailZ(b, half, -half + 1, half - 1, plat + 1);
    if (!(o.openFront ?? false)) woodRailX(b, -half + 1, half - 1, half, plat + 1);
  }
  const yB = plat + colH;
  bracketRing(b, -half, half, -half, half, yB, cols, cols);
  const ceilY = yB + 3;
  const r = buildRoof(b, {
    A, B: A,
    edges: rectEdges(A, A),
    verts: rectVerts(A, A),
    y0: ceilY - 1,
    H: o.rise ?? 9,
    rhoMax: A,
    p: 1.5,
    curl: [2, 3],
    lift: { L: o.lift ?? 3, T: 9 },
    thick: 2,
    ceilY,
    wallRho: ov,
    plateRho: ov - 2.5,
    beasts: true,
    hipW: 0.8,
    colors: ROOF[o.scheme ?? 'green'],
    finial: { layers: undefined },
  });
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const t = r.topAt(sx * A, sz * A);
    if (t > -30000) fengling(b, sx * A, t - 3, sz * A);
  }
  return { top: ceilY + (o.rise ?? 9) + 9 };
}

// ---------------------------------------------------------------------------
// 八角亭 – octagonal pavilion with a pyramid roof and gilded finial
// ---------------------------------------------------------------------------
export function buildOctPavilion(b, o = {}) {
  const r = o.r ?? 7; // inradius of the column ring
  const colH = o.colH ?? 8;
  const ov = o.ov ?? 4;
  const plat = 2;
  const R = r + ov;
  fillOct(b, r + 3, 0, 0, M.STONE_D);
  fillOct(b, r + 3, 1, 1, M.MARBLE);
  fillOct(b, r + 1, 1, 1, M.SLAB1);
  // columns at the octagon vertices
  const verts = octVerts(r).map(([x, z]) => [Math.round(x), Math.round(z)]);
  for (const [x, z] of verts) column(b, x, z, plat, colH);
  // low benches between the columns (open on the south side)
  const ring = octShell(r, 1);
  for (const [x, z] of ring) {
    const gate = z > 0 && Math.abs(x) <= 2;
    if (gate) continue;
    b.set(x, plat, z, M.RED);
    if (((x + z) & 1) === 0) b.set(x, plat + 1, z, M.RED);
    b.set(x, plat + 2, z, M.RED_D);
  }
  // beam ring
  const yB = plat + colH;
  for (const [x, z] of ring) {
    b.set(x, yB, z, ((x + z) & 3) < 2 ? M.BLUE : M.GREEN);
    b.set(x, yB + 1, z, M.GREEN);
    b.set(x, yB + 2, z, M.BLUE_D);
  }
  const ceilY = yB + 3;
  const scheme = ROOF[o.scheme ?? 'green'];
  const roof = buildRoof(b, {
    A: R, B: R,
    edges: octEdges(R),
    verts: octVerts(R),
    y0: ceilY - 1,
    H: o.rise ?? 9,
    rhoMax: R,
    p: 1.5,
    curl: [2, 3],
    lift: { L: 3, T: 8 },
    thick: 2,
    ceilY,
    wallRho: ov,
    plateRho: ov - 2.5,
    hipW: 0.9,
    ridgeH: 1,
    colors: scheme,
    finial: { layers: undefined },
  });
  for (const [vx, vz] of octVerts(R)) {
    const x = Math.round(vx);
    const z = Math.round(vz);
    const t = roof.topAt(x, z);
    if (t > -30000) fengling(b, x, t - 3, z);
  }
  return { top: ceilY + (o.rise ?? 9) + 10 };
}

// ---------------------------------------------------------------------------
// 碑亭 – a small square kiosk sheltering a stone tablet
// ---------------------------------------------------------------------------
export function buildSteleKiosk(b, o = {}) {
  const info = buildPavilion(b, { half: 4, colH: 8, ov: 4, plat: 2, rise: 8, scheme: o.scheme ?? 'gray', rails: false });
  stele(b, 0, 2, 0, 'S');
  return info;
}

// ---------------------------------------------------------------------------
// 藏经阁 – two-storey sutra pavilion, double-eave hip-and-gable roof
// ---------------------------------------------------------------------------
export function buildSutra(b) {
  const info = buildDoubleEave(b, {
    xsO: [-21, -13, -5, 5, 13, 21],
    zsO: [-12, -4, 4, 12],
    xsI: [-13, -5, 5, 13],
    zsI: [-4, 4],
    tiers: [
      { h: 3, mx: 5, mzB: 5, mzF: 5 },
      { h: 2, mx: 3, mzB: 3, mzF: 3 },
    ],
    colH1: 9,
    upperH: 5,
    lower: {
      front: ['window', 'door', 'window'],
      back: ['wall', 'wall', 'wall'],
      left: ['wall'],
      right: ['wall'],
    },
    skirt: { scheme: 'green', ov: 5, rise: 6, L: 3, T: 10 },
    upper: { type: 'xieshan', scheme: 'green', ov: 8, rise: 12, gable: 4, L: 4, T: 12, ridgeH: 1, hipW: 0.75 },
    lanterns: true,
    interior(bb, i) {
      const yF = i.yF;
      // book shelves along the back wall
      for (let x = -11; x <= 11; x++) {
        if (Math.abs(x) < 2) continue;
        bb.box(x, yF, -3, x, yF + 6, -3, ((x + 20) & 1) === 0 ? M.WOOD_D : M.WOOD);
        bb.set(x, yF + 1, -2, M.GOLD_D);
        bb.set(x, yF + 3, -2, M.BLUE);
        bb.set(x, yF + 5, -2, M.RED_L);
      }
    },
  });
  plaque(b, 0, info.ySkirtTop + 2, info.z1I - 1, 11, 4, 3, 21);
  stairsZ(b, -6, 6, info.z1O + 5, 0, 3, { run: 2, ramp: [-1, 1] });
  railX(b, -26, -8, info.z1O + 5, 3);
  railX(b, 8, 26, info.z1O + 5, 3);
  railZ(b, -26, info.z0O - 5, info.z1O + 5, 3);
  railZ(b, 26, info.z0O - 5, info.z1O + 5, 3);
  railX(b, -26, 26, info.z0O - 5, 3);
  return { info };
}
