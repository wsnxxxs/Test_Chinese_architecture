/**
 * Building generators (DOM-free, Three.js-free).
 *
 * Everything is expressed in integer voxel coordinates on a 1x1x1 grid:
 *   y = 0        ground surface
 *   y = 1..P     台基 (platform)
 *   y = P+1..    墙身 (walls)
 *   ...          斗拱 -> 屋檐 -> 正脊 -> 吻兽
 *
 * Each builder returns a record describing the structure (id, category, footprint,
 * total height, entrance cell) which layout.js aggregates and test/verify.mjs asserts on.
 */
import { hipRoof, pyramidRoof } from './roofs.js';
import { columnRing, dougongBand, doorway, incenseBurner, lantern, latticeWindow, plaque, railing, stairs, stoneLion, tree } from './parts.js';

/** 台基: solid top slab + a shell of side walls (cheap, and reads as solid stone). */
function platformBlock(b, { x0, z0, x1, z1, yTop, key = 'stone', edgeKey = 'stoneDark' }) {
  if (yTop < 1) return;
  b.rect(yTop, x0, z0, x1, z1, key);
  b.rectRing(yTop, x0, z0, x1, z1, edgeKey, 1);
  for (let y = 1; y < yTop; y++) b.rectRing(y, x0, z0, x1, z1, key, 1);
}

/** 围墙 with a 青瓦 cap. The cap ridge spans the full thickness so the wall stays
 *  exactly mirror-symmetric about the site axis for both 2-wide and 1-wide walls. */
export function buildWall(b, { x0, z0, x1, z1, height = 9, key = 'wallRed', baseKey = 'stoneDark', capKey = 'tileGrey', capDimKey = 'tileGreyDim' } = {}) {
  const yTop = height;
  b.box(x0, 1, z0, x1, yTop, z1, key);
  b.box(x0, 1, z0, x1, 2, z1, baseKey);
  // tiled cap: one voxel wider on each side, with a slight ridge
  b.box(x0 - 1, yTop + 1, z0 - 1, x1 + 1, yTop + 1, z1 + 1, capKey);
  b.box(x0 - 1, yTop + 2, z0 - 1, x1 + 1, yTop + 2, z1 + 1, capDimKey);
  if (x1 - x0 > z1 - z0) {
    for (let x = x0 - 1; x <= x1 + 1; x++) for (let z = z0; z <= z1; z++) b.set(x, yTop + 3, z, capDimKey);
  } else {
    for (let z = z0 - 1; z <= z1 + 1; z++) for (let x = x0; x <= x1; x++) b.set(x, yTop + 3, z, capDimKey);
  }
  return { yTop: yTop + 3 };
}

/**
 * 殿 — a generic hall. Covers 主殿 (庑殿重檐), 配殿 (歇山单檐) and 山门 (歇山三开间).
 */
