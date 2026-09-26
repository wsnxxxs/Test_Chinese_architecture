(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ya="180",ns={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,sc=1,Ih=2,Tl=1,wl=2,Wn=3,ci=0,Je=1,Xn=2,ri=0,is=1,Ro=2,rc=3,oc=4,Uh=5,yi=100,Nh=101,Fh=102,Oh=103,zh=104,Bh=200,kh=201,Hh=202,Gh=203,Co=204,Po=205,Vh=206,Wh=207,Xh=208,qh=209,Yh=210,$h=211,Zh=212,Kh=213,jh=214,Do=0,Lo=1,Io=2,rs=3,Uo=4,No=5,Fo=6,Oo=7,Al=0,Jh=1,Qh=2,oi=0,tu=1,eu=2,nu=3,Rl=4,iu=5,su=6,ru=7,Cl=300,os=301,as=302,Cs=303,zo=304,Dr=306,Ps=1e3,si=1001,Bo=1002,on=1003,ou=1004,Xs=1005,Cn=1006,Hr=1007,Ei=1008,Nn=1009,Pl=1010,Dl=1011,Ds=1012,ba=1013,Ti=1014,Pn=1015,Bs=1016,Ea=1017,Ta=1018,Ls=1020,Ll=35902,Il=35899,Ul=1021,Nl=1022,En=1023,Is=1026,Us=1027,wa=1028,Aa=1029,Fl=1030,Ra=1031,Ca=1033,xr=33776,vr=33777,Mr=33778,Sr=33779,ko=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,$o=37809,Zo=37810,Ko=37811,jo=37812,Jo=37813,Qo=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,aa=36492,ca=36494,la=36495,ha=36283,ua=36284,da=36285,fa=36286,au=3200,cu=3201,Ol=0,lu=1,ii="",Ie="srgb",cs="srgb-linear",Tr="linear",se="srgb",Ui=7680,ac=519,hu=512,uu=513,du=514,zl=515,fu=516,pu=517,mu=518,gu=519,cc=35044,_u=35048,lc="300 es",Dn=2e3,wr=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const Ts=Math.PI/180,Ns=180/Math.PI;function hs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function Pa(i,t){return(i%t+t)%t}function xu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vu(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function Mu(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function Su(i,t=1){return t-Math.abs(Pa(i,t*2)-t)}function yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tu(i,t){return i+Math.random()*(t-i)}function wu(i){return i*(.5-Math.random())}function Au(i){i!==void 0&&(hc=i);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ru(i){return i*Ts}function Cu(i){return i*Ns}function Pu(i){return(i&i-1)===0&&i!==0}function Du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yr={DEG2RAD:Ts,RAD2DEG:Ns,generateUUID:hs,clamp:Vt,euclideanModulo:Pa,mapLinear:xu,inverseLerp:vu,lerp:ws,damp:Mu,pingpong:Su,smoothstep:yu,smootherstep:bu,randInt:Eu,randFloat:Tu,randFloatSpread:wu,seededRandom:Au,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Du,floorPowerOfTwo:Lu,setQuaternionFromProperEuler:Iu,normalize:qe,denormalize:Zi};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class an{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),w=Math.atan2(A,p*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const x=a*v;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new D,uc=new an;class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],M=s[4],x=s[7],A=s[2],w=s[5],E=s[8];return r[0]=o*_+a*v+c*A,r[3]=o*m+a*M+c*w,r[6]=o*p+a*x+c*E,r[1]=l*_+h*v+d*A,r[4]=l*m+h*M+d*w,r[7]=l*p+h*x+d*E,r[2]=u*_+f*v+g*A,r[5]=u*m+f*M+g*w,r[8]=u*p+f*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new kt;function Bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){const i=Ar("canvas");return i.style.display="block",i}const dc={};function Fs(i){i in dc||(dc[i]=!0,console.warn(i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const fc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:t,whitePoint:n,transfer:Tr,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:se,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}const Jt=Fu();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class Ou{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Ar("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zu=0;class Da{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wr(s[o].image)):r.push(Wr(s[o]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bu=0;const Xr=new D;class We extends Pi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=si,s=si,r=Cn,o=Ei,a=En,c=Nn,l=We.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=hs(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Cl;We.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,A=(p+1)/2,w=(h+u)/4,E=(d+_)/4,C=(g+m)/4;return M>x&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=E/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Da(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kl extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hu extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Ys.subVectors(this.max,ms),Fi.subVectors(t.a,ms),Oi.subVectors(t.b,ms),zi.subVectors(t.c,ms),Zn.subVectors(Oi,Fi),Kn.subVectors(zi,Oi),pi.subVectors(Fi,zi);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-pi.y,pi.x,0];return!qr(e,Fi,Oi,zi,Ys)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,Fi,Oi,zi,Ys))?!1:($s.crossVectors(Zn,Kn),e=[$s.x,$s.y,$s.z],qr(e,Fi,Oi,zi,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,qs=new Di,Fi=new D,Oi=new D,zi=new D,Zn=new D,Kn=new D,pi=new D,ms=new D,Ys=new D,$s=new D,mi=new D;function qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Gu=new Di,gs=new D,Yr=new D;class ks{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Yr)),this.expandByPoint(gs.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const kn=new D,$r=new D,Zs=new D,jn=new D,Zr=new D,Ks=new D,Kr=new D;class Hl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),jn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=jn.dot(this.direction),c=-jn.dot(Zs),l=jn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($r).addScaledVector(Zs,u),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){Zr.subVectors(e,t),Ks.subVectors(n,t),Kr.crossVectors(Zr,Ks);let o=this.direction.dot(Kr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const c=a*this.direction.dot(Ks.crossVectors(jn,Ks));if(c<0)return null;const l=a*this.direction.dot(Zr.cross(jn));if(l<0||c+l>o)return null;const h=-a*jn.dot(Kr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,_,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Wu)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Jn.crossVectors(n,nn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Jn.crossVectors(n,nn)),Jn.normalize(),js.crossVectors(nn,Jn),s[0]=Jn.x,s[4]=js.x,s[8]=nn.x,s[1]=Jn.y,s[5]=js.y,s[9]=nn.y,s[2]=Jn.z,s[6]=js.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],A=n[15],w=s[0],E=s[4],C=s[8],S=s[12],y=s[1],R=s[5],U=s[9],F=s[13],k=s[2],H=s[6],X=s[10],K=s[14],W=s[3],ot=s[7],ht=s[11],Ct=s[15];return r[0]=o*w+a*y+c*k+l*W,r[4]=o*E+a*R+c*H+l*ot,r[8]=o*C+a*U+c*X+l*ht,r[12]=o*S+a*F+c*K+l*Ct,r[1]=h*w+d*y+u*k+f*W,r[5]=h*E+d*R+u*H+f*ot,r[9]=h*C+d*U+u*X+f*ht,r[13]=h*S+d*F+u*K+f*Ct,r[2]=g*w+_*y+m*k+p*W,r[6]=g*E+_*R+m*H+p*ot,r[10]=g*C+_*U+m*X+p*ht,r[14]=g*S+_*F+m*K+p*Ct,r[3]=v*w+M*y+x*k+A*W,r[7]=v*E+M*R+x*H+A*ot,r[11]=v*C+M*U+x*X+A*ht,r[15]=v*S+M*F+x*K+A*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+_*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,M=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,A=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,w=e*v+n*M+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=v*E,t[1]=(_*u*r-d*m*r-_*s*f+n*m*f+d*s*p-n*u*p)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*E,t[4]=M*E,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*E,t[8]=x*E,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*E,t[12]=A*E,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,v=c*l,M=c*h,x=c*d,A=n.x,w=n.y,E=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(u+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+M)*E,s[9]=(m-v)*E,s[10]=(1-(u+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const l=1/r,h=1/o,d=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Dn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===wr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new D,vn=new Xt,Vu=new D(0,0,0),Wu=new D(1,1,1),Jn=new D,js=new D,nn=new D,mc=new Xt,gc=new an;class cn{constructor(t=0,e=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xu=0;const _c=new D,ki=new an,Hn=new Xt,Js=new D,_s=new D,qu=new D,Yu=new an,xc=new D(1,0,0),vc=new D(0,1,0),Mc=new D(0,0,1),Sc={type:"added"},$u={type:"removed"},Hi={type:"childadded",child:null},jr={type:"childremoved",child:null};class Fe extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new D,e=new cn,n=new an,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new kt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(xc,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xc,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(_s,Js,this.up):Hn.lookAt(Js,_s,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Hn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new D(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Gn=new D,Jr=new D,Vn=new D,Gi=new D,Vi=new D,yc=new D,Qr=new D,to=new D,eo=new D,no=new xe,io=new xe,so=new xe;class bn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Gn.subVectors(n,e),Jr.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Gn),c=Mn.dot(Jr),l=Gn.dot(Gn),h=Gn.dot(Jr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Gn.subVectors(t,e),Mn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Vi.subVectors(r,n),Qr.subVectors(t,n);const c=Gi.dot(Qr),l=Vi.dot(Qr);if(c<=0&&l<=0)return e.copy(n);to.subVectors(t,s);const h=Gi.dot(to),d=Vi.dot(to);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gi,o);eo.subVectors(t,r);const f=Gi.dot(eo),g=Vi.dot(eo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Vi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return yc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(yc,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Pa(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ro(o,r,t+1/3),this.g=ro(o,r,t),this.b=ro(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Vl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Jt.workingToColorSpace(ke.copy(this),t),Math.round(Vt(ke.r*255,0,255))*65536+Math.round(Vt(ke.g*255,0,255))*256+Math.round(Vt(ke.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ie){Jt.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Qs);const n=ws(Qn.h,Qs.h,e),s=ws(Qn.s,Qs.s,e),r=ws(Qn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Et;Et.NAMES=Vl;let Zu=0;class Hs extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=is,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Lr extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new D,tr=new dt;let Ku=0;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Wl extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xl extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ju=0;const un=new Xt,oo=new Fe,Wi=new D,sn=new Di,xs=new Di,De=new D;class Me extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bl(t)?Xl:Wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(sn.min,xs.min),sn.expandByPoint(De),De.addVectors(sn.max,xs.max),sn.expandByPoint(De)):(sn.expandByPoint(xs.min),sn.expandByPoint(xs.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)De.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(t,l),De.add(Wi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,d=new D,u=new dt,f=new dt,g=new dt,_=new D,m=new D;function p(C,S,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[C].add(_),a[S].add(_),a[y].add(_),c[C].add(m),c[S].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,S=v.length;C<S;++C){const y=v[C],R=y.start,U=y.count;for(let F=R,k=R+U;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new D,x=new D,A=new D,w=new D;function E(C){A.fromBufferAttribute(s,C),w.copy(A);const S=a[C];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(w,S);const R=x.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,R)}for(let C=0,S=v.length;C<S;++C){const y=v[C],R=y.start,U=y.count;for(let F=R,k=R+U;F<k;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Te(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new Xt,gi=new Hl,er=new ks,Ec=new D,nr=new D,ir=new D,sr=new D,ao=new D,rr=new D,Tc=new D,or=new D;class mt extends Fe{constructor(t=new Me,e=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(ao.fromBufferAttribute(d,t),o?rr.addScaledVector(ao,h):rr.addScaledVector(ao.sub(e),h))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(er.containsPoint(gi.origin)===!1&&(gi.intersectSphere(er,Ec)===null||gi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(bc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(bc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,A=M;x<A;x+=3){const w=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);s=ar(this,p,t,n,l,h,d,w,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=ar(this,o,t,n,l,h,d,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,A=M;x<A;x+=3){const w=x,E=x+1,C=x+2;s=ar(this,p,t,n,l,h,d,w,E,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;s=ar(this,o,t,n,l,h,d,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ju(i,t,e,n,s,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ci,a),c===null)return null;or.copy(a),or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(or);return l<e.near||l>e.far?null:{distance:l,point:or.clone(),object:i}}function ar(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);const h=Ju(i,t,e,n,nr,ir,sr,Tc);if(h){const d=new D;bn.getBarycoord(Tc,nr,ir,sr,d),s&&(h.uv=bn.getInterpolatedAttribute(s,a,c,l,d,new dt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,c,l,d,new dt)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};bn.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=d}return h}class On extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function g(_,m,p,v,M,x,A,w,E,C,S){const y=x/E,R=A/C,U=x/2,F=A/2,k=w/2,H=E+1,X=C+1;let K=0,W=0;const ot=new D;for(let ht=0;ht<X;ht++){const Ct=ht*R-F;for(let Wt=0;Wt<H;Wt++){const ae=Wt*y-U;ot[_]=ae*v,ot[m]=Ct*M,ot[p]=k,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Wt/E),d.push(1-ht/C),K+=1}}for(let ht=0;ht<C;ht++)for(let Ct=0;Ct<E;Ct++){const Wt=u+Ct+H*ht,ae=u+Ct+H*(ht+1),de=u+(Ct+1)+H*(ht+1),Qt=u+(Ct+1)+H*ht;c.push(Wt,ae,Qt),c.push(ae,de,Qt),W+=6}a.addGroup(f,W,S),f+=W,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Qu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ql(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const td={clone:ls,merge:Ye};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yl extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,wc=new dt,Ac=new dt;class fn extends Yl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Ac),e.subVectors(Ac,wc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class id extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new fn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const o=new fn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const a=new fn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const c=new fn(Xi,qi,t,e);c.layers=this.layers,this.add(c);const l=new fn(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $l extends We{constructor(t=[],e=os,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sd extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $l(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ri});r.uniforms.tEquirect.value=e;const o=new mt(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Cn),new id(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Zt extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rd={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class od extends Fe{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ad extends We{constructor(t=null,e=1,n=1,s,r,o,a,c,l=on,h=on,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new Xt,Cc=new Xt,cr=[],Pc=new Di,cd=new Xt,vs=new mt,Ms=new ks;class Ai extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Pc.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Ms.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Cc.multiplyMatrices(n,Yi),vs.matrixWorld=Cc,vs.raycast(t,cr);for(let o=0,a=cr.length;o<a;o++){const c=cr[o];c.instanceId=r,c.object=this,e.push(c)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ad(new Float32Array(s*this.count),s,this.count,wa,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lo=new D,ld=new D,hd=new kt;class ei{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lo.subVectors(n,e).cross(ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hd.getNormalMatrix(t),s=this.coplanarPoint(lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ks,ud=new dt(.5,.5),lr=new D;class La{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],M=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,p-g,A-v).normalize(),s[1].setComponents(l+o,f+h,p+g,A+v).normalize(),s[2].setComponents(l+a,f+d,p+_,A+M).normalize(),s[3].setComponents(l-a,f-d,p-_,A-M).normalize(),n)s[4].setComponents(c,u,m,x).normalize(),s[5].setComponents(l-c,f-u,p-m,A-x).normalize();else if(s[4].setComponents(l-c,f-u,p-m,A-x).normalize(),e===Dn)s[5].setComponents(l+c,f+u,p+m,A+x).normalize();else if(e===wr)s[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);const e=ud.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class us extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zl extends We{constructor(t,e,n=Ti,s,r,o,a=on,c=on,l,h=Is,d=1){if(h!==Is&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Kl extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ia extends Me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,_=s+1,m=new D,p=new D;for(let v=0;v<=g;v++){let M=0,x=0,A=0,w=0;if(v<=n){const S=v/n,y=S*Math.PI/2;x=-h-t*Math.cos(y),A=t*Math.sin(y),w=-t*Math.cos(y),M=S*d}else if(v<=n+r){const S=(v-n)/r;x=-h+S*e,A=t,w=0,M=d+S*u}else{const S=(v-n-r)/n,y=S*Math.PI/2;x=h+t*Math.sin(y),A=t*Math.cos(y),w=t*Math.sin(y),M=d+u+S*d}const E=Math.max(0,Math.min(1,M/f));let C=0;v===0?C=.5/s:v===g&&(C=-.5/s);for(let S=0;S<=s;S++){const y=S/s,R=y*Math.PI*2,U=Math.sin(R),F=Math.cos(R);p.x=-A*F,p.y=x,p.z=A*U,a.push(p.x,p.y,p.z),m.set(-A*F,w,A*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+C,E)}if(v>0){const S=(v-1)*_;for(let y=0;y<s;y++){const R=S+y,U=S+y+1,F=v*_+y,k=v*_+y+1;o.push(R,U,F),o.push(U,k,F)}}}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ua extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fn extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function v(){const x=new D,A=new D;let w=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const S=[],y=C/r,R=y*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,k=F*c+a,H=Math.sin(k),X=Math.cos(k);A.x=R*H,A.y=-y*n+m,A.z=R*X,d.push(A.x,A.y,A.z),x.set(H,E,X).normalize(),u.push(x.x,x.y,x.z),f.push(F,1-y),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const y=_[S][C],R=_[S+1][C],U=_[S+1][C+1],F=_[S][C+1];(t>0||S!==0)&&(h.push(y,R,F),w+=3),(e>0||S!==r-1)&&(h.push(R,U,F),w+=3)}l.addGroup(p,w,0),p+=w}function M(x){const A=g,w=new dt,E=new D;let C=0;const S=x===!0?t:e,y=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const k=U/s*c+a,H=Math.cos(k),X=Math.sin(k);E.x=S*X,E.y=m*y,E.z=S*H,d.push(E.x,E.y,E.z),u.push(0,y,0),w.x=H*.5+.5,w.y=X*.5*y+.5,f.push(w.x,w.y),g++}for(let U=0;U<s;U++){const F=A+U,k=R+U;x===!0?h.push(k,k+1,F):h.push(k+1,k,F),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hi extends Fn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new D,x=new D,A=new D;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],x),f(e[w+2],A),c(M,x,A,v)}function c(v,M,x,A){const w=A+1,E=[];for(let C=0;C<=w;C++){E[C]=[];const S=v.clone().lerp(x,C/w),y=M.clone().lerp(x,C/w),R=w-C;for(let U=0;U<=R;U++)U===0&&C===w?E[C][U]=S:E[C][U]=S.clone().lerp(y,U/R)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const y=Math.floor(S/2);S%2===0?(u(E[C][y+1]),u(E[C+1][y]),u(E[C][y])):(u(E[C][y+1]),u(E[C+1][y+1]),u(E[C+1][y]))}}function l(v){const M=new D;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const v=new D;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=m(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(x,1-A)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],A=o[v+4],w=Math.max(M,x,A),E=Math.min(M,x,A);w>.9&&E<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const v=new D,M=new D,x=new D,A=new D,w=new dt,E=new dt,C=new dt;for(let S=0,y=0;S<r.length;S+=9,y+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),A.copy(v).add(M).add(x).divideScalar(3);const R=m(A);_(w,y+0,v,R),_(E,y+2,M,R),_(C,y+4,x,R)}}function _(v,M,x,A){A<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.vertices,t.indices,t.radius,t.details)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,c=new Xt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Vt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jl extends $n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dd extends jl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Na(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const hr=new D,ho=new Na,uo=new Na,fo=new Na;class fd extends $n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(hr.subVectors(s[0],s[1]).add(s[0]),l=hr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ho.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),uo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),fo.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),uo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),fo.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ho.calc(c),uo.calc(c),fo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function pd(i,t){const e=1-i;return e*e*t}function md(i,t){return 2*(1-i)*i*t}function gd(i,t){return i*i*t}function As(i,t,e,n){return pd(i,t)+md(i,e)+gd(i,n)}function _d(i,t){const e=1-i;return e*e*e*t}function xd(i,t){const e=1-i;return 3*e*e*i*t}function vd(i,t){return 3*(1-i)*i*i*t}function Md(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return _d(i,t)+xd(i,e)+vd(i,n)+Md(i,s)}class Sd extends $n{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yd extends $n{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y),Rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bd extends $n{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ed extends $n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Td extends $n{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fa extends $n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Dc(a,c.x,l.x,h.x,d.x),Dc(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var Ad=Object.freeze({__proto__:null,ArcCurve:dd,CatmullRomCurve3:fd,CubicBezierCurve:Sd,CubicBezierCurve3:yd,EllipseCurve:jl,LineCurve:bd,LineCurve3:Ed,QuadraticBezierCurve:Td,QuadraticBezierCurve3:Fa,SplineCurve:wd});class Li extends Ir{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Li(t.radius,t.detail)}}class Oa extends Ir{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oa(t.radius,t.detail)}}class ui extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-o;for(let M=0;M<l;M++){const x=M*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,x=v+l*(p+1),A=v+1+l*(p+1),w=v+1+l*p;f.push(M,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class ds extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+x,1-M),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const M=h[p][v+1],x=h[p][v],A=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(M,x,w),(p!==n-1||c<Math.PI)&&f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class za extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ba extends Me{constructor(t=new Fa(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new dt;let h=new D;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),p()}function m(M){h=t.getPointAt(M/e,h);const x=o.normals[M],A=o.binormals[M];for(let w=0;w<=s;w++){const E=w/s*Math.PI*2,C=Math.sin(E),S=-Math.cos(E);c.x=S*x.x+C*A.x,c.y=S*x.y+C*A.y,c.z=S*x.z+C*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const A=(s+1)*(M-1)+(x-1),w=(s+1)*M+(x-1),E=(s+1)*M+x,C=(s+1)*(M-1)+x;g.push(A,w,C),g.push(w,E,C)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ba(new Ad[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jl extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rd extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ka extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pd extends ka{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const po=new Xt,Lc=new D,Ic=new D;class Dd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ql extends Yl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ld extends Dd{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uc extends ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Ld}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Id extends ka{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ud extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Nd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Nc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fd extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fc(i,t,e,n){const s=Od(n);switch(e){case Ul:return i*t;case wa:return i*t/s.components*s.byteLength;case Aa:return i*t/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Ra:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Ca:return i*t*4/s.components*s.byteLength;case xr:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Vo:return Math.max(i,16)*Math.max(t,8)/4;case ko:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case ca:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Od(i){switch(i){case Nn:case Pl:return{byteLength:1,components:1};case Ds:case Dl:case Bs:return{byteLength:2,components:1};case Ea:case Ta:return{byteLength:2,components:4};case Ti:case ba:case Pn:return{byteLength:4,components:1};case Ll:case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function th(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,i0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,r0=`#define NORMAL
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
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
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
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,l0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,u0=`#define TOON
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
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,f0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:$d,begin_vertex:Zd,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:rf,color_pars_fragment:of,color_pars_vertex:af,color_vertex:cf,common:lf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:_f,envmap_fragment:xf,envmap_common_pars_fragment:vf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Lf,envmap_vertex:yf,fog_vertex:bf,fog_pars_vertex:Ef,fog_fragment:Tf,fog_pars_fragment:wf,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Rf,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Df,lights_toon_fragment:If,lights_toon_pars_fragment:Uf,lights_phong_fragment:Nf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:zf,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:$f,map_particle_pars_fragment:Zf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:jf,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:sp,normal_pars_fragment:rp,normal_pars_vertex:op,normal_vertex:ap,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:dp,opaque_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:_p,dithering_pars_fragment:xp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:yp,shadowmap_vertex:bp,shadowmask_pars_fragment:Ep,skinbase_vertex:Tp,skinning_pars_vertex:wp,skinning_vertex:Ap,skinnormal_vertex:Rp,specularmap_fragment:Cp,specularmap_pars_fragment:Pp,tonemapping_fragment:Dp,tonemapping_pars_fragment:Lp,transmission_fragment:Ip,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:Fp,uv_vertex:Op,worldpos_vertex:zp,background_vert:Bp,background_frag:kp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:$p,equirect_vert:Zp,equirect_frag:Kp,linedashed_vert:jp,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:_0,sprite_frag:x0},rt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ye([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ye([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ye([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ye([rt.points,rt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ye([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ye([rt.common,rt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ye([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ye([rt.sprite,rt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ye([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ye([rt.lights,rt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Rn.physical={uniforms:Ye([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ur={r:0,b:0,g:0},xi=new cn,v0=new Xt;function M0(i,t,e,n,s,r,o){const a=new Et(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const A=g(M);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Dr)?(h===void 0&&(h=new mt(new On(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ls(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(x.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(xi)),h.material.toneMapped=Jt.getTransfer(A.colorSpace)!==se,(d!==A||u!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new mt(new ui(2,2),new li({name:"BackgroundMaterial",uniforms:ls(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=A,u=A.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(ur,ql(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m,dispose:v}}function S0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(y,R,U,F,k){let H=!1;const X=d(F,U,R);r!==X&&(r=X,l(r.object)),H=f(y,F,U,k),H&&g(y,F,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(y,R,U,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,R,U){const F=U.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let H=k[R.id];H===void 0&&(H={},k[R.id]=H);let X=H[F];return X===void 0&&(X=u(c()),H[F]=X),X}function u(y){const R=[],U=[],F=[];for(let k=0;k<e;k++)R[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,R,U,F){const k=r.attributes,H=R.attributes;let X=0;const K=U.getAttributes();for(const W in K)if(K[W].location>=0){const ht=k[W];let Ct=H[W];if(Ct===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ct=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ct=y.instanceColor)),ht===void 0||ht.attribute!==Ct||Ct&&ht.data!==Ct.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(y,R,U,F){const k={},H=R.attributes;let X=0;const K=U.getAttributes();for(const W in K)if(K[W].location>=0){let ht=H[W];ht===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const Ct={};Ct.attribute=ht,ht&&ht.data&&(Ct.data=ht.data),k[W]=Ct,X++}r.attributes=k,r.attributesNum=X,r.index=F}function _(){const y=r.newAttributes;for(let R=0,U=y.length;R<U;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const U=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;U[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),k[y]!==R&&(i.vertexAttribDivisor(y,R),k[y]=R)}function v(){const y=r.newAttributes,R=r.enabledAttributes;for(let U=0,F=R.length;U<F;U++)R[U]!==y[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function M(y,R,U,F,k,H,X){X===!0?i.vertexAttribIPointer(y,R,U,k,H):i.vertexAttribPointer(y,R,U,F,k,H)}function x(y,R,U,F){_();const k=F.attributes,H=U.getAttributes(),X=R.defaultAttributeValues;for(const K in H){const W=H[K];if(W.location>=0){let ot=k[K];if(ot===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const ht=ot.normalized,Ct=ot.itemSize,Wt=t.get(ot);if(Wt===void 0)continue;const ae=Wt.buffer,de=Wt.type,Qt=Wt.bytesPerElement,$=de===i.INT||de===i.UNSIGNED_INT||ot.gpuType===ba;if(ot.isInterleavedBufferAttribute){const J=ot.data,gt=J.stride,Ft=ot.offset;if(J.isInstancedInterleavedBuffer){for(let Rt=0;Rt<W.locationSize;Rt++)p(W.location+Rt,J.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)m(W.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Rt=0;Rt<W.locationSize;Rt++)M(W.location+Rt,Ct/W.locationSize,de,ht,gt*Qt,(Ft+Ct/W.locationSize*Rt)*Qt,$)}else{if(ot.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,ot.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let J=0;J<W.locationSize;J++)M(W.location+J,Ct/W.locationSize,de,ht,Ct*Qt,Ct/W.locationSize*J*Qt,$)}}else if(X!==void 0){const ht=X[K];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(W.location,ht);break;case 3:i.vertexAttrib3fv(W.location,ht);break;case 4:i.vertexAttrib4fv(W.location,ht);break;default:i.vertexAttrib1fv(W.location,ht)}}}}v()}function A(){C();for(const y in n){const R=n[y];for(const U in R){const F=R[U];for(const k in F)h(F[k].object),delete F[k];delete R[U]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const U in R){const F=R[U];for(const k in F)h(F[k].object),delete F[k];delete R[U]}delete n[y.id]}function E(y){for(const R in n){const U=n[R];if(U[y.id]===void 0)continue;const F=U[y.id];for(const k in F)h(F[k].object),delete F[k];delete U[y.id]}}function C(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function y0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function b0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==En&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Pn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function E0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,M=v*4;let x=p.clippingState||null;c.value=x,x=h(g,u,M,f);for(let A=0;A!==M;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function T0(i){let t=new WeakMap;function e(o,a){return a===Cs?o.mapping=os:a===zo&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cs||a===zo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Qi=4,Oc=[.125,.215,.35,.446,.526,.582],bi=20,mo=new Ql,zc=new Et;let go=null,_o=0,xo=0,vo=!1;const Mi=(1+Math.sqrt(5))/2,$i=1/Mi,Bc=[new D(-Mi,$i,0),new D(Mi,$i,0),new D(-$i,0,Mi),new D($i,0,Mi),new D(0,Mi,-$i),new D(0,Mi,$i),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],w0=new D;class pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=w0}=r;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,xo),this._renderer.xr.enabled=vo,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Bs,format:En,colorSpace:cs,depthBuffer:!1},s=kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(r)),this._blurMaterial=R0(r,t,e)}return s}_compileMaterial(t){const e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,s,r){const c=new fn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(zc),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Lr({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new mt(new On,_);let p=!1;const v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,p=!0):(_.color.copy(zc),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const A=this._cubeSize;dr(s,x*A,M>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;dr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bc[(s-r-1)%Bc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new mt(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let v=0;for(let E=0;E<bi;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const x=this._sizeLods[s],A=3*x*(s>M-Qi?s-M+Qi:0),w=4*(this._cubeSize-x);dr(e,A,w,3*x,2*x),c.setRenderTarget(e),c.render(d,mo)}}function A0(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+Oc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Qi?c=Oc[o-i+Qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,C=w>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(S,_*g*w),M.set(u,m*g*w);const y=[w,w,w,w,w,w];x.set(y,p*g*w)}const A=new Me;A.setAttribute("position",new Te(v,_)),A.setAttribute("uv",new Te(M,m)),A.setAttribute("faceIndex",new Te(x,p)),t.push(A),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kc(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R0(i,t,e){const n=new Float32Array(bi),s=new D(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Hc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Gc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cs||c===zo,h=c===os||c===as;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new pa(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new pa(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function P0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,x=v.length;M<x;M+=3){const A=v[M+0],w=v[M+1],E=v[M+2];u.push(A,w,w,E,E,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const A=M+0,w=M+1,E=M+2;u.push(A,w,w,E,E,A)}}else return;const m=new(Bl(u)?Xl:Wl)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function L0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function I0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U0(i,t,e){const n=new WeakMap,s=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*d),C=new kl(E,A,w,d);C.type=Pn,C.needsUpdate=!0;const S=x*4;for(let R=0;R<d;R++){const U=p[R],F=v[R],k=M[R],H=A*w*4*R;for(let X=0;X<U.count;X++){const K=X*S;g===!0&&(s.fromBufferAttribute(U,X),E[H+K+0]=s.x,E[H+K+1]=s.y,E[H+K+2]=s.z,E[H+K+3]=0),_===!0&&(s.fromBufferAttribute(F,X),E[H+K+4]=s.x,E[H+K+5]=s.y,E[H+K+6]=s.z,E[H+K+7]=0),m===!0&&(s.fromBufferAttribute(k,X),E[H+K+8]=s.x,E[H+K+9]=s.y,E[H+K+10]=s.z,E[H+K+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new dt(A,w)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function N0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const eh=new We,Vc=new Zl(1,1),nh=new kl,ih=new Hu,sh=new $l,Wc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),$c=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wc[s];if(r===void 0&&(r=new Float32Array(s),Wc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=Xc[t];e===void 0&&(e=new Int32Array(t),Xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function k0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Ce(e,n)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),Ce(e,n)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;qc.set(n),i.uniformMatrix4fv(this.addr,!1,qc),Ce(e,n)}}function V0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function j0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vc.compareFunction=zl,r=Vc):r=eh,e.setTexture2D(t||r,s)}function J0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ih,s)}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sh,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nh,s)}function em(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return z0;case 35666:return B0;case 35674:return k0;case 35675:return H0;case 35676:return G0;case 5124:case 35670:return V0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return $0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tm}}function nm(i,t){i.uniform1fv(this.addr,t)}function im(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function sm(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function rm(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function om(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function am(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cm(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function hm(i,t){i.uniform2iv(this.addr,t)}function um(i,t){i.uniform3iv(this.addr,t)}function dm(i,t){i.uniform4iv(this.addr,t)}function fm(i,t){i.uniform1uiv(this.addr,t)}function pm(i,t){i.uniform2uiv(this.addr,t)}function mm(i,t){i.uniform3uiv(this.addr,t)}function gm(i,t){i.uniform4uiv(this.addr,t)}function _m(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||eh,r[o])}function xm(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ih,r[o])}function vm(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sh,r[o])}function Mm(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nh,r[o])}function Sm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return cm;case 5124:case 35670:return lm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return Mm}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=em(e.type)}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}}class Em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Zc(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),o=Mo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zc(e,l===void 0?new ym(a,i,t):new bm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Em(a),Zc(e,d)),e=d}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const wm=37297;let Am=0;function Rm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const jc=new kt;function Cm(i){Jt._getMatrix(jc,Jt.workingColorSpace,i);const t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Rm(i.getShaderSource(t),a)}else return r}function Pm(i,t){const e=Cm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,t){let e;switch(t){case tu:e="Linear";break;case eu:e="Reinhard";break;case nu:e="Cineon";break;case Rl:e="ACESFilmic";break;case su:e="AgX";break;case ru:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fr=new D;function Lm(){Jt.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function Um(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function Qc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(Fm,zm)}const Om=new Map;function zm(i,t){let e=Gt[t];if(e===void 0){const n=Om.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(Bm,km)}function km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nl(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function Wm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Qh:t="ENVMAP_BLENDING_ADD";break}return t}function Xm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hm(e),l=Gm(e),h=Vm(e),d=Wm(e),u=Xm(e),f=Im(e),g=Um(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=ma(o),o=Qc(o,e),o=tl(o,e),a=ma(a),a=Qc(a,e),a=tl(a,e),o=el(o),a=el(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,A=Kc(s,s.VERTEX_SHADER,M),w=Kc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(w)||"",H=U.trim(),X=F.trim(),K=k.trim();let W=!0,ot=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{const ht=Jc(s,A,"vertex"),Ct=Jc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+ht+`
`+Ct)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||K==="")&&(ot=!1);ot&&(R.diagnostics={runnable:W,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(w),C=new br(s,_),S=Nm(s,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,wm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Ym=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zm(t),e.set(t,n)),n}}class Zm{constructor(t){this.id=Ym++,this.code=t,this.usedTimes=0}}function Km(i,t,e,n,s,r,o){const a=new Gl,c=new $m,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,U,F){const k=U.fog,H=F.geometry,X=S.isMeshStandardMaterial?U.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),W=K&&K.mapping===Dr?K.image.height:null,ot=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ct=ht!==void 0?ht.length:0;let Wt=0;H.morphAttributes.position!==void 0&&(Wt=1),H.morphAttributes.normal!==void 0&&(Wt=2),H.morphAttributes.color!==void 0&&(Wt=3);let ae,de,Qt,$;if(ot){const te=Rn[ot];ae=te.vertexShader,de=te.fragmentShader}else ae=S.vertexShader,de=S.fragmentShader,c.update(S),Qt=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);const J=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,Rt=F.isBatchedMesh===!0,$t=!!S.map,ze=!!S.matcap,L=!!K,fe=!!S.aoMap,zt=!!S.lightMap,Ut=!!S.bumpMap,Mt=!!S.normalMap,pe=!!S.displacementMap,St=!!S.emissiveMap,Ht=!!S.metalnessMap,Pe=!!S.roughnessMap,Se=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,B=S.iridescence>0,Y=S.sheen>0,j=S.transmission>0,q=Se&&!!S.anisotropyMap,At=P&&!!S.clearcoatMap,it=P&&!!S.clearcoatNormalMap,bt=P&&!!S.clearcoatRoughnessMap,Tt=B&&!!S.iridescenceMap,et=B&&!!S.iridescenceThicknessMap,lt=Y&&!!S.sheenColorMap,It=Y&&!!S.sheenRoughnessMap,wt=!!S.specularMap,at=!!S.specularColorMap,Bt=!!S.specularIntensityMap,N=j&&!!S.transmissionMap,nt=j&&!!S.thicknessMap,st=!!S.gradientMap,ft=!!S.alphaMap,Q=S.alphaTest>0,Z=!!S.alphaHash,vt=!!S.extensions;let Ot=oi;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const ce={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:de,defines:S.defines,customVertexShaderID:Qt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:cs,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:ze,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:W,aoMap:fe,lightMap:zt,bumpMap:Ut,normalMap:Mt,displacementMap:u&&pe,emissiveMap:St,normalMapObjectSpace:Mt&&S.normalMapType===lu,normalMapTangentSpace:Mt&&S.normalMapType===Ol,metalnessMap:Ht,roughnessMap:Pe,anisotropy:Se,anisotropyMap:q,clearcoat:P,clearcoatMap:At,clearcoatNormalMap:it,clearcoatRoughnessMap:bt,dispersion:b,iridescence:B,iridescenceMap:Tt,iridescenceThicknessMap:et,sheen:Y,sheenColorMap:lt,sheenRoughnessMap:It,specularMap:wt,specularColorMap:at,specularIntensityMap:Bt,transmission:j,transmissionMap:N,thicknessMap:nt,gradientMap:st,opaque:S.transparent===!1&&S.blending===is&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:Q,alphaHash:Z,combine:S.combine,mapUv:$t&&_(S.map.channel),aoMapUv:fe&&_(S.aoMap.channel),lightMapUv:zt&&_(S.lightMap.channel),bumpMapUv:Ut&&_(S.bumpMap.channel),normalMapUv:Mt&&_(S.normalMap.channel),displacementMapUv:pe&&_(S.displacementMap.channel),emissiveMapUv:St&&_(S.emissiveMap.channel),metalnessMapUv:Ht&&_(S.metalnessMap.channel),roughnessMapUv:Pe&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:At&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:wt&&_(S.specularMap.channel),specularColorMapUv:at&&_(S.specularColorMap.channel),specularIntensityMapUv:Bt&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:nt&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Mt||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&($t||ft),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:St&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xn,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const y=g[S.type];let R;if(y){const U=Rn[y];R=td.clone(U.uniforms)}else R=S.uniforms;return R}function A(S,y){let R;for(let U=0,F=h.length;U<F;U++){const k=h[U];if(k.cacheKey===y){R=k,++R.usedTimes;break}}return R===void 0&&(R=new qm(i,y,S,r),h.push(R)),R}function w(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function il(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Jm),n.length>1&&n.sort(u||il),s.length>1&&s.sort(u||il)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Qm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new sl,i.set(n,[o])):s>=r.length?(o=new sl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Et};break;case"SpotLight":e={position:new D,direction:new D,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ng=0;function ig(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sg(i){const t=new tg,e=eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new Xt,o=new Xt;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,A=0,w=0,E=0;l.sort(ig);for(let S=0,y=l.length;S<y;S++){const R=l[S],U=R.color,F=R.intensity,k=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*F,d+=U.g*F,u+=U.b*F;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],F);E++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=X,f++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(F),X.distance=k,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const K=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,K.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,x++}_++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const K=R.shadow,W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(F),X.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=E,n.version=ng++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function rl(i){const t=new sg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function rg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rl(i),t.set(s,[a])):r>=o.length?(a=new rl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cg(i,t,e){let n=new La;const s=new dt,r=new dt,o=new xe,a=new Rd({depthPacking:cu}),c=new Cd,l={},h=e.maxTextureSize,d={[ci]:Je,[Je]:ci,[Xn]:Xn},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:og,fragmentShader:ag}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(w,E,C){if(window.__galleryCaptureScene)return;if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ri),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==Wn&&this.type===Wn,k=p===Wn&&this.type!==Wn;for(let H=0,X=w.length;H<X;H++){const K=w[H],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ot=W.getFrameExtents();if(s.multiply(ot),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,W.mapSize.y=r.y)),W.map===null||F===!0||k===!0){const Ct=this.type!==Wn?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new wi(s.x,s.y,Ct),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ht=W.getViewportCount();for(let Ct=0;Ct<ht;Ct++){const Wt=W.getViewport(Ct);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),U.viewport(o),W.updateMatrices(K,Ct),n=W.getFrustum(),x(E,C,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&v(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function v(w,E){const C=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wi(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,C,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,C,f,_,null)}function M(w,E,C,S){let y=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const U=y.uuid,F=E.uuid;let k=l[U];k===void 0&&(k={},l[U]=k);let H=k[F];H===void 0&&(H=y.clone(),k[F]=H,E.addEventListener("dispose",A)),y=H}if(y.visible=E.visible,y.wireframe=E.wireframe,S===Wn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=C}return y}function x(w,E,C,S,y){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Wn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),k=w.material;if(Array.isArray(k)){const H=F.groups;for(let X=0,K=H.length;X<K;X++){const W=H[X],ot=k[W.materialIndex];if(ot&&ot.visible){const ht=M(w,ot,S,y);w.onBeforeShadow(i,w,E,C,F,ht,W),i.renderBufferDirect(C,null,F,ht,w,W),w.onAfterShadow(i,w,E,C,F,ht,W)}}}else if(k.visible){const H=M(w,k,S,y);w.onBeforeShadow(i,w,E,C,F,H,null),i.renderBufferDirect(C,null,F,H,w,null),w.onAfterShadow(i,w,E,C,F,H,null)}}const U=w.children;for(let F=0,k=U.length;F<k;F++)x(U[F],E,C,S,y)}function A(w){w.target.removeEventListener("dispose",A);for(const C in l){const S=l[C],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const lg={[Do]:Lo,[Io]:Fo,[Uo]:Oo,[rs]:No,[Lo]:Do,[Fo]:Io,[Oo]:Uo,[No]:rs};function hg(i,t){function e(){let N=!1;const nt=new xe;let st=null;const ft=new xe(0,0,0,0);return{setMask:function(Q){st!==Q&&!N&&(i.colorMask(Q,Q,Q,Q),st=Q)},setLocked:function(Q){N=Q},setClear:function(Q,Z,vt,Ot,ce){ce===!0&&(Q*=Ot,Z*=Ot,vt*=Ot),nt.set(Q,Z,vt,Ot),ft.equals(nt)===!1&&(i.clearColor(Q,Z,vt,Ot),ft.copy(nt))},reset:function(){N=!1,st=null,ft.set(-1,0,0,0)}}}function n(){let N=!1,nt=!1,st=null,ft=null,Q=null;return{setReversed:function(Z){if(nt!==Z){const vt=t.get("EXT_clip_control");Z?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),nt=Z;const Ot=Q;Q=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function(Z){Z?J(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Z){st!==Z&&!N&&(i.depthMask(Z),st=Z)},setFunc:function(Z){if(nt&&(Z=lg[Z]),ft!==Z){switch(Z){case Do:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Fo:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Z}},setLocked:function(Z){N=Z},setClear:function(Z){Q!==Z&&(nt&&(Z=1-Z),i.clearDepth(Z),Q=Z)},reset:function(){N=!1,st=null,ft=null,Q=null,nt=!1}}}function s(){let N=!1,nt=null,st=null,ft=null,Q=null,Z=null,vt=null,Ot=null,ce=null;return{setTest:function(te){N||(te?J(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(te){nt!==te&&!N&&(i.stencilMask(te),nt=te)},setFunc:function(te,zn,An){(st!==te||ft!==zn||Q!==An)&&(i.stencilFunc(te,zn,An),st=te,ft=zn,Q=An)},setOp:function(te,zn,An){(Z!==te||vt!==zn||Ot!==An)&&(i.stencilOp(te,zn,An),Z=te,vt=zn,Ot=An)},setLocked:function(te){N=te},setClear:function(te){ce!==te&&(i.clearStencil(te),ce=te)},reset:function(){N=!1,nt=null,st=null,ft=null,Q=null,Z=null,vt=null,Ot=null,ce=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,A=null,w=null,E=new Et(0,0,0),C=0,S=!1,y=null,R=null,U=null,F=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=K>=2);let ot=null,ht={};const Ct=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ae=new xe().fromArray(Ct),de=new xe().fromArray(Wt);function Qt(N,nt,st,ft){const Q=new Uint8Array(4),Z=i.createTexture();i.bindTexture(N,Z),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<st;vt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(nt+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Z}const $={};$[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(rs),Ut(!1),Mt(sc),J(i.CULL_FACE),fe(ri);function J(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function gt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ft(N,nt){return d[N]!==nt?(i.bindFramebuffer(N,nt),d[N]=nt,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Rt(N,nt){let st=f,ft=!1;if(N){st=u.get(nt),st===void 0&&(st=[],u.set(nt,st));const Q=N.textures;if(st.length!==Q.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,vt=Q.length;Z<vt;Z++)st[Z]=i.COLOR_ATTACHMENT0+Z;st.length=Q.length,ft=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ft=!0);ft&&i.drawBuffers(st)}function $t(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ze={[yi]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};ze[Oh]=i.MIN,ze[zh]=i.MAX;const L={[Bh]:i.ZERO,[kh]:i.ONE,[Hh]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(N,nt,st,ft,Q,Z,vt,Ot,ce,te){if(N===ri){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),N!==Uh){if(N!==m||te!==S){if((p!==yi||x!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,x=yi),te)switch(N){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,M=null,A=null,w=null,E.set(0,0,0),C=0,m=N,S=te}return}Q=Q||nt,Z=Z||st,vt=vt||ft,(nt!==p||Q!==x)&&(i.blendEquationSeparate(ze[nt],ze[Q]),p=nt,x=Q),(st!==v||ft!==M||Z!==A||vt!==w)&&(i.blendFuncSeparate(L[st],L[ft],L[Z],L[vt]),v=st,M=ft,A=Z,w=vt),(Ot.equals(E)===!1||ce!==C)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ce),E.copy(Ot),C=ce),m=N,S=!1}function zt(N,nt){N.side===Xn?gt(i.CULL_FACE):J(i.CULL_FACE);let st=N.side===Je;nt&&(st=!st),Ut(st),N.blending===is&&N.transparent===!1?fe(ri):fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const ft=N.stencilWrite;a.setTest(ft),ft&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),St(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function Mt(N){N!==Lh?(J(i.CULL_FACE),N!==R&&(N===sc?i.cullFace(i.BACK):N===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),R=N}function pe(N){N!==U&&(X&&i.lineWidth(N),U=N)}function St(N,nt,st){N?(J(i.POLYGON_OFFSET_FILL),(F!==nt||k!==st)&&(i.polygonOffset(nt,st),F=nt,k=st)):gt(i.POLYGON_OFFSET_FILL)}function Ht(N){N?J(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Pe(N){N===void 0&&(N=i.TEXTURE0+H-1),ot!==N&&(i.activeTexture(N),ot=N)}function Se(N,nt,st){st===void 0&&(ot===null?st=i.TEXTURE0+H-1:st=ot);let ft=ht[st];ft===void 0&&(ft={type:void 0,texture:void 0},ht[st]=ft),(ft.type!==N||ft.texture!==nt)&&(ot!==st&&(i.activeTexture(st),ot=st),i.bindTexture(N,nt||$[N]),ft.type=N,ft.texture=nt)}function P(){const N=ht[ot];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(N){ae.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function It(N){de.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),de.copy(N))}function wt(N,nt){let st=l.get(nt);st===void 0&&(st=new WeakMap,l.set(nt,st));let ft=st.get(N);ft===void 0&&(ft=i.getUniformBlockIndex(nt,N.name),st.set(N,ft))}function at(N,nt){const ft=l.get(nt).get(N);c.get(nt)!==ft&&(i.uniformBlockBinding(nt,ft,N.__bindingPointIndex),c.set(nt,ft))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ht={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,A=null,w=null,E=new Et(0,0,0),C=0,S=!1,y=null,R=null,U=null,F=null,k=null,ae.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:gt,bindFramebuffer:Ft,drawBuffers:Rt,useProgram:$t,setBlending:fe,setMaterial:zt,setFlipSided:Ut,setCullFace:Mt,setLineWidth:pe,setPolygonOffset:St,setScissorTest:Ht,activeTexture:Pe,bindTexture:Se,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:Tt,texImage3D:et,updateUBOMapping:wt,uniformBlockBinding:at,texStorage2D:it,texStorage3D:bt,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:At,scissor:lt,viewport:It,reset:Bt}}function ug(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):Ar("canvas")}function _(P,b,B){let Y=1;const j=Se(P);if((j.width>B||j.height>B)&&(Y=B/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Y*j.width),At=Math.floor(Y*j.height);d===void 0&&(d=g(q,At));const it=b?g(q,At):d;return it.width=q,it.height=At,it.getContext("2d").drawImage(P,0,0,q,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+At+")."),it}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,b,B,Y,j=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=b;if(b===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),b===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),b===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),b===i.RGBA){const At=j?Tr:Jt.getTransfer(Y);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=At===se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(P,b){let B;return P?b===null||b===Ti||b===Ls?B=i.DEPTH24_STENCIL8:b===Pn?B=i.DEPTH32F_STENCIL8:b===Ds&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ti||b===Ls?B=i.DEPTH_COMPONENT24:b===Pn?B=i.DEPTH_COMPONENT32F:b===Ds&&(B=i.DEPTH_COMPONENT16),B}function A(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==Cn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&h.delete(b)}function E(P){const b=P.target;b.removeEventListener("dispose",E),y(b)}function C(P){const b=n.get(P);if(b.__webglInit===void 0)return;const B=P.source,Y=u.get(B);if(Y){const j=Y[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(P),Object.keys(Y).length===0&&u.delete(B)}n.remove(P)}function S(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const B=P.source,Y=u.get(B);delete Y[b.__cacheKey],o.memory.textures--}function y(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let j=0;j<b.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=P.textures;for(let Y=0,j=B.length;Y<j;Y++){const q=n.get(B[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(P)}let R=0;function U(){R=0}function F(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function k(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function H(P,b){const B=n.get(P);if(P.isVideoTexture&&Ht(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,P,b);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function X(P,b){const B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){$(B,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function K(P,b){const B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){$(B,P,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function W(P,b){const B=n.get(P);if(P.version>0&&B.__version!==P.version){J(B,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const ot={[Ps]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},ht={[on]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},Ct={[hu]:i.NEVER,[gu]:i.ALWAYS,[uu]:i.LESS,[zl]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Wt(P,b){if(b.type===Pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Cn||b.magFilter===Hr||b.magFilter===Xs||b.magFilter===Ei||b.minFilter===Cn||b.minFilter===Hr||b.minFilter===Xs||b.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ot[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ot[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ot[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ht[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==Xs&&b.minFilter!==Ei||b.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(P,b){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const Y=b.source;let j=u.get(Y);j===void 0&&(j={},u.set(Y,j));const q=k(b);if(q!==P.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[q].usedTimes++;const At=j[P.__cacheKey];At!==void 0&&(j[P.__cacheKey].usedTimes--,At.usedTimes===0&&S(b)),P.__cacheKey=q,P.__webglTexture=j[q].texture}return B}function de(P,b,B){return Math.floor(Math.floor(P/B)/b)}function Qt(P,b,B,Y){const q=P.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,B,Y,b.data);else{q.sort((et,lt)=>et.start-lt.start);let At=0;for(let et=1;et<q.length;et++){const lt=q[At],It=q[et],wt=lt.start+lt.count,at=de(It.start,b.width,4),Bt=de(lt.start,b.width,4);It.start<=wt+1&&at===Bt&&de(It.start+It.count-1,b.width,4)===at?lt.count=Math.max(lt.count,It.start+It.count-lt.start):(++At,q[At]=It)}q.length=At+1;const it=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let et=0,lt=q.length;et<lt;et++){const It=q[et],wt=Math.floor(It.start/4),at=Math.ceil(It.count/4),Bt=wt%b.width,N=Math.floor(wt/b.width),nt=at,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Bt,N,nt,st,B,Y,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function $(P,b,B){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ae(P,b),q=b.source;e.bindTexture(Y,P.__webglTexture,i.TEXTURE0+B);const At=n.get(q);if(q.version!==At.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const it=Jt.getPrimaries(Jt.workingColorSpace),bt=b.colorSpace===ii?null:Jt.getPrimaries(b.colorSpace),Tt=b.colorSpace===ii||it===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let et=_(b.image,!1,s.maxTextureSize);et=Pe(b,et);const lt=r.convert(b.format,b.colorSpace),It=r.convert(b.type);let wt=M(b.internalFormat,lt,It,b.colorSpace,b.isVideoTexture);Wt(Y,b);let at;const Bt=b.mipmaps,N=b.isVideoTexture!==!0,nt=At.__version===void 0||j===!0,st=q.dataReady,ft=A(b,et);if(b.isDepthTexture)wt=x(b.format===Us,b.type),nt&&(N?e.texStorage2D(i.TEXTURE_2D,1,wt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,wt,et.width,et.height,0,lt,It,null));else if(b.isDataTexture)if(Bt.length>0){N&&nt&&e.texStorage2D(i.TEXTURE_2D,ft,wt,Bt[0].width,Bt[0].height);for(let Q=0,Z=Bt.length;Q<Z;Q++)at=Bt[Q],N?st&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,lt,It,at.data):e.texImage2D(i.TEXTURE_2D,Q,wt,at.width,at.height,0,lt,It,at.data);b.generateMipmaps=!1}else N?(nt&&e.texStorage2D(i.TEXTURE_2D,ft,wt,et.width,et.height),st&&Qt(b,et,lt,It)):e.texImage2D(i.TEXTURE_2D,0,wt,et.width,et.height,0,lt,It,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,wt,Bt[0].width,Bt[0].height,et.depth);for(let Q=0,Z=Bt.length;Q<Z;Q++)if(at=Bt[Q],b.format!==En)if(lt!==null)if(N){if(st)if(b.layerUpdates.size>0){const vt=Fc(at.width,at.height,b.format,b.type);for(const Ot of b.layerUpdates){const ce=at.data.subarray(Ot*vt/at.data.BYTES_PER_ELEMENT,(Ot+1)*vt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ot,at.width,at.height,1,lt,ce)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,et.depth,lt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,wt,at.width,at.height,et.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,et.depth,lt,It,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,wt,at.width,at.height,et.depth,0,lt,It,at.data)}else{N&&nt&&e.texStorage2D(i.TEXTURE_2D,ft,wt,Bt[0].width,Bt[0].height);for(let Q=0,Z=Bt.length;Q<Z;Q++)at=Bt[Q],b.format!==En?lt!==null?N?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,wt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?st&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,lt,It,at.data):e.texImage2D(i.TEXTURE_2D,Q,wt,at.width,at.height,0,lt,It,at.data)}else if(b.isDataArrayTexture)if(N){if(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,wt,et.width,et.height,et.depth),st)if(b.layerUpdates.size>0){const Q=Fc(et.width,et.height,b.format,b.type);for(const Z of b.layerUpdates){const vt=et.data.subarray(Z*Q/et.data.BYTES_PER_ELEMENT,(Z+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,lt,It,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,lt,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,et.width,et.height,et.depth,0,lt,It,et.data);else if(b.isData3DTexture)N?(nt&&e.texStorage3D(i.TEXTURE_3D,ft,wt,et.width,et.height,et.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,lt,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,wt,et.width,et.height,et.depth,0,lt,It,et.data);else if(b.isFramebufferTexture){if(nt)if(N)e.texStorage2D(i.TEXTURE_2D,ft,wt,et.width,et.height);else{let Q=et.width,Z=et.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,wt,Q,Z,0,lt,It,null),Q>>=1,Z>>=1}}else if(Bt.length>0){if(N&&nt){const Q=Se(Bt[0]);e.texStorage2D(i.TEXTURE_2D,ft,wt,Q.width,Q.height)}for(let Q=0,Z=Bt.length;Q<Z;Q++)at=Bt[Q],N?st&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt,It,at):e.texImage2D(i.TEXTURE_2D,Q,wt,lt,It,at);b.generateMipmaps=!1}else if(N){if(nt){const Q=Se(et);e.texStorage2D(i.TEXTURE_2D,ft,wt,Q.width,Q.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,It,et)}else e.texImage2D(i.TEXTURE_2D,0,wt,lt,It,et);m(b)&&p(Y),At.__version=q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function J(P,b,B){if(b.image.length!==6)return;const Y=ae(P,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+B);const q=n.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const At=Jt.getPrimaries(Jt.workingColorSpace),it=b.colorSpace===ii?null:Jt.getPrimaries(b.colorSpace),bt=b.colorSpace===ii||At===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,lt=[];for(let Z=0;Z<6;Z++)!Tt&&!et?lt[Z]=_(b.image[Z],!0,s.maxCubemapSize):lt[Z]=et?b.image[Z].image:b.image[Z],lt[Z]=Pe(b,lt[Z]);const It=lt[0],wt=r.convert(b.format,b.colorSpace),at=r.convert(b.type),Bt=M(b.internalFormat,wt,at,b.colorSpace),N=b.isVideoTexture!==!0,nt=q.__version===void 0||Y===!0,st=j.dataReady;let ft=A(b,It);Wt(i.TEXTURE_CUBE_MAP,b);let Q;if(Tt){N&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Bt,It.width,It.height);for(let Z=0;Z<6;Z++){Q=lt[Z].mipmaps;for(let vt=0;vt<Q.length;vt++){const Ot=Q[vt];b.format!==En?wt!==null?N?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,Ot.width,Ot.height,wt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,Bt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,Ot.width,Ot.height,wt,at,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,Bt,Ot.width,Ot.height,0,wt,at,Ot.data)}}}else{if(Q=b.mipmaps,N&&nt){Q.length>0&&ft++;const Z=Se(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Bt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,lt[Z].width,lt[Z].height,wt,at,lt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,lt[Z].width,lt[Z].height,0,wt,at,lt[Z].data);for(let vt=0;vt<Q.length;vt++){const ce=Q[vt].image[Z].image;N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,ce.width,ce.height,wt,at,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,Bt,ce.width,ce.height,0,wt,at,ce.data)}}else{N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,at,lt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Bt,wt,at,lt[Z]);for(let vt=0;vt<Q.length;vt++){const Ot=Q[vt];N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,wt,at,Ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,Bt,wt,at,Ot.image[Z])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),q.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function gt(P,b,B,Y,j,q){const At=r.convert(B.format,B.colorSpace),it=r.convert(B.type),bt=M(B.internalFormat,At,it,B.colorSpace),Tt=n.get(b),et=n.get(B);if(et.__renderTarget=b,!Tt.__hasExternalTextures){const lt=Math.max(1,b.width>>q),It=Math.max(1,b.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,bt,lt,It,b.depth,0,At,it,null):e.texImage2D(j,q,bt,lt,It,0,At,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,et.__webglTexture,0,pe(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,et.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(P,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const Y=b.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=x(b.stencilBuffer,j),At=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=pe(b);St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,q,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,P)}else{const Y=b.textures;for(let j=0;j<Y.length;j++){const q=Y[j],At=r.convert(q.format,q.colorSpace),it=r.convert(q.type),bt=M(q.internalFormat,At,it,q.colorSpace),Tt=pe(b);B&&St(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,bt,b.width,b.height):St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const j=Y.__webglTexture,q=pe(b);if(b.depthTexture.format===Is)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(b.depthTexture.format===Us)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function $t(P){const b=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=P.texture.mipmaps;Y&&Y.length>0?Rt(b.__webglFramebuffer[0],P):Rt(b.__webglFramebuffer,P)}else if(B){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ft(b.__webglDepthbuffer[Y],P,!1);else{const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ft(b.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(P,b,B){const Y=n.get(P);b!==void 0&&gt(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(P)}function L(P){const b=P.texture,B=n.get(P),Y=n.get(b);P.addEventListener("dispose",E);const j=P.textures,q=P.isWebGLCubeRenderTarget===!0,At=j.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[it]=[];for(let bt=0;bt<b.mipmaps.length;bt++)B.__webglFramebuffer[it][bt]=i.createFramebuffer()}else B.__webglFramebuffer[it]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let it=0;it<b.mipmaps.length;it++)B.__webglFramebuffer[it]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(At)for(let it=0,bt=j.length;it<bt;it++){const Tt=n.get(j[it]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&St(P)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const bt=j[it];B.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[it]);const Tt=r.convert(bt.format,bt.colorSpace),et=r.convert(bt.type),lt=M(bt.internalFormat,Tt,et,bt.colorSpace,P.isXRRenderTarget===!0),It=pe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,B.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b);for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)gt(B.__webglFramebuffer[it][bt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,bt);else gt(B.__webglFramebuffer[it],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let it=0,bt=j.length;it<bt;it++){const Tt=j[it],et=n.get(Tt);let lt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),Wt(lt,Tt),gt(B.__webglFramebuffer,P,Tt,i.COLOR_ATTACHMENT0+it,lt,0),m(Tt)&&p(lt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),Wt(it,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)gt(B.__webglFramebuffer[bt],P,b,i.COLOR_ATTACHMENT0,it,bt);else gt(B.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,it,0);m(b)&&p(it),e.unbindTexture()}P.depthBuffer&&$t(P)}function fe(P){const b=P.textures;for(let B=0,Y=b.length;B<Y;B++){const j=b[B];if(m(j)){const q=v(P),At=n.get(j).__webglTexture;e.bindTexture(q,At),p(q),e.unbindTexture()}}}const zt=[],Ut=[];function Mt(P){if(P.samples>0){if(St(P)===!1){const b=P.textures,B=P.width,Y=P.height;let j=i.COLOR_BUFFER_BIT;const q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(P),it=b.length>1;if(it)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const bt=P.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const et=n.get(b[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,j,i.NEAREST),c===!0&&(zt.length=0,Ut.length=0,zt.push(i.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(zt.push(q),Ut.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const et=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pe(P){return Math.min(s.maxSamples,P.samples)}function St(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Pe(P,b){const B=P.colorSpace,Y=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==cs&&B!==ii&&(Jt.getTransfer(B)===se?(Y!==En||j!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=ze,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=St}function dg(i,t){function e(n,s=ii){let r;const o=Jt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return i.BYTE;if(n===Dl)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Nl)return i.RGB;if(n===En)return i.RGBA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===wa)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===Fl)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===xr||n===vr||n===Mr||n===Sr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Ho||n===Go||n===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===$o||n===Zo||n===Ko||n===jo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===ca||n===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`;class mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Kl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gg extends Pi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new mg,p={},v=e.getContextAttributes();let M=null,x=null;const A=[],w=[],E=new dt;let C=null;const S=new fn;S.viewport=new xe;const y=new fn;y.viewport=new xe;const R=[S,y],U=new Ud;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=A[$];return J===void 0&&(J=new co,A[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=A[$];return J===void 0&&(J=new co,A[$]=J),J.getGripSpace()},this.getHand=function($){let J=A[$];return J===void 0&&(J=new co,A[$]=J),J.getHandSpace()};function H($){const J=w.indexOf($.inputSource);if(J===-1)return;const gt=A[J];gt!==void 0&&(gt.update($.inputSource,$.frame,l||o),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let $=0;$<A.length;$++){const J=w[$];J!==null&&(w[$]=null,A[$].disconnect(J))}F=null,k=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(M),f=null,u=null,d=null,s=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ft=null,Rt=null;v.depth&&(Rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?Us:Is,Ft=v.stencil?Ls:Ti);const $t={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new wi(u.textureWidth,u.textureHeight,{format:En,type:Nn,depthTexture:new Zl(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wi(f.framebufferWidth,f.framebufferHeight,{format:En,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let J=0;J<$.removed.length;J++){const gt=$.removed[J],Ft=w.indexOf(gt);Ft>=0&&(w[Ft]=null,A[Ft].disconnect(gt))}for(let J=0;J<$.added.length;J++){const gt=$.added[J];let Ft=w.indexOf(gt);if(Ft===-1){for(let $t=0;$t<A.length;$t++)if($t>=w.length){w.push(gt),Ft=$t;break}else if(w[$t]===null){w[$t]=gt,Ft=$t;break}if(Ft===-1)break}const Rt=A[Ft];Rt&&Rt.connect(gt)}}const W=new D,ot=new D;function ht($,J,gt){W.setFromMatrixPosition(J.matrixWorld),ot.setFromMatrixPosition(gt.matrixWorld);const Ft=W.distanceTo(ot),Rt=J.projectionMatrix.elements,$t=gt.projectionMatrix.elements,ze=Rt[14]/(Rt[10]-1),L=Rt[14]/(Rt[10]+1),fe=(Rt[9]+1)/Rt[5],zt=(Rt[9]-1)/Rt[5],Ut=(Rt[8]-1)/Rt[0],Mt=($t[8]+1)/$t[0],pe=ze*Ut,St=ze*Mt,Ht=Ft/(-Ut+Mt),Pe=Ht*-Ut;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pe),$.translateZ(Ht),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Se=ze+Ht,P=L+Ht,b=pe-Pe,B=St+(Ft-Pe),Y=fe*L/P*Se,j=zt*L/P*Se;$.projectionMatrix.makePerspective(b,B,Y,j,Se,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ct($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,gt=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),U.near=y.near=S.near=J,U.far=y.far=S.far=gt,(F!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,k=U.far),U.layers.mask=$.layers.mask|6,S.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const Ft=$.parent,Rt=U.cameras;Ct(U,Ft);for(let $t=0;$t<Rt.length;$t++)Ct(Rt[$t],Ft);Rt.length===2?ht(U,S,y):U.projectionMatrix.copy(S.projectionMatrix),Wt($,U,Ft)};function Wt($,J,gt){gt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ns*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return p[$]};let ae=null;function de($,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ft=!1;gt.length!==U.cameras.length&&(U.cameras.length=0,Ft=!0);for(let L=0;L<gt.length;L++){const fe=gt[L];let zt=null;if(f!==null)zt=f.getViewport(fe);else{const Mt=d.getViewSubImage(u,fe);zt=Mt.viewport,L===0&&(t.setRenderTargetTextures(x,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(x))}let Ut=R[L];Ut===void 0&&(Ut=new fn,Ut.layers.enable(L),Ut.viewport=new xe,R[L]=Ut),Ut.matrix.fromArray(fe.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(fe.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(zt.x,zt.y,zt.width,zt.height),L===0&&(U.matrix.copy(Ut.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ft===!0&&U.cameras.push(Ut)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const L=d.getDepthInformation(gt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let L=0;L<gt.length;L++){const fe=gt[L].camera;if(fe){let zt=p[fe];zt||(zt=new Kl,p[fe]=zt);const Ut=d.getCameraImage(fe);zt.sourceTexture=Ut}}}}for(let gt=0;gt<A.length;gt++){const Ft=w[gt],Rt=A[gt];Ft!==null&&Rt!==void 0&&Rt.update(Ft,J,l||o)}ae&&ae($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Qt=new th;Qt.setAnimationLoop(de),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}const vi=new cn,_g=new Xt;function xg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ql(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,vi.copy(x),vi.x*=-1,vi.y*=-1,vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(vi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function l(v,M){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(v,A);const w=t.render.frame;r[v.id]!==w&&(u(v),r[v.id]=w)}function h(v){const M=d();v.__bindingPointIndex=M;const x=i.createBuffer(),A=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=s[v.id],x=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,E=x.length;w<E;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,y=C.length;S<y;S++){const R=C[S];if(f(R,w,S,A)===!0){const U=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let H=0;H<F.length;H++){const X=F[H],K=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,U+k,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,x,A){const w=v.value,E=M+"_"+x;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const C=A[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(v){const M=v.uniforms;let x=0;const A=16;for(let E=0,C=M.length;E<C;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,R=S.length;y<R;y++){const U=S[y],F=Array.isArray(U.value)?U.value:[U.value];for(let k=0,H=F.length;k<H;k++){const X=F[k],K=_(X),W=x%A,ot=W%K.boundary,ht=W+ot;x+=ot,ht!==0&&A-ht<K.storage&&(x+=A-ht),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=K.storage}}}const w=x%A;return w>0&&(x+=A-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Mg{constructor(t={}){const{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Ie;let w=0,E=0,C=null,S=-1,y=null;const R=new xe,U=new xe;let F=null;const k=new Et(0);let H=0,X=e.width,K=e.height,W=1,ot=null,ht=null;const Ct=new xe(0,0,X,K),Wt=new xe(0,0,X,K);let ae=!1;const de=new La;let Qt=!1,$=!1;const J=new Xt,gt=new D,Ft=new xe,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ze(){return C===null?W:1}let L=n;function fe(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Q,!1),L===null){const O="webgl2";if(L=fe(O,T),L===null)throw fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let zt,Ut,Mt,pe,St,Ht,Pe,Se,P,b,B,Y,j,q,At,it,bt,Tt,et,lt,It,wt,at,Bt;function N(){zt=new P0(L),zt.init(),wt=new dg(L,zt),Ut=new b0(L,zt,t,wt),Mt=new hg(L,zt),Ut.reversedDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),pe=new I0(L),St=new jm,Ht=new ug(L,zt,Mt,St,Ut,wt,pe),Pe=new T0(x),Se=new C0(x),P=new zd(L),at=new S0(L,P),b=new D0(L,P,pe,at),B=new N0(L,b,P,pe),et=new U0(L,Ut,Ht),it=new E0(St),Y=new Km(x,Pe,Se,zt,Ut,at,it),j=new xg(x,St),q=new Qm,At=new rg(zt),Tt=new M0(x,Pe,Se,Mt,B,f,c),bt=new cg(x,B,Ut),Bt=new vg(L,pe,Ut,Mt),lt=new y0(L,zt,pe),It=new L0(L,zt,pe),pe.programs=Y.programs,x.capabilities=Ut,x.extensions=zt,x.properties=St,x.renderLists=q,x.shadowMap=bt,x.state=Mt,x.info=pe}N();const nt=new gg(x,L);this.xr=nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,O,G=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=O,e.width=Math.floor(T*W),e.height=Math.floor(O*W),G===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(X*W,K*W).floor()},this.setDrawingBufferSize=function(T,O,G){X=T,K=O,W=G,e.width=Math.floor(T*G),e.height=Math.floor(O*G),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(Ct)},this.setViewport=function(T,O,G,V){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,O,G,V),Mt.viewport(R.copy(Ct).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,O,G,V){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,O,G,V),Mt.scissor(U.copy(Wt).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Mt.setScissorTest(ae=T)},this.setOpaqueSort=function(T){ot=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,G=!0){let V=0;if(T){let z=!1;if(C!==null){const tt=C.texture.format;z=tt===Ca||tt===Ra||tt===Aa}if(z){const tt=C.texture.type,ct=tt===Nn||tt===Ti||tt===Ds||tt===Ls||tt===Ea||tt===Ta,_t=Tt.getClearColor(),ut=Tt.getClearAlpha(),Lt=_t.r,Nt=_t.g,Pt=_t.b;ct?(g[0]=Lt,g[1]=Nt,g[2]=Pt,g[3]=ut,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Lt,_[1]=Nt,_[2]=Pt,_[3]=ut,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),Tt.dispose(),q.dispose(),At.dispose(),St.dispose(),Pe.dispose(),Se.dispose(),B.dispose(),at.dispose(),Bt.dispose(),Y.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",An),nt.removeEventListener("sessionend",Ja),di.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=pe.autoReset,O=bt.enabled,G=bt.autoUpdate,V=bt.needsUpdate,z=bt.type;N(),pe.autoReset=T,bt.enabled=O,bt.autoUpdate=G,bt.needsUpdate=V,bt.type=z}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){const O=T.target;O.removeEventListener("dispose",Z),vt(O)}function vt(T){Ot(T),St.remove(T)}function Ot(T){const O=St.get(T).programs;O!==void 0&&(O.forEach(function(G){Y.releaseProgram(G)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,G,V,z,tt){O===null&&(O=Rt);const ct=z.isMesh&&z.matrixWorld.determinant()<0,_t=wh(T,O,G,V,z);Mt.setMaterial(V,ct);let ut=G.index,Lt=1;if(V.wireframe===!0){if(ut=b.getWireframeAttribute(G),ut===void 0)return;Lt=2}const Nt=G.drawRange,Pt=G.attributes.position;let Yt=Nt.start*Lt,ie=(Nt.start+Nt.count)*Lt;tt!==null&&(Yt=Math.max(Yt,tt.start*Lt),ie=Math.min(ie,(tt.start+tt.count)*Lt)),ut!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,ut.count)):Pt!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,Pt.count));const _e=ie-Yt;if(_e<0||_e===1/0)return;at.setup(z,V,_t,G,ut);let le,oe=lt;if(ut!==null&&(le=P.get(ut),oe=It,oe.setIndex(le)),z.isMesh)V.wireframe===!0?(Mt.setLineWidth(V.wireframeLinewidth*ze()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(z.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),Mt.setLineWidth(Dt*ze()),z.isLineSegments?oe.setMode(L.LINES):z.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else z.isPoints?oe.setMode(L.POINTS):z.isSprite&&oe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Dt=z._multiDrawStarts,me=z._multiDrawCounts,jt=z._multiDrawCount,tn=ut?P.get(ut).bytesPerElement:1,Ii=St.get(V).currentProgram.getUniforms();for(let en=0;en<jt;en++)Ii.setValue(L,"_gl_DrawID",en),oe.render(Dt[en]/tn,me[en])}else if(z.isInstancedMesh)oe.renderInstances(Yt,_e,z.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,me=Math.min(G.instanceCount,Dt);oe.renderInstances(Yt,_e,me)}else oe.render(Yt,_e)};function ce(T,O,G){T.transparent===!0&&T.side===Xn&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,Ws(T,O,G),T.side=ci,T.needsUpdate=!0,Ws(T,O,G),T.side=Xn):Ws(T,O,G)}this.compile=function(T,O,G=null){G===null&&(G=T),p=At.get(G),p.init(O),M.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==G&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const V=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const tt=z.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const _t=tt[ct];ce(_t,G,z),V.add(_t)}else ce(tt,G,z),V.add(tt)}),p=M.pop(),V},this.compileAsync=function(T,O,G=null){const V=this.compile(T,O,G);return new Promise(z=>{function tt(){if(V.forEach(function(ct){St.get(ct).currentProgram.isReady()&&V.delete(ct)}),V.size===0){z(T);return}setTimeout(tt,10)}zt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let te=null;function zn(T){te&&te(T)}function An(){di.stop()}function Ja(){di.start()}const di=new th;di.setAnimationLoop(zn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(T){te=T,nt.setAnimationLoop(T),T===null?di.stop():di.start()},nt.addEventListener("sessionstart",An),nt.addEventListener("sessionend",Ja),this.render=function(T,O){if(window.__galleryCaptureScene)return;if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(O),O=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,C),p=At.get(T,M.length),p.init(O),M.push(p),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),de.setFromProjectionMatrix(J,Dn,O.reversedDepth),$=this.localClippingEnabled,Qt=it.init(this.clippingPlanes,$),m=q.get(T,v.length),m.init(),v.push(m),nt.enabled===!0&&nt.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Br(tt,O,-1/0,x.sortObjects)}Br(T,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ot,ht),$t=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,$t&&Tt.addToRenderList(m,T),this.info.render.frame++,Qt===!0&&it.beginShadows();const G=p.state.shadowsArray;bt.render(G,T,O),Qt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const tt=O.cameras;if(z.length>0)for(let ct=0,_t=tt.length;ct<_t;ct++){const ut=tt[ct];tc(V,z,T,ut)}$t&&Tt.render(T);for(let ct=0,_t=tt.length;ct<_t;ct++){const ut=tt[ct];Qa(m,T,ut,ut.viewport)}}else z.length>0&&tc(V,z,T,O),$t&&Tt.render(T),Qa(m,T,O);C!==null&&E===0&&(Ht.updateMultisampleRenderTarget(C),Ht.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,O),at.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Qt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Br(T,O,G,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||de.intersectsSprite(T)){V&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const ct=B.update(T),_t=T.material;_t.visible&&m.push(T,ct,_t,G,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||de.intersectsObject(T))){const ct=B.update(T),_t=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(_t)){const ut=ct.groups;for(let Lt=0,Nt=ut.length;Lt<Nt;Lt++){const Pt=ut[Lt],Yt=_t[Pt.materialIndex];Yt&&Yt.visible&&m.push(T,ct,Yt,G,Ft.z,Pt)}}else _t.visible&&m.push(T,ct,_t,G,Ft.z,null)}}const tt=T.children;for(let ct=0,_t=tt.length;ct<_t;ct++)Br(tt[ct],O,G,V)}function Qa(T,O,G,V){const z=T.opaque,tt=T.transmissive,ct=T.transparent;p.setupLightsView(G),Qt===!0&&it.setGlobalState(x.clippingPlanes,G),V&&Mt.viewport(R.copy(V)),z.length>0&&Vs(z,O,G),tt.length>0&&Vs(tt,O,G),ct.length>0&&Vs(ct,O,G),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function tc(T,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new wi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Bs:Nn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[V.id],ct=V.viewport||R;tt.setSize(ct.z*x.transmissionResolutionScale,ct.w*x.transmissionResolutionScale);const _t=x.getRenderTarget(),ut=x.getActiveCubeFace(),Lt=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(k),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),$t&&Tt.render(G);const Nt=x.toneMapping;x.toneMapping=oi;const Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Qt===!0&&it.setGlobalState(x.clippingPlanes,V),Vs(T,G,V),Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ie=0,_e=O.length;ie<_e;ie++){const le=O[ie],oe=le.object,Dt=le.geometry,me=le.material,jt=le.group;if(me.side===Xn&&oe.layers.test(V.layers)){const tn=me.side;me.side=Je,me.needsUpdate=!0,ec(oe,G,V,Dt,me,jt),me.side=tn,me.needsUpdate=!0,Yt=!0}}Yt===!0&&(Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt))}x.setRenderTarget(_t,ut,Lt),x.setClearColor(k,H),Pt!==void 0&&(V.viewport=Pt),x.toneMapping=Nt}function Vs(T,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let z=0,tt=T.length;z<tt;z++){const ct=T[z],_t=ct.object,ut=ct.geometry,Lt=ct.group;let Nt=ct.material;Nt.allowOverride===!0&&V!==null&&(Nt=V),_t.layers.test(G.layers)&&ec(_t,O,G,ut,Nt,Lt)}}function ec(T,O,G,V,z,tt){T.onBeforeRender(x,O,G,V,z,tt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,O,G,V,T,tt),z.transparent===!0&&z.side===Xn&&z.forceSinglePass===!1?(z.side=Je,z.needsUpdate=!0,x.renderBufferDirect(G,O,V,z,T,tt),z.side=ci,z.needsUpdate=!0,x.renderBufferDirect(G,O,V,z,T,tt),z.side=Xn):x.renderBufferDirect(G,O,V,z,T,tt),T.onAfterRender(x,O,G,V,z,tt)}function Ws(T,O,G){O.isScene!==!0&&(O=Rt);const V=St.get(T),z=p.state.lights,tt=p.state.shadowsArray,ct=z.state.version,_t=Y.getParameters(T,z.state,tt,O,G),ut=Y.getProgramCacheKey(_t);let Lt=V.programs;V.environment=T.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(T.isMeshStandardMaterial?Se:Pe).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Lt===void 0&&(T.addEventListener("dispose",Z),Lt=new Map,V.programs=Lt);let Nt=Lt.get(ut);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===ct)return ic(T,_t),Nt}else _t.uniforms=Y.getUniforms(T),T.onBeforeCompile(_t,x),Nt=Y.acquireProgram(_t,ut),Lt.set(ut,Nt),V.uniforms=_t.uniforms;const Pt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=it.uniform),ic(T,_t),V.needsLights=Rh(T),V.lightsStateVersion=ct,V.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function nc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=br.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function ic(T,O){const G=St.get(T);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function wh(T,O,G,V,z){O.isScene!==!0&&(O=Rt),Ht.resetTextureUnits();const tt=O.fog,ct=V.isMeshStandardMaterial?O.environment:null,_t=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cs,ut=(V.isMeshStandardMaterial?Se:Pe).get(V.envMap||ct),Lt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ie=!!G.morphAttributes.color;let _e=oi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=x.toneMapping);const le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=le!==void 0?le.length:0,Dt=St.get(V),me=p.state.lights;if(Qt===!0&&($===!0||T!==y)){const Xe=T===y&&V.id===S;it.setState(V,T,Xe)}let jt=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==me.state.version||Dt.outputColorSpace!==_t||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==ut||V.fog===!0&&Dt.fog!==tt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Nt||Dt.morphTargets!==Pt||Dt.morphNormals!==Yt||Dt.morphColors!==ie||Dt.toneMapping!==_e||Dt.morphTargetsCount!==oe)&&(jt=!0):(jt=!0,Dt.__version=V.version);let tn=Dt.currentProgram;jt===!0&&(tn=Ws(V,O,z));let Ii=!1,en=!1,ps=!1;const ge=tn.getUniforms(),ln=Dt.uniforms;if(Mt.useProgram(tn.program)&&(Ii=!0,en=!0,ps=!0),V.id!==S&&(S=V.id,en=!0),Ii||y!==T){Mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",T.projectionMatrix),ge.setValue(L,"viewMatrix",T.matrixWorldInverse);const Ze=ge.map.cameraPosition;Ze!==void 0&&Ze.setValue(L,gt.setFromMatrixPosition(T.matrixWorld)),Ut.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,en=!0,ps=!0)}if(z.isSkinnedMesh){ge.setOptional(L,z,"bindMatrix"),ge.setOptional(L,z,"bindMatrixInverse");const Xe=z.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ge.setValue(L,"boneTexture",Xe.boneTexture,Ht))}z.isBatchedMesh&&(ge.setOptional(L,z,"batchingTexture"),ge.setValue(L,"batchingTexture",z._matricesTexture,Ht),ge.setOptional(L,z,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",z._indirectTexture,Ht),ge.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",z._colorsTexture,Ht));const hn=G.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&et.update(z,G,tn),(en||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,ge.setValue(L,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ln.envMap.value=ut,ln.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),en&&(ge.setValue(L,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Ah(ln,ps),tt&&V.fog===!0&&j.refreshFogUniforms(ln,tt),j.refreshMaterialUniforms(ln,V,W,K,p.state.transmissionRenderTarget[T.id]),br.upload(L,nc(Dt),ln,Ht)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(br.upload(L,nc(Dt),ln,Ht),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(L,"center",z.center),ge.setValue(L,"modelViewMatrix",z.modelViewMatrix),ge.setValue(L,"normalMatrix",z.normalMatrix),ge.setValue(L,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xe=V.uniformsGroups;for(let Ze=0,kr=Xe.length;Ze<kr;Ze++){const fi=Xe[Ze];Bt.update(fi,tn),Bt.bind(fi,tn)}}return tn}function Ah(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Rh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,G){const V=St.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),St.get(T.texture).__webglTexture=O,St.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const G=St.get(T);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const Ch=L.createFramebuffer();this.setRenderTarget=function(T,O=0,G=0){C=T,w=O,E=G;let V=!0,z=null,tt=!1,ct=!1;if(T){const ut=St.get(T);if(ut.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(ut.__webglFramebuffer===void 0)Ht.setupRenderTarget(T);else if(ut.__hasExternalTextures)Ht.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pt=T.depthTexture;if(ut.__boundDepthTexture!==Pt){if(Pt!==null&&St.has(Pt)&&(T.width!==Pt.image.width||T.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(T)}}const Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ct=!0);const Nt=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?z=Nt[O][G]:z=Nt[O],tt=!0):T.samples>0&&Ht.useMultisampledRTT(T)===!1?z=St.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?z=Nt[G]:z=Nt,R.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else R.copy(Ct).multiplyScalar(W).floor(),U.copy(Wt).multiplyScalar(W).floor(),F=ae;if(G!==0&&(z=Ch),Mt.bindFramebuffer(L.FRAMEBUFFER,z)&&V&&Mt.drawBuffers(T,z),Mt.viewport(R),Mt.scissor(U),Mt.setScissorTest(F),tt){const ut=St.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ut.__webglTexture,G)}else if(ct){const ut=O;for(let Lt=0;Lt<T.textures.length;Lt++){const Nt=St.get(T.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,G,ut)}}else if(T!==null&&G!==0){const ut=St.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(T,O,G,V,z,tt,ct,_t=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut){Mt.bindFramebuffer(L.FRAMEBUFFER,ut);try{const Lt=T.textures[_t],Nt=Lt.format,Pt=Lt.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&G>=0&&G<=T.height-z&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),L.readPixels(O,G,V,z,wt.convert(Nt),wt.convert(Pt),tt))}finally{const Lt=C!==null?St.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,O,G,V,z,tt,ct,_t=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut)if(O>=0&&O<=T.width-V&&G>=0&&G<=T.height-z){Mt.bindFramebuffer(L.FRAMEBUFFER,ut);const Lt=T.textures[_t],Nt=Lt.format,Pt=Lt.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.bufferData(L.PIXEL_PACK_BUFFER,tt.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),L.readPixels(O,G,V,z,wt.convert(Nt),wt.convert(Pt),0);const ie=C!==null?St.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,ie);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Nu(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,tt),L.deleteBuffer(Yt),L.deleteSync(_e),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,G=0){const V=Math.pow(2,-G),z=Math.floor(T.image.width*V),tt=Math.floor(T.image.height*V),ct=O!==null?O.x:0,_t=O!==null?O.y:0;Ht.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ct,_t,z,tt),Mt.unbindTexture()};const Ph=L.createFramebuffer(),Dh=L.createFramebuffer();this.copyTextureToTexture=function(T,O,G=null,V=null,z=0,tt=null){tt===null&&(z!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=z,z=0):tt=0);let ct,_t,ut,Lt,Nt,Pt,Yt,ie,_e;const le=T.isCompressedTexture?T.mipmaps[tt]:T.image;if(G!==null)ct=G.max.x-G.min.x,_t=G.max.y-G.min.y,ut=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,Nt=G.min.y,Pt=G.isBox3?G.min.z:0;else{const hn=Math.pow(2,-z);ct=Math.floor(le.width*hn),_t=Math.floor(le.height*hn),T.isDataArrayTexture?ut=le.depth:T.isData3DTexture?ut=Math.floor(le.depth*hn):ut=1,Lt=0,Nt=0,Pt=0}V!==null?(Yt=V.x,ie=V.y,_e=V.z):(Yt=0,ie=0,_e=0);const oe=wt.convert(O.format),Dt=wt.convert(O.type);let me;O.isData3DTexture?(Ht.setTexture3D(O,0),me=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ht.setTexture2DArray(O,0),me=L.TEXTURE_2D_ARRAY):(Ht.setTexture2D(O,0),me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const jt=L.getParameter(L.UNPACK_ROW_LENGTH),tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ii=L.getParameter(L.UNPACK_SKIP_PIXELS),en=L.getParameter(L.UNPACK_SKIP_ROWS),ps=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt);const ge=T.isDataArrayTexture||T.isData3DTexture,ln=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const hn=St.get(T),Xe=St.get(O),Ze=St.get(hn.__renderTarget),kr=St.get(Xe.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let fi=0;fi<ut;fi++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(T).__webglTexture,z,Pt+fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(O).__webglTexture,tt,_e+fi)),L.blitFramebuffer(Lt,Nt,ct,_t,Yt,ie,ct,_t,L.DEPTH_BUFFER_BIT,L.NEAREST);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||St.has(T)){const hn=St.get(T),Xe=St.get(O);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,Ph),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dh);for(let Ze=0;Ze<ut;Ze++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hn.__webglTexture,z,Pt+Ze):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hn.__webglTexture,z),ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,tt,_e+Ze):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,tt),z!==0?L.blitFramebuffer(Lt,Nt,ct,_t,Yt,ie,ct,_t,L.COLOR_BUFFER_BIT,L.NEAREST):ln?L.copyTexSubImage3D(me,tt,Yt,ie,_e+Ze,Lt,Nt,ct,_t):L.copyTexSubImage2D(me,tt,Yt,ie,Lt,Nt,ct,_t);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ln?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(me,tt,Yt,ie,_e,ct,_t,ut,oe,Dt,le.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(me,tt,Yt,ie,_e,ct,_t,ut,oe,le.data):L.texSubImage3D(me,tt,Yt,ie,_e,ct,_t,ut,oe,Dt,le):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,tt,Yt,ie,ct,_t,oe,Dt,le.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,tt,Yt,ie,le.width,le.height,oe,le.data):L.texSubImage2D(L.TEXTURE_2D,tt,Yt,ie,ct,_t,oe,Dt,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ii),L.pixelStorei(L.UNPACK_SKIP_ROWS,en),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ps),tt===0&&O.generateMipmaps&&L.generateMipmap(me),Mt.unbindTexture()},this.initRenderTarget=function(T){St.get(T).__webglFramebuffer===void 0&&Ht.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ht.setTextureCube(T,0):T.isData3DTexture?Ht.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ht.setTexture2DArray(T,0):Ht.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,Mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const ol={type:"change"},Ga={type:"start"},rh={type:"end"},pr=new Hl,al=new ei,Sg=Math.cos(70*yr.DEG2RAD),we=new D,Ke=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},So=1e-6;class yg extends Fd{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new an,this._lastTargetPosition=new D,this._quat=new an().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nc,this._sphericalDelta=new Nc,this._scale=1,this._panOffset=new D,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new D,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Eg.bind(this),this._onPointerDown=bg.bind(this),this._onPointerUp=Tg.bind(this),this._onContextMenu=Lg.bind(this),this._onMouseWheel=Rg.bind(this),this._onKeyDown=Cg.bind(this),this._onTouchStart=Pg.bind(this),this._onTouchMove=Dg.bind(this),this._onMouseDown=wg.bind(this),this._onMouseMove=Ag.bind(this),this._interceptControlDown=Ig.bind(this),this._interceptControlUp=Ug.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ol),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pr.origin.copy(this.object.position),pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pr.direction))<Sg?this.object.lookAt(this.target):(al.setFromNormalAndCoplanarPoint(this.object.up,this.target),pr.intersectPlane(al,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>So||8*(1-this._lastQuaternion.dot(this.object.quaternion))>So||this._lastTargetPosition.distanceToSquared(this.target)>So?(this.dispatchEvent(ol),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function bg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Eg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Tg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rh),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ga)}function Ag(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Rg(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Ga),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rh))}function Cg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Pg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ga)}function Dg(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function Lg(i){this.enabled!==!1&&i.preventDefault()}function Ig(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ug(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Un=(i,t,e)=>i<t?t:i>e?e:i,Ee=(i,t,e)=>i+(t-i)*e,pn=(i,t,e)=>{const n=Un((e-i)/(t-i),0,1);return n*n*(3-2*n)},dn=(i,t)=>(i%t+t)%t;function mr(i,t){let e=i*374761393+t*668265263;return e=(e^e>>13)*1274126177,((e^e>>16)>>>0)/4294967295}function Ng(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=mr(e,n),l=mr(e+1,n),h=mr(e,n+1),d=mr(e+1,n+1);return Ee(Ee(c,l,o),Ee(h,d,o),a)}function Os(i,t,e=3){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=Ng(i*r,t*r)*s,o+=s,s*=.5,r*=2.07;return n/o}function ve(i=1){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}class Nr{constructor(t,e=!1,n=.12){this.closed=e,this.pts=Fg(t,e,n),this.cum=[0];for(let s=1;s<this.pts.length;s++)this.cum.push(this.cum[s-1]+oh(this.pts[s-1],this.pts[s]));e&&this.pts.push(this.pts[0]),this.length=this.cum[this.cum.length-1],this._buildIndex()}_buildIndex(t=1){this.cell=t,this.grid=new Map;for(let e=0;e<this.pts.length;e++){const n=this.pts[e],s=Math.floor(n.x/t),r=Math.floor(n.z/t),o=s+","+r;let a=this.grid.get(o);a||this.grid.set(o,a=[]),a.push(e)}}at(t){const e=this.length;let n=this.closed?dn(t,e):Un(t,0,e),s=0,r=this.cum.length-1;for(;s<r-1;){const f=s+r>>1;this.cum[f]<=n?s=f:r=f}const o=this.cum[s+1]-this.cum[s]||1e-6,a=Un((n-this.cum[s])/o,0,1),c=this.pts[s],l=this.pts[s+1],h=l.x-c.x,d=l.z-c.z,u=Math.hypot(h,d)||1;return{x:c.x+h*a,z:c.z+d*a,tx:h/u,tz:d/u,nx:-d/u,nz:h/u}}distanceTo(t,e,n=1/0){const s=this.cell,r=Math.floor(t/s),o=Math.floor(e/s),a=Math.ceil(Math.min(n,6)/s)+1;let c=1/0,l=0,h=-1;for(let d=r-a;d<=r+a;d++)for(let u=o-a;u<=o+a;u++){const f=this.grid.get(d+","+u);if(f)for(const g of f){const _=this.pts[g],m=Math.hypot(_.x-t,_.z-e);m<c&&(c=m,l=this.cum[g],h=g)}}if(h<0)for(let d=0;d<this.pts.length;d++){const u=this.pts[d],f=Math.hypot(u.x-t,u.z-e);f<c&&(c=f,l=this.cum[d])}return{dist:c,s:l,index:h}}}function oh(i,t){return Math.hypot(t.x-i.x,t.z-i.z)}function Fg(i,t,e){const n=[],s=i.length,r=t?s:s-1;for(let o=0;o<r;o++){const a=i[o],c=i[(o+1)%s],l=oh(a,c),h=Math.max(1,Math.ceil(l/e));for(let d=0;d<h;d++){const u=d/h;n.push({x:a.x+(c.x-a.x)*u,z:a.z+(c.z-a.z)*u})}}return t||n.push({...i[s-1]}),n}function Og({halfX:i,halfZ:t,r:e,cornerSteps:n=26}){const s=[],r=(c,l,h,d)=>{for(let u=0;u<=n;u++){const f=h+(d-h)*u/n;s.push({x:c+Math.cos(f)*e,z:l+Math.sin(f)*e})}},o=i-e,a=t-e;return s.push({x:-i,z:a}),r(-o,-a,Math.PI,Math.PI*1.5),r(o,-a,Math.PI*1.5,Math.PI*2),r(o,a,0,Math.PI/2),r(-o,a,Math.PI/2,Math.PI),ah(s)}function ah(i){const t=[];for(const e of i){const n=t[t.length-1];(!n||Math.hypot(n.x-e.x,n.z-e.z)>1e-4)&&t.push(e)}return t}function ch(i,t=!1,e=12){const n=i.slice();t?(n.unshift(i[i.length-1]),n.push(i[0],i[1])):(n.unshift(i[0]),n.push(i[i.length-1]));const s=[],r=n.length-3;for(let o=0;o<r;o++){const a=n[o],c=n[o+1],l=n[o+2],h=n[o+3];for(let d=0;d<e;d++){const u=d/e;s.push({x:cl(c.x,l.x,a.x,h.x,u),z:cl(c.z,l.z,a.z,h.z,u)})}}return t||s.push({...i[i.length-1]}),ah(s)}function cl(i,t,e,n,s){const r=s*s,o=r*s;return .5*(2*i+(-e+t)*s+(2*e-5*i+4*t-n)*r+(3*i-3*t+n-e)*o)}const ll={brick:{wall:10246724,roof:5453356},cream:{wall:14271386,roof:9066305},stone:{wall:12169376,roof:6053731},white:{wall:15130836,roof:4937057},blue:{wall:9413288,roof:4279637},green:{wall:9412738,roof:5063225},red:{wall:11030588,roof:4207404},ochre:{wall:13081170,roof:7031344},slate:{wall:11117210,roof:4869975},dark:{wall:7037271,roof:3355183},plaster:{wall:14733234,roof:8081210},station:{wall:14668994,roof:4210748}},Sn=[ne(-1.2,3.45,Math.PI,3.8,1.8,1.7,"station","station",{bay:!0}),ne(3.6,4.3,-.04,2,1.5,1.45,"hip","slate",{doors:1}),ne(2.25,5,0,1,.95,1.4,"flatTower","red",{upper:!0}),ne(-4.1,4.55,0,1.9,1.9,3.1,"waterTower","stone",{}),ne(3.1,-1.75,0,3.3,1.9,2.65,"hall","cream",{cupola:!0}),ne(1.45,-.9,Math.PI/2,1.7,1.55,2.2,"gable","plaster",{}),ne(1.45,.9,Math.PI/2,1.7,1.5,2,"gable","blue",{}),ne(5.85,-.6,Math.PI/2,1.75,1.55,2.15,"shop","red",{awning:!0}),ne(5.85,1.2,Math.PI/2,1.75,1.55,2,"gable","ochre",{}),ne(3.1,1.85,Math.PI,2.2,1.5,2.05,"gable","green",{}),ne(-1.85,-.3,.05,1.8,1.65,2.05,"gable","brick",{}),ne(-2.1,-2.5,.12,1.7,1.55,1.95,"hip","cream",{}),ne(-4,-2.1,-.2,1.9,1.6,2.15,"gable","stone",{}),ne(-4.6,-4.35,-.1,1.6,1.45,1.85,"gable","white",{}),ne(5.3,-4,0,3.3,2.05,2.45,"church","stone",{spire:2.9}),ne(2.3,-4.3,0,1.75,1.5,1.95,"gable","slate",{}),ne(.55,-4.35,0,1.6,1.45,1.85,"hip","plaster",{}),ne(-1.4,-4.9,.1,1.7,1.5,1.9,"gable","brick",{}),ne(-4.7,1.3,-.3,1.75,1.45,2.25,"mill","stone",{wheel:!0}),ne(-5.6,3.6,.2,1.6,1.45,1.8,"gable","white",{}),ne(-7.2,3.3,-.15,1.7,1.5,1.9,"gable","red",{}),ne(8.2,1.05,1.5,1.9,1.6,2.1,"gable","blue",{}),ne(8.4,-1.3,1.55,2,1.55,2,"hip","cream",{}),ne(7.9,2.9,1.05,1.7,1.45,1.85,"gable","plaster",{}),ne(6.55,4,.02,2.6,1.7,1.55,"shed","dark",{slidingDoors:!0}),ne(-3.1,-4.55,.1,1.5,1.1,1.35,"pavilion","white",{}),ne(2.6,-8.75,.12,2.3,1.8,1.95,"gable","white",{}),ne(5.3,-8.55,.15,2.8,1.8,1.7,"barn","red",{hayLoft:!0}),ne(-7.8,-8.9,-.25,2.1,1.7,1.9,"gable","stone",{})];function ne(i,t,e,n,s,r,o,a,c={}){return{x:i,z:t,rot:e,w:n,d:s,h:r,kind:o,pal:a,...c}}const Va=[{name:"high-street",halfWidth:.76,pave:"tarmac",pts:[{x:.3,z:-4.3},{x:.1,z:-2.4},{x:0,z:-.4},{x:.1,z:1.4},{x:.3,z:2.85},{x:.35,z:3.4}]},{name:"crossing-approach",halfWidth:.76,pave:"tarmac",pts:[{x:.36,z:-7.9},{x:.2,z:-7.1},{x:.05,z:-6.6},{x:-.02,z:-6},{x:.1,z:-5.1},{x:.3,z:-4.25}]},{name:"market-street",halfWidth:.7,pave:"tarmac",pts:[{x:-3.1,z:2.55},{x:-.9,z:2.5},{x:1.6,z:2.52},{x:4,z:2.35},{x:6.2,z:1.95},{x:7.9,z:1.1},{x:8.65,z:-.3},{x:8.45,z:-2.1},{x:7.45,z:-3.9},{x:5.7,z:-5},{x:3.6,z:-5.4},{x:1.7,z:-5.15},{x:.4,z:-4.55}]},{name:"mill-lane",halfWidth:.55,pave:"cobbles",pts:[{x:-2.6,z:2.52},{x:-4,z:2.6},{x:-5.3,z:2.55},{x:-6.5,z:2.3},{x:-7.35,z:1.95},{x:-7.95,z:1.5}]},{name:"pond-walk",halfWidth:.4,pave:"gravel",pts:[{x:.1,z:-3.4},{x:-1.5,z:-3.35},{x:-2.9,z:-3.3},{x:-4.1,z:-2.6},{x:-5.1,z:-2.15},{x:-6.3,z:-2.1},{x:-7.3,z:-1.55},{x:-7.9,z:-.95}]},{name:"farm-lane",halfWidth:.5,pave:"gravel",pts:[{x:.22,z:-7.05},{x:1.4,z:-7.55},{x:2.55,z:-7.75},{x:3.9,z:-7.6},{x:4.9,z:-7.3}]},{name:"field-path",halfWidth:.34,pave:"gravel",pts:[{x:-.05,z:-6.62},{x:-1.6,z:-6.9},{x:-3.4,z:-7.35},{x:-5.2,z:-7.85}]}],Wa=[{x:-1.15,z:2.45,r:1.8,pave:"setts",shape:"rect",w:4.6,d:1.55,rot:.02},{x:3.15,z:.25,r:1.95,pave:"setts",shape:"rect",w:3.5,d:3.05,rot:.03},{x:6.35,z:2.75,r:1.55,pave:"gravel",shape:"rect",w:2.9,d:1.45,rot:.06}],lh=[[-.8,-3.3,"post"],[1.15,-1.4,"post"],[-.85,.6,"post"],[1.3,1.45,"post"],[1.05,3.9,"post"],[-2.6,3.95,"post"],[4.6,3.35,"post"],[7.3,3.3,"post"],[1.55,-.6,"square"],[4.75,.3,"square"],[-3.4,5.35,"platform"],[-1.1,5.35,"platform"],[1.05,5.35,"platform"],[-5.95,2.15,"post"],[-7.9,3.35,"post"],[-4.6,-8.1,"post"]],hh=[{x:3.3,z:6.6,side:-1,kind:"semaphore"},{x:-6.2,z:6.6,side:-1,kind:"distant"},{x:-10.2,z:1.3,side:1,kind:"stop"},{x:8.9,z:-5,side:-1,kind:"distant"}],uh=[[11.35,-5.2],[11.45,-2.2],[11.55,.9],[11.3,3.9],[10.1,6.9],[7,7.6]],Xa=[Le(-12.3,-7.2,2.6,15,"broadleaf"),Le(-13.5,-1.2,1.9,7,"broadleaf"),Le(-11.2,-9.2,2,9,"conifer"),Le(-3.6,-9.3,1.8,8,"broadleaf"),Le(8.3,-9.1,1.8,8,"orchard"),Le(12.3,-7,1.9,10,"conifer"),Le(12.6,1,1.8,9,"broadleaf"),Le(12.1,6.4,1.9,9,"conifer"),Le(-10.2,8.6,2,8,"broadleaf"),Le(-1.6,9.2,1.7,6,"orchard"),Le(6.4,8.9,1.8,7,"broadleaf"),Le(-5.2,-.6,2.7,8,"willow"),Le(-12.6,-2.2,1.4,5,"willow"),Le(-9.2,5.6,1.4,4,"broadleaf"),Le(1.9,7.6,1.2,3,"broadleaf"),Le(9.3,-6.4,1.2,4,"broadleaf"),Le(-2.6,-5.6,1.3,4,"broadleaf"),Le(4.4,.95,.9,3,"orchard")];function Le(i,t,e,n,s){return{x:i,z:t,r:e,n,kind:s}}const dh=[[-13.2,7.5,-8.6,7.95],[-5.6,8.3,1.4,8.55],[3.6,8.1,9.8,8.7],[-12.6,-8.6,-9.4,-9.5],[6.4,-9.6,11.6,-9.3],[11.6,-3.4,11.8,3.4],[-7.2,-6.3,-12.6,-6.9]],fh=[[-2.6,5.42,0,"bench"],[-.4,5.42,0,"bench"],[.9,5.42,0,"bench"],[3.15,.25,0,"fountain"],[2.1,-.95,0,"marketCross"],[3.1,5.15,.4,"crate"],[3.55,5.35,1.1,"crate"],[5.9,3.05,.3,"crate"],[6.9,3.35,0,"barrel"],[-4.9,-2.9,.5,"bench"],[-3.55,-4.1,1.2,"bench"],[-.9,-7.65,0,"signpost"],[-6.3,3.05,0,"signpost"],[4.55,-7.95,.6,"haystock"],[4.95,-8.35,.2,"haystock"],[-6.3,.75,.5,"boat"],[-5.3,-.35,1.9,"boat"],[7.9,-4.35,0,"bin"],[-2.3,2.2,0,"bin"],[11.9,4.4,0,"boulder"],[-12.8,-1.6,0,"boulder"],[-11.9,3.3,.7,"haystock"],[-8.4,-2.3,.4,"boulder"],[2.65,-8.05,.2,"crate"],[-12.3,-4.9,.9,"boulder"]],ph=[[-3.6,5.32,2.6,"adult"],[-1.9,5.28,3.4,"adult"],[.2,5.34,.6,"adult"],[1.4,5.3,4.2,"child"],[-4.4,5.3,2,"adult"],[-1.6,1.42,1.2,"adult"],[4.6,3.45,5,"adult"],[-6.2,3.9,2.2,"adult"]],He={groundW:28,groundD:21,plinthH:1.45,frameW:.9,frameH:.62},Tn=He.groundW/2,je=He.groundD/2,Ae=-.34,Ge={halfX:10.2,halfZ:6.6,radius:4.4,ballastTop:1.16,ballastBase:1.92,sleeperLen:.98,sleeperPitch:.3,railTop:.125},be={x0:-5.2,x1:2.2,z:5.42,halfW:.52,top:.16},zg=Og({halfX:Ge.halfX,halfZ:Ge.halfZ,r:Ge.radius,cornerSteps:44}),gn=new Nr(zg,!0,.1),he=gn.length,Ln={x:-10.2,z:0},ai=gn.distanceTo(Ln.x,Ln.z).s,rn={deck:.74,flatHalf:2.2,ramp:5.6,structHalf:2.45,girderH:.46,deckPlate:.15,width:2.1};function mh(i){return dn(i-ai+he/2,he)-he/2}function yn(i){const t=Math.abs(mh(i));return t<=rn.flatHalf?rn.deck:t>=rn.flatHalf+rn.ramp?0:rn.deck*.5*(1+Math.cos(Math.PI*((t-rn.flatHalf)/rn.ramp)))}const Bg=new D(0,1,0);function $e(i){const t=gn.at(i),e=.22,n=(yn(i+e)-yn(i-e))/(2*e),s=new D(t.tx,n,t.tz).normalize(),r=new D().crossVectors(s,Bg).normalize(),o=new D().crossVectors(r,s).normalize();return{pos:new D(t.x,yn(i),t.z),tan:s,up:o,right:r,flat:t}}const Rr={x:.05,z:-6.6},ga=gn.distanceTo(Rr.x,Rr.z).s,kg=[{x:-15.4,z:-5.6},{x:-13.8,z:-4.4},{x:-12.4,z:-3.1},{x:-11.2,z:-1.6},{x:Ln.x,z:Ln.z},{x:-9.2,z:1},{x:-8.2,z:1.55},{x:-7.2,z:1.2},{x:-6.4,z:.7},{x:-5.7,z:.35}],Cr=new Nr(ch(kg,!1,14),!1,.1),Ue={x:-5.7,z:.35,rx:1.35,rz:1.15};function Hg(i,t){const e=Cr.distanceTo(i,t,5).dist,n=1.06*Math.exp(-(e*e)/1.52),s=Math.hypot((i-Ue.x)/Ue.rx,(t-Ue.z)/Ue.rz),r=.92*(1-pn(.7,1.3,s));return n+r}function Gg(i,t,e,n,s){const r=i-e,o=t-n;return Math.exp(-(r*r+o*o)/(s*s))}const Vg=[{x:-12.4,z:-8.6,r:4.6,h:.62},{x:-13.6,z:-.4,r:3.4,h:.34},{x:12.6,z:-6.4,r:4,h:.52},{x:13,z:4.4,r:3.8,h:.44},{x:-6.6,z:9.8,r:3.6,h:.4},{x:4.6,z:9.9,r:3.4,h:.34},{x:11,z:9.4,r:3,h:.3},{x:-12.8,z:7.4,r:3.2,h:.3},{x:8,z:-10.2,r:3.2,h:.3}],Si=[];{let i=[];for(let t=0;t<he;t+=.5)if(yn(t)<.3){const e=gn.at(t);i.push({x:e.x,z:e.z})}else i.length>2?(Si.push(i),i=[]):i=[];if(i.length>2&&Si.push(i),Si.length>1&&yn(0)<.3){const t=Si.shift(),e=Si.pop();Si.push(e.concat(t))}}const gh=Si.map(i=>new Nr(i,!1,.3)),qa=Va.map(i=>new Nr(ch(i.pts,!1,10),!1,.16)),Ya=Va.map((i,t)=>({...i,path:qa[t]})),Fr=[];for(const i of Sn)Fr.push({x:i.x,z:i.z,r:.6*Math.max(i.w,i.d)+.45,w:1.25});for(const i of Wa)Fr.push({x:i.x,z:i.z,r:i.r+.45,w:1.4});Fr.push({x:Rr.x,z:Rr.z,r:2.1,w:1.8});const Wg=[...gh.map(i=>({path:i,r:1.55,w:1.9})),...qa.map((i,t)=>({path:i,r:Va[t].halfWidth+.45,w:1.05}))],Xg=Xa.filter(i=>i.kind==="orchard").map(i=>({x:i.x,z:i.z,r:i.r*.85,w:1.5}));function Kt(i,t){let e=0;for(const o of Vg)e+=o.h*Gg(i,t,o.x,o.z,o.r);e+=.14*(Os(i*.33+11,t*.33+7,3)-.5),e+=.09*(Os(i*1.9+3,t*1.9+5,2)-.5);let n=0;for(const o of Fr){const a=1-pn(o.r,o.r+o.w,Math.hypot(i-o.x,t-o.z));a>n&&(n=a)}for(const o of Xg){const a=(1-pn(o.r,o.r+o.w,Math.hypot(i-o.x,t-o.z)))*.65;a>n&&(n=a)}for(const o of Wg){const a=o.path.distanceTo(i,t,o.r+o.w).dist,c=1-pn(o.r,o.r+o.w,a);c>n&&(n=c)}e*=1-n;const s=Hg(i,t);e-=s;const r=.07*n;return e+Math.max(0,r-e)*pn(.85,.3,s)}function $a(i,t){return Kt(i,t)<Ae-.02}const qg=1,Yg=1.1;function _h(i,t){const e=Cr.distanceTo(i,t,6).dist-qg,n=(Math.hypot((i-Ue.x)/Ue.rx,(t-Ue.z)/Ue.rz)-Yg)*1.25,s=Math.min(e,n);return $a(i,t)?Math.min(s,-.1):s}function xh(i,t=0){const e=i.w/2-t,n=i.d/2-t,s=Math.cos(i.rot||0),r=Math.sin(i.rot||0);return[[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[e,0],[0,n],[-e,0]].map(([a,c])=>({x:i.x+a*s+c*r,z:i.z-a*r+c*s}))}function $g(i){let t=1/0;for(const e of xh(i))t=Math.min(t,gn.distanceTo(e.x,e.z,8).dist);return t-Ge.ballastTop/2}function In(i,t){return gn.distanceTo(i,t).dist}function Zg(i,t){const e=[Math.abs(i)-Ge.halfX+Ge.radius,Math.abs(t)-Ge.halfZ+Ge.radius],n=Math.hypot(Math.max(e[0],0),Math.max(e[1],0)),s=Math.min(Math.max(e[0],e[1]),0);return n+s-Ge.radius}const Er=gn.distanceTo((be.x0+be.x1)/2,Ge.halfZ,4).s;function Kg(){const i=[],t=u=>i.push(u);t(`track length ${he.toFixed(2)} | bridge s=${ai.toFixed(2)} | crossing s=${ga.toFixed(2)}`),t(`deck at level crossing ${yn(ga).toFixed(3)} (want ~0) | deck at bridge ${yn(ai).toFixed(2)} | water ${Ae}`),t(`corridor flatten runs: ${gh.length}`);{const u=gn.distanceTo(-1.5,Ge.halfZ,4);t(`station stop s=${u.s.toFixed(2)} deck ${yn(u.s).toFixed(3)} | abutments at u=+-${rn.structHalf} deck ${yn(ai+rn.structHalf).toFixed(2)}`)}for(const u of Sn){const f=$g(u),g=Kt(u.x,u.z),_=f<.12?"!!":f<.3?" ~":"  ";t(`${_} rails ${f.toFixed(2).padStart(6)}  ${u.kind.padEnd(11)} (${u.x},${u.z}) ground ${g.toFixed(2)}${g<Ae+.06?"  !! IN WATER":""}`)}for(let u=0;u<Sn.length;u++)for(let f=u+1;f<Sn.length;f++){const g=Sn[u],_=Sn[f],m=.5*(Math.min(g.w,g.d)+Math.min(_.w,_.d)),p=Math.hypot(g.x-_.x,g.z-_.z);p<m&&t(`!! footprints touch: ${g.kind} & ${_.kind} at ${p.toFixed(2)} < ${m.toFixed(2)}`)}const e=[],n=(u,f,g,_,m=!1)=>{const p=In(f,g);if(p<.9&&e.push(`${u} inside ballast (rails ${p.toFixed(2)})`),!m&&Kt(f,g)<Ae&&e.push(`${u} stands in water`),_)for(const v of Ya)v.halfWidth<.7||v.path.distanceTo(f,g,v.halfWidth+.15).dist<v.halfWidth+.1&&e.push(`${u} on the carriageway of ${v.name}`)};lh.forEach((u,f)=>n(`lamp#${f}(${u[0]},${u[1]})`,u[0],u[1],!0)),fh.forEach((u,f)=>n(`prop#${f} ${u[3]}`,u[0],u[1],u[3]==="bench"||u[3]==="boulder",u[3]==="boat")),ph.forEach((u,f)=>n(`figure#${f}`,u[0],u[1],!0)),e.length?t(`point issues:
  ${[...new Set(e)].join(`
  `)}`):t("lamps / props / figures clear of rails, water and roadways");for(const u of hh){const f=gn.distanceTo(u.x,u.z,3);t(`signal ${u.kind.padEnd(10)} snap ${f.dist.toFixed(2)} at s=${f.s.toFixed(2)} deck ${yn(f.s).toFixed(2)}`)}for(const[u,f]of uh)In(u,f)>3.2&&t(`!! telegraph pole (${u},${f}) drifts ${In(u,f).toFixed(1)} from the line`);let s=0,r=99,o=-99,a=99,c=-99;for(let u=-Tn;u<=Tn;u+=.2)for(let f=-je;f<=je;f+=.2)Kt(u,f)<Ae&&(s++,r=Math.min(r,u),o=Math.max(o,u),a=Math.min(a,f),c=Math.max(c,f));t(`open water: ${s} cells of 0.2 grid, bbox x[${r.toFixed(1)},${o.toFixed(1)}] z[${a.toFixed(1)},${c.toFixed(1)}]`),t(`water under bridge deck at crossing: ${Kt(Ln.x,Ln.z).toFixed(2)} (must be < ${Ae})`);let l=0;for(let u=0;u<24;u++){const f=u/24*Math.PI*2;Kt(Ue.x+Math.cos(f)*Ue.rx*.8,Ue.z+Math.sin(f)*Ue.rz*.8)<Ae&&l++}t(`pond centre ring submerged ${l}/24`);const h=[];for(const u of qa)for(let f=0;f<u.length;f+=.2){const g=u.at(f),_=gn.distanceTo(g.x,g.z,1.2);_.dist<.3&&h.push({x:+g.x.toFixed(2),z:+g.z.toFixed(2),deck:+yn(_.s).toFixed(2)})}const d=[];for(const u of h)d.some(f=>Math.hypot(f.x-u.x,f.z-u.z)<2.5)||d.push(u);t(`road/rail junctions: ${d.map(u=>`(${u.x},${u.z}) deck ${u.deck}`).join("  ")||"none"}`);for(const u of Xa)for(const f of Sn)Math.hypot(f.x-u.x,f.z-u.z)<u.r*.7&&t(` ~ grove ${u.kind} centred inside ${f.kind}`);for(const u of dh){const f=(u[0]+u[2])/2,g=(u[1]+u[3])/2;In(f,g)<1.2&&t(` !! hedge crosses the ballast at (${f},${g})`)}return i.join(`
`)}const yo=new Map;function wn(i,t){return yo.has(i)||yo.set(i,t()),yo.get(i)}function Qe(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ve(i,{repeat:t=[1,1],srgb:e=!0,wrap:n=Ps}={}){const s=new us(i);return s.wrapS=s.wrapT=n,s.repeat.set(t[0],t[1]),e&&(s.colorSpace=Ie),s.anisotropy=8,s}function Gs(i,t,e,{speckles:n=2600,alpha:s=.05,blotches:r=26,blotchAlpha:o=.045,seed:a=7}){const c=ve(a);for(let l=0;l<r;l++){const h=c()*t,d=c()*e,u=(.08+c()*.22)*t,f=i.createRadialGradient(h,d,0,h,d,u),g=c()>.5;f.addColorStop(0,g?`rgba(0,0,0,${o})`:`rgba(255,255,255,${o*1.3})`),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.fillRect(h-u,d-u,u*2,u*2)}for(let l=0;l<n;l++){const h=c()*t,d=c()*e;i.fillStyle=c()>.5?`rgba(0,0,0,${s})`:`rgba(255,255,255,${s*1.4})`,i.fillRect(h,d,1+c()*1.6,1+c()*1.6)}}function jg(){return wn("grass",()=>{const t=Qe(512,512),e=t.getContext("2d");e.fillStyle="#9fb37c",e.fillRect(0,0,512,512);const n=ve(21);for(let s=0;s<24e3;s++){const r=n()*512,o=n()*512,a=Os(r*.035,o*.035,3),c=46+a*26+(n()-.5)*16,l=74+a*24+(n()-.5)*20;e.strokeStyle=`hsl(${l}, ${30+a*16}%, ${o_(c)}%)`,e.lineWidth=.8+n()*.9,e.beginPath(),e.moveTo(r,o),e.lineTo(r+(n()-.5)*3,o-1.6-n()*2.4),e.stroke()}return Gs(e,512,512,{speckles:1200,alpha:.035,blotches:26,blotchAlpha:.04,seed:5}),Ve(t,{repeat:[7,5]})})}function hl(i=!1){return wn(`wood${i?"d":""}`,()=>{const n=Qe(512,512),s=n.getContext("2d");s.fillStyle=i?"#4a3324":"#7d5233",s.fillRect(0,0,512,512);const r=ve(i?31:17);for(let o=0;o<240;o++){const a=r()*512;s.strokeStyle=`rgba(${i?"20,12,6":"58,32,14"},${.05+r()*.16})`,s.lineWidth=.6+r()*2.6,s.beginPath(),s.moveTo(0,a);for(let c=0;c<=512;c+=32)s.lineTo(c,a+Math.sin(c*.02+o)*(2+r()*5));s.stroke()}for(let o=0;o<512;o+=64)s.fillStyle="rgba(24,12,4,0.42)",s.fillRect(0,o,512,2.5),s.fillStyle="rgba(255,225,190,0.05)",s.fillRect(0,o+3,512,1.5);return Gs(s,512,512,{speckles:2400,alpha:.05,blotches:18,blotchAlpha:.06,seed:3}),Ve(n,{repeat:[1,1]})})}function vh(){return wn("deck",()=>{const t=Qe(256,256),e=t.getContext("2d");e.fillStyle="#6b4a2d",e.fillRect(0,0,256,256);for(let s=0;s<256;s+=16)e.fillStyle=`hsl(28, ${18+(s%32===0?8:0)}%, ${26+s/16%3*4}%)`,e.fillRect(0,s,256,14),e.fillStyle="rgba(20,10,4,0.5)",e.fillRect(0,s+14,256,2);const n=ve(41);for(let s=0;s<2400;s++)e.fillStyle=`rgba(${n()>.5?"255,235,205":"30,16,8"},${.04+n()*.06})`,e.fillRect(n()*256,n()*256,2,1);return Ve(t,{repeat:[1,6]})})}function Or(){return wn("stone",()=>{const t=Qe(512,512),e=t.getContext("2d");e.fillStyle="#8f887b",e.fillRect(0,0,512,512);const n=ve(63);let s=0,r=0;for(;s<512;){const o=22+n()*12;let a=r%2?-30:0;for(;a<512;){const c=44+n()*46,l=52+n()*16;e.fillStyle=`hsl(${34+n()*12}, ${6+n()*8}%, ${l}%)`,r_(e,a+2,s+2,c-4,o-4,3),e.fill(),e.strokeStyle="rgba(60,54,46,0.5)",e.lineWidth=1.4,e.stroke(),a+=c}s+=o,r++}return Gs(e,512,512,{speckles:3e3,alpha:.06,blotches:22,blotchAlpha:.07,seed:9}),Ve(t,{repeat:[1,1]})})}function Jg(i="slate"){return wn(`roof-${i}`,()=>{const e=Qe(256,256),n=e.getContext("2d");n.fillStyle="#5b5b5f",n.fillRect(0,0,256,256);const s=ve(i==="tile"?12:26),r=i==="tile"?12:16,o=256/r;for(let a=0;a<r;a++){const l=21.333333333333332;for(let h=0;h<12;h++){const d=h*l+(a%2?l/2:0),u=a*o,f=i==="tile"?`hsl(${12+s()*10}, ${30+s()*14}%, ${30+s()*12}%)`:`hsl(${210+s()*18}, ${5+s()*8}%, ${28+s()*14}%)`;n.fillStyle=f,i==="tile"?(n.beginPath(),n.roundRect?n.roundRect(d,u,l-1,o-1,[0,0,l*.4,l*.4]):n.rect(d,u,l-1,o-1),n.fill()):n.fillRect(d,u,l-1.2,o-1.2),n.fillStyle="rgba(0,0,0,0.16)",n.fillRect(d,u+o-2.2,l-1.2,2.2)}}return Gs(n,256,256,{speckles:1500,alpha:.05,blotches:14,blotchAlpha:.05,seed:2}),Ve(e,{repeat:[2,2]})})}function Qg(){return wn("ballast",()=>{const t=Qe(256,256),e=t.getContext("2d");e.fillStyle="#5a5751",e.fillRect(0,0,256,256);const n=ve(101);for(let s=0;s<5200;s++){const r=n()*256,o=n()*256,a=1.1+n()*2.4;e.fillStyle=`hsl(${24+n()*18}, ${5+n()*8}%, ${22+n()*30}%)`,e.beginPath(),e.ellipse(r,o,a,a*(.6+n()*.5),n()*3,0,Math.PI*2),e.fill()}return Ve(t,{repeat:[1,26]})})}function Mh(i){return wn(`pave-${i}`,()=>{const e=Qe(256,256),n=e.getContext("2d"),s=ve(i==="tarmac"?5:i==="setts"?55:155);if(i==="tarmac"){n.fillStyle="#43423f",n.fillRect(0,0,256,256);for(let r=0;r<9e3;r++)n.fillStyle=`rgba(${s()>.5?"210,206,198":"16,15,14"},${.03+s()*.07})`,n.fillRect(s()*256,s()*256,1+s()*2,1+s()*2);for(let r=0;r<22;r++)n.strokeStyle="rgba(18,18,18,0.28)",n.lineWidth=.8+s(),n.beginPath(),n.moveTo(s()*256,s()*256),n.bezierCurveTo(s()*256,s()*256,s()*256,s()*256,s()*256,s()*256),n.stroke();return Ve(e,{repeat:[1,5]})}if(i==="setts"){n.fillStyle="#6d655b",n.fillRect(0,0,256,256);const r=10,o=14;for(let a=0;a<r;a++)for(let c=0;c<o;c++){const l=c*256/o+(a%2?3:0),h=a*256/r;n.fillStyle=`hsl(${28+s()*14}, ${5+s()*8}%, ${34+s()*20}%)`,n.beginPath(),n.roundRect?n.roundRect(l+1.5,h+1.5,256/o-3,256/r-3,2.5):n.rect(l+1.5,h+1.5,256/o-3,256/r-3),n.fill()}return Gs(n,256,256,{speckles:1800,alpha:.05,blotches:14,seed:6}),Ve(e,{repeat:[3,3]})}if(i==="cobbles"){n.fillStyle="#6a645c",n.fillRect(0,0,256,256);for(let r=0;r<12;r++)for(let o=0;o<12;o++){const a=o*256/12+(s()-.5)*4,c=r*256/12+(s()-.5)*4;n.fillStyle=`hsl(${26+s()*16}, ${5+s()*7}%, ${30+s()*24}%)`,n.beginPath(),n.ellipse(a+9,c+9,8.4,7.6,s()*3,0,Math.PI*2),n.fill()}return Ve(e,{repeat:[2,6]})}n.fillStyle="#9b8f79",n.fillRect(0,0,256,256);for(let r=0;r<7e3;r++){const o=s()*256,a=s()*256;n.fillStyle=`hsl(${30+s()*16}, ${10+s()*10}%, ${34+s()*34}%)`,n.beginPath(),n.ellipse(o,a,.9+s()*1.7,.8+s()*1.4,s()*3,0,Math.PI*2),n.fill()}return Ve(e,{repeat:[2,8]})})}function t_(){return wn("water",()=>{const t=Qe(256,256),e=t.getContext("2d");e.fillStyle="#7d8f8c",e.fillRect(0,0,256,256);const n=ve(303);for(let s=0;s<260;s++){const r=n()*256;e.strokeStyle=`rgba(255,255,255,${.05+n()*.11})`,e.lineWidth=.6+n()*1.5,e.beginPath(),e.moveTo(0,r);const o=1.5+n()*4,a=.02+n()*.05;for(let c=0;c<=256;c+=8)e.lineTo(c,r+Math.sin(c*a+s)*o);e.stroke()}for(let s=0;s<90;s++){const r=n()*256;e.strokeStyle="rgba(10,30,32,0.10)",e.lineWidth=1+n()*3,e.beginPath(),e.moveTo(0,r);for(let o=0;o<=256;o+=10)e.lineTo(o,r+Math.sin(o*.03+s)*3);e.stroke()}return Ve(t,{repeat:[3,3]})})}function e_({floors:i=2,cols:t=3,seed:e=1,style:n="house",litRatio:s=.55,door:r=!0}){const o=`facade-${n}-${i}-${t}-${e}-${s}-${r?1:0}`;return wn(o,()=>{const l=Qe(256,256),h=l.getContext("2d");h.fillStyle="#ffffff",h.fillRect(0,0,256,256);const d=Qe(256,256),u=d.getContext("2d");u.fillStyle="#000000",u.fillRect(0,0,256,256);const f=ve(e*7919+i*31+t),g=h.createLinearGradient(0,0,0,256);g.addColorStop(0,"rgba(236,234,228,1)"),g.addColorStop(1,"rgba(208,204,196,1)"),h.fillStyle=g,h.fillRect(0,0,256,256);for(let w=0;w<4200;w++)h.fillStyle=`rgba(${f()>.5?"255,255,255":"120,112,100"},${.02+f()*.05})`,h.fillRect(f()*256,f()*256,1+f()*2.2,1+f()*2.2);if(h.fillStyle="rgba(96,90,82,0.55)",h.fillRect(0,240,256,16),h.fillStyle="rgba(255,255,255,0.22)",h.fillRect(0,238,256,2),i>1&&(h.fillStyle="rgba(120,112,102,0.30)",h.fillRect(0,256*.5-2,256,4)),n==="brick")for(let E=0,C=0;C<256;E++,C+=13)for(let S=E%2?-18:0;S<256;S+=36)h.fillStyle=`rgba(${120+f()*60},${70+f()*40},${52+f()*30},0.16)`,h.fillRect(S+1,C+1,34,11);if(n==="half-timber"){h.strokeStyle="rgba(58,40,28,0.85)",h.lineWidth=6;for(let w=0;w<=4;w++)h.beginPath(),h.moveTo(w*256/4,8),h.lineTo(w*256/4,244),h.stroke();for(let w=0;w<=3;w++)h.beginPath(),h.moveTo(0,w*256/3+10),h.lineTo(256,w*256/3+10),h.stroke();h.lineWidth=4,h.beginPath(),h.moveTo(0,242),h.lineTo(256,14),h.stroke(),h.beginPath(),h.moveTo(256,242),h.lineTo(0,14),h.stroke()}const _=256*.1,m=256*.12,p=256*.1,v=(256-_*2)/t,M=(256-m-p)/i,x=v*(n==="shop"?.62:.5),A=M*(n==="shop"?.5:.56);for(let w=0;w<i;w++)for(let E=0;E<t;E++){const C=_+v*(E+.5),S=m+M*w+M*.46,y=x,R=A,U=C-y/2,F=S-R/2;h.fillStyle="rgba(48,44,40,0.9)",h.fillRect(U-3,F-3,y+6,R+6),h.fillStyle="rgba(246,244,238,0.95)",h.fillRect(U-1.5,F-1.5,y+3,R+3);const k=n==="shop"?"rgba(96,120,128,0.95)":"rgba(84,98,106,0.95)";if(h.fillStyle=k,h.fillRect(U,F,y,R),h.fillStyle="rgba(255,255,255,0.18)",h.fillRect(U,F,y,R*.32),h.strokeStyle="rgba(238,236,230,0.75)",h.lineWidth=2,h.beginPath(),h.moveTo(C,F),h.lineTo(C,F+R),h.moveTo(U,F+R*(w===0&&n==="shop"?.66:.5)),h.lineTo(U+y,F+R*(w===0&&n==="shop"?.66:.5)),h.stroke(),h.fillStyle="rgba(198,192,182,0.95)",h.fillRect(U-5,F+R+2.5,y+10,4),h.fillStyle="rgba(40,36,32,0.35)",h.fillRect(U-5,F+R+6.5,y+10,2),f()<s){const X=.65+f()*.35;u.fillStyle=`rgba(${255*X},${196*X},${116*X},1)`,u.fillRect(U+1,F+1,y-2,R-2),u.fillStyle="rgba(255,240,200,0.35)",u.fillRect(U-3,F-3,y+6,R+6)}}if(r){const E=256*(n==="shop"?.3:.27),C=256/2-29.44/2,S=256-p-E;h.fillStyle="rgba(44,40,36,0.9)",h.fillRect(C-4,S-4,29.44+8,E+8),h.fillStyle=n==="shop"?"rgba(64,74,70,0.98)":"rgba(78,50,34,0.98)",h.fillRect(C,S,29.44,E),h.fillStyle="rgba(255,255,255,0.14)",h.fillRect(C+3,S+4,29.44*.32,E*.3),h.fillStyle="rgba(230,226,218,0.9)",h.fillRect(C-7,256-p-3,29.44+14,4),u.fillStyle="rgba(255,226,170,0.5)",u.fillRect(C+2,S+2,29.44-4,E-4)}return n==="shop"&&(h.fillStyle="rgba(150,60,48,0.5)",h.fillRect(0,256*.3,256,256*.055)),{map:Ve(l),emissiveMap:Ve(d)}})}function n_({cols:i=5,seed:t=3,litRatio:e=.8,doorAt:n=0}){const s=`carriage-${i}-${t}-${e}-${n}`;return wn(s,()=>{const a=Qe(256,128),c=a.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128);const l=Qe(256,128),h=l.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,256,128);const d=ve(t*7717+5);c.fillStyle="rgba(250,250,246,1)",c.fillRect(0,0,256,128),c.fillStyle="rgba(120,116,110,0.35)",c.fillRect(0,116,256,12),c.fillRect(0,0,256,8);const u=14,f=(256-u*2)/i,g=f*.62,_=128*.44;for(let m=0;m<i;m++){const p=u+f*m+(f-g)/2,v=128*.28;if(m!==n&&(c.fillStyle="rgba(40,38,36,0.9)",c.fillRect(p-3,v-3,g+6,_+6),c.fillStyle="rgba(238,236,230,0.9)",c.fillRect(p-1.5,v-1.5,g+3,_+3),c.fillStyle="rgba(58,72,78,0.95)",c.fillRect(p,v,g,_),c.fillStyle="rgba(255,255,255,0.16)",c.fillRect(p,v,g,_*.34),c.strokeStyle="rgba(236,234,228,0.7)",c.lineWidth=1.6,c.beginPath(),c.moveTo(p,v+_/2),c.lineTo(p+g,v+_/2),c.stroke(),d()<e)){const M=.7+d()*.3;h.fillStyle=`rgba(${255*M},${214*M},${150*M},1)`,h.fillRect(p+1,v+1,g-2,_-2)}}if(n>=0&&n<i){const m=u+f*n+(f-g)/2,p=128*.16;c.fillStyle="rgba(38,36,34,0.9)",c.fillRect(m-3,p-3,g+6,128*.66+6),c.fillStyle="rgba(52,50,48,0.98)",c.fillRect(m,p,g,128*.6),c.fillStyle="rgba(66,80,86,0.95)",c.fillRect(m+2,p+3,g-4,128*.2),h.fillStyle="rgba(255,220,160,0.55)",h.fillRect(m+2,p+3,g-4,128*.2)}return{map:Ve(a),emissiveMap:Ve(l)}})}function i_(i="MEADOWBANK"){return wn(`sign-${i}`,()=>{const n=Qe(256,64),s=n.getContext("2d");return s.fillStyle="#e8e2d2",s.fillRect(0,0,256,64),s.fillStyle="#26302c",s.fillRect(0,0,256,7),s.fillRect(0,57,256,7),s.fillStyle="#c9a227",s.fillRect(0,7,256,2),s.fillRect(0,55,256,2),s.fillStyle="#221f1c",s.font="bold 30px Georgia, serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256/2,64/2+1),Ve(n,{wrap:si})})}function s_(i,t,e,n=0){const s=Qe(64,256),r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,256);if(o.addColorStop(0,i),o.addColorStop(.5,t),o.addColorStop(1,e),r.fillStyle=o,r.fillRect(0,0,64,256),n>0){const c=ve(1234);for(let l=0;l<n;l++){const h=c()*110;r.fillStyle=`rgba(255,252,240,${.25+c()*.6})`,r.fillRect(c()*64,h,1,1)}}const a=new us(s);return a.colorSpace=Ie,a.mapping=Cs,a.wrapS=Ps,a}function r_(i,t,e,n,s,r){i.beginPath(),i.roundRect?i.roundRect(t,e,n,s,r):i.rect(t,e,n,s)}const o_=i=>Math.max(28,Math.min(80,i));function a_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Me;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=ul(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);const g=ul(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ul(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Te(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function dl(i,t,{uvScale:e=1}={}){const n=i.length,s=typeof t=="function",r=(g,_)=>s?t(g,_):t,o=r(i[0],0).length,a=new Float32Array(n*o*3),c=new Float32Array(n*o*2),l=[0];for(let g=1;g<n;g++){const _=i[g-1],m=i[g];l.push(l[g-1]+Math.hypot(m.px-_.px,m.py-_.py,m.pz-_.pz))}let h=0,d=0;for(let g=0;g<n;g++){const _=i[g],m=r(_,g),p=[0];for(let v=1;v<o;v++)p.push(p[v-1]+Math.hypot(m[v].r-m[v-1].r,m[v].u-m[v-1].u));for(let v=0;v<o;v++){const M=m[v];a[h++]=_.px+_.rx*M.r+_.ux*M.u,a[h++]=_.py+_.ry*M.r+_.uy*M.u,a[h++]=_.pz+_.rz*M.r+_.uz*M.u,c[d++]=l[g]/e,c[d++]=p[v]/e}}const u=[];for(let g=0;g<n-1;g++)for(let _=0;_<o-1;_++){const m=g*o+_,p=m+o,v=m+1,M=p+1;u.push(m,v,p,v,M,p)}const f=new Me;return f.setAttribute("position",new Te(a,3)),f.setAttribute("uv",new Te(c,2)),f.setIndex(u),f.computeVertexNormals(),f}function c_(i,t,e,{uvScale:n=1,widthFn:s=null}={}){const o=Math.max(2,Math.ceil(i.length/.22)),a=[];let c=0;for(let m=0;m<=o;m++){const p=m/o*i.length,v=i.at(p);m>0&&(c+=Math.hypot(v.x-a[m-1].x,v.z-a[m-1].z)),a.push({x:v.x,z:v.z,nx:v.nx,nz:v.nz,s:p,run:c,w:s?t*s(m/o):t})}const l=a.length,h=new Float32Array(l*2*3),d=new Float32Array(l*2*2);let u=0,f=0;for(let m=0;m<l;m++){const p=a[m],v=e(p.x,p.z,p.s);for(const M of[-1,1])h[u++]=p.x+p.nx*p.w*M,h[u++]=v,h[u++]=p.z+p.nz*p.w*M,d[f++]=p.w*(M+1)/n,d[f++]=p.run/n}const g=[];for(let m=0;m<l-1;m++){const p=m*2,v=p+2;g.push(p,p+1,v,p+1,v+1,v)}const _=new Me;return _.setAttribute("position",new Te(h,3)),_.setAttribute("uv",new Te(d,2)),_.setIndex(g),_.computeVertexNormals(),_}function I(i,t,e,n=0,s=0,r=0,o=0){const a=new On(i,t,e);return o&&a.rotateY(o),a.translate(n,s,r),a}function yt(i,t,e,n,s=0,r=0,o=0,{rotX:a=0,rotZ:c=0}={}){const l=new Fn(i,t,e,n);return a&&l.rotateX(a),c&&l.rotateZ(c),l.translate(s,r,o),l}function ts(i,t,e,n=.08){const s=i/2+n,r=t/2+n,o=[-s,0,-r],a=[s,0,-r],c=[s,0,r],l=[-s,0,r],h=[-s,e,0],d=[s,e,0],u=[[a,o,h],[a,h,d],[l,c,d],[l,d,h]],f=[],g=[];for(const m of u)f.push(...m[0],...m[1],...m[2]),g.push(0,0,1,0,.5,1);const _=new Me;return _.setAttribute("position",new qt(f,3)),_.setAttribute("uv",new qt(g,2)),_.computeVertexNormals(),_}function Es(i,t,e,n){const s=i/2,r=t/2,o=n<0?[[-s,0,-r],[-s,0,r],[-s,e,0]]:[[s,0,r],[s,0,-r],[s,e,0]],a=[],c=[];for(const h of o)a.push(...h),c.push(0,0,1,0,.5,1);const l=new Me;return l.setAttribute("position",new qt(a,3)),l.setAttribute("uv",new qt(c,2)),l.computeVertexNormals(),l}function Ki(i,t,e,n=.1){const s=i/2+n,r=t/2+n,o=Math.max(0,s-r),a=[-s,0,-r],c=[s,0,-r],l=[s,0,r],h=[-s,0,r],d=[-o,e,0],u=[o,e,0],f=[[c,a,d],[c,d,u],[h,l,u],[h,u,d],[l,c,u],[a,h,d]],g=[],_=[];for(const p of f)g.push(...p[0],...p[1],...p[2]),_.push(0,0,1,0,.5,1);const m=new Me;return m.setAttribute("position",new qt(g,3)),m.setAttribute("uv",new qt(_,2)),m.computeVertexNormals(),m}function xt(i,t,e=""){const n=i.map(r=>r.index?r.toNonIndexed():r),s=new mt(a_(n,!1),t);return s.name=e,s}function _n(i,t=!0,e=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),i}function pt(i){return new Jl({roughness:.85,metalness:0,...i})}function l_(){const i=new Zt;i.name="base";const t=hl(!1),e=hl(!0),n=F=>{const k=t.clone();return k.needsUpdate=!0,k.repeat.set(F[0],F[1]),k},s=pt({map:n([5,1]),color:11697230,roughness:.62,metalness:.04}),r=pt({map:n([4,1]),color:11104575,roughness:.55,metalness:.05}),o=pt({map:n([6,1]),color:12289106,roughness:.5,metalness:.05}),a=pt({color:12623954,roughness:.34,metalness:.85}),c=pt({map:e,color:4930092,roughness:.95}),l=-.02,h=He.groundW+1.2,d=He.groundD+1.2,u=(h-(Tn*2-.04))/2,f=(d-(je*2-.04))/2,_=[I(h,He.plinthH,f,0,l-He.plinthH/2,-10.79),I(h,He.plinthH,f,0,l-He.plinthH/2,d/2-f/2),I(u,He.plinthH,je*2-.04,-14.29,l-He.plinthH/2,0),I(u,He.plinthH,je*2-.04,h/2-u/2,l-He.plinthH/2,0),I(h,.06,d,0,-1.25-.03,0)],m=xt(_,s,"plinth");m.castShadow=!0,m.receiveShadow=!0,i.add(m);const p=xt([I(h-.55,.26,d-.55,0,l-He.plinthH-.13,0)],c,"skirt");p.receiveShadow=!0,i.add(p);const v=He.frameW,M=He.frameH,x=[I(h,M,v,0,l+M/2,-10.95),I(h,M,v,0,l+M/2,je+v/2),I(v,M,d-v*2,-14.45,l+M/2,0),I(v,M,d-v*2,Tn+v/2,l+M/2,0)],A=xt(x,r,"frame");A.castShadow=!0,A.receiveShadow=!0,i.add(A);const w=[I(h+.06,.09,v+.06,0,l+M+.045,-10.95),I(h+.06,.09,v+.06,0,l+M+.045,je+v/2),I(v+.06,.09,d-v*2+.06,-14.45,l+M+.045,0),I(v+.06,.09,d-v*2+.06,Tn+v/2,l+M+.045,0)],E=xt(w,o,"frame-caps");E.castShadow=!0,i.add(E);const C=[I(h-v*2+.02,.05,.05,0,l+.02,-11.4),I(h-v*2+.02,.05,.05,0,l+.02,je+v)];i.add(xt(C,a,"inner-line"));const S=[];for(const F of[-1,1])for(const k of[-1,1])S.push(I(.34,.34,.055,F*(h/2-.22),l-.3,k*(d/2+.005))),S.push(I(.055,.34,.34,F*(h/2+.005),l-.3,k*(d/2-.22))),S.push(I(.3,.3,.05,F*(Tn+v/2),l+M-.18,k*(je+v+.005)));i.add(xt(S,a,"brackets"));const y=new Zt;for(const F of[-1,1])for(const k of[-1,1]){const H=new Fn(.3,.36,.2,20),X=new mt(H,a);X.position.set(F*(h/2-.62),l-He.plinthH-.36,k*(d/2-.62)),X.castShadow=!0,y.add(X)}i.add(y);const R=new mt(new On(4.4,.62,.06),a);R.position.set(-6,l-.62,d/2+.02),i.add(R);const U=new mt(new ui(4.05,.34),new Lr({map:h_(),transparent:!0}));return U.position.set(-6,l-.62,d/2+.055),i.add(U),{group:i,materials:{plinthMat:s,railMat:r,brassMat:a}}}function h_(){const i=document.createElement("canvas");i.width=512,i.height=64;const t=i.getContext("2d");t.clearRect(0,0,512,64),t.fillStyle="#2b241c",t.font="bold 30px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText("MEADOWBANK  ·  HO 1:87",256,34);const e=new us(i);return e.colorSpace=Ie,e}function u_(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,30,128,128,127);e.addColorStop(0,"#ffffff"),e.addColorStop(.5,"#f2f2f2"),e.addColorStop(.82,"#5a5a5a"),e.addColorStop(1,"#000000"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new us(i),s=new mt(new ui(78,60),pt({color:2761504,roughness:.92,metalness:0,alphaMap:n,transparent:!0,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(0,-1.9,5),s.receiveShadow=!0,s.name="table",s}function d_(){const e=new ui(Tn*2,je*2,150,114);e.rotateX(-Math.PI/2);const n=e.attributes.position,s=new Float32Array(n.count*3),r=new Et;new Et;const o=new Et(9349222),a=new Et(7310413),c=new Et(12101737),l=new Et(10654812),h=new Et(10133623),d=new Et(10720119),u=new Et(9078128),f=new Et(14272909);for(let p=0;p<n.count;p++){const v=n.getX(p),M=n.getZ(p),x=Kt(v,M);n.setY(p,x);const A=Zg(v,M)<0,w=Os(v*.55+2,M*.55+9,3);r.copy(A?o:c),r.lerp(A?a:l,Un(w*.9,0,1)*.55),A&&r.lerp(h,pn(9,2.5,Math.abs(v)+Math.abs(M)*.4)*.35);const E=_h(v,M);E<.55&&r.lerp(d,pn(.55,.02,E)*.72),E<.18&&r.lerp(u,pn(.18,-.5,E)*.45);const C=In(v,M);C<2.3&&r.lerp(u,pn(2.3,1.15,C)*.55);const S=Os(v*3.1,M*3.1,2);!A&&S>.72&&r.lerp(f,(S-.72)*2.2),s[p*3]=r.r,s[p*3+1]=r.g,s[p*3+2]=r.b}e.setAttribute("color",new Te(s,3)),e.computeVertexNormals();const g=jg();g.repeat.set(9,7);const _=pt({map:g,vertexColors:!0,roughness:.97,metalness:0}),m=new mt(e,_);return m.receiveShadow=!0,m.name="terrain",{mesh:m,material:_}}function f_(){const t=Math.ceil(Tn*2/.13),e=Math.ceil(je*2/.13),n=new Map,s=(M,x)=>{const A=M*1e5+x;let w=n.get(A);if(!w){const E=-Tn+M*.13,C=-je+x*.13;w={x:E,z:C,t:Kt(E,C),k:A,idx:n.size},n.set(A,w)}return w},r=[];for(let M=0;M<t;M++)for(let x=0;x<e;x++){const A=s(M,x),w=s(M+1,x),E=s(M+1,x+1),C=s(M,x+1),S=Math.min(A.t,w.t,E.t,C.t),y=Math.max(A.t,w.t,E.t,C.t);S>Ae+.3||y<Ae-4||r.push([A,E,w],[A,C,E])}const o=[],a=[],c=[],l=[],h=new Map,d=new Et(3111558),u=new Et(8833213),f=new Et(11049596),g=new Et;let _=0;for(const M of r)for(const x of M){let A=h.get(x.idx);if(A===void 0){A=_++,h.set(x.idx,A);const w=x.t<Ae;o.push(x.x,w?Ae:x.t+.024,x.z),a.push(x.x*.16,x.z*.16),w?g.copy(u).lerp(d,pn(0,.75,Ae-x.t)):g.copy(f).lerp(u,pn(.3,0,x.t-Ae)*.55),c.push(g.r,g.g,g.b)}l.push(A)}const m=new Me;m.setAttribute("position",new qt(o,3)),m.setAttribute("uv",new qt(a,2)),m.setAttribute("color",new qt(c,3)),m.setIndex(l),m.computeVertexNormals();const p=pt({map:t_(),vertexColors:!0,roughness:.22,metalness:0,envMapIntensity:.85}),v=new mt(m,p);return v.name="water",{mesh:v,material:p}}function p_(i=.42){const t=[],e=(n,s)=>{const r=Kt(n,s);r>Ae-.05&&r<Ae+.2&&t.push({x:n,z:s,y:Math.max(r,Ae)})};for(let n=0;n<Cr.length;n+=i){const s=Cr.at(n);for(const r of[-1.75,-1.4,-1.05,1.05,1.4,1.75])e(s.x+s.nx*r,s.z+s.nz*r)}for(let n=0;n<190;n++){const s=n/190*Math.PI*2;for(const r of[.98,1.16,1.34])e(Ue.x+Math.cos(s)*Ue.rx*r,Ue.z+Math.sin(s)*Ue.rz*r)}return t}function fl(i,t,e=.2){const n=[],s=Math.max(2,Math.round((t-i)/e));for(let r=0;r<=s;r++){const o=i+(t-i)*r/s,a=$e(o);n.push({s:o,px:a.pos.x,py:a.pos.y,pz:a.pos.z,rx:a.right.x,ry:a.right.y,rz:a.right.z,ux:a.up.x,uy:a.up.y,uz:a.up.z})}return n}const pl=pt({map:Qg(),color:13288114,roughness:.97,metalness:0}),ml=pt({color:16777215,roughness:.92,metalness:0}),gl=pt({color:14078664,roughness:.22,metalness:.94});function m_(){const i=new Zt;i.name="track";const t=rn.structHalf+.1,e=fl(ai+t,ai+he-t,.24),n=new mt(dl(e,_=>{const m=Math.max(-1.7,Math.min(.9,Kt(_.px,_.pz)-.02-_.py));return[{r:-1.92/2,u:m},{r:-1.16/2,u:-.02},{r:Ge.ballastTop/2,u:-.02},{r:Ge.ballastBase/2,u:m}]},{uvScale:.6}),pl);n.castShadow=!0,n.receiveShadow=!0,n.name="ballast",i.add(n);const s=Ge.sleeperPitch,r=Math.floor(he/s),o=new Ai(new On(Ge.sleeperLen,.06,.115),ml,r);o.castShadow=!0,o.receiveShadow=!0;const a=new Xt,c=new an,l=new Xt,h=new D(1,1,1),d=ve(4242),u=new Et;for(let _=0;_<r;_++){const m=(_+.5)*s,p=$e(m);l.makeBasis(p.right,p.up,p.tan),c.setFromRotationMatrix(l),a.compose(p.pos.clone().addScaledVector(p.up,.015),c,h),o.setMatrixAt(_,a);const v=.62+d()*.5;u.setRGB(v*.4,v*.27,v*.18),o.setColorAt(_,u)}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),i.add(o);const f=fl(0,he,.24);for(const _ of[-1,1]){const m=f.map(v=>{const M=-.31*_;return{...v,px:v.px+v.rx*M,py:v.py+.045,pz:v.pz+v.rz*M}}),p=new mt(dl(m,[{r:-.038,u:0},{r:-.024,u:.08},{r:.024,u:.08},{r:.038,u:0}],{uvScale:1}),gl);p.castShadow=!0,p.name="rail",i.add(p)}const g=[];for(let _=0;_<10;_++){const m=_/10*he+1.4;if(Math.abs(mh(m))<rn.structHalf+.6)continue;const p=$e(m),v=p.pos.clone().addScaledVector(p.right,1.06).addScaledVector(p.up,.17);g.push(I(.055,.34,.055,v.x,v.y,v.z,Math.atan2(p.tan.x,p.tan.z)))}return i.add(xt(g,pt({color:15131352,roughness:.82}),"markers")),i.add(g_()),i.add(__()),{group:i,materials:{ballastMat:pl,sleeperMat:ml,railMat:gl}}}function g_(){const i=new Zt;i.name="platform";const t=pt({map:Or(),color:11051674,roughness:.92}),e=pt({map:Mh("setts"),color:10196104,roughness:.9}),n=pt({color:4014655,roughness:.5,metalness:.6}),s=pt({color:10133658,roughness:.68,metalness:.3}),r=be.x1-be.x0,o=(be.x0+be.x1)/2,a=be.z,c=be.top,l=[I(r,c,.1,o,c/2,a+be.halfW-.05),I(r,c,.1,o,c/2,a-be.halfW+.05),I(.1,c,be.halfW*2,be.x0,c/2,a),I(.1,c,be.halfW*2,be.x1,c/2,a),I(.1,c,be.halfW*2,o+r/2-3.05,c/2,a)],h=xt(l,t,"platform-face");h.castShadow=!0,h.receiveShadow=!0,i.add(h);const d=new mt(I(r-.02,.07,be.halfW*2,o,c-.02,a),e);d.castShadow=!0,d.receiveShadow=!0,i.add(d);const u=new mt(I(r-.16,.014,.1,o,c+.022,a+be.halfW-.16),pt({color:14198570,roughness:.75}));i.add(u);const f=-1,g=2.05,_=g-f,m=(f+g)/2,p=new mt(ts(_,1.34,.19,.1),s);p.position.set(m,c+.74,a+.1),p.castShadow=!0,p.receiveShadow=!0,i.add(p);for(const A of[a+.77,a-.57]){const w=new mt(I(_+.16,.12,.045,m,c+.66,A),pt({color:3099204,roughness:.72}));w.castShadow=!0,i.add(w)}const v=[];for(let A=0;A<=3;A++){const w=f+_*A/3;v.push(I(.07,.7,.07,w,c+.35,a+.56)),v.push(I(.055,.7,.055,w,c+.35,a-.42)),v.push(I(.3,.05,.05,w-.16,c+.62,a+.56))}const M=xt(v,n,"canopy-posts");M.castShadow=!0,i.add(M);const x=new mt(I(r,c-.06,be.halfW*2-.14,o,(c-.06)/2,a),pt({color:8156005,roughness:.96}));return x.receiveShadow=!0,i.add(x),i}function __(){const i=new Zt;i.name="level-crossing";const t=$e(ga);i.position.copy(t.pos),i.quaternion.setFromRotationMatrix(new Xt().makeBasis(t.right,t.up,t.tan));const e=pt({color:15328730,roughness:.7}),n=pt({color:11022890,roughness:.68}),s=pt({color:3486511,roughness:.6,metalness:.4}),r=[],o=[];for(const d of[-1,1]){for(const u of[-1,1]){const f=d*1.35,g=u*1.18;r.push(I(.1,.92,.1,g,.46,f)),r.push(I(.16,.06,.16,g,.03,f)),o.push(I(.11,.1,.11,g,.8,f))}r.push(I(.075,.075,1.5,1.28,.74,d*1.35));for(let u=0;u<4;u++)o.push(I(.08,.08,.18,1.28,.74,d*(.72+u*.36)))}i.add(xt(r,e,"crossing-posts")),i.add(xt(o,n,"crossing-hazard"));for(const d of[-1,1])for(const u of[-1,1]){const f=new Zt,g=new mt(I(.72,.11,.035,0,0,0),e),_=g.clone();g.rotation.z=.42,_.rotation.z=-.42;const m=new mt(I(.06,1.3,.06,0,-.55,0),s);f.add(g,_,m),f.position.set(u*.95,1.28,d*1.62),f.rotation.y=u>0?0:Math.PI,i.add(f)}i.add(xt([I(2.9,.03,.16,0,.012,0)],pt({color:14341576,roughness:.85}),"crossing-markings"));const a=new Zt,c=new mt(I(.07,1.5,.07,0,.75,0),s),l=new mt(I(.16,.2,.16,0,1.56,0),n),h=new mt(new ds(.055,10,8),pt({color:16756832,emissive:16751164,emissiveIntensity:0,roughness:.4}));return h.position.set(0,1.56,.09),a.add(c,l,h),a.position.set(1.24,0,-1.35),i.add(a),i.userData.glow=[h.material],i}function x_(){const i=new Zt;i.name="bridge";const t=rn,e=$e(ai),n=t.structHalf+.3,s=t.width/2,r=Kt(Ln.x,Ln.z),o=pt({map:Or(),color:10261378,roughness:.95,metalness:0}),a=pt({color:5070678,roughness:.44,metalness:.66}),c=pt({map:vh(),color:9274231,roughness:.86,metalness:.05}),l=[],h=[],d=[];d.push(I(t.width,t.deckPlate,n*2,0,-.02-t.deckPlate/2,0));for(const _ of[-1,1]){h.push(I(.11,.21,n*2,_*(s-.06),-.16,0)),h.push(I(.17,.05,n*2,_*(s-.06),-.06,0)),h.push(I(.17,.05,n*2,_*(s-.06),-.26,0));for(let m=-5;m<=5;m++)h.push(I(.05,.19,.05,_*(s-.06),-.16,m*.45))}for(const _ of[-1,1]){const m=_*(s+.03);h.push(I(.08,.08,n*2,m,.05,0)),h.push(I(.07,.1,n*2,m,t.girderH+.08,0)),h.push(I(.035,.035,n*2,m,t.girderH+.26,0));const p=[];for(let v=0;v<=6;v++)p.push(-n+v*2*n/6);p.forEach((v,M)=>{if(h.push(I(.06,t.girderH+.06,.07,m,.05+(t.girderH+.06)/2,v)),M<p.length-1){const x=p[M+1],A=x-v,w=M%2?t.girderH:-.46,E=Math.hypot(A,w),C=new On(.052,.052,E);C.rotateX(-Math.atan2(w,A)),C.translate(m,.05+t.girderH/2,(v+x)/2),h.push(C)}M>0&&M<p.length-1&&h.push(I(.14,.14,.05,m,t.girderH+.08,v))}),l.push(I(.21,.05,n*2,_*(s+.17),0,0))}for(const _ of[-1,1]){const m=_*(t.structHalf+.16),p=Kt(Ln.x-1.2,Ln.z+m*.6),v=-.16,M=v-Math.min(p,-.05)+.1;l.push(I(t.width+.66,M,.78,0,Math.min(p,-.05)+M/2,m)),l.push(I(t.width+.92,.13,.94,0,v+.04,m));for(const x of[-1,1])l.push(I(.3,.62,1.05,x*(s+.42),v-.34,m+_*.5,-_*x*.42))}{const m=-.24-(r-.22),p=new Fn(.4,.58,m,4,1);p.rotateY(Math.PI/4),p.scale(1.05,1,2.1),p.translate(0,r-.22+m/2,0),l.push(p);for(const v of[-1,1]){const M=new Fn(.42,.42,m*.86,3,1);M.rotateZ(v>0?Math.PI/2:-Math.PI/2),M.rotateX(v*Math.PI/2),M.scale(1,1,.85),M.translate(0,r-.22+m*.43,v*.52),l.push(M)}l.push(I(1.1,.12,1.15,0,-.24+.06,0))}const u=xt(l,o,"bridge-stone"),f=xt(h,a,"bridge-iron"),g=xt(d,c,"bridge-deck");for(const _ of[u,f,g])_.castShadow=!0,_.receiveShadow=!0,i.add(_);return i.position.copy(e.pos),i.quaternion.setFromRotationMatrix(new Xt().makeBasis(e.right,e.up,new D().crossVectors(e.up,e.right))),{group:i,materials:{stoneMat:o,ironMat:a,deckMat:c}}}function v_(i,t,e){const n=new Zt,s=pt({color:7293996,roughness:.9}),r=pt({map:vh(),color:9071173,roughness:.9}),o=1.9,a=.6,c=new mt(I(o,.07,a,0,.14,0),r);c.castShadow=!0,c.receiveShadow=!0,n.add(c);const l=[];for(const h of[-1,1]){l.push(I(o,.05,.05,0,.42,h*(a/2-.03))),l.push(I(.09,.46,.06,h*(o/2-.04),.2,0)),l.push(I(.09,.46,.06,-h*(o/2-.04),.2,0));for(let d=0;d<3;d++)l.push(I(.045,.28,.045,-o/2+.4+d*.55,.28,h*(a/2-.03)))}return n.add(xt(l,s,"footbridge-rails")),n.position.set(i,Kt(i,t)+.03,t),n.rotation.y=e,n.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),n}function M_(){const i=new Zt;i.name="roads";const t=new Map,e=n=>(t.has(n)||t.set(n,pt({map:Mh(n),color:16777215,roughness:n==="tarmac"?.86:.95,metalness:.02})),t.get(n));for(const n of Ya){const s=c_(n.path,n.halfWidth,(o,a)=>Kt(o,a)+.022,{uvScale:n.halfWidth*2}),r=new mt(s,e(n.pave));if(r.receiveShadow=!0,r.name=`road-${n.name}`,i.add(r),n.halfWidth>=.7){const o=[],a=Math.ceil(n.path.length/.6);for(let l=0;l<=a;l++){const h=l/a*n.path.length,d=n.path.at(h);for(const u of[-1,1]){const f=d.x+d.nx*(n.halfWidth+.09)*u,g=d.z+d.nz*(n.halfWidth+.09)*u;o.push(I(.19,.06,.62,f,Kt(f,g)+.03,g,Math.atan2(d.tx,d.tz)+(u>0?0:Math.PI)))}}const c=xt(o,pt({color:11117722,roughness:.9}),`kerbs-${n.name}`);c.receiveShadow=!0,i.add(c)}}for(const n of Wa){const s=Kt(n.x,n.z),r=n.shape==="rect"?new On(n.w,.07,n.d):new Fn(n.r,n.r*1.02,.07,26),o=new mt(r,e(n.pave));o.position.set(n.x,s-.012,n.z),o.rotation.y=n.rot||0,o.receiveShadow=!0,o.castShadow=!1,o.name="plaza",i.add(o)}return{group:i,paveMat:e}}const bo=new Map,Eo=new Map,To=new Map;function S_(i,t,e){const n=`${i}|${t}`;return bo.has(n)||bo.set(n,pt({map:Jg(i),color:t,roughness:.88,metalness:.02})),bo.get(n)}function ee(i,t={}){const e=`${i}|${JSON.stringify(t)}`;return Eo.has(e)||Eo.set(e,pt({color:i,...t})),Eo.get(e)}function y_({floors:i,cols:t,seed:e,style:n,color:s,litRatio:r}){const o=`${n}|${s}|${i}|${t}|${e}|${r}`;if(!To.has(o)){const{map:a,emissiveMap:c}=e_({floors:i,cols:t,seed:e,style:n,litRatio:r});To.set(o,pt({map:a,emissiveMap:c,emissive:16777215,emissiveIntensity:0,color:s,roughness:.9,metalness:.02}))}return To.get(o)}const b_=.86,Ss=i=>Math.max(.28,i*.42);function E_(i,t=[]){const e=new Zt,n=ll[i.pal]||ll.cream,s=ve(Math.abs(Math.round((i.x*71+i.z*131+i.w*977)*100))%1e5+7),r=i.w,o=i.d,a=i.h,c=Math.max(1,Math.round(a/b_)),l=Math.max(1,Math.min(5,Math.round(r/.85))),h=i.kind==="shop"?"shop":i.kind==="station"||i.kind==="hall"?"formal":s()>.65?"brick":"house",d=.35+s()*.35,u=y_({floors:c,cols:l,seed:Math.round(s()*997)+3,style:h,color:n.wall,litRatio:d});u.emissiveMap&&t.push(u);const f=S_(i.kind==="church"||i.kind==="hall"?"slate":s()>.5?"tile":"slate",n.roof),g=ee(10327434,{map:Or(),roughness:.94}),_=ee(7162926,{roughness:.9}),m=ee(i.kind==="shed"||i.kind==="barn"?4866618:4147780,{roughness:.78}),p=ee(2898496,{roughness:.28,metalness:.55}),v=[],M=[],x=[],A=[];v.push(I(r+.1,.16,o+.1,0,.08,0)),v.push(I(r,a-.16,o,0,.16+(a-.16)/2,0));const w=a;switch(i.kind){case"gable":case"house":case"mill":case"station":case"white":default:{if(i.kind==="station"){A_({w:r,d:o,h:a,eaveY:w,walls:v,roofs:M,trims:x,glassParts:A,roof:f,joinery:m,glass:p,rnd:s});break}const R=Ss(o)*(i.kind==="mill"?1.15:1),U=r+.16,F=o+.16,k=ts(U,F,R,.08);k.translate(0,w,0),M.push(k);for(const H of[-1,1]){const X=Es(U,F,R,H);X.translate(0,w,0),v.push(X)}M.push(I(U+.1,.05,.09,0,w+R+.02,0)),x.push(I(U+.12,.06,.05,0,w-.02,F/2)),x.push(I(U+.12,.06,.05,0,w-.02,-F/2)),i.kind!=="mill"?ni(x,r*.32,w,-o*.2,s):ni(x,-r*.36,w,o*.15,s),s()>.45&&T_({roofs:M,trims:x,w:r,d:o,eaveY:w,rise:R}),i.kind==="mill"&&w_({group:e,trims:x,w:r,timber:_,joinery:m});break}case"hip":case"hall":{const R=Ss(Math.min(o,2.2)),U=r+.2,F=o+.2,k=Ki(U,F,R,.1);if(k.translate(0,w,0),M.push(k),x.push(I(U+.06,.07,F+.06,0,w+.03,0)),i.kind==="hall"){x.push(I(r*.42,.34,.1,0,w+R*.55,F*.02)),x.push(I(.62,.5,.62,0,w+R+.25,0));const H=Ki(.78,.78,.34,.06);H.translate(0,w+R+.5,0),M.push(H),x.push(yt(.045,.045,.5,8,0,w+R+.92,0)),x.push(yt(.09,.09,.09,10,0,w+R+1.2,0)),ni(x,r*.36,w,-o*.22,s),ni(x,-r*.36,w,-o*.22,s)}else ni(x,r*.3,w,-o*.25,s);break}case"shop":{const R=Ss(o)*.72,U=r+.14,F=o+.14,k=ts(U,F,R,.07);k.translate(0,w,0),M.push(k);for(const K of[-1,1]){const W=Es(U,F,R,K);W.translate(0,w,0),v.push(W)}const H=o/2+.02;A.push(I(r*.72,a*.44,.05,0,a*.3,H)),x.push(I(r*.78,a*.1,.09,0,a*.06,H+.02)),x.push(I(r*.8,.1,.09,0,a*.545,H+.02));const X=new mt(I(r*.86,.06,.46,0,a*.56,H+.24),ee(i.pal==="red"?9386796:3103310,{roughness:.8}));X.rotation.x=-.16,X.castShadow=!0,e.add(X);for(const K of[-1,1])x.push(I(.05,.05,.44,K*r*.4,a*.58,H+.22));ni(x,-r*.32,w,-o*.2,s);break}case"church":{const R=Ss(o)*1.05,U=r+.14,F=o+.14,k=ts(U,F,R,.07);k.translate(0,w,0),M.push(k);for(const K of[-1,1]){const W=Es(U,F,R,K);W.translate(0,w,0),v.push(W)}const H=o*.86;v.push(I(H,a+.75,o*.94,-r/2+H/2,(a+.75)/2,0)),x.push(I(H+.14,.12,o*.94+.14,-r/2+H/2,a+.78,0));const X=new hi(H*.78,i.spire||2.6,4,1);X.rotateY(Math.PI/4),X.translate(-r/2+H/2,a+.84+(i.spire||2.6)/2,0),M.push(X),x.push(yt(.03,.03,.34,6,-r/2+H/2,a+.84+(i.spire||2.6)+.14,0)),A.push(I(.34,.42,.06,-r/2+H/2,a+.5,o*.47));for(let K=0;K<3;K++){const W=-r*.16+K*(r*.3);A.push(I(.2,.72,.06,W,a*.55,o/2+.03)),A.push(I(.2,.72,.06,W,a*.55,-o/2-.03)),x.push(I(.28,.06,.08,W,a*.55-.4,o/2+.04))}x.push(I(.5,.9,.09,r*.44,.5,o*.2));break}case"shed":case"barn":{const R=i.kind==="barn"?Ss(o)*1.25:.34;if(i.kind==="barn"){const F=Ki(r+.2,o+.2,R,.14);F.translate(0,w,0),M.push(F),x.push(I(r*.34,R*.9,.1,0,w+R*.45,(o+.2)/2)),x.push(I(r*.34,R*.9,.1,0,w+R*.45,-(o+.2)/2)),x.push(I(.14,.14,o+.4,-r*.36,w+R+.02,0)),x.push(I(.14,.14,o+.4,r*.36,w+R+.02,0))}else{const F=ts(r+.16,o+.16,R,.06);F.translate(0,w,0),M.push(F);for(const k of[-1,1]){const H=Es(r+.16,o+.16,R,k);H.translate(0,w,0),v.push(H)}for(let k=0;k<6;k++)x.push(I(.05,.04,o+.2,-r/2+.3+k*(r/6.4),w+.02,0))}const U=o/2+.03;x.push(I(r*.3,a*.72,.06,-r*.18,a*.36,U)),x.push(I(r*.3,a*.72,.06,r*.18,a*.36,U)),x.push(I(r*.34,.09,.12,0,a*.74,U)),A.push(I(r*.16,a*.3,.05,r*.36,a*.62,U));break}case"flat":case"flatTower":{if(x.push(I(r+.16,.1,o+.16,0,a+.05,0)),i.upper){v.push(I(r*.94,a*.34,o*.94,0,a+a*.17,0)),A.push(I(r*.9,a*.2,.04,0,a+a*.22,o*.5)),A.push(I(.04,a*.2,o*.86,r*.5,a+a*.22,0)),x.push(I(r*1.02,.08,o*1.02,0,a*1.36+.04,0));const R=Ki(r*1.06,o*1.06,.22,.05);R.translate(0,a*1.36+.08,0),M.push(R)}else{const R=Ki(r+.1,o+.1,.2,.05);R.translate(0,a+.1,0),M.push(R)}x.push(I(.16,a*.5,.16,r*.36,a*.75,-o*.36));break}case"pavilion":{const R=new hi(Math.max(r,o)*.82,.62,8,1);R.translate(0,a+.31,0),M.push(R),x.push(I(r+.2,.09,o+.2,0,a+.02,0)),x.push(yt(.06,.06,.4,8,0,a+.8,0));for(let U=0;U<4;U++)x.push(I(.09,a*.8,.09,(U%2?1:-1)*r*.42,a*.4,(U<2?1:-1)*o*.42));A.push(I(r*.6,a*.4,.04,0,a*.5,o*.5));break}}["gable","hip","house","mill","shop"].includes(i.kind)&&(x.push(I(r*.16,a*.34,.06,0,a*.17,o/2+.03)),x.push(I(r*.22,.06,.18,0,.03,o/2+.1)),x.push(I(.05,a*.9,.05,r*.46,a*.5,o*.46)));const E=xt(v,u,"walls"),C=xt(M,f,"roof"),S=xt(x,i.kind==="shed"||i.kind==="barn"?m:i.kind==="church"||i.kind==="mill"?g:_,"trim"),y=A.length?xt(A,p,"glass"):null;for(const R of[E,C,S,y])R&&(R.castShadow=!0,R.receiveShadow=!0,e.add(R));return e.position.set(i.x,Kt(i.x,i.z)-.04,i.z),e.rotation.y=i.rot||0,e.name=`building-${i.kind}`,{group:e,glow:t}}function ni(i,t,e,n,s){const r=.34+s()*.26;i.push(I(.19,r+.3,.19,t,e+r*.4,n)),i.push(I(.24,.07,.24,t,e+r*.9,n)),i.push(I(.07,.13,.07,t-.045,e+r*.98+.06,n)),i.push(I(.07,.13,.07,t+.045,e+r*.98+.06,n))}function T_({roofs:i,trims:t,w:e,d:n,eaveY:s,rise:r}){const o=e>2?2:1;for(let a=0;a<o;a++){const c=o===1?0:-e*.22+a*e*.44,l=.32,h=.28;t.push(I(l,h,.06,c,s+r*.4,n/2+.01)),i.push(I(l+.07,.055,.34,c,s+r*.4+h/2+.04,n/2-.13))}}function w_({group:i,trims:t,w:e,timber:n,joinery:s}){const o=new Zt,a=new mt(yt(.07,.07,.52,8),s);a.rotation.x=Math.PI/2,o.add(a);for(const h of[-.17,.17]){const d=new mt(new za(.62,.033,6,22),n);d.position.z=h,d.castShadow=!0,o.add(d)}const c=[];for(let h=0;h<10;h++){const d=h/10*Math.PI*2,u=I(.045,.62*2-.06,.035,0,0,0);u.rotateZ(d),c.push(u);const f=I(.05,.05,.34,Math.sin(d)*(.62-.02),Math.cos(d)*(.62-.02),0);c.push(f)}const l=xt(c,n,"wheel-parts");l.castShadow=!0,o.add(l),o.position.set(-e*.58,.62,0),o.rotation.y=Math.PI/2,o.name="mill-wheel",i.add(o),t.push(I(.18,.11,1,-e*.5,1.02,0)),t.push(I(.14,1.1,.14,-e*.5,.5,.42)),t.push(I(.14,1.1,.14,-e*.5,.5,-.42))}function A_({w:i,d:t,h:e,eaveY:n,walls:s,roofs:r,trims:o,glassParts:a,roof:c,joinery:l,glass:h,rnd:d}){const f=i+.18,g=t+.18,_=ts(f,g,.42,.09);_.translate(0,n,0),r.push(_);for(const p of[-1,1]){const v=Es(f,g,.42,p);v.translate(0,n,0),s.push(v)}s.push(I(i*.3,.52,t*.7,0,n+.26,0));const m=Ki(i*.36,t*.76,.26,.06);m.translate(0,n+.52,0),r.push(m),o.push(I(i*.34,.08,t*.74,0,n+.55,0)),a.push(I(.22,.22,.05,0,n+.3,t*.36+.02)),o.push(yt(.05,.05,.34,8,0,n+.52+.26+.15,0)),o.push(I(i*.62,.07,.5,0,e*.72,t/2+.25));for(const p of[-1,1])o.push(I(.06,.06,.48,p*i*.28,e*.68,t/2+.25));ni(o,-i*.34,n,-t*.18,ve(3)),ni(o,i*.34,n,-t*.18,ve(5))}const _a=()=>ee(10327434,{map:Or(),roughness:.94}),Sh=()=>ee(7820335,{roughness:.9}),Ri=()=>ee(3486511,{roughness:.52,metalness:.6}),R_=()=>ee(14998728,{roughness:.8});function C_(i){const t=new Zt;t.name="town",P_(t,i);const e=D_();t.add(e),t.add(L_());const n=I_(t,i),s=N_(t,i);return B_(t),G_(t),W_(t),X_(t),q_(t),Y_(t,i),$_(t),Z_(t,i),K_(t),{group:t,lamps:n,signals:s}}function P_(i,t){let e=0;for(const n of Sn){if(n.kind==="waterTower")continue;const s=[],{group:r}=E_(n,s);for(const o of s)t.nightGlow.push({mat:o,level:.85});_n(r,!0,!0),i.add(r),e++}return e}function D_(){const i=Sn.find(u=>u.kind==="waterTower"),t=new Zt,e=Kt(i.x,i.z),n=Ri(),s=Sh(),r=_a(),o=.72,a=1.85,c=[];for(let u=0;u<4;u++){const f=u/4*Math.PI*2+Math.PI/4;c.push(yt(.075,.1,a,8,Math.cos(f)*o,a/2,Math.sin(f)*o))}for(const u of[.5,1.05,1.6])for(let f=0;f<4;f++){const g=f/4*Math.PI*2+Math.PI/4,_=(f+1)/4*Math.PI*2+Math.PI/4,m=[Math.cos(g)*o,u,Math.sin(g)*o],p=[Math.cos(_)*o,u,Math.sin(_)*o],v=Math.hypot(p[0]-m[0],p[2]-m[2]),M=I(v,.05,.05,(m[0]+p[0])/2,u,(m[2]+p[2])/2,-Math.atan2(p[2]-m[2],p[0]-m[0]));c.push(M),c.push(yt(.028,.028,v*1.35,5,(m[0]+p[0])/2,u+.42,(m[2]+p[2])/2,0))}t.add(xt(c,n,"tower-legs")),t.add(xt([I(o*2.2,.16,o*2.2,0,a+.08,0)],r,"tower-cap"));const l=a+.16,h=new mt(yt(.8,.8,1.05,20),s);h.position.y=l+.52,t.add(h),t.add(xt([yt(.84,.84,.07,20,0,l+.1,0),yt(.84,.84,.07,20,0,l+.95,0)],n,"tower-hoops"));const d=new mt(new hi(.95,.42,20,1),ee(5982778,{roughness:.85}));return d.position.y=l+1.05+.2,t.add(d),t.add(xt([yt(.04,.04,.4,6,0,l+1.7,0),I(.08,a+1,.08,o*.9,(a+1)/2-.1,0)],n,"tower-pipe")),t.add(xt([I(.26,.34,.26,o*.9,.17,0)],r,"tower-base")),t.position.set(i.x,e-.04,i.z),_n(t,!0,!0),t.name="water-tower",t}function L_(){const i=new Zt,t=Ri(),e=Sh();i.add(xt([I(.16,1.5,.16,0,.75,0),I(.13,.13,1.15,0,1.42,.5,.18),I(.34,.1,.34,0,.05,0)],t,"crane"));const n=new mt(yt(.012,.012,.55,5,0,1.1,1),e);i.add(n),i.add(xt([I(.16,.18,.16,0,.82,1)],e,"crane-hook"));for(const o of[-1,1])i.add(xt([I(.1,.9,.1,o*.2,.45,-.05,o*.35)],t,"brace"));const s=8.35,r=4.35;return i.position.set(s,Kt(s,r),r),i.rotation.y=-.5,_n(i,!0,!0),i.name="goods-crane",i}function I_(i,t){const e=[],n=Ri(),s=()=>{const a=pt({color:7766911,emissive:16761446,emissiveIntensity:0,roughness:.22,metalness:.25});return t.nightGlow.push({mat:a,level:3.1}),a},r=U_,o=(a,c,l,h)=>{const d=new Zt,u=Kt(a,c),f=l==="platform"?1.05:l==="square"?1.28:1.16,g=[yt(.055,.085,f,8,0,f/2,0),yt(.11,.13,.09,10,0,.045,0)];l==="square"?(g.push(I(.075,.075,.34,0,f-.02,.15)),g.push(I(.075,.075,.34,0,f-.02,-.15)),g.push(yt(.075,.075,.3,8,0,f+.14,0))):(g.push(I(.06,.06,.3,0,f-.02,.14)),g.push(yt(.07,.055,.22,8,0,f+.06,.28)));const _=xt(g,n,"lamp");d.add(_);const m=s(),p=v=>{const M=new mt(new Oa(.105,0),m);return M.scale.set(1,1.35,1),M.position.set(0,f+(l==="square"?.3:0),v),M.castShadow=!1,M};if(l==="square"?d.add(p(.28),p(-.28)):d.add(p(.28)),h){const v=r(),M=new mt(new Ua(1.15,20),v);M.rotation.x=-Math.PI/2,M.position.set(0,.05,l==="square"?0:.2),d.add(M),t.nightPools.push(v)}d.position.set(a,u,c),_n(_,!0,!1),i.add(d),e.push({group:d,height:f})};for(const[a,c,l]of lh)o(a,c,l,!0);for(const a of[-1,1]){const c=ai+a*(rn.structHalf+.55),l=$e(c),h=l.pos.clone().addScaledVector(l.right,-1.28);o(h.x,h.z,"post",!1)}return e}function U_(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(255,214,150,0.55)"),e.addColorStop(.45,"rgba(255,190,120,0.18)"),e.addColorStop(1,"rgba(255,180,110,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new us(i);return n.colorSpace=Ie,new Lr({map:n,transparent:!0,opacity:0,blending:Ro,depthWrite:!1})}function N_(i,t){const e=[];for(const n of hh){const s=gn.distanceTo(n.x,n.z,3.2),r=$e(s.s),o=r.pos.clone().addScaledVector(r.right,-1.15*n.side),a=new Zt,c=n.kind==="semaphore"?1.35:1.15,l=[yt(.05,.06,c,8,0,c/2,0),I(.22,.1,.22,0,.05,0)];for(let p=0;p<6;p++)l.push(I(.14,.022,.022,0,.2+p*.16,.05));a.add(xt(l,Ri(),"signal-post"));const h=pt({color:n.kind==="distant"?15262420:11809322,roughness:.6}),d=new Zt,u=new mt(I(.62,.14,.035,-.28,0,0),h);if(u.geometry.translate(.31,0,0),u.castShadow=!0,d.add(u),n.kind==="distant"){const p=new mt(I(.2,.16,.03,.5,0,0),ee(15789280,{roughness:.6}));d.add(F_(p))}else{const p=new mt(I(.14,.13,.04,0,0,0),ee(15920866,{roughness:.6}));p.position.x=.52,d.add(p)}const f=pt({color:16733504,emissive:16722450,emissiveIntensity:0,roughness:.4});t.nightGlow.push({mat:f,level:2.2});const g=new mt(yt(.075,.075,.06,10,0,0,0,0),Ri()),_=new mt(new ds(.045,8,6),f);_.position.set(0,0,-.05);const m=new Zt;m.add(d,g,_),m.position.set(0,c-.12,.03),a.add(m),a.position.copy(o),a.position.y=Kt(o.x,o.z),a.rotation.y=Math.atan2(r.tan.x,r.tan.z),_n(a,!0,!1),i.add(a),e.push({group:a,pivot:m,kind:n.kind,s:s.s,aspect:0,target:0})}return e}function F_(i){return i.castShadow=!0,i}function O_(i,t,e){for(const n of i){let s=0;const r=z_(n.s-t);e?s=0:r>1.2&&r<he-3&&(s=1),n.kind==="distant"&&(s=s===1&&r>7?1:0),n.target=s,n.aspect=Ee(n.aspect,n.target,.06),n.pivot.rotation.z=n.aspect*-.72}}function z_(i){return(i%he+he)%he}function B_(i){Ri();const t=[],e=[];for(const[o,a]of uh){const c=Kt(o,a),l=1.5;e.push(yt(.045,.065,l,7,o,c+l/2,a)),e.push(I(.62,.055,.055,o,c+l-.12,a)),e.push(I(.44,.05,.05,o,c+l-.34,a));for(const h of[-1,1])e.push(yt(.022,.022,.09,5,o+h*.24,c+l-.06,a)),e.push(yt(.022,.022,.09,5,o+h*.16,c+l-.28,a));t.push(new D(o,c+l-.05,a))}const n=xt(e,ee(7034428,{roughness:.92}),"poles");_n(n,!0,!1),i.add(n);const s=[];for(let o=0;o<t.length-1;o++){const a=t[o].clone(),c=t[o+1].clone();for(const l of[-.24,.24]){const h=a.clone().add(new D(l,0,0)),d=c.clone().add(new D(l,0,0)),u=h.clone().add(d).multiplyScalar(.5);u.y-=h.distanceTo(d)*.055;const f=new Fa(h,u,d);s.push(new Ba(f,8,.008,4,!1))}}const r=xt(s,ee(2829099,{roughness:.6,metalness:.4}),"wires");r.castShadow=!0,i.add(r)}const xa={broadleaf:{trunk:.55,canopy:.62,blobs:3,color:5208629,tint:.22},conifer:{trunk:.42,canopy:.74,blobs:0,color:3103290,tint:.18},willow:{trunk:.5,canopy:.66,blobs:3,color:6257218,tint:.2,wide:1.35},orchard:{trunk:.42,canopy:.5,blobs:2,color:6060604,tint:.3,blossom:!0}};function k_(i){const t=xa[i],e=[];if(i==="conifer")for(let s=0;s<3;s++){const r=.42-s*.11,o=new hi(r,.62,8,1);o.translate(0,.5+s*.42,0),e.push(o)}else{const s=ve(i.length*977+13),r=t.blobs;for(let o=0;o<r;o++){const a=.36*(1-o*.16),c=new Li(a,0);c.scale((t.wide||1)*(1+s()*.3),.86+s()*.3,1+s()*.3),c.translate((s()-.5)*.24,.58+t.canopy*.42+o*.24,(s()-.5)*.24),e.push(c)}}return H_(e)}function H_(i){const t=i.map(c=>c.index?c.toNonIndexed():c);let e=0;for(const c of t)e+=c.attributes.position.count;const n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2);let o=0;for(const c of t){c.computeVertexNormals();const l=c.attributes.position.array,h=c.attributes.normal.array,d=c.attributes.uv?c.attributes.uv.array:new Float32Array(c.attributes.position.count*2);n.set(l,o*3),s.set(h,o*3),r.set(d.subarray(0,c.attributes.position.count*2),o*2),o+=c.attributes.position.count}const a=new Me;return a.setAttribute("position",new Te(n,3)),a.setAttribute("normal",new Te(s,3)),a.setAttribute("uv",new Te(r,2)),a}function G_(i){const t=ve(90210),e=[],n=V_(),s=(r,o,a)=>{if(Math.abs(r)>Tn-.5||Math.abs(o)>je-.5||In(r,o)<1.65||Kt(r,o)<Ae+.05||_h(r,o)<a)return!1;for(const l of Ya)if(l.path.distanceTo(r,o,l.halfWidth+.75).dist<l.halfWidth+.6)return!1;for(const l of n)if(Math.hypot(l.x-r,l.z-o)<l.r)return!1;for(const l of e)if(Math.hypot(l.x-r,l.z-o)<.92)return!1;return!0};for(const r of Xa){let o=0;const a=r.n*26;for(let c=0;c<a&&o<r.n;c++){const l=t()*Math.PI*2,h=Math.sqrt(t())*r.r,d=r.x+Math.cos(l)*h,u=r.z+Math.sin(l)*h,f=r.kind==="willow"?.15:.55;s(d,u,f)&&(e.push({x:d,z:u,kind:r.kind,scale:.72+t()*.62,rot:t()*Math.PI*2,shade:.82+t()*.36}),o++)}}for(let r=0;r<26;r++)for(let o=0;o<40;o++){const a=(t()*2-1)*(Tn-.9),c=(t()*2-1)*(je-.9);if(!(In(a,c)<3.6&&t()>.25)&&s(a,c,1.1)){e.push({x:a,z:c,kind:t()>.68?"conifer":"broadleaf",scale:.6+t()*.6,rot:t()*6.28,shade:.8+t()*.4});break}}for(const r of Object.keys(xa)){const o=e.filter(m=>m.kind===r);if(!o.length)continue;const a=xa[r],c=pt({color:6965808,roughness:.95}),l=pt({color:16777215,roughness:.92,metalness:0,flatShading:!0}),h=new Ai(yt(a.trunk*.13,a.trunk*.19,a.trunk,6,0,a.trunk/2,0),c,o.length),d=new Ai(k_(r),l,o.length);d.castShadow=!0,h.castShadow=!0,d.receiveShadow=!0;const u=new Xt,f=new an,g=new D,_=new Et;o.forEach((m,p)=>{const v=Kt(m.x,m.z);f.setFromAxisAngle(new D(0,1,0),m.rot),u.compose(g.set(m.x,v-.03,m.z),f,new D(m.scale,m.scale*(.9+m.shade*.15),m.scale)),h.setMatrixAt(p,u),d.setMatrixAt(p,u);const M=new Et(a.color),x=(m.shade-1)*a.tint;_.setRGB(Un(M.r+x*.7+(m.shade-.9)*.06,.04,.95),Un(M.g+x,.04,.95),Un(M.b+x*.5,.02,.9)),d.setColorAt(p,_)}),h.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),h.name=`tree-trunks-${r}`,d.name=`trees-${r}`,i.add(h,d)}}function V_(){const i=[];for(const t of Sn)for(const e of xh(t,-.35))i.push({x:e.x,z:e.z,r:.62});for(const t of Wa)i.push({x:t.x,z:t.z,r:Math.max(t.w||t.r,t.d||t.r)*.62});return i}function W_(i){const t=ve(3312),e=[],n=pt({color:4218925,roughness:.96,flatShading:!0});for(const[c,l,h,d]of dh){const u=Math.hypot(h-c,d-l),f=Math.max(3,Math.round(u/.62));for(let g=0;g<=f;g++){const _=g/f,m=Ee(c,h,_)+(t()-.5)*.2,p=Ee(l,d,_)+(t()-.5)*.2;In(m,p)<1.3||$a(m,p)||e.push({x:m,z:p,y:Kt(m,p),s:.44+t()*.2,r:t()*3.14})}}const s=new Li(.42,0);s.scale(1.15,.72,1.15);const r=new Ai(s,n,e.length);r.castShadow=!0,r.receiveShadow=!0;const o=new Xt,a=new an;e.forEach((c,l)=>{a.setFromEuler(new cn(0,c.r,0)),o.compose(new D(c.x,c.y+c.s*.18,c.z),a,new D(c.s,c.s,c.s)),r.setMatrixAt(l,o)}),r.instanceMatrix.needsUpdate=!0,r.name="hedges",i.add(r)}function X_(i){const t=p_(.4),e=ve(777),n=t.filter(()=>e()>.42);if(!n.length)return;const s=new hi(.055,.5,5,1);s.translate(0,.25,0);const r=pt({color:7109182,roughness:.95,flatShading:!0}),o=new Ai(s,r,n.length*2),a=new Xt,c=new an;let l=0;for(const h of n)for(let d=0;d<2;d++){const u=h.x+(e()-.5)*.3,f=h.z+(e()-.5)*.3,g=.6+e()*.8;c.setFromEuler(new cn((e()-.5)*.3,e()*3,(e()-.5)*.3)),a.compose(new D(u,Kt(u,f)-.02,f),c,new D(g,g*(.8+e()*.7),g)),o.setMatrixAt(l++,a)}o.count=l,o.instanceMatrix.needsUpdate=!0,o.name="reeds",i.add(o)}function q_(i){const t=ee(9075294,{roughness:.92}),e=[[[-12.4,6.2],[-8.9,6.5]],[[-3,9.3],[1.3,9.5]],[[7,-9.5],[10.6,-9.2]],[[-11,-6.4],[-9.4,-5.2]],[[3.75,-5.15],[6.6,-5.15]],[[6.6,-5.15],[6.75,-3]],[[.55,-3.35],[.6,-1.8]]],n=[];for(const[[r,o],[a,c]]of e){const l=Math.hypot(a-r,c-o),h=Math.max(2,Math.round(l/.42)),d=Math.atan2(a-r,c-o);for(let u=0;u<=h;u++){const f=u/h,g=Ee(r,a,f),_=Ee(o,c,f);if(In(g,_)<1.25)continue;const m=Kt(g,_);if(n.push(I(.055,.46,.055,g,m+.23,_,d)),u<h){const p=(u+1)/h,v=Ee(r,a,p),M=Ee(o,c,p),x=(g+v)/2,A=(_+M)/2,w=Math.hypot(v-g,M-_),E=(m+Kt(v,M))/2;n.push(I(.03,.05,w,x,E+.36,A,d)),n.push(I(.03,.05,w,x,E+.2,A,d))}}}const s=xt(n,t,"fences");_n(s,!0,!0),i.add(s)}function Y_(i,t){const e=ve(555);for(const[a,c,l,h]of fh){const d=Kt(a,c),u=new Zt;switch(h){case"bench":{const f=ee(7096876,{roughness:.9});u.add(xt([I(.62,.045,.22,0,.24,0),I(.62,.2,.045,0,.36,-.09),I(.05,.24,.2,-.26,.12,0),I(.05,.24,.2,.26,.12,0)],f,"bench"));break}case"fountain":{const f=_a();u.add(xt([yt(.62,.68,.26,20,0,.13,0),yt(.5,.5,.06,18,0,.28,0),yt(.13,.16,.5,10,0,.5,0),yt(.28,.22,.08,14,0,.78,0)],f,"fountain"));const g=pt({color:5209472,emissive:3116950,emissiveIntensity:0,roughness:.1,metalness:.4});t.nightGlow.push({mat:g,level:.55}),u.add(new mt(yt(.46,.46,.03,18,0,.3,0),g));break}case"marketCross":{u.add(xt([I(.34,.2,.34,0,.1,0),I(.16,1,.16,0,.7,0),I(.5,.1,.1,0,1.05,0),yt(.06,.06,.28,8,0,1.28,0)],_a(),"cross"));break}case"crate":{const f=ee(9071170,{roughness:.92}),g=.28+e()*.1;u.add(xt([I(g,g,g,0,g/2,0),I(g*1.02,.04,.04,0,g*.75,0),I(.04,.04,g*1.02,0,g*.75,0)],f,"crate"));break}case"barrel":{u.add(new mt(yt(.15,.15,.34,12),ee(8018484,{roughness:.9}))),u.children[0].position.y=.17;break}case"haystock":{const f=ee(12360277,{roughness:.97,flatShading:!0}),g=new mt(new hi(.36,.66,9,1),f);g.position.y=.33;const _=new mt(yt(.42,.46,.12,9),f);_.position.y=.06,u.add(g,_);break}case"boat":{const f=new mt(new Ia(.12,.42,3,8),ee(9194290,{roughness:.86}));f.rotation.z=Math.PI/2,f.position.y=.02,f.castShadow=!0,u.add(f),u.add(xt([I(.5,.03,.05,0,.08,0),I(.05,.03,.3,.05,.08,0)],ee(14472128,{roughness:.8}),"boat-trim")),u.position.set(a,Ae+.02,c),u.rotation.y=l,i.add(u),t.boats=t.boats||[],t.boats.push({group:u,x:a,z:c,phase:e()*6.28});continue}case"bin":{u.add(xt([yt(.14,.11,.34,10,0,.17,0),yt(.15,.15,.03,10,0,.35,0)],ee(3099202,{roughness:.7,metalness:.2}),"bin"));break}case"boulder":{const f=new Li(.22+e()*.12,0);f.scale(1.2,.8,1);const g=new mt(f,ee(9143672,{roughness:.96,flatShading:!0}));g.position.y=.1,g.castShadow=!0,g.receiveShadow=!0,u.add(g);break}case"signpost":{u.add(xt([yt(.035,.045,1,7,0,.5,0),I(.34,.11,.03,.12,.9,0),I(.28,.11,.03,-.1,.72,0)],R_(),"signpost"));break}default:continue}u.position.set(a,d,c),u.rotation.y=l,_n(u,!0,!0),i.add(u)}const n=new Zt,s=ee(9401158,{roughness:.94}),r=[];for(let a=0;a<12;a++)r.push(I(.11,.11,1.15+a%3*.18,a%4*.16-.24,.06+Math.floor(a/4)*.12,a%2*.06));const o=xt(r,s,"timber-stack");n.add(o),n.position.set(7.35,Kt(7.35,3.4),3.35),n.rotation.y=.42,_n(n,!0,!0),i.add(n)}function $_(i){const e=[8010555,3099243,5595449,7035439,4143690,8215098].map(a=>ee(a,{roughness:.9})),n=ee(13214854,{roughness:.9}),s=[],r=[];for(const[a,c,l,h]of ph){const d=Kt(a,c)+.005,u=h==="child"?.42:.62,f=e[Math.abs(Math.round(a*13+c*7))%e.length],g=yt(u*.24,u*.19,u*.52,7,a,d+u*.34,c,l*.1);s.push({g,m:f}),r.push({g:new ds(u*.115,8,6).translate(a,d+u*.72,c),m:n}),s.push({g:I(u*.3,u*.34,u*.16,a,d+u*.19,c,l),m:f})}const o=new Map;for(const a of s.concat(r))o.has(a.m)||o.set(a.m,[]),o.get(a.m).push(a.g);for(const[a,c]of o){const l=xt(c,a,"figures");_n(l,!0,!1),i.add(l)}}function Z_(i,t){const e=be.z,n=be.top+.02,s=pt({color:15262416,roughness:.8});t.nameboard||(t.nameboard=s);for(const c of[-3.2,1.5]){const l=new Zt,h=new mt(I(1.5,.3,.06,0,0,0),s);l.add(h);const d=new mt(new ui(1.42,.26),new Jl({map:i_("MEADOWBANK"),roughness:.72}));d.position.z=.032,l.add(d);const u=d.clone();u.position.z=-.032,u.rotation.y=Math.PI,l.add(u),l.add(xt([I(1.56,.05,.075,0,.14,0),I(1.56,.05,.075,0,-.14,0)],ee(2834488,{roughness:.7}),"frame"));for(const f of[-1,1])l.add(xt([I(.05,.34,.05,f*.62,-.28,0)],Ri(),"bracket"));l.position.set(c,n+.6,e+.2),_n(l,!0,!1),i.add(l)}const r=new Zt;r.add(xt([I(.7,.62,.5,0,.31,0),I(.78,.06,.58,0,.65,0),I(.6,.3,.04,0,.4,.26)],ee(3099204,{roughness:.75}),"stall")),r.position.set(-4.55,n,e-.1),r.rotation.y=.06,_n(r,!0,!0),i.add(r);const o=new Zt,a=new mt(yt(.13,.13,.045,18),pt({color:15919830,emissive:16769448,emissiveIntensity:0,roughness:.6}));a.rotation.x=Math.PI/2,t.nightGlow.push({mat:a.material,level:1.1}),o.add(a),o.add(xt([yt(.15,.15,.04,18,0,0,-.02,0)],ee(2829096,{roughness:.6,metalness:.5}),"clock-case")),o.add(xt([I(.02,.07,.012,0,.02,.03),I(.045,.016,.012,.015,-.01,.03)],ee(1710616),"hands")),o.position.set(-1.5,n+.9,e+.34),i.add(o)}function K_(i){const t=ve(1234),e=new Li(.14,0);e.scale(1.3,.6,1.3);const n=pt({color:16777215,roughness:.94,flatShading:!0}),s=[];for(const l of Sn){if(l.w<1.2||["waterTower"].includes(l.kind))continue;const h=Math.cos(l.rot||0),d=Math.sin(l.rot||0);for(let u=0;u<3;u++){const f=-l.w*.32+u*l.w*.32,g=l.x+f*h+(l.d/2+.3)*d,_=l.z-f*d+(l.d/2+.3)*h;In(g,_)<1.3||$a(g,_)||Kt(g,_)<Ae+.05||s.push({x:g,z:_,col:t()>.5?5075e3:7174708,scale:.7+t()*.6})}}const r=new Ai(e,n,s.length),o=new Xt,a=new an,c=new Et;s.forEach((l,h)=>{a.setFromEuler(new cn(0,t()*3,0)),o.compose(new D(l.x,Kt(l.x,l.z)+.05,l.z),a,new D(l.scale,l.scale*.9,l.scale)),r.setMatrixAt(h,o),c.setHex(l.col).multiplyScalar(.8+t()*.5),r.setColorAt(h,c)}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.castShadow=!0,r.name="garden-beds",i.add(r)}const ys=Ge.railTop,j_=2,_l=.5,xl=2.35,es=[{id:"loco",kind:"loco",len:2.3,wb:1.45,w:.94,couplingAfter:.2},{id:"coach-a",kind:"coach",len:1.95,wb:1.2,w:.92,couplingAfter:.2,livery:9252646,roof:2829104,bands:14267482,cols:5,doorAt:0},{id:"coach-b",kind:"brake",len:1.82,wb:1.08,w:.9,livery:4869954,roof:2566694,bands:13222574,cols:4,doorAt:3}],va=[0];for(let i=1;i<es.length;i++)va.push(va[i-1]+es[i-1].len/2+es[i].len/2+(es[i-1].couplingAfter??.2));es.reduce((i,t)=>i+t.len,0)+.4;class J_{constructor(t){this.group=new Zt,this.group.name="train",this.mode="run",this.dwellLeft=0,this.speedSetting=1,this.laps=0,this.spin=0,this.start=dn(Er-9,he),this.lastStopS=null,this.bodies=[];for(const e of es){const n=e.kind==="loco"?Q_(t):tx(e,t);this.group.add(n.mesh);const s=(n.bogies||[]).map(r=>(this.group.add(r),r));this.bodies.push({spec:e,mesh:n.mesh,bogies:s,wheels:n.wheels})}this.couplings=[];for(let e=0;e<this.bodies.length-1;e++){const n=new mt(I(.045,.05,.44,0,0,0),pt({color:2763304,roughness:.6,metalness:.5}));n.castShadow=!0,this.group.add(n),this.couplings.push(n)}this.smoke=ex(),this.group.add(this.smoke.mesh),this.place()}get dwelling(){return this.mode==="dwell"}get speed(){return this.dwelling?0:xl*this.speedSetting}reset(){this.s=this.start,this.mode="run",this.dwellLeft=0,this.laps=0,this.spin=0,this.speedSetting=1,this.lastStopS=null,this.smoke.reset(),this.place()}advance(t){const e=xl*this.speedSetting;let n=0;if(this.mode==="dwell")this.dwellLeft-=t,this.dwellLeft<=0&&(this.dwellLeft=0,this.mode="run");else if(e>0){const s=this.s??this.start;this.s=dn(s+e*t,he),this.s<s&&this.laps++,n=e*t;const r=Math.min(dn(this.s-Er,he),dn(Er-this.s,he)),o=this.lastStopS===null?1/0:dn(this.s-this.lastStopS+_l*3,he);r<_l*.5&&o>he*.5&&(this.mode="dwell",this.dwellLeft=j_,this.lastStopS=this.s)}if(this.spin+=n/.135,this.place(),n>0){const s=$e(this.s);this.smoke.emit(s.pos.clone().addScaledVector(s.up,ys+1.12).addScaledVector(s.tan,.62),this.speedSetting,t)}return this.smoke.update(t,this.dwelling),this}place(){this.s===void 0&&(this.s=this.start);for(let t=0;t<this.bodies.length;t++){const e=this.bodies[t],n=e.spec,s=dn(this.s-va[t],he);e.s=s;const r=$e(dn(s+n.wb/2,he)),o=$e(dn(s-n.wb/2,he));vl(e.mesh,o.tan.clone().add(r.tan).normalize(),$e(s).pos,ys);for(const a of e.wheels)a.rotation.x=-this.spin*(.135/Math.max(.07,a.userData.r||.135));for(let a=0;a<e.bogies.length;a++){const c=dn(s+(a===0?-n.wb/2:n.wb/2),he),l=$e(c);vl(e.bogies[a],l.tan,l.pos,ys)}}for(let t=0;t<this.couplings.length;t++){const e=this.bodies[t],n=this.bodies[t+1],s=$e(e.s),r=$e(n.s),o=s.pos.clone().addScaledVector(s.up,ys+.24).addScaledVector(s.tan,-(e.spec.len/2+.03)),a=r.pos.clone().addScaledVector(r.up,ys+.24).addScaledVector(r.tan,n.spec.len/2+.03),c=this.couplings[t];c.position.copy(o).lerp(a,.5);const l=o.distanceTo(a);c.scale.z=Un(l/.44,.4,2.4),c.lookAt(a)}}}function vl(i,t,e,n){const s=t.clone().normalize(),r=new D().crossVectors(new D(0,1,0),s).normalize(),o=new D().crossVectors(s,r).normalize();i.quaternion.setFromRotationMatrix(new Xt().makeBasis(r,o,s)),i.position.copy(e).addScaledVector(o,n)}function Ma(i,t,e,n=3816512){const s=new Zt,r=pt({color:2500395,roughness:.42,metalness:.7}),o=pt({color:n,roughness:.5,metalness:.5}),a=new Fn(i,i,t,18);a.rotateZ(Math.PI/2);const c=new mt(a,r);s.add(c);const l=new mt(yt(i*.99,i*.99,t*.34,18,0,0,0,0),o);l.scale.y=1,s.add(l);const h=[];for(let f=0;f<e;f++){const g=f/e*Math.PI,_=I(.014,i*1.86,.028,0,0,0);_.rotateX(g),h.push(_)}const d=xt(h,pt({color:6974834,roughness:.5,metalness:.55}),"spokes");d.position.x=0,s.add(d);const u=new mt(yt(i*.2,i*.2,t*1.5,10,0,0,0,0),o);return s.add(u),s.userData.r=i,s.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),s}function Q_(i){const t=new Zt,e=pt({color:1981749,roughness:.4,metalness:.28}),n=pt({color:1318170,roughness:.5,metalness:.38}),s=pt({color:13214794,roughness:.28,metalness:.88}),r=pt({color:2434602,roughness:.55,metalness:.5}),o=[],a=[],c=[],l=[];o.push(I(.9,.075,2.24,0,.235,0)),o.push(I(.84,.1,2.16,0,.15,0)),o.push(I(.84,.26,.07,0,.29,1.13));for(const _ of[-1,1])o.push(yt(.05,.05,.13,10,_*.28,.28,1.22,0)),l.push(I(.07,.07,.08,_*.28,.28,1.29));for(const _ of[-1,1])a.push(yt(.115,.115,.34,12,_*.285,.33,.8,0)),l.push(yt(.028,.028,.62,8,_*.31,.3,.5,0)),l.push(I(.03,.05,.52,_*.33,.24,.35));a.push(yt(.185,.185,1.3,18,0,.6,.32,0)),a.push(yt(.212,.212,.44,18,0,.6,.97,0)),l.push(yt(.219,.219,.05,18,0,.6,1.15,0)),a.push(new ds(.212,16,9,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).translate(0,.6,1.19)),c.push(I(.028,.17,.02,0,.6,1.212)),a.push(yt(.085,.1,.3,14,0,.9,.95)),l.push(yt(.122,.1,.06,14,0,1.06,.95)),a.push(yt(.075,.095,.15,12,0,.83,.16)),c.push(yt(.05,.05,.1,10,-.09,.82,-.06));for(const _ of[-1,1])a.push(I(.13,.3,.88,_*.4,.44,.12)),c.push(I(.136,.028,.88,_*.4,.585,.12)),c.push(I(.136,.02,.06,_*.4,.4,.5));a.push(I(.86,.52,.6,0,.6,-.63));const h=I(.96,.055,.9,0,.885,-.6);a.push(h);for(const _ of[-1,1])l.push(I(.024,.24,.32,_*.432,.7,-.5));l.push(I(.42,.24,.024,0,.7,-.94)),c.push(I(.9,.02,2.2,0,.277,0)),c.push(yt(.02,.02,.24,8,-.1,.96,.5,0)),c.push(yt(.02,.02,.24,8,.1,.96,.5,0)),a.push(I(.15,.11,.28,.36,.36,-.16)),a.push(I(.15,.11,.28,-.36,.36,-.16));for(const _ of[-1,1]){l.push(yt(.013,.013,.92,6,_*.47,.56,.2,0));for(const m of[-.2,.2,.6])l.push(yt(.011,.011,.09,5,_*.47,.52,m))}const d=pt({color:16773842,emissive:16765066,emissiveIntensity:0,roughness:.35});i.nightGlow.push({mat:d,level:3.4}),t.add(new mt(yt(.062,.062,.05,14,0,.8,1.215,0),d)),t.add(xt([yt(.078,.078,.05,14,0,.8,1.19,0)],s,"lamp-case"));const u=pt({color:16748656,emissive:16722450,emissiveIntensity:0,roughness:.4});i.nightGlow.push({mat:u,level:2.4}),t.add(new mt(I(.045,.1,.03,0,.68,-.955),u)),t.add(xt(o,r,"loco-frames")),t.add(xt(a,e,"loco-body")),t.add(xt(l,n,"loco-dark")),t.add(xt(c,s,"loco-brass"));const f=[];for(const _ of[.74,.2,-.36])for(const m of[-1,1]){const p=Ma(.135,.055,5);p.position.set(m*.425,.135,_),t.add(p),f.push(p)}for(const _ of[1.04,-.86])for(const m of[-1,1]){const p=Ma(.08,.05,3);p.position.set(m*.4,.08,_),t.add(p),f.push(p)}const g=pt({color:9277332,roughness:.35,metalness:.8});return t.add(xt([yt(.022,.022,.1,8,.45,.2,.74,0),yt(.022,.022,.1,8,.45,.2,.2,0),yt(.022,.022,.1,8,.45,.2,-.36,0)],g,"crank-pins")),{mesh:t,wheels:f,bogies:[]}}function tx(i,t){const e=new Zt,{map:n,emissiveMap:s}=n_({cols:i.cols,seed:i.id.length*31+7,litRatio:.8,doorAt:i.doorAt}),r=pt({map:n,emissiveMap:s,emissive:16777215,emissiveIntensity:0,color:i.livery,roughness:.48,metalness:.14});t.nightGlow.push({mat:r,level:1});const o=pt({color:i.roof,roughness:.7,metalness:.16}),a=pt({color:i.bands,roughness:.42,metalness:.45}),c=pt({color:2500395,roughness:.6,metalness:.5}),l=i.len,h=i.w,d=[],u=[],f=[],g=[];d.push(I(h,.6,l,0,.58,0));const _=new Fn(.21,.21,h-.02,16,1,!1,-Math.PI/2,Math.PI);_.rotateZ(Math.PI/2),_.translate(0,.88,0),u.push(_),u.push(I(.018,.03,l*.94,0,1.085,0));for(const v of[-1,1])d.push(I(h*.99,.06,.05,0,.9,v*(l/2-.02)));f.push(I(h+.015,.05,l+.015,0,.855,0)),f.push(I(h+.02,.045,l+.02,0,.3,0)),g.push(I(h-.08,.08,l-.1,0,.24,0));for(const v of[-1,1]){g.push(I(.2,.03,.15,0,.15,v*(l/2+.09))),g.push(I(.2,.03,.15,0,.25,v*(l/2+.16))),g.push(I(.16,.04,.1,0,.94,v*(l/2+.05)));for(const x of[-1,1])g.push(yt(.045,.045,.12,10,x*.27,.3,v*(l/2+.07),0));const M=pt({color:16748656,emissive:16723992,emissiveIntensity:0,roughness:.4});t.nightGlow.push({mat:M,level:2}),e.add(new mt(I(.05,.08,.03,0,.8,v*(l/2+.07)),M))}if(i.kind==="brake")d.push(I(.44,.26,.52,0,1.1,-.06)),u.push(I(.52,.045,.6,0,1.25,-.06)),g.push(I(.36,.02,.02,0,1,l/2-.01));else{f.push(I(.5,.1,.02,0,.76,l/2+.02));for(const v of[-.5,.5])u.push(I(.16,.05,.3,0,1.1,v))}e.add(xt(d,r,"coach-body")),e.add(xt(u,o,"coach-roof")),e.add(xt(f,a,"coach-bands")),e.add(xt(g,c,"coach-iron"));const m=[],p=[];for(const v of[-1,1]){const M=new Zt;M.add(xt([I(.74,.1,.15,0,.2,.17),I(.74,.1,.15,0,.2,-.17),I(.1,.12,.4,0,.23,0),I(.5,.06,.5,0,.27,0)],c,"bogie-frame"));for(const x of[.17,-.17])for(const A of[-1,1]){const w=Ma(.105,.05,3);w.position.set(A*.37,.105,x),M.add(w),m.push(w)}M.position.set(0,0,0),p.push(M),M.userData.pivotZ=v*i.wb/2}return{mesh:e,wheels:m,bogies:p}}function ex(){const t=new Li(.085,1),e=pt({color:12762033,roughness:1,metalness:0,transparent:!0,opacity:.34,depthWrite:!1}),n=new Ai(t,e,24);n.instanceMatrix.setUsage(_u),n.frustumCulled=!1;const s=Array.from({length:24},()=>({life:0,x:0,y:-99,z:0,vx:0,vy:0,vz:0,size:1}));let r=0,o=0;const a=new Xt,c=new an,l=new D,h=new D,d=new Xt().makeTranslation(0,-999,0).scale(new D(1e-4,1e-4,1e-4));return{mesh:n,reset(){for(const u of s)u.life=0;for(let u=0;u<24;u++)n.setMatrixAt(u,d);n.instanceMatrix.needsUpdate=!0},emit(u,f,g){for(o+=g*(2.6+f*3.2);o>=1;){o-=1;const _=s[r];r=(r+1)%24,_.life=1,_.x=u.x,_.y=u.y,_.z=u.z,_.vy=.34+Math.random()*.2,_.vx=(Math.random()-.5)*.3,_.vz=(Math.random()-.5)*.3,_.size=.7+Math.random()*.5}},update(u,f){for(let g=0;g<24;g++){const _=s[g];if(_.life<=0){n.setMatrixAt(g,d);continue}_.life-=u*(f?.5:.4),_.x+=_.vx*u,_.y+=_.vy*u,_.z+=_.vz*u,_.vy*=1-u*.45;const m=Un(_.life,0,1),p=_.size*Ee(.35,1.55,1-m);a.compose(l.set(_.x,_.y,_.z),c,h.set(p,p*.86,p)),n.setMatrixAt(g,a)}n.instanceMatrix.needsUpdate=!0}}}function nx(i,t=!0){const e=dn(Er-(i.s??i.start),he),n=i.speed;return{running:t,dwelling:i.dwelling,dwellLeft:Math.max(0,i.dwellLeft),laps:i.laps,speed:n,toStation:i.dwelling?0:n>.01?e/n:1/0}}const ji={day:{label:"白天",sun:{color:16774370,intensity:3.1,dir:[.34,.86,.38]},fill:{color:12375278,intensity:.85},hemi:{sky:12376306,ground:9076062,intensity:1.05},ambient:{color:14674162,intensity:.32},bg:["#8fb6d8","#c7d9e6","#e6ddcb"],env:["#8fb6d8","#c7d9e6","#e6ddcb"],exposure:1.02,night:0,water:.14},dusk:{label:"傍晚",sun:{color:16756842,intensity:4.2,dir:[-.58,.42,.46]},fill:{color:8230845,intensity:.8},hemi:{sky:11978464,ground:8020548,intensity:.98},ambient:{color:5591132,intensity:.5},bg:["#585069","#93706f","#e8ab74"],env:["#6a688a","#a88878","#f0bc84"],exposure:1.16,night:.3,water:.2},night:{label:"夜晚",sun:{color:11060458,intensity:.9,dir:[.42,.62,-.38]},fill:{color:3491950,intensity:.42},hemi:{sky:3491950,ground:1775378,intensity:.78},ambient:{color:2832210,intensity:.62},bg:["#101828","#1d2536","#3a4050"],env:["#243050","#2c344a","#413a26"],exposure:1.3,night:1,water:.1}};function ix(i,t){const e=new Zt;e.name="lighting";const n=new Uc(16777215,2.8);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.near=1,n.shadow.camera.far=90,n.shadow.camera.left=-19,n.shadow.camera.right=19,n.shadow.camera.top=16,n.shadow.camera.bottom=-16,n.shadow.bias=-6e-4,n.shadow.normalBias=.028,n.shadow.radius=1.2,e.add(n),e.add(n.target);const s=new Uc(16777215,.5);s.castShadow=!1,e.add(s);const r=new Pd(16777215,4473924,.8);e.add(r);const o=new Id(16777215,.3);e.add(o),i.add(e);const a=document.createElement("canvas");a.width=4,a.height=256;const c=a.getContext("2d"),l=new us(a);l.colorSpace=Ie,l.mapping=Cs,i.background=l;const h=new pa(t);h.compileEquirectangularShader();const d={};for(const[E,C]of Object.entries(ji)){const S=s_(C.env[0],C.env[1],C.env[2],E==="night"?60:0);d[E]=h.fromEquirectangular(S).texture,S.dispose()}h.dispose();const u={from:"dusk",to:"dusk",t:1,current:_(ji.dusk)};m(ji.dusk);function f(E,C,S){const y=c.createLinearGradient(0,0,0,256);y.addColorStop(0,E),y.addColorStop(.52,C),y.addColorStop(1,S),c.fillStyle=y,c.fillRect(0,0,4,256),l.needsUpdate=!0}function g(E){n.color.copy(E.sunColor),n.intensity=E.sunIntensity,n.position.copy(E.sunDir),s.color.copy(E.fillColor),s.intensity=E.fillIntensity,r.color.copy(E.hemiSky),r.groundColor.copy(E.hemiGround),r.intensity=E.hemiIntensity,o.color.copy(E.ambColor),o.intensity=E.ambIntensity,t.toneMappingExposure=E.exposure,i.environmentIntensity=.55,f(E.bg1,E.bg2,E.bg3)}function _(E){return{sunColor:new Et(E.sun.color),sunIntensity:E.sun.intensity,sunDir:new D(...E.sun.dir).normalize().multiplyScalar(34),fillColor:new Et(E.fill.color),fillIntensity:E.fill.intensity,hemiSky:new Et(E.hemi.sky),hemiGround:new Et(E.hemi.ground),hemiIntensity:E.hemi.intensity,ambColor:new Et(E.ambient.color),ambIntensity:E.ambient.intensity,exposure:E.exposure,night:E.night,water:E.water,bg1:E.bg[0],bg2:E.bg[1],bg3:E.bg[2]}}function m(E){g(_(E))}const p=new Et,v=new Et,M=new Et;function x(E,C){const S=u.a,y=_(ji[E]),R=u.current;return R.sunColor.copy(S.sunColor).lerp(y.sunColor,C),R.sunIntensity=Ee(S.sunIntensity,y.sunIntensity,C),R.sunDir.copy(S.sunDir).lerp(y.sunDir,C).normalize().multiplyScalar(34),R.fillColor.copy(S.fillColor).lerp(y.fillColor,C),R.fillIntensity=Ee(S.fillIntensity,y.fillIntensity,C),R.hemiSky.copy(S.hemiSky).lerp(y.hemiSky,C),R.hemiGround.copy(S.hemiGround).lerp(y.hemiGround,C),R.hemiIntensity=Ee(S.hemiIntensity,y.hemiIntensity,C),R.ambColor.copy(S.ambColor).lerp(y.ambColor,C),R.ambIntensity=Ee(S.ambIntensity,y.ambIntensity,C),R.exposure=Ee(S.exposure,y.exposure,C),R.water=Ee(S.water,y.water,C),R.night=Ee(S.night,y.night,C),R.bg1=A(S.bg1,y.bg1,C),R.bg2=A(S.bg2,y.bg2,C),R.bg3=A(S.bg3,y.bg3,C),g(R),R}function A(E,C,S){return p.set(E),v.set(C),M.copy(p).lerp(v,S),`#${M.getHexString()}`}return{group:e,sun:n,get nightFactor(){return u.current.night},get transitioning(){return u.t<1},preset:()=>u.to,setPreset(E,C=!1){!ji[E]||E===u.to||(u.a=w(u.current),u.from=u.to,u.to=E,u.t=C?1:0,i.environment=d[E],C&&x(E,1))},update(E){return u.t>=1?!1:(u.t=Un(u.t+E/1.35,0,1),x(u.to,sx(u.t)),!0)},dispose(){for(const E of Object.values(d))E.dispose();l.dispose()}};function w(E){return{sunColor:E.sunColor.clone(),sunIntensity:E.sunIntensity,sunDir:E.sunDir.clone(),fillColor:E.fillColor.clone(),fillIntensity:E.fillIntensity,hemiSky:E.hemiSky.clone(),hemiGround:E.hemiGround.clone(),hemiIntensity:E.hemiIntensity,ambColor:E.ambColor.clone(),ambIntensity:E.ambIntensity,exposure:E.exposure,night:E.night,water:E.water,bg1:E.bg1,bg2:E.bg2,bg3:E.bg3}}}function sx(i){return i*i*(3-2*i)}function rx(i,t,e){const n=pn(.05,.85,t);for(const s of i.nightGlow)s.mat.emissiveIntensity=s.level*n;for(const s of i.nightPools)s.opacity=.95*n;e&&(e.roughness=Ee(.22,.34,n),e.envMapIntensity=Ee(.85,.5,n))}function ox(i,t){const e={nightGlow:[],nightPools:[],boats:[]},n=l_();i.add(n.group),i.add(u_());const s=d_();i.add(s.mesh);const r=f_();i.add(r.mesh);const o=M_();i.add(o.group);const a=m_();i.add(a.group);const c=x_();i.add(c.group);const l=-8.05,h=-.55;i.add(v_(l,h,Math.atan2(Ue.x-l,Ue.z-h)+Math.PI/2));const d=C_(e);i.add(d.group);const u=new J_(e);i.add(u.group);const f=ix(i,t);f.setPreset("dusk",!0);const g=a.group.getObjectByName("level-crossing");if(g?.userData.glow)for(const m of g.userData.glow)e.nightGlow.push({mat:m,level:2.4});const _=r.material.map;return d.group.getObjectByName("reeds"),{train:u,lighting:f,registry:e,signals:d.signals,materials:{water:r.material,terrain:s.material},bounds:{length:he},update(m,p,v){f.update(m),rx(e,f.nightFactor,r.material),_&&(_.offset.y-=p*.014,_.offset.x+=p*.004,_.needsUpdate=!1);for(const M of e.boats)M.group.position.y=-.34+.014+Math.sin(v*.9+M.phase)*.012,M.group.rotation.z=Math.sin(v*.7+M.phase)*.035,M.group.rotation.x=Math.cos(v*.55+M.phase)*.025;O_(d.signals,u.s??0,u.dwelling),u.advance(p)},setPreset(m){f.setPreset(m)}}}const ax=String.raw`
<div id="hud" aria-label="沙盘控制台">
  <header class="brand">
    <h1>微缩铁路小镇</h1>
    <p>Meadowbank · 桌面 HO 沙盘</p>
  </header>

  <section class="panel" id="panel">
    <div class="row primary">
      <button id="btn-run" class="btn wide" type="button" aria-pressed="true">
        <span class="ico" data-ico="pause"></span><span class="lbl">暂停</span>
      </button>
      <button id="btn-reset" class="btn" type="button" title="复位视角、列车与速度">
        <span class="ico" data-ico="reset"></span><span class="lbl">复位</span>
      </button>
    </div>

    <div class="row">
      <label class="field">
        <span class="key">速度</span>
        <input id="speed" type="range" min="0.2" max="3" step="0.05" value="1" />
        <output id="speed-out">1.00×</output>
      </label>
    </div>

    <div class="row">
      <span class="key">光线</span>
      <div class="seg" id="light-seg" role="group">
        <button data-preset="day" type="button">白天</button>
        <button data-preset="dusk" type="button" class="on">傍晚</button>
        <button data-preset="night" type="button">夜晚</button>
      </div>
    </div>

    <div class="row">
      <span class="key">机位</span>
      <div class="seg" id="view-seg" role="group">
        <button data-view="orbit" type="button" class="on">环视</button>
        <button data-view="follow" type="button">跟随列车</button>
      </div>
    </div>

    <div class="row status">
      <div class="pill" id="st-state">运行中</div>
      <div class="pill" id="st-next">下一站 0.0 s</div>
      <div class="pill" id="st-lap">圈数 0</div>
    </div>
  </section>

  <footer class="hint">
    <span>拖拽旋转</span><span>滚轮缩放</span><span>右键平移</span><span>空格 运行/暂停</span><span>R 复位</span><span>1/2/3 光线</span>
  </footer>
</div>
<div id="boot"><div class="boot-inner"><strong>正在铺设沙盘…</strong><span id="boot-step">生成地形</span></div></div>
`,wo={pause:"M6 4h4v16H6zM14 4h4v16h-4z",play:"M7 3l14 9-14 9z",reset:"M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"};function cx(i){const t=document.createElement("div");t.innerHTML=ax,document.body.appendChild(t);const e=t,n=x=>e.querySelector(x),s=n("#btn-run"),r=n("#btn-reset"),o=n("#speed"),a=n("#speed-out"),c=n("#light-seg"),l=n("#view-seg"),h=n("#st-state"),d=n("#st-next"),u=n("#st-lap"),f=n("#panel"),g=n("#boot"),_=n("#boot-step");for(const x of e.querySelectorAll("[data-ico]"))x.style.setProperty("--ico",`url("data:image/svg+xml,${Ml(wo[x.dataset.ico])}")`),x.classList.add("has-ico");let m=!0;const p=x=>{m=x,s.setAttribute("aria-pressed",String(x)),s.querySelector(".lbl").textContent=x?"暂停":"运行",s.querySelector(".ico").style.setProperty("--ico",`url("data:image/svg+xml,${Ml(x?wo.pause:wo.play)}")`),s.classList.toggle("paused",!x),i.onRun?.(x)},v=x=>{const A=(x-Number(o.min))/(Number(o.max)-Number(o.min))*100;o.style.setProperty("--fill",`${A}%`),a.textContent=`${x.toFixed(2)}×`};s.addEventListener("click",()=>p(!m)),r.addEventListener("click",()=>i.onReset?.()),o.addEventListener("input",()=>{const x=Number(o.value);v(x),i.onSpeed?.(x)}),v(Number(o.value));for(const x of c.querySelectorAll("button"))x.addEventListener("click",()=>{c.querySelectorAll("button").forEach(A=>A.classList.toggle("on",A===x)),i.onPreset?.(x.dataset.preset)});for(const x of l.querySelectorAll("button"))x.addEventListener("click",()=>{l.querySelectorAll("button").forEach(A=>A.classList.toggle("on",A===x)),i.onView?.(x.dataset.view)});window.addEventListener("keydown",x=>{x.target instanceof HTMLInputElement||(x.code==="Space"?(x.preventDefault(),p(!m)):x.key==="r"||x.key==="R"?i.onReset?.():x.key==="1"?c.querySelector('[data-preset="day"]').click():x.key==="2"?c.querySelector('[data-preset="dusk"]').click():x.key==="3"?c.querySelector('[data-preset="night"]').click():(x.key==="f"||x.key==="F")&&l.querySelector('[data-view="follow"]').click())});const M=()=>f.classList.toggle("compact",window.innerWidth<760);return M(),window.addEventListener("resize",M),f.addEventListener("dblclick",()=>f.classList.toggle("compact")),{setRunning:p,setSpeed(x){o.value=String(x),v(x)},setPreset(x){c.querySelectorAll("button").forEach(A=>A.classList.toggle("on",A.dataset.preset===x))},setView(x){l.querySelectorAll("button").forEach(A=>A.classList.toggle("on",A.dataset.view===x))},setBootStep(x){_&&(_.textContent=x)},hideBoot(){g?.classList.add("gone")},status(x){h.textContent=x.dwelling?"停站中":x.running===!1?"已暂停":x.speed>.01?"运行中":"已暂停",h.classList.toggle("dwell",!!x.dwelling),d.textContent=x.dwelling?`发车倒计时 ${x.dwellLeft.toFixed(1)} s`:Number.isFinite(x.toStation)?`下一站 ${x.toStation.toFixed(1)} s`:"下一站 —",u.textContent=`圈数 ${x.laps}`},presets:Object.keys(ji)}}function Ml(i){return encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${i}" fill="%23000"/></svg>`).replace(/%2523/g,"%23")}const lx=document.getElementById("scene"),Oe=new Mg({canvas:lx,antialias:!0,powerPreference:"high-performance"});Oe.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Oe.setSize(window.innerWidth,window.innerHeight,!1);Oe.outputColorSpace=Ie;Oe.toneMapping=Rl;Oe.shadowMap.enabled=!0;Oe.shadowMap.type=wl;const Za=new od,Sl=-.79,Ao=.6,Ci=new D(.2,.35,.2),Ne=new fn(26,window.innerWidth/window.innerHeight,.8,320),hx=(()=>{const i=[];for(const t of[-1,1])for(const e of[-1,1])i.push(new D(t*15.3,.75,e*11.9)),i.push(new D(t*15.3,-2,e*11.9));return i.push(new D(5.3,5.8,-4)),i.push(new D(-4.1,3.8,4.55)),i})(),gr=new D,yl=new Xt;function Ka(i){return new D(Math.sin(Sl)*Math.cos(Ao)*i,Math.sin(Ao)*i,Math.cos(Sl)*Math.cos(Ao)*i)}function ux(i){Ne.position.copy(Ka(i)).add(Ci),Ne.lookAt(Ci),Ne.updateMatrixWorld(!0),Ne.updateProjectionMatrix(),yl.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse);for(const t of hx)if(gr.copy(t).applyMatrix4(yl),Math.abs(gr.x)>.97||Math.abs(gr.y)>.97||gr.z>1)return!1;return!0}function yh(){let i=10,t=260;for(let e=0;e<30;e++){const n=(i+t)/2;ux(n)?t=n:i=n}return t}function Pr(){Ne.position.copy(Ka(yh())).add(Ci),ue.target.copy(Ci),ue.update()}const ue=new yg(Ne,Oe.domElement);ue.target.copy(Ci);ue.enableDamping=!0;ue.dampingFactor=.075;ue.rotateSpeed=.6;ue.zoomSpeed=.85;ue.panSpeed=.55;ue.screenSpacePanning=!1;ue.minDistance=10;ue.maxDistance=140;ue.minPolarAngle=.14;ue.maxPolarAngle=1.38;ue.update();let zs=!0,ja="orbit",mn=null,zr=!1;const qn=cx({onRun:i=>{zs=i},onSpeed:i=>{mn&&(mn.train.speedSetting=i)},onReset:()=>dx(),onPreset:i=>mn&&mn.setPreset(i),onView:i=>bh(i)});Oe.domElement.addEventListener("pointerdown",()=>{zr=!0});Oe.domElement.addEventListener("wheel",()=>{zr=!0},{passive:!0});function bh(i){ja=i,ue.enabled=i==="orbit",Ne.fov=i==="follow"?36:26,Ne.updateProjectionMatrix(),i==="orbit"&&(Ne.position.copy(Ka(yh())).add(Ci),ue.target.copy(Ci),ue.update()),qn.setView(i)}function dx(){mn.train.reset(),qn.setSpeed(1),mn.setPreset("dusk"),qn.setPreset("dusk"),bh("orbit"),zr=!1,zs=!0,qn.setRunning(!0)}const Eh=new Nd;let bl=0,Sa=16;function fx(){qn.setBootStep("生成地形与水面"),Pr(),requestAnimationFrame(()=>{try{mn=ox(Za,Oe),qn.setBootStep("布置小镇与列车"),requestAnimationFrame(()=>{mn.train.reset(),Pr(),Th(),qn.hideBoot(),location.search.includes("debug")&&console.log(Kg()),Eh.start(),Oe.setAnimationLoop(px)})}catch(i){throw qn.setBootStep(`构建失败：${i?.message??i}`),i}})}function px(){const i=Math.min(.05,Eh.getDelta());bl+=i;const t=zs?i:0;mn.update(i,t,bl),ja==="follow"?mx(i):(ue.target.x=yr.clamp(ue.target.x,-11,11),ue.target.y=yr.clamp(ue.target.y,-1,4.5),ue.target.z=yr.clamp(ue.target.z,-8.5,8.5),ue.update()),Th(),qn.status(nx(mn.train,zs)),Sa=Sa*.93+i*1e3*.07}const _r=new D,El=new D;function mx(i){const t=mn.train,e=$e(t.s??0);_r.copy(e.pos).addScaledVector(e.tan,-6).addScaledVector(e.up,3.6).addScaledVector(e.right,2.2),_r.y=Math.max(_r.y,3.5),Ne.position.lerp(_r,1-Math.exp(-2.4*i)),El.copy(e.pos).addScaledVector(e.up,.75),Ne.lookAt(El)}function Th(){Oe.render(Za,Ne)}window.addEventListener("resize",()=>{Ne.aspect=window.innerWidth/window.innerHeight,Ne.updateProjectionMatrix(),Oe.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Oe.setSize(window.innerWidth,window.innerHeight,!1),ja==="orbit"&&!zr&&Pr()});setInterval(()=>{Sa>27&&Oe.getPixelRatio()>1.2&&Oe.setPixelRatio(1.2)},3e3);fx();window.__railway={get world(){return mn},get running(){return zs},scene:Za,camera:Ne,controls:ue,renderer:Oe,applyHomeCamera:Pr};
