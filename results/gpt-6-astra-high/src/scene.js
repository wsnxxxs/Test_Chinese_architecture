import * as THREE from 'three';

// Every architectural detail is built from boxes; shared instance batches keep
// thousands of tiles, stones, leaves and timber parts inexpensive to render.
const C = {
  stone: '#b7b6a0', stoneLight: '#d5cdb5', stoneDark: '#939a86', grout: '#a3aa94',
  red: '#943e2d', redLight: '#b25337', redDark: '#6f3528', wood: '#693f2c',
  gold: '#d4ae62', goldLight: '#e4c583', wall: '#dfcba6', window: '#384c3d',
  roof: '#3f786e', roofDark: '#315c54', roofLight: '#568d79',
  grass: '#8d9c6a', grassLight: '#a2ad79', earth: '#a2a38a', water: '#7baca0',
};
let seed = 4371;
function rand() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
const pick = (a) => a[Math.floor(rand() * a.length)];

export const buildings = [
  { id: 'main', name: '大雄宝殿', type: '主殿', x: 0, z: -10, height: 12, description: '重檐庑殿 · 丹柱金梁，中轴之心', group: 'main' },
  { id: 'rear', name: '藏经阁', type: '后殿', x: 0, z: -24, height: 9, description: '歇山层阁 · 静藏经卷，背山而立', group: 'rear' },
  { id: 'west-back', name: '西禅堂', type: '配殿', x: -16, z: -9, height: 7, group: 'wings' },
  { id: 'east-back', name: '东禅堂', type: '配殿', x: 16, z: -9, height: 7, group: 'wings' },
  { id: 'west-front', name: '西斋堂', type: '配殿', x: -16, z: 6, height: 7, group: 'wings' },
  { id: 'east-front', name: '东斋堂', type: '配殿', x: 16, z: 6, height: 7, group: 'wings' },
  { id: 'gate', name: '云栖山门', type: '山门', x: 0, z: 23, height: 7, description: '三间山门 · 由此入境，尘嚣渐远', group: 'gate' },
  { id: 'bell', name: '钟楼', type: '钟鼓楼', x: -21, z: 22, height: 10, group: 'towers' },
  { id: 'drum', name: '鼓楼', type: '钟鼓楼', x: 21, z: 22, height: 10, group: 'towers' },
  { id: 'west-pagoda', name: '西雁塔', type: '宝塔', x: -22, z: -23, height: 18, group: 'pagodas' },
  { id: 'east-pagoda', name: '东雁塔', type: '宝塔', x: 22, z: -23, height: 18, group: 'pagodas' },
];

