import * as THREE from 'three';
import { mesh, surface, sample, smooth, mix, clamp, tube, polygon, box, ellipsoid, makeShape, extrudeShape, decal, weldSurfaces } from './geometry.js';
import { SPEC, AXLES, archBottom } from './spec.js';
import { createMaterials } from './materials.js';
import { addWheels } from './wheels.js';

// X: longitudinal (front negative), Y: up, Z: left. Metres throughout.
// Station values: [x, half width, centre height, fender crown height].
export const STATIONS = [
  [-2.385,.805,.553,.596],[-2.30,.904,.679,.716],[-2.11,.953,.741,.853],[-1.83,.982,.788,.921],
  [-1.39,.995,.810,.922],[-1.04,.968,.834,.902],[-.74,.933,.886,.891],[-.35,.921,.866,.891],
  [.12,.925,.859,.894],[.57,.950,.874,.923],[.98,.981,.903,.951],[1.39,.995,.934,.981],
  [1.73,.980,.932,.976],[2.05,.966,.917,.956],[2.28,.958,.884,.925],[2.385,.928,.836,.870]
];
export const bodyWidth = x => sample(STATIONS, x, 1);
export function topY(x, z) {
  const w = bodyWidth(x), t = clamp(Math.abs(z) / (w * .94), 0, 1);
  const center = sample(STATIONS, x, 2), crown = sample(STATIONS, x, 3);
  const fenders = Math.exp(-(((x + 1.39) / .58) ** 2)) + Math.exp(-(((x - 1.39) / .65) ** 2));
  const hood = smooth(-2.16, -1.70, x) * (1 - smooth(-.85, -.57, x));
  return center + (crown - center) * Math.sin(t * Math.PI / 2) ** 3 + .017 * Math.sin(t * Math.PI) * fenders - .022 * t ** 12 + .014 * Math.exp(-(((t - .59) / .10) ** 2)) * hood;
}
function lowerY(x) {
  const frontLift = .185 * (1 - smooth(-2.10, -1.83, x));
  const rearLift = .245 * smooth(1.87, 2.25, x);
  return archBottom(x, .225 + frontLift + rearLift);
}
function sideZ(x, y) {
  const w = bodyWidth(x), top = topY(x, .94 * w), bottom = lowerY(x);
  const v = clamp((top - y) / Math.max(.002, top - bottom), 0, 1);
  const sculpt = .072 * Math.exp(-(((x - .05) / .88) ** 2));
  return w * (.94 + .06 * Math.sin(v * Math.PI / 2)) - sculpt * Math.sin(Math.PI * v) ** 1.5 - .025 * Math.exp(-((x / .9) ** 2)) * v ** 2;
}
const sidePoint = (x, y, s, offset = .003) => [x, y, s * (sideZ(x, y) + offset)];
const topPoint = (x, z, lift = .007) => [x, topY(x, z) + lift, z];

