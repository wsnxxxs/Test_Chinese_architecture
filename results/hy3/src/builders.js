// ============================================================================
// builders.js — 体素建筑生成器
//
// 坐标约定：voxel(x, y, z) 为整数网格坐标。
//   世界坐标 y = y + 0.5，即第 0 层坐落在地面平面(y=0)之上。
// 每个体素是一个单位立方体；渲染时统一缩放 0.98 以留出轻微缝隙，呈现
// Minecraft 风格的体素拼接感。
//
// 建筑布局（中轴对称，沿 Z 轴纵深，山门在前 -Z，主殿在后 +Z）：
//   山门 (Mountain Gate)          中心 (0, -30)   前端入口
//   主殿 (Main Hall)              中心 (0,  16)   中轴核心，体量最大
//   配殿左 / 配殿右 (Side Halls)  (±24, 4)        对称分布于主殿前方两侧
//   宝塔 (Pagoda)                 (-34, -10)      左侧多层级塔
//   钟楼 (Bell Tower)             ( 34, -10)      右侧楼阁
// 道路动线：山门 → 中央庭院铺装 → 主殿，由 paving 体素连成。
// ============================================================================

export const COLORS = {
  redWall: 0x9e2b25, // 红墙
  redDoor: 0x6f1d1a, // 门板
  wood: 0x8a5a2b, // 木柱（亮木色）
  woodDark: 0x5e3a1e, // 暗木构件
  tileYellow: 0xe0a82e, // 琉璃黄瓦（主殿/宝塔，皇家气派）
  tileBlue: 0x3a5f72, // 青瓦（配殿/山门/钟楼）
  baseStone: 0xa59c8a, // 台基石材
  stone: 0xbab4a4, // 铺装石
  stoneDark: 0x8d8779, // 深色石材（石狮、基座）
  white: 0xe9e3d2, // 窗纸
  lantern: 0xd8392b, // 灯笼
  gold: 0xf2c14e, // 脊饰 / 宝顶
};

// color(数值) -> [[x,y,z], ...]
const voxels = {};
// [[x,y,z], ...] 灯笼挂点（用于发光体与暖光）
export const lanterns = [];
// [[x,z], ...] 石狮位置（仅记录，用于调试）
export const lions = [];

function v(x, y, z, color) {
  (voxels[color] || (voxels[color] = [])).push([x, y, z]);
}

// 实心方块（用于台基、石狮等体量较小的实心体）
function box(x0, y0, z0, x1, y1, z1, color) {
  for (let x = x0; x <= x1; x++)
    for (let y = y0; y <= y1; y++)
      for (let z = z0; z <= z1; z++) v(x, y, z, color);
}

// 外壳（仅填充方块体积的 6 个外表面，节省体素并保留中空）
function shell(x0, y0, z0, x1, y1, z1, color) {
  for (let x = x0; x <= x1; x++)
    for (let y = y0; y <= y1; y++)
      for (let z = z0; z <= z1; z++) {
        if (x === x0 || x === x1 || y === y0 || y === y1 || z === z0 || z === z1)
          v(x, y, z, color);
      }
}

// 矩形环（在 y 层、以 (cx,cz) 为中心、半宽 hw/hd 的轮廓）
function ring(cx, cz, hw, hd, y, color) {
  for (let x = -hw; x <= hw; x++) {
    v(cx + x, y, cz - hd, color);
    v(cx + x, y, cz + hd, color);
  }
  for (let z = -hd + 1; z <= hd - 1; z++) {
    v(cx - hw, y, cz + z, color);
    v(cx + hw, y, cz + z, color);
  }
}

// 立柱
function column(cx, cz, y0, y1, color) {
  for (let y = y0; y <= y1; y++) v(cx, y, cz, color);
}

// 带门洞的墙体（前后居中留出门洞，顶部加门楣）
function wallShellDoor(cx, cz, hw, hd, y0, y1, color) {
  for (let x = -hw; x <= hw; x++)
    for (let y = y0; y <= y1; y++)
      for (let z = -hd; z <= hd; z++) {
        const edge = x === -hw || x === hw || z === -hd || z === hd;
        if (!edge) continue;
        // 门洞：前后居中 3 列、高度 2 层留空
        if ((z === hd || z === -hd) && Math.abs(x) <= 1 && y >= y0 + 1 && y <= y0 + 2)
          continue;
        v(cx + x, y, cz + z, color);
      }
  // 门楣 / 门板
  for (const zz of [hd, -hd]) v(cx, y0 + 3, cz + zz, COLORS.redDoor);
}

