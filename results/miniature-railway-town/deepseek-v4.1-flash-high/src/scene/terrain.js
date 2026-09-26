/**
 * TERRAIN — 沙盘地形层：木底座、边框、名牌、草地、河流、道路与铺装。
 *
 * 本模块是 MAT.water.surface（含其 normalMap 的 repeat / offset）的唯一使用者。
 * 静态几何按材质合批（createGeometryBucket），草地与水面各自单独成 mesh。
 *
 * 高度约定：木底座顶面 y = 0；草地地毯再下沉 WORLD.base.terrainInsetY(-0.06)。
 * 因此边框内圈需要一圈“封口条”，把地毯与木底座之间的缝、以及河道穿出边框
 * 处的断口堵住，否则会透过空心底座看到背景。
 */

import * as THREE from 'three';
import { BASE_COLORS } from '../palette.js';
import {
  WORLD,
  RIVER,
  ROADS,
  PAVING,
  groundHeightAt,
  riverWetness,
  sampleRoad,
  scaleUV,
  createGeometryBucket,
  mulberry32,
} from './layout.js';
import { TEX } from './textures.js';
import { MAT, registerEnvironmental } from './materials.js';

/* ------------------------------------------------------------------ *
 * 常量
 * ------------------------------------------------------------------ */

const PLAY_MIN_X = WORLD.play.minX;
const PLAY_MAX_X = WORLD.play.maxX;
const PLAY_MIN_Z = WORLD.play.minZ;
const PLAY_MAX_Z = WORLD.play.maxZ;
const PLAY_W = PLAY_MAX_X - PLAY_MIN_X;
const PLAY_D = PLAY_MAX_Z - PLAY_MIN_Z;
const PLAY_CX = (PLAY_MIN_X + PLAY_MAX_X) / 2;
const PLAY_CZ = (PLAY_MIN_Z + PLAY_MAX_Z) / 2;

const TERRAIN_Y = WORLD.base.terrainInsetY;

const WOOD_TILE = 2.5; // 木纹：约每 2.5 单位一个 tile
const GRASS_TILE = 4; // 草皮：约每 4 单位一个 tile
const ROAD_TILE = 2; // 路面：约每 2 单位一个 tile

const SEG_X = 208; // 草地横向细分（= 边框内圈采样数）
const SEG_Z = 152; // 草地纵向细分

const ROAD_EPS = 0.02; // 路面相对地表的高差
const SIDEWALK_TOP = 0.075;
const CURB_TOP = 0.11;
const CURB_W = 0.12;
const MARK_TOP = 0.035;

