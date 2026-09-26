import * as THREE from 'three';

/**
 * 小镇环境装饰与基础设施：
 * 1. 道路系统与石板市政广场 (Roads & Town Square)
 * 2. 铁路平交道口 (Level Crossing with red-white barrier)
 * 3. 手工模型质感微缩树木（阔叶树、松柏、灌木）
 * 4. 沿街铸铁路灯（支持夜间发光与点光源）
 * 5. 广场喷泉、长椅与复古微缩汽车
 */
export class TownDecorations {
  public group: THREE.Group;
  public streetLamps: { mesh: THREE.Mesh; light?: THREE.PointLight }[] = [];
  public fountainWater!: THREE.Mesh;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'TownDecorations';

    this.buildRoadNetwork();
    this.buildLevelCrossing();
    this.buildFountain();
    this.buildStreetLamps();
    this.buildTreesAndBushes();
    this.buildVintageCars();
  }

  /**
   * 1. 道路系统与中心市政广场（石砖铺装路网）
   */
  private buildRoadNetwork() {
    const roadGroup = new THREE.Group();

    // 石板路材质
    const stonePavementMat = new THREE.MeshStandardMaterial({
      color: 0x9c9489, // 暖灰石砖色
      roughness: 0.88,
      flatShading: true,
    });

    const dirtRoadMat = new THREE.MeshStandardMaterial({
      color: 0x7c6953, // 乡村泥土碎石小路
      roughness: 0.95,
      flatShading: true,
    });

    // 车站前市政广场 (Town Square: X: -10 ~ 12, Z: 8 ~ 14)
    const square = new THREE.Mesh(
      new THREE.BoxGeometry(24, 0.08, 7.5),
      stonePavementMat
    );
    square.position.set(1.0, 0.04, 11.2);
    square.receiveShadow = true;
    roadGroup.add(square);

    // 商业主街 (Commercial High Street: 连通广场并向北延伸)
    const highStreet = new THREE.Mesh(
      new THREE.BoxGeometry(26, 0.08, 4.2),
      stonePavementMat
    );
    highStreet.position.set(4.0, 0.04, 1.2);
    highStreet.receiveShadow = true;
    roadGroup.add(highStreet);

    // 连通南北的十字街横道
    const crossStreet = new THREE.Mesh(
      new THREE.BoxGeometry(4.0, 0.08, 18),
      stonePavementMat
    );
    crossStreet.position.set(-3.5, 0.04, 4.0);
    crossStreet.receiveShadow = true;
    roadGroup.add(crossStreet);

    // 向东通向平交道口与河边码头的公路
    const eastRoad = new THREE.Mesh(
      new THREE.BoxGeometry(16, 0.08, 3.2),
      stonePavementMat
    );
    eastRoad.position.set(19.0, 0.04, 11.2);
    eastRoad.receiveShadow = true;
    roadGroup.add(eastRoad);

    // 延伸至后方住宅与农舍的泥土小径
    const farmPath = new THREE.Mesh(
      new THREE.BoxGeometry(18, 0.06, 2.6),
      dirtRoadMat
    );
    farmPath.position.set(6.0, 0.03, -11.0);
    farmPath.rotation.y = 0.12;
    farmPath.receiveShadow = true;
    roadGroup.add(farmPath);

    // 西侧通往山顶风车的登山小径
    const mountainPath = new THREE.Mesh(
      new THREE.BoxGeometry(16, 0.06, 2.0),
      dirtRoadMat
    );
    mountainPath.position.set(-24.0, 0.05, -3.0);
    mountainPath.rotation.y = -0.35;
    mountainPath.receiveShadow = true;
    roadGroup.add(mountainPath);

    this.group.add(roadGroup);
  }

  /**
   * 2. 铁路平交道口 (Railway Crossing)
   * 位于东南方向 X = 25.5, Z = 17.5 附近公路与铁路交汇处
   */
  private buildLevelCrossing() {
    const crossingGroup = new THREE.Group();
    crossingGroup.position.set(24.5, 0, 18.0);

    // 跨道木板平交铺面 (Crossing Decking)
    const woodDeckMat = new THREE.MeshStandardMaterial({ color: 0x4a3220, roughness: 0.8 });
    const woodDeck = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.36, 2.4),
      woodDeckMat
    );
    woodDeck.position.set(0, 0.18, 0);
    woodDeck.receiveShadow = true;
    crossingGroup.add(woodDeck);

    // 红白相间道口升降栏杆 (Gate Barrier)
    const barrierMatRed = new THREE.MeshStandardMaterial({ color: 0xc92a2a });
    const barrierMatWhite = new THREE.MeshStandardMaterial({ color: 0xf8f9fa });
    const postMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 });

    [-1.6, 1.6].forEach((sideX, idx) => {
      const gateGroup = new THREE.Group();
      gateGroup.position.set(sideX, 0, idx === 0 ? -1.8 : 1.8);

      // 立柱底座与电机箱
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.2, 0.35), postMat);
      post.position.y = 0.6;
      post.castShadow = true;
      gateGroup.add(post);

      // 交叉警示叉牌 (St. Andrew's Cross)
      const crossBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.04), barrierMatWhite);
      crossBar1.rotation.z = Math.PI / 4;
      crossBar1.position.y = 1.35;
      gateGroup.add(crossBar1);
      const crossBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.04), barrierMatWhite);
      crossBar2.rotation.z = -Math.PI / 4;
      crossBar2.position.y = 1.35;
      gateGroup.add(crossBar2);

      // 横杆
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.1, 0.08), barrierMatRed);
      arm.position.set(sideX > 0 ? -1.5 : 1.5, 0.85, 0);
      gateGroup.add(arm);

      crossingGroup.add(gateGroup);
    });

    this.group.add(crossingGroup);
  }

  /**
   * 3. 市政广场中心喷泉 (Town Fountain)
   */
  private buildFountain() {
    const fountainGroup = new THREE.Group();
    fountainGroup.position.set(-3.5, 0, 11.2);

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x8f8880, roughness: 0.8, flatShading: true });
    
    // 八角形石砌水池壁
    const poolRim = new THREE.Mesh(
      new THREE.CylinderGeometry(2.2, 2.4, 0.65, 8),
      stoneMat
    );
    poolRim.position.y = 0.32;
    poolRim.castShadow = true;
    poolRim.receiveShadow = true;
    fountainGroup.add(poolRim);

    // 水池清澈池水
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x338899,
      roughness: 0.1,
      metalness: 0.2,
      transparent: true,
      opacity: 0.85,
    });
    this.fountainWater = new THREE.Mesh(
      new THREE.CylinderGeometry(1.9, 1.9, 0.1, 16),
      waterMat
    );
    this.fountainWater.position.y = 0.5;
    fountainGroup.add(this.fountainWater);

    // 中心喷泉石雕柱与双层落水盘
    const centerPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.45, 1.4, 8),
      stoneMat
    );
    centerPillar.position.y = 0.9;
    centerPillar.castShadow = true;
    fountainGroup.add(centerPillar);

    const upperTier = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.5, 0.25, 8),
      stoneMat
    );
    upperTier.position.y = 1.5;
    upperTier.castShadow = true;
    fountainGroup.add(upperTier);

    const finial = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 8),
      stoneMat
    );
    finial.position.y = 1.8;
    fountainGroup.add(finial);

    this.group.add(fountainGroup);
  }

  /**
   * 4. 沿街铸铁复古路灯柱 (Victorian Street Lampposts)
   */
  private buildStreetLamps() {
    const lampGroup = new THREE.Group();

    const lampMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1f2421, // 墨黑铸铁
      metalness: 0.8,
      roughness: 0.3,
    });

    const lampPositions = [
      // 车站广场周边
      { x: -9.5, z: 8.5 },
      { x: 3.5, z: 8.5 },
      { x: -9.5, z: 14.5 },
      { x: 7.5, z: 14.5 },
      // 商业街店铺前
      { x: -1.0, z: 2.8 },
      { x: 7.5, z: 2.8 },
      { x: 15.0, z: 2.8 },
      // 平交道口旁
      { x: 21.0, z: 15.0 },
    ];

    lampPositions.forEach((pos, idx) => {
      const singleLamp = new THREE.Group();
      singleLamp.position.set(pos.x, 0, pos.z);

      // 底座
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, 0.5, 8), lampMetalMat);
      base.position.y = 0.25;
      base.castShadow = true;
      singleLamp.add(base);

      // 灯杆
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.2, 8), lampMetalMat);
      pole.position.y = 1.4;
      pole.castShadow = true;
      singleLamp.add(pole);

      // 灯头托架与灯顶盖
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.22, 6), lampMetalMat);
      cap.position.y = 2.65;
      singleLamp.add(cap);

      // 发光灯泡体 (Luminescent bulb)
      const bulbMat = new THREE.MeshStandardMaterial({
        color: 0xffe6a3,
        emissive: 0xffaa22,
        emissiveIntensity: 0.2, // 默认傍晚轻微发光
        roughness: 0.3,
      });
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 8, 8),
        bulbMat
      );
      bulb.position.y = 2.45;
      singleLamp.add(bulb);

      // 选配局部点光源，增强夜间地面真实漫反射光影
      let pLight: THREE.PointLight | undefined;
      // 为部分主要路灯配备暖黄点光源
      if (idx % 2 === 0) {
        pLight = new THREE.PointLight(0xffa834, 0.6, 12, 1.8);
        pLight.position.set(0, 2.4, 0);
        singleLamp.add(pLight);
      }

      this.streetLamps.push({ mesh: bulb, light: pLight });
      lampGroup.add(singleLamp);
    });

    this.group.add(lampGroup);
  }

  /**
   * 5. 手工微缩质感树木与灌木（阔叶海绵冠、高耸松柏、圆灌木）
   */
  private buildTreesAndBushes() {
    const treeGroup = new THREE.Group();

    // 树木材质池（调配不同明度的林木绿）
    const greenMats = [
      new THREE.MeshStandardMaterial({ color: 0x3d7039, roughness: 0.85, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x4d8a47, roughness: 0.85, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x2e592b, roughness: 0.9, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x60994d, roughness: 0.8, flatShading: true }),
    ];

    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x5a3d28,
      roughness: 0.9,
    });

    // 辅助：生成经典圆润手工阔叶树
    const createDeciduousTree = (x: number, z: number, scale = 1.0, matIdx = 0) => {
      const tree = new THREE.Group();
      tree.position.set(x, 0, z);

      // 树干
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2 * scale, 0.35 * scale, 1.8 * scale, 7),
        trunkMat
      );
      trunk.position.y = 0.9 * scale;
      trunk.castShadow = true;
      trunk.receiveShadow = true;
      tree.add(trunk);

      // 树冠：由3~4个多面球体融合而成的自然团簇造型（极具高档沙盘手工感！）
      const foliageMat = greenMats[matIdx % greenMats.length];
      const foliageGroup = new THREE.Group();
      foliageGroup.position.y = 2.4 * scale;

      const mainSphere = new THREE.Mesh(new THREE.DodecahedronGeometry(1.4 * scale, 1), foliageMat);
      mainSphere.castShadow = true;
      mainSphere.receiveShadow = true;
      foliageGroup.add(mainSphere);

      const sub1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.9 * scale, 1), foliageMat);
      sub1.position.set(0.6 * scale, -0.4 * scale, 0.4 * scale);
      sub1.castShadow = true;
      foliageGroup.add(sub1);

      const sub2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.0 * scale, 1), foliageMat);
      sub2.position.set(-0.5 * scale, 0.3 * scale, -0.3 * scale);
      sub2.castShadow = true;
      foliageGroup.add(sub2);

      tree.add(foliageGroup);
      return tree;
    };

    // 辅助：生成优雅高耸的层叠松树/冷杉 (Pine Tree)
    const createPineTree = (x: number, y: number, z: number, scale = 1.0) => {
      const pine = new THREE.Group();
      pine.position.set(x, y, z);

      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18 * scale, 0.28 * scale, 1.4 * scale, 6),
        trunkMat
      );
      trunk.position.y = 0.7 * scale;
      trunk.castShadow = true;
      pine.add(trunk);

      const pineMat = greenMats[2]; // 深松绿
      // 3层渐变圆锥树冠
      const coneConfigs = [
        { r: 1.6, h: 1.8, y: 1.8 },
        { r: 1.3, h: 1.6, y: 2.8 },
        { r: 0.9, h: 1.4, y: 3.7 },
      ];

      coneConfigs.forEach(c => {
        const cone = new THREE.Mesh(
          new THREE.ConeGeometry(c.r * scale, c.h * scale, 7),
          pineMat
        );
        cone.position.y = c.y * scale;
        cone.castShadow = true;
        cone.receiveShadow = true;
        pine.add(cone);
      });

      return pine;
    };

    // 树木规划与布置：
    // 1. 西北山坡与山脚松树林 (营造高山林场质感)
    const pineCoords = [
      { x: -30, y: 1.2, z: -8, s: 1.1 },
      { x: -34, y: 2.8, z: -4, s: 1.3 },
      { x: -38, y: 4.2, z: 7, s: 1.2 },
      { x: -44, y: 3.8, z: -8, s: 1.4 },
      { x: -45, y: 2.5, z: 12, s: 1.0 },
      { x: -28, y: 0.2, z: -20, s: 1.2 },
      { x: -20, y: 0.0, z: -21, s: 1.0 },
    ];
    pineCoords.forEach(p => {
      treeGroup.add(createPineTree(p.x, p.y, p.z, p.s));
    });

    // 2. 城镇公园、街道与后山阔叶树群 (点缀居住区与河边)
    const deciduousCoords = [
      // 车站西侧绿化
      { x: -16, z: 17, s: 1.1, m: 0 },
      { x: -18, z: 12, s: 1.3, m: 1 },
      // 广场西角花园
      { x: -14, z: 13, s: 0.9, m: 3 },
      // 商业街与住宅之间
      { x: -1, z: -3, s: 1.2, m: 0 },
      { x: 12, z: -3, s: 1.1, m: 1 },
      // 东北后山乡村林木
      { x: 1, z: -18, s: 1.4, m: 2 },
      { x: 9, z: -20, s: 1.3, m: 0 },
      { x: 18, z: -21, s: 1.2, m: 1 },
      { x: 24, z: -15, s: 1.1, m: 3 },
      // 河岸边垂柳/树木
      { x: 26, z: 3, s: 1.2, m: 0 },
      { x: 27, z: -5, s: 1.0, m: 1 },
      { x: 28, z: 24, s: 1.2, m: 3 },
      // 铁路桥南引道旁
      { x: 40, z: 10, s: 1.3, m: 0 },
      { x: 42, z: -2, s: 1.1, m: 2 },
      { x: 40, z: -18, s: 1.2, m: 1 },
    ];
    deciduousCoords.forEach(d => {
      treeGroup.add(createDeciduousTree(d.x, d.z, d.s, d.m));
    });

    // 3. 小灌木丛（Bushes）散布在建筑拐角与草坪
    const bushMat = greenMats[3];
    const bushGeom = new THREE.DodecahedronGeometry(0.55, 1);
    const bushCoords = [
      { x: -8, z: 5 }, { x: 7, z: 5 }, { x: 15, z: 5 },
      { x: -5, z: 15 }, { x: 5, z: 15 }, { x: -1, z: 8 },
      { x: 23, z: 8 }, { x: 27, z: 15 }
    ];
    bushCoords.forEach(b => {
      const bush = new THREE.Mesh(bushGeom, bushMat);
      bush.position.set(b.x, 0.3, b.z);
      bush.scale.set(1.2, 0.8, 1.2);
      bush.castShadow = true;
      bush.receiveShadow = true;
      treeGroup.add(bush);
    });

    this.group.add(treeGroup);
  }

  /**
   * 6. 复古微缩轿车模型（停靠在小镇街边与广场旁）
   */
  private buildVintageCars() {
    const carGroup = new THREE.Group();

    const createCar = (x: number, z: number, rotY: number, color: number) => {
      const car = new THREE.Group();
      car.position.set(x, 0.18, z);
      car.rotation.y = rotY;

      // 车身底盘
      const bodyMat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.3,
      });
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 3.2), bodyMat);
      chassis.position.y = 0.35;
      chassis.castShadow = true;
      car.add(chassis);

      // 车顶驾驶舱
      const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.45, 1.6),
        new THREE.MeshStandardMaterial({ color: 0x1f2e3d, roughness: 0.2 })
      );
      cabin.position.set(0, 0.75, -0.2);
      cabin.castShadow = true;
      car.add(cabin);

      // 前保险杠与车灯
      const chromeMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
      const bumper = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 0.12), chromeMat);
      bumper.position.set(0, 0.25, 1.65);
      car.add(bumper);

      // 4个车轮
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
      for (let wx of [-0.8, 0.8]) {
        for (let wz of [-0.9, 0.9]) {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.16, 12), wheelMat);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(wx, 0.24, wz);
          wheel.castShadow = true;
          car.add(wheel);
        }
      }

      return car;
    };

    // 经典英国绿复古轿车 (停在商业街旁)
    const greenCar = createCar(18.5, 1.5, 0.05, 0x1f4a2c);
    carGroup.add(greenCar);

    // 勃艮第红甲壳虫小车 (停在广场东侧)
    const redCar = createCar(14.0, 11.2, Math.PI / 2, 0x8b251e);
    carGroup.add(redCar);

    this.group.add(carGroup);
  }

  /**
   * 昼夜光照切换：控制路灯发光与点光源
   */
  public setNightMode(isNight: boolean, isDusk: boolean = false) {
    const intensity = isNight ? 2.5 : (isDusk ? 0.9 : 0.1);
    const lightPower = isNight ? 1.0 : (isDusk ? 0.35 : 0.0);

    this.streetLamps.forEach(lamp => {
      const mat = lamp.mesh.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(0xffaa22);
      mat.emissiveIntensity = intensity;

      if (lamp.light) {
        lamp.light.intensity = lightPower;
      }
    });
  }
}