function bodyShell(car, M) {
  const skin = new THREE.Group(); car.add(skin);
  const xs = Array.from({ length: 193 }, (_, i) => mix(-2.385, 2.385, i / 192));
  // Explicit samples either side of the arch edge create the vertical opening, not a body through the tyre.
  for (const axle of AXLES) for (const s of [-1,1]) { const end = axle + s * SPEC.archRadius; xs.push(end - .00015, end, end + .00015); }
  xs.sort((a,b) => a-b);
  const longitudinal = u => { const k = u * (xs.length - 1), i = Math.min(xs.length - 2, Math.floor(k)); return mix(xs[i], xs[i+1], k-i); };
  mesh(skin, surface((u,v) => { const x = longitudinal(u), z = mix(-1,1,v) * bodyWidth(x) * .94; return [x,topY(x,z),z]; }, xs.length - 1, 64, true), M.paint, 'Continuous compound-curvature upper body');
  for (const s of [-1,1]) {
    mesh(skin, surface((u,v) => { const x = longitudinal(u), y = mix(topY(x, bodyWidth(x)*.94), lowerY(x), v); return [x,y,s*sideZ(x,y)]; }, xs.length - 1, 24, s > 0), M.paint, 'Sculpted side shell with real wheel-arch opening');
    for (const axle of AXLES) {
      const arch = Array.from({length:81},(_,i) => { const a = Math.PI * i/80; const x = axle + SPEC.archRadius * Math.cos(a), y = SPEC.wheelRadius + SPEC.archRadius * Math.sin(a); return [x,y,s*(sideZ(x,y)+.001)]; });
      tube(car, arch, .0085, M.paint, false, 80);
      mesh(car, surface((u,v) => { const a = u*Math.PI; const x = axle + (.414)*Math.cos(a), y = SPEC.wheelRadius + .414*Math.sin(a); return [x,y,s*mix(.725,bodyWidth(x)*.99,v)]; }, 80, 6, s < 0), M.black, 'Recessed wheelhouse liner');
      const backing=mesh(car,new THREE.CircleGeometry(.414,80,0,Math.PI),M.black,'Closed inner wheelhouse');backing.position.set(axle,SPEC.wheelRadius,s*.715);if(s<0)backing.rotation.y=Math.PI;
      // Vertical ends of the wheelhouse, falling to the sill.
      for (const end of [-1,1]) {
        const x = axle + end * SPEC.archRadius;
        polygon(car, [[x,.23,s*.76],[x,.37,s*.76],[x,.37,s*bodyWidth(x)],[x,.23,s*bodyWidth(x)]], M.black);
      }
    }
  }
  // The front and rear closures share their exact boundary with the side
  // shell. Normal welding below gives the nose and haunches a rolled edge.
  for (const [x,front] of [[-2.385,true],[2.385,false]]) {
    const w=bodyWidth(x), n=front?-1:1;
    mesh(skin,surface((u,v)=>{
      const t=u*2-1, y=mix(lowerY(x),topY(x,t*.94*w),v);
      const z=t*sideZ(x,y), bulge=(front?.046:.029)*Math.sin(Math.PI*v)*(1-t*t);
      return [x+n*bulge,y,z];
    },64,24,!front),M.paint,front?'Rolled nose closure':'Rolled rear closure');
  }
  const skinMeshes=[...skin.children];
  const joined=weldSurfaces(skinMeshes.map(o=>o.geometry),.0001);
  skinMeshes.forEach(o=>{skin.remove(o);o.geometry.dispose();});
  mesh(skin,joined,M.paint,'Continuous smoothly joined body shell');
  box(car,[3.10,.065,1.38],[0,.247,0],M.black,'Flat carbon underfloor');
}

function frontAero(car, M) {
  const contour = [[-2.435,-.72],[-2.42,-.87],[-2.30,-.974],[-1.94,-.99],[-1.89,-.927],[-2.20,-.865],[-2.26,0],[-2.20,.865],[-1.89,.927],[-1.94,.99],[-2.30,.974],[-2.42,.87],[-2.435,.72]];
  const splitter = extrudeShape(car, makeShape(contour), .036, M.carbon, .006); splitter.rotation.x = Math.PI/2; splitter.position.y = .193;
  tube(car, [[-1.91,.170,-.979],[-2.26,.160,-.977],[-2.413,.155,-.835],[-2.442,.15,0],[-2.413,.155,.835],[-2.26,.160,.977],[-1.91,.170,.979]], .0055, M.yellow, false, 90);
  // Four-mouth fascia: inset mesh and genuine-depth side walls.
  for (const s of [-1,1]) {
    const opening = [[-2.337,.398,s*.40],[-2.26,.405,s*.82],[-2.235,.355,s*.918],[-2.285,.215,s*.90],[-2.39,.207,s*.53]];
    polygon(car,opening,M.grille,'Front lateral honeycomb inlet');
    const rim = opening.map(p=>[p[0]-.018,p[1],p[2]]); tube(car,rim,.011,M.carbon,true,55);
    const center = [[-2.388,.398,s*.035],[-2.35,.403,s*.385],[-2.39,.216,s*.50],[-2.414,.202,s*.035]];
    polygon(car,center,M.grille,'Central front inlet');
    polygon(car,[[-2.401,.198,s*.51],[-2.357,.410,s*.385],[-2.185,.428,s*.34],[-2.198,.235,s*.445]],M.carbon,'Front duct wall');
    polygon(car,[[-2.30,.214,s*.913],[-2.24,.445,s*.923],[-2.045,.565,s*.961],[-1.967,.272,s*.992]],M.paint,'Outboard blue aero buttress');
    polygon(car,[[-2.36,.212,s*.902],[-2.10,.259,s*1.002],[-1.96,.29,s*.992],[-2.09,.212,s*.944]],M.carbon,'Front dive plane');
    tube(car,[[-2.35,.216,s*.904],[-2.11,.263,s*.998],[-1.96,.293,s*.992]],.004,M.yellow,false,28);
    // Small horizontal blade inside each side mouth.
    polygon(car,[[-2.31,.283,s*.53],[-2.28,.291,s*.875],[-2.18,.304,s*.867],[-2.18,.292,s*.54]],M.carbon);
  }
  polygon(car,[[-2.418,.205,-.019],[-2.387,.401,-.015],[-2.387,.401,.015],[-2.418,.205,.019]],M.carbon);
}

