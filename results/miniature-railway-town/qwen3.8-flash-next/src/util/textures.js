import * as THREE from 'three';
import { makeRng, fbm } from '../util/mathx.js';

const cache = new Map();

/** Memoised factory so repeated buildings/roofs share GPU memory. */
function cached(key, make) {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function tex(canvas, { repeat = [1, 1], srgb = true, wrap = THREE.RepeatWrapping } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = wrap;
  t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function noiseOverlays(ctx, w, h, { speckles = 2600, alpha = 0.05, blotches = 26, blotchAlpha = 0.045, seed = 7 }) {
  const rnd = makeRng(seed);
  for (let i = 0; i < blotches; i++) {
    const x = rnd() * w, y = rnd() * h, r = (0.08 + rnd() * 0.22) * w;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const dark = rnd() > 0.5;
    g.addColorStop(0, dark ? `rgba(0,0,0,${blotchAlpha})` : `rgba(255,255,255,${blotchAlpha * 1.3})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let i = 0; i < speckles; i++) {
    const x = rnd() * w, y = rnd() * h;
    ctx.fillStyle = rnd() > 0.5 ? `rgba(0,0,0,${alpha})` : `rgba(255,255,255,${alpha * 1.4})`;
    ctx.fillRect(x, y, 1 + rnd() * 1.6, 1 + rnd() * 1.6);
  }
}

/* ------------------------------------------------------------------ ground cover */

export function grassTexture() {
  return cached('grass', () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#9fb37c';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(21);
    // clumped turf strokes read as flocked model grass, not pixels
    for (let i = 0; i < 24000; i++) {
      const x = rnd() * S, y = rnd() * S;
      const n = fbm(x * 0.035, y * 0.035, 3);
      const light = 46 + n * 26 + (rnd() - 0.5) * 16;
      const hue = 74 + n * 24 + (rnd() - 0.5) * 20;
      ctx.strokeStyle = `hsl(${hue}, ${30 + n * 16}%, ${clamp8b(light)}%)`;
      ctx.lineWidth = 0.8 + rnd() * 0.9;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (rnd() - 0.5) * 3, y - 1.6 - rnd() * 2.4);
      ctx.stroke();
    }
    noiseOverlays(ctx, S, S, { speckles: 1200, alpha: 0.035, blotches: 26, blotchAlpha: 0.04, seed: 5 });
    return tex(c, { repeat: [7, 5] });
  });
}

export function fieldTexture() {
  return cached('field', () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#b3a76c';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(88);
    for (let y = 0; y < S; y += 5) {
      ctx.fillStyle = `hsl(${66 + (y % 20 === 0 ? 12 : 0)}, 30%, ${46 + (y % 3 === 0 ? 8 : 0)}%)`;
      ctx.globalAlpha = 0.35;
      ctx.fillRect(0, y, S, 3);
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 9000; i++) {
      const x = rnd() * S, y = rnd() * S;
      ctx.fillStyle = `hsl(${60 + rnd() * 30}, ${22 + rnd() * 22}%, ${28 + rnd() * 26}%)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    return tex(c, { repeat: [6, 5] });
  });
}

/* ------------------------------------------------------------------ timber */

export function woodTexture(dark = false) {
  return cached(`wood${dark ? 'd' : ''}`, () => {
    const W = 512, H = 512;
    const c = makeCanvas(W, H);
    const ctx = c.getContext('2d');
    ctx.fillStyle = dark ? '#4a3324' : '#7d5233';
    ctx.fillRect(0, 0, W, H);
    const rnd = makeRng(dark ? 31 : 17);
    // long grain
    for (let i = 0; i < 240; i++) {
      const y = rnd() * H;
      ctx.strokeStyle = `rgba(${dark ? '20,12,6' : '58,32,14'},${0.05 + rnd() * 0.16})`;
      ctx.lineWidth = 0.6 + rnd() * 2.6;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= W; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * (2 + rnd() * 5));
      ctx.stroke();
    }
    // board seams
    for (let y = 0; y < H; y += 64) {
      ctx.fillStyle = 'rgba(24,12,4,0.42)';
      ctx.fillRect(0, y, W, 2.5);
      ctx.fillStyle = 'rgba(255,225,190,0.05)';
      ctx.fillRect(0, y + 3, W, 1.5);
    }
    noiseOverlays(ctx, W, H, { speckles: 2400, alpha: 0.05, blotches: 18, blotchAlpha: 0.06, seed: 3 });
    return tex(c, { repeat: [1, 1] });
  });
}

export function deckPlankTexture() {
  return cached('deck', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#6b4a2d';
    ctx.fillRect(0, 0, S, S);
    for (let y = 0; y < S; y += 16) {
      ctx.fillStyle = `hsl(28, ${18 + (y % 32 === 0 ? 8 : 0)}%, ${26 + ((y / 16) % 3) * 4}%)`;
      ctx.fillRect(0, y, S, 14);
      ctx.fillStyle = 'rgba(20,10,4,0.5)';
      ctx.fillRect(0, y + 14, S, 2);
    }
    const rnd = makeRng(41);
    for (let i = 0; i < 2400; i++) {
      ctx.fillStyle = `rgba(${rnd() > 0.5 ? '255,235,205' : '30,16,8'},${0.04 + rnd() * 0.06})`;
      ctx.fillRect(rnd() * S, rnd() * S, 2, 1);
    }
    return tex(c, { repeat: [1, 6] });
  });
}

