/**
 * Procedurally generated canvas textures. Everything is drawn at load time so the
 * project ships no binary assets and keeps the "hand-made model" look under our
 * own control.
 */
import * as THREE from 'three';

/** Deterministic RNG so the sandbox looks identical on every load. */
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvas(size) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  return c;
}

function texture(c, { repeat = 1, srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Draw a call at 4 wrapped offsets so the tile stays seamless. */
function wrapped(ctx, size, draw) {
  for (const [dx, dy] of [[0, 0], [size, 0], [-size, 0], [0, size], [0, -size]]) {
    ctx.save();
    ctx.translate(dx, dy);
    draw(ctx);
    ctx.restore();
  }
}

/** Rounded-rectangle path that works on older canvas implementations. */
function roundRectPath(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function speckle(ctx, size, rnd, count, colors, rMin, rMax) {  for (let i = 0; i < count; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const r = rMin + rnd() * (rMax - rMin);
    const col = colors[(rnd() * colors.length) | 0];
    wrapped(ctx, size, (c) => {
      c.fillStyle = col;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    });
  }
}

export function makeGrassTexture() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const rnd = rng(9137);
  ctx.fillStyle = '#5d7f43';
  ctx.fillRect(0, 0, size, size);

  // Broad tonal patches give the lawn a mown, uneven feel.
  for (let i = 0; i < 26; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const r = 16 + rnd() * 40;
    const shade = rnd() > 0.5 ? 'rgba(126,158,80,0.30)' : 'rgba(72,100,52,0.30)';
    wrapped(ctx, size, (cc) => {
      const g = cc.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, shade);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      cc.fillStyle = g;
      cc.beginPath();
      cc.arc(x, y, r, 0, Math.PI * 2);
      cc.fill();
    });
  }
  // Grass blades.
  speckle(ctx, size, rnd, 1500, ['rgba(140,175,92,0.75)', 'rgba(88,120,60,0.65)', 'rgba(168,190,110,0.5)'], 0.6, 2.1);
  speckle(ctx, size, rnd, 220, ['rgba(196,206,140,0.55)', 'rgba(220,214,150,0.4)'], 0.5, 1.3);
  return texture(c);
}

export function makeWoodTexture(base, dark, opts = {}) {
  const { width = 512, height = 512, rings = 26, knot = true, contrast = 1 } = opts;
  const c = document.createElement('canvas');
  c.width = width;
  c.height = height;
  const ctx = c.getContext('2d');
  const rnd = rng(base * 7919 + 13);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, width, height);

  // Long grain lines with sinusoidal wander.
  ctx.globalAlpha = 0.5;
  for (let i = 0; i < rings * 8; i++) {
    const y = rnd() * height;
    const amp = 1 + rnd() * 5;
    const freq = 0.01 + rnd() * 0.03;
    const phase = rnd() * Math.PI * 2;
    ctx.strokeStyle = rnd() > 0.5 ? dark : 'rgba(255,255,255,0.10)';
    ctx.lineWidth = 0.4 + rnd() * 1.6;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 4) {
      const yy = y + Math.sin(x * freq + phase) * amp;
      if (x === 0) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }
  // Plank seams every ~1/8 of the texture.
  ctx.globalAlpha = 0.35;
  for (let i = 1; i < 8; i++) {
    const y = (i / 8) * height + (rnd() - 0.5) * 3;
    ctx.strokeStyle = dark;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  if (knot) {
    for (let i = 0; i < 5; i++) {
      const x = rnd() * width;
      const y = rnd() * height;
      for (let r = 2; r < 12; r += 1.6) {
        ctx.globalAlpha = 0.3 * (1 - r / 12) * contrast;
        ctx.strokeStyle = dark;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * 0.6, 0.4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
  const t = texture(c);
  t.repeat.set(1, 1);
  return t;
}

export function makeRoadTexture() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const rnd = rng(4242);
  ctx.fillStyle = '#4c4a49';
  ctx.fillRect(0, 0, size, size);
  speckle(ctx, size, rnd, 2200, ['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.13)', 'rgba(120,116,110,0.10)'], 0.5, 1.6);
  speckle(ctx, size, rnd, 90, ['rgba(190,186,178,0.10)'], 2, 5);
  const t = texture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function makeFootpathTexture() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const rnd = rng(777);
  ctx.fillStyle = '#c8b48c';
  ctx.fillRect(0, 0, size, size);
  speckle(ctx, size, rnd, 1400, ['rgba(255,255,255,0.16)', 'rgba(120,100,70,0.20)', 'rgba(160,140,100,0.16)'], 0.6, 2.4);
  const t = texture(c);
  return t;
}

export function makeBallastTexture() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const rnd = rng(5150);
  ctx.fillStyle = '#6a6259';
  ctx.fillRect(0, 0, size, size);
  speckle(ctx, size, rnd, 2600, ['rgba(0,0,0,0.22)', 'rgba(255,255,255,0.07)', 'rgba(120,112,100,0.20)'], 0.7, 2.3);
  const t = texture(c);
  return t;
}

export function makeRoofTileTexture(base, shade) {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const rnd = rng(base.length * 31 + 7);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  const rows = 8;
  for (let r = 0; r < rows; r++) {
    const y = (r / rows) * size;
    const h = size / rows;
    // Overlapping tile courses: each row offset by half a tile.
    const offset = (r % 2) * (size / 12) / 2;
    for (let i = -1; i <= 12; i++) {
      const x = offset + (i / 12) * size;
      ctx.fillStyle = rnd() > 0.5 ? shade : base;
      roundRectPath(ctx, x, y + 2, size / 12 - 2, h - 1, 3);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.fillRect(0, y + h - 1, size, 1.5);
  }
  speckle(ctx, size, rnd, 300, ['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.10)'], 0.5, 1.4);
  const t = texture(c);
  return t;
}

export function makeWaterTexture() {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  const rnd = rng(3030);
  // Opaque base: the material's own opacity decides how much of the channel bed
  // shows through, so the texture alpha must not dim the whole surface.
  ctx.fillStyle = '#7ea9bd';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 90; i++) {
    const y = rnd() * size;
    const x = rnd() * size;
    const w = 20 + rnd() * 90;
    ctx.strokeStyle = `rgba(226,244,250,${0.05 + rnd() * 0.12})`;
    ctx.lineWidth = 0.8 + rnd() * 1.8;
    ctx.beginPath();
    for (let s = 0; s <= w; s += 6) {
      const yy = y + Math.sin((x + s) * 0.08) * 2.2;
      if (s === 0) ctx.moveTo(x + s, yy);
      else ctx.lineTo(x + s, yy);
    }
    ctx.stroke();
  }
  const t = texture(c);
  return t;
}

/** Wall-and-window tile. One tile covers 1.6 world units on a facade. */
export function makeWindowTile() {
  const size = 128;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  // Faint plaster / render texture in the wall area.
  speckle(ctx, size, rng(808), 120, ['rgba(0,0,0,0.05)', 'rgba(255,255,255,0.06)'], 0.6, 2.0);

  const w = 90;
  const h = 66;
  const x = 19;
  const y = 36;
  // Sill
  ctx.fillStyle = '#9a9184';
  ctx.fillRect(x - 4, y + h, w + 8, 6);
  // Frame
  ctx.fillStyle = '#f0e9db';
  ctx.fillRect(x - 3, y - 3, w + 6, h + 6);
  // Glass panes (dark, reflective at dusk)
  const g = ctx.createLinearGradient(x, y, x + w * 0.8, y + h);
  g.addColorStop(0, '#3b4252');
  g.addColorStop(0.5, '#2a303d');
  g.addColorStop(1, '#1d222c');
  ctx.fillStyle = g;
  ctx.fillRect(x, y, w, h);
  // Mullions
  ctx.strokeStyle = '#e9e3d6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y);
  ctx.lineTo(x + w / 2, y + h);
  ctx.moveTo(x, y + h / 2);
  ctx.lineTo(x + w, y + h / 2);
  ctx.stroke();
  // Highlights
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(x + 6, y + h - 8);
  ctx.lineTo(x + 6, y + 8);
  ctx.stroke();
  return texture(c);
}

/** Emissive twin of the window tile: only the glass glows at night. */
export function makeWindowGlowTile() {
  const size = 128;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);
  const w = 90;
  const h = 66;
  const x = 19;
  const y = 36;
  const g = ctx.createRadialGradient(x + w / 2, y + h / 2, 3, x + w / 2, y + h / 2, w * 0.8);
  g.addColorStop(0, '#ffe6bb');
  g.addColorStop(0.5, '#ffb45c');
  g.addColorStop(1, '#d97f2c');
  ctx.fillStyle = g;
  ctx.fillRect(x, y, w, h);
  // A few dark rooms so only some windows are lit.
  ctx.fillStyle = 'rgba(0,0,0,0.92)';
  ctx.fillRect(x + 4, y + 4, 30, 16);
  ctx.fillRect(x + 52, y + 40, 30, 14);
  const t = texture(c);
  return t;
}

export function makeSignTexture(lines, { bg = '#8a3f22', fg = '#f7ecd8', sub = null } = {}) {
  const w = 1024;
  const h = 256;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 8;
  ctx.strokeRect(16, 16, w - 32, h - 32);
  ctx.fillStyle = fg;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '700 112px Georgia, "Times New Roman", serif';
  ctx.fillText(lines[0], w / 2, sub ? h * 0.40 : h * 0.52);
  if (sub) {
    ctx.font = '500 58px Georgia, serif';
    ctx.fillText(sub, w / 2, h * 0.74);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function makeClockTexture(hours = 6, minutes = 30) {
  const size = 256;
  const c = canvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f8f3e6';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#4a3a2a';
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.fillStyle = '#4a3a2a';
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    ctx.save();
    ctx.translate(size / 2 + Math.cos(a) * (size / 2 - 26), size / 2 + Math.sin(a) * (size / 2 - 26));
    ctx.rotate(a + Math.PI / 2);
    ctx.fillRect(-3, -8, 6, 16);
    ctx.restore();
  }
  const drawHand = (angle, len, lw) => {
    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate(angle);
    ctx.strokeStyle = '#2e2418';
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -len);
    ctx.stroke();
    ctx.restore();
  };
  drawHand(((hours % 12) / 12) * Math.PI * 2 - Math.PI / 2, 54, 9);
  drawHand((minutes / 60) * Math.PI * 2 - Math.PI / 2, 76, 6);
  ctx.fillStyle = '#2e2418';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 8, 0, Math.PI * 2);
  ctx.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
