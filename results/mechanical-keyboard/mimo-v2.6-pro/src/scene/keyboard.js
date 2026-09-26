/**
 * 键盘装配：底壳（楔形厚壳）+ 定位板（带轴孔）+ 轴体 + 键帽（高度/间隙/字符）
 * 拆解动画在键帽 / 定位板 / 底壳三层之间展开，指数逼近目标值，连点也能精确复位
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  buildKeys,
  ROW_HEIGHT,
  ROW_TILT,
  CAP_SCALE,
} from '../data/layout.js';
import { getKeycapGeometry, getLegendGeometry, createLegend } from './keycap.js';

// ---- 尺寸（单位 u = 1 个键位间距 ≈ 19mm）----
const CASE_W = 16.75;
const CASE_D = 5.75;
const CASE_H = 1.02; // 底壳前缘厚度
const CASE_TILT = (6 * Math.PI) / 180; // 机身倾角
const CASE_BEVEL = 0.1;
const CASE_RADIUS = 0.5;

const FRAME_H = 0.24;
const FRAME_W = CASE_W - CASE_BEVEL * 2;
const FRAME_D = CASE_D - CASE_BEVEL * 2;
const FRAME_HOLE_W = 16.32;
const FRAME_HOLE_D = 5.32;

const PLATE_W = 16.18;
const PLATE_D = 5.18;
const PLATE_T = 0.13;
const SWITCH_HOLE = 0.72;

const SWITCH_TOP = PLATE_T + 0.23; // 轴体上沿
const STEM_TOP = PLATE_T + 0.4; // 轴心顶端（插入键帽内部）
const CAP_CLEARANCE = 0.35; // 键帽底面相对定位板的高度
const PRESS_DEPTH = 0.115;

const EXPLODE_KEYS = 2.45;
const EXPLODE_PLATE = 1.05;

function roundedRectPath(w, d, r, ShapeClass = THREE.Shape) {
  const path = new ShapeClass();
  const x = -w / 2;
  const y = -d / 2;
  path.moveTo(x + r, y);
  path.lineTo(x + w - r, y);
  path.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
  path.lineTo(x + w, y + d - r);
  path.absarc(x + w - r, y + d - r, r, 0, Math.PI / 2, false);
  path.lineTo(x + r, y + d);
  path.absarc(x + r, y + d - r, r, Math.PI / 2, Math.PI, false);
  path.lineTo(x, y + r);
  path.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
  return path;
}

/** 挤出后转平放：shape 的 y → 世界 z，挤出方向 → 世界 y */
function extrudeFlat(shape, { depth, bevel = 0, curveSegments = 10 }) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.001, depth - bevel * 2),
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: bevel > 0 ? 2 : 0,
    curveSegments,
  });
  geo.rotateX(Math.PI / 2);
  geo.translate(0, depth - bevel, 0);
  return geo;
}

/** 楔形位移：底面保持水平，顶面（随 y 线性）向后抬升 */
function wedgeGeometry(geo, height, { rigid = false, offsetY = 0 } = {}) {
  const pos = geo.attributes.position;
  const slope = Math.tan(CASE_TILT);
  for (let i = 0; i < pos.count; i += 1) {
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const factor = rigid ? 1 : y / height;
    pos.setY(i, offsetY + y + factor * (CASE_D / 2 - z) * slope);
  }
  geo.computeVertexNormals();
  return geo;
}

function buildCaseMeshes(material) {
  // 底壳：厚底 + 倒角 + 倾角
  const slabGeo = wedgeGeometry(
    extrudeFlat(roundedRectPath(CASE_W, CASE_D, CASE_RADIUS), {
      depth: CASE_H,
      bevel: CASE_BEVEL,
    }),
    CASE_H,
  );

  // 顶框：包住定位板的边框，形成「底壳 / 定位板」的层次
  const frameShape = roundedRectPath(FRAME_W, FRAME_D, CASE_RADIUS - CASE_BEVEL);
  frameShape.holes.push(
    roundedRectPath(FRAME_HOLE_W, FRAME_HOLE_D, 0.18, THREE.Path),
  );
  const frameGeo = wedgeGeometry(
    extrudeFlat(frameShape, { depth: FRAME_H, bevel: 0.035, curveSegments: 8 }),
    FRAME_H,
    { rigid: true, offsetY: CASE_H },
  );

  const slab = new THREE.Mesh(slabGeo, material);
  const frame = new THREE.Mesh(frameGeo, material);
  slab.castShadow = slab.receiveShadow = true;
  frame.castShadow = frame.receiveShadow = true;
  return [slab, frame];
}

