// 程序化贴图：全部用 Canvas 绘制，营造手工模型（静电草、木纹、石膏、瓦片）的质感
import * as THREE from 'three';
import {
  mulberry32, BOARD, roads, plazas, fields, river, footprints, BED_Y,
} from './world.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}
function tex(c, { repeat = true, srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}
const hex = (n) => '#' + n.toString(16).padStart(6, '0');

/* --------------------------------- 木纹 --------------------------------- */
export function woodTextures(base = '#8b5a33', seed = 3) {
  const rnd = mulberry32(seed);
  const c = canvas(1024, 256), g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 1024, 256);
  // 年轮带
  for (let y = 0; y < 256; y++) {
    const v = Math.sin(y * 0.11 + Math.sin(y * 0.031) * 3) * 0.5 + 0.5;
    g.fillStyle = `rgba(${v > 0.5 ? '255,220,170' : '30,12,0'},${Math.abs(v - 0.5) * 0.22})`;
    g.fillRect(0, y, 1024, 1);
  }
  for (let i = 0; i < 260; i++) {
    const y0 = rnd() * 256, x0 = rnd() * 1024, len = 150 + rnd() * 600;
    g.strokeStyle = rnd() > 0.5 ? `rgba(40,18,4,${0.05 + rnd() * 0.16})` : `rgba(255,225,180,${0.03 + rnd() * 0.09})`;
    g.lineWidth = 0.6 + rnd() * 2;
    g.beginPath(); g.moveTo(x0, y0);
    for (let s = 0; s <= len; s += 24) g.lineTo(x0 + s, y0 + Math.sin((x0 + s) * 0.02 + i) * 1.6);
    g.stroke();
  }
  for (let i = 0; i < 5; i++) {
    const x = rnd() * 1024, y = rnd() * 256;
    for (let r = 14; r > 2; r -= 3) {
      g.strokeStyle = `rgba(50,22,6,${0.28 - r * 0.012})`; g.lineWidth = 1.4;
      g.beginPath(); g.ellipse(x, y, r * 2.2, r, 0, 0, Math.PI * 2); g.stroke();
    }
  }
  return { map: tex(c), bump: tex(c, { srgb: false }) };
}

