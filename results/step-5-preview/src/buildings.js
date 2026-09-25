import { C } from './palette.js';

// ============================================================
//  基础构件
// ============================================================

// 平面环带（额枋/压檐/台沿用）：外轮廓 w×d，带宽 t
export function ringXZ(b, cx, cz, w, d, y, h, t, color, opt) {
  b.boxCentered(cx, cz - d / 2 + t / 2, w, t, y, h, color, opt);
  b.boxCentered(cx, cz + d / 2 - t / 2, w, t, y, h, color, opt);
  b.boxCentered(cx - w / 2 + t / 2, cz, t, d - 2 * t, y, h, color, opt);
  b.boxCentered(cx + w / 2 - t / 2, cz, t, d - 2 * t, y, h, color, opt);
}

// 台基（含栏杆）
export function platform(b, cx, cz, w, d, h, opt = {}) {
  b.boxCentered(cx, cz, w + 1.0, d + 1.0, 0, 0.5, C.darkStone);
  b.boxCentered(cx, cz, w, d, 0.5, h - 1.0, opt.color ?? C.grayStone);
  b.boxCentered(cx, cz, w + 0.3, d + 0.3, h - 0.5, 0.5, C.darkStone);
  b.boxCentered(cx, cz, w - 0.3, d - 0.3, h, 0.4, opt.cap ?? C.whiteStone);
  if (opt.railing !== false) railing(b, cx, cz, w - 0.7, d - 0.7, h + 0.4, opt.gaps ?? {});
}

// 栏杆：gaps = { pz, nz, px, nx } 各边中部的开口宽度
export function railing(b, cx, cz, w, d, y, gaps = {}) {
  const h = 1.15, post = C.whiteStone, rail = C.grayStone;
  ringXZ(b, cx, cz, w, d, y + h - 0.22, 0.22, 0.34, post);
  ringXZ(b, cx, cz, w, d, y + 0.32, 0.18, 0.28, rail);
  const step = 2.0, ps = 0.42, hw = w / 2, hd = d / 2;
  const put = (px, pz) => b.boxCentered(px, pz, ps, ps, y, h - 0.3, post);
  for (let x = -hw; x <= hw + 0.01; x += step) {
    const g = (gaps.pz ?? 0) / 2;
    if (!gaps.pz || Math.abs(x) > g) put(cx + x, cz + hd);
    const gb = (gaps.nz ?? 0) / 2;
    if (!gaps.nz || Math.abs(x) > gb) put(cx + x, cz - hd);
  }
  for (let z = -hd; z <= hd + 0.01; z += step) {
    const gl = (gaps.px ?? 0) / 2;
    if (!gaps.px || Math.abs(z) > gl) put(cx + hw, cz + z);
    const gr = (gaps.nx ?? 0) / 2;
    if (!gaps.nx || Math.abs(z) > gr) put(cx - hw, cz + z);
  }
}

// 台阶：(ex,ez) 为台缘上踏步中点，(dx,dz) 为朝外的单位方向
export function steps2(b, ex, ez, dx, dz, width, topY, opt = {}) {
  const n = opt.steps ?? Math.max(2, Math.round(topY / 0.6));
  const rise = topY / n, run = opt.run ?? 0.6;
  const sx = dx !== 0 ? run : width;
  const sz = dz !== 0 ? run : width;
  const perpX = dz, perpZ = -dx; // 踏步横向
  for (let i = 0; i < n; i++) {
    const hs = topY - i * rise;
    const px = ex + dx * (0.3 + i * run), pz = ez + dz * (0.3 + i * run);
    b.boxCentered(px, pz, sx, sz, 0, hs, C.whiteStone);
    for (const s of [-1, 1]) { // 垂带石
      b.boxCentered(
        px + perpX * s * (width / 2 + 0.28),
        pz + perpZ * s * (width / 2 + 0.28),
        dx !== 0 ? run + 0.2 : 0.5,
        dz !== 0 ? run + 0.2 : 0.5,
        0, hs, C.grayStone,
      );
    }
  }
}

// 立柱（含柱础）
export function column(b, x, z, y0, h, opt = {}) {
  const s = opt.size ?? 0.95;
  b.boxCentered(x, z, s + 0.3, s + 0.3, y0, 0.35, C.darkStone);
  b.boxCentered(x, z, s, s, y0 + 0.35, h - 0.35, opt.color ?? C.column);
}

// 红墙（下碱 + 墙身 + 上枋）
export function wallPanel(b, cx, cz, w, d, y0, h, opt = {}) {
  b.boxCentered(cx, cz, w, d, y0, 0.8, C.grayStone);
  b.boxCentered(cx, cz, w - 0.15, d - 0.15, y0 + 0.8, h - 1.5, opt.color ?? C.redWall);
  b.boxCentered(cx, cz, w + 0.25, d + 0.25, y0 + h - 0.7, 0.7, opt.cap ?? C.woodDark);
}

