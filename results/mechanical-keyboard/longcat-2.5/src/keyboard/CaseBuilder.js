import * as THREE from 'three';

const KEY_UNIT = 19.05; // mm per u

/**
 * Builds the keyboard case (bottom shell) and plate.
 */
export function buildCase(caseColor) {
  const group = new THREE.Group();
  group.name = 'case';

  const TOTAL_W = 15 * KEY_UNIT;
  const TOTAL_D = 5 * KEY_UNIT;
  const WALL_H = 12; // case wall height
  const BASE_H = 4; // bottom base thickness
  const WALL_T = 3; // wall thickness

  const bodyMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(caseColor.body),
    roughness: 0.35,
    metalness: 0.3,
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(caseColor.plateEdge),
    roughness: 0.3,
    metalness: 0.6,
  });

  // Bottom base
  const baseGeo = new THREE.BoxGeometry(TOTAL_W + 4, BASE_H, TOTAL_D + 4);
  const base = new THREE.Mesh(baseGeo, bodyMat);
  base.position.y = BASE_H / 2;
  base.position.x = -KEY_UNIT * 0.5; // offset for key grid centering
  base.position.z = -KEY_UNIT * 0.5;
  group.add(base);

  // Walls — front, back, left, right
  const wallY = BASE_H + WALL_H / 2;

  // Front wall
  const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(TOTAL_W + 4, WALL_H, WALL_T),
    bodyMat
  );
  frontWall.position.set(-KEY_UNIT * 0.5, wallY, TOTAL_D / 2 + WALL_T / 2 - KEY_UNIT * 0.5);
  group.add(frontWall);

  // Back wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(TOTAL_W + 4, WALL_H, WALL_T),
    bodyMat
  );
  backWall.position.set(-KEY_UNIT * 0.5, wallY, -TOTAL_D / 2 - WALL_T / 2 - KEY_UNIT * 0.5);
  group.add(backWall);

  // Left wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(WALL_T, WALL_H, TOTAL_D + 4),
    bodyMat
  );
  leftWall.position.set(-TOTAL_W / 2 - WALL_T / 2 - KEY_UNIT * 0.5, wallY, -KEY_UNIT * 0.5);
  group.add(leftWall);

  // Right wall
  const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(WALL_T, WALL_H, TOTAL_D + 4),
    bodyMat
  );
  rightWall.position.set(TOTAL_W / 2 + WALL_T / 2 - KEY_UNIT * 0.5, wallY, -KEY_UNIT * 0.5);
  group.add(rightWall);

  // Accent strip along front edge
  const stripGeo = new THREE.BoxGeometry(TOTAL_W + 4, 0.8, WALL_T + 0.4);
  const strip = new THREE.Mesh(stripGeo, accentMat);
  strip.position.set(
    -KEY_UNIT * 0.5,
    BASE_H + WALL_H - 1.2,
    TOTAL_D / 2 + WALL_T / 2 - KEY_UNIT * 0.5
  );
  group.add(strip);

  // Feet (rubber pads on bottom)
  const footGeo = new THREE.CylinderGeometry(3, 3, 2, 16);
  const footMat = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.9 });
  const footPositions = [
    [-TOTAL_W / 2 - 1, -TOTAL_D / 2 - 1],
    [TOTAL_W / 2 - 1, -TOTAL_D / 2 - 1],
    [-TOTAL_W / 2 - 1, TOTAL_D / 2 - 1],
    [TOTAL_W / 2 - 1, TOTAL_D / 2 - 1],
  ];
  footPositions.forEach(([fx, fz]) => {
    const foot = new THREE.Mesh(footGeo, footMat);
    foot.position.set(fx - KEY_UNIT * 0.5, -1, fz - KEY_UNIT * 0.5);
    group.add(foot);
  });

  // LED strip (emissive accent on front face)
  const ledMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(caseColor.ledColor),
    emissive: new THREE.Color(caseColor.ledColor),
    emissiveIntensity: 0.8,
    roughness: 0.2,
  });
  const ledGeo = new THREE.BoxGeometry(TOTAL_W * 0.8, 0.6, 0.3);
  const led = new THREE.Mesh(ledGeo, ledMat);
  led.position.set(-KEY_UNIT * 0.5, BASE_H + 1.5, TOTAL_D / 2 + WALL_T + 0.2 - KEY_UNIT * 0.5);
  led.name = 'ledStrip';
  group.add(led);

  return group;
}

