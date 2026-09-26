import * as THREE from 'three';

// Deterministic RNG so the town layout is stable between loads.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function grassTexture() {
  const tex = makeCanvas(256, (ctx, s) => {
    ctx.fillStyle = '#7aa653';
    ctx.fillRect(0, 0, s, s);
    const rng = mulberry32(7);
    for (let i = 0; i < 2600; i++) {
      const g = 130 + rng() * 70;
      ctx.fillStyle = `rgba(${(g * 0.75) | 0},${g | 0},${(g * 0.45) | 0},${0.12 + rng() * 0.2})`;
      ctx.fillRect(rng() * s, rng() * s, 1 + rng() * 2.4, 1 + rng() * 2.4);
    }
    for (let i = 0; i < 260; i++) { // tiny darker tufts
      ctx.fillStyle = `rgba(60,90,40,${0.15 + rng() * 0.2})`;
      ctx.fillRect(rng() * s, rng() * s, 2 + rng() * 3, 1 + rng() * 2);
    }
  });
  tex.repeat.set(6, 6);
  return tex;
}

export function woodTexture(base = '#8a5a33', dark = '#6f4525') {
  return makeCanvas(256, (ctx, s) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, s, s);
    const rng = mulberry32(21);
    for (let i = 0; i < 46; i++) {
      const y = rng() * s;
      ctx.strokeStyle = `rgba(60,35,15,${0.08 + rng() * 0.14})`;
      ctx.lineWidth = 0.6 + rng() * 2.2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= s; x += 16) {
        ctx.lineTo(x, y + Math.sin(x * 0.05 + i) * 2.4 + (rng() - 0.5) * 2);
      }
      ctx.stroke();
    }
    ctx.fillStyle = dark;
    for (let i = 0; i < 8; i++) {
      ctx.globalAlpha = 0.1 + rng() * 0.1;
      ctx.fillRect(0, rng() * s, s, 2 + rng() * 5);
    }
    ctx.globalAlpha = 1;
  });
}

export function waterTexture() {
  const tex = makeCanvas(256, (ctx, s) => {
    const grad = ctx.createLinearGradient(0, 0, 0, s);
    grad.addColorStop(0, '#57a2b8');
    grad.addColorStop(0.5, '#6ab4ca');
    grad.addColorStop(1, '#57a2b8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    const rng = mulberry32(33);
    for (let i = 0; i < 120; i++) {
      ctx.strokeStyle = `rgba(220,240,250,${0.05 + rng() * 0.13})`;
      ctx.lineWidth = 0.8 + rng() * 1.6;
      const y = rng() * s, x = rng() * s, w = 12 + rng() * 40;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w, y + (rng() - 0.5) * 3);
      ctx.stroke();
    }
  });
  tex.repeat.set(6, 1);
  return tex;
}

export function glowTexture() {
  const tex = makeCanvas(64, (ctx, s) => {
    const g = ctx.createRadialGradient(s / 2, s / 2, 1, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,220,160,0.9)');
    g.addColorStop(0.35, 'rgba(255,190,110,0.35)');
    g.addColorStop(1, 'rgba(255,180,100,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
  });
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

export function textTexture(text, { w = 256, h = 64, bg = '#2f4d3a', fg = '#f5ecd7', font } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg;
  ctx.lineWidth = Math.max(2, h * 0.05);
  ctx.strokeRect(ctx.lineWidth, ctx.lineWidth, w - ctx.lineWidth * 2, h - ctx.lineWidth * 2);
  ctx.fillStyle = fg;
  ctx.font = font || `bold ${(h * 0.5) | 0}px "Microsoft YaHei", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2 + 1);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Registry of things whose brightness changes between evening and night.
export const nightRegistry = {
  emissives: [], // { mat, day, night }
  sprites: [],   // { mat, day, night }
  registerEmissive(mat, day, night) { this.emissives.push({ mat, day, night }); },
  registerSprite(mat, day, night) { this.sprites.push({ mat, day, night }); },
  apply(t) {
    for (const e of this.emissives) e.mat.emissiveIntensity = e.day + (e.night - e.day) * t;
    for (const s of this.sprites) s.mat.opacity = s.day + (s.night - s.day) * t;
  },
};

export const M = {
  grassSide: new THREE.MeshStandardMaterial({ color: '#6b4f33', roughness: 1 }),
  dirt: new THREE.MeshStandardMaterial({ color: '#5d4630', roughness: 1 }),
  riverbed: new THREE.MeshStandardMaterial({ color: '#9c8a66', roughness: 1 }),
  ballast: new THREE.MeshStandardMaterial({ color: '#8e8676', roughness: 1 }),
  sleeper: new THREE.MeshStandardMaterial({ color: '#6a533a', roughness: 0.95 }),
  rail: new THREE.MeshStandardMaterial({ color: '#b4bac0', roughness: 0.42, metalness: 0.45 }),
  steel: new THREE.MeshStandardMaterial({ color: '#565d63', roughness: 0.6, metalness: 0.3 }),
  girder: new THREE.MeshStandardMaterial({ color: '#3f5a68', roughness: 0.55, metalness: 0.25 }),
  stone: new THREE.MeshStandardMaterial({ color: '#9a938a', roughness: 0.9 }),
  road: new THREE.MeshStandardMaterial({ color: '#5b564e', roughness: 1 }),
  sidewalk: new THREE.MeshStandardMaterial({ color: '#a39a8b', roughness: 1 }),
  platform: new THREE.MeshStandardMaterial({ color: '#b5ac9d', roughness: 0.95 }),
  platformEdge: new THREE.MeshStandardMaterial({ color: '#e8e0ce', roughness: 0.9 }),
  trunk: new THREE.MeshStandardMaterial({ color: '#6b4a2f', roughness: 1 }),
  lampPole: new THREE.MeshStandardMaterial({ color: '#2f3a34', roughness: 0.6, metalness: 0.4 }),
  crossing: new THREE.MeshStandardMaterial({ color: '#c9b98f', roughness: 0.9 }),
  white: new THREE.MeshStandardMaterial({ color: '#eee8da', roughness: 0.85 }),
  red: new THREE.MeshStandardMaterial({ color: '#b03a2e', roughness: 0.8 }),
  window: (() => {
    const m = new THREE.MeshStandardMaterial({
      color: '#3b4c58', roughness: 0.4, metalness: 0.2,
      emissive: '#ffc46a', emissiveIntensity: 0.03,
    });
    nightRegistry.registerEmissive(m, 0.03, 1.35);
    return m;
  })(),
  lampHead: (() => {
    const m = new THREE.MeshStandardMaterial({
      color: '#efe3c2', roughness: 0.5,
      emissive: '#ffd9a0', emissiveIntensity: 0.08,
    });
    nightRegistry.registerEmissive(m, 0.08, 2.4);
    return m;
  })(),
};

export function std(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.9, ...opts });
}
