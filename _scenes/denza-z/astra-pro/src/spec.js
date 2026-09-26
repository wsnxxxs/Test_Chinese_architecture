/** Dimensions supplied in the brief; 1 scene unit = 1 metre. Not OEM CAD data. */
export const SPEC = Object.freeze({ length: 4.870, width: 1.990, roofHeight: 1.350, wheelbase: 2.780, wheelRadius: .370, archRadius: .408, axleFront: -1.390, axleRear: 1.390, frontTrack: 1.700, rearTrack: 1.676, frontTyreWidth: .248, rearTyreWidth: .290 });
export const AXLES = [SPEC.axleFront, SPEC.axleRear];
export function archBottom(x, normalBottom = .23) {
  let result = normalBottom;
  for (const axle of AXLES) {
    const dx = Math.abs(x - axle);
    if (dx <= SPEC.archRadius) result = Math.max(result, SPEC.wheelRadius + Math.sqrt(Math.max(0, SPEC.archRadius ** 2 - dx ** 2)));
  }
  return result;
}
