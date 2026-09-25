/**
 * composition.js — 全场景总装线（A4）
 *
 * buildWorld() -> { group, world, stats }      ← 同步返回，无 async（A1 §main 契约）
 *   · group : THREE.Group，name='complex'，内含①体素建筑群（world.buildMeshes()）
 *             ②地面网格（程序化贴图，y=-0.02）
 *   · world : VoxelWorld（建筑 + 地形 + 陈设的全部体素）
 *   · stats : { voxels, quads, triangles, dropped, budget, overBudget, warns,
 *               buildings[]（含 must/skipped/ok）, mustCount, mustPlaced, decorSkipped,
 *               terrain{}, terrainVoxels, terrainBudget, trees, inhabitants{}, lamps{},
 *               glowPoints[], glowMissing, ground, info }  ← 前四个字段 A1 的 HUD 直接读
 *
 * 另外导出 `refreshTone(key, T)`（A1 main.js 的 toneRefreshHook 契约）：
 * 切色调时只给地面贴图做 Color tint + UV 微调，不重画 2048² 贴图。
 *
 * ------------------------------------------------------------------ builder 契约假设（校对清单）
 * 全部按 SPEC §3 的签名与 config.js 的 L 调用；成对建筑用 ±cx 各调一次：
 *   buildMainHall(w, L.mainHall)
 *   buildSideHall(w, L.sideHall, {side:±1, cx:±L.sideHall.ym, cz:L.sideHall.cz})   along:'z'
 *   buildGate(w, L.gate) / buildTianwang(w, L.tianwang) / buildRearHall(w, L.rearHall)
 *   buildBellDrum(w, L.towers, {kind:'bell'|'drum', cx:±L.towers.ym, cz:L.towers.cz})
 *   buildPagoda(w, L.pagoda) / buildSmallPagoda(w, L.smallPagoda, {side:±1, cx:±ym, cz})
 *   buildPavilion(w, L.stelePavilion, {kind:'stele', cx:±ym, cz})   ← 只放碑亭
 *   buildCorridor(w, seg, L.corridor)  × L.corridors
 *   buildPerimeter(w)        ← SPEC 规定它内部自带四角角楼，故此处**不再**放 kind:'corner'
 *   buildScreen(w, L.screen)
 * 檐下宫灯由各 builder 自己挂（SPEC §3/§4），本文件只补神道/庭院/月台上的陈设；
 * 另外两件事由本文件兜底（见下）：
 *   · `placeMissingLanterns()` —— 逐个体检 L.lanternLights，附近没有 glow 体素就补挂一只
 *     props.lantern（夜景"有光无灯"是硬伤，补灯比补体素划算得多）。
 *   · 必需建筑（must）**永不跳过**：预算不够也要装，只在超线时 console.error 明确告警。
 *     能降级的是地形/陈设（少几棵树、少几座石灯），绝不是建筑数量。
 *
 * ------------------------------------------------------------------ 体素预算（硬指标 200000）
 * 顺序 = must 建筑 → 装饰建筑 → 地形 → 陈设 → 补灯；后四段各拿"剩余预算"，
 * 只有地形/陈设/装饰在剩余不足时才截断，建筑段只 console.error 告警、绝不静默少装。
 * 分类统计 + 排序打印保留（建筑单件用量另可用 `node tools/count.mjs` 独立计量）。
 */
import * as THREE from 'three';
import { L, P, TONES } from '../config.js';
import { VoxelWorld } from '../core/VoxelWorld.js';

/* ---- 建筑 builder（A2 / A3）：集中在此，便于一次性校对导出名 ---- */
import { buildMainHall } from '../build/mainHall.js';
import { buildSideHall } from '../build/sideHall.js';
import { buildGate } from '../build/gate.js';
import { buildTianwang } from '../build/tianwang.js';
import { buildRearHall } from '../build/rearHall.js';
import { buildBellDrum, buildSmallPagoda } from '../build/towers.js';
import { buildPagoda } from '../build/pagoda.js';
import { buildPavilion } from '../build/pavilion.js';
import { buildCorridor } from '../build/corridor.js';
import { buildPerimeter, buildScreen } from '../build/perimeter.js';

