import * as THREE from 'three';
import { STATION_DISTANCE, TRACK_LENGTH, trackAt } from './railway.js';

const material = (color, options = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.68, ...options });

function part(parent, geometry, mat, x, y, z) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function block(parent, mat, w, h, d, x, y, z) {
  return part(parent, new THREE.BoxGeometry(w, h, d), mat, x, y, z);
}

function wheels(group, dark, brass, positions) {
  for (const z of positions) for (const side of [-1, 1]) {
    const wheel = part(group, new THREE.CylinderGeometry(0.18,0.18,0.065,12), dark, side * 0.43, 0.515, z);
    wheel.rotation.z = Math.PI / 2;
    const hub = part(group, new THREE.CylinderGeometry(0.048,0.048,0.07,9), brass, side * 0.476, 0.515, z);
    hub.rotation.z = Math.PI / 2;
  }
}

function curvedRoof(group, width, length, y, color) {
  const shape = new THREE.Shape();
  shape.moveTo(-width/2,0);
  shape.quadraticCurveTo(0,0.23,width/2,0);
  shape.lineTo(width/2,-0.065);
  shape.quadraticCurveTo(0,0.15,-width/2,-0.065);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape,{ depth:length, bevelEnabled:false, curveSegments:12 });
  const roof = part(group,geometry,color,0,y,-length/2);
  roof.castShadow = true;
}

function locomotive(windowMat) {
  const group = new THREE.Group();
  const green = material(0x315b53);
  const greenLight = material(0x53746a);
  const maroon = material(0x81413e);
  const black = material(0x323b3c,{ metalness:0.28,roughness:0.55 });
  const brass = material(0xc7a466,{ metalness:0.66,roughness:0.32 });
  const cream = material(0xeadabb);

  block(group,black,0.88,0.16,1.72,0,0.63,0);
  block(group,green,0.79,0.48,0.88,0,0.88,0.19);
  const boiler = part(group,new THREE.CylinderGeometry(0.315,0.315,0.92,12),greenLight,0,0.98,0.26);
  boiler.rotation.x = Math.PI / 2;
  block(group,maroon,0.86,0.19,0.15,0,0.73,0.81);
  block(group,green,0.78,0.72,0.52,0,1.01,-0.53);
  block(group,black,0.9,0.095,0.7,0,1.42,-0.52);
  for (const side of [-1,1]) {
    block(group,windowMat,0.035,0.31,0.25,side*0.405,1.12,-0.52);
    block(group,brass,0.035,0.024,0.82,side*0.32,0.91,0.21);
  }
  const stack=part(group,new THREE.CylinderGeometry(0.11,0.14,0.33,10),black,0,1.48,0.58);
  stack.castShadow=true;
  part(group,new THREE.CylinderGeometry(0.16,0.13,0.07,10),black,0,1.66,0.58);
  part(group,new THREE.CylinderGeometry(0.13,0.13,0.18,10),brass,0,1.38,0.03);
  part(group,new THREE.SphereGeometry(0.105,10,8),brass,0,1.5,0.03);
  block(group,brass,0.6,0.035,0.04,0,0.92,0.72);
  block(group,black,0.9,0.14,0.13,0,0.58,0.91);
  part(group,new THREE.SphereGeometry(0.1,12,9),cream,0,0.99,0.79);
  wheels(group,black,brass,[-0.56,0,0.55]);
  block(group,black,0.16,0.08,0.37,0,0.55,-0.98);
  return group;
}

function carriage(color, trimColor, windowMat) {
  const group = new THREE.Group();
  const body = material(color);
  const trim = material(trimColor);
  const roof = material(0x4b5855);
  const black = material(0x363b39,{ metalness:0.26,roughness:0.55 });
  const brass = material(0xbd9c64,{ metalness:0.5,roughness:0.4 });
  block(group,black,0.86,0.12,1.69,0,0.61,0);
  block(group,body,0.83,0.68,1.55,0,0.99,0);
  curvedRoof(group,0.92,1.68,1.355,roof);
  for (const side of [-1,1]) {
    block(group,trim,0.028,0.038,1.53,side*0.43,0.8,0);
    block(group,trim,0.028,0.038,1.53,side*0.43,1.28,0);
    for (const z of [-0.5,0,0.5]) {
      block(group,trim,0.042,0.4,0.35,side*0.43,1.08,z);
      block(group,windowMat,0.047,0.31,0.27,side*0.461,1.08,z);
    }
  }
  for (const end of [-1,1]) {
    block(group,trim,0.71,0.045,0.04,0,0.82,end*0.8);
    block(group,black,0.14,0.08,0.26,0,0.56,end*0.89);
  }
  wheels(group,black,brass,[-0.48,0.48]);
  return group;
}

export function createTrain(scene) {
  const windowMat = material(0xc5d4ba,{ emissive:0xffd78a,emissiveIntensity:0.1,roughness:0.25 });
  const cars = [
    locomotive(windowMat),
    carriage(0x9c544b,0xe5c58b,windowMat),
    carriage(0xb58b61,0xf0d7a5,windowMat),
  ];
  cars.forEach(car => scene.add(car));

  const state = {
    distance: 0.75,
    nextStop: STATION_DISTANCE,
    dwell: 0,
    speed: 1,
    running: true,
  };

  function placeCars() {
    cars.forEach((car,i) => {
      const p = trackAt(state.distance - i * 2.02);
      car.position.set(p.x,0,p.z);
      car.rotation.y = Math.atan2(p.dx,p.dz);
    });
  }

  function update(delta) {
    if (!state.running) return;
    if (state.dwell > 0) {
      state.dwell = Math.max(0,state.dwell - delta);
      return;
    }
    const dt = Math.min(delta,0.25);
    const nextDistance = state.distance + dt * 2.65 * state.speed;
    if (nextDistance >= state.nextStop) {
      state.distance = state.nextStop;
      state.nextStop += TRACK_LENGTH;
      state.dwell = 2.05;
    } else {
      state.distance = nextDistance;
    }
    placeCars();
  }

  function reset() {
    state.distance=0.75;
    state.nextStop=STATION_DISTANCE;
    state.dwell=0;
    state.speed=1;
    state.running=true;
    placeCars();
  }

  function setNight(night) {
    windowMat.emissiveIntensity=night?1.8:0.1;
  }

  placeCars();
  return { state, update, reset, setNight };
}
