import * as THREE from 'three';
import { makeRibbon, resamplePolyline, distToSegment } from './ribbon.js';
import { createTrack, GROUND_Y } from './track.js';

const G = GROUND_Y;

/* ---------------- 程序化贴图 ---------------- */

function woodTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#7d5230';
  ctx.fillRect(0, 0, 512, 512);
  // 木纹
  for (let i = 0; i < 260; i++) {
    const y = Math.random() * 512;
    ctx.strokeStyle = `rgba(${60 + Math.random() * 40},${38 + Math.random() * 25},${18 + Math.random() * 18},${0.12 + Math.random() * 0.2})`;
    ctx.lineWidth = 0.6 + Math.random() * 1.6;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= 512; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 2.5 + (Math.random() - .5) * 2);
    ctx.stroke();
  }
  // 木板拼缝
  for (let y = 0; y <= 512; y += 86) {
    ctx.strokeStyle = 'rgba(35,22,12,.55)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2.5, 2.5);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function grassTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#6d974a';
  ctx.fillRect(0, 0, 256, 256);
  const palette = ['#77a453', '#5f8a41', '#84ad5c', '#699247', '#7ca657'];
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = palette[(Math.random() * palette.length) | 0];
    ctx.globalAlpha = 0.35 + Math.random() * 0.5;
    const s = 1 + Math.random() * 1.6;
    ctx.fillRect(Math.random() * 256, Math.random() * 256, s, s);
  }
  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(13, 9);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function stationSignTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#efe4c8';
  ctx.fillRect(0, 0, 512, 128);
  ctx.strokeStyle = '#7a3b2a';
  ctx.lineWidth = 8;
  ctx.strokeRect(8, 8, 496, 112);
  ctx.fillStyle = '#6d3324';
  ctx.font = 'bold 58px "Microsoft YaHei", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('小 镇 车 站', 256, 66);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ---------------- 材质 ---------------- */

function makeMaterials() {
  const windowLit = new THREE.MeshStandardMaterial({
    color: '#3a2f1e', roughness: .4,
    emissive: new THREE.Color('#ffb157'), emissiveIntensity: .55,
  });
  const windowDark = new THREE.MeshStandardMaterial({
    color: '#26333d', roughness: .25, metalness: .25,
    emissive: new THREE.Color('#ff8f3a'), emissiveIntensity: .02,
  });
  return {
    // 轨道
    ballast: new THREE.MeshStandardMaterial({ color: '#8c8576', roughness: .97 }),
    sleeper: new THREE.MeshStandardMaterial({ color: '#5d4230', roughness: .9 }),
    rail: new THREE.MeshStandardMaterial({ color: '#b8b4a8', metalness: .85, roughness: .28 }),
    // 列车
    chassis: new THREE.MeshStandardMaterial({ color: '#26221e', roughness: .7, metalness: .3 }),
    locoBody: new THREE.MeshStandardMaterial({ color: '#26503d', roughness: .55, metalness: .25 }),
    locoDark: new THREE.MeshStandardMaterial({ color: '#2c2823', roughness: .6, metalness: .3 }),
    brass: new THREE.MeshStandardMaterial({ color: '#c79a3e', metalness: .8, roughness: .3 }),
    wheel: new THREE.MeshStandardMaterial({ color: '#1d1b19', roughness: .55, metalness: .5 }),
    carRoof: new THREE.MeshStandardMaterial({ color: '#ddd6c4', roughness: .65 }),
    carBodyA: new THREE.MeshStandardMaterial({ color: '#8f3d33', roughness: .55 }),
    carBodyB: new THREE.MeshStandardMaterial({ color: '#3e5875', roughness: .55 }),
    coupling: new THREE.MeshStandardMaterial({ color: '#33302b', roughness: .6, metalness: .4 }),
    headBulb: new THREE.MeshStandardMaterial({
      color: '#fff2cf', emissive: new THREE.Color('#ffd596'), emissiveIntensity: 1.2,
    }),
    windowLit,
    windowDark,
    // 环境
    wood: new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: .82 }),
    trim: new THREE.MeshStandardMaterial({ color: '#6b4428', roughness: .75 }),
    grass: new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: .95 }),
    road: new THREE.MeshStandardMaterial({ color: '#6d6960', roughness: .94 }),
    plaza: new THREE.MeshStandardMaterial({ color: '#7b766d', roughness: .92 }),
    bank: new THREE.MeshStandardMaterial({ color: '#b0a071', roughness: .97 }),
    water: new THREE.MeshStandardMaterial({ color: '#41708a', roughness: .16, metalness: .08, transparent: true, opacity: .9 }),
    bulb: new THREE.MeshStandardMaterial({
      color: '#fff3d2', emissive: new THREE.Color('#ffcf7a'), emissiveIntensity: .8,
    }),
    signalRed: new THREE.MeshStandardMaterial({
      color: '#5a1d18', emissive: new THREE.Color('#ff4a30'), emissiveIntensity: .2,
    }),
  };
}

