/**
 * CONFIG — global tunables for the miniature railway diorama.
 * Owned by: orchestrator (frozen contract). Do not fork copies of these values.
 */

export const TIME_OF_DAY_MODES = ['day', 'evening', 'night'];

export const CONFIG = {
  /** --- train --- */
  train: {
    /** arc-length fraction (0..1 of the closed loop) where the consist starts */
    startArc01: 0.055,
    /** cruise speed in world units per second */
    speed: 5.5,
    speedMultiplier: { min: 0.25, max: 2.5, step: 0.05, default: 1 },
    /** dwell time at the station platform, in seconds of *unpaused* time */
    stationStopSeconds: 2.0,
    /** distance (world units) used to ease the speed down before the stop and up after it */
    brakeDistance: 2.6,
    /** seconds to ramp the speed back from 0 to cruise after departing */
    departSeconds: 1.3,
    /** 1 locomotive + 2 coaches */
    coachCount: 2,
    /** body lengths (world units) used for arc-length spacing between car centres */
    length: { loco: 2.9, coach: 2.5 },
    /** visual gap between neighbouring car bodies */
    couplerGap: 0.34,
  },

  /** --- camera --- */
  camera: {
    /** direction from target to camera; near-isometric 34° elevation, 45° azimuth */
    direction: [1, 0.95, 1],
    /** orbit radius of the orthographic camera (only affects clipping) */
    distance: 90,
    near: 1,
    far: 400,
    target: [-2.0, 0.35, -0.4],
    /** extra breathing room around the projected sandbox footprint */
    fitMargin: 1.14,
    zoom: { min: 0.42, max: 3.2, default: 1 },
    damping: 0.075,
    rotateSpeed: 0.7,
    zoomSpeed: 0.85,
    minPolarAngleDeg: 8,
    maxPolarAngleDeg: 84,
  },

  /** --- renderer / render loop --- */
  render: {
    maxPixelRatio: 2,
    shadowMapSize: 2048,
    /** clamp on frame delta (seconds) to keep motion stable after tab switches */
    maxDelta: 1 / 20,
    /** train integration substep (seconds) */
    fixedStep: 1 / 120,
    exposure: { day: 1.0, evening: 1.06, night: 1.22 },
  },

  /** --- time of day --- */
  timeOfDay: {
    default: 'evening',
    /** seconds of the lighting cross-fade when switching modes */
    transitionSeconds: 1.1,
  },

  /** --- night lighting budget --- */
  nightLights: {
    /** max real THREE.PointLight instances created for lamp posts */
    maxPointLights: 8,
    /** how many of them are actually enabled in night mode (rest are pre-placed, distance-faded) */
    activePointLights: 8,
  },
};

export default CONFIG;
