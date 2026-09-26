// 手工模型风格的建筑：石膏墙、瓦屋顶、窗框、招牌；窗户统一用 InstancedMesh 以控制绘制次数
import * as THREE from 'three';
import * as MAT from './materials.js';
import * as TX from './textures.js';
import { glow } from './materials.js';
import { addFootprint, mulberry32 } from './world.js';

/* ----------------------------- 通用几何工具 ----------------------------- */
export function boxUV(geo, w, h, d) {
  const uv = geo.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      uv.setXY(i, uv.getX(i) * dims[f][0], uv.getY(i) * dims[f][1]);
    }
  }
  return geo;
}
function shadow(m, cast = true, recv = true) { m.castShadow = cast; m.receiveShadow = recv; return m; }
function box(w, h, d, mat, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(boxUV(new THREE.BoxGeometry(w, h, d), w, h, d), mat);
  m.position.set(x, y + h / 2, z);
  return shadow(m, cast);
}

/** 山墙屋顶（脊线沿 x），返回带两个材质组的几何：0 = 屋面，1 = 山墙 */
function gableGeo(w, d, h, o = 0.07) {
  const W = w / 2 + o, D = d / 2 + o, slope = h / (d / 2), ye = -o * slope;
  const pos = [], uv = [], idx = [];
  const push = (arr) => { arr.forEach((v) => pos.push(...v)); };
  const slopeLen = Math.hypot(D, h - ye);
  const S = 0.9;
  // 屋面 (group 0)
  push([[-W, ye, D], [W, ye, D], [W, h, 0], [-W, h, 0]]);
  uv.push(0, 0, (2 * W) / S, 0, (2 * W) / S, slopeLen / S, 0, slopeLen / S);
  push([[W, ye, -D], [-W, ye, -D], [-W, h, 0], [W, h, 0]]);
  uv.push(0, 0, (2 * W) / S, 0, (2 * W) / S, slopeLen / S, 0, slopeLen / S);
  idx.push(0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7);
  const g0 = idx.length;
  // 山墙 (group 1)
  const x = w / 2 + 0.004;
  push([[x, 0, d / 2], [x, 0, -d / 2], [x, h, 0]]);
  uv.push(0, 0, d, 0, d / 2, h);
  push([[-x, 0, -d / 2], [-x, 0, d / 2], [-x, h, 0]]);
  uv.push(0, 0, d, 0, d / 2, h);
  idx.push(8, 9, 10, 11, 12, 13);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.addGroup(0, g0, 0); g.addGroup(g0, idx.length - g0, 1);
  g.computeVertexNormals();
  return g;
}

