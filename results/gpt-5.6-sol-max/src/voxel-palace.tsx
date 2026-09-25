import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type Tone = "dawn" | "sunset" | "moon";
type MaterialKey =
  | "grass"
  | "grassLight"
  | "stone"
  | "stoneDark"
  | "path"
  | "pathDark"
  | "red"
  | "redDark"
  | "wood"
  | "woodDark"
  | "plaster"
  | "jade"
  | "jadeLight"
  | "gold"
  | "window"
  | "water"
  | "leaf"
  | "leafLight"
  | "lantern";

type Block = {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  rotationY: number;
};

type ThemeLights = {
  clear: number;
  fog: number;
  hemiSky: number;
  hemiGround: number;
  hemiIntensity: number;
  sun: number;
  sunIntensity: number;
  fill: number;
  fillIntensity: number;
  exposure: number;
};

const TONES: Record<Tone, ThemeLights> = {
  dawn: {
    clear: 0xc4a889,
    fog: 0xc4a889,
    hemiSky: 0xffdfbd,
    hemiGround: 0x3d4739,
    hemiIntensity: 1.55,
    sun: 0xffc37a,
    sunIntensity: 3.4,
    fill: 0x93b7c8,
    fillIntensity: 1.25,
    exposure: 1.12,
  },
  sunset: {
    clear: 0x6d3d3b,
    fog: 0x6d3d3b,
    hemiSky: 0xf09b75,
    hemiGround: 0x283630,
    hemiIntensity: 1.25,
    sun: 0xff8a4c,
    sunIntensity: 4.15,
    fill: 0x66578c,
    fillIntensity: 1.05,
    exposure: 1.04,
  },
  moon: {
    clear: 0x162b3b,
    fog: 0x162b3b,
    hemiSky: 0x89a9d6,
    hemiGround: 0x17221d,
    hemiIntensity: 1.28,
    sun: 0xb8d5ff,
    sunIntensity: 3.0,
    fill: 0x607bb0,
    fillIntensity: 1.42,
    exposure: 1.08,
  },
};

const MATERIALS: Record<
  MaterialKey,
  THREE.MeshStandardMaterialParameters
> = {
  grass: { color: 0x526a43, roughness: 0.98 },
  grassLight: { color: 0x668052, roughness: 0.98 },
  stone: { color: 0xb8b09a, roughness: 0.92 },
  stoneDark: { color: 0x77796d, roughness: 0.96 },
  path: { color: 0xc8b99c, roughness: 0.9 },
  pathDark: { color: 0xa79c87, roughness: 0.92 },
  red: { color: 0x9f302a, roughness: 0.76 },
  redDark: { color: 0x68211f, roughness: 0.82 },
  wood: { color: 0x65402b, roughness: 0.86 },
  woodDark: { color: 0x2d201b, roughness: 0.9 },
  plaster: { color: 0xd6c29b, roughness: 0.96 },
  jade: { color: 0x2d665f, roughness: 0.72, metalness: 0.06 },
  jadeLight: { color: 0x4d8875, roughness: 0.74 },
  gold: { color: 0xd5aa55, roughness: 0.58, metalness: 0.24 },
  window: { color: 0x1f4845, roughness: 0.45, metalness: 0.08 },
  water: {
    color: 0x4f9294,
    roughness: 0.25,
    metalness: 0.08,
    transparent: true,
    opacity: 0.86,
  },
  leaf: { color: 0x314f38, roughness: 0.94 },
  leafLight: { color: 0x4d6f45, roughness: 0.94 },
  lantern: {
    color: 0xe34a2e,
    emissive: 0xff3c18,
    emissiveIntensity: 1.8,
    roughness: 0.6,
  },
};

class VoxelComposer {
  private blocks = new Map<MaterialKey, Block[]>();