// 以 (cx,cz) 为面心、(nx,nz) 为外法线的隔扇门
export function doorPanel(b, cx, cz, nx, nz, w, h, y0) {
  const aX = nz, aZ = -nx;
  const px = cx + nx * 0.24, pz = cz + nz * 0.24;
  const put = (a, y, hh, along, thick, color) => {
    const bx = px + aX * a, bz = pz + aZ * a;
    if (aX !== 0) b.boxCentered(bx, bz, along, thick, y, hh, color);
    else b.boxCentered(bx, bz, thick, along, y, hh, color);
  };
  const t = 0.35, dep = 0.5, lowerH = h * 0.55;
  put(-w / 4 - 0.05, y0, lowerH, w / 2 - 0.1, dep, C.redDeep); // 裙板
  put(w / 4 + 0.05, y0, lowerH, w / 2 - 0.1, dep, C.redDeep);
  for (const s of [-1, 1]) // 门钉
    for (let i = 0; i < 3; i++)
      put(s * w / 4, y0 + 0.6 + i * ((lowerH - 1.0) / 2), 0.22, 0.22, 0.1, C.goldTrim);
  const upY = y0 + lowerH, upH = h - lowerH; // 格心
  put(0, upY, upH, w - 0.3, 0.32, C.woodDark);
  const cols = Math.max(2, Math.round(w / 1.1));
  for (let i = 1; i < cols; i++) put(-w / 2 + (w / cols) * i, upY + 0.15, upH - 0.3, 0.12, 0.12, C.goldTrim);
  for (let i = 1; i <= 2; i++) put(0, upY + (upH / 3) * i - 0.06, 0.12, w - 0.3, 0.12, C.goldTrim);
  put(-w / 2 - t / 2, y0, h, t, dep, C.woodDark); // 边框
  put(w / 2 + t / 2, y0, h, t, dep, C.woodDark);
  put(0, y0 + h - t, t, w + 2 * t, dep, C.woodDark);
  put(0, y0, t, w + 2 * t, dep, C.woodDark);
}

// 支摘窗（棂条格心）
export function latticeWindow(b, cx, cz, nx, nz, w, h, y0) {
  const aX = nz, aZ = -nx;
  const px = cx + nx * 0.2, pz = cz + nz * 0.2;
  const put = (a, y, hh, along, thick, color) => {
    const bx = px + aX * a, bz = pz + aZ * a;
    if (aX !== 0) b.boxCentered(bx, bz, along, thick, y, hh, color);
    else b.boxCentered(bx, bz, thick, along, y, hh, color);
  };
  const t = 0.32;
  put(0, y0, 0.4, w + 0.6, 0.5, C.grayStone); // 窗台
  put(0, y0 + 0.4, h - 0.4, w, 0.35, C.woodDark);
  const cols = Math.max(2, Math.round(w / 0.9));
  for (let i = 1; i < cols; i++) put(-w / 2 + (w / cols) * i, y0 + 0.55, h - 0.75, 0.1, 0.13, C.goldTrim);
  const rows = Math.max(1, Math.round((h - 0.75) / 1.1));
  for (let i = 1; i <= rows; i++)
    put(0, y0 + 0.55 + ((h - 0.75) / (rows + 1)) * i - 0.06, 0.12, w, 0.13, C.goldTrim);
  put(-w / 2 - t / 2, y0, h + 0.25, t, 0.55, C.woodDark);
  put(w / 2 + t / 2, y0, h + 0.25, t, 0.55, C.woodDark);
  put(0, y0 + h - 0.05, 0.3, w + 2 * t, 0.55, C.woodDark);
}

// 匾额
export function plaque(b, cx, cz, nx, nz, w, h, y0) {
  const aX = nz, aZ = -nx;
  const px = cx + nx * 0.14, pz = cz + nz * 0.14;
  const put = (a, y, hh, along, thick, color) => {
    const bx = px + aX * a, bz = pz + aZ * a;
    if (aX !== 0) b.boxCentered(bx, bz, along, thick, y, hh, color);
    else b.boxCentered(bx, bz, thick, along, y, hh, color);
  };
  put(0, y0, h, w, 0.3, C.woodDark);
  put(0, y0 + h - 0.16, 0.16, w, 0.36, C.goldTrim);
  put(0, y0, 0.16, w, 0.36, C.goldTrim);
  for (const s of [-1, 1]) put(s * (w / 2 - 0.1), y0, h, 0.2, 0.36, C.goldTrim);
  const chars = Math.max(2, Math.round(w / 1.4));
  for (let i = 0; i < chars; i++)
    put((i - (chars - 1) / 2) * (w / chars), y0 + 0.32, h - 0.64, 0.5, 0.14, C.goldTrim);
}

// ============================================================
//  屋顶体系
// ============================================================

// 飞檐翘角：四角逐块向外上方挑出
function flyingCorner(b, x, z, sx, sz, y, tile, tip) {
  const steps = [[0.45, 0.15, 1.35], [1.15, 0.75, 1.15], [1.85, 1.45, 0.95], [2.5, 2.2, 0.7]];
  steps.forEach(([dx, dy, s], i) => {
    b.boxCentered(x + sx * dx, z + sz * dx, s, s, y + dy, s * 0.85, i === 3 ? tip : tile);
  });
  b.boxCentered(x + sx * 2.5, z + sz * 2.5, 0.24, 0.24, y + 1.55, 0.4, tip); // 铃
}

