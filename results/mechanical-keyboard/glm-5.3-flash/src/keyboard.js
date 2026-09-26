import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { ROWS } from './layout.js';
import { keycapGeometry, CAP_H, legendTexture, badgeTexture } from './keycap.js';

/**
 * AXIS 68 键盘模型。
 * 分层结构（沿本地 Y 拆解）：
 *   caseGroup  底壳（外壳体 + 内托盘 + 边框围栏 + 铭牌 + 支脚）
 *   plateGroup 定位板 + 轴体下壳
 *   stemGroup  轴心（拆解时再上浮一层）
 *   capsGroup  67 枚键帽（逐行错峰上浮）
 * 所有动画都朝目标值做指数平滑，快速反复触发也能正确收敛。
 */

const PLATE_LIFT = 0.55;
const STEM_LIFT = 1.0;
const capLift = (row) => 1.05 + row * 0.38;
const CAP_REST = 0.48; // 键帽底面离定位板顶面的距离
const TILT = 0.088; // 打字倾角 ≈ 5°

export class KeyboardModel {
  constructor(aniso) {
    this.aniso = aniso;
    this.keys = [];
    this.byCode = new Map();
    this.hoverKey = null;
    this.time = 0;
    this.explodeTarget = 0;
    this.plateCur = 0;
    this.stemCur = 0;

    this.#makeMaterials();
    this.root = new THREE.Group();
    this.caseGroup = new THREE.Group();
    this.plateGroup = new THREE.Group();
    this.stemGroup = new THREE.Group();
    this.capsGroup = new THREE.Group();
    this.root.add(this.caseGroup, this.plateGroup, this.stemGroup, this.capsGroup);
    this.root.rotation.x = TILT;
    this.root.position.y = 1.42; // 前后支脚刚好落在地面

    this.#buildCase();
    this.#buildPlate();
    this.#buildKeys();
  }

  /* ---------------- 材质 ---------------- */