  add(
    material: MaterialKey,
    x: number,
    y: number,
    z: number,
    sx: number,
    sy: number,
    sz: number,
    rotationY = 0,
  ) {
    const group = this.blocks.get(material) ?? [];
    group.push({
      position: new THREE.Vector3(x, y, z),
      scale: new THREE.Vector3(sx, sy, sz),
      rotationY,
    });
    this.blocks.set(material, group);
  }

  local(
    material: MaterialKey,
    originX: number,
    originZ: number,
    localX: number,
    y: number,
    localZ: number,
    sx: number,
    sy: number,
    sz: number,
    angle = 0,
    extraRotation = 0,
  ) {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    this.add(
      material,
      originX + localX * cosine - localZ * sine,
      y,
      originZ + localX * sine + localZ * cosine,
      sx,
      sy,
      sz,
      angle + extraRotation,
    );
  }

  commit(scene: THREE.Scene) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = new Map<MaterialKey, THREE.MeshStandardMaterial>();
    const dummy = new THREE.Object3D();

    this.blocks.forEach((blocks, key) => {
      const material = new THREE.MeshStandardMaterial(MATERIALS[key]);
      materials.set(key, material);
      const mesh = new THREE.InstancedMesh(geometry, material, blocks.length);
      mesh.name = `voxel-${key}`;
      mesh.castShadow = key !== "water" && key !== "grass";
      mesh.receiveShadow = true;

      blocks.forEach((block, index) => {
        dummy.position.copy(block.position);
        dummy.rotation.set(0, block.rotationY, 0);
        dummy.scale.copy(block.scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(index, dummy.matrix);
      });

      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
      scene.add(mesh);
    });

    return { geometry, materials };
  }
}

function addRoof(
  voxels: VoxelComposer,
  x: number,
  z: number,
  width: number,
  depth: number,
  y: number,
  angle: number,
  style: "hip" | "gable" = "hip",
  levels = 5,
) {
  if (style === "hip") {
    for (let level = 0; level < levels; level += 1) {
      const shrink = level * 1.16;
      voxels.local(
        level % 2 === 0 ? "jade" : "jadeLight",
        x,
        z,
        0,
        y + level * 0.56,
        0,
        width + 4.2 - shrink * 2,
        0.72,
        depth + 4.2 - shrink * 2,
        angle,
      );
    }
  } else {
    const halfRows = 4;
    const rowDepth = (depth + 4.2) / (halfRows * 2 + 1);
    for (let row = -halfRows; row <= halfRows; row += 1) {
      const rise = halfRows - Math.abs(row);
      voxels.local(
        row % 2 === 0 ? "jade" : "jadeLight",
        x,
        z,
        0,
        y + rise * 0.64,
        row * rowDepth,
        width + 4.2,
        0.76,
        rowDepth + 0.12,
        angle,
      );
    }
    voxels.local(
      "gold",
      x,
      z,
      0,
      y + halfRows * 0.64 + 0.52,
      0,
      width + 5,
      0.52,
      0.58,
      angle,
    );
  }

  for (const sideX of [-1, 1]) {
    for (const sideZ of [-1, 1]) {
      for (let tip = 0; tip < 3; tip += 1) {
        voxels.local(
          tip === 2 ? "gold" : "jadeLight",
          x,
          z,
          sideX * (width / 2 + 1.25 + tip * 0.48),
          y + 0.35 + tip * 0.48,
          sideZ * (depth / 2 + 1.25 + tip * 0.48),
          1.25 - tip * 0.16,
          0.48,
          1.25 - tip * 0.16,
          angle,
          Math.PI / 4,
        );
      }
    }
  }
}

function addSteps(
  voxels: VoxelComposer,
  x: number,
  z: number,
  width: number,
  depth: number,
  angle: number,
) {
  for (let step = 0; step < 5; step += 1) {
    voxels.local(
      step % 2 ? "stoneDark" : "stone",
      x,
      z,
      0,
      0.15 + step * 0.27,
      depth / 2 + 3.2 - step * 0.58,
      width * 0.42 + step * 0.2,
      0.28,
      1.3,
      angle,
    );
  }
}