// 中式歇山 / 庑殿顶：底层出檐 + 四面收分 + 顶部正脊 + 飞檐翘角
function roof(cx, cz, hw, hd, yBase, color, opts = {}) {
  const over = opts.overhang ?? 1;
  const layers = opts.layers ?? Math.min(hw, hd);
  const upturn = opts.upturn ?? true;

  // 出檐（比屋面更宽一圈）
  ring(cx, cz, hw + over, hd + over, yBase, color);

  // 飞檐翘角：四角向上抬起两阶
  if (upturn) {
    const u = hw + over;
    const d = hd + over;
    for (const dx of [-u, u])
      for (const dz of [-d, d]) {
        v(cx + dx, yBase + 1, cz + dz, color);
        v(cx + dx, yBase + 2, cz + dz, color);
      }
  }

  // 屋面收分（每层向内收缩）
  for (let i = 1; i <= layers; i++) {
    const w = hw - i;
    const d = hd - i;
    if (w <= 0 || d <= 0) break;
    ring(cx, cz, w, d, yBase + i, color);
  }

  // 顶部正脊（沿 x 方向一排，庑殿/歇山形制）
  const topY = yBase + layers;
  const wTop = Math.max(0, hw - layers);
  for (let x = -wTop; x <= wTop; x++) v(cx + x, topY, cz, color);
}

// 台阶（向前延伸、逐级加宽）
function steps(cx, zFront, n, color) {
  for (let i = 0; i < n; i++) {
    const w = 2 + i;
    for (let x = -w; x <= w; x++) v(cx + x, 0, zFront + i, color);
  }
}

// 石狮（简化体素雕塑）
function addLion(cx, cz) {
  box(cx - 1, 0, cz - 1, cx + 1, 0, cz + 1, COLORS.stoneDark); // 基座
  box(cx - 1, 1, cz - 1, cx + 1, 2, cz + 1, COLORS.stone); // 身躯
  box(cx - 1, 3, cz - 1, cx + 1, 4, cz + 1, COLORS.stoneDark); // 头
  lions.push([cx, cz]);
}

// 平地铺装（厚 1 层，y=0）
function pave(x0, z0, x1, z1, color) {
  box(x0, 0, z0, x1, 0, z1, color);
}

// ---------------------------------------------------------------------------
// 建筑生成函数
// ---------------------------------------------------------------------------

function buildEnvironment() {
  // 中央庭院铺装
  pave(-16, -26, 16, 14, COLORS.stone);
  // 主轴道路：山门 → 庭院 → 主殿
  pave(-3, -30, 3, 25, COLORS.stone);
  // 通往配殿的横向道路
  pave(-26, -2, -20, 12, COLORS.stone);
  pave(20, -2, 26, 12, COLORS.stone);
  // 通往宝塔 / 钟楼的道路
  pave(-32, -16, -28, 0, COLORS.stone);
  pave(28, -16, 32, 0, COLORS.stone);
}

function buildMountainGate() {
  const cx = 0;
  const cz = -30;
  const hw = 7;
  const hd = 3;
  // 台基
  box(cx - hw - 1, 0, cz - hd - 1, cx + hw + 1, 1, cz + hd + 1, COLORS.baseStone);
  // 墙体（红）带门洞
  wallShellDoor(cx, cz, hw, hd, 2, 6, COLORS.redWall);
  // 四角立柱
  for (const sx of [-hw, hw])
    for (const sz of [-hd, hd]) column(cx + sx, cz + sz, 2, 7, COLORS.woodDark);
  // 歇山顶（青瓦）
  roof(cx, cz, hw, hd, 7, COLORS.tileBlue, { overhang: 2, layers: 3, upturn: true });
  // 脊饰
  v(cx, 7 + 3 + 1, cz, COLORS.gold);
  // 檐下灯笼
  lanterns.push([cx - hw - 2, 7, cz]);
  lanterns.push([cx + hw + 2, 7, cz]);
  // 石狮
  addLion(cx - 4, cz + hd + 2);
  addLion(cx + 4, cz + hd + 2);
  // 前台阶
  steps(cx, cz + hd + 1, 3, COLORS.stone);
}

