import { C } from './colors.js';
import { put } from './decor.js';

/**
 * 中式体素屋顶。
 * 局部坐标：a 沿正脊方向（ridgeAxis），b 沿落水方向（坡向）。
 * 坡面由逐层收分的台阶式板层堆叠而成（体素举折），
 * 檐口四角以嵌套 L 形台阶起翘（翼角），角脊顺角点逐层上升。
 * map 统一为 (a0, a1, b0, b1, y0, y1, col) —— y 为绝对上下界。
 *
 * style: 'hip' 庑殿 | 'hipGable' 歇山 | 'pyramid' 攒尖
 */

const K = 3; // 起翘台阶级数

/** 角部起翘：(a0,b0) 为内角、朝 (sa,sb) 为尖角的矩形格，按 max(p,q) 分 L 形带抬高 */
function steppedCorner(map, a0, b0, sa, sb, sizeA, sizeB, y0, y1, lift, col) {
  for (let j = 0; j < K; j++) {
    const s0 = j / K, s1 = (j + 1) / K;
    const dy = Math.round(lift * (j / (K - 1)));
    map(a0, a0 + sa * (s1 * sizeA), b0 + sb * (s0 * sizeB), b0 + sb * (s1 * sizeB), y0, y1 + dy, col);
    if (s0 > 1e-4) {
      map(a0 + sa * (s0 * sizeA), a0 + sa * (s1 * sizeA), b0, b0 + sb * (s0 * sizeB), y0, y1 + dy, col);
    }
  }
}

/** 实心板层（带四角起翘） */
function slabLayer(map, a, b, y0, y1, lift, c, col) {
  if (lift <= 0.05) {
    map(-a, a, -b, b, y0, y1, col);
    return;
  }
  const cc = Math.min(c, a * 0.5, b * 0.5);
  map(-a + cc, a - cc, -b, b, y0, y1, col);
  for (const sa of [1, -1]) {
    map(sa * (a - cc), sa * a, -b + cc, b - cc, y0, y1, col);
    for (const sb of [1, -1]) {
      steppedCorner(map, sa * (a - cc), sb * (b - cc), sa, sb, cc, cc, y0, y1, lift, col);
    }
  }
}

/** 环形板层（重檐下檐）：外轮廓 (a,b)，内孔 (ai,bi) */
function ringLayer(map, ai, bi, a, b, y0, y1, lift, c, col) {
  for (const sb of [1, -1]) {
    map(-a + c, a - c, sb * bi, sb * b, y0, y1, col);
    for (const sa of [1, -1]) {
      if (lift > 0.05) steppedCorner(map, sa * (a - c), sb * bi, sa, sb, c, b - bi, y0, y1, lift, col);
      else map(sa * (a - c), sa * a, sb * bi, sb * b, y0, y1, col);
    }
  }
  for (const sa of [1, -1]) map(sa * ai, sa * a, -bi, bi, y0, y1, col);
}

/** 正脊端部鸱吻：向内上翻的方块钩 */
function chiwen(map, aEnd, sa, y, col) {
  map(aEnd - sa * 0.1, aEnd + sa * 1.9, -1.05, 1.05, y, y + 2.1, col);
  map(aEnd - sa * 0.8, aEnd + sa * 1.3, -0.95, 0.95, y + 2.0, y + 3.4, col);
  map(aEnd - sa * 1.8, aEnd + sa * 0.4, -0.85, 0.85, y + 3.3, y + 4.5, col);
  map(aEnd - sa * 2.3, aEnd - sa * 1.2, -0.7, 0.7, y + 4.4, y + 5.1, col);
}

/** 攒尖宝顶 / 宝塔相轮 */
export function finial(map, y, col, scale = 1) {
  const r = (n) => n * scale;
  map(-r(1.5), r(1.5), -r(1.5), r(1.5), y, y + r(1.1), col);
  map(-r(1.05), r(1.05), -r(1.05), r(1.05), y + r(1.1), y + r(2.3), col);
  map(-r(0.6), r(0.6), -r(0.6), r(0.6), y + r(2.3), y + r(3.9), col);
  map(-r(0.22), r(0.22), -r(0.22), r(0.22), y + r(3.9), y + r(5.4), col);
}

