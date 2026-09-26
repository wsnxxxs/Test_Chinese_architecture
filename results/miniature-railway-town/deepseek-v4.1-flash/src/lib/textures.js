import * as THREE from 'three';
import { mulberry32 } from './rng.js';

// ---------------------------------------------------------------------------
// Procedural canvas textures. No external assets: everything is painted here so
// the diorama boots instantly and stays a single self-contained project.
// ---------------------------------------------------------------------------

let ANISO = 4;
export function setAnisotropy(v) {
  ANISO = Math.max(1, Math.min(16, v || 4));
}

const cache = new Map();
function cached(key, factory) {
  if (!cache.has(key)) cache.set(key, factory());
  return cache.get(key);
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function finish(canvas, { srgb = true, wrap = THREE.RepeatWrapping } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = wrap;
  t.anisotropy = ANISO;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.repeat.set(1, 1);
  t.needsUpdate = true;
  return t;
}

function speckle(ctx, w, h, count, rand, colors, minR, maxR, alpha = 1) {
  for (let i = 0; i < count; i++) {
    const r = minR + rand() * (maxR - minR);
    ctx.globalAlpha = alpha * (0.35 + rand() * 0.65);
    ctx.fillStyle = colors[Math.floor(rand() * colors.length)];
    const x = rand() * w;
    const y = rand() * h;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * (0.5 + rand()), rand() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function blotches(ctx, w, h, count, rand, colors, minR, maxR, alpha) {
  for (let i = 0; i < count; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const r = minR + rand() * (maxR - minR);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const col = colors[Math.floor(rand() * colors.length)];
    g.addColorStop(0, col + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
    g.addColorStop(1, col + '00');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- lawn / meadow ---------------------------------------------------------
export function grassTexture() {
  return cached('grass', () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(11);
    g.fillStyle = '#5f8a3c';
    g.fillRect(0, 0, S, S);
    blotches(g, S, S, 90, rand, ['#6f9a45', '#4e7531', '#7ba24c', '#43682c'], 40, 170, 0.55);
    speckle(g, S, S, 5200, rand, ['#7fae52', '#4a6f2e', '#65913f', '#8cb85c', '#3d5f27'], 0.6, 2.4, 0.85);
    // tiny grass blade strokes
    g.lineWidth = 1;
    for (let i = 0; i < 2600; i++) {
      const x = rand() * S;
      const y = rand() * S;
      g.strokeStyle = ['#8fbd5f', '#54803a', '#6d9a44', '#3f6529'][Math.floor(rand() * 4)];
      g.globalAlpha = 0.35 + rand() * 0.45;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + (rand() * 4 - 2), y - 2 - rand() * 4);
      g.stroke();
    }
    g.globalAlpha = 1;
    return finish(c);
  });
}

// --- bare earth / gravel path ---------------------------------------------
export function dirtTexture(base = '#9c7f57') {
  return cached('dirt' + base, () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(23);
    g.fillStyle = base;
    g.fillRect(0, 0, S, S);
    blotches(g, S, S, 60, rand, ['#8a6f4b', '#ab8d63', '#7c6543'], 20, 90, 0.5);
    speckle(g, S, S, 3000, rand, ['#b39a72', '#6f5a3c', '#c2a97d', '#8a7550'], 0.5, 2.2, 0.8);
    return finish(c);
  });
}

// --- gravel ballast --------------------------------------------------------
export function gravelTexture() {
  return cached('gravel', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(31);
    g.fillStyle = '#8d8478';
    g.fillRect(0, 0, S, S);
    blotches(g, S, S, 40, rand, ['#7a7268', '#9c9488'], 30, 100, 0.5);
    for (let i = 0; i < 4200; i++) {
      const x = rand() * S;
      const y = rand() * S;
      const r = 0.8 + rand() * 2.6;
      g.fillStyle = ['#a9a196', '#6d6559', '#c0b7a8', '#847b6f', '#58514a'][Math.floor(rand() * 5)];
      g.globalAlpha = 0.6 + rand() * 0.4;
      g.beginPath();
      g.ellipse(x, y, r, r * (0.6 + rand() * 0.6), rand() * 3, 0, Math.PI * 2);
      g.fill();
    }
    g.globalAlpha = 1;
    return finish(c);
  });
}

// --- asphalt ---------------------------------------------------------------
export function asphaltTexture() {
  return cached('asphalt', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(41);
    g.fillStyle = '#5b5a58';
    g.fillRect(0, 0, S, S);
    blotches(g, S, S, 40, rand, ['#4e4d4b', '#676663'], 25, 95, 0.5);
    speckle(g, S, S, 5000, rand, ['#77746f', '#3f3e3c', '#8b8884', '#514f4c'], 0.5, 2.0, 0.7);
    return finish(c);
  });
}

// --- tidy wood (base board, sleepers, crates) ------------------------------
export function woodTexture({ base = '#8a5a33', dark = '#5d3a1e', planks = 4, seed = 51, grain = 220 } = {}) {
  return cached('wood' + base + dark + planks + seed, () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    g.fillStyle = base;
    g.fillRect(0, 0, S, S);
    // long grain
    for (let i = 0; i < grain; i++) {
      const y = rand() * S;
      g.strokeStyle = rand() < 0.5 ? dark : base;
      g.globalAlpha = 0.06 + rand() * 0.16;
      g.lineWidth = 0.6 + rand() * 2.2;
      g.beginPath();
      g.moveTo(0, y);
      for (let x = 0; x <= S; x += 32) {
        g.lineTo(x, y + Math.sin((x / S) * Math.PI * (1 + rand() * 3) + i) * (1 + rand() * 3));
      }
      g.stroke();
    }
    // knots
    for (let i = 0; i < 6; i++) {
      const x = rand() * S;
      const y = rand() * S;
      for (let k = 5; k > 0; k--) {
        g.strokeStyle = dark;
        g.globalAlpha = 0.16;
        g.lineWidth = 1.6;
        g.beginPath();
        g.ellipse(x, y, k * 3.4, k * 2.1, rand(), 0, Math.PI * 2);
        g.stroke();
      }
    }
    g.globalAlpha = 1;
    // plank seams (horizontal boards)
    const step = S / planks;
    for (let i = 0; i <= planks; i++) {
      const y = i * step;
      g.fillStyle = dark;
      g.globalAlpha = 0.55;
      g.fillRect(0, y - 1.5, S, 3);
    }
    g.globalAlpha = 1;
    return finish(c);
  });
}

