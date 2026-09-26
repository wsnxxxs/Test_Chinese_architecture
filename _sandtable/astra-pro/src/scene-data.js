import { PALETTE, randomGenerator } from './palette.js';
import { BUILDINGS, WALK_NODES, WALK_EDGES } from './layout.js';

const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const snap = (v, step = 0.18) => Math.round(v / step) * step;

/** A renderer-independent scene description. Boxes are pooled by the renderer. */
export function createSceneData(seed = 20260925) {
  const random = randomGenerator(seed);
  const boxes = [];
  const plaques = [];
  const lanterns = [];
  const pick = (name) => PALETTE[name][Math.floor(random() * PALETTE[name].length)];
  const box = (x, y, z, sx, sy, sz, color, group = 'solid', rotation = 0) => {
    boxes.push({ x, y, z, sx, sy, sz, color: color.startsWith('#') ? color : pick(color), group, rotation });
  };
  // Local coordinate systems keep east/west instances geometrically symmetric.
  const local = (ox, oz, angle = 0) => (x, y, z, sx, sy, sz, color, group = 'solid') => {
    const c = Math.cos(angle), s = Math.sin(angle);
    box(ox + x*c + z*s, y, oz - x*s + z*c, sx, sy, sz, color, group, angle);
  };
  const pillar = (B, x, z, bottom, height, size = 0.52) => {
    B(x, bottom + 0.12, z, size+0.3, 0.24, size+0.3, 'stone');
    B(x, bottom + height/2, z, size, height, size, 'red');
    B(x, bottom + height-0.06, z, size+0.19, 0.2, size+0.19, 'gold');
  };
  const bracket = (B, x, z, y, scale = 1) => {
    // Alternating transverse arms and corbel blocks: a voxel dougong stack.
    B(x,y,z, .72*scale,.24,.72*scale,'gold');
    B(x,y+.23,z, 1.12*scale,.22,.32*scale,'wood');
    B(x,y+.45,z, .34*scale,.22,1.18*scale,'jade');
    for (const s of [-1,1]) {
      B(x+s*.43*scale,y+.44,z,.26*scale,.22,.54*scale,'gold');
      B(x,y+.68,z+s*.44*scale,.56*scale,.22,.26*scale,'gold');
    }
    B(x,y+.78,z,1.45*scale,.22,.45*scale,'jade');
  };
  const lantern = (B, x, z, y, scale = 1) => {
    B(x,y+.68*scale,z,.06*scale,.65*scale,.06*scale,'darkWood');
    B(x,y,z,.55*scale,.64*scale,.55*scale,'red');
    B(x,y,z,.57*scale,.39*scale,.38*scale,'lantern','glow');
    B(x,y,z,.38*scale,.39*scale,.57*scale,'lantern','glow');
    B(x,y+.35*scale,z,.63*scale,.12*scale,.63*scale,'goldEdge');
    B(x,y-.35*scale,z,.58*scale,.12*scale,.58*scale,'goldEdge');
    B(x,y-.64*scale,z,.1*scale,.47*scale,.1*scale,'red');
  };

  /** Continuous curved roof sampled into discrete cuboids, never smooth triangles. */
  const roof = (B, width, depth, y, rise, palette = 'jade', style = 'hip', tile = .57) => {
    const hw = width/2, hd = depth/2;
    const nx = Math.ceil(width/tile), nz = Math.ceil(depth/tile);
    const dx = width/nx, dz = depth/nz;
    let ridge = style === 'pyramid' ? 0 : Math.max(0, hw-hd) * (style === 'xieshan' ? 1.25 : 1);
    if(style==='xieshan') ridge=Math.round((ridge+hw)/dx)*dx-hw;
    const surface = (x,z) => {
      const side = clamp((Math.abs(x)-ridge)/(hw-ridge),0,1);
      // A half-hip has upper gables, rather than simply another four-slope hip.
      const sideSlope = style==='xieshan' && Math.abs(x)>ridge ? .48+.52*side : side;
      const u = clamp(Math.max(Math.abs(z)/hd,sideSlope),0,1);
      const corner = Math.pow(Math.abs(x)/hw, 9) * Math.pow(Math.abs(z)/hd, 8);
      const curl = .42 * Math.pow(u, 10) + .73*corner;
      return snap(y + rise*Math.pow(1-u, 1.6) + curl);
    };
    // A stepped solid core closes the underside without paying for invisible cubes.
    for (let k=0;k<6;k++) {
      const t = k/6;
      let iw = Math.max(.7, width - (width-2*ridge)*t);
      if(style==='xieshan' && t>=.5) iw=Math.min(iw,2*ridge);
      const id = Math.max(.7, depth*(1-t));
      B(0, y-.16 + rise*Math.pow(t,1.6), 0, iw-.9, .39, id-.7, 'darkWood');
    }
    for (let ix=0;ix<nx;ix++) for (let iz=0;iz<nz;iz++) {
      const x = -hw + (ix+.5)*dx, z = -hd + (iz+.5)*dz;
      const edge = ix===0 || iz===0 || ix===nx-1 || iz===nz-1;
      B(x, surface(x,z), z, dx+.012, .4, dz+.012, edge ? (palette==='gold'?'goldEdge':'jadeEdge') : palette);
      // Raised rows suggest traditional overlapping cylindrical tile channels.
      if (Math.min(ix,nx-1-ix)%2===0 && iz>0 && iz<nz-1) B(x, surface(x,z)+.23,z,.09,.08,dz+.014,palette);
    }
    if(style==='xieshan') {
      // Close both exposed triangular gables with timber, then add narrow ribs.
      for(let iz=0;iz<nz;iz++) {
        const z=-hd+(iz+.5)*dz,u=Math.abs(z)/hd;
        const top=surface(ridge-.01,z)-.15;
        const bottom=y+rise*Math.pow(1-Math.max(u,.48),1.6)-.14;
        if(top-bottom>.12) for(const side of [-1,1]) {
          B(side*ridge,(top+bottom)/2,z,.27,top-bottom,dz+.014,'darkWood');
          if(iz%2===0) B(side*(ridge+.17),(top+bottom)/2,z,.11,top-bottom,.1,'gold');
        }
      }
    }
    if (ridge>.3) {
      for (let x=-ridge;x<=ridge+.1;x+=.42) B(x,y+rise+.24,0,.44,.32,.44,'goldEdge');
      for (const s of [-1,1]) {
        for(let j=0;j<4;j++) B(s*(ridge+.1+j*.2),y+rise+.4+j*.21,0,.32,.33,.33,'gold');
        B(s*(ridge+.42),y+rise+1.13,0,.48,.22,.32,'goldEdge');
      }
    } else {
      B(0,y+rise+.24,0,.67,.35,.67,'gold');
      B(0,y+rise+.69,0,.32,.64,.32,'goldEdge');
      B(0,y+rise+1.03,0,.16,.2,.16,'goldEdge');
    }
    // Corner finials emphasize the four lifted eaves.
    for (const sx of [-1,1]) for(const sz of [-1,1]) {
      for(let j=0;j<3;j++) {
        const x = sx*(hw-.36+j*.17), z = sz*(hd-.36+j*.17);
        B(x, surface(sx*(hw-.28),sz*(hd-.28))+.2+j*.22,z,.3,.3,.3,'goldEdge');
      }
    }
  };

  const steps = (B, width, depth, top, side = 1, count = 6) => {
    const rise = top/count, tread = .48;
    for(let i=0;i<count;i++) {
      const h = top-i*rise;
      B(0,h/2,side*(depth/2+.24+i*tread),width,h,tread+.03,'stone');
    }
    for(const s of [-1,1]) for(let i=0;i<count;i++) {
      B(s*(width/2+.22),top-i*rise+.14,side*(depth/2+.24+i*tread),.42,.28,tread+.02,'darkStone');
    }
  };
  const balustrade = (B, width, depth, y, front = false) => {
    for(const s of [-1,1]) {
      B(s*(width/2-.2),y+.66,0,.17,.19,depth-.2,'stone');
      B(s*(width/2-.2),y+.32,0,.12,.13,depth-.2,'stone');
      for(let z=-depth/2+.4;z<depth/2;z+=1.55) {
        B(s*(width/2-.2),y+.43,z,.24,.9,.24,'stone');
        B(s*(width/2-.2),y+.97,z,.38,.2,.38,'stone');
      }
      if (front) for(const sign of [-1,1]) {
        const len=width/2-3.5;
        B(sign*(3.4+len/2),y+.68,s*(depth/2-.25),len,.16,.18,'stone');
        for(let x=3.65;x<width/2;x+=1.5) {
          B(sign*x,y+.44,s*(depth/2-.25),.24,.9,.24,'stone');
          B(sign*x,y+.98,s*(depth/2-.25),.35,.18,.35,'stone');
        }
      }
    }
  };
  const foundation = (B, width, depth, top = 1.2) => {
    B(0,.2,0,width+2,.4,depth+2,'darkStone');
    B(0,top/2,0,width+1.35,top-.12,depth+1.35,'stone');
    B(0,top-.09,0,width+1.8,.28,depth+1.8,'stone');
    for(let x=-width/2;x<=width/2;x+=1.6) for(const s of [-1,1]) {
      B(x,.54,s*(depth/2+.7),1.5,.49,.16,'stone');
    }
  };
  const windowPanel = (B, x, z, y, width = 1.65, height = 2.8, side = false) => {
    const add = side ? (a,b,c,dx,dy,dz,col)=>B(c,b,a,dz,dy,dx,col) : B;
    add(x,y,z,width,height,.2,'darkWood');
    add(x,y+.15,z+.13,width-.2,height-.55,.08,'plaster');
    for(let j=-2;j<=2;j++) add(x+j*(width-.2)/5,y+.14,z+.2,.09,height-.48,.09,'wood');
    for(let j=-2;j<=2;j++) add(x,y+j*(height-.4)/5,z+.23,width-.08,.09,.09,'wood');
    add(x,y-height/2+.25,z+.22,width-.05,.53,.1,'red');
  };
  const plaque = (b, y, width = 3.5) => {
    plaques.push({ text:b.name, x:b.x, z:b.z, localZ:b.d/2+.53, y, width, rotation:b.rotation });
  };

  const hall = (b) => {
    const B = local(b.x,b.z,b.rotation), main=b.kind==='main';
    const top=main?1.7:1.15, colH=main?5.9:4.35;
    foundation(B,b.w+1,b.d+1,top);
    steps(B,main?8:5,b.d+2.4,top,1,main?7:5);
    if(main) balustrade(B,b.w+2.9,b.d+2.8,top,true);
    const wallH=colH-.4;
    B(0,top+wallH/2,-.35,b.w-.55,wallH,b.d-2.35,'red');
    B(0,top+.35,-.35,b.w-.4,.48,b.d-2.2,'plaster');
    const count=main?8:6;
    for(let i=0;i<count;i++) {
      const x=-b.w/2+.45+i*(b.w-.9)/(count-1);
      for(const s of [-1,1]) {
        pillar(B,x,s*(b.d/2-.3),top,colH,main?.63:.48);
        bracket(B,x,s*(b.d/2-.3),top+colH-.25,main?1.12:.88);
      }
    }
    for(let distance=2.75;distance<b.w/2-1;distance+=2.7) for(const sign of [-1,1]) {
      const x=distance*sign;
      windowPanel(B,x,b.d/2-.83,top+2.3,1.7,3.05);
      windowPanel(B,x,-b.d/2+1.0,top+2.3,1.7,3.05);
    }
    // Central doors, inset wooden panels and golden door studs.
    B(0,top+2.15,b.d/2-.72,3.7,4.3,.25,'darkWood');
    for(const s of [-1,1]) {
      B(s*.83,top+2.08,b.d/2-.53,1.57,4.05,.16,'red');
      for(let j=0;j<4;j++) for(let k=0;k<3;k++) B(s*.83+(k-1)*.42,top+.7+j*.79,b.d/2-.4,.11,.11,.11,'goldEdge');
      B(s*.23,top+2.05,b.d/2-.3,.17,.32,.13,'gold');
    }
    for(const s of [-1,1]) {
      B(0,top+colH-.15,s*(b.d/2-.2),b.w+.9,.33,.37,'jade');
      B(s*(b.w/2-.3),top+colH-.15,0,.34,.33,b.d+.7,'jade');
      lantern(B,s*(main?8:5.8),b.d/2+.22,top+colH-1.3,main?1.03:.85);
    }
    plaque(b,top+colH-.95,main?4.9:3.3);
    if(main) {
      roof(B,31,21,8.22,3.5,'gold','hip');
      B(0,11.35,0,17.6,2.45,8.2,'red');
      B(0,12.2,0,19.2,.45,9.4,'jade');
      for(const z of [-4.1,4.1]) for(let x=-8;x<=8;x+=2.3) {
        B(x,11.7,z,.36,1.9,.38,'red');
        bracket(B,x,z,12.07,.8);
      }
      roof(B,24,14.8,12.75,3.05,'gold','xieshan');
    } else roof(B,b.roofW,b.roofD,top+colH+.62,2.8,'jade','hip');
  };

  const gate = (b) => {
    const B=local(b.x,b.z), top=.9, h=4.6;
    foundation(B,b.w,b.d,top);
    steps(B,8,b.d+1.4,top,1,4); steps(B,8,b.d+1.4,top,-1,4);
    for(const s of [-1,1]) {
      B(s*6.65,top+2.03,0,4.55,4.06,b.d-1.8,'red');
      B(s*6.65,top+.32,0,4.7,.64,b.d-1.6,'plaster');
      windowPanel(B,s*6.65,b.d/2-.79,top+2.3,2.6,2.9);
      for(const x of [2.85,8.5]) for(const z of [-3.5,3.5]) {
        pillar(B,s*x,z,top,h,.56); bracket(B,s*x,z,top+h-.18,1);
      }
      // Open door leaves lie along the passage sides, not across the path.
      B(s*2.4,top+2.05,1.1,.23,4.0,2.7,'red');
      lantern(B,s*4,b.d/2+.25,top+3.3,1.05);
    }
    B(0,top+h-.28,0,b.w+.6,.58,b.d-.8,'wood');
    B(0,top+h+.08,3.7,b.w+1.1,.23,.36,'jade');
    roof(B,b.roofW,b.roofD,6.05,2.75,'jade','xieshan');
    plaque(b,5.02,4.1);
  };
  const tower = (b) => {
    const B=local(b.x,b.z), top=1.0;
    foundation(B,b.w,b.d,top); steps(B,4.3,b.d+1.7,top,1,5);
    B(0,2.58,0,7.4,3.1,7.4,'red');
    B(0,1.35,0,7.65,.5,7.65,'plaster');
    for(const s of [-1,1]) for(const t of [-1,1]) {
      pillar(B,s*3.6,t*3.6,top,3.8,.56); bracket(B,s*3.6,t*3.6,4.65,.92);
    }
    for(const x of [-2.1,2.1]) windowPanel(B,x,3.79,2.75,1.7,2.35);
    roof(B,13,13,5.05,2.5,'jade','pyramid');
    B(0,7.15,0,7.1,.4,7.1,'wood');
    for(const s of [-1,1]) for(const t of [-1,1]) {
      pillar(B,s*2.85,t*2.85,7.0,2.5,.45); bracket(B,s*2.85,t*2.85,9.36,.8);
    }
    for(const s of [-1,1]) {
      B(0,7.88,s*3.1,6.8,.17,.15,'red'); B(s*3.1,7.88,0,.15,.17,6.8,'red');
      for(let x=-2.7;x<=2.7;x+=.75) { B(x,7.49,s*3.1,.13,.9,.13,'red'); B(s*3.1,7.49,x,.13,.9,.13,'red'); }
    }
    if(b.kind==='bell') {
      B(0,9.14,0,3.7,.26,.35,'wood'); B(0,8.86,0,.16,.55,.16,'bronze');
      B(0,8.45,0,1.4,.7,1.4,'bronze'); B(0,7.98,0,1.85,.48,1.85,'bronze');
      B(0,7.73,0,2.18,.2,2.18,'gold');
    } else {
      for(const s of [-1,1]) { B(s*1.3,7.86,0,.25,1.5,.3,'wood'); B(s*1.3,7.25,0,.55,.2,2.2,'wood'); }
      B(0,8.15,0,2.55,1.7,1.65,'red');
      B(0,8.15,0,2.15,2.04,1.66,'red');
      for(const s of [-1,1]) B(0,8.15,s*.87,2.13,1.65,.16,'plaster');
      B(0,8.15,.98,.27,.27,.07,'gold');
    }
    roof(B,10.7,10.7,10.02,2.1,'jade','pyramid');
    plaque(b,4.2,2.8);
  };
  const pagoda = (b) => {
    const B=local(b.x,b.z);
    foundation(B,8.0,8.0,1.2); steps(B,3.8,9.4,1.2,1,6);
    for(let level=0;level<5;level++) {
      const body=7.2-level*.68, y=1.2+level*4.28;
      B(0,y+1.38,0,body,2.76,body,'plaster');
      B(0,y+.2,0,body+.3,.37,body+.3,'red');
      for(const s of [-1,1]) {
        for(const t of [-1,1]) pillar(B,s*(body/2-.22),t*(body/2-.22),y,2.8,.43);
        B(0,y+2.56,s*(body/2+.06),body+.55,.3,.24,'red');
        B(s*(body/2+.06),y+2.56,0,.24,.3,body+.55,'red');
        B(0,y+1.35,s*(body/2+.07),1.1,1.8,.13,'darkWood');
        B(s*(body/2+.07),y+1.35,0,.13,1.8,1.1,'darkWood');
        for(const t of [-1,1]) {
          B(t*.37,y+1.4,s*(body/2+.17),.1,1.6,.1,'gold');
          B(s*(body/2+.17),y+1.4,t*.37,.1,1.6,.1,'gold');
          bracket(B,s*(body/2-.22),t*(body/2-.22),y+2.65,.73);
        }
      }
      roof(B,11.8-level*.97,11.8-level*.97,y+3.05,1.55,'jade','pyramid',.56);
    }
    for(let i=0;i<7;i++) B(0,23.95+i*.22,0,.65-i*.07,.21,.65-i*.07,'goldEdge');
    B(0,25.66,0,.16,.7,.16,'gold');
  };
  const pavilion = (b) => {
    const B=local(b.x,b.z), top=1.0;
    foundation(B,6.4,6.4,top);
    for(const s of [-1,1]) for(const t of [-1,1]) { pillar(B,s*2.36,t*2.36,top,3.6,.39); bracket(B,s*2.36,t*2.36,4.38,.9); }
    for(const s of [-1,1]) {
      B(0,1.7,s*2.4,4.8,.19,.18,'red');
      B(0,1.35,s*2.38,4.8,.14,.15,'red');
      for(let x=-2.3;x<=2.3;x+=.76) B(x,1.36,s*2.4,.17,.9,.17,'red');
      B(0,1.67,s*1.97,3.7,.25,.64,'wood');
    }
    roof(B,9,9,4.99,1.85,'jade','pyramid');
    lantern(B,0,0,3.5,.8);
  };

  // Ground: a layered, chamfered stone diorama rather than a floating flat plane.
  box(0,-2.81,0,97,.8,109,'darkStone');
  box(0,-1.65,0,102,1.65,114,'stone');
  box(0,-.61,0,106,.5,118,'stone');
  box(0,-.18,0,104,.4,116,'grass','ground');
  for(const s of [-1,1]) {
    for(let z=-54;z<=54;z+=3) box(s*51.1,-1.51,z,.24,1.56,2.91,'stone');
    for(let x=-48;x<=48;x+=3) box(x,-1.51,s*57.1,2.91,1.56,.24,'stone');
    box(s*52,-.2,0,.55,.3,117,'stone');
    box(0,-.2,s*58,104,.3,.55,'stone');
  }
  for(let i=0;i<9;i++) {
    const h=3.1-i*.34;
    box(0,-3.3+h/2,57.1+i*.62,12.5,h,.66,'stone');
  }
  // Small color variations retain a coherent, quiet lawn surface.
  for(let i=0;i<260;i++) {
    const x=(random()-.5)*101,z=(random()-.5)*111;
    box(x,.035,z,1.1+random()*2.6,.055,1.1+random()*2.5,'grass','ground');
  }
  // Court paving: a precise slab grid with thin seams.
  for(let x=-16;x<=16;x+=2) for(let z=-4;z<=32;z+=2) box(x,.085,z,1.95,.14,1.95,'stone','ground');
  // Spine and lateral walks are generated from the same graph the tests validate.
  for(const [from,to] of WALK_EDGES) {
    if(from.endsWith('Front') && to.endsWith('Pavilion')) continue;
    const a=WALK_NODES[from],b=WALK_NODES[to], dx=b[0]-a[0], dz=b[1]-a[1];
    const len=Math.hypot(dx,dz), n=Math.max(1,Math.ceil(len/1.65)), width=(a[0]===0 && b[0]===0)?6.2:3.4;
    for(let i=0;i<n;i++) {
      const t=(i+.5)/n,x=a[0]+dx*t,z=a[1]+dz*t;
      box(x,.17,z,dx===0?width:len/n-.025,.18,dx===0?len/n-.025:width,'stone','ground');
    }
  }
  // A framed, stepped stone medallion in the middle of the front court.
  for(let ring=0;ring<3;ring++) {
    const size=9-ring*1.2;
    for(const s of [-1,1]) { box(s*size/2,.28,13,.2,.07,size,'darkStone','ground'); box(0,.28,13+s*size/2,size,.07,.2,'darkStone','ground'); }
  }
  box(0,.31,13,2.8,.08,2.8,'darkStone','ground',Math.PI/4);
  box(0,.37,13,1.65,.08,1.65,'stone','ground',Math.PI/4);

  // Enclosure, garden pools and little bridges, mirrored across the central axis.
  const wall = (B,length) => {
    B(0,1.06,0,length,2.05,.63,'plaster'); B(0,.24,0,length+.15,.43,.86,'darkStone');
    for(let x=-length/2+.3;x<length/2;x+=.58) {
      B(x,2.18,0,.6,.2,1.03,'jade'); B(x,2.39,0,.6,.19,.68,'jade');
    }
    for(let x=-length/2+.1;x<=length/2+.1;x+=6) { B(x,1.13,0,.55,2.21,.94,'red'); B(x,2.45,0,.77,.22,1.1,'jadeEdge'); }
  };
  wall(local(0,-50),94);
  for(const s of [-1,1]) { wall(local(s*47,-3.5,Math.PI/2),93); wall(local(s*29.1,43),35.5); }
  for(const s of [-1,1]) {
    const cx=s*33,cz=32;
    box(cx,.05,cz,18,.18,18,'darkStone','ground');
    box(cx,.19,cz,16.9,.12,16.9,'water','water');
    for(const a of [-1,1]) {
      box(cx+a*8.7,.35,cz,.48,.55,18,'stone'); box(cx,.35,cz+a*8.7,18,.55,.48,'stone');
    }
    for(let i=0;i<23;i++) {
      const rx=(random()-.5)*15,rz=(random()-.5)*15;
      if(Math.abs(rx)<3.8 && Math.abs(rz)<3.8) continue;
      box(cx+rx,.267,cz+rz,.65+random()*1.5,.025,.055,'#a7c2ad','waterDetail');
    }
    for(const [rx,rz] of [[-5,5],[5,5],[-5,-5],[5,-4]]) {
      box(cx+s*rx,.29,cz+rz,1.25,.08,1.03,'pine','ground');
      box(cx+s*rx+.19,.43,cz+rz,.42,.28,.42,'blossom');
      box(cx+s*rx+.19,.62,cz+rz,.19,.16,.19,'goldEdge');
    }
    // Slightly arched, voxel-stepped timber bridge from road to pavilion landing.
    for(let i=0;i<12;i++) {
      const x=s*(20.6+i*.76),y=.28+Math.sin(i/11*Math.PI)*.48;
      box(x,y,32,.78,.24,2.65,'wood');
      for(const t of [-1,1]) {
        box(x,y+.86,32+t*1.28,.78,.16,.14,'red');
        if(i%2===0) { box(x,y+.55,32+t*1.28,.19,1.13,.19,'red'); box(x,y+1.2,32+t*1.28,.27,.18,.27,'gold'); }
      }
    }
  }

  for(const b of BUILDINGS) {
    if(['main','hall','side'].includes(b.kind)) hall(b);
    else if(b.kind==='gate') gate(b);
    else if(['bell','drum'].includes(b.kind)) tower(b);
    else if(b.kind==='pagoda') pagoda(b);
    else pavilion(b);
  }

  const lion = (x,z,scale=1) => {
    const B=(a,b,c,dx,dy,dz,col)=>box(x+a*scale,b*scale,z+c*scale,dx*scale,dy*scale,dz*scale,col);
    B(0,.23,0,1.55,.46,1.9,'stone'); B(0,.57,0,1.25,.25,1.65,'darkStone');
    B(0,1.1,-.13,.84,.85,1.08,'stone');
    for(const s of [-1,1]) { B(s*.33,.88,.47,.3,.6,.39,'stone'); B(s*.45,1.85,.45,.3,.37,.4,'stone'); }
    B(0,1.64,.26,1.07,.9,.95,'darkStone'); B(0,1.75,.46,.82,.72,.82,'stone');
    B(0,1.57,.92,.58,.36,.37,'stone');
    B(0,1.32,.94,.65,.17,.33,'darkStone');
    for(const s of [-1,1]) B(s*.24,1.88,.9,.12,.13,.08,'darkWood');
    B(0,1.36,-.73,.3,.58,.28,'stone'); B(0,1.65,-.61,.3,.22,.38,'stone');
    // Block curls around the mane, rather than a smooth sphere.
    for(let i=0;i<8;i++) {
      const a=i/8*TAU; B(Math.cos(a)*.53,1.65+Math.sin(a)*.46,.36,.24,.24,.36,'stone');
    }
  };
  for(const s of [-1,1]) { lion(s*7.1,50.0,.88); lion(s*6.6,-4.8,1.06); }
  // Incense vessel sits off the walking surface on a small central stone plinth.
  box(0,.33,2.2,3.8,.45,3.7,'stone');
  for(const s of [-1,1]) for(const t of [-1,1]) box(s*.69,.94,2.2+t*.57,.29,1.0,.29,'bronze');
  box(0,1.52,2.2,2.1,.8,1.65,'bronze'); box(0,2.0,2.2,2.44,.2,1.96,'gold');
  box(0,2.13,2.2,1.79,.17,1.31,'darkWood');
  for(const s of [-1,1]) { box(s*1.33,1.93,2.2,.26,.78,.37,'bronze'); box(s*1.12,2.27,2.2,.55,.2,.34,'bronze'); }
  for(let x=-.42;x<=.42;x+=.42) box(x,2.67,2.2,.055,1.04,.055,'wood');

  // Garden trees: only boundary voxels of each crown are emitted.
  const tree = (x,z,type='pine',scale=1,treeSeed=1) => {
    const R=randomGenerator(treeSeed), B=(a,b,c,dx,dy,dz,col)=>box(x+a*scale,b*scale,z+c*scale,dx*scale,dy*scale,dz*scale,col);
    B(0,.15,0,2.8,.24,2.8,'darkStone'); B(0,2.3,0,.63,4.4,.63,'wood');
    for(const s of [-1,1]) for(let k=0;k<3;k++) B(s*(.28+k*.28),2.6+k*.37,0,.42,.64,.4,'wood');
    if(type==='pine') {
      for(let layer=0;layer<4;layer++) {
        const radius=2.6-layer*.45,y=3.5+layer*1.18;
        const n=Math.ceil(radius/.72);
        for(let ix=-n;ix<=n;ix++) for(let iz=-n;iz<=n;iz++) {
          if(Math.abs(ix)+Math.abs(iz)>n*1.65 || R()<.05) continue;
          B(ix*.71,y+(n-Math.max(Math.abs(ix),Math.abs(iz)))*.18,iz*.71,.76,.64,.76,PALETTE.pine[Math.floor(R()*4)]);
        }
      }
    } else {
      const cells=new Set(), n=4;
      for(let ix=-n;ix<=n;ix++) for(let iy=-3;iy<=3;iy++) for(let iz=-n;iz<=n;iz++) {
        const q=(ix/4.0)**2+(iy/2.8)**2+(iz/3.55)**2;
        if(q<1.0 && (q<.72 || R()>.15)) cells.add(`${ix},${iy},${iz}`);
      }
      for(const key of cells) {
        const [ix,iy,iz]=key.split(',').map(Number);
        const exposed=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([a,b,c])=>!cells.has(`${ix+a},${iy+b},${iz+c}`));
        if(exposed) B(ix*.71,5.1+iy*.71,iz*.71,.78,.78,.78,PALETTE[type][Math.floor(R()*PALETTE[type].length)]);
      }
    }
    // Four root stones bind the tree to the ground plane.
    for(const s of [-1,1]) B(s*.4,.48,0,.45,.55,.6,'wood');
  };
  const trees=[
    [42,-44,'pine',1.1],[44,-22,'pine',.95],[43,-9,'pine',1.02],
    [43,7,'autumn',.9],[43,22,'autumn',.81],[43,37,'pine',.83],
    [23,-43,'pine',.8],[13,26,'blossom',.76],[13,5,'pine',.74],
    [13,37,'autumn',.66],[8,-33,'autumn',.65],
  ];
  for(let i=0;i<trees.length;i++) {
    const [x,z,type,scale]=trees[i];
    for(const s of [-1,1]) tree(s*x,z,type,scale,seed+i*117);
  }
  // Low shrubs and stepping rocks never block the primary walks.
  for(const s of [-1,1]) for(let z=-42;z<42;z+=8) {
    box(s*44,.31,z,1.7,.52,1.4,'pine'); box(s*45,.44,z+.8,1.1,.65,1.15,'grass');
    box(s*45.8,.27,z-2.2,.8,.5,1.4,'darkStone');
  }
  for(const s of [-1,1]) for(const z of [33,24,16,7,-2]) {
    const x=s*8.5;
    box(x,.22,z,.75,.42,.75,'stone'); box(x,1.26,z,.15,2.0,.15,'wood');
    const B=local(x,z); lantern(B,0,0,2.32,.79);
    box(x,2.95,z,.93,.16,.88,'jade'); box(x,3.09,z,.65,.12,.62,'jade');
    lanterns.push({x,y:2.35,z});
  }

  return { boxes, plaques, lanterns, buildings: BUILDINGS, seed, stats: {
    buildings: BUILDINGS.length, voxels: boxes.length, trees: trees.length*2,
  }};
}