/* ---------------- 屋顶 ---------------- */

function gableRoofGeometry(w, d, rh) {
  const hw = w / 2, hd = d / 2;
  const v = [
    -hw, 0, -hd, -hw, 0, hd, -hw, rh, 0,          // 左山墙
    hw, 0, -hd, hw, rh, 0, hw, 0, hd,              // 右山墙
    -hw, 0, -hd, hw, rh, 0, -hw, rh, 0,            // 后坡
    -hw, 0, -hd, hw, 0, -hd, hw, rh, 0,
    -hw, 0, hd, -hw, rh, 0, hw, rh, 0,             // 前坡
    -hw, 0, hd, hw, rh, 0, hw, 0, hd,
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  geo.computeVertexNormals();
  return geo;
}

/* ---------------- 建筑 ---------------- */

function makeHouse(mats, opts) {
  const { w = 2.6, d = 2.4, h = 1.7, rh = .9, wall = '#e8dcc2', roof = '#8a4a3a', shop = false } = opts;
  const g = new THREE.Group();
  const wallMat = new THREE.MeshStandardMaterial({ color: wall, roughness: .85 });
  const roofMat = new THREE.MeshStandardMaterial({ color: roof, roughness: .8, side: THREE.DoubleSide });
  const winMat = Math.random() < .68 ? mats.windowLit : mats.windowDark;

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
  body.position.y = h / 2;
  g.add(body);

  const roofM = new THREE.Mesh(gableRoofGeometry(w + .26, d + .26, rh), roofMat);
  roofM.position.y = h;
  g.add(roofM);

  const door = new THREE.Mesh(new THREE.BoxGeometry(.5, .85, .06), new THREE.MeshStandardMaterial({ color: '#5d402c', roughness: .8 }));
  door.position.set(0, .425, d / 2 + .03);
  g.add(door);

  if (shop) {
    const big = new THREE.Mesh(new THREE.PlaneGeometry(w * .62, .62), winMat);
    big.position.set(0, .95, d / 2 + .035);
    g.add(big);
    const awning = new THREE.Mesh(new THREE.BoxGeometry(w * .8, .07, .5), new THREE.MeshStandardMaterial({ color: '#9c4a38', roughness: .8 }));
    awning.position.set(0, 1.32, d / 2 + .2);
    g.add(awning);
  } else {
    for (const x of [-w * .26, w * .26]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(.42, .46), winMat);
      win.position.set(x, h * .6, d / 2 + .035);
      g.add(win);
    }
  }
  for (const x of [-w * .26, w * .26]) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(.42, .46), winMat);
    win.position.set(x, h * .6, -d / 2 - .035);
    win.rotation.y = Math.PI;
    g.add(win);
  }
  for (const sx of [-1, 1]) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(.42, .46), winMat);
    win.position.set(sx * (w / 2 + .035), h * .6, 0);
    win.rotation.y = sx > 0 ? Math.PI / 2 : -Math.PI / 2;
    g.add(win);
  }

  const chimney = new THREE.Mesh(new THREE.BoxGeometry(.28, .6, .28), new THREE.MeshStandardMaterial({ color: '#7a5a48', roughness: .9 }));
  chimney.position.set(w * .22, h + rh * .55, -d * .12);
  g.add(chimney);

  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

