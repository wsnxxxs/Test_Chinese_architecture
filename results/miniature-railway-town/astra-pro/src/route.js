/**
 * Analytic, arc-length-parametrized rounded rectangle. All consumers (rails,
 * sleepers, vehicles, bridges and tests) share this one source of truth.
 * Coordinate system: y is up, x is east, +z is the station / front of the base.
 * Starts on the front straight at (-6.9, 6.15), travelling east.
 * No Three.js dependency: geometry and simulation can be tested under Node.
 */
export const TRACK = Object.freeze({ halfX: 10.1, halfZ: 6.15, radius: 3.2, railY: 0.43, gauge: 0.62 });
const { halfX: X, halfZ: Z, radius: R } = TRACK;
const A = X - R;
const B = Z - R;
const QUARTER = Math.PI * R / 2;
const segments = [
  { length: 2 * A, kind: 'line', x: -A, z: Z, tx: 1, tz: 0 },
  { length: QUARTER, kind: 'arc', cx: A, cz: B, angle: Math.PI / 2 },
  { length: 2 * B, kind: 'line', x: X, z: B, tx: 0, tz: -1 },
  { length: QUARTER, kind: 'arc', cx: A, cz: -B, angle: 0 },
  { length: 2 * A, kind: 'line', x: A, z: -Z, tx: -1, tz: 0 },
  { length: QUARTER, kind: 'arc', cx: -A, cz: -B, angle: -Math.PI / 2 },
  { length: 2 * B, kind: 'line', x: -X, z: -B, tx: 0, tz: 1 },
  { length: QUARTER, kind: 'arc', cx: -A, cz: B, angle: -Math.PI },
];
export const TRACK_LENGTH = segments.reduce((sum, segment) => sum + segment.length, 0);
export const SEGMENT_ENDS = segments.reduce((arr, s) => [...arr, (arr.at(-1) || 0) + s.length], []);
export const wrap = (distance, length = TRACK_LENGTH) => ((distance % length) + length) % length;

/** @returns {{x:number,y:number,z:number,tx:number,tz:number,nx:number,nz:number}} */
export function sampleRoute(distance) {
  let d = wrap(distance);
  for (const segment of segments) {
    if (d <= segment.length + 1e-10) {
      if (segment.kind === 'line') {
        const { x, z, tx, tz } = segment;
        return { x: x + tx * d, y: TRACK.railY, z: z + tz * d, tx, tz, nx: -tz, nz: tx };
      }
      const angle = segment.angle - d / R;
      const tx = Math.sin(angle);
      const tz = -Math.cos(angle);
      return {
        x: segment.cx + R * Math.cos(angle), y: TRACK.railY,
        z: segment.cz + R * Math.sin(angle), tx, tz, nx: -tz, nz: tx,
      };
    }
    d -= segment.length;
  }
  return sampleRoute(0);
}

export function riverCenter(z) {
  return 4.65 + 0.38 * Math.sin(z * 0.45) + 0.15 * Math.sin(z * 0.92 + 0.6);
}
export function riverWidth(z) {
  return 1.76 + 0.19 * Math.sin(z * 0.55 + 0.5);
}
export function onRiver(x, z, margin = 0) {
  return Math.abs(x - riverCenter(z)) < riverWidth(z) / 2 + margin;
}

/** Exact distance from any point to the rounded-rectangle track centre line. */
export function distanceToTrack(x, z) {
  const qx = Math.abs(x) - A;
  const qz = Math.abs(z) - B;
  const signedDistance = Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - R;
  return Math.abs(signedDistance);
}

/** Bogie centres follow the path; the car body follows their chord. */
export function vehiclePose(distance, wheelbase = 0.94) {
  const front = sampleRoute(distance + wheelbase / 2);
  const rear = sampleRoute(distance - wheelbase / 2);
  return {
    x: (front.x + rear.x) / 2,
    y: TRACK.railY,
    z: (front.z + rear.z) / 2,
    yaw: Math.atan2(front.x - rear.x, front.z - rear.z),
    front, rear,
  };
}

export const VEHICLE_OFFSETS = Object.freeze([0, 2.10, 4.20]);
export const STATION_DISTANCE = 7.5; // locomotive stops at x=0.6 on the front straight
export const START_DISTANCE = 1.15;
export const DEFAULT_SPEED = 1;
export const BASE_SPEED = 2.1; // world units / real second at 1x
export const DWELL_SECONDS = 2;

/**
 * Event-based simulation, independent of render frame rate. Dwell uses real
 * active seconds (not speed-scaled time). Pausing freezes BOTH motion and dwell.
 * The next station is tracked in unwrapped distance, so wrap-around and large
 * update intervals never skip or double-trigger an arrival.
 */
export class RailwaySimulation {
  constructor() { this.reset(); }
  reset() {
    this.distance = START_DISTANCE;
    this.nextStation = STATION_DISTANCE;
    this.speed = DEFAULT_SPEED;
    this.running = true;
    this.dwellRemaining = 0;
    this.stops = 0;
    this.elapsed = 0;
    this.travelled = 0;
  }
  setSpeed(value) {
    if (!Number.isFinite(value)) throw new TypeError('Speed must be finite.');
    this.speed = Math.max(0.25, Math.min(2, value));
  }
  update(delta) {
    if (!Number.isFinite(delta) || delta < 0) throw new RangeError('Delta must be a non-negative finite number.');
    if (!this.running || delta === 0) return;
    let remaining = delta;
    this.elapsed += delta;
    while (remaining > 1e-10) {
      if (this.dwellRemaining > 0) {
        const consumed = Math.min(this.dwellRemaining, remaining);
        this.dwellRemaining = Math.max(0, this.dwellRemaining - consumed);
        remaining -= consumed;
      } else {
        const velocity = BASE_SPEED * this.speed;
        const toStation = Math.max(0, this.nextStation - this.distance);
        const arrivalTime = toStation / velocity;
        if (arrivalTime <= remaining + 1e-10) {
          this.distance = this.nextStation;
          this.travelled += toStation;
          remaining = Math.max(0, remaining - arrivalTime);
          this.nextStation += TRACK_LENGTH;
          this.dwellRemaining = DWELL_SECONDS;
          this.stops += 1;
        } else {
          const moved = velocity * remaining;
          this.distance += moved;
          this.travelled += moved;
          remaining = 0;
        }
      }
    }
  }
  get progress() { return wrap(this.distance - STATION_DISTANCE) / TRACK_LENGTH; }
  get phase() { return !this.running ? 'paused' : this.dwellRemaining > 0 ? 'station' : 'running'; }
  snapshot() {
    return { distance: this.distance, nextStation: this.nextStation, speed: this.speed,
      running: this.running, dwellRemaining: this.dwellRemaining, stops: this.stops,
      elapsed: this.elapsed, travelled: this.travelled, phase: this.phase, progress: this.progress };
  }
}