export function createTemple(scene) {
  seed = 4371;
  const solids = [], glowing = [], water = [];
  const labels = [];
  let ox = 0, oz = 0, rotation = 0;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const vec = new THREE.Vector3();
  const scale = new THREE.Vector3();
  function box(x, y, z, w, h, d, color, batch = solids, angle = 0) {
    const rx = ox + x * Math.cos(rotation) + z * Math.sin(rotation);
    const rz = oz - x * Math.sin(rotation) + z * Math.cos(rotation);
    batch.push([rx, y, rz, w, h, d, color, angle + rotation]);
  }
  function at(x, z, rot, fn) { ox = x; oz = z; rotation = rot; fn(); ox = 0; oz = 0; rotation = 0; }

  function roof(y, width, depth, height, style = 'hip') {
    const step = .53;
    const nx = Math.ceil(width / step), nz = Math.ceil(depth / step);
    const sx = width / nx, sz = depth / nz;
    for (let ix = 0; ix < nx; ix++) for (let iz = 0; iz < nz; iz++) {
      const x = (ix - (nx - 1) / 2) * sx, z = (iz - (nz - 1) / 2) * sz;
      const ax = Math.abs(x) / (width / 2), az = Math.abs(z) / (depth / 2);
      // Hip ridge, gently concave slopes and raised corners, all quantized.
      const inset = Math.min((1 - ax) * (style === 'pyramid' ? 1 : width / depth), 1 - az);
      const slope = Math.pow(Math.max(0, inset), 1.36) * height;
      const corner = Math.pow(ax * az, 5) * .88;
      const yy = y + Math.round((slope + corner) / .16) * .16;
      const edge = ix === 0 || iz === 0 || ix === nx - 1 || iz === nz - 1;
      box(x, yy - (edge ? 0 : .14), z, sx + .016, edge ? .24 : .52, sz + .016, edge ? C.gold : pick([C.roof, C.roof, C.roof, C.roofLight, C.roofDark]));
      // Raised parallel tile caps read clearly at the diorama scale.
      if (!edge && ix % 2 === 0) box(x, yy + .15, z, .075, .09, sz + .01, C.roofLight);
      if (edge) box(x, yy - .23, z, sx, .19, sz, C.roofDark);
    }
    const ridge = style === 'pyramid' ? .65 : Math.max(.8, width - depth);
    box(0, y + height + .19, 0, ridge, .26, .30, C.gold);
    box(0, y + height + .40, 0, ridge + .22, .18, .19, C.roofDark);
    if (style === 'pyramid') {
      box(0, y + height + .73, 0, .32, .53, .32, C.gold);
    } else for (const sign of [-1, 1]) {
      for (let i = 0; i < 3; i++) box(sign * (ridge / 2 + i * .18), y + height + .37 + i * .2, 0, .24, .27, .24, C.gold);
    }
    for (const a of [-1, 1]) for (const b of [-1, 1]) {
      box(a * (width / 2 - .15), y + .92, b * (depth / 2 - .15), .22, .42, .22, C.gold);
    }
  }

  function base(width, depth, h = 1) {
    box(0, h / 2, 0, width + 1.8, h, depth + 1.8, C.stone);
    box(0, h + .1, 0, width + 2.15, .2, depth + 2.15, C.stoneLight);
    for (let i = 0; i < 4; i++) {
      const yy = (i + 1) * (h + .2) / 4;
      box(0, yy / 2, depth / 2 + 2.2 - i * .36, width * .46, yy, .72, C.stoneLight);
    }
    for (let i = -width / 2; i <= width / 2; i += 1.45) {
      box(i, h * .5, depth / 2 + .916, 1.34, .025, .025, C.stoneDark);
    }
  }

  function pillar(x, y, z, height, size = .43) {
    box(x, y + .2, z, size + .24, .4, size + .24, C.stoneLight);
    box(x, y + height / 2, z, size, height, size, C.red);
    box(x, y + height - .7, z, size + .06, .16, size + .06, C.gold);
    box(x, y + height - .25, z, size + .25, .24, size + .25, C.redDark);
    // Three interlocking tiers of dougong brackets.
    for (let i = 0; i < 3; i++) {
      box(x, y + height + i * .16, z, size + .3 + i * .29, .16, .28, i % 2 ? C.gold : C.redLight);
      box(x, y + height + i * .16, z, .28, .16, size + .3 + i * .29, i % 2 ? C.gold : C.redLight);
    }
  }

  function windowGrid(x, y, z, width, height) {
    box(x, y, z, width, height, .16, C.window);
    for (let i = -1; i <= 1; i += 2) {
      box(x + i * width / 2, y, z + .14, .11, height + .2, .12, C.gold);
      box(x, y + i * height / 2, z + .14, width, .11, .12, C.gold);
    }
    for (let xx = -.5 * width + .23; xx < width / 2; xx += .28) box(x + xx, y, z + .16, .045, height, .055, C.wood);
    for (let yy = -.5 * height + .23; yy < height / 2; yy += .3) box(x, y + yy, z + .17, width, .045, .055, C.gold);
  }

  function lantern(x, y, z) {
    box(x, y + .62, z, .04, .44, .04, C.wood);
    box(x, y, z, .41, .61, .41, '#e6a255', glowing);
    box(x, y + .31, z, .43, .1, .43, C.redDark);
    box(x, y - .32, z, .43, .1, .43, C.redDark);
    box(x, y - .51, z, .06, .28, .06, C.redLight);
    for (const sign of [-1, 1]) box(x + sign * .15, y, z + .215, .045, .6, .04, C.redLight);
  }

  function plaque(text, y, z, width) {
    box(0, y, z, width, .75, .16, C.gold);
    box(0, y, z + .1, width - .12, .62, .08, '#294b42');
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e8c98a'; ctx.font = '500 74px "Noto Serif SC", serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 64);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width - .2, .6), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }));
    mesh.position.set(ox + Math.sin(rotation) * (z + .16), y, oz + Math.cos(rotation) * (z + .16));
    mesh.rotation.y = rotation; scene.add(mesh); labels.push(mesh);
  }

  function hall(width, depth, height, name, doubleRoof = false, open = false) {
    const floor = doubleRoof ? 1.55 : 1;
    base(width, depth, floor);
    if (!open) {
      box(0, floor + height / 2, -.4, width - .7, height - .2, depth - 2.1, C.wall);
      box(0, floor + .6, -.3, width - .65, 1.0, depth - 2.0, C.red);
      box(0, floor + 1.8, depth / 2 - 1.44, 2.0, 3.4, .15, C.redDark);
      for (let dx = -.8; dx <= .8; dx += .32) box(dx, floor + 1.8, depth / 2 - 1.32, .09, 3.2, .1, C.redLight);
      for (const sign of [-1, 1]) {
        box(sign * .22, floor + 1.7, depth / 2 - 1.17, .12, .16, .12, C.gold);
        windowGrid(sign * width * .29, floor + height * .53, depth / 2 - 1.4, width * .23, height * .47);
        // Side windows have exterior timber trim, rather than blank end walls.
        for (let zz = -depth / 2 + 1.4; zz < depth / 2 - 1.4; zz += 1.7) {
          box(sign * (width / 2 - .28), floor + height * .54, zz, .13, height * .43, 1.0, C.window);
          for (let k = 0; k < 4; k++) box(sign * (width / 2 - .19), floor + height * .54, zz - .43 + k * .28, .06, height * .43, .055, C.gold);
        }
      }
    }
    const bays = Math.round(width / 3);
    for (let i = 0; i <= bays; i++) {
      const x = -width / 2 + .3 + i * (width - .6) / bays;
      pillar(x, floor, depth / 2 - .3, height);
      pillar(x, floor, -depth / 2 + .3, height);
    }
    for (const zz of [-1, 1]) {
      box(0, floor + height -.2, zz * (depth / 2 - .3), width, .4, .36, C.red);
      box(0, floor + height + .36, zz * (depth / 2 - .3), width + .3, .18, .43, C.gold);
    }
    roof(floor + height + .5, width + 2.3, depth + 2.3, doubleRoof ? 2.1 : 2.5);
    if (doubleRoof) {
      box(0, floor + height + 2.0, -.15, width - 2.5, 1.6, depth - 2.5, C.red);
      for (let x = -width / 2 + 2; x < width / 2 - 1; x += 1.3) box(x, floor + height + 2.15, depth / 2 - 1.35, .5, .7, .14, C.gold);
      roof(floor + height + 2.8, width + .6, depth + .6, 2.8);
    }
    if (name) plaque(name, floor + height - .55, depth / 2 + .01, Math.min(3.4, width * .36));
    for (const sign of [-1, 1]) lantern(sign * width * .34, floor + height - .95, depth / 2 + .1);
  }

  function railing(x1, z1, x2, z2, y) {
    const length = Math.hypot(x2 - x1, z2 - z1), n = Math.ceil(length / 1.6);
    for (let i = 0; i <= n; i++) {
      const x = x1 + (x2 - x1) * i / n, z = z1 + (z2 - z1) * i / n;
      box(x, y + .57, z, .24, 1.14, .24, C.stoneLight);
      box(x, y + 1.17, z, .34, .17, .34, C.stoneLight);
    }
    for (const yy of [.35, .86]) box((x1+x2)/2, y+yy, (z1+z2)/2, Math.abs(x2-x1)+.15, .14, Math.abs(z2-z1)+.15, C.stoneLight);
  }

  function tower(kind) {
    base(5.1, 5.1, 1.2);
    for (const x of [-2, 2]) for (const z of [-2, 2]) pillar(x, 1.2, z, 3.0, .45);
    box(0, 2.2, -1.4, 4.1, 2, .35, C.red);
    roof(4.65, 7.2, 7.2, 1.7, 'pyramid');
    box(0, 5.7, 0, 4.5, .3, 4.5, C.wood);
    for (const x of [-1.65, 1.65]) for (const z of [-1.65, 1.65]) pillar(x, 5.8, z, 2.45, .3);
    for (const z of [-2, 2]) {
      box(0, 6.6, z, 4.3, .16, .13, C.redLight);
      for (let x = -2; x <= 2; x += .65) box(x, 6.25, z, .12, .7, .12, C.red);
    }
    if (kind === 'bell') {
      box(0, 7.2, 0, .8, 1.2, .8, '#9b8148');
      box(0, 6.64, 0, 1.2, .24, 1.2, C.gold);
      box(0, 8.05, 0, .13, .65, .13, C.wood);
    } else {
      box(0, 7.0, 0, 1.45, 1.2, 1.0, C.redDark);
      box(0, 7.0, .56, 1.2, 1.0, .13, C.wall);
      box(0, 6.23, 0, 1.4, .25, 1.2, C.wood);
    }
    roof(8.6, 6.8, 6.8, 2, 'pyramid');
    lantern(-1.65, 7.7, 1.7); lantern(1.65, 7.7, 1.7);
  }

  function pagoda() {
    base(5.3, 5.3, .75);
    for (let level = 0; level < 5; level++) {
      const y = .95 + level * 2.95, w = 4.7 - level * .53;
      box(0, y + 1, 0, w, 2, w, level % 2 ? C.wall : '#ccbb98');
      for (const x of [-1, 1]) for (const z of [-1, 1]) box(x*(w/2-.08), y+1, z*(w/2-.08), .22, 2.0, .22, C.red);
      box(0, y + 1, w / 2 + .06, .75, 1.24, .15, C.window);
      box(w / 2 + .06, y + 1, 0, .15, 1.24, .75, C.window);
      box(0, y + .39, w / 2 + .14, 1.0, .13, .19, C.gold);
      roof(y + 2.0, w + 1.65, w + 1.65, 1.05, 'pyramid');
    }
    box(0, 17.0, 0, .17, 2.1, .17, C.gold);
    for (let i = 0; i < 4; i++) box(0, 16.55 + i * .33, 0, .6 - i * .11, .12, .6 - i * .11, C.gold);
  }

  // A raised, clean-edged miniature island. The perimeter is individually coursed.
  box(0, -1.38, 0, 59.5, 2.25, 65, '#9c9c82');
  box(0, -.36, 0, 60, .45, 65.5, C.stoneLight);
  box(0, -.075, 0, 59.4, .18, 64.9, C.grass);
  for (let x = -29; x < 30; x += 1.6) for (const z of [-32.4, 32.4]) {
    box(x, -.91, z, 1.54, .7, .2, pick(['#b1ae93', '#a6a58b', '#a3a38c']));
    box(x-.4, -1.7, z, 1.54, .68, .2, pick(['#949780', '#9d9b81']));
  }
  for (let z = -31.5; z < 32; z += 1.6) for (const x of [-29.55, 29.55]) {
    box(x, -.91, z, .2, .7, 1.54, pick(['#b1ae93', '#a6a58b', '#a3a38c']));
    box(x, -1.7, z-.4, .2, .68, 1.54, '#989a80');
  }

  function paving(x, z, w, d, size = 1.3) {
    box(x, .03, z, w, .12, d, C.grout);
    const nx = Math.floor(w/size), nz = Math.floor(d/size);
    for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
      box(x - w/2 + (i+.5)*w/nx, .115, z-d/2+(j+.5)*d/nz, w/nx-.055, .10, d/nz-.055, pick(['#c4c4ad','#cfcbb3','#bcbfaa','#c9c7af']));
    }
  }
  paving(0, 4, 21, 17);
  paving(0, 21, 5.6, 22);
  paving(0, -20, 6, 8);
  paving(0, 22, 48, 3.4);
  paving(0, -9, 46, 3);
  paving(-16, -.5, 3.8, 8); paving(16, -.5, 3.8, 8);
  // Processional axis: quiet warm accents among the stone pavers.
  for (let z = -3; z < 31; z += 1.6) for (const x of [-2.66, 2.66]) box(x, .19, z, .18, .07, 1.5, '#a9a889');
  for (const x of [-9.7, 9.7]) for (let z = -3; z < 11; z += 2) box(x, .20, z, .16, .05, 1.2, '#a7ae91');

  at(0, -10, 0, () => {
    hall(15, 9, 4.45, '大雄宝殿', true);
    for (const s of [-1, 1]) {
      railing(s*3.7, 5.5, s*8.45, 5.5, 1.65);
      railing(s*8.45, -5.3, s*8.45, 5.5, 1.65);
    }
  });
  at(0, -24, 0, () => hall(10, 5.7, 3.8, '藏经阁', true));
  for (const x of [-16, 16]) for (const z of [-9, 6]) {
    at(x, z, x < 0 ? Math.PI / 2 : -Math.PI / 2, () => hall(z < 0 ? 10.2 : 8.6, 5.2, 3.5, z < 0 ? '禅堂' : '斋堂'));
  }
  at(0, 23, 0, () => {
    hall(10, 4.5, 3.9, '云栖古寺', false, true);
    for (const sign of [-1,1]) {
      box(sign*3.2, 2.9, -.9, 1.8, 3.5, .4, C.redDark);
      for (let a = 0; a < 3; a++) for (let b = 0; b < 4; b++) box(sign*3.2-.55+a*.55, 1.8+b*.65, -.66, .09,.09,.09,C.gold);
    }
  });
  at(-21, 22, 0, () => tower('bell')); at(21, 22, 0, () => tower('drum'));
  at(-22, -23, 0, pagoda); at(22, -23, 0, pagoda);

  // Enclosure walls, punctuated with terracotta posts and jade coping tiles.
  function wall(x, z, length, rot = 0) {
    at(x,z,rot, () => {
      box(0, .85, 0, length, 1.7, .56, '#cfbf9e');
      box(0, .25, 0, length+.1, .5, .68, C.stoneDark);
      box(0, 1.73, 0, length+.12, .16, .84, C.roofDark);
      for (let xx = -length/2; xx < length/2; xx += .6) box(xx,1.88,0,.55,.15,.64,C.roof);
      for (let xx = -length/2; xx <= length/2; xx += length / Math.ceil(length/6)) {
        box(xx,1.1,0,.75,2.2,.75,C.red);
        box(xx,2.23,0,1.0,.22,1.0,C.roofDark);
      }
    });
  }
  wall(0,-30,55); wall(-27.5,-1,58,Math.PI/2); wall(27.5,-1,58,Math.PI/2);
  wall(-17,28,21); wall(17,28,21);

  function pond(x, z) {
    box(x,.09,z,9,.25,8.4,C.stoneDark);
    box(x,.25,z,8.45,.17,7.9,C.water,water);
    for (let i=-4.25;i<=4.3;i+=.85) for(const s of [-1,1]) box(x+i,.32,z+s*4.0,.80,.40,.45,C.stoneLight);
    for (let i=-3.5;i<=3.6;i+=.85) for(const s of [-1,1]) box(x+s*4.4,.32,z+i,.45,.40,.8,C.stoneLight);
    for (let i=0;i<30;i++) {
      const xx=x+(rand()-.5)*7.6, zz=z+(rand()-.5)*6.8;
      box(xx,.35,zz,.3+rand()*.7,.018,.035,'#b9d5b9',water);
    }
    for (let i=0;i<8;i++) {
      const xx=x+(rand()-.5)*6.5, zz=z+(rand()-.5)*5.6;
      box(xx,.37,zz,.38,.06,.4,'#607f54');
      if (i%3===0) box(xx,.48,zz,.16,.19,.16,'#d7b699');
    }
    // A stepping-stone crossing connects each side garden to the main axis.
    for (let i=-3;i<=3;i++) box(x+i*1.15,.50,z+.5,.82,.3,.98,C.stoneLight);
  }
  pond(-8.6,15.8); pond(8.6,15.8);

  function tree(x,z,size=1,tone='green') {
    at(x,z,0,()=>{
      const trunk = '#6c5940';
      box(0,1.7*size,0,.48*size,3.4*size,.48*size,trunk);
      box(-.44*size,2.8*size,0,1.2*size,.33*size,.36*size,trunk);
      box(-.9*size,3.35*size,0,.28*size,1.4*size,.28*size,trunk);
      box(.6*size,3.1*size,.2*size,1.3*size,.3*size,.3*size,trunk);
      const colors = tone==='peach' ? ['#d2a17f','#dfb193','#c99172','#e4bd9b'] : ['#75895d','#8e9b68','#a3aa75','#6c8359'];
      for(let i=0;i<65;i++) {
        const xx=(rand()-.5)*3.9, zz=(rand()-.5)*3.1, yy=rand()*2.3;
        if(xx*xx/4+zz*zz/3+(yy-1)*(yy-1)/2>1.8)continue;
        const s=.65+rand()*.45;
        box(Math.round(xx/.5)*.5*size,(3.8+Math.round(yy/.45)*.45)*size,Math.round(zz/.5)*.5*size,s*size,.6*size,s*size,pick(colors));
      }
      box(0,.15,0,1.25*size,.22,1.25*size,'#a8ac83');
    });
  }
  for (const s of [-1,1]) {
    tree(s*24,11,1.05,'peach'); tree(s*23,2,1.12); tree(s*24,-13,.87,'peach');
    tree(s*10,-24,.91,'peach'); tree(s*7.5,28,.78); tree(s*25,-4,.75);
    tree(s*12,-19,.75); tree(s*24,29,.72,'peach');
  }
  // Low voxel shrubs, small rocks and tufts make the buildings meet the ground.
  for(let i=0;i<160;i++) {
    const x=(rand()-.5)*52, z=(rand()-.5)*59;
    if(Math.abs(x)<23 && z>-28 && z<27) continue;
    box(x,.15+rand()*.16,z,.25+rand()*.4,.3+rand()*.3,.25+rand()*.4,pick([C.grassLight,'#809363','#b2b586']));
  }
  for(const s of [-1,1]) {
    for(const z of [-17.5,13,27.5]) for(let i=0;i<6;i++) box(s*(12+rand()*2),.28,z+rand()*.9,.4+rand()*.5,.5,.5+rand()*.3,pick(['#8e9d71','#a0ad7d','#788d60']));
    for(const z of [12,20,-19]) {
      box(s*25,.3,z,.9,.6,1.2,C.stoneDark);box(s*25+.2,.65,z,.6,.4,.7,C.stone);
    }
  }

  function stoneLantern(x,z) {
    box(x,.15,z,.85,.3,.85,C.stoneLight);box(x,.77,z,.28,1.05,.28,C.stone);
    box(x,1.4,z,.72,.2,.72,C.stoneLight);box(x,1.75,z,.45,.52,.45,'#e6bd72',glowing);
    box(x,2.08,z,.93,.18,.93,C.roofDark);box(x,2.25,z,.57,.17,.57,C.roof);box(x,2.4,z,.22,.16,.22,C.gold);
  }
  for(const x of [-4.2,4.2]) for(const z of [8.5,21,29]) stoneLantern(x,z);
  for(const x of [-11,11]) stoneLantern(x,-3);

  function lion(x,z) {
    box(x,.35,z,1.25,.7,1.55,C.stoneLight);box(x,.9,z,.7,.5,.95,C.stoneDark);
    box(x,1.37,z-.12,.72,.75,.8,C.stone);box(x,1.88,z+.23,.74,.64,.68,C.stoneLight);
    box(x,1.69,z+.6,.49,.27,.38,C.stone);box(x,2.13,z+.08,.9,.25,.62,C.stoneDark);
    for(const s of [-1,1]){box(x+s*.3,1.01,z+.45,.25,.54,.36,C.stoneLight);box(x+s*.37,2.03,z+.23,.22,.32,.26,C.stone);box(x+s*.21,1.96,z+.59,.065,.075,.045,'#515849');}
  }
  lion(-4.1,27.2);lion(4.1,27.2);lion(-5.2,-2.6);lion(5.2,-2.6);
  // A bronze incense burner anchors the otherwise open central courtyard.
  box(0,.35,3,2.6,.5,2.3,C.stoneLight);
  for(const s of [-1,1])box(s*.65,.94,3,.23,.8,.3,'#5c6953');
  box(0,1.5,3,1.8,.72,1.15,'#677860');box(0,1.93,3,2.05,.15,1.35,C.gold);
  for(const s of [-1,1]){box(s*1.03,1.91,3,.15,.63,.15,C.gold);box(s*.91,2.2,3,.36,.13,.15,C.gold);}
  for(let i=-1;i<=1;i++)box(i*.25,2.25,3,.04,.62,.04,C.redLight);

  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshStandardMaterial({ roughness: .94, metalness: .0 });
  const glowMaterial = new THREE.MeshStandardMaterial({ roughness:.7,emissive:'#f8a13b',emissiveIntensity:.25 });
  const waterMaterial = new THREE.MeshStandardMaterial({ roughness:.27,metalness:.18 });
  function batch(items, mat, castShadow = true) {
    const mesh = new THREE.InstancedMesh(geometry,mat,items.length);
    items.forEach(([x,y,z,w,h,d,color,a],i)=>{
      vec.set(x,y,z);scale.set(w,h,d);q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP,a);m.compose(vec,q,scale);
      mesh.setMatrixAt(i,m);mesh.setColorAt(i,new THREE.Color(color));
    });
    mesh.castShadow=castShadow;mesh.receiveShadow=true;mesh.computeBoundingSphere();scene.add(mesh);return mesh;
  }
  const solidMesh=batch(solids,material), glowMesh=batch(glowing,glowMaterial,false), waterMesh=batch(water,waterMaterial,false);
  return { count: solids.length+glowing.length+water.length, glowMaterial, solidMesh, glowMesh, waterMesh, buildings };
}
