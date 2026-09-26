import * as THREE from 'three';

/**
 * Creates a keycap mesh with a sculpted profile and canvas-texture legend.
 * The keycap has a trapezoidal cross-section (wider at bottom, narrower at top)
 * to simulate real OEM/Cherry profile keycaps.
 */

const KEY_UNIT = 19.05; // mm per u — standard MX spacing
const KEYCAP_HEIGHT = 8; // mm
const KEYCAP_GAP = 1.2; // mm gap between keycaps

export function createKeycapMesh(keyData, theme) {
  const w = keyData.w * KEY_UNIT - KEYCAP_GAP;
  const d = KEY_UNIT - KEYCAP_GAP;
  const h = KEYCAP_HEIGHT;

  // Trapezoidal profile: top is slightly smaller than bottom
  const topScale = 0.85;
  const topW = w * topScale;
  const topD = d * topScale;

  const shape = new THREE.Shape();
  // Bottom rectangle (at y=0, we'll extrude upward)
  shape.moveTo(-w / 2, -d / 2);
  shape.lineTo(w / 2, -d / 2);
  shape.lineTo(w / 2, d / 2);
  shape.lineTo(-w / 2, d / 2);
  shape.lineTo(-w / 2, -d / 2);

  // Create extruded geometry with bevel for rounded edges
  const extrudeSettings = {
    depth: h,
    bevelEnabled: true,
    bevelThickness: 0.8,
    bevelSize: 0.8,
    bevelSegments: 3,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  // Taper the top vertices inward
  const pos = geometry.attributes.position;
  const bevelH = 0.8; // bevel thickness
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const t = y / h; // 0 at bottom, 1 at top (before bevel)
    // Taper more as we go up, but keep bevel area full
    const taper = 1 - (1 - topScale) * Math.min(t * 1.2, 1);
    pos.setX(i, pos.getX(i) * taper);
    pos.setZ(i, pos.getZ(i) * taper);
  }
  pos.needsUpdate = true;
  geometry.computeVertexNormals();

  // Determine color based on key type
  let color;
  let textColor;
  const isAlpha = /^[a-z]$/i.test(keyData.id) || keyData.id === 'space';
  const isMod = ['tab', 'caps', 'lshift', 'rshift', 'lctrl', 'rctrl', 'lalt', 'ralt',
                  'lwin', 'fn', 'enter', 'bksp', 'backslash'].includes(keyData.id);
  const isAccent = ['esc', 'enter'].includes(keyData.id);
  const isArrow = ['left', 'right', 'up', 'down'].includes(keyData.id);

  if (isAccent) {
    color = theme.accent;
    textColor = theme.accentText;
  } else if (isArrow) {
    color = theme.accent;
    textColor = theme.accentText;
  } else if (keyData.id === 'space') {
    color = theme.spaceColor;
    textColor = theme.alphasText;
  } else if (isMod) {
    color = theme.mods;
    textColor = theme.modsText;
  } else {
    color = theme.alphas;
    textColor = theme.alphasText;
  }

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: 0.6,
    metalness: 0.05,
  });

  const mesh = new THREE.Mesh(geometry, material);

  // Add legend texture on top face
  if (keyData.label) {
    const legendTex = createLegendTexture(keyData, textColor, isAccent || isArrow);
    const legendMat = new THREE.MeshBasicMaterial({
      map: legendTex,
      transparent: true,
      opacity: 0.95,
    });
    const legendGeo = new THREE.PlaneGeometry(w * 0.8, d * 0.7);
    const legend = new THREE.Mesh(legendGeo, legendMat);
    legend.rotation.x = -Math.PI / 2;
    // Position on top of keycap, slightly offset from center for visual balance
    legend.position.y = h + 0.9;
    legend.position.x = 0;
    // Adjust z based on key width for centering
    if (keyData.w > 2) {
      legend.position.z = -d * 0.15;
    }
    mesh.add(legend);
  }

  mesh.userData = { keyData, isKeycap: true };
  return mesh;
}

/**
 * Create a canvas texture for the keycap legend.
 */
function createLegendTexture(keyData, textColor, isAccent) {
  const canvas = document.createElement('canvas');
  const size = 128;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Transparent background
  ctx.clearRect(0, 0, size, size);

  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const isLargeKey = keyData.w >= 1.5;
  const isAlpha = /^[a-z]$/i.test(keyData.id);

  if (keyData.sub) {
    // Two-line legend: sub on top, main label below
    const mainSize = isAlpha ? 48 : 32;
    const subSize = 24;

    ctx.font = `bold ${subSize}px "SF Mono", "Cascadia Code", Consolas, monospace`;
    ctx.globalAlpha = 0.7;
    ctx.fillText(keyData.sub, size / 2, size * 0.28);
    ctx.globalAlpha = 1;
    ctx.font = `bold ${mainSize}px "SF Mono", "Cascadia Code", Consolas, monospace`;
    ctx.fillText(keyData.label, size / 2, size * 0.65);
  } else if (isAlpha) {
    // Large single letter
    ctx.font = `bold 56px "SF Mono", "Cascadia Code", Consolas, monospace`;
    ctx.fillText(keyData.label, size / 2, size / 2);
  } else {
    // Mod key label
    const fontSize = keyData.w >= 2 ? 28 : (keyData.w >= 1.5 ? 26 : 22);
    ctx.font = `bold ${fontSize}px "SF Pro Display", -apple-system, "Segoe UI", sans-serif`;
    ctx.fillText(keyData.label, size / 2, size / 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}