function hipGeo(w, d, h, o) {
  const W = w / 2 + o, D = d / 2 + o, ye = -o * (h / (d / 2));
  const r = Math.max(0, (w - d) / 2);
  const pos = [], uv = [], idx = [];
  const S = 0.9;
  const face = (pts, uvs) => {
    const b = pos.length / 3;
    pts.forEach((q) => pos.push(...q)); uvs.forEach((q) => uv.push(q[0] / S, q[1] / S));
    for (let i = 1; i < pts.length - 1; i++) idx.push(b, b + i, b + i + 1);
  };
  const sl = Math.hypot(D, h - ye), sw = Math.hypot(W - r, h - ye);
  face([[-W, ye, D], [W, ye, D], [r, h, 0], [-r, h, 0]], [[0, 0], [2 * W, 0], [W + r, sl], [W - r, sl]]);
  face([[W, ye, -D], [-W, ye, -D], [-r, h, 0], [r, h, 0]], [[0, 0], [2 * W, 0], [W + r, sl], [W - r, sl]]);
  face([[W, ye, D], [W, ye, -D], [r, h, 0]], [[0, 0], [2 * D, 0], [D, sw]]);
  face([[-W, ye, -D], [-W, ye, D], [-r, h, 0]], [[0, 0], [2 * D, 0], [D, sw]]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function hipRoof(w, d, h, o, mat) {
  const long = w >= d;
  const m = new THREE.Mesh(long ? hipGeo(w, d, h, o) : hipGeo(d, w, h, o), mat);
  if (!long) m.rotation.y = Math.PI / 2;
  return shadow(m);
}

/* ------------------------------ 窗户收集器 ------------------------------ */
export function createCtx(seed = 5) {
  const rnd = mulberry32(seed);
  const wins = [];
  return {
    rnd, wins, windmills: [],
    win(group, x, y, z, rotY, lit, sx = 1, sy = 1) { wins.push({ group, x, y, z, rotY, lit, sx, sy }); },
    finalize(scene) {
      scene.updateMatrixWorld(true);
      const lit = wins.filter((w) => w.lit), dark = wins.filter((w) => !w.lit);
      const frameGeo = new THREE.BoxGeometry(0.22, 0.29, 0.03), glassGeo = new THREE.BoxGeometry(0.165, 0.235, 0.03);
      const mk = (geo, mat, list, dz, gs) => {
        const im = new THREE.InstancedMesh(geo, mat, list.length);
        const m = new THREE.Matrix4(), l = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3();
        list.forEach((w, i) => {
          q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), w.rotY);
          s.set(w.sx, w.sy, 1);
          l.compose(new THREE.Vector3(0, 0, 0), q, s);
          const off = new THREE.Vector3(0, 0, dz).applyQuaternion(q);
          l.setPosition(w.x + off.x, w.y + off.y, w.z + off.z);
          m.multiplyMatrices(w.group.matrixWorld, l);
          im.setMatrixAt(i, m);
        });
        im.castShadow = false; im.receiveShadow = true;
        scene.add(im);
        return im;
      };
      mk(frameGeo, glow.windowFrame, wins, 0.004);
      mk(glassGeo, glow.windowLit, lit, 0.016);
      mk(glassGeo, glow.windowDark, dark, 0.016);
    },
  };
}

/** 在指定墙面排列窗户 */
function windowsOn(ctx, g, side, wallW, wallD, floorsY, cols, { skipMid = false, litProb = 0.5, sx = 1, sy = 1 } = {}) {
  const half = side === 'front' || side === 'back' ? wallW / 2 : wallD / 2;
  const len = side === 'front' || side === 'back' ? wallW : wallD;
  const off = side === 'front' || side === 'back' ? wallD / 2 : wallW / 2;
  const rot = { front: 0, back: Math.PI, left: -Math.PI / 2, right: Math.PI / 2 }[side];
  for (const y of floorsY) {
    for (let c = 0; c < cols; c++) {
      if (skipMid && cols % 2 === 1 && c === (cols - 1) / 2) continue;
      const u = -half + (len * (c + 0.5)) / cols;
      let x = 0, z = 0;
      if (side === 'front') { x = u; z = off; }
      else if (side === 'back') { x = -u; z = -off; }
      else if (side === 'left') { x = -off; z = -u; }
      else { x = off; z = u; }
      ctx.win(g, x, y, z, rot, ctx.rnd() < litProb, sx, sy);
    }
  }
}

/* --------------------------------- 配色 --------------------------------- */
export const WALLS = [0xf0dcb8, 0xecd08a, 0xe0a184, 0xbfcca6, 0xa9c1d6, 0xd9a75f, 0xf2eee4, 0xd8b6a0, 0xc9d6c8];
export const ROOFS = [0xb8543a, 0x5d6672, 0x7a4a34, 0x8e3b32, 0x59766a, 0xa4573b];

