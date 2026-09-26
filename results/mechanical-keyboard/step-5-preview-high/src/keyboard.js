// 3D 键盘模型：底壳 / 定位板+轴体 / 键帽 三层结构
// 单位：1 = 1mm；局部坐标：X 左右（右为正）、Y 上、Z 前后（前为正）
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { KEYS, KEY_AREA, U, CAP_GAP } from './layout.js';
import { roundedShape, roundedRect, extrudeY, keycapGeometry } from './geom.js';
import { createLegendTexture, createBadgeTexture } from './textures.js';
import { CASE_THEMES, CAP_THEMES, TILT_DEG } from './config.js';

// —— 垂直方向堆叠（局部 y）——
const Y_PLATE_TOP = 0;
const Y_PLATE_BOT = -1.5;
const Y_SWITCH_BOT = -12.6;
const Y_STEM_TOP = 4.2;
const Y_CAP_BASE = 4.4;
const CAP_H = 9.8;
const CAP_TOP = Y_CAP_BASE + CAP_H;
const Y_SLAB_TOP = -14.5;
const Y_SLAB_BOT = -19.5;
const Y_WALL_TOP = 10;

// —— 壳体尺寸 ——
const CASE_W = KEY_AREA.w + 10; // 307
const CASE_D = KEY_AREA.d + 10; // 100
const WALL_T = 3.5;
const PLATE_W = KEY_AREA.w + 2; // 299，覆盖全部键位
const PLATE_D = KEY_AREA.d + 2; // 92

const PRESS_DEPTH = 2.6; // 按键行程（mm）
const EXPLODE_CAP = 32; // 拆解时键帽上移
const EXPLODE_PLATE = 13.5; // 拆解时定位板上移