/* --------------------------------- 石膏墙 --------------------------------- */
export function plasterTextures() {
  const rnd = mulberry32(11);
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#efece6'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 9000; i++) {
    const v = 200 + rnd() * 55 | 0;
    g.fillStyle = `rgba(${v},${v - 4},${v - 10},${0.25 + rnd() * 0.4})`;
    g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(120,100,80,${0.02 + rnd() * 0.04})`;
    g.beginPath(); g.arc(rnd() * 256, rnd() * 256, 10 + rnd() * 30, 0, 7); g.fill();
  }
  return { map: tex(c), bump: tex(c, { srgb: false }) };
}

/* --------------------------------- 瓦片 --------------------------------- */
export function roofTextures() {
  const rnd = mulberry32(21);
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#7d7d7d'; g.fillRect(0, 0, 256, 256);
  const rows = 12, rh = 256 / rows, cols = 8, cw = 256 / cols;
  for (let r = 0; r < rows; r++) {
    for (let k = -1; k <= cols; k++) {
      const x = k * cw + (r % 2 ? cw / 2 : 0), y = r * rh;
      const v = 205 + rnd() * 50 | 0;
      g.fillStyle = `rgb(${v},${v},${v})`;
      g.beginPath(); g.roundRect(x + 1, y + 1, cw - 2, rh - 1, [1, 1, cw * 0.28, cw * 0.28]); g.fill();
      const gr = g.createLinearGradient(0, y, 0, y + rh);
      gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.28)');
      g.fillStyle = gr; g.fillRect(x + 1, y + 1, cw - 2, rh - 1);
    }
  }
  return { map: tex(c), bump: tex(c, { srgb: false }) };
}

/* --------------------------------- 砖 --------------------------------- */
export function brickTextures() {
  const rnd = mulberry32(31);
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#b9b0a2'; g.fillRect(0, 0, 256, 256);
  const rows = 14, rh = 256 / rows, cols = 6, cw = 256 / cols;
  for (let r = 0; r < rows; r++) {
    for (let k = -1; k <= cols; k++) {
      const x = k * cw + (r % 2 ? cw / 2 : 0), y = r * rh;
      const v = 190 + rnd() * 65 | 0;
      g.fillStyle = `rgb(${v},${v - 8},${v - 16})`;
      g.fillRect(x + 2, y + 2, cw - 4, rh - 4);
    }
  }
  return { map: tex(c), bump: tex(c, { srgb: false }) };
}

/* -------------------------------- 碎石道床 -------------------------------- */
export function gravelTextures() {
  const rnd = mulberry32(41);
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#8a857c'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 6000; i++) {
    const v = 90 + rnd() * 120 | 0;
    g.fillStyle = `rgb(${v},${v - 3},${v - 8})`;
    const s = 1 + rnd() * 3;
    g.fillRect(rnd() * 256, rnd() * 256, s, s * (0.6 + rnd() * 0.6));
  }
  return { map: tex(c), bump: tex(c, { srgb: false }) };
}

/* ------------------------------ 地面细粒凸凹 ------------------------------ */
export function grainBump() {
  const rnd = mulberry32(51);
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#808080'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 30000; i++) {
    const v = 60 + rnd() * 140 | 0;
    g.fillStyle = `rgb(${v},${v},${v})`;
    g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 1.5, 1 + rnd() * 1.5);
  }
  return tex(c, { srgb: false });
}

/* --------------------------------- 水面法线 --------------------------------- */
export function waterNormal() {
  const S = 256, rnd = mulberry32(61);
  const waves = [];
  for (let i = 0; i < 9; i++) {
    waves.push({
      kx: (1 + (rnd() * 5 | 0)) * (rnd() > 0.5 ? 1 : -1),
      ky: 1 + (rnd() * 7 | 0),
      a: 0.5 + rnd(), ph: rnd() * 6.28,
    });
  }
  const h = new Float32Array(S * S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      let v = 0;
      for (const w of waves) v += w.a * Math.sin(((w.kx * x + w.ky * y) / S) * Math.PI * 2 + w.ph);
      h[y * S + x] = v;
    }
  }
  const c = canvas(S, S), g = c.getContext('2d'), img = g.createImageData(S, S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const l = h[y * S + ((x + S - 1) % S)], r = h[y * S + ((x + 1) % S)];
      const u = h[((y + S - 1) % S) * S + x], d = h[((y + 1) % S) * S + x];
      let nx = (l - r) * 0.9, ny = (u - d) * 0.9, nz = 1;
      const len = Math.hypot(nx, ny, nz); nx /= len; ny /= len; nz /= len;
      const i = (y * S + x) * 4;
      img.data[i] = (nx * 0.5 + 0.5) * 255; img.data[i + 1] = (ny * 0.5 + 0.5) * 255;
      img.data[i + 2] = (nz * 0.5 + 0.5) * 255; img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return tex(c, { srgb: false });
}

/* --------------------------------- 精灵贴图 --------------------------------- */
export function softDot(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128) {
  const c = canvas(size, size), g = c.getContext('2d');
  const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  return tex(c, { repeat: false });
}

/* ---------------------------------- 招牌 ---------------------------------- */
export function labelTexture(text, { w = 512, h = 128, bg = '#20402c', fg = '#f4e6b8', font = 'bold 64px "Segoe UI","Microsoft YaHei",serif', border = '#d6b768' } = {}) {
  const c = canvas(w, h), g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  if (border) { g.strokeStyle = border; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16); }
  g.fillStyle = fg; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 3);
  return tex(c, { repeat: false });
}

export function clockTexture() {
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#f4ecd8'; g.beginPath(); g.arc(128, 128, 122, 0, 7); g.fill();
  g.strokeStyle = '#3b2a1a'; g.lineWidth = 10; g.stroke();
  g.lineWidth = 6;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    g.beginPath();
    g.moveTo(128 + Math.sin(a) * 96, 128 - Math.cos(a) * 96);
    g.lineTo(128 + Math.sin(a) * 112, 128 - Math.cos(a) * 112);
    g.stroke();
  }
  g.lineWidth = 9; g.lineCap = 'round';
  g.beginPath(); g.moveTo(128, 128); g.lineTo(128 + Math.sin(-0.9) * 60, 128 - Math.cos(-0.9) * 60); g.stroke();
  g.lineWidth = 6;
  g.beginPath(); g.moveTo(128, 128); g.lineTo(128 + Math.sin(2.2) * 90, 128 - Math.cos(2.2) * 90); g.stroke();
  return tex(c, { repeat: false });
}

export function stripeTexture(a = '#c94b3b', b = '#f4ead2', n = 6) {
  const c = canvas(128, 64), g = c.getContext('2d');
  const w = 128 / n;
  for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? b : a; g.fillRect(i * w, 0, w + 1, 64); }
  return tex(c);
}

/* ================================ 地面彩绘 ================================ */
const PPU = 64; // 每世界单位像素数
export function groundTexture() {
  const W = BOARD.w * PPU, H = BOARD.d * PPU;
  const c = canvas(W, H), g = c.getContext('2d');
  const rnd = mulberry32(77);
  const X = (x) => (x + BOARD.w / 2) * PPU;
  const Z = (z) => (z + BOARD.d / 2) * PPU;

  // 1. 静电草底色 + 大块色斑
  g.fillStyle = '#789f4a'; g.fillRect(0, 0, W, H);
  const blotch = ['110,150,64', '138,172,84', '96,138,60', '150,174,88', '122,160,72', '168,176,96'];
  for (let i = 0; i < 700; i++) {
    const x = rnd() * W, y = rnd() * H, r = 30 + rnd() * 150;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    const col = blotch[rnd() * blotch.length | 0];
    gr.addColorStop(0, `rgba(${col},0.32)`); gr.addColorStop(1, `rgba(${col},0)`);
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // 细密草粒
  const specks = ['#5f8a3b', '#8fb85c', '#a7c46c', '#6b9640', '#7fa64a', '#b5c476', '#557f36'];
  for (let i = 0; i < 260000; i++) {
    g.fillStyle = specks[rnd() * specks.length | 0];
    g.globalAlpha = 0.35 + rnd() * 0.5;
    g.fillRect(rnd() * W, rnd() * H, 1 + (rnd() * 2 | 0), 1 + (rnd() * 3 | 0));
  }
  g.globalAlpha = 1;

  // 野花点缀（在道路与河岸之前绘制，会被覆盖）
  const flowers = ['#f4f0e0', '#f2d24a', '#e879a6', '#ffffff', '#d9683c', '#9a7ad8'];
  for (let i = 0; i < 260; i++) {
    const cx = rnd() * W, cy = rnd() * H;
    const col = flowers[rnd() * flowers.length | 0];
    for (let k = 0; k < 9; k++) {
      g.fillStyle = col;
      g.beginPath(); g.arc(cx + (rnd() - 0.5) * 36, cy + (rnd() - 0.5) * 36, 1.2 + rnd() * 1.3, 0, 7); g.fill();
    }
  }

  // 2. 农田
  for (const f of fields) {
    g.save();
    g.translate(X(f.x), Z(f.z)); g.rotate(f.rot);
    const w = f.w * PPU, h = f.d * PPU;
    const pal = {
      wheat: ['#cdb055', '#bb9a44'], green: ['#6fa64a', '#5b9440'], furrow: ['#7d5b3a', '#6a4a2e'],
    }[f.kind];
    if (f.paddock) {
      g.fillStyle = '#8fb45c'; g.fillRect(-w / 2, -h / 2, w, h);
    } else {
      const step = 9;
      const vertical = f.d > f.w;
      for (let k = 0; k < (vertical ? w : h) / step; k++) {
        g.fillStyle = pal[k % 2];
        if (vertical) g.fillRect(-w / 2 + k * step, -h / 2, step, h);
        else g.fillRect(-w / 2, -h / 2 + k * step, w, step);
      }
      g.strokeStyle = 'rgba(60,40,20,0.35)'; g.lineWidth = 3; g.strokeRect(-w / 2, -h / 2, w, h);
    }
    g.restore();
  }

  // 3. 河岸（由外到内：湿润草 → 沙 → 湿沙 → 河床）
  const nrm = river.pts.map((p, i) => {
    const a = river.pts[Math.max(0, i - 1)], b = river.pts[Math.min(river.pts.length - 1, i + 1)];
    const tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz);
    return [-tz / l, tx / l];
  });
  const ribbon = (off, fill) => {
    g.beginPath();
    river.pts.forEach((p, i) => {
      const w = river.half[i] + off;
      const x = X(p.x + nrm[i][0] * w), y = Z(p.z + nrm[i][1] * w);
      i ? g.lineTo(x, y) : g.moveTo(x, y);
    });
    for (let i = river.pts.length - 1; i >= 0; i--) {
      const p = river.pts[i], w = river.half[i] + off;
      g.lineTo(X(p.x - nrm[i][0] * w), Z(p.z - nrm[i][1] * w));
    }
    g.closePath(); g.fillStyle = fill; g.fill();
  };
  ribbon(1.12, 'rgba(84,120,52,0.55)');
  ribbon(0.95, '#647f42');
  ribbon(0.74, '#a99a6e');
  ribbon(0.42, '#8d7d59');
  ribbon(0.05, '#4d5a4d');
  // 岸边碎石点
  for (let i = 0; i < 9000; i++) {
    const k = rnd() * (river.pts.length - 1) | 0, side = rnd() > 0.5 ? 1 : -1;
    const off = river.half[k] + 0.25 + rnd() * 0.7;
    const x = X(river.pts[k].x + nrm[k][0] * off * side), y = Z(river.pts[k].z + nrm[k][1] * off * side);
    const v = 110 + rnd() * 90 | 0;
    g.fillStyle = `rgb(${v},${v - 6},${v - 18})`; g.fillRect(x, y, 1.6, 1.6);
  }

  // 4. 建筑院落（碎石/夯土地面）
  for (const f of footprints) {
    if (f.tag === 'nogarden') continue;
    g.fillStyle = 'rgba(158,146,104,0.5)';
    g.beginPath();
    g.roundRect(X(f.x - f.hw - 0.3), Z(f.z - f.hd - 0.3), (f.hw * 2 + 0.6) * PPU, (f.hd * 2 + 0.6) * PPU, 14);
    g.fill();
  }

  // 5. 道路
  const strokePoly = (pts, width, color, dash) => {
    g.beginPath();
    pts.forEach(([x, z], i) => (i ? g.lineTo(X(x), Z(z)) : g.moveTo(X(x), Z(z))));
    g.lineWidth = width * PPU; g.strokeStyle = color; g.lineCap = 'butt'; g.lineJoin = 'round';
    g.setLineDash(dash ? dash.map((d) => d * PPU) : []);
    g.stroke(); g.setLineDash([]);
  };
  for (const r of roads) {
    const dirt = r.id === 'lane' || r.id === 'farm';
    strokePoly(r.pts, r.w + (dirt ? 0.16 : 0.3), dirt ? '#8b7a55' : '#b7ad98');
    strokePoly(r.pts, r.w, dirt ? '#a8956a' : '#666360');
    if (!dirt && r.w > 0.6) strokePoly(r.pts, 0.035, '#d8cfa2', [0.26, 0.2]);
    // 路面颗粒
    const [a, b] = r.pts;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    for (let i = 0; i < len * r.w * 900; i++) {
      const t = rnd(), o = (rnd() - 0.5) * r.w;
      const dx = (b[0] - a[0]) / len, dz = (b[1] - a[1]) / len;
      const x = a[0] + (b[0] - a[0]) * t - dz * o, z = a[1] + (b[1] - a[1]) * t + dx * o;
      const v = (dirt ? 150 : 80) + rnd() * 70 | 0;
      g.fillStyle = dirt ? `rgba(${v + 20},${v},${v - 40},0.5)` : `rgba(${v},${v},${v - 4},0.45)`;
      g.fillRect(X(x), Z(z), 1.5, 1.5);
    }
  }
  // 站前广场：小方砖
  for (const p of plazas) {
    const farm = p.x0 > 10;
    g.fillStyle = farm ? '#9c8a63' : '#b3a68d';
    g.fillRect(X(p.x0), Z(p.z0), (p.x1 - p.x0) * PPU, (p.z1 - p.z0) * PPU);
    if (!farm) {
      const s = 0.2;
      for (let x = p.x0; x < p.x1; x += s) {
        for (let z = p.z0; z < p.z1; z += s) {
          const v = 150 + rnd() * 50 | 0;
          g.fillStyle = `rgb(${v},${v - 10},${v - 30})`;
          g.fillRect(X(x) + 1, Z(z) + 1, s * PPU - 2, s * PPU - 2);
        }
      }
      g.strokeStyle = '#6f6555'; g.lineWidth = 4;
      g.strokeRect(X(p.x0), Z(p.z0), (p.x1 - p.x0) * PPU, (p.z1 - p.z0) * PPU);
    }
  }

  const t = tex(c, { repeat: false, aniso: 16 });
  return t;
}
export { hex, BED_Y };
