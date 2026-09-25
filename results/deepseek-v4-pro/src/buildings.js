// 体素建筑生成器：中式古典建筑
import { C } from './palette.js';

// 画笔：把局部体素坐标变换（平移 + 绕 Y 旋转）后写入世界
function painter(world, cx, cy, cz, rotY = 0) {
  const c = Math.cos(rotY), s = Math.sin(rotY);
  function put(lx, ly, lz, color, opt) {
    const x = lx * c + lz * s + cx;
    const z = -lx * s + lz * c + cz;
    world.add(Math.round(x), Math.round(cy + ly), Math.round(z), color, opt);
  }
  function rect(x0, z0, x1, z1, y, color, opt) {
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) put(x, y, z, color, opt);
  }
  function box(x0, y0, z0, x1, y1, z1, color, opt) {
    for (let x = x0; x <= x1; x++)
      for (let y = y0; y <= y1; y++)
        for (let z = z0; z <= z1; z++) put(x, y, z, color, opt);
  }
  function lineX(x0, x1, y, z, color, opt) {
    for (let x = x0; x <= x1; x++) put(x, y, z, color, opt);
  }
  return { put, rect, box, lineX };
}

// 飞檐翘角：檐口四角连续上翘（与屋面相连，不悬空）
function addEaveCorners(p, hw, hd, baseY, roofLt, lift = 2) {
  for (const sx of [1, -1]) {
    for (const sz of [1, -1]) {
      p.put(sx * hw, baseY + 1, sz * hd, roofLt);
      p.put(sx * (hw - 1), baseY + 1, sz * hd, roofLt);
      p.put(sx * hw, baseY + 1, sz * (hd - 1), roofLt);
      if (lift >= 2) p.put(sx * hw, baseY + 2, sz * hd, roofLt);
      p.put(sx * hw, baseY + 1 + lift, sz * hd, C.ridge);
    }
  }
}

// 庑殿顶（四坡 + 正脊）
function addHipRoof(p, W, D, eave, baseY, layers, roof, roofLt) {
  const hw = W / 2 + eave, hd = D / 2 + eave;
  for (let i = 0; i < layers; i++) {
    const t = i / (layers - 1);
    const d = Math.round(hd * (1 - t));
    const w = Math.round(hw - hd * t);
    if (w < 0) break;
    p.rect(-w, -d, w, d, baseY + i, i === 0 ? roofLt : roof);
  }
  const topY = baseY + layers - 1;
  const rh = Math.round(hw - hd);
  p.lineX(-rh, rh, topY, 0, C.ridge);
  p.put(rh, topY + 1, 0, C.ridge);
  p.put(-rh, topY + 1, 0, C.ridge);
  p.put(rh, topY + 2, 0, C.finial);
  p.put(-rh, topY + 2, 0, C.finial);
  addEaveCorners(p, hw, hd, baseY, roofLt);
}

// 歇山顶：下段四坡收缩 + 上段垂直山花（白色三角形端墙）
function addXieshanRoof(p, W, D, eave, baseY, layers, roof, roofLt) {
  const hw = W / 2 + eave, hd = D / 2 + eave;
  const lower = Math.max(1, Math.round(layers * 0.6));
  const upper = Math.max(2, layers - lower);
  const dG = Math.max(2, Math.round(hd * 0.45)); // 转折处进深
  const wT = Math.max(2, hw - (hd - dG)); // 转折处半宽（=脊长的一半）
  // 下段：庑殿式收缩到 (wT, dG)
  for (let i = 0; i <= lower; i++) {
    const t = i / lower;
    const d = Math.round(hd - (hd - dG) * t);
    const w = Math.round(hw - (hd - dG) * t);
    p.rect(-w, -d, w, d, baseY + i, i === 0 ? roofLt : roof);
  }
  // 上段：宽度不变（山花端墙垂直），进深逐层收到正脊
  for (let j = 1; j <= upper; j++) {
    const d = Math.round((dG * (upper - j)) / upper);
    p.rect(-wT, -d, wT, d, baseY + lower + j, roof);
    for (let z = -d; z <= d; z++) {
      p.put(wT, baseY + lower + j, z, C.white);
      p.put(-wT, baseY + lower + j, z, C.white);
    }
  }
  // 正脊 + 吻兽
  const topY = baseY + lower + upper;
  p.lineX(-wT, wT, topY, 0, C.ridge);
  p.put(wT, topY + 1, 0, C.ridge);
  p.put(-wT, topY + 1, 0, C.ridge);
  addEaveCorners(p, hw, hd, baseY, roofLt);
}