function buildMainHall() {
  const cx = 0;
  const cz = 16;
  const hw = 14;
  const hd = 9;
  // 高大台基（两层）
  box(cx - hw - 1, 0, cz - hd - 1, cx + hw + 1, 1, cz + hd + 1, COLORS.baseStone);
  // 红墙带门洞
  wallShellDoor(cx, cz, hw, hd, 2, 9, COLORS.redWall);
  // 周圈 + 内列木柱
  const colX = [-hw, -7, 0, 7, hw];
  for (const sx of colX)
    for (const sz of [-hd, hd]) column(cx + sx, cz + sz, 2, 10, COLORS.wood);
  // 侧墙窗格（窗纸）
  for (let x = -hw + 2; x <= hw - 2; x += 2) {
    v(cx + x, 4, cz - hd, COLORS.white);
    v(cx + x, 6, cz - hd, COLORS.white);
    v(cx + x, 4, cz + hd, COLORS.white);
    v(cx + x, 6, cz + hd, COLORS.white);
  }
  // 庑殿顶（琉璃黄瓦，体量最大、出檐最远）
  roof(cx, cz, hw + 1, hd + 1, 10, COLORS.tileYellow, { overhang: 3, layers: 7, upturn: true });
  // 正脊脊饰
  v(cx, 10 + 7 + 1, cz, COLORS.gold);
  v(cx - 2, 10 + 7 + 1, cz, COLORS.gold);
  v(cx + 2, 10 + 7 + 1, cz, COLORS.gold);
  // 檐下灯笼
  lanterns.push([cx - hw - 3, 10, cz]);
  lanterns.push([cx + hw + 3, 10, cz]);
  // 前台阶
  steps(cx, cz + hd + 2, 4, COLORS.stone);
}

function buildSideHall(sign) {
  const cx = 24 * sign;
  const cz = 4;
  const hw = 8;
  const hd = 6;
  // 台基
  box(cx - hw - 1, 0, cz - hd - 1, cx + hw + 1, 0, cz + hd + 1, COLORS.baseStone);
  // 墙体带门洞
  wallShellDoor(cx, cz, hw, hd, 1, 6, COLORS.redWall);
  // 立柱
  for (const sx of [-hw, 0, hw])
    for (const sz of [-hd, hd]) column(cx + sx, cz + sz, 1, 7, COLORS.wood);
  // 窗格
  for (let x = -hw + 2; x <= hw - 2; x += 2) {
    v(cx + x, 3, cz - hd, COLORS.white);
    v(cx + x, 3, cz + hd, COLORS.white);
  }
  // 歇山顶（青瓦）
  roof(cx, cz, hw + 1, hd + 1, 7, COLORS.tileBlue, { overhang: 2, layers: 4, upturn: true });
  v(cx, 7 + 4 + 1, cz, COLORS.gold);
  // 灯笼
  lanterns.push([cx, 7, cz + hd + 2]);
  // 前台阶
  steps(cx, cz + hd + 1, 3, COLORS.stone);
}

function buildPagoda() {
  const cx = -34;
  const cz = -10;
  let hw = 6;
  let hd = 6;
  // 基座
  box(cx - hw, 0, cz - hd, cx + hw, 1, cz + hd, COLORS.baseStone);
  let y = 2;
  const tiers = 6;
  for (let t = 0; t < tiers; t++) {
    const bodyH = 3;
    // 塔身（红墙外壳）
    shell(cx - hw, y, cz - hd, cx + hw, y + bodyH - 1, cz + hd, COLORS.redWall);
    // 角柱
    for (const sx of [-hw, hw])
      for (const sz of [-hd, hd]) column(cx + sx, cz + sz, y, y + bodyH - 1, COLORS.woodDark);
    // 每层攒尖小顶（琉璃黄瓦）
    roof(cx, cz, hw, hd, y + bodyH, COLORS.tileYellow, { overhang: 1, layers: 2, upturn: true });
    y += bodyH + 2;
    hw -= 1;
    hd -= 1;
    if (hw <= 1) break;
  }
  // 宝顶
  for (let i = 0; i < 3; i++) v(cx, y + i, cz, COLORS.gold);
  // 底层灯笼
  lanterns.push([cx - 7, 2, cz]);
  lanterns.push([cx + 7, 2, cz]);
}

function buildBellTower() {
  const cx = 34;
  const cz = -10;
  const hw = 5;
  const hd = 5;
  // 台基
  box(cx - hw - 1, 0, cz - hd - 1, cx + hw + 1, 1, cz + hd + 1, COLORS.baseStone);
  // 下层开敞（仅立柱 + 栏杆）
  for (const sx of [-hw, hw])
    for (const sz of [-hd, hd]) column(cx + sx, cz + sz, 2, 7, COLORS.woodDark);
  ring(cx, cz, hw, hd, 2, COLORS.wood);
  // 上层墙体
  shell(cx - hw, 8, cz - hd, cx + hw, 10, cz + hd, COLORS.redWall);
  // 歇山顶（青瓦）
  roof(cx, cz, hw + 1, hd + 1, 11, COLORS.tileBlue, { overhang: 2, layers: 3, upturn: true });
  v(cx, 11 + 3 + 1, cz, COLORS.gold);
  // 灯笼
  lanterns.push([cx, 8, cz]);
}

// 汇总生成
export function buildAll() {
  buildEnvironment();
  buildMountainGate();
  buildMainHall();
  buildSideHall(-1);
  buildSideHall(1);
  buildPagoda();
  buildBellTower();
  return { voxels, lanterns };
}