function flyingCorners(b, cx, cz, w, d, yTop, tile) {
  for (const sx of [-1, 1]) for (const sz of [-1, 1])
    flyingCorner(b, cx + sx * w / 2, cz + sz * d / 2, sx, sz, yTop, tile, C.goldTrim);
}

// 正脊装饰（沿 x 向脊线）
function ridgeOrnamentsX(b, cx, cz, ridgeW, y) {
  for (let x = -ridgeW / 2 + 1.2; x < ridgeW / 2 - 0.8; x += 3)
    b.boxCentered(cx + x, cz, 0.5, 0.5, y, 0.55, C.goldTrim);
  for (const s of [-1, 1]) { // 吻兽
    b.boxCentered(cx + s * (ridgeW / 2 - 0.3), cz, 1.1, 1.1, y, 1.3, C.goldTrim);
    b.boxCentered(cx + s * (ridgeW / 2 - 0.3), cz, 0.5, 0.5, y + 1.3, 0.6, C.goldTrim);
  }
}

// 正脊装饰（沿 z 向脊线）
function ridgeOrnamentsZ(b, cx, cz, ridgeD, y) {
  for (let z = -ridgeD / 2 + 1.2; z < ridgeD / 2 - 0.8; z += 3)
    b.boxCentered(cx, cz + z, 0.5, 0.5, y, 0.55, C.goldTrim);
  for (const s of [-1, 1]) {
    b.boxCentered(cx, cz + s * (ridgeD / 2 - 0.3), 1.1, 1.1, y, 1.3, C.goldTrim);
    b.boxCentered(cx, cz + s * (ridgeD / 2 - 0.3), 0.5, 0.5, y + 1.3, 0.6, C.goldTrim);
  }
}

// 庑殿顶（脊沿 x 向）
export function hipRoof(b, cx, cz, w, d, y, opt = {}) {
  const tile = opt.tile ?? C.goldTile;
  const layers = opt.layers ?? 6, layerH = opt.layerH ?? 1.3, eaveH = opt.eaveH ?? 1.5;
  const ridgeW = opt.ridgeW ?? Math.max(3, w * 0.36), ridgeD = opt.ridgeD ?? 2.2;
  b.boxCentered(cx, cz, w, d, y, eaveH, tile);
  for (let i = 1; i <= layers; i++) {
    const t = i / layers;
    const cw = w + (ridgeW - w) * t;
    const cd = d + (ridgeD - d) * Math.min(1, t * 1.35);
    b.boxCentered(cx, cz, cw, cd, y + eaveH + (i - 1) * layerH, layerH, tile);
  }
  const topY = y + eaveH + layers * layerH;
  b.boxCentered(cx, cz, ridgeW, ridgeD, topY, 0.7, tile); // 正脊
  if (opt.ornaments !== false) ridgeOrnamentsX(b, cx, cz, ridgeW, topY + 0.7);
  flyingCorners(b, cx, cz, w, d, y + eaveH, tile);
}

// 歇山顶：下部四面坡 + 上部山花
export function xieshanRoof(b, cx, cz, w, d, y, opt = {}) {
  const tile = opt.tile ?? C.greenTile;
  const eaveH = opt.eaveH ?? 1.3, layerH = opt.layerH ?? 1.2;
  const hipN = opt.hipLayers ?? 3, gabN = opt.gableLayers ?? 3;
  const ix = opt.insetX ?? 1.0, iz = opt.insetZ ?? 1.15;
  const axis = opt.ridgeAxis ?? 'x'; // 屋脊沿哪个轴
  b.boxCentered(cx, cz, w, d, y, eaveH, tile);

  let cw = w, cd = d, ly = y + eaveH;
  for (let i = 0; i < hipN; i++) {
    cw -= 2 * ix; cd -= 2 * iz; ly += layerH;
    b.boxCentered(cx, cz, cw, cd, ly, layerH, tile);
  }
  if (axis === 'x') {
    let pd = cd;
    for (let i = 0; i < gabN; i++) {
      const lyi = ly + i * layerH;
      b.boxCentered(cx, cz, cw, pd, lyi, layerH, tile);
      for (const s of [-1, 1]) { // 山花 + 博风金边
        b.boxCentered(cx + s * (cw / 2 - 0.25), cz, 0.5, pd, lyi, layerH, C.wood);
        b.boxCentered(cx + s * (cw / 2 - 0.25), cz, 0.55, pd + 0.25, lyi + layerH - 0.16, 0.16, C.goldTrim);
      }
      pd -= 2 * iz;
    }
    const topY = ly + gabN * layerH;
    b.boxCentered(cx, cz, cw, 2.0, topY, 0.7, tile);
    if (opt.ornaments !== false) ridgeOrnamentsX(b, cx, cz, cw, topY + 0.7);
  } else {
    let pw = cw;
    for (let i = 0; i < gabN; i++) {
      const lyi = ly + i * layerH;
      b.boxCentered(cx, cz, pw, cd, lyi, layerH, tile);
      for (const s of [-1, 1]) {
        b.boxCentered(cx, cz + s * (cd / 2 - 0.25), pw, 0.5, lyi, layerH, C.wood);
        b.boxCentered(cx, cz + s * (cd / 2 - 0.25), pw + 0.25, 0.55, lyi + layerH - 0.16, 0.16, C.goldTrim);
      }
      pw -= 2 * ix;
    }
    const topY = ly + gabN * layerH;
    b.boxCentered(cx, cz, 2.0, cd, topY, 0.7, tile);
    if (opt.ornaments !== false) ridgeOrnamentsZ(b, cx, cz, cd, topY + 0.7);
  }
  flyingCorners(b, cx, cz, w, d, y + eaveH, tile);
}