function projectedShape(car, shape, sign, M, lift = .01, material = M.black) {
  const geometry = new THREE.ShapeGeometry(shape, 36);
  const attr = geometry.attributes.position;
  for(let i=0;i<attr.count;i++){ const x=attr.getX(i), z=attr.getY(i)*sign; attr.setXYZ(i,x,topY(x,z)+lift,z); }
  geometry.computeVertexNormals(); return mesh(car,geometry,material);
}
function frontLamps(car,M){
  for(const s of [-1,1]){
    const shape = new THREE.Shape();
    shape.moveTo(-2.292,.653); shape.bezierCurveTo(-2.322,.692,-2.278,.792,-2.212,.823);
    shape.bezierCurveTo(-2.067,.895,-1.873,.938,-1.779,.920);
    shape.quadraticCurveTo(-1.743,.910,-1.809,.853); shape.bezierCurveTo(-1.956,.742,-2.182,.615,-2.292,.653);
    projectedShape(car,shape,s,M,.009,M.black);
    const outline=shape.getPoints(64).map(p=>topPoint(p.x,p.y*s,.014)); tube(car,outline,.008,M.gunmetal,true,80);
    projectedShape(car,shape,s,M,.025,M.lens);
    for(let i=0;i<3;i++){
      const x=-1.938-i*.108,z=(.867-i*.061)*s;
      const sq=makeShape([[x-.041,Math.abs(z)-.027],[x+.033,Math.abs(z)-.027],[x+.037,Math.abs(z)+.025],[x-.036,Math.abs(z)+.029]]);
      projectedShape(car,sq,s,M,.023,M.aluminium);
      const inner=makeShape([[x-.023,Math.abs(z)-.016],[x+.019,Math.abs(z)-.016],[x+.022,Math.abs(z)+.015],[x-.02,Math.abs(z)+.017]]);
      projectedShape(car,inner,s,M,.027,M.whiteLED);
    }
    const drl=[[-1.803,.910],[-2.028,.869],[-2.219,.794],[-2.278,.718],[-2.266,.669],[-2.228,.673],[-2.159,.714],[-2.150,.751]];
    tube(car,drl.map(([x,z])=>topPoint(x,s*z,.027)),.008,M.whiteLED,false,65);
  }
  // Hood perimeter and sculpted longitudinal channels.
  const hood = [[-.71,-.56],[-1.30,-.54],[-1.86,-.535],[-2.042,-.465],[-2.073,0],[-2.042,.465],[-1.86,.535],[-1.30,.54],[-.71,.56]];
  tube(car,hood.map(([x,z])=>topPoint(x,z,.003)),.0028,M.black,false,100);
  for(const s of [-1,1]) tube(car,[[-1.99,s*.40],[-1.56,s*.45],[-1.07,s*.49],[-.78,s*.51]].map(([x,z])=>topPoint(x,z,.004)),.002,M.paint,false,60);
  badge(car,[-2.345,topY(-2.345,0)+.012,0],[Math.PI*-.5,0,Math.PI/2],.062,M);
}