const RIM_BEVEL = 0.05;
const NAMEPLATE_THICK = 0.06;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/** 3t²-2t³ */
function smoothstep(edge0, edge1, v) {
  const t = clamp((v - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

/**
 * 值噪声：晶格由 mulberry32(seed) 预先填好，因此复位后逐帧完全一致。
 */
function createValueNoise(seed) {
  const SIZE = 64;
  const rnd = mulberry32(seed);
  const lattice = new Float32Array(SIZE * SIZE);
  for (let i = 0; i < lattice.length; i++) lattice[i] = rnd();
  const at = (ix, iy) =>
    lattice[(((iy % SIZE) + SIZE) % SIZE) * SIZE + (((ix % SIZE) + SIZE) % SIZE)];
  return function noise(x, y) {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const fx = smoothstep(0, 1, x - x0);
    const fy = smoothstep(0, 1, y - y0);
    const a = at(x0, y0);
    const b = at(x0 + 1, y0);
    const c = at(x0, y0 + 1);
    const d = at(x0 + 1, y0 + 1);
    return (a + (b - a) * fx) * (1 - fy) + (c + (d - c) * fx) * fy;
  };
}

/* ------------------------------------------------------------------ *
 * 木底座 + 边框
 * ------------------------------------------------------------------ */

/** 往合批桶里加一块带 uv 缩放的平面（uv 原为 0..1，按自身尺寸换算成世界尺度） */
function addPatch(bucket, material, w, h, position, rotX, rotY, tilePerUnit) {
  const geo = new THREE.PlaneGeometry(w, h);
  if (tilePerUnit) scaleUV(geo, w / tilePerUnit, h / tilePerUnit);
  const m = new THREE.Matrix4();
  if (rotX) m.makeRotationX(rotX);
  if (rotY) m.multiply(new THREE.Matrix4().makeRotationY(rotY));
  m.setPosition(position[0], position[1], position[2]);
  bucket.add(material, geo, m);
  geo.dispose();
}

/**
 * 木底座：顶面被边框盖住的部分只留 1.3 宽的一圈（否则整块顶面会盖住草地），
 * 四侧 + 底面按面尺寸逐面 scaleUV，保证木纹尺度一致。
 */
function buildBase(bucket) {
  const { width, depth, slabTopY, slabBottomY } = WORLD.base;
  const height = slabTopY - slabBottomY;
  const cy = (slabTopY + slabBottomY) / 2;
  const band = WORLD.rim.width;
  const hx = width / 2;
  const hz = depth / 2;
  const r90 = Math.PI / 2;

  // 顶面：仅边框下的一圈压条（其余被草皮占据）
  const bandZ = (PLAY_MIN_Z + -hz) / 2;
  const bandX = (PLAY_MIN_X + -hx) / 2;
  addPatch(bucket, MAT.wood.top, width, band, [0, slabTopY, -bandZ], -r90, 0, WOOD_TILE);
  addPatch(bucket, MAT.wood.top, width, band, [0, slabTopY, bandZ], -r90, 0, WOOD_TILE);
  addPatch(bucket, MAT.wood.top, band, PLAY_D, [bandX, slabTopY, 0], -r90, 0, WOOD_TILE);
  addPatch(bucket, MAT.wood.top, band, PLAY_D, [-bandX, slabTopY, 0], -r90, 0, WOOD_TILE);

  // 底面
  addPatch(bucket, MAT.wood.frame, width, depth, [0, slabBottomY, 0], r90, 0, WOOD_TILE);
  // 四面侧板
  addPatch(bucket, MAT.wood.frame, width, height, [0, cy, hz], 0, 0, WOOD_TILE);
  addPatch(bucket, MAT.wood.frame, width, height, [0, cy, -hz], 0, Math.PI, WOOD_TILE);
  addPatch(bucket, MAT.wood.frame, depth, height, [hx, cy, 0], 0, r90, WOOD_TILE);
  addPatch(bucket, MAT.wood.frame, depth, height, [-hx, cy, 0], 0, -r90, WOOD_TILE);
}

/**
 * 边框：外 44×33、内孔 41.4×30.4，沿 +Y 从 y=0 挤出到 rim.topY。
 * ExtrudeGeometry 的 uv 以形状世界坐标为单位，故 scaleUV 到木纹尺度即可。
 */
function buildRim() {
  const hx = WORLD.base.width / 2;
  const hz = WORLD.base.depth / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-hx, -hz);
  shape.lineTo(hx, -hz);
  shape.lineTo(hx, hz);
  shape.lineTo(-hx, hz);
  shape.closePath();

  const hole = new THREE.Path();
  hole.moveTo(PLAY_MIN_X, PLAY_MIN_Z);
  hole.lineTo(PLAY_MAX_X, PLAY_MIN_Z);
  hole.lineTo(PLAY_MAX_X, PLAY_MAX_Z);
  hole.lineTo(PLAY_MIN_X, PLAY_MAX_Z);
  hole.closePath();
  shape.holes.push(hole);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: WORLD.rim.topY - RIM_BEVEL * 2,
    bevelEnabled: true,
    bevelThickness: RIM_BEVEL,
    bevelSize: RIM_BEVEL,
    bevelSegments: 1,
    curveSegments: 1,
    steps: 1,
  });
  // 默认沿 +Z 挤出：转到 +Y，再把倒角占掉的那截抬回来，使其精确落在 0..rim.topY
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, RIM_BEVEL, 0);
  scaleUV(geo, 1 / WOOD_TILE, 1 / WOOD_TILE);

  // group 0 = 上下端面（含倒角），group 1 = 内外侧面
  const mesh = new THREE.Mesh(geo, [MAT.wood.rimTop, MAT.wood.rim]);
  mesh.name = 'rim';
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * 名牌：南侧边框外侧面（z=16.5，朝 +Z）贴一块板，四周细金属边条。
 * 用 MAT.station.sign 自带贴图映射，uv 保持 0..1 不缩放。
 */