// 攒尖顶（方亭/塔）
export function pyramidRoof(b, cx, cz, w, d, y, opt = {}) {
  const tile = opt.tile ?? C.greenTile;
  const layers = opt.layers ?? 5, layerH = opt.layerH ?? 1.1, eaveH = opt.eaveH ?? 1.2;
  b.boxCentered(cx, cz, w, d, y, eaveH, tile);
  let cw = w, cd = d;
  for (let i = 1; i <= layers; i++) {
    const t = i / layers;
    cw = w + (1.2 - w) * t;
    cd = d + (1.2 - d) * t;
    b.boxCentered(cx, cz, cw, cd, y + eaveH + (i - 1) * layerH, layerH, tile);
  }
  const topY = y + eaveH + layers * layerH;
  b.boxCentered(cx, cz, 1.1, 1.1, topY, 0.5, C.goldTrim); // 宝顶
  b.boxCentered(cx, cz, 0.6, 0.6, topY + 0.5, 0.5, C.goldTrim);
  b.boxCentered(cx, cz, 0.28, 0.28, topY + 1.0, 0.5, C.goldTrim);
  flyingCorners(b, cx, cz, w, d, y + eaveH, tile);
}

// 额枋 + 斗拱环带（置于柱/wall 顶端，y 为枋底）
export function eaveStructure(b, cx, cz, w, d, y, opt = {}) {
  const t = opt.thickness ?? 0.9, color = opt.color ?? C.beamGreen;
  ringXZ(b, cx, cz, w, d, y, t, 1.0, color);
  ringXZ(b, cx, cz, w - 0.15, d - 0.15, y + t, 0.26, 0.32, C.goldTrim);
  const by = y + t + 0.26, spacing = opt.spacing ?? 2.3, bh = 1.15;
  const hw = w / 2, hd = d / 2;
  const bracket = (px, pz, alongX, alongZ, i) => {
    const along = alongX !== 0;
    const put = (a, y0, h, al, th, color) => {
      const bx = px + alongX * a, bz = pz + alongZ * a;
      if (along) b.boxCentered(bx, bz, al, th, y0, h, color);
      else b.boxCentered(bx, bz, th, al, y0, h, color);
    };
    put(0, by, 0.55, 1.0, 0.9, C.wood); // 斗
    put(0, by + 0.55, 0.3, 1.5, 1.1, i % 2 ? color : C.goldTrim); // 拱
    put(0, by + 0.85, 0.3, 0.8, 0.7, C.wood);
  };
  const edges = [
    [cx - hw, cz + hd, 1, 0], [cx - hw, cz - hd, 1, 0],
    [cx - hw, cz - hd, 0, 1], [cx + hw, cz - hd, 0, 1],
  ];
  edges.forEach(([ex, ez, ax, az], ei) => {
    const len = ax !== 0 ? w : d;
    const n = Math.max(1, Math.round(len / spacing));
    for (let i = 0; i <= n; i++) {
      const a = (i / n - 0.5) * len;
      bracket(ex + ax * a, ez + az * a, ax, az, ei * 7 + i);
    }
  });
}

// ============================================================
//  小陈设
// ============================================================

export function lantern(b, x, yAttach, z, s = 1) {
  b.boxCentered(x, z, 0.12 * s, 0.12 * s, yAttach, 0.7 * s, C.woodDark);
  b.boxCentered(x, z, 0.72 * s, 0.72 * s, yAttach - 0.28 * s, 0.28 * s, C.goldTrim);
  b.boxCentered(x, z, 1.0 * s, 1.0 * s, yAttach - 1.15 * s, 0.87 * s, C.lantern);
  b.boxCentered(x, z, 0.56 * s, 0.56 * s, yAttach - 1.42 * s, 0.27 * s, C.goldTrim);
  b.boxCentered(x, z, 0.3 * s, 0.3 * s, yAttach - 1.8 * s, 0.38 * s, C.lantern);
}

export function poleLantern(b, x, z, s = 1) {
  b.boxCentered(x, z, 1.0 * s, 1.0 * s, 0, 0.4 * s, C.darkStone);
  b.boxCentered(x, z, 0.5 * s, 0.5 * s, 0, 4.6 * s, C.woodDark);
  b.boxCentered(x, z, 1.1 * s, 1.1 * s, 4.6 * s, 0.3 * s, C.goldTrim);
  b.boxCentered(x, z, 1.2 * s, 1.2 * s, 4.9 * s, 1.1 * s, C.lantern);
  b.boxCentered(x, z, 0.7 * s, 0.7 * s, 6.0 * s, 0.25 * s, C.goldTrim);
}

