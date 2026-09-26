/**
 * ORBIT 65 键盘模型组装
 *
 * 层级结构（拆解视图按层展开）：
 *   keyboardRoot
 *   ├── caseLayer   底壳（环形外壳 + 底板 + 内衬垫 + 铭牌 + USB-C）
 *   └── deckGroup   定位板总成（带整机倾角）
 *       ├── plateLayer  定位板 + 轴体 + 卫星轴
 *       └── capsLayer   键帽 + 十字轴柱（每键可独立下压）
 */
import * as THREE from 'three';
import { buildKeyList, CAP_GAP } from './layout.js';
import { ACCENT_LEGENDS, getShell, getTheme } from './themes.js';
import {
  applyTiltShear,
  createKeycapGeometry,
  createRoundedRectShape,
  createSlabGeometry,
  createStemGeometry,
} from './geometry.js';
import { getAtlas, makeLabelTexture } from './textures.js';

/* ───────── 尺寸常量（世界单位，1u = 1） ───────── */
export const CASE_W = 16.8;
export const CASE_D = 6.2;
export const CASE_H = 1.15;
export const PLATE_W = 16.3;
export const PLATE_D = 5.7;
export const PLATE_H = 0.12;
export const TILT_DEG = 4.5;
export const TILT_TAN = Math.tan((TILT_DEG * Math.PI) / 180);

const INNER_H = CASE_H - 0.42; // 底壳内腔深度
const SWITCH_H = 0.32;
const CAP_REST_Y = PLATE_H + SWITCH_H + 0.06; // 键帽底面静止高度（deck 局部）
export const PRESS_TRAVEL = 0.15;
export const EXPLODE_CAPS_RISE = 4.4;
export const EXPLODE_PLATE_RISE = 2.1;

const keyLegendSet = new Set(ACCENT_LEGENDS);