/* ------------------------------------------------------------------ masonry + roof */

export function stoneTexture() {
  return cached('stone', () => {
    const S = 512;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#8f887b';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(63);
    let y = 0;
    let row = 0;
    while (y < S) {
      const h = 22 + rnd() * 12;
      let x = row % 2 ? -30 : 0;
      while (x < S) {
        const w = 44 + rnd() * 46;
        const l = 52 + rnd() * 16;
        ctx.fillStyle = `hsl(${34 + rnd() * 12}, ${6 + rnd() * 8}%, ${l}%)`;
        roundRect(ctx, x + 2, y + 2, w - 4, h - 4, 3);
        ctx.fill();
        ctx.strokeStyle = 'rgba(60,54,46,0.5)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
        x += w;
      }
      y += h;
      row++;
    }
    noiseOverlays(ctx, S, S, { speckles: 3000, alpha: 0.06, blotches: 22, blotchAlpha: 0.07, seed: 9 });
    return tex(c, { repeat: [1, 1] });
  });
}

export function brickTexture() {
  return cached('brick', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#c9bcb0';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(77);
    const h = 11, w = 27;
    for (let row = 0, y = 0; y < S; row++, y += h) {
      for (let x = (row % 2 ? -w / 2 : 0); x < S; x += w) {
        ctx.fillStyle = `hsl(${8 + rnd() * 12}, ${34 + rnd() * 16}%, ${34 + rnd() * 12}%)`;
        ctx.fillRect(x + 1, y + 1, w - 2, h - 2);
      }
    }
    noiseOverlays(ctx, S, S, { speckles: 1600, alpha: 0.05, blotches: 12, blotchAlpha: 0.05, seed: 4 });
    return tex(c, { repeat: [3, 3] });
  });
}

export function roofTexture(kind = 'slate') {
  return cached(`roof-${kind}`, () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#5b5b5f';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(kind === 'tile' ? 12 : 26);
    const rows = kind === 'tile' ? 12 : 16;
    const rh = S / rows;
    for (let r = 0; r < rows; r++) {
      const cols = 12;
      const cw = S / cols;
      for (let i = 0; i < cols; i++) {
        const x = i * cw + (r % 2 ? cw / 2 : 0);
        const y = r * rh;
        const shade = kind === 'tile'
          ? `hsl(${12 + rnd() * 10}, ${30 + rnd() * 14}%, ${30 + rnd() * 12}%)`
          : `hsl(${210 + rnd() * 18}, ${5 + rnd() * 8}%, ${28 + rnd() * 14}%)`;
        ctx.fillStyle = shade;
        if (kind === 'tile') {
          ctx.beginPath();
          ctx.roundRect ? ctx.roundRect(x, y, cw - 1, rh - 1, [0, 0, cw * 0.4, cw * 0.4]) : ctx.rect(x, y, cw - 1, rh - 1);
          ctx.fill();
        } else {
          ctx.fillRect(x, y, cw - 1.2, rh - 1.2);
        }
        ctx.fillStyle = 'rgba(0,0,0,0.16)';
        ctx.fillRect(x, y + rh - 2.2, cw - 1.2, 2.2);
      }
    }
    noiseOverlays(ctx, S, S, { speckles: 1500, alpha: 0.05, blotches: 14, blotchAlpha: 0.05, seed: 2 });
    return tex(c, { repeat: [2, 2] });
  });
}