function addLantern(
  voxels: VoxelComposer,
  x: number,
  z: number,
  localX: number,
  localZ: number,
  y: number,
  angle = 0,
) {
  voxels.local("gold", x, z, localX, y + 1.02, localZ, 0.62, 0.22, 0.62, angle);
  voxels.local("lantern", x, z, localX, y + 0.54, localZ, 0.82, 0.82, 0.82, angle);
  voxels.local("gold", x, z, localX, y + 0.08, localZ, 0.54, 0.18, 0.54, angle);
  voxels.local("redDark", x, z, localX, y - 0.25, localZ, 0.15, 0.5, 0.15, angle);
}

function addHall(
  voxels: VoxelComposer,
  {
    x,
    z,
    width,
    depth,
    wallHeight,
    angle = 0,
    roof = "hip",
    main = false,
  }: {
    x: number;
    z: number;
    width: number;
    depth: number;
    wallHeight: number;
    angle?: number;
    roof?: "hip" | "gable";
    main?: boolean;
  },
) {
  const floor = main ? 2.05 : 1.55;
  const roofY = floor + wallHeight + 0.35;

  voxels.local("stoneDark", x, z, 0, 0.38, 0, width + 4.5, 0.76, depth + 4.2, angle);
  voxels.local("stone", x, z, 0, 0.95, 0, width + 3.1, 0.62, depth + 2.9, angle);
  if (main) {
    voxels.local("stone", x, z, 0, 1.47, 0, width + 1.8, 0.45, depth + 1.7, angle);
  }

  voxels.local("plaster", x, z, 0, floor + wallHeight / 2, 0, width - 1.8, wallHeight, depth - 1.7, angle);
  voxels.local("redDark", x, z, 0, floor + 1.05, depth / 2 - 0.48, width - 2.2, 2.1, 0.7, angle);

  const columnXs = [-width / 2 + 1, -width / 6, width / 6, width / 2 - 1];
  for (const columnX of columnXs) {
    for (const columnZ of [-depth / 2 + 0.72, depth / 2 - 0.72]) {
      voxels.local("red", x, z, columnX, floor + wallHeight / 2, columnZ, 0.92, wallHeight + 0.8, 0.92, angle);
      voxels.local("gold", x, z, columnX, roofY - 0.55, columnZ, 1.65, 0.45, 0.58, angle);
      voxels.local("jadeLight", x, z, columnX, roofY - 0.06, columnZ, 0.55, 0.55, 1.45, angle);
    }
  }

  const doorCount = main ? 5 : 3;
  const doorWidth = Math.min(2.55, (width - 4) / doorCount);
  for (let door = 0; door < doorCount; door += 1) {
    const doorX = (door - (doorCount - 1) / 2) * (doorWidth + 0.24);
    voxels.local("woodDark", x, z, doorX, floor + 2.05, depth / 2 + 0.02, doorWidth, 4.1, 0.36, angle);
    voxels.local("window", x, z, doorX, floor + 3.1, depth / 2 + 0.24, doorWidth - 0.32, 1.4, 0.16, angle);
    for (const studX of [-0.28, 0.28]) {
      voxels.local("gold", x, z, doorX + studX, floor + 1.36, depth / 2 + 0.27, 0.13, 0.13, 0.13, angle);
    }
  }

  voxels.local("woodDark", x, z, 0, roofY - 0.95, depth / 2 + 0.42, main ? 5.8 : 3.8, 1.25, 0.38, angle);
  for (let mark = -2; mark <= 2; mark += 1) {
    voxels.local("gold", x, z, mark * 0.65, roofY - 0.95, depth / 2 + 0.66, 0.28, 0.56, 0.12, angle);
  }

  addRoof(voxels, x, z, width, depth, roofY, angle, roof, main ? 6 : 5);
  addSteps(voxels, x, z, width, depth, angle);
  addLantern(voxels, x, z, -width * 0.38, depth / 2 + 1.15, floor + 3.2, angle);
  addLantern(voxels, x, z, width * 0.38, depth / 2 + 1.15, floor + 3.2, angle);
}

