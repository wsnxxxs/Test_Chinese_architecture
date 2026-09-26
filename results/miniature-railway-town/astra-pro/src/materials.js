import * as THREE from 'three';

export function randomGenerator(seed = 12491) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function canvasTexture(width, height, paint) {
  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
  paint(canvas.getContext('2d'), width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}
function noiseTexture(rgb, seed, repeat, contrast = 15) {
  const random = randomGenerator(seed);
  const texture = canvasTexture(256, 256, (ctx, w, h) => {
    const image = ctx.createImageData(w, h);
    for (let i = 0; i < image.data.length; i += 4) {
      const n = (random() - 0.5) * contrast;
      image.data[i] = rgb[0] + n; image.data[i + 1] = rgb[1] + n; image.data[i + 2] = rgb[2] + n; image.data[i + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
  });
  texture.repeat.set(repeat, repeat);
  return texture;
}
export function makeMaterials() {
  const standard = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.82, ...extra });
  const grassMap = noiseTexture([151, 166, 108], 19, 0.33, 29);
  const gravelMap = noiseTexture([151, 144, 126], 31, 2.1, 43);
  const plasterMap = noiseTexture([248, 240, 217], 47, 0.55, 12);
  const woodMap = canvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#765038'; ctx.fillRect(0, 0, w, h);
    const random = randomGenerator(62);
    for (let k = 0; k < 280; k++) {
      const y = random() * h;
      ctx.strokeStyle = `rgba(${random() > 0.5 ? '41,22,11' : '200,152,105'},${0.1 + random() * 0.18})`;
      ctx.lineWidth = 0.3 + random() * 1.7;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 8) {
        const yy = y + Math.sin(x * 0.012 + y * 0.14) * 2.2 + Math.sin(x * 0.035 + y) * 0.6;
        if (!x) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
  });
  const roofMap = canvasTexture(256, 256, (ctx) => {
    ctx.fillStyle = '#e2dbce'; ctx.fillRect(0, 0, 256, 256);
    ctx.lineWidth = 2;
    for (let row = 0; row < 8; row++) {
      ctx.strokeStyle = 'rgba(53,35,28,.24)';
      ctx.beginPath(); ctx.moveTo(0, row * 32); ctx.lineTo(256, row * 32); ctx.stroke();
      for (let col = -1; col < 9; col++) {
        const x = col * 32 + (row % 2) * 16;
        ctx.strokeStyle = 'rgba(71,48,35,.12)';
        ctx.beginPath(); ctx.moveTo(x, row * 32); ctx.lineTo(x - 3, row * 32 + 31); ctx.stroke();
      }
    }
  });
  const glow = standard('#e9c989', { emissive: '#ffc876', emissiveIntensity: 0.04, roughness: 0.4 });
  const lamp = standard('#f7d99a', { emissive: '#ffd486', emissiveIntensity: 0.08, roughness: 0.3 });
  const darkWindow = standard('#47666a', { roughness: 0.23, metalness: 0.15 });
  const materials = {
    wood: standard('#c6a47b', { map: woodMap, roughness: 0.69, bumpMap: woodMap, bumpScale: 0.035 }),
    woodEdge: standard('#513a2b'), woodTrim: standard('#be925a', { roughness: 0.52 }),
    grass: standard('#eeedcc', { map: grassMap, bumpMap: grassMap, bumpScale: 0.017 }),
    earth: standard('#a49165'), bank: standard('#b3ac8a'),
    gravel: standard('#ede9d6', { map: gravelMap, bumpMap: gravelMap, bumpScale: 0.022 }),
    sleeper: standard('#72614b'), steel: standard('#7d8178', { metalness: 0.72, roughness: 0.34 }),
    railDark: standard('#484e45', { metalness: 0.5, roughness: 0.57 }),
    bridge: standard('#536b5c', { metalness: 0.38, roughness: 0.66 }),
    stone: standard('#ccc4ab'), stoneDark: standard('#a6a28e'),
    road: standard('#b4af98', { map: noiseTexture([219,217,206], 69, 0.6, 17) }),
    paving: standard('#d6cbb0'), pavingDark: standard('#a79e84'),
    cream: standard('#efe1ba', { map: plasterMap, bumpMap: plasterMap, bumpScale: 0.018 }),
    white: standard('#f3ead1'), trim: standard('#faf0d7'),
    ochre: standard('#cba35d', { map: plasterMap, bumpMap: plasterMap, bumpScale: 0.016 }),
    sage: standard('#a3b5a1', { map: plasterMap }), pink: standard('#d9a090', { map: plasterMap }),
    paleBlue: standard('#90a9ae', { map: plasterMap }),
    roof: standard('#a75136', { map: roofMap, bumpMap: roofMap, bumpScale: 0.028 }),
    roofDark: standard('#596969', { map: roofMap, bumpMap: roofMap, bumpScale: 0.022 }),
    roofBrown: standard('#806341', { map: roofMap, bumpMap: roofMap, bumpScale: 0.023 }),
    timber: standard('#695141'), bark: standard('#756046'),
    leaves: ['#527348','#66844d','#819351','#6f874b','#95a05a'].map((c) => standard(c)),
    pine: [standard('#3f6955'),standard('#51755a'),standard('#67855f')],
    bush: standard('#678049'), autumn: standard('#bf9251'),
    window: darkWindow, glow, lamp,
    brass: standard('#bd9655', { metalness: 0.72, roughness: 0.38 }),
    black: standard('#2e3736', { roughness: 0.54 }),
    engine: standard('#913f31', { roughness: 0.51, metalness: 0.12 }),
    trainGreen: standard('#355c4d', { roughness: 0.48, metalness: 0.13 }),
    trainCream: standard('#e8d5a1', { roughness: 0.63 }),
    red: standard('#ba5b43'), blue: standard('#7095a0'),
    flowers: [standard('#efcd7a'),standard('#d39088'),standard('#f5ecc6'),standard('#9c99af')],
    water: new THREE.MeshPhysicalMaterial({ color: '#598f91', roughness: 0.23, metalness: 0.12, clearcoat: 0.65, clearcoatRoughness: 0.25 }),
  };
  return materials;
}

export function textTexture(text, { width = 512, height = 128, background = '#304a3a', color = '#f8edc9', font = '600 58px Georgia', subtitle = '' } = {}) {
  return canvasTexture(width, height, (ctx, w, h) => {
    ctx.fillStyle = background; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = color; ctx.font = font;
    ctx.fillText(text, w / 2, subtitle ? h * 0.4 : h / 2, w - 36);
    if (subtitle) { ctx.font = '20px sans-serif'; ctx.fillText(subtitle, w / 2, h * 0.76, w - 36); }
  });
}

export function glowTexture() {
  return canvasTexture(128, 128, (ctx) => {
    const gradient = ctx.createRadialGradient(64,64,0,64,64,64);
    gradient.addColorStop(0, 'rgba(255,226,154,.7)');
    gradient.addColorStop(.18, 'rgba(255,213,124,.28)');
    gradient.addColorStop(.48, 'rgba(255,201,100,.07)');
    gradient.addColorStop(1, 'rgba(255,193,93,0)');
    ctx.fillStyle = gradient; ctx.fillRect(0,0,128,128);
  });
}
