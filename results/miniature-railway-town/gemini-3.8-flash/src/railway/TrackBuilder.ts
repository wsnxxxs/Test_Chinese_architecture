import * as THREE from 'three';
import { TrackCurve } from './TrackCurve';

/**
 * 负责构建高质感手工沙盘微缩铁路轨道组件：
 * 1. 碎石道砟路基 (Gravel Ballast)
 * 2. 木质防腐枕木 (Wooden Sleepers, InstancedMesh)
 * 3. 连续双金属钢轨 (Parallel Steel Rails, TubeGeometry)
 * 4. 跨河铁路桥梁 (River Bridge with stone piers & steel arches/trusses)
 */
export class TrackBuilder {
  public group: THREE.Group;
  private trackCurve: TrackCurve;
  private gauge: number = 1.3; // 轨距 (左右两轨间距)

  constructor(trackCurve: TrackCurve) {
    this.trackCurve = trackCurve;
    this.group = new THREE.Group();
    this.group.name = 'RailwayTrack';

    this.buildBallast();
    this.buildSleepers();
    this.buildRails();
    this.buildBridge();
  }

  /**
   * 碎石道砟路基
   */
  private buildBallast() {
    // 路基整体材质：粗糙微颗粒暖灰色道砟
    const ballastMat = new THREE.MeshStandardMaterial({
      color: 0x6e6863,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true,
    });

    // 采用 TubeGeometry 结合厚实多边形作为路基
    const ballastTube = new THREE.TubeGeometry(
      this.trackCurve.curve,
      300,
      1.15,
      6,
      true
    );
    // 稍微在 Y 方向压缩成扁梯形
    ballastTube.scale(1, 0.22, 1);
    const ballastMesh = new THREE.Mesh(ballastTube, ballastMat);
    ballastMesh.position.y = 0.14;
    ballastMesh.receiveShadow = true;
    ballastMesh.castShadow = true;
    this.group.add(ballastMesh);
  }

  /**
   * 木质枕木：使用 InstancedMesh 批量渲染
   */
  private buildSleepers() {
    const sleeperSpacing = 0.7; // 枕木间距
    const totalLength = this.trackCurve.totalLength;
    const count = Math.floor(totalLength / sleeperSpacing);

    // 枕木尺寸：宽 0.38, 高 0.14, 长度 2.1 (横跨两轨)
    const sleeperGeom = new THREE.BoxGeometry(2.1, 0.14, 0.34);
    
    // 微缩深棕防腐木材质，略有手工打磨质感
    const sleeperMat = new THREE.MeshStandardMaterial({
      color: 0x4a3224, // 深胡桃木色
      roughness: 0.8,
      metalness: 0.1,
    });

    const instancedMesh = new THREE.InstancedMesh(sleeperGeom, sleeperMat, count);
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < count; i++) {
      const dist = i * sleeperSpacing;
      const u = this.trackCurve.distanceToU(dist);
      const pt = this.trackCurve.curve.getPointAt(u);
      const tangent = this.trackCurve.curve.getTangentAt(u).normalize();
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();

      dummy.position.copy(pt);
      dummy.position.y = 0.26; // 放置在道砟上方

      // 朝向：使枕木长边 (X轴) 对齐法向 normal, Z 轴对齐 tangent
      const rotMatrix = new THREE.Matrix4();
      rotMatrix.makeBasis(normal, up, tangent);
      dummy.setRotationFromMatrix(rotMatrix);

      // 略微添加 1~2% 的细微自然手工微扰动，增强模型真实手作感
      const angleJitter = ((i % 5) - 2) * 0.015;
      dummy.rotateY(angleJitter);

      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    this.group.add(instancedMesh);
  }