  #makeMaterials() {
    this.matCase = new THREE.MeshPhysicalMaterial({
      color: 0x1b1d22,
      roughness: 0.42,
      metalness: 0.2,
      clearcoat: 0.55,
      clearcoatRoughness: 0.28,
    });
    this.matTray = new THREE.MeshStandardMaterial({ color: 0x0b0c0f, roughness: 0.85, metalness: 0.2 });
    this.matPlate = new THREE.MeshStandardMaterial({ color: 0x9aa1ab, roughness: 0.32, metalness: 0.85 });
    this.matSwitch = new THREE.MeshStandardMaterial({ color: 0x1f2126, roughness: 0.55 });
    this.matStem = new THREE.MeshStandardMaterial({ color: 0xe8842c, roughness: 0.5 });
    this.matFoot = new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.9 });
    this.badgeMat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.1 });

    const mk = (hex) =>
      new THREE.MeshPhysicalMaterial({
        color: hex,
        roughness: 0.42,
        metalness: 0,
        clearcoat: 0.5,
        clearcoatRoughness: 0.35,
      });
    this.sideMats = { base: mk(0xffffff), mod: mk(0xcccccc), accent: mk(0xe8842c), space: mk(0xdddddd) };
    this.legendCache = new Map();
    this.badgeCache = new Map();
  }

  /* ---------------- 底壳 ---------------- */

  #buildCase() {
    const add = (mesh) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.caseGroup.add(mesh);
      return mesh;
    };

    // 外壳体：有厚度的底盘
    const body = new THREE.Mesh(new RoundedBoxGeometry(16.9, 0.78, 5.9, 4, 0.16), this.matCase);
    body.position.y = -0.59;
    add(body);

    // 内托盘（拆解后露出的内部底面）
    const tray = new THREE.Mesh(new THREE.BoxGeometry(15.9, 0.06, 4.9), this.matTray);
    tray.position.y = -0.175;
    tray.castShadow = false;
    add(tray);

    // 四周边框围栏：定位板下陷安装的经典观感
    const bezelFB = new RoundedBoxGeometry(16.9, 0.3, 0.34, 2, 0.08);
    const bezelLR = new RoundedBoxGeometry(0.34, 0.3, 5.22, 2, 0.08);
    for (const [x, z, geo] of [
      [0, 2.78, bezelFB],
      [0, -2.78, bezelFB],
      [8.28, 0, bezelLR],
      [-8.28, 0, bezelLR],
    ]) {
      const b = new THREE.Mesh(geo, this.matCase);
      b.position.set(x, -0.05, z);
      add(b);
    }

    // 前脸铭牌
    this.badge = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.225), this.badgeMat);
    this.badge.position.set(0, -0.05, 2.956);
    this.badge.castShadow = false;
    this.caseGroup.add(this.badge);

    // 支脚：后高前低，配合 5° 打字倾角
    const footR = new RoundedBoxGeometry(1.15, 0.66, 0.75, 2, 0.1);
    const footF = new RoundedBoxGeometry(1.15, 0.16, 0.75, 2, 0.06);
    for (const x of [6.4, -6.4]) {
      const r = new THREE.Mesh(footR, this.matFoot);
      r.position.set(x, -1.31, -2.3);
      add(r);
      const f = new THREE.Mesh(footF, this.matFoot);
      f.position.set(x, -1.06, 2.3);
      add(f);
    }
  }

  /* ---------------- 定位板 + 轴体 ---------------- */

  #buildPlate() {
    const plate = new THREE.Mesh(new THREE.BoxGeometry(16.3, 0.14, 5.3), this.matPlate);
    plate.position.y = -0.07;
    plate.castShadow = true;
    plate.receiveShadow = true;
    this.plateGroup.add(plate);

    // 轴体：用 InstancedMesh，67 颗共享两份几何
    const pos = [];
    ROWS.forEach((row, r) => {
      let acc = 0;
      for (const k of row) {
        pos.push([acc + k.w / 2 - 8, r - 2]);
        acc += k.w;
      }
    });

    const housingGeo = new RoundedBoxGeometry(0.74, 0.3, 0.74, 2, 0.06);
    const housing = new THREE.InstancedMesh(housingGeo, this.matSwitch, pos.length);
    const stemGeo = new RoundedBoxGeometry(0.36, 0.17, 0.36, 2, 0.05);
    const stems = new THREE.InstancedMesh(stemGeo, this.matStem, pos.length);
    const m = new THREE.Matrix4();
    pos.forEach(([x, z], i) => {
      housing.setMatrixAt(i, m.makeTranslation(x, 0.15, z));
      stems.setMatrixAt(i, m.makeTranslation(x, 0.385, z));
    });
    housing.instanceMatrix.needsUpdate = true;
    stems.instanceMatrix.needsUpdate = true;
    housing.castShadow = true;
    stems.castShadow = true;
    this.plateGroup.add(housing);
    this.stemGroup.add(stems);
  }

  /* ---------------- 键帽 ---------------- */

  #buildKeys() {
    ROWS.forEach((row, r) => {
      let acc = 0;
      for (const k of row) {
        const x = acc + k.w / 2 - 8;
        acc += k.w;
        const z = r - 2;
        const baseY = CAP_REST + CAP_H / 2;

        const topMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          roughness: 0.44,
          clearcoat: 0.5,
          clearcoatRoughness: 0.42,
          emissiveIntensity: 0,
        });
        const sm = this.sideMats[k.role];
        const mesh = new THREE.Mesh(keycapGeometry(k.w), [sm, sm, topMat, sm, sm, sm]);
        mesh.position.set(x, baseY, z);
        mesh.castShadow = true;
        this.capsGroup.add(mesh);

        const key = {
          code: k.code,
          role: k.role,
          label: k.label,
          sub: k.sub,
          w: k.w,
          row: r,
          mesh,
          topMat,
          baseY,
          lift: capLift(r),
          cur: 0,
          explodeTarget: 0,
          press: 0,
          pressTarget: 0,
        };
        mesh.userData.key = key;
        this.keys.push(key);
        this.byCode.set(k.code, key);
      }
    });
  }

  /* ---------------- 配置应用 ---------------- */

  applyCase(cfg) {
    this.matCase.color.set(cfg.color);
    this.matCase.roughness = cfg.roughness;
    this.matCase.metalness = cfg.metalness;
  }

  applyTheme(theme) {
    const c = theme.caps;
    this.sideMats.base.color.set(c.base);
    this.sideMats.mod.color.set(c.mod);
    this.sideMats.accent.color.set(c.accentKey);
    this.sideMats.space.color.set(c.space);
    this.matStem.color.set(c.accentKey);

    for (const key of this.keys) {
      const cacheKey = `${theme.id}|${key.role}|${key.label}|${key.sub || ''}|${key.w}`;
      let tex = this.legendCache.get(cacheKey);
      if (!tex) {
        tex = legendTexture(theme, key.role, key.label, key.sub, key.w, this.aniso);
        this.legendCache.set(cacheKey, tex);
      }
      key.topMat.map = tex;
      key.topMat.needsUpdate = true;
      key.topMat.emissive.set(theme.accent);
    }

    let badge = this.badgeCache.get(theme.id);
    if (!badge) {
      badge = badgeTexture(theme, this.aniso);
      this.badgeCache.set(theme.id, badge);
    }
    this.badgeMat.map = badge;
    this.badgeMat.needsUpdate = true;

    if (this.hoverKey) this.setHover(this.hoverKey, true);
  }

  /* ---------------- 动画状态 ---------------- */

  setExploded(on) {
    const t = on ? 1 : 0;
    this.explodeTarget = t;
    for (const key of this.keys) key.explodeTarget = t;
  }

  /** 开场：先呈拆解状态，再由 update 平滑复位，形成「组装」入场动画 */
  startFromExploded() {
    this.plateCur = 1;
    this.stemCur = 1;
    for (const key of this.keys) key.cur = 1;
  }

  pressKey(key) {
    key.pressTarget = 1;
  }

  releaseKey(key) {
    key.pressTarget = 0;
  }

  releaseAll() {
    for (const key of this.keys) key.pressTarget = 0;
  }

  pressByCode(code) {
    const key = this.byCode.get(code);
    if (!key) return false;
    this.pressKey(key);
    return true;
  }

  releaseByCode(code) {
    const key = this.byCode.get(code);
    if (key) this.releaseKey(key);
  }

  /** 悬停高亮（顶面微泛主题强调色） */
  setHover(key, force = false) {
    if (this.hoverKey === key && !force) return key;
    if (this.hoverKey) this.hoverKey.topMat.emissiveIntensity = 0;
    this.hoverKey = key;
    if (key) key.topMat.emissiveIntensity = 0.22;
    return key;
  }

  raycast(ndc, camera) {
    this._raycaster ||= new THREE.Raycaster();
    this._raycaster.setFromCamera(ndc, camera);
    const hit = this._raycaster.intersectObjects(this.capsGroup.children, false)[0];
    return hit ? hit.object.userData.key : null;
  }

  /* ---------------- 每帧更新 ---------------- */

  update(dt) {
    this.time += dt;
    const kG = 1 - Math.exp(-dt * 5.2);
    this.plateCur += (this.explodeTarget * PLATE_LIFT - this.plateCur) * kG;
    this.stemCur += (this.explodeTarget * STEM_LIFT - this.stemCur) * kG;
    this.plateGroup.position.y = this.plateCur;
    this.stemGroup.position.y = this.stemCur;

    for (const key of this.keys) {
      // 逐行不同速率 → 拆解/组装时呈错峰波浪
      const k = 1 - Math.exp(-dt * (4.2 + key.row * 1.15));
      key.cur += (key.explodeTarget - key.cur) * k;
      key.press += (key.pressTarget - key.press) * (1 - Math.exp(-dt * 26));
      const bob = Math.sin(this.time * 1.4 + key.row * 0.8) * 0.035 * key.cur;
      key.mesh.position.y = key.baseY + key.cur * key.lift + bob - key.press * 0.17;
      key.mesh.scale.y = 1 - key.press * 0.06;
    }
  }
}
