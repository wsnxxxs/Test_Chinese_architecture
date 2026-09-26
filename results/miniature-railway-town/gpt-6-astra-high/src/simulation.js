export const TRACK = { straight: 6.3, radius: 6.6 };
export const LOOP_LENGTH = 4 * TRACK.straight + 2 * Math.PI * TRACK.radius;
export const STATION_DISTANCE = 9.7;
export const CAR_SPACING = 1.72;
export const BASE_SPEED = 2.7;

// An arc-length parameterized stadium: speed and carriage spacing stay constant.
export function trackPose(distance) {
  const a = TRACK.straight, r = TRACK.radius;
  let s = ((distance % LOOP_LENGTH) + LOOP_LENGTH) % LOOP_LENGTH;
  if (s < 2 * a) return { x: -a + s, z: r, tx: 1, tz: 0 };
  s -= 2 * a;
  if (s < Math.PI * r) {
    const angle = Math.PI / 2 - s / r;
    return { x: a + r * Math.cos(angle), z: r * Math.sin(angle), tx: Math.sin(angle), tz: -Math.cos(angle) };
  }
  s -= Math.PI * r;
  if (s < 2 * a) return { x: a - s, z: -r, tx: -1, tz: 0 };
  s -= 2 * a;
  const angle = -Math.PI / 2 - s / r;
  return { x: -a + r * Math.cos(angle), z: r * Math.sin(angle), tx: Math.sin(angle), tz: -Math.cos(angle) };
}

export class RailwaySimulation {
  constructor() { this.reset(); }
  reset() { this.distance = 3; this.speed = 1; this.running = true; this.dwell = 0; this.nextStation = STATION_DISTANCE; this.stops = 0; }
  update(delta) {
    if (!this.running) return;
    let remaining = Math.max(0, delta);
    while (remaining > 0) {
      if (this.dwell > 0) {
        const elapsed = Math.min(this.dwell, remaining);
        this.dwell -= elapsed;
        remaining -= elapsed;
      } else {
        const velocity = BASE_SPEED * this.speed;
        const untilStation = (this.nextStation - this.distance) / velocity;
        if (remaining < untilStation) { this.distance += velocity * remaining; remaining = 0; }
        else { this.distance = this.nextStation; remaining -= untilStation; this.nextStation += LOOP_LENGTH; this.dwell = 2; this.stops++; }
      }
    }
  }
  get cars() { return [0, 1, 2].map(i => trackPose(this.distance - i * CAR_SPACING)); }
}