  /**
   * 双金属钢轨：分别构建左右连续钢轨
   */
  private buildRails() {
    const numPoints = 600;
    const leftPoints: THREE.Vector3[] = [];
    const rightPoints: THREE.Vector3[] = [];
    const up = new THREE.Vector3(0, 1, 0);
    const halfGauge = this.gauge / 2;
    const railHeight = 0.40;

    for (let i = 0; i < numPoints; i++) {
      const u = i / numPoints;
      const pt = this.trackCurve.curve.getPointAt(u);
      const tangent = this.trackCurve.curve.getTangentAt(u).normalize();
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const left = pt.clone().addScaledVector(normal, halfGauge);
      left.y = railHeight;
      leftPoints.push(left);

      const right = pt.clone().addScaledVector(normal, -halfGauge);
      right.y = railHeight;
      rightPoints.push(right);
    }

    const leftCurve = new THREE.CatmullRomCurve3(leftPoints, true, 'centripetal', 0.5);
    const rightCurve = new THREE.CatmullRomCurve3(rightPoints, true, 'centripetal', 0.5);

    // 钢轨截面管
    const railRadius = 0.065;
    const leftRailGeom = new THREE.TubeGeometry(leftCurve, 400, railRadius, 6, true);
    const rightRailGeom = new THREE.TubeGeometry(rightCurve, 400, railRadius, 6, true);

    // 精致金属钢轨材质：略有高光、微微冷光反射
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x98a3a8,
      metalness: 0.9,
      roughness: 0.28,
      envMapIntensity: 1.2,
    });

    const leftRailMesh = new THREE.Mesh(leftRailGeom, railMat);
    const rightRailMesh = new THREE.Mesh(rightRailGeom, railMat);

    leftRailMesh.castShadow = true;
    rightRailMesh.castShadow = true;
    leftRailMesh.receiveShadow = true;
    rightRailMesh.receiveShadow = true;

    this.group.add(leftRailMesh);
    this.group.add(rightRailMesh);
  }

  /**
   * 跨河铁路桥梁：高架石拱与红/深绿钢桁架桥身
   */
  private buildBridge() {
    const bridgeGroup = new THREE.Group();
    bridgeGroup.name = 'RailwayBridge';

    // 桥梁位于 X 轴约 30 ~ 36，Z 轴从 8 到 -15 区域，跨越河床 (水面 Y = -0.4, 河底 Y = -1.2)
    // 1. 坚固的桥台（Abutments）与石砌桥墩（Piers）
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x6e655f, // 石料浅棕灰
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true,
    });

    // 南侧桥台
    const southAbutment = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 2.2, 3.5),
      stoneMat
    );
    southAbutment.position.set(34.2, -0.6, 7.8);
    southAbutment.rotation.y = -0.15;
    southAbutment.castShadow = true;
    southAbutment.receiveShadow = true;
    bridgeGroup.add(southAbutment);

    // 北侧桥台
    const northAbutment = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 2.2, 3.5),
      stoneMat
    );
    northAbutment.position.set(32.8, -0.6, -14.5);
    northAbutment.rotation.y = 0.15;
    northAbutment.castShadow = true;
    northAbutment.receiveShadow = true;
    bridgeGroup.add(northAbutment);

    // 中央水中桥墩 (两个主桥墩扎入河床)
    const pierPositions = [
      { x: 35.5, z: 1.5, rot: -0.05 },
      { x: 34.6, z: -7.5, rot: 0.08 }
    ];

    pierPositions.forEach((pos) => {
      const pierGroup = new THREE.Group();
      // 底部尖角破冰石台（Cutwater Pier）
      const baseMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 2.0, 2.4, 6),
        stoneMat
      );
      baseMesh.position.set(0, -0.8, 0);
      baseMesh.scale.set(1.1, 1.0, 1.8);
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      pierGroup.add(baseMesh);

      // 上部主柱
      const columnMesh = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 1.8, 3.0),
        stoneMat
      );
      columnMesh.position.set(0, 0.4, 0);
      columnMesh.castShadow = true;
      columnMesh.receiveShadow = true;
      pierGroup.add(columnMesh);

      // 顶部石帽承台
      const capMesh = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 0.35, 3.4),
        stoneMat
      );
      capMesh.position.set(0, 1.3, 0);
      capMesh.castShadow = true;
      capMesh.receiveShadow = true;
      pierGroup.add(capMesh);

      pierGroup.position.set(pos.x, -0.8, pos.z);
      pierGroup.rotation.y = pos.rot;
      bridgeGroup.add(pierGroup);
    });

    // 2. 桥梁主体：深墨绿色经典钢桁架（Truss Structure）
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x224335, // 经典深墨绿铁桥漆
      metalness: 0.7,
      roughness: 0.35,
    });

    // 构建两段主桁架跨越桥孔
    const spanConfigs = [
      { p1: new THREE.Vector3(34.2, 0.3, 7.5), p2: new THREE.Vector3(35.5, 0.3, 1.5), length: 6.2 },
      { p1: new THREE.Vector3(35.5, 0.3, 1.5), p2: new THREE.Vector3(34.6, 0.3, -7.5), length: 9.1 },
      { p1: new THREE.Vector3(34.6, 0.3, -7.5), p2: new THREE.Vector3(32.8, 0.3, -14.5), length: 7.2 },
    ];

    spanConfigs.forEach(span => {
      const midPoint = new THREE.Vector3().addVectors(span.p1, span.p2).multiplyScalar(0.5);
      const dir = new THREE.Vector3().subVectors(span.p2, span.p1);
      const len = dir.length();
      const angle = Math.atan2(dir.x, dir.z);

      const spanGroup = new THREE.Group();
      spanGroup.position.copy(midPoint);
      spanGroup.rotation.y = angle;

      // 桥面底梁（工字梁底座）
      const deckBeam = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.45, len),
        steelMat
      );
      deckBeam.position.y = -0.12;
      deckBeam.castShadow = true;
      deckBeam.receiveShadow = true;
      spanGroup.add(deckBeam);

      // 两侧钢桁架网格（左右护墙桁架）
      const trussHeight = 2.0;
      const trussWidth = 2.4;

      [-trussWidth / 2, trussWidth / 2].forEach(xOffset => {
        // 上顶弦梁
        const topChord = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 0.18, len),
          steelMat
        );
        topChord.position.set(xOffset, trussHeight, 0);
        topChord.castShadow = true;
        spanGroup.add(topChord);

        // 竖向支柱与斜腹杆
        const numPanels = Math.max(3, Math.floor(len / 1.6));
        const panelLen = len / numPanels;
        for (let p = 0; p <= numPanels; p++) {
          const zPos = -len / 2 + p * panelLen;
          const post = new THREE.Mesh(
            new THREE.BoxGeometry(0.16, trussHeight, 0.16),
            steelMat
          );
          post.position.set(xOffset, trussHeight / 2, zPos);
          post.castShadow = true;
          spanGroup.add(post);

          // 交叉斜撑
          if (p < numPanels) {
            const diagLen = Math.sqrt(panelLen * panelLen + trussHeight * trussHeight);
            const diag = new THREE.Mesh(
              new THREE.BoxGeometry(0.12, diagLen, 0.12),
              steelMat
            );
            diag.position.set(xOffset, trussHeight / 2, zPos + panelLen / 2);
            diag.rotation.x = Math.atan2(panelLen, trussHeight);
            diag.castShadow = true;
            spanGroup.add(diag);
          }
        }
      });

      // 顶部横梁连接两侧桁架
      const numCrossBeams = 4;
      for (let c = 0; c <= numCrossBeams; c++) {
        const zPos = -len / 2 + (c / numCrossBeams) * len;
        const cross = new THREE.Mesh(
          new THREE.BoxGeometry(trussWidth, 0.14, 0.14),
          steelMat
        );
        cross.position.set(0, trussHeight, zPos);
        cross.castShadow = true;
        spanGroup.add(cross);
      }

      bridgeGroup.add(spanGroup);
    });

    this.group.add(bridgeGroup);
  }
}