export function buildKeyboard() {
  const group = new THREE.Group(); // 整机（带倾角）
  group.rotation.x = (TILT_DEG * Math.PI) / 180;

  const caseRoot = new THREE.Group(); // 底壳层（含 PCB）
  const plateRoot = new THREE.Group(); // 定位板 + 轴体层
  const capsRoot = new THREE.Group(); // 键帽层
  group.add(caseRoot, plateRoot, capsRoot);

  // —— 材质 ——
  const caseMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.35,
    roughness: 0.42,
    envMapIntensity: 0.85,
  });
  const plateMat = new THREE.MeshStandardMaterial({
    color: 0xb9bdc4,
    metalness: 0.85,
    roughness: 0.32,
    envMapIntensity: 1.0,
  });
  const housingMat = new THREE.MeshStandardMaterial({ color: 0x23262b, roughness: 0.55, metalness: 0.1 });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0xd9dce2, roughness: 0.4, metalness: 0.15 });
  const pcbMat = new THREE.MeshStandardMaterial({ color: 0x1d3a27, roughness: 0.75, metalness: 0.1 });
  const batteryMat = new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.7, metalness: 0.2 });
  const footMat = new THREE.MeshStandardMaterial({ color: 0x16181c, roughness: 0.9, metalness: 0.0 });
  const gasketMat = new THREE.MeshStandardMaterial({ color: 0x1b1e22, roughness: 0.85, metalness: 0.0 });
  const portMat = new THREE.MeshStandardMaterial({ color: 0x101216, roughness: 0.5, metalness: 0.4 });
  const capMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.58,
    metalness: 0.02,
    envMapIntensity: 0.55,
  });

  // ============ 底壳层 ============
  // 底板
  const slab = roundedShape(CASE_W, CASE_D, 10);
  const slabGeo = extrudeY(slab, 5, { bevelThickness: 0.5, bevelSize: 0.5 });
  slabGeo.translate(0, Y_SLAB_BOT, 0);
  const slabMesh = new THREE.Mesh(slabGeo, caseMat);
  slabMesh.castShadow = true;
  slabMesh.receiveShadow = true;
  caseRoot.add(slabMesh);

  // 四圈围框（前/后整宽，左右嵌在中间）
  const wallH = Y_WALL_TOP - Y_SLAB_TOP;
  const addWall = (w, d, x, z) => {
    const geo = extrudeY(roundedShape(w, d, 1.8), wallH, {
      bevelThickness: 0.45,
      bevelSize: 0.4,
    });
    geo.translate(x, Y_SLAB_TOP, z);
    const m = new THREE.Mesh(geo, caseMat);
    m.castShadow = true;
    m.receiveShadow = true;
    caseRoot.add(m);
    return m;
  };
  addWall(CASE_W, WALL_T, 0, CASE_D / 2 - WALL_T / 2); // 前
  addWall(CASE_W, WALL_T, 0, -CASE_D / 2 + WALL_T / 2); // 后
  addWall(WALL_T, CASE_D - WALL_T * 2, -CASE_W / 2 + WALL_T / 2, 0); // 左
  addWall(WALL_T, CASE_D - WALL_T * 2, CASE_W / 2 - WALL_T / 2, 0); // 右

  // USB-C 口（后壳中央）
  const port = new THREE.Mesh(new THREE.BoxGeometry(9, 3.2, 7), portMat);
  port.position.set(0, -2.5, -CASE_D / 2 + 1);
  port.castShadow = true;
  caseRoot.add(port);
  const portInner = new THREE.Mesh(new THREE.BoxGeometry(5, 1.1, 0.5), stemMat);
  portInner.position.set(0, -2.5, -CASE_D / 2 + 2.6);
  caseRoot.add(portInner);

  // 前壳丝印（颜色随外壳主题）
  const badgeMat = new THREE.MeshStandardMaterial({
    map: createBadgeTexture(CASE_THEMES[0].badge),
    transparent: true,
    roughness: 0.6,
    metalness: 0.1,
  });
  const badge = new THREE.Mesh(new THREE.PlaneGeometry(46, 8.6), badgeMat);
  badge.position.set(0, 3.2, CASE_D / 2 + 0.12);
  caseRoot.add(badge);

  // PCB 与电池
  const pcbGeo = extrudeY(roundedShape(280, 78, 2), 1.6, { bevel: false, curveSegments: 4 });
  pcbGeo.translate(0, Y_SLAB_TOP, 0);
  const pcb = new THREE.Mesh(pcbGeo, pcbMat);
  pcb.castShadow = true;
  caseRoot.add(pcb);
  const battery = new THREE.Mesh(new THREE.BoxGeometry(74, 3.4, 34), batteryMat);
  battery.position.set(-6, Y_SLAB_TOP + 1.8, -14);
  battery.castShadow = true;
  caseRoot.add(battery);

  // 脚垫
  for (const [fx, fz] of [[-128, -30], [128, -30], [-128, 30], [128, 30]]) {
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 1.5, 20), footMat);
    foot.position.set(fx, Y_SLAB_BOT - 0.75, fz);
    foot.castShadow = true;
    caseRoot.add(foot);
  }

  // ============ 定位板 + 轴体层 ============
  const plateShape = roundedShape(PLATE_W, PLATE_D, 3);
  for (const k of KEYS) {
    // 孔宽不超过 15.6mm；宽键用同一条长孔模拟稳定器槽
    const holeW = Math.min(k.wmm - 2.8, 15.6);
    const hole = roundedRect(new THREE.Path(), holeW, 14.6, 1.5, true, k.x, -k.z);
    plateShape.holes.push(hole);
  }
  const plateGeo = extrudeY(plateShape, 1.5, { bevel: false, curveSegments: 6 });
  plateGeo.translate(0, Y_PLATE_BOT, 0);
  const plate = new THREE.Mesh(plateGeo, plateMat);
  plate.castShadow = true;
  plate.receiveShadow = true;
  plateRoot.add(plate);

  // Gasket 硅胶垫（定位板与壳体之间）
  for (const [gx, gz] of [
    [-141, -36], [0, -38], [141, -36], [-141, 0], [141, 0], [-141, 36], [0, 38], [141, 36],
  ]) {
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 1.4, 14), gasketMat);
    pad.position.set(gx, Y_PLATE_BOT - 0.7, gz);
    plateRoot.add(pad);
  }

  // 轴体：外壳 + 十字轴心（实例化）
  const housingGeo = extrudeY(roundedShape(13, 13, 1.2), 11.1, {
    bevelThickness: 0.5,
    bevelSize: 0.5,
  }).toNonIndexed();
  housingGeo.translate(0, (Y_SWITCH_BOT + Y_PLATE_BOT) / 2, 0);
  const stemGeo = new THREE.BoxGeometry(4.4, Y_STEM_TOP - Y_PLATE_BOT, 4.4).toNonIndexed();
  stemGeo.translate(0, (Y_STEM_TOP + Y_PLATE_BOT) / 2, 0);

  const housings = new THREE.InstancedMesh(housingGeo, housingMat, KEYS.length);
  const stems = new THREE.InstancedMesh(stemGeo, stemMat, KEYS.length);
  housings.castShadow = true;
  stems.castShadow = true;
  KEYS.forEach((k, i) => {
    const m = new THREE.Matrix4().makeTranslation(k.x, Y_SWITCH_BOT, k.z);
    housings.setMatrixAt(i, m);
    stems.setMatrixAt(i, m);
  });
  housings.instanceMatrix.needsUpdate = true;
  stems.instanceMatrix.needsUpdate = true;
  plateRoot.add(housings, stems);

  // ============ 键帽层 ============
  const capDepth = U - CAP_GAP;
  const widths = [...new Set(KEYS.map((k) => k.w))].sort((a, b) => a - b);
  const classOf = new Map(widths.map((w, i) => [w, i]));

  const capMeshes = widths.map((w) => {
    const geo = keycapGeometry(w * U - CAP_GAP, capDepth, CAP_H, 0.1);
    const mesh = new THREE.InstancedMesh(geo, capMat, KEYS.filter((k) => k.w === w).length);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    capsRoot.add(mesh);
    return mesh;
  });

  const caps = [];
  const instanceCounter = widths.map(() => 0);
  const anisotropy = 4;
  const baseMatrix = new THREE.Matrix4();
  for (const k of KEYS) {
    const ci = classOf.get(k.w);
    const inst = instanceCounter[ci]++;
    const cap = {
      key: k,
      id: k.id,
      ci,
      inst,
      label: null,
      baseColor: new THREE.Color(0xffffff),
      curColor: new THREE.Color(0xffffff),
      p: 0,
      pt: 0,
    };
    baseMatrix.makeTranslation(k.x, Y_CAP_BASE, k.z);
    capMeshes[ci].setMatrixAt(inst, baseMatrix);
    capMeshes[ci].setColorAt(inst, cap.curColor);

    // 顶面字符贴片
    if (k.label !== '' && k.w < 6) {
      const capW = k.wmm - CAP_GAP;
      const planeW = (capW - 1.2) * 0.9 - 1.0;
      const planeD = (capDepth - 1.2) * 0.9 - 1.0;
      const tex = createLegendTexture(k, planeW, planeD, CAP_THEMES[0], anisotropy);
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        transparent: true,
        roughness: 0.5,
        metalness: 0,
        depthWrite: false,
      });
      const label = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeD), mat);
      label.rotation.x = -Math.PI / 2;
      label.position.set(k.x, CAP_TOP + 0.06, k.z);
      capsRoot.add(label);
      cap.label = label;
      cap.labelBaseY = CAP_TOP + 0.06;
    }
    caps.push(cap);
  }
  for (const m of capMeshes) {
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    m.computeBoundingSphere();
  }

  // ============ 主题切换 ============
  let capTheme = CAP_THEMES[0];
  const badgeCache = new Map();

  function setCaseTheme(theme) {
    caseMat.color.set(theme.color);
    caseMat.metalness = theme.metalness;
    caseMat.roughness = theme.roughness;
    if (!badgeCache.has(theme.id)) badgeCache.set(theme.id, createBadgeTexture(theme.badge));
    const tex = badgeCache.get(theme.id);
    if (badge.material.map !== tex) {
      badge.material.map?.dispose();
      badge.material.map = tex;
      badge.material.needsUpdate = true;
    }
  }

  function setCapTheme(theme) {
    capTheme = theme;
    capMat.color.set(theme.color);
    for (const cap of caps) {
      const isAccent = theme.accent && theme.accentKeys.includes(cap.id);
      cap.baseColor.set(isAccent ? theme.accent : 0xffffff);
      if (cap.label) {
        const planeW = cap.label.geometry.parameters.width;
        const planeD = cap.label.geometry.parameters.height;
        const tex = createLegendTexture(cap.key, planeW, planeD, theme, anisotropy);
        cap.label.material.map.dispose();
        cap.label.material.map = tex;
        cap.label.material.needsUpdate = true;
      }
    }
  }

  // ============ 每帧更新 ============
  let explodeT = 0;
  const scratchColor = new THREE.Color();

  function update(dt, view = {}) {
    // 拆解进度：指数趋近，反复点击也只会收敛到目标值
    const target = view.explode ? 1 : 0;
    explodeT += (target - explodeT) * (1 - Math.exp(-dt * 5.5));
    const capLift = explodeT * EXPLODE_CAP;
    const plateLift = explodeT * EXPLODE_PLATE;
    capsRoot.position.y = capLift;
    plateRoot.position.y = plateLift;

    const pressRate = 1 - Math.exp(-dt * 34);
    const m = new THREE.Matrix4();
    let colorsDirty = false;

    for (const cap of caps) {
      if (cap.p !== cap.pt) {
        cap.p += (cap.pt - cap.p) * pressRate;
        if (Math.abs(cap.pt - cap.p) < 0.002) cap.p = cap.pt;
      }
      const y = Y_CAP_BASE - cap.p * PRESS_DEPTH;
      m.makeTranslation(cap.key.x, y, cap.key.z);
      capMeshes[cap.ci].setMatrixAt(cap.inst, m);

      if (cap.label) cap.label.position.y = cap.labelBaseY - cap.p * PRESS_DEPTH;

      // 按下/悬停提亮
      const hover = view.hoverId === cap.id ? 1 : 0;
      const boost = 1 + cap.p * 0.22 + hover * 0.1;
      scratchColor.copy(cap.baseColor).multiplyScalar(boost);
      if (!scratchColor.equals(cap.curColor)) {
        cap.curColor.copy(scratchColor);
        capMeshes[cap.ci].setColorAt(cap.inst, scratchColor);
        colorsDirty = true;
      }
    }
    for (const mesh of capMeshes) {
      mesh.instanceMatrix.needsUpdate = true;
      if (colorsDirty && mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
  }

  function press(id, down) {
    const cap = caps.find((c) => c.id === id);
    if (!cap) return false;
    cap.pt = down ? 1 : 0;
    return true;
  }

  function releaseAll() {
    for (const cap of caps) cap.pt = 0;
  }

  return {
    group,
    caps,
    capMeshes,
    caseRoot,
    plateRoot,
    capsRoot,
    setCaseTheme,
    setCapTheme,
    update,
    press,
    releaseAll,
    capTopY: CAP_TOP,
    wallTopY: Y_WALL_TOP,
  };
}