/* ------------------------------ 通用房屋 ------------------------------ */
function block(ctx, o) {
  const {
    w = 1.6, d = 1.4, floors = 1, fh = 0.55, wall = 0xf0dcb8, roofC = 0xb8543a, roofType = 'gable',
    ridgeX = true, roofH = 0.45, cols = Math.max(2, Math.round(w / 0.55)), door = true, doorColor = 0x7a4a2a,
    chimney = true, litProb = 0.5, sideCols = Math.max(1, Math.round(d / 0.7)), brick = false, flat = false,
  } = o;
  const g = new THREE.Group();
  const h = floors * fh;
  const wallMat = brick ? MAT.brick(wall) : MAT.wall(wall);
  g.add(box(w, h, d, wallMat));
  g.add(box(w + 0.04, 0.07, d + 0.04, MAT.stone(0xa89f8e), 0, -0.01, 0));
  for (let f = 1; f < floors; f++) g.add(box(w + 0.03, 0.025, d + 0.03, MAT.wall(0xf4f0e6), 0, f * fh - 0.0125, 0));
  // 檐口
  const ys = [];
  for (let f = 0; f < floors; f++) ys.push(f * fh + fh * 0.58);
  windowsOn(ctx, g, 'front', w, d, ys, cols, { skipMid: door, litProb });
  windowsOn(ctx, g, 'back', w, d, ys, cols, { litProb });
  windowsOn(ctx, g, 'left', w, d, ys, sideCols, { litProb });
  windowsOn(ctx, g, 'right', w, d, ys, sideCols, { litProb });
  if (door) {
    g.add(box(0.2, 0.34, 0.03, MAT.wood(doorColor), 0, 0.02, d / 2 + 0.012));
    g.add(box(0.28, 0.04, 0.09, MAT.stone(0xbdb4a2), 0, 0, d / 2 + 0.05));
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), glow.lamp);
    lamp.position.set(0.17, 0.32, d / 2 + 0.03); g.add(lamp);
  }
  // 屋顶
  if (flat) {
    g.add(box(w + 0.04, 0.05, d + 0.04, MAT.wall(0xd9d3c6), 0, h, 0));
    g.add(box(w - 0.1, 0.03, d - 0.1, MAT.paint(0x59544e, 0.95), 0, h + 0.05, 0));
  } else if (roofType === 'hip') {
    g.add(box(w + 0.02, 0.03, d + 0.02, MAT.wall(0xf1ede2), 0, h - 0.015, 0));
    const r = hipRoof(w, d, roofH, 0.07, MAT.roof(roofC)); r.position.y = h; g.add(r);
  } else {
    const rw = ridgeX ? w : d, rd = ridgeX ? d : w;
    const r = new THREE.Mesh(gableGeo(rw, rd, roofH, 0.07), [MAT.roof(roofC), wallMat]);
    shadow(r);
    r.position.y = h;
    if (!ridgeX) r.rotation.y = Math.PI / 2;
    g.add(r);
  }
  if (chimney && !flat) {
    const cx = ridgeX ? w * 0.26 : 0, cz = ridgeX ? -d * 0.08 : -d * 0.26;
    const c = box(0.13, roofH + 0.22, 0.13, MAT.brick(0xd8a89a), cx, h, cz);
    g.add(c);
    g.add(box(0.17, 0.03, 0.17, MAT.stone(0xa79f90), cx, h + roofH + 0.22, cz));
  }
  g.userData.size = { w, d, h };
  return g;
}

export function cottage(ctx, o = {}) { return block(ctx, { floors: 1, fh: 0.6, roofH: 0.5, ...o }); }
export function townhouse(ctx, o = {}) { return block(ctx, { floors: 2, fh: 0.52, roofH: 0.5, ridgeX: false, ...o }); }
export function apartment(ctx, o = {}) {
  const g = block(ctx, { floors: 3, fh: 0.5, flat: true, chimney: false, wall: 0xd7a68a, ...o });
  const { w, d, h } = g.userData.size;
  g.add(box(0.28, 0.16, 0.28, MAT.wall(0xcfc8ba), w * 0.25, h + 0.05, -d * 0.2));
  g.add(box(w + 0.06, 0.1, 0.03, MAT.wall(0xefe8d8), 0, h, d / 2 + 0.015));
  return g;
}

function labelPlane(text, w, h, opts) {
  const t = TX.labelTexture(text, opts);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 }));
  return m;
}