function makeChurch(mats) {
  const g = new THREE.Group();
  const stone = new THREE.MeshStandardMaterial({ color: '#d9d2c2', roughness: .85 });
  const slate = new THREE.MeshStandardMaterial({ color: '#4d5357', roughness: .8, side: THREE.DoubleSide });

  const nave = new THREE.Mesh(new THREE.BoxGeometry(4.8, 2.0, 2.4), stone);
  nave.position.y = 1;
  g.add(nave);
  const roof = new THREE.Mesh(gableRoofGeometry(5.1, 2.7, 1.1), slate);
  roof.position.y = 2;
  g.add(roof);

  // 塔楼 + 尖顶
  const tower = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4.0, 1.5), stone);
  tower.position.set(-1.6, 2, 0);
  g.add(tower);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.25, 2.4, 4), slate);
  spire.position.set(-1.6, 5.2, 0);
  spire.rotation.y = Math.PI / 4;
  g.add(spire);

  // 十字架
  const crossMat = new THREE.MeshStandardMaterial({ color: '#e8e2d2', roughness: .5 });
  const cv = new THREE.Mesh(new THREE.BoxGeometry(.09, .7, .09), crossMat);
  cv.position.set(-1.6, 6.75, 0);
  g.add(cv);
  const ch = new THREE.Mesh(new THREE.BoxGeometry(.45, .08, .08), crossMat);
  ch.position.set(-1.6, 6.85, 0);
  g.add(ch);

  // 长窗
  const winMat = mats.windowLit;
  for (const x of [0.1, 1.5]) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(.34, .9), winMat);
    win.position.set(x, 1.35, 1.21);
    g.add(win);
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

function makeWarehouse(mats) {
  const g = new THREE.Group();
  const wall = new THREE.MeshStandardMaterial({ color: '#b4ad9d', roughness: .9 });
  const roofM = new THREE.MeshStandardMaterial({ color: '#5c6062', roughness: .85, side: THREE.DoubleSide });

  const body = new THREE.Mesh(new THREE.BoxGeometry(7, 2.2, 3.4), wall);
  body.position.y = 1.1;
  g.add(body);
  const roof = new THREE.Mesh(gableRoofGeometry(7.3, 3.7, .7), roofM);
  roof.position.y = 2.2;
  g.add(roof);

  // 高侧窗
  for (const x of [-2.3, -1.15, 0, 1.15, 2.3]) {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(.55, .42), mats.windowDark);
    win.position.set(x, 1.55, 1.71);
    g.add(win);
  }
  // 大门
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.7, .08), new THREE.MeshStandardMaterial({ color: '#4f5558', roughness: .8 }));
  door.position.set(-2.2, .85, 1.74);
  g.add(door);
  // 装卸月台
  const dock = new THREE.Mesh(new THREE.BoxGeometry(2.4, .5, 1.2), new THREE.MeshStandardMaterial({ color: '#8a8172', roughness: .9 }));
  dock.position.set(1.8, .25, 2.1);
  g.add(dock);
  // 烟囱塔
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(.3, .42, 4.6, 12), new THREE.MeshStandardMaterial({ color: '#8d3e30', roughness: .85 }));
  stack.position.set(3.9, 2.3, -1.9);
  g.add(stack);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

function makeWaterTower(mats) {
  const g = new THREE.Group();
  const legMat = new THREE.MeshStandardMaterial({ color: '#6b4a30', roughness: .85 });
  const tankMat = new THREE.MeshStandardMaterial({ color: '#8f4936', roughness: .75, metalness: .15 });
  for (const [x, z] of [[-.5, -.5], [.5, -.5], [-.5, .5], [.5, .5]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(.14, 2.2, .14), legMat);
    leg.position.set(x, 1.1, z);
    g.add(leg);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(.85, .85, 1.1, 16), tankMat);
  tank.position.y = 2.65;
  g.add(tank);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(.95, .55, 16), new THREE.MeshStandardMaterial({ color: '#5c574d', roughness: .8 }));
  cap.position.y = 3.48;
  g.add(cap);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

/* ---------------- 路灯与小道具 ---------------- */