function buildPlateMesh(material, keys) {
  const shape = roundedRectPath(PLATE_W, PLATE_D, 0.16);
  keys.forEach((key) => {
    const hole = new THREE.Path();
    const x = key.x;
    const z = key.z;
    const s = SWITCH_HOLE / 2;
    hole.moveTo(x - s, z - s);
    hole.lineTo(x + s, z - s);
    hole.lineTo(x + s, z + s);
    hole.lineTo(x - s, z + s);
    hole.lineTo(x - s, z - s);
    shape.holes.push(hole);
  });
  const geo = extrudeFlat(shape, { depth: PLATE_T, bevel: 0, curveSegments: 6 });
  const mesh = new THREE.Mesh(geo, material);
  mesh.receiveShadow = true;
  return mesh;
}

function buildSwitchMeshes(housingMaterial, stemMaterial, keys) {
  const housingBase = new RoundedBoxGeometry(0.62, 0.3, 0.62, 2, 0.05);
  const stemA = new THREE.BoxGeometry(0.3, 0.22, 0.075);
  const stemB = new THREE.BoxGeometry(0.075, 0.22, 0.3);
  const stemBase = mergeGeometries([stemA, stemB]);

  const housings = [];
  const stems = [];
  keys.forEach((key) => {
    const hy = PLATE_T - 0.07 + 0.15;
    housings.push(housingBase.clone().translate(key.x, hy, key.z));
    stems.push(stemBase.clone().translate(key.x, PLATE_T - 0.07 + 0.3 + 0.11, key.z));
  });

  const housingMesh = new THREE.Mesh(mergeGeometries(housings), housingMaterial);
  const stemMesh = new THREE.Mesh(mergeGeometries(stems), stemMaterial);
  housingMesh.castShadow = housingMesh.receiveShadow = true;
  stemMesh.castShadow = true;
  return [housingMesh, stemMesh];
}