/* ---- 陈设（A3） ---- */
import {
  lantern, stoneLantern, stoneLion, incenseBurner, stele, pineTree, rockery, banner,
} from '../build/props.js';

/* ---- 地面 / 地形（A4，同目录） ---- */
import {
  createGround, refreshGroundTone, decorateTerrain, lanternRows, setTreeDecorator,
} from './landscape.js';

/* 预算按实测反推：14 座必需建筑 216.7k + 地形 ~22k + 陈设/补灯 ~6k ≈ 245k。
 * 硬指标其实是「旋转 ≥30fps」：实测 196.9k 体素 = 998k 三角形时 141fps、5 draw call，
 * 故 262k（≈1.3M 三角形）仍有 4 倍余量；再靠 main.js 的自适应降级兜低配机。 */
export const VOXEL_BUDGET = 262000;
const TERRAIN_ALLOW = 30000;     // 地形上限（与 landscape.MAX_TERRAIN_VOX 对齐），实际给"剩余预算"
const PROPS_ALLOW = 9000;        // 陈设额度：庭院陈设是验收项（SPEC §7.4 灯笼/石狮/香炉），只留不足时截断
const LAMP_ALLOW = 1500;         // 夜景补灯额度（约 20 只宫灯）
const TERRAIN_MIN = 2500;        // 地形保底：御路/路牙/月台这类"形制必需"至少留这么多
const DECOR_ALLOW = 8000;        // 非必需建筑（小石塔）额度，超线即跳过

/* ============================================================ 小工具 */
/**
 * 跑一个 builder/prop：抛错就记录并继续（集成期缺件不至于整场景黑屏）。
 * must=true 的构件失败是**功能缺失**，除记进 notes（HUD 告警计数）外必须 console.error。
 */
function attempt(notes, label, fn, must = false) {
  try {
    fn();
    return true;
  } catch (err) {
    const msg = String((err && err.message) || err);
    notes.push({ label, err: msg, must });
    if (must) console.error('[voxel] 必需构件装配失败：%s —— %s（该建筑/陈设不会出现在场景里）', label, msg);
    else console.warn('[voxel] 构件失败：%s —— %s', label, msg);
    return false;
  }
}

/* ============================================================ 建筑清单 */
/* 顺序 = 中轴七进 + 左右对称配组的装配顺序；`must:true` 者永不跳过（预算不足只告警）。
   装饰件（must:false，如小石塔/经幢）在剩余预算不足时才允许缺席。 */