/* ------------------------------------------------------------------ surfaces */

export function ballastTexture() {
  return cached('ballast', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#5a5751';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(101);
    for (let i = 0; i < 5200; i++) {
      const x = rnd() * S, y = rnd() * S, r = 1.1 + rnd() * 2.4;
      ctx.fillStyle = `hsl(${24 + rnd() * 18}, ${5 + rnd() * 8}%, ${22 + rnd() * 30}%)`;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * (0.6 + rnd() * 0.5), rnd() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    return tex(c, { repeat: [1, 26] });
  });
}

export function paveTexture(kind) {
  return cached(`pave-${kind}`, () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    const rnd = makeRng(kind === 'tarmac' ? 5 : kind === 'setts' ? 55 : 155);
    if (kind === 'tarmac') {
      ctx.fillStyle = '#43423f';
      ctx.fillRect(0, 0, S, S);
      for (let i = 0; i < 9000; i++) {
        ctx.fillStyle = `rgba(${rnd() > 0.5 ? '210,206,198' : '16,15,14'},${0.03 + rnd() * 0.07})`;
        ctx.fillRect(rnd() * S, rnd() * S, 1 + rnd() * 2, 1 + rnd() * 2);
      }
      for (let i = 0; i < 22; i++) {
        ctx.strokeStyle = 'rgba(18,18,18,0.28)';
        ctx.lineWidth = 0.8 + rnd();
        ctx.beginPath();
        ctx.moveTo(rnd() * S, rnd() * S);
        ctx.bezierCurveTo(rnd() * S, rnd() * S, rnd() * S, rnd() * S, rnd() * S, rnd() * S);
        ctx.stroke();
      }
      return tex(c, { repeat: [1, 5] });
    }
    if (kind === 'setts') {
      ctx.fillStyle = '#6d655b';
      ctx.fillRect(0, 0, S, S);
      const rows = 10, cols = 14;
      for (let r = 0; r < rows; r++) {
        for (let i = 0; i < cols; i++) {
          const x = (i * S) / cols + (r % 2 ? 3 : 0), y = (r * S) / rows;
          ctx.fillStyle = `hsl(${28 + rnd() * 14}, ${5 + rnd() * 8}%, ${34 + rnd() * 20}%)`;
          ctx.beginPath();
          ctx.roundRect ? ctx.roundRect(x + 1.5, y + 1.5, S / cols - 3, S / rows - 3, 2.5) : ctx.rect(x + 1.5, y + 1.5, S / cols - 3, S / rows - 3);
          ctx.fill();
        }
      }
      noiseOverlays(ctx, S, S, { speckles: 1800, alpha: 0.05, blotches: 14, seed: 6 });
      return tex(c, { repeat: [3, 3] });
    }
    if (kind === 'cobbles') {
      ctx.fillStyle = '#6a645c';
      ctx.fillRect(0, 0, S, S);
      for (let r = 0; r < 12; r++) {
        for (let i = 0; i < 12; i++) {
          const x = (i * S) / 12 + (rnd() - 0.5) * 4, y = (r * S) / 12 + (rnd() - 0.5) * 4;
          ctx.fillStyle = `hsl(${26 + rnd() * 16}, ${5 + rnd() * 7}%, ${30 + rnd() * 24}%)`;
          ctx.beginPath();
          ctx.ellipse(x + 9, y + 9, 8.4, 7.6, rnd() * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      return tex(c, { repeat: [2, 6] });
    }
    // gravel
    ctx.fillStyle = '#9b8f79';
    ctx.fillRect(0, 0, S, S);
    for (let i = 0; i < 7000; i++) {
      const x = rnd() * S, y = rnd() * S;
      ctx.fillStyle = `hsl(${30 + rnd() * 16}, ${10 + rnd() * 10}%, ${34 + rnd() * 34}%)`;
      ctx.beginPath();
      ctx.ellipse(x, y, 0.9 + rnd() * 1.7, 0.8 + rnd() * 1.4, rnd() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    return tex(c, { repeat: [2, 8] });
  });
}

export function waterTexture() {
  return cached('water', () => {
    const S = 256;
    const c = makeCanvas(S, S);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#7d8f8c';
    ctx.fillRect(0, 0, S, S);
    const rnd = makeRng(303);
    for (let i = 0; i < 260; i++) {
      const y = rnd() * S;
      ctx.strokeStyle = `rgba(255,255,255,${0.05 + rnd() * 0.11})`;
      ctx.lineWidth = 0.6 + rnd() * 1.5;
      ctx.beginPath();
      ctx.moveTo(0, y);
      const amp = 1.5 + rnd() * 4, k = 0.02 + rnd() * 0.05;
      for (let x = 0; x <= S; x += 8) ctx.lineTo(x, y + Math.sin(x * k + i) * amp);
      ctx.stroke();
    }
    for (let i = 0; i < 90; i++) {
      const y = rnd() * S;
      ctx.strokeStyle = 'rgba(10,30,32,0.10)';
      ctx.lineWidth = 1 + rnd() * 3;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= S; x += 10) ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 3);
      ctx.stroke();
    }
    return tex(c, { repeat: [3, 3] });
  });
}

/* ------------------------------------------------------------------ facades */

/**
 * Wall colour map + window emissive map for one building style.
 * Windows are drawn as pale recesses in the colour map (so they take the wall
 * tint) and as warm rectangles in the emissive map, which the night rig fades up.
 */
export function facadeTextures({ floors = 2, cols = 3, seed = 1, style = 'house', litRatio = 0.55, door = true }) {
  const key = `facade-${style}-${floors}-${cols}-${seed}-${litRatio}-${door ? 1 : 0}`;
  return cached(key, () => {
    const W = 256, H = 256;
    const base = makeCanvas(W, H);
    const bctx = base.getContext('2d');
    bctx.fillStyle = '#ffffff';
    bctx.fillRect(0, 0, W, H);
    const glow = makeCanvas(W, H);
    const gctx = glow.getContext('2d');
    gctx.fillStyle = '#000000';
    gctx.fillRect(0, 0, W, H);

    const rnd = makeRng(seed * 7919 + floors * 31 + cols);
    // plaster / masonry tone, near white so material.colour can tint it
    const gr = bctx.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, 'rgba(236,234,228,1)');
    gr.addColorStop(1, 'rgba(208,204,196,1)');
    bctx.fillStyle = gr;
    bctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 4200; i++) {
      bctx.fillStyle = `rgba(${rnd() > 0.5 ? '255,255,255' : '120,112,100'},${0.02 + rnd() * 0.05})`;
      bctx.fillRect(rnd() * W, rnd() * H, 1 + rnd() * 2.2, 1 + rnd() * 2.2);
    }
    // plinth + string course give the walls a built, layered look
    bctx.fillStyle = 'rgba(96,90,82,0.55)';
    bctx.fillRect(0, H - 16, W, 16);
    bctx.fillStyle = 'rgba(255,255,255,0.22)';
    bctx.fillRect(0, H - 18, W, 2);
    if (floors > 1) {
      bctx.fillStyle = 'rgba(120,112,102,0.30)';
      bctx.fillRect(0, H * 0.5 - 2, W, 4);
    }
    if (style === 'brick') {
      const bh = 13;
      for (let row = 0, y = 0; y < H; row++, y += bh) {
        for (let x = (row % 2 ? -18 : 0); x < W; x += 36) {
          bctx.fillStyle = `rgba(${120 + rnd() * 60},${70 + rnd() * 40},${52 + rnd() * 30},0.16)`;
          bctx.fillRect(x + 1, y + 1, 34, bh - 2);
        }
      }
    }
    if (style === 'half-timber') {
      bctx.strokeStyle = 'rgba(58,40,28,0.85)';
      bctx.lineWidth = 6;
      for (let i = 0; i <= 4; i++) {
        bctx.beginPath();
        bctx.moveTo((i * W) / 4, 8);
        bctx.lineTo((i * W) / 4, H - 12);
        bctx.stroke();
      }
      for (let i = 0; i <= 3; i++) {
        bctx.beginPath();
        bctx.moveTo(0, (i * H) / 3 + 10);
        bctx.lineTo(W, (i * H) / 3 + 10);
        bctx.stroke();
      }
      bctx.lineWidth = 4;
      bctx.beginPath(); bctx.moveTo(0, H - 14); bctx.lineTo(W, 14); bctx.stroke();
      bctx.beginPath(); bctx.moveTo(W, H - 14); bctx.lineTo(0, 14); bctx.stroke();
    }

    const marginX = W * 0.10;
    const marginTop = H * 0.12;
    const marginBottom = H * 0.10;
    const cellW = (W - marginX * 2) / cols;
    const cellH = (H - marginTop - marginBottom) / floors;
    const winW = cellW * (style === 'shop' ? 0.62 : 0.5);
    const winH = cellH * (style === 'shop' ? 0.5 : 0.56);

    for (let f = 0; f < floors; f++) {
      for (let i = 0; i < cols; i++) {
        const cx = marginX + cellW * (i + 0.5);
        const cy = marginTop + cellH * f + cellH * 0.46;
        const w = winW, h = winH;
        const x = cx - w / 2, y = cy - h / 2;
        // reveal + frame
        bctx.fillStyle = 'rgba(48,44,40,0.9)';
        bctx.fillRect(x - 3, y - 3, w + 6, h + 6);
        bctx.fillStyle = 'rgba(246,244,238,0.95)';
        bctx.fillRect(x - 1.5, y - 1.5, w + 3, h + 3);
        const glassTone = style === 'shop' ? 'rgba(96,120,128,0.95)' : 'rgba(84,98,106,0.95)';
        bctx.fillStyle = glassTone;
        bctx.fillRect(x, y, w, h);
        bctx.fillStyle = 'rgba(255,255,255,0.18)';
        bctx.fillRect(x, y, w, h * 0.32);
        // glazing bars
        bctx.strokeStyle = 'rgba(238,236,230,0.75)';
        bctx.lineWidth = 2;
        bctx.beginPath();
        bctx.moveTo(cx, y); bctx.lineTo(cx, y + h);
        bctx.moveTo(x, y + h * (f === 0 && style === 'shop' ? 0.66 : 0.5)); bctx.lineTo(x + w, y + h * (f === 0 && style === 'shop' ? 0.66 : 0.5));
        bctx.stroke();
        // sill
        bctx.fillStyle = 'rgba(198,192,182,0.95)';
        bctx.fillRect(x - 5, y + h + 2.5, w + 10, 4);
        bctx.fillStyle = 'rgba(40,36,32,0.35)';
        bctx.fillRect(x - 5, y + h + 6.5, w + 10, 2);

        const lit = rnd() < litRatio;
        if (lit) {
          const warm = 0.65 + rnd() * 0.35;
          gctx.fillStyle = `rgba(${255 * warm},${196 * warm},${116 * warm},1)`;
          gctx.fillRect(x + 1, y + 1, w - 2, h - 2);
          gctx.fillStyle = 'rgba(255,240,200,0.35)';
          gctx.fillRect(x - 3, y - 3, w + 6, h + 6);
        }
      }
    }

    if (door) {
      const dw = W * 0.115, dh = H * (style === 'shop' ? 0.3 : 0.27);
      const dx = W / 2 - dw / 2, dy = H - marginBottom - dh;
      bctx.fillStyle = 'rgba(44,40,36,0.9)';
      bctx.fillRect(dx - 4, dy - 4, dw + 8, dh + 8);
      bctx.fillStyle = style === 'shop' ? 'rgba(64,74,70,0.98)' : 'rgba(78,50,34,0.98)';
      bctx.fillRect(dx, dy, dw, dh);
      bctx.fillStyle = 'rgba(255,255,255,0.14)';
      bctx.fillRect(dx + 3, dy + 4, dw * 0.32, dh * 0.3);
      bctx.fillStyle = 'rgba(230,226,218,0.9)';
      bctx.fillRect(dx - 7, H - marginBottom - 3, dw + 14, 4);
      gctx.fillStyle = 'rgba(255,226,170,0.5)';
      gctx.fillRect(dx + 2, dy + 2, dw - 4, dh - 4);
    }
    if (style === 'shop') {
      bctx.fillStyle = 'rgba(150,60,48,0.5)';
      bctx.fillRect(0, H * 0.30, W, H * 0.055);
    }
    return {
      map: tex(base),
      emissiveMap: tex(glow),
    };
  });
}