function addGate(voxels: VoxelComposer, x: number, z: number) {
  const width = 26;
  const depth = 8;
  const floor = 1.45;
  const height = 6.7;
  const roofY = floor + height + 0.45;

  voxels.add("stoneDark", x, 0.4, z, width + 4, 0.8, depth + 3);
  voxels.add("stone", x, 0.98, z, width + 2.5, 0.55, depth + 1.8);
  voxels.add("redDark", x - 9.3, floor + 2.6, z, 6.2, 5.2, depth - 1.4);
  voxels.add("redDark", x + 9.3, floor + 2.6, z, 6.2, 5.2, depth - 1.4);

  for (const columnX of [-12, -6.1, 6.1, 12]) {
    voxels.add("red", x + columnX, floor + height / 2, z + depth / 2 - 0.7, 1.05, height + 0.7, 1.05);
    voxels.add("gold", x + columnX, roofY - 0.62, z + depth / 2 - 0.7, 1.85, 0.48, 0.62);
  }

  voxels.add("woodDark", x, floor + 5.15, z + depth / 2 + 0.15, 6.3, 1.35, 0.4);
  for (let mark = -2; mark <= 2; mark += 1) {
    voxels.add("gold", x + mark * 0.72, floor + 5.15, z + depth / 2 + 0.4, 0.32, 0.64, 0.12);
  }
  addRoof(voxels, x, z, width, depth, roofY, 0, "gable", 5);
  addSteps(voxels, x, z, width, depth, 0);
  addLantern(voxels, x, z, -5.2, depth / 2 + 0.9, floor + 3.2);
  addLantern(voxels, x, z, 5.2, depth / 2 + 0.9, floor + 3.2);
}

function addTower(voxels: VoxelComposer, x: number, z: number, drum = false) {
  voxels.add("stoneDark", x, 0.45, z, 12, 0.9, 12);
  voxels.add("stone", x, 1.02, z, 10.7, 0.5, 10.7);

  for (const [level, y, size, height] of [
    [0, 1.3, 8.2, 5.7],
    [1, 8.2, 6.2, 4.3],
  ] as const) {
    const centerY = y + height / 2;
    voxels.add("redDark", x, centerY, z, size - 1.6, height, size - 1.6);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        voxels.add("red", x + sx * (size / 2 - 0.62), centerY, z + sz * (size / 2 - 0.62), 0.78, height + 0.4, 0.78);
        voxels.add("gold", x + sx * (size / 2 - 0.62), y + height - 0.4, z + sz * (size / 2 - 0.62), 1.35, 0.42, 0.52);
      }
    }
    addRoof(voxels, x, z, size, size, y + height, 0, "hip", level === 0 ? 4 : 3);
  }

  if (drum) {
    voxels.add("lantern", x, 5.0, z + 4.35, 2.8, 2.8, 0.8);
    voxels.add("gold", x, 5.0, z + 4.78, 1.15, 1.15, 0.18);
  } else {
    voxels.add("gold", x, 5.1, z + 4.3, 2.25, 2.65, 0.75);
    voxels.add("woodDark", x, 6.35, z + 4.3, 3.7, 0.35, 0.42);
  }
}

function addPagodaRoof(
  voxels: VoxelComposer,
  x: number,
  z: number,
  size: number,
  y: number,
) {
  for (let level = 0; level < 3; level += 1) {
    voxels.add(
      level === 1 ? "jadeLight" : "jade",
      x,
      y + level * 0.42,
      z,
      size + 3.4 - level * 1.5,
      0.58,
      size + 3.4 - level * 1.5,
    );
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      voxels.add("gold", x + sx * (size / 2 + 1.9), y + 0.72, z + sz * (size / 2 + 1.9), 0.7, 0.7, 0.7, Math.PI / 4);
    }
  }
}