export function buildHall(b, {
  id, name, cx, cz, hx, hz,
  platform = 3,
  wallHeight = 10,
  wallThickness = 1,
  wallKey = 'wallRed',
  baseKey = 'stone',
  baseEdgeKey = 'stoneDark',
  columnKey = 'wallRed',
  tileKey = 'tileGold', tileDimKey = 'tileGoldDim', edgeKey = 'tileGoldDim', ridgeKey = 'ridgeGold',
  roof = 'hip',                 // 'hip' (庑殿) | 'gable' (歇山)
  doubleEave = false,
  overhang = 3,
  entranceAxis = 'z',           // 'z' -> door on the +z face; 'x' -> door on an x face
  entranceSide = -1,            // for entranceAxis 'x': -1 => x0 face, +1 => x1 face
  doors = 1,
  doorHeight = 5,
  windows = 4,
  lanterns = true,
  plaqueText = false,
  railingOn = false,
  stairSide = 'entrance',
} = {}) {
  const wx0 = cx - hx, wx1 = cx + hx;
  const wz0 = cz - hz, wz1 = cz + hz;
  const px0 = wx0 - 2, px1 = wx1 + 2;
  const pz0 = wz0 - 2, pz1 = wz1 + 2;
  const floorY = platform;                 // top voxel of the platform
  const wallY0 = floorY + 1;
  const wallY1 = floorY + wallHeight;

  platformBlock(b, { x0: px0, z0: pz0, x1: px1, z1: pz1, yTop: platform, key: baseKey, edgeKey: baseEdgeKey });
  if (railingOn && platform >= 2) {
    railing(b, { x0: px0, z0: pz0, x1: px1, z1: pz1, y: platform + 1 });
  }

  // ---- walls -------------------------------------------------------------
  for (let y = wallY0; y <= wallY1; y++) {
    b.rectRing(y, wx0, wz0, wx1, wz1, wallKey, wallThickness);
  }
  b.rectRing(wallY0, wx0, wz0, wx1, wz1, 'brick', wallThickness);      // 墙裙
  b.rectRing(wallY0 + 1, wx0, wz0, wx1, wz1, 'brick', wallThickness);

  // ---- 立柱 --------------------------------------------------------------
  const inner = wallThickness - 1;
  columnRing(b, {
    x0: wx0, z0: wz0, x1: wx1, z1: wz1,
    y0: wallY0, y1: wallY1, key: columnKey, spacing: 4, baseKey: null,
  });

  // ---- 门窗 --------------------------------------------------------------
  const doorW = 3;
  const bay = doorW + 2;
  const faceZ = entranceAxis === 'z' ? wz1 : null;
  const faceX = entranceAxis === 'x' ? (entranceSide < 0 ? wx0 : wx1) : null;
  const doorCells = [];
  for (let i = 0; i < doors; i++) {
    const off = Math.round((i - (doors - 1) / 2) * bay);
    if (entranceAxis === 'z') {
      const from = cx + off - 1, to = cx + off + 1;
      doorway(b, { axis: 'z', wall: faceZ, from, to, y0: wallY0, y1: wallY0 + doorHeight - 1 });
      doorCells.push({ x: cx + off, z: faceZ });
      if (plaqueText && i === Math.floor(doors / 2)) {
        plaque(b, { axis: 'z', wall: faceZ, cx: cx + off, y: wallY0 + doorHeight + 1, halfWidth: 2 });
      }
    } else {
      const from = cz + off - 1, to = cz + off + 1;
      doorway(b, { axis: 'x', wall: faceX, from, to, y0: wallY0, y1: wallY0 + doorHeight - 1 });
      doorCells.push({ x: faceX, z: cz + off });
      if (plaqueText && i === Math.floor(doors / 2)) {
        plaque(b, { axis: 'x', wall: faceX, cx: cz + off, y: wallY0 + doorHeight + 1, halfWidth: 2 });
      }
    }
  }

  // windows: symmetric bays about the face centre (never `from + k*step`, which would
  // drift off-centre for odd footprints)
  const winY0 = wallY0 + 2;
  const winY1 = wallY0 + 2 + 3;
  const putWindows = (axis, wall, from, to) => {
    const centre = Math.round((from + to) / 2);
    const half = Math.floor((to - from) / 2);
    const used = [];
    for (let i = 1; i <= windows; i++) {
      const off = Math.round((half * i) / (windows + 1));
      if (off < 2) continue;
      if (used.some((u) => Math.abs(u - off) < 3)) continue;   // keep bays from merging
      used.push(off);
      for (const c of [centre - off, centre + off]) {
        if (c - 1 < from + 1 || c + 1 > to - 1) continue;
        latticeWindow(b, { axis, wall, from: c - 1, to: c + 1, y0: winY0, y1: winY1 });
      }
    }
  };
  if (entranceAxis === 'z') {
    putWindows('x', wx0, wz0, wz1);
    putWindows('x', wx1, wz0, wz1);
    putWindows('z', wz0, wx0, wx1);
  } else {
    putWindows('z', wz0, wx0, wx1);
    putWindows('z', wz1, wx0, wx1);
    const backX = entranceSide < 0 ? wx1 : wx0;
    putWindows('x', backX, wz0, wz1);
  }

  // ---- 斗拱 --------------------------------------------------------------
  const dgY = wallY1 + 1;
  dougongBand(b, {
    x0: wx0, z0: wz0, x1: wx1, z1: wz1, y: dgY,
    key: 'woodLight', armKey: 'wood', capKey: 'gold', step: 3, rows: 2,
  });

  // ---- 屋檐 --------------------------------------------------------------
  const roofY = dgY + 2;
  const ex = overhang, ez = overhang;
  let roofInfo;
  if (doubleEave) {
    // 下檐 (腰檐): a shallower skirt, three layers, no ridge
    hipRoof(b, {
      x0: wx0 - ex - 1, z0: wz0 - ez - 1, x1: wx1 + ex + 1, z1: wz1 + ez + 1,
      y: Math.round(wallY0 + wallHeight * 0.45),
      tileKey, tileDimKey, edgeKey, ridgeKey: null, underKey: 'woodDark',
      layersOverride: 3, finial: false,
    });
  }
  roofInfo = hipRoof(b, {
    x0: wx0 - ex, z0: wz0 - ez, x1: wx1 + ex, z1: wz1 + ez,
    y: roofY,
    tileKey, tileDimKey, edgeKey, ridgeKey, underKey: 'woodDark',
    gable: roof === 'gable', gableKey: 'plaster',
    finial: roof === 'pyramid',
  });

  // ---- 灯笼 --------------------------------------------------------------
  if (lanterns) {
    const ly = roofY - 3;
    if (entranceAxis === 'z') {
      for (const lx of new Set([cx - 3, cx + 3, cx - (hx - 2), cx + (hx - 2)])) {
        lantern(b, { x: lx, y: ly, z: wz1 + ez - 1 });
      }
    } else {
      const face = entranceSide < 0 ? wx0 : wx1;
      const lx = face + entranceSide * (ez - 1);
      for (const lz of new Set([cz - 4, cz + 4])) lantern(b, { x: lx, y: ly, z: lz });
    }
  }

  // ---- 台阶 --------------------------------------------------------------
  if (stairSide === 'entrance') {
    if (entranceAxis === 'z') {
      stairs(b, { axis: 'z', a0: cx - 4, a1: cx + 4, edge: pz1 + 1, dir: 1, yTop: platform + 1 });
    } else {
      const face = entranceSide < 0 ? px0 : px1;
      stairs(b, { axis: 'x', a0: cz - 4, a1: cz + 4, edge: face + entranceSide, dir: entranceSide, yTop: platform + 1 });
    }
  }

  const entrance = entranceAxis === 'z'
    ? { x: cx, z: pz1 + 1 }
    : { x: (entranceSide < 0 ? px0 : px1) + (entranceSide < 0 ? -1 : 1), z: cz };

  return {
    id, name, category: 'hall', cx, cz, hx, hz,
    footprint: { x0: px0, z0: pz0, x1: px1, z1: pz1 },
    height: (roofInfo.topY ?? roofY) + 3,
    roof: roof === 'gable' ? (doubleEave ? '重檐歇山顶' : '歇山顶') : (doubleEave ? '重檐庑殿顶' : '庑殿顶'),
    doors: doorCells.length, entrance, doorCells,
  };
}