function makeLamp(mats) {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: '#3d3a34', metalness: .6, roughness: .5 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.05, .07, 2.1, 8), poleMat);
  pole.position.y = 1.05;
  g.add(pole);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(.5, .06, .06), poleMat);
  arm.position.set(.22, 2.08, 0);
  g.add(arm);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(.11, 10, 8), mats.bulb);
  bulb.position.set(.45, 2.0, 0);
  g.add(bulb);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function makeCrossing(mats) {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: '#e2e0d8', roughness: .6 });
  for (const sx of [-1, 1]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 1.7, 8), poleMat);
    pole.position.set(sx * 1.5, .85, 0);
    g.add(pole);
    // X 形交叉牌
    for (const r of [Math.PI / 4, -Math.PI / 4]) {
      const board = new THREE.Mesh(new THREE.BoxGeometry(.8, .1, .05), poleMat);
      board.position.set(sx * 1.5, 1.5, 0);
      board.rotation.z = r;
      g.add(board);
    }
    // 红色警示灯
    const sig = new THREE.Mesh(new THREE.SphereGeometry(.09, 8, 8), mats.signalRed);
    sig.position.set(sx * 1.5, 1.18, 0);
    g.add(sig);
  }
  // 栏杆（抬起状态）
  for (const sx of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(2.2, .07, .07), new THREE.MeshStandardMaterial({ color: '#e8e4da', roughness: .6 }));
    arm.position.set(sx * 2.6, 1.35, 0);
    arm.rotation.z = sx * 0.35;
    g.add(arm);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

/* ---------------- 世界构建 ---------------- */

