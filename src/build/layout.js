import { C } from '../voxel/palette.js';
import { GY, SX, SZ, AXIS_X } from '../config.js';
import { World, Frame } from '../voxel/world.js';
import { buildHall, buildTower, buildPagoda } from './hall.js';
import { stoneLantern, stoneLion, incenseBurner, stele } from './parts.js';
import { terrain, makeNoise, mulberry32, plant, scatterFlowers } from './nature.js';

/*
 * 总平面（北在上，中轴 x = 96，单位：体素）
 *
 *   z≈0-20    后山缓丘、松林
 *   z=20      北院墙
 *   z≈46      舍利宝塔（八角七层）  东/西禅堂（歇山青瓦）
 *   z=76      隔墙（月洞门）
 *   z≈92      大雄宝殿（重檐庑殿，汉白玉须弥座 + 月台 + 御路踏跺）
 *   z≈142     伽蓝殿 / 祖师殿（硬山青瓦配殿）、香炉、石灯
 *   z≈178     天王殿（单檐歇山黄琉璃）+ 隔墙（月洞门）
 *   z≈204     碑亭 ×2（四角攒尖）；z≈212 钟楼（东）/ 鼓楼（西）（重檐歇山）
 *   z=242     山门殿（单檐歇山绿琉璃，三券门）+ 南院墙
 *   z≈269     放生池 + 石拱桥，石狮一对
 */

const WALL_H = 9;

/** 院墙：红墙、灰砖下碱、青瓦墙帽；moons 为月洞门中心（沿墙方向坐标） */
function wall(w, x0, z0, x1, z1, moons = []) {
  const alongX = x1 - x0 > z1 - z0;
  for (let z = z0; z < z1; z++) {
    for (let x = x0; x < x1; x++) {
      for (let y = GY; y < GY + WALL_H; y++) w.set(x, y, z, y < GY + 2 ? C.brick : C.wallRed);
    }
  }
  // 墙帽
  const ex0 = alongX ? x0 : x0 - 1, ex1 = alongX ? x1 : x1 + 1;
  const ez0 = alongX ? z0 - 1 : z0, ez1 = alongX ? z1 + 1 : z1;
  for (let z = ez0; z < ez1; z++) {
    for (let x = ex0; x < ex1; x++) {
      const edge = alongX ? z === ez0 || z === ez1 - 1 : x === ex0 || x === ex1 - 1;
      w.set(x, GY + WALL_H, z, edge ? C.tileK3 : C.tileK1);
    }
  }
  for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) w.set(x, GY + WALL_H + 1, z, C.ridgeK);
  // 月洞门
  for (const m of moons) {
    const r = 3.6, cy = GY + 4;
    for (let a = m - 6; a < m + 6; a++) {
      for (let y = GY; y < GY + WALL_H; y++) {
        const d = Math.hypot(a + 0.5 - m, y + 0.5 - cy);
        const open = d < r && y >= GY;
        const trim = !open && d < r + 1.1;
        if (!open && !trim) continue;
        for (let b = alongX ? z0 : x0; b < (alongX ? z1 : x1); b++) {
          const x = alongX ? a : b, z = alongX ? b : a;
          w.set(x, y, z, open ? 0 : C.marble2);
        }
      }
    }
  }
}