// 攒尖顶（方形攒尖 + 宝顶）
function addPyramidRoof(p, half, baseY, layers, roof, roofLt) {
  for (let i = 0; i < layers; i++) {
    const t = i / (layers - 1);
    const w = Math.round(half * (1 - t));
    if (w < 0) break;
    p.rect(-w, -w, w, w, baseY + i, i === 0 ? roofLt : roof);
  }
  p.put(0, baseY + layers, 0, C.finial);
  p.put(0, baseY + layers + 1, 0, C.finial);
  // 小屋顶用矮翘角，避免比例失调
  addEaveCorners(p, half, half, baseY, roofLt, half >= 4 ? 2 : 1);
}

// 大殿 / 配殿
export function buildHall(world, o) {
  const {
    cx = 0, cz = 0, baseY = 1, rotY = 0,
    W = 16, D = 12, wallH = 4, platH = 2, platOver = 2,
    roofType = 'hip', eave = 3, roofLayers = 10,
    wall = C.wall, pillar = C.pillar, roof = C.roofGold, roofLt = C.roofGoldLt,
    withDoor = true, withWindows = true, withSteps = true,
    frontWindows = false, doorHalf = 1,
  } = o;
  const p = painter(world, cx, baseY, cz, rotY);
  const hw = W / 2, hd = D / 2;
  const wy0 = platH, wy1 = platH + wallH - 1;

  // 台基
  p.box(-hw - platOver, 0, -hd - platOver, hw + platOver, platH - 1, hd + platOver, C.stone);

  // 立柱位置（三开间）
  const m = Math.round(hw / 2);
  const colXs = [-hw, -m, m, hw];

  const doorOpen = (x, y, z) => z === hd && Math.abs(x) <= doorHalf && y <= wy1 - 1;
  const winOpen = (x, y, z) => {
    if (y < wy0 + 2 || y > wy0 + 3) return false;
    if (z === hd && frontWindows) return Math.abs(x) === hw - 3 || Math.abs(x) === hw - 2;
    if (x === hw || x === -hw) return Math.abs(z) === 3 || Math.abs(z) === 4;
    return false;
  };
  const isCol = (x) => colXs.includes(x);

  // 墙体（红墙，留门窗柱位）
  for (let y = wy0; y <= wy1; y++) {
    for (let x = -hw; x <= hw; x++) {
      for (const z of [hd, -hd]) {
        if (isCol(x)) continue;
        if (withDoor && doorOpen(x, y, z)) continue;
        if (withWindows && winOpen(x, y, z)) continue;
        p.put(x, y, z, wall);
      }
    }
    for (let z = -hd + 1; z <= hd - 1; z++) {
      for (const x of [-hw, hw]) {
        if (withWindows && winOpen(x, y, z)) continue;
        p.put(x, y, z, wall);
      }
    }
  }

  // 门 / 窗 填充
  if (withDoor) {
    for (let y = wy0; y <= wy1 - 1; y++)
      for (let x = -doorHalf; x <= doorHalf; x++)
        p.put(x, y, hd, C.door);
  }
  if (withWindows) {
    for (let y = wy0; y <= wy1; y++) {
      for (let x = -hw; x <= hw; x++) if (winOpen(x, y, hd)) p.put(x, y, hd, C.window);
      for (let z = -hd + 1; z <= hd - 1; z++) {
        if (winOpen(hw, y, z)) p.put(hw, y, z, C.window);
        if (winOpen(-hw, y, z)) p.put(-hw, y, z, C.window);
      }
    }
  }

  // 立柱
  for (const x of colXs) {
    for (let y = wy0; y <= wy1; y++) {
      p.put(x, y, hd, pillar);
      p.put(x, y, -hd, pillar);
    }
  }

  // 额枋（梁）
  for (let x = -hw; x <= hw; x++) { p.put(x, wy1, hd, C.beam); p.put(x, wy1, -hd, C.beam); }
  for (let z = -hd + 1; z <= hd - 1; z++) { p.put(hw, wy1, z, C.beam); p.put(-hw, wy1, z, C.beam); }

  // 斗拱
  const db = wy1 + 1;
  for (let x = -hw; x <= hw; x++) { p.put(x, db, hd, C.dougong); p.put(x, db, -hd, C.dougong); }
  for (let z = -hd + 1; z <= hd - 1; z++) { p.put(hw, db, z, C.dougong); p.put(-hw, db, z, C.dougong); }

  // 屋顶
  const roofBase = db + 1;
  if (roofType === 'xieshan') addXieshanRoof(p, W, D, eave, roofBase, roofLayers, roof, roofLt);
  else addHipRoof(p, W, D, eave, roofBase, roofLayers, roof, roofLt);

  // 台阶（殿前）
  if (withSteps) {
    p.box(-doorHalf - 1, 0, hd + platOver + 1, doorHalf + 1, platH - 1, hd + platOver + 1, C.stoneLight);
    p.box(-doorHalf - 2, 0, hd + platOver + 2, doorHalf + 2, 0, hd + platOver + 2, C.stone);
  }
}