/** Window band for railway carriages: clean glazing, no plaster courses. */
export function carriageTextures({ cols = 5, seed = 3, litRatio = 0.8, doorAt = 0 }) {
  const key = `carriage-${cols}-${seed}-${litRatio}-${doorAt}`;
  return cached(key, () => {
    const W = 256, H = 128;
    const base = makeCanvas(W, H);
    const b = base.getContext('2d');
    b.fillStyle = '#ffffff';
    b.fillRect(0, 0, W, H);
    const glow = makeCanvas(W, H);
    const g = glow.getContext('2d');
    g.fillStyle = '#000';
    g.fillRect(0, 0, W, H);
    const rnd = makeRng(seed * 7717 + 5);
    b.fillStyle = 'rgba(250,250,246,1)';
    b.fillRect(0, 0, W, H);
    b.fillStyle = 'rgba(120,116,110,0.35)';
    b.fillRect(0, H - 12, W, 12);
    b.fillRect(0, 0, W, 8);
    const pad = 14;
    const cell = (W - pad * 2) / cols;
    const ww = cell * 0.62, wh = H * 0.44;
    for (let i = 0; i < cols; i++) {
      const x = pad + cell * i + (cell - ww) / 2;
      const y = H * 0.28;
      if (i === doorAt) continue;
      b.fillStyle = 'rgba(40,38,36,0.9)';
      b.fillRect(x - 3, y - 3, ww + 6, wh + 6);
      b.fillStyle = 'rgba(238,236,230,0.9)';
      b.fillRect(x - 1.5, y - 1.5, ww + 3, wh + 3);
      b.fillStyle = 'rgba(58,72,78,0.95)';
      b.fillRect(x, y, ww, wh);
      b.fillStyle = 'rgba(255,255,255,0.16)';
      b.fillRect(x, y, ww, wh * 0.34);
      b.strokeStyle = 'rgba(236,234,228,0.7)';
      b.lineWidth = 1.6;
      b.beginPath();
      b.moveTo(x, y + wh / 2); b.lineTo(x + ww, y + wh / 2);
      b.stroke();
      if (rnd() < litRatio) {
        const k = 0.7 + rnd() * 0.3;
        g.fillStyle = `rgba(${255 * k},${214 * k},${150 * k},1)`;
        g.fillRect(x + 1, y + 1, ww - 2, wh - 2);
      }
    }
    if (doorAt >= 0 && doorAt < cols) {
      const x = pad + cell * doorAt + (cell - ww) / 2;
      const y = H * 0.16;
      b.fillStyle = 'rgba(38,36,34,0.9)';
      b.fillRect(x - 3, y - 3, ww + 6, H * 0.66 + 6);
      b.fillStyle = 'rgba(52,50,48,0.98)';
      b.fillRect(x, y, ww, H * 0.6);
      b.fillStyle = 'rgba(66,80,86,0.95)';
      b.fillRect(x + 2, y + 3, ww - 4, H * 0.2);
      g.fillStyle = 'rgba(255,220,160,0.55)';
      g.fillRect(x + 2, y + 3, ww - 4, H * 0.2);
    }
    return { map: tex(base), emissiveMap: tex(glow) };
  });
}

