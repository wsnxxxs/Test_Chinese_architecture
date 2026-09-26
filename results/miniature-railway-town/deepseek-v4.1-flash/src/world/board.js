import * as THREE from 'three';
import { BOARD } from './layout.js';

// ---------------------------------------------------------------------------
// The display base: a solid wooden plinth with a moulded rim, small turned
// feet, a brass plaque and the table top it stands on.
// ---------------------------------------------------------------------------

export function buildBoard(scene, M, batcher) {
  const group = new THREE.Group();
  group.name = 'board';

  const W = BOARD.width;
  const D = BOARD.depth;

  // --- plinth slab ---------------------------------------------------------
  const slabH = BOARD.deckBottom - BOARD.baseBottom;
  batcher.add(
    new THREE.BoxGeometry(W, slabH, D),
    new THREE.Matrix4().makeTranslation(0, (BOARD.deckBottom + BOARD.baseBottom) / 2, 0),
    M.woodDark,
    { density: 0.09 }
  );

  // --- deck ring: the wooden margin the scenery sits in --------------------
  const deckH = BOARD.deckTop - BOARD.deckBottom;
  const deckY = (BOARD.deckTop + BOARD.deckBottom) / 2;
  const bandX = BOARD.rimOuterX - BOARD.maxX; // 3
  const bandZ = BOARD.rimOuterZ - BOARD.maxZ; // 3
  batcher.add(
    new THREE.BoxGeometry(W, deckH, bandZ),
    new THREE.Matrix4().makeTranslation(0, deckY, -(BOARD.maxZ + bandZ / 2)),
    M.woodRim,
    { density: 0.1 }
  );
  batcher.add(
    new THREE.BoxGeometry(W, deckH, bandZ),
    new THREE.Matrix4().makeTranslation(0, deckY, BOARD.maxZ + bandZ / 2),
    M.woodRim,
    { density: 0.1 }
  );
  batcher.add(
    new THREE.BoxGeometry(bandX, deckH, BOARD.maxZ * 2),
    new THREE.Matrix4().makeTranslation(-(BOARD.maxX + bandX / 2), deckY, 0),
    M.woodRim,
    { density: 0.1 }
  );
  batcher.add(
    new THREE.BoxGeometry(bandX, deckH, BOARD.maxZ * 2),
    new THREE.Matrix4().makeTranslation(BOARD.maxX + bandX / 2, deckY, 0),
    M.woodRim,
    { density: 0.1 }
  );

  // --- rim wall (moulded picture frame profile) ---------------------------
  const rimOuterX = BOARD.rimOuterX;
  const rimOuterZ = BOARD.rimOuterZ;
  const bodyH = BOARD.rimHeight * 0.78;
  const capH = BOARD.rimHeight - bodyH;
  const inset = 0.32;
  const addRim = (w, d, x, z) => {
    batcher.add(
      new THREE.BoxGeometry(w, bodyH, d),
      new THREE.Matrix4().makeTranslation(x, bodyH / 2, z),
      M.woodRim,
      { density: 0.16 }
    );
    batcher.add(
      new THREE.BoxGeometry(w - inset * 2, capH, d - inset * 2),
      new THREE.Matrix4().makeTranslation(x, bodyH + capH / 2, z),
      M.woodBase,
      { density: 0.16 }
    );
  };
  const zBand = rimOuterZ - BOARD.rimInnerZ;
  const zCentre = (rimOuterZ + BOARD.rimInnerZ) / 2;
  const xBand = rimOuterX - BOARD.rimInnerX;
  const xCentre = (rimOuterX + BOARD.rimInnerX) / 2;
  addRim(rimOuterX * 2, zBand, 0, -zCentre);
  addRim(rimOuterX * 2, zBand, 0, zCentre);
  addRim(xBand, BOARD.rimInnerZ * 2, -xCentre, 0);
  addRim(xBand, BOARD.rimInnerZ * 2, xCentre, 0);

  // --- turned feet ---------------------------------------------------------
  const footGeo = new THREE.CylinderGeometry(0.95, 1.15, 0.34, 14);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      batcher.add(
        footGeo,
        new THREE.Matrix4().makeTranslation(sx * (W / 2 - 7), BOARD.baseBottom - 0.17, sz * (D / 2 - 7)),
        M.woodDark,
        { density: 0.4, project: false }
      );
    }
  }

  // --- brass plaque --------------------------------------------------------
  const plaque = new THREE.BoxGeometry(19, 4.4, 0.16);
  batcher.add(plaque, new THREE.Matrix4().makeTranslation(0, -1.35, D / 2 + 0.06), M.plaque, {
    density: 0.05,
    project: false,
    cast: false,
  });

  // --- table top -----------------------------------------------------------
  const tableGeo = new THREE.PlaneGeometry(310, 250, 1, 1);
  tableGeo.rotateX(-Math.PI / 2);
  tableGeo.translate(0, BOARD.baseBottom - 0.33, 0);
  const table = new THREE.Mesh(tableGeo, M.table);
  table.receiveShadow = true;
  table.name = 'table';
  group.add(table);

  const meshes = batcher.build(group);
  scene.add(group);
  return { group, meshes };
}