export function shop(ctx, o = {}) {
  const { name = '面包房', awn = ['#c94b3b', '#f4ead2'], signBg = '#3b5a48', ...rest } = o;
  const g = block(ctx, { floors: 2, fh: 0.55, roofH: 0.42, ridgeX: true, cols: Math.max(2, Math.round((rest.w || 1.5) / 0.55)), door: false, ...rest });
  const { w, d } = g.userData.size;
  // 橱窗 + 门
  const sw = new THREE.Mesh(new THREE.BoxGeometry(w * 0.55, 0.3, 0.03), glow.windowLit);
  sw.position.set(-w * 0.14, 0.27, d / 2 + 0.012); g.add(sw);
  g.add(box(0.2, 0.36, 0.03, MAT.wood(0x5b3a25), w * 0.32, 0.02, d / 2 + 0.014));
  // 遮阳篷
  const awnTex = TX.stripeTexture(awn[0], awn[1], Math.max(4, Math.round(w / 0.16)));
  const awning = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, 0.025, 0.3), new THREE.MeshStandardMaterial({ map: awnTex, roughness: 0.85 }));
  awning.position.set(0, 0.5, d / 2 + 0.15); awning.rotation.x = 0.28; g.add(shadow(awning));
  // 招牌
  const sign = labelPlane(name, w * 0.7, 0.16, { w: 384, h: 96, bg: signBg, font: 'bold 54px "Microsoft YaHei","Segoe UI",sans-serif' });
  sign.position.set(0, 0.585, d / 2 + 0.018); g.add(sign);
  return g;
}

/* ------------------------------ 特色建筑 ------------------------------ */
export function townHall(ctx) {
  const w = 2.6, d = 1.9;
  const g = block(ctx, { w, d, floors: 2, fh: 0.55, wall: 0xe9d9b4, roofC: 0x6b4a3a, roofType: 'hip', roofH: 0.42, cols: 5, sideCols: 3, chimney: false, doorColor: 0x5a3220 });
  const h = 1.1;
  // 中央钟楼
  const tw = 0.62, th = 0.9;
  g.add(box(tw, th, tw, MAT.wall(0xf0e6cc), 0, h + 0.3, 0.1));
  const tr = hipRoof(tw, tw, 0.55, 0.05, MAT.roof(0x4d5c58)); tr.position.set(0, h + 0.3 + th, 0.1); g.add(tr);
  const clockTex = TX.clockTexture();
  const clockMat = new THREE.MeshStandardMaterial({ map: clockTex, roughness: 0.5 });
  for (const [rot, off] of [[0, [0, tw / 2 + 0.005]], [Math.PI, [0, -tw / 2 - 0.005]]]) {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.2, 24), clockMat);
    c.position.set(0, h + 0.3 + th * 0.62, 0.1 + off[1]); c.rotation.y = rot; g.add(c);
  }
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.4, 6), MAT.metal(0xcccccc));
  pole.position.set(0, h + 0.3 + th + 0.55 + 0.2, 0.1); g.add(pole);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.12), new THREE.MeshStandardMaterial({ color: 0xc43c32, side: THREE.DoubleSide }));
  flag.position.set(0.11, h + 0.3 + th + 0.55 + 0.33, 0.1); g.add(flag);
  // 门廊柱
  for (const x of [-0.35, 0.35]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.5, 10), MAT.wall(0xf3efe4));
    col.position.set(x, 0.27, d / 2 + 0.16); g.add(shadow(col));
  }
  g.add(box(1.0, 0.05, 0.36, MAT.wall(0xf3efe4), 0, 0.52, d / 2 + 0.16));
  g.userData.size = { w, d, h: 1.4 };
  return g;
}