/**
 * Builds the plate (定位板) that sits between case and keycaps.
 */
export function buildPlate(caseColor) {
  const group = new THREE.Group();
  group.name = 'plate';

  const TOTAL_W = 15 * KEY_UNIT;
  const TOTAL_D = 5 * KEY_UNIT;
  const PLATE_T = 2;

  const plateMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(caseColor.plate),
    roughness: 0.4,
    metalness: 0.5,
  });

  const plateGeo = new THREE.BoxGeometry(TOTAL_W, PLATE_T, TOTAL_D);
  const plate = new THREE.Mesh(plateGeo, plateMat);
  plate.position.set(-KEY_UNIT * 0.5, 16, -KEY_UNIT * 0.5);
  group.add(plate);

  // Plate edge accent
  const edgeMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(caseColor.plateEdge),
    roughness: 0.25,
    metalness: 0.7,
  });
  const edgeGeo = new THREE.BoxGeometry(TOTAL_W + 1, 0.5, TOTAL_D + 1);
  const edge = new THREE.Mesh(edgeGeo, edgeMat);
  edge.position.set(-KEY_UNIT * 0.5, 14.8, -KEY_UNIT * 0.5);
  group.add(edge);

  return group;
}

/**
 * Builds the PCB (visible when exploded).
 */
export function buildPCB(caseColor) {
  const group = new THREE.Group();
  group.name = 'pcb';

  const TOTAL_W = 15 * KEY_UNIT;
  const TOTAL_D = 5 * KEY_UNIT;
  const PCB_T = 1.5;

  const pcbMat = new THREE.MeshStandardMaterial({
    color: '#0d4f3c', // classic green PCB
    roughness: 0.5,
    metalness: 0.2,
  });

  const pcbGeo = new THREE.BoxGeometry(TOTAL_W - 4, PCB_T, TOTAL_D - 4);
  const pcb = new THREE.Mesh(pcbGeo, pcbMat);
  pcb.position.set(-KEY_UNIT * 0.5, 13.5, -KEY_UNIT * 0.5);
  group.add(pcb);

  // Add some circuit traces (thin gold lines on PCB surface)
  const traceMat = new THREE.MeshStandardMaterial({
    color: '#c8a84b',
    roughness: 0.3,
    metalness: 0.8,
  });

  // Horizontal traces
  for (let i = 0; i < 8; i++) {
    const traceGeo = new THREE.BoxGeometry(TOTAL_W - 10, 0.15, 0.3);
    const trace = new THREE.Mesh(traceGeo, traceMat);
    trace.position.set(
      -KEY_UNIT * 0.5,
      13.5 + PCB_T / 2 + 0.1,
      -TOTAL_D / 2 + 5 + i * (TOTAL_D - 10) / 7 - KEY_UNIT * 0.5
    );
    group.add(trace);
  }

  // Vertical traces
  for (let i = 0; i < 12; i++) {
    const traceGeo = new THREE.BoxGeometry(0.3, 0.15, TOTAL_D - 10);
    const trace = new THREE.Mesh(traceGeo, traceMat);
    trace.position.set(
      -TOTAL_W / 2 + 5 + i * (TOTAL_W - 10) / 11 - KEY_UNIT * 0.5,
      13.5 + PCB_T / 2 + 0.1,
      -KEY_UNIT * 0.5
    );
    group.add(trace);
  }

  // MCU chip
  const chipGeo = new THREE.BoxGeometry(8, 2, 8);
  const chipMat = new THREE.MeshStandardMaterial({
    color: '#111111',
    roughness: 0.3,
    metalness: 0.4,
  });
  const chip = new THREE.Mesh(chipGeo, chipMat);
  chip.position.set(20, 15.5, -20);
  group.add(chip);

  // Capacitors / small components
  const capGeo = new THREE.CylinderGeometry(1.2, 1.2, 3, 8);
  const capMat = new THREE.MeshStandardMaterial({
    color: '#333333',
    roughness: 0.4,
    metalness: 0.5,
  });
  const capPositions = [
    [-30, -30], [-40, -10], [30, 20], [-10, 30], [40, -30],
  ];
  capPositions.forEach(([cx, cz]) => {
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(cx - KEY_UNIT * 0.5, 15.5, cz - KEY_UNIT * 0.5);
    group.add(cap);
  });

  return group;
}