function addPagoda(voxels: VoxelComposer, x: number, z: number) {
  voxels.add("stoneDark", x, 0.42, z, 13.4, 0.84, 13.4);
  voxels.add("stone", x, 1.0, z, 11.8, 0.5, 11.8);
  let baseY = 1.25;
  for (let tier = 0; tier < 4; tier += 1) {
    const size = 7.6 - tier * 1.15;
    const bodyHeight = 3.2;
    voxels.add("redDark", x, baseY + bodyHeight / 2, z, size - 1.25, bodyHeight, size - 1.25);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        voxels.add("red", x + sx * (size / 2 - 0.5), baseY + bodyHeight / 2, z + sz * (size / 2 - 0.5), 0.62, bodyHeight + 0.2, 0.62);
      }
    }
    voxels.add("window", x, baseY + 1.75, z + size / 2, 1.35, 1.25, 0.25);
    addPagodaRoof(voxels, x, z, size, baseY + bodyHeight);
    baseY += 4.35;
  }
  for (let spire = 0; spire < 5; spire += 1) {
    voxels.add("gold", x, baseY + spire * 0.58, z, 1.35 - spire * 0.18, 0.62, 1.35 - spire * 0.18);
  }
}

function addPaving(
  voxels: VoxelComposer,
  xStart: number,
  xEnd: number,
  zStart: number,
  zEnd: number,
) {
  const minX = Math.min(xStart, xEnd);
  const maxX = Math.max(xStart, xEnd);
  const minZ = Math.min(zStart, zEnd);
  const maxZ = Math.max(zStart, zEnd);
  let row = 0;
  for (let z = minZ; z <= maxZ; z += 2.05) {
    let column = 0;
    for (let x = minX; x <= maxX; x += 2.05) {
      voxels.add((row + column) % 3 === 0 ? "pathDark" : "path", x, 0.08, z, 1.85, 0.18, 1.85);
      column += 1;
    }
    row += 1;
  }
}

function addPool(voxels: VoxelComposer, x: number, z: number) {
  voxels.add("stoneDark", x, 0.03, z, 11.8, 0.45, 7.8);
  voxels.add("water", x, 0.3, z, 9.8, 0.18, 5.8);
  for (const sx of [-1, 1]) {
    voxels.add("stone", x + sx * 5.45, 0.47, z, 0.9, 0.72, 7.6);
  }
  for (const sz of [-1, 1]) {
    voxels.add("stone", x, 0.47, z + sz * 3.45, 10.2, 0.72, 0.9);
  }
  for (const lx of [-2.6, 0, 2.7]) {
    voxels.add("leafLight", x + lx, 0.62, z + (lx % 2 === 0 ? 0.8 : -0.7), 1.0, 0.22, 1.0, Math.PI / 4);
    voxels.add("gold", x + lx, 0.9, z + (lx % 2 === 0 ? 0.8 : -0.7), 0.32, 0.4, 0.32);
  }
}

function addTree(voxels: VoxelComposer, x: number, z: number, scale = 1) {
  voxels.add("stone", x, 0.25, z, 3.2 * scale, 0.5, 3.2 * scale);
  voxels.add("wood", x, 2.5 * scale, z, 0.8 * scale, 5 * scale, 0.8 * scale);
  const clusters: Array<[number, number, number, MaterialKey]> = [
    [0, 5.8, 0, "leaf"],
    [-1.4, 5.2, 0.5, "leafLight"],
    [1.35, 5.3, 0.3, "leaf"],
    [-0.4, 6.7, -0.7, "leafLight"],
    [0.7, 6.5, 0.8, "leaf"],
  ];
  for (const [dx, dy, dz, material] of clusters) {
    voxels.add(material, x + dx * scale, dy * scale, z + dz * scale, 3.2 * scale, 2.4 * scale, 3.2 * scale);
  }
}

