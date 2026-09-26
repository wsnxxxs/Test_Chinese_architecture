import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const geometryCache = new Map();
function cached(key, build) { if (!geometryCache.has(key)) geometryCache.set(key, build()); return geometryCache.get(key); }
export function addMesh(parent, geometry, material, x = 0, y = 0, z = 0, shadow = true) {
  const object = new THREE.Mesh(geometry, material);
  object.position.set(x,y,z); object.castShadow = shadow; object.receiveShadow = true; parent.add(object); return object;
}
export function box(parent, w, h, d, material, x=0,y=0,z=0, radius=0) {
  const geometry = radius > 0
    ? cached(`rounded:${w},${h},${d},${radius}`, () => new RoundedBoxGeometry(w,h,d,2,Math.min(radius,w/2,h/2,d/2)))
    : cached(`box:${w},${h},${d}`, () => new THREE.BoxGeometry(w,h,d));
  return addMesh(parent,geometry,material,x,y,z);
}
export function cylinder(parent, top, bottom, height, material, x=0,y=0,z=0, segments=16) {
  return addMesh(parent,cached(`cyl:${top},${bottom},${height},${segments}`,()=>new THREE.CylinderGeometry(top,bottom,height,segments)),material,x,y,z);
}
export function sphere(parent, radius, material, x=0,y=0,z=0, sx=1,sy=1,sz=1) {
  const mesh = addMesh(parent,cached('sphere',()=>new THREE.SphereGeometry(1,12,9)),material,x,y,z);
  mesh.scale.set(radius*sx,radius*sy,radius*sz); return mesh;
}
export function beam(parent, a, b, width, material, depth=width) {
  const start = new THREE.Vector3(...a); const end = new THREE.Vector3(...b);
  const direction = end.clone().sub(start);
  const mesh = box(parent,width,direction.length(),depth,material);
  mesh.position.copy(start).add(end).multiplyScalar(.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());
  return mesh;
}
export function tube(parent, points, radius, material, tubularSegments=points.length*3, closed=false) {
  const path = new THREE.CatmullRomCurve3(points.map(p => p.isVector3 ? p : new THREE.Vector3(...p)),closed,'centripetal');
  return addMesh(parent,new THREE.TubeGeometry(path,tubularSegments,radius,6,closed),material);
}
/** Extrude a 2D x/z polygon downward from its top surface, keeping real depth. */
export function slab(parent, points, top, thickness, material) {
  const shape = new THREE.Shape(points.map(([x,z])=>new THREE.Vector2(x,z)));
  const geometry = new THREE.ExtrudeGeometry(shape,{depth:thickness,bevelEnabled:false,steps:1});
  geometry.rotateX(Math.PI/2);
  return addMesh(parent,geometry,material,0,top,0);
}
/** A path-width strip in the horizontal plane, optionally omitting bridge spans. */
export function ribbon(parent, samples, width, y, material, keep=()=>true) {
  const positions=[]; const uv=[]; const indices=[];
  samples.forEach((p,i)=>{
    positions.push(p.x+p.nx*width/2,y,p.z+p.nz*width/2,p.x-p.nx*width/2,y,p.z-p.nz*width/2);
    uv.push(0,i*.25,1,i*.25);
    if(i<samples.length-1 && keep(p,samples[i+1])){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}
  });
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();
  // Both travel directions appear in this project. A ribbon should not vanish
  // when the path reverses, so normals are explicitly upward and sides double.
  const normal=geometry.getAttribute('normal');for(let i=0;i<normal.count;i++)normal.setXYZ(i,0,1,0);
  const mat=material;mat.side=THREE.DoubleSide;
  return addMesh(parent,geometry,mat);
}
export function flatPath(parent, coordinates, width, y, material) {
  const curve=new THREE.CatmullRomCurve3(coordinates.map(([x,z])=>new THREE.Vector3(x,0,z)),false,'centripetal');
  const samples=[]; const steps=Math.max(20,Math.ceil(curve.getLength()*8));
  for(let i=0;i<=steps;i++){const t=i/steps,p=curve.getPoint(t),dir=curve.getTangent(t);samples.push({x:p.x,z:p.z,nx:-dir.z,nz:dir.x});}
  return ribbon(parent,samples,width,y,material);
}
/** Static, non-instanced meshes are merged by material/shadow flags. */
export function batchStatic(root, { dynamicRoot = false } = {}) {
  root.updateMatrixWorld(true);
  const inverseRoot = root.matrixWorld.clone().invert();
  const groups=new Map(),originals=[];
  root.traverse(object=>{
    if(!object.isMesh || object.isInstancedMesh || Array.isArray(object.material) || object.userData.keepSeparate) return;
    const material=object.material;
    const key=`${material.uuid}:${object.castShadow}:${object.receiveShadow}`;
    if(!groups.has(key))groups.set(key,{material,cast:object.castShadow,receive:object.receiveShadow,geometries:[]});
    let geometry=object.geometry.clone();
    if(geometry.index){const unindexed=geometry.toNonIndexed();geometry.dispose();geometry=unindexed;}
    // Common attribute layout lets boxes, roofs, tubes and spheres share a batch.
    for(const name of Object.keys(geometry.attributes)) if(!['position','normal','uv'].includes(name))geometry.deleteAttribute(name);
    if(!geometry.getAttribute('uv'))geometry.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(geometry.getAttribute('position').count*2),2));
    if(!geometry.getAttribute('normal'))geometry.computeVertexNormals();
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverseRoot, object.matrixWorld));
    groups.get(key).geometries.push(geometry);originals.push(object);
  });
  for(const object of originals)object.removeFromParent();
  for(const {material,cast,receive,geometries} of groups.values()){
    const merged=mergeGeometries(geometries,false);
    for(const g of geometries)g.dispose();
    if(!merged)throw new Error('Could not merge static scenery geometry.');
    const mesh=addMesh(root,merged,material);mesh.castShadow=cast;mesh.receiveShadow=receive;
  }
  root.traverse(object=>{if(!object.isLight){object.updateMatrix();object.matrixAutoUpdate=false;}});
  if (dynamicRoot) root.matrixAutoUpdate = true;
}
export function disposeGeometryCache(){for(const geometry of geometryCache.values())geometry.dispose();geometryCache.clear();}