function badge(group,pos,rotation,size,M){
  const g = new THREE.Group(); g.position.set(...pos); g.rotation.set(...rotation); group.add(g);
  const outline=new THREE.Shape(); outline.moveTo(0,size); outline.bezierCurveTo(-size*.24,size*.60,-size*.69,-size*.04,-size*.57,-size*.38); outline.bezierCurveTo(-size*.39,-size*.93,size*.44,-size*.93,size*.59,-size*.38); outline.bezierCurveTo(size*.71,-size*.02,size*.26,size*.62,0,size);
  mesh(g,new THREE.ShapeGeometry(outline,24),M.aluminium);
  const inner=new THREE.Shape(); inner.moveTo(0,size*.78); inner.bezierCurveTo(-size*.08,size*.25,-size*.38,-size*.10,-size*.29,-size*.34); inner.quadraticCurveTo(0,-size*.63,size*.29,-size*.34); inner.bezierCurveTo(size*.39,-size*.10,size*.09,size*.25,0,size*.78);
  const hole=mesh(g,new THREE.ShapeGeometry(inner,20),M.black); hole.position.z=.001;
}

function cabin(car,M){
  const roofProfile=[[-.15,1.281,.552],[.13,1.336,.565],[.43,1.350,.589],[.71,1.327,.609],[.98,1.275,.625],[1.08,1.24,.631]];
  const roofY=x=>sample(roofProfile,x,1), roofW=x=>sample(roofProfile,x,2);
  mesh(car,surface((u,v)=>{ const t=v*2-1,x=mix(-.15+.05*t*t,.98+.075*t*t,u); return [x,roofY(x)-.045*t*t,roofW(x)*t];},54,32),M.carbon,'Hardtop / carbon roof');
  const wind = (u,v) => {
    const t=v*2-1, x=mix(-.86+.118*t*t,-.15+.05*t*t,u);
    return [x,mix(.894+.020*t*t,1.281-.045*t*t,u)+.022*Math.sin(u*Math.PI),t*mix(.755,.552,u)];
  };
  mesh(car,surface(wind,30,44),M.glass,'Curved front windscreen');
  for(const v of [0,1]) tube(car,Array.from({length:28},(_,i)=>wind(i/27,v)),.019,M.carbon,false,40);
  tube(car,Array.from({length:41},(_,i)=>wind(0,i/40)),.014,M.black,false,48);
  tube(car,Array.from({length:41},(_,i)=>wind(1,i/40)),.013,M.carbon,false,48);
  // Flush windscreen wipers, visible but not visually dominant.
  tube(car,[[-.846,.911,-.53],[-.803,.946,-.10],[-.802,.946,.23]],.005,M.black,false,30);
  tube(car,[[-.824,.932,-.11],[-.794,.956,.49]],.0045,M.black,false,24);
  const rear=(u,v)=>{const t=v*2-1,x=mix(.98+.075*t*t,1.674-.066*t*t,u);return [x,mix(roofY(.98+.075*t*t)-.045*t*t,.948+.018*t*t,u)+.016*Math.sin(u*Math.PI),t*mix(roofW(1.02),.726,u)];};
  mesh(car,surface(rear,32,36,true),M.glass,'Sloping rear backlight');
  for(const v of [0,1]) tube(car,Array.from({length:25},(_,i)=>rear(i/24,v)),.025,M.carbon,false,40);
  tube(car,Array.from({length:30},(_,i)=>rear(1,i/29)),.022,M.carbon,false,40);
  // Low contrast heating lines belong to the rear glass, not the tail panel.
  for(let i=1;i<7;i++){const u=i/8;tube(car,Array.from({length:25},(_,j)=>{const p=rear(u,.07+j/24*.86);p[1]+=.002;return p;}),.00085,M.gunmetal,false,30);}
  const windowTop=[[-.742,.914,.755],[-.46,1.101,.661],[-.10,1.236,.554],[.17,1.289,.568],[.43,1.303,.591],[.71,1.279,.611],[1.0,1.224,.628],[1.24,1.097,.692],[1.485,.962,.773]];
  const windowBottom=[[-.742,.910,.779],[-.4,.891,.823],[0,.891,.833],[.5,.907,.830],[1.0,.936,.809],[1.485,.962,.773]];
  const windowP=(x,v,s)=>[x,mix(sample(windowTop,x,1),sample(windowBottom,x,1),v),s*mix(sample(windowTop,x,2),sample(windowBottom,x,2),v)];
  for(const s of [-1,1]){
    for(const [a,b] of [[-.725,.422],[.466,1.475]]) mesh(car,surface((u,v)=>windowP(mix(a,b,u),v,s),38,18,s<0),M.glass,a<0?'Large frameless door glass':'Rear quarter glass');
    mesh(car,surface((u,v)=>windowP(mix(.420,.469,u),v,s),3,16,s<0),M.carbon,'B pillar');
    for(const v of [0,1]) tube(car,Array.from({length:65},(_,i)=>windowP(mix(-.742,1.485,i/64),v,s)),v? .012:.018,M.carbon,false,80);
    // Shoulder seal bridges the glazing onto the painted upper body, no floating cabin.
    mesh(car,surface((u,v)=>{const x=mix(-.741,1.485,u),bottom=windowP(x,1,s);const z=mix(Math.abs(bottom[2]),Math.abs(bottom[2])+.034,v);return [x,mix(bottom[1],topY(x,z)+.001,v),s*z];},68,5,s<0),M.black);
    // C-pillar triangular infill between the side window and backlight.
    polygon(car,[[1.00,1.224,s*.628],[1.485,.962,s*.773],[1.614,.965,s*.726],[1.055,1.194,s*.632]],M.carbon,'Solid swept C-pillar');
  }
  // Minimal cockpit geometry beneath real transparent glazing.
  box(car,[1.52,.12,1.25],[.18,.675,0],M.upholstery);
  const dash=ellipsoid(car,[.23,.11,.66],[-.57,.805,0],M.upholstery,'Dashboard');
  for(const s of [-1,1]){
    const seat=new THREE.Group();seat.position.set(.28,.65,s*.335);seat.rotation.z=-.16;car.add(seat);
    ellipsoid(seat,[.12,.34,.175],[.10,.15,0],M.upholstery,'Bucket seat back');
    ellipsoid(seat,[.115,.135,.133],[.10,.385,0],M.seatBlue,'Blue headrest');
    for(const side of [-1,1])ellipsoid(seat,[.14,.28,.045],[.055,.10,side*.144],M.seatBlue);
    box(seat,[.10,.015,.07],[.005,.29,0],M.black);
  }
  const steering=mesh(car,new THREE.TorusGeometry(.123,.014,10,40),M.upholstery);steering.position.set(-.30,.853,.36);steering.rotation.y=-Math.PI/2+.30;
  box(car,[.045,.085,.073],[-.30,.85,.36],M.carbon);
  tube(car,[[.63,.95,-.61],[.78,1.19,.48],[.81,1.21,.55]],.017,M.carbon,false,30);
  tube(car,[[.63,.95,.61],[.78,1.19,-.48]],.017,M.carbon,false,30);
}