export function buildWorld(scene) {
  const mats = makeMaterials();

  // 灯光
  const hemi = new THREE.HemisphereLight(0xffe6c2, 0x6f6a4f, .7);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xff9d4a, 2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -36;
  sun.shadow.camera.right = 36;
  sun.shadow.camera.top = 30;
  sun.shadow.camera.bottom = -30;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 130;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = .025;
  scene.add(sun, sun.target);
  const moon = new THREE.DirectionalLight(0xa9c2ee, 0);
  scene.add(moon);

  // ---- 木底座 ----
  const base = new THREE.Mesh(new THREE.BoxGeometry(68, 1, 48), mats.wood);
  base.position.y = .1;
  base.castShadow = true;
  base.receiveShadow = true;
  scene.add(base);

  // 桌面（承接底座阴影）
  const table = new THREE.Mesh(
    new THREE.PlaneGeometry(220, 220),
    new THREE.MeshStandardMaterial({ color: '#211e1b', roughness: .95 })
  );
  table.rotation.x = -Math.PI / 2;
  table.position.y = -.42;
  table.receiveShadow = true;
  scene.add(table);

  // 草皮
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(65, 44.6), mats.grass);
  grass.rotation.x = -Math.PI / 2;
  grass.position.y = G + .002;
  grass.receiveShadow = true;
  scene.add(grass);

  // 边框木棱
  const lipH = .2;
  const lips = [
    [68, lipH, 1.2, 0, G + lipH / 2 - .02, 22.9],
    [68, lipH, 1.2, 0, G + lipH / 2 - .02, -22.9],
    [1.2, lipH, 48, 33.4, G + lipH / 2 - .02, 0],
    [1.2, lipH, 48, -33.4, G + lipH / 2 - .02, 0],
  ];
  for (const [w, h, d, x, y, z] of lips) {
    const lip = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats.trim);
    lip.position.set(x, y, z);
    lip.castShadow = true;
    lip.receiveShadow = true;
    scene.add(lip);
  }

  // ---- 河流（从南缘进入，穿过铁路桥，汇入镇内湖泊） ----
  const riverCtrl = [
    [-10, -21.6], [-11.4, -18.6], [-12, -14.2], [-10, -10.6], [-7, -7.8],
  ];
  const riverSamples = resamplePolyline(riverCtrl, 18);
  const rn = riverSamples.length;
  const riverWaterW = (i) => {
    const t = i / (rn - 1);
    // 河口 2.2 → 桥处 3.4 → 湖口 4.6
    const w = t < .45 ? 2.2 + (t / .45) * 1.2 : 3.4 + ((t - .45) / .55) * 1.2;
    return w / 2;
  };
  const riverBank = new THREE.Mesh(
    makeRibbon(riverSamples, { widthFn: (i) => riverWaterW(i) + .9, y: G + .012, uvScale: 4 }),
    mats.bank
  );
  riverBank.receiveShadow = true;
  scene.add(riverBank);
  const river = new THREE.Mesh(
    makeRibbon(riverSamples, { widthFn: riverWaterW, y: G + .03, uvScale: 3.2 }),
    mats.water
  );
  scene.add(river);

  // 湖泊
  const lakeBank = new THREE.Mesh(new THREE.CircleGeometry(1, 56), mats.bank);
  lakeBank.rotation.x = -Math.PI / 2;
  lakeBank.scale.set(7.8, 6.2, 1);
  lakeBank.position.set(-4, G + .008, -5);
  lakeBank.receiveShadow = true;
  scene.add(lakeBank);
  const lake = new THREE.Mesh(new THREE.CircleGeometry(1, 56), mats.water);
  lake.rotation.x = -Math.PI / 2;
  lake.scale.set(7.0, 5.4, 1);
  // 略低于河面，避免与河流重叠处 z-fighting
  lake.position.set(-4, G + .026, -5);
  scene.add(lake);

  // ---- 道路 ----
  const roadsCtrl = [
    [[-25, 17], [-16, 17.4], [-6, 17.2], [2, 16.9], [8, 16.6], [16, 16.1], [22, 15.6]],
    [[22, 15.6], [26.5, 14.0]],
    [[4, 16.8], [4, 21.6]],
    [[-10, 17.3], [-12, 21.6]],
    [[13.5, -11.5], [14, -16], [15, -21.6]],
    [[14.4, -18], [9, -19.4]],
    [[14.4, -18], [20, -18.6], [26, -19.4]],
  ];
  for (const ctrl of roadsCtrl) {
    const samples = resamplePolyline(ctrl, 14);
    const road = new THREE.Mesh(
      makeRibbon(samples, { width: 2.3, y: G + .022, uvScale: 4 }),
      mats.road
    );
    road.receiveShadow = true;
    scene.add(road);
  }
  // 车站小广场
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(1, 40), mats.plaza);
  plaza.rotation.x = -Math.PI / 2;
  plaza.scale.set(2.9, 1.9, 1);
  plaza.position.set(8, G + .024, 16.4);
  plaza.receiveShadow = true;
  scene.add(plaza);

  // ---- 轨道 ----
  const track = createTrack(scene, mats);

  // ---- 跨河铁路桥 ----
  {
    const fr = track.frame(track.bridgeS, {});
    const bridge = new THREE.Group();
    bridge.position.set(fr.x, 0, fr.z);
    bridge.rotation.y = fr.yaw;

    const stone = new THREE.MeshStandardMaterial({ color: '#a69a86', roughness: .9 });
    const steel = new THREE.MeshStandardMaterial({ color: '#6e5a48', metalness: .5, roughness: .55 });

    const deck = new THREE.Mesh(new THREE.BoxGeometry(6.8, .28, 3.0), stone);
    deck.position.y = G + .0;
    bridge.add(deck);

    // 两侧板梁
    for (const z of [-1.4, 1.4]) {
      const girder = new THREE.Mesh(new THREE.BoxGeometry(6.8, .5, .12), steel);
      girder.position.set(0, G + .34, z);
      bridge.add(girder);
      for (let x = -2.8; x <= 2.8; x += .8) {
        const rib = new THREE.Mesh(new THREE.BoxGeometry(.08, .5, .12), steel);
        rib.position.set(x, G + .34, z);
        bridge.add(rib);
      }
    }
    // 河中桥墩
    for (const x of [-2.7, 2.7]) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(.7, .9, 2.6), stone);
      pier.position.set(x, G - .32, 0);
      bridge.add(pier);
    }
    bridge.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    scene.add(bridge);
  }

  // ---- 车站 ----
  let outwardN = { x: 0, z: 1 };
  {
    const fr = track.frame(track.stopS, {});
    // 相对小镇中心（0,-1）取朝外方向
    let nx = fr.x - 0, nz = fr.z + 1;
    const nl = Math.hypot(nx, nz);
    nx /= nl; nz /= nl;
    outwardN = { x: nx, z: nz, yaw: fr.yaw, px: fr.x, pz: fr.z };

    // 站台
    const platformMat = new THREE.MeshStandardMaterial({ color: '#9d9588', roughness: .9 });
    const platform = new THREE.Mesh(new THREE.BoxGeometry(9.8, .32, 1.9), platformMat);
    platform.position.set(fr.x + nx * 2.0, G + .14, fr.z + nz * 2.0);
    platform.rotation.y = fr.yaw;
    platform.castShadow = true; platform.receiveShadow = true;
    scene.add(platform);

    // 站台边缘警示条
    const edge = new THREE.Mesh(new THREE.BoxGeometry(9.5, .05, .12), new THREE.MeshStandardMaterial({ color: '#d8c169', roughness: .8 }));
    edge.position.set(fr.x + nx * 1.12, G + .31, fr.z + nz * 1.12);
    edge.rotation.y = fr.yaw;
    scene.add(edge);

    // 雨棚
    const canopyMat = new THREE.MeshStandardMaterial({ color: '#5c5448', roughness: .8 });
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(7.2, .12, 1.9), canopyMat);
    canopy.position.set(fr.x + nx * 2.0, 2.05, fr.z + nz * 2.0);
    canopy.rotation.y = fr.yaw;
    canopy.castShadow = true;
    scene.add(canopy);
    for (const dx of [-3.2, 3.2]) {
      for (const dz of [-.7, .7]) {
        // 柱子沿切向/法向局部坐标
        const post = new THREE.Mesh(new THREE.BoxGeometry(.1, 1.75, .1), canopyMat);
        const tx = Math.cos(fr.yaw), tz = -Math.sin(fr.yaw);
        post.position.set(fr.x + nx * 2.0 + tx * dx + nx * dz, 1.18, fr.z + nz * 2.0 + tz * dx + nz * dz);
        post.castShadow = true;
        scene.add(post);
      }
    }

    // 站房
    const station = makeHouse(mats, { w: 6.6, d: 2.8, h: 2.2, rh: .9, wall: '#dccfae', roof: '#754234' });
    station.position.set(fr.x + nx * 4.9, 0, fr.z + nz * 4.9);
    station.rotation.y = fr.yaw;
    // 顶部小塔楼
    const cup = new THREE.Mesh(new THREE.BoxGeometry(1, .8, 1), new THREE.MeshStandardMaterial({ color: '#cdbf9e', roughness: .8 }));
    cup.position.set(0, 2.95, 0);
    station.add(cup);
    const cupRoof = new THREE.Mesh(new THREE.ConeGeometry(.75, .6, 4), new THREE.MeshStandardMaterial({ color: '#6a3d30', roughness: .8 }));
    cupRoof.position.set(0, 3.65, 0);
    cupRoof.rotation.y = Math.PI / 4;
    station.add(cupRoof);
    // 站名挂牌（朝轨道一侧）
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, .8),
      new THREE.MeshStandardMaterial({ map: stationSignTexture(), roughness: .7 })
    );
    sign.position.set(0, 2.0, -2.8 / 2 - .04);
    sign.rotation.y = Math.PI;
    station.add(sign);
    scene.add(station);

    // 长椅
    for (const dx of [-1.8, 1.8]) {
      const bench = new THREE.Mesh(new THREE.BoxGeometry(1.1, .25, .4), new THREE.MeshStandardMaterial({ color: '#6b4a30', roughness: .85 }));
      const tx = Math.cos(fr.yaw), tz = -Math.sin(fr.yaw);
      bench.position.set(fr.x + nx * 2.55 + tx * dx, G + .42, fr.z + nz * 2.55 + tz * dx);
      bench.rotation.y = fr.yaw;
      bench.castShadow = true;
      scene.add(bench);
    }
  }

  // ---- 平交道口 ----
  {
    const fr = track.frame(track.crossingS, {});
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.6, .06, 3.0), mats.road);
    deck.position.set(fr.x, G + .06, fr.z);
    deck.rotation.y = fr.yaw;
    deck.receiveShadow = true;
    scene.add(deck);

    const cross = makeCrossing(mats);
    cross.position.set(fr.x, G, fr.z);
    cross.rotation.y = fr.yaw;
    scene.add(cross);
  }

  // ---- 建筑群 ----
  const lots = []; // {x,z,r} 供树木避让
  const place = (obj, x, z, rot, r) => {
    obj.position.set(x, 0, z);
    obj.rotation.y += rot;
    scene.add(obj);
    lots.push({ x, z, r });
  };

  place(makeChurch(mats), -17, 19.3, .1, 3.4);
  place(makeHouse(mats, { w: 2.4, d: 2.2, wall: '#e5dcc6', roof: '#7a4a3a' }), -23, 16.4, -.2, 2);
  place(makeHouse(mats, { w: 2.6, d: 2.4, wall: '#d9c7a5', roof: '#5c5668' }), -13, 20.5, .15, 2.1);
  place(makeHouse(mats, { w: 2.5, d: 2.3, wall: '#e8dfce', roof: '#8a5236' }), -6, 20.3, -.1, 2);
  place(makeHouse(mats, { w: 2.7, d: 2.4, wall: '#d6cbb4', roof: '#68503e' }), 1, 20.1, .08, 2.1);
  place(makeHouse(mats, { w: 3.2, d: 2.5, wall: '#e2d3b0', roof: '#7a3f33', shop: true }), -3, 15.5, .05, 2.4);
  place(makeHouse(mats, { w: 2.5, d: 2.3, wall: '#e6ddc8', roof: '#5d5f6a' }), 12, 19.8, -.12, 2);
  place(makeHouse(mats, { w: 2.6, d: 2.4, wall: '#dccfae', roof: '#8a5236' }), 18, 19.1, .15, 2.1);
  place(makeHouse(mats, { w: 2.4, d: 2.2, wall: '#e4d9c0', roof: '#6e4a36' }), 23.2, 17.8, -.5, 1.9);
  place(makeWarehouse(mats), 27, 12.8, .35, 5.2);
  place(makeWaterTower(mats), 23.4, 19.2, 0, 1.5);
  place(makeHouse(mats, { w: 3, d: 2.6, wall: '#e8dcc0', roof: '#7a4a3a' }), 9, -19.5, .1, 2.3);
  place(makeHouse(mats, { w: 3.4, d: 2.6, h: 1.9, wall: '#a04a36', roof: '#5c4636' }), 20, -18.8, .2, 2.5);
  place(makeHouse(mats, { w: 2.3, d: 2.1, wall: '#ddd2ba', roof: '#6b5340' }), 26.2, -19.7, -.2, 1.8);

  // ---- 路灯 ----
  const lampPointLights = [];
  const addLamp = (x, z, rot, withLight = false, baseI = 9) => {
    const lamp = makeLamp(mats);
    lamp.position.set(x, G, z);
    lamp.rotation.y = rot;
    scene.add(lamp);
    if (withLight) {
      const pl = new THREE.PointLight(0xffc278, 0, 8.5, 1.8);
      pl.position.set(x, G + 1.9, z);
      scene.add(pl);
      lampPointLights.push({ light: pl, base: baseI });
    }
  };

  // 站台三盏（stopS 位于直线段，沿切向近似布点）
  {
    const fr = track.frame(track.stopS, {});
    const tx = Math.cos(fr.yaw), tz = -Math.sin(fr.yaw);
    const nxv = outwardN.x, nzv = outwardN.z;
    for (const ds of [-3.2, 0, 3.2]) {
      addLamp(fr.x + tx * ds + nxv * 2.75, fr.z + tz * ds + nzv * 2.75, fr.yaw, Math.abs(ds) < .1 || ds < -3, ds < -3 ? 10 : 8);
    }
  }
  addLamp(-18, 15.9, Math.PI);
  addLamp(-8, 15.75, Math.PI);
  addLamp(2, 15.35, Math.PI, true, 8);
  addLamp(14, 14.6, Math.PI * 1.1);
  addLamp(20.5, 14.2, Math.PI * 1.2);
  addLamp(6.2, 17.0, -.6, true, 9);
  addLamp(9.8, 16.8, .7);

  // ---- 树木（实例化 + 避让） ----
  {
    const trunkGeo = new THREE.CylinderGeometry(.09, .14, .62, 6);
    const leafGeo = new THREE.IcosahedronGeometry(1, 1);
    const treeN = 120;
    const trunks = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: '#6b4d33', roughness: .9 }), treeN);
    const leaves = new THREE.InstancedMesh(leafGeo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: .85, flatShading: true }), treeN);
    trunks.castShadow = leaves.castShadow = true;

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    let placed2 = 0;
    let attempts = 0;

    const clear = (x, z) => {
      if (Math.abs(x) > 31 || Math.abs(z) > 21) return false;
      // 轨道
      for (let i = 0; i < track.LUT_N; i += 2) {
        const q = track.lut[i];
        if ((q.x - x) ** 2 + (q.z - z) ** 2 < 3.3 ** 2) return false;
      }
      // 道路
      for (const ctrl of roadsCtrl) {
        for (let i = 0; i < ctrl.length - 1; i++) {
          if (distToSegment(x, z, ctrl[i][0], ctrl[i][1], ctrl[i + 1][0], ctrl[i + 1][1]) < 1.7) return false;
        }
      }
      // 河流
      for (let i = 0; i < riverCtrl.length - 1; i++) {
        if (distToSegment(x, z, riverCtrl[i][0], riverCtrl[i][1], riverCtrl[i + 1][0], riverCtrl[i + 1][1]) < 2.8) return false;
      }
      // 湖泊
      if (((x + 4) / 8.4) ** 2 + ((z + 5) / 6.8) ** 2 < 1) return false;
      // 建筑
      for (const l of lots) {
        if ((l.x - x) ** 2 + (l.z - z) ** 2 < l.r ** 2) return false;
      }
      // 广场/站台
      if ((x - 8) ** 2 + (z - 16.4) ** 2 < 3.3 ** 2) return false;
      return true;
    };

    while (placed2 < treeN && attempts < treeN * 40) {
      attempts++;
      const x = (Math.random() * 2 - 1) * 31;
      const z = (Math.random() * 2 - 1) * 21;
      if (!clear(x, z)) continue;

      const s = .75 + Math.random() * .7;
      dummy.position.set(x, G + .31 * s, z);
      dummy.rotation.set(0, Math.random() * Math.PI * 2, 0);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      trunks.setMatrixAt(placed2, dummy.matrix);

      dummy.position.set(x, G + .95 * s, z);
      dummy.scale.set(s * .95, s * (1.05 + Math.random() * .35), s * .95);
      dummy.updateMatrix();
      leaves.setMatrixAt(placed2, dummy.matrix);

      color.setHSL(.27 + Math.random() * .07, .42 + Math.random() * .18, .34 + Math.random() * .14);
      leaves.setColorAt(placed2, color);
      placed2++;
    }
    trunks.count = leaves.count = placed2;
    if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
    scene.add(trunks, leaves);
  }

  /* ---- 光照状态应用 ---- */
  function applyLighting(s) {
    scene.background = s.bg;
    scene.fog.color.copy(s.fog);
    scene.fog.density = s.fogD;

    hemi.intensity = s.hemiI;
    hemi.color.copy(s.hemiSky);
    hemi.groundColor.copy(s.hemiGround);

    sun.intensity = s.sunI;
    sun.color.copy(s.sunColor);
    sun.position.copy(s.sunPos);

    moon.intensity = s.moonI;
    moon.color.copy(s.moonColor);
    moon.position.copy(s.moonPos);

    mats.windowLit.emissiveIntensity = s.winLit;
    mats.windowDark.emissiveIntensity = s.winDark;
    mats.bulb.emissiveIntensity = s.bulb;
    mats.headBulb.emissiveIntensity = .15 + s.head * 2.2;
    mats.signalRed.emissiveIntensity = .25 + s.head * 1.1;
    mats.water.color.copy(s.water);
    mats.grass.color.setScalar(1).copy(s.grass);

    for (const { light, base } of lampPointLights) light.intensity = base * s.lamp;
  }

  scene.fog = new THREE.FogExp2(0xe8b48a, .008);

  return { scene, mats, track, applyLighting };
}