export function church(ctx) {
  const g = new THREE.Group();
  const w = 1.25, d = 2.0, h = 0.85;
  const wallMat = MAT.wall(0xf1e9d6);
  g.add(box(w, h, d, wallMat));
  g.add(box(w + 0.04, 0.07, d + 0.04, MAT.stone(0xa89f8e), 0, -0.01, 0));
  const roof = new THREE.Mesh(gableGeo(d, w, 0.55, 0.07), [MAT.roof(0x5d6672), wallMat]);
  shadow(roof); roof.position.y = h; roof.rotation.y = Math.PI / 2; g.add(roof);
  // 塔楼
  const tw = 0.62, th = 1.55;
  g.add(box(tw, th, tw, wallMat, 0, 0, d / 2 + tw / 2 - 0.1));
  const spire = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 4, 1).rotateY(Math.PI / 4), MAT.roof(0x4d5560));
  spire.scale.set(0.72, 1, 0.72);
  spire.position.set(0, th + 0.5, d / 2 + tw / 2 - 0.1); g.add(shadow(spire));
  const cross = new THREE.Group();
  const cm = MAT.metal(0xd6b768, 0.3);
  cross.add(box(0.02, 0.16, 0.02, cm, 0, 0, 0), box(0.1, 0.02, 0.02, cm, 0, 0.09, 0));
  cross.position.set(0, th + 1.0, d / 2 + tw / 2 - 0.1); g.add(cross);
  // 尖拱窗（发光）
  const tz = d / 2 + tw - 0.1;
  const gm = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), glow.windowLit);
  gm.position.set(0, th * 0.62, tz + 0.006); g.add(gm);
  g.add(box(0.2, 0.42, 0.03, MAT.wood(0x5a3a26), 0, 0.02, tz + 0.01));
  for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
    ctx.win(g, side * (w / 2), 0.5, -0.55 + i * 0.6, side * Math.PI / 2, ctx.rnd() < 0.7, 1, 1.6);
  }
  g.userData.size = { w: 1.25, d: d + tw - 0.1, h: 2.5 };
  g.userData.offsetZ = (tw - 0.1) / 2;
  return g;
}

export function warehouse(ctx, o = {}) {
  const g = block(ctx, { w: 2.0, d: 1.3, floors: 1, fh: 0.62, wall: 0xc9a27d, roofC: 0x6b7480, roofH: 0.38, cols: 4, chimney: false, door: false, litProb: 0.3, ...o });
  const { w, d } = g.userData.size;
  g.add(box(0.5, 0.42, 0.03, MAT.wood(0x7f5a3c), -w * 0.18, 0.02, d / 2 + 0.014));
  g.add(box(0.5, 0.42, 0.03, MAT.wood(0x7f5a3c), w * 0.22, 0.02, d / 2 + 0.014));
  // 装卸平台
  g.add(box(w * 0.9, 0.09, 0.25, MAT.stone(0xa79f90), 0, 0, d / 2 + 0.13));
  g.add(box(0.14, 0.11, 0.14, MAT.wood(0xb58a58), -0.5, 0.09, d / 2 + 0.13));
  g.add(box(0.12, 0.09, 0.12, MAT.wood(0xa87d4c), -0.34, 0.09, d / 2 + 0.13));
  return g;
}

export function cafe(ctx, o = {}) {
  const g = block(ctx, { w: 1.5, d: 1.3, floors: 1, fh: 0.6, wall: 0xf2d8b0, roofC: 0x3f6d6a, roofType: 'hip', roofH: 0.42, cols: 2, chimney: false, door: false, ...o });
  const { w, d } = g.userData.size;
  const sw = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, 0.3, 0.03), glow.windowLit);
  sw.position.set(-w * 0.12, 0.29, d / 2 + 0.012); g.add(sw);
  g.add(box(0.2, 0.36, 0.03, MAT.wood(0x4b6f6b), w * 0.32, 0.02, d / 2 + 0.014));
  const awnTex = TX.stripeTexture('#3f7d78', '#f4ead2', 10);
  const awning = new THREE.Mesh(new THREE.BoxGeometry(w * 0.95, 0.025, 0.32), new THREE.MeshStandardMaterial({ map: awnTex, roughness: 0.85 }));
  awning.position.set(0, 0.47, d / 2 + 0.16); awning.rotation.x = 0.3; g.add(shadow(awning));
  // 露天座位
  for (const x of [-0.45, 0.1]) {
    g.add(box(0.14, 0.02, 0.14, MAT.paint(0x8a5a36), x, 0.14, d / 2 + 0.36));
    g.add(box(0.02, 0.14, 0.02, MAT.paint(0x8a5a36), x, 0, d / 2 + 0.36));
    const um = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.06, 8), new THREE.MeshStandardMaterial({ color: 0xd9614a, roughness: 0.8 }));
    um.position.set(x, 0.52, d / 2 + 0.36); g.add(shadow(um));
    g.add(box(0.012, 0.36, 0.012, MAT.paint(0xdddddd), x, 0.14, d / 2 + 0.36));
  }
  return g;
}