export function createKeyboard() {
  const keys = buildKeys();
  const group = new THREE.Group();

  // ---- 材质 ----
  const caseMaterial = new THREE.MeshStandardMaterial({
    color: '#26292f',
    metalness: 0.62,
    roughness: 0.46,
  });
  const plateMaterial = new THREE.MeshStandardMaterial({
    color: '#454b54',
    metalness: 0.88,
    roughness: 0.38,
  });
  const housingMaterial = new THREE.MeshStandardMaterial({
    color: '#1b1d21',
    metalness: 0.22,
    roughness: 0.62,
  });
  const stemMaterial = new THREE.MeshStandardMaterial({
    color: '#cf4436',
    metalness: 0.18,
    roughness: 0.55,
  });
  const capBaseMaterial = new THREE.MeshStandardMaterial({
    color: '#eae8e3',
    metalness: 0.04,
    roughness: 0.62,
  });

  // ---- 三层结构 ----
  const caseGroup = new THREE.Group();
  buildCaseMeshes(caseMaterial).forEach((m) => caseGroup.add(m));

  const plateGroup = new THREE.Group();
  plateGroup.add(buildPlateMesh(plateMaterial, keys));
  buildSwitchMeshes(housingMaterial, stemMaterial, keys).forEach((m) =>
    plateGroup.add(m),
  );

  const keysGroup = new THREE.Group();

  const planeY = CASE_H + (CASE_D / 2) * Math.tan(CASE_TILT);
  const plateBaseY = planeY;
  const keysBaseY = planeY + PLATE_T + CAP_CLEARANCE;

  plateGroup.position.y = plateBaseY;
  plateGroup.rotation.x = CASE_TILT;
  keysGroup.position.y = keysBaseY;
  keysGroup.rotation.x = CASE_TILT;

  group.add(caseGroup, plateGroup, keysGroup);

  // ---- 键帽 ----
  const capD = CAP_SCALE;
  const keyObjects = keys.map((key) => {
    const w = key.w * CAP_SCALE;
    const h = ROW_HEIGHT[key.row];
    const holder = new THREE.Group();
    const yBase = Math.abs(Math.sin(ROW_TILT[key.row])) * (capD / 2) + 0.012;
    holder.position.set(key.x, yBase, key.z);
    holder.rotation.x = ROW_TILT[key.row];

    const material = capBaseMaterial.clone();
    const mesh = new THREE.Mesh(getKeycapGeometry(w, capD, h), material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.keyId = key.id;

    const legend = createLegend(key.label, '#2b2e35', { aspect: w / capD });
    const legendMaterial = new THREE.MeshStandardMaterial({
      map: legend.texture,
      transparent: true,
      roughness: 0.55,
      metalness: 0.02,
    });
    const legendMesh = new THREE.Mesh(getLegendGeometry(w, capD, h), legendMaterial);

    holder.add(mesh, legendMesh);
    keysGroup.add(holder);

    return {
      key,
      holder,
      mesh,
      material,
      legend,
      legendMesh,
      w,
      h,
      yBase,
      press: 0,
      target: 0,
      hover: 0,
      hoverTarget: 0,
    };
  });

  const keyById = new Map(keyObjects.map((ko) => [ko.key.code, ko]));
  const pickables = keyObjects.map((ko) => ko.mesh);

  // ---- 状态 ----
  let explodeT = 0;
  let explodeTarget = 0;
  let pressDepth = PRESS_DEPTH;

  function applyTheme(theme) {
    keyObjects.forEach((ko) => {
      const { kind } = ko.key;
      const isAccent = kind === 'accent';
      const isMod = kind === 'mod';
      ko.material.color.set(
        isAccent ? theme.accent : isMod ? theme.mod : theme.alpha,
      );
      ko.legend.draw(isAccent ? theme.legendOnAccent : theme.legend);
    });
  }

  function applyCase(color) {
    caseMaterial.color.set(color.color);
    caseMaterial.metalness = color.metalness;
    caseMaterial.roughness = color.roughness;
  }

  function applySwitch(type) {
    stemMaterial.color.set(type.stem);
    pressDepth = PRESS_DEPTH * type.press;
  }

  // 空格刻字：内容与颜色（跟随主题）都可更新
  let engrave = 'LUMEN';
  let engraveColor = '#2b2e35';
  function setEngraveText(text, color = engraveColor) {
    engrave = text || ' ';
    engraveColor = color;
    const ko = keyById.get('Space');
    if (!ko) return;
    ko.legend.setText(engrave);
    ko.legend.draw(engraveColor);
  }

  function press(code, down) {
    const ko = keyById.get(code);
    if (!ko) return false;
    ko.target = down ? 1 : 0;
    return true;
  }

  function releaseAll() {
    keyObjects.forEach((ko) => {
      ko.target = 0;
    });
  }

  function setHover(mesh) {
    keyObjects.forEach((ko) => {
      ko.hoverTarget = ko.mesh === mesh ? 1 : 0;
    });
  }

  function setExplode(on) {
    explodeTarget = on ? 1 : 0;
    return on;
  }

  function toggleExplode() {
    explodeTarget = explodeTarget > 0.5 ? 0 : 1;
    return explodeTarget > 0.5;
  }

  function update(dt) {
    // 拆解：指数逼近，反复点击始终收敛到正确位置（阈值内精确落位）
    explodeT += (explodeTarget - explodeT) * (1 - Math.exp(-5.8 * dt));
    if (Math.abs(explodeTarget - explodeT) < 0.005) explodeT = explodeTarget;
    keysGroup.position.y = keysBaseY + EXPLODE_KEYS * explodeT;
    plateGroup.position.y = plateBaseY + EXPLODE_PLATE * explodeT;

    keyObjects.forEach((ko) => {
      const speed = ko.target > ko.press ? 30 : 15;
      ko.press += (ko.target - ko.press) * (1 - Math.exp(-speed * dt));
      if (Math.abs(ko.target - ko.press) < 0.002) ko.press = ko.target;
      ko.hover += (ko.hoverTarget - ko.hover) * (1 - Math.exp(-14 * dt));
      ko.holder.position.y = ko.yBase - ko.press * pressDepth;
      ko.material.emissive.setRGB(1, 1, 1);
      ko.material.emissiveIntensity = ko.hover * 0.05 + ko.press * 0.035;
    });

    return { explodeT };
  }

  return {
    group,
    keys,
    pickables,
    keyObjects,
    update,
    press,
    releaseAll,
    setHover,
    setExplode,
    toggleExplode,
    applyTheme,
    applyCase,
    applySwitch,
    setEngrave: setEngraveText,
    get exploded() {
      return explodeTarget > 0.5;
    },
  };
}