export function ding(b, cx, cz, s = 1) {
  b.boxCentered(cx, cz, 3.2 * s, 3.2 * s, 0, 0.5 * s, C.darkStone);
  for (const sx of [-1, 1]) b.boxCentered(cx + sx * 1.9 * s, cz, 0.7 * s, 1.2 * s, 0.5 * s, 1.6 * s, C.bronze);
  b.boxCentered(cx, cz, 2.6 * s, 2.6 * s, 0.5 * s, 1.9 * s, C.bronze);
  b.boxCentered(cx, cz, 2.95 * s, 2.95 * s, 0.6 * s, 0.22 * s, C.goldTrim);
  b.boxCentered(cx, cz, 2.3 * s, 2.3 * s, 2.4 * s, 0.5 * s, C.bronze);
  b.boxCentered(cx, cz, 1.2 * s, 1.2 * s, 2.9 * s, 0.5 * s, C.goldTrim);
  b.boxCentered(cx, cz, 0.5 * s, 0.5 * s, 3.4 * s, 0.5 * s, C.goldTrim);
}

export function flowerBed(b, cx, cz, s = 1) {
  b.boxCentered(cx, cz, 3.4 * s, 2.2 * s, 0, 0.5 * s, C.grayStone);
  b.boxCentered(cx, cz, 3.0 * s, 1.8 * s, 0.5 * s, 0.3 * s, C.grassDark);
  const cols = [0xe56b9f, 0xe8c14e, 0xe05b3b, 0xd97bb5];
  for (let i = 0; i < 5; i++)
    b.boxCentered(cx + (i - 2) * 0.55 * s, cz, 0.3 * s, 0.3 * s, 0.8 * s, 0.35 * s, cols[i % cols.length]);
}

export function stoneLion(b, x, z, dir, s = 1) {
  b.boxCentered(x, z, 2.6 * s, 2.6 * s, 0, 1.5 * s, C.grayStone); // 须弥座
  b.boxCentered(x, z, 2.2 * s, 2.2 * s, 1.5 * s, 0.25 * s, C.darkStone);
  b.boxCentered(x, z - dir * 0.25 * s, 1.7 * s, 2.3 * s, 1.75 * s, 1.25 * s, C.lion);
  b.boxCentered(x, z + dir * 0.45 * s, 1.15 * s, 1.25 * s, 1.75 * s, 0.85 * s, C.lion);
  for (const sx of [-1, 1])
    b.boxCentered(x + sx * 0.38 * s, z + dir * 0.95 * s, 0.42 * s, 0.5 * s, 1.75 * s, 0.75 * s, C.lion);
  b.boxCentered(x, z + dir * 0.85 * s, 1.15 * s, 1.05 * s, 2.55 * s, 1.0 * s, C.lion); // 头
  const mane = [[-0.62, 0], [0.62, 0], [0, -0.55], [0, 0.55], [-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]];
  for (const [mx, mz] of mane)
    b.boxCentered(x + mx * s, z + dir * 0.85 * s + mz * s, 0.5 * s, 0.5 * s, 2.5 * s, 0.55 * s, C.lionDark);
  for (const sx of [-1, 1])
    b.boxCentered(x + sx * 0.28 * s, z + dir * 1.36 * s, 0.16 * s, 0.1 * s, 2.9 * s, 0.16 * s, C.ink);
  b.boxCentered(x, z + dir * 1.36 * s, 0.3 * s, 0.12 * s, 2.66 * s, 0.2 * s, C.lionDark);
  b.boxCentered(x, z - dir * 1.15 * s, 0.34 * s, 0.5 * s, 2.1 * s, 0.7 * s, C.lion); // 尾
  b.boxCentered(x, z + dir * 1.22 * s, 0.62 * s, 0.62 * s, 1.75 * s, 0.62 * s, C.lionDark); // 绣球
}

export function pineTree(b, x, z, h = 7, s = 1) {
  b.boxCentered(x, z, 0.9 * s, 0.9 * s, 0, h * 0.42, C.trunk);
  let y = h * 0.34, r = 2.7 * s;
  for (let i = 0; i < 4; i++) {
    b.boxCentered(x, z, r * 2, r * 2, y, 1.05, i % 2 ? C.leafDark : C.leaf);
    r *= 0.68; y += 1.15;
  }
  b.boxCentered(x, z, 0.7 * s, 0.7 * s, y, 0.8, C.leafDark);
}

export function cypressTree(b, x, z, h = 10, s = 1) {
  b.boxCentered(x, z, 0.7 * s, 0.7 * s, 0, h * 0.35, C.trunk);
  let y = h * 0.25, r = 1.9 * s;
  const layers = 6, lh = (h * 0.62) / layers;
  for (let i = 0; i < layers; i++) {
    b.boxCentered(x, z, r * 2, r * 2, y, lh + 0.35, i % 2 ? C.leafDark : C.leaf);
    r *= 0.82; y += lh;
  }
}

// ============================================================
//  建筑单体
// ============================================================

export const MAIN_HALL = { x: 0, z: -14 };