export function barn(ctx) {
  const g = new THREE.Group();
  const w = 2.0, d = 1.6, h = 0.75;
  const red = MAT.wall(0xa8382e);
  g.add(box(w, h, d, MAT.wood(0xb8574a)));
  g.add(box(w + 0.04, 0.06, d + 0.04, MAT.stone(0x8f887a), 0, -0.01, 0));
  const roof = new THREE.Mesh(gableGeo(w, d, 0.55, 0.09), [MAT.roof(0x4b4f55), MAT.wood(0xb8574a)]);
  shadow(roof); roof.position.y = h; g.add(roof);
  // 白色门框 + X 木撑
  g.add(box(0.7, 0.55, 0.03, MAT.paint(0xefe9dc, 0.8), 0, 0.02, d / 2 + 0.012));
  g.add(box(0.6, 0.47, 0.035, MAT.wood(0x9a3f34), 0, 0.06, d / 2 + 0.02));
  for (const rz of [0.72, -0.72]) {
    const x = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.03, 0.02), MAT.paint(0xefe9dc, 0.8));
    x.position.set(0, 0.3, d / 2 + 0.04); x.rotation.z = rz; g.add(x);
  }
  ctx.win(g, 0, h + 0.2, d / 2 + 0.005, 0, true, 0.8, 0.8);
  // 谷仓筒仓
  const silo = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 1.15, 16), MAT.metal(0xbfc4c8, 0.5));
  silo.position.set(w / 2 + 0.3, 0.575, -0.25); g.add(shadow(silo));
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), MAT.metal(0x8c9298, 0.4));
  cap.position.set(w / 2 + 0.3, 1.15, -0.25); g.add(shadow(cap));
  g.userData.size = { w: w + 0.7, d, h: 1.3 };
  g.userData.offsetX = 0.3;
  return g;
}

export function windmill(ctx) {
  const g = new THREE.Group();
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.55, 1.55, 10), MAT.wall(0xf0e6d0));
  tower.position.y = 0.775; g.add(shadow(tower));
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.62, 0.12, 10), MAT.stone(0x9c9484));
  base.position.y = 0.03; g.add(shadow(base));
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.5, 10), MAT.roof(0x6b4a3a));
  cap.position.y = 1.8; g.add(shadow(cap));
  g.add(box(0.2, 0.34, 0.03, MAT.wood(0x6b4a3a), 0, 0.05, 0.53));
  ctx.win(g, 0, 1.0, 0.41, 0, true, 0.8, 0.9);
  ctx.win(g, 0, 1.0, -0.41, Math.PI, false, 0.8, 0.9);
  // 风车叶片
  const rotor = new THREE.Group();
  rotor.position.set(0, 1.62, 0.5);
  rotor.userData.noMerge = true;
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 10).rotateX(Math.PI / 2), MAT.metal(0x55402c, 0.6));
  rotor.add(hub);
  const bladeMat = MAT.wood(0xd9c39b);
  for (let i = 0; i < 4; i++) {
    const arm = new THREE.Group();
    const spar = box(0.035, 1.5, 0.03, MAT.wood(0x6b4a3a), 0, 0.05, 0);
    arm.add(spar);
    const sail = box(0.28, 1.05, 0.012, bladeMat, 0.17, 0.4, 0.02, true);
    arm.add(sail);
    for (let k = 0; k < 6; k++) arm.add(box(0.28, 0.012, 0.02, MAT.wood(0x6b4a3a), 0.17, 0.42 + k * 0.17, 0.03));
    arm.rotation.z = (i * Math.PI) / 2;
    rotor.add(arm);
  }
  g.add(rotor);
  ctx.windmills.push(rotor);
  g.userData.size = { w: 1.2, d: 1.2, h: 2.1 };
  return g;
}