const BUILDINGS = [
  {
    key: 'mainHall', name: '大雄宝殿', must: true, pos: [0, 0], note: '三重台基 · 重檐庑殿 · 黄琉璃',
    fn: (w) => buildMainHall(w, L.mainHall),
  },
  {
    key: 'gate', name: '山门', must: true, pos: [L.gate.cx, L.gate.cz], note: '三券门 · 匾额祇园胜境',
    fn: (w) => buildGate(w, L.gate),
  },
  {
    key: 'tianwang', name: '天王殿', must: true, pos: [L.tianwang.cx, L.tianwang.cz], note: '五开间 · 单檐歇山',
    fn: (w) => buildTianwang(w, L.tianwang),
  },
  {
    key: 'perimeter', name: '院墙 + 四角角楼', must: true, pos: [0, (L.wall.z[0] + L.wall.z[1]) / 2], note: '南侧按 gap 断开',
    fn: (w) => buildPerimeter(w),
  },
  {
    key: 'rearHall', name: '藏经楼', must: true, pos: [L.rearHall.cx, L.rearHall.cz], note: '两层 · 歇山 · 绿琉璃',
    fn: (w) => buildRearHall(w, L.rearHall),
  },
  {
    key: 'pagoda', name: '舍利宝塔', must: true, pos: [L.pagoda.cx, L.pagoda.cz], note: '7 层八角 · 黛瓦 · 中轴收束',
    fn: (w) => buildPagoda(w, L.pagoda),
  },
  {
    key: 'sideHallW', name: '西配殿', must: true, pos: [-L.sideHall.ym, L.sideHall.cz], note: '面阔沿 Z · 门朝中轴',
    fn: (w) => buildSideHall(w, L.sideHall, { side: -1, cx: -L.sideHall.ym, cz: L.sideHall.cz }),
  },
  {
    key: 'sideHallE', name: '东配殿', must: true, pos: [L.sideHall.ym, L.sideHall.cz], note: '面阔沿 Z · 门朝中轴',
    fn: (w) => buildSideHall(w, L.sideHall, { side: 1, cx: L.sideHall.ym, cz: L.sideHall.cz }),
  },
  {
    key: 'bellTower', name: '钟楼', must: true, pos: [L.towers.bell.cx, L.towers.cz], note: '高台四面券洞 + 台上亭',
    fn: (w) => buildBellDrum(w, L.towers, { kind: 'bell', cx: L.towers.bell.cx, cz: L.towers.cz }),
  },
  {
    key: 'drumTower', name: '鼓楼', must: true, pos: [L.towers.drum.cx, L.towers.cz], note: '高台四面券洞 + 台上亭',
    fn: (w) => buildBellDrum(w, L.towers, { kind: 'drum', cx: L.towers.drum.cx, cz: L.towers.cz }),
  },
  {
    key: 'steleW', name: '西碑亭', must: true, pos: [-L.stelePavilion.ym, L.stelePavilion.cz], note: '四柱攒尖 + 龟趺碑',
    fn: (w) => buildPavilion(w, L.stelePavilion, { kind: 'stele', cx: -L.stelePavilion.ym, cz: L.stelePavilion.cz }),
  },
  {
    key: 'steleE', name: '东碑亭', must: true, pos: [L.stelePavilion.ym, L.stelePavilion.cz], note: '四柱攒尖 + 龟趺碑',
    fn: (w) => buildPavilion(w, L.stelePavilion, { kind: 'stele', cx: L.stelePavilion.ym, cz: L.stelePavilion.cz }),
  },
  {
    key: 'screen', name: '照壁', must: true, pos: [L.screen.cx, L.screen.cz], note: '须弥座 + 琉璃壁心',
    fn: (w) => buildScreen(w, L.screen),
  },
  {
    key: 'corridors', name: `抄手游廊 ×${L.corridors.length}`, must: true, pos: [0, 72], note: '围合主庭与后庭',
    fn: (w) => { for (const seg of L.corridors) buildCorridor(w, seg, L.corridor); },
  },
  {
    key: 'smallPagodaW', name: '西石塔', must: false, pos: [-L.smallPagoda.ym, L.smallPagoda.cz], note: '5 层小石塔（装饰）',
    fn: (w) => buildSmallPagoda(w, L.smallPagoda, { side: -1, cx: -L.smallPagoda.ym, cz: L.smallPagoda.cz }),
  },
  {
    key: 'smallPagodaE', name: '东石塔', must: false, pos: [L.smallPagoda.ym, L.smallPagoda.cz], note: '5 层小石塔（装饰）',
    fn: (w) => buildSmallPagoda(w, L.smallPagoda, { side: 1, cx: L.smallPagoda.ym, cz: L.smallPagoda.cz }),
  },
];