export function roof(S, o) {
  const {
    cx = 0, cz = 0, y = 0,
    w, d, overhang = 3, rise = 8,
    style = 'hip', ridgeAxis = 'x',
    hipRun = 6, gableFrac = 0.45,
    tile = C.tileGold, tileDk = C.tileGoldDk,
    ridgeC = C.ridgeGold, orn = C.ornament, gableFace = C.tealDk,
    cornerLift = 2, layersLift = 2, c = 5,
    trim = true, dots = false, beasts = false, chi = true, fin = true,
  } = o;

  const A = ((ridgeAxis === 'x' ? w : d) / 2) + overhang;
  const B = ((ridgeAxis === 'z' ? w : d) / 2) + overhang;
  const n = Math.max(4, Math.round(rise));
  const sh = rise / n;

  // (a0, a1, b0, b1, y0, y1, col) -> 世界盒
  // a 沿正脊：ridgeAxis 'x' 时 a→x / b→z；ridgeAxis 'z' 时 a→z / b→x
  const map = (a0, a1, b0, b1, y0, y1, col) =>
    ridgeAxis === 'x'
      ? put(S.tile, 'x', cx + a0, cx + a1, cz + b0, cz + b1, y0, y1, col)
      : put(S.tile, 'z', cz + a0, cz + a1, cx + b0, cx + b1, y0, y1, col);

  const n1 = Math.round(n * gableFrac);
  const ag = A - hipRun;
  const aOf = (i) => {
    if (style === 'pyramid') return A * (1 - i / n);
    if (style === 'hipGable') return i < n1 ? A - hipRun * (i / n1) : ag;
    return A - hipRun * (i / n);
  };
  const bOf = (i) => {
    if (style === 'pyramid') return B * (1 - i / n) + 0.4;
    return B - (B - 0.9) * (i / n);
  };

  // —— 坡面板层 ——
  for (let i = 0; i < n; i++) {
    const a = aOf(i), b = bOf(i);
    const y0 = y + i * sh, y1 = y + (i + 1) * sh;
    const lift = i < layersLift ? cornerLift * (1 - i / layersLift) : 0;
    slabLayer(map, a, b, y0, y1, lift, c, tile);

    // 歇山山花板（上部两端）
    if (style === 'hipGable' && i >= n1) {
      for (const sa of [1, -1]) {
        map(sa * ag, sa * (ag + 0.3), -b, b, y0, y1, gableFace);
        map(sa * (ag + 0.2), sa * (ag + 0.42), -0.42, 0.42, y0 + sh * 0.3, y0 + sh * 0.78, orn);
      }
    }
  }

  // —— 角脊 / 博风（顺各层角点连线） ——
  for (let i = 0; i < n; i++) {
    const a = aOf(i), b = bOf(i);
    const yTop = y + (i + 1) * sh;
    const lift = i < layersLift ? cornerLift * (1 - i / layersLift) : 0;
    const dy = Math.round(lift);
    for (const sa of [1, -1]) {
      for (const sb of [1, -1]) {
        map(sa * (a - 0.3), sa * (a + 1.05), sb * (b - 0.3), sb * (b + 1.05), yTop + dy, yTop + dy + 1.05, ridgeC);
        if (beasts && (i === 0 || i === 1)) {
          const off = i === 0 ? 1.6 : 1.1;
          map(
            sa * (a - off), sa * (a - off + 0.8),
            sb * (b - off), sb * (b - off + 0.8),
            yTop + dy + 1.0, yTop + dy + 1.8, i === 0 ? orn : C.tileGreen
          );
        }
      }
    }
  }

  // —— 正脊 / 宝顶 ——
  const yTop = y + n * sh;
  if (style !== 'pyramid') {
    const ar = aOf(n);
    map(-ar, ar, -0.85, 0.85, yTop, yTop + 1.5, ridgeC);
    map(-ar, ar, -1.0, 1.0, yTop + 1.5, yTop + 1.85, orn);
    if (chi) {
      chiwen(map, ar, 1, yTop, orn);
      chiwen(map, -ar, -1, yTop, orn);
    }
  } else if (fin) {
    finial(map, yTop - 0.2, orn, 1.0);
  }

  // —— 檐口封檐板 + 瓦当 ——
  if (trim) {
    const cc = Math.min(c, A * 0.5, B * 0.5);
    for (const sb of [1, -1]) {
      map(-A + cc, A - cc, sb * B, sb * (B + 0.34), y - 0.02, y + 0.58, tileDk);
      if (dots) {
        const m = Math.max(2, Math.round((2 * (A - cc)) / 2.6));
        for (let i = 0; i <= m; i++) {
          const uu = -A + cc + (2 * (A - cc)) * (i / m);
          map(uu - 0.28, uu + 0.28, sb * (B + 0.2), sb * (B + 0.5), y + 0.08, y + 0.5, orn);
        }
      }
    }
    for (const sa of [1, -1]) {
      map(sa * A, sa * (A + 0.34), -B + cc, B - cc, y - 0.02, y + 0.58, tileDk);
    }
  }
}