// 山门（三开间门殿）
export function buildGate(world, o) {
  const { cx = 0, cz = 0, baseY = 1, rotY = 0, W = 16, wallH = 5 } = o;
  const p = painter(world, cx, baseY, cz, rotY);
  const hw = W / 2;
  p.box(-hw - 1, 0, -2, hw + 1, 1, 2, C.stone);
  const wy0 = 2, wy1 = wy0 + wallH - 1;
  const doorMain = (x) => Math.abs(x) <= 1;
  const doorSide = (x) => (x >= 3 && x <= 4) || (x <= -3 && x >= -4);
  // 墙体（正面带三门洞，前后两层厚）
  for (let y = wy0; y <= wy1; y++) {
    for (let x = -hw; x <= hw; x++) {
      const open = y <= wy1 - 1 && (doorMain(x) || doorSide(x));
      for (const z of [0, -1]) {
        if (!open) p.put(x, y, z, C.wall);
      }
    }
  }
  // 门板
  for (let y = wy0; y <= wy1 - 1; y++) {
    for (let x = -hw; x <= hw; x++) {
      if (doorMain(x) || doorSide(x)) { p.put(x, y, 0, C.door); p.put(x, y, -1, C.door); }
    }
  }
  // 立柱
  for (const x of [-hw, -2, 2, hw]) {
    for (let y = wy0; y <= wy1; y++) { p.put(x, y, 0, C.pillar); p.put(x, y, -1, C.pillar); }
  }
  // 额枋 + 斗拱
  for (let x = -hw; x <= hw; x++) { p.put(x, wy1, 0, C.beam); p.put(x, wy1, -1, C.beam); }
  const db = wy1 + 1;
  for (let x = -hw; x <= hw; x++) { p.put(x, db, 0, C.dougong); p.put(x, db, -1, C.dougong); }
  // 屋顶（歇山青瓦）
  addXieshanRoof(p, W, 6, 2, db + 1, 8, C.roofGray, C.roofGrayLt);
}

// 宝塔（多层攒尖）
export function buildPagoda(world, o) {
  const { cx = 0, cz = 0, baseY = 1, rotY = 0, tiers = 5, half0 = 5 } = o;
  const p = painter(world, cx, baseY, cz, rotY);
  let half = half0, y = 0;
  for (let t = 0; t < tiers; t++) {
    const wallH = 2;
    p.rect(-half - 1, -half - 1, half + 1, half + 1, y, C.stone);
    for (let yy = 0; yy < wallH; yy++) {
      for (let x = -half; x <= half; x++) {
        for (let z = -half; z <= half; z++) {
          const door = t === 0 && yy === 0 && x === 0 && z === half;
          const win = yy === 1 && Math.abs(x) === half && Math.abs(z) === half - 1;
          p.put(x, y + 1 + yy, z, door ? C.door : win ? C.window : C.wall);
        }
      }
    }
    const roofBase = y + 1 + wallH;
    addPyramidRoof(p, half + 1, roofBase, 4, C.roofGreen, C.roofGreenLt);
    y = roofBase + 4;
    half = Math.max(1, half - 1);
  }
  p.put(0, y, 0, C.finial);
  p.put(0, y + 1, 0, C.finial);
}

// 钟楼 / 鼓楼（攒尖亭）
export function buildTower(world, o) {
  const { cx = 0, cz = 0, baseY = 1, rotY = 0, size = 8 } = o;
  const p = painter(world, cx, baseY, cz, rotY);
  const hh = size / 2;
  p.box(-hh - 2, 0, -hh - 2, hh + 2, 3, hh + 2, C.stone);
  p.rect(-hh - 1, -hh - 1, hh + 1, hh + 1, 4, C.stoneLight);
  for (const x of [-hh, 0, hh]) for (const z of [-hh, 0, hh]) {
    for (let y = 5; y <= 9; y++) p.put(x, y, z, C.pillar);
  }
  for (let x = -hh; x <= hh; x++) { p.put(x, 5, -hh, C.wallDark); p.put(x, 5, hh, C.wallDark); }
  for (let z = -hh + 1; z <= hh - 1; z++) { p.put(-hh, 5, z, C.wallDark); p.put(hh, 5, z, C.wallDark); }
  for (let x = -hh; x <= hh; x++) { p.put(x, 9, -hh, C.beam); p.put(x, 9, hh, C.beam); }
  for (let z = -hh + 1; z <= hh - 1; z++) { p.put(-hh, 9, z, C.beam); p.put(hh, 9, z, C.beam); }
  for (let x = -hh; x <= hh; x++) { p.put(x, 10, -hh, C.dougong); p.put(x, 10, hh, C.dougong); }
  for (let z = -hh + 1; z <= hh - 1; z++) { p.put(-hh, 10, z, C.dougong); p.put(hh, 10, z, C.dougong); }
  addPyramidRoof(p, hh + 1, 11, 5, C.roofBlue, C.roofBlueLt);
}