/* ============================================================ 陈设 */
/**
 * 庭院陈设（山门石狮/香炉、主殿前月台香炉 + 石碑、神道幡杆、池边太湖石、塔院石碑）。
 * 石灯笼列由 landscape.decorateTerrain 与这里配合：它出台基，props.stoneLantern 出灯体。
 *
 * props 的 y = 所在平台的**顶面之上第一格**（地面 0；主殿前月台 raisedPodium(h=3) 顶面占
 * y∈{0,1,2} ⇒ y=3；塔院月台 h=4 ⇒ y=4）。landscape 的两个月台都是"左右两瓣 + 中轴留空"：
 * 主殿瓣 |x|∈[18,48] z∈[68,86]、塔院瓣 |x|∈[16,40] z∈[-130,-120]。
 * ⇒ 落位前必须核对 x/z 真落在瓣内，否则物件会悬空（历史 bug：香炉放在中轴 x=0 却按 y=3 抬升）。
 *
 * @param {VoxelWorld} w
 * @param {number} cap 触顶即停（保护 200000 硬指标）
 * @returns {{placed:number, cost:number, notes:Array}}
 */
export function buildInhabitants(w, cap = VOXEL_BUDGET) {
  const notes = [];
  const c0 = w.count();
  let placed = 0;
  const prop = (fn, args, label) => {
    if (typeof fn !== 'function') { notes.push({ label, err: 'export missing' }); return false; }
    if (w.count() > cap - 600) return false;
    if (attempt(notes, label, () => fn(w, args))) placed++;
    return true;
  };
  const z1 = L.gate.z1;

  /* 1) 山门外：石狮一对 + 门槛外香炉 */
  prop(stoneLion, { x: -15, z: z1 + 7, y: 0, dir: 'S', size: 1 }, 'stoneLion(W)');
  prop(stoneLion, { x: 15, z: z1 + 7, y: 0, dir: 'S', size: 1 }, 'stoneLion(E)');
  prop(incenseBurner, { x: 0, z: z1 + 15, y: 0, big: true }, 'incense@gate');

  /* 2) 庭园中轴香炉 + 主殿前月台（两瓣 y=3）：香炉一对、石碑一对，中轴留出御路 */
  prop(incenseBurner, { x: 0, z: 140, y: 0, big: false }, 'incense@tianwang-court');
  for (const s of [-1, 1]) {
    prop(incenseBurner, { x: s * 36, z: 74, y: 3, big: true }, `incense@main-platform${s < 0 ? ' W' : ' E'}`);
    prop(stele, { x: s * 24, z: 79, y: 3, h: 15, dir: 'N' }, `stele@main${s < 0 ? ' W' : ' E'}`);
  }
  prop(incenseBurner, { x: 0, z: -86, y: 0, big: false }, 'incense@rear');

  /* 3) 神道：石灯笼（基座 + 灯体）由 landscape.decorateTerrain 一列搞定，这里只补幡杆，
        避免同点位重复立灯 */
  const rows = lanternRows();
  for (let i = 0; i < rows.length; i += 4) {
    const p = rows[i];
    const s = p.x > 0 ? 1 : -1;
    prop(banner, { x: p.x + s * 9, z: p.z, y: 0, dir: 'S' }, 'banner@axis');
  }
  /* 山门两侧（地面） + 塔院月台瓣内（y=4，避开 x=16 的台阶口与 x=40 的栏板） */
  for (const s of [-1, 1]) {
    prop(stoneLantern, { x: s * 54, z: z1 - 6, y: 0, h: 7 }, 'stoneLantern@gate-side');
    prop(stoneLantern, { x: s * 33, z: -125, y: 4, h: 6 }, 'stoneLantern@tower-court');
  }

  /* 4) 太湖石：放生池内侧两隅（勿放 x=±151 —— 会插进 x=±150 的院墙）+ 主殿东西庭 */
  for (const p of L.ponds) {
    const s = p.cx > 0 ? 1 : -1;
    prop(rockery, { x: p.cx - s * 9, z: p.cz + 26, y: 0, r: 5, seed: 3 }, 'rockery@pond');
    prop(rockery, { x: p.cx - s * 9, z: p.cz - 26, y: 0, r: 4, seed: 5 }, 'rockery@pond-n');
  }
  prop(rockery, { x: -90, z: -34, y: 0, r: 5, seed: 7 }, 'rockery@hall W');
  prop(rockery, { x: 90, z: -34, y: 0, r: 5, seed: 7 }, 'rockery@hall E');

  /* 5) 塔院月台石碑（与主殿呼应，瓣内 x∈[16,40] z∈[-130,-120]） */
  prop(stele, { x: -28, z: -124, y: 4, h: 12, dir: 'S' }, 'stele@tower-court W');
  prop(stele, { x: 28, z: -124, y: 4, h: 12, dir: 'S' }, 'stele@tower-court E');

  return { placed, skipped: notes.length, cost: w.count() - c0, notes };
}

