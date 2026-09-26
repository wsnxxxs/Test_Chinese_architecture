import * as THREE from 'three';

/**
 * 实体沙盘底座、地层切面、地貌高低地形、河道与水面、西北山丘及石砌隧道
 */
export class BaseAndTerrain {
  public group: THREE.Group;
  public riverMesh!: THREE.Mesh;
  public windmillBlades!: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'BaseAndTerrain';

    this.buildDisplayPlinth();
    this.buildTerrainGround();
    this.buildRiver();
    this.buildNorthwestHillAndTunnel();
    this.buildWindmill();
  }

  /**
   * 实体手工展示木底座与铭牌
   */
  private buildDisplayPlinth() {
    const plinthGroup = new THREE.Group();
    const width = 102;
    const depth = 74;
    const baseHeight = 3.5;

    // 1. 深胡桃木实木主体台座
    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x2c1a0e, // 浓郁深胡桃木色
      roughness: 0.65,
      metalness: 0.08,
    });

    const baseBox = new THREE.Mesh(
      new THREE.BoxGeometry(width, baseHeight, depth),
      woodMat
    );
    baseBox.position.set(0, -baseHeight / 2 - 0.2, 0);
    baseBox.receiveShadow = true;
    plinthGroup.add(baseBox);

    // 2. 底部突出的底座木线边框
    const baseTrim = new THREE.Mesh(
      new THREE.BoxGeometry(width + 2.5, 0.8, depth + 2.5),
      woodMat
    );
    baseTrim.position.set(0, -baseHeight - 0.3, 0);
    baseTrim.receiveShadow = true;
    plinthGroup.add(baseTrim);

    // 3. 上沿收口倒角木框
    const topTrim = new THREE.Mesh(
      new THREE.BoxGeometry(width + 1.2, 0.45, depth + 1.2),
      woodMat
    );
    topTrim.position.set(0, -0.22, 0);
    topTrim.receiveShadow = true;
    plinthGroup.add(topTrim);

    // 4. 沙盘截面土层侧边（草皮层绿、中层黄土泥土、下层灰岩石）
    // 给整个沙盘边缘切面带来真实实体切片模型的顶级质感
    const strataHeight = 1.6;
    const soilMat = new THREE.MeshStandardMaterial({
      color: 0x543d2b, // 泥土棕
      roughness: 0.95,
      metalness: 0.0,
    });
    const strataSides = new THREE.Mesh(
      new THREE.BoxGeometry(width - 0.1, strataHeight, depth - 0.1),
      soilMat
    );
    strataSides.position.set(0, -strataHeight / 2, 0);
    strataSides.receiveShadow = true;
    plinthGroup.add(strataSides);

    // 5. 正面黄铜金属铭牌
    const plaqueMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // 黄铜金色
      metalness: 0.85,
      roughness: 0.3,
    });
    const plaqueMesh = new THREE.Mesh(
      new THREE.BoxGeometry(16, 1.4, 0.15),
      plaqueMat
    );
    plaqueMesh.position.set(0, -baseHeight / 2, depth / 2 + 0.08);
    plaqueMesh.castShadow = true;
    plinthGroup.add(plaqueMesh);

    // 铭牌内嵌黑底字牌
    const plaqueInnerMat = new THREE.MeshStandardMaterial({
      color: 0x1a1510,
      roughness: 0.4,
    });
    const plaqueInner = new THREE.Mesh(
      new THREE.BoxGeometry(14.8, 1.0, 0.05),
      plaqueInnerMat
    );
    plaqueInner.position.set(0, -baseHeight / 2, depth / 2 + 0.18);
    plinthGroup.add(plaqueInner);

    this.group.add(plinthGroup);
  }

  /**
   * 整体沙盘地表（草地多层台地与色块分级）
   */
  private buildTerrainGround() {
    const terrainGroup = new THREE.Group();
    terrainGroup.name = 'TerrainSurface';

    // 采用多个规整温润的多边形台地组合，营造纯正手工微缩模型质感（避免体素方块）
    // 基础草甸材质（柔和温暖的苔原绿）
    const grassMatMain = new THREE.MeshStandardMaterial({
      color: 0x5a874b, // 暖橄榄草绿
      roughness: 0.85,
      metalness: 0.02,
      flatShading: true,
    });

    const grassMatDark = new THREE.MeshStandardMaterial({
      color: 0x486f3b, // 深色草甸
      roughness: 0.85,
      metalness: 0.02,
      flatShading: true,
    });

    // 主地表板块
    const mainPlate = new THREE.Mesh(
      new THREE.BoxGeometry(100, 0.4, 72),
      grassMatMain
    );
    mainPlate.position.set(0, -0.2, 0);
    mainPlate.receiveShadow = true;
    terrainGroup.add(mainPlate);

    // 稍微在局部添加 1~2 块柔和微抬高绿地（厚度 0.15），形成台地层次
    const terrace1 = new THREE.Mesh(
      new THREE.CylinderGeometry(14, 15, 0.25, 8),
      grassMatDark
    );
    terrace1.position.set(10, 0.05, -12);
    terrace1.receiveShadow = true;
    terrainGroup.add(terrace1);

    const terrace2 = new THREE.Mesh(
      new THREE.CylinderGeometry(16, 18, 0.2, 7),
      grassMatMain
    );
    terrace2.position.set(-10, 0.05, -6);
    terrace2.receiveShadow = true;
    terrainGroup.add(terrace2);

    this.group.add(terrainGroup);
  }

  /**
   * 蜿蜒河流、河床下凹地貌与水面
   */
  private buildRiver() {
    const riverGroup = new THREE.Group();
    riverGroup.name = 'RiverSystem';

    // 河道切槽与泥质河底
    const riverBedMat = new THREE.MeshStandardMaterial({
      color: 0x3d352c, // 湿润泥沙深褐
      roughness: 0.9,
      metalness: 0.05,
    });

    // 河流走向：从后方 Z: -36 (X: 33) 穿向 前方 Z: 36 (X: 37)
    // 使用沿路径放置的下沉河槽多边形
    const riverBedGeom = new THREE.BoxGeometry(14, 0.9, 72);
    const riverBed = new THREE.Mesh(riverBedGeom, riverBedMat);
    riverBed.position.set(35, -0.55, 0);
    riverBed.rotation.y = -0.06;
    riverBed.receiveShadow = true;
    riverGroup.add(riverBed);

    // 树脂般清澈通透的微缩水面
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x2e6b72, // 翡翠蓝绿
      roughness: 0.12,
      metalness: 0.35,
      transparent: true,
      opacity: 0.88,
    });

    const waterGeom = new THREE.PlaneGeometry(13.2, 72, 10, 10);
    this.riverMesh = new THREE.Mesh(waterGeom, waterMat);
    this.riverMesh.rotation.x = -Math.PI / 2;
    this.riverMesh.rotation.z = -0.06;
    this.riverMesh.position.set(35, -0.32, 0);
    this.riverMesh.receiveShadow = true;
    riverGroup.add(this.riverMesh);

    // 河畔细节：两岸散落的小型鹅卵石（圆滑球体/椭球）
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x8a847e,
      roughness: 0.8,
      flatShading: true,
    });

    const pebbleGeom = new THREE.DodecahedronGeometry(0.35, 1);
    const pebbleCoords = [
      { x: 27.5, z: 12 }, { x: 28.2, z: 14 }, { x: 27.8, z: 5 },
      { x: 27.2, z: -8 }, { x: 28.0, z: -18 }, { x: 41.5, z: 2 },
      { x: 42.0, z: -12 }, { x: 41.8, z: 18 }, { x: 27.9, z: 24 }
    ];

    pebbleCoords.forEach((c, idx) => {
      const pebble = new THREE.Mesh(pebbleGeom, stoneMat);
      const s = 0.6 + (idx % 3) * 0.4;
      pebble.scale.set(s * 1.4, s * 0.6, s);
      pebble.position.set(c.x, -0.22, c.z);
      pebble.rotation.set(idx, idx * 2, 0);
      pebble.castShadow = true;
      pebble.receiveShadow = true;
      riverGroup.add(pebble);
    });

    // 河畔小木码头 (Wooden Jetty)
    const jettyWoodMat = new THREE.MeshStandardMaterial({
      color: 0x422a1d,
      roughness: 0.85,
    });
    const jetty = new THREE.Group();
    // 码头栈板
    const jettyDeck = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.15, 4.5),
      jettyWoodMat
    );
    jettyDeck.position.set(0, -0.08, 0);
    jettyDeck.castShadow = true;
    jettyDeck.receiveShadow = true;
    jetty.add(jettyDeck);

    // 栈桥木桩立柱
    for (let px of [-0.9, 0.9]) {
      for (let pz of [-1.8, 0, 1.8]) {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 1.2, 6),
          jettyWoodMat
        );
        post.position.set(px, -0.6, pz);
        post.castShadow = true;
        jetty.add(post);
      }
    }

    jetty.position.set(28.2, 0, 18.5);
    jetty.rotation.y = 0.25;
    riverGroup.add(jetty);

    // 停泊在码头边的小木划艇 (Small Rowboat)
    const boat = new THREE.Group();
    const boatHull = new THREE.Mesh(
      new THREE.ConeGeometry(0.85, 2.8, 4),
      new THREE.MeshStandardMaterial({ color: 0x8b3a2b, roughness: 0.6 }) // 经典红木船
    );
    boatHull.rotation.x = Math.PI / 2;
    boatHull.rotation.y = Math.PI / 4;
    boatHull.scale.set(1.1, 0.5, 1.0);
    boatHull.position.y = -0.36;
    boatHull.castShadow = true;
    boat.add(boatHull);

    boat.position.set(30.6, 0, 19.5);
    boat.rotation.y = 0.5;
    riverGroup.add(boat);

    this.group.add(riverGroup);
  }

  /**
   * 西北起伏山丘、绿植草坡与石砌铁路隧道
   */
  private buildNorthwestHillAndTunnel() {
    const hillGroup = new THREE.Group();
    hillGroup.name = 'NorthwestHillAndTunnel';

    // 1. 手工模型切角风格的丘陵山体（平滑几何体阶梯多边形，绝非方块体素）
    const hillMat = new THREE.MeshStandardMaterial({
      color: 0x4f7b40, // 苍翠山林绿
      roughness: 0.9,
      metalness: 0.0,
      flatShading: true,
    });

    const hillMatHigh = new THREE.MeshStandardMaterial({
      color: 0x3d6630, // 高山深绿
      roughness: 0.9,
      flatShading: true,
    });

    // 主山丘（中心位于 X: -38, Z: 0，覆盖隧道上方）
    // 隧道铁轨在 Y = 0.38 穿行，山体抬高到 Y = 4.5 ~ 6.0，完全遮盖铁轨上空
    const hillBase = new THREE.Mesh(
      new THREE.CylinderGeometry(15, 19, 4.2, 10),
      hillMat
    );
    hillBase.position.set(-39, 2.0, 1);
    hillBase.scale.set(1.1, 1.0, 1.4);
    hillBase.castShadow = true;
    hillBase.receiveShadow = true;
    hillGroup.add(hillBase);

    // 山顶高阶
    const hillTop = new THREE.Mesh(
      new THREE.CylinderGeometry(8, 12, 2.5, 8),
      hillMatHigh
    );
    hillTop.position.set(-40, 4.8, -1);
    hillTop.scale.set(1.0, 1.0, 1.2);
    hillTop.castShadow = true;
    hillTop.receiveShadow = true;
    hillGroup.add(hillTop);

    // 2. 石砌隧道洞口（Stone Tunnel Portals）
    const stonePortalMat = new THREE.MeshStandardMaterial({
      color: 0x5e564f,
      roughness: 0.85,
      metalness: 0.1,
      flatShading: true,
    });

    const brickArchMat = new THREE.MeshStandardMaterial({
      color: 0x7c4338, // 拱顶红砖质感
      roughness: 0.8,
    });

    // 洞口生成函数
    const createPortal = (pos: THREE.Vector3, rotY: number) => {
      const portal = new THREE.Group();
      portal.position.copy(pos);
      portal.rotation.y = rotY;

      // 主挡土墙
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(6.4, 4.0, 1.2),
        stonePortalMat
      );
      wall.position.y = 1.9;
      wall.castShadow = true;
      wall.receiveShadow = true;
      portal.add(wall);

      // 两侧外八字挡土护墙（Wing walls）
      [-3.4, 3.4].forEach((wx, i) => {
        const wing = new THREE.Mesh(
          new THREE.BoxGeometry(2.0, 3.2, 0.8),
          stonePortalMat
        );
        wing.position.set(wx, 1.5, 0.4);
        wing.rotation.y = (i === 0 ? 0.35 : -0.35);
        wing.castShadow = true;
        wing.receiveShadow = true;
        portal.add(wing);
      });

      // 石砌拱券装饰环 (Arch surround)
      const archRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.6, 0.28, 8, 14, Math.PI),
        brickArchMat
      );
      archRing.position.set(0, 1.8, 0.6);
      archRing.castShadow = true;
      portal.add(archRing);

      // 拱顶石 (Keystone)
      const keystone = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.7, 0.4),
        stonePortalMat
      );
      keystone.position.set(0, 3.5, 0.65);
      keystone.castShadow = true;
      portal.add(keystone);

      // 顶部护栏石压顶 (Coping stones)
      const coping = new THREE.Mesh(
        new THREE.BoxGeometry(6.8, 0.35, 1.5),
        stonePortalMat
      );
      coping.position.set(0, 3.95, 0);
      coping.castShadow = true;
      portal.add(coping);

      // 洞内黑幕（防止穿帮穿透视线）
      const interiorBackdrop = new THREE.Mesh(
        new THREE.PlaneGeometry(2.8, 3.2),
        new THREE.MeshBasicMaterial({ color: 0x080808 })
      );
      interiorBackdrop.position.set(0, 1.5, -0.5);
      portal.add(interiorBackdrop);

      return portal;
    };

    // 北侧隧道洞口 (进入山体处)
    // 铁轨在 (-32, 0.38, -14) 穿入，切向约指向 (-0.6, 0, 0.8)
    const northPortal = createPortal(
      new THREE.Vector3(-31.5, 0, -14.2),
      Math.PI * 0.78
    );
    hillGroup.add(northPortal);

    // 南侧隧道洞口 (穿出山体处)
    // 铁轨在 (-32, 0.38, 17) 穿出，切向约指向 (0.7, 0, 0.7)
    const southPortal = createPortal(
      new THREE.Vector3(-31.2, 0, 17.2),
      -Math.PI * 0.82
    );
    hillGroup.add(southPortal);

    this.group.add(hillGroup);
  }

  /**
   * 西北山顶经典古典风车（带四片可旋转的十字叶片）
   */
  private buildWindmill() {
    const windmill = new THREE.Group();
    windmill.position.set(-40, 6.0, -1);

    // 风车站立木石塔身（圆台锥体）
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0xd9cebc, // 暖白微黄石灰泥
      roughness: 0.8,
      flatShading: true,
    });
    const tower = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 2.4, 4.2, 8),
      towerMat
    );
    tower.position.y = 2.1;
    tower.castShadow = true;
    tower.receiveShadow = true;
    windmill.add(tower);

    // 风车尖顶圆锥屋顶（深青瓦）
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x3a4f5c,
      roughness: 0.7,
      flatShading: true,
    });
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(2.0, 2.0, 8),
      roofMat
    );
    roof.position.y = 5.0;
    roof.castShadow = true;
    windmill.add(roof);

    // 风车主轴与四片木格叶片
    const bladesGroup = new THREE.Group();
    bladesGroup.position.set(0, 4.2, 1.8); // 探出前脸

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x5a3d28,
      roughness: 0.7,
    });
    const sailMat = new THREE.MeshStandardMaterial({
      color: 0xf5eedc, // 帆布暖白
      roughness: 0.6,
      side: THREE.DoubleSide,
    });

    // 轴心轮毂
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, 0.4, 8),
      woodMat
    );
    hub.rotation.x = Math.PI / 2;
    bladesGroup.add(hub);

    // 四片对称十字叶片
    for (let i = 0; i < 4; i++) {
      const armGroup = new THREE.Group();
      armGroup.rotation.z = (i * Math.PI) / 2;

      // 木桁梁
      const spar = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 3.8, 0.12),
        woodMat
      );
      spar.position.y = 1.9;
      spar.castShadow = true;
      armGroup.add(spar);

      // 帆布风翼板
      const sail = new THREE.Mesh(
        new THREE.PlaneGeometry(0.85, 2.6),
        sailMat
      );
      sail.position.set(0.48, 2.3, 0.02);
      sail.castShadow = true;
      armGroup.add(sail);

      bladesGroup.add(armGroup);
    }

    windmill.add(bladesGroup);
    this.windmillBlades = bladesGroup;

    this.group.add(windmill);
  }

  /**
   * 动画更新：使西北山顶风车平缓转动
   */
  public update(delta: number) {
    if (this.windmillBlades) {
      this.windmillBlades.rotation.z += delta * 0.4;
    }
  }
}