/** 山门 — the three-bay gate on the central axis (doors on both faces, as in a real 山门). */
export function buildGate(b, { cx, cz, hx = 14, hz = 5, ...rest } = {}) {
  const rec = buildHall(b, {
    id: 'gate', name: '山门', cx, cz, hx, hz,
    platform: 2, wallHeight: 8, overhang: 3,
    tileKey: 'tileGold', tileDimKey: 'tileGoldDim', edgeKey: 'tileGoldDim', ridgeKey: 'ridgeGold',
    roof: 'gable', doors: 3, doorHeight: 5, windows: 0,
    plaqueText: true, lanterns: true,
    ...rest,
  });
  rec.category = 'gate';
  // rear (courtyard-side) doors, and the entrance cell used for the circulation test
  const wallY0 = 2 + 1;
  for (let i = -1; i <= 1; i++) {
    doorway(b, { axis: 'z', wall: cz - hz, from: cx + i * 5 - 1, to: cx + i * 5 + 1, y0: wallY0, y1: wallY0 + 4 });
  }
  rec.entrance = { x: cx, z: cz - hz - 3 };
  return rec;
}

/** 主殿 — the axial main hall: 重檐庑殿顶, 月台, 栏杆, 御路. */
export function buildMainHall(b, { cx = 0, cz = -22, hx = 20, hz = 11 } = {}) {
  const rec = buildHall(b, {
    id: 'mainHall', name: '主殿（大雄宝殿）', cx, cz, hx, hz,
    platform: 4, wallHeight: 12, wallThickness: 1, overhang: 4,
    tileKey: 'tileGold', tileDimKey: 'tileGoldDim', edgeKey: 'tileGoldDim', ridgeKey: 'ridgeGold',
    roof: 'hip', doubleEave: true, doors: 3, doorHeight: 6, windows: 6,
    plaqueText: true, lanterns: true, railingOn: true,
  });
  rec.category = 'mainHall';
  rec.monthPlatform = { x0: cx - hx - 2, z0: cz - hz - 2, x1: cx + hx + 2, z1: cz + hz + 2 };
  // 香炉 on the axis in front of the hall
  incenseBurner(b, { x: cx, y: 1, z: cz + hz + 8 });
  return rec;
}