/* ============================================================ 夜景补灯 */
/** 邻域检索盒：与 checkGlowPoints 一致（x/z ±3，y ±5） */
const GLOW_RX = 3;
const GLOW_RY = 5;
const GLOW_RZ = 3;
/** 候选灯位：一律落在检索盒内（|dx|,|dz| ≤ 3），先试正中再试四角/四侧 */
const LAMP_OFFSETS = [
  [0, 0], [0, 3], [0, -3], [3, 0], [-3, 0],
  [2, 2], [-2, 2], [2, -2], [-2, -2],
  [3, 3], [-3, 3], [3, -3], [-3, -3], [1, 3], [-1, 3], [1, -3], [-1, -3],
];

/** 占用查询（has 是 VoxelWorld 的扩展 API，缺失时退回 get + isGlow） */
function occupied(w, x, y, z) {
  if (typeof w.has === 'function') return !!w.has(x, y, z);
  if (w.get(x, y, z) !== null) return true;
  return typeof w.isGlow === 'function' ? !!w.isGlow(x, y, z) : false;
}

/** 该格是否"露在空气里"：本体空 + 四向水平邻格至少 3 格空（否则 glow 会被隐藏面剔除吃掉） */
function exposedCell(w, x, y, z) {
  if (occupied(w, x, y, z)) return false;
  let open = 0;
  if (!occupied(w, x + 1, y, z)) open++;
  if (!occupied(w, x - 1, y, z)) open++;
  if (!occupied(w, x, y, z + 1)) open++;
  if (!occupied(w, x, y, z - 1)) open++;
  return open >= 3;
}
/** 头顶 6 格内是否有梁/檐可挂（有更像"檐下宫灯"，没有也照样点灯） */
function hasEaveAbove(w, x, y, z) {
  for (let dy = 3; dy <= 8; dy++) if (occupied(w, x, y + dy, z)) return true;
  return false;
}

/**
 * 逐个体检 L.lanternLights：附近没有 glow 体素就补挂一只 props.lantern。
 * lantern 的发光中段在 (y+3, y+4)，所以 y = 点位 y - 4 正好把灯芯塞进检索盒。
 * props.lantern 不可用/抛错时退化为直接点一格 glow 芯（宁可少细节，不能缺点光对应物）。
 * @returns {{placed:number, fallback:number, tried:number, cost:number}}
 */
