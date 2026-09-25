// Assembles the whole voxel world: terrain, compound, buildings, props, planting.
import { VoxelGrid, Brush, FACING } from '../voxel/grid.js';
import { PAL, M } from '../voxel/palette.js';
import { hash2 } from '../voxel/rng.js';
import { SX, SY, SZ, XC } from './layout.js';
import { T, Z, WX, PAD, S, buildTerrainMaps, makePainter, fillTerrain } from './terrain.js';
import { paintSurfaces, plantCompound, plantOutside } from './compound.js';
import { buildMainHall } from './mainHall.js';
import {
  buildGate, buildTianwang, buildSideHall, buildTower, buildSutra, buildOctPavilion, buildSteleKiosk,
} from './buildings.js';
import { buildPagoda } from './pagoda.js';
import { wallRun, moonGate, buildCorridor, buildCornerTower, buildPaifang, buildBridge } from './structures.js';
import { stairsZ, railX } from './parts.js';
import { censer, stoneLamp } from './props.js';

export function generateWorld() {
  const t0 = performance.now();
  const grid = new VoxelGrid(SX, SY, SZ);
  const maps = buildTerrainMaps();
  const P = makePainter(maps);
  paintSurfaces(P);
  fillTerrain(grid, maps);
  const R = new Brush(grid, 0, 0, 0);
  const A = { labels: [], censers: [], bells: [], drums: [] };
  const ax = XC;
  // gy = where the tag floats; fy = optional height the camera looks at when the tag is clicked
  const label = (name, sub, rank, gx, gy, gz, fy) => A.labels.push({ name, sub, rank, pos: [gx + 0.5, gy, gz], fy });

  // ---- axis: back to front ----------------------------------------------------
  const sutra = buildSutra(new Brush(grid, ax, T.T4, 46));
  label('藏经阁', '重檐歇山顶', 2, ax, T.T4 + sutra.info.roofTop + 8, 46, T.T4 + 22);

  const pag = [];
  for (const s of [-1, 1]) {
    const p = buildPagoda(new Brush(grid, ax + s * 58, T.T4, 70), { scheme: 'brown' });
    pag.push(p);
    label(s < 0 ? '西塔' : '东塔', '七层八角楼阁式塔', 2, ax + s * 58, T.T4 + p.height + 4, 70, T.T4 + 34);
  }

  const mh = buildMainHall(new Brush(grid, ax, T.T3, 112));
  for (const c of mh.anchors.censers) A.censers.push(c);
  label('大雄宝殿', '主殿 · 重檐庑殿顶', 1, ax, T.T3 + mh.info.roofTop + 8, 112, T.T3 + 30);

  // side halls (配殿)
  const sideNames = {
    'E178': ['伽蓝殿', '东配殿 · 歇山顶'],
    'E210': ['观音殿', '东配殿 · 悬山顶'],
    'W178': ['祖师殿', '西配殿 · 歇山顶'],
    'W210': ['药师殿', '西配殿 · 悬山顶'],
  };
  for (const [side, face, sx] of [['E', FACING.W, 1], ['W', FACING.E, -1]]) {
    for (const z of [178, 210]) {
      const near = z === 178;
      const sh = buildSideHall(new Brush(grid, ax + sx * 56, T.T2, z, face), {
        roofType: near ? 'xieshan' : 'gable',
        scheme: near ? 'green' : 'gray',
        rise: near ? 9 : 8,
      });
      const [nm, sub] = sideNames[side + z];
      label(nm, sub, 3, ax + sx * 56, T.T2 + sh.info.roofTop + 6, z);
    }
  }

  const tw = buildTianwang(new Brush(grid, ax, T.T1, 247));
  label('天王殿', '歇山顶', 2, ax, T.T1 + tw.info.roofTop + 7, 247);

  // traditional 东钟西鼓: the bell tower stands to the east, the drum tower to the west
  const bellT = buildTower(new Brush(grid, ax + 50, T.T1, 275, FACING.W), 'bell');
  const drumT = buildTower(new Brush(grid, ax - 50, T.T1, 275, FACING.E), 'drum');
  if (bellT.anchors.bell) A.bells.push(bellT.anchors.bell);
  if (drumT.anchors.drum) A.drums.push(drumT.anchors.drum);
  label('钟楼', '歇山顶', 2, ax + 50, T.T1 + bellT.top + 3, 275);
  label('鼓楼', '歇山顶', 2, ax - 50, T.T1 + drumT.top + 3, 275);

  // stele kiosks in the gate courtyard, monks' quarters beside the main hall, octagonal garden pavilions
  for (const s of [-1, 1]) {
    const k = buildSteleKiosk(new Brush(grid, ax + s * 36, T.T1, 252));
    label('碑亭', '攒尖顶', 3, ax + s * 36, T.T1 + k.top + 2, 252);
    const q = buildSideHall(new Brush(grid, ax + s * 68, T.T3, 122, s > 0 ? FACING.W : FACING.E), {
      roofType: 'hard',
      scheme: 'gray',
      rise: 8,
    });
    label(s < 0 ? '西禅堂' : '东禅堂', '硬山顶', 3, ax + s * 68, T.T3 + q.info.roofTop + 6, 122);
    const o = buildOctPavilion(new Brush(grid, ax + s * 44, T.T4, 42), { r: 7, scheme: 'green' });
    label('八角亭', '攒尖顶', 3, ax + s * 44, T.T4 + o.top + 2, 42);
  }

  const gate = buildGate(new Brush(grid, ax, T.T0, 306));
  label('山门', '歇山顶', 2, ax, T.T0 + gate.info.roofTop + 8, 306);

  const pf = buildPaifang(new Brush(grid, ax, T.T0, 332));
  label('牌坊', '三间四柱', 3, ax, T.T0 + 32, 332);

  buildBridge(grid, ax, PAD.pondZ, 22, 7, 7, 5);
  label('放生池', '石拱桥', 3, ax, T.T0 + 16, PAD.pondZ);
  scatterLotus(grid, maps);

  // ---- walls & corridors ----------------------------------------------------------
  wallRun(grid, maps, { axis: 'x', z: Z.wallN, u0: -WX - 1, u1: WX + 1 });
  wallRun(grid, maps, { axis: 'z', u: -WX, z0: Z.wallN - 1, z1: Z.wallS + 1 });
  wallRun(grid, maps, { axis: 'z', u: WX, z0: Z.wallN - 1, z1: Z.wallS + 1 });
  wallRun(grid, maps, { axis: 'x', z: Z.wallS, u0: -WX - 1, u1: -20 });
  wallRun(grid, maps, { axis: 'x', z: Z.wallS, u0: 20, u1: WX + 1 });
  // cross wall between the gate courtyard and the main courtyard
  const zc = Z.t2t1 + 2;
  wallRun(grid, maps, { axis: 'x', z: zc, u0: -WX + 1, u1: -25, base: T.T2, red: 6 });
  wallRun(grid, maps, { axis: 'x', z: zc, u0: 25, u1: WX - 1, base: T.T2, red: 6 });
  for (const s of [-1, 1]) {
    moonGate(grid, ax + s * 54, zc, T.T2, 3.6);
    stairsZ(R, ax + s * 54 - 2, ax + s * 54 + 2, zc + 1, T.T1, 3, { dir: 1, run: 2 });
  }

  for (const s of [-1, 1]) {
    buildCorridor(new Brush(grid, ax + s * 78, T.T2, 197, s > 0 ? FACING.W : FACING.E), 36);
  }

  // corner towers
  for (const s of [-1, 1]) {
    buildCornerTower(new Brush(grid, ax + s * WX, T.T4, Z.wallN), 8);
    buildCornerTower(new Brush(grid, ax + s * WX, T.T1, Z.wallS), 8);
    label('角楼', '攒尖顶', 3, ax + s * WX, T.T4 + 30, Z.wallN);
  }

  // terrace balustrades & stairs
  railX(R, ax - 83, ax - 13, Z.t3t2, T.T3);
  railX(R, ax + 13, ax + 83, Z.t3t2, T.T3);
  stairsZ(R, ax - 12, ax + 12, Z.t3t2, T.T2, 3, { dir: 1, run: 2, ramp: [ax - 2, ax + 2] });
  for (const [a, b2] of [[-83, -51], [-41, -35], [35, 41], [51, 83]]) railX(R, ax + a, ax + b2, Z.t4t3, T.T4);
  for (const s of [-1, 1]) stairsZ(R, ax + s * 46 - 3, ax + s * 46 + 3, Z.t4t3, T.T3, 3, { dir: 1, run: 2 });

  // ---- courtyard props ------------------------------------------------------------
  const smoke = censer(R, ax, T.T2, 196, true);
  A.censers.push(smoke);
  for (const s of [-1, 1]) {
    for (const z of [270, 292]) stoneLamp(R, ax + s * 8, T.T1, z);
    for (const z of [184, 208, 226]) stoneLamp(R, ax + s * 8, T.T2, z);
    stoneLamp(R, ax + s * 8, T.T4, 64);
    stoneLamp(R, ax + s * 8, T.T0, 322);
    stoneLamp(R, ax + s * 8, T.T0, 344);
  }

  // ---- planting ----------------------------------------------------------------------
  plantCompound(R, maps);
  const flags = typeof location !== "undefined" ? new URLSearchParams(location.search) : new URLSearchParams();
  const outside = flags.get("notrees") ? 0 : plantOutside(R, maps);

  // ---- emissive clusters (for glow halos) -----------------------------------------------
  const glow = collectGlow(grid);

  const t1 = performance.now();
  console.log(`[world] built in ${(t1 - t0).toFixed(0)}ms, solid=${(grid.countSolid() / 1e6).toFixed(2)}M, outside trees=${outside}, glow=${glow.length}`);
  return { grid, maps, anchors: A, glow };
}

