import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { LAYOUT, ROW_HEIGHT, UNIT } from './layout.js';

const CAP_GAP = 0.055;          // 键帽之间的缝隙（相对 u）
const CAP_HEIGHT = 0.46;
const PLATE_THICKNESS = 0.1;
const CASE_HEIGHT = 0.62;
const CASE_BEZEL = 0.26;        // 底壳比定位板多出的边框

const layoutWidth = 16 * UNIT;  // 布局恰好 16u 宽
const layoutDepth = 5 * UNIT;

/* ---------------- 键帽字符贴图 ---------------- */

function makeLegendTexture(legend, color) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const entry = { canvas, texture, legend };
  drawLegend(entry, color);
  return entry;
}

function drawLegend(entry, color) {
  const { canvas, legend } = entry;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (legend) {
    const len = legend.length;
    const fontSize = len <= 1 ? 118 : len <= 3 ? 76 : 56;
    ctx.font = `700 ${fontSize}px "Segoe UI", "PingFang SC", "Microsoft YaHei", Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    ctx.fillText(legend, canvas.width / 2, canvas.height / 2 + 4);
  }
  entry.texture.needsUpdate = true;
}

/* ---------------- 键盘构建 ---------------- */

export function createKeyboard() {
  const group = new THREE.Group();           // 整体（带倾角）
  const caseGroup = new THREE.Group();       // 底壳层
  const plateGroup = new THREE.Group();      // 定位板层
  const keycapsGroup = new THREE.Group();    // 键帽层
  group.add(caseGroup, plateGroup, keycapsGroup);

  const caseWidth = layoutWidth + CASE_BEZEL * 2;
  const caseDepth = layoutDepth + CASE_BEZEL * 2;
  const plateTop = CASE_HEIGHT + PLATE_THICKNESS;

  /* ----- 底壳 ----- */
  const caseMat = new THREE.MeshStandardMaterial({
    color: 0x23252b, metalness: 0.62, roughness: 0.38,
  });
  const caseMesh = new THREE.Mesh(
    new RoundedBoxGeometry(caseWidth, CASE_HEIGHT, caseDepth, 4, 0.09),
    caseMat
  );
  caseMesh.position.y = CASE_HEIGHT / 2;
  caseMesh.castShadow = caseMesh.receiveShadow = true;
  caseGroup.add(caseMesh);

  // 底壳侧面装饰条
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0xff5c39, metalness: 0.3, roughness: 0.4,
    emissive: 0xff5c39, emissiveIntensity: 0.25,
  });
  const trim = new THREE.Mesh(
    new RoundedBoxGeometry(0.06, 0.1, caseDepth * 0.55, 2, 0.03),
    trimMat
  );
  trim.position.set(caseWidth / 2 + 0.005, CASE_HEIGHT * 0.42, 0);
  caseGroup.add(trim);

  // 背面铭牌
  const badge = new THREE.Mesh(
    new RoundedBoxGeometry(1.4, 0.16, 0.05, 2, 0.02),
    new THREE.MeshStandardMaterial({ color: 0x111318, metalness: 0.7, roughness: 0.3 })
  );
  badge.position.set(0, CASE_HEIGHT * 0.45, -caseDepth / 2 - 0.005);
  caseGroup.add(badge);

  /* ----- 定位板 ----- */
  const plateMat = new THREE.MeshStandardMaterial({
    color: 0x17181c, metalness: 0.85, roughness: 0.32,
  });
  const plate = new THREE.Mesh(
    new RoundedBoxGeometry(layoutWidth + 0.08, PLATE_THICKNESS, layoutDepth + 0.08, 2, 0.03),
    plateMat
  );
  plate.position.y = CASE_HEIGHT + PLATE_THICKNESS / 2;
  plate.castShadow = plate.receiveShadow = true;
  plateGroup.add(plate);

  /* ----- 键帽 ----- */
  const capMaterials = {
    alpha: new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05 }),
    mod: new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05 }),
    accent: new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.05 }),
  };
  const stemMat = new THREE.MeshStandardMaterial({ color: 0xd8d5ce, roughness: 0.5 });

  const keys = [];
  const keysByCode = new Map();
  const capGeoCache = new Map();
  const capGeoFor = (w) => {
    const k = w.toFixed(2);
    if (!capGeoCache.has(k)) {
      capGeoCache.set(k, new RoundedBoxGeometry(w, CAP_HEIGHT, UNIT * (1 - CAP_GAP), 3, 0.06));
    }
    return capGeoCache.get(k);
  };

  LAYOUT.forEach((row, rowIndex) => {
    let cursor = -layoutWidth / 2;
    const z = (rowIndex - 2) * UNIT; // 第 0 行（数字行）在远端
    row.forEach(([legend, wU, code, category], colIndex) => {
      const capW = wU * UNIT - CAP_GAP * UNIT;
      const x = cursor + (wU * UNIT) / 2;
      cursor += wU * UNIT;

      const keyGroup = new THREE.Group();
      const baseY = plateTop + CAP_HEIGHT / 2 + ROW_HEIGHT[rowIndex];

      const cap = new THREE.Mesh(capGeoFor(capW), capMaterials[category]);
      cap.castShadow = cap.receiveShadow = true;
      keyGroup.add(cap);

      // 字符贴图（顶部薄片，略微内缩）
      const legendEntry = makeLegendTexture(legend, '#3a3d45');
      const legendMat = new THREE.MeshBasicMaterial({
        map: legendEntry.texture, transparent: true, toneMapped: true,
      });
      const legendPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(capW * 0.72, UNIT * 0.62),
        legendMat
      );
      legendPlane.rotation.x = -Math.PI / 2;
      legendPlane.position.y = CAP_HEIGHT / 2 + 0.004;
      keyGroup.add(legendPlane);

      // 键帽底部的轴柱（拆解时可见）
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.11, 0.22, 12),
        stemMat
      );
      stem.position.y = -CAP_HEIGHT / 2 - 0.1;
      keyGroup.add(stem);

      keyGroup.position.set(x, baseY, z);
      keycapsGroup.add(keyGroup);

      const key = {
        code, category, rowIndex,
        group: keyGroup,
        legendEntry,
        baseY,
        stagger: rowIndex * 0.12 + colIndex * 0.015, // 拆解时的层内梯度
        press: 0,
        pressTarget: 0,
      };
      cap.userData.key = key;
      legendPlane.userData.key = key;
      keys.push(key);
      if (!keysByCode.has(code)) keysByCode.set(code, key);
    });
  });

  /* ----- 主题 / 配色 ----- */
  function setCaseColor(hex) {
    caseMat.color.set(hex);
    // 定位板取外壳同色系深色，保持整体一致
    plateMat.color.set(hex).multiplyScalar(0.45);
  }

  function setKeycapTheme(theme) {
    capMaterials.alpha.color.set(theme.alpha);
    capMaterials.mod.color.set(theme.mod);
    capMaterials.accent.color.set(theme.accent);
    trimMat.color.set(theme.accent);
    trimMat.emissive.set(theme.accent);
    for (const key of keys) {
      drawLegend(
        key.legendEntry,
        key.category === 'accent' ? theme.legendAccent : theme.legend
      );
    }
  }

  /* ----- 每帧更新：拆解进度 + 按键回弹 ----- */
  function update(dt, explodeProgress) {
    keycapsGroup.position.y = explodeProgress * 2.5;
    plateGroup.position.y = explodeProgress * 1.25;

    const k = Math.min(1, dt * 22);
    for (const key of keys) {
      key.press += (key.pressTarget - key.press) * k;
      if (Math.abs(key.press) < 0.0005 && key.pressTarget === 0) key.press = 0;
      key.group.position.y =
        key.baseY + explodeProgress * key.stagger + key.press;
    }
  }

  function setPressed(code, pressed) {
    const key = keysByCode.get(code);
    if (!key) return false;
    key.pressTarget = pressed ? -0.17 : 0;
    return true;
  }

  return {
    group,
    keys,
    keysByCode,
    layers: { caseGroup, plateGroup, keycapsGroup },
    setCaseColor,
    setKeycapTheme,
    update,
    setPressed,
    dimensions: { caseWidth, caseDepth, plateTop },
  };
}