function addLion(voxels: VoxelComposer, x: number, z: number, mirrored = false) {
  const direction = mirrored ? -1 : 1;
  voxels.add("stoneDark", x, 0.35, z, 2.4, 0.7, 2.4);
  voxels.add("stone", x, 1.25, z, 1.45, 1.25, 1.35);
  voxels.add("stone", x, 2.35, z + 0.05, 1.35, 1.35, 1.35);
  voxels.add("stone", x, 3.25, z + 0.28, 1.7, 1.1, 1.65);
  voxels.add("stoneDark", x - 0.38, 3.42, z + 1.05, 0.24, 0.24, 0.24);
  voxels.add("stoneDark", x + 0.38, 3.42, z + 1.05, 0.24, 0.24, 0.24);
  voxels.add("stone", x + direction * 1.0, 0.95, z + 0.7, 0.9, 0.9, 0.9);
}

function buildPalace(scene: THREE.Scene) {
  const voxels = new VoxelComposer();

  voxels.add("grass", 0, -0.72, 0, 108, 1.45, 108);
  for (let z = -49; z <= 49; z += 4) {
    for (let x = -49; x <= 49; x += 4) {
      if ((x * 3 + z * 5) % 11 === 0) {
        voxels.add("grassLight", x, 0.04, z, 2.8, 0.12, 2.8);
      }
    }
  }

  addPaving(voxels, -4.1, 4.1, -12, 47);
  addPaving(voxels, -18, 18, 2, 8);
  addPaving(voxels, -18, 18, -24, -18);
  addPaving(voxels, -37, 37, -42, -36);

  addHall(voxels, { x: 0, z: -22, width: 30, depth: 15.5, wallHeight: 8.5, main: true });
  addHall(voxels, { x: -24, z: 5, width: 14, depth: 9, wallHeight: 5.5, angle: Math.PI / 2, roof: "gable" });
  addHall(voxels, { x: 24, z: 5, width: 14, depth: 9, wallHeight: 5.5, angle: -Math.PI / 2, roof: "gable" });
  addHall(voxels, { x: -24, z: -22, width: 14, depth: 9, wallHeight: 5.5, angle: Math.PI / 2, roof: "hip" });
  addHall(voxels, { x: 24, z: -22, width: 14, depth: 9, wallHeight: 5.5, angle: -Math.PI / 2, roof: "hip" });

  addGate(voxels, 0, 39);
  addTower(voxels, -22, 24, false);
  addTower(voxels, 22, 24, true);
  addPagoda(voxels, -36, -39);
  addPagoda(voxels, 36, -39);

  addPool(voxels, -13.5, 10.5);
  addPool(voxels, 13.5, 10.5);
  addLion(voxels, -8.2, 45, false);
  addLion(voxels, 8.2, 45, true);

  for (const [x, z, scale] of [
    [-42, 15, 1.0],
    [42, 15, 1.0],
    [-41, -12, 1.15],
    [41, -12, 1.15],
    [-18, -43, 0.9],
    [18, -43, 0.9],
  ] as const) {
    addTree(voxels, x, z, scale);
  }

  for (const x of [-49.5, 49.5]) {
    voxels.add("redDark", x, 1.6, 0, 1.1, 3.2, 100);
    for (let z = -48; z <= 48; z += 2.5) {
      voxels.add("jade", x, 3.45, z, 1.65, 0.62, 2.25);
    }
  }
  voxels.add("redDark", 0, 1.6, -49.5, 100, 3.2, 1.1);
  for (let x = -48; x <= 48; x += 2.5) {
    voxels.add("jade", x, 3.45, -49.5, 2.25, 0.62, 1.65);
  }
  voxels.add("redDark", -34.5, 1.6, 49.5, 31, 3.2, 1.1);
  voxels.add("redDark", 34.5, 1.6, 49.5, 31, 3.2, 1.1);
  for (const start of [-49, 21]) {
    for (let x = start; x <= start + 28; x += 2.5) {
      voxels.add("jade", x, 3.45, 49.5, 2.25, 0.62, 1.65);
    }
  }

  for (const z of [31, 18, 4, -9]) {
    addLantern(voxels, 0, 0, -5.8, z, 2.2);
    addLantern(voxels, 0, 0, 5.8, z, 2.2);
    voxels.add("woodDark", -5.8, 1.8, z, 0.34, 3.6, 0.34);
    voxels.add("woodDark", 5.8, 1.8, z, 0.34, 3.6, 0.34);
  }

  return voxels.commit(scene);
}