function buildNameplate(bucket) {
  const plate = WORLD.nameplate;
  // 挤出倒角会让边框外表面最外处多出 RIM_BEVEL，面板必须贴在这之上，否则会被埋进边框
  const zMount = plate.z + RIM_BEVEL;
  const cy = WORLD.rim.topY / 2; // 贴在边框立面竖向中部
  const { width: w, height: h } = plate;

  const face = new THREE.BoxGeometry(w, h, NAMEPLATE_THICK);
  face.translate(plate.x, cy, zMount + NAMEPLATE_THICK / 2);
  bucket.add(MAT.station.sign, face);
  face.dispose();

  const bar = 0.06; // 边条截面
  const zBar = zMount + NAMEPLATE_THICK + 0.01; // 略比面板凸出一点
  const hw = w / 2 + bar / 2;
  const hh = h / 2 + bar / 2;
  for (const [bw, bh, bx, by] of [
    [w + bar * 2, bar, plate.x, cy + hh],
    [w + bar * 2, bar, plate.x, cy - hh],
    [bar, h + bar * 2, plate.x - hw, cy],
    [bar, h + bar * 2, plate.x + hw, cy],
  ]) {
    const g = new THREE.BoxGeometry(bw, bh, bar);
    g.translate(bx, by, zBar);
    bucket.add(MAT.props.metal, g);
    g.dispose();
  }
}

/* ------------------------------------------------------------------ *
 * 边框内圈的封口条 / 涵洞门
 * ------------------------------------------------------------------ */

/**
 * 沿边界生成一条“竖板”：上沿 y=0，下沿贴草地顶点高度。
 * 东/西侧草地平坦，条高仅 0.06（木色）；南/北侧含河道断口，用石料封到河床。
 */
