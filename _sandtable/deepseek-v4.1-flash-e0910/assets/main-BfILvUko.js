const Tc={tile:{roughness:.34,metalness:.28},wall:{roughness:.86,metalness:0},wood:{roughness:.72,metalness:.04},stone:{roughness:.92,metalness:0},ground:{roughness:1,metalness:0},foliage:{roughness:.95,metalness:0},metal:{roughness:.32,metalness:.82},emissive:{roughness:.55,metalness:0,emissive:!0},water:{roughness:.12,metalness:.25,transparent:!0,opacity:.82},cloth:{roughness:.88,metalness:0}},Ai={tileGold:{hex:13208098,style:"tile",note:"金色琉璃瓦（主殿、山门）"},tileGoldDim:{hex:11104539,style:"tile",note:"琉璃瓦暗面 / 檐口"},tileGreen:{hex:3107662,style:"tile",note:"绿琉璃瓦（配殿、钟鼓楼）"},tileGreenDim:{hex:2380349,style:"tile",note:"绿琉璃瓦暗面"},tileGrey:{hex:4937056,style:"tile",note:"青瓦（廊庑、围墙）"},tileGreyDim:{hex:3752266,style:"tile",note:"青瓦暗面"},ridgeGold:{hex:12157984,style:"tile",note:"正脊 / 吻兽"},ridgeGrey:{hex:3883852,style:"tile",note:"青瓦正脊"},ridgeGreen:{hex:2448452,style:"tile",note:"绿琉璃正脊"},finialGold:{hex:14725184,style:"metal",note:"宝顶 / 金饰"},wallRed:{hex:10496548,style:"wall",note:"红墙"},wallRedDark:{hex:8134170,style:"wall",note:"红墙阴影 / 墙裙"},plaster:{hex:15195334,style:"wall",note:"抹灰白墙 / 山花"},brick:{hex:9075305,style:"wall",note:"砖砌基座"},wood:{hex:9132594,style:"wood",note:"木构件"},woodDark:{hex:6044194,style:"wood",note:"深色木 / 门窗框内"},woodLight:{hex:11565637,style:"wood",note:"浅色木 / 斗拱"},gold:{hex:14199098,style:"metal",note:"贴金装饰"},stone:{hex:10262409,style:"stone",note:"台基 / 栏板"},stoneDark:{hex:7301727,style:"stone",note:"台基压边 / 石狮"},stoneLight:{hex:13025458,style:"stone",note:"栏杆 / 御路"},paving:{hex:11709598,style:"ground",note:"庭院铺砖"},pavingAlt:{hex:10393737,style:"ground",note:"庭院铺砖（交错）"},path:{hex:12893871,style:"ground",note:"甬道 / 道路"},pathAlt:{hex:11841182,style:"ground",note:"甬道交错色"},kerb:{hex:9275257,style:"stone",note:"路牙"},grass:{hex:5143100,style:"ground",note:"草地"},grassAlt:{hex:4220975,style:"ground",note:"草地暗色"},grassDry:{hex:7113278,style:"ground",note:"草地枯黄"},flower:{hex:13129594,style:"ground",note:"花丛点缀"},foliage:{hex:4091450,style:"foliage",note:"树冠"},foliageDark:{hex:2904880,style:"foliage",note:"树冠暗色"},trunk:{hex:7031340,style:"wood",note:"树干"},water:{hex:3042958,style:"water",note:"放生池水面"},lanternRed:{hex:12986408,style:"wall",note:"灯笼壳"},lanternGlow:{hex:16761187,style:"emissive",note:"灯笼发光芯"},bronze:{hex:7232046,style:"metal",note:"铜钟 / 香炉"},drumRed:{hex:9317154,style:"cloth",note:"鼓面"}},bc=Object.keys(Ai);function Ac(i){const e=Ai[i];if(!e)throw new Error(`Unknown palette key: ${i}`);return e.style}const kn=(i,e,t)=>i+","+e+","+t;class wc{constructor(){this.cells=new Map}get size(){return this.cells.size}set(e,t,n,s){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n))throw new Error(`Voxel coordinates must be integers, got (${e}, ${t}, ${n})`);if(!Ai[s])throw new Error(`Unknown palette key: ${s}`);return this.cells.set(kn(e,t,n),{x:e,y:t,z:n,k:s}),this}get(e,t,n){const s=this.cells.get(kn(e,t,n));return s?s.k:void 0}has(e,t,n){return this.cells.has(kn(e,t,n))}remove(e,t,n){return this.cells.delete(kn(e,t,n)),this}box(e,t,n,s,r,a,o){const[l,c]=e<=s?[e,s]:[s,e],[u,f]=t<=r?[t,r]:[r,t],[h,p]=n<=a?[n,a]:[a,n];for(let _=l;_<=c;_++)for(let M=u;M<=f;M++)for(let m=h;m<=p;m++)this.set(_,M,m,o);return this}clearBox(e,t,n,s,r,a){const[o,l]=e<=s?[e,s]:[s,e],[c,u]=t<=r?[t,r]:[r,t],[f,h]=n<=a?[n,a]:[a,n];for(let p=o;p<=l;p++)for(let _=c;_<=u;_++)for(let M=f;M<=h;M++)this.cells.delete(kn(p,_,M));return this}walls(e,t,n,s,r,a,o){const[l,c]=e<=s?[e,s]:[s,e],[u,f]=t<=r?[t,r]:[r,t],[h,p]=n<=a?[n,a]:[a,n];for(let _=u;_<=f;_++){for(let M=l;M<=c;M++)this.set(M,_,h,o),this.set(M,_,p,o);for(let M=h;M<=p;M++)this.set(l,_,M,o),this.set(c,_,M,o)}return this}rect(e,t,n,s,r,a){const[o,l]=t<=s?[t,s]:[s,t],[c,u]=n<=r?[n,r]:[r,n];for(let f=o;f<=l;f++)for(let h=c;h<=u;h++)this.set(f,e,h,a);return this}rectRing(e,t,n,s,r,a,o=1){const[l,c]=t<=s?[t,s]:[s,t],[u,f]=n<=r?[n,r]:[r,n];for(let h=l;h<=c;h++)for(let p=0;p<o;p++)this.set(h,e,u+p,a),this.set(h,e,f-p,a);for(let h=u;h<=f;h++)for(let p=0;p<o;p++)this.set(l+p,e,h,a),this.set(c-p,e,h,a);return this}column(e,t,n,s,r){const[a,o]=n<=s?[n,s]:[s,n];for(let l=a;l<=o;l++)this.set(e,l,t,r);return this}stamp(e,t=0,n=0,s=0){for(const r of e.cells.values())this.set(r.x+t,r.y+n,r.z+s,r.k);return this}byKey(){const e=new Map;for(const t of this.cells.values()){let n=e.get(t.k);n||(n={key:t.k,style:Ac(t.k),count:0,xs:[],ys:[],zs:[]},e.set(t.k,n)),n.xs.push(t.x),n.ys.push(t.y),n.zs.push(t.z),n.count++}return e}bounds(){if(this.cells.size===0)return{xMin:0,xMax:0,yMin:0,yMax:0,zMin:0,zMax:0};let e=1/0,t=-1/0,n=1/0,s=-1/0,r=1/0,a=-1/0;for(const o of this.cells.values())o.x<e&&(e=o.x),o.x>t&&(t=o.x),o.y<n&&(n=o.y),o.y>s&&(s=o.y),o.z<r&&(r=o.z),o.z>a&&(a=o.z);return{xMin:e,xMax:t,yMin:n,yMax:s,zMin:r,zMax:a}}symmetryReport(){let e=0;const t=[];for(const n of this.cells.values())this.cells.has(kn(-n.x,n.y,n.z))||(e++,t.length<12&&t.push({x:n.x,y:n.y,z:n.z,k:n.k}));return{total:this.cells.size,missing:e,sample:t}}colorSymmetryReport(){let e=0,t=0;const n=[];for(const s of this.cells.values()){const r=this.cells.get(kn(-s.x,s.y,s.z));r?r.k!==s.k&&(t++,n.length<12&&n.push({x:s.x,y:s.y,z:s.z,k:s.k,mirror:r.k,why:"key"})):(e++,n.length<12&&n.push({x:s.x,y:s.y,z:s.z,k:s.k,why:"missing"}))}return{total:this.cells.size,missing:e,mismatched:t,sample:n}}}function El(i,e,t){let n=Math.imul(Math.abs(i)|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function Tl(i,e,t,n){const s=El(e,t,n);return i[Math.min(i.length-1,Math.floor(s*i.length))]}function bl(i,e){e<1&&(e=1),i<e&&(i=e);const t=[];for(let l=0;l<e;l++)t.push(e-l);const n=t.reduce((l,c)=>l+c,0),s=i-e,r=t.map(l=>1+Math.floor(s*l/n));let a=r.reduce((l,c)=>l+c,0),o=0;for(;a<i;)r[o%e]+=1,a+=1,o+=1;for(;a>i;){const l=r.findIndex(c=>c>1);if(l<0)break;r[l]-=1,a-=1}return r}const zs=(i,e,t)=>Math.max(e,Math.min(t,Math.round(i)));function Gs(i,e){const{x0:t,z0:n,x1:s,z1:r,y:a,tileKey:o,tileDimKey:l=o,edgeKey:c=o,ridgeKey:u,underKey:f=null,gable:h=!1,gableKey:p="plaster",ridgeWidth:_=3,finial:M=!1,upturn:m=!0,layersOverride:d=null}=e,A=s-t+1,P=r-n+1,S=A>=P,y=Math.max(1,Math.floor(((S?P:A)-_)/2)),w=d??zs(y*.72,3,12),x=bl(y,w),b=h?Math.max(1,Math.round(w*.42)):1/0,R=I=>{let Y=0,z=0;for(let K=0;K<I;K++){const J=x[K]??0;S?(z+=J,K<b&&(Y+=J)):(Y+=J,K<b&&(z+=J))}return S?z=Math.min(z,y):Y=Math.min(Y,y),{x0:t+Y,x1:s-Y,z0:n+z,z1:r-z}},F=(I,Y)=>(I+Y)%2===0?o:l;let B=0,G=R(0);const C=w+2;for(B=0;B<C;B++){const I=R(B+1),Y=a+B,z=I.x0>I.x1||I.z0>I.z1||I.x0===G.x0&&I.x1===G.x1&&I.z0===G.z0&&I.z1===G.z1;for(let K=G.x0;K<=G.x1;K++)for(let J=G.z0;J<=G.z1;J++){if(!z&&K>=I.x0&&K<=I.x1&&J>=I.z0&&J<=I.z1)continue;const ue=K===G.x0||K===G.x1||J===G.z0||J===G.z1;i.set(K,Y,J,B===0&&ue?c:F(K,J))}if(h&&B>=b&&B>0)for(const K of[G.x0,G.x1])for(let J=G.z0;J<=G.z1;J++)i.set(K,Y,J,p);if(z)break;G=I}const N=a+B,W=R(B);if(f&&i.rectRing(a-1,t,n,s,r,f,1),m&&Al(i,{x0:t,z0:n,x1:s,z1:r,y:a,key:c,dimKey:l}),u&&W.x0<=W.x1&&W.z0<=W.z1){const I=N+1;if(S){const Y=Math.round((W.z0+W.z1)/2);for(let z=W.x0;z<=W.x1;z++)i.set(z,N,Y,u),i.set(z,I,Y,u);for(const z of[W.x0,W.x1]){const K=z===W.x0?-1:1;i.set(z,I,Y,u),i.set(z+K,I,Y,u),i.set(z,I+1,Y,u),i.set(z+K,I+1,Y,"finialGold"),i.set(z,I+2,Y,u)}}else{const Y=Math.round((W.x0+W.x1)/2);for(let z=W.z0;z<=W.z1;z++)i.set(Y,N,z,u),i.set(Y,I,z,u);for(const z of[W.z0,W.z1]){const K=z===W.z0?-1:1;i.set(Y,I,z,u),i.set(Y,I,z+K,u),i.set(Y,I+1,z,u),i.set(Y,I+1,z+K,"finialGold"),i.set(Y,I+2,z,u)}}}if(M){const I=Math.round((W.x0+W.x1)/2),Y=Math.round((W.z0+W.z1)/2);i.box(I-1,N+1,Y-1,I+1,N+1,Y+1,"finialGold"),i.column(I,Y,N+2,N+4,"finialGold"),i.box(I-1,N+3,Y-1,I+1,N+3,Y+1,"gold")}return{topY:N,top:W,layers:w,profile:x,maxInset:y,ridgeAxis:S?"x":"z"}}function Al(i,{x0:e,z0:t,x1:n,z1:s,y:r,key:a,dimKey:o}){const l=n-e+1,c=s-t+1,u=zs(Math.min(l,c)*.28,2,6);for(let h=e;h<=n;h++)for(const[p,_]of[[t,-1],[s,1]]){const M=Math.min(h-e,n-h);if(M>=u)continue;const m=Math.min(3,u-M);for(let d=1;d<=m;d++)i.set(h,r+d,p,(h+p)%2===0?a:o);if(M<=u-2)for(let d=1;d<=m;d++)i.set(h,r+d,p+_,(h+p)%2===0?a:o)}for(let h=t;h<=s;h++)for(const[p,_]of[[e,-1],[n,1]]){const M=Math.min(h-t,s-h);if(M>=u)continue;const m=Math.min(3,u-M);for(let d=1;d<=m;d++)i.set(p,r+d,h,(p+h)%2===0?a:o);if(M<=u-2)for(let d=1;d<=m;d++)i.set(p+_,r+d,h,(p+h)%2===0?a:o)}const f=zs(Math.min(l,c)*.22,2,5);for(const[h,p]of[[e,-1],[n,1]])for(const[_,M]of[[t,-1],[s,1]])for(let m=1;m<=f;m++){const d=1+Math.floor(m/2);i.set(h+p*m,r+d,_+M*m,a),m<=2&&(i.set(h+p*m,r+d,_+M*(m-1),a),i.set(h+p*(m-1),r+d,_+M*m,a))}}function Hs(i,e){const{x0:t,z0:n,x1:s,z1:r,y:a,tileKey:o,tileDimKey:l=o,edgeKey:c=o,ridgeKey:u=null,finialKey:f="finialGold",upturn:h=!0,layersOverride:p=null}=e,_=s-t+1,M=r-n+1,m=Math.max(1,Math.floor((Math.min(_,M)-1)/2)),d=p??zs(m*.78,3,12),A=bl(m,d),P=(b,R)=>(b+R)%2===0?o:l;let S=0,E=0,y=a;for(let b=0;b<=d;b++){const R={x0:t+S,x1:s-S,z0:n+E,z1:r-E};if(R.x0>R.x1||R.z0>R.z1)break;const F=a+b;y=F;const B=R.x0===R.x1&&R.z0===R.z1;for(let C=R.x0;C<=R.x1;C++)for(let N=R.z0;N<=R.z1;N++){const W=C===R.x0||C===R.x1||N===R.z0||N===R.z1;i.set(C,F,N,b===0&&W?c:P(C,N))}if(B)break;const G=A[Math.min(b,A.length-1)];S+=G,E+=G}h&&Al(i,{x0:t,z0:n,x1:s,z1:r,y:a,key:c,dimKey:l});const w=Math.round((t+s)/2),x=Math.round((n+r)/2);return i.box(w-1,y+1,x-1,w+1,y+1,x+1,f),i.column(w,x,y+2,y+5,f),i.box(w-1,y+4,x-1,w+1,y+4,x+1,"gold"),u&&i.box(w-1,y+6,x-1,w+1,y+6,x+1,u),{topY:y+6,layers:d}}function wl(i,e,t,n,s){for(let r=i;r<=t;r++)s(r,e,0,-1),n!==e&&s(r,n,0,1);for(let r=e+1;r<=n-1;r++)s(i,r,-1,0),t!==i&&s(t,r,1,0)}function Xi(i,{x0:e,z0:t,x1:n,z1:s,y:r,key:a="woodLight",armKey:o="wood",capKey:l="gold",step:c=3,rows:u=2}={}){for(let f=0;f<u;f++){const h=r+f,p=f*Math.floor(c/2);wl(e,t,n,s,(_,M,m,d)=>{i.set(_,h,M,a);const A=(Math.abs(_)+Math.abs(M)+p)%c;A===0&&(m&&i.set(_+m,h,M,o),d&&i.set(_,h,M+d,o),m&&d&&i.set(_+m,h,M+d,o)),f===u-1&&A===Math.floor(c/2)&&i.set(_,h+1,M,l)})}}function Yi(i,{x0:e,z0:t,x1:n,z1:s,y0:r,y1:a,key:o="wallRed",spacing:l=4,baseKey:c="stoneDark"}={}){const u=Math.round((e+n)/2),f=Math.round((t+s)/2),h=new Set([e,n]);for(let M=l;u-M>=e;M+=l)h.add(u-M),h.add(u+M);const p=new Set([t,s]);for(let M=l;f-M>=t;M+=l)p.add(f-M),p.add(f+M);const _=(M,m)=>{i.column(M,m,r,a,o),c&&i.set(M,r-1,m,c)};for(const M of h)_(M,t),_(M,s);for(const M of p)_(e,M),_(n,M);_(e,t),_(n,t),_(e,s),_(n,s)}function lo(i,{axis:e="z",a0:t,a1:n,edge:s,dir:r=1,yTop:a,key:o="stone",treadKey:l="stoneLight",imperial:c=!0}={}){const u=Math.max(1,a-1);for(let f=0;f<u;f++){const h=a-1-f,p=s+r*f;for(let _=t;_<=n;_++){const M=e==="z"?_:p,m=e==="z"?p:_;for(let d=1;d<=h;d++)i.set(M,d,m,o);i.set(M,h,m,l)}}if(c){const f=Math.round((t+n)/2);for(let h=0;h<u;h++){const p=s+r*h;for(const _ of[-1,0,1]){const M=e==="z"?f+_:p,m=e==="z"?p:f+_;i.set(M,a-1-h,m,"stoneLight")}}}}function yn(i,{axis:e="z",wall:t=0,from:n=0,to:s=0,y0:r=1,y1:a=4,leafKey:o="woodDark",frameKey:l="wallRedDark",studKey:c="gold",studs:u=!0}={}){for(let f=n;f<=s;f++)for(let h=r;h<=a;h++){const p=e==="z"?f:t,_=e==="z"?t:f,M=f===n||f===s||h===r||h===a;i.set(p,h,_,M?l:o),u&&!M&&(f-n)%2===0&&(h-r)%2===1&&i.set(p,h,_,c)}return{x:e==="z"?Math.round((n+s)/2):t,z:e==="z"?t:Math.round((n+s)/2)}}function co(i,{axis:e="z",wall:t=0,cx:n=0,y:s=0,halfWidth:r=3,key:a="woodDark",textKey:o="gold"}={}){for(let l=n-r;l<=n+r;l++){const c=e==="z"?l:t,u=e==="z"?t:l;i.set(c,s,u,a),l!==n-r&&l!==n+r&&Math.abs(l-n)%2===0&&i.set(c,s,u,o)}}function Ds(i,{axis:e="z",wall:t=0,from:n=0,to:s=0,y0:r=1,y1:a=3,frameKey:o="wood",latticeKey:l="woodDark",paperKey:c="plaster"}={}){for(let u=n;u<=s;u++)for(let f=r;f<=a;f++){const h=e==="z"?u:t,p=e==="z"?t:u,_=u===n||u===s||f===r||f===a,M=(u-n)%2===0||(f-r)%2===0;i.set(h,f,p,_?o:M?l:c)}}function Fr(i,{x:e,y:t,z:n,half:s=1,glowKey:r="lanternGlow",frameKey:a="lanternRed",capKey:o="gold"}={}){i.box(e-s,t,n-s,e+s,t+2*s,n+s,r),i.rectRing(t,e-s,n-s,e+s,n+s,a),i.rectRing(t+2*s,e-s,n-s,e+s,n+s,a);for(const l of[-s,s])for(const c of[-s,s])i.column(e+l,n+c,t,t+2*s,a);i.box(e-s,t+2*s+1,n-s,e+s,t+2*s+1,n+s,o),i.column(e,n,t+2*s+2,t+2*s+3,"woodDark"),i.set(e,t-1,n,o),i.set(e,t-2,n,a)}function Rc(i,{x:e,y:t,z:n,key:s="stone",darkKey:r="stoneDark"}={}){i.box(e-2,t,n-2,e+2,t+1,n+2,r),i.box(e-1,t+2,n-1,e+1,t+4,n+1,s),i.box(e-1,t+5,n-1,e+1,t+6,n+1,s),i.set(e-2,t+5,n,r),i.set(e+2,t+5,n,r),i.set(e-1,t+5,n-2,s),i.set(e+1,t+5,n-2,s),i.set(e-1,t+5,n+2,s),i.set(e+1,t+5,n+2,s),i.set(e,t+7,n,r),i.set(e-1,t+3,n-2,s),i.set(e+1,t+3,n-2,s)}function Cc(i,{x:e,y:t,z:n,key:s="bronze",baseKey:r="stone"}={}){i.box(e-1,t,n-1,e+1,t,n+1,r),i.box(e-1,t+1,n-1,e+1,t+2,n+1,s),i.rectRing(t+2,e-1,n-1,e+1,n+1,"gold"),i.box(e,t+3,n,e,t+4,n,s),i.set(e,t+5,n,"gold")}function wa(i,{x0:e,z0:t,x1:n,z1:s,y:r,key:a="stoneLight",postKey:o="stone"}={}){wl(e,t,n,s,(l,c,u,f)=>{const h=(Math.abs(l)+Math.abs(c))%3===0;i.set(l,r,c,h?o:a),i.set(l,r+1,c,h?o:a)})}function ho(i,{x:e,z:t,y:n=1,seed:s=1,trunkKey:r="trunk",leafKey:a="foliage",leafDarkKey:o="foliageDark"}={}){const l=Math.abs(e),c=p=>{let _=Math.imul(l*73856093^t*19349663^s*83492791^p*2654435761,2246822507);return _=Math.imul(_^_>>>13,3266489909),((_^_>>>16)>>>0)/4294967296},u=4+Math.floor(c(1)*3),f=3+Math.floor(c(2)*2);i.column(e,t,n,n+u,r);const h=n+u+f-1;for(let p=-f;p<=f;p++){const _=Math.round(Math.sqrt(Math.max(0,f*f-p*p)));for(let M=-_;M<=_;M++)for(let m=-_;m<=_;m++){if(M*M+p*p+m*m>f*f)continue;const d=c(Math.abs(M)*31+Math.abs(m)*7+(p+8))>.62?o:a;i.set(e+M,h+p,t+m,d)}}}function Ks(i,{x0:e,z0:t,x1:n,z1:s,yTop:r,key:a="stone",edgeKey:o="stoneDark"}){if(!(r<1)){i.rect(r,e,t,n,s,a),i.rectRing(r,e,t,n,s,o,1);for(let l=1;l<r;l++)i.rectRing(l,e,t,n,s,a,1)}}function Di(i,{x0:e,z0:t,x1:n,z1:s,height:r=9,key:a="wallRed",baseKey:o="stoneDark",capKey:l="tileGrey",capDimKey:c="tileGreyDim"}={}){const u=r;if(i.box(e,1,t,n,u,s,a),i.box(e,1,t,n,2,s,o),i.box(e-1,u+1,t-1,n+1,u+1,s+1,l),i.box(e-1,u+2,t-1,n+1,u+2,s+1,c),n-e>s-t)for(let f=e-1;f<=n+1;f++)for(let h=t;h<=s;h++)i.set(f,u+3,h,c);else for(let f=t-1;f<=s+1;f++)for(let h=e;h<=n;h++)i.set(h,u+3,f,c);return{yTop:u+3}}function Ra(i,{id:e,name:t,cx:n,cz:s,hx:r,hz:a,platform:o=3,wallHeight:l=10,wallThickness:c=1,wallKey:u="wallRed",baseKey:f="stone",baseEdgeKey:h="stoneDark",columnKey:p="wallRed",tileKey:_="tileGold",tileDimKey:M="tileGoldDim",edgeKey:m="tileGoldDim",ridgeKey:d="ridgeGold",roof:A="hip",doubleEave:P=!1,overhang:S=3,entranceAxis:E="z",entranceSide:y=-1,doors:w=1,doorHeight:x=5,windows:b=4,lanterns:R=!0,plaqueText:F=!1,railingOn:B=!1,stairSide:G="entrance"}={}){const C=n-r,N=n+r,W=s-a,I=s+a,Y=C-2,z=N+2,K=W-2,J=I+2,be=o,ue=be+1,et=be+l;Ks(i,{x0:Y,z0:K,x1:z,z1:J,yTop:o,key:f,edgeKey:h}),B&&o>=2&&wa(i,{x0:Y,z0:K,x1:z,z1:J,y:o+1});for(let Ae=ue;Ae<=et;Ae++)i.rectRing(Ae,C,W,N,I,u,c);i.rectRing(ue,C,W,N,I,"brick",c),i.rectRing(ue+1,C,W,N,I,"brick",c),Yi(i,{x0:C,z0:W,x1:N,z1:I,y0:ue,y1:et,key:p,spacing:4,baseKey:null});const Je=3+2,$=E==="z"?I:null,j=E==="x"?y<0?C:N:null,ge=[];for(let Ae=0;Ae<w;Ae++){const Ve=Math.round((Ae-(w-1)/2)*Je);if(E==="z"){const Be=n+Ve-1,We=n+Ve+1;yn(i,{axis:"z",wall:$,from:Be,to:We,y0:ue,y1:ue+x-1}),ge.push({x:n+Ve,z:$}),F&&Ae===Math.floor(w/2)&&co(i,{axis:"z",wall:$,cx:n+Ve,y:ue+x+1,halfWidth:2})}else{const Be=s+Ve-1,We=s+Ve+1;yn(i,{axis:"x",wall:j,from:Be,to:We,y0:ue,y1:ue+x-1}),ge.push({x:j,z:s+Ve}),F&&Ae===Math.floor(w/2)&&co(i,{axis:"x",wall:j,cx:s+Ve,y:ue+x+1,halfWidth:2})}}const Fe=ue+2,xe=ue+2+3,ie=(Ae,Ve,Be,We)=>{const L=Math.round((Be+We)/2),ft=Math.floor((We-Be)/2),$e=[];for(let T=1;T<=b;T++){const g=Math.round(ft*T/(b+1));if(!(g<2)&&!$e.some(O=>Math.abs(O-g)<3)){$e.push(g);for(const O of[L-g,L+g])O-1<Be+1||O+1>We-1||Ds(i,{axis:Ae,wall:Ve,from:O-1,to:O+1,y0:Fe,y1:xe})}}};if(E==="z")ie("x",C,W,I),ie("x",N,W,I),ie("z",W,C,N);else{ie("z",W,C,N),ie("z",I,C,N);const Ae=y<0?N:C;ie("x",Ae,W,I)}const Pe=et+1;Xi(i,{x0:C,z0:W,x1:N,z1:I,y:Pe,key:"woodLight",armKey:"wood",capKey:"gold",step:3,rows:2});const ve=Pe+2,re=S,ye=S;let Re;if(P&&Gs(i,{x0:C-re-1,z0:W-ye-1,x1:N+re+1,z1:I+ye+1,y:Math.round(ue+l*.45),tileKey:_,tileDimKey:M,edgeKey:m,ridgeKey:null,underKey:"woodDark",layersOverride:3,finial:!1}),Re=Gs(i,{x0:C-re,z0:W-ye,x1:N+re,z1:I+ye,y:ve,tileKey:_,tileDimKey:M,edgeKey:m,ridgeKey:d,underKey:"woodDark",gable:A==="gable",gableKey:"plaster",finial:A==="pyramid"}),R){const Ae=ve-3;if(E==="z")for(const Ve of new Set([n-3,n+3,n-(r-2),n+(r-2)]))Fr(i,{x:Ve,y:Ae,z:I+ye-1});else{const Be=(y<0?C:N)+y*(ye-1);for(const We of new Set([s-4,s+4]))Fr(i,{x:Be,y:Ae,z:We})}}if(G==="entrance")if(E==="z")lo(i,{axis:"z",a0:n-4,a1:n+4,edge:J+1,dir:1,yTop:o+1});else{const Ae=y<0?Y:z;lo(i,{axis:"x",a0:s-4,a1:s+4,edge:Ae+y,dir:y,yTop:o+1})}const Ie=E==="z"?{x:n,z:J+1}:{x:(y<0?Y:z)+(y<0?-1:1),z:s};return{id:e,name:t,category:"hall",cx:n,cz:s,hx:r,hz:a,footprint:{x0:Y,z0:K,x1:z,z1:J},height:(Re.topY??ve)+3,roof:A==="gable"?P?"重檐歇山顶":"歇山顶":P?"重檐庑殿顶":"庑殿顶",doors:ge.length,entrance:Ie,doorCells:ge}}function Pc(i,{cx:e,cz:t,hx:n=14,hz:s=5,...r}={}){const a=Ra(i,{id:"gate",name:"山门",cx:e,cz:t,hx:n,hz:s,platform:2,wallHeight:8,overhang:3,tileKey:"tileGold",tileDimKey:"tileGoldDim",edgeKey:"tileGoldDim",ridgeKey:"ridgeGold",roof:"gable",doors:3,doorHeight:5,windows:0,plaqueText:!0,lanterns:!0,...r});a.category="gate";const o=3;for(let l=-1;l<=1;l++)yn(i,{axis:"z",wall:t-s,from:e+l*5-1,to:e+l*5+1,y0:o,y1:o+4});return a.entrance={x:e,z:t-s-3},a}function Dc(i,{cx:e=0,cz:t=-22,hx:n=20,hz:s=11}={}){const r=Ra(i,{id:"mainHall",name:"主殿（大雄宝殿）",cx:e,cz:t,hx:n,hz:s,platform:4,wallHeight:12,wallThickness:1,overhang:4,tileKey:"tileGold",tileDimKey:"tileGoldDim",edgeKey:"tileGoldDim",ridgeKey:"ridgeGold",roof:"hip",doubleEave:!0,doors:3,doorHeight:6,windows:6,plaqueText:!0,lanterns:!0,railingOn:!0});return r.category="mainHall",r.monthPlatform={x0:e-n-2,z0:t-s-2,x1:e+n+2,z1:t+s+2},Cc(i,{x:e,y:1,z:t+s+8}),r}function rs(i,{cx:e,cz:t,hx:n=7,hz:s=14,side:r=-1,id:a,name:o,entranceAxis:l="x"}={}){const c=Ra(i,{id:a,name:o,cx:e,cz:t,hx:n,hz:s,platform:2,wallHeight:9,overhang:3,tileKey:"tileGreen",tileDimKey:"tileGreenDim",edgeKey:"tileGreenDim",ridgeKey:"ridgeGreen",roof:"gable",entranceAxis:l,entranceSide:r,doors:1,doorHeight:5,windows:3,lanterns:!0,plaqueText:!0});return c.category="sideHall",c.side=r,c}function uo(i,{cx:e,cz:t,hx:n=7,hz:s=7,side:r=-1,id:a,name:o,instrument:l="bell"}={}){Ks(i,{x0:e-n-2,z0:t-s-2,x1:e+n+2,z1:t+s+2,yTop:2});const u=3,f=11;for(let m=u;m<=f;m++)i.rectRing(m,e-n,t-s,e+n,t+s,"wallRed",1);yn(i,{axis:"z",wall:t-s,from:e-1,to:e+1,y0:u,y1:u+5}),yn(i,{axis:"z",wall:t+s,from:e-1,to:e+1,y0:u,y1:u+5}),Ds(i,{axis:"x",wall:e-n,from:t-2,to:t+2,y0:u+2,y1:u+4}),Ds(i,{axis:"x",wall:e+n,from:t-2,to:t+2,y0:u+2,y1:u+4}),Yi(i,{x0:e-n,z0:t-s,x1:e+n,z1:t+s,y0:u,y1:f,key:"wallRed",spacing:4,baseKey:null}),Xi(i,{x0:e-n,z0:t-s,x1:e+n,z1:t+s,y:f+1,step:3,rows:2}),Gs(i,{x0:e-n-3,z0:t-s-3,x1:e+n+3,z1:t+s+3,y:f+3,tileKey:"tileGreen",tileDimKey:"tileGreenDim",edgeKey:"tileGreenDim",ridgeKey:null,underKey:"woodDark",layersOverride:3});const h=f+7,p=h+7,_=n-2;for(let m=h;m<=p;m++)i.rectRing(m,e-_,t-_,e+_,t+_,"wallRed",1);i.rect(h-1,e-_-1,t-_-1,e+_+1,t+_+1,"wood");for(const[m,d]of[[e-_,t],[e+_,t],[e,t-_],[e,t+_]])Ds(i,{axis:m===e?"z":"x",wall:m===e?d:m,from:(m===e?e:t)-2,to:(m===e?e:t)+2,y0:h+2,y1:h+4});Yi(i,{x0:e-_,z0:t-_,x1:e+_,z1:t+_,y0:h,y1:p,key:"wallRed",spacing:4,baseKey:null}),Xi(i,{x0:e-_,z0:t-_,x1:e+_,z1:t+_,y:p+1,step:3,rows:2}),i.box(e-1,h+1,t-3,e+1,h+4,t-1,"bronze"),i.rectRing(h+4,e-1,t-3,e+1,t-1,"gold"),i.box(e-1,h+2,t+1,e+1,h+4,t+3,"drumRed"),i.rectRing(h+3,e-1,t+1,e+1,t+3,"woodDark");const M=Hs(i,{x0:e-_-3,z0:t-_-3,x1:e+_+3,z1:t+_+3,y:p+3,tileKey:"tileGreen",tileDimKey:"tileGreenDim",edgeKey:"tileGreenDim"});return{id:a,name:o,category:"tower",cx:e,cz:t,hx:n,hz:s,footprint:{x0:e-n-2,z0:t-s-2,x1:e+n+2,z1:t+s+2},height:M.topY,roof:"攒尖顶",side:r,entrance:{x:e,z:t-s-3}}}function Lc(i,{cx:e=0,cz:t=-58,stories:n=5,half:s=6}={}){Ks(i,{x0:e-s-2,z0:t-s-2,x1:e+s+2,z1:t+s+2,yTop:3}),wa(i,{x0:e-s-2,z0:t-s-2,x1:e+s+2,z1:t+s+2,y:4});let a=4,o=s;for(let c=0;c<n;c++){const u=c%2===0?"wallRed":"plaster",f=5;for(let h=a;h<a+f;h++)i.rectRing(h,e-o,t-o,e+o,t+o,u,1);i.rectRing(a,e-o,t-o,e+o,t+o,"brick",1),yn(i,{axis:"z",wall:t+o,from:e-1,to:e+1,y0:a+1,y1:a+3}),yn(i,{axis:"z",wall:t-o,from:e-1,to:e+1,y0:a+1,y1:a+3}),yn(i,{axis:"x",wall:e-o,from:t-1,to:t+1,y0:a+1,y1:a+3}),yn(i,{axis:"x",wall:e+o,from:t-1,to:t+1,y0:a+1,y1:a+3}),Hs(i,{x0:e-o-2,z0:t-o-2,x1:e+o+2,z1:t+o+2,y:a+f,tileKey:"tileGold",tileDimKey:"tileGoldDim",edgeKey:"tileGoldDim",layersOverride:2}),a=a+f+2,o=Math.max(2,o-1)}const l=Hs(i,{x0:e-o-2,z0:t-o-2,x1:e+o+2,z1:t+o+2,y:a,tileKey:"tileGold",tileDimKey:"tileGoldDim",edgeKey:"tileGoldDim",layersOverride:5});return i.column(e,t,l.topY+1,l.topY+5,"finialGold"),i.box(e-1,l.topY+3,t-1,e+1,l.topY+3,t+1,"gold"),{id:"pagoda",name:"宝塔",category:"pagoda",cx:e,cz:t,hx:s,hz:s,footprint:{x0:e-s-2,z0:t-s-2,x1:e+s+2,z1:t+s+2},height:l.topY+5,roof:"攒尖顶（五层）",stories:n,entrance:{x:e,z:t+s+3}}}function fo(i,{cx:e,cz:t,half:n=4,id:s,name:r}={}){Ks(i,{x0:e-n-1,z0:t-n-1,x1:e+n+1,z1:t+n+1,yTop:1});const o=2,l=8;Yi(i,{x0:e-n,z0:t-n,x1:e+n,z1:t+n,y0:o,y1:l,key:"wallRed",spacing:4,baseKey:null}),i.rect(l+1,e-n-1,t-n-1,e+n+1,t+n+1,"wood"),Xi(i,{x0:e-n,z0:t-n,x1:e+n,z1:t+n,y:l+2,step:3,rows:1});const c=Hs(i,{x0:e-n-3,z0:t-n-3,x1:e+n+3,z1:t+n+3,y:l+3,tileKey:"tileGreen",tileDimKey:"tileGreenDim",edgeKey:"tileGreenDim"});return wa(i,{x0:e-n-1,z0:t-n-1,x1:e+n+1,z1:t+n+1,y:2}),{id:s,name:r,category:"pavilion",cx:e,cz:t,hx:n,hz:n,footprint:{x0:e-n-1,z0:t-n-1,x1:e+n+1,z1:t+n+1},height:c.topY,roof:"攒尖顶",entrance:{x:e,z:t+n+2}}}function po(i,{cx:e,cz:t,hx:n=2,hz:s=14,id:r,name:a}={}){Yi(i,{x0:e-n,z0:t-s,x1:e+n,z1:t+s,y0:1,y1:8,key:"wallRed",spacing:4,baseKey:"stone"});for(let u=t-s;u<=t+s;u++)i.set(e-n,6,u,"wood"),i.set(e+n,6,u,"wood");Xi(i,{x0:e-n,z0:t-s,x1:e+n,z1:t+s,y:9,step:4,rows:1});const c=Gs(i,{x0:e-n-1,z0:t-s-1,x1:e+n+1,z1:t+s+1,y:11,tileKey:"tileGrey",tileDimKey:"tileGreyDim",edgeKey:"tileGreyDim",ridgeKey:"ridgeGrey",underKey:"woodDark",layersOverride:3,upturn:!0});return{id:r,name:a,category:"corridor",cx:e,cz:t,hx:n,hz:s,footprint:{x0:e-n-1,z0:t-s-1,x1:e+n+1,z1:t+s+1},height:c.topY+2,roof:"卷棚（青瓦）",entrance:{x:e,z:t}}}const On={xMin:-66,xMax:66,zMin:-78,zMax:72},Gt={x0:-56,x1:56,z0:-68,z1:64},Or=[{id:"axis",label:"中轴甬道",x0:-4,z0:-8,x1:4,z1:53},{id:"frontCross",label:"前庭横道",x0:-48,z0:26,x1:48,z1:32},{id:"midCross",label:"中庭横道",x0:-33,z0:2,x1:33,z1:10},{id:"plaza",label:"主殿前广场",x0:-26,z0:-8,x1:26,z1:4},{id:"rearCross",label:"后庭横道",x0:-48,z0:-44,x1:48,z1:-38},{id:"eastPath",label:"东侧道",x0:25,z0:-44,x1:29,z1:-8},{id:"westPath",label:"西侧道",x0:-29,z0:-44,x1:-25,z1:-8},{id:"pagodaPath",label:"塔院道",x0:-6,z0:-54,x1:6,z1:-44},{id:"gardenPath",label:"后院横道",x0:-30,z0:-53,x1:30,z1:-47},{id:"gateForecourt",label:"山门前庭",x0:-20,z0:40,x1:20,z1:52}],mo=[{x0:-30,z0:-40,x1:30,z1:-6}],nr=[{x0:16,z0:42,x1:30,z1:50},{x0:-30,z0:42,x1:-16,z1:50}],go=[[12,44,11],[12,20,13],[20,14,14],[53,8,15],[53,-22,16],[53,-60,21],[14,-46,17],[30,-62,19],[14,-60,18],[34,-73,22],[48,-73,23],[46,67,24],[20,67,25],[62,40,26]],Ic=[[6,46],[6,34],[6,16],[6,0],[6,-30]],si=(i,e,t)=>e>=i.x0&&e<=i.x1&&t>=i.z0&&t<=i.z1;function Uc(i,e,t){for(let s=On.xMin;s<=On.xMax;s++)for(let r=On.zMin;r<=On.zMax;r++){const a=e.find(p=>si(p,s,r)),o=!a&&t.some(p=>si(p,s,r)),l=nr.some(p=>si(p,s,r)),c=s>Gt.x0&&s<Gt.x1&&r>Gt.z0&&r<Gt.z1,u=(s+r)%2===0;if(l){i.set(s,0,r,"water");continue}if(a){i.set(s,0,r,u?"path":"pathAlt");continue}if(o){i.set(s,0,r,u?"paving":"pavingAlt");continue}const f=Tl([0,1,2,3,4,5,6,7,8,9],s,0,r);let h="grass";f>=8?h="grassAlt":f>=7&&(h="grassDry"),i.set(s,0,r,h),!c&&f>=9&&i.set(s,0,r,"grassAlt")}const n=(s,r)=>e.some(a=>si(a,s,r))||t.some(a=>si(a,s,r))||nr.some(a=>si(a,s,r));for(const s of[...e,...t]){for(let r=s.x0-1;r<=s.x1+1;r++)for(const a of[s.z0-1,s.z1+1])n(r,a)||i.set(r,0,a,"kerb");for(let r=s.z0-1;r<=s.z1+1;r++)for(const a of[s.x0-1,s.x1+1])n(a,r)||i.set(a,0,r,"kerb")}for(const s of nr){for(let r=s.x0-1;r<=s.x1+1;r++)i.set(r,0,s.z0-1,"stone"),i.set(r,0,s.z1+1,"stone"),i.set(r,1,s.z0-1,"stone"),i.set(r,1,s.z1+1,"stone");for(let r=s.z0-1;r<=s.z1+1;r++)i.set(s.x0-1,0,r,"stone"),i.set(s.x1+1,0,r,"stone"),i.set(s.x0-1,1,r,"stone"),i.set(s.x1+1,1,r,"stone")}}function Nc(i,e){let t=0;const n=3;for(let s=0;s*n<=On.xMax-2&&t<e;s++){const r=s*n;for(let a=On.zMin+2;a<=On.zMax-2&&t<e;a+=n){const o=Tl([0,1,2,3,4,5,6,7],r,3,a);if(!(o<5))for(const l of r===0?[0]:[r,-r]){if(i.has(l,1,a))continue;const c=i.get(l,0,a);c&&!["grass","grassAlt","grassDry"].includes(c)||(i.set(l,1,a,o===7?"flower":o===6?"grassAlt":"grass"),t++)}}}return t}function _o(i,{x:e,z:t}){i.column(e,t,1,4,"stone"),i.set(e,5,t,"stoneDark"),Fr(i,{x:e,y:6,z:t,half:1})}function Fc(){const i=new wc;Uc(i,Or,mo),Di(i,{x0:Gt.x0,z0:-68,x1:Gt.x0+1,z1:63,height:9}),Di(i,{x0:Gt.x1-1,z0:-68,x1:Gt.x1,z1:63,height:9}),Di(i,{x0:Gt.x0,z0:-68,x1:Gt.x1,z1:-67,height:9}),Di(i,{x0:Gt.x0,z0:63,x1:-16,z1:64,height:9}),Di(i,{x0:16,z0:63,x1:Gt.x1,z1:64,height:9});const e=[];e.push(Pc(i,{cx:0,cz:58,hx:14,hz:5})),e.push(uo(i,{id:"bellTower",name:"钟楼",cx:-42,cz:40,hx:7,hz:7,side:-1,instrument:"bell"})),e.push(uo(i,{id:"drumTower",name:"鼓楼",cx:42,cz:40,hx:7,hz:7,side:1,instrument:"drum"})),e.push(Dc(i,{cx:0,cz:-22,hx:19,hz:11})),e.push(rs(i,{id:"sideHallW",name:"西配殿",cx:-42,cz:6,hx:7,hz:14,side:1})),e.push(rs(i,{id:"sideHallE",name:"东配殿",cx:42,cz:6,hx:7,hz:14,side:-1})),e.push(rs(i,{id:"rearHallW",name:"西后配殿",cx:-42,cz:-54,hx:7,hz:10,side:1,entranceAxis:"z"})),e.push(rs(i,{id:"rearHallE",name:"东后配殿",cx:42,cz:-54,hx:7,hz:10,side:-1,entranceAxis:"z"})),e.push(Lc(i,{cx:0,cz:-58,stories:5,half:6})),e.push(fo(i,{id:"pavilionW",name:"西亭",cx:-22,cz:-58,half:4})),e.push(fo(i,{id:"pavilionE",name:"东亭",cx:22,cz:-58,half:4})),e.push(po(i,{id:"corridorW",name:"西回廊",cx:-27,cz:-26,hx:2,hz:14})),e.push(po(i,{id:"corridorE",name:"东回廊",cx:27,cz:-26,hx:2,hz:14}));for(const s of[-1,1])Rc(i,{x:s*20,y:1,z:52});for(const[s,r]of Ic)_o(i,{x:s,z:r}),_o(i,{x:-s,z:r});for(const[s,r,a]of go)ho(i,{x:s,z:r,y:1,seed:a}),s!==0&&ho(i,{x:-s,z:r,y:1,seed:a});const t=Nc(i,900),n=new Set;for(const s of[...Or,...mo])for(let r=s.x0;r<=s.x1;r++)for(let a=s.z0;a<=s.z1;a++)n.add(r+","+a);return{builder:i,buildings:e,roads:n,stats:{tufts:t,treeCount:go.length*2}}}const Oc=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],ir=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],xo=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Ls=i=>{const e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function Bc({xMin:i,yMin:e,zMin:t,xMax:n,yMax:s,zMax:r}){const a=[];for(const o of[i,n])for(const l of[e,s])for(const c of[t,r])a.push([o,l,c]);return a}function zc(i){return[(i.xMin+i.xMax)/2,(i.yMin+i.yMax)/2,(i.zMin+i.zMax)/2]}function Gc({bounds:i,fovDeg:e,aspect:t,direction:n=[.85,.62,1],margin:s=1.06}){const r=zc(i),a=Ls(n),o=Math.abs(a[1])>.98?[0,0,1]:[0,1,0],l=Ls(xo(o,a)),c=Ls(xo(a,l)),u=Math.tan(e*Math.PI/360),f=u*t;let h=0;for(const p of Bc(i)){const _=Oc(p,r),M=ir(_,a);h=Math.max(h,M+Math.abs(ir(_,l))/f),h=Math.max(h,M+Math.abs(ir(_,c))/u)}return{distance:h*s,target:r,basis:{fwd:a,right:l,up:c}}}function Hc({bounds:i,fovDeg:e=45,aspect:t=16/9,direction:n=[.85,.62,1],margin:s=1.06}){const{distance:r,target:a}=Gc({bounds:i,fovDeg:e,aspect:t,direction:n,margin:s}),o=Ls(n);return{position:[a[0]+o[0]*r,a[1]+o[1]*r,a[2]+o[2]*r],target:a,distance:r}}function kc(){const i=Date.now(),{builder:e,buildings:t,roads:n,stats:s}=Fc(),r=e.byKey(),a=e.bounds();let o=1/0,l=-1/0,c=1/0,u=-1/0,f=1/0,h=-1/0;for(const S of e.cells.values())S.y<2||(S.x<o&&(o=S.x),S.x>l&&(l=S.x),S.y<c&&(c=S.y),S.y>u&&(u=S.y),S.z<f&&(f=S.z),S.z>h&&(h=S.z));const p={xMin:o,xMax:l,yMin:c,yMax:u,zMin:f,zMax:h},_=e.symmetryReport(),M=e.colorSymmetryReport(),m=e.size,d={};for(const[S,E]of r)d[S]=E.count;const A=t.map(S=>({id:S.id,name:S.name,category:S.category,roof:S.roof,cx:S.cx,cz:S.cz,height:S.height,footprint:S.footprint})),P={builder:e,groups:r,bounds:a,archBounds:p,buildings:t,buildingStats:A,roads:n,site:On,wall:Gt,roadRects:Or,voxelCount:m,keyCounts:d,drawCalls:r.size,triangles:m*12,paletteKeysUsed:[...r.keys()].sort(),unusedPaletteKeys:bc.filter(S=>!r.has(S)),symmetry:_,colorSymmetry:M,buildMs:Date.now()-i,tufts:s.tufts};return P.camera=Hc({bounds:p,fovDeg:45,aspect:16/9,direction:[.95,.36,1],margin:1.02}),P.cameraAspect=16/9,P}const Ca="186",Ei={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vc=0,vo=1,Wc=2,Is=1,Rl=2,Gi=3,Jn=0,Dt=1,Sn=2,Tn=0,ki=1,Mo=2,So=3,yo=4,Xc=5,vi=100,Yc=101,qc=102,Kc=103,Zc=104,$c=200,Jc=201,Qc=202,jc=203,Cl=204,Pl=205,eh=206,th=207,nh=208,ih=209,sh=210,rh=211,ah=212,oh=213,lh=214,Br=0,zr=1,Gr=2,qi=3,Hr=4,kr=5,Vr=6,Wr=7,Dl=0,ch=1,hh=2,hn=0,Ll=1,Il=2,Ul=3,Pa=4,Nl=5,Fl=6,Ol=7,Bl=300,Qn=301,wi=302,sr=303,rr=304,Zs=306,Xr=1e3,En=1001,Yr=1002,yt=1003,uh=1004,as=1005,At=1006,ar=1007,Zn=1008,kt=1009,zl=1010,Gl=1011,Ki=1012,Da=1013,un=1014,jt=1015,dn=1016,La=1017,Ia=1018,Zi=1020,Hl=35902,kl=35899,Vl=1021,Wl=1022,en=1023,An=1026,$n=1027,Ua=1028,Na=1029,jn=1030,Fa=1031,Oa=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,qr=35840,Kr=35841,Zr=35842,$r=35843,Jr=36196,Qr=37492,jr=37496,ea=37488,ta=37489,ks=37490,na=37491,ia=37808,sa=37809,ra=37810,aa=37811,oa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,xa=36494,va=36495,Ma=36283,Sa=36284,Vs=36285,ya=36286,dh=3200,Ea=0,fh=1,Fn="",Pt="srgb",Ws="srgb-linear",Xs="linear",st="srgb",or=7680,ph=519,mh=512,gh=513,_h=514,Ba=515,xh=516,vh=517,za=518,Mh=519,Sh=35044,Eo="300 es",cn=2e3,$i=2001;function yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eh(){const i=Ys("canvas");return i.style.display="block",i}const To={};function bo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Xl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Xl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=Xl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){const e=i.join(" ");e in To||(To[e]=!0,Oe(...i))}function Th(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const bh={[Br]:zr,[Gr]:Vr,[Hr]:Wr,[qi]:kr,[zr]:Br,[Vr]:Gr,[Wr]:Hr,[kr]:qi};class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const Vi=Math.PI/180,Ji=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Ga(i,e){return(i%e+e)%e}function Ah(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wh(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function Rh(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function Ch(i,e=1){return e-Math.abs(Ga(i,e*2)-e)}function Ph(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ih(i,e){return i+Math.random()*(e-i)}function Uh(i){return i*(.5-Math.random())}function Nh(i){i!==void 0&&(Ao=i);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fh(i){return i*Vi}function Oh(i){return i*Ji}function Bh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ta={DEG2RAD:Vi,RAD2DEG:Ji,generateUUID:Ci,clamp:Ke,euclideanModulo:Ga,mapLinear:Ah,inverseLerp:wh,lerp:Wi,damp:Rh,pingpong:Ch,smoothstep:Ph,smootherstep:Dh,randInt:Lh,randFloat:Ih,randFloatSpread:Uh,seededRandom:Nh,degToRad:Fh,radToDeg:Oh,isPowerOfTwo:Bh,ceilPowerOfTwo:zh,floorPowerOfTwo:Gh,setQuaternionFromProperEuler:Hh,normalize:Rt,denormalize:Mi},qa=class qa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qa.prototype.isVector2=!0;let ze=qa;class Bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*M;m<0&&(h=-h,p=-p,_=-_,M=-M,m=-m);let d=1-o;if(m<.9995){const A=Math.acos(m),P=Math.sin(A);d=Math.sin(d*A)/P,o=Math.sin(o*A)/P,l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+M*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+M*o;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-o*p,e[t+2]=c*_+u*p+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ka=class Ka{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ka.prototype.isVector3=!0;let H=Ka;const lr=new H,wo=new Bn,Za=class Za{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],M=s[0],m=s[3],d=s[6],A=s[1],P=s[4],S=s[7],E=s[2],y=s[5],w=s[8];return r[0]=a*M+o*A+l*E,r[3]=a*m+o*P+l*y,r[6]=a*d+o*S+l*w,r[1]=c*M+u*A+f*E,r[4]=c*m+u*P+f*y,r[7]=c*d+u*S+f*w,r[2]=h*M+p*A+_*E,r[5]=h*m+p*P+_*y,r[8]=h*d+p*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cr.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Za.prototype.isMatrix3=!0;let Ge=Za;const cr=new Ge,Ro=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Co=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kh(){const i={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ws]:{primaries:e,whitePoint:n,transfer:Xs,toXYZ:Ro,fromXYZ:Co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Ro,fromXYZ:Co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const Qe=kh();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Vh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Ys("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class Ha{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hr(s[a].image)):r.push(hr(s[a]))}else r=hr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let Xh=0;const ur=new H;class Lt extends Gn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=En,s=En,r=At,a=Zn,o=en,l=kt,c=Lt.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ci(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ur).x}get height(){return this.source.getSize(ur).y}get depth(){return this.source.getSize(ur).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Bl;Lt.DEFAULT_ANISOTROPY=1;const $a=class $a{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,S=(p+1)/2,E=(d+1)/2,y=(u+h)/4,w=(f+M)/4,x=(_+m)/4;return P>S&&P>E?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=y/n,r=w/n):S>E?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=y/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=x/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-M)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$a.prototype.isVector4=!0;let dt=$a;class Yh extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Lt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ha(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends Yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yl extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const qs=class qs{constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,M,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,M,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,M=c*f;t[0]=h+M*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,Zh)}lookAt(e,t,n){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Pn.crossVectors(n,Ft),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Pn.crossVectors(n,Ft)),Pn.normalize(),os.crossVectors(Ft,Pn),s[0]=Pn.x,s[4]=os.x,s[8]=Ft.x,s[1]=Pn.y,s[5]=os.y,s[9]=Ft.y,s[2]=Pn.z,s[6]=os.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],M=n[6],m=n[10],d=n[14],A=n[3],P=n[7],S=n[11],E=n[15],y=s[0],w=s[4],x=s[8],b=s[12],R=s[1],F=s[5],B=s[9],G=s[13],C=s[2],N=s[6],W=s[10],I=s[14],Y=s[3],z=s[7],K=s[11],J=s[15];return r[0]=a*y+o*R+l*C+c*Y,r[4]=a*w+o*F+l*N+c*z,r[8]=a*x+o*B+l*W+c*K,r[12]=a*b+o*G+l*I+c*J,r[1]=u*y+f*R+h*C+p*Y,r[5]=u*w+f*F+h*N+p*z,r[9]=u*x+f*B+h*W+p*K,r[13]=u*b+f*G+h*I+p*J,r[2]=_*y+M*R+m*C+d*Y,r[6]=_*w+M*F+m*N+d*z,r[10]=_*x+M*B+m*W+d*K,r[14]=_*b+M*G+m*I+d*J,r[3]=A*y+P*R+S*C+E*Y,r[7]=A*w+P*F+S*N+E*z,r[11]=A*x+P*B+S*W+E*K,r[15]=A*b+P*G+S*I+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],M=e[7],m=e[11],d=e[15],A=l*p-c*h,P=o*p-c*f,S=o*h-l*f,E=a*p-c*u,y=a*h-l*u,w=a*f-o*u;return t*(M*A-m*P+d*S)-n*(_*A-m*E+d*y)+s*(_*P-M*E+d*w)-r*(_*S-M*y+m*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],M=e[13],m=e[14],d=e[15],A=t*o-n*a,P=t*l-s*a,S=t*c-r*a,E=n*l-s*o,y=n*c-r*o,w=s*c-r*l,x=u*M-f*_,b=u*m-h*_,R=u*d-p*_,F=f*m-h*M,B=f*d-p*M,G=h*d-p*m,C=A*G-P*B+S*F+E*R-y*b+w*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=(o*G-l*B+c*F)*N,e[1]=(s*B-n*G-r*F)*N,e[2]=(M*w-m*y+d*E)*N,e[3]=(h*y-f*w-p*E)*N,e[4]=(l*R-a*G-c*b)*N,e[5]=(t*G-s*R+r*b)*N,e[6]=(m*S-_*w-d*P)*N,e[7]=(u*w-h*S+p*P)*N,e[8]=(a*B-o*R+c*x)*N,e[9]=(n*R-t*B-r*x)*N,e[10]=(_*y-M*S+d*A)*N,e[11]=(f*S-u*y-p*A)*N,e[12]=(o*b-a*F-l*x)*N,e[13]=(t*F-n*b+s*x)*N,e[14]=(M*P-_*E-m*A)*N,e[15]=(u*E-f*P+h*A)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,M=a*u,m=a*f,d=o*f,A=l*c,P=l*u,S=l*f,E=n.x,y=n.y,w=n.z;return s[0]=(1-(M+d))*E,s[1]=(p+S)*E,s[2]=(_-P)*E,s[3]=0,s[4]=(p-S)*y,s[5]=(1-(h+d))*y,s[6]=(m+A)*y,s[7]=0,s[8]=(_+P)*w,s[9]=(m-A)*w,s[10]=(1-(h+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),l=ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zt.copy(this);const c=1/a,u=1/o,f=1/l;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=cn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===cn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===$i)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===cn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===$i)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qs.prototype.isMatrix4=!0;let ut=qs;const ai=new H,Zt=new ut,Kh=new H(0,0,0),Zh=new H(1,1,1),Pn=new H,os=new H,Ft=new H,Po=new ut,Do=new Bn;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $h=0;const Lo=new H,oi=new Bn,mn=new ut,ls=new H,Li=new H,Jh=new H,Qh=new Bn,Io=new H(1,0,0),Uo=new H(0,1,0),No=new H(0,0,1),Fo={type:"added"},jh={type:"removed"},li={type:"childadded",child:null},dr={type:"childremoved",child:null};class St extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new H,t=new zn,n=new Bn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Li,ls,this.up):mn.lookAt(ls,Li,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(mn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fo),li.child=e,this.dispatchEvent(li),li.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jh),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}St.DEFAULT_UP=new H(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cs extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eu={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function pr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Ga(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.workingToColorSpace(bt.copy(this),e),Math.round(Ke(bt.r*255,0,255))*65536+Math.round(Ke(bt.g*255,0,255))*256+Math.round(Ke(bt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(bt.copy(this),t);const n=bt.r,s=bt.g,r=bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Pt){Qe.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,s=bt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(hs);const n=Wi(Dn.h,hs.h,t),s=Wi(Dn.s,hs.s,t),r=Wi(Dn.l,hs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new ke;ke.NAMES=Kl;class ka{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tu extends St{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new H,gn=new H,mr=new H,_n=new H,ci=new H,hi=new H,Oo=new H,gr=new H,_r=new H,xr=new H,vr=new dt,Mr=new dt,Sr=new dt;class Qt{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),gn.subVectors(n,t),mr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(gn),l=$t.dot(mr),c=gn.dot(gn),u=gn.dot(mr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(e,t),Mr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(Mr,r.y),a.addScaledVector(Sr,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),gn.subVectors(e,t),$t.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),$t.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),hi.subVectors(r,n),gr.subVectors(e,n);const l=ci.dot(gr),c=hi.dot(gr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,s);const u=ci.dot(_r),f=hi.dot(_r);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ci,a);xr.subVectors(e,r);const p=ci.dot(xr),_=hi.dot(xr);if(_>=0&&p<=_)return t.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(hi,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Oo.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Oo,o);const d=1/(m+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ti{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),ds.subVectors(this.max,Ii),ui.subVectors(e.a,Ii),di.subVectors(e.b,Ii),fi.subVectors(e.c,Ii),Ln.subVectors(di,ui),In.subVectors(fi,di),Vn.subVectors(ui,fi);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Vn.z,Vn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Vn.z,0,-Vn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Vn.y,Vn.x,0];return!yr(t,ui,di,fi,ds)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,ui,di,fi,ds))?!1:(fs.crossVectors(Ln,In),t=[fs.x,fs.y,fs.z],yr(t,ui,di,fi,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new H,new H,new H,new H,new H,new H,new H,new H],Jt=new H,us=new ti,ui=new H,di=new H,fi=new H,Ln=new H,In=new H,Vn=new H,Ii=new H,ds=new H,fs=new H,Wn=new H;function yr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const gt=new H,ps=new ze;let nu=0;class nn extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zl extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const iu=new ti,Ui=new H,Er=new H;class ts{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(Er)),this.expandByPoint(Ui.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let su=0;const Wt=new ut,Tr=new St,pi=new H,Ot=new ti,Ni=new ti,Mt=new H;class pn extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?$l:Zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Ni.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Ni.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Ni.min),Ot.expandByPoint(Ni.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),Mt.add(pi)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new H,l[x]=new H;const c=new H,u=new H,f=new H,h=new ze,p=new ze,_=new ze,M=new H,m=new H;function d(x,b,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),o[x].add(M),o[b].add(M),o[R].add(M),l[x].add(m),l[b].add(m),l[R].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let x=0,b=A.length;x<b;++x){const R=A[x],F=R.start,B=R.count;for(let G=F,C=F+B;G<C;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new H,S=new H,E=new H,y=new H;function w(x){E.fromBufferAttribute(s,x),y.copy(E);const b=o[x];P.copy(b),P.sub(E.multiplyScalar(E.dot(b))).normalize(),S.crossVectors(y,b);const F=S.dot(l[x])<0?-1:1;a.setXYZW(x,P.x,P.y,P.z,F)}for(let x=0,b=A.length;x<b;++x){const R=A[x],F=R.start,B=R.count;for(let G=F,C=F+B;G<C;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new nn(h,u,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const br=new H,ru=new H,au=new Ge;class Mn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=br.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(br),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||au.getNormalMatrix(e),s=this.coplanarPoint(br).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ou=0;class ns extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ki,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vn=new H,Ar=new H,ms=new H,gs=new H;class Jl{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ar.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(Ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=gs.dot(this.direction),l=-gs.dot(ms),c=gs.lengthSq(),u=Math.abs(1-a*a);let f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const M=1/u;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ar).addScaledVector(ms,h),p}intersectSphere(e,t){if(e.radius<0)return null;vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,d=n.x-a.x,A=n.y-a.y,P=n.z-a.z,S=Math.abs(l),E=Math.abs(c),y=Math.abs(u);let w,x,b,R,F,B,G,C,N,W,I,Y;if(S>=E&&S>=y?(b=l,B=f,N=_,Y=d,l>=0?(w=c,x=u,R=h,F=p,G=M,C=m,W=A,I=P):(w=u,x=c,R=p,F=h,G=m,C=M,W=P,I=A)):E>=y?(b=c,B=h,N=M,Y=A,c>=0?(w=u,x=l,R=p,F=f,G=m,C=_,W=P,I=d):(w=l,x=u,R=f,F=p,G=_,C=m,W=d,I=P)):(b=u,B=p,N=m,Y=P,u>=0?(w=l,x=c,R=f,F=h,G=_,C=M,W=d,I=A):(w=c,x=l,R=h,F=f,G=M,C=_,W=A,I=d)),b===0)return null;const z=w/b,K=x/b,J=1/b,be=R-z*B,ue=F-K*B,et=G-z*N,qe=C-K*N,Je=W-z*Y,$=I-K*Y,j=Je*qe-$*et,ge=be*$-ue*Je,Fe=et*ue-qe*be;if(s){if(j<0||ge<0||Fe<0)return null}else if((j<0||ge<0||Fe<0)&&(j>0||ge>0||Fe>0))return null;const xe=j+ge+Fe;if(xe===0)return null;const ie=J*(j*B+ge*N+Fe*Y);return(xe>0?ie<0:ie>0)?null:this.at(ie/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bo=new ut,Xn=new Jl,_s=new ts,zo=new H,xs=new H,vs=new H,Ms=new H,wr=new H,Ss=new H,Go=new H,ys=new H;class It extends St{constructor(e=new pn,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(wr.fromBufferAttribute(f,e),a?Ss.addScaledVector(wr,u):Ss.addScaledVector(wr.sub(t),u))}t.add(Ss)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(_s.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(_s,zo)===null||Xn.origin.distanceToSquared(zo)>(e.far-e.near)**2))&&(Bo.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(Bo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],d=a[m.materialIndex],A=Math.max(m.start,p.start),P=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,E=P;S<E;S+=3){const y=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);s=Es(this,d,e,n,c,u,f,y,w,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){const A=o.getX(m),P=o.getX(m+1),S=o.getX(m+2);s=Es(this,a,e,n,c,u,f,A,P,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],d=a[m.materialIndex],A=Math.max(m.start,p.start),P=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,E=P;S<E;S+=3){const y=S,w=S+1,x=S+2;s=Es(this,d,e,n,c,u,f,y,w,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){const A=m,P=m+1,S=m+2;s=Es(this,a,e,n,c,u,f,A,P,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function lu(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;ys.copy(o),ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:i}}function Es(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xs),i.getVertexPosition(l,vs),i.getVertexPosition(c,Ms);const u=lu(i,e,t,n,xs,vs,Ms,Go);if(u){const f=new H;Qt.getBarycoord(Go,xs,vs,Ms,f),s&&(u.uv=Qt.getInterpolatedAttribute(s,o,l,c,f,new ze)),r&&(u.uv1=Qt.getInterpolatedAttribute(r,o,l,c,f,new ze)),a&&(u.normal=Qt.getInterpolatedAttribute(a,o,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};Qt.getNormal(xs,vs,Ms,h.normal),u.face=h,u.barycoord=f}return u}class Ql extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=yt,u=yt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new ut,ko=new ut,Ts=[],Vo=new ti,cu=new ut,Fi=new It,Oi=new ts;class hu extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Vo.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(Vo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Oi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mi),ko.multiplyMatrices(n,mi),Fi.matrixWorld=ko,Fi.raycast(e,Ts);for(let a=0,o=Ts.length;a<o;a++){const l=Ts[a];l.instanceId=r,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ql(new Float32Array(s*this.count),s,this.count,Ua,jt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yn=new ts,uu=new ze(.5,.5),bs=new H;class Va{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],M=r[9],m=r[10],d=r[11],A=r[12],P=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-a,p-u,d-_,E-A).normalize(),s[1].setComponents(c+a,p+u,d+_,E+A).normalize(),s[2].setComponents(c+o,p+f,d+M,E+P).normalize(),s[3].setComponents(c-o,p-f,d-M,E-P).normalize(),n)s[4].setComponents(l,h,m,S).normalize(),s[5].setComponents(c-l,p-h,d-m,E-S).normalize();else if(s[4].setComponents(c-l,p-h,d-m,E-S).normalize(),t===cn)s[5].setComponents(c+l,p+h,d+m,E+S).normalize();else if(t===$i)s[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);const t=uu.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bs.x=s.normal.x>0?e.max.x:e.min.x,bs.y=s.normal.y>0?e.max.y:e.min.y,bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends Lt{constructor(e=[],t=Qn,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ji extends Lt{constructor(e,t,n=un,s,r,a,o=yt,l=yt,c,u=An,f=1){if(u!==An&&u!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class du extends ji{constructor(e,t=un,n=Qn,s,r,a=yt,o=yt,l,c=An){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ec extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ei extends pn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function _(M,m,d,A,P,S,E,y,w,x,b){const R=S/w,F=E/x,B=S/2,G=E/2,C=y/2,N=w+1,W=x+1;let I=0,Y=0;const z=new H;for(let K=0;K<W;K++){const J=K*F-G;for(let be=0;be<N;be++){const ue=be*R-B;z[M]=ue*A,z[m]=J*P,z[d]=C,c.push(z.x,z.y,z.z),z[M]=0,z[m]=0,z[d]=y>0?1:-1,u.push(z.x,z.y,z.z),f.push(be/w),f.push(1-K/x),I+=1}}for(let K=0;K<x;K++)for(let J=0;J<w;J++){const be=h+J+N*K,ue=h+J+N*(K+1),et=h+(J+1)+N*(K+1),qe=h+(J+1)+N*K;l.push(be,ue,qe),l.push(ue,et,qe),Y+=6}o.addGroup(p,Y,b),p+=Y,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $s extends pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],_=[],M=[],m=[];for(let d=0;d<u;d++){const A=d*h-a;for(let P=0;P<c;P++){const S=P*f-r;_.push(S,-A,0),M.push(0,0,1),m.push(P/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const P=A+c*d,S=A+c*(d+1),E=A+1+c*(d+1),y=A+1+c*d;p.push(P,S,y),p.push(S,E,y)}this.setIndex(p),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(M,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class es extends pn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new H,h=new H,p=[],_=[],M=[],m=[];for(let d=0;d<=n;d++){const A=[],P=d/n,S=a+P*o,E=e*Math.cos(S),y=Math.sqrt(e*e-E*E);let w=0;d===0&&a===0?w=.5/t:d===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){const b=x/t,R=s+b*r;f.x=-y*Math.cos(R),f.y=E,f.z=y*Math.sin(R),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(b+w,1-P),A.push(c++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){const P=u[d][A+1],S=u[d][A],E=u[d+1][A],y=u[d+1][A+1];(d!==0||a>0)&&p.push(P,S,y),(d!==n-1||l<Math.PI)&&p.push(S,E,y)}this.setIndex(p),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(M,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Wo(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Wo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const s in n)e[s]=n[s]}return e}function Wo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const pu={clone:Ri,merge:Ct};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=fu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _u extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nc extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xu extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vu extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Js extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Mu extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Rr=new ut,Xo=new H,Yo=new H;class ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),Yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===$i||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const As=new H,ws=new Bn,an=new H;class sc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(As,ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,ws,an.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(As,ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,ws,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Un=new H,qo=new ze,Ko=new ze;class Ht extends sc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,qo,Ko),t.subVectors(Ko,qo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Su extends ic{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}}class yu extends Js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wa extends sc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Eu extends ic{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tu extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bu extends Js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const gi=-90,_i=1;class Au extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(gi,_i,e,t);s.layers=this.layers,this.add(s);const r=new Ht(gi,_i,e,t);r.layers=this.layers,this.add(r);const a=new Ht(gi,_i,e,t);a.layers=this.layers,this.add(a);const o=new Ht(gi,_i,e,t);o.layers=this.layers,this.add(o);const l=new Ht(gi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Ht(gi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class wu extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ru{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Zo{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ja=class Ja{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ja.prototype.isMatrix2=!0;let $o=Ja;class Cu extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jo(i,e,t,n){const s=Pu(n);switch(t){case Vl:return i*e;case Ua:return i*e/s.components*s.byteLength;case Na:return i*e/s.components*s.byteLength;case jn:return i*e*2/s.components*s.byteLength;case Fa:return i*e*2/s.components*s.byteLength;case Wl:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Oa:return i*e*4/s.components*s.byteLength;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:case $r:return Math.max(i,16)*Math.max(e,8)/4;case qr:case Zr:return Math.max(i,8)*Math.max(e,8)/2;case Jr:case Qr:case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case ks:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case xa:case va:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vs:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pu(i){switch(i){case kt:case zl:return{byteLength:1,components:1};case Ki:case Gl:case dn:return{byteLength:2,components:1};case La:case Ia:return{byteLength:2,components:4};case un:case Da:case jt:return{byteLength:4,components:1};case Hl:case kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);function rc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Du(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,td=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,id=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Lu,alphahash_pars_fragment:Iu,alphamap_fragment:Uu,alphamap_pars_fragment:Nu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:Gu,batching_vertex:Hu,begin_vertex:ku,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:$u,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:ju,color_vertex:ed,common:td,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:ad,emissivemap_pars_fragment:od,colorspace_fragment:ld,colorspace_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Td,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:xd,gradientmap_pars_fragment:vd,lightmap_pars_fragment:Md,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:yd,lights_pars_begin:Ed,lights_toon_fragment:bd,lights_toon_pars_fragment:Ad,lights_phong_fragment:wd,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Dd,lights_fragment_maps:Ld,lights_fragment_end:Id,lightprobes_pars_fragment:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:Bd,map_fragment:zd,map_pars_fragment:Gd,map_particle_fragment:Hd,map_particle_pars_fragment:kd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:Xd,morphcolor_vertex:Yd,morphnormal_vertex:qd,morphtarget_pars_vertex:Kd,morphtarget_vertex:Zd,normal_fragment_begin:$d,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:jd,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:af,opaque_fragment:of,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:xf,skinbase_vertex:vf,skinning_pars_vertex:Mf,skinning_vertex:Sf,skinnormal_vertex:yf,specularmap_fragment:Ef,specularmap_pars_fragment:Tf,tonemapping_fragment:bf,tonemapping_pars_fragment:Af,transmission_fragment:wf,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:Pf,uv_vertex:Df,worldpos_vertex:Lf,background_vert:If,background_frag:Uf,backgroundCube_vert:Nf,backgroundCube_frag:Ff,cube_vert:Of,cube_frag:Bf,depth_vert:zf,depth_frag:Gf,distance_vert:Hf,distance_frag:kf,equirect_vert:Vf,equirect_frag:Wf,linedashed_vert:Xf,linedashed_frag:Yf,meshbasic_vert:qf,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:jf,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},fe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ln={basic:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ct([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ct([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ct([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ct([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ct([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ct([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ct([fe.common,fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ct([fe.lights,fe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ln.physical={uniforms:Ct([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Rs={r:0,b:0,g:0},fp=new ut,ac=new Ge;ac.set(-1,0,0,0,1,0,0,0,1);function pp(i,e,t,n,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const S=A.backgroundBlurriness>0;P=e.get(P,S)}return P}function _(A){let P=!1;const S=p(A);S===null?m(a,o):S&&S.isColor&&(m(S,1),P=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(A,P){const S=p(P);S&&(S.isCubeTexture||S.mapping===Zs)?(c===void 0&&(c=new It(new ei(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ri(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(P.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ac),c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==st,(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new It(new $s(2,2),new fn({name:"BackgroundMaterial",uniforms:Ri(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,P){A.getRGB(Rs,tc(i)),t.buffers.color.setClear(Rs.r,Rs.g,Rs.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,P=1){a.set(A),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:_,addToRenderList:M,dispose:d}}function mp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(F,B,G,C,N){let W=!1;const I=f(F,C,G,B);r!==I&&(r=I,c(r.object)),W=p(F,C,G,N),W&&_(F,C,G,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(F,B,G,C),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function f(F,B,G,C){const N=C.wireframe===!0;let W=n[B.id];W===void 0&&(W={},n[B.id]=W);const I=F.isInstancedMesh===!0?F.id:0;let Y=W[I];Y===void 0&&(Y={},W[I]=Y);let z=Y[G.id];z===void 0&&(z={},Y[G.id]=z);let K=z[N];return K===void 0&&(K=h(l()),z[N]=K),K}function h(F){const B=[],G=[],C=[];for(let N=0;N<t;N++)B[N]=0,G[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:C,object:F,attributes:{},index:null}}function p(F,B,G,C){const N=r.attributes,W=B.attributes;let I=0;const Y=G.getAttributes();for(const z in Y)if(Y[z].location>=0){const J=N[z];let be=W[z];if(be===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(be=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(be=F.instanceColor)),J===void 0||J.attribute!==be||be&&J.data!==be.data)return!0;I++}return r.attributesNum!==I||r.index!==C}function _(F,B,G,C){const N={},W=B.attributes;let I=0;const Y=G.getAttributes();for(const z in Y)if(Y[z].location>=0){let J=W[z];J===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(J=F.instanceColor));const be={};be.attribute=J,J&&J.data&&(be.data=J.data),N[z]=be,I++}r.attributes=N,r.attributesNum=I,r.index=C}function M(){const F=r.newAttributes;for(let B=0,G=F.length;B<G;B++)F[B]=0}function m(F){d(F,0)}function d(F,B){const G=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;G[F]=1,C[F]===0&&(i.enableVertexAttribArray(F),C[F]=1),N[F]!==B&&(i.vertexAttribDivisor(F,B),N[F]=B)}function A(){const F=r.newAttributes,B=r.enabledAttributes;for(let G=0,C=B.length;G<C;G++)B[G]!==F[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function P(F,B,G,C,N,W,I){I===!0?i.vertexAttribIPointer(F,B,G,N,W):i.vertexAttribPointer(F,B,G,C,N,W)}function S(F,B,G,C){M();const N=C.attributes,W=G.getAttributes(),I=B.defaultAttributeValues;for(const Y in W){const z=W[Y];if(z.location>=0){let K=N[Y];if(K===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){const J=K.normalized,be=K.itemSize,ue=e.get(K);if(ue===void 0)continue;const et=ue.buffer,qe=ue.type,Je=ue.bytesPerElement,$=qe===i.INT||qe===i.UNSIGNED_INT||K.gpuType===Da;if(K.isInterleavedBufferAttribute){const j=K.data,ge=j.stride,Fe=K.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)d(z.location+xe,j.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let xe=0;xe<z.locationSize;xe++)P(z.location+xe,be/z.locationSize,qe,J,ge*Je,(Fe+be/z.locationSize*xe)*Je,$)}else{if(K.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)d(z.location+j,K.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,et);for(let j=0;j<z.locationSize;j++)P(z.location+j,be/z.locationSize,qe,J,be*Je,be/z.locationSize*j*Je,$)}}else if(I!==void 0){const J=I[Y];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(z.location,J);break;case 3:i.vertexAttrib3fv(z.location,J);break;case 4:i.vertexAttrib4fv(z.location,J);break;default:i.vertexAttrib1fv(z.location,J)}}}}A()}function E(){b();for(const F in n){const B=n[F];for(const G in B){const C=B[G];for(const N in C){const W=C[N];for(const I in W)u(W[I].object),delete W[I];delete C[N]}}delete n[F]}}function y(F){if(n[F.id]===void 0)return;const B=n[F.id];for(const G in B){const C=B[G];for(const N in C){const W=C[N];for(const I in W)u(W[I].object),delete W[I];delete C[N]}}delete n[F.id]}function w(F){for(const B in n){const G=n[B];for(const C in G){const N=G[C];if(N[F.id]===void 0)continue;const W=N[F.id];for(const I in W)u(W[I].object),delete W[I];delete N[F.id]}}}function x(F){for(const B in n){const G=n[B],C=F.isInstancedMesh===!0?F.id:0,N=G[C];if(N!==void 0){for(const W in N){const I=N[W];for(const Y in I)u(I[Y].object),delete I[Y];delete N[W]}delete G[C],Object.keys(G).length===0&&delete n[B]}}}function b(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function gp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _p(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==en&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kt&&w!==jt&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:S,maxSamples:E,samples:y}}function xp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Mn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,P=A*4;let S=d.clippingState||null;l.value=S,S=u(_,h,P,p);for(let E=0;E!==P;++E)S[E]=t[E];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const d=p+M*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let P=0,S=p;P!==M;++P,S+=4)a.copy(f[P]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const yi=4,vp=6,Mp=20,Sp=256,Bi=new Wa,Qo=new ke;let Cr=null,Pr=0,Dr=0,Lr=!1;const yp=new H,qn=new H;class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=yp}=r;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,e.scissorTest=!1,xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:dn,format:en,colorSpace:Ws,depthBuffer:!1},s=el(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ep(r)),this._blurMaterial=bp(r,e,t),this._ggxMaterial=Tp(r,e,t)}return s}_compileMaterial(e){const t=new It(new pn,e);this._renderer.compile(t,Bi)}_sceneToCubeUV(e,t,n,s,r){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Qo),f.toneMapping=hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new ei,new Qi({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(Qo),d=!0);for(let P=0;P<6;P++){const S=P%3;S===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[P],r.y,r.z)):S===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[P]));const E=this._cubeSize;xi(s,S*E,P>2?E:0,E,E),f.setRenderTarget(s),d&&f.render(M,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Qn||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:_}=this,M=this._sizeLods[n],m=3*M*(n>_-yi?n-_+yi:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,xi(r,m,d,3*M,2*M),s.setRenderTarget(r),s.render(o,Bi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,xi(e,m,d,3*M,2*M),s.setRenderTarget(e),s.render(o,Bi)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-yi?s-this._lodMax+yi:0),h=4*(this._cubeSize-u);xi(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Bi)}}function Ep(i){const e=[],t=[];let n=i;const s=i-yi+1+vp;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,_=new Float32Array(p*h*f),M=new Float32Array(p*h*f);for(let d=0;d<f;d++){const A=d%3*2/3-1,P=d>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(S,p*h*d);for(let E=0;E<h;E++){const y=u[E*2]*2-1,w=u[E*2+1]*2-1;d===0?qn.set(1,w,y):d===1?qn.set(-y,1,-w):d===2?qn.set(-y,w,1):d===3?qn.set(-1,w,-y):d===4?qn.set(-y,-1,w):qn.set(y,w,-1),qn.toArray(M,(d*h+E)*p)}}const m=new pn;m.setAttribute("position",new nn(_,p)),m.setAttribute("outputDirection",new nn(M,p)),t.push(new It(m,null)),n>yi&&n--}return{lodMeshes:t,sizeLods:e}}function el(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tp(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function bp(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Mp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function tl(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function nl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Qs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class oc extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ei(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Tn});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=At),new Au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Ap(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===sr||p===rr)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new oc(_.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===sr||p===rr,M=p===Qn||p===wi;if(_||M){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new jo(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return _&&A&&A.height>0||M&&A&&l(A)?(n===null&&(n=new jo(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===sr?h.mapping=Qn:p===rr&&(h.mapping=wi),h}function l(h){let p=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function wp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function Rp(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const A=p.array;M=p.version;for(let P=0,S=A.length;P<S;P+=3){const E=A[P+0],y=A[P+1],w=A[P+2];h.push(E,y,y,w,w,E)}}else{const A=_.array;M=_.version;for(let P=0,S=A.length/3-1;P<S;P+=3){const E=P+0,y=P+1,w=P+2;h.push(E,y,y,w,w,E)}}const m=new(_.count>=65535?$l:Zl)(h,1);m.version=M;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Cp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dp(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var p=R;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let E=o.attributes.position.count*S,y=1;E>e.maxTextureSize&&(y=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*y*4*f),x=new Yl(w,E,y,f);x.type=jt,x.needsUpdate=!0;const b=S*4;for(let F=0;F<f;F++){const B=d[F],G=A[F],C=P[F],N=E*y*4*F;for(let W=0;W<B.count;W++){const I=W*b;_===!0&&(s.fromBufferAttribute(B,W),w[N+I+0]=s.x,w[N+I+1]=s.y,w[N+I+2]=s.z,w[N+I+3]=0),M===!0&&(s.fromBufferAttribute(G,W),w[N+I+4]=s.x,w[N+I+5]=s.y,w[N+I+6]=s.z,w[N+I+7]=0),m===!0&&(s.fromBufferAttribute(C,W),w[N+I+8]=s.x,w[N+I+9]=s.y,w[N+I+10]=s.z,w[N+I+11]=C.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new ze(E,y)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Lp(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Ip={[Ll]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ul]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function Up(i,e,t,n,s,r){const a=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new pn;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));const u=new _u({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new It(c,u),h=new Wa(-1,1,1,-1,0,1);let p=null,_=null,M=!1,m,d=null,A=[],P=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let y=0;y<A.length;y++){const w=A[y];w.setSize&&w.setSize(S,E)}},this.setEffects=function(S){A=S,P=A.length>0&&A[0].isRenderPass===!0;const E=a.width,y=a.height;A.length>0&&o===null&&(o=new tn(E,y,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(E,y,{type:dn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){const x=A[w];x.setSize&&x.setSize(E,y)}},this.begin=function(S,E){if(M||S.toneMapping===hn&&A.length===0)return!1;if(d=E,E!==null){const y=E.width,w=E.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return P===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=hn,!0},this.hasRenderPass=function(){return P},this.end=function(S,E){S.toneMapping=m,M=!0;let y=a,w=o;for(let x=0;x<A.length;x++){const b=A[x];b.enabled!==!1&&(b.render(S,w,y,E),b.needsSwap!==!1&&(y=w,w=w===o?l:o))}if(p!==S.outputColorSpace||_!==S.toneMapping){p=S.outputColorSpace,_=S.toneMapping,u.defines={},Qe.getTransfer(p)===st&&(u.defines.SRGB_TRANSFER="");const x=Ip[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(d),S.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const lc=new Lt,ba=new ji(1,1),cc=new Yl,hc=new qh,uc=new jl,il=[],sl=[],rl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=il[s];if(r===void 0&&(r=new Float32Array(s),il[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function js(i,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),vt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;al.set(n),i.uniformMatrix3fv(this.addr,!1,al),vt(t,n)}}function Hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;rl.set(n),i.uniformMatrix4fv(this.addr,!1,rl),vt(t,n)}}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ba.compareFunction=t.isReversedDepthBuffer()?za:Ba,r=ba):r=lc,t.setTexture2D(e||r,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hc,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||uc,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cc,s)}function em(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return Gp;case 35676:return Hp;case 5124:case 35670:return kp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return qp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return jp}}function tm(i,e){i.uniform1fv(this.addr,e)}function nm(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function im(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function sm(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function rm(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function om(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lm(i,e){i.uniform1iv(this.addr,e)}function cm(i,e){i.uniform2iv(this.addr,e)}function hm(i,e){i.uniform3iv(this.addr,e)}function um(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function fm(i,e){i.uniform2uiv(this.addr,e)}function pm(i,e){i.uniform3uiv(this.addr,e)}function mm(i,e){i.uniform4uiv(this.addr,e)}function gm(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ba:a=lc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function _m(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hc,r[a])}function xm(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||uc,r[a])}function vm(i,e,t){const n=this.cache,s=e.length,r=js(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cc,r[a])}function Mm(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return vm}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=em(t.type)}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mm(t.type)}}class Em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function ll(i,e){i.seq.push(e),i.map[e.id]=e}function Tm(i,e,t){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ll(t,c===void 0?new Sm(o,i,e):new ym(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Em(o),ll(t,f)),t=f}}}class Bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Tm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bm=37297;let Am=0;function wm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const hl=new Ge;function Rm(i){Qe._getMatrix(hl,Qe.workingColorSpace,i);const e=`mat3( ${hl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Xs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ul(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wm(i.getShaderSource(e),o)}else return r}function Cm(i,e){const t=Rm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Pm={[Ll]:"Linear",[Il]:"Reinhard",[Ul]:"Cineon",[Pa]:"ACESFilmic",[Fl]:"AgX",[Ol]:"Neutral",[Nl]:"Custom"};function Dm(i,e){const t=Pm[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cs=new H;function Lm(){Qe.getLuminanceCoefficients(Cs);const i=Cs.x.toFixed(4),e=Cs.y.toFixed(4),t=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(Fm,Bm)}const Om=new Map;function Bm(i,e){let t=Ye[e];if(t===void 0){const n=Om.get(e);if(n!==void 0)t=Ye[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Aa(t)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(i){return i.replace(zm,Gm)}function Gm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Hm={[Is]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function km(i){return Hm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Vm={[Qn]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE_UV"};function Wm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Vm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Xm={[wi]:"ENVMAP_MODE_REFRACTION"};function Ym(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qm={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[ch]:"ENVMAP_BLENDING_MIX",[hh]:"ENVMAP_BLENDING_ADD"};function Km(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qm[i.combine]||"ENVMAP_BLENDING_NONE"}function Zm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $m(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=km(t),c=Wm(t),u=Ym(t),f=Km(t),h=Zm(t),p=Im(t),_=Um(r),M=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hi).join(`
`),d.length>0&&(d+=`
`)):(m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),d=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==hn?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Cm("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Aa(a),a=dl(a,t),a=fl(a,t),o=Aa(o),o=dl(o,t),o=fl(o,t),a=pl(a),o=pl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const P=A+m+a,S=A+d+o,E=cl(s,s.VERTEX_SHADER,P),y=cl(s,s.FRAGMENT_SHADER,S);s.attachShader(M,E),s.attachShader(M,y),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(F){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(E)||"",C=s.getShaderInfoLog(y)||"",N=B.trim(),W=G.trim(),I=C.trim();let Y=!0,z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,y);else{const K=ul(s,E,"vertex"),J=ul(s,y,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+N+`
`+K+`
`+J)}else N!==""?Oe("WebGLProgram: Program Info Log:",N):(W===""||I==="")&&(z=!1);z&&(F.diagnostics={runnable:Y,programLog:N,vertexShader:{log:W,prefix:m},fragmentShader:{log:I,prefix:d}})}s.deleteShader(E),s.deleteShader(y),x=new Bs(s,M),b=Nm(s,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,bm)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=y,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jm(e),t.set(e,n)),n}}class jm{constructor(e){this.id=Jm++,this.code=e,this.usedTimes=0}}function eg(i){return i===jn||i===ks||i===Vs}function tg(i,e,t,n,s,r){const a=new ql,o=new Qm,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,b,R,F,B,G){const C=F.fog,N=B.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=e.get(x.envMap||W,I),z=Y&&Y.mapping===Zs?Y.image.height:null,K=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=J!==void 0?J.length:0;let ue=0;N.morphAttributes.position!==void 0&&(ue=1),N.morphAttributes.normal!==void 0&&(ue=2),N.morphAttributes.color!==void 0&&(ue=3);let et,qe,Je,$;if(K){const lt=ln[K];et=lt.vertexShader,qe=lt.fragmentShader}else{et=x.vertexShader,qe=x.fragmentShader;const lt=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,lt,nt),Je=lt.id,$=nt.id}const j=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,xe=B.isBatchedMesh===!0,ie=!!x.map,Pe=!!x.matcap,ve=!!Y,re=!!x.aoMap,ye=!!x.lightMap,Re=!!x.bumpMap&&x.wireframe===!1,Ie=!!x.normalMap,Ae=!!x.displacementMap,Ve=!!x.emissiveMap,Be=!!x.metalnessMap,We=!!x.roughnessMap,L=x.anisotropy>0,ft=x.clearcoat>0,$e=x.dispersion>0,T=x.retroreflectivity>0,g=x.iridescence>0,O=x.sheen>0,X=x.transmission>0,Z=L&&!!x.anisotropyMap,se=ft&&!!x.clearcoatMap,ae=ft&&!!x.clearcoatNormalMap,Q=ft&&!!x.clearcoatRoughnessMap,te=g&&!!x.iridescenceMap,oe=g&&!!x.iridescenceThicknessMap,De=O&&!!x.sheenColorMap,de=O&&!!x.sheenRoughnessMap,le=!!x.specularMap,Le=!!x.specularColorMap,Ne=!!x.specularIntensityMap,He=X&&!!x.transmissionMap,U=X&&!!x.thicknessMap,ce=!!x.gradientMap,ee=!!x.alphaMap,he=x.alphaTest>0,_e=!!x.alphaHash,ne=!!x.extensions;let Ue=hn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const we={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:qe,defines:x.defines,customVertexShaderID:Je,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ie,matcap:Pe,envMap:ve,envMapMode:ve&&Y.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:ye,bumpMap:Re,normalMap:Ie,displacementMap:Ae,emissiveMap:Ve,normalMapObjectSpace:Ie&&x.normalMapType===fh,normalMapTangentSpace:Ie&&x.normalMapType===Ea,packedNormalMap:Ie&&x.normalMapType===Ea&&eg(x.normalMap.format),metalnessMap:Be,roughnessMap:We,anisotropy:L,anisotropyMap:Z,clearcoat:ft,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:Q,dispersion:$e,retroreflection:T,iridescence:g,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:De,sheenRoughnessMap:de,specularMap:le,specularColorMap:Le,specularIntensityMap:Ne,transmission:X,transmissionMap:He,thicknessMap:U,gradientMap:ce,opaque:x.transparent===!1&&x.blending===ki&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:_e,combine:x.combine,mapUv:ie&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:Re&&_(x.bumpMap.channel),normalMapUv:Ie&&_(x.normalMap.channel),displacementMapUv:Ae&&_(x.displacementMap.channel),emissiveMapUv:Ve&&_(x.emissiveMap.channel),metalnessMapUv:Be&&_(x.metalnessMap.channel),roughnessMapUv:We&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:Le&&_(x.specularColorMap.channel),specularIntensityMapUv:Ne&&_(x.specularIntensityMap.channel),transmissionMapUv:He&&_(x.transmissionMap.channel),thicknessMapUv:U&&_(x.thicknessMap.channel),alphaMapUv:ee&&_(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ie||L),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(ie||ee),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ue,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ie&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===Dt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(b,x),A(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function d(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function A(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function P(x){const b=p[x.type];let R;if(b){const F=ln[b];R=pu.clone(F.uniforms)}else R=x.uniforms;return R}function S(x,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new $m(i,b,x,s),c.push(R),u.set(b,R)),R}function E(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:P,acquireProgram:S,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:w}}function ng(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _l(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,M,m,d){let A=i[e];return A===void 0?(A={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:d},i[e]=A):(A.id=h.id,A.object=h,A.geometry=p,A.material=_,A.materialVariant=a(h),A.groupOrder=M,A.renderOrder=h.renderOrder,A.z=m,A.group=d),e++,A}function l(h,p,_,M,m,d,A){A.reversedDepth===!0&&(m=-m);const P=o(h,p,_,M,m,d);_.transmission>0?n.push(P):_.transparent===!0?s.push(P):t.push(P)}function c(h,p,_,M,m,d){const A=o(h,p,_,M,m,d);_.transmission>0?n.unshift(A):_.transparent===!0?s.unshift(A):t.unshift(A)}function u(h,p){t.length>1&&t.sort(h||ig),n.length>1&&n.sort(p||gl),s.length>1&&s.sort(p||gl)}function f(){for(let h=e,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function sg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new _l,i.set(n,[a])):s>=r.length?(a=new _l,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ke};break;case"SpotLight":t={position:new H,direction:new H,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let og=0;function lg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cg(i){const e=new rg,t=ag(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new ut,a=new ut;function o(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,_=0,M=0,m=0,d=0,A=0,P=0,S=0,E=0,y=0,w=0,x=0,b=0,R=0;c.sort(lg);for(let B=0,G=c.length;B<G;B++){const C=c[B],N=C.color,W=C.intensity,I=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===jn?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*W,f+=N.g*W,h+=N.b*W;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],W);R++}else if(C.isSunLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,J=t.get(C);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[_]=J,n.sunShadowMap[_]=Y;const be=K.getViewportCount();for(let ue=0;ue<be;ue++)n.sunShadowMatrix[M+ue]=K.getMatrix(ue),n.sunShadowCascade[M+ue]=K._cascadeData[ue];M+=be,_++}n.sun[p]=z,p++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,J=t.get(C);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=z,m++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(W),z.distance=I,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[A]=z;const K=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,K.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[A]=K.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.spotShadow[A]=J,n.spotShadowMap[A]=Y,w++}A++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(N).multiplyScalar(W),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[P]=z,P++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const K=C.shadow,J=t.get(C);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,n.pointShadow[d]=J,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=C.shadow.matrix,y++}n.point[d]=z,d++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(W),z.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[S]=z,S++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const F=n.hash;(F.sunLength!==p||F.directionalLength!==m||F.pointLength!==d||F.spotLength!==A||F.rectAreaLength!==P||F.hemiLength!==S||F.numSunShadows!==_||F.numDirectionalShadows!==E||F.numPointShadows!==y||F.numSpotShadows!==w||F.numSpotMaps!==x||F.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=A,n.rectArea.length=P,n.point.length=d,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,F.sunLength=p,F.directionalLength=m,F.pointLength=d,F.spotLength=A,F.rectAreaLength=P,F.hemiLength=S,F.numSunShadows=_,F.numDirectionalShadows=E,F.numPointShadows=y,F.numSpotShadows=w,F.numSpotMaps=x,F.numLightProbes=R,n.version=og++)}function l(c,u){let f=0,h=0,p=0,_=0,M=0,m=0;const d=u.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){const S=c[A];if(S.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),f++}else if(S.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(S.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function xl(i){const e=new cg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function hg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new xl(i),e.set(s,[o])):r>=a.length?(o=new xl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fg=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],pg=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],vl=new ut,zi=new H,Ur=new H;function mg(i,e,t){let n=new Va;const s=new ze,r=new ze,a=new dt,o=new xu,l=new vu,c={},u=t.maxTextureSize,f={[Jn]:Dt,[Dt]:Jn,[Sn]:Sn},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let d=this.type;this.render=function(y,w,x){if(window.__galleryCaptureScene)return;if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Rl&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);const b=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Tn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=d!==this.type;G&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(N=>N.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,N=y.length;C<N;C++){const W=y[C],I=W.shadow;if(I===void 0){Oe("WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const Y=I.getFrameExtents();s.multiply(Y),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,I.mapSize.y=r.y));const z=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=z,I.map===null||G===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Gi){if(W.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new tn(s.x,s.y,{format:jn,type:dn,minFilter:At,magFilter:At,generateMipmaps:!1}),I.map.texture.name=W.name+".shadowMap",I.map.depthTexture=new ji(s.x,s.y,jt),I.map.depthTexture.name=W.name+".shadowMapDepth",I.map.depthTexture.format=An,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=yt,I.map.depthTexture.magFilter=yt}else W.isPointLight?(I.map=new oc(s.x),I.map.depthTexture=new du(s.x,un)):(I.map=new tn(s.x,s.y),I.map.depthTexture=new ji(s.x,s.y,un)),I.map.depthTexture.name=W.name+".shadowMap",I.map.depthTexture.format=An,this.type===Is?(I.map.depthTexture.compareFunction=z?za:Ba,I.map.depthTexture.minFilter=At,I.map.depthTexture.magFilter=At):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=yt,I.map.depthTexture.magFilter=yt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);const K=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();W.isPointLight!==!0&&I.updateMatrices(W,x);for(let J=0;J<K;J++){const be=I.getCamera(J);if(W.isPointLight){const ue=I.camera,et=I.matrix,qe=W.distance||ue.far;qe!==ue.far&&(ue.far=qe,ue.updateProjectionMatrix()),zi.setFromMatrixPosition(W.matrixWorld),ue.position.copy(zi),Ur.copy(ue.position),Ur.add(fg[J]),ue.up.copy(pg[J]),ue.lookAt(Ur),ue.updateMatrixWorld(),et.makeTranslation(-zi.x,-zi.y,-zi.z),vl.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),I._frustum.setFromProjectionMatrix(vl,ue.coordinateSystem,ue.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,J),i.clear();else{J===0&&(i.setRenderTarget(I.map),i.clear());const ue=I.getViewport(J);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),B.viewport(a)}n=I.getFrustum(J),S(w,x,be,W,this.type)}I.isPointLightShadow!==!0&&this.type===Gi&&A(I,x),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,R,F)};function A(y,w){const x=e.update(M);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new tn(s.x,s.y,{format:jn,type:dn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,M,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,x,p,M,null)}function P(y,w,x,b){let R=null;const F=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0)R=F;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=R.uuid,G=w.uuid;let C=c[B];C===void 0&&(C={},c[B]=C);let N=C[G];N===void 0&&(N=R.clone(),C[G]=N,w.addEventListener("dispose",E)),R=N}if(R.visible=w.visible,R.wireframe=w.wireframe,b===Gi?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=i.properties.get(R);B.light=x}return R}function S(y,w,x,b,R){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Gi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const G=e.update(y),C=y.material;if(Array.isArray(C)){const N=G.groups;for(let W=0,I=N.length;W<I;W++){const Y=N[W],z=C[Y.materialIndex];if(z&&z.visible){const K=P(y,z,b,R);y.onBeforeShadow(i,y,w,x,G,K,Y),i.renderBufferDirect(x,null,G,K,y,Y),y.onAfterShadow(i,y,w,x,G,K,Y)}}}else if(C.visible){const N=P(y,C,b,R);y.onBeforeShadow(i,y,w,x,G,N,null),i.renderBufferDirect(x,null,G,N,y,null),y.onAfterShadow(i,y,w,x,G,N,null)}}const B=y.children;for(let G=0,C=B.length;G<C;G++)S(B[G],w,x,b,R)}function E(y){y.target.removeEventListener("dispose",E);for(const x in c){const b=c[x],R=y.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function gg(i,e){function t(){let U=!1;const ce=new dt;let ee=null;const he=new dt(0,0,0,0);return{setMask:function(_e){ee!==_e&&!U&&(i.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){U=_e},setClear:function(_e,ne,Ue,we,lt){lt===!0&&(_e*=we,ne*=we,Ue*=we),ce.set(_e,ne,Ue,we),he.equals(ce)===!1&&(i.clearColor(_e,ne,Ue,we),he.copy(ce))},reset:function(){U=!1,ee=null,he.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,ee=null,he=null,_e=null;return{setReversed:function(ne){if(ce!==ne){const Ue=e.get("EXT_clip_control");ne?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return ce},setTest:function(ne){ne?j(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!U&&(i.depthMask(ne),ee=ne)},setFunc:function(ne){if(ce&&(ne=bh[ne]),he!==ne){switch(ne){case Br:i.depthFunc(i.NEVER);break;case zr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Hr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case Wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ne}},setLocked:function(ne){U=ne},setClear:function(ne){_e!==ne&&(_e=ne,ce&&(ne=1-ne),i.clearDepth(ne))},reset:function(){U=!1,ee=null,he=null,_e=null,ce=!1}}}function s(){let U=!1,ce=null,ee=null,he=null,_e=null,ne=null,Ue=null,we=null,lt=null;return{setTest:function(nt){U||(nt?j(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!U&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,Kt,sn){(ee!==nt||he!==Kt||_e!==sn)&&(i.stencilFunc(nt,Kt,sn),ee=nt,he=Kt,_e=sn)},setOp:function(nt,Kt,sn){(ne!==nt||Ue!==Kt||we!==sn)&&(i.stencilOp(nt,Kt,sn),ne=nt,Ue=Kt,we=sn)},setLocked:function(nt){U=nt},setClear:function(nt){lt!==nt&&(i.clearStencil(nt),lt=nt)},reset:function(){U=!1,ce=null,ee=null,he=null,_e=null,ne=null,Ue=null,we=null,lt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,_=[],M=null,m=!1,d=null,A=null,P=null,S=null,E=null,y=null,w=null,x=new ke(0,0,0),b=0,R=!1,F=null,B=null,G=null,C=null,N=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=Y>=2);let K=null,J={};const be=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),et=new dt().fromArray(be),qe=new dt().fromArray(ue);function Je(U,ce,ee,he){const _e=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<ee;Ue++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ce+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ne}const $={};$[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(qi),Re(!1),Ie(vo),j(i.CULL_FACE),re(Tn);function j(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function ge(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Fe(U,ce){return h[U]!==ce?(i.bindFramebuffer(U,ce),h[U]=ce,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function xe(U,ce){let ee=_,he=!1;if(U){ee=p.get(ce),ee===void 0&&(ee=[],p.set(ce,ee));const _e=U.textures;if(ee.length!==_e.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ue=_e.length;ne<Ue;ne++)ee[ne]=i.COLOR_ATTACHMENT0+ne;ee.length=_e.length,he=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,he=!0);he&&i.drawBuffers(ee)}function ie(U){return M!==U?(i.useProgram(U),M=U,!0):!1}const Pe={[vi]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};Pe[Kc]=i.MIN,Pe[Zc]=i.MAX;const ve={[$c]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[nh]:i.DST_COLOR,[eh]:i.DST_ALPHA,[jc]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[ih]:i.ONE_MINUS_DST_COLOR,[th]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[oh]:i.CONSTANT_ALPHA,[lh]:i.ONE_MINUS_CONSTANT_ALPHA};function re(U,ce,ee,he,_e,ne,Ue,we,lt,nt){if(U===Tn){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),U!==Xc){if(U!==d||nt!==R){if((A!==vi||E!==vi)&&(i.blendEquation(i.FUNC_ADD),A=vi,E=vi),nt)switch(U){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.ONE,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case So:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yo:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}P=null,S=null,y=null,w=null,x.set(0,0,0),b=0,d=U,R=nt}return}_e=_e||ce,ne=ne||ee,Ue=Ue||he,(ce!==A||_e!==E)&&(i.blendEquationSeparate(Pe[ce],Pe[_e]),A=ce,E=_e),(ee!==P||he!==S||ne!==y||Ue!==w)&&(i.blendFuncSeparate(ve[ee],ve[he],ve[ne],ve[Ue]),P=ee,S=he,y=ne,w=Ue),(we.equals(x)===!1||lt!==b)&&(i.blendColor(we.r,we.g,we.b,lt),x.copy(we),b=lt),d=U,R=!1}function ye(U,ce){U.side===Sn?ge(i.CULL_FACE):j(i.CULL_FACE);let ee=U.side===Dt;ce&&(ee=!ee),Re(ee),U.blending===ki&&U.transparent===!1?re(Tn):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const he=U.stencilWrite;o.setTest(he),he&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){F!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),F=U)}function Ie(U){U!==Vc?(j(i.CULL_FACE),U!==B&&(U===vo?i.cullFace(i.BACK):U===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),B=U}function Ae(U){U!==G&&(I&&i.lineWidth(U),G=U)}function Ve(U,ce,ee){U?(j(i.POLYGON_OFFSET_FILL),(C!==ce||N!==ee)&&(C=ce,N=ee,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,ee))):ge(i.POLYGON_OFFSET_FILL)}function Be(U){U?j(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function We(U){U===void 0&&(U=i.TEXTURE0+W-1),K!==U&&(i.activeTexture(U),K=U)}function L(U,ce,ee){ee===void 0&&(K===null?ee=i.TEXTURE0+W-1:ee=K);let he=J[ee];he===void 0&&(he={type:void 0,texture:void 0},J[ee]=he),(he.type!==U||he.texture!==ce)&&(K!==ee&&(i.activeTexture(ee),K=ee),i.bindTexture(U,ce||$[U]),he.type=U,he.texture=ce)}function ft(){const U=J[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function g(){try{i.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function O(){try{i.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function se(){try{i.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function Q(){try{i.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function oe(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function De(U,ce){f[U]!==ce&&(i.pixelStorei(U,ce),f[U]=ce)}function de(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function le(U){qe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function Le(U,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let he=ee.get(U);he===void 0&&(he=i.getUniformBlockIndex(ce,U.name),ee.set(U,he))}function Ne(U,ce){const he=c.get(ce).get(U);l.get(ce)!==he&&(i.uniformBlockBinding(ce,he,U.__bindingPointIndex),l.set(ce,he))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,J={},h={},p=new WeakMap,_=[],M=null,m=!1,d=null,A=null,P=null,S=null,E=null,y=null,w=null,x=new ke(0,0,0),b=0,R=!1,F=null,B=null,G=null,C=null,N=null,et.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ge,bindFramebuffer:Fe,drawBuffers:xe,useProgram:ie,setBlending:re,setMaterial:ye,setFlipSided:Re,setCullFace:Ie,setLineWidth:Ae,setPolygonOffset:Ve,setScissorTest:Be,activeTexture:We,bindTexture:L,unbindTexture:ft,compressedTexImage2D:$e,compressedTexImage3D:T,texImage2D:Q,texImage3D:te,pixelStorei:De,getParameter:oe,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:se,texStorage3D:ae,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:de,viewport:le,reset:He}}function _g(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return _?new OffscreenCanvas(T,g):Ys("canvas")}function m(T,g,O){let X=1;const Z=$e(T);if((Z.width>O||Z.height>O)&&(X=O/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const se=Math.floor(X*Z.width),ae=Math.floor(X*Z.height);h===void 0&&(h=M(se,ae));const Q=g?M(se,ae):h;return Q.width=se,Q.height=ae,Q.getContext("2d").drawImage(T,0,0,se,ae),Oe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+ae+")."),Q}else return"data"in T&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function d(T){return T.generateMipmaps}function A(T){i.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,g,O,X,Z,se=!1){if(T!==null){if(i[T]!==void 0)return i[T];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae;X&&(ae=e.get("EXT_texture_norm16"),ae||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=g;if(g===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8),O===i.UNSIGNED_SHORT&&ae&&(Q=ae.R16_EXT),O===i.SHORT&&ae&&(Q=ae.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),g===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8),O===i.UNSIGNED_SHORT&&ae&&(Q=ae.RG16_EXT),O===i.SHORT&&ae&&(Q=ae.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&ae&&(Q=ae.RGB16_EXT),O===i.SHORT&&ae&&(Q=ae.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),g===i.RGBA){const te=se?Xs:Qe.getTransfer(Z);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=te===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ae&&(Q=ae.RGBA16_EXT),O===i.SHORT&&ae&&(Q=ae.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(T,g){let O;return T?g===null||g===un||g===Zi?O=i.DEPTH24_STENCIL8:g===jt?O=i.DEPTH32F_STENCIL8:g===Ki&&(O=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===un||g===Zi?O=i.DEPTH_COMPONENT24:g===jt?O=i.DEPTH_COMPONENT32F:g===Ki&&(O=i.DEPTH_COMPONENT16),O}function y(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==yt&&T.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),b(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(T){const g=T.target;g.removeEventListener("dispose",x),F(g)}function b(T){const g=n.get(T);if(g.__webglInit===void 0)return;const O=T.source,X=p.get(O);if(X){const Z=X[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(T),Object.keys(X).length===0&&p.delete(O)}n.remove(T)}function R(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const O=T.source,X=p.get(O);delete X[g.__cacheKey],a.memory.textures--}function F(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Z=0;Z<g.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let X=0,Z=O.length;X<Z;X++){const se=n.get(O[X]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(T)}let B=0;function G(){B=0}function C(){return B}function N(T){B=T}function W(){const T=B;return T>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function I(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function Y(T,g){const O=n.get(T);if(T.isVideoTexture&&L(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const X=T.image;if(X===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function z(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){ge(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function K(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){ge(O,T,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function J(T,g){const O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){Fe(O,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const be={[Xr]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},ue={[yt]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[ar]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},et={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[Ba]:i.LEQUAL,[_h]:i.EQUAL,[za]:i.GEQUAL,[xh]:i.GREATER,[vh]:i.NOTEQUAL};function qe(T,g){if(g.type===jt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===At||g.magFilter===ar||g.magFilter===as||g.magFilter===Zn||g.minFilter===At||g.minFilter===ar||g.minFilter===as||g.minFilter===Zn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,be[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,be[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,be[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===yt||g.minFilter!==as&&g.minFilter!==Zn||g.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Je(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const X=g.source;let Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));const se=I(g);if(se!==T.__cacheKey){Z[se]===void 0&&(Z[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[se].usedTimes++;const ae=Z[T.__cacheKey];ae!==void 0&&(Z[T.__cacheKey].usedTimes--,ae.usedTimes===0&&R(g)),T.__cacheKey=se,T.__webglTexture=Z[se].texture}return O}function $(T,g,O){return Math.floor(Math.floor(T/O)/g)}function j(T,g,O,X){const se=T.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,X,g.data);else{se.sort((De,de)=>De.start-de.start);let ae=0;for(let De=1;De<se.length;De++){const de=se[ae],le=se[De],Le=de.start+de.count,Ne=$(le.start,g.width,4),He=$(de.start,g.width,4);le.start<=Le+1&&Ne===He&&$(le.start+le.count-1,g.width,4)===Ne?de.count=Math.max(de.count,le.start+le.count-de.start):(++ae,se[ae]=le)}se.length=ae+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let De=0,de=se.length;De<de;De++){const le=se[De],Le=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),He=Le%g.width,U=Math.floor(Le/g.width),ce=Ne,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,He,U,ce,ee,O,X,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ge(T,g,O){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const Z=Je(T,g),se=g.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+O);const ae=n.get(se);if(se.version!==ae.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ee=Qe.getPrimaries(Qe.workingColorSpace),he=g.colorSpace===Fn?null:Qe.getPrimaries(g.colorSpace),_e=g.colorSpace===Fn||ee===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let te=m(g.image,!1,s.maxTextureSize);te=ft(g,te);const oe=r.convert(g.format,g.colorSpace),De=r.convert(g.type);let de=S(g.internalFormat,oe,De,g.normalized,g.colorSpace,g.isVideoTexture);qe(X,g);let le;const Le=g.mipmaps,Ne=g.isVideoTexture!==!0,He=ae.__version===void 0||Z===!0,U=se.dataReady,ce=y(g,te);if(g.isDepthTexture)de=E(g.format===$n,g.type),He&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,de,te.width,te.height,0,oe,De,null));else if(g.isDataTexture)if(Le.length>0){Ne&&He&&t.texStorage2D(i.TEXTURE_2D,ce,de,Le[0].width,Le[0].height);for(let ee=0,he=Le.length;ee<he;ee++)le=Le[ee],Ne?U&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,oe,De,le.data):t.texImage2D(i.TEXTURE_2D,ee,de,le.width,le.height,0,oe,De,le.data);g.generateMipmaps=!1}else Ne?(He&&t.texStorage2D(i.TEXTURE_2D,ce,de,te.width,te.height),U&&j(g,te,oe,De)):t.texImage2D(i.TEXTURE_2D,0,de,te.width,te.height,0,oe,De,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,de,Le[0].width,Le[0].height,te.depth);for(let ee=0,he=Le.length;ee<he;ee++)if(le=Le[ee],g.format!==en)if(oe!==null)if(Ne){if(U)if(g.layerUpdates.size>0){const _e=Jo(le.width,le.height,g.format,g.type);for(const ne of g.layerUpdates){const Ue=le.data.subarray(ne*_e/le.data.BYTES_PER_ELEMENT,(ne+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ne,le.width,le.height,1,oe,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,le.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,te.depth,oe,De,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,de,le.width,le.height,te.depth,0,oe,De,le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ne&&He&&t.texStorage2D(i.TEXTURE_2D,ce,de,Le[0].width,Le[0].height);for(let ee=0,he=Le.length;ee<he;ee++)le=Le[ee],g.format!==en?oe!==null?Ne?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,de,le.width,le.height,0,le.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,oe,De,le.data):t.texImage2D(i.TEXTURE_2D,ee,de,le.width,le.height,0,oe,De,le.data)}else if(g.isDataArrayTexture)if(Ne){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,de,te.width,te.height,te.depth),U)if(g.layerUpdates.size>0){const ee=Jo(te.width,te.height,g.format,g.type);for(const he of g.layerUpdates){const _e=te.data.subarray(he*ee/te.data.BYTES_PER_ELEMENT,(he+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,te.width,te.height,1,oe,De,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,De,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,oe,De,te.data);else if(g.isData3DTexture)Ne?(He&&t.texStorage3D(i.TEXTURE_3D,ce,de,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,De,te.data)):t.texImage3D(i.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,oe,De,te.data);else if(g.isFramebufferTexture){if(He)if(Ne)t.texStorage2D(i.TEXTURE_2D,ce,de,te.width,te.height);else{let ee=te.width,he=te.height;for(let _e=0;_e<ce;_e++)t.texImage2D(i.TEXTURE_2D,_e,de,ee,he,0,oe,De,null),ee>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),f.add(g),ee.onpaint=he=>{const _e=he.changedElements;for(const ne of f)_e.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const _e=i.RGBA,ne=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ne,Ue,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&He){const ee=$e(Le[0]);t.texStorage2D(i.TEXTURE_2D,ce,de,ee.width,ee.height)}for(let ee=0,he=Le.length;ee<he;ee++)le=Le[ee],Ne?U&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,oe,De,le):t.texImage2D(i.TEXTURE_2D,ee,de,oe,De,le);g.generateMipmaps=!1}else if(Ne){if(He){const ee=$e(te);t.texStorage2D(i.TEXTURE_2D,ce,de,ee.width,ee.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,De,te)}else t.texImage2D(i.TEXTURE_2D,0,de,oe,De,te);d(g)&&A(X),ae.__version=se.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Fe(T,g,O){if(g.image.length!==6)return;const X=Je(T,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const se=n.get(Z);if(Z.version!==se.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const ae=Qe.getPrimaries(Qe.workingColorSpace),Q=g.colorSpace===Fn?null:Qe.getPrimaries(g.colorSpace),te=g.colorSpace===Fn||ae===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const oe=g.isCompressedTexture||g.image[0].isCompressedTexture,De=g.image[0]&&g.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!oe&&!De?de[ne]=m(g.image[ne],!0,s.maxCubemapSize):de[ne]=De?g.image[ne].image:g.image[ne],de[ne]=ft(g,de[ne]);const le=de[0],Le=r.convert(g.format,g.colorSpace),Ne=r.convert(g.type),He=S(g.internalFormat,Le,Ne,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,ce=se.__version===void 0||X===!0,ee=Z.dataReady;let he=y(g,le);qe(i.TEXTURE_CUBE_MAP,g);let _e;if(oe){U&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,He,le.width,le.height);for(let ne=0;ne<6;ne++){_e=de[ne].mipmaps;for(let Ue=0;Ue<_e.length;Ue++){const we=_e[Ue];g.format!==en?Le!==null?U?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,He,we.width,we.height,0,we.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,0,0,we.width,we.height,Le,Ne,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,He,we.width,we.height,0,Le,Ne,we.data)}}}else{if(_e=g.mipmaps,U&&ce){_e.length>0&&he++;const ne=$e(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(De){U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Le,Ne,de[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,de[ne].width,de[ne].height,0,Le,Ne,de[ne].data);for(let Ue=0;Ue<_e.length;Ue++){const lt=_e[Ue].image[ne].image;U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,0,0,lt.width,lt.height,Le,Ne,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,He,lt.width,lt.height,0,Le,Ne,lt.data)}}else{U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,Ne,de[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Le,Ne,de[ne]);for(let Ue=0;Ue<_e.length;Ue++){const we=_e[Ue];U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,0,0,Le,Ne,we.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,He,Le,Ne,we.image[ne])}}}d(g)&&A(i.TEXTURE_CUBE_MAP),se.__version=Z.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function xe(T,g,O,X,Z,se){const ae=r.convert(O.format,O.colorSpace),Q=r.convert(O.type),te=S(O.internalFormat,ae,Q,O.normalized,O.colorSpace),oe=n.get(g),De=n.get(O);if(De.__renderTarget=g,!oe.__hasExternalTextures){const de=Math.max(1,g.width>>se),le=Math.max(1,g.height>>se);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,se,te,de,le,g.depth,0,ae,Q,null):t.texImage2D(Z,se,te,de,le,0,ae,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),We(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,De.__webglTexture,0,Be(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,De.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const X=g.depthTexture,Z=X&&X.isDepthTexture?X.type:null,se=E(g.stencilBuffer,Z),ae=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(g),se,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,T)}else{const X=g.textures;for(let Z=0;Z<X.length;Z++){const se=X[Z],ae=r.convert(se.format,se.colorSpace),Q=r.convert(se.type),te=S(se.internalFormat,ae,Q,se.normalized,se.colorSpace);We(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be(g),te,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(T,g,O){const X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),qe(i.TEXTURE_CUBE_MAP,g.depthTexture);const oe=r.convert(g.depthTexture.format),De=r.convert(g.depthTexture.type);let de;g.depthTexture.format===An?de=i.DEPTH_COMPONENT24:g.depthTexture.format===$n&&(de=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,g.width,g.height,0,oe,De,null)}}else Y(g.depthTexture,0);const se=Z.__webglTexture,ae=Be(g),Q=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,te=g.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)We(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,se,0);else if(g.depthTexture.format===$n)We(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(T){const g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=X}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)Pe(g.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?Pe(g.__webglFramebuffer[0],T,0):Pe(g.__webglFramebuffer,T,0)}else if(O){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),ie(g.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,se)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ie(g.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,g,O){const X=n.get(T);g!==void 0&&xe(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ve(T)}function ye(T){const g=T.texture,O=n.get(T),X=n.get(g);T.addEventListener("dispose",x);const Z=T.textures,se=T.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let te=0;te<g.mipmaps.length;te++)O.__webglFramebuffer[Q][te]=i.createFramebuffer()}else O.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<g.mipmaps.length;Q++)O.__webglFramebuffer[Q]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ae)for(let Q=0,te=Z.length;Q<te;Q++){const oe=n.get(Z[Q]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&We(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const te=Z[Q];O.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);const oe=r.convert(te.format,te.colorSpace),De=r.convert(te.type),de=S(te.internalFormat,oe,De,te.normalized,te.colorSpace,T.isXRRenderTarget===!0),le=Be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qe(i.TEXTURE_CUBE_MAP,g);for(let Q=0;Q<6;Q++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)xe(O.__webglFramebuffer[Q][te],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else xe(O.__webglFramebuffer[Q],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(g)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,te=Z.length;Q<te;Q++){const oe=Z[Q],De=n.get(oe);let de=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,De.__webglTexture),qe(de,oe),xe(O.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+Q,de,0),d(oe)&&A(de)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,X.__webglTexture),qe(Q,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)xe(O.__webglFramebuffer[te],T,g,i.COLOR_ATTACHMENT0,Q,te);else xe(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,Q,0);d(g)&&A(Q),t.unbindTexture()}T.depthBuffer&&ve(T)}function Re(T){const g=T.textures;for(let O=0,X=g.length;O<X;O++){const Z=g[O];if(d(Z)){const se=P(T),ae=n.get(Z).__webglTexture;t.bindTexture(se,ae),A(se),t.unbindTexture()}}}const Ie=[],Ae=[];function Ve(T){if(T.samples>0){if(We(T)===!1){const g=T.textures,O=T.width,X=T.height;let Z=i.COLOR_BUFFER_BIT;const se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(T),Q=g.length>1;if(Q)for(let oe=0;oe<g.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const te=T.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<g.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const De=n.get(g[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,Z,i.NEAREST),l===!0&&(Ie.length=0,Ae.length=0,Ie.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Ie.push(se),Ae.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let oe=0;oe<g.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const De=n.get(g[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Be(T){return Math.min(s.maxSamples,T.samples)}function We(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ft(T,g){const O=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ws&&O!==Fn&&(Qe.getTransfer(O)===st?(X!==en||Z!==kt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",O)),g}function $e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=C,this.setTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=re,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xg(i,e){function t(n,s=Fn){let r;const a=Qe.getTransfer(s);if(n===kt)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===jt)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Vl)return i.ALPHA;if(n===Wl)return i.RGB;if(n===en)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===jn)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===Us||n===Ns||n===Fs||n===Os)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===Kr||n===Zr||n===$r)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Qr||n===jr||n===ea||n===ta||n===ks||n===na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jr||n===Qr)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ea)return r.COMPRESSED_R11_EAC;if(n===ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ks)return r.COMPRESSED_RG11_EAC;if(n===na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===xa||n===va)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ma||n===Sa||n===Vs||n===ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:vg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Gn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Sg,d={},A=t.getContextAttributes();let P=null,S=null;const E=[],y=[],w=new ze;let x=null,b=null;const R=new Ht;R.viewport=new dt;const F=new Ht;F.viewport=new dt;const B=[R,F],G=new wu;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=E[$];return j===void 0&&(j=new fr,E[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=E[$];return j===void 0&&(j=new fr,E[$]=j),j.getGripSpace()},this.getHand=function($){let j=E[$];return j===void 0&&(j=new fr,E[$]=j),j.getHandSpace()};function W($){const j=y.indexOf($.inputSource);if(j===-1)return;const ge=E[j];ge!==void 0&&(ge.update($.inputSource,$.frame,c||a),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<E.length;$++){const j=y[$];j!==null&&(y[$]=null,E[$].disconnect(j))}C=null,N=null,m.reset();for(const $ in d)delete d[$];if(e.setRenderTarget(P),p=null,h=null,f=null,s=null,S=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),b!==null){const $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",I),s.addEventListener("inputsourceschange",Y),A.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,xe=null;A.depth&&(xe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=A.stencil?$n:An,Fe=A.stencil?Zi:un);const ie={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new tn(h.textureWidth,h.textureHeight,{format:en,type:kt,depthTexture:new ji(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new tn(p.framebufferWidth,p.framebufferHeight,{format:en,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let j=0;j<$.removed.length;j++){const ge=$.removed[j],Fe=y.indexOf(ge);Fe>=0&&(y[Fe]=null,E[Fe].disconnect(ge))}for(let j=0;j<$.added.length;j++){const ge=$.added[j];let Fe=y.indexOf(ge);if(Fe===-1){for(let ie=0;ie<E.length;ie++)if(ie>=y.length){y.push(ge),Fe=ie;break}else if(y[ie]===null){y[ie]=ge,Fe=ie;break}if(Fe===-1)break}const xe=E[Fe];xe&&xe.connect(ge)}}const z=new H,K=new H;function J($,j,ge){z.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);const Fe=z.distanceTo(K),xe=j.projectionMatrix.elements,ie=ge.projectionMatrix.elements,Pe=xe[14]/(xe[10]-1),ve=xe[14]/(xe[10]+1),re=(xe[9]+1)/xe[5],ye=(xe[9]-1)/xe[5],Re=(xe[8]-1)/xe[0],Ie=(ie[8]+1)/ie[0],Ae=Pe*Re,Ve=Pe*Ie,Be=Fe/(-Re+Ie),We=Be*-Re;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(Be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=Pe+Be,ft=ve+Be,$e=Ae-We,T=Ve+(Fe-We),g=re*ve/ft*L,O=ye*ve/ft*L;$.projectionMatrix.makePerspective($e,T,g,O,L,ft),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function be($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let j=$.near,ge=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),G.near=F.near=R.near=j,G.far=F.far=R.far=ge,(C!==G.near||N!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),C=G.near,N=G.far),G.layers.mask=$.layers.mask|6,R.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;const Fe=$.parent,xe=G.cameras;be(G,Fe);for(let ie=0;ie<xe.length;ie++)be(xe[ie],Fe);xe.length===2?J(G,R,F):G.projectionMatrix.copy(R.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),ue($,G,Fe)};function ue($,j,ge){ge===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ji*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function($){return d[$]};let et=null;function qe($,j){if(u=j.getViewerPose(c||a),_=j,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;ge.length!==G.cameras.length&&(G.cameras.length=0,Fe=!0);for(let ve=0;ve<ge.length;ve++){const re=ge[ve];let ye=null;if(p!==null)ye=p.getViewport(re);else{const Ie=f.getViewSubImage(h,re);ye=Ie.viewport,ve===0&&(e.setRenderTargetTextures(S,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(S))}let Re=B[ve];Re===void 0&&(Re=new Ht,Re.layers.enable(ve),Re.viewport=new dt,B[ve]=Re),Re.matrix.fromArray(re.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(re.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ye.x,ye.y,ye.width,ye.height),ve===0&&(G.matrix.copy(Re.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Fe===!0&&G.cameras.push(Re)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const ve=f.getDepthInformation(ge[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,s.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let ve=0;ve<ge.length;ve++){const re=ge[ve].camera;if(re){let ye=d[re];ye||(ye=new ec,d[re]=ye);const Re=f.getCameraImage(re);ye.sourceTexture=Re}}}}for(let ge=0;ge<E.length;ge++){const Fe=y[ge],xe=E[ge];Fe!==null&&xe!==void 0&&xe.update(Fe,j,c||a)}et&&et($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const Je=new rc;Je.setAnimationLoop(qe),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}const Eg=new ut,dc=new Ge;dc.set(-1,0,0,0,1,0,0,0,1);function Tg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,tc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,P,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,P):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),P=A.envMap,S=A.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(S)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dc),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,P){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=P*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function c(S,E){let y=s[S.id];y===void 0&&(m(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",A));const w=E.program;n.updateUBOMapping(S,w);const x=e.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){const E=f();S.__bindingPointIndex=E;const y=i.createBuffer(),w=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=s[S.id],y=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,b=y.length;x<b;x++){const R=y[x];if(Array.isArray(R))for(let F=0,B=R.length;F<B;F++)p(R[F],x,F,w);else p(R,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,y,w){if(M(S,E,y,w)===!0){const x=S.__offset,b=S.value;if(Array.isArray(b)){let R=0;for(let F=0;F<b.length;F++){const B=b[F],G=d(B);_(B,S.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function _(S,E,y){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,y)}function M(S,E,y,w){const x=S.value,b=E+"_"+y;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{const R=w[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(S){const E=S.uniforms;let y=0;const w=16;for(let b=0,R=E.length;b<R;b++){const F=Array.isArray(E[b])?E[b]:[E[b]];for(let B=0,G=F.length;B<G;B++){const C=F[B],N=Array.isArray(C.value)?C.value:[C.value];for(let W=0,I=N.length;W<I;W++){const Y=N[W],z=d(Y),K=y%w,J=K%z.boundary,be=K+J;y+=J,be!==0&&w-be<z.storage&&(y+=w-be),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=z.storage}}}const x=y%w;return x>0&&(y+=w-x),S.__size=y,S.__cache={},this}function d(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),E}function A(S){const E=S.target;E.removeEventListener("dispose",A);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function P(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let on=null;function wg(){return on===null&&(on=new Ql(Ag,16,16,jn,dn),on.name="DFG_LUT",on.minFilter=At,on.magFilter=At,on.wrapS=En,on.wrapT=En,on.generateMipmaps=!1,on.needsUpdate=!0),on}class Rg{constructor(e={}){const{canvas:t=Eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=kt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=p,m=new Set([Oa,Fa,Na]),d=new Set([kt,un,Ki,Zi,La,Ia]),A=new Uint32Array(4),P=new Int32Array(4),S=new H;let E=null,y=null;const w=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let F=!1,B=null,G=null,C=null,N=null;this._outputColorSpace=Pt;let W=0,I=0,Y=null,z=-1,K=null;const J=new dt,be=new dt;let ue=null;const et=new ke(0);let qe=0,Je=t.width,$=t.height,j=1,ge=null,Fe=null;const xe=new dt(0,0,Je,$),ie=new dt(0,0,Je,$);let Pe=!1;const ve=new Va;let re=!1,ye=!1;const Re=new ut,Ie=new H,Ae=new dt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function We(){return Y===null?j:1}let L=n;function ft(v,D){return t.getContext(v,D)}let $e,T,g,O,X,Z,se,ae,Q,te,oe,De,de,le,Le,Ne,He,U,ce,ee,he,_e,ne;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),L===null){const D="webgl2";if(L=ft(D,v),L===null)throw ft(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(v){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),tt("WebGLRenderer: "+v.message),v}function Ue(){$e=new wp(L),$e.init(),he=new xg(L,$e),T=new _p(L,$e,e,he),g=new gg(L,$e),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=L.createFramebuffer(),C=L.createFramebuffer(),N=L.createFramebuffer(),O=new Pp(L),X=new ng,Z=new _g(L,$e,g,X,T,he,O),se=new Ap(R),ae=new Du(L),_e=new mp(L,ae),Q=new Rp(L,ae,O,_e),te=new Lp(L,Q,ae,_e,O),U=new Dp(L,T,Z),Le=new xp(X),oe=new tg(R,se,$e,T,_e,Le),De=new Tg(R,X),de=new sg,le=new hg($e),He=new pp(R,se,g,te,_,l),Ne=new mg(R,te,T),ne=new bg(L,O,T,g),ce=new gp(L,$e,O),ee=new Cp(L,$e,O),O.programs=oe.programs,R.capabilities=T,R.extensions=$e,R.properties=X,R.renderLists=de,R.shadowMap=Ne,R.state=g,R.info=O}M!==kt&&(b=new Up(M,t.width,t.height,o,s,r));const we=new yg(R,L);this.xr=we,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(Je,$,!1))},this.getSize=function(v){return v.set(Je,$)},this.setSize=function(v,D,q=!0){if(we.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=v,$=D,t.width=Math.floor(v*j),t.height=Math.floor(D*j),q===!0&&(t.style.width=v+"px",t.style.height=D+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Je*j,$*j).floor()},this.setDrawingBufferSize=function(v,D,q){Je=v,$=D,j=q,t.width=Math.floor(v*q),t.height=Math.floor(D*q),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(M===kt){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(J)},this.getViewport=function(v){return v.copy(xe)},this.setViewport=function(v,D,q,k){v.isVector4?xe.set(v.x,v.y,v.z,v.w):xe.set(v,D,q,k),g.viewport(J.copy(xe).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(ie)},this.setScissor=function(v,D,q,k){v.isVector4?ie.set(v.x,v.y,v.z,v.w):ie.set(v,D,q,k),g.scissor(be.copy(ie).multiplyScalar(j).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(v){g.setScissorTest(Pe=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){Fe=v},this.getClearColor=function(v){return v.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,q=!0){let k=0;if(v){let V=!1;if(Y!==null){const me=Y.texture.format;V=m.has(me)}if(V){const me=Y.texture.type,Se=d.has(me),pe=He.getClearColor(),Ee=He.getClearAlpha(),Ce=pe.r,Xe=pe.g,Ze=pe.b;Se?(A[0]=Ce,A[1]=Xe,A[2]=Ze,A[3]=Ee,L.clearBufferuiv(L.COLOR,0,A)):(P[0]=Ce,P[1]=Xe,P[2]=Ze,P[3]=Ee,L.clearBufferiv(L.COLOR,0,P))}else k|=L.COLOR_BUFFER_BIT}D&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),He.dispose(),de.dispose(),le.dispose(),X.dispose(),se.dispose(),te.dispose(),_e.dispose(),ne.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",ja),we.removeEventListener("sessionend",eo),Hn.stop()};function lt(v){v.preventDefault(),bo("WebGLRenderer: Context Lost."),F=!0}function nt(){bo("WebGLRenderer: Context Restored."),F=!1;const v=O.autoReset,D=Ne.enabled,q=Ne.autoUpdate,k=Ne.needsUpdate,V=Ne.type;Ue(),O.autoReset=v,Ne.enabled=D,Ne.autoUpdate=q,Ne.needsUpdate=k,Ne.type=V}function Kt(v){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function sn(v){const D=v.target;D.removeEventListener("dispose",sn),_c(D)}function _c(v){xc(v),X.remove(v)}function xc(v){const D=X.get(v).programs;D!==void 0&&(D.forEach(function(q){oe.releaseProgram(q)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,q,k,V,me){D===null&&(D=Ve);const Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=Sc(v,D,q,k,V);g.setMaterial(k,Se);let Ee=q.index,Ce=1;if(k.wireframe===!0){if(Ee=Q.getWireframeAttribute(q),Ee===void 0)return;Ce=2}const Xe=q.drawRange,Ze=q.attributes.position;let Te=Xe.start*Ce,it=(Xe.start+Xe.count)*Ce;me!==null&&(Te=Math.max(Te,me.start*Ce),it=Math.min(it,(me.start+me.count)*Ce)),Ee!==null?(Te=Math.max(Te,0),it=Math.min(it,Ee.count)):Ze!=null&&(Te=Math.max(Te,0),it=Math.min(it,Ze.count));const mt=it-Te;if(mt<0||mt===1/0)return;_e.setup(V,k,pe,q,Ee);let ht,ot=ce;if(Ee!==null&&(ht=ae.get(Ee),ot=ee,ot.setIndex(ht)),V.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*We()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(V.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),g.setLineWidth(Et*We()),V.isLineSegments?ot.setMode(L.LINES):V.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else V.isPoints?ot.setMode(L.POINTS):V.isSprite&&ot.setMode(L.TRIANGLES);if(V.isBatchedMesh)if($e.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Et=V._multiDrawStarts,Me=V._multiDrawCounts,wt=V._multiDrawCount,je=Ee?ae.get(Ee).bytesPerElement:1,Vt=X.get(k).currentProgram.getUniforms();for(let rn=0;rn<wt;rn++)Vt.setValue(L,"_gl_DrawID",rn),ot.render(Et[rn]/je,Me[rn])}else if(V.isInstancedMesh)ot.renderInstances(Te,mt,V.count);else if(q.isInstancedBufferGeometry){const Et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Et);ot.renderInstances(Te,mt,Me)}else ot.render(Te,mt)};function Qa(v,D,q,k){B!==null&&v.isNodeMaterial&&B.setObject(k,v),re===!0&&Le.setState(v,q,!1),v.transparent===!0&&v.side===Sn&&v.forceSinglePass===!1?(v.side=Dt,v.needsUpdate=!0,ss(v,D,k),v.side=Jn,v.needsUpdate=!0,ss(v,D,k),v.side=Sn):ss(v,D,k)}this.compile=function(v,D,q=null){q===null&&(q=v),B!==null&&B.renderStart(v,D,q),y=le.get(q),y.init(D),x.push(y),q.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),v!==q&&v.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights(),B!==null&&B.updateLights(y.state.lightsArray),ye=this.localClippingEnabled,re=Le.init(this.clippingPlanes,ye),re===!0&&Le.setGlobalState(this.clippingPlanes,D),B!==null&&Ne.render(y.state.shadowsArray,q,D);const k=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const pe=me[Se];Qa(pe,q,D,V),k.add(pe)}else Qa(me,q,D,V),k.add(me)}),y=x.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(v,D,q=null){const k=this.compile(v,D,q);return new Promise(V=>{function me(){if(k.forEach(function(Se){const Ee=X.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&k.delete(Se)}),k.size===0){V(v);return}setTimeout(me,10)}$e.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let er=null;function vc(v){er&&er(v)}function ja(){Hn.stop()}function eo(){Hn.start()}const Hn=new rc;Hn.setAnimationLoop(vc),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(v){er=v,we.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},we.addEventListener("sessionstart",ja),we.addEventListener("sessionend",eo),this.render=function(v,D){if(window.__galleryCaptureScene)return;if(D!==void 0&&D.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(v,D);const q=we.enabled===!0&&we.isPresenting===!0,k=b!==null&&(Y===null||q)&&b.begin(R,Y);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(D),D=we.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,D,Y),y=le.get(v,x.length),y.init(D),y.state.textureUnits=Z.getTextureUnits(),x.push(y),Re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ve.setFromProjectionMatrix(Re,cn,D.reversedDepth),ye=this.localClippingEnabled,re=Le.init(this.clippingPlanes,ye),E=de.get(v,w.length),E.init(),w.push(E),we.enabled===!0&&we.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&tr(Se,D,-1/0,R.sortObjects)}tr(v,D,0,R.sortObjects),E.finish(),B!==null&&B.updateLights(y.state.lightsArray),R.sortObjects===!0&&E.sort(ge,Fe),Be=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Be&&He.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Le.beginShadows();const V=y.state.shadowsArray;if(Ne.render(V,v,D),re===!0&&Le.endShadows(),(k&&b.hasRenderPass())===!1){const Se=E.opaque,pe=E.transmissive;if(y.setupLights(),D.isArrayCamera){const Ee=D.cameras;if(pe.length>0)for(let Ce=0,Xe=Ee.length;Ce<Xe;Ce++){const Ze=Ee[Ce];no(Se,pe,v,Ze)}Be&&He.render(v);for(let Ce=0,Xe=Ee.length;Ce<Xe;Ce++){const Ze=Ee[Ce];to(E,v,Ze,Ze.viewport)}}else pe.length>0&&no(Se,pe,v,D),Be&&He.render(v),to(E,v,D)}Y!==null&&I===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),k&&b.end(R),v.isScene===!0&&v.onAfterRender(R,v,D),_e.resetDefaultState(),z=-1,K=null,x.pop(),x.length>0?(y=x[x.length-1],Z.setTextureUnits(y.state.textureUnits),re===!0&&Le.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,B!==null&&B.renderEnd()};function tr(v,D,q,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)y.pushLightProbeGrid(v);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ve)){k&&Ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Re);const Se=te.update(v),pe=v.material;pe.visible&&E.push(v,Se,pe,q,Ae.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ve))){const Se=te.update(v),pe=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ae.copy(v.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ae.copy(Se.boundingSphere.center)),Ae.applyMatrix4(v.matrixWorld).applyMatrix4(Re)),Array.isArray(pe)){const Ee=Se.groups;for(let Ce=0,Xe=Ee.length;Ce<Xe;Ce++){const Ze=Ee[Ce],Te=pe[Ze.materialIndex];Te&&Te.visible&&E.push(v,Se,Te,q,Ae.z,Ze,D)}}else pe.visible&&E.push(v,Se,pe,q,Ae.z,null,D)}}const me=v.children;for(let Se=0,pe=me.length;Se<pe;Se++)tr(me[Se],D,q,k)}function to(v,D,q,k){const{opaque:V,transmissive:me,transparent:Se}=v;y.setupLightsView(q),re===!0&&Le.setGlobalState(R.clippingPlanes,q),k&&g.viewport(J.copy(k)),V.length>0&&is(V,D,q),me.length>0&&is(me,D,q),Se.length>0&&is(Se,D,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function no(v,D,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){const Te=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new tn(1,1,{generateMipmaps:!0,type:Te?dn:kt,minFilter:Zn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const me=y.state.transmissionRenderTarget[k.id],Se=k.viewport||J;me.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),Ee=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(et),qe=R.getClearAlpha(),qe<1&&R.setClearColor(16777215,.5),R.clear(),Be&&He.render(q);const Xe=R.toneMapping;R.toneMapping=hn;const Ze=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),re===!0&&Le.setGlobalState(R.clippingPlanes,k),is(v,q,k),Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let it=0,mt=D.length;it<mt;it++){const ht=D[it],{object:ot,geometry:Et,material:Me,group:wt}=ht;if(Me.side===Sn&&ot.layers.test(k.layers)){const je=Me.side;Me.side=Dt,Me.needsUpdate=!0,io(ot,q,k,Et,Me,wt),Me.side=je,Me.needsUpdate=!0,Te=!0}}Te===!0&&(Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me))}R.setRenderTarget(pe,Ee,Ce),R.setClearColor(et,qe),Ze!==void 0&&(k.viewport=Ze),R.toneMapping=Xe}function is(v,D,q){const k=D.isScene===!0?D.overrideMaterial:null;for(let V=0,me=v.length;V<me;V++){const Se=v[V],{object:pe,geometry:Ee,group:Ce}=Se;let Xe=Se.material;Xe.allowOverride===!0&&k!==null&&(Xe=k),pe.layers.test(q.layers)&&io(pe,D,q,Ee,Xe,Ce)}}function io(v,D,q,k,V,me){B!==null&&V.isNodeMaterial&&B.setObject(v,V),v.onBeforeRender(R,D,q,k,V,me),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(R,D,q,k,v,me),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=Dt,V.needsUpdate=!0,R.renderBufferDirect(q,D,k,V,v,me),V.side=Jn,V.needsUpdate=!0,R.renderBufferDirect(q,D,k,V,v,me),V.side=Sn):R.renderBufferDirect(q,D,k,V,v,me),v.onAfterRender(R,D,q,k,V,me)}function ss(v,D,q){D.isScene!==!0&&(D=Ve);const k=X.get(v),V=y.state.lights,me=y.state.shadowsArray,Se=V.state.version,pe=oe.getParameters(v,V.state,me,D,q,y.state.lightProbeGridArray),Ee=oe.getProgramCacheKey(pe);let Ce=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;const Xe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=se.get(v.envMap||k.environment,Xe),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",sn),Ce=new Map,k.programs=Ce);let Ze=Ce.get(Ee);if(Ze!==void 0){if(k.currentProgram===Ze&&k.lightsStateVersion===Se)return ro(v,pe),Ze}else pe.uniforms=oe.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,q,pe),v.onBeforeCompile(pe,R),Ze=oe.acquireProgram(pe,Ee),Ce.set(Ee,Ze),k.uniforms=pe.uniforms;const Te=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=Le.uniform),ro(v,pe),k.needsLights=Ec(v),k.lightsStateVersion=Se,k.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.sunLights.value=V.state.sun,Te.sunLightShadows.value=V.state.sunShadow,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.sunShadowMatrix.value=V.state.sunShadowMatrix,Te.sunShadowCascade.value=V.state.sunShadowCascade,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=y.state.lightProbeGridArray.length>0,k.currentProgram=Ze,k.uniformsList=null,Ze}function so(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Bs.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function ro(v,D){const q=X.get(v);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Mc(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let q=0,k=v.length;q<k;q++){const V=v[q];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function Sc(v,D,q,k,V){D.isScene!==!0&&(D=Ve),Z.resetTextureUnits();const me=D.fog,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,pe=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qe.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ce=se.get(k.envMap||Se,Ee),Xe=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,mt=!!q.morphAttributes.color;let ht=hn;k.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ht=R.toneMapping);const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=ot!==void 0?ot.length:0,Me=X.get(k),wt=y.state.lights;if(re===!0&&(ye===!0||v!==K)){const ct=v===K&&k.id===z;Le.setState(k,v,ct)}let je=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==wt.state.version||Me.outputColorSpace!==pe||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==Ce||k.fog===!0&&Me.fog!==me||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==Xe||Me.vertexTangents!==Ze||Me.morphTargets!==Te||Me.morphNormals!==it||Me.morphColors!==mt||Me.toneMapping!==ht||Me.morphTargetsCount!==Et||!!Me.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,Me.__version=k.version);let Vt=Me.currentProgram;je===!0&&(Vt=ss(k,D,V),B&&k.isNodeMaterial&&B.onUpdateProgram(k,Vt,Me));let rn=!1,wn=!1,ni=!1;const at=Vt.getUniforms(),pt=Me.uniforms;if(g.useProgram(Vt.program)&&(rn=!0,wn=!0,ni=!0),k.id!==z&&(z=k.id,wn=!0),Me.needsLights){const ct=Mc(y.state.lightProbeGridArray,V);Me.lightProbeGrid!==ct&&(Me.lightProbeGrid=ct,wn=!0)}if(rn||K!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",v.projectionMatrix),at.setValue(L,"viewMatrix",v.matrixWorldInverse);const Cn=at.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,Ie.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,wn=!0,ni=!0)}if(Me.needsLights&&(wt.state.sunShadowMap.length>0&&at.setValue(L,"sunShadowMap",wt.state.sunShadowMap,Z),wt.state.directionalShadowMap.length>0&&at.setValue(L,"directionalShadowMap",wt.state.directionalShadowMap,Z),wt.state.spotShadowMap.length>0&&at.setValue(L,"spotShadowMap",wt.state.spotShadowMap,Z),wt.state.pointShadowMap.length>0&&at.setValue(L,"pointShadowMap",wt.state.pointShadowMap,Z)),V.isSkinnedMesh){at.setOptional(L,V,"bindMatrix"),at.setOptional(L,V,"bindMatrixInverse");const ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(L,"boneTexture",ct.boneTexture,Z))}V.isBatchedMesh&&(at.setOptional(L,V,"batchingTexture"),at.setValue(L,"batchingTexture",V._matricesTexture,Z),at.setOptional(L,V,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",V._indirectTexture,Z),at.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",V._colorsTexture,Z));const Rn=q.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&U.update(V,q,Vt),(wn||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,at.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(pt.envMapIntensity.value=D.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=wg()),wn){if(at.setValue(L,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&yc(pt,ni),me&&k.fog===!0&&De.refreshFogUniforms(pt,me),De.refreshMaterialUniforms(pt,k,j,$,y.state.transmissionRenderTarget[v.id]),Me.needsLights&&Me.lightProbeGrid){const ct=Me.lightProbeGrid;pt.probesSH.value=ct.texture,pt.probesMin.value.copy(ct.boundingBox.min),pt.probesMax.value.copy(ct.boundingBox.max),pt.probesResolution.value.copy(ct.resolution)}Bs.upload(L,so(Me),pt,Z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Bs.upload(L,so(Me),pt,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(L,"center",V.center),at.setValue(L,"modelViewMatrix",V.modelViewMatrix),at.setValue(L,"normalMatrix",V.normalMatrix),at.setValue(L,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const ct=k.uniformsGroups;for(let Cn=0,ii=ct.length;Cn<ii;Cn++){const oo=ct[Cn];ne.update(oo,Vt),ne.bind(oo,Vt)}}return Vt}function yc(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Ec(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(v,D,q){const k=X.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),X.get(v.texture).__webglTexture=D,X.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const q=X.get(v);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,q=0){Y=v,W=D,I=q;let k=null,V=!1,me=!1;if(v){const pe=X.get(v);if(pe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),J.copy(v.viewport),be.copy(v.scissor),ue=v.scissorTest,g.viewport(J),g.scissor(be),g.setScissorTest(ue),z=-1;return}else if(pe.__webglFramebuffer===void 0)Z.setupRenderTarget(v);else if(pe.__hasExternalTextures)Z.rebindTextures(v,X.get(v.texture).__webglTexture,X.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Xe=v.depthTexture;if(pe.__boundDepthTexture!==Xe){if(Xe!==null&&X.has(Xe)&&(v.width!==Xe.image.width||v.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(v)}}const Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Ce=X.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?k=Ce[D][q]:k=Ce[D],V=!0):v.samples>0&&Z.useMultisampledRTT(v)===!1?k=X.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[q]:k=Ce,J.copy(v.viewport),be.copy(v.scissor),ue=v.scissorTest}else J.copy(xe).multiplyScalar(j).floor(),be.copy(ie).multiplyScalar(j).floor(),ue=Pe;if(q!==0&&(k=G),g.bindFramebuffer(L.FRAMEBUFFER,k)&&g.drawBuffers(v,k),g.viewport(J),g.scissor(be),g.setScissorTest(ue),V){const pe=X.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,q)}else if(me){const pe=D;for(let Ee=0;Ee<v.textures.length;Ee++){const Ce=X.get(v.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,q,pe)}}else if(v!==null&&q!==0){const pe=X.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,q)}z=-1};function ao(v){const D=X.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=T.textureFormatReadable(v.format),D.__typeReadable=T.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,q,k,V,me,Se,pe=0){if(!(v&&v.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){g.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ce=v.textures[pe],Xe=Ce.format,Ze=Ce.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe);const Te=ao(Ce);if(Te.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&q>=0&&q<=v.height-V&&L.readPixels(D,q,k,V,he.convert(Xe),he.convert(Ze),me)}finally{const Ce=Y!==null?X.get(Y).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,D,q,k,V,me,Se,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(D>=0&&D<=v.width-k&&q>=0&&q<=v.height-V){g.bindFramebuffer(L.FRAMEBUFFER,Ee);const Ce=v.textures[pe],Xe=Ce.format,Ze=Ce.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe);const Te=ao(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(D,q,k,V,he.convert(Xe),he.convert(Ze),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const mt=Y!==null?X.get(Y).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,mt);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Th(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(it),L.deleteSync(ht),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,q=0){const k=Math.pow(2,-q),V=Math.floor(v.image.width*k),me=Math.floor(v.image.height*k),Se=D!==null?D.x:0,pe=D!==null?D.y:0;Z.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Se,pe,V,me),g.unbindTexture()},this.copyTextureToTexture=function(v,D,q=null,k=null,V=0,me=0){let Se,pe,Ee,Ce,Xe,Ze,Te,it,mt;const ht=v.isCompressedTexture?v.mipmaps[me]:v.image;if(q!==null)Se=q.max.x-q.min.x,pe=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,Xe=q.min.y,Ze=q.isBox3?q.min.z:0;else{const pt=Math.pow(2,-V);Se=Math.floor(ht.width*pt),pe=Math.floor(ht.height*pt),v.isDataArrayTexture?Ee=ht.depth:v.isData3DTexture?Ee=Math.floor(ht.depth*pt):Ee=1,Ce=0,Xe=0,Ze=0}k!==null?(Te=k.x,it=k.y,mt=k.z):(Te=0,it=0,mt=0);const ot=he.convert(D.format),Et=he.convert(D.type);let Me;D.isData3DTexture?(Z.setTexture3D(D,0),Me=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),Me=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const wt=g.getParameter(L.UNPACK_ROW_LENGTH),je=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=g.getParameter(L.UNPACK_SKIP_PIXELS),rn=g.getParameter(L.UNPACK_SKIP_ROWS),wn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const ni=v.isDataArrayTexture||v.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const pt=X.get(v),Rn=X.get(D),ct=X.get(pt.__renderTarget),Cn=X.get(Rn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,ct.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let ii=0;ii<Ee;ii++)ni&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(v).__webglTexture,V,Ze+ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(D).__webglTexture,me,mt+ii)),L.blitFramebuffer(Ce,Xe,Se,pe,Te,it,Se,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||X.has(v)){const pt=X.get(v),Rn=X.get(D);g.bindFramebuffer(L.READ_FRAMEBUFFER,C),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,N);for(let ct=0;ct<Ee;ct++)ni?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,V,Ze+ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,V),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,me,mt+ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,me),V!==0?L.blitFramebuffer(Ce,Xe,Se,pe,Te,it,Se,pe,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(Me,me,Te,it,mt+ct,Ce,Xe,Se,pe):L.copyTexSubImage2D(Me,me,Te,it,Ce,Xe,Se,pe);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Me,me,Te,it,mt,Se,pe,Ee,ot,Et,ht.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,me,Te,it,mt,Se,pe,Ee,ot,ht.data):L.texSubImage3D(Me,me,Te,it,mt,Se,pe,Ee,ot,Et,ht):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,Te,it,Se,pe,ot,Et,ht.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,Te,it,ht.width,ht.height,ot,ht.data):L.texSubImage2D(L.TEXTURE_2D,me,Te,it,Se,pe,ot,Et,ht);g.pixelStorei(L.UNPACK_ROW_LENGTH,wt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),g.pixelStorei(L.UNPACK_SKIP_ROWS,rn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,wn),me===0&&D.generateMipmaps&&L.generateMipmap(Me),g.unbindTexture()},this.initRenderTarget=function(v){X.get(v).__webglFramebuffer===void 0&&Z.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Z.setTextureCube(v,0):v.isData3DTexture?Z.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Z.setTexture2DArray(v,0):Z.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){W=0,I=0,Y=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Ml={type:"change"},Xa={type:"start"},fc={type:"end"},Ps=new Jl,Sl=new Mn,Cg=Math.cos(70*Ta.DEG2RAD),_t=new H,Ut=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nr=1e-6;class Pg extends Cu{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Bn,this._lastTargetPosition=new H,this._quat=new Bn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zo,this._sphericalDelta=new Zo,this._scale=1,this._panOffset=new H,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new H,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lg.bind(this),this._onPointerDown=Dg.bind(this),this._onPointerUp=Ig.bind(this),this._onContextMenu=Gg.bind(this),this._onMouseWheel=Fg.bind(this),this._onKeyDown=Og.bind(this),this._onTouchStart=Bg.bind(this),this._onTouchMove=zg.bind(this),this._onMouseDown=Ug.bind(this),this._onMouseMove=Ng.bind(this),this._interceptControlDown=Hg.bind(this),this._interceptControlUp=kg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ml),this.update(),this.state=rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ut:n>Math.PI&&(n-=Ut),s<-Math.PI?s+=Ut:s>Math.PI&&(s-=Ut),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_t.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ps.origin.copy(this.object.position),Ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ps.direction))<Cg?this.object.lookAt(this.target):(Sl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ps.intersectPlane(Sl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nr||this._lastTargetPosition.distanceToSquared(this.target)>Nr?(this.dispatchEvent(Ml),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_t.copy(s).sub(this.target);let r=_t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Dg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Lg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ig(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fc),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ug(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Xa)}function Ng(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fg(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(Xa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fc))}function Og(i){this.enabled!==!1&&this._handleKeyDown(i)}function Bg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Xa)}function zg(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function Gg(i){this.enabled!==!1&&i.preventDefault()}function Hg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Xt={morning:{label:"晨",skyTop:8365784,skyBottom:16243120,fog:14274496,fogNear:210,fogFar:880,sunColor:16767400,sunIntensity:2,sunAzimuth:108,sunElevation:17,hemiSky:12571886,hemiGround:7035460,hemiIntensity:.85,ambient:.16,exposure:1,lantern:.28,sunDisc:16770749},noon:{label:"午",skyTop:5214166,skyBottom:13230834,fog:13031654,fogNear:260,fogFar:1e3,sunColor:16774368,sunIntensity:2.8,sunAzimuth:186,sunElevation:62,hemiSky:14084351,hemiGround:8022866,hemiIntensity:1,ambient:.2,exposure:.95,lantern:0,sunDisc:16776690},dusk:{label:"昏",skyTop:2899814,skyBottom:15769690,fog:9071194,fogNear:200,fogFar:900,sunColor:16756838,sunIntensity:2.1,sunAzimuth:292,sunElevation:11,hemiSky:9414864,hemiGround:6965812,hemiIntensity:.72,ambient:.2,exposure:1.08,lantern:.85,sunDisc:16763274},night:{label:"夜",skyTop:462108,skyBottom:1911622,fog:1318193,fogNear:180,fogFar:820,sunColor:10467048,sunIntensity:.42,sunAzimuth:318,sunElevation:38,hemiSky:3360107,hemiGround:1776162,hemiIntensity:.5,ambient:.22,exposure:1.25,lantern:1.9,sunDisc:14674431}},Vg=["morning","noon","dusk","night"],Nt=i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255],Yt=(i,e,t)=>i+(e-i)*t,Kn=(i,e,t)=>[Yt(i[0],e[0],t),Yt(i[1],e[1],t),Yt(i[2],e[2],t)];function Wg(i,e,t){const n=Xt[i]||Xt.dusk,s=Xt[e]||n,r=Math.min(1,Math.max(0,t));return{label:r<.5?n.label:s.label,skyTop:Kn(Nt(n.skyTop),Nt(s.skyTop),r),skyBottom:Kn(Nt(n.skyBottom),Nt(s.skyBottom),r),fog:Kn(Nt(n.fog),Nt(s.fog),r),fogNear:Yt(n.fogNear,s.fogNear,r),fogFar:Yt(n.fogFar,s.fogFar,r),sunColor:Kn(Nt(n.sunColor),Nt(s.sunColor),r),sunIntensity:Yt(n.sunIntensity,s.sunIntensity,r),sunAzimuth:Yt(n.sunAzimuth,s.sunAzimuth,r),sunElevation:Yt(n.sunElevation,s.sunElevation,r),hemiSky:Kn(Nt(n.hemiSky),Nt(s.hemiSky),r),hemiGround:Kn(Nt(n.hemiGround),Nt(s.hemiGround),r),hemiIntensity:Yt(n.hemiIntensity,s.hemiIntensity,r),ambient:Yt(n.ambient,s.ambient,r),exposure:Yt(n.exposure,s.exposure,r),lantern:Yt(n.lantern,s.lantern,r),sunDisc:Kn(Nt(n.sunDisc),Nt(s.sunDisc),r)}}function yl(i,e){const t=i*Math.PI/180,n=e*Math.PI/180,s=Math.cos(n);return[Math.sin(t)*s,Math.sin(n),Math.cos(t)*s]}function Nn(i,e){return Array.isArray(e)?i.setRGB(e[0],e[1],e[2],Pt):i.setHex(e,Pt)}function Xg(i){const{hex:e,style:t}=Ai[i],n=Tc[t],s=new nc({color:e,roughness:n.roughness,metalness:n.metalness});return n.transparent&&(s.transparent=!0,s.opacity=n.opacity,s.depthWrite=!0),n.emissive&&(s.emissive=new ke(e),s.emissiveIntensity=0,s.toneMapped=!0),s.name=i,s}function Yg(){const i=new es(900,24,16),e=new Float32Array(i.attributes.position.count*3);i.setAttribute("color",new nn(e,3));const t=new Qi({vertexColors:!0,side:Dt,fog:!1,depthWrite:!1}),n=new It(i,t);return n.frustumCulled=!1,n.renderOrder=-10,n}function qg(i,e,t){const n=i.geometry.attributes.position,s=i.geometry.attributes.color,r=Nn(new ke,e),a=Nn(new ke,t),o=new ke;for(let l=0;l<n.count;l++){const c=Ta.clamp(n.getY(l)/900,-1,1),u=Ta.clamp(.5+c*2.2,0,1);o.copy(a).lerp(r,u),s.setXYZ(l,o.r,o.g,o.b)}s.needsUpdate=!0}function Kg({container:i,data:e}){const t=new Rg({antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(i.clientWidth||window.innerWidth,i.clientHeight||window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Rl,t.shadowMap.autoUpdate=!1,t.toneMapping=Pa,t.toneMappingExposure=Xt.dusk.exposure,t.outputColorSpace=Pt,i.appendChild(t.domElement);const n=new tu;n.background=null;const s=new Ht(45,16/9,1,3e3);s.position.set(...e.camera.position),s.lookAt(...e.camera.target);const r=new Pg(s,t.domElement);r.target.set(...e.camera.target),r.enableDamping=!0,r.dampingFactor=.06,r.rotateSpeed=.62,r.zoomSpeed=.85,r.panSpeed=.7,r.minDistance=45,r.maxDistance=620,r.minPolarAngle=.12,r.maxPolarAngle=Math.PI*.495,r.autoRotate=!0,r.autoRotateSpeed=.28,r.update();const a=Yg();n.add(a);const o=new It(new es(26,20,14),new Qi({color:16770749,fog:!1,toneMapped:!1}));o.frustumCulled=!1,n.add(o);const l=new It(new es(64,20,14),new Qi({color:16767392,fog:!1,transparent:!0,opacity:.16,toneMapped:!1}));l.frustumCulled=!1,n.add(l),n.fog=new ka(Xt.dusk.fog,Xt.dusk.fogNear,Xt.dusk.fogFar);const c=e.bounds,u=c.xMax-c.xMin+14,f=c.zMax-c.zMin+14,h=new It(new ei(u,9,f),new nc({color:2828840,roughness:.95,metalness:0}));h.position.set((c.xMin+c.xMax)/2,-4.5,(c.zMin+c.zMax)/2),h.receiveShadow=!0,h.castShadow=!0,n.add(h);const p=new ei(1,1,1),_=new Map,M=[],m=[],d=new St,A=new ke;for(const[ie,Pe]of e.groups){const ve=Xg(ie);_.set(ie,ve);const re=new hu(p,ve,Pe.count);re.name=`voxels:${ie}`,re.castShadow=ie!=="water",re.receiveShadow=!0,re.frustumCulled=!1;const ye=Ai[ie].style,Re=ye==="ground"?.055:ye==="wall"?.035:ye==="foliage"?.08:0;for(let Ie=0;Ie<Pe.count;Ie++){const Ae=Pe.xs[Ie],Ve=Pe.ys[Ie],Be=Pe.zs[Ie];if(d.position.set(Ae,Ve+.5,Be),d.rotation.set(0,0,0),d.scale.set(1,1,1),d.updateMatrix(),re.setMatrixAt(Ie,d.matrix),Re>0){const We=1+(El(Ae,Ve,Be)-.5)*2*Re;A.setRGB(We,We,We),re.setColorAt(Ie,A)}}re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),re.computeBoundingSphere(),n.add(re),M.push(re),ye==="emissive"&&m.push(re)}const P=new Mu(Xt.dusk.hemiSky,Xt.dusk.hemiGround,.8);n.add(P);const S=new bu(16777215,.18);n.add(S);const E=new Tu(16777215,2.6);E.castShadow=!0,E.shadow.mapSize.set(2048,2048);const y=E.shadow.camera,w=Math.max(u,f)*.62;y.left=-w,y.right=w,y.top=w,y.bottom=-w,y.near=1,y.far=900,E.shadow.bias=-6e-4,E.shadow.normalBias=.09,n.add(E),n.add(E.target);const x=new H((c.xMin+c.xMax)/2,8,(c.zMin+c.zMax)/2),b=[{pos:[0,12,58],color:16757852,intensity:0},{pos:[0,14,-8],color:16757852,intensity:0},{pos:[0,26,-56],color:16763256,intensity:0}].map(ie=>{const Pe=new yu(ie.color,0,95,2);return Pe.position.set(...ie.pos),n.add(Pe),Pe});let R="dusk",F="dusk",B=1;const G=1.4;let C=0;function N(ie){qg(a,ie.skyTop,ie.skyBottom);const Pe=Nn(new ke,ie.fog);n.fog.color.copy(Pe),n.fog.near=ie.fogNear,n.fog.far=ie.fogFar,Nn(E.color,ie.sunColor),E.intensity=ie.sunIntensity;const ve=yl(ie.sunAzimuth,ie.sunElevation),re=Math.max(u,f)*1.5;E.position.set(x.x+ve[0]*re,x.y+ve[1]*re,x.z+ve[2]*re),E.target.position.copy(x),E.target.updateMatrixWorld(),Nn(o.material.color,ie.sunDisc),Nn(l.material.color,ie.sunDisc);const ye=yl(ie.sunAzimuth,ie.sunElevation);o.position.set(ye[0]*760,ye[1]*760,ye[2]*760),l.position.copy(o.position),l.material.opacity=.16*Math.max(.25,1-ie.sunElevation/70),Nn(P.color,ie.hemiSky),Nn(P.groundColor,ie.hemiGround),P.intensity=ie.hemiIntensity,S.intensity=ie.ambient,t.toneMappingExposure=ie.exposure;for(const Ie of m)Ie.material.emissiveIntensity=1.6*ie.lantern;for(const Ie of b)Ie.intensity=95*ie.lantern;t.shadowMap.needsUpdate=!0;const Re=(Ie,Ae)=>{if((Ae&&Ae.isColor?[Ae.r,Ae.g,Ae.b]:Array.isArray(Ae)?Ae:[Ae]).some(Be=>!Number.isFinite(Be)))throw new Error(`time-of-day produced an invalid colour for ${Ie}: ${JSON.stringify(Ae)}`)};Re("skyTop",ie.skyTop),Re("skyBottom",ie.skyBottom),Re("fog",n.fog.color),Re("sun",E.color),Re("hemi",P.color)}function W(ie,Pe=!1){return Xt[ie]?(R=F,F=ie,B=Pe?1:0,C=performance.now(),Pe&&N(Xt[ie]),!0):!1}const I=new Ru,Y=[];let z=0,K=0,J=0,be=0,ue=0;function et(ie){if(ie>0&&ie<1){Y.push(ie),Y.length>180&&Y.shift();const Pe=[...Y].sort((ve,re)=>ve-re);J=1/Pe[Math.floor(Pe.length*.5)],be=1/Pe[Math.max(0,Math.floor(Pe.length*.05))],ue=Y.length/Y.reduce((ve,re)=>ve+re,0)}}t.setAnimationLoop(()=>{const ie=Math.min(I.getDelta(),.1);if(z++,K+=ie,et(ie),B<1){const ye=performance.now();C===0&&(C=ye);const Re=Math.min(.5,(ye-C)/1e3);C=ye,B=Math.min(1,B+Re/G),N(Wg(R,F,B))}const Pe=K,ve=_.get("water");ve&&(ve.color.setHex(Ai.water.hex),ve.color.offsetHSL(0,0,Math.sin(Pe*.9)*.018),ve.opacity=.8+Math.sin(Pe*.7)*.05);const re=M.find(ye=>ye.name==="voxels:water");re&&(re.position.y=Math.sin(Pe*.8)*.05),r.update(),t.render(n,s),Fe()});function qe(){const ie=i.clientWidth||window.innerWidth,Pe=i.clientHeight||window.innerHeight;t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(ie,Pe,!1),s.aspect=ie/Math.max(1,Pe),s.updateProjectionMatrix(),t.shadowMap.needsUpdate=!0}window.addEventListener("resize",qe),qe();function Je({azimuthDeg:ie=0,elevationDeg:Pe=22,distance:ve=null}={}){const re=r.target.clone(),ye=ve??s.position.distanceTo(re),Re=ie*Math.PI/180,Ie=Pe*Math.PI/180;return s.position.set(re.x+Math.sin(Re)*Math.cos(Ie)*ye,re.y+Math.sin(Ie)*ye,re.z+Math.cos(Re)*Math.cos(Ie)*ye),s.lookAt(re),r.update(),{position:s.position.toArray(),target:re.toArray(),distance:ye}}function $(ie=3e3){return new Promise(Pe=>{const ve=[];let re=performance.now();const ye=re,Re=Ie=>{if(ve.push(Ie-re),re=Ie,Ie-ye<ie)requestAnimationFrame(Re);else{const Ae=ve.slice(1).sort((Be,We)=>Be-We);if(Ae.length===0){Pe({frames:0,elapsedMs:Math.round(Ie-ye),p50ms:null,p95ms:null,p50fps:0,p95fps:0,avgFps:0,pixelRatio:t.getPixelRatio(),drawingBuffer:[t.domElement.width,t.domElement.height]});return}const Ve=Be=>Ae[Math.min(Ae.length-1,Math.floor(Ae.length*Be))];Pe({frames:Ae.length,elapsedMs:Math.round(Ie-ye),p50ms:+Ve(.5).toFixed(2),p95ms:+Ve(.95).toFixed(2),p50fps:+(1e3/Ve(.5)).toFixed(1),p95fps:+(1e3/Ve(.95)).toFixed(1),avgFps:+(Ae.length/((Ie-ye)/1e3)).toFixed(1),pixelRatio:t.getPixelRatio(),drawingBuffer:[t.domElement.width,t.domElement.height]})}};requestAnimationFrame(Re)})}let j=null;function ge(){return new Promise(ie=>{j=ie})}function Fe(){if(!j)return;const ie=j;j=null;const Pe=t.getContext(),ve=t.domElement.width,re=t.domElement.height,ye=new Uint8Array(ve*re*4);Pe.readPixels(0,0,ve,re,Pe.RGBA,Pe.UNSIGNED_BYTE,ye);const Re=Math.max(1,Math.floor(Math.sqrt(ve*re/2e4)));let Ie=0,Ae=0,Ve=0,Be=255,We=0;const L=new Set;for(let ft=0;ft<re;ft+=Re)for(let $e=0;$e<ve;$e+=Re){const T=(ft*ve+$e)*4,g=ye[T],O=ye[T+1],X=ye[T+2],Z=.2126*g+.7152*O+.0722*X;Ae+=Z,Ie++,Z>6&&Ve++,Z<Be&&(Be=Z),Z>We&&(We=Z),L.size<2e5&&L.add(g>>2<<12|O>>2<<6|X>>2)}ie({sampled:Ie,buffer:[ve,re],meanLuma:+(Ae/Ie).toFixed(2),nonBlackRatio:+(Ve/Ie).toFixed(4),minLuma:+Be.toFixed(1),maxLuma:+We.toFixed(1),distinctColors:L.size})}function xe(){return{timeOfDay:F,blend:+B.toFixed(3),frames:z,elapsed:+K.toFixed(2),fps:{p50:+J.toFixed(1),p95:+be.toFixed(1),avg:+ue.toFixed(1)},render:{calls:t.info.render.calls,triangles:t.info.render.triangles,points:t.info.render.points,lines:t.info.render.lines},memory:{geometries:t.info.memory.geometries,textures:t.info.memory.textures},programs:t.info.programs?t.info.programs.length:null,pixelRatio:t.getPixelRatio(),canvas:[t.domElement.width,t.domElement.height],camera:{position:s.position.toArray(),target:r.target.toArray(),fov:s.fov,aspect:+s.aspect.toFixed(4)},voxels:e.voxelCount,meshes:M.length,webglVersion:t.capabilities.isWebGL2?2:1}}return N(Xt.dusk),{renderer:t,scene:n,camera:s,controls:r,data:e,meshes:M,materials:_,setTimeOfDay:W,setView:Je,getState:xe,measureFps:$,captureStats:ge,resize:qe,presets:Vg,isBlending:()=>B<1}}const Zg=document.getElementById("app"),$g=document.getElementById("stats"),Jg=document.getElementById("loading"),pc=Array.from(document.querySelectorAll("#tod button")),Qg=performance.now(),Bt=kc(),zt=Kg({container:Zg,data:Bt});let mc=!1;requestAnimationFrame(()=>{requestAnimationFrame(()=>{mc=!0,Jg.classList.add("hidden")})});function Ya(i){if(zt.setTimeOfDay(i))for(const e of pc)e.setAttribute("aria-pressed",String(e.dataset.tod===i))}for(const i of pc)i.addEventListener("click",()=>Ya(i.dataset.tod));window.addEventListener("keydown",i=>{const e={1:"morning",2:"noon",3:"dusk",4:"night"};e[i.key]&&Ya(e[i.key]),i.key===" "&&(i.preventDefault(),zt.controls.autoRotate=!zt.controls.autoRotate)});function gc(){const i=zt.getState();$g.innerHTML=`建筑 <b>${Bt.buildingStats.length}</b> 座 · 体素 <b>${Bt.voxelCount.toLocaleString("en-US")}</b> · 绘制调用 <b>${i.render.calls}</b> · 三角面 <b>${(i.render.triangles/1e3).toFixed(0)}k</b><br />时段 <b>${i.timeOfDay}</b> · FPS <b>${i.fps.p50||"—"}</b>`}gc();setInterval(gc,500);window.__scene={app:zt,data:Bt,renderer:zt.renderer,scene:zt.scene,camera:zt.camera,controls:zt.controls,setTimeOfDay:Ya,setView:zt.setView,getState:zt.getState,measureFps:zt.measureFps,captureStats:zt.captureStats,isReady:()=>mc,buildMs:Bt.buildMs,startupMs:Math.round(performance.now()-Qg),voxelCount:Bt.voxelCount,buildingCount:Bt.buildingStats.length,drawCalls:Bt.drawCalls,paletteKeysUsed:Bt.paletteKeysUsed,symmetry:Bt.symmetry,colorSymmetry:Bt.colorSymmetry,archBounds:Bt.archBounds,cameraFit:Bt.camera};
