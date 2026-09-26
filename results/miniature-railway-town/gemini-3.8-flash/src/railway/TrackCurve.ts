import * as THREE from 'three';

/**
 * 闭合铁路曲线定义与几何辅助类
 * 设计为一个充满韵律的微缩铁道回路：
 * - 南侧直线平稳段：火车站停靠区
 * - 东侧向北回环段：跨越河流的高架桥梁区
 * - 东北与北侧景观段：穿梭在后山与乡村之间
 * - 西北侧回环段：穿入并穿出石砌山地隧道
 * - 西南侧弯道段：自然减速并对准车站直线
 */
export class TrackCurve {
  public curve: THREE.CatmullRomCurve3;
  public totalLength: number;
  
  // 关键控制点里程（0 ~ 1 范围）
  public stationStopU: number = 0; // 车站停靠中心点
  public bridgeStartU: number = 0;
  public bridgeEndU: number = 0;
  public tunnelStartU: number = 0;
  public tunnelEndU: number = 0;

  constructor() {
    // 精心调节的 13 个平滑控制点，高度 Y 统一为 0.35（保证轨道平坦，过桥和隧道平顺）
    const trackY = 0.38;
    const points = [
      new THREE.Vector3(-14, trackY, 20),   // 0: 车站进站端
      new THREE.Vector3(0, trackY, 20),     // 1: 车站停靠正中心
      new THREE.Vector3(14, trackY, 20),    // 2: 车站出站端
      new THREE.Vector3(26, trackY, 17),    // 3: 转向河谷
      new THREE.Vector3(34, trackY, 8),     // 4: 接近桥南岸
      new THREE.Vector3(35, trackY, -4),    // 5: 跨河大铁桥中心
      new THREE.Vector3(32, trackY, -16),   // 6: 桥北岸引道
      new THREE.Vector3(18, trackY, -24),   // 7: 北部乡村景观道
      new THREE.Vector3(0, trackY, -26),    // 8: 北部最高景观弯
      new THREE.Vector3(-18, trackY, -24),  // 9: 接近隧道入口
      new THREE.Vector3(-32, trackY, -14),  // 10: 穿入山丘隧道口
      new THREE.Vector3(-38, trackY, 2),    // 11: 隧道内部深处转弯
      new THREE.Vector3(-32, trackY, 17),   // 12: 冲出隧道南出口
      new THREE.Vector3(-24, trackY, 20),   // 13: 进站前弯道
    ];

    this.curve = new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
    this.totalLength = this.curve.getLength();

    // 寻找车站中心点 (0, trackY, 20) 的最接近 u
    this.stationStopU = this.findClosestU(new THREE.Vector3(0, trackY, 20));
    this.bridgeStartU = this.findClosestU(new THREE.Vector3(34, trackY, 8));
    this.bridgeEndU = this.findClosestU(new THREE.Vector3(32, trackY, -16));
    this.tunnelStartU = this.findClosestU(new THREE.Vector3(-30, trackY, -16));
    this.tunnelEndU = this.findClosestU(new THREE.Vector3(-30, trackY, 17));
  }

  private findClosestU(target: THREE.Vector3, samples = 1000): number {
    let closestU = 0;
    let minDist = Infinity;
    for (let i = 0; i <= samples; i++) {
      const u = i / samples;
      const pt = this.curve.getPointAt(u);
      const d = pt.distanceTo(target);
      if (d < minDist) {
        minDist = d;
        closestU = u;
      }
    }
    return closestU;
  }

  /**
   * 将沿轨道的距离转换为 0~1 的 u 参数（自动循环）
   */
  public distanceToU(distance: number): number {
    let normalizedDist = distance % this.totalLength;
    if (normalizedDist < 0) normalizedDist += this.totalLength;
    return normalizedDist / this.totalLength;
  }

  /**
   * 获取距离对应的世界坐标
   */
  public getPointAtDistance(distance: number): THREE.Vector3 {
    const u = this.distanceToU(distance);
    return this.curve.getPointAt(u);
  }

  /**
   * 获取距离对应的轨道正切向量
   */
  public getTangentAtDistance(distance: number): THREE.Vector3 {
    const u = this.distanceToU(distance);
    return this.curve.getTangentAt(u).normalize();
  }
}
