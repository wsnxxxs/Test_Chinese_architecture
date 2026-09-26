import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Each row totals 16 units. The final column keeps navigation within the compact outline.
const rows = [
  [['esc',1],...['1','2','3','4','5','6','7','8','9','0','−','='].map(k=>[k,1]),['backspace',2],['del',1]],
  [['tab',1.5],...['Q','W','E','R','T','Y','U','I','O','P','[',']'].map(k=>[k,1]),['\\',1.5],['home',1]],
  [['caps',1.75],...['A','S','D','F','G','H','J','K','L',';',"'"].map(k=>[k,1]),['enter',2.25],['pgup',1]],
  [['shift',2.25],...['Z','X','C','V','B','N','M',',','.','/'].map(k=>[k,1]),['shift',1.75],['↑',1],['pgdn',1]],
  [['ctrl',1.25],['⌘',1.25],['alt',1.25],[' ',6.25],['alt',1],['fn',1],['ctrl',1],['←',1],['↓',1],['→',1]],
];
const unit = .55, gap = .045;
const homeCamera = new THREE.Vector3(3.6, 8.4, 8.6);

export function createKeyboard(container, onKey) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  camera.position.copy(homeCamera);
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch {
    container.querySelector('.loading').textContent = '3D 预览需要支持 WebGL 的浏览器。配色仍可保存。';
    return { setColors(){}, setExploded(){}, setExperience(){}, press(){}, release(){}, releaseAll(){}, zoom(){}, resetView(){} };
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .95;
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label', '拖动旋转键盘，滚动或双指缩放；体验模式下点击键帽');
  renderer.domElement.setAttribute('tabindex', '0');
  container.querySelector('.loading').remove();

  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = new RoomEnvironment();
  const envMap = pmrem.fromScene(environment, .04).texture;
  scene.environment = envMap;
  scene.environmentIntensity = .7;
  environment.dispose(); pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xfffdf3, 0xa4afa0, .9));
  const light = new THREE.DirectionalLight(0xfff9eb, 2.5);
  light.position.set(-3, 9, 5); light.castShadow = true;
  light.shadow.mapSize.set(2048, 2048);
  light.shadow.camera.left = -8; light.shadow.camera.right = 8;
  light.shadow.camera.top = 7; light.shadow.camera.bottom = -7;
  light.shadow.normalBias = .025; light.shadow.bias = -.00015;
  light.shadow.radius = 4;
  scene.add(light);
  const fill = new THREE.DirectionalLight(0xe5f0ff, .8); fill.position.set(5, 4, -6); scene.add(fill);

  const root = new THREE.Group(); root.rotation.x = Math.PI / 30; root.position.y = .22; scene.add(root);
  const base = new THREE.Group(), plate = new THREE.Group(), caps = new THREE.Group();
  root.add(base, plate, caps);
  const shellMaterial = new THREE.MeshStandardMaterial({ color: '#c6cac5', metalness: .65, roughness: .38 });
  const bottomMaterial = new THREE.MeshStandardMaterial({ color: '#b0b8ae', metalness: .6, roughness: .43 });
  const plateMaterial = new THREE.MeshStandardMaterial({ color: '#a1b2a0', metalness: .65, roughness: .42 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#2a3430', roughness: .6 });
  const screwMaterial = new THREE.MeshStandardMaterial({ color: '#5b655b', metalness: .85, roughness: .32 });
  const switchMaterial = new THREE.MeshStandardMaterial({ color: '#e9ddc2', roughness: .45 });
  const stemMaterial = new THREE.MeshStandardMaterial({ color: '#df8057', roughness: .4 });
  const keyMaterials = [0,1,2].map(()=>new THREE.MeshStandardMaterial({ roughness: .52, metalness: .035 }));

  function rounded(w,h,d,r,material,x=0,y=0,z=0,parent=base) {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w,h,d,3,r), material);
    mesh.position.set(x,y,z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  // Layered metal shell, visible seam and recessed upper surface.
  rounded(9.24,.34,3.32,.13,bottomMaterial,0,.06,0);
  rounded(9.27,.065,3.33,.028,darkMaterial,0,.225,0);
  rounded(9.3,.19,3.36,.085,shellMaterial,0,.34,0);
  rounded(8.96,.04,2.98,.04,darkMaterial,0,.445,0);
  rounded(9.04,.10,3.06,.06,plateMaterial,0,.485,0,plate);
  // An understated USB-C port and two rubber feet make the object feel complete.
  rounded(.43,.13,.04,.045,darkMaterial,-3.62,.21,-1.675);
  rounded(.30,.05,.05,.018,screwMaterial,-3.62,.21,-1.70);
  for (const x of [-3.5,3.5]) for (const z of [-1.18,1.18]) rounded(.72,.11,.29,.04,darkMaterial,x,-.145,z);
  for (const x of [-4.35,4.35]) for (const z of [-1.40,1.40]) {
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.016,12), screwMaterial);
    screw.position.set(x,.442,z); base.add(screw);
    rounded(.04,.006,.008,.002,darkMaterial,x,.454,z);
  }
  // The PCB is exposed when the plate rises, with copper traces and fasteners.
  const pcbMat = new THREE.MeshStandardMaterial({ color: '#344b3b', roughness: .65 });
  rounded(8.71,.045,2.72,.05,pcbMat,0,.454,0);
  const copper = new THREE.MeshStandardMaterial({ color: '#bdab72', metalness: .8, roughness: .5 });
  for (let i=0;i<5;i++) {
    rounded(8.1,.003,.013,.001,copper,0,.481,(i-2)*.54);
  }
  for (let i=0;i<12;i++) rounded(.011,.003,2.23,.001,copper,(i-5.5)*.65,.482,0);

  // Front engraving is a real surface on the case, independent of the HTML UI.
  const wordmark = textTexture('O R B I T   /   6 8', '#586254', 640, 100, 34);
  const mark = new THREE.Mesh(new THREE.PlaneGeometry(1.02,.15), new THREE.MeshBasicMaterial({ map: wordmark, transparent: true, depthWrite: false }));
  mark.position.set(3.55,.325,1.686); base.add(mark);
  const led = rounded(.08,.018,.012,.005,new THREE.MeshBasicMaterial({ color: '#d99b61' }),-3.97,.328,1.69);
  const keys = [], byLabel = new Map(), hits = [];
  let currentTheme;
  const labelCache = new Map();
  rows.forEach((row,r) => {
    let offset = -4.4;
    row.forEach(([label,width]) => {
      const w=width*unit-gap, x=offset+width*unit/2, z=(r-2)*unit;
      const group = new THREE.Group(); group.position.set(x,.745,z); caps.add(group);
      const special = label==='esc'||label==='enter'||label===' ';
      const modifier = label.length>1 || /[↑←↓→⌘]/.test(label);
      const type = special?2:modifier?1:0;
      const body = rounded(w,.265,unit-gap,.055,keyMaterials[type],0,0,0,group);
      // Slightly smaller top provides a sculpted shoulder instead of a flat cube.
      const top = rounded(w-.06,.055,unit-gap-.07,.032,keyMaterials[type],0,.135,-.005,group);
      const labelPlane = new THREE.Mesh(new THREE.PlaneGeometry(w-.075,unit-gap-.08), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -1 }));
      labelPlane.rotation.x = -Math.PI/2; labelPlane.position.set(0,.18,-.005); group.add(labelPlane);
      const key = { label, width, group, body, top, labelPlane, type, travel:0, held:false, until:0 };
      keys.push(key); byLabel.set(label,key); body.userData.key = key; top.userData.key=key; hits.push(body,top);
      // Switch sockets belong to the plate; stems show clearly in the exploded view.
      rounded(.36,.08,.36,.025,darkMaterial,x,.565,z,plate);
      rounded(.28,.095,.28,.02,switchMaterial,x,.63,z,plate);
      rounded(.14,.075,.10,.008,stemMaterial,x,.707,z,plate);
      rounded(.05,.075,.16,.008,stemMaterial,x,.707,z,plate);
      if(width>=1.75) for(const dx of [-w/2+.17,w/2-.17]) rounded(.07,.07,.17,.01,darkMaterial,x+dx,.651,z,plate);
      offset += width*unit;
    });
  });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200,200), new THREE.ShadowMaterial({ opacity: .15 }));
  floor.rotation.x = -Math.PI/2; floor.position.y = -.16; floor.receiveShadow = true; scene.add(floor);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .075; controls.enablePan = false;
  controls.target.set(0,.37,0); controls.minDistance=9.3; controls.maxDistance=23;
  controls.minPolarAngle=.15; controls.maxPolarAngle=Math.PI*.72;
  controls.rotateSpeed=.65; controls.zoomSpeed=.7;

  let explodedTarget = 0, expansion = 0, experience = false, pointerStart, activePointerKey;
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function pick(e) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    return raycaster.intersectObjects(hits,false)[0]?.object.userData.key;
  }
  renderer.domElement.addEventListener('pointerdown', e => {
    pointerStart = { x:e.clientX,y:e.clientY };
    if(experience) { const key=pick(e); if(key) { activePointerKey=key; key.until=performance.now()+180; onKey(key.label); } }
  });
  renderer.domElement.addEventListener('pointerup', e => {
    if(activePointerKey) activePointerKey.until = Math.max(activePointerKey.until,performance.now()+70);
    activePointerKey=null; pointerStart=null;
  });
  renderer.domElement.addEventListener('pointermove', e => {
    if(pointerStart && Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y)>7) {
      if(activePointerKey) activePointerKey.until=0; activePointerKey=null;
    }
    if(!pointerStart) renderer.domElement.style.cursor = experience && pick(e) ? 'pointer' : 'grab';
  });
  renderer.domElement.addEventListener('pointercancel', () => { activePointerKey=null; pointerStart=null; });

  function resize() {
    const w=container.clientWidth,h=container.clientHeight;
    camera.aspect = w/h;
    // Maintain the complete keyboard across phone and desktop aspect ratios.
    camera.fov = w/h < 1.65 ? 43 : 35;
    camera.updateProjectionMatrix(); renderer.setSize(w,h);
  }
  const observer = new ResizeObserver(resize); observer.observe(container); resize();
  let last = performance.now();
  function animate(now) {
    const dt = Math.min((now-last)/1000,.05); last=now;
    expansion = THREE.MathUtils.damp(expansion,explodedTarget,reducedMotion?35:6.5,dt);
    if(Math.abs(expansion-explodedTarget)<.0003) expansion=explodedTarget;
    caps.position.y = expansion*1.48; plate.position.y = expansion*.68;
    for(const key of keys) {
      const down = key.held||now<key.until;
      key.travel=THREE.MathUtils.damp(key.travel,down?.105:0,down?30:19,dt);
      key.group.position.y=.745-key.travel;
    }
    // A slight target lift keeps the exploded assembly framed without fighting orbit rotation.
    controls.target.y=THREE.MathUtils.damp(controls.target.y,.37+expansion*.56,7,dt);
    controls.update(); renderer.render(scene,camera); requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  return {
    setColors(shell,theme) {
      shellMaterial.color.set(shell.color);
      bottomMaterial.color.set(shell.color).multiplyScalar(.81);
      plateMaterial.color.set(shell.color).lerp(new THREE.Color('#627564'),.25);
      theme.colors.forEach((color,i)=>keyMaterials[i].color.set(color));
      if(currentTheme!==theme.id) {
        for(const key of keys) {
          const textColor = key.type===2 ? (theme.id==='noir'?'#3e4039':'#fff9eb') : theme.text;
          const cacheKey = `${theme.id}:${key.label}:${key.width}`;
          if(!labelCache.has(cacheKey)) {
            const width=Math.round(key.width*192), height=192;
            const canvas=document.createElement('canvas'); canvas.width=width; canvas.height=height;
            const ctx=canvas.getContext('2d');
            ctx.fillStyle=textColor;
            ctx.textAlign='left'; ctx.textBaseline='top';
            const text=key.label===' '?'':key.label;
            ctx.font=`600 ${text.length>1?36:64}px Arial, sans-serif`;
            ctx.fillText(text,23,30);
            if(key.label===' ') {
              ctx.globalAlpha=.6; ctx.fillRect(width/2-18,155,36,2); ctx.globalAlpha=1;
            }
            if(['F','J'].includes(key.label)) { ctx.globalAlpha=.6; ctx.fillRect(80,151,24,3); }
            if(/^[0-9]$/.test(key.label)) {
              const secondary = { '1':'!', '2':'@','3':'#','4':'$','5':'%','6':'^','7':'&','8':'*','9':'(','0':')' };
              ctx.globalAlpha=.55;ctx.font='27px Arial';ctx.fillText(secondary[key.label],20,110);
            }
            const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();labelCache.set(cacheKey,texture);
          }
          key.labelPlane.material.map=labelCache.get(cacheKey); key.labelPlane.material.needsUpdate=true;
        }
        currentTheme=theme.id;
      }
      mark.material.color.set(shell.id==='ink'?'#ced4bf':'#ffffff');
    },
    setExploded(value) { explodedTarget=value?1:0; },
    setExperience(value) { experience=value;if(!value)this.releaseAll();led.material.color.set(value?'#a3c491':'#d99b61'); },
    press(label) { const key=byLabel.get(label);if(!key)return;key.held=true;key.until=performance.now()+100;onKey(label); },
    release(label) { const key=byLabel.get(label);if(key)key.held=false; },
    releaseAll() { for(const key of keys){key.held=false;key.until=0;} },
    zoom(factor) { const distance=camera.position.distanceTo(controls.target);camera.position.sub(controls.target).multiplyScalar(THREE.MathUtils.clamp(distance*factor,controls.minDistance,controls.maxDistance)/distance).add(controls.target);controls.update(); },
    resetView() {
      controls.enableDamping=false;controls.update();
      camera.position.copy(homeCamera);controls.target.set(0,.37+expansion*.56,0);controls.update();
      controls.enableDamping=true;
    },
  };
}

function textTexture(text,color,width,height,fontSize) {
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  const ctx=canvas.getContext('2d');ctx.fillStyle=color;ctx.font=`500 ${fontSize}px Arial`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,width/2,height/2);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}