/** 配殿 — side halls, 歇山顶. `entranceAxis` 'x' = door on the inward side face,
 *  'z' = door on the south (+z) face (used for the rear pair). */
export function buildSideHall(b, { cx, cz, hx = 7, hz = 14, side = -1, id, name, entranceAxis = 'x' } = {}) {
  const rec = buildHall(b, {
    id, name, cx, cz, hx, hz,
    platform: 2, wallHeight: 9, overhang: 3,
    tileKey: 'tileGreen', tileDimKey: 'tileGreenDim', edgeKey: 'tileGreenDim', ridgeKey: 'ridgeGreen',
    roof: 'gable', entranceAxis, entranceSide: side,
    doors: 1, doorHeight: 5, windows: 3, lanterns: true, plaqueText: true,
  });
  rec.category = 'sideHall';
  rec.side = side;
  return rec;
}

/** 钟楼 / 鼓楼 — a two-storey square tower under a 攒尖顶. */
export function buildTower(b, { cx, cz, hx = 7, hz = 7, side = -1, id, name, instrument = 'bell' } = {}) {
  const floorY = 2;
  platformBlock(b, { x0: cx - hx - 2, z0: cz - hz - 2, x1: cx + hx + 2, z1: cz + hz + 2, yTop: floorY });

  // ground storey: open colonnade with a walled core; the door faces the courtyard (-z)
  const s1y0 = floorY + 1, s1y1 = floorY + 9;
  for (let y = s1y0; y <= s1y1; y++) b.rectRing(y, cx - hx, cz - hz, cx + hx, cz + hz, 'wallRed', 1);
  doorway(b, { axis: 'z', wall: cz - hz, from: cx - 1, to: cx + 1, y0: s1y0, y1: s1y0 + 5 });
  doorway(b, { axis: 'z', wall: cz + hz, from: cx - 1, to: cx + 1, y0: s1y0, y1: s1y0 + 5 });
  latticeWindow(b, { axis: 'x', wall: cx - hx, from: cz - 2, to: cz + 2, y0: s1y0 + 2, y1: s1y0 + 4 });
  latticeWindow(b, { axis: 'x', wall: cx + hx, from: cz - 2, to: cz + 2, y0: s1y0 + 2, y1: s1y0 + 4 });
  columnRing(b, { x0: cx - hx, z0: cz - hz, x1: cx + hx, z1: cz + hz, y0: s1y0, y1: s1y1, key: 'wallRed', spacing: 4, baseKey: null });
  dougongBand(b, { x0: cx - hx, z0: cz - hz, x1: cx + hx, z1: cz + hz, y: s1y1 + 1, step: 3, rows: 2 });

  // 腰檐
  hipRoof(b, {
    x0: cx - hx - 3, z0: cz - hz - 3, x1: cx + hx + 3, z1: cz + hz + 3,
    y: s1y1 + 3, tileKey: 'tileGreen', tileDimKey: 'tileGreenDim', edgeKey: 'tileGreenDim',
    ridgeKey: null, underKey: 'woodDark', layersOverride: 3,
  });

  // upper storey
  const s2y0 = s1y1 + 7, s2y1 = s2y0 + 7;
  const uh = hx - 2;
  for (let y = s2y0; y <= s2y1; y++) b.rectRing(y, cx - uh, cz - uh, cx + uh, cz + uh, 'wallRed', 1);
  b.rect(s2y0 - 1, cx - uh - 1, cz - uh - 1, cx + uh + 1, cz + uh + 1, 'wood');
  for (const [wx, wz] of [[cx - uh, cz], [cx + uh, cz], [cx, cz - uh], [cx, cz + uh]]) {
    latticeWindow(b, {
      axis: wx === cx ? 'z' : 'x', wall: wx === cx ? wz : wx,
      from: (wx === cx ? cx : cz) - 2, to: (wx === cx ? cx : cz) + 2,
      y0: s2y0 + 2, y1: s2y0 + 4,
    });
  }
  columnRing(b, { x0: cx - uh, z0: cz - uh, x1: cx + uh, z1: cz + uh, y0: s2y0, y1: s2y1, key: 'wallRed', spacing: 4, baseKey: null });
  dougongBand(b, { x0: cx - uh, z0: cz - uh, x1: cx + uh, z1: cz + uh, y: s2y1 + 1, step: 3, rows: 2 });

  // 钟与鼓: both towers carry a bell and a drum, each centred on the tower axis, so the
  // west/east pair is an exact mirror image (verified by test/verify.mjs).
  b.box(cx - 1, s2y0 + 1, cz - 3, cx + 1, s2y0 + 4, cz - 1, 'bronze');
  b.rectRing(s2y0 + 4, cx - 1, cz - 3, cx + 1, cz - 1, 'gold');
  b.box(cx - 1, s2y0 + 2, cz + 1, cx + 1, s2y0 + 4, cz + 3, 'drumRed');
  b.rectRing(s2y0 + 3, cx - 1, cz + 1, cx + 1, cz + 3, 'woodDark');

  const info = pyramidRoof(b, {
    x0: cx - uh - 3, z0: cz - uh - 3, x1: cx + uh + 3, z1: cz + uh + 3,
    y: s2y1 + 3, tileKey: 'tileGreen', tileDimKey: 'tileGreenDim', edgeKey: 'tileGreenDim',
  });

  return {
    id, name, category: 'tower', cx, cz, hx, hz,
    footprint: { x0: cx - hx - 2, z0: cz - hz - 2, x1: cx + hx + 2, z1: cz + hz + 2 },
    height: info.topY, roof: '攒尖顶', side,
    entrance: { x: cx, z: cz - hz - 3 },
  };
}

