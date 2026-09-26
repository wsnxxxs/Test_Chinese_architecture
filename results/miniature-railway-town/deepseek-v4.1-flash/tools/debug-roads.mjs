// Debug helper: inspect road gaps (river vs railway) computed by the layout.
// Usage: node tools/debug-roads.mjs
import * as L from '../src/world/layout.js';

function flaggedSpans(samples, test) {
  const spans = [];
  let start = -1;
  for (let i = 0; i <= samples; i++) {
    const on = test(i / samples);
    if (on && start < 0) start = i;
    if ((!on || i === samples) && start >= 0) {
      spans.push([start / samples, (on ? i : i - 1) / samples]);
      start = -1;
    }
  }
  return spans;
}

console.log('track length', L.TRACK_LENGTH.toFixed(2), 'stationU', L.STATION_U.toFixed(4));
console.log('rail crossings with river:');
for (const span of L.channelSpans(L.trackCurve, { samples: 1200, threshold: -0.05, pad: 3.2 })) {
  const p = L.trackCurve.getPointAt(span.centre);
  console.log('  u', span.centre.toFixed(3), 'width', span.width.toFixed(2), 'at', p.x.toFixed(1), p.z.toFixed(1));
}

for (const road of L.ROADS) {
  const samples = 700;
  const p = new (await import('three')).Vector3();
  const length = road.length;
  const river = flaggedSpans(samples, (u) => {
    road.curve.getPointAt(u, p);
    return L.terrainHeight(p.x, p.z) < -0.05;
  });
  const rail = flaggedSpans(samples, (u) => {
    road.curve.getPointAt(u, p);
    return L.distanceToTrack(p.x, p.z) < 5.2;
  });
  const describe = (label, spans) =>
    spans
      .map(([a, b]) => {
        const q = road.curve.getPointAt((a + b) / 2);
        return `${label} u=${a.toFixed(3)}..${b.toFixed(3)} mid=(${q.x.toFixed(1)},${q.z.toFixed(1)}) h=${L.terrainHeight(
          q.x,
          q.z
        ).toFixed(2)} dTrack=${L.distanceToTrack(q.x, q.z).toFixed(2)}`;
      })
      .join('\n    ');
  console.log(`\nroad ${road.id} (len ${length.toFixed(1)})`);
  if (river.length) console.log('    ' + describe('river', river));
  if (rail.length) console.log('    ' + describe('rail ', rail));
  if (!river.length && !rail.length) console.log('    no gaps');
}