export function waterTower() {
  const g = new THREE.Group();
  const legMat = MAT.wood(0x7a5638);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 1.2, 6), legMat);
    leg.position.set(sx * 0.3, 0.6, sz * 0.3); g.add(shadow(leg));
  }
  const brace = MAT.wood(0x66472d);
  for (const sz of [-1, 1]) for (const rz of [0.78, -0.78]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.022, 0.022), brace);
    b.position.set(0, 0.55, sz * 0.3); b.rotation.z = rz; g.add(b);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.55, 14), MAT.wood(0x9c6b45));
  tank.position.y = 1.47; g.add(shadow(tank));
  for (const y of [1.28, 1.66]) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.435, 0.435, 0.03, 14), MAT.metal(0x3d3d3f, 0.5));
    band.position.y = y; g.add(band);
  }
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.35, 14), MAT.roof(0x7a3b2f));
  roof.position.y = 1.92; g.add(shadow(roof));
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8), MAT.metal(0x2a2a2c, 0.5));
  spout.position.set(0.55, 1.05, 0); spout.rotation.z = -0.5; g.add(spout);
  g.userData.size = { w: 0.9, d: 0.9, h: 2.1 };
  return g;
}

/* -------------------------------- 车站 -------------------------------- */
export function station(ctx) {
  const g = new THREE.Group();
  const w = 4.6, d = 2.0, h = 0.82;
  const wallMat = MAT.wall(0xf1e3c0);
  g.add(box(w, h, d, wallMat));
  g.add(box(w + 0.05, 0.08, d + 0.05, MAT.stone(0xa89f8e), 0, -0.01, 0));
  // 红砖窗间带
  g.add(box(w + 0.03, 0.05, d + 0.03, MAT.wall(0xa8483a), 0, 0.02 + 0.22, 0));
  const hipR = hipRoof(w, d, 0.5, 0.12, MAT.roof(0x8e3b32)); hipR.position.y = h; g.add(hipR);
  g.add(box(w + 0.05, 0.05, d + 0.05, MAT.wall(0xf4efe0), 0, h - 0.02, 0));

  // 中央钟楼
  const tw = 0.95, tb = h, th = 1.0;
  g.add(box(tw, th, tw, wallMat, 0, tb - 0.05, 0));
  g.add(box(tw + 0.06, 0.05, tw + 0.06, MAT.wall(0xa8483a), 0, tb + th - 0.08, 0));
  const tr = hipRoof(tw, tw, 0.6, 0.08, MAT.roof(0x4d5c58)); tr.position.y = tb + th - 0.03; g.add(tr);
  const clockMat = new THREE.MeshStandardMaterial({ map: TX.clockTexture(), roughness: 0.5 });
  for (const [rot, z] of [[0, tw / 2 + 0.006], [Math.PI, -tw / 2 - 0.006]]) {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.26, 28), clockMat);
    c.position.set(0, tb + th * 0.55, z); c.rotation.y = rot; g.add(c);
  }
  for (const [rot, x] of [[Math.PI / 2, tw / 2 + 0.006], [-Math.PI / 2, -tw / 2 - 0.006]]) {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.26, 28), clockMat);
    c.position.set(x, tb + th * 0.55, 0); c.rotation.y = rot; g.add(c);
  }

  // 拱形大门与窗
  for (const z of [d / 2, -d / 2]) {
    const rot = z > 0 ? 0 : Math.PI, s = z > 0 ? 1 : -1;
    for (const x of [-1.6, -0.55, 0.55, 1.6]) {
      ctx.win(g, x, 0.42, z, rot, true, 1.1, 1.5);
    }
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.5, 0.03), MAT.wood(0x5a3a26));
    door.position.set(0, 0.29, z + s * 0.012); g.add(door);
    const arch = new THREE.Mesh(new THREE.CircleGeometry(0.21, 16, 0, Math.PI), MAT.wood(0x5a3a26));
    arch.position.set(0, 0.54, z + s * 0.013); arch.rotation.y = rot; g.add(arch);
  }
  for (const sx of [-1, 1]) for (let i = 0; i < 2; i++) ctx.win(g, sx * (w / 2), 0.42, -0.4 + i * 0.8, sx * Math.PI / 2, ctx.rnd() < 0.6, 1.1, 1.5);

  // 站名牌
  const name = labelPlane('微缩站 MINI STATION', 1.9, 0.26, { w: 640, h: 88, bg: '#1e3a2c', font: 'bold 44px "Microsoft YaHei","Segoe UI",sans-serif' });
  name.position.set(0, 0.7, d / 2 + 0.03); g.add(name);
  const name2 = name.clone(); name2.position.set(0, 0.7, -d / 2 - 0.03); name2.rotation.y = Math.PI; g.add(name2);

  // 站台（世界 z: 6.6..7.95，本地 1.05..2.4）
  const platY = 0.13;
  const px = 0.1, pz = 1.72, pw = 6.9, pd = 1.35;
  g.add(box(pw, platY, pd, MAT.stone(0xb9b09e), px, 0, pz));
  g.add(box(pw + 0.06, 0.03, pd + 0.06, MAT.stone(0xd0c8b4), px, platY - 0.01, pz));
  g.add(box(pw, 0.006, 0.06, MAT.paint(0xe8c53c, 0.8), px, platY + 0.02, pz + pd / 2 - 0.1));
  // 雨棚（远离轨中心 > 0.9）
  const cy = 0.86;
  const canopy = box(5.4, 0.05, 1.02, MAT.wall(0xf1ede2), 0.1, cy, 1.62);
  g.add(canopy);
  const fascia = box(5.4, 0.12, 0.04, MAT.wall(0x3f5d4c), 0.1, cy - 0.06, 2.14);
  g.add(fascia);
  const cr = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.03, 1.1), MAT.roof(0x4d6b58));
  cr.position.set(0.1, cy + 0.06, 1.6); cr.rotation.x = -0.05; g.add(shadow(cr));
  for (const x of [-2.3, -0.7, 0.9, 2.5]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, cy - platY, 8), MAT.metal(0x2f4a3c, 0.5));
    post.position.set(x, platY + (cy - platY) / 2, 2.1); g.add(shadow(post));
  }
  // 长椅
  for (const x of [-2.0, 2.0]) {
    g.add(box(0.5, 0.03, 0.14, MAT.wood(0xb58a58), x, platY + 0.11, 1.4));
    g.add(box(0.5, 0.1, 0.02, MAT.wood(0xb58a58), x, platY + 0.15, 1.33));
    g.add(box(0.03, 0.11, 0.12, MAT.paint(0x2a2a2a), x - 0.2, platY, 1.4));
    g.add(box(0.03, 0.11, 0.12, MAT.paint(0x2a2a2a), x + 0.2, platY, 1.4));
  }
  // 行李车与木箱
  g.add(box(0.3, 0.14, 0.2, MAT.wood(0xa87d4c), 2.6, platY, 1.3));
  g.add(box(0.2, 0.12, 0.2, MAT.wood(0xb58a58), 2.95, platY, 1.35));
  g.userData.size = { w: 6.9, d: 3.4, h: 1.9 };
  g.userData.offsetZ = 0.7;
  g.userData.canopyPosts = [-2.3, -0.7, 0.9, 2.5];
  return g;
}

/* ------------------------------ 放置辅助 ------------------------------ */
export function place(scene, group, x, z, facing = 's', tag = '') {
  const rot = { s: 0, n: Math.PI, e: Math.PI / 2, w: -Math.PI / 2 }[facing];
  group.position.set(x, 0, z);
  group.rotation.y = rot;
  scene.add(group);
  const s = group.userData.size;
  if (s) {
    const oz = (group.userData.offsetZ || 0), ox = (group.userData.offsetX || 0);
    // 占地中心随朝向旋转
    const c = new THREE.Vector3(ox, 0, oz).applyAxisAngle(new THREE.Vector3(0, 1, 0), rot);
    const swap = facing === 'e' || facing === 'w';
    addFootprint(x + c.x, z + c.z, (swap ? s.d : s.w) / 2, (swap ? s.w : s.d) / 2, tag);
  }
  return group;
}
