import * as THREE from 'three';
import { TrackCurve } from './TrackCurve';

/**
 * 微缩复古蒸汽列车：
 * 包含 1 节蒸汽机车车头 + 2 节经典客车车厢。
 * 每节车体独立沿轨道曲线进行空间弧长采样与双点前瞻定向（lookAt / makeBasis），
 * 无论直线还是弯道，均能完美保持铰接车间距和精确转向，绝非刚体旋转！
 */
export class Train {
  public group: THREE.Group;
  public trackCurve: TrackCurve;

  // 三节车体独立组
  public engineGroup: THREE.Group;
  public carriage1Group: THREE.Group;
  public carriage2Group: THREE.Group;

  // 车轮集合，用于行进自转动画
  private wheels: THREE.Mesh[] = [];

  // 车头前照灯与聚光灯
  public headlightMesh!: THREE.Mesh;
  public headlightSpot!: THREE.SpotLight;
  public carriageWindows: THREE.Mesh[] = [];

  // 车间物理间距偏移量 (按轨道曲线弧长计算)
  public readonly offsetEngine: number = 0.0;
  public readonly offsetCarriage1: number = 5.0;
  public readonly offsetCarriage2: number = 9.8;

  constructor(trackCurve: TrackCurve) {
    this.trackCurve = trackCurve;
    this.group = new THREE.Group();
    this.group.name = 'MiniatureTrain';

    this.engineGroup = this.buildLocomotive();
    this.carriage1Group = this.buildCarriage(0x8b251e, 'Carriage1'); // 阿尔卑斯勃艮第红
    this.carriage2Group = this.buildCarriage(0x1e3a5f, 'Carriage2'); // 经典深普鲁士蓝

    this.group.add(this.engineGroup);
    this.group.add(this.carriage1Group);
    this.group.add(this.carriage2Group);

    // 初始姿态放置在起点
    this.updatePosition(0);
  }