// --- stone wall ------------------------------------------------------------
export function stoneTexture({ base = '#9a958c', dark = '#6e6a62', seed = 61 } = {}) {
  return cached('stone' + base + dark + seed, () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    g.fillStyle = dark;
    g.fillRect(0, 0, S, S);
    const rows = 9;
    const rh = S / rows;
    for (let r = 0; r < rows; r++) {
      let x = -rand() * 60;
      while (x < S) {
        const w = 34 + rand() * 54;
        const h = rh - 3;
        const shade = 0.82 + rand() * 0.36;
        const col = new THREE.Color(base).multiplyScalar(shade);
        g.fillStyle = '#' + col.getHexString();
        const rx = x + 2;
        const ry = r * rh + 2;
        g.beginPath();
        const rad = 3 + rand() * 3;
        g.roundRect(rx, ry, w - 4, h, rad);
        g.fill();
        g.globalAlpha = 0.25;
        speckle(g, S, S, 0, rand, [base], 1, 1, 0);
        g.globalAlpha = 1;
        x += w;
      }
    }
    speckle(g, S, S, 4200, rand, ['#b3ada3', '#5c584f', '#8b867c'], 0.5, 2.2, 0.5);
    return finish(c);
  });
}

// --- brick -----------------------------------------------------------------
export function brickTexture({ base = '#a4503c', mortar = '#c8bfae', seed = 71 } = {}) {
  return cached('brick' + base + mortar + seed, () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    g.fillStyle = mortar;
    g.fillRect(0, 0, S, S);
    const rows = 16;
    const rh = S / rows;
    for (let r = 0; r < rows; r++) {
      const offset = (r % 2) * 26;
      for (let x = -26; x < S; x += 52) {
        const col = new THREE.Color(base).multiplyScalar(0.85 + rand() * 0.3);
        g.fillStyle = '#' + col.getHexString();
        g.fillRect(x + offset + 2, r * rh + 2, 48, rh - 4);
      }
    }
    blotches(g, S, S, 30, rand, ['#8d4130', '#b56049'], 20, 80, 0.4);
    return finish(c);
  });
}

// --- painted plaster / weatherboard walls ---------------------------------
export function plasterTexture(hex, seed = 81) {
  return cached('plaster' + hex + seed, () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    const base = new THREE.Color(hex);
    g.fillStyle = '#' + base.getHexString();
    g.fillRect(0, 0, S, S);
    const light = '#' + base.clone().lerp(new THREE.Color('#ffffff'), 0.25).getHexString();
    const dark = '#' + base.clone().lerp(new THREE.Color('#000000'), 0.3).getHexString();
    blotches(g, S, S, 40, rand, [light, dark], 18, 70, 0.35);
    speckle(g, S, S, 2600, rand, [light, dark], 0.5, 1.6, 0.5);
    // faint vertical weather streaks, the sort of patina a hand painted model has
    for (let i = 0; i < 26; i++) {
      g.globalAlpha = 0.05 + rand() * 0.08;
      g.fillStyle = dark;
      g.fillRect(rand() * S, 0, 1 + rand() * 5, S);
    }
    g.globalAlpha = 1;
    return finish(c);
  });
}