/** Station nameboard / lettering strip. */
export function stationSignTexture(label = 'MEADOWBANK') {
  return cached(`sign-${label}`, () => {
    const W = 256, H = 64;
    const c = makeCanvas(W, H);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#e8e2d2';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#26302c';
    ctx.fillRect(0, 0, W, 7);
    ctx.fillRect(0, H - 7, W, 7);
    ctx.fillStyle = '#c9a227';
    ctx.fillRect(0, 7, W, 2);
    ctx.fillRect(0, H - 9, W, 2);
    ctx.fillStyle = '#221f1c';
    ctx.font = 'bold 30px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, W / 2, H / 2 + 1);
    return tex(c, { wrap: THREE.ClampToEdgeWrapping });
  });
}

/** Simple gradient sky used for the IBL environment and the page background. */
export function skyTexture(top, mid, bottom, stars = 0) {
  const c = makeCanvas(64, 256);
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, top);
  g.addColorStop(0.5, mid);
  g.addColorStop(1, bottom);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 256);
  if (stars > 0) {
    const rnd = makeRng(1234);
    for (let i = 0; i < stars; i++) {
      const y = rnd() * 110;
      ctx.fillStyle = `rgba(255,252,240,${0.25 + rnd() * 0.6})`;
      ctx.fillRect(rnd() * 64, y, 1, 1);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.wrapS = THREE.RepeatWrapping;
  return t;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

const clamp8 = (v) => Math.max(6, Math.min(70, v));
const clamp8b = (v) => Math.max(28, Math.min(80, v));