function sideDetails(car,M){
  for(const s of [-1,1]){
    const outline=[[-.753,.861],[-.766,.666],[-.754,.402],[-.649,.279],[.30,.275],[.496,.337],[.606,.588],[.581,.826],[.55,.913]];
    tube(car,outline.map(([x,y])=>sidePoint(x,y,s)),.0028,M.black,false,85);
    const handle=ellipsoid(car,[.107,.017,.011],sidePoint(.46,.801,s,.012),M.paint,'Flush door handle');
    tube(car,[[.363,.793],[.44,.787],[.545,.799],[.549,.81],[.46,.817],[.368,.809]].map(([x,y])=>sidePoint(x,y,s,.014)),.0022,M.gunmetal,true,40);
    // Deep front wheel wake outlet, horizontal blade and rising rear-quarter intake.
    polygon(car,[[-.95,.669],[-.761,.634],[-.706,.356],[-.854,.427]].map(([x,y])=>sidePoint(x,y,s,.008)),M.black,'Front wheel wake outlet');
    polygon(car,[[-.938,.680],[-.391,.707],[-.363,.69],[-.747,.657]].map(([x,y])=>sidePoint(x,y,s,.012)),M.carbon,'Side aero blade');
    polygon(car,[[.453,.365],[.954,.636],[.968,.714],[.849,.641],[.687,.508]].map(([x,y])=>sidePoint(x,y,s,.012)),M.black,'Sculpted rear intake slash');
    tube(car,[[.46,.363],[.73,.515],[.96,.666]].map(([x,y])=>sidePoint(x,y,s,.018)),.008,M.paint,false,50);
    const sillPoints=[[-.963,.222,s*.963],[-.62,.207,s*.950],[.05,.207,s*.957],[.643,.205,s*.978],[.979,.236,s*.984]];
    tube(car,sillPoints,.032,M.carbon,false,80);
    tube(car,sillPoints.map(p=>[p[0],p[1]-.020,p[2]+s*.014]),.0048,M.yellow,false,80);
    polygon(car,[[-.981,.18,s*.986],[-.927,.26,s*.968],[.914,.265,s*.97],[.997,.179,s*.993]],M.carbon);
    // Round charge flap integrated into the shoulder ahead of the rear wheel.
    const flap=Array.from({length:50},(_,i)=>{const a=i/50*Math.PI*2;return sidePoint(.976+.075*Math.cos(a),.849+.065*Math.sin(a),s,.004);});tube(car,flap,.0025,M.black,true,60);
    // Slim stalks and carbon mirror housings with their own reflective rear face.
    tube(car,[[-.644,.889,s*.782],[-.629,.912,s*.948],[-.687,.971,s*1.030]],.021,M.carbon,false,22);
    const mirror=ellipsoid(car,[.13,.057,.074],[-.709,.988,s*1.050],M.carbon,'Carbon mirror');mirror.rotation.z=.08;
    const glass=ellipsoid(car,[.008,.043,.061],[-.594,.985,s*1.048],M.aluminium);glass.rotation.z=.10;
  }
}