// --- roof tiles ------------------------------------------------------------
export function roofTexture(hex, { rows = 10, seed = 91, style = 'tile' } = {}) {
  return cached('roof' + hex + rows + seed + style, () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    const base = new THREE.Color(hex);
    const dark = '#' + base.clone().multiplyScalar(0.62).getHexString();
    g.fillStyle = dark;
    g.fillRect(0, 0, S, S);
    const rh = S / rows;
    for (let r = 0; r < rows; r++) {
      const cols = 12;
      const cw = S / cols;
      const offset = (r % 2) * cw * 0.5;
      for (let i = -1; i <= cols; i++) {
        const col = new THREE.Color(hex).multiplyScalar(0.78 + rand() * 0.4);
        g.fillStyle = '#' + col.getHexString();
        const x = i * cw + offset;
        if (style === 'slate') {
          g.beginPath();
          g.roundRect(x + 1, r * rh + 1, cw - 2, rh - 1.5, 1.5);
          g.fill();
        } else {
          g.beginPath();
          g.roundRect(x + 1.5, r * rh + 1.5, cw - 3, rh * 0.78, 2.5);
          g.fill();
          g.fillStyle = 'rgba(0,0,0,0.18)';
          g.fillRect(x + 1.5, r * rh + rh * 0.78, cw - 3, rh * 0.22);
        }
      }
      g.fillStyle = 'rgba(0,0,0,0.22)';
      g.fillRect(0, r * rh + rh - 2.5, S, 2.5);
    }
    blotches(g, S, S, 22, rand, ['#6a6155', '#c9c0b0'], 12, 50, 0.18);
    return finish(c);
  });
}

// --- thatch / shingle ------------------------------------------------------
export function thatchTexture(hex = '#b99a5c', seed = 101) {
  return cached('thatch' + hex + seed, () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    g.fillStyle = hex;
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 4200; i++) {
      const x = rand() * S;
      const y = rand() * S;
      g.strokeStyle = ['#a98b4f', '#cbb079', '#8d7440', '#d8c294'][Math.floor(rand() * 4)];
      g.globalAlpha = 0.25 + rand() * 0.5;
      g.lineWidth = 0.8 + rand();
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + rand() * 3 - 1.5, y + 5 + rand() * 9);
      g.stroke();
    }
    g.globalAlpha = 1;
    return finish(c);
  });
}

// --- water -----------------------------------------------------------------
export function waterTexture() {
  return cached('water', () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(111);
    g.fillStyle = '#4f8490';
    g.fillRect(0, 0, S, S);
    blotches(g, S, S, 70, rand, ['#5d99a3', '#42727e', '#6aa8ad'], 30, 130, 0.5);
    // long, soft wave lines - reads as gentle current at diorama scale
    for (let i = 0; i < 260; i++) {
      const y = rand() * S;
      g.strokeStyle = rand() < 0.5 ? '#a5d6d8' : '#35646e';
      g.globalAlpha = 0.10 + rand() * 0.22;
      g.lineWidth = 0.8 + rand() * 2.4;
      g.beginPath();
      g.moveTo(0, y);
      for (let x = 0; x <= S; x += 24) {
        g.lineTo(x, y + Math.sin((x / S) * Math.PI * (2 + rand() * 4)) * (2 + rand() * 5));
      }
      g.stroke();
    }
    g.globalAlpha = 1;
    return finish(c);
  });
}

export function waterBumpTexture() {
  return cached('waterBump', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(113);
    g.fillStyle = '#808080';
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 700; i++) {
      const x = rand() * S;
      const y = rand() * S;
      const r = 4 + rand() * 26;
      const grad = g.createRadialGradient(x, y, 0, x, y, r);
      const v = rand() < 0.5 ? 255 : 0;
      grad.addColorStop(0, `rgba(${v},${v},${v},0.32)`);
      grad.addColorStop(1, `rgba(${v},${v},${v},0)`);
      g.fillStyle = grad;
      g.beginPath();
      g.ellipse(x, y, r, r * (0.25 + rand() * 0.35), rand() * Math.PI, 0, Math.PI * 2);
      g.fill();
    }
    return finish(c, { srgb: false });
  });
}