  /**
   * 1. 精细手工微缩蒸汽机车车头 (Locomotive)
   */
  private buildLocomotive(): THREE.Group {
    const locomotive = new THREE.Group();
    locomotive.name = 'LocomotiveEngine';

    // 材质定义
    const boilerMat = new THREE.MeshStandardMaterial({
      color: 0x1d362a, // 经典英伦墨绿车身
      roughness: 0.35,
      metalness: 0.4,
    });
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f1f, // 黑色重铁底盘
      roughness: 0.7,
      metalness: 0.8,
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // 黄铜抛光饰条与钟笛
      roughness: 0.25,
      metalness: 0.9,
    });
    const cabRoofMat = new THREE.MeshStandardMaterial({
      color: 0x15251d,
      roughness: 0.5,
    });

    // 黑色底盘大梁 (Chassis frame)
    const chassis = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.3, 4.4),
      chassisMat
    );
    chassis.position.y = 0.42;
    chassis.castShadow = true;
    locomotive.add(chassis);

    // 经典红色前保险杠排障器 (Cowcatcher / Pilot)
    const pilotMat = new THREE.MeshStandardMaterial({ color: 0x992222, roughness: 0.5 });
    const pilot = new THREE.Mesh(
      new THREE.ConeGeometry(0.8, 0.7, 3),
      pilotMat
    );
    pilot.rotation.x = Math.PI / 2;
    pilot.rotation.y = Math.PI;
    pilot.scale.set(1.5, 0.5, 0.7);
    pilot.position.set(0, 0.3, 2.3);
    locomotive.add(pilot);

    // 蒸汽锅炉圆筒 (Cylindrical Boiler)
    const boiler = new THREE.Mesh(
      new THREE.CylinderGeometry(0.68, 0.68, 2.7, 16),
      boilerMat
    );
    boiler.rotation.x = Math.PI / 2;
    boiler.position.set(0, 1.25, 0.65);
    boiler.castShadow = true;
    locomotive.add(boiler);

    // 锅炉前烟箱盖 (Smokebox door)
    const smokebox = new THREE.Mesh(
      new THREE.SphereGeometry(0.68, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      chassisMat
    );
    smokebox.rotation.x = -Math.PI / 2;
    smokebox.position.set(0, 1.25, 2.0);
    smokebox.castShadow = true;
    locomotive.add(smokebox);

    // 锅炉黄铜捆扎箍圈 (Brass Boiler Bands)
    [-0.3, 0.5, 1.3].forEach(bz => {
      const band = new THREE.Mesh(
        new THREE.TorusGeometry(0.69, 0.03, 8, 24),
        brassMat
      );
      band.position.set(0, 1.25, bz);
      locomotive.add(band);
    });

    // 烟囱 (Chimney / Smokestack)
    const stack = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.18, 0.9, 12),
      chassisMat
    );
    stack.position.set(0, 2.15, 1.7);
    stack.castShadow = true;
    locomotive.add(stack);
    // 烟囱铜边口
    const stackRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.24, 0.04, 8, 16),
      brassMat
    );
    stackRim.rotation.x = Math.PI / 2;
    stackRim.position.set(0, 2.6, 1.7);
    locomotive.add(stackRim);

    // 蒸汽圆顶沙包 (Steam Dome)
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 12, 12),
      brassMat
    );
    dome.position.set(0, 1.95, 0.6);
    dome.scale.set(1, 1.3, 1);
    locomotive.add(dome);

    // 驾驶室 (Driver's Cab)
    const cab = new THREE.Mesh(
      new THREE.BoxGeometry(1.68, 1.5, 1.5),
      boilerMat
    );
    cab.position.set(0, 1.35, -1.2);
    cab.castShadow = true;
    locomotive.add(cab);

    // 驾驶室弧形顶盖 (Cab Roof)
    const cabRoof = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.9, 1.7, 16, 1, false, 0, Math.PI),
      cabRoofMat
    );
    cabRoof.rotation.z = Math.PI / 2;
    cabRoof.rotation.x = Math.PI / 2;
    cabRoof.position.set(0, 2.1, -1.2);
    cabRoof.castShadow = true;
    locomotive.add(cabRoof);

    // 驾驶室侧窗
    const cabWinMat = new THREE.MeshStandardMaterial({
      color: 0x99ccff,
      roughness: 0.1,
      metalness: 0.8,
    });
    [-0.86, 0.86].forEach(wx => {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.5, 0.6), cabWinMat);
      win.position.set(wx, 1.5, -1.2);
      locomotive.add(win);
    });

    // 煤水舱 (Coal Tender / Bunker on engine rear)
    const coalBunker = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.7, 0.6),
      chassisMat
    );
    coalBunker.position.set(0, 0.8, -1.9);
    locomotive.add(coalBunker);
    // 仿真细碎煤炭堆
    const coal = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.35, 1),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
    );
    coal.position.set(0, 1.15, -1.9);
    coal.scale.set(1.6, 0.6, 1.0);
    locomotive.add(coal);

    // 动轮与联动连杆 (Driving Wheels & Side Rods)
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x8b1e1e, // 经典深红机车轮
      roughness: 0.4,
      metalness: 0.6,
    });
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.9,
      roughness: 0.2,
    });

    const wheelZPositions = [0.8, -0.2, -1.2]; // 3对主轮
    wheelZPositions.forEach(wz => {
      [-0.8, 0.8].forEach(wx => {
        const wheel = new THREE.Mesh(
          new THREE.CylinderGeometry(0.42, 0.42, 0.12, 16),
          wheelMat
        );
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(wx, 0.42, wz);
        wheel.castShadow = true;
        locomotive.add(wheel);
        this.wheels.push(wheel);
      });
    });

    // 侧边联动杆
    [-0.88, 0.88].forEach(rx => {
      const rod = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.08, 2.1),
        rodMat
      );
      rod.position.set(rx, 0.32, -0.2);
      locomotive.add(rod);
    });

    // 车头前照大灯 (Vintage Headlight)
    const lampHousing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.2, 0.4, 12),
      brassMat
    );
    lampHousing.rotation.x = Math.PI / 2;
    lampHousing.position.set(0, 1.5, 2.15);
    locomotive.add(lampHousing);

    // 发光透镜
    this.headlightMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({
        color: 0xfff0aa,
        emissive: 0xffd24d,
        emissiveIntensity: 1.5,
        roughness: 0.1,
      })
    );
    this.headlightMesh.rotation.x = -Math.PI / 2;
    this.headlightMesh.position.set(0, 1.5, 2.35);
    locomotive.add(this.headlightMesh);

    // 车头向前照射的聚光灯
    this.headlightSpot = new THREE.SpotLight(0xffe484, 3.0, 24, Math.PI / 6, 0.4, 1.2);
    this.headlightSpot.position.set(0, 1.5, 2.4);
    // 目标点设在前方
    const spotTarget = new THREE.Object3D();
    spotTarget.position.set(0, 0.4, 12);
    locomotive.add(spotTarget);
    this.headlightSpot.target = spotTarget;
    locomotive.add(this.headlightSpot);

    return locomotive;
  }

  /**
   * 2. 精致客运车厢 (Passenger Carriage)
   */
  private buildCarriage(bodyColor: number, name: string): THREE.Group {
    const carriage = new THREE.Group();
    carriage.name = name;

    const carriageLen = 3.9;
    const carriageWidth = 1.48;
    const carriageHeight = 1.6;

    // 材质
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.4,
      metalness: 0.2,
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0xc8ced6, // 银灰车顶
      roughness: 0.35,
      metalness: 0.5,
    });
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f1f,
      roughness: 0.8,
    });
    const creamStripeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f0d8, // 象牙白腰线
      roughness: 0.4,
    });

    // 黑色底盘
    const chassis = new THREE.Mesh(
      new THREE.BoxGeometry(carriageWidth, 0.22, carriageLen + 0.3),
      chassisMat
    );
    chassis.position.y = 0.42;
    chassis.castShadow = true;
    carriage.add(chassis);

    // 车身主体
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(carriageWidth, carriageHeight, carriageLen),
      bodyMat
    );
    body.position.y = 1.35;
    body.castShadow = true;
    carriage.add(body);

    // 车身象牙白装饰横条纹
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(carriageWidth + 0.04, 0.14, carriageLen + 0.02),
      creamStripeMat
    );
    stripe.position.y = 1.15;
    carriage.add(stripe);

    // 优雅弧形车顶
    const roof = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.85, carriageLen + 0.15, 16, 1, false, 0, Math.PI),
      roofMat
    );
    roof.rotation.z = Math.PI / 2;
    roof.rotation.x = Math.PI / 2;
    roof.position.set(0, 2.15, 0);
    roof.castShadow = true;
    carriage.add(roof);

    // 两侧通透客车窗户 (支持夜间发光)
    const winMat = new THREE.MeshStandardMaterial({
      color: 0x223344,
      roughness: 0.2,
      metalness: 0.7,
      emissive: 0x000000,
      emissiveIntensity: 0.0,
    });

    const windowZPositions = [-1.3, -0.65, 0.0, 0.65, 1.3];
    [-carriageWidth / 2 - 0.02, carriageWidth / 2 + 0.02].forEach(wx => {
      windowZPositions.forEach(wz => {
        const win = new THREE.Mesh(
          new THREE.PlaneGeometry(0.48, 0.55),
          winMat.clone()
        );
        win.position.set(wx, 1.48, wz);
        win.rotation.y = wx > 0 ? Math.PI / 2 : -Math.PI / 2;
        carriage.add(win);
        this.carriageWindows.push(win);

        // 窗框
        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(0.04, 0.62, 0.56),
          creamStripeMat
        );
        frame.position.set(wx, 1.48, wz);
        carriage.add(frame);
      });
    });

    // 前后风琴风挡与连接挂钩 (Coupler & Gangway)
    [-carriageLen / 2 - 0.1, carriageLen / 2 + 0.1].forEach(cz => {
      const coupler = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 1.2, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
      );
      coupler.position.set(0, 1.3, cz);
      carriage.add(coupler);

      const hook = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.15, 0.35),
        chassisMat
      );
      hook.position.set(0, 0.42, cz + (cz > 0 ? 0.15 : -0.15));
      carriage.add(hook);
    });

    // 前后两组双轴转向架 (Bogies)
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x2b2b2b,
      roughness: 0.5,
      metalness: 0.8,
    });

    [-1.2, 1.2].forEach(bogeyZ => {
      [-0.4, 0.4].forEach(axleZ => {
        [-0.75, 0.75].forEach(wx => {
          const wheel = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 0.1, 14),
            wheelMat
          );
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(wx, 0.3, bogeyZ + axleZ);
          wheel.castShadow = true;
          carriage.add(wheel);
          this.wheels.push(wheel);
        });
      });
    });

    return carriage;
  }

  /**
   * 沿轨道精确更新每节车厢的位置与空间旋转姿态
   * 使用双点采样法（前后间距 0.8 采样）精确对齐切线与车体航向，转弯时绝不失真！
   */
  public updatePosition(traveledDistance: number) {
    const up = new THREE.Vector3(0, 1, 0);

    const updateCar = (car: THREE.Group, distOffset: number, halfLength: number) => {
      const centerDist = traveledDistance - distOffset;
      const frontDist = centerDist + halfLength;
      const backDist = centerDist - halfLength;

      const pCenter = this.trackCurve.getPointAtDistance(centerDist);
      const pFront = this.trackCurve.getPointAtDistance(frontDist);
      const pBack = this.trackCurve.getPointAtDistance(backDist);

      // 计算车体在铁轨上方的精确高度
      car.position.copy(pCenter);

      // 计算指向车头的切向向量 Dir
      const dir = new THREE.Vector3().subVectors(pFront, pBack).normalize();
      // 侧向向量
      const normal = new THREE.Vector3().crossVectors(dir, up).normalize();

      // 构建正交旋转矩阵
      const rotMatrix = new THREE.Matrix4();
      rotMatrix.makeBasis(normal, up, dir);
      car.setRotationFromMatrix(rotMatrix);
    };

    // 分别更新车头、第一车厢、第二车厢
    updateCar(this.engineGroup, this.offsetEngine, 1.8);
    updateCar(this.carriage1Group, this.offsetCarriage1, 1.6);
    updateCar(this.carriage2Group, this.offsetCarriage2, 1.6);
  }

  /**
   * 车轮滚动自转动画
   */
  public rotateWheels(speed: number, delta: number) {
    const rotDelta = (speed * delta) / 0.4;
    this.wheels.forEach(w => {
      w.rotation.x += rotDelta;
    });
  }

  /**
   * 昼夜光照切换：夜间模式车厢窗户透出温馨暖黄光、前大灯明亮照明
   */
  public setNightMode(isNight: boolean, isDusk: boolean = false) {
    const winIntensity = isNight ? 1.8 : (isDusk ? 0.5 : 0.0);
    this.carriageWindows.forEach(win => {
      const mat = win.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(0xffaa2b); // 暖琥珀色车厢灯
      mat.emissiveIntensity = winIntensity;
    });

    if (this.headlightMesh) {
      (this.headlightMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = isNight ? 3.0 : (isDusk ? 1.5 : 0.4);
    }

    if (this.headlightSpot) {
      this.headlightSpot.intensity = isNight ? 4.5 : (isDusk ? 2.5 : 0.8);
    }
  }
}