function rearAero(car,M){
  // Recessed full-width rear ventilation and a multi-channel, rising diffuser.
  polygon(car,[[2.391,.517,-.872],[2.397,.533,0],[2.391,.517,.872],[2.358,.291,.837],[2.413,.235,0],[2.358,.291,-.837]],M.grille,'Rear cooling grille');
  for(const s of [-1,1]){
    const frame=[[2.397,.51,s*.03],[2.378,.515,s*.64],[2.295,.465,s*.83],[2.304,.260,s*.939],[2.425,.193,s*.773],[2.437,.166,s*.295],[2.429,.18,s*.03]];
    tube(car,frame,.022,M.carbon,false,65);
    tube(car,[[2.424,.227,s*.035],[2.424,.229,s*.63],[2.348,.212,s*.773],[2.308,.255,s*.921]],.005,M.yellow,false,45);
    polygon(car,[[2.05,.246,s*.982],[2.16,.496,s*.964],[2.289,.528,s*.914],[2.40,.232,s*.91]],M.carbon,'Rear outboard aero channel');
    tube(car,[[2.02,.219,s*.997],[2.199,.223,s*.984],[2.398,.247,s*.923]],.0045,M.yellow,false,36);
  }
  mesh(car,surface((u,v)=>[mix(1.70,2.425,u),.144+.090*u*u,(v*2-1)*.79],30,18,true),M.carbon,'Rising diffuser floor');
  for(const z of [-.66,-.33,0,.33,.66]){
    const sh=makeShape([[1.74,.172],[2.38,.131],[2.437,.141],[2.428,.451],[2.35,.493],[2.10,.354]]);
    const fin=extrudeShape(car,sh,.018,M.carbon,.003);fin.position.z=z-.009;
  }
  const rain=mesh(car,new THREE.PlaneGeometry(.113,.029),M.redLED);rain.position.set(2.440,.367,0);rain.rotation.y=Math.PI/2;
  for(const s of [-1,1]){const r=box(car,[.012,.018,.153],[2.393,.473,s*.548],M.redLens);}
}