export function createKeyboardModel() {
  const keys = buildKeyList();
  const shell = getShell('starlight');
  const theme = getTheme('retro');

  /* ───── 材质 ───── */
  const caseMat = new THREE.MeshStandardMaterial({
    color: shell.caseColor,
    roughness: shell.caseRoughness,
    metalness: shell.caseMetalness,
  });
  const plateMat = new THREE.MeshStandardMaterial({
    color: shell.plateColor,
    roughness: shell.plateRoughness,
    metalness: shell.plateMetalness,
  });
  const innerMat = new THREE.MeshStandardMaterial({ color: '#101114', roughness: 0.9, metalness: 0 });
  const sideBaseMat = new THREE.MeshStandardMaterial({ color: theme.baseColor, roughness: 0.52, metalness: 0.02 });
  const sideAccentMat = new THREE.MeshStandardMaterial({ color: theme.accentColor, roughness: 0.5, metalness: 0.02 });
  const switchMat = new THREE.MeshStandardMaterial({ color: '#1b1d21', roughness: 0.55, metalness: 0.1 });
  const stemMat = new THREE.MeshStandardMaterial({ color: theme.switchColor, roughness: 0.45, metalness: 0.05 });
  const portMat = new THREE.MeshStandardMaterial({ color: shell.portColor, roughness: 0.5, metalness: 0.4 });
  const badgeMat = new THREE.MeshStandardMaterial({
    map: makeLabelTexture('ORBIT 65'),
    transparent: true,
    roughness: 0.5,
    metalness: 0.2,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });

  /* ───── 根节点 ───── */
  const root = new THREE.Group();
  root.name = 'orbit65';

  /* ───── 底壳：底板 + 环形侧壁（拆开后可见内腔） ───── */
  const caseLayer = new THREE.Group();
  root.add(caseLayer);

  const floorGeo = createSlabGeometry(CASE_W, CASE_D, INNER_H, { radius: 0.3, bevel: 0.06 });
  applyTiltShear(floorGeo, CASE_H, TILT_TAN);
  const floorMesh = new THREE.Mesh(floorGeo, caseMat);
  floorMesh.castShadow = true;
  floorMesh.receiveShadow = true;
  caseLayer.add(floorMesh);

  const outer = createRoundedRectShape(CASE_W, CASE_D, 0.3);
  const hole = createRoundedRectShape(CASE_W - 1.1, CASE_D - 1.1, 0.22);
  outer.holes.push(new THREE.Path(hole.getPoints(48).reverse()));
  const ringGeo = new THREE.ExtrudeGeometry(outer, {
    depth: CASE_H - INNER_H - 0.1,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
    curveSegments: 10,
    steps: 1,
  });
  ringGeo.rotateX(-Math.PI / 2);
  ringGeo.computeBoundingBox();
  const ringBB = ringGeo.boundingBox;
  ringGeo.translate(
    -(ringBB.min.x + ringBB.max.x) / 2,
    INNER_H - ringBB.min.y,
    -(ringBB.min.z + ringBB.max.z) / 2,
  );
  applyTiltShear(ringGeo, CASE_H, TILT_TAN);
  const ringMesh = new THREE.Mesh(ringGeo, caseMat);
  ringMesh.castShadow = true;
  ringMesh.receiveShadow = true;
  caseLayer.add(ringMesh);

  // 内腔底部的隔音棉（先把位置烘进几何体，再统一施加倾角剪切）
  const matGeo = createSlabGeometry(CASE_W - 1.2, CASE_D - 1.2, 0.04, { radius: 0.2, bevel: 0.01 });
  matGeo.translate(0, INNER_H - 0.02, 0);
  applyTiltShear(matGeo, CASE_H, TILT_TAN);
  const foam = new THREE.Mesh(matGeo, innerMat);
  foam.receiveShadow = true;
  caseLayer.add(foam);

  // 前脸铭牌（前立面在中心区域为同一平面）
  const badge = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.3), badgeMat);
  badge.position.set(-CASE_W * 0.26, 0.45, CASE_D / 2 + 0.012);
  caseLayer.add(badge);

  // 背部 USB-C 开孔（位于环形侧壁高度内）
  const port = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.2, 0.14), portMat);
  port.position.set(0, 1.13, -CASE_D / 2 - 0.01);
  caseLayer.add(port);

  /* ───── 定位板总成（带整机倾角） ───── */
  const deckGroup = new THREE.Group();
  deckGroup.position.y = CASE_H;
  deckGroup.rotation.x = (TILT_DEG * Math.PI) / 180;
  root.add(deckGroup);

  const plateLayer = new THREE.Group();
  deckGroup.add(plateLayer);

  const plateGeo = createSlabGeometry(PLATE_W, PLATE_D, PLATE_H, { radius: 0.2, bevel: 0.03 });
  const plateMesh = new THREE.Mesh(plateGeo, plateMat);
  plateMesh.castShadow = true;
  plateMesh.receiveShadow = true;
  plateLayer.add(plateMesh);

  /* ───── 键帽层 ───── */
  const capsLayer = new THREE.Group();
  deckGroup.add(capsLayer);

  const atlas = getAtlas(theme, keys);
  const housingGeo = new THREE.BoxGeometry(0.5, SWITCH_H, 0.5);
  const stemGeo = createStemGeometry();
  const stabHousingGeo = new THREE.BoxGeometry(0.26, 0.2, 0.44);
  const stabWireGeo = new THREE.BoxGeometry(1, 0.035, 0.035);

  const keyObjects = keys.map((key, index) => {
    const isAccent = keyLegendSet.has(key.legend);
    const topMat = new THREE.MeshStandardMaterial({
      map: atlas.texture,
      roughness: 0.5,
      metalness: 0.02,
      emissive: new THREE.Color(isAccent ? theme.accentColor : theme.baseColor),
      emissiveIntensity: 0,
    });
    const capGeo = createKeycapGeometry(key.u, atlas.cells[index]);
    const capMesh = new THREE.Mesh(capGeo, [isAccent ? sideAccentMat : sideBaseMat, topMat]);
    capMesh.castShadow = true;
    capMesh.receiveShadow = true;
    capMesh.position.set(key.x, CAP_REST_Y, key.z);
    capMesh.userData.keyIndex = index;
    capsLayer.add(capMesh);

    // 轴体（定位板层）
    const housing = new THREE.Mesh(housingGeo, switchMat);
    housing.position.set(key.x, PLATE_H + SWITCH_H / 2, key.z);
    housing.castShadow = true;
    plateLayer.add(housing);

    // 十字轴柱（跟随键帽）
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.set(key.x, CAP_REST_Y - 0.14, key.z);
    stem.userData.followKey = index;
    capsLayer.add(stem);

    if (key.u >= 2) {
      const off = Math.min(1.25, (key.u - CAP_GAP) / 2 - 0.35);
      for (const dir of [-1, 1]) {
        const stab = new THREE.Mesh(stabHousingGeo, switchMat);
        stab.position.set(key.x + dir * off, PLATE_H + 0.1, key.z);
        stab.castShadow = true;
        plateLayer.add(stab);
      }
      const wire = new THREE.Mesh(stabWireGeo, switchMat);
      wire.scale.x = off * 2;
      wire.position.set(key.x, PLATE_H + 0.07, key.z);
      plateLayer.add(wire);
    }

    return {
      index,
      legend: key.legend,
      isAccent,
      mesh: capMesh,
      stem,
      topMat,
      restY: CAP_REST_Y,
      press: 0,
      velocity: 0,
      held: false,
      pulseUntil: 0,
      hoverT: 0,
      hover: false,
      sounded: false,
    };
  });

  /* ───── 主题 / 外壳应用 ───── */
  const applied = { shell: shell.id, theme: theme.id };

  function setShell(shellId) {
    const s = getShell(shellId);
    applied.shell = s.id;
    caseMat.color.set(s.caseColor);
    caseMat.roughness = s.caseRoughness;
    caseMat.metalness = s.caseMetalness;
    plateMat.color.set(s.plateColor);
    plateMat.roughness = s.plateRoughness;
    plateMat.metalness = s.plateMetalness;
    portMat.color.set(s.portColor);
  }

  function setTheme(themeId) {
    const t = getTheme(themeId);
    applied.theme = t.id;
    const next = getAtlas(t, keys);
    sideBaseMat.color.set(t.baseColor);
    sideAccentMat.color.set(t.accentColor);
    stemMat.color.set(t.switchColor);
    keyObjects.forEach((ko) => {
      ko.topMat.map = next.texture;
      ko.topMat.emissive.set(ko.isAccent ? t.accentColor : t.baseColor);
      ko.topMat.needsUpdate = true;
    });
  }

  setShell(applied.shell);
  setTheme(applied.theme);

  return {
    root,
    caseLayer,
    deckGroup,
    plateLayer,
    capsLayer,
    keys: keyObjects,
    setShell,
    setTheme,
    applied,
    /** 拆解层标签的投影锚点（root 局部坐标） */
    labelAnchors: [
      { id: 'caps', text: '键帽层', en: 'Keycaps', x: -8.9, y: 0.9, z: -1.6, layer: 'caps' },
      { id: 'plate', text: '定位板', en: 'Plate', x: -8.7, y: 0.35, z: 0.6, layer: 'plate' },
      { id: 'case', text: '底壳', en: 'Case', x: -9.0, y: 0.4, z: 2.1, layer: 'case' },
    ],
  };
}
