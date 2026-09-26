/**
 * 闭合折线轨道曲线：沿弧长匀速参数化（getPoint(t) 即按弧长均匀取点），
 * 供列车运动、钢轨扫掠、道砟分段共用。
 */
import * as THREE from 'three';

export class PolylineLoop extends THREE.Curve {
  /** pts2d: [[x, z], ...] 闭合折线（首尾不重复） */
  constructor(pts2d) {
    super();
    this.isPolylineLoop = true;
    const n = pts2d.length;
    this.n = n;
    this.xs = new Float64Array(n);
    this.zs = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      this.xs[i] = pts2d[i][0];
      this.zs[i] = pts2d[i][1];
    }
    this.cum = new Float64Array(n + 1);
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      this.cum[i + 1] = this.cum[i] + Math.hypot(this.xs[j] - this.xs[i], this.zs[j] - this.zs[i]);
    }
    this.totalLength = this.cum[n];
  }

  /** 返回索引 i 段（i → i+1，末段回到 0）上的归一化弧长区间 */
  locate(t) {
    const d = THREE.MathUtils.clamp(t, 0, 1) * this.totalLength;
    // 二分查找
    let lo = 0;
    let hi = this.n - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (this.cum[mid] <= d) lo = mid;
      else hi = mid - 1;
    }
    const i = lo;
    const j = (i + 1) % this.n;
    const segLen = this.cum[i + 1] - this.cum[i];
    const f = segLen > 1e-9 ? (d - this.cum[i]) / segLen : 0;
    return { i, j, f };
  }

  getPoint(t, target = new THREE.Vector3()) {
    const { i, j, f } = this.locate(t);
    return target.set(
      this.xs[i] + (this.xs[j] - this.xs[i]) * f,
      0,
      this.zs[i] + (this.zs[j] - this.zs[i]) * f
    );
  }

  getTangent(t, target = new THREE.Vector3()) {
    const { i, j } = this.locate(t);
    const dx = this.xs[j] - this.xs[i];
    const dz = this.zs[j] - this.zs[i];
    const l = Math.hypot(dx, dz) || 1;
    return target.set(dx / l, 0, dz / l);
  }

  /** 世界坐标 s（弧长）→ t */
  sToT(s) {
    return THREE.MathUtils.euclideanModulo(s, this.totalLength) / this.totalLength;
  }

  /** 采样为 [[x, z], ...]（含首点闭合，用于扫掠几何） */
  sample(count, closeRepeat = true) {
    const out = [];
    const steps = closeRepeat ? count : count - 1;
    for (let k = 0; k < steps; k++) {
      const p = this.getPoint(k / count);
      out.push([p.x, p.z]);
    }
    return out;
  }

  /** 指定世界坐标处的弧长（取最近采样点） */
  distanceAtPoint(x, z, samples = 2000) {
    let best = Infinity;
    let bestS = 0;
    for (let k = 0; k < samples; k++) {
      const t = k / samples;
      const p = this.getPoint(t);
      const d = Math.hypot(p.x - x, p.z - z);
      if (d < best) {
        best = d;
        bestS = t * this.totalLength;
      }
    }
    return { s: bestS, distance: best };
  }
}