function rearLamps(car,M){
  for(const s of [-1,1]){
    for(const [center,width,height,dy] of [[.696,.214,.056,.012],[.386,.127,.040,.0]]){
      const p=(u,v,lift=.0)=>{const z=(center+u*width)*s;return [2.411-.021*Math.max(0,(Math.abs(z)-.79)/.13)+lift,.786+dy+v*height,z];};
      const coords=[];for(let i=0;i<64;i++){const a=i/64*Math.PI*2;const u=Math.cos(a),v=Math.sin(a)*(1-.31*Math.abs(u));coords.push(p(u,v));}
      polygon(car,coords,M.black,'Eye-shaped rear light recess');
      const inner=coords.map(pt=>[pt[0]+.004,.786+dy+(pt[1]-.786-dy)*.83,(center*s+(pt[2]-center*s)*.96)]);polygon(car,inner,M.redLens);
      tube(car,coords.map(pt=>[pt[0]+.006,pt[1],pt[2]]),.006,M.black,true,66);
      // Delicate illuminated almond outline, with a separate inner light guide.
      tube(car,coords.map(pt=>[pt[0]+.012,.786+dy+(pt[1]-.786-dy)*.65,center*s+(pt[2]-center*s)*.86]),.0046,M.redLED,true,64);
      tube(car,[p(-.65,-.05,.013),p(.05,-.10,.016),p(.76,-.07,.013)],.0035,M.redLED,false,30);
    }
  }
  badge(car,[2.411,.766,0],[0,Math.PI/2,0],.045,M);
  const textMat=new THREE.MeshStandardMaterial({map:decal('D E N Z A',{fontSize:40,color:'#c9d4de',spacing:4}),transparent:true,roughness:.4,metalness:.65,depthWrite:false});
  const lettering=mesh(car,new THREE.PlaneGeometry(.285,.07),textMat);lettering.position.set(2.405,.647,0);lettering.rotation.y=Math.PI/2;
  const zMat=new THREE.MeshStandardMaterial({map:decal('Z  /  RACING',{fontSize:46,color:'#bdc8d3'}),transparent:true,roughness:.5});
  const name=mesh(car,new THREE.PlaneGeometry(.223,.048),zMat);name.position.set(2.401,.652,-.64);name.rotation.y=Math.PI/2;
}