/** 宝塔 — five storeys, each with its own 檐, topped by a 攒尖顶 + 宝顶. */
export function buildPagoda(b, { cx = 0, cz = -58, stories = 5, half = 6 } = {}) {
  const baseY = 3;
  platformBlock(b, { x0: cx - half - 2, z0: cz - half - 2, x1: cx + half + 2, z1: cz + half + 2, yTop: baseY });
  railing(b, { x0: cx - half - 2, z0: cz - half - 2, x1: cx + half + 2, z1: cz + half + 2, y: baseY + 1 });

  let y = baseY + 1;
  let h = half;
  let top = y;
  for (let s = 0; s < stories; s++) {
    const wallKey = s % 2 === 0 ? 'wallRed' : 'plaster';
    const storyH = 5;
    for (let yy = y; yy < y + storyH; yy++) b.rectRing(yy, cx - h, cz - h, cx + h, cz + h, wallKey, 1);
    b.rectRing(y, cx - h, cz - h, cx + h, cz + h, 'brick', 1);
    // 门窗
    doorway(b, { axis: 'z', wall: cz + h, from: cx - 1, to: cx + 1, y0: y + 1, y1: y + 3 });
    doorway(b, { axis: 'z', wall: cz - h, from: cx - 1, to: cx + 1, y0: y + 1, y1: y + 3 });
    doorway(b, { axis: 'x', wall: cx - h, from: cz - 1, to: cz + 1, y0: y + 1, y1: y + 3 });
    doorway(b, { axis: 'x', wall: cx + h, from: cz - 1, to: cz + 1, y0: y + 1, y1: y + 3 });
    // 檐
    const info = pyramidRoof(b, {
      x0: cx - h - 2, z0: cz - h - 2, x1: cx + h + 2, z1: cz + h + 2,
      y: y + storyH, tileKey: 'tileGold', tileDimKey: 'tileGoldDim', edgeKey: 'tileGoldDim',
      layersOverride: 2,
    });
    top = y + storyH + 2;
    y = y + storyH + 2;
    h = Math.max(2, h - 1);
  }
  const info = pyramidRoof(b, {
    x0: cx - h - 2, z0: cz - h - 2, x1: cx + h + 2, z1: cz + h + 2,
    y, tileKey: 'tileGold', tileDimKey: 'tileGoldDim', edgeKey: 'tileGoldDim', layersOverride: 5,
  });
  // 塔刹
  b.column(cx, cz, info.topY + 1, info.topY + 5, 'finialGold');
  b.box(cx - 1, info.topY + 3, cz - 1, cx + 1, info.topY + 3, cz + 1, 'gold');

  return {
    id: 'pagoda', name: '宝塔', category: 'pagoda', cx, cz, hx: half, hz: half,
    footprint: { x0: cx - half - 2, z0: cz - half - 2, x1: cx + half + 2, z1: cz + half + 2 },
    height: info.topY + 5, roof: '攒尖顶（五层）', stories,
    entrance: { x: cx, z: cz + half + 3 },
  };
}