function addAtmosphere(scene: THREE.Scene) {
  const count = 220;
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const angle = index * 2.39996;
    const radius = 18 + (index % 38) * 1.2;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = 5 + ((index * 17) % 33);
    positions[index * 3 + 2] = Math.sin(angle) * radius - 2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xffd7a0,
    size: 0.16,
    transparent: true,
    opacity: 0.52,
    depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);
  points.name = "sunlit-dust";
  scene.add(points);
  return points;
}

export default function VoxelPalace() {
  const mountRef = useRef<HTMLDivElement>(null);
  const toneRef = useRef<Tone>("dawn");
  const [tone, setTone] = useState<Tone>("dawn");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    toneRef.current = tone;
  }, [tone]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(TONES.dawn.fog, 0.0042);

    const initialCompact = mount.clientWidth < 680;
    const camera = new THREE.PerspectiveCamera(initialCompact ? 52 : 42, mount.clientWidth / mount.clientHeight, 0.1, 320);
    camera.position.set(...(initialCompact ? ([135, 105, 165] as const) : ([77, 59, 91] as const)));
    camera.lookAt(0, 5, -5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = TONES.dawn.exposure;
    renderer.setClearColor(TONES.dawn.clear);
    renderer.domElement.className = "palace-canvas";
    renderer.domElement.setAttribute("aria-label", "可旋转的中国古典体素建筑群三维场景");
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 5, -5);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.minDistance = 48;
    controls.maxDistance = 270;
    controls.maxPolarAngle = Math.PI * 0.46;
    controls.minPolarAngle = Math.PI * 0.18;
    controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    controls.autoRotateSpeed = 0.28;

    let resumeTimer = 0;
    const pauseRotation = () => {
      controls.autoRotate = false;
      window.clearTimeout(resumeTimer);
    };
    const resumeRotation = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }, 3200);
    };
    controls.addEventListener("start", pauseRotation);
    controls.addEventListener("end", resumeRotation);

    const hemisphere = new THREE.HemisphereLight(TONES.dawn.hemiSky, TONES.dawn.hemiGround, TONES.dawn.hemiIntensity);
    scene.add(hemisphere);

    const sun = new THREE.DirectionalLight(TONES.dawn.sun, TONES.dawn.sunIntensity);
    sun.position.set(-46, 72, 58);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -72;
    sun.shadow.camera.right = 72;
    sun.shadow.camera.top = 72;
    sun.shadow.camera.bottom = -72;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 180;
    sun.shadow.bias = -0.00025;
    scene.add(sun);

    const fill = new THREE.DirectionalLight(TONES.dawn.fill, TONES.dawn.fillIntensity);
    fill.position.set(55, 34, -52);
    scene.add(fill);

    const { geometry, materials } = buildPalace(scene);
    const dust = addAtmosphere(scene);

    const applyTone = (nextTone: Tone) => {
      const theme = TONES[nextTone];
      renderer.setClearColor(theme.clear);
      renderer.toneMappingExposure = theme.exposure;
      if (scene.fog) scene.fog.color.setHex(theme.fog);
      hemisphere.color.setHex(theme.hemiSky);
      hemisphere.groundColor.setHex(theme.hemiGround);
      hemisphere.intensity = theme.hemiIntensity;
      sun.color.setHex(theme.sun);
      sun.intensity = theme.sunIntensity;
      fill.color.setHex(theme.fill);
      fill.intensity = theme.fillIntensity;
      const dustMaterial = dust.material as THREE.PointsMaterial;
      dustMaterial.color.setHex(nextTone === "moon" ? 0xb6d9ff : 0xffd7a0);
      dustMaterial.opacity = nextTone === "moon" ? 0.28 : 0.52;
      const lantern = materials.get("lantern");
      if (lantern) lantern.emissiveIntensity = nextTone === "moon" ? 4.8 : nextTone === "sunset" ? 2.8 : 1.8;
    };

    applyTone(toneRef.current);
    let previousTone = toneRef.current;
    let frame = 0;
    let firstFrame = true;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      if (previousTone !== toneRef.current) {
        previousTone = toneRef.current;
        applyTone(previousTone);
      }
      dust.rotation.y = elapsed * 0.004;
      const lantern = materials.get("lantern");
      if (lantern) {
        const base = toneRef.current === "moon" ? 4.8 : toneRef.current === "sunset" ? 2.8 : 1.8;
        lantern.emissiveIntensity = base + Math.sin(elapsed * 2.2) * 0.18;
      }
      controls.update();
      renderer.render(scene, camera);
      if (firstFrame) {
        firstFrame = false;
        window.requestAnimationFrame(() => setReady(true));
      }
    };
    animate();

    let compactLayout = initialCompact;
    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const nextCompact = width < 680;
      camera.aspect = width / height;
      camera.fov = nextCompact ? 52 : 42;
      if (nextCompact !== compactLayout) {
        compactLayout = nextCompact;
        camera.position.set(...(nextCompact ? ([135, 105, 165] as const) : ([77, 59, 91] as const)));
        controls.target.set(0, 5, -5);
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, nextCompact ? 1.35 : 1.7));
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      observer.disconnect();
      controls.removeEventListener("start", pauseRotation);
      controls.removeEventListener("end", resumeRotation);
      controls.dispose();
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      dust.geometry.dispose();
      (dust.material as THREE.Material).dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <main className={`palace-shell tone-${tone}`}>
      <div ref={mountRef} className="scene-mount" />

      <header className="palace-header">
        <div className="title-lockup">
          <div className="seal" aria-hidden="true">宸</div>
          <div>
            <p className="eyebrow">VOXEL IMPERIAL COURT</p>
            <h1>紫宸宫阙</h1>
          </div>
        </div>
        <div className="tone-picker" role="group" aria-label="选择场景光线">
          {([
            ["dawn", "晨曦"],
            ["sunset", "暮色"],
            ["moon", "月夜"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={tone === value ? "active" : ""}
              aria-pressed={tone === value}
              onClick={() => setTone(value)}
            >
              <span aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </header>

      <aside className="site-map" aria-label="建筑群组成">
        <p className="map-kicker">中轴院落</p>
        <div className="axis-line" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <ol>
          <li><b>01</b><span>山门</span></li>
          <li><b>02</b><span>钟鼓楼</span></li>
          <li><b>03</b><span>东西配殿</span></li>
          <li><b>04</b><span>紫宸正殿</span></li>
          <li><b>05</b><span>双塔</span></li>
        </ol>
      </aside>

      <div className="scene-caption">
        <p><span aria-hidden="true">◫</span> 拖拽环游 · 滚轮缩放</p>
        <p className="scene-count">10 座建筑 · 实例化体素</p>
      </div>

      <div className={`loading-veil ${ready ? "is-ready" : ""}`} aria-hidden={ready}>
        <div className="loading-seal">宸</div>
        <p>宫阙入画</p>
      </div>

      <p className="sr-only">
        场景沿中轴对称布置，包含山门、主殿、四座配殿、钟鼓楼与两座宝塔，并设有道路、庭院、池塘、树木、灯笼和石狮。
      </p>
    </main>
  );
}