export function generateWorld(onProgress = () => {}) {
  const w = new World();
  const rng = mulberry32(20240917);
  const noise = makeNoise(4242);
  const hm = terrain(w, noise);
  const setTop = (x, z, c) => {
    if (x < 0 || z < 0 || x >= SX || z >= SZ) return;
    w.set(x, hm[z * SX + x] - 1, z, c);
  };
  const paint = (x0, z0, x1, z1, fn) => {
    for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) setTop(x, z, fn(x, z));
  };
  const paveFn = (x, z) => (((x >> 1) + (z >> 1)) & 1 ? C.pave : C.pave2);
  const grassFn = (x, z) => (noise.fbm(x * 0.2, z * 0.2) < 0.5 ? C.grass : C.grass2);
  const plot = (x0, z0, x1, z1) =>
    paint(x0, z0, x1, z1, (x, z) => (x === x0 || x === x1 - 1 || z === z0 || z === z1 - 1 ? C.roadEdge : grassFn(x, z)));
  const road = (x0, z0, x1, z1) => {
    const alongZ = z1 - z0 > x1 - x0;
    paint(x0, z0, x1, z1, (x, z) => {
      const edge = alongZ ? x === x0 || x === x1 - 1 : z === z0 || z === z1 - 1;
      return edge ? C.roadEdge : (alongZ ? z : x) % 4 === 0 ? C.roadEdge : C.road;
    });
  };
  onProgress('铺装地面');

  // —— 地面铺装 ——
  paint(26, 22, 166, 241, paveFn); // 院内方砖
  plot(26, 22, 72, 76); // 后院草地
  plot(120, 22, 166, 76);
  plot(72, 132, 84, 162); // 中院树池
  plot(108, 132, 120, 162);
  plot(28, 224, 84, 238); // 前院草地
  plot(108, 224, 164, 238);
  paint(68, 243, 124, 258, paveFn); // 山门前广场
  road(91, 22, 101, SZ); // 中轴御道
  road(61, 209, 91, 215); // 通钟鼓楼
  road(101, 209, 131, 215);
  road(64, 139, 91, 145); // 通配殿
  road(101, 139, 128, 145);
  road(70, 43, 91, 49); // 通禅堂
  road(101, 43, 122, 49);

  // —— 放生池 ——
  const pc = { x: 96, z: 269, rx: 34, rz: 9.5 };
  const pq = (x, z) => ((x + 0.5 - pc.x) / pc.rx) ** 2 + ((z + 0.5 - pc.z) / pc.rz) ** 2;
  for (let z = 255; z < 283; z++) {
    for (let x = 58; x < 134; x++) {
      const q = pq(x, z);
      if (q < 1) {
        for (let y = 1; y < GY + 1; y++) w.set(x, y, z, 0);
        w.set(x, 0, z, C.pondBed);
        hm[z * SX + x] = 1;
      } else if (q < 1.25) {
        setTop(x, z, rng() < 0.5 ? C.rock : C.rock2);
        if (rng() < 0.2) w.set(x, GY, z, rng() < 0.5 ? C.rock : C.rock2);
      }
    }
  }
  // 荷叶荷花
  for (let i = 0; i < 70; i++) {
    const x = 64 + ((rng() * 64) | 0), z = 261 + ((rng() * 16) | 0);
    if (pq(x, z) > 0.75 || Math.abs(x + 0.5 - AXIS_X) < 8) continue;
    const r = 1 + rng() * 1.3;
    for (let dz = -2; dz <= 2; dz++) {
      for (let dx = -2; dx <= 2; dx++) {
        if (dx * dx + dz * dz > r * r || pq(x + dx, z + dz) > 0.85) continue;
        w.set(x + dx, 2, z + dz, C.lotusLeaf);
      }
    }
    if (rng() < 0.45) w.set(x, 3, z, C.lotusFlower);
  }
  // 石拱桥
  {
    const z0 = 257, z1 = 282, L = z1 - z0;
    for (let z = z0; z < z1; z++) {
      const top = GY + Math.round(3.5 * Math.sin((Math.PI * (z + 0.5 - z0)) / L));
      for (let x = 91; x < 101; x++) {
        const rail = x === 91 || x === 100;
        for (let y = 0; y <= top; y++) {
          const dz = z + 0.5 - pc.z, yy = y + 0.5;
          if (dz * dz + yy * yy < 5.2 * 5.2 && y < top - 1) {
            w.set(x, y, z, 0);
            continue;
          }
          w.set(x, y, z, y === top ? (rail ? C.marble2 : (z & 3) === 0 ? C.stone : C.stoneTop) : C.stone);
        }
        if (rail) {
          w.set(x, top + 1, z, C.marble);
          if (z % 3 === 0) w.set(x, top + 2, z, C.marble);
        }
      }
    }
  }

  const label = (name, fr, peak, sub) => w.labels.push({ name, sub, ...fr.toWorld(0, peak + 5, 0) });

  onProgress('营造山门');
  // —— 山门殿 ——
  {
    const fr = new Frame(w, AXIS_X, 242, 'S');
    const info = buildHall(fr, {
      hw: 16, hd: 7, bays: [10, 12, 10], sideBays: 2, colH: 11, facade: 'gate',
      ph: 2, pm: 2, stairs: [{ side: 'front', w: 12 }, { side: 'back', w: 12 }],
      K: 2, ov: 6, roof: 'xieshan', tiles: 'green', plaque: true, lanterns: true,
      arches: [{ uc: 0, halfW: 3, h: 7 }, { uc: 11, halfW: 2, h: 5, door: true }],
    });
    label('山门殿', fr, info.peak, '单檐歇山 · 绿琉璃 · 三券门');
  }

  onProgress('营造钟鼓楼');
  // —— 钟楼（东）/ 鼓楼（西） ——
  {
    const a = buildTower(w, 140, 212, 'W', 'bell');
    w.labels.push({ name: '钟楼', sub: '重檐歇山 · 晨钟', x: 140, y: a.peak + 5, z: 212 });
    const b = buildTower(w, 52, 212, 'E', 'drum');
    w.labels.push({ name: '鼓楼', sub: '重檐歇山 · 暮鼓', x: 52, y: b.peak + 5, z: 212 });
  }
  // —— 碑亭 ——
  for (const cx of [76, 116]) {
    const fr = new Frame(w, cx, 204, 'S');
    const info = buildHall(fr, {
      hw: 4, hd: 4, bays: [8], sideBays: 1, colH: 7, facade: 'open',
      ph: 2, pm: 1, stairs: [{ side: 'front', w: 4 }], K: 2, ov: 4, roof: 'pyramid', tiles: 'green', R: 8,
    });
    stele(fr, info.y0);
    label('碑亭', fr, info.peak, '四角攒尖');
  }

  onProgress('营造天王殿');
  // —— 天王殿 ——
  {
    const fr = new Frame(w, AXIS_X, 178, 'S');
    const info = buildHall(fr, {
      hw: 18, hd: 9, porch: 3, bays: [6, 8, 8, 8, 6], sideBays: 3, colH: 10, facade: 'doors',
      ph: 3, pm: 3, stairs: [{ side: 'front', w: 10 }, { side: 'back', w: 10 }],
      K: 3, ov: 6, roof: 'xieshan', tiles: 'yellow', plaque: true, lanterns: true,
    });
    label('天王殿', fr, info.peak, '单檐歇山 · 黄琉璃');
  }

  onProgress('营造配殿');
  // —— 配殿：伽蓝殿（东）/ 祖师殿（西） ——
  for (const [cx, facing, name] of [[138, 'W', '伽蓝殿'], [54, 'E', '祖师殿']]) {
    const fr = new Frame(w, cx, 142, facing);
    const info = buildHall(fr, {
      hw: 16, hd: 7, porch: 2, bays: [6, 6, 8, 6, 6], sideBays: 2, colH: 9, facade: 'doors',
      ph: 2, pm: 2, stairs: [{ side: 'front', w: 8 }], K: 2, ov: 5, roof: 'yingshan', tiles: 'grey',
      plaque: true, lanterns: true,
    });
    label(name, fr, info.peak, '配殿 · 硬山青瓦');
  }

  onProgress('营造大雄宝殿');
  // —— 大雄宝殿 ——
  {
    const fr = new Frame(w, AXIS_X, 92, 'S');
    const info = buildHall(fr, {
      hw: 21, hd: 14, porch: 3, bays: [6, 6, 6, 6, 6, 6, 6], sideBays: 4, colH: 12, facade: 'doors',
      ph: 5, pmSide: 7, pmBack: 6, pmFront: 16, platform: 'xumizuo', rail: true,
      stairs: [{ side: 'front', w: 18, sd: 2, yulu: 6 }, { side: 'back', w: 8 }],
      K: 3, ov: 7, roof: 'hip', tiles: 'yellow',
      double: { inset: 5, R: 5, wallH: 3, K: 2, ov: 6 }, plaque: true, lanterns: true,
    });
    label('大雄宝殿', fr, info.peak, '重檐庑殿 · 须弥座 · 月台');
  }

  onProgress('营造禅堂与宝塔');
  // —— 后院：东/西禅堂 ——
  for (const [cx, facing, name] of [[136, 'W', '东禅堂'], [56, 'E', '西禅堂']]) {
    const fr = new Frame(w, cx, 46, facing);
    const info = buildHall(fr, {
      hw: 12, hd: 6, porch: 2, bays: [8, 8, 8], sideBays: 2, colH: 8, facade: 'doors',
      ph: 2, pm: 2, stairs: [{ side: 'front', w: 8 }], K: 2, ov: 5, roof: 'xieshan', tiles: 'grey', plaque: true,
    });
    label(name, fr, info.peak, '单檐歇山 · 青瓦');
  }
  // —— 舍利宝塔 ——
  {
    const p = buildPagoda(w, AXIS_X, 46);
    w.labels.push({ name: '舍利宝塔', sub: '八角七层 · 楼阁式', x: AXIS_X, y: p.peak + 4, z: 46 });
  }

  onProgress('砌筑院墙');
  // —— 院墙 ——
  wall(w, 24, 241, 80, 243);
  wall(w, 112, 241, 168, 243);
  wall(w, 24, 20, 168, 22);
  wall(w, 24, 22, 26, 241);
  wall(w, 166, 22, 168, 241);
  wall(w, 26, 177, 75, 179, [48]);
  wall(w, 117, 177, 166, 179, [144]);
  wall(w, 26, 76, 67, 78, [46]);
  wall(w, 125, 76, 166, 78, [146]);

  onProgress('陈设石狮、香炉、石灯');
  // —— 陈设 ——
  const G = new Frame(w, 0, 0, 'S');
  stoneLion(G, 82, 251, false);
  stoneLion(G, 106, 251, true);
  stoneLion(G, 80, 123, false);
  stoneLion(G, 108, 123, true);
  incenseBurner(new Frame(w, AXIS_X, 148, 'S'));
  for (const z of [134, 156, 195, 226, 62, 284]) {
    stoneLantern(G, 85, z);
    stoneLantern(G, 103, z);
  }
  w.labels.push({ name: '放生池', sub: '石拱桥 · 荷花', x: AXIS_X, y: 14, z: 269 });

  onProgress('植树');
  // —— 植物 ——
  const mirror = (x) => SX - 1 - x;
  for (const x of [34, 48, 62, 76]) {
    plant(w, rng, 'pine', x, 231);
    plant(w, rng, 'pine', mirror(x), 231);
  }
  for (const [x, z] of [[75, 135], [80, 136], [75, 150], [80, 155], [76, 159]]) {
    plant(w, rng, 'cypress', x, z);
    plant(w, rng, 'cypress', mirror(x), z);
  }
  plant(w, rng, 'ginkgo', 77, 66, true);
  plant(w, rng, 'ginkgo', mirror(77), 66, true);
  for (const [x, z] of [[34, 28], [34, 68], [44, 72]]) {
    plant(w, rng, 'maple', x, z);
    plant(w, rng, 'maple', mirror(x), z);
  }
  for (const [x, z] of [[82, 28], [110, 28]]) plant(w, rng, 'cypress', x, z, true);
  for (const [x, z] of [[30, 185], [161, 185], [30, 170], [161, 170]]) plant(w, rng, 'blossom', x, z, true);

  // 院外：东西林带、北侧后山、南侧池畔
  const kinds = ['pine', 'pine', 'pine', 'cypress', 'maple', 'maple', 'ginkgo', 'blossom'];
  const forest = (x0, z0, x1, z1, step, p) => {
    for (let z = z0; z < z1; z += step) {
      for (let x = x0; x < x1; x += step) {
        if (rng() > p) continue;
        const jx = x + ((rng() * step) | 0), jz = z + ((rng() * step) | 0);
        plant(w, rng, kinds[(rng() * kinds.length) | 0], jx, jz);
      }
    }
  };
  forest(2, 4, 21, 286, 8, 0.8);
  forest(171, 4, 190, 286, 8, 0.8);
  forest(26, 3, 166, 17, 9, 0.75);
  // 池畔垂柳
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.3;
    const x = Math.round(pc.x + Math.cos(a) * (pc.rx + 5)), z = Math.round(pc.z + Math.sin(a) * (pc.rz + 4));
    if (Math.abs(x - AXIS_X) < 12) continue;
    plant(w, rng, 'willow', x, z);
  }
  for (let i = 0; i < 26; i++) {
    const x = 28 + ((rng() * 136) | 0), z = 246 + ((rng() * 40) | 0);
    if (pq(x, z) < 1.8 || (x > 64 && x < 128 && z < 260) || Math.abs(x - AXIS_X) < 10) continue;
    plant(w, rng, rng() < 0.5 ? 'blossom' : rng() < 0.5 ? 'maple' : 'bush', x, z);
  }
  // 院内草地灌木
  for (const [x, z] of [[40, 50], [30, 40], [150, 50], [160, 40], [36, 232], [155, 232]]) plant(w, rng, 'bush', x, z);

  scatterFlowers(w, rng, 900, 0, 0, SX, SZ);

  onProgress('完成');
  return w;
}