/** 亭 — an open pavilion: columns only, under a 攒尖顶. */
export function buildPavilion(b, { cx, cz, half = 4, id, name } = {}) {
  const baseY = 1;
  platformBlock(b, { x0: cx - half - 1, z0: cz - half - 1, x1: cx + half + 1, z1: cz + half + 1, yTop: baseY });
  const y0 = baseY + 1, y1 = baseY + 7;
  columnRing(b, { x0: cx - half, z0: cz - half, x1: cx + half, z1: cz + half, y0, y1, key: 'wallRed', spacing: 4, baseKey: null });
  b.rect(y1 + 1, cx - half - 1, cz - half - 1, cx + half + 1, cz + half + 1, 'wood');
  dougongBand(b, { x0: cx - half, z0: cz - half, x1: cx + half, z1: cz + half, y: y1 + 2, step: 3, rows: 1 });
  const info = pyramidRoof(b, {
    x0: cx - half - 3, z0: cz - half - 3, x1: cx + half + 3, z1: cz + half + 3,
    y: y1 + 3, tileKey: 'tileGreen', tileDimKey: 'tileGreenDim', edgeKey: 'tileGreenDim',
  });
  railing(b, { x0: cx - half - 1, z0: cz - half - 1, x1: cx + half + 1, z1: cz + half + 1, y: baseY + 1 });
  return {
    id, name, category: 'pavilion', cx, cz, hx: half, hz: half,
    footprint: { x0: cx - half - 1, z0: cz - half - 1, x1: cx + half + 1, z1: cz + half + 1 },
    height: info.topY, roof: '攒尖顶',
    entrance: { x: cx, z: cz + half + 2 },
  };
}

/** 回廊 — a covered walkway running along z; the paved path passes underneath it. */
export function buildCorridor(b, { cx, cz, hx = 2, hz = 14, id, name } = {}) {
  const y0 = 1, y1 = 1 + 7;
  // no solid platform: only 柱础 (plinths) under the columns, so the road stays walkable
  columnRing(b, { x0: cx - hx, z0: cz - hz, x1: cx + hx, z1: cz + hz, y0, y1, key: 'wallRed', spacing: 4, baseKey: 'stone' });
  // 额枋 on both sides (symmetric)
  for (let z = cz - hz; z <= cz + hz; z++) {
    b.set(cx - hx, y1 - 2, z, 'wood');
    b.set(cx + hx, y1 - 2, z, 'wood');
  }
  dougongBand(b, { x0: cx - hx, z0: cz - hz, x1: cx + hx, z1: cz + hz, y: y1 + 1, step: 4, rows: 1 });
  const info = hipRoof(b, {
    x0: cx - hx - 1, z0: cz - hz - 1, x1: cx + hx + 1, z1: cz + hz + 1,
    y: y1 + 3, tileKey: 'tileGrey', tileDimKey: 'tileGreyDim', edgeKey: 'tileGreyDim',
    ridgeKey: 'ridgeGrey', underKey: 'woodDark', layersOverride: 3, upturn: true,
  });
  return {
    id, name, category: 'corridor', cx, cz, hx, hz,
    footprint: { x0: cx - hx - 1, z0: cz - hz - 1, x1: cx + hx + 1, z1: cz + hz + 1 },
    height: info.topY + 2, roof: '卷棚（青瓦）',
    entrance: { x: cx, z: cz },
  };
}

export { platformBlock, stoneLion, tree };