// 主殿：重檐庑殿顶
export function mainHall(b, cx, cz) {
  const ph = 5.5, pw = 48, pd = 28;
  platform(b, cx, cz, pw, pd, ph, { gaps: { pz: 30 } });
  steps2(b, cx, cz + pd / 2, 0, 1, 12, ph);
  steps2(b, cx - 10, cz + pd / 2, 0, 1, 5, ph);
  steps2(b, cx + 10, cz + pd / 2, 0, 1, 5, ph);

  // ---- 下层身 ----
  const bw = 32, bd = 18, by = ph, bh = 9.1, bTop = by + bh; // 14.6
  wallPanel(b, cx, cz - bd / 2 + 0.6, bw, 1.2, by, bh);
  wallPanel(b, cx - bw / 2 + 0.6, cz, 1.2, bd - 1.2, by, bh);
  wallPanel(b, cx + bw / 2 - 0.6, cz, 1.2, bd - 1.2, by, bh);
  eaveStructure(b, cx, cz, bw + 1.4, bd + 1.4, bTop);
  const colXs = [-13.7, -9.14, -4.57, 0, 4.57, 9.14, 13.7];
  for (const x of colXs) column(b, cx + x, cz + bd / 2 - 0.55, by, bh);
  const fz = cz + bd / 2 + 0.25;
  doorPanel(b, cx - 2.28, fz, 0, 1, 3.8, bh - 3.4, by + 1.0);
  doorPanel(b, cx + 2.28, fz, 0, 1, 3.8, bh - 3.4, by + 1.0);
  for (const x of [-11.4, -6.85, 6.85, 11.4])
    latticeWindow(b, cx + x, fz, 0, 1, 3.3, bh - 4.6, by + 2.2);
  plaque(b, cx, fz + 0.1, 0, 1, 5.0, 1.6, by + bh - 2.2);

  // ---- 下檐 ----
  hipRoof(b, cx, cz, bw + 7, bd + 7, bTop + 2.4, {
    layers: 2, layerH: 0.9, eaveH: 1.0, ridgeW: 20, ridgeD: 2.2,
    tile: C.greenTile, ornaments: false,
  });

  // ---- 上层身 ----
  const uw = 28, ud = 14, uy = bTop + 3.5, uh = 6.8, uTop = uy + uh; // 18.1..24.9
  wallPanel(b, cx, cz - ud / 2 + 0.6, uw, 1.2, uy, uh);
  wallPanel(b, cx - uw / 2 + 0.6, cz, 1.2, ud - 1.2, uy, uh);
  wallPanel(b, cx + uw / 2 - 0.6, cz, 1.2, ud - 1.2, uy, uh);
  for (const s of [-1, 1])
    latticeWindow(b, cx + s * (uw / 2 + 0.25), cz, s, 0, 4.0, 3.4, uy + 1.8);
  latticeWindow(b, cx, cz - ud / 2 - 0.25, 0, -1, 4.0, 3.4, uy + 1.8);
  eaveStructure(b, cx, cz, uw + 1.4, ud + 1.4, uTop - 1.5);
  const uColXs = [-11.2, -5.6, 0, 5.6, 11.2];
  for (const x of uColXs) column(b, cx + x, cz + ud / 2 - 0.55, uy, uh - 1.5);
  const ufz = cz + ud / 2 + 0.25;
  for (const x of [-8.4, -2.8, 2.8, 8.4])
    latticeWindow(b, cx + x, ufz, 0, 1, 4.4, uh - 2.6, uy + 1.4);

  // ---- 上檐（主屋顶）----
  hipRoof(b, cx, cz, bw + 9, bd + 9, uTop + 1.5, {
    layers: 6, layerH: 1.3, eaveH: 1.5, ridgeW: 14, ridgeD: 2.2, tile: C.goldTile,
  });

  // ---- 灯笼 ----
  for (const x of [-12, -6, 0, 6, 12]) lantern(b, cx + x, bTop + 2.5, cz + bd / 2 + 4.7, 1.1);
  for (const x of [-7, 7]) lantern(b, cx + x, uTop + 2.7, cz + ud / 2 + 7.0, 1.0);
}

// 配殿：单檐歇山顶，dir=+1 正面朝 +x
export function sideHall(b, cx, cz, dir) {
  const ph = 2.5, pw = 16, pd = 22;
  platform(b, cx, cz, pw, pd, ph, {
    gaps: dir > 0 ? { px: 8 } : { nx: 8 },
  });
  steps2(b, cx + dir * pw / 2, cz, dir, 0, 6, ph);

  const bw = 12, bd = 18, by = ph, bh = 8.5, bTop = by + bh;
  wallPanel(b, cx - dir * (bw / 2 - 0.6), cz, 1.2, bd, by, bh);
  wallPanel(b, cx, cz - bd / 2 + 0.6, bw, 1.2, by, bh);
  wallPanel(b, cx, cz + bd / 2 - 0.6, bw, 1.2, by, bh);
  eaveStructure(b, cx, cz, bw + 1.4, bd + 1.4, bTop);
  const colZs = [-8, -4, 0, 4, 8];
  for (const z of colZs) column(b, cx + dir * (bw / 2 - 0.55), cz + z, by, bh);
  const fu = cx + dir * (bw / 2 + 0.25);
  doorPanel(b, fu, cz, dir, 0, 3.6, bh - 3.4, by + 1.0);
  for (const z of [-6, 6]) latticeWindow(b, fu, cz + z, dir, 0, 3.2, bh - 4.4, by + 2.0);
  plaque(b, fu + dir * 0.1, cz, dir, 0, 3.2, 1.3, by + bh - 2.4);

  xieshanRoof(b, cx, cz, bw + 5, bd + 7, bTop + 2.3, {
    ridgeAxis: 'z', tile: C.greenTile, eaveH: 1.3, layerH: 1.2,
    hipLayers: 3, gableLayers: 3, insetX: 1.0, insetZ: 1.15,
  });

  for (const z of [-5, 5]) lantern(b, cx + dir * 9.2, bTop + 3.4, cz + z, 0.9);
}

