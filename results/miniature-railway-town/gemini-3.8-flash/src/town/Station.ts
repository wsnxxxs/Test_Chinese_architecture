import * as THREE from 'three';

/**
 * 欧式复古火车站建筑群：
 * 包含主站房、站台雨棚、木质长椅、复古站名挂牌、挂钟、行李推车以及车站进出站红绿信号灯
 */
export class Station {
  public group: THREE.Group;
  public signalLightRed!: THREE.Mesh;
  public signalLightGreen!: THREE.Mesh;
  public windowMeshes: THREE.Mesh[] = [];
  public stationLamps: THREE.Mesh[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'RailwayStation';

    this.buildPlatform();
    this.buildMainBuilding();
    this.buildPlatformCanopy();
    this.buildStationProps();
    this.buildSignalPost();
  }

  /**
   * 旅客乘降站台
   */
  private buildPlatform() {
    const platformGroup = new THREE.Group();

    // 站台主体（石质铺装）
    const stonePlatformMat = new THREE.MeshStandardMaterial({
      color: 0x827d78, // 灰色石材
      roughness: 0.85,
      metalness: 0.05,
    });

    // 轨道中心在 Z = 20.0，轨距 1.3。站台设在北侧 Z: 17.4 ~ 19.3
    const platformMesh = new THREE.Mesh(
      new THREE.BoxGeometry(22, 0.42, 2.2),
      stonePlatformMat
    );
    platformMesh.position.set(0, 0.21, 18.2);
    platformMesh.castShadow = true;
    platformMesh.receiveShadow = true;
    platformGroup.add(platformMesh);

    // 站台边缘警示安全石线（黄色石砖）
    const yellowStripeMat = new THREE.MeshStandardMaterial({
      color: 0xca9a2b,
      roughness: 0.7,
    });
    const yellowStripe = new THREE.Mesh(
      new THREE.BoxGeometry(22, 0.04, 0.18),
      yellowStripeMat
    );
    yellowStripe.position.set(0, 0.43, 19.2);
    platformGroup.add(yellowStripe);

    // 站台两端无障碍缓坡（Ramps）
    [-11.6, 11.6].forEach((rx, i) => {
      const ramp = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.42, 2.2),
        stonePlatformMat
      );
      ramp.position.set(rx, 0.1, 18.2);
      ramp.rotation.z = (i === 0 ? 0.25 : -0.25);
      ramp.castShadow = true;
      ramp.receiveShadow = true;
      platformGroup.add(ramp);
    });

    this.group.add(platformGroup);
  }

  /**
   * 车站主站房建筑（欧式红砖洋瓦风格）
   */
  private buildMainBuilding() {
    const buildingGroup = new THREE.Group();
    // 紧邻站台后侧 (Z: 13 ~ 17, X: -7 ~ 7)
    buildingGroup.position.set(-2, 0, 14.8);

    // 1. 一楼红砖外墙
    const brickMat = new THREE.MeshStandardMaterial({
      color: 0x934234, // 经典陶土红砖色
      roughness: 0.8,
    });
    const firstFloor = new THREE.Mesh(
      new THREE.BoxGeometry(10.5, 3.2, 4.4),
      brickMat
    );
    firstFloor.position.y = 1.6;
    firstFloor.castShadow = true;
    firstFloor.receiveShadow = true;
    buildingGroup.add(firstFloor);

    // 2. 楼层腰线线脚 (Cornice)
    const corniceMat = new THREE.MeshStandardMaterial({
      color: 0xe0d6c8, // 米白石膏线
      roughness: 0.6,
    });
    const cornice = new THREE.Mesh(
      new THREE.BoxGeometry(10.8, 0.25, 4.7),
      corniceMat
    );
    cornice.position.y = 3.25;
    cornice.castShadow = true;
    buildingGroup.add(cornice);

    // 3. 二楼阁楼与山墙（暖奶白木石混合）
    const secondFloorMat = new THREE.MeshStandardMaterial({
      color: 0xe8dfd1,
      roughness: 0.75,
    });
    const secondFloor = new THREE.Mesh(
      new THREE.BoxGeometry(8.2, 2.2, 4.0),
      secondFloorMat
    );
    secondFloor.position.y = 4.4;
    secondFloor.castShadow = true;
    secondFloor.receiveShadow = true;
    buildingGroup.add(secondFloor);

    // 4. 双坡斜屋顶（深灰石板瓦）
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x3d434d, // 蓝灰瓦顶
      roughness: 0.65,
    });
    const roofGeom = new THREE.ConeGeometry(5.2, 2.2, 4);
    const roofMesh = new THREE.Mesh(roofGeom, roofMat);
    roofMesh.rotation.y = Math.PI / 4;
    roofMesh.scale.set(1.4, 1.0, 0.9);
    roofMesh.position.set(0, 6.2, 0);
    roofMesh.castShadow = true;
    buildingGroup.add(roofMesh);

    // 5. 欧式窗户（白天为玻璃光泽，夜晚可自发光）
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x24323d,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x000000,
      emissiveIntensity: 0.0,
    });

    const windowConfigs = [
      // 站台面向窗户 (Z+)
      { x: -3.5, y: 1.8, z: 2.22, w: 1.1, h: 1.6 },
      { x: -1.5, y: 1.8, z: 2.22, w: 1.1, h: 1.6 },
      { x: 1.5, y: 1.8, z: 2.22, w: 1.1, h: 1.6 },
      { x: 3.5, y: 1.8, z: 2.22, w: 1.1, h: 1.6 },
      // 二楼老虎窗
      { x: -2.0, y: 4.4, z: 2.02, w: 0.9, h: 1.2 },
      { x: 2.0, y: 4.4, z: 2.02, w: 0.9, h: 1.2 },
      // 站前广场面向窗户 (Z-)
      { x: -3.0, y: 1.8, z: -2.22, w: 1.1, h: 1.6 },
      { x: 3.0, y: 1.8, z: -2.22, w: 1.1, h: 1.6 },
    ];

    windowConfigs.forEach(cfg => {
      const win = new THREE.Mesh(
        new THREE.PlaneGeometry(cfg.w, cfg.h),
        windowMat.clone()
      );
      win.position.set(cfg.x, cfg.y, cfg.z);
      if (cfg.z < 0) win.rotation.y = Math.PI;
      buildingGroup.add(win);
      this.windowMeshes.push(win);

      // 白色窗框凸缘
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(cfg.w + 0.16, cfg.h + 0.16, 0.08),
        corniceMat
      );
      frame.position.set(cfg.x, cfg.y, cfg.z + (cfg.z > 0 ? -0.02 : 0.02));
      buildingGroup.add(frame);
    });

    // 6. 候车大厅大门 (拱形木门)
    const doorMat = new THREE.MeshStandardMaterial({
      color: 0x4a2c1b,
      roughness: 0.7,
    });
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 2.4, 0.15),
      doorMat
    );
    door.position.set(0, 1.2, 2.22);
    buildingGroup.add(door);

    // 7. 红砖烟囱
    const chimney = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.8, 0.8),
      brickMat
    );
    chimney.position.set(3.2, 6.4, 0);
    chimney.castShadow = true;
    buildingGroup.add(chimney);

    this.group.add(buildingGroup);
  }

  /**
   * 站台遮雨棚
   */
  private buildPlatformCanopy() {
    const canopyGroup = new THREE.Group();
    // 覆盖站台大部分区域
    canopyGroup.position.set(1.5, 0, 18.2);

    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x1f382b, // 经典维多利亚深墨绿铸铁
      metalness: 0.6,
      roughness: 0.4,
    });

    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x7c3f30, // 优雅的红棕瓦顶雨棚
      roughness: 0.6,
    });

    const numPillars = 4;
    const spacing = 3.6;

    for (let i = 0; i < numPillars; i++) {
      const x = -((numPillars - 1) * spacing) / 2 + i * spacing;
      
      // 铸铁立柱
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.1, 2.6, 8),
        pillarMat
      );
      pillar.position.set(x, 1.3, 0);
      pillar.castShadow = true;
      canopyGroup.add(pillar);

      // 顶部人字斜撑
      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.08, 1.6),
        pillarMat
      );
      bracket.position.set(x, 2.5, 0);
      canopyGroup.add(bracket);
    }

    // 雨棚双坡顶板
    const canopyRoof = new THREE.Mesh(
      new THREE.BoxGeometry(numPillars * spacing + 1.2, 0.1, 2.2),
      roofMat
    );
    canopyRoof.position.set(0, 2.65, 0);
    canopyRoof.rotation.x = 0.05; // 微倾排水
    canopyRoof.castShadow = true;
    canopyRoof.receiveShadow = true;
    canopyGroup.add(canopyRoof);

    // 站台悬挂暖光灯泡
    for (let i = 0; i < 3; i++) {
      const x = -3.6 + i * 3.6;
      const lamp = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 8, 8),
        new THREE.MeshStandardMaterial({
          color: 0xffe6a3,
          emissive: 0xffcc44,
          emissiveIntensity: 0.5,
        })
      );
      lamp.position.set(x, 2.4, 0);
      canopyGroup.add(lamp);
      this.stationLamps.push(lamp);
    }

    this.group.add(canopyGroup);
  }

  /**
   * 站台细节道具（长椅、站名牌、时钟、行李箱）
   */
  private buildStationProps() {
    const propsGroup = new THREE.Group();

    // 1. 木质候车长椅
    const benchWoodMat = new THREE.MeshStandardMaterial({ color: 0x5a341e, roughness: 0.7 });
    const benchMetalMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });

    [-4.5, 4.5].forEach(bx => {
      const bench = new THREE.Group();
      bench.position.set(bx, 0.42, 17.6);
      
      const seat = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.45), benchWoodMat);
      seat.position.y = 0.28;
      bench.add(seat);

      const back = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.35, 0.06), benchWoodMat);
      back.position.set(0, 0.5, -0.2);
      bench.add(back);

      [-0.7, 0.7].forEach(lx => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.4), benchMetalMat);
        leg.position.set(lx, 0.14, 0);
        bench.add(leg);
      });

      bench.castShadow = true;
      propsGroup.add(bench);
    });

    // 2. 站名标牌 "OAKHAVEN"
    const signGroup = new THREE.Group();
    signGroup.position.set(9.0, 0.42, 18.2);

    const signPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    signPole.position.y = 0.9;
    signPole.castShadow = true;
    signGroup.add(signPole);

    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.65, 0.1),
      new THREE.MeshStandardMaterial({ color: 0xf5eedc, roughness: 0.4 })
    );
    signBoard.position.y = 1.6;
    signBoard.castShadow = true;
    signGroup.add(signBoard);

    // 标牌外框
    const signFrame = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.75, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x1f382b })
    );
    signFrame.position.y = 1.6;
    signGroup.add(signFrame);

    propsGroup.add(signGroup);

    // 3. 复古双面悬挂钟
    const clockGroup = new THREE.Group();
    clockGroup.position.set(1.5, 2.2, 18.2);
    const clockBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.16, 16),
      new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8 })
    );
    clockBody.rotation.z = Math.PI / 2;
    clockGroup.add(clockBody);
    propsGroup.add(clockGroup);

    // 4. 旅客旅行箱 (Luggage)
    const caseMat1 = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.6 });
    const caseMat2 = new THREE.MeshStandardMaterial({ color: 0x2f4f4f, roughness: 0.6 });

    const suitcase1 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.35, 0.45), caseMat1);
    suitcase1.position.set(-6.8, 0.6, 17.6);
    suitcase1.rotation.y = 0.15;
    propsGroup.add(suitcase1);

    const suitcase2 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.3, 0.38), caseMat2);
    suitcase2.position.set(-6.8, 0.9, 17.6);
    suitcase2.rotation.y = -0.2;
    propsGroup.add(suitcase2);

    this.group.add(propsGroup);
  }

  /**
   * 进出站发光信号机（红绿指示灯）
   */
  private buildSignalPost() {
    const signalGroup = new THREE.Group();
    // 设在车站出站端铁路旁 (X = 13.5, Z = 21.6)
    signalGroup.position.set(13.5, 0, 21.6);

    // 黑色铸铁灯杆
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.12, 3.2, 8),
      new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 })
    );
    pole.position.y = 1.6;
    pole.castShadow = true;
    signalGroup.add(pole);

    // 信号灯箱
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.9, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x111111 })
    );
    box.position.y = 2.7;
    box.castShadow = true;
    signalGroup.add(box);

    // 红色信号灯 (上)
    const redMat = new THREE.MeshStandardMaterial({
      color: 0x330000,
      emissive: 0xff1111,
      emissiveIntensity: 0.1, // 默认行车为绿灯，红灯暗
      roughness: 0.3,
    });
    this.signalLightRed = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      redMat
    );
    this.signalLightRed.position.set(0, 2.9, 0.18);
    signalGroup.add(this.signalLightRed);

    // 绿色信号灯 (下)
    const greenMat = new THREE.MeshStandardMaterial({
      color: 0x003300,
      emissive: 0x22ff33,
      emissiveIntensity: 1.2, // 默认行车亮绿灯
      roughness: 0.3,
    });
    this.signalLightGreen = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      greenMat
    );
    this.signalLightGreen.position.set(0, 2.5, 0.18);
    signalGroup.add(this.signalLightGreen);

    this.group.add(signalGroup);
  }

  /**
   * 设置信号机状态：进站停靠为红灯，正常行车为绿灯
   */
  public setSignalState(isStopped: boolean) {
    if (isStopped) {
      // 亮红灯，灭绿灯
      (this.signalLightRed.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.0;
      (this.signalLightRed.material as THREE.MeshStandardMaterial).color.setHex(0xff2222);

      (this.signalLightGreen.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.05;
      (this.signalLightGreen.material as THREE.MeshStandardMaterial).color.setHex(0x052205);
    } else {
      // 灭红灯，亮绿灯
      (this.signalLightRed.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.05;
      (this.signalLightRed.material as THREE.MeshStandardMaterial).color.setHex(0x220505);

      (this.signalLightGreen.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.0;
      (this.signalLightGreen.material as THREE.MeshStandardMaterial).color.setHex(0x22ff44);
    }
  }

  /**
   * 昼夜光照切换：夜间车站窗户与走廊灯暖黄发光
   */
  public setNightMode(isNight: boolean, isDusk: boolean = false) {
    const intensity = isNight ? 1.8 : (isDusk ? 0.4 : 0.0);
    const lampColor = isNight ? 0xffcc44 : (isDusk ? 0xffaa33 : 0x555555);

    this.windowMeshes.forEach(win => {
      const mat = win.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(0xffaa22);
      mat.emissiveIntensity = intensity;
    });

    this.stationLamps.forEach(lamp => {
      const mat = lamp.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(lampColor);
      mat.emissiveIntensity = isNight ? 2.2 : (isDusk ? 0.8 : 0.2);
    });
  }
}