// --- soft round sprite used for lamp glow ---------------------------------
export function glowTexture() {
  return cached('glow', () => {
    const S = 128;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    grad.addColorStop(0, 'rgba(255,236,190,1)');
    grad.addColorStop(0.22, 'rgba(255,206,130,0.55)');
    grad.addColorStop(0.55, 'rgba(255,176,88,0.18)');
    grad.addColorStop(1, 'rgba(255,160,70,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, S, S);
    return finish(c, { wrap: THREE.ClampToEdgeWrapping });
  });
}

// --- table cloth under the board ------------------------------------------
export function tableTexture() {
  return cached('table', () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const g = c.getContext('2d');
    const rand = mulberry32(131);
    g.fillStyle = '#241f1b';
    g.fillRect(0, 0, S, S);
    // soft pool of light under the diorama, falling away to the edges
    const grad = g.createRadialGradient(S * 0.5, S * 0.5, S * 0.04, S * 0.5, S * 0.5, S * 0.62);
    grad.addColorStop(0, 'rgba(96,80,64,0.85)');
    grad.addColorStop(0.42, 'rgba(64,53,43,0.6)');
    grad.addColorStop(1, 'rgba(20,17,15,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, S, S);
    blotches(g, S, S, 60, rand, ['#3a332c', '#2a2521'], 40, 200, 0.5);
    speckle(g, S, S, 6000, rand, ['#453d34', '#1d1916', '#514639'], 0.5, 2.0, 0.45);
    return finish(c, { wrap: THREE.ClampToEdgeWrapping });
  });
}

// --- engraved brass plaque -------------------------------------------------
export function plaqueTexture(lines, { bg = '#8a6a2f', fg = '#3a2c10' } = {}) {
  const key = 'plaque' + lines.join('|') + bg + fg;
  return cached(key, () => {
    const W = 512;
    const H = 128;
    const c = makeCanvas(W, H);
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#c9a85a');
    grad.addColorStop(0.15, '#d8bd77');
    grad.addColorStop(0.5, bg);
    grad.addColorStop(1, '#5d4519');
    g.fillStyle = grad;
    g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(0,0,0,0.25)';
    g.fillRect(0, 0, W, 5);
    g.fillRect(0, H - 5, W, 5);
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    lines.forEach((line, i) => {
      const size = i === 0 ? 46 : 26;
      g.font = `600 ${size}px "Trebuchet MS", "Segoe UI", sans-serif`;
      g.fillStyle = 'rgba(255,240,200,0.35)';
      g.fillText(line, W / 2 + 1.5, H / 2 + (i - (lines.length - 1) / 2) * 40 + 1.5);
      g.fillStyle = fg;
      g.fillText(line, W / 2, H / 2 + (i - (lines.length - 1) / 2) * 40);
    });
    return finish(c, { wrap: THREE.ClampToEdgeWrapping });
  });
}

// --- sky gradient used both as background and as the environment map -------
export function skyTexture({ top, horizon, bottom, sun = null, stars = 0, seed = 151 }) {
  return cached('sky' + top + horizon + bottom + stars + JSON.stringify(sun), () => {
    const W = 1024;
    const H = 512;
    const c = makeCanvas(W, H);
    const g = c.getContext('2d');
    const rand = mulberry32(seed);
    const grad = g.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, top);
    grad.addColorStop(0.48, horizon);
    grad.addColorStop(0.52, horizon);
    grad.addColorStop(1, bottom);
    g.fillStyle = grad;
    g.fillRect(0, 0, W, H);
    if (stars > 0) {
      for (let i = 0; i < stars; i++) {
        const x = rand() * W;
        const y = rand() * H * 0.5;
        const r = rand() * 1.3 + 0.2;
        g.globalAlpha = 0.25 + rand() * 0.75;
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.arc(x, y, r, 0, Math.PI * 2);
        g.fill();
      }
      g.globalAlpha = 1;
    }
    if (sun) {
      const sx = ((sun.azimuth / (Math.PI * 2)) % 1 + 1) % 1 * W;
      const sy = H * (0.5 - sun.elevation / Math.PI);
      const r = sun.radius || 90;
      const sg = g.createRadialGradient(sx, sy, 0, sx, sy, r);
      sg.addColorStop(0, sun.core || 'rgba(255,246,220,1)');
      sg.addColorStop(0.25, sun.mid || 'rgba(255,214,150,0.55)');
      sg.addColorStop(1, 'rgba(255,180,110,0)');
      g.fillStyle = sg;
      g.beginPath();
      g.arc(sx, sy, r, 0, Math.PI * 2);
      g.fill();
    }
    const t = finish(c);
    t.mapping = THREE.EquirectangularReflectionMapping;
    return t;
  });
}
