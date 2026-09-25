import { PAL } from './palette.js';

/**
 * 体素中式屋顶：分层叠涩 + 飞檐翘角。
 *
 * 局部坐标：正脊沿 X 轴；axis='z' 时整体交换 x/z（用于配殿等纵长屋顶）。
 * - eaveY : 檐口最底层的 y
 * - hw/hd : 檐口半宽（含出檐）
 * - rise  : 叠涩层数；endX/endZ : 顶层内收量
 *   · 庑殿/歇山：endZ=hd → 顶层收成正脊，脊长由 endX 决定
 *   · 悬山：endX=0（山面不收进），配合 gableColor 形成山花三角
 *   · 攒尖：endX=endZ=hw=hd → 收成宝顶，配 finial
 *   · 重檐下檐/腰檐：endX/endZ 收到上层墙身尺寸即停（不出现正脊）
 * - p : 收进曲线指数（>1 → 檐缓脊陡的凹曲面）
 * - tipSteps : 翘角出挑级数
 */
export function addRoof(w, o) {
  const {
    cx, cz, eaveY, hw, hd, rise, endX, endZ,
    axis = 'x', p = 1.6,
    tile = PAL.tileTeal, tileDark = PAL.tileTealDark,
    tipSteps = 2,
    ridgeColor = null, ridgeH = 1,
    gableColor = null,
    finial = null,
  } = o;

  const put = axis === 'x'
    ? (x, y, z, c) => w.add(cx + x, y, cz + z, c)
    : (x, y, z, c) => w.add(cx + z, y, cz + x, c);

  for (let i = 0; i <= rise; i++) {
    const t = i / rise;
    const y = eaveY + i;
    const xh = hw - Math.round(endX * Math.pow(t, p));
    const zh = hd - Math.round(endZ * Math.pow(t, p));

    if (zh <= 0) {
      // 正脊与脊饰
      for (let x = -xh; x < xh; x++) {
        put(x, y, 0, ridgeColor ?? tileDark);
        if (ridgeColor) for (let d = 1; d <= ridgeH; d++) put(x, y + d, 0, ridgeColor);
      }
      if (ridgeColor) {
        for (const sx of [-1, 1]) { // 鸱吻
          put(sx * xh, y + 1, 0, tileDark);
          put(sx * xh, y + 2, 0, ridgeColor);
          put(sx * (xh + 1), y + 2, 0, tileDark);
        }
      }
      break;
    }

    for (let x = -xh; x < xh; x++) {
      for (let z = -zh; z < zh; z++) {
        let c = tile;
        if (i === 0 && (x === -hw || x === hw - 1 || z === -zh || z === zh - 1)) {
          c = tileDark; // 檐口瓦当
        } else if (gableColor && zh < hd && (x === -xh || x === xh - 1)) {
          c = gableColor; // 山面收进处的山花/博风
        }
        put(x, y, z, c);
      }
    }
  }

  // 飞檐翘角：四角沿 45° 出挑上翘
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      put(sx * hw, eaveY, sz * hd, tileDark);
      put(sx * hw, eaveY + 1, sz * hd, tile);
      for (let k = 1; k <= tipSteps; k++) {
        put(sx * (hw + k), eaveY + k, sz * (hd + k), (k & 1) ? tile : tileDark);
      }
      put(sx * (hw + tipSteps), eaveY + tipSteps + 1, sz * (hd + tipSteps), tileDark);
    }
  }

  // 宝顶（攒尖顶塔刹/宝顶）
  if (finial) {
    const fy = eaveY + rise;
    put(0, fy + 1, 0, finial.color);
    put(0, fy + 2, 0, finial.color);
    put(1, fy + 2, 0, finial.color); put(-1, fy + 2, 0, finial.color);
    put(0, fy + 2, 1, finial.color); put(0, fy + 2, -1, finial.color);
    put(0, fy + 3, 0, finial.tip ?? finial.color);
  }
}