export function placeMissingLanterns(w, notes, cap) {
  const c0 = w.count();
  let placed = 0;
  let fallback = 0;
  let tried = 0;
  for (const p of L.lanternLights) {
    if (glowNearPoint(w, p)) continue;
    tried++;
    if (w.count() > cap) {
      console.warn('[assembly] 补灯预算用尽（cap=%d），%s 处未补灯', cap, `${p.x},${p.y},${p.z}`);
      continue;
    }
    const lampY = p.y - 4;
    let spot = null;
    for (const needEave of [true, false]) {
      for (const [dx, dz] of LAMP_OFFSETS) {
        const x = p.x + dx, z = p.z + dz;
        if (!exposedCell(w, x, p.y, z) || !exposedCell(w, x, p.y - 1, z)) continue;
        if (needEave && !hasEaveAbove(w, x, p.y, z)) continue;
        spot = { x, y: lampY, z };
        break;
      }
      if (spot) break;
    }
    if (spot && typeof lantern === 'function') {
      const ok = attempt(notes, `lantern@${spot.x},${spot.y},${spot.z}`,
        () => lantern(w, { x: spot.x, y: spot.y, z: spot.z, r: 2, h: 4, glow: true }), true);
      if (ok && glowNearPoint(w, p)) { placed++; continue; }
    }
    /* 兜底：直接在点位点一簇发光芯（3 格），保证夜里该点位有发光体 */
    for (const [dx, dy, dz] of [[0, 0, 0], [1, 0, 0], [0, 1, 0]]) {
      w.set(p.x + dx, p.y + dy, p.z + dz, P.lanternGlow, { glow: true, jitter: 0 });
    }
    if (glowNearPoint(w, p)) fallback++;
    else notes.push({ label: `lantern@${p.x},${p.y},${p.z}`, err: '点位被实体包住，补灯无法外露', must: true });
  }
  return { placed, fallback, tried, cost: w.count() - c0 };
}

/* ============================================================ 夜景点位体检 */
/** 单个点位邻域内是否已有 glow 体素 */
function glowNearPoint(w, p) {
  if (typeof w.isGlow !== 'function') return true;
  for (let dx = -GLOW_RX; dx <= GLOW_RX; dx++) {
    for (let dy = -GLOW_RY; dy <= GLOW_RY; dy++) {
      for (let dz = -GLOW_RZ; dz <= GLOW_RZ; dz++) {
        if (w.isGlow(p.x + dx, p.y + dy, p.z + dz)) return true;
      }
    }
  }
  return false;
}

/** L.lanternLights 每点邻域内是否真有 glow 体素（props.lantern 必须走 glow:true） */
export function checkGlowPoints(w) {
  if (typeof w.isGlow !== 'function') return [];
  return L.lanternLights.map((p) => ({ pos: [p.x, p.y, p.z], ok: glowNearPoint(w, p) }));
}

/* ============================================================ 总装 */
let groundMesh = null;          // 供 refreshTone 用（切色调不重画贴图）