/** 重檐下檐（环绕上层墙体的挑檐裙板） */
export function eaveSkirt(S, o) {
  const {
    cx = 0, cz = 0, y = 0,
    wOut, dOut, wIn, dIn,
    ridgeAxis = 'x', layers = 3, sh = 1.05,
    tile = C.tileGold, tileDk = C.tileGoldDk, trimC = C.tealDk,
    cornerLift = 2, c = 5, dots = false,
  } = o;

  const Ao = ((ridgeAxis === 'x' ? wOut : dOut) / 2);
  const Bo = ((ridgeAxis === 'z' ? wOut : dOut) / 2);
  const Ai = ((ridgeAxis === 'x' ? wIn : dIn) / 2);
  const Bi = ((ridgeAxis === 'z' ? wIn : dIn) / 2);

  const map = (a0, a1, b0, b1, y0, y1, col) =>
    ridgeAxis === 'x'
      ? put(S.tile, 'x', cx + a0, cx + a1, cz + b0, cz + b1, y0, y1, col)
      : put(S.tile, 'z', cz + a0, cz + a1, cx + b0, cx + b1, y0, y1, col);

  for (let i = 0; i < layers; i++) {
    const a = Ao - i * 0.7;
    const b = Bo - i * 1.1;
    const y0 = y + i * sh, y1 = y + (i + 1) * sh;
    const lift = i < 2 ? cornerLift * (1 - i / 2) : 0;
    ringLayer(map, Ai, Bi, a, b, y0, y1, lift, c, i === layers - 1 ? tileDk : tile);
  }

  // 封檐板 + 瓦当
  const cc = Math.min(c, Ao * 0.5, Bo * 0.5);
  for (const sb of [1, -1]) {
    map(-Ao + cc, Ao - cc, sb * Bo, sb * (Bo + 0.32), y - 0.02, y + 0.5, trimC);
    if (dots) {
      const m = Math.max(2, Math.round((2 * (Ao - cc)) / 2.5));
      for (let i = 0; i <= m; i++) {
        const uu = -Ao + cc + (2 * (Ao - cc)) * (i / m);
        map(uu - 0.26, uu + 0.26, sb * (Bo + 0.18), sb * (Bo + 0.46), y + 0.06, y + 0.44, C.gold);
      }
    }
  }
  for (const sa of [1, -1]) map(sa * Ao, sa * (Ao + 0.32), -Bo + cc, Bo - cc, y - 0.02, y + 0.5, trimC);
}