// 山门
export function gate(b, cx, cz) {
  const ph = 1.2, pw = 28, pd = 16;
  platform(b, cx, cz, pw, pd, ph, { railing: false });
  steps2(b, cx, cz + pd / 2, 0, 1, 8, ph);
  steps2(b, cx, cz - pd / 2, 0, -1, 8, ph);

  const bw = 24, bd = 9, by = ph, bh = 8.5, bTop = by + bh; // 9.7
  // 后/两侧墙
  wallPanel(b, cx, cz - bd / 2 + 0.6, bw, 1.2, by, bh);
  wallPanel(b, cx - bw / 2 + 0.6, cz, 1.2, bd, by, bh);
  wallPanel(b, cx + bw / 2 - 0.6, cz, 1.2, bd, by, bh);
  // 前墙（含三门洞）
  const fz = cz + bd / 2 - 0.6;
  const seg = (x0, x1) => wallPanel(b, (x0 + x1) / 2 + cx, fz, x1 - x0, 1.2, by, bh);
  seg(-12, -9.75); seg(-7.25, -3); seg(3, 7.25); seg(9.75, 12);
  const lintel = (x0, x1, yFrom) =>
    b.boxCentered(cx + (x0 + x1) / 2, fz, x1 - x0, 1.2, yFrom, bTop - yFrom, C.redWall);
  lintel(-3, 3, by + 6.5);
  lintel(-9.75, -7.25, by + 4.0); lintel(7.25, 9.75, by + 4.0);
  // 门框 + 金饰
  for (const [x0, x1, yt] of [[-3, 3, by + 6.5], [-9.75, -7.25, by + 4.0], [7.25, 9.75, by + 4.0]]) {
    const w = x1 - x0;
    for (const s of [-1, 1])
      b.boxCentered(cx + (s > 0 ? x1 : x0), fz, 0.4, 1.0, by, yt - by, C.woodDark);
    b.boxCentered(cx + (x0 + x1) / 2, fz, w + 0.8, 1.0, yt - 0.4, 0.4, C.woodDark);
    b.boxCentered(cx + (x0 + x1) / 2, fz + 0.3, w + 0.8, 0.2, yt - 0.4, 0.14, C.goldTrim);
  }
  plaque(b, cx, fz + 0.4, 0, 1, 4.6, 1.4, by + 7.0);

  eaveStructure(b, cx, cz, bw + 1.4, bd + 1.4, bTop);
  xieshanRoof(b, cx, cz, bw + 6, bd + 6, bTop + 2.2, {
    ridgeAxis: 'x', tile: C.grayTile, eaveH: 1.3, layerH: 1.2,
    hipLayers: 3, gableLayers: 2, insetX: 1.0, insetZ: 1.1,
  });
  for (const x of [-9, 9]) lantern(b, cx + x, bTop + 3.3, cz + bd / 2 + 2.5, 0.9);
}