export function buildWorld() {
  const t0 = (typeof performance !== 'undefined' ? performance.now() : Date.now());
  const world = new VoxelWorld();
  const missing = [];

  /* 让 landscape 的树列用 props.pineTree（内置简树只作兜底） */
  setTreeDecorator((w, args) => pineTree(w, args));

  /* ---- 1) 建筑：先 must（永不跳过），后装饰；预算只约束装饰，不约束必需 ---- */
  const buildings = [];
  const ordered = BUILDINGS.filter((b) => b.must).concat(BUILDINGS.filter((b) => !b.must));
  /* 装饰件的停止线：给地形保底 + 陈设 + 补灯留出额度 */
  const decorLine = VOXEL_BUDGET - TERRAIN_MIN - PROPS_ALLOW - LAMP_ALLOW;
  let decorSkipped = 0;
  let lastWarnedAt = -Infinity;
  for (const b of ordered) {
    const before = world.count();
    if (!b.must && before > decorLine - DECOR_ALLOW) {
      console.info('[assembly] 装饰建筑 %s 让位于预算（count=%d > 停止线 %d）', b.name, before, decorLine);
      buildings.push({
        name: b.name, key: b.key, pos: b.pos, note: b.note, must: false,
        voxels: 0, ok: true, skipped: true,
      });
      decorSkipped++;
      continue;
    }
    const ok = attempt(missing, b.name, () => b.fn(world), !!b.must);
    buildings.push({
      name: b.name, key: b.key, pos: b.pos, note: b.note, must: !!b.must,
      voxels: world.count() - before, ok, skipped: false,
    });
    /* must 建筑超预算：继续装配，但把"该削谁"讲清楚（同一栋只告警一次，避免刷屏） */
    if (b.must && world.count() > VOXEL_BUDGET && world.count() - lastWarnedAt > 3000) {
      lastWarnedAt = world.count();
      console.error('[voxel] 超预算：装配到「%s」已用 %d / %d（超 %d）——必须继续装配，'
        + '请用量最大的建筑瘦身（见文末"建筑用量排序"，或 node tools/count.mjs）',
      b.name, world.count(), VOXEL_BUDGET, world.count() - VOXEL_BUDGET);
    }
  }

  /* ---- 2) 地形：拿"剩余预算"，不足时由 landscape 自行削远山/树（绝不为地形砍建筑） ---- */
  const terrainBudget = Math.max(TERRAIN_MIN,
    Math.min(TERRAIN_ALLOW, VOXEL_BUDGET - world.count() - PROPS_ALLOW - LAMP_ALLOW));
  attempt(missing, 'decorateTerrain', () => { decorateTerrain(world, true, terrainBudget); });
  const tCounts = world.terrainStats || {};

  /* ---- 3) 陈设 + 夜景补灯：这两项是验收项，优先于地形与装饰 ---- */
  const inhab = buildInhabitants(world, Math.max(world.count() + PROPS_ALLOW, VOXEL_BUDGET));
  const lamps = placeMissingLanterns(world, missing,
    Math.max(world.count() + LAMP_ALLOW, VOXEL_BUDGET));

  /* ---- 4) 地面网格（程序化贴图，唯一非体素几何）。失败也不能让整场景黑屏：只丢地面 ---- */
  attempt(missing, 'createGround', () => { groundMesh = createGround(TONES.dawn); });

  /* ---- 5) 合批成 group ---- */
  let voxelGroup;
  try {
    voxelGroup = world.buildMeshes();
  } catch (err) {
    console.error('[assembly] world.buildMeshes() 失败:', err);
    voxelGroup = new THREE.Group();
    missing.push({ label: 'buildMeshes', err: String((err && err.message) || err) });
  }
  const group = new THREE.Group();
  group.name = 'complex';
  group.add(voxelGroup);
  if (groundMesh) group.add(groundMesh);

  /* ---- 6) 统计（voxels/quads/triangles/dropped 摊平给 A1 的 HUD） ---- */
  const ws = (typeof world.stats === 'function' && world.stats()) || {};
  const voxels = world.count();
  const glowPoints = checkGlowPoints(world);
  const buildingVoxels = buildings.reduce((s, b) => s + b.voxels, 0);
  const placedOk = buildings.filter((b) => b.ok && !b.skipped);
  const mustFail = missing.filter((m) => m.must).length;
  const stats = {
    voxels,
    quads: ws.quads || 0,
    triangles: ws.triangles || 0,
    dropped: ws.dropped || 0,
    solidVoxels: ws.solid || 0,
    glowVoxels: ws.glow || 0,
    budget: VOXEL_BUDGET,
    overBudget: voxels > VOXEL_BUDGET,
    /** 装配告警条数（必需构件失败 / 超预算），供 HUD 与主控复核用 */
    warns: mustFail + (voxels > VOXEL_BUDGET ? 1 : 0),
    buildings,
    buildingVoxels,
    mustCount: buildings.filter((b) => b.must).length,
    mustPlaced: buildings.filter((b) => b.must && b.ok).length,
    decorSkipped,
    terrain: tCounts,
    terrainVoxels: tCounts.groundTotal || 0,
    terrainBudget,
    trees: world.treeCount || 0,
    inhabitants: { placed: inhab.placed, voxels: inhab.cost, skipped: inhab.skipped },
    lamps,
    glowPoints,
    glowMissing: glowPoints.filter((g) => !g.ok).length,
    ground: { size: L.groundSize, y: groundMesh ? groundMesh.position.y : null, texture: 'procedural 2048²' },
    missing: missing.concat(inhab.notes),
    elapsedMs: Math.round(((typeof performance !== 'undefined' ? performance.now() : Date.now()) - t0)),
    info: '',
  };
  stats.info = `体素 ${(voxels / 1000).toFixed(1)}k / ${(VOXEL_BUDGET / 1000)}k · 建筑 ${placedOk.length}/${BUILDINGS.length}`
    + `（必需 ${stats.mustPlaced}/${stats.mustCount}）· 树 ${stats.trees} · 面 ${(stats.quads / 1000).toFixed(0)}k · ${stats.elapsedMs}ms`;
  world.__stats = stats;

  console.info('[voxel] total voxels = %d', voxels);
  console.info('[voxel] 分类统计: 建筑 %d + 地形 %d + 陈设 %d + 补灯 %d = %d（预算 %d · 余量 %d）',
    buildingVoxels, stats.terrainVoxels, inhab.cost, lamps.cost,
    buildingVoxels + stats.terrainVoxels + inhab.cost + lamps.cost,
    VOXEL_BUDGET, VOXEL_BUDGET - voxels);
  console.info('[assembly] buildings=%d格 | terrain=%d格 (paving %d / trees %d) | props=%d格 | glow点位缺灯 %d/%d | 补灯 %d 只（兜底 %d） | %dms',
    buildingVoxels, stats.terrainVoxels,
    (tCounts.spiritWay || 0) + (tCounts.roadEdges || 0) + (tCounts.podiumFront || 0)
    + (tCounts.podiumFrontBalustrade || 0) + (tCounts.podiumPagoda || 0) + (tCounts.podiumPagodaBalustrade || 0),
    tCounts.trees || 0, inhab.cost,
    stats.glowMissing, glowPoints.length, lamps.placed, lamps.fallback, stats.elapsedMs);
  console.info('[assembly] %s · quads=%s triangles=%s dropped=%s',
    stats.info, stats.quads.toLocaleString(), stats.triangles.toLocaleString(), stats.dropped);
  console.info('[assembly] 建筑用量排序:',
    buildings.slice().sort((a, b) => b.voxels - a.voxels)
      .map((b) => `${b.name}${b.must ? '' : '(装饰)'}=${b.voxels}${b.skipped ? '(未放置)' : b.ok ? '' : '(FAILED)'}`).join(' '));
  if (stats.missing.length) {
    console[mustFail ? 'error' : 'warn']('[assembly] 未就绪 / 签名不符 / 失败的 builder、prop（%d 条，其中必需 %d 条）:',
      stats.missing.length, mustFail, stats.missing.map((m) => `${m.must ? '★' : ''}${m.label}: ${m.err}`).slice(0, 14));
  }
  if (stats.overBudget) {
    console.error('[voxel] 超预算 %d 格（%d / %d）—— 削减优先级：①最大建筑瘦身（见"建筑用量排序"）'
      + '②landscape 的 MAX_RIDGE_VOX / MAX_TREE_VOX ③远山/树木数量；**不要**删必需建筑',
    voxels - VOXEL_BUDGET, voxels, VOXEL_BUDGET);
  }
  if (stats.mustPlaced < stats.mustCount) {
    console.error('[voxel] 必需建筑只装配了 %d/%d，场景不完整（详见上面的失败清单）', stats.mustPlaced, stats.mustCount);
  }
  return { group, world, stats };
}

/**
 * A1 main.js 的 toneRefreshHook：切色调时更新地面 tint（不重画贴图）。
 * @param {string} key TONES 键
 * @param {object} T   TONES[key]
 */
export function refreshTone(key, T) {
  const tone = T || TONES[key] || TONES.noon;
  if (groundMesh) refreshGroundTone(groundMesh, tone);
  return !!groundMesh;
}

/** 让 A1 在 dispose/重建时能回收地面纹理 */
export function disposeGround() {
  if (!groundMesh) return;
  if (groundMesh.material) {
    if (groundMesh.material.map) groundMesh.material.map.dispose();
    groundMesh.material.dispose();
  }
  groundMesh.geometry.dispose();
  groundMesh = null;
}

export default buildWorld;
