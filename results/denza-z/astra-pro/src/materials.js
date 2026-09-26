import * as THREE from 'three';

function carbonTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const ctx = c.getContext('2d'); ctx.fillStyle = '#45484d'; ctx.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
    const vertical = (x + y) % 4 < 2;
    for (let k = 0; k < 8; k++) {
      const b = 42 + Math.round(17 * Math.sin(k / 7 * Math.PI)); ctx.strokeStyle = `rgb(${b},${b + 3},${b + 6})`; ctx.lineWidth = .85;
      ctx.beginPath();
      if (vertical) { ctx.moveTo(x * 8 + k, y * 8); ctx.lineTo(x * 8 + k, y * 8 + 8); }
      else { ctx.moveTo(x * 8, y * 8 + k); ctx.lineTo(x * 8 + 8, y * 8 + k); }
      ctx.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(7, 7); t.anisotropy = 8; t.encoding = THREE.sRGBEncoding; return t;
}
function treadTexture() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 256; const ctx = c.getContext('2d');
  ctx.fillStyle = '#aaa'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#343434'; ctx.lineWidth = 7;
  for (const v of [52, 103, 153, 204]) { ctx.beginPath(); ctx.moveTo(0, v); ctx.lineTo(1024, v); ctx.stroke(); }
  for (let x = -30; x < 1040; x += 22) {
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 15, 49); ctx.moveTo(x + 15, 55); ctx.lineTo(x + 4, 99); ctx.moveTo(x + 4, 159); ctx.lineTo(x + 17, 201); ctx.moveTo(x + 17, 209); ctx.lineTo(x, 256); ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t;
}
function grilleTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256; const ctx = c.getContext('2d');
  ctx.fillStyle = '#080b10'; ctx.fillRect(0, 0, 512, 256); ctx.strokeStyle = '#444a51'; ctx.lineWidth = 1.7;
  const r = 8.0;
  for (let row = -1; row < 24; row++) for (let col = -1; col < 48; col++) {
    const x = col * r * 1.5, y = row * r * Math.sqrt(3) + (col % 2) * r * .866;
    ctx.beginPath(); for (let n = 0; n < 6; n++) { const a = n * Math.PI / 3; const p = [x + r * Math.cos(a), y + r * Math.sin(a)]; n ? ctx.lineTo(...p) : ctx.moveTo(...p); } ctx.closePath(); ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.3, 1.0); t.anisotropy = 8; return t;
}
export function createMaterials() {
  const carbonMap = carbonTexture(), tread = treadTexture(), grille = grilleTexture();
  const M = {
    paint: new THREE.MeshPhysicalMaterial({ color: '#1249ef', metalness: .53, roughness: .29, clearcoat: 1, clearcoatRoughness: .17, envMapIntensity: .85, side: THREE.DoubleSide }),
    carbon: new THREE.MeshPhysicalMaterial({ color: '#7f858e', map: carbonMap, bumpMap: carbonMap, bumpScale: .00065, metalness: .30, roughness: .39, clearcoat: .4, clearcoatRoughness: .24, side: THREE.DoubleSide }),
    glass: new THREE.MeshPhysicalMaterial({ color: '#10212c', metalness: .1, roughness: .16, clearcoat: .6, transparent: true, opacity: .90, side: THREE.DoubleSide, depthWrite: false }),
    lens: new THREE.MeshPhysicalMaterial({ color: '#8aabbf', metalness: .15, roughness: .06, transparent: true, opacity: .12, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false }),
    black: new THREE.MeshStandardMaterial({ color: '#070a10', roughness: .5, metalness: .22, side: THREE.DoubleSide }),
    rubber: new THREE.MeshStandardMaterial({ color: '#14171a', roughness: .91, metalness: .0, bumpMap: tread, bumpScale: .0023 }),
    sidewall: new THREE.MeshStandardMaterial({ color: '#171a1d', roughness: .86, metalness: .0 }),
    gunmetal: new THREE.MeshStandardMaterial({ color: '#626971', roughness: .3, metalness: .95, side: THREE.DoubleSide }),
    aluminium: new THREE.MeshStandardMaterial({ color: '#bac5cc', roughness: .22, metalness: 1, side: THREE.DoubleSide }),
    brake: new THREE.MeshStandardMaterial({ color: '#52595a', roughness: .57, metalness: .52, side: THREE.DoubleSide }),
    yellow: new THREE.MeshPhysicalMaterial({ color: '#e9ce32', roughness: .32, metalness: .32, clearcoat: .8, side: THREE.DoubleSide }),
    whiteLED: new THREE.MeshStandardMaterial({ color: '#e7f7ff', emissive: '#c8edff', emissiveIntensity: 3.0, roughness: .18 }),
    redLED: new THREE.MeshStandardMaterial({ color: '#b90821', emissive: '#ee082d', emissiveIntensity: 1.7, roughness: .2, metalness: .3, side: THREE.DoubleSide }),
    redLens: new THREE.MeshPhysicalMaterial({ color: '#4c0614', roughness: .18, metalness: .45, clearcoat: 1, side: THREE.DoubleSide }),
    grille: new THREE.MeshStandardMaterial({ color: '#a3a7ad', map: grille, bumpMap: grille, bumpScale: .001, roughness: .64, metalness: .55, side: THREE.DoubleSide }),
    upholstery: new THREE.MeshStandardMaterial({ color: '#101726', roughness: .88 }),
    seatBlue: new THREE.MeshStandardMaterial({ color: '#173aa7', roughness: .73 }),
  };
  return M;
}