// 钟鼓楼：dir=+1 正面朝 +x
export function tower(b, cx, cz, kind, dir) {
  const bs = 10, bh0 = 6.5;
  b.boxCentered(cx, cz, bs + 1, bs + 1, 0, 0.5, C.darkStone);
  b.boxCentered(cx, cz, bs, bs, 0.5, bh0 - 1.0, C.redWall);
  b.boxCentered(cx, cz, bs + 0.4, bs + 0.4, bh0 - 0.5, 0.5, C.grayStone);
  // 券门（朝中轴）
  const fx = cx + dir * (bs / 2 - 0.1);
  b.boxCentered(fx, cz, 0.7, 3.5, 1.0, 4.0, C.woodDark);
  b.boxCentered(fx, cz, 0.9, 2.3, 5.0, 0.6, C.woodDark);
  b.boxCentered(fx, cz, 0.9, 1.2, 5.6, 0.5, C.woodDark);
  b.boxCentered(fx + dir * 0.35, cz, 0.3, 3.9, 1.0, 5.2, C.goldTrim);
  for (const s of [-1, 1])
    latticeWindow(b, cx - dir * (bs / 2 - 0.1), cz + s * 3.2, -dir, 0, 2.2, 2.4, 2.0);

  // 平座
  b.boxCentered(cx, cz, bs + 1.6, bs + 1.6, bh0, 0.5, C.whiteStone);
  railing(b, cx, cz, bs + 1.4, bs + 1.4, bh0 + 0.5, {});

  // 上层亭
  const uy = bh0 + 0.5, uh = 4.0;
  for (const sx of [-1, 1]) for (const sz of [-1, 1])
    column(b, cx + sx * 2.6, cz + sz * 2.6, uy, uh, { size: 0.8 });
  for (const s of [-1, 1]) {
    latticeWindow(b, cx + s * 2.6, cz + dir * 2.6, s, 0, 4.2, 3.0, uy + 0.5);
    latticeWindow(b, cx - dir * 2.6, cz + s * 2.6, -dir, 0, 4.2, 3.0, uy + 0.5);
  }
  latticeWindow(b, cx + dir * 2.6, cz, dir, 0, 4.2, 3.0, uy + 0.5);
  eaveStructure(b, cx, cz, bs + 1.4, bs + 1.4, uy + uh);
  pyramidRoof(b, cx, cz, bs + 3, bs + 3, uy + uh + 1.4, {
    tile: C.greenTile, layers: 5, layerH: 1.1, eaveH: 1.2,
  });

  // 钟 / 鼓
  if (kind === 'bell') {
    for (const sx of [-1, 1])
      b.boxCentered(cx + sx * 1.1, cz, 0.35, 0.35, uy, 2.3, C.bronze);
    b.boxCentered(cx, cz, 2.9, 0.45, uy + 2.3, 0.45, C.bronze);
    b.boxCentered(cx, cz, 1.7, 1.7, uy + 0.6, 1.1, C.bronze);
    b.boxCentered(cx, cz, 1.15, 1.15, uy + 1.7, 0.6, C.bronze);
    b.boxCentered(cx, cz, 1.8, 1.8, uy + 1.62, 0.15, C.goldTrim);
  } else {
    for (const sz of [-1, 1])
      b.boxCentered(cx, cz + sz * 1.0, 0.35, 0.35, uy, 1.2, C.woodDark);
    b.boxCentered(cx, cz, 2.6, 0.4, uy + 1.2, 0.4, C.woodDark);
    b.boxCentered(cx, cz, 2.3, 1.5, uy + 1.6, 1.9, C.redWall);
    b.boxCentered(cx, cz, 2.45, 1.65, uy + 1.95, 0.16, C.goldTrim);
    b.boxCentered(cx, cz, 2.45, 1.65, uy + 3.1, 0.16, C.goldTrim);
    for (const sx of [-1, 1])
      b.boxCentered(cx + sx * 1.2, cz, 0.18, 1.7, uy + 2.3, 0.18, C.goldTrim);
  }
}

// 宝塔：六层密檐
export function pagoda(b, cx, cz) {
  platform(b, cx, cz, 12, 12, 2, { railing: false });
  let w = 6.5, y = 2;
  for (let i = 0; i < 6; i++) {
    b.boxCentered(cx, cz, w + 0.4, w + 0.4, y, 0.4, C.grayStone); // 身基
    b.boxCentered(cx, cz, w, w, y + 0.4, 3.2, i % 2 ? C.redWall : C.redWall);
    for (const [nx, nz] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const px = cx + nx * (w / 2 + 0.05), pz = cz + nz * (w / 2 + 0.05);
      b.boxCentered(px, pz, nx !== 0 ? 0.25 : 1.3, nz !== 0 ? 0.25 : 1.3, y + 1.4, 1.5, C.woodDark);
      b.boxCentered(px, pz, nx !== 0 ? 0.32 : 1.5, nz !== 0 ? 0.32 : 1.5, y + 1.35, 0.15, C.goldTrim);
    }
    const ey = y + 3.6;
    b.boxCentered(cx, cz, w + 2.8, w + 2.8, ey, 0.7, C.grayTile); // 密檐
    b.boxCentered(cx, cz, w + 3.0, w + 3.0, ey + 0.55, 0.18, C.goldTrim);
    flyingCorners(b, cx, cz, w + 2.8, w + 2.8, ey + 0.7, C.grayTile);
    y += 4.4; w *= 0.86;
  }
  // 塔顶
  let tw = w;
  for (let i = 0; i < 3; i++) {
    b.boxCentered(cx, cz, tw, tw, y, 0.8, C.grayTile);
    tw *= 0.62; y += 0.8;
  }
  b.boxCentered(cx, cz, 1.0, 1.0, y, 0.6, C.goldTrim); // 塔刹
  b.boxCentered(cx, cz, 0.55, 0.55, y + 0.6, 0.6, C.goldTrim);
  b.boxCentered(cx, cz, 0.26, 0.26, y + 1.2, 0.7, C.goldTrim);
}

// 宫墙
export function perimeterWall(b) {
  const h = 4.5;
  const seg = (x0, z0, x1, z1) => {
    const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    b.boxCentered(cx, cz, w, d, 0, 0.8, C.grayStone);
    b.boxCentered(cx, cz, w, d, 0.8, h - 1.4, C.redWall);
    b.boxCentered(cx, cz, w + 0.8, d + 0.8, h - 0.6, 0.6, C.grayTileDeep);
  };
  seg(-46, -48, -46, 40);
  seg(46, -48, 46, 40);
  seg(-46, -48, 46, -48);
  seg(-46, 40, -14, 40);
  seg(14, 40, 46, 40);
}
