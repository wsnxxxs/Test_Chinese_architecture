// 程序化生成手工质感的 Canvas 纹理：草地、木纹、田垄、站牌、铭牌、钟面
import * as THREE from 'three';
import { mulberry32 } from './util.js';

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function toTexture(canvas, repeatX = 1, repeatY = 1) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 4;
  return tex;
}

// 草地：绿色底 + 大量色斑模拟手绘毡绒质感
export function makeGrassTexture() {
  const rand = mulberry32(20260901);
  const c = makeCanvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#7c9e58';
  g.fillRect(0, 0, 256, 256);
  const spots = ['#6f9450', '#87ab61', '#95b56b', '#77a057', '#a2bd75', '#688c4a'];
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = spots[(rand() * spots.length) | 0];
    g.globalAlpha = 0.05 + rand() * 0.14;
    const r = 1 + rand() * 4.5;
    g.beginPath();
    g.ellipse(rand() * 256, rand() * 256, r, r * (0.5 + rand() * 0.7), rand() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
  return toTexture(c, 0.14, 0.14); // 草地 UV 即世界坐标，1 纹素格 ≈ 7 单位
}

// 木纹：底色 + 纵向深浅条痕 + 少量节疤
export function makeWoodTexture({ base = '#8a5a34', dark = '#6c4322', light = '#a06c42' } = {}) {
  const rand = mulberry32(20260902);
  const c = makeCanvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 120; i++) {
    const x = rand() * 256;
    const w = 0.6 + rand() * 2.4;
    g.strokeStyle = rand() > 0.5 ? dark : light;
    g.globalAlpha = 0.05 + rand() * 0.1;
    g.lineWidth = w;
    g.beginPath();
    g.moveTo(x, -8);
    let cx = x;
    for (let y = 0; y <= 264; y += 32) {
      cx += (rand() - 0.5) * 5;
      g.lineTo(cx, y);
    }
    g.stroke();
  }
  for (let i = 0; i < 7; i++) {
    const x = rand() * 256;
    const y = rand() * 256;
    const r = 3 + rand() * 6;
    const grad = g.createRadialGradient(x, y, 0.5, x, y, r);
    grad.addColorStop(0, dark);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.globalAlpha = 0.5;
    g.fillStyle = grad;
    g.beginPath();
    g.ellipse(x, y, r * 0.7, r, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
  return toTexture(c, 2, 2);
}

// 田垄：竖向收割纹
export function makeFieldTexture({ base = '#c8b35e', stripe = '#a99844' } = {}) {
  const c = makeCanvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  g.fillStyle = stripe;
  for (let x = 0; x < 256; x += 18) {
    g.globalAlpha = 0.45;
    g.fillRect(x, 0, 7, 256);
  }
  g.globalAlpha = 0.15;
  g.fillStyle = '#e0cd7c';
  for (let x = 9; x < 256; x += 18) {
    g.fillRect(x, 0, 2, 256);
  }
  g.globalAlpha = 1;
  return toTexture(c, 1, 1);
}

// 站牌 / 铭牌 / 钟面文字
export function makeSignTexture() {
  const c = makeCanvas(512, 96);
  const g = c.getContext('2d');
  g.fillStyle = '#2c4a3a';
  g.fillRect(0, 0, 512, 96);
  g.strokeStyle = '#d8b56a';
  g.lineWidth = 5;
  g.strokeRect(8, 8, 496, 80);
  g.fillStyle = '#f4e3b2';
  g.font = 'bold 46px "Microsoft YaHei", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('枫屿镇', 150, 50);
  g.font = 'bold 30px Georgia, serif';
  g.fillStyle = '#cfe0c8';
  g.fillText('MAPLE FALLS', 350, 52);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makePlaqueTexture() {
  const c = makeCanvas(640, 128);
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, '#d8b878');
  grad.addColorStop(0.5, '#c9a86a');
  grad.addColorStop(1, '#b8975a');
  g.fillStyle = grad;
  g.fillRect(0, 0, 640, 128);
  g.strokeStyle = '#7c6134';
  g.lineWidth = 4;
  g.strokeRect(6, 6, 628, 116);
  g.fillStyle = '#584426';
  g.font = 'bold 44px "Microsoft YaHei", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('枫屿镇 · 微缩铁路小镇', 320, 44);
  g.font = '22px Georgia, serif';
  g.fillText('MINIATURE RAILWAY TOWN · GAUGE 1:87', 320, 94);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeClockTexture() {
  const c = makeCanvas(128, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#f6efdd';
  g.beginPath();
  g.arc(64, 64, 60, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#5a4a34';
  g.lineWidth = 6;
  g.stroke();
  g.strokeStyle = '#3c3122';
  g.lineWidth = 4;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    g.beginPath();
    g.moveTo(64 + Math.cos(a) * 46, 64 + Math.sin(a) * 46);
    g.lineTo(64 + Math.cos(a) * 54, 64 + Math.sin(a) * 54);
    g.stroke();
  }
  // 傍晚 18:20
  const drawHand = (angle, len, w) => {
    g.lineWidth = w;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(64, 64);
    g.lineTo(64 + Math.cos(angle) * len, 64 + Math.sin(angle) * len);
    g.stroke();
  };
  drawHand(Math.PI * (18.34 / 6) - Math.PI / 2 + Math.PI, 26, 7);
  drawHand((20.34 / 60) * Math.PI * 2 - Math.PI / 2, 44, 5);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