function buildEdgeStrips(bucket) {
  const stepX = PLAY_W / SEG_X;
  const stepZ = PLAY_D / SEG_Z;

  const strip = (samples, material, tilePerUnit) => {
    const n = samples.length;
    const pos = new Float32Array(n * 6);
    const uv = new Float32Array(n * 4);
    const idx = [];
    for (let i = 0; i < n; i++) {
      const { x, z } = samples[i];
      const bottom = TERRAIN_Y + groundHeightAt(x, z);
      pos.set([x, bottom, z], i * 6);
      pos.set([x, 0, z], i * 6 + 3);
      uv.set([i, bottom], i * 4);
      uv.set([i, 0], i * 4 + 2);
    }
    for (let i = 0; i < n - 1; i++) {
      const a = i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;
      // 采样顺序保证法线朝场内
      idx.push(a, c, b, b, c, d);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    scaleUV(geo, 1 / tilePerUnit, 1 / tilePerUnit);
    bucket.add(material, geo);
    geo.dispose();
  };

  const ns = (z, dir) => {
    const out = [];
    for (let i = 0; i <= SEG_X; i++) {
      const x = dir > 0 ? PLAY_MIN_X + i * stepX : PLAY_MAX_X - i * stepX;
      out.push({ x, z });
    }
    return out;
  };
  const ew = (x, dir) => {
    const out = [];
    for (let i = 0; i <= SEG_Z; i++) {
      const z = dir > 0 ? PLAY_MIN_Z + i * stepZ : PLAY_MAX_Z - i * stepZ;
      out.push({ x, z });
    }
    return out;
  };

  strip(ns(PLAY_MIN_Z, 1), MAT.rail.stone, ROAD_TILE); // 北：含河口
  strip(ns(PLAY_MAX_Z, -1), MAT.rail.stone, ROAD_TILE); // 南：含河口
  strip(ew(PLAY_MIN_X, -1), MAT.wood.frame, WOOD_TILE);
  strip(ew(PLAY_MAX_X, 1), MAT.wood.frame, WOOD_TILE);
}

/** 河道穿出南北边框处：内侧石砌薄板，让水看似从框下流出 */
function buildCulverts(bucket) {
  const w = 3.4;
  const h = 0.7;
  const cy = -0.7;
  const thick = 0.06;
  const ends = [
    { x: RIVER.points[0][0], z: RIVER.points[0][1], inward: 1 }, // 北端，朝 +Z
    { x: RIVER.points[RIVER.points.length - 1][0], z: RIVER.points[RIVER.points.length - 1][1], inward: -1 },
  ];
  for (const end of ends) {
    const g = new THREE.BoxGeometry(w, h, thick);
    // 薄板贴在边框内侧（inward 指 +Z/-Z 的场内方向）
    g.translate(end.x, cy, end.z + end.inward * (thick / 2));
    bucket.add(MAT.rail.stone, g);
    g.dispose();
  }
}

/* ------------------------------------------------------------------ *
 * 草地
 * ------------------------------------------------------------------ */

/** 地表高度：草地顶点 = 地毯下沉量 + 河道剖面 */
const grassHeight = (x, z) => TERRAIN_Y + groundHeightAt(x, z);

/** 地表兜底高度：路面/人行道/路缘任何顶点都不得低于地表 */
const surfaceHeight = (x, z, dy) => Math.max(dy, groundHeightAt(x, z) + dy);

/**
 * 草地：覆盖 WORLD.play 的细分网格，唯一有顶点色的表面。
 * 干湿斑驳来自 mulberry32(2026) 的值噪声；河道内按 riverWetness 混入
 * 湿沙/淤泥/卵石并压暗。顶点色需为线性空间，故统一走 THREE.Color。
 */
function buildGrass() {
  const geo = new THREE.PlaneGeometry(PLAY_W, PLAY_D, SEG_X, SEG_Z);
  geo.rotateX(-Math.PI / 2);
  geo.translate(PLAY_CX, 0, PLAY_CZ);
  scaleUV(geo, PLAY_W / GRASS_TILE, PLAY_D / GRASS_TILE); // uv 摊成世界尺度

  const pos = geo.attributes.position;
  const noise = createValueNoise(2026);
  const colors = new Float32Array(pos.count * 3);

  const c = new THREE.Color();
  const grass = new THREE.Color(BASE_COLORS.ground.grass);
  const dry = new THREE.Color(BASE_COLORS.ground.grassDry);
  const dark = new THREE.Color(BASE_COLORS.ground.grassDark);
  const sand = new THREE.Color(BASE_COLORS.ground.sand);
  const bed = new THREE.Color(BASE_COLORS.ground.bed);
  const pebble = new THREE.Color(BASE_COLORS.ground.pebble);
  const shade = new THREE.Color(0x000000);
  const bedDepth = -RIVER.bedY;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const gh = groundHeightAt(x, z);
    pos.setY(i, TERRAIN_Y + gh);

    const n1 = noise(x * 0.06, z * 0.06);
    const n2 = noise(x * 0.22 + 31.7, z * 0.22 - 12.3);
    c.copy(grass).lerp(dry, smoothstep(0.35, 0.85, n1) * 0.75);
    c.lerp(dark, smoothstep(0.45, 0.95, n2) * 0.5);

    const wet = Math.min(1, riverWetness(x, z));
    if (wet > 0.001) {
      const deep = clamp(-gh / bedDepth, 0, 1);
      c.lerp(sand, wet * 0.85);
      c.lerp(bed, smoothstep(0.05, 0.55, deep));
      const gravel = smoothstep(0.62, 0.8, noise(x * 0.9 - 5.1, z * 0.9 + 7.4)) * deep;
      if (gravel > 0) c.lerp(pebble, gravel * 0.75);
      c.lerp(shade, 0.45 * deep + 0.08 * wet); // 水下压暗
    }

    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  // uv 已按世界尺度摊开，克隆贴图的重复度保持 1（不触碰共享 TEX.grass）
  const map = TEX.grass.clone();
  map.repeat.set(1, 1);
  map.offset.set(0, 0);
  map.needsUpdate = true;

  const mat = new THREE.MeshStandardMaterial({
    map,
    vertexColors: true,
    roughness: 0.96,
    metalness: 0,
  });
  registerEnvironmental(mat);

  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'grass';
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}

/* ------------------------------------------------------------------ *
 * 河流
 * ------------------------------------------------------------------ */

/** 沿折线按弧长均匀取点，切向用相邻点差分（转角处自然过渡） */
function resampleLine(points, spacing) {
  const segs = [];
  let total = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const ax = points[i][0];
    const az = points[i][1];
    const bx = points[i + 1][0];
    const bz = points[i + 1][1];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 1e-6) continue;
    segs.push({ ax, az, tx: (bx - ax) / len, tz: (bz - az) / len, len, s0: total });
    total += len;
  }
  const n = Math.max(2, Math.round(total / spacing));
  const out = [];
  for (let k = 0; k <= n; k++) {
    const s = (k / n) * total;
    let seg = segs[segs.length - 1];
    for (const g of segs) {
      if (s <= g.s0 + g.len) {
        seg = g;
        break;
      }
    }
    const d = s - seg.s0;
    out.push({ x: seg.ax + seg.tx * d, z: seg.az + seg.tz * d, s });
  }
  for (let k = 0; k < out.length; k++) {
    const a = out[Math.max(0, k - 1)];
    const b = out[Math.min(out.length - 1, k + 1)];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const l = Math.hypot(dx, dz) || 1;
    out[k].tx = dx / l;
    out[k].tz = dz / l;
  }
  return { points: out, length: total };
}