/** lotus pads and blossoms floating on the pond (top face sits just above the water plane) */
function scatterLotus(grid, maps) {
  const { SURF, idx } = maps;
  for (let z = 0; z < SZ; z++)
    for (let x = 0; x < SX; x++) {
      if (SURF[idx(x, z)] !== S.BED) continue;
      if (Math.abs(x - XC) < 9) continue; // clear water under the bridge
      // stay off the coping
      let edge = false;
      for (const [dx, dz] of [[2, 0], [-2, 0], [0, 2], [0, -2]]) if (SURF[idx(x + dx, z + dz)] !== S.BED) edge = true;
      if (edge) continue;
      const h = hash2(x >> 1, z >> 1, 71);
      const clump = hash2(x >> 4, z >> 4, 5);
      if (clump < 0.42 && h < 0.5) {
        grid.set(x, 6, z, M.LOTUS);
        if (hash2(x, z, 72) < 0.16) grid.set(x, 7, z, M.LOTUS_P);
      }
    }
}

/** Cluster emissive voxels into ~4-voxel cells; returns [x,y,z,weight,kind] */
function collectGlow(grid) {
  const { data, sx, sy, sz } = grid;
  const cells = new Map();
  const layer = sx * sz;
  for (let y = 6; y < sy; y++) {
    for (let z = 0; z < sz; z++) {
      const row = sx * z + layer * y;
      for (let x = 0; x < sx; x++) {
        const id = data[row + x];
        if (id === 0) continue;
        const g = PAL.glow[id];
        if (g < 0.6) continue;
        // only fully-emissive voxels (lamps, flames, windows) - skip paper windows to keep halos sparse
        const key = ((x >> 2) * 1024 + (z >> 2)) * 64 + (y >> 2);
        let c = cells.get(key);
        if (!c) {
          c = { x: 0, y: 0, z: 0, n: 0, kind: id === M.WINDOW ? 1 : id === M.FLAME || id === M.EMBER ? 2 : 0 };
          cells.set(key, c);
        }
        c.x += x + 0.5;
        c.y += y + 0.5;
        c.z += z + 0.5;
        c.n++;
      }
    }
  }
  const out = [];
  for (const c of cells.values()) if (c.n >= 2) out.push([c.x / c.n, c.y / c.n, c.z / c.n, Math.min(1, c.n / 6), c.kind]);
  return out;
}
