import * as THREE from 'three';
import { LOOP, RAIL } from '../core/config.js';

/**
 * 闭合铁路中线：CatmullRom 过控制点后按弧长等距重采样。
 * 列车、钢轨、枕木、桥梁都从这条中线取样，保证轨道连续闭合。
 */
export function buildPath(samples = 2600) {
  const curve = new THREE.CatmullRomCurve3(
    LOOP.map((p) => new THREE.Vector3(p[0], 0, p[1])),
    true,
    'centripetal',
    0.5
  );
  curve.arcLengthDivisions = 6000;
  const raw = curve.getSpacedPoints(samples);
  raw.pop(); // 闭合曲线末点与首点重合
  const pts = raw.map((p) => new THREE.Vector3(p.x, RAIL.y, p.z));
  const n = pts.length;
  const length = curve.getLength();
  const step = length / n;

  const wrap = (i) => ((i % n) + n) % n;
  const pos = new THREE.Vector3();

  function pointAt(s, out = new THREE.Vector3()) {
    const t = (((s % length) + length) % length) / step;
    const i = Math.floor(t);
    const f = t - i;
    const a = pts[wrap(i)];
    const b = pts[wrap(i + 1)];
    return out.lerpVectors(a, b, f);
  }

  const _t1 = new THREE.Vector3();
  const _t2 = new THREE.Vector3();
  function tangentAt(s) {
    pointAt(s - 0.85, _t1);
    pointAt(s + 0.85, _t2);
    return _t2.sub(_t1).normalize();
  }

  /** 返回 {p, t, n}：p=位置，t=切向，n=左法线（水平） */
  const _p = new THREE.Vector3();
  function frameAt(s) {
    const t = tangentAt(s);
    _p.copy(pointAt(s, pos));
    return { p: _p.clone(), t: t.clone(), n: new THREE.Vector3(-t.z, 0, t.x).normalize() };
  }

  /** 世界坐标 → 最近的弧长位置（用于把车站/道口对到轨道上） */
  function nearest(x, z) {
    let best = Infinity;
    let bi = 0;
    for (let i = 0; i < n; i++) {
      const dx = pts[i].x - x;
      const dz = pts[i].z - z;
      const d = dx * dx + dz * dz;
      if (d < best) {
        best = d;
        bi = i;
      }
    }
    return bi * step;
  }

  /** 沿弧长等距取一串 frame，可加横向偏移（钢轨用） */
  function frames(sFrom, sTo, spacing, lateral = 0) {
    const out = [];
    const count = Math.max(2, Math.round((sTo - sFrom) / spacing));
    for (let i = 0; i <= count; i++) {
      const s = sFrom + ((sTo - sFrom) * i) / count;
      const f = frameAt(s);
      if (lateral !== 0) f.p.addScaledVector(f.n, lateral);
      out.push(f);
    }
    return out;
  }

  return { pts, n, length, step, pointAt, tangentAt, frameAt, nearest, frames, wrap };
}