function wing(car,M){
  const wingGroup=new THREE.Group();wingGroup.name='Racing / fixed carbon rear wing';car.add(wingGroup);
  // Thick, cambered foil; its two surfaces are independently generated, joined at the edges.
  const foil=(u,v,side)=>{const z=(v*2-1)*1.023,chord=.46-.025*Math.abs(z),x=1.976+(u-.5)*chord+.028*Math.abs(z);const thickness=.022*Math.sin(Math.PI*u)**.65;return[x,1.243+.022*Math.sin(Math.PI*u)-.027*u+side*thickness*.5,z];};
  mesh(wingGroup,surface((u,v)=>foil(u,v,1),32,52,true),M.carbon,'Upper aerofoil');
  mesh(wingGroup,surface((u,v)=>foil(u,v,-1),32,52),M.carbon,'Lower aerofoil');
  for(const u of [0,1])tube(wingGroup,Array.from({length:45},(_,i)=>foil(u,i/44,0)),.0035,M.carbon,false,50);
  for(const s of [-1,1]){
    const shape=new THREE.Shape();shape.moveTo(1.747,1.210);shape.quadraticCurveTo(1.773,1.303,1.826,1.319);shape.lineTo(2.229,1.369);shape.quadraticCurveTo(2.288,1.371,2.286,1.314);shape.lineTo(2.257,1.204);shape.quadraticCurveTo(2.132,1.113,1.831,1.157);shape.quadraticCurveTo(1.758,1.17,1.747,1.210);
    const plate=extrudeShape(wingGroup,shape,.012,M.carbon,.0035);plate.position.z=s*1.026-.006;
    tube(wingGroup,[[1.75,1.208,s*1.037],[1.796,1.304,s*1.037],[1.98,1.337,s*1.037],[2.232,1.37,s*1.037],[2.282,1.338,s*1.037]],.0039,M.yellow,false,50);
    const support=new THREE.Shape();support.moveTo(1.526,.944);support.lineTo(1.668,.934);support.lineTo(2.146,1.198);support.lineTo(2.163,1.254);support.lineTo(2.064,1.264);support.lineTo(1.70,1.086);support.closePath();
    const hole=new THREE.Path();hole.moveTo(1.722,1.044);hole.quadraticCurveTo(1.716,1.061,1.754,1.086);hole.lineTo(1.967,1.189);hole.quadraticCurveTo(2.011,1.20,2.006,1.176);hole.lineTo(1.769,1.055);hole.closePath();support.holes.push(hole);
    const bracket=extrudeShape(wingGroup,support,.026,M.carbon,.002);bracket.position.z=s*.528-.013;
    box(wingGroup,[.213,.017,.076],[1.613,.946,s*.528],M.carbon);
    for(const x of [1.55,1.68]){const bolt=mesh(wingGroup,new THREE.CylinderGeometry(.006,.006,.006,8),M.aluminium);bolt.position.set(x,.96,s*.528);}
  }
  return wingGroup;
}

/** Batch opaque stationary meshes by material. Transparent windows keep their draw order. */
function batchStatic(root){
  root.updateMatrixWorld(true); const buckets=new Map(), toRemove=[];
  root.traverse(obj=>{if(!obj.isMesh||obj.isInstancedMesh||Array.isArray(obj.material)||obj.material.transparent)return;
    const key=obj.material.uuid;if(!buckets.has(key))buckets.set(key,{material:obj.material,geos:[]});
    const g=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();g.applyMatrix4(obj.matrixWorld);
    buckets.get(key).geos.push(g);toRemove.push(obj);
  });
  for(const {material,geos} of buckets.values()){
    const total=geos.reduce((sum,g)=>sum+g.attributes.position.count,0),pos=new Float32Array(total*3),normal=new Float32Array(total*3),uv=new Float32Array(total*2);let offset=0;
    for(const g of geos){const count=g.attributes.position.count;pos.set(g.attributes.position.array,offset*3);normal.set(g.attributes.normal.array,offset*3);if(g.attributes.uv)uv.set(g.attributes.uv.array,offset*2);offset+=count;g.dispose();}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('normal',new THREE.BufferAttribute(normal,3));g.setAttribute('uv',new THREE.BufferAttribute(uv,2));g.computeBoundingSphere();mesh(root,g,material,`Batched ${material.name||material.type}`);
  }
  toRemove.forEach(o=>{o.removeFromParent();o.geometry.dispose();});
}

export function createVehicle(){
  const car=new THREE.Group();car.name='DENZA Z 2026 Racing — procedural multi-view study';
  const materials=createMaterials();for(const [key,m] of Object.entries(materials))m.name=key;
  bodyShell(car,materials);frontAero(car,materials);frontLamps(car,materials);cabin(car,materials);sideDetails(car,materials);rearAero(car,materials);rearLamps(car,materials);wing(car,materials);addWheels(car,materials);
  const sourceMeshes=[];car.traverse(o=>{if(o.isMesh)sourceMeshes.push(o.name);});
  batchStatic(car);
  car.userData={units:'metres',spec:SPEC,sourceMeshCount:sourceMeshes.length,procedural:true};
  return {car,materials};
}
