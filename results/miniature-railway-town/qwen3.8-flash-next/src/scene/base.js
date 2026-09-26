import * as THREE from 'three';
import { BASE, HX, HZ } from './layout.js';
import { woodTexture, skyTexture } from '../util/textures.js';
import { box, mergedMesh, mat } from '../util/geo.js';

/**
 * The display stand: moulded plinth, raised border frame that clips the view of the
 * terrain edges, brass corner brackets, feet and a nameplate. Everything above the
 * ground plate is scenery; this is what makes it read as an object on a table.
 */
export function buildBase() {
  const group = new THREE.Group();
  group.name = 'base';

  const wood = woodTexture(false);
  const darkWood = woodTexture(true);
  const t3 = (repeat) => {
    const c = wood.clone();
    c.needsUpdate = true;
    c.repeat.set(repeat[0], repeat[1]);
    return c;
  };

  const plinthMat = mat({ map: t3([5, 1]), color: 0xb27c4e, roughness: 0.62, metalness: 0.04 });
  const railMat = mat({ map: t3([4, 1]), color: 0xa9713f, roughness: 0.55, metalness: 0.05 });
  const railTopMat = mat({ map: t3([6, 1]), color: 0xbb8452, roughness: 0.5, metalness: 0.05 });
  const brassMat = mat({ color: 0xc0a052, roughness: 0.34, metalness: 0.85 });
  const feltMat = mat({ map: darkWood, color: 0x4b3a2c, roughness: 0.95 });

  const oy = -0.02;                       // top of the plinth rim, just under the scenery
  const pw = BASE.groundW + 1.2, pd = BASE.groundD + 1.2;

  // The stand is a case, not a slab: the scenery plate dips below its rim wherever
  // the river and pond are cut, so a solid top face would hide the water entirely.
  // The rim is therefore built as four bands with an opening the plate sits in, and
  // a dark tray closes the bottom of the case well below the channel.
  const bandW = (pw - (HX * 2 - 0.04)) / 2, bandD = (pd - (HZ * 2 - 0.04)) / 2;
  const TRAY_TOP = -1.25;
  const plinthParts = [
    box(pw, BASE.plinthH, bandD, 0, oy - BASE.plinthH / 2, -(pd / 2 - bandD / 2)),
    box(pw, BASE.plinthH, bandD, 0, oy - BASE.plinthH / 2, pd / 2 - bandD / 2),
    box(bandW, BASE.plinthH, HZ * 2 - 0.04, -(pw / 2 - bandW / 2), oy - BASE.plinthH / 2, 0),
    box(bandW, BASE.plinthH, HZ * 2 - 0.04, pw / 2 - bandW / 2, oy - BASE.plinthH / 2, 0),
    box(pw, 0.06, pd, 0, TRAY_TOP - 0.03, 0),
  ];
  const plinth = mergedMesh(plinthParts, plinthMat, 'plinth');
  plinth.castShadow = true;
  plinth.receiveShadow = true;
  group.add(plinth);

  // moulded step below the plinth so the stand reads as joinery rather than a slab
  const skirt = mergedMesh([box(pw - 0.55, 0.26, pd - 0.55, 0, oy - BASE.plinthH - 0.13, 0)], feltMat, 'skirt');
  skirt.receiveShadow = true;
  group.add(skirt);

  // border frame: four rails around the top edge, plus an inner lip
  const fw = BASE.frameW, fh = BASE.frameH;
  const rails = [
    box(pw, fh, fw, 0, oy + fh / 2, -(HZ + fw / 2)),
    box(pw, fh, fw, 0, oy + fh / 2, HZ + fw / 2),
    box(fw, fh, pd - fw * 2, -(HX + fw / 2), oy + fh / 2, 0),
    box(fw, fh, pd - fw * 2, HX + fw / 2, oy + fh / 2, 0),
  ];
  const frame = mergedMesh(rails, railMat, 'frame');
  frame.castShadow = true;
  frame.receiveShadow = true;
  group.add(frame);

  // cap strip on the frame + a thin shadow gap on the inner face
  const caps = [
    box(pw + 0.06, 0.09, fw + 0.06, 0, oy + fh + 0.045, -(HZ + fw / 2)),
    box(pw + 0.06, 0.09, fw + 0.06, 0, oy + fh + 0.045, HZ + fw / 2),
    box(fw + 0.06, 0.09, pd - fw * 2 + 0.06, -(HX + fw / 2), oy + fh + 0.045, 0),
    box(fw + 0.06, 0.09, pd - fw * 2 + 0.06, HX + fw / 2, oy + fh + 0.045, 0),
  ];
  const capMesh = mergedMesh(caps, railTopMat, 'frame-caps');
  capMesh.castShadow = true;
  group.add(capMesh);

  const inner = [
    box(pw - fw * 2 + 0.02, 0.05, 0.05, 0, oy + 0.02, -(HZ + fw)),
    box(pw - fw * 2 + 0.02, 0.05, 0.05, 0, oy + 0.02, HZ + fw),
  ];
  group.add(mergedMesh(inner, brassMat, 'inner-line'));

  // brass corner brackets and feet
  const brackets = [];
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      brackets.push(box(0.34, 0.34, 0.055, sx * (pw / 2 - 0.22), oy - 0.3, sz * (pd / 2 + 0.005)));
      brackets.push(box(0.055, 0.34, 0.34, sx * (pw / 2 + 0.005), oy - 0.3, sz * (pd / 2 - 0.22)));
      brackets.push(box(0.30, 0.30, 0.05, sx * (HX + fw / 2), oy + fh - 0.18, sz * (HZ + fw + 0.005)));
    }
  }
  group.add(mergedMesh(brackets, brassMat, 'brackets'));

  const feet = new THREE.Group();
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const g = new THREE.CylinderGeometry(0.30, 0.36, 0.20, 20);
      const m = new THREE.Mesh(g, brassMat);
      m.position.set(sx * (pw / 2 - 0.62), oy - BASE.plinthH - 0.36, sz * (pd / 2 - 0.62));
      m.castShadow = true;
      feet.add(m);
    }
  }
  group.add(feet);

  // nameplate on the near long edge
  const plate = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.62, 0.06), brassMat);
  plate.position.set(-6.0, oy - 0.62, pd / 2 + 0.02);
  group.add(plate);
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(4.05, 0.34),
    new THREE.MeshBasicMaterial({ map: nameplateTexture(), transparent: true })
  );
  label.position.set(-6.0, oy - 0.62, pd / 2 + 0.055);
  group.add(label);

  return { group, materials: { plinthMat, railMat, brassMat } };
}

function nameplateTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 64;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 512, 64);
  ctx.fillStyle = '#2b241c';
  ctx.font = 'bold 30px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MEADOWBANK  ·  HO 1:87', 256, 34);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/**
 * Studio backdrop: a tabletop that takes the stand's shadow. Its alpha falls off
 * radially so the surface dissolves into the sky gradient instead of ending on a
 * hard edge that cuts across the frame.
 */
export function buildTable() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 30, 128, 128, 127);
  g.addColorStop(0, '#ffffff');
  g.addColorStop(0.5, '#f2f2f2');
  g.addColorStop(0.82, '#5a5a5a');
  g.addColorStop(1, '#000000');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const alpha = new THREE.CanvasTexture(c);

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(78, 60),
    mat({ color: 0x2a2320, roughness: 0.92, metalness: 0, alphaMap: alpha, transparent: true, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, -1.9, 5);
  mesh.receiveShadow = true;
  mesh.name = 'table';
  return mesh;
}

export function backgroundTexture(preset) {
  return skyTexture(preset.skyTop, preset.skyMid, preset.skyBottom, preset.stars || 0);
}
