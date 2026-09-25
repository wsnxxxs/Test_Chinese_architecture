// HTML labels anchored to 3D positions (building names & roof types) with simple
// screen-space collision avoidance: higher-ranked labels win, overlapping ones fade out.
import { Vector3 } from 'three';
import { ORIGIN } from '../world/layout.js';

export function createLabels(container, list, onPick) {
  const items = list.map((l) => {
    const el = document.createElement('div');
    el.className = `label rank-${l.rank}`;
    el.innerHTML = `<div class="tag" title="点击飞向 ${l.name}"><i></i>${l.name}<small>${l.sub}</small></div><div class="stem"></div>`;
    container.appendChild(el);
    const base = l.rank === 1 ? 19 : l.rank === 2 ? 15 : 13;
    const it = {
      focus: new Vector3(
        l.pos[0] + ORIGIN.x,
        l.fy !== undefined ? l.fy + ORIGIN.y : l.pos[1] + ORIGIN.y - (l.rank === 1 ? 26 : l.rank === 2 ? 17 : 10),
        l.pos[2] + ORIGIN.z,
      ),
      dist: l.rank === 1 ? 170 : l.rank === 2 ? 120 : 85,
      name: l.name,
    };
    el.querySelector('.tag').addEventListener('click', (e) => {
      e.stopPropagation();
      if (onPick) onPick(it);
    });
    return {
      el,
      rank: l.rank,
      pos: new Vector3(l.pos[0] + ORIGIN.x, l.pos[1] + ORIGIN.y, l.pos[2] + ORIGIN.z),
      w: l.name.length * base + l.sub.length * 7.4 + 40,
      h: l.rank === 1 ? 34 : 28,
      shown: true,
      op: 1,
      pick: it,
    };
  });
  const v = new Vector3();
  const placed = [];
  const update = (camera, width, height, enabled) => {
    if (!enabled) return;
    placed.length = 0;
    // evaluate in rank order (rank 1 first), nearer first inside a rank
    const cand = [];
    for (const it of items) {
      v.copy(it.pos).project(camera);
      const dist = camera.position.distanceTo(it.pos);
      const maxD = it.rank === 1 ? 1800 : it.rank === 2 ? 1100 : 520;
      const behind = v.z > 1 || v.z < -1;
      const x = (v.x * 0.5 + 0.5) * width;
      const y = (-v.y * 0.5 + 0.5) * height;
      const inView = !behind && x > -20 && x < width + 20 && y > 30 && y < height + 30 && dist < maxD;
      cand.push({ it, x, y, dist, maxD, inView });
    }
    cand.sort((a, b) => a.it.rank - b.it.rank || a.dist - b.dist);
    for (const c of cand) {
      const { it } = c;
      let visible = c.inView;
      if (visible) {
        const r = { x0: c.x - it.w / 2, x1: c.x + it.w / 2, y0: c.y - it.h - 14, y1: c.y };
        for (const p of placed) {
          if (r.x0 < p.x1 + 4 && r.x1 > p.x0 - 4 && r.y0 < p.y1 + 2 && r.y1 > p.y0 - 2) {
            visible = false;
            break;
          }
        }
        if (visible) placed.push(r);
      }
      // smooth fade
      const target = visible ? (it.rank === 1 ? 1 : Math.min(1, Math.max(0.45, 1.5 - c.dist / c.maxD))) : 0;
      it.op += (target - it.op) * 0.25;
      if (it.op < 0.02 && !visible) {
        if (it.shown) {
          it.el.style.opacity = '0';
          it.el.style.visibility = 'hidden';
          it.shown = false;
        }
        continue;
      }
      if (!it.shown) it.el.style.visibility = 'visible';
      it.shown = true;
      it.el.style.opacity = it.op.toFixed(2);
      it.el.style.transform = `translate(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px) translate(-50%, -100%)`;
    }
  };
  return { update, items };
}
