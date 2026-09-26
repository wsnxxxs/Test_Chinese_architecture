import * as THREE from 'three';

/**
 * 小镇建筑群构建器：
 * 包含四面钟楼市政厅、商业沿街店铺（咖啡馆、面包房、书店）、
 * 乡村斜顶小洋房、带花园的独栋别墅及河畔木屋。
 * 遵循整体规划，错落有致，窗户均支持夜间暖黄发光。
 */
export class Buildings {
  public group: THREE.Group;
  public windowMeshes: THREE.Mesh[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'TownBuildings';

    this.buildTownHall();
    this.buildCommercialStreet();
    this.buildResidentialCottages();
    this.buildRiversideHut();
  }

  /**
   * 辅助函数：创建支持夜晚发光的窗户
   */
  private createWindow(w: number, h: number, frameColor = 0xffffff): THREE.Group {
    const winGroup = new THREE.Group();

    // 窗玻璃面
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x1f2e3d,
      roughness: 0.25,
      metalness: 0.6,
      emissive: 0x000000,
      emissiveIntensity: 0.0,
    });
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glassMat);
    winGroup.add(glass);
    this.windowMeshes.push(glass);

    // 窗框
    const frameMat = new THREE.MeshStandardMaterial({ color: frameColor, roughness: 0.7 });
    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.12, h + 0.12, 0.08),
      frameMat
    );
    frame.position.z = -0.02;
    winGroup.add(frame);

    return winGroup;
  }

  /**
   * 1. 小镇中心地标：四面钟楼市政厅 (Town Hall & Clock Tower)
   * 位于小镇中央偏西 (X: -12, Z: 5)
   */
  private buildTownHall() {
    const hallGroup = new THREE.Group();
    hallGroup.position.set(-12, 0, 5);

    // 材质
    const stoneWallMat = new THREE.MeshStandardMaterial({
      color: 0xe5dcce, // 浅灰石灰岩
      roughness: 0.85,
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x2e4053, // 石板青灰顶
      roughness: 0.6,
    });
    const copperMat = new THREE.MeshStandardMaterial({
      color: 0x3d7e67, // 氧化铜绿铜顶
      roughness: 0.5,
      metalness: 0.4,
    });

    // 主楼基座与大厅 (两层)
    const mainBody = new THREE.Mesh(
      new THREE.BoxGeometry(9.0, 4.8, 6.5),
      stoneWallMat
    );
    mainBody.position.y = 2.4;
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    hallGroup.add(mainBody);

    // 主楼四坡顶
    const mainRoof = new THREE.Mesh(
      new THREE.ConeGeometry(5.8, 2.8, 4),
      roofMat
    );
    mainRoof.rotation.y = Math.PI / 4;
    mainRoof.scale.set(1.2, 1.0, 0.9);
    mainRoof.position.y = 6.2;
    mainRoof.castShadow = true;
    hallGroup.add(mainRoof);

    // 高耸钟楼 (Clock Tower) 矗立在主楼一侧
    const towerGroup = new THREE.Group();
    towerGroup.position.set(3.2, 0, 2.2);

    // 塔身第一段
    const towerLower = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 7.5, 3.0),
      stoneWallMat
    );
    towerLower.position.y = 3.75;
    towerLower.castShadow = true;
    towerGroup.add(towerLower);

    // 塔身高段钟室
    const towerUpper = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 2.5, 3.2),
      stoneWallMat
    );
    towerUpper.position.y = 8.75;
    towerUpper.castShadow = true;
    towerGroup.add(towerUpper);

    // 钟楼四面圆钟
    const clockMat = new THREE.MeshStandardMaterial({
      color: 0xfaf4e8,
      roughness: 0.3,
      emissive: 0x332211,
      emissiveIntensity: 0.2,
    });
    const clockRimMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8 });

    const clockFaces = [
      { pos: [0, 8.8, 1.62], rot: [0, 0, 0] },
      { pos: [0, 8.8, -1.62], rot: [0, Math.PI, 0] },
      { pos: [1.62, 8.8, 0], rot: [0, Math.PI / 2, 0] },
      { pos: [-1.62, 8.8, 0], rot: [0, -Math.PI / 2, 0] },
    ];

    clockFaces.forEach(cf => {
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.08, 16), clockRimMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.set(cf.pos[0], cf.pos[1], cf.pos[2]);
      rim.rotation.y = cf.rot[1];
      towerGroup.add(rim);

      const dial = new THREE.Mesh(new THREE.CircleGeometry(0.62, 16), clockMat);
      dial.position.set(cf.pos[0], cf.pos[1], cf.pos[2] + (cf.pos[2] > 0 ? 0.05 : (cf.pos[2] < 0 ? -0.05 : 0)));
      if (cf.pos[0] !== 0) dial.position.x = cf.pos[0] + (cf.pos[0] > 0 ? 0.05 : -0.05);
      dial.rotation.y = cf.rot[1];
      towerGroup.add(dial);
    });

    // 铜绿尖塔尖顶 (Pyramid Spire)
    const spire = new THREE.Mesh(
      new THREE.ConeGeometry(2.2, 4.5, 4),
      copperMat
    );
    spire.rotation.y = Math.PI / 4;
    spire.position.y = 12.25;
    spire.castShadow = true;
    towerGroup.add(spire);

    // 塔顶十字风向标
    const finial = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.2, 6),
      clockRimMat
    );
    finial.position.y = 15.0;
    towerGroup.add(finial);

    hallGroup.add(towerGroup);

    // 窗户布置
    [-2.6, 0.2].forEach(wx => {
      const win1 = this.createWindow(1.0, 1.5, 0x444444);
      win1.position.set(wx, 2.0, 3.27);
      hallGroup.add(win1);

      const win2 = this.createWindow(1.0, 1.5, 0x444444);
      win2.position.set(wx, 3.8, 3.27);
      hallGroup.add(win2);
    });

    // 市政大厅双开主拱门
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 2.5, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x3d2012, roughness: 0.6 })
    );
    door.position.set(-1.2, 1.25, 3.28);
    hallGroup.add(door);

    this.group.add(hallGroup);
  }

  /**
   * 2. 小镇商业街店铺（咖啡馆、面包店、书店）
   * 位于中央广场北侧 (Z: -2 ~ 6, X: -4 ~ 18)
   */
  private buildCommercialStreet() {
    const streetGroup = new THREE.Group();

    // 店铺A：温馨阳光咖啡馆 (Cafe & Terrace)
    const cafe = new THREE.Group();
    cafe.position.set(2, 0, 5);

    // 外墙（暖陶土白）
    const cafeWallMat = new THREE.MeshStandardMaterial({ color: 0xf0e3d0, roughness: 0.75 });
    const cafeBody = new THREE.Mesh(new THREE.BoxGeometry(6.4, 4.2, 5.2), cafeWallMat);
    cafeBody.position.y = 2.1;
    cafeBody.castShadow = true;
    cafeBody.receiveShadow = true;
    cafe.add(cafeBody);

    // 屋顶（勃艮第红法式双坡）
    const cafeRoofMat = new THREE.MeshStandardMaterial({ color: 0x873128, roughness: 0.65 });
    const cafeRoof = new THREE.Mesh(new THREE.ConeGeometry(4.4, 2.2, 4), cafeRoofMat);
    cafeRoof.rotation.y = Math.PI / 4;
    cafeRoof.scale.set(1.2, 1.0, 1.0);
    cafeRoof.position.y = 5.3;
    cafeRoof.castShadow = true;
    cafe.add(cafeRoof);

    // 咖啡馆前红白条纹折叠遮阳蓬 (Striped Awning)
    const awningMat = new THREE.MeshStandardMaterial({
      color: 0xad2d22, // 红色遮阳蓬
      roughness: 0.7,
    });
    const awning = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 0.15, 1.6),
      awningMat
    );
    awning.position.set(0, 2.7, 3.2);
    awning.rotation.x = 0.25;
    awning.castShadow = true;
    cafe.add(awning);

    // 遮阳蓬下落地大玻璃与咖啡店门
    const cafeWin1 = this.createWindow(1.6, 1.8, 0x3d2012);
    cafeWin1.position.set(-1.4, 1.4, 2.62);
    cafe.add(cafeWin1);

    const cafeWin2 = this.createWindow(1.6, 1.8, 0x3d2012);
    cafeWin2.position.set(1.4, 1.4, 2.62);
    cafe.add(cafeWin2);

    // 户外露天咖啡小圆桌与小椅
    const outdoorTableMat = new THREE.MeshStandardMaterial({ color: 0x223322, metalness: 0.5 });
    for (let ox of [-1.5, 1.5]) {
      const table = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.6, 12), outdoorTableMat);
      table.position.set(ox, 0.3, 4.6);
      table.castShadow = true;
      cafe.add(table);

      const chair = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.4, 8), outdoorTableMat);
      chair.position.set(ox + 0.6, 0.2, 4.6);
      chair.castShadow = true;
      cafe.add(chair);
    }
    streetGroup.add(cafe);

    // 店铺B：香气扑鼻的面包坊 (Bakery)
    const bakery = new THREE.Group();
    bakery.position.set(11, 0, 5);

    const bakeryMat = new THREE.MeshStandardMaterial({ color: 0xd8c2a7, roughness: 0.8 });
    const bakeryBody = new THREE.Mesh(new THREE.BoxGeometry(5.6, 3.8, 5.0), bakeryMat);
    bakeryBody.position.y = 1.9;
    bakeryBody.castShadow = true;
    bakeryBody.receiveShadow = true;
    bakery.add(bakeryBody);

    // 深橄榄绿斜屋顶
    const bakeryRoofMat = new THREE.MeshStandardMaterial({ color: 0x354f38, roughness: 0.7 });
    const bakeryRoof = new THREE.Mesh(new THREE.ConeGeometry(3.8, 2.0, 4), bakeryRoofMat);
    bakeryRoof.rotation.y = Math.PI / 4;
    bakeryRoof.scale.set(1.2, 1.0, 1.0);
    bakeryRoof.position.y = 4.8;
    bakeryRoof.castShadow = true;
    bakery.add(bakeryRoof);

    // 面包店小木招牌
    const signboard = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.45, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x4a2a14 })
    );
    signboard.position.set(0, 3.2, 2.6);
    bakery.add(signboard);

    // 面包店橱窗与窗户
    const bWin = this.createWindow(1.8, 1.6, 0xffffff);
    bWin.position.set(1.0, 1.3, 2.52);
    bakery.add(bWin);

    const bDoor = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.0, 0.15), new THREE.MeshStandardMaterial({ color: 0x3d2314 }));
    bDoor.position.set(-1.3, 1.0, 2.52);
    bakery.add(bDoor);

    streetGroup.add(bakery);

    // 店铺C：复古旧书店与杂货铺 (Bookstore & Apothecary)
    const bookstore = new THREE.Group();
    bookstore.position.set(18, 0, 5);

    const bookWallMat = new THREE.MeshStandardMaterial({ color: 0x7c493c, roughness: 0.75 }); // 雅致红棕砖
    const bookBody = new THREE.Mesh(new THREE.BoxGeometry(5.2, 4.0, 5.0), bookWallMat);
    bookBody.position.y = 2.0;
    bookBody.castShadow = true;
    bookBody.receiveShadow = true;
    bookstore.add(bookBody);

    const bookRoofMat = new THREE.MeshStandardMaterial({ color: 0x273746, roughness: 0.7 });
    const bookRoof = new THREE.Mesh(new THREE.ConeGeometry(3.6, 2.2, 4), bookRoofMat);
    bookRoof.rotation.y = Math.PI / 4;
    bookRoof.position.y = 5.1;
    bookRoof.castShadow = true;
    bookstore.add(bookRoof);

    // 弧形凸窗 (Bay Window)
    const bayWin = this.createWindow(1.8, 1.5, 0x1f382b);
    bayWin.position.set(0, 1.5, 2.52);
    bookstore.add(bayWin);

    streetGroup.add(bookstore);

    this.group.add(streetGroup);
  }

  /**
   * 3. 乡村住宅区（斜顶洋房、山脚花园木屋、双层排屋）
   * 位于小镇中北部与东北部 (Z: -6 ~ -20, X: -10 ~ 18)
   */
  private buildResidentialCottages() {
    const resGroup = new THREE.Group();

    // 别墅1：阿尔卑斯双坡大木屋 (Chalet Villa 1)
    const chalet1 = new THREE.Group();
    chalet1.position.set(4, 0, -8);

    // 木屋底座为石砌，上层为木架构
    const chaletStone = new THREE.Mesh(
      new THREE.BoxGeometry(7.0, 1.6, 5.6),
      new THREE.MeshStandardMaterial({ color: 0x736d65, roughness: 0.9 })
    );
    chaletStone.position.y = 0.8;
    chaletStone.castShadow = true;
    chalet1.add(chaletStone);

    const chaletWood = new THREE.Mesh(
      new THREE.BoxGeometry(6.6, 2.6, 5.2),
      new THREE.MeshStandardMaterial({ color: 0x8b5a36, roughness: 0.75 }) // 原木暖棕
    );
    chaletWood.position.y = 2.9;
    chaletWood.castShadow = true;
    chalet1.add(chaletWood);

    // 大出檐三角坡顶
    const chaletRoof = new THREE.Mesh(
      new THREE.ConeGeometry(4.8, 2.4, 4),
      new THREE.MeshStandardMaterial({ color: 0x4d3319, roughness: 0.8 })
    );
    chaletRoof.rotation.y = Math.PI / 4;
    chaletRoof.scale.set(1.2, 1.0, 0.9);
    chaletRoof.position.y = 5.4;
    chaletRoof.castShadow = true;
    chalet1.add(chaletRoof);

    // 木质阳台回廊
    const balcony = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 0.6, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x3d2012, roughness: 0.8 })
    );
    balcony.position.set(0, 2.8, 2.8);
    balcony.castShadow = true;
    chalet1.add(balcony);

    // 窗户与烟囱
    const chWin1 = this.createWindow(1.0, 1.2, 0xffffff);
    chWin1.position.set(-1.6, 3.2, 2.62);
    chalet1.add(chWin1);

    const chWin2 = this.createWindow(1.0, 1.2, 0xffffff);
    chWin2.position.set(1.6, 3.2, 2.62);
    chalet1.add(chWin2);

    const chimney1 = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 2.0, 0.7),
      new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.8 })
    );
    chimney1.position.set(2.0, 5.8, -0.8);
    chimney1.castShadow = true;
    chalet1.add(chimney1);

    resGroup.add(chalet1);

    // 别墅2：山脚白色灰泥独栋洋房 (White Stucco Cottage)
    const cottage2 = new THREE.Group();
    cottage2.position.set(-6, 0, -10);

    const cot2Body = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 3.4, 4.8),
      new THREE.MeshStandardMaterial({ color: 0xeee7dc, roughness: 0.8 })
    );
    cot2Body.position.y = 1.7;
    cot2Body.castShadow = true;
    cottage2.add(cot2Body);

    const cot2Roof = new THREE.Mesh(
      new THREE.ConeGeometry(3.8, 2.0, 4),
      new THREE.MeshStandardMaterial({ color: 0x934234, roughness: 0.65 }) // 红瓦屋顶
    );
    cot2Roof.rotation.y = Math.PI / 4;
    cot2Roof.position.y = 4.4;
    cot2Roof.castShadow = true;
    cottage2.add(cot2Roof);

    const c2Win = this.createWindow(1.1, 1.2, 0x222222);
    c2Win.position.set(0, 1.8, 2.42);
    cottage2.add(c2Win);

    // 房前小木栅栏花园 (Picket Fence)
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.7 });
    for (let fx = -2.8; fx <= 2.8; fx += 0.8) {
      const picket = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 0.04), fenceMat);
      picket.position.set(fx, 0.32, 3.8);
      cottage2.add(picket);
    }
    const fenceRail = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.06, 0.04), fenceMat);
    fenceRail.position.set(0, 0.45, 3.8);
    cottage2.add(fenceRail);

    resGroup.add(cottage2);

    // 别墅3：东北部田园住宅 (Northeast Farm Cottage)
    const cottage3 = new THREE.Group();
    cottage3.position.set(15, 0, -12);

    const cot3Body = new THREE.Mesh(
      new THREE.BoxGeometry(5.0, 3.2, 4.2),
      new THREE.MeshStandardMaterial({ color: 0xe8dbce, roughness: 0.85 })
    );
    cot3Body.position.y = 1.6;
    cot3Body.castShadow = true;
    cottage3.add(cot3Body);

    const cot3Roof = new THREE.Mesh(
      new THREE.ConeGeometry(3.5, 2.0, 4),
      new THREE.MeshStandardMaterial({ color: 0x415b76, roughness: 0.7 }) // 蓝灰顶
    );
    cot3Roof.rotation.y = Math.PI / 4;
    cot3Roof.position.y = 4.2;
    cot3Roof.castShadow = true;
    cottage3.add(cot3Roof);

    const c3Win = this.createWindow(1.0, 1.1, 0xffffff);
    c3Win.position.set(0, 1.7, 2.12);
    cottage3.add(c3Win);

    resGroup.add(cottage3);

    this.group.add(resGroup);
  }

  /**
   * 4. 河畔小木屋（Fisherman's Hut）
   * 位于河岸边 (X: 25, Z: 10)
   */
  private buildRiversideHut() {
    const hut = new THREE.Group();
    hut.position.set(24.5, 0, 11);
    hut.rotation.y = -0.3;

    const hutMat = new THREE.MeshStandardMaterial({ color: 0x543825, roughness: 0.85 });
    const hutBody = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.4, 3.0), hutMat);
    hutBody.position.y = 1.2;
    hutBody.castShadow = true;
    hut.add(hutBody);

    const hutRoof = new THREE.Mesh(
      new THREE.ConeGeometry(2.6, 1.6, 4),
      new THREE.MeshStandardMaterial({ color: 0x3d434d, roughness: 0.7 })
    );
    hutRoof.rotation.y = Math.PI / 4;
    hutRoof.position.y = 3.2;
    hutRoof.castShadow = true;
    hut.add(hutRoof);

    const hutWin = this.createWindow(0.8, 0.8, 0xffffff);
    hutWin.position.set(0, 1.4, 1.52);
    hut.add(hutWin);

    this.group.add(hut);
  }

  /**
   * 昼夜光照切换：夜间所有建筑窗户亮起温馨暖黄灯火
   */
  public setNightMode(isNight: boolean, isDusk: boolean = false) {
    const intensity = isNight ? 2.0 : (isDusk ? 0.5 : 0.0);
    this.windowMeshes.forEach(win => {
      const mat = win.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(0xffb338); // 暖琥珀色窗灯
      mat.emissiveIntensity = intensity;
    });
  }
}