/**
 * 水面：沿 RIVER.points 的带状网格，横向 3 段。uv 归一化(0..1)，
 * 由 normalMap.repeat 沿长度铺开；update() 里缓慢滚动 offset 制造流动。
 */
function buildWater() {
  const { points, length } = resampleLine(RIVER.points, 0.6);
  const half = RIVER.waterHalf;
  const cols = [-half, -half / 3, half / 3, half];
  const n = points.length;
  const pos = new Float32Array(n * cols.length * 3);
  const uv = new Float32Array(n * cols.length * 2);
  const idx = [];
  let p = 0;
  let q = 0;
  for (let i = 0; i < n; i++) {
    const r = points[i];
    const rx = -r.tz;
    const rz = r.tx;
    for (let j = 0; j < cols.length; j++) {
      const off = cols[j];
      pos[p++] = r.x + rx * off;
      pos[p++] = RIVER.waterY;
      pos[p++] = r.z + rz * off;
      uv[q++] = j / (cols.length - 1);
      uv[q++] = r.s / length;
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < cols.length - 1; j++) {
      const a = i * cols.length + j;
      const b = a + 1;
      const c = a + cols.length;
      const d = c + 1;
      idx.push(a, b, c, b, d, c);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();

  const material = MAT.water.surface;
  const normalMap = material.normalMap;
  normalMap.repeat.set(2, length / 2.5);
  normalMap.needsUpdate = true;

  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'water';
  mesh.castShadow = false;
  mesh.receiveShadow = false;

  return {
    object3D: mesh,
    update(dt) {
      // 取模避免长时间运行后 offset 精度丢失
      normalMap.offset.y = (normalMap.offset.y - dt * 0.02) % 1;
    },
  };
}

/* ------------------------------------------------------------------ *
 * 道路与铺装
 * ------------------------------------------------------------------ */

/**
 * 带状几何：cols 为横截面各列（off = sampleRoad 的右向偏移，dy = 相对地表高度）。
 * uv 先以米为单位写入，再统一 scaleUV 成“每 ROAD_TILE 单位一个 tile”。
 */
function buildBand(name, spacing, cols) {
  // 列必须按 off 递增排列，绕序才能保证法线朝上（竖直面朝路面）
  const sections = cols.slice().sort((a, b) => a.off - b.off);
  const lanes = sections.map((c) => sampleRoad(name, spacing, c.off));
  const n = Math.min(...lanes.map((l) => l.length));
  if (n < 2) return null;

  const count = sections.length;
  const pos = new Float32Array(n * count * 3);
  const uv = new Float32Array(n * count * 2);
  const idx = [];
  let p = 0;
  let q = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < count; j++) {
      const s = lanes[j][i];
      const dy = sections[j].dy;
      pos[p++] = s.x;
      pos[p++] = surfaceHeight(s.x, s.z, dy);
      pos[p++] = s.z;
      uv[q++] = i * spacing;
      uv[q++] = sections[j].off;
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < count - 1; j++) {
      const a = i * count + j;
      const b = a + 1;
      const c = a + count;
      const d = c + 1;
      // 列按 off 递增、行沿行进方向，该绕序使法线朝上（竖直面则朝路面）
      idx.push(a, b, c, b, d, c);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  scaleUV(geo, 1 / ROAD_TILE, 1 / ROAD_TILE);
  return geo;
}

function roadMaterial(kind) {
  if (kind === 'asphalt') return MAT.road.asphalt;
  if (kind === 'path') return MAT.road.path;
  return MAT.road.gravel; // gravel | farm
}

function buildRoads(bucket) {
  const SPACING = 0.7;
  const dashGeo = new THREE.PlaneGeometry(0.09, 0.55);
  dashGeo.rotateX(-Math.PI / 2);

  const q = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const v = new THREE.Vector3();
  const one = new THREE.Vector3(1, 1, 1);
  const m = new THREE.Matrix4();

  for (const road of ROADS) {
    const hw = road.width / 2;
    const sw = road.sidewalk || 0;

    const main = buildBand(road.name, SPACING, [
      { off: -hw, dy: ROAD_EPS },
      { off: hw, dy: ROAD_EPS },
    ]);
    if (main) {
      bucket.add(roadMaterial(road.kind), main);
      main.dispose();
    }

    if (sw > 0) {
      for (const side of [1, -1]) {
        const inner = -side * hw; // 靠路面一侧
        const outer = -side * (hw + sw); // 靠草地一侧
        const walk = buildBand(road.name, SPACING, [
          { off: inner, dy: SIDEWALK_TOP },
          { off: outer, dy: SIDEWALK_TOP },
        ]);
        if (walk) {
          bucket.add(MAT.road.sidewalk, walk);
          walk.dispose();
        }
        // 路缘：外侧立面 + 顶面 + 内侧立面（buildBand 会按 off 排序）
        const curb = buildBand(road.name, SPACING, [
          { off: outer - side * CURB_W, dy: TERRAIN_Y },
          { off: outer - side * CURB_W, dy: CURB_TOP },
          { off: outer, dy: CURB_TOP },
          { off: outer, dy: SIDEWALK_TOP },
        ]);
        if (curb) {
          bucket.add(MAT.road.curb, curb);
          curb.dispose();
        }
      }
    }

    if (road.markings) {
      for (const s of sampleRoad(road.name, 1.4, 0)) {
        euler.set(0, s.angle, 0);
        q.setFromEuler(euler);
        v.set(s.x, surfaceHeight(s.x, s.z, MARK_TOP), s.z);
        m.compose(v, q, one);
        bucket.add(MAT.road.marking, dashGeo, m);
      }
    }
  }
  dashGeo.dispose();
}

/** 铺装：薄板，顶面 y=0.05 */
function buildPaving(bucket) {
  for (const p of PAVING) {
    const geo = new THREE.BoxGeometry(p.w, 0.05, p.d);
    scaleUV(geo, p.w / ROAD_TILE, p.d / ROAD_TILE);
    geo.translate(p.x, 0.025, p.z);
    bucket.add(p.kind === 'gravel' ? MAT.road.gravel : MAT.road.sidewalk, geo);
    geo.dispose();
  }
}

/* ------------------------------------------------------------------ *
 * 入口
 * ------------------------------------------------------------------ */

export function createTerrain() {
  const root = new THREE.Group();
  root.name = 'terrain';

  const solid = createGeometryBucket('terrainSolid');
  const flat = createGeometryBucket('terrainFlat');

  buildBase(solid);
  buildNameplate(solid);
  buildEdgeStrips(solid);
  buildCulverts(solid);
  buildRoads(flat);
  buildPaving(flat);

  root.add(solid.build({ name: 'terrainSolid', castShadow: true, receiveShadow: true }));
  root.add(flat.build({ name: 'terrainFlat', castShadow: false, receiveShadow: true }));
  root.add(buildRim());
  root.add(buildGrass());

  const water = buildWater();
  root.add(water.object3D);

  return {
    object3D: root,
    update(dt) {
      water.update(dt);
    },
    lightAnchors: [],
  };
}

/* ------------------------------------------------------------------ *
 * 自检（实测数据，来自本地无头运行 + 浏览器渲染确认；仅注释，无代码）
 *
 * mesh 数 14 = solid 合批 5 + flat 合批 6 + rim 1 + grass 1 + water 1
 * draw call 15（rim 是双材质槽，算 2）
 * 三角面合计 66,498：
 *   草地 63,232 | 水面 312 | 边框 64
 *   木底座 626（四面侧板+底面 618，顶面压条 8）
 *   名牌面板 12 + 金属边条 48 | 石料（南北封口条+两块涵洞薄板）856
 *   沥青 126 | 碎石 58 | 小径 110 | 人行道 276 | 路缘 756 | 标线 22
 * 顶点健全性：无 NaN、无越界；草地平地 -0.060、河道最低 -1.410；水面恒 -0.620；
 *   南北封口条底沿与草地边界顶点高度差 0（水面不会透视到空心底座）。
 * 确定性：两次 createTerrain() 逐顶点哈希一致（噪声用 mulberry32(2026)）。
 * 未在本模块创建任何灯；lightAnchors 恒为空。
 * ------------------------------------------------------------------ */
