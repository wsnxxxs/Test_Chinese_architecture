import * as THREE from 'three';

/* ---------------------------------- 实体材质（体素合并用） ---------------------------------- */

export const MATS = {};

function std(name, color, opts = {}) {
  MATS[name] = new THREE.MeshStandardMaterial({ color, roughness: 0.88, metalness: 0.0, ...opts });
}

// 墙体 / 木构
std('redWall',   0xB5372A, { roughness: 0.9 });           // 红墙
std('redCol',    0x9C2B22, { roughness: 0.8 });           // 立柱 / 梁枋
std('wood',      0x7A5230);                               // 木色构件
std('dark',      0x241A12, { roughness: 0.95 });          // 门洞 / 暗部
std('gold',      0xE8C25A, { roughness: 0.35, metalness: 0.5 }); // 鎏金饰件

// 琉璃瓦 / 青瓦（深色为正脊、压边）
std('roofY',     0xE0A93A, { roughness: 0.5, metalness: 0.08 }); // 黄琉璃（主轴：山门·主殿）
std('roofYD',    0xBE8B2A, { roughness: 0.55, metalness: 0.08 });
std('roofG',     0x3F8A6E, { roughness: 0.55, metalness: 0.06 }); // 绿琉璃（钟鼓楼·宝塔）
std('roofGD',    0x2E6B54, { roughness: 0.6 });
std('roofGr',    0x747D85, { roughness: 0.75 });                    // 青瓦（配殿）
std('roofGrD',   0x5B646C, { roughness: 0.8 });

// 台基 / 石作
std('stone',     0x9A968C, { roughness: 0.95 });
std('stoneL',    0xC7C1B5, { roughness: 0.92 });          // 汉白玉台基 / 栏杆
std('plaster',   0xE7DCC4, { roughness: 0.9 });           // 塔身
std('bronze',    0x8C6B32, { roughness: 0.45, metalness: 0.55 }); // 铜钟 / 香炉
std('drumRed',   0xBE3526, { roughness: 0.7 });           // 鼓

// 斗拱（青绿点金红）
std('dgRed',     0xA03326, { roughness: 0.8 });
std('dgGreen',   0x3F7A64, { roughness: 0.75 });

// 匾额底板
std('plaqueBlue', 0x16294E, { roughness: 0.7 });

// 灯笼（自发光，随时间脉动）
std('lantern',   0xD8402F, { roughness: 0.6, emissive: 0xFF5A2A, emissiveIntensity: 0.65 });

// 植被 / 远山 / 路面
std('leaf1',     0x4E7A3A, { roughness: 0.95 });
std('leaf2',     0x5E8F45, { roughness: 0.95 });
std('leaf3',     0x43702F, { roughness: 0.95 });
std('trunk',     0x6B4526, { roughness: 0.95 });
std('hill',      0x4E5E44, { roughness: 1 });
std('pathA',     0xB9B1A3, { roughness: 0.95 });
std('pathB',     0xA79E8E, { roughness: 0.95 });

/* ---------------------------------- 程序化画布纹理 ---------------------------------- */

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function finishTexture(canvas, rx = 1, ry = 1) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** 草地：绿色底 + 噪点草叶 */
export function grassTexture(rx = 1, ry = 1) {
  const size = 128;
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#5d7a3e';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 1600; i++) {
    const x = Math.random() * size, y = Math.random() * size;
    const l = Math.random();
    ctx.fillStyle = l > 0.66 ? '#6b8b46' : l > 0.33 ? '#52703a' : '#48652f';
    ctx.fillRect(x, y, 2, 3);
  }
  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = 'rgba(120,150,80,0.18)';
    ctx.fillRect(Math.random() * size, Math.random() * size, 10 + Math.random() * 18, 8 + Math.random() * 14);
  }
  return finishTexture(c, rx, ry);
}

/** 铺装：暖灰石板 + 勾缝 + 杂色 */
export function paveTexture(rx = 1, ry = 1) {
  const size = 256;
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#a89f8f';
  ctx.fillRect(0, 0, size, size);
  const cells = 4, cs = size / cells;
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      const v = 168 + Math.floor(Math.random() * 22);
      ctx.fillStyle = `rgb(${v},${v - 8},${v - 24})`;
      ctx.fillRect(i * cs + 2, j * cs + 2, cs - 4, cs - 4);
      for (let k = 0; k < 40; k++) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
        ctx.fillRect(i * cs + 3 + Math.random() * (cs - 7), j * cs + 3 + Math.random() * (cs - 7), 2, 2);
      }
    }
  }
  ctx.strokeStyle = 'rgba(70,60,48,0.55)';
  ctx.lineWidth = 3;
  for (let i = 0; i <= cells; i++) {
    ctx.beginPath(); ctx.moveTo(i * cs, 0); ctx.lineTo(i * cs, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i * cs); ctx.lineTo(size, i * cs); ctx.stroke();
  }
  return finishTexture(c, rx, ry);
}

/** 匾额：藏蓝底 + 双描金边 + 楷体金字 */
export function plaqueTexture(text) {
  const w = 512, h = 160;
  const c = makeCanvas(w, h);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#16294e';
  ctx.fillRect(0, 0, w, h);
  // 做旧噪点
  for (let i = 0; i < 300; i++) {
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fillRect(Math.random() * w, Math.random() * h, 3, 3);
  }
  ctx.strokeStyle = '#e8c25a';
  ctx.lineWidth = 8;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.lineWidth = 3;
  ctx.strokeRect(24, 24, w - 48, h - 48);
  ctx.fillStyle = '#f0ce7a';
  ctx.font = 'bold 88px "KaiTi", "STKaiti", "SimSun", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.6)';
  ctx.shadowBlur = 4;
  ctx.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** 天空：晨昏竖向渐变（顶蓝 → 地平线暖橙） */
export function skyTexture() {
  const w = 64, h = 512;
  const c = makeCanvas(w, h);
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0.0, '#5f8ec9');
  g.addColorStop(0.35, '#9db6cf');
  g.addColorStop(0.55, '#e7c69c');
  g.addColorStop(0.68, '#f2b478');
  g.addColorStop(0.8, '#d99a63');
  g.addColorStop(1.0, '#b97f52');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
