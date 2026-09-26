(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Na="180",$i={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zh=0,pl=1,kh=2,Pc=1,Dc=2,Nn=3,ti=0,qe=1,yn=2,$n=0,Qi=1,ko=2,ml=3,gl=4,Hh=5,pi=100,Gh=101,Vh=102,Wh=103,Xh=104,Yh=200,qh=201,Zh=202,jh=203,Ho=204,Go=205,Kh=206,Jh=207,$h=208,Qh=209,tu=210,eu=211,nu=212,iu=213,su=214,Vo=0,Wo=1,Xo=2,is=3,Yo=4,qo=5,Zo=6,jo=7,Lc=0,ru=1,ou=2,Qn=0,au=1,lu=2,cu=3,Ic=4,hu=5,uu=6,fu=7,Uc=300,ss=301,rs=302,Lr=303,Ko=304,Gr=306,Ir=1e3,Mn=1001,Jo=1002,gn=1003,du=1004,Zs=1005,En=1006,Jr=1007,gi=1008,wn=1009,Nc=1010,Fc=1011,Ps=1012,Fa=1013,vi=1014,zn=1015,Hs=1016,Oa=1017,Ba=1018,Ds=1020,Oc=35902,Bc=35899,zc=1021,kc=1022,mn=1023,Ls=1026,Is=1027,Hc=1028,za=1029,Gc=1030,ka=1031,Ha=1033,Tr=33776,br=33777,wr=33778,Ar=33779,$o=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,sa=37496,ra=37808,oa=37809,aa=37810,la=37811,ca=37812,ha=37813,ua=37814,fa=37815,da=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,xa=36492,ya=36494,Sa=36495,Ma=36283,Ea=36284,Ta=36285,ba=36286,pu=3200,mu=3201,Vc=0,gu=1,Bn="",Qe="srgb",os="srgb-linear",Ur="linear",he="srgb",Ai=7680,_l=519,_u=512,vu=513,xu=514,Wc=515,yu=516,Su=517,Mu=518,Eu=519,wa=35044,vl="300 es",Tn=2e3,Nr=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const bs=Math.PI/180,Us=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ga(i,t){return(i%t+t)%t}function Tu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function wu(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function Au(i,t=1){return t-Math.abs(Ga(i,t*2)-t)}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Du(i,t){return i+Math.random()*(t-i)}function Lu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(xl=i);let t=xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uu(i){return i*bs}function Nu(i){return i*Us}function Fu(i){return(i&i-1)===0&&i!==0}function Ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ce={DEG2RAD:bs,RAD2DEG:Us,generateUUID:bn,clamp:jt,euclideanModulo:Ga,mapLinear:Tu,inverseLerp:bu,lerp:ws,damp:wu,pingpong:Au,smoothstep:Ru,smootherstep:Cu,randInt:Pu,randFloat:Du,randFloatSpread:Lu,seededRandom:Iu,degToRad:Uu,radToDeg:Nu,isPowerOfTwo:Fu,ceilPowerOfTwo:Ou,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:zu,normalize:le,denormalize:dn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,p*w);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*w;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $r.copy(this).projectOnVector(t),this.sub($r)}reflect(t){return this.sub($r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new P,yl=new Hn;class qt{constructor(t,e,n,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],w=s[1],M=s[4],x=s[7],R=s[2],A=s[5],C=s[8];return r[0]=o*v+a*w+l*R,r[3]=o*m+a*M+l*A,r[6]=o*p+a*x+l*C,r[1]=c*v+h*w+u*R,r[4]=c*m+h*M+u*A,r[7]=c*p+h*x+u*C,r[2]=f*v+d*w+g*R,r[5]=f*m+d*M+g*A,r[8]=f*p+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new qt;function Xc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ku(){const i=Fr("canvas");return i.style.display="block",i}const Sl={};function Ns(i){i in Sl||(Sl[i]=!0,console.warn(i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ml=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:Ml,fromXYZ:El,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Ml,fromXYZ:El,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}const ne=Gu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class Vu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Fr("canvas")),Ri.width=t.width,Ri.height=t.height;const s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class Va{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;const eo=new P;class Ge extends Ti{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Mn,s=Mn,r=En,o=gi,a=mn,l=wn,c=Ge.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=bn(),this.name="",this.source=new Va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ir:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ir:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Uc;Ge.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,R=(p+1)/2,A=(h+f)/4,C=(u+v)/4,I=(g+m)/4;return M>x&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=C/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends Ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ge(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Va(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yc extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Ks.subVectors(this.max,fs),Ci.subVectors(t.a,fs),Pi.subVectors(t.b,fs),Di.subVectors(t.c,fs),Wn.subVectors(Pi,Ci),Xn.subVectors(Di,Pi),ri.subVectors(Ci,Di);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ri.z,ri.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ri.z,0,-ri.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ri.y,ri.x,0];return!no(e,Ci,Pi,Di,Ks)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Ci,Pi,Di,Ks))?!1:(Js.crossVectors(Wn,Xn),e=[Js.x,Js.y,Js.z],no(e,Ci,Pi,Di,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new P,new P,new P,new P,new P,new P,new P,new P],cn=new P,js=new Gs,Ci=new P,Pi=new P,Di=new P,Wn=new P,Xn=new P,ri=new P,fs=new P,Ks=new P,Js=new P,oi=new P;function no(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Zu=new Gs,ds=new P,io=new P;class Wa{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(io)),this.expandByPoint(ds.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Dn=new P,so=new P,$s=new P,Yn=new P,ro=new P,Qs=new P,oo=new P;class qc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){so.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=Yn.dot(this.direction),l=-Yn.dot($s),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(so).addScaledVector($s,f),d}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){ro.subVectors(e,t),Qs.subVectors(n,t),oo.crossVectors(ro,Qs);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(Qs.crossVectors(Yn,Qs));if(l<0)return null;const c=a*this.direction.dot(ro.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(oo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Ku)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),qn.crossVectors(n,Ke),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),qn.crossVectors(n,Ke)),qn.normalize(),tr.crossVectors(Ke,qn),s[0]=qn.x,s[4]=tr.x,s[8]=Ke.x,s[1]=qn.y,s[5]=tr.y,s[9]=Ke.y,s[2]=qn.z,s[6]=tr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],M=n[7],x=n[11],R=n[15],A=s[0],C=s[4],I=s[8],E=s[12],S=s[1],L=s[5],G=s[9],Z=s[13],st=s[2],Q=s[6],nt=s[10],at=s[14],tt=s[3],vt=s[7],bt=s[11],Pt=s[15];return r[0]=o*A+a*S+l*st+c*tt,r[4]=o*C+a*L+l*Q+c*vt,r[8]=o*I+a*G+l*nt+c*bt,r[12]=o*E+a*Z+l*at+c*Pt,r[1]=h*A+u*S+f*st+d*tt,r[5]=h*C+u*L+f*Q+d*vt,r[9]=h*I+u*G+f*nt+d*bt,r[13]=h*E+u*Z+f*at+d*Pt,r[2]=g*A+v*S+m*st+p*tt,r[6]=g*C+v*L+m*Q+p*vt,r[10]=g*I+v*G+m*nt+p*bt,r[14]=g*E+v*Z+m*at+p*Pt,r[3]=w*A+M*S+x*st+R*tt,r[7]=w*C+M*L+x*Q+R*vt,r[11]=w*I+M*G+x*nt+R*bt,r[15]=w*E+M*Z+x*at+R*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],w=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*v*c-g*u*c+g*a*d-o*v*d-h*a*p+o*u*p,R=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,A=e*w+n*M+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=w*C,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=M*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=x*C,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=R*C,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,w=l*c,M=l*h,x=l*u,R=n.x,A=n.y,C=n.z;return s[0]=(1-(v+p))*R,s[1]=(d+x)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(f+p))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+M)*C,s[9]=(m-w)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),a=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Tn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Nr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Tn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Nr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new P,hn=new $t,ju=new P(0,0,0),Ku=new P(1,1,1),qn=new P,tr=new P,Ke=new P,Tl=new $t,bl=new Hn;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ju=0;const wl=new P,Ii=new Hn,Ln=new $t,er=new P,ps=new P,$u=new P,Qu=new Hn,Al=new P(1,0,0),Rl=new P(0,1,0),Cl=new P(0,0,1),Pl={type:"added"},tf={type:"removed"},Ui={type:"childadded",child:null},ao={type:"childremoved",child:null};class Pe extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new P,e=new an,n=new Hn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new qt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ps,er,this.up):Ln.lookAt(er,ps,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,$u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new P(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new P,In=new P,lo=new P,Un=new P,Ni=new P,Fi=new P,Dl=new P,co=new P,ho=new P,uo=new P,fo=new fe,po=new fe,mo=new fe;class on{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),In.subVectors(n,e),lo.subVectors(t,e);const o=un.dot(un),a=un.dot(In),l=un.dot(lo),c=In.dot(In),h=In.dot(lo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),In.subVectors(t,e),un.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,n),Fi.subVectors(r,n),co.subVectors(t,n);const l=Ni.dot(co),c=Fi.dot(co);if(l<=0&&c<=0)return e.copy(n);ho.subVectors(t,s);const h=Ni.dot(ho),u=Fi.dot(ho);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);uo.subVectors(t,r);const d=Ni.dot(uo),g=Fi.dot(uo);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Fi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Dl.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Dl,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Ni,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Ga(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=go(o,r,t+1/3),this.g=go(o,r,t),this.b=go(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ne.workingToColorSpace(Ie.copy(this),t),Math.round(jt(Ie.r*255,0,255))*65536+Math.round(jt(Ie.g*255,0,255))*256+Math.round(jt(Ie.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Qe){ne.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(nr);const n=ws(Zn.h,nr.h,e),s=ws(Zn.s,nr.s,e),r=ws(Zn.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Ht;Ht.NAMES=jc;let ef=0;class cs extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Qi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Go,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kc extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new P,ir=new ht;let nf=0;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}}class Jc extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $c extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sf=0;const rn=new $t,_o=new Pe,Oi=new P,Je=new Gs,ms=new Gs,Re=new P;class Ae extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?$c:Jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Je.min,ms.min),Je.expandByPoint(Re),Re.addVectors(Je.max,ms.max),Je.expandByPoint(Re)):(Je.expandByPoint(ms.min),Je.expandByPoint(ms.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(t,c),Re.add(Oi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;const c=new P,h=new P,u=new P,f=new ht,d=new ht,g=new ht,v=new P,m=new P;function p(I,E,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[I].add(v),a[E].add(v),a[S].add(v),l[I].add(m),l[E].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,E=w.length;I<E;++I){const S=w[I],L=S.start,G=S.count;for(let Z=L,st=L+G;Z<st;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const M=new P,x=new P,R=new P,A=new P;function C(I){R.fromBufferAttribute(s,I),A.copy(R);const E=a[I];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const L=x.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,L)}for(let I=0,E=w.length;I<E;++I){const S=w[I],L=S.start,G=S.count;for(let Z=L,st=L+G;Z<st;Z+=3)C(t.getX(Z+0)),C(t.getX(Z+1)),C(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new De(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new $t,ai=new qc,sr=new Wa,Il=new P,rr=new P,or=new P,ar=new P,vo=new P,lr=new P,Ul=new P,cr=new P;class ie extends Pe{constructor(t=new Ae,e=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(vo.fromBufferAttribute(u,t),o?lr.addScaledVector(vo,h):lr.addScaledVector(vo.sub(e),h))}e.add(lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(sr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(sr,Il)===null||ai.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,R=M;x<R;x+=3){const A=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);s=hr(this,p,t,n,c,h,u,A,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=hr(this,o,t,n,c,h,u,w,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,R=M;x<R;x+=3){const A=x,C=x+1,I=x+2;s=hr(this,p,t,n,c,h,u,A,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const w=m,M=m+1,x=m+2;s=hr(this,o,t,n,c,h,u,w,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rf(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;cr.copy(a),cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:i}}function hr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,rr),i.getVertexPosition(l,or),i.getVertexPosition(c,ar);const h=rf(i,t,e,n,rr,or,ar,Ul);if(h){const u=new P;on.getBarycoord(Ul,rr,or,ar,u),s&&(h.uv=on.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=on.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};on.getNormal(rr,or,ar,f.normal),h.face=f,h.barycoord=u}return h}class $ extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(v,m,p,w,M,x,R,A,C,I,E){const S=x/C,L=R/I,G=x/2,Z=R/2,st=A/2,Q=C+1,nt=I+1;let at=0,tt=0;const vt=new P;for(let bt=0;bt<nt;bt++){const Pt=bt*L-Z;for(let Vt=0;Vt<Q;Vt++){const Kt=Vt*S-G;vt[v]=Kt*w,vt[m]=Pt*M,vt[p]=st,c.push(vt.x,vt.y,vt.z),vt[v]=0,vt[m]=0,vt[p]=A>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(Vt/C),u.push(1-bt/I),at+=1}}for(let bt=0;bt<I;bt++)for(let Pt=0;Pt<C;Pt++){const Vt=f+Pt+Q*bt,Kt=f+Pt+Q*(bt+1),re=f+(Pt+1)+Q*(bt+1),Qt=f+(Pt+1)+Q*bt;l.push(Vt,Kt,Qt),l.push(Kt,re,Qt),tt+=6}a.addGroup(d,tt,E),d+=tt,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const af={clone:as,merge:ke};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class th extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new P,Nl=new ht,Fl=new ht;class tn extends th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Nl,Fl),e.subVectors(Fl,Nl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class hf extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new tn(Bi,zi,t,e);r.layers=this.layers,this.add(r);const o=new tn(Bi,zi,t,e);o.layers=this.layers,this.add(o);const a=new tn(Bi,zi,t,e);a.layers=this.layers,this.add(a);const l=new tn(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new tn(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eh extends Ge{constructor(t=[],e=ss,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:$n});r.uniforms.tEquirect.value=e;const o=new ie(s,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=En),new hf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class He extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ff={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Xa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Xa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class df extends Pe{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wa,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new P;class Or{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ya extends cs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const gs=new P,Hi=new P,Gi=new P,Vi=new ht,_s=new ht,nh=new $t,ur=new P,vs=new P,fr=new P,Ol=new ht,yo=new ht,Bl=new ht;class ih extends Pe{constructor(t=new Ya){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pf(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Or(n,3,0,!1)),ki.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=ki,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;dr(ur.set(-.5,-.5,0),Gi,o,Hi,s,r),dr(vs.set(.5,-.5,0),Gi,o,Hi,s,r),dr(fr.set(.5,.5,0),Gi,o,Hi,s,r),Ol.set(0,0),yo.set(1,0),Bl.set(1,1);let a=t.ray.intersectTriangle(ur,vs,fr,!1,gs);if(a===null&&(dr(vs.set(-.5,.5,0),Gi,o,Hi,s,r),yo.set(0,1),a=t.ray.intersectTriangle(ur,fr,vs,!1,gs),a===null))return;const l=t.ray.origin.distanceTo(gs);l<t.near||l>t.far||e.push({distance:l,point:gs.clone(),uv:on.getInterpolation(gs,ur,vs,fr,Ol,yo,Bl,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function dr(i,t,e,n,s,r){Vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_s.x=r*Vi.x-s*Vi.y,_s.y=s*Vi.x+r*Vi.y):_s.copy(Vi),i.copy(t),i.x+=_s.x,i.y+=_s.y,i.applyMatrix4(nh)}const So=new P,mf=new P,gf=new qt;class Kn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=So.subVectors(n,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gf.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Wa,_f=new ht(.5,.5),pr=new P;class qa{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],M=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,d-h,p-g,R-w).normalize(),s[1].setComponents(c+o,d+h,p+g,R+w).normalize(),s[2].setComponents(c+a,d+u,p+v,R+M).normalize(),s[3].setComponents(c-a,d-u,p-v,R-M).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,R-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,R-x).normalize(),e===Tn)s[5].setComponents(c+l,d+f,p+m,R+x).normalize();else if(e===Nr)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=_f.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vf extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sh extends Ge{constructor(t,e,n=vi,s,r,o,a=gn,l=gn,c,h=Ls,u=1){if(h!==Ls&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rh extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vr extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function w(){const x=new P,R=new P;let A=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const E=[],S=I/r,L=S*(e-t)+t;for(let G=0;G<=s;G++){const Z=G/s,st=Z*l+a,Q=Math.sin(st),nt=Math.cos(st);R.x=L*Q,R.y=-S*n+m,R.z=L*nt,u.push(R.x,R.y,R.z),x.set(Q,C,nt).normalize(),f.push(x.x,x.y,x.z),d.push(Z,1-S),E.push(g++)}v.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const S=v[E][I],L=v[E+1][I],G=v[E+1][I+1],Z=v[E][I+1];(t>0||E!==0)&&(h.push(S,L,Z),A+=3),(e>0||E!==r-1)&&(h.push(L,G,Z),A+=3)}c.addGroup(p,A,0),p+=A}function M(x){const R=g,A=new ht,C=new P;let I=0;const E=x===!0?t:e,S=x===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let G=0;G<=s;G++){const st=G/s*l+a,Q=Math.cos(st),nt=Math.sin(st);C.x=E*nt,C.y=m*S,C.z=E*Q,u.push(C.x,C.y,C.z),f.push(0,S,0),A.x=Q*.5+.5,A.y=nt*.5*S+.5,d.push(A.x,A.y),g++}for(let G=0;G<s;G++){const Z=R+G,st=L+G;x===!0?h.push(st,st+1,Z):h.push(st+1,st,Z),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zi extends Xt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Zi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Za extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const M=new P,x=new P,R=new P;for(let A=0;A<e.length;A+=3)d(e[A+0],M),d(e[A+1],x),d(e[A+2],R),l(M,x,R,w)}function l(w,M,x,R){const A=R+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const E=w.clone().lerp(x,I/A),S=M.clone().lerp(x,I/A),L=A-I;for(let G=0;G<=L;G++)G===0&&I===A?C[I][G]=E:C[I][G]=E.clone().lerp(S,G/L)}for(let I=0;I<A;I++)for(let E=0;E<2*(A-I)-1;E++){const S=Math.floor(E/2);E%2===0?(f(C[I][S+1]),f(C[I+1][S]),f(C[I][S])):(f(C[I][S+1]),f(C[I+1][S+1]),f(C[I+1][S]))}}function c(w){const M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(w),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const w=new P;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];const x=m(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;o.push(x,1-R)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const M=o[w+0],x=o[w+2],R=o[w+4],A=Math.max(M,x,R),C=Math.min(M,x,R);A>.9&&C<.1&&(M<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),R<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,M){const x=w*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const w=new P,M=new P,x=new P,R=new P,A=new ht,C=new ht,I=new ht;for(let E=0,S=0;E<r.length;E+=9,S+=6){w.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),R.copy(w).add(M).add(x).divideScalar(3);const L=m(R);v(A,S+0,w,L),v(C,S+2,M,L),v(I,S+4,x,L)}}function v(w,M,x,R){R<0&&w.x===1&&(o[M]=w.x-1),x.x===0&&x.z===0&&(o[M]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.vertices,t.indices,t.radius,t.details)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new $t;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xf extends ja{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ka(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const mr=new P,Mo=new Ka,Eo=new Ka,To=new Ka;class Wr extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),c=mr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Mo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Eo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),To.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Eo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),To.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Mo.calc(l),Eo.calc(l),To.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function yf(i,t){const e=1-i;return e*e*t}function Sf(i,t){return 2*(1-i)*i*t}function Mf(i,t){return i*i*t}function As(i,t,e,n){return yf(i,t)+Sf(i,e)+Mf(i,n)}function Ef(i,t){const e=1-i;return e*e*e*t}function Tf(i,t){const e=1-i;return 3*e*e*i*t}function bf(i,t){return 3*(1-i)*i*i*t}function wf(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return Ef(i,t)+Tf(i,e)+bf(i,n)+wf(i,s)}class oh extends Rn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Af extends Rn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y),Rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ah extends Rn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Rn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lh extends Rn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ch extends Rn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(zl(a,l.x,c.x,h.x,u.x),zl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var Br=Object.freeze({__proto__:null,ArcCurve:xf,CatmullRomCurve3:Wr,CubicBezierCurve:oh,CubicBezierCurve3:Af,EllipseCurve:ja,LineCurve:ah,LineCurve3:Rf,QuadraticBezierCurve:lh,QuadraticBezierCurve3:ch,SplineCurve:hh});class Cf extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Br[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Br[s.type]().fromJSON(s))}return this}}class Aa extends Cf{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ah(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new lh(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new oh(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new ja(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xr extends Aa{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Aa().fromJSON(s))}return this}}function Pf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Nf(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Fs(r,o,e,a,l,c,0),o}function uh(i,t,e,n,s){let r;if(s===Yf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=kl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=kl(o/n|0,i[o],i[o+1],r);return r&&ls(r,r.next)&&(Bs(r),r=r.next),r}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||ve(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Lf(i,n,s,r):Df(i)){t.push(l.i,i.i,c.i),Bs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=If(yi(i),t),Fs(i,t,e,n,s,r,2)):o===2&&Uf(i,t,e,n,s,r):Fs(yi(i),t,e,n,s,r,1);break}}}function Df(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Es(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),m=Math.max(h,u,f),p=Ra(d,g,t,e,n),w=Ra(v,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=w;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Es(a,h,l,u,c,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Es(a,h,l,u,c,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Es(a,h,l,u,c,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Es(a,h,l,u,c,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function If(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&dh(n,e,e.next,s)&&Os(n,s)&&Os(s,n)&&(t.push(n.i,e.i,s.i),Bs(e),Bs(e.next),e=i=s),e=e.next}while(e!==i);return yi(e)}function Uf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vf(o,a)){let l=ph(o,a);o=yi(o,o.next),l=yi(l,l.next),Fs(o,t,e,n,s,r,0),Fs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=uh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gf(c))}s.sort(Ff);for(let r=0;r<s.length;r++)e=Of(s[r],e);return e}function Ff(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Of(i,t){const e=Bf(i,t);if(!e)return t;const n=ph(e,i);return yi(n,n.next),yi(e,e.next)}function Bf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&fh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Os(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&zf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function zf(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function kf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ra(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hf(s)}function Hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ra(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Es(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&fh(i,t,e,n,s,r,o,a)}function Vf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wf(i,t)&&(Os(i,t)&&Os(t,i)&&Xf(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||ls(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function dh(i,t,e,n){const s=_r(ve(i,t,e)),r=_r(ve(i,t,n)),o=_r(ve(e,n,i)),a=_r(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&gr(i,e,t)||r===0&&gr(i,n,t)||o===0&&gr(e,i,n)||a===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function Wf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Xf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){const e=Ca(i.i,i.x,i.y),n=Ca(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kl(i,t,e,n){const s=Ca(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ca(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class qf{static triangulate(t,e,n=2){return Pf(t,e,n)}}class ji{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ji.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Hl(t),Gl(n,t);let o=t.length;e.forEach(Hl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Gl(n,e[l]);const a=qf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vs extends Ae{constructor(t=new Xr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Zf;let M,x=!1,R,A,C,I;p&&(M=p.getSpacedPoints(h),x=!0,f=!1,R=p.computeFrenetFrames(h,!1),A=new P,C=new P,I=new P),f||(m=0,d=0,g=0,v=0);const E=a.extractPoints(c);let S=E.shape;const L=E.holes;if(!ji.isClockWise(S)){S=S.reverse();for(let D=0,F=L.length;D<F;D++){const W=L[D];ji.isClockWise(W)&&(L[D]=W.reverse())}}function Z(D){const W=10000000000000001e-36;let k=D[0];for(let rt=1;rt<=D.length;rt++){const X=rt%D.length,q=D[X],xt=q.x-k.x,Rt=q.y-k.y,b=xt*xt+Rt*Rt,_=Math.max(Math.abs(q.x),Math.abs(q.y),Math.abs(k.x),Math.abs(k.y)),z=W*_*_;if(b<=z){D.splice(X,1),rt--;continue}k=q}}Z(S),L.forEach(Z);const st=L.length,Q=S;for(let D=0;D<st;D++){const F=L[D];S=S.concat(F)}function nt(D,F,W){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(F,W)}const at=S.length;function tt(D,F,W){let k,rt,X;const q=D.x-F.x,xt=D.y-F.y,Rt=W.x-D.x,b=W.y-D.y,_=q*q+xt*xt,z=q*b-xt*Rt;if(Math.abs(z)>Number.EPSILON){const j=Math.sqrt(_),ot=Math.sqrt(Rt*Rt+b*b),et=F.x-xt/j,gt=F.y+q/j,ft=W.x-b/ot,Tt=W.y+Rt/ot,Ct=((ft-et)*b-(Tt-gt)*Rt)/(q*b-xt*Rt);k=et+q*Ct-D.x,rt=gt+xt*Ct-D.y;const ut=k*k+rt*rt;if(ut<=2)return new ht(k,rt);X=Math.sqrt(ut/2)}else{let j=!1;q>Number.EPSILON?Rt>Number.EPSILON&&(j=!0):q<-Number.EPSILON?Rt<-Number.EPSILON&&(j=!0):Math.sign(xt)===Math.sign(b)&&(j=!0),j?(k=-xt,rt=q,X=Math.sqrt(_)):(k=q,rt=xt,X=Math.sqrt(_/2))}return new ht(k/X,rt/X)}const vt=[];for(let D=0,F=Q.length,W=F-1,k=D+1;D<F;D++,W++,k++)W===F&&(W=0),k===F&&(k=0),vt[D]=tt(Q[D],Q[W],Q[k]);const bt=[];let Pt,Vt=vt.concat();for(let D=0,F=st;D<F;D++){const W=L[D];Pt=[];for(let k=0,rt=W.length,X=rt-1,q=k+1;k<rt;k++,X++,q++)X===rt&&(X=0),q===rt&&(q=0),Pt[k]=tt(W[k],W[X],W[q]);bt.push(Pt),Vt=Vt.concat(Pt)}let Kt;if(m===0)Kt=ji.triangulateShape(Q,L);else{const D=[],F=[];for(let W=0;W<m;W++){const k=W/m,rt=d*Math.cos(k*Math.PI/2),X=g*Math.sin(k*Math.PI/2)+v;for(let q=0,xt=Q.length;q<xt;q++){const Rt=nt(Q[q],vt[q],X);U(Rt.x,Rt.y,-rt),k===0&&D.push(Rt)}for(let q=0,xt=st;q<xt;q++){const Rt=L[q];Pt=bt[q];const b=[];for(let _=0,z=Rt.length;_<z;_++){const j=nt(Rt[_],Pt[_],X);U(j.x,j.y,-rt),k===0&&b.push(j)}k===0&&F.push(b)}}Kt=ji.triangulateShape(D,F)}const re=Kt.length,Qt=g+v;for(let D=0;D<at;D++){const F=f?nt(S[D],Vt[D],Qt):S[D];x?(C.copy(R.normals[0]).multiplyScalar(F.x),A.copy(R.binormals[0]).multiplyScalar(F.y),I.copy(M[0]).add(C).add(A),U(I.x,I.y,I.z)):U(F.x,F.y,0)}for(let D=1;D<=h;D++)for(let F=0;F<at;F++){const W=f?nt(S[F],Vt[F],Qt):S[F];x?(C.copy(R.normals[D]).multiplyScalar(W.x),A.copy(R.binormals[D]).multiplyScalar(W.y),I.copy(M[D]).add(C).add(A),U(I.x,I.y,I.z)):U(W.x,W.y,u/h*D)}for(let D=m-1;D>=0;D--){const F=D/m,W=d*Math.cos(F*Math.PI/2),k=g*Math.sin(F*Math.PI/2)+v;for(let rt=0,X=Q.length;rt<X;rt++){const q=nt(Q[rt],vt[rt],k);U(q.x,q.y,u+W)}for(let rt=0,X=L.length;rt<X;rt++){const q=L[rt];Pt=bt[rt];for(let xt=0,Rt=q.length;xt<Rt;xt++){const b=nt(q[xt],Pt[xt],k);x?U(b.x,b.y+M[h-1].y,M[h-1].x+W):U(b.x,b.y,u+W)}}}it(),ct();function it(){const D=s.length/3;if(f){let F=0,W=at*F;for(let k=0;k<re;k++){const rt=Kt[k];N(rt[2]+W,rt[1]+W,rt[0]+W)}F=h+m*2,W=at*F;for(let k=0;k<re;k++){const rt=Kt[k];N(rt[0]+W,rt[1]+W,rt[2]+W)}}else{for(let F=0;F<re;F++){const W=Kt[F];N(W[2],W[1],W[0])}for(let F=0;F<re;F++){const W=Kt[F];N(W[0]+at*h,W[1]+at*h,W[2]+at*h)}}n.addGroup(D,s.length/3-D,0)}function ct(){const D=s.length/3;let F=0;St(Q,F),F+=Q.length;for(let W=0,k=L.length;W<k;W++){const rt=L[W];St(rt,F),F+=rt.length}n.addGroup(D,s.length/3-D,1)}function St(D,F){let W=D.length;for(;--W>=0;){const k=W;let rt=W-1;rt<0&&(rt=D.length-1);for(let X=0,q=h+m*2;X<q;X++){const xt=at*X,Rt=at*(X+1),b=F+k+xt,_=F+rt+xt,z=F+rt+Rt,j=F+k+Rt;Y(b,_,z,j)}}}function U(D,F,W){l.push(D),l.push(F),l.push(W)}function N(D,F,W){B(D),B(F),B(W);const k=s.length/3,rt=w.generateTopUV(n,s,k-3,k-2,k-1);y(rt[0]),y(rt[1]),y(rt[2])}function Y(D,F,W,k){B(D),B(F),B(k),B(F),B(W),B(k);const rt=s.length/3,X=w.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);y(X[0]),y(X[1]),y(X[3]),y(X[1]),y(X[2]),y(X[3])}function B(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function y(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Br[s.type]().fromJSON(s)),new Vs(n,t.options)}}const Zf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(f,1-g),new ht(v,1-p)]:[new ht(a,1-l),new ht(h,1-u),new ht(d,1-g),new ht(m,1-p)]}};function jf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zr extends Za{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zr(t.radius,t.detail)}}class bi extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*f-o;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-w,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const M=w+c*p,x=w+c*(p+1),R=w+1+c*(p+1),A=w+1+c*p;d.push(M,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.widthSegments,t.heightSegments)}}class zs extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+x,1-M),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=h[p][w+1],x=h[p][w],R=h[p+1][w],A=h[p+1][w+1];(p!==0||o>0)&&d.push(M,x,A),(p!==n-1||l<Math.PI)&&d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ja extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(v,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $a extends Ae{constructor(t=new ch(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ht;let h=new P;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),w(),p()}function m(M){h=t.getPointAt(M/e,h);const x=o.normals[M],R=o.binormals[M];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,I=Math.sin(C),E=-Math.cos(C);l.x=E*x.x+I*R.x,l.y=E*x.y+I*R.y,l.z=E*x.z+I*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const R=(s+1)*(M-1)+(x-1),A=(s+1)*M+(x-1),C=(s+1)*M+x,I=(s+1)*(M-1)+x;g.push(R,A,I),g.push(A,C,I)}}function w(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $a(new Br[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Kf extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jf extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $f extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yr extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qf extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bo=new $t,Vl=new P,Wl=new P;class mh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xl=new $t,xs=new P,wo=new P;class td extends mh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(xs),wo.copy(n.position),wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wo),n.updateMatrixWorld(),s.makeTranslation(-xs.x,-xs.y,-xs.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,n.coordinateSystem,n.reversedDepth)}}class ed extends Yr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new td}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gh extends th{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class nd extends mh{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class id extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new nd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sd extends Yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rd extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class od{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Yl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ad extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ql(i,t,e,n){const s=ld(n);switch(e){case zc:return i*t;case Hc:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Ha:return i*t*4/s.components*s.byteLength;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(t,8)/4;case $o:case ta:return Math.max(i,8)*Math.max(t,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xa:case ya:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ma:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ld(i){switch(i){case wn:case Nc:return{byteLength:1,components:1};case Ps:case Fc:case Hs:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case vi:case Fa:case zn:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);function _h(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:yd,beginnormal_vertex:Sd,bsdfs:Md,iridescence_fragment:Ed,bumpmap_pars_fragment:Td,clipping_planes_fragment:bd,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Dd,color_vertex:Ld,common:Id,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Gd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:np,envmap_vertex:Yd,fog_vertex:qd,fog_pars_vertex:Zd,fog_fragment:jd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:$d,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:vp,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Mp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:bp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Dp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:Yp,shadowmap_vertex:qp,shadowmask_pars_fragment:Zp,skinbase_vertex:jp,skinning_pars_vertex:Kp,skinning_vertex:Jp,skinnormal_vertex:$p,specularmap_fragment:Qp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:dm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:xm,equirect_frag:ym,linedashed_vert:Sm,linedashed_frag:Mm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:bm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Dm,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Gm},Et={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},xn={basic:{uniforms:ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ke([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ke([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ke([Et.points,Et.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ke([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ke([Et.common,Et.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ke([Et.sprite,Et.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ke([Et.common,Et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ke([Et.lights,Et.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};xn.physical={uniforms:ke([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const vr={r:0,b:0,g:0},ci=new an,Vm=new $t;function Wm(i,t,e,n,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const R=g(M);R===null?p(a,l):R&&R.isColor&&(p(R,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Gr)?(h===void 0&&(h=new ie(new $(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:as(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(x.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(ci)),h.material.toneMapped=ne.getTransfer(R.colorSpace)!==he,(u!==R||f!==R.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ie(new bi(2,2),new ei({name:"BackgroundMaterial",uniforms:as(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ne.getTransfer(R.colorSpace)!==he,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(vr,Qc(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,x,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m,dispose:w}}function Xm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,G,Z,st){let Q=!1;const nt=u(Z,G,L);r!==nt&&(r=nt,c(r.object)),Q=d(S,Z,G,st),Q&&g(S,Z,G,st),st!==null&&t.update(st,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(S,L,G,Z),st!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,G){const Z=G.wireframe===!0;let st=n[S.id];st===void 0&&(st={},n[S.id]=st);let Q=st[L.id];Q===void 0&&(Q={},st[L.id]=Q);let nt=Q[Z];return nt===void 0&&(nt=f(l()),Q[Z]=nt),nt}function f(S){const L=[],G=[],Z=[];for(let st=0;st<e;st++)L[st]=0,G[st]=0,Z[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:Z,object:S,attributes:{},index:null}}function d(S,L,G,Z){const st=r.attributes,Q=L.attributes;let nt=0;const at=G.getAttributes();for(const tt in at)if(at[tt].location>=0){const bt=st[tt];let Pt=Q[tt];if(Pt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(Pt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(Pt=S.instanceColor)),bt===void 0||bt.attribute!==Pt||Pt&&bt.data!==Pt.data)return!0;nt++}return r.attributesNum!==nt||r.index!==Z}function g(S,L,G,Z){const st={},Q=L.attributes;let nt=0;const at=G.getAttributes();for(const tt in at)if(at[tt].location>=0){let bt=Q[tt];bt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor));const Pt={};Pt.attribute=bt,bt&&bt.data&&(Pt.data=bt.data),st[tt]=Pt,nt++}r.attributes=st,r.attributesNum=nt,r.index=Z}function v(){const S=r.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const G=r.newAttributes,Z=r.enabledAttributes,st=r.attributeDivisors;G[S]=1,Z[S]===0&&(i.enableVertexAttribArray(S),Z[S]=1),st[S]!==L&&(i.vertexAttribDivisor(S,L),st[S]=L)}function w(){const S=r.newAttributes,L=r.enabledAttributes;for(let G=0,Z=L.length;G<Z;G++)L[G]!==S[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function M(S,L,G,Z,st,Q,nt){nt===!0?i.vertexAttribIPointer(S,L,G,st,Q):i.vertexAttribPointer(S,L,G,Z,st,Q)}function x(S,L,G,Z){v();const st=Z.attributes,Q=G.getAttributes(),nt=L.defaultAttributeValues;for(const at in Q){const tt=Q[at];if(tt.location>=0){let vt=st[at];if(vt===void 0&&(at==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),at==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),vt!==void 0){const bt=vt.normalized,Pt=vt.itemSize,Vt=t.get(vt);if(Vt===void 0)continue;const Kt=Vt.buffer,re=Vt.type,Qt=Vt.bytesPerElement,it=re===i.INT||re===i.UNSIGNED_INT||vt.gpuType===Fa;if(vt.isInterleavedBufferAttribute){const ct=vt.data,St=ct.stride,U=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let N=0;N<tt.locationSize;N++)p(tt.location+N,ct.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let N=0;N<tt.locationSize;N++)m(tt.location+N);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let N=0;N<tt.locationSize;N++)M(tt.location+N,Pt/tt.locationSize,re,bt,St*Qt,(U+Pt/tt.locationSize*N)*Qt,it)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<tt.locationSize;ct++)p(tt.location+ct,vt.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<tt.locationSize;ct++)m(tt.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ct=0;ct<tt.locationSize;ct++)M(tt.location+ct,Pt/tt.locationSize,re,bt,Pt*Qt,Pt/tt.locationSize*ct*Qt,it)}}else if(nt!==void 0){const bt=nt[at];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(tt.location,bt);break;case 3:i.vertexAttrib3fv(tt.location,bt);break;case 4:i.vertexAttrib4fv(tt.location,bt);break;default:i.vertexAttrib1fv(tt.location,bt)}}}}w()}function R(){I();for(const S in n){const L=n[S];for(const G in L){const Z=L[G];for(const st in Z)h(Z[st].object),delete Z[st];delete L[G]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const G in L){const Z=L[G];for(const st in Z)h(Z[st].object),delete Z[st];delete L[G]}delete n[S.id]}function C(S){for(const L in n){const G=n[L];if(G[S.id]===void 0)continue;const Z=G[S.id];for(const st in Z)h(Z[st].object),delete Z[st];delete G[S.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Ym(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Zm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Kn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,M=w*4;let x=p.clippingState||null;l.value=x,x=h(g,f,M,d);for(let R=0;R!==M;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function jm(i){let t=new WeakMap;function e(o,a){return a===Lr?o.mapping=ss:a===Ko&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lr||a===Ko)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ki=4,Zl=[.125,.215,.35,.446,.526,.582],mi=20,Ao=new gh,jl=new Ht;let Ro=null,Co=0,Po=0,Do=!1;const di=(1+Math.sqrt(5))/2,Wi=1/di,Kl=[new P(-di,Wi,0),new P(di,Wi,0),new P(-Wi,0,di),new P(Wi,0,di),new P(0,di,-Wi),new P(0,di,Wi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Km=new P;class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Km}=r;Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Po),this._renderer.xr.enabled=Do,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Hs,format:mn,colorSpace:os,depthBuffer:!1},s=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=$m(r,t,e)}return s}_compileMaterial(t){const e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,n,s,r){const l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(jl),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Kc({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new ie(new $,v);let p=!1;const w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,p=!0):(v.color.copy(jl),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const R=this._cubeSize;xr(s,x*R,M>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ao)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kl[(s-r-1)%Kl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ie(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*mi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let w=0;for(let C=0;C<mi;++C){const I=C/v,E=Math.exp(-I*I/2);p.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[s],R=3*x*(s>M-Ki?s-M+Ki:0),A=4*(this._cubeSize-x);xr(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ao)}}function Jm(i){const t=[],e=[],n=[];let s=i;const r=i-Ki+1+Zl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ki?l=Zl[o-i+Ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,I=A>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];w.set(E,v*g*A),M.set(f,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const R=new Ae;R.setAttribute("position",new De(w,v)),R.setAttribute("uv",new De(M,m)),R.setAttribute("faceIndex",new De(x,p)),t.push(R),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $m(i,t,e){const n=new Float32Array(mi),s=new P(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function $l(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ql(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lr||l===Ko,h=l===ss||l===rs;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Pa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Pa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function t0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function e0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let M=0,x=w.length;M<x;M+=3){const R=w[M+0],A=w[M+1],C=w[M+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,x=w.length/3-1;M<x;M+=3){const R=M+0,A=M+1,C=M+2;f.push(R,A,A,C,C,R)}}else return;const m=new(Xc(f)?$c:Jc)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function n0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*v[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function s0(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*u),I=new Yc(C,R,A,u);I.type=zn,I.needsUpdate=!0;const E=x*4;for(let L=0;L<u;L++){const G=p[L],Z=w[L],st=M[L],Q=R*A*4*L;for(let nt=0;nt<G.count;nt++){const at=nt*E;g===!0&&(s.fromBufferAttribute(G,nt),C[Q+at+0]=s.x,C[Q+at+1]=s.y,C[Q+at+2]=s.z,C[Q+at+3]=0),v===!0&&(s.fromBufferAttribute(Z,nt),C[Q+at+4]=s.x,C[Q+at+5]=s.y,C[Q+at+6]=s.z,C[Q+at+7]=0),m===!0&&(s.fromBufferAttribute(st,nt),C[Q+at+8]=s.x,C[Q+at+9]=s.y,C[Q+at+10]=s.z,C[Q+at+11]=st.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new ht(R,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function r0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const vh=new Ge,tc=new sh(1,1),xh=new Yc,yh=new qu,Sh=new eh,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),we(e,n)}}function u0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),we(e,n)}}function f0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),we(e,n)}}function d0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function _0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function S0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=Wc,r=tc):r=vh,e.setTexture2D(t||r,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function E0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function b0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return v0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}function w0(i,t){i.uniform1fv(this.addr,t)}function A0(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function R0(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function C0(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function P0(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D0(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function L0(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function F0(i,t){i.uniform4iv(this.addr,t)}function O0(i,t){i.uniform1uiv(this.addr,t)}function B0(i,t){i.uniform2uiv(this.addr,t)}function z0(i,t){i.uniform3uiv(this.addr,t)}function k0(i,t){i.uniform4uiv(this.addr,t)}function H0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vh,r[o])}function G0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yh,r[o])}function V0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sh,r[o])}function W0(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xh,r[o])}function X0(i){switch(i){case 5126:return w0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}}class q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function j0(i,t,e){const n=i.name,s=n.length;for(Lo.lastIndex=0;;){const r=Lo.exec(n),o=Lo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){oc(e,c===void 0?new Y0(a,i,t):new q0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Z0(a),oc(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);j0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const K0=37297;let J0=0;function $0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const lc=new qt;function Q0(i){ne._getMatrix(lc,ne.workingColorSpace,i);const t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+$0(i.getShaderSource(t),a)}else return r}function tg(i,t){const e=Q0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function eg(i,t){let e;switch(t){case au:e="Linear";break;case lu:e="Reinhard";break;case cu:e="Cineon";break;case Ic:e="ACESFilmic";break;case uu:e="AgX";break;case fu:e="Neutral";break;case hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yr=new P;function ng(){ne.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),t=yr.y.toFixed(4),e=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ts(i){return i!==""}function hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(og,lg)}const ag=new Map;function lg(i,t){let e=Zt[t];if(e===void 0){const n=ag.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}const cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(cg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===rs&&(t="ENVMAP_MODE_REFRACTION"),t}function pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case ou:t="ENVMAP_BLENDING_ADD";break}return t}function mg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ug(e),c=fg(e),h=dg(e),u=pg(e),f=mg(e),d=ig(e),g=sg(r),v=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Da(o),o=hc(o,e),o=uc(o,e),a=Da(a),a=hc(a,e),a=uc(a,e),o=fc(o),a=fc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,x=w+p+a,R=ac(s,s.VERTEX_SHADER,M),A=ac(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v)||"",Z=s.getShaderInfoLog(R)||"",st=s.getShaderInfoLog(A)||"",Q=G.trim(),nt=Z.trim(),at=st.trim();let tt=!0,vt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const bt=cc(s,R,"vertex"),Pt=cc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+bt+`
`+Pt)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(nt===""||at==="")&&(vt=!1);vt&&(L.diagnostics={runnable:tt,programLog:Q,vertexShader:{log:nt,prefix:m},fragmentShader:{log:at,prefix:p}})}s.deleteShader(R),s.deleteShader(A),I=new Rr(s,v),E=rg(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,K0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let _g=0;class vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xg(t),e.set(t,n)),n}}class xg{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}}function yg(i,t,e,n,s,r,o){const a=new Zc,l=new vg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,G,Z){const st=G.fog,Q=Z.geometry,nt=E.isMeshStandardMaterial?G.environment:null,at=(E.isMeshStandardMaterial?e:t).get(E.envMap||nt),tt=at&&at.mapping===Gr?at.image.height:null,vt=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=bt!==void 0?bt.length:0;let Vt=0;Q.morphAttributes.position!==void 0&&(Vt=1),Q.morphAttributes.normal!==void 0&&(Vt=2),Q.morphAttributes.color!==void 0&&(Vt=3);let Kt,re,Qt,it;if(vt){const oe=xn[vt];Kt=oe.vertexShader,re=oe.fragmentShader}else Kt=E.vertexShader,re=E.fragmentShader,l.update(E),Qt=l.getVertexShaderID(E),it=l.getFragmentShaderID(E);const ct=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),U=Z.isInstancedMesh===!0,N=Z.isBatchedMesh===!0,Y=!!E.map,B=!!E.matcap,y=!!at,D=!!E.aoMap,F=!!E.lightMap,W=!!E.bumpMap,k=!!E.normalMap,rt=!!E.displacementMap,X=!!E.emissiveMap,q=!!E.metalnessMap,xt=!!E.roughnessMap,Rt=E.anisotropy>0,b=E.clearcoat>0,_=E.dispersion>0,z=E.iridescence>0,j=E.sheen>0,ot=E.transmission>0,et=Rt&&!!E.anisotropyMap,gt=b&&!!E.clearcoatMap,ft=b&&!!E.clearcoatNormalMap,Tt=b&&!!E.clearcoatRoughnessMap,Ct=z&&!!E.iridescenceMap,ut=z&&!!E.iridescenceThicknessMap,_t=j&&!!E.sheenColorMap,Ft=j&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,wt=!!E.specularColorMap,Yt=!!E.specularIntensityMap,O=ot&&!!E.transmissionMap,mt=ot&&!!E.thicknessMap,yt=!!E.gradientMap,Lt=!!E.alphaMap,dt=E.alphaTest>0,lt=!!E.alphaHash,Ut=!!E.extensions;let Wt=Qn;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const pe={shaderID:vt,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:re,defines:E.defines,customVertexShaderID:Qt,customFragmentShaderID:it,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:N,batchingColor:N&&Z._colorsTexture!==null,instancing:U,instancingColor:U&&Z.instanceColor!==null,instancingMorph:U&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:os,alphaToCoverage:!!E.alphaToCoverage,map:Y,matcap:B,envMap:y,envMapMode:y&&at.mapping,envMapCubeUVHeight:tt,aoMap:D,lightMap:F,bumpMap:W,normalMap:k,displacementMap:f&&rt,emissiveMap:X,normalMapObjectSpace:k&&E.normalMapType===gu,normalMapTangentSpace:k&&E.normalMapType===Vc,metalnessMap:q,roughnessMap:xt,anisotropy:Rt,anisotropyMap:et,clearcoat:b,clearcoatMap:gt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Tt,dispersion:_,iridescence:z,iridescenceMap:Ct,iridescenceThicknessMap:ut,sheen:j,sheenColorMap:_t,sheenRoughnessMap:Ft,specularMap:Nt,specularColorMap:wt,specularIntensityMap:Yt,transmission:ot,transmissionMap:O,thicknessMap:mt,gradientMap:yt,opaque:E.transparent===!1&&E.blending===Qi&&E.alphaToCoverage===!1,alphaMap:Lt,alphaTest:dt,alphaHash:lt,combine:E.combine,mapUv:Y&&v(E.map.channel),aoMapUv:D&&v(E.aoMap.channel),lightMapUv:F&&v(E.lightMap.channel),bumpMapUv:W&&v(E.bumpMap.channel),normalMapUv:k&&v(E.normalMap.channel),displacementMapUv:rt&&v(E.displacementMap.channel),emissiveMapUv:X&&v(E.emissiveMap.channel),metalnessMapUv:q&&v(E.metalnessMap.channel),roughnessMapUv:xt&&v(E.roughnessMap.channel),anisotropyMapUv:et&&v(E.anisotropyMap.channel),clearcoatMapUv:gt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(E.sheenRoughnessMap.channel),specularMapUv:Nt&&v(E.specularMap.channel),specularColorMapUv:wt&&v(E.specularColorMap.channel),specularIntensityMapUv:Yt&&v(E.specularIntensityMap.channel),transmissionMapUv:O&&v(E.transmissionMap.channel),thicknessMapUv:mt&&v(E.thicknessMap.channel),alphaMapUv:Lt&&v(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(k||Rt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Q.attributes.uv&&(Y||Lt),fog:!!st,useFog:E.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:Z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Y&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||N)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(w(S,E),M(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function w(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let L;if(S){const G=xn[S];L=af.clone(G.uniforms)}else L=E.uniforms;return L}function R(E,S){let L;for(let G=0,Z=h.length;G<Z;G++){const st=h[G];if(st.cacheKey===S){L=st,++L.usedTimes;break}}return L===void 0&&(L=new gg(i,S,E,r),h.push(L)),L}function A(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function Sg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Mg),n.length>1&&n.sort(f||pc),s.length>1&&s.sort(f||pc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Eg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new mc,i.set(n,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wg=0;function Ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rg(i){const t=new Tg,e=bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new $t,o=new $t;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,w=0,M=0,x=0,R=0,A=0,C=0;c.sort(Ag);for(let E=0,S=c.length;E<S;E++){const L=c[E],G=L.color,Z=L.intensity,st=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*Z,u+=G.g*Z,f+=G.b*Z;else if(L.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(L.sh.coefficients[nt],Z);C++}else if(L.isDirectionalLight){const nt=t.get(L);if(nt.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const at=L.shadow,tt=e.get(L);tt.shadowIntensity=at.intensity,tt.shadowBias=at.bias,tt.shadowNormalBias=at.normalBias,tt.shadowRadius=at.radius,tt.shadowMapSize=at.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=L.shadow.matrix,w++}n.directional[d]=nt,d++}else if(L.isSpotLight){const nt=t.get(L);nt.position.setFromMatrixPosition(L.matrixWorld),nt.color.copy(G).multiplyScalar(Z),nt.distance=st,nt.coneCos=Math.cos(L.angle),nt.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),nt.decay=L.decay,n.spot[v]=nt;const at=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,at.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=at.matrix,L.castShadow){const tt=e.get(L);tt.shadowIntensity=at.intensity,tt.shadowBias=at.bias,tt.shadowNormalBias=at.normalBias,tt.shadowRadius=at.radius,tt.shadowMapSize=at.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=Q,x++}v++}else if(L.isRectAreaLight){const nt=t.get(L);nt.color.copy(G).multiplyScalar(Z),nt.halfWidth.set(L.width*.5,0,0),nt.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=nt,m++}else if(L.isPointLight){const nt=t.get(L);if(nt.color.copy(L.color).multiplyScalar(L.intensity),nt.distance=L.distance,nt.decay=L.decay,L.castShadow){const at=L.shadow,tt=e.get(L);tt.shadowIntensity=at.intensity,tt.shadowBias=at.bias,tt.shadowNormalBias=at.normalBias,tt.shadowRadius=at.radius,tt.shadowMapSize=at.mapSize,tt.shadowCameraNear=at.camera.near,tt.shadowCameraFar=at.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=nt,g++}else if(L.isHemisphereLight){const nt=t.get(L);nt.skyColor.copy(L.color).multiplyScalar(Z),nt.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[p]=nt,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=C,n.version=wg++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function gc(i){const t=new Rg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gc(i),t.set(s,[a])):r>=o.length?(a=new gc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`;function Lg(i,t,e){let n=new qa;const s=new ht,r=new ht,o=new fe,a=new Jf({depthPacking:mu}),l=new $f,c={},h=e.maxTextureSize,u={[ti]:qe,[qe]:ti,[yn]:yn},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Pg,fragmentShader:Dg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let p=this.type;this.render=function(A,C,I){if(window.__galleryCaptureScene)return;if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending($n),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=p!==Nn&&this.type===Nn,st=p===Nn&&this.type!==Nn;for(let Q=0,nt=A.length;Q<nt;Q++){const at=A[Q],tt=at.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);const vt=tt.getFrameExtents();if(s.multiply(vt),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,tt.mapSize.y=r.y)),tt.map===null||Z===!0||st===!0){const Pt=this.type!==Nn?{minFilter:gn,magFilter:gn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new xi(s.x,s.y,Pt),tt.map.texture.name=at.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();const bt=tt.getViewportCount();for(let Pt=0;Pt<bt;Pt++){const Vt=tt.getViewport(Pt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),G.viewport(o),tt.updateMatrices(at,Pt),n=tt.getFrustum(),x(C,I,tt.camera,at,this.type)}tt.isPointLightShadow!==!0&&this.type===Nn&&w(tt,I),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,L)};function w(A,C){const I=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,I,d,v,null)}function M(A,C,I,E){let S=null;const L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=S.uuid,Z=C.uuid;let st=c[G];st===void 0&&(st={},c[G]=st);let Q=st[Z];Q===void 0&&(Q=S.clone(),st[Z]=Q,C.addEventListener("dispose",R)),S=Q}if(S.visible=C.visible,S.wireframe=C.wireframe,E===Nn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=I}return S}function x(A,C,I,E,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const Z=t.update(A),st=A.material;if(Array.isArray(st)){const Q=Z.groups;for(let nt=0,at=Q.length;nt<at;nt++){const tt=Q[nt],vt=st[tt.materialIndex];if(vt&&vt.visible){const bt=M(A,vt,E,S);A.onBeforeShadow(i,A,C,I,Z,bt,tt),i.renderBufferDirect(I,null,Z,bt,A,tt),A.onAfterShadow(i,A,C,I,Z,bt,tt)}}}else if(st.visible){const Q=M(A,st,E,S);A.onBeforeShadow(i,A,C,I,Z,Q,null),i.renderBufferDirect(I,null,Z,Q,A,null),A.onAfterShadow(i,A,C,I,Z,Q,null)}}const G=A.children;for(let Z=0,st=G.length;Z<st;Z++)x(G[Z],C,I,E,S)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const E=c[I],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Ig={[Vo]:Wo,[Xo]:Zo,[Yo]:jo,[is]:qo,[Wo]:Vo,[Zo]:Xo,[jo]:Yo,[qo]:is};function Ug(i,t){function e(){let O=!1;const mt=new fe;let yt=null;const Lt=new fe(0,0,0,0);return{setMask:function(dt){yt!==dt&&!O&&(i.colorMask(dt,dt,dt,dt),yt=dt)},setLocked:function(dt){O=dt},setClear:function(dt,lt,Ut,Wt,pe){pe===!0&&(dt*=Wt,lt*=Wt,Ut*=Wt),mt.set(dt,lt,Ut,Wt),Lt.equals(mt)===!1&&(i.clearColor(dt,lt,Ut,Wt),Lt.copy(mt))},reset:function(){O=!1,yt=null,Lt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,yt=null,Lt=null,dt=null;return{setReversed:function(lt){if(mt!==lt){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),mt=lt;const Wt=dt;dt=null,this.setClear(Wt)}},getReversed:function(){return mt},setTest:function(lt){lt?ct(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(lt){yt!==lt&&!O&&(i.depthMask(lt),yt=lt)},setFunc:function(lt){if(mt&&(lt=Ig[lt]),Lt!==lt){switch(lt){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=lt}},setLocked:function(lt){O=lt},setClear:function(lt){dt!==lt&&(mt&&(lt=1-lt),i.clearDepth(lt),dt=lt)},reset:function(){O=!1,yt=null,Lt=null,dt=null,mt=!1}}}function s(){let O=!1,mt=null,yt=null,Lt=null,dt=null,lt=null,Ut=null,Wt=null,pe=null;return{setTest:function(oe){O||(oe?ct(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!O&&(i.stencilMask(oe),mt=oe)},setFunc:function(oe,Cn,_n){(yt!==oe||Lt!==Cn||dt!==_n)&&(i.stencilFunc(oe,Cn,_n),yt=oe,Lt=Cn,dt=_n)},setOp:function(oe,Cn,_n){(lt!==oe||Ut!==Cn||Wt!==_n)&&(i.stencilOp(oe,Cn,_n),lt=oe,Ut=Cn,Wt=_n)},setLocked:function(oe){O=oe},setClear:function(oe){pe!==oe&&(i.clearStencil(oe),pe=oe)},reset:function(){O=!1,mt=null,yt=null,Lt=null,dt=null,lt=null,Ut=null,Wt=null,pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,R=null,A=null,C=new Ht(0,0,0),I=0,E=!1,S=null,L=null,G=null,Z=null,st=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,at=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(tt)[1]),nt=at>=1):tt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),nt=at>=2);let vt=null,bt={};const Pt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Kt=new fe().fromArray(Pt),re=new fe().fromArray(Vt);function Qt(O,mt,yt,Lt){const dt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(O,lt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<yt;Ut++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(mt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return lt}const it={};it[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(is),W(!1),k(pl),ct(i.CULL_FACE),D($n);function ct(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function St(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function U(O,mt){return u[O]!==mt?(i.bindFramebuffer(O,mt),u[O]=mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function N(O,mt){let yt=d,Lt=!1;if(O){yt=f.get(mt),yt===void 0&&(yt=[],f.set(mt,yt));const dt=O.textures;if(yt.length!==dt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ut=dt.length;lt<Ut;lt++)yt[lt]=i.COLOR_ATTACHMENT0+lt;yt.length=dt.length,Lt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(yt)}function Y(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const B={[pi]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};B[Wh]=i.MIN,B[Xh]=i.MAX;const y={[Yh]:i.ZERO,[qh]:i.ONE,[Zh]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[Qh]:i.ONE_MINUS_DST_COLOR,[Jh]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[su]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,mt,yt,Lt,dt,lt,Ut,Wt,pe,oe){if(O===$n){v===!0&&(St(i.BLEND),v=!1);return}if(v===!1&&(ct(i.BLEND),v=!0),O!==Hh){if(O!==m||oe!==E){if((p!==pi||x!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,x=pi),oe)switch(O){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,M=null,R=null,A=null,C.set(0,0,0),I=0,m=O,E=oe}return}dt=dt||mt,lt=lt||yt,Ut=Ut||Lt,(mt!==p||dt!==x)&&(i.blendEquationSeparate(B[mt],B[dt]),p=mt,x=dt),(yt!==w||Lt!==M||lt!==R||Ut!==A)&&(i.blendFuncSeparate(y[yt],y[Lt],y[lt],y[Ut]),w=yt,M=Lt,R=lt,A=Ut),(Wt.equals(C)===!1||pe!==I)&&(i.blendColor(Wt.r,Wt.g,Wt.b,pe),C.copy(Wt),I=pe),m=O,E=!1}function F(O,mt){O.side===yn?St(i.CULL_FACE):ct(i.CULL_FACE);let yt=O.side===qe;mt&&(yt=!yt),W(yt),O.blending===Qi&&O.transparent===!1?D($n):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Lt=O.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),X(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function k(O){O!==zh?(ct(i.CULL_FACE),O!==L&&(O===pl?i.cullFace(i.BACK):O===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),L=O}function rt(O){O!==G&&(nt&&i.lineWidth(O),G=O)}function X(O,mt,yt){O?(ct(i.POLYGON_OFFSET_FILL),(Z!==mt||st!==yt)&&(i.polygonOffset(mt,yt),Z=mt,st=yt)):St(i.POLYGON_OFFSET_FILL)}function q(O){O?ct(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function xt(O){O===void 0&&(O=i.TEXTURE0+Q-1),vt!==O&&(i.activeTexture(O),vt=O)}function Rt(O,mt,yt){yt===void 0&&(vt===null?yt=i.TEXTURE0+Q-1:yt=vt);let Lt=bt[yt];Lt===void 0&&(Lt={type:void 0,texture:void 0},bt[yt]=Lt),(Lt.type!==O||Lt.texture!==mt)&&(vt!==yt&&(i.activeTexture(yt),vt=yt),i.bindTexture(O,mt||it[O]),Lt.type=O,Lt.texture=mt)}function b(){const O=bt[vt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(O){Kt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Kt.copy(O))}function Ft(O){re.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Nt(O,mt){let yt=c.get(mt);yt===void 0&&(yt=new WeakMap,c.set(mt,yt));let Lt=yt.get(O);Lt===void 0&&(Lt=i.getUniformBlockIndex(mt,O.name),yt.set(O,Lt))}function wt(O,mt){const Lt=c.get(mt).get(O);l.get(mt)!==Lt&&(i.uniformBlockBinding(mt,Lt,O.__bindingPointIndex),l.set(mt,Lt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},vt=null,bt={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,w=null,M=null,x=null,R=null,A=null,C=new Ht(0,0,0),I=0,E=!1,S=null,L=null,G=null,Z=null,st=null,Kt.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:St,bindFramebuffer:U,drawBuffers:N,useProgram:Y,setBlending:D,setMaterial:F,setFlipSided:W,setCullFace:k,setLineWidth:rt,setPolygonOffset:X,setScissorTest:q,activeTexture:xt,bindTexture:Rt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Ct,texImage3D:ut,updateUBOMapping:Nt,uniformBlockBinding:wt,texStorage2D:ft,texStorage3D:Tt,texSubImage2D:j,texSubImage3D:ot,compressedTexSubImage2D:et,compressedTexSubImage3D:gt,scissor:_t,viewport:Ft,reset:Yt}}function Ng(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return d?new OffscreenCanvas(b,_):Fr("canvas")}function v(b,_,z){let j=1;const ot=Rt(b);if((ot.width>z||ot.height>z)&&(j=z/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const et=Math.floor(j*ot.width),gt=Math.floor(j*ot.height);u===void 0&&(u=g(et,gt));const ft=_?g(et,gt):u;return ft.width=et,ft.height=gt,ft.getContext("2d").drawImage(b,0,0,et,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+gt+")."),ft}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,_,z,j,ot=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let et=_;if(_===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),_===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGB8UI),z===i.UNSIGNED_SHORT&&(et=i.RGB16UI),z===i.UNSIGNED_INT&&(et=i.RGB32UI),z===i.BYTE&&(et=i.RGB8I),z===i.SHORT&&(et=i.RGB16I),z===i.INT&&(et=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),z===i.UNSIGNED_INT&&(et=i.RGBA32UI),z===i.BYTE&&(et=i.RGBA8I),z===i.SHORT&&(et=i.RGBA16I),z===i.INT&&(et=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),_===i.RGBA){const gt=ot?Ur:ne.getTransfer(j);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=gt===he?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(b,_){let z;return b?_===null||_===vi||_===Ds?z=i.DEPTH24_STENCIL8:_===zn?z=i.DEPTH32F_STENCIL8:_===Ps&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===Ds?z=i.DEPTH_COMPONENT24:_===zn?z=i.DEPTH_COMPONENT32F:_===Ps&&(z=i.DEPTH_COMPONENT16),z}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){const _=b.target;_.removeEventListener("dispose",A),I(_),_.isVideoTexture&&h.delete(_)}function C(b){const _=b.target;_.removeEventListener("dispose",C),S(_)}function I(b){const _=n.get(b);if(_.__webglInit===void 0)return;const z=b.source,j=f.get(z);if(j){const ot=j[_.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(b),Object.keys(j).length===0&&f.delete(z)}n.remove(b)}function E(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const z=b.source,j=f.get(z);delete j[_.__cacheKey],o.memory.textures--}function S(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let ot=0;ot<_.__webglFramebuffer[j].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[j][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=b.textures;for(let j=0,ot=z.length;j<ot;j++){const et=n.get(z[j]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(b)}let L=0;function G(){L=0}function Z(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function st(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Q(b,_){const z=n.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&z.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(z,b,_);return}}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function nt(b,_){const z=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){it(z,b,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function at(b,_){const z=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){it(z,b,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function tt(b,_){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ct(z,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const vt={[Ir]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},bt={[gn]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},Pt={[_u]:i.NEVER,[Eu]:i.ALWAYS,[vu]:i.LESS,[Wc]:i.LEQUAL,[xu]:i.EQUAL,[Mu]:i.GEQUAL,[yu]:i.GREATER,[Su]:i.NOTEQUAL};function Vt(b,_){if(_.type===zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===Jr||_.magFilter===Zs||_.magFilter===gi||_.minFilter===En||_.minFilter===Jr||_.minFilter===Zs||_.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,vt[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,vt[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,vt[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,bt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,bt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Zs&&_.minFilter!==gi||_.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(b,_){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));const j=_.source;let ot=f.get(j);ot===void 0&&(ot={},f.set(j,ot));const et=st(_);if(et!==b.__cacheKey){ot[et]===void 0&&(ot[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ot[et].usedTimes++;const gt=ot[b.__cacheKey];gt!==void 0&&(ot[b.__cacheKey].usedTimes--,gt.usedTimes===0&&E(_)),b.__cacheKey=et,b.__webglTexture=ot[et].texture}return z}function re(b,_,z){return Math.floor(Math.floor(b/z)/_)}function Qt(b,_,z,j){const et=b.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,j,_.data);else{et.sort((ut,_t)=>ut.start-_t.start);let gt=0;for(let ut=1;ut<et.length;ut++){const _t=et[gt],Ft=et[ut],Nt=_t.start+_t.count,wt=re(Ft.start,_.width,4),Yt=re(_t.start,_.width,4);Ft.start<=Nt+1&&wt===Yt&&re(Ft.start+Ft.count-1,_.width,4)===wt?_t.count=Math.max(_t.count,Ft.start+Ft.count-_t.start):(++gt,et[gt]=Ft)}et.length=gt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ut=0,_t=et.length;ut<_t;ut++){const Ft=et[ut],Nt=Math.floor(Ft.start/4),wt=Math.ceil(Ft.count/4),Yt=Nt%_.width,O=Math.floor(Nt/_.width),mt=wt,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Yt,O,mt,yt,z,j,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function it(b,_,z){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const ot=Kt(b,_),et=_.source;e.bindTexture(j,b.__webglTexture,i.TEXTURE0+z);const gt=n.get(et);if(et.version!==gt.__version||ot===!0){e.activeTexture(i.TEXTURE0+z);const ft=ne.getPrimaries(ne.workingColorSpace),Tt=_.colorSpace===Bn?null:ne.getPrimaries(_.colorSpace),Ct=_.colorSpace===Bn||ft===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ut=v(_.image,!1,s.maxTextureSize);ut=xt(_,ut);const _t=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type);let Nt=M(_.internalFormat,_t,Ft,_.colorSpace,_.isVideoTexture);Vt(j,_);let wt;const Yt=_.mipmaps,O=_.isVideoTexture!==!0,mt=gt.__version===void 0||ot===!0,yt=et.dataReady,Lt=R(_,ut);if(_.isDepthTexture)Nt=x(_.format===Is,_.type),mt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Nt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ut.width,ut.height,0,_t,Ft,null));else if(_.isDataTexture)if(Yt.length>0){O&&mt&&e.texStorage2D(i.TEXTURE_2D,Lt,Nt,Yt[0].width,Yt[0].height);for(let dt=0,lt=Yt.length;dt<lt;dt++)wt=Yt[dt],O?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,_t,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,dt,Nt,wt.width,wt.height,0,_t,Ft,wt.data);_.generateMipmaps=!1}else O?(mt&&e.texStorage2D(i.TEXTURE_2D,Lt,Nt,ut.width,ut.height),yt&&Qt(_,ut,_t,Ft)):e.texImage2D(i.TEXTURE_2D,0,Nt,ut.width,ut.height,0,_t,Ft,ut.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Nt,Yt[0].width,Yt[0].height,ut.depth);for(let dt=0,lt=Yt.length;dt<lt;dt++)if(wt=Yt[dt],_.format!==mn)if(_t!==null)if(O){if(yt)if(_.layerUpdates.size>0){const Ut=ql(wt.width,wt.height,_.format,_.type);for(const Wt of _.layerUpdates){const pe=wt.data.subarray(Wt*Ut/wt.data.BYTES_PER_ELEMENT,(Wt+1)*Ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Wt,wt.width,wt.height,1,_t,pe)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,ut.depth,_t,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Nt,wt.width,wt.height,ut.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,ut.depth,_t,Ft,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Nt,wt.width,wt.height,ut.depth,0,_t,Ft,wt.data)}else{O&&mt&&e.texStorage2D(i.TEXTURE_2D,Lt,Nt,Yt[0].width,Yt[0].height);for(let dt=0,lt=Yt.length;dt<lt;dt++)wt=Yt[dt],_.format!==mn?_t!==null?O?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,_t,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Nt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,_t,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,dt,Nt,wt.width,wt.height,0,_t,Ft,wt.data)}else if(_.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Nt,ut.width,ut.height,ut.depth),yt)if(_.layerUpdates.size>0){const dt=ql(ut.width,ut.height,_.format,_.type);for(const lt of _.layerUpdates){const Ut=ut.data.subarray(lt*dt/ut.data.BYTES_PER_ELEMENT,(lt+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ut.width,ut.height,1,_t,Ft,Ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,_t,Ft,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ut.width,ut.height,ut.depth,0,_t,Ft,ut.data);else if(_.isData3DTexture)O?(mt&&e.texStorage3D(i.TEXTURE_3D,Lt,Nt,ut.width,ut.height,ut.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,_t,Ft,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ut.width,ut.height,ut.depth,0,_t,Ft,ut.data);else if(_.isFramebufferTexture){if(mt)if(O)e.texStorage2D(i.TEXTURE_2D,Lt,Nt,ut.width,ut.height);else{let dt=ut.width,lt=ut.height;for(let Ut=0;Ut<Lt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Nt,dt,lt,0,_t,Ft,null),dt>>=1,lt>>=1}}else if(Yt.length>0){if(O&&mt){const dt=Rt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Nt,dt.width,dt.height)}for(let dt=0,lt=Yt.length;dt<lt;dt++)wt=Yt[dt],O?yt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,_t,Ft,wt):e.texImage2D(i.TEXTURE_2D,dt,Nt,_t,Ft,wt);_.generateMipmaps=!1}else if(O){if(mt){const dt=Rt(ut);e.texStorage2D(i.TEXTURE_2D,Lt,Nt,dt.width,dt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ft,ut)}else e.texImage2D(i.TEXTURE_2D,0,Nt,_t,Ft,ut);m(_)&&p(j),gt.__version=et.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ct(b,_,z){if(_.image.length!==6)return;const j=Kt(b,_),ot=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const et=n.get(ot);if(ot.version!==et.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const gt=ne.getPrimaries(ne.workingColorSpace),ft=_.colorSpace===Bn?null:ne.getPrimaries(_.colorSpace),Tt=_.colorSpace===Bn||gt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ct=_.isCompressedTexture||_.image[0].isCompressedTexture,ut=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let lt=0;lt<6;lt++)!Ct&&!ut?_t[lt]=v(_.image[lt],!0,s.maxCubemapSize):_t[lt]=ut?_.image[lt].image:_.image[lt],_t[lt]=xt(_,_t[lt]);const Ft=_t[0],Nt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),Yt=M(_.internalFormat,Nt,wt,_.colorSpace),O=_.isVideoTexture!==!0,mt=et.__version===void 0||j===!0,yt=ot.dataReady;let Lt=R(_,Ft);Vt(i.TEXTURE_CUBE_MAP,_);let dt;if(Ct){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Yt,Ft.width,Ft.height);for(let lt=0;lt<6;lt++){dt=_t[lt].mipmaps;for(let Ut=0;Ut<dt.length;Ut++){const Wt=dt[Ut];_.format!==mn?Nt!==null?O?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Wt.width,Wt.height,Nt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Yt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,Wt.width,Wt.height,Nt,wt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Yt,Wt.width,Wt.height,0,Nt,wt,Wt.data)}}}else{if(dt=_.mipmaps,O&&mt){dt.length>0&&Lt++;const lt=Rt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ut){O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,_t[lt].width,_t[lt].height,Nt,wt,_t[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,_t[lt].width,_t[lt].height,0,Nt,wt,_t[lt].data);for(let Ut=0;Ut<dt.length;Ut++){const pe=dt[Ut].image[lt].image;O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,pe.width,pe.height,Nt,wt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Yt,pe.width,pe.height,0,Nt,wt,pe.data)}}else{O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,wt,_t[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Nt,wt,_t[lt]);for(let Ut=0;Ut<dt.length;Ut++){const Wt=dt[Ut];O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,Nt,wt,Wt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Yt,Nt,wt,Wt.image[lt])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),et.__version=ot.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function St(b,_,z,j,ot,et){const gt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),Tt=M(z.internalFormat,gt,ft,z.colorSpace),Ct=n.get(_),ut=n.get(z);if(ut.__renderTarget=_,!Ct.__hasExternalTextures){const _t=Math.max(1,_.width>>et),Ft=Math.max(1,_.height>>et);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,Tt,_t,Ft,_.depth,0,gt,ft,null):e.texImage2D(ot,et,Tt,_t,Ft,0,gt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),X(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ot,ut.__webglTexture,0,rt(_)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ot,ut.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(b,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const j=_.depthTexture,ot=j&&j.isDepthTexture?j.type:null,et=x(_.stencilBuffer,ot),gt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=rt(_);X(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,et,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,et,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,b)}else{const j=_.textures;for(let ot=0;ot<j.length;ot++){const et=j[ot],gt=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),Tt=M(et.internalFormat,gt,ft,et.colorSpace),Ct=rt(_);z&&X(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Tt,_.width,_.height):X(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const ot=j.__webglTexture,et=rt(_);if(_.depthTexture.format===Ls)X(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(_.depthTexture.format===Is)X(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Y(b){const _=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const ot=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),_.__depthDisposeCallback=ot}_.__boundDepthTexture=j}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=b.texture.mipmaps;j&&j.length>0?N(_.__webglFramebuffer[0],b):N(_.__webglFramebuffer,b)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),U(_.__webglDepthbuffer[j],b,!1);else{const ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,et)}}else{const j=b.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),U(_.__webglDepthbuffer,b,!1);else{const ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(b,_,z){const j=n.get(b);_!==void 0&&St(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Y(b)}function y(b){const _=b.texture,z=n.get(b),j=n.get(_);b.addEventListener("dispose",C);const ot=b.textures,et=b.isWebGLCubeRenderTarget===!0,gt=ot.length>1;if(gt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),et){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)z.__webglFramebuffer[ft][Tt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let ft=0,Tt=ot.length;ft<Tt;ft++){const Ct=n.get(ot[ft]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&X(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const Tt=ot[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const Ct=r.convert(Tt.format,Tt.colorSpace),ut=r.convert(Tt.type),_t=M(Tt.internalFormat,Ct,ut,Tt.colorSpace,b.isXRRenderTarget===!0),Ft=rt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,_t,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),U(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,_);for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)St(z.__webglFramebuffer[ft][Tt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Tt);else St(z.__webglFramebuffer[ft],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ft=0,Tt=ot.length;ft<Tt;ft++){const Ct=ot[ft],ut=n.get(Ct);let _t=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_t=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,ut.__webglTexture),Vt(_t,Ct),St(z.__webglFramebuffer,b,Ct,i.COLOR_ATTACHMENT0+ft,_t,0),m(Ct)&&p(_t)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ft=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),Vt(ft,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)St(z.__webglFramebuffer[Tt],b,_,i.COLOR_ATTACHMENT0,ft,Tt);else St(z.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ft,0);m(_)&&p(ft),e.unbindTexture()}b.depthBuffer&&Y(b)}function D(b){const _=b.textures;for(let z=0,j=_.length;z<j;z++){const ot=_[z];if(m(ot)){const et=w(b),gt=n.get(ot).__webglTexture;e.bindTexture(et,gt),p(et),e.unbindTexture()}}}const F=[],W=[];function k(b){if(b.samples>0){if(X(b)===!1){const _=b.textures,z=b.width,j=b.height;let ot=i.COLOR_BUFFER_BIT;const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(b),ft=_.length>1;if(ft)for(let Ct=0;Ct<_.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Tt=b.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ct=0;Ct<_.length;Ct++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ct]);const ut=n.get(_[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,ot,i.NEAREST),l===!0&&(F.length=0,W.length=0,F.push(i.COLOR_ATTACHMENT0+Ct),b.depthBuffer&&b.resolveDepthBuffer===!1&&(F.push(et),W.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Ct=0;Ct<_.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ct]);const ut=n.get(_[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function rt(b){return Math.min(s.maxSamples,b.samples)}function X(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(b){const _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function xt(b,_){const z=b.colorSpace,j=b.format,ot=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==os&&z!==Bn&&(ne.getTransfer(z)===he?(j!==mn||ot!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Rt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=nt,this.setTexture3D=at,this.setTextureCube=tt,this.rebindTextures=B,this.setupRenderTarget=y,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=St,this.useMultisampledRTT=X}function Fg(i,t){function e(n,s=Bn){let r;const o=ne.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Hs)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===kc)return i.RGB;if(n===mn)return i.RGBA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===za)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===Tr||n===br||n===wr||n===Ar)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===ya||n===Sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ma||n===Ea||n===Ta||n===ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`;class zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:Og,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kg extends Ti{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new zg,p={},w=e.getContextAttributes();let M=null,x=null;const R=[],A=[],C=new ht;let I=null;const E=new tn;E.viewport=new fe;const S=new tn;S.viewport=new fe;const L=[E,S],G=new rd;let Z=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=R[it];return ct===void 0&&(ct=new xo,R[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=R[it];return ct===void 0&&(ct=new xo,R[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=R[it];return ct===void 0&&(ct=new xo,R[it]=ct),ct.getHandSpace()};function Q(it){const ct=A.indexOf(it.inputSource);if(ct===-1)return;const St=R[ct];St!==void 0&&(St.update(it.inputSource,it.frame,c||o),St.dispatchEvent({type:it.type,data:it.inputSource}))}function nt(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",at);for(let it=0;it<R.length;it++){const ct=A[it];ct!==null&&(A[it]=null,R[it].disconnect(ct))}Z=null,st=null,m.reset();for(const it in p)delete p[it];t.setRenderTarget(M),d=null,f=null,u=null,s=null,x=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",at),w.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,U=null,N=null;w.depth&&(N=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=w.stencil?Is:Ls,U=w.stencil?Ds:vi);const Y={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new xi(f.textureWidth,f.textureHeight,{format:mn,type:wn,depthTexture:new sh(f.textureWidth,f.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new xi(d.framebufferWidth,d.framebufferHeight,{format:mn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(it){for(let ct=0;ct<it.removed.length;ct++){const St=it.removed[ct],U=A.indexOf(St);U>=0&&(A[U]=null,R[U].disconnect(St))}for(let ct=0;ct<it.added.length;ct++){const St=it.added[ct];let U=A.indexOf(St);if(U===-1){for(let Y=0;Y<R.length;Y++)if(Y>=A.length){A.push(St),U=Y;break}else if(A[Y]===null){A[Y]=St,U=Y;break}if(U===-1)break}const N=R[U];N&&N.connect(St)}}const tt=new P,vt=new P;function bt(it,ct,St){tt.setFromMatrixPosition(ct.matrixWorld),vt.setFromMatrixPosition(St.matrixWorld);const U=tt.distanceTo(vt),N=ct.projectionMatrix.elements,Y=St.projectionMatrix.elements,B=N[14]/(N[10]-1),y=N[14]/(N[10]+1),D=(N[9]+1)/N[5],F=(N[9]-1)/N[5],W=(N[8]-1)/N[0],k=(Y[8]+1)/Y[0],rt=B*W,X=B*k,q=U/(-W+k),xt=q*-W;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(xt),it.translateZ(q),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),N[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Rt=B+q,b=y+q,_=rt-xt,z=X+(U-xt),j=D*y/b*Rt,ot=F*y/b*Rt;it.projectionMatrix.makePerspective(_,z,j,ot,Rt,b),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Pt(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ct=it.near,St=it.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(St=m.depthFar)),G.near=S.near=E.near=ct,G.far=S.far=E.far=St,(Z!==G.near||st!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),Z=G.near,st=G.far),G.layers.mask=it.layers.mask|6,E.layers.mask=G.layers.mask&3,S.layers.mask=G.layers.mask&5;const U=it.parent,N=G.cameras;Pt(G,U);for(let Y=0;Y<N.length;Y++)Pt(N[Y],U);N.length===2?bt(G,E,S):G.projectionMatrix.copy(E.projectionMatrix),Vt(it,G,U)};function Vt(it,ct,St){St===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(St.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Us*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(it){return p[it]};let Kt=null;function re(it,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let U=!1;St.length!==G.cameras.length&&(G.cameras.length=0,U=!0);for(let y=0;y<St.length;y++){const D=St[y];let F=null;if(d!==null)F=d.getViewport(D);else{const k=u.getViewSubImage(f,D);F=k.viewport,y===0&&(t.setRenderTargetTextures(x,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(x))}let W=L[y];W===void 0&&(W=new tn,W.layers.enable(y),W.viewport=new fe,L[y]=W),W.matrix.fromArray(D.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(D.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(F.x,F.y,F.width,F.height),y===0&&(G.matrix.copy(W.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),U===!0&&G.cameras.push(W)}const N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const y=u.getDepthInformation(St[0]);y&&y.isValid&&y.texture&&m.init(y,s.renderState)}if(N&&N.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let y=0;y<St.length;y++){const D=St[y].camera;if(D){let F=p[D];F||(F=new rh,p[D]=F);const W=u.getCameraImage(D);F.sourceTexture=W}}}}for(let St=0;St<R.length;St++){const U=A[St],N=R[St];U!==null&&N!==void 0&&N.update(U,ct,c||o)}Kt&&Kt(it,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Qt=new _h;Qt.setAnimationLoop(re),this.setAnimationLoop=function(it){Kt=it},this.dispose=function(){}}}const hi=new an,Hg=new $t;function Gg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),M=w.envMap,x=w.envMapRotation;M&&(m.envMap.value=M,hi.copy(x),hi.x*=-1,hi.y*=-1,hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(hi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const x=M.program;n.uniformBlockBinding(w,x)}function c(w,M){let x=s[w.id];x===void 0&&(g(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(w,R);const A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function h(w){const M=u();w.__bindingPointIndex=M;const x=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=s[w.id],x=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,C=x.length;A<C;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=I.length;E<S;E++){const L=I[E];if(d(L,A,E,R)===!0){const G=L.__offset,Z=Array.isArray(L.value)?L.value:[L.value];let st=0;for(let Q=0;Q<Z.length;Q++){const nt=Z[Q],at=v(nt);typeof nt=="number"||typeof nt=="boolean"?(L.__data[0]=nt,i.bufferSubData(i.UNIFORM_BUFFER,G+st,L.__data)):nt.isMatrix3?(L.__data[0]=nt.elements[0],L.__data[1]=nt.elements[1],L.__data[2]=nt.elements[2],L.__data[3]=0,L.__data[4]=nt.elements[3],L.__data[5]=nt.elements[4],L.__data[6]=nt.elements[5],L.__data[7]=0,L.__data[8]=nt.elements[6],L.__data[9]=nt.elements[7],L.__data[10]=nt.elements[8],L.__data[11]=0):(nt.toArray(L.__data,st),st+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,M,x,R){const A=w.value,C=M+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const I=R[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(w){const M=w.uniforms;let x=0;const R=16;for(let C=0,I=M.length;C<I;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,L=E.length;S<L;S++){const G=E[S],Z=Array.isArray(G.value)?G.value:[G.value];for(let st=0,Q=Z.length;st<Q;st++){const nt=Z[st],at=v(nt),tt=x%R,vt=tt%at.boundary,bt=tt+vt;x+=vt,bt!==0&&R-bt<at.storage&&(x+=R-bt),G.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=at.storage}}}const A=x%R;return A>0&&(x+=R-A),w.__size=x,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Wg{constructor(t={}){const{canvas:e=ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Qe;let A=0,C=0,I=null,E=-1,S=null;const L=new fe,G=new fe;let Z=null;const st=new Ht(0);let Q=0,nt=e.width,at=e.height,tt=1,vt=null,bt=null;const Pt=new fe(0,0,nt,at),Vt=new fe(0,0,nt,at);let Kt=!1;const re=new qa;let Qt=!1,it=!1;const ct=new $t,St=new P,U=new fe,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function B(){return I===null?tt:1}let y=n;function D(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Na}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),y===null){const H="webgl2";if(y=D(H,T),y===null)throw D(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let F,W,k,rt,X,q,xt,Rt,b,_,z,j,ot,et,gt,ft,Tt,Ct,ut,_t,Ft,Nt,wt,Yt;function O(){F=new t0(y),F.init(),Nt=new Fg(y,F),W=new qm(y,F,t,Nt),k=new Ug(y,F),W.reversedDepthBuffer&&f&&k.buffers.depth.setReversed(!0),rt=new i0(y),X=new Sg,q=new Ng(y,F,k,X,W,Nt,rt),xt=new jm(x),Rt=new Qm(x),b=new cd(y),wt=new Xm(y,b),_=new e0(y,b,rt,wt),z=new r0(y,_,b,rt),ut=new s0(y,W,q),ft=new Zm(X),j=new yg(x,xt,Rt,F,W,wt,ft),ot=new Gg(x,X),et=new Eg,gt=new Cg(F),Ct=new Wm(x,xt,Rt,k,z,d,l),Tt=new Lg(x,z,W),Yt=new Vg(y,rt,W,k),_t=new Ym(y,F,rt),Ft=new n0(y,F,rt),rt.programs=j.programs,x.capabilities=W,x.extensions=F,x.properties=X,x.renderLists=et,x.shadowMap=Tt,x.state=k,x.info=rt}O();const mt=new kg(x,y);this.xr=mt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=F.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=F.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(nt,at,!1))},this.getSize=function(T){return T.set(nt,at)},this.setSize=function(T,H,K=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=T,at=H,e.width=Math.floor(T*tt),e.height=Math.floor(H*tt),K===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(nt*tt,at*tt).floor()},this.setDrawingBufferSize=function(T,H,K){nt=T,at=H,tt=K,e.width=Math.floor(T*K),e.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,H,K,J){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,H,K,J),k.viewport(L.copy(Pt).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(Vt)},this.setScissor=function(T,H,K,J){T.isVector4?Vt.set(T.x,T.y,T.z,T.w):Vt.set(T,H,K,J),k.scissor(G.copy(Vt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){k.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){vt=T},this.setTransparentSort=function(T){bt=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,K=!0){let J=0;if(T){let V=!1;if(I!==null){const pt=I.texture.format;V=pt===Ha||pt===ka||pt===za}if(V){const pt=I.texture.type,At=pt===wn||pt===vi||pt===Ps||pt===Ds||pt===Oa||pt===Ba,It=Ct.getClearColor(),Dt=Ct.getClearAlpha(),zt=It.r,kt=It.g,Ot=It.b;At?(g[0]=zt,g[1]=kt,g[2]=Ot,g[3]=Dt,y.clearBufferuiv(y.COLOR,0,g)):(v[0]=zt,v[1]=kt,v[2]=Ot,v[3]=Dt,y.clearBufferiv(y.COLOR,0,v))}else J|=y.COLOR_BUFFER_BIT}H&&(J|=y.DEPTH_BUFFER_BIT),K&&(J|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Ct.dispose(),et.dispose(),gt.dispose(),X.dispose(),xt.dispose(),Rt.dispose(),z.dispose(),wt.dispose(),Yt.dispose(),j.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",_n),mt.removeEventListener("sessionend",ll),ii.stop()};function yt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=rt.autoReset,H=Tt.enabled,K=Tt.autoUpdate,J=Tt.needsUpdate,V=Tt.type;O(),rt.autoReset=T,Tt.enabled=H,Tt.autoUpdate=K,Tt.needsUpdate=J,Tt.type=V}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const H=T.target;H.removeEventListener("dispose",lt),Ut(H)}function Ut(T){Wt(T),X.remove(T)}function Wt(T){const H=X.get(T).programs;H!==void 0&&(H.forEach(function(K){j.releaseProgram(K)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,J,V,pt){H===null&&(H=N);const At=V.isMesh&&V.matrixWorld.determinant()<0,It=Ih(T,H,K,J,V);k.setMaterial(J,At);let Dt=K.index,zt=1;if(J.wireframe===!0){if(Dt=_.getWireframeAttribute(K),Dt===void 0)return;zt=2}const kt=K.drawRange,Ot=K.attributes.position;let Jt=kt.start*zt,ce=(kt.start+kt.count)*zt;pt!==null&&(Jt=Math.max(Jt,pt.start*zt),ce=Math.min(ce,(pt.start+pt.count)*zt)),Dt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,Dt.count)):Ot!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Ot.count));const xe=ce-Jt;if(xe<0||xe===1/0)return;wt.setup(V,J,It,K,Dt);let me,de=_t;if(Dt!==null&&(me=b.get(Dt),de=Ft,de.setIndex(me)),V.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*B()),de.setMode(y.LINES)):de.setMode(y.TRIANGLES);else if(V.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),k.setLineWidth(Bt*B()),V.isLineSegments?de.setMode(y.LINES):V.isLineLoop?de.setMode(y.LINE_LOOP):de.setMode(y.LINE_STRIP)}else V.isPoints?de.setMode(y.POINTS):V.isSprite&&de.setMode(y.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))de.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,ge=V._multiDrawCounts,ee=V._multiDrawCount,Ze=Dt?b.get(Dt).bytesPerElement:1,wi=X.get(J).currentProgram.getUniforms();for(let je=0;je<ee;je++)wi.setValue(y,"_gl_DrawID",je),de.render(Bt[je]/Ze,ge[je])}else if(V.isInstancedMesh)de.renderInstances(Jt,xe,V.count);else if(K.isInstancedBufferGeometry){const Bt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ge=Math.min(K.instanceCount,Bt);de.renderInstances(Jt,xe,ge)}else de.render(Jt,xe)};function pe(T,H,K){T.transparent===!0&&T.side===yn&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,qs(T,H,K),T.side=ti,T.needsUpdate=!0,qs(T,H,K),T.side=yn):qs(T,H,K)}this.compile=function(T,H,K=null){K===null&&(K=T),p=gt.get(K),p.init(H),M.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==K&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let At=0;At<pt.length;At++){const It=pt[At];pe(It,K,V),J.add(It)}else pe(pt,K,V),J.add(pt)}),p=M.pop(),J},this.compileAsync=function(T,H,K=null){const J=this.compile(T,H,K);return new Promise(V=>{function pt(){if(J.forEach(function(At){X.get(At).currentProgram.isReady()&&J.delete(At)}),J.size===0){V(T);return}setTimeout(pt,10)}F.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let oe=null;function Cn(T){oe&&oe(T)}function _n(){ii.stop()}function ll(){ii.start()}const ii=new _h;ii.setAnimationLoop(Cn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(T){oe=T,mt.setAnimationLoop(T),T===null?ii.stop():ii.start()},mt.addEventListener("sessionstart",_n),mt.addEventListener("sessionend",ll),this.render=function(T,H){if(window.__galleryCaptureScene)return;if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(H),H=mt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,I),p=gt.get(T,M.length),p.init(H),M.push(p),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),re.setFromProjectionMatrix(ct,Tn,H.reversedDepth),it=this.localClippingEnabled,Qt=ft.init(this.clippingPlanes,it),m=et.get(T,w.length),m.init(),w.push(m),mt.enabled===!0&&mt.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&jr(pt,H,-1/0,x.sortObjects)}jr(T,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(vt,bt),Y=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Y&&Ct.addToRenderList(m,T),this.info.render.frame++,Qt===!0&&ft.beginShadows();const K=p.state.shadowsArray;Tt.render(K,T,H),Qt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const pt=H.cameras;if(V.length>0)for(let At=0,It=pt.length;At<It;At++){const Dt=pt[At];hl(J,V,T,Dt)}Y&&Ct.render(T);for(let At=0,It=pt.length;At<It;At++){const Dt=pt[At];cl(m,T,Dt,Dt.viewport)}}else V.length>0&&hl(J,V,T,H),Y&&Ct.render(T),cl(m,T,H);I!==null&&C===0&&(q.updateMultisampleRenderTarget(I),q.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,H),wt.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Qt===!0&&ft.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function jr(T,H,K,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){J&&U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const At=z.update(T),It=T.material;It.visible&&m.push(T,At,It,K,U.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||re.intersectsObject(T))){const At=z.update(T),It=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),U.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),U.copy(At.boundingSphere.center)),U.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(It)){const Dt=At.groups;for(let zt=0,kt=Dt.length;zt<kt;zt++){const Ot=Dt[zt],Jt=It[Ot.materialIndex];Jt&&Jt.visible&&m.push(T,At,Jt,K,U.z,Ot)}}else It.visible&&m.push(T,At,It,K,U.z,null)}}const pt=T.children;for(let At=0,It=pt.length;At<It;At++)jr(pt[At],H,K,J)}function cl(T,H,K,J){const V=T.opaque,pt=T.transmissive,At=T.transparent;p.setupLightsView(K),Qt===!0&&ft.setGlobalState(x.clippingPlanes,K),J&&k.viewport(L.copy(J)),V.length>0&&Ys(V,H,K),pt.length>0&&Ys(pt,H,K),At.length>0&&Ys(At,H,K),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function hl(T,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new xi(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Hs:wn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const pt=p.state.transmissionRenderTarget[J.id],At=J.viewport||L;pt.setSize(At.z*x.transmissionResolutionScale,At.w*x.transmissionResolutionScale);const It=x.getRenderTarget(),Dt=x.getActiveCubeFace(),zt=x.getActiveMipmapLevel();x.setRenderTarget(pt),x.getClearColor(st),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),Y&&Ct.render(K);const kt=x.toneMapping;x.toneMapping=Qn;const Ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Qt===!0&&ft.setGlobalState(x.clippingPlanes,J),Ys(T,K,J),q.updateMultisampleRenderTarget(pt),q.updateRenderTargetMipmap(pt),F.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ce=0,xe=H.length;ce<xe;ce++){const me=H[ce],de=me.object,Bt=me.geometry,ge=me.material,ee=me.group;if(ge.side===yn&&de.layers.test(J.layers)){const Ze=ge.side;ge.side=qe,ge.needsUpdate=!0,ul(de,K,J,Bt,ge,ee),ge.side=Ze,ge.needsUpdate=!0,Jt=!0}}Jt===!0&&(q.updateMultisampleRenderTarget(pt),q.updateRenderTargetMipmap(pt))}x.setRenderTarget(It,Dt,zt),x.setClearColor(st,Q),Ot!==void 0&&(J.viewport=Ot),x.toneMapping=kt}function Ys(T,H,K){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pt=T.length;V<pt;V++){const At=T[V],It=At.object,Dt=At.geometry,zt=At.group;let kt=At.material;kt.allowOverride===!0&&J!==null&&(kt=J),It.layers.test(K.layers)&&ul(It,H,K,Dt,kt,zt)}}function ul(T,H,K,J,V,pt){T.onBeforeRender(x,H,K,J,V,pt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,H,K,J,T,pt),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,x.renderBufferDirect(K,H,J,V,T,pt),V.side=ti,V.needsUpdate=!0,x.renderBufferDirect(K,H,J,V,T,pt),V.side=yn):x.renderBufferDirect(K,H,J,V,T,pt),T.onAfterRender(x,H,K,J,V,pt)}function qs(T,H,K){H.isScene!==!0&&(H=N);const J=X.get(T),V=p.state.lights,pt=p.state.shadowsArray,At=V.state.version,It=j.getParameters(T,V.state,pt,H,K),Dt=j.getProgramCacheKey(It);let zt=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?Rt:xt).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",lt),zt=new Map,J.programs=zt);let kt=zt.get(Dt);if(kt!==void 0){if(J.currentProgram===kt&&J.lightsStateVersion===At)return dl(T,It),kt}else It.uniforms=j.getUniforms(T),T.onBeforeCompile(It,x),kt=j.acquireProgram(It,Dt),zt.set(Dt,kt),J.uniforms=It.uniforms;const Ot=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=ft.uniform),dl(T,It),J.needsLights=Nh(T),J.lightsStateVersion=At,J.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.directionalShadowMap.value=V.state.directionalShadowMap,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotShadowMap.value=V.state.spotShadowMap,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMap.value=V.state.pointShadowMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=kt,J.uniformsList=null,kt}function fl(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Rr.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function dl(T,H){const K=X.get(T);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Ih(T,H,K,J,V){H.isScene!==!0&&(H=N),q.resetTextureUnits();const pt=H.fog,At=J.isMeshStandardMaterial?H.environment:null,It=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:os,Dt=(J.isMeshStandardMaterial?Rt:xt).get(J.envMap||At),zt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,kt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ot=!!K.morphAttributes.position,Jt=!!K.morphAttributes.normal,ce=!!K.morphAttributes.color;let xe=Qn;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=x.toneMapping);const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=me!==void 0?me.length:0,Bt=X.get(J),ge=p.state.lights;if(Qt===!0&&(it===!0||T!==S)){const Be=T===S&&J.id===E;ft.setState(J,T,Be)}let ee=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ge.state.version||Bt.outputColorSpace!==It||V.isBatchedMesh&&Bt.batching===!1||!V.isBatchedMesh&&Bt.batching===!0||V.isBatchedMesh&&Bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Bt.instancing===!1||!V.isInstancedMesh&&Bt.instancing===!0||V.isSkinnedMesh&&Bt.skinning===!1||!V.isSkinnedMesh&&Bt.skinning===!0||V.isInstancedMesh&&Bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Bt.instancingMorph===!1&&V.morphTexture!==null||Bt.envMap!==Dt||J.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ft.numPlanes||Bt.numIntersection!==ft.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==kt||Bt.morphTargets!==Ot||Bt.morphNormals!==Jt||Bt.morphColors!==ce||Bt.toneMapping!==xe||Bt.morphTargetsCount!==de)&&(ee=!0):(ee=!0,Bt.__version=J.version);let Ze=Bt.currentProgram;ee===!0&&(Ze=qs(J,H,V));let wi=!1,je=!1,us=!1;const _e=Ze.getUniforms(),nn=Bt.uniforms;if(k.useProgram(Ze.program)&&(wi=!0,je=!0,us=!0),J.id!==E&&(E=J.id,je=!0),wi||S!==T){k.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_e.setValue(y,"projectionMatrix",T.projectionMatrix),_e.setValue(y,"viewMatrix",T.matrixWorldInverse);const We=_e.map.cameraPosition;We!==void 0&&We.setValue(y,St.setFromMatrixPosition(T.matrixWorld)),W.logarithmicDepthBuffer&&_e.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_e.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,je=!0,us=!0)}if(V.isSkinnedMesh){_e.setOptional(y,V,"bindMatrix"),_e.setOptional(y,V,"bindMatrixInverse");const Be=V.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),_e.setValue(y,"boneTexture",Be.boneTexture,q))}V.isBatchedMesh&&(_e.setOptional(y,V,"batchingTexture"),_e.setValue(y,"batchingTexture",V._matricesTexture,q),_e.setOptional(y,V,"batchingIdTexture"),_e.setValue(y,"batchingIdTexture",V._indirectTexture,q),_e.setOptional(y,V,"batchingColorTexture"),V._colorsTexture!==null&&_e.setValue(y,"batchingColorTexture",V._colorsTexture,q));const sn=K.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ut.update(V,K,Ze),(je||Bt.receiveShadow!==V.receiveShadow)&&(Bt.receiveShadow=V.receiveShadow,_e.setValue(y,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(nn.envMap.value=Dt,nn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),je&&(_e.setValue(y,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Uh(nn,us),pt&&J.fog===!0&&ot.refreshFogUniforms(nn,pt),ot.refreshMaterialUniforms(nn,J,tt,at,p.state.transmissionRenderTarget[T.id]),Rr.upload(y,fl(Bt),nn,q)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rr.upload(y,fl(Bt),nn,q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_e.setValue(y,"center",V.center),_e.setValue(y,"modelViewMatrix",V.modelViewMatrix),_e.setValue(y,"normalMatrix",V.normalMatrix),_e.setValue(y,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Be=J.uniformsGroups;for(let We=0,Kr=Be.length;We<Kr;We++){const si=Be[We];Yt.update(si,Ze),Yt.bind(si,Ze)}}return Ze}function Uh(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Nh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,H,K){const J=X.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=H,X.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const K=X.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const Fh=y.createFramebuffer();this.setRenderTarget=function(T,H=0,K=0){I=T,A=H,C=K;let J=!0,V=null,pt=!1,At=!1;if(T){const Dt=X.get(T);if(Dt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(y.FRAMEBUFFER,null),J=!1;else if(Dt.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(Dt.__hasExternalTextures)q.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ot=T.depthTexture;if(Dt.__boundDepthTexture!==Ot){if(Ot!==null&&X.has(Ot)&&(T.width!==Ot.image.width||T.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(At=!0);const kt=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[H])?V=kt[H][K]:V=kt[H],pt=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?V=X.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?V=kt[K]:V=kt,L.copy(T.viewport),G.copy(T.scissor),Z=T.scissorTest}else L.copy(Pt).multiplyScalar(tt).floor(),G.copy(Vt).multiplyScalar(tt).floor(),Z=Kt;if(K!==0&&(V=Fh),k.bindFramebuffer(y.FRAMEBUFFER,V)&&J&&k.drawBuffers(T,V),k.viewport(L),k.scissor(G),k.setScissorTest(Z),pt){const Dt=X.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,K)}else if(At){const Dt=H;for(let zt=0;zt<T.textures.length;zt++){const kt=X.get(T.textures[zt]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+zt,kt.__webglTexture,K,Dt)}}else if(T!==null&&K!==0){const Dt=X.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Dt.__webglTexture,K)}E=-1},this.readRenderTargetPixels=function(T,H,K,J,V,pt,At,It=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){k.bindFramebuffer(y.FRAMEBUFFER,Dt);try{const zt=T.textures[It],kt=zt.format,Ot=zt.type;if(!W.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&K>=0&&K<=T.height-V&&(T.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+It),y.readPixels(H,K,J,V,Nt.convert(kt),Nt.convert(Ot),pt))}finally{const zt=I!==null?X.get(I).__webglFramebuffer:null;k.bindFramebuffer(y.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,H,K,J,V,pt,At,It=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt)if(H>=0&&H<=T.width-J&&K>=0&&K<=T.height-V){k.bindFramebuffer(y.FRAMEBUFFER,Dt);const zt=T.textures[It],kt=zt.format,Ot=zt.type;if(!W.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Jt),y.bufferData(y.PIXEL_PACK_BUFFER,pt.byteLength,y.STREAM_READ),T.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+It),y.readPixels(H,K,J,V,Nt.convert(kt),Nt.convert(Ot),0);const ce=I!==null?X.get(I).__webglFramebuffer:null;k.bindFramebuffer(y.FRAMEBUFFER,ce);const xe=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Hu(y,xe,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Jt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,pt),y.deleteBuffer(Jt),y.deleteSync(xe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,K=0){const J=Math.pow(2,-K),V=Math.floor(T.image.width*J),pt=Math.floor(T.image.height*J),At=H!==null?H.x:0,It=H!==null?H.y:0;q.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,K,0,0,At,It,V,pt),k.unbindTexture()};const Oh=y.createFramebuffer(),Bh=y.createFramebuffer();this.copyTextureToTexture=function(T,H,K=null,J=null,V=0,pt=null){pt===null&&(V!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=V,V=0):pt=0);let At,It,Dt,zt,kt,Ot,Jt,ce,xe;const me=T.isCompressedTexture?T.mipmaps[pt]:T.image;if(K!==null)At=K.max.x-K.min.x,It=K.max.y-K.min.y,Dt=K.isBox3?K.max.z-K.min.z:1,zt=K.min.x,kt=K.min.y,Ot=K.isBox3?K.min.z:0;else{const sn=Math.pow(2,-V);At=Math.floor(me.width*sn),It=Math.floor(me.height*sn),T.isDataArrayTexture?Dt=me.depth:T.isData3DTexture?Dt=Math.floor(me.depth*sn):Dt=1,zt=0,kt=0,Ot=0}J!==null?(Jt=J.x,ce=J.y,xe=J.z):(Jt=0,ce=0,xe=0);const de=Nt.convert(H.format),Bt=Nt.convert(H.type);let ge;H.isData3DTexture?(q.setTexture3D(H,0),ge=y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(q.setTexture2DArray(H,0),ge=y.TEXTURE_2D_ARRAY):(q.setTexture2D(H,0),ge=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,H.unpackAlignment);const ee=y.getParameter(y.UNPACK_ROW_LENGTH),Ze=y.getParameter(y.UNPACK_IMAGE_HEIGHT),wi=y.getParameter(y.UNPACK_SKIP_PIXELS),je=y.getParameter(y.UNPACK_SKIP_ROWS),us=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,me.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,me.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,zt),y.pixelStorei(y.UNPACK_SKIP_ROWS,kt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ot);const _e=T.isDataArrayTexture||T.isData3DTexture,nn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const sn=X.get(T),Be=X.get(H),We=X.get(sn.__renderTarget),Kr=X.get(Be.__renderTarget);k.bindFramebuffer(y.READ_FRAMEBUFFER,We.__webglFramebuffer),k.bindFramebuffer(y.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let si=0;si<Dt;si++)_e&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,X.get(T).__webglTexture,V,Ot+si),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,X.get(H).__webglTexture,pt,xe+si)),y.blitFramebuffer(zt,kt,At,It,Jt,ce,At,It,y.DEPTH_BUFFER_BIT,y.NEAREST);k.bindFramebuffer(y.READ_FRAMEBUFFER,null),k.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||X.has(T)){const sn=X.get(T),Be=X.get(H);k.bindFramebuffer(y.READ_FRAMEBUFFER,Oh),k.bindFramebuffer(y.DRAW_FRAMEBUFFER,Bh);for(let We=0;We<Dt;We++)_e?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,sn.__webglTexture,V,Ot+We):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,sn.__webglTexture,V),nn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Be.__webglTexture,pt,xe+We):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Be.__webglTexture,pt),V!==0?y.blitFramebuffer(zt,kt,At,It,Jt,ce,At,It,y.COLOR_BUFFER_BIT,y.NEAREST):nn?y.copyTexSubImage3D(ge,pt,Jt,ce,xe+We,zt,kt,At,It):y.copyTexSubImage2D(ge,pt,Jt,ce,zt,kt,At,It);k.bindFramebuffer(y.READ_FRAMEBUFFER,null),k.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else nn?T.isDataTexture||T.isData3DTexture?y.texSubImage3D(ge,pt,Jt,ce,xe,At,It,Dt,de,Bt,me.data):H.isCompressedArrayTexture?y.compressedTexSubImage3D(ge,pt,Jt,ce,xe,At,It,Dt,de,me.data):y.texSubImage3D(ge,pt,Jt,ce,xe,At,It,Dt,de,Bt,me):T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,pt,Jt,ce,At,It,de,Bt,me.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,pt,Jt,ce,me.width,me.height,de,me.data):y.texSubImage2D(y.TEXTURE_2D,pt,Jt,ce,At,It,de,Bt,me);y.pixelStorei(y.UNPACK_ROW_LENGTH,ee),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ze),y.pixelStorei(y.UNPACK_SKIP_PIXELS,wi),y.pixelStorei(y.UNPACK_SKIP_ROWS,je),y.pixelStorei(y.UNPACK_SKIP_IMAGES,us),pt===0&&H.generateMipmaps&&y.generateMipmap(ge),k.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),k.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,k.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const _c={type:"change"},tl={type:"start"},Mh={type:"end"},Sr=new qc,vc=new Kn,Xg=Math.cos(70*Ce.DEG2RAD),Me=new P,Xe=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Io=1e-6;class Yg extends ad{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Hn,this._lastTargetPosition=new P,this._quat=new Hn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new P,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new P,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zg.bind(this),this._onPointerDown=qg.bind(this),this._onPointerUp=jg.bind(this),this._onContextMenu=n_.bind(this),this._onMouseWheel=$g.bind(this),this._onKeyDown=Qg.bind(this),this._onTouchStart=t_.bind(this),this._onTouchMove=e_.bind(this),this._onMouseDown=Kg.bind(this),this._onMouseMove=Jg.bind(this),this._interceptControlDown=i_.bind(this),this._interceptControlUp=s_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_c),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xe:n>Math.PI&&(n-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<Xg?this.object.lookAt(this.target):(vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(vc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Io||this._lastTargetPosition.distanceToSquared(this.target)>Io?(this.dispatchEvent(_c),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Zg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mh),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Kg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case $i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case $i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(tl)}function Jg(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $g(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(tl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mh))}function Qg(i){this.enabled!==!1&&this._handleKeyDown(i)}function t_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(tl)}function e_(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function n_(i){this.enabled!==!1&&i.preventDefault()}function i_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=xc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);const g=xc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function xc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new De(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);a.setComponent(f+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const es=new P,ns=new P;function Si(i){return(i%1+1)%1}function ni(i,{profile:t,uStart:e=0,uEnd:n=1,samples:s=240,yBase:r=0,uDensity:o=1,vDensity:a=1,closedProfile:l=!1,flip:c=!1}={}){const h=l?[...t,t[0]]:t,u=h.length,f=s,d=[0];for(let A=1;A<u;A++)d.push(d[A-1]+Math.hypot(h[A][0]-h[A-1][0],h[A][1]-h[A-1][1]));const g=i.getLength(),v=Math.abs(n-e)*g,m=new Float32Array((f+1)*u*3),p=new Float32Array((f+1)*u*2),w=[];let M=0,x=0;for(let A=0;A<=f;A++){const C=A/f,I=Si(e+(n-e)*C);i.getPointAt(I,es),i.getTangentAt(I,ns);const E=ns.z,S=-ns.x,L=Math.hypot(E,S)||1,G=v*C*o;for(let Z=0;Z<u;Z++){const st=h[Z][0],Q=h[Z][1];m[M++]=es.x+E/L*st,m[M++]=r+Q,m[M++]=es.z+S/L*st,p[x++]=G,p[x++]=d[Z]*a}}for(let A=0;A<f;A++)for(let C=0;C<u-1;C++){const I=A*u+C,E=(A+1)*u+C,S=(A+1)*u+C+1,L=A*u+C+1;c?w.push(I,S,E,I,L,S):w.push(I,E,S,I,S,L)}const R=new Ae;return R.setAttribute("position",new De(m,3)),R.setAttribute("uv",new De(p,2)),R.setIndex(w),R.computeVertexNormals(),R}function o_(i,{uStart:t=0,uEnd:e=1,offsetAt:n,samples:s=120,closed:r=!1}){const o=[];for(let a=0;a<=s;a++){const l=a/s,c=Si(t+(e-t)*l);i.getPointAt(c,es),i.getTangentAt(c,ns);const h=ns.z,u=-ns.x,f=Math.hypot(h,u)||1,d=n(l,c);o.push(new P(es.x+h/f*d,0,es.z+u/f*d))}return new Wr(o,r,"catmullrom",.5)}function Zr(i,t=!1,e=.5){return new Wr(i.map(n=>n.isVector3?n.clone():new P(n[0],0,n[1])),t,"catmullrom",e)}function a_(i,t=1){i.attributes.normal||i.computeVertexNormals();const e=i.attributes.position,n=i.attributes.normal,s=new Float32Array(e.count*2);for(let r=0;r<e.count;r++){const o=Math.abs(n.getX(r)),a=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r)),c=e.getX(r),h=e.getY(r),u=e.getZ(r);let f,d;a>=o&&a>=l?(f=c,d=u):o>=l?(f=u,d=h):(f=c,d=h),s[r*2]=f*t,s[r*2+1]=d*t}return i.setAttribute("uv",new De(s,2)),i}function Eh(i,t=1){const e=i.attributes.position,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=e.getX(s)*t,n[s*2+1]=e.getZ(s)*t;return i.setAttribute("uv",new De(n,2)),i}function Th({length:i,depth:t,baseY:e,topY:n,span:s,rise:r,springY:o,segments:a=22}){const l=new Xr;l.moveTo(-i/2,e),l.lineTo(i/2,e),l.lineTo(i/2,n),l.lineTo(-i/2,n),l.closePath();const c=s*s/4/(2*r)+r/2,h=o+r-c,u=Math.atan2(o-h,-s/2),f=Math.atan2(o-h,s/2),d=new Aa,g=e+Math.min(.25,(o-e)*.4);d.moveTo(-s/2,g),d.lineTo(-s/2,o),d.absarc(0,h,c,u,f,!0),d.lineTo(s/2,g),d.closePath(),l.holes.push(d);const v=new Vs(l,{depth:t,bevelEnabled:!1,curveSegments:a});return v.translate(0,0,-t/2),v}function l_(i,t,e,n=14){const s=new Xr;s.moveTo(-i/2,0),s.quadraticCurveTo(0,e*2,i/2,0),s.lineTo(i/2,-.06),s.quadraticCurveTo(0,e*2-.12,-i/2,-.06),s.closePath();const r=new Vs(s,{depth:t,bevelEnabled:!1,curveSegments:n});return r.translate(0,0,-t/2),r}function ui(i,t,e){const n=new Xr;n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,e),n.closePath();const s=new Vs(n,{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),s}function Mr(i,t,e,n=.4){const s=i/2,r=t/2,o=i*n/2,a=[[-s,0,-r],[s,0,-r],[s,0,r],[-s,0,r],[-o,e,0],[o,e,0]],l=[[3,2,5,3,5,4],[1,0,4,1,4,5],[0,3,4],[2,1,5]],c=[];for(const u of l)for(const f of u)c.push(a[f][0],a[f][1],a[f][2]);const h=new Ae;return h.setAttribute("position",new se(c,3)),h.computeVertexNormals(),h.setAttribute("uv",new se(new Float32Array(c.length/3*2),2)),h}function c_(i,{pos:t=[0,0,0],rotY:e=0,rotX:n=0,rotZ:s=0,scale:r=1}={}){const o=new $t,a=new Hn().setFromEuler(new an(n,e,s,"YXZ")),l=typeof r=="number"?new P(r,r,r):new P(...r);return o.compose(new P(...t),a,l),i.applyMatrix4(o),i}class h_{constructor(){this.groups=new Map,this.triangles=0}add(t,e,n,{cast:s=!0,receive:r=!0,density:o=.4,project:a=!0}={}){let l=t.index?t.toNonIndexed():t.clone();e&&l.applyMatrix4(e),l.attributes.normal||l.computeVertexNormals(),a&&a_(l,o),l.attributes.uv1&&l.deleteAttribute("uv1"),l.attributes.tangent&&l.deleteAttribute("tangent");const c=`${n.uuid}|${s?1:0}|${r?1:0}`;return this.groups.has(c)||this.groups.set(c,{material:n,cast:s,receive:r,list:[]}),this.groups.get(c).list.push(l),this.triangles+=l.attributes.position.count/3,l}addTransformed(t,e={},n,s){return this.add(c_(t,e),null,n,s)}build(t){const e=[];for(const{material:n,cast:s,receive:r,list:o}of this.groups.values()){const a=r_(o,!1);o.forEach(c=>c.dispose());const l=new ie(a,n);l.castShadow=s,l.receiveShadow=r,l.matrixAutoUpdate=!1,l.updateMatrix(),t.add(l),e.push(l)}return this.groups.clear(),e}}function Gt({pos:i=[0,0,0],rotY:t=0,scale:e=1}){const n=typeof e=="number"?new P(e,e,e):new P(...e);return new $t().compose(new P(...i),new Hn().setFromEuler(new an(0,t,0)),n)}function Ue(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class u_{constructor(t=1337){this._next=Ue(t)}next(){return this._next()}range(t,e){return t+(e-t)*this._next()}int(t,e){return Math.floor(t+(e-t+1)*this._next()*.999999)}pick(t){return t[Math.min(t.length-1,Math.floor(this._next()*t.length))]}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}jitter(t){return(this._next()*2-1)*t}}function f_(i=7){const t=Ue(i),e=256,n=new Float32Array(e*e);for(let o=0;o<n.length;o++)n[o]=t();const s=(o,a)=>n[(a%e+e)%e*e+(o%e+e)%e],r=o=>o*o*(3-2*o);return function(a,l){const c=Math.floor(a),h=Math.floor(l),u=r(a-c),f=r(l-h),d=s(c,h),g=s(c+1,h),v=s(c,h+1),m=s(c+1,h+1);return(d*(1-u)+g*u)*(1-f)+(v*(1-u)+m*u)*f}}function d_(i,t,e,n=4,s=2,r=.5){let o=0,a=1,l=0,c=t,h=e;for(let u=0;u<n;u++)o+=a*i(c,h),l+=a,a*=r,c*=s,h*=s;return o/l}let bh=4;function p_(i){bh=Math.max(1,Math.min(16,i||4))}const Uo=new Map;function Ne(i,t){return Uo.has(i)||Uo.set(i,t()),Uo.get(i)}function Fe(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Oe(i,{srgb:t=!0,wrap:e=Ir}={}){const n=new vf(i);return n.wrapS=n.wrapT=e,n.anisotropy=bh,n.colorSpace=t?Qe:Bn,n.repeat.set(1,1),n.needsUpdate=!0,n}function Mi(i,t,e,n,s,r,o,a,l=1){for(let c=0;c<n;c++){const h=o+s()*(a-o);i.globalAlpha=l*(.35+s()*.65),i.fillStyle=r[Math.floor(s()*r.length)];const u=s()*t,f=s()*e;i.beginPath(),i.ellipse(u,f,h,h*(.5+s()),s()*Math.PI,0,Math.PI*2),i.fill()}i.globalAlpha=1}function Gn(i,t,e,n,s,r,o,a,l){for(let c=0;c<n;c++){const h=s()*t,u=s()*e,f=o+s()*(a-o),d=i.createRadialGradient(h,u,0,h,u,f),g=r[Math.floor(s()*r.length)];d.addColorStop(0,g+Math.floor(l*255).toString(16).padStart(2,"0")),d.addColorStop(1,g+"00"),i.fillStyle=d,i.beginPath(),i.arc(h,u,f,0,Math.PI*2),i.fill()}}function m_(){return Ne("grass",()=>{const t=Fe(512,512),e=t.getContext("2d"),n=Ue(11);e.fillStyle="#5f8a3c",e.fillRect(0,0,512,512),Gn(e,512,512,90,n,["#6f9a45","#4e7531","#7ba24c","#43682c"],40,170,.55),Mi(e,512,512,5200,n,["#7fae52","#4a6f2e","#65913f","#8cb85c","#3d5f27"],.6,2.4,.85),e.lineWidth=1;for(let s=0;s<2600;s++){const r=n()*512,o=n()*512;e.strokeStyle=["#8fbd5f","#54803a","#6d9a44","#3f6529"][Math.floor(n()*4)],e.globalAlpha=.35+n()*.45,e.beginPath(),e.moveTo(r,o),e.lineTo(r+(n()*4-2),o-2-n()*4),e.stroke()}return e.globalAlpha=1,Oe(t)})}function yc(i="#9c7f57"){return Ne("dirt"+i,()=>{const e=Fe(256,256),n=e.getContext("2d"),s=Ue(23);return n.fillStyle=i,n.fillRect(0,0,256,256),Gn(n,256,256,60,s,["#8a6f4b","#ab8d63","#7c6543"],20,90,.5),Mi(n,256,256,3e3,s,["#b39a72","#6f5a3c","#c2a97d","#8a7550"],.5,2.2,.8),Oe(e)})}function Sc(){return Ne("gravel",()=>{const t=Fe(256,256),e=t.getContext("2d"),n=Ue(31);e.fillStyle="#8d8478",e.fillRect(0,0,256,256),Gn(e,256,256,40,n,["#7a7268","#9c9488"],30,100,.5);for(let s=0;s<4200;s++){const r=n()*256,o=n()*256,a=.8+n()*2.6;e.fillStyle=["#a9a196","#6d6559","#c0b7a8","#847b6f","#58514a"][Math.floor(n()*5)],e.globalAlpha=.6+n()*.4,e.beginPath(),e.ellipse(r,o,a,a*(.6+n()*.6),n()*3,0,Math.PI*2),e.fill()}return e.globalAlpha=1,Oe(t)})}function g_(){return Ne("asphalt",()=>{const t=Fe(256,256),e=t.getContext("2d"),n=Ue(41);return e.fillStyle="#5b5a58",e.fillRect(0,0,256,256),Gn(e,256,256,40,n,["#4e4d4b","#676663"],25,95,.5),Mi(e,256,256,5e3,n,["#77746f","#3f3e3c","#8b8884","#514f4c"],.5,2,.7),Oe(t)})}function Xi({base:i="#8a5a33",dark:t="#5d3a1e",planks:e=4,seed:n=51,grain:s=220}={}){return Ne("wood"+i+t+e+n,()=>{const o=Fe(512,512),a=o.getContext("2d"),l=Ue(n);a.fillStyle=i,a.fillRect(0,0,512,512);for(let h=0;h<s;h++){const u=l()*512;a.strokeStyle=l()<.5?t:i,a.globalAlpha=.06+l()*.16,a.lineWidth=.6+l()*2.2,a.beginPath(),a.moveTo(0,u);for(let f=0;f<=512;f+=32)a.lineTo(f,u+Math.sin(f/512*Math.PI*(1+l()*3)+h)*(1+l()*3));a.stroke()}for(let h=0;h<6;h++){const u=l()*512,f=l()*512;for(let d=5;d>0;d--)a.strokeStyle=t,a.globalAlpha=.16,a.lineWidth=1.6,a.beginPath(),a.ellipse(u,f,d*3.4,d*2.1,l(),0,Math.PI*2),a.stroke()}a.globalAlpha=1;const c=512/e;for(let h=0;h<=e;h++){const u=h*c;a.fillStyle=t,a.globalAlpha=.55,a.fillRect(0,u-1.5,512,3)}return a.globalAlpha=1,Oe(o)})}function No({base:i="#9a958c",dark:t="#6e6a62",seed:e=61}={}){return Ne("stone"+i+t+e,()=>{const s=Fe(512,512),r=s.getContext("2d"),o=Ue(e);r.fillStyle=t,r.fillRect(0,0,512,512);const a=9,l=512/a;for(let c=0;c<a;c++){let h=-o()*60;for(;h<512;){const u=34+o()*54,f=l-3,d=.82+o()*.36,g=new Ht(i).multiplyScalar(d);r.fillStyle="#"+g.getHexString();const v=h+2,m=c*l+2;r.beginPath();const p=3+o()*3;r.roundRect(v,m,u-4,f,p),r.fill(),r.globalAlpha=.25,Mi(r,512,512,0,o,[i],1,1,0),r.globalAlpha=1,h+=u}}return Mi(r,512,512,4200,o,["#b3ada3","#5c584f","#8b867c"],.5,2.2,.5),Oe(s)})}function __({base:i="#a4503c",mortar:t="#c8bfae",seed:e=71}={}){return Ne("brick"+i+t+e,()=>{const s=Fe(512,512),r=s.getContext("2d"),o=Ue(e);r.fillStyle=t,r.fillRect(0,0,512,512);const a=16,l=512/a;for(let c=0;c<a;c++){const h=c%2*26;for(let u=-26;u<512;u+=52){const f=new Ht(i).multiplyScalar(.85+o()*.3);r.fillStyle="#"+f.getHexString(),r.fillRect(u+h+2,c*l+2,48,l-4)}}return Gn(r,512,512,30,o,["#8d4130","#b56049"],20,80,.4),Oe(s)})}function v_(i,t=81){return Ne("plaster"+i+t,()=>{const n=Fe(256,256),s=n.getContext("2d"),r=Ue(t),o=new Ht(i);s.fillStyle="#"+o.getHexString(),s.fillRect(0,0,256,256);const a="#"+o.clone().lerp(new Ht("#ffffff"),.25).getHexString(),l="#"+o.clone().lerp(new Ht("#000000"),.3).getHexString();Gn(s,256,256,40,r,[a,l],18,70,.35),Mi(s,256,256,2600,r,[a,l],.5,1.6,.5);for(let c=0;c<26;c++)s.globalAlpha=.05+r()*.08,s.fillStyle=l,s.fillRect(r()*256,0,1+r()*5,256);return s.globalAlpha=1,Oe(n)})}function x_(i,{rows:t=10,seed:e=91,style:n="tile"}={}){return Ne("roof"+i+t+e+n,()=>{const r=Fe(256,256),o=r.getContext("2d"),a=Ue(e),c="#"+new Ht(i).clone().multiplyScalar(.62).getHexString();o.fillStyle=c,o.fillRect(0,0,256,256);const h=256/t;for(let u=0;u<t;u++){const d=21.333333333333332,g=u%2*d*.5;for(let v=-1;v<=12;v++){const m=new Ht(i).multiplyScalar(.78+a()*.4);o.fillStyle="#"+m.getHexString();const p=v*d+g;n==="slate"?(o.beginPath(),o.roundRect(p+1,u*h+1,d-2,h-1.5,1.5),o.fill()):(o.beginPath(),o.roundRect(p+1.5,u*h+1.5,d-3,h*.78,2.5),o.fill(),o.fillStyle="rgba(0,0,0,0.18)",o.fillRect(p+1.5,u*h+h*.78,d-3,h*.22))}o.fillStyle="rgba(0,0,0,0.22)",o.fillRect(0,u*h+h-2.5,256,2.5)}return Gn(o,256,256,22,a,["#6a6155","#c9c0b0"],12,50,.18),Oe(r)})}function y_(i="#b99a5c",t=101){return Ne("thatch"+i+t,()=>{const n=Fe(256,256),s=n.getContext("2d"),r=Ue(t);s.fillStyle=i,s.fillRect(0,0,256,256);for(let o=0;o<4200;o++){const a=r()*256,l=r()*256;s.strokeStyle=["#a98b4f","#cbb079","#8d7440","#d8c294"][Math.floor(r()*4)],s.globalAlpha=.25+r()*.5,s.lineWidth=.8+r(),s.beginPath(),s.moveTo(a,l),s.lineTo(a+r()*3-1.5,l+5+r()*9),s.stroke()}return s.globalAlpha=1,Oe(n)})}function S_(){return Ne("water",()=>{const t=Fe(512,512),e=t.getContext("2d"),n=Ue(111);e.fillStyle="#4f8490",e.fillRect(0,0,512,512),Gn(e,512,512,70,n,["#5d99a3","#42727e","#6aa8ad"],30,130,.5);for(let s=0;s<260;s++){const r=n()*512;e.strokeStyle=n()<.5?"#a5d6d8":"#35646e",e.globalAlpha=.1+n()*.22,e.lineWidth=.8+n()*2.4,e.beginPath(),e.moveTo(0,r);for(let o=0;o<=512;o+=24)e.lineTo(o,r+Math.sin(o/512*Math.PI*(2+n()*4))*(2+n()*5));e.stroke()}return e.globalAlpha=1,Oe(t)})}function M_(){return Ne("waterBump",()=>{const t=Fe(256,256),e=t.getContext("2d"),n=Ue(113);e.fillStyle="#808080",e.fillRect(0,0,256,256);for(let s=0;s<700;s++){const r=n()*256,o=n()*256,a=4+n()*26,l=e.createRadialGradient(r,o,0,r,o,a),c=n()<.5?255:0;l.addColorStop(0,`rgba(${c},${c},${c},0.32)`),l.addColorStop(1,`rgba(${c},${c},${c},0)`),e.fillStyle=l,e.beginPath(),e.ellipse(r,o,a,a*(.25+n()*.35),n()*Math.PI,0,Math.PI*2),e.fill()}return Oe(t,{srgb:!1})})}function wh(){return Ne("glow",()=>{const t=Fe(128,128),e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,236,190,1)"),n.addColorStop(.22,"rgba(255,206,130,0.55)"),n.addColorStop(.55,"rgba(255,176,88,0.18)"),n.addColorStop(1,"rgba(255,160,70,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Oe(t,{wrap:Mn})})}function E_(){return Ne("table",()=>{const t=Fe(512,512),e=t.getContext("2d"),n=Ue(131);e.fillStyle="#241f1b",e.fillRect(0,0,512,512);const s=e.createRadialGradient(512*.5,512*.5,512*.04,512*.5,512*.5,512*.62);return s.addColorStop(0,"rgba(96,80,64,0.85)"),s.addColorStop(.42,"rgba(64,53,43,0.6)"),s.addColorStop(1,"rgba(20,17,15,0)"),e.fillStyle=s,e.fillRect(0,0,512,512),Gn(e,512,512,60,n,["#3a332c","#2a2521"],40,200,.5),Mi(e,512,512,6e3,n,["#453d34","#1d1916","#514639"],.5,2,.45),Oe(t,{wrap:Mn})})}function T_(i,{bg:t="#8a6a2f",fg:e="#3a2c10"}={}){const n="plaque"+i.join("|")+t+e;return Ne(n,()=>{const o=Fe(512,128),a=o.getContext("2d"),l=a.createLinearGradient(0,0,0,128);return l.addColorStop(0,"#c9a85a"),l.addColorStop(.15,"#d8bd77"),l.addColorStop(.5,t),l.addColorStop(1,"#5d4519"),a.fillStyle=l,a.fillRect(0,0,512,128),a.fillStyle="rgba(0,0,0,0.25)",a.fillRect(0,0,512,5),a.fillRect(0,123,512,5),a.textAlign="center",a.textBaseline="middle",i.forEach((c,h)=>{const u=h===0?46:26;a.font=`600 ${u}px "Trebuchet MS", "Segoe UI", sans-serif`,a.fillStyle="rgba(255,240,200,0.35)",a.fillText(c,512/2+1.5,128/2+(h-(i.length-1)/2)*40+1.5),a.fillStyle=e,a.fillText(c,512/2,128/2+(h-(i.length-1)/2)*40)}),Oe(o,{wrap:Mn})})}function Mc({top:i,horizon:t,bottom:e,sun:n=null,stars:s=0,seed:r=151}){return Ne("sky"+i+t+e+s+JSON.stringify(n),()=>{const l=Fe(1024,512),c=l.getContext("2d"),h=Ue(r),u=c.createLinearGradient(0,0,0,512);if(u.addColorStop(0,i),u.addColorStop(.48,t),u.addColorStop(.52,t),u.addColorStop(1,e),c.fillStyle=u,c.fillRect(0,0,1024,512),s>0){for(let d=0;d<s;d++){const g=h()*1024,v=h()*512*.5,m=h()*1.3+.2;c.globalAlpha=.25+h()*.75,c.fillStyle="#ffffff",c.beginPath(),c.arc(g,v,m,0,Math.PI*2),c.fill()}c.globalAlpha=1}if(n){const d=(n.azimuth/(Math.PI*2)%1+1)%1*1024,g=512*(.5-n.elevation/Math.PI),v=n.radius||90,m=c.createRadialGradient(d,g,0,d,g,v);m.addColorStop(0,n.core||"rgba(255,246,220,1)"),m.addColorStop(.25,n.mid||"rgba(255,214,150,0.55)"),m.addColorStop(1,"rgba(255,180,110,0)"),c.fillStyle=m,c.beginPath(),c.arc(d,g,v,0,Math.PI*2),c.fill()}const f=Oe(l);return f.mapping=Lr,f})}const Mt={width:104,depth:72,rimInnerX:48.7,rimInnerZ:32.7,rimOuterX:52,rimOuterZ:36,rimHeight:1.05,deckTop:0,deckBottom:-2.4,baseBottom:-2.9,minX:-49,maxX:49,minZ:-33,maxZ:33,earthBottom:-2.6},vn={level:-1.7,bed:-2.4,halfWidth:3,bank:3.2},b_=[[-33,-19],[-19,-24],[-2,-26],[15,-25.5],[27,-22],[36,-15],[41.5,-5.5],[42.5,5.5],[38,15.5],[28,22.5],[14,25.5],[-3,26],[-18,25],[-29,21.5],[-38,15],[-42.5,5],[-43.5,-5],[-40,-13.5]],w_=[[-19,-44],[-17.5,-36],[-14.5,-27],[-13,-20],[-15,-12],[-16.5,-4],[-15,4],[-12.5,11],[-13.5,18],[-15,24],[-13,30],[-11,40]],Ee={ballastBaseHalf:3.25,ballastTopHalf:2.35,ballastTop:.34,sleeperLength:3,sleeperHeight:.16,sleeperWidth:.42,sleeperSpacing:1.05,gauge:1.6,railTop:.68,railBase:.5},Ye={innerOffset:3.35,outerOffset:6.6,height:.95},ae=Zr(b_,!0,.5),el=Zr(w_,!1,.5),Jn=ae.getLength();function Ah(i,t,e){const n=[],s=e?t:t-1;for(let r=0;r<=s;r++){const o=e?r%t/t:r/s,a=i.getPointAt(o);n.push(a.x,a.z)}return n}const A_=Ah(ae,900,!0),R_=Ah(el,420,!1);function nl(i,t,e){let n=1/0;for(let s=0;s<e.length;s+=2){const r=i-e[s],o=t-e[s+1],a=r*r+o*o;a<n&&(n=a)}return Math.sqrt(n)}function Cs(i,t){return nl(i,t,A_)}function kr(i,t){return nl(i,t,R_)}const Cr=i=>{const t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)},C_=[{x:-41,z:24,r:7,h:1.1},{x:30,z:-30.5,r:7.5,h:.95},{x:-34,z:-29,r:8,h:1.05},{x:42,z:29,r:7,h:.85}];function te(i,t){const e=kr(i,t);let n=0;if(e<vn.halfWidth)n=vn.bed;else if(e<vn.halfWidth+vn.bank){const s=(e-vn.halfWidth)/vn.bank;n=vn.bed*(1-Cr(s))}for(const s of C_){const r=i-s.x,o=t-s.z,a=Math.hypot(r,o);if(a<s.r){const l=1-a/s.r;n+=s.h*Cr(l)*Cr(Math.min(1,l*1.6))}}return n}function ks(i){const t=ae.getPointAt(Si(i)),e=ae.getTangentAt(Si(i)),n=e.z,s=-e.x;return n*-t.x+s*-t.z>=0?1:-1}function Er(i,t=new P){const e=ae.getPointAt(Si(i)),n=ae.getTangentAt(Si(i)),s=n.z,r=-n.x,o=Math.hypot(s,r)||1,a=-e.x,l=-e.z,c=s*a+r*l>=0?1:-1;return t.set(s/o*c,0,r/o*c)}function ys(i){const t=ae.getTangentAt(Si(i));return Math.atan2(-t.z,t.x)}function P_(i,t){let e=0,n=1/0;const s=new P;for(let r=0;r<900;r++){const o=r/900;ae.getPointAt(o,s);const a=(s.x-i)**2+(s.z-t)**2;a<n&&(n=a,e=o)}return e}function D_(i,{samples:t=900,threshold:e=-.06,pad:n=2.6}={}){const s=i.getLength(),r=[],o=new P;for(let c=0;c<=t;c++)i.getPointAt(c/t,o),r.push(te(o.x,o.z)<e);const a=[];let l=-1;for(let c=0;c<=t;c++)if(r[c]&&l<0&&(l=c),(!r[c]||c===t)&&l>=0){const h=r[c]?c:c-1;a.push([l/t,h/t]),l=-1}return a.map(([c,h])=>{const u=(c+h)/2,f=(h-c)/2;return{u0:u-f-n/s,u1:u+f+n/s,centre:u,half:f,width:(h-c)*s}})}const L_=[{id:"main",name:"主街 / High Street",width:4.4,surface:"asphalt",points:[[30.5,.5],[25,2.6],[18,4.6],[10,5.4],[2.5,4.6],[-4,2.8],[-10,1.6],[-17,1.2],[-23,.6],[-28,-1.6],[-32,-5.4],[-35,-10.5]]},{id:"north",name:"北巷 / North Lane",width:3.6,surface:"gravel",points:[[9.5,5.2],[8.2,1.5],[6.6,-4],[5,-11],[3.8,-18],[2.6,-24],[1.6,-30.5],[-.5,-33.5]]},{id:"south",name:"南巷 / South Lane",width:3.2,surface:"gravel",points:[[-2.5,3.2],[-5,7.5],[-6,12],[-4,16.5],[-1,19],[6,20],[13,19.5],[19,18],[22.5,17]]},{id:"westlane",name:"西岸农道 / West Lane",width:2.6,surface:"gravel",points:[[-23.5,.8],[-27,3.5],[-29.5,6.5],[-31,10],[-31.5,13.5]]},{id:"yard",name:"货场支路 / Yard Road",width:3.2,surface:"gravel",points:[[28.5,2.5],[30.5,6],[29.5,10.5],[26,14.5],[22.5,17]]},{id:"milllane",name:"磨坊巷 / Mill Lane",width:2.8,surface:"gravel",points:[[4.5,-5.5],[3.2,-9.5],[2.2,-13],[2,-16.5],[1,-19.5]]},{id:"millpath",name:"磨坊小径 / Mill Path",width:2.4,surface:"gravel",bridge:"timber",points:[[-8,1.6],[-8.8,-2.5],[-8.6,-6],[-8.6,-9],[-22.2,-7.5],[-23.5,-4],[-24,-.6],[-23.5,.8]]}],Ji=L_.map(i=>{const t=Zr(i.points,!1,.5),e=[];for(let n=0;n<=400;n++){const s=t.getPointAt(n/400);e.push(s.x,s.z)}return{...i,curve:t,samples:e,length:t.getLength()}});function Pr(i,t){let e=1/0;for(const n of Ji){const s=nl(i,t,n.samples);s<e&&(e=s)}return e}const Fo={x:-4.5,z:-15,yaw:.1},Ec=new P(42,0,0),Sn=P_(Ec.x,Ec.z),La=Sn+.028,Ia=Sn+.108,I_=ks((La+Ia)/2),pn={uStart:La,uEnd:Ia,curve:o_(ae,{uStart:La,uEnd:Ia,samples:110,offsetAt:i=>I_*(2.1+(10.6-2.1)*Cr(Math.min(1,i/.3)))})},Yi={u0:Sn-.062,u1:Sn+.062};function U_(){const i=[];function s(r,o,a){let l=1/0;for(const c of i){const h=Math.hypot(r-c.x,o-c.z)-c.r-a;h<l&&(l=h)}return l}return{placed:i,clashes(r,o,a){const l=[];return(r-a<Mt.minX+1.5||r+a>Mt.maxX-1.5)&&l.push("board-x"),(o-a<Mt.minZ+1.5||o+a>Mt.maxZ-1.5)&&l.push("board-z"),Cs(r,o)<6.6+a&&l.push("track"),kr(r,o)<7+a&&l.push("river"),Pr(r,o)<3.6+a*.4&&l.push("road"),s(r,o,a)<.9&&l.push("building"),l},isFree(r,o,a){return this.clashes(r,o,a).length===0},reserve(r,o,a){i.push({x:r,z:o,r:a})}}}const fi={woodBase:"#7c5230",woodBaseDark:"#5a3a20",woodRim:"#8a5c33",plaster:["#e8dcc4","#e0c9a6","#d8cfc0","#cfd8c8","#e6cfc0","#dcd3ae","#c9d3d6","#e9e2d5"],roofs:["#8c4a3a","#6d5346","#4f5a63","#7a6a54","#5d6b52","#8a5b45"],foliage:["#4c7a34","#5c8a3c","#3f6b2e","#6b9744","#547f38","#476f2f"],conifer:["#2f5230","#3a5f36","#27452a"]};function N_(i){p_(i.capabilities.getMaxAnisotropy());const t=n=>new Kf(n),e={};return e.terrain=t({map:m_(),vertexColors:!0,roughness:.98,metalness:0}),e.earth=t({map:yc("#7a6244"),roughness:1}),e.sand=t({map:yc("#b09a72"),roughness:1}),e.woodBase=t({map:Xi({base:fi.woodBase,dark:fi.woodBaseDark,planks:5,seed:3}),roughness:.72}),e.woodRim=t({map:Xi({base:fi.woodRim,dark:"#5d3a1e",planks:2,seed:9}),roughness:.6}),e.woodDark=t({map:Xi({base:"#5b3d24",dark:"#38220f",planks:3,seed:17}),roughness:.75}),e.sleeper=t({map:Xi({base:"#6b5238",dark:"#3d2c1a",planks:1,seed:23,grain:120}),roughness:.92}),e.plank=t({map:Xi({base:"#8b6a45",dark:"#54402a",planks:2,seed:29}),roughness:.85}),e.ballast=t({map:Sc(),roughness:1,color:12169894}),e.gravelRoad=t({map:Sc(),roughness:1,color:11050120}),e.asphaltRoad=t({map:g_(),roughness:.95,color:10131604}),e.rail=t({color:12896976,roughness:.36,metalness:.48,side:yn}),e.steel=t({color:9147290,roughness:.5,metalness:.45}),e.steelDark=t({color:4672852,roughness:.62,metalness:.35}),e.ironDark=t({color:3882820,roughness:.66,metalness:.3}),e.brass=t({color:11569978,roughness:.3,metalness:1}),e.copper=t({color:9071178,roughness:.45,metalness:.85}),e.plaque=t({map:T_(["MINIATURE RAILWAY TOWN","1 : 87  ·  桌面沙盘"],{}),roughness:.34,metalness:.9}),e.stone=t({map:No({}),roughness:.92}),e.stoneWarm=t({map:No({base:"#a89a84",dark:"#6f6552",seed:67}),roughness:.92}),e.brick=t({map:__({}),roughness:.9}),e.platform=t({map:No({base:"#b8b2a4",dark:"#8b8578",seed:73}),roughness:.9}),e.concrete=t({color:11117722,roughness:.95}),e.plaster=fi.plaster.map((n,s)=>t({map:v_(n,81+s),roughness:.88})),e.roofs=fi.roofs.map((n,s)=>t({map:x_(n,{seed:91+s,style:s%2?"slate":"tile"}),roughness:.82})),e.thatch=t({map:y_("#b99a5c"),roughness:.95}),e.timber=t({map:Xi({base:"#6f4d2e",dark:"#3f2a16",planks:1,seed:37}),roughness:.8}),e.trim=t({color:15920352,roughness:.6}),e.trimDark=t({color:4864556,roughness:.65}),e.glassDark=t({color:2832964,roughness:.18,metalness:.5,envMapIntensity:1.2}),e.glassWarm=t({color:3813408,emissive:new Ht(16757847),emissiveIntensity:0,roughness:.3,metalness:.1}),e.lampGlass=t({color:5260847,emissive:new Ht(16760938),emissiveIntensity:0,roughness:.25,transparent:!0,opacity:.92}),e.lampGlow=t({color:3814700,emissive:new Ht(16766874),emissiveIntensity:0,roughness:.4}),e.foliage=fi.foliage.map((n,s)=>t({color:n,roughness:.92,flatShading:!0,emissive:new Ht(n),emissiveIntensity:0})),e.conifer=fi.conifer.map(n=>t({color:n,roughness:.92,flatShading:!0})),e.trunk=t({color:5981235,roughness:.95,flatShading:!0}),e.hedge=t({color:4154673,roughness:.95,flatShading:!0}),e.crop=t({color:12624718,roughness:.95}),e.cropGreen=t({color:8231752,roughness:.95}),e.water=t({map:S_(),bumpMap:M_(),bumpScale:.22,color:16777215,roughness:.16,metalness:.2,transparent:!0,opacity:.9,envMapIntensity:1.1}),e.water.map.repeat.set(1,1),e.table=t({map:E_(),roughness:.9}),e.glowSprite=new Ya({map:wh(),color:16764554,transparent:!0,opacity:0,blending:ko,depthWrite:!1}),e.carriages=[t({color:8207154,roughness:.5,metalness:.15}),t({color:3099228,roughness:.5,metalness:.15})],e.locoBody=t({color:2573615,roughness:.45,metalness:.3}),e.locoBlack=t({color:2369066,roughness:.5,metalness:.4}),e.trainTrim=t({color:13214538,roughness:.35,metalness:.85}),e}function F_(i,t,e){const n=new He;n.name="board";const s=Mt.width,r=Mt.depth,o=Mt.deckBottom-Mt.baseBottom;e.add(new $(s,o,r),new $t().makeTranslation(0,(Mt.deckBottom+Mt.baseBottom)/2,0),t.woodDark,{density:.09});const a=Mt.deckTop-Mt.deckBottom,l=(Mt.deckTop+Mt.deckBottom)/2,c=Mt.rimOuterX-Mt.maxX,h=Mt.rimOuterZ-Mt.maxZ;e.add(new $(s,a,h),new $t().makeTranslation(0,l,-34.5),t.woodRim,{density:.1}),e.add(new $(s,a,h),new $t().makeTranslation(0,l,Mt.maxZ+h/2),t.woodRim,{density:.1}),e.add(new $(c,a,Mt.maxZ*2),new $t().makeTranslation(-50.5,l,0),t.woodRim,{density:.1}),e.add(new $(c,a,Mt.maxZ*2),new $t().makeTranslation(Mt.maxX+c/2,l,0),t.woodRim,{density:.1});const u=Mt.rimOuterX,f=Mt.rimOuterZ,d=Mt.rimHeight*.78,g=Mt.rimHeight-d,v=.32,m=(S,L,G,Z)=>{e.add(new $(S,d,L),new $t().makeTranslation(G,d/2,Z),t.woodRim,{density:.16}),e.add(new $(S-v*2,g,L-v*2),new $t().makeTranslation(G,d+g/2,Z),t.woodBase,{density:.16})},p=f-Mt.rimInnerZ,w=(f+Mt.rimInnerZ)/2,M=u-Mt.rimInnerX,x=(u+Mt.rimInnerX)/2;m(u*2,p,0,-w),m(u*2,p,0,w),m(M,Mt.rimInnerZ*2,-x,0),m(M,Mt.rimInnerZ*2,x,0);const R=new Xt(.95,1.15,.34,14);for(const S of[-1,1])for(const L of[-1,1])e.add(R,new $t().makeTranslation(S*(s/2-7),Mt.baseBottom-.17,L*(r/2-7)),t.woodDark,{density:.4,project:!1});const A=new $(19,4.4,.16);e.add(A,new $t().makeTranslation(0,-1.35,r/2+.06),t.plaque,{density:.05,project:!1,cast:!1});const C=new bi(310,250,1,1);C.rotateX(-Math.PI/2),C.translate(0,Mt.baseBottom-.33,0);const I=new ie(C,t.table);I.receiveShadow=!0,I.name="table",n.add(I);const E=e.build(n);return i.add(n),{group:n,meshes:E}}const O_=196,B_=132;function z_(){const i=Mt.maxX-Mt.minX,t=Mt.maxZ-Mt.minZ,e=new bi(i,t,O_,B_);e.rotateX(-Math.PI/2),e.translate((Mt.minX+Mt.maxX)/2,0,(Mt.minZ+Mt.maxZ)/2);const n=e.attributes.position,s=new Float32Array(n.count*3),r=f_(5);for(let o=0;o<n.count;o++){const a=n.getX(o),l=n.getZ(o),c=te(a,l);n.setY(o,c);const h=d_(r,a*.06+40,l*.06+40,3);let u=.88+h*.2,f=.9+h*.2,d=.86+h*.18;const g=Math.min(1,Math.max(0,(.15-c)/1.1));g>0&&(u=u*(1-g)+.72*g,f=f*(1-g)+.66*g,d=d*(1-g)+.5*g),s[o*3]=Math.min(1,u),s[o*3+1]=Math.min(1,f),s[o*3+2]=Math.min(1,d)}return e.setAttribute("color",new De(s,3)),e.computeVertexNormals(),Eh(e,.16),e}function k_(){const i=[],t=[],e=[],n=[{from:[Mt.minX,Mt.minZ],to:[Mt.maxX,Mt.minZ]},{from:[Mt.maxX,Mt.minZ],to:[Mt.maxX,Mt.maxZ]},{from:[Mt.maxX,Mt.maxZ],to:[Mt.minX,Mt.maxZ]},{from:[Mt.minX,Mt.maxZ],to:[Mt.minX,Mt.minZ]}];let s=0;for(const o of n){const a=Math.hypot(o.to[0]-o.from[0],o.to[1]-o.from[1]),l=Math.max(4,Math.round(a/.5)),c=[];for(let h=0;h<=l;h++){const u=h/l,f=o.from[0]+(o.to[0]-o.from[0])*u,d=o.from[1]+(o.to[1]-o.from[1])*u;c.push([f,d,te(f,d)])}for(let h=0;h<=l;h++){const[u,f,d]=c[h];i.push(u,d,f,u,Mt.earthBottom,f),t.push(h*.4,d*.4,h*.4,Mt.earthBottom*.4)}for(let h=0;h<l;h++){const u=s+h*2;e.push(u,u+1,u+2,u+1,u+3,u+2)}s+=(l+1)*2}const r=new Ae;return r.setAttribute("position",new se(i,3)),r.setAttribute("uv",new se(t,2)),r.setIndex(e),r.computeVertexNormals(),r}function H_(){const i=new P;let t=0,e=1;const n=r=>(el.getPointAt(r,i),i.x>Mt.minX+.2&&i.x<Mt.maxX-.2&&i.z>Mt.minZ+.2&&i.z<Mt.maxZ-.2),s=400;for(let r=0;r<=s;r++)if(n(r/s)){t=r/s;break}for(let r=s;r>=0;r--)if(n(r/s)){e=r/s;break}return[t,e]}function G_(i,t){const e=new He;e.name="terrain";const n=new ie(z_(),t.terrain);n.receiveShadow=!0,n.castShadow=!1,e.add(n);const s=new ie(k_(),t.earth);s.receiveShadow=!0,s.castShadow=!1,e.add(s);const[r,o]=H_(),a=new ie(ni(el,{profile:[[-3+.05,0],[0,.04],[vn.halfWidth-.05,0]],uStart:r,uEnd:o,samples:320,yBase:vn.bed+.02,uDensity:.05,vDensity:.05}),t.sand);a.receiveShadow=!0,e.add(a);const l=new bi(Mt.maxX-Mt.minX,Mt.maxZ-Mt.minZ,1,1);l.rotateX(-Math.PI/2),l.translate(0,vn.level,0),Eh(l,.085);const c=new ie(l,t.water);return c.receiveShadow=!0,c.name="water",e.add(c),i.add(e),{group:e,water:c}}const V_=[[-.075,Ee.railBase],[-.075,Ee.railTop],[.075,Ee.railTop],[.075,Ee.railBase]],W_=[[-3.25,0],[-2.35,Ee.ballastTop],[Ee.ballastTopHalf,Ee.ballastTop],[Ee.ballastBaseHalf,0]];function X_(i){const t=[];let e=0;for(const n of i)n.u0-e>.0015&&t.push([e,n.u0]),e=Math.max(e,n.u1);return 1-e>.0015&&t.push([e,1]),t}function Rh(i,t,e,{uStart:n=0,uEnd:s=1,gaps:r=[],length:o,ballast:a=!0,sleepers:l=!0,rails:c=!0}){const h=Math.abs(s-n);if(a)for(const[u,f]of X_(r)){const d=n+h*u,g=n+h*f;if(g-d<.0015)continue;const v=ni(e,{profile:W_,uStart:d,uEnd:g,samples:Math.max(3,Math.round((g-d)*o/2.2)),uDensity:.25,vDensity:.3});i.add(v,null,t.ballast,{density:.42,project:!1,cast:!1})}if(l){const u=Math.floor(o/Ee.sleeperSpacing),f=new $(Ee.sleeperWidth,Ee.sleeperHeight,Ee.sleeperLength);for(let d=0;d<u;d++){const g=d/u*h+n;if(g>s)break;const v=e.getPointAt(g%1),m=Math.atan2(-e.getTangentAt(g%1).z,e.getTangentAt(g%1).x),p=Gt({pos:[v.x,Ee.ballastTop+Ee.sleeperHeight/2,v.z],rotY:m});i.add(f,p,t.sleeper,{density:.8})}}if(c)for(const u of[-1,1]){const f=V_.map(([g,v])=>[g+u*Ee.gauge/2,v]),d=ni(e,{profile:f,uStart:n,uEnd:s,samples:Math.max(8,Math.round(h*o/.9)),closedProfile:!0,uDensity:.6,vDensity:.6});i.add(d,null,t.rail,{density:.8,project:!1,cast:!1})}}function Y_(i,t,e,n){const s=ae.getPointAt(n),r=ae.getTangentAt(n),o=Math.atan2(-r.z,r.x),a=Gt({pos:[s.x,0,s.z],rotY:o}),l=e.width+5.5,c=(u,f,d,g)=>i.add(u,a.clone().multiply(Gt(f)),d,g);c(new $(l,.46,4.6),{pos:[0,Ee.ballastTop-.23,0]},t.steelDark,{density:.45,cast:!1});for(const u of[-1,1]){c(new $(l,1.35,.26),{pos:[0,-.42,u*2.35]},t.steel,{density:.5}),c(new $(l,.2,.7),{pos:[0,-1.02,u*2.35]},t.steel,{density:.6});for(let f=1;f<9;f++){const d=-l/2+l*f/9;c(new $(.16,1.2,.36),{pos:[d,-.42,u*2.35]},t.steelDark,{density:.9})}for(let f=0;f<=6;f++){const d=-l/2+l*f/6;c(new $(.1,.85,.1),{pos:[d,.72,u*2.45]},t.steelDark,{density:.9})}c(new $(l,.09,.09),{pos:[0,1.1,u*2.45]},t.steelDark,{density:1.1}),c(new $(l,.07,.07),{pos:[0,.72,u*2.45]},t.steelDark,{density:1.1})}for(let u=0;u<7;u++){const f=-l/2+l*(u+.5)/7;c(new $(.12,.12,4.4),{pos:[f,-1.02,0]},t.steelDark,{density:1,cast:!1})}const h=te(s.x,s.z);for(const u of[-1,1]){const f=Ee.ballastTop-.46-(h-.6);c(new Xt(.8,1.15,f,10),{pos:[u*3.4,h-.6+f/2,0]},t.stone,{density:.5,project:!1})}}function q_(i,t,e,n){const s=ae.getPointAt(n),r=ae.getTangentAt(n),o=Math.atan2(-r.z,r.x),a=Gt({pos:[s.x,0,s.z],rotY:o}),l=e.width+5,c=5,h=Th({length:l,depth:c,baseY:-2.5,topY:-.02,span:7,rise:1.15,springY:-2.05});i.add(h,a,t.stone,{density:.3,project:!1});const u=(f,d,g,v)=>i.add(f,a.clone().multiply(Gt(d)),g,v);u(new $(l+.4,.44,c+.2),{pos:[0,Ee.ballastTop-.22,0]},t.stoneWarm,{density:.5});for(const f of[-1,1])u(new $(l+.5,.72,.38),{pos:[0,.45,f*(c/2-.19)]},t.stone,{density:.55})}function Z_(i,t){const e=pn.curve.getLength();Rh(i,t,pn.curve,{uStart:0,uEnd:1,length:e,ballast:!0,sleepers:!0,rails:!0});const n=pn.curve.getPointAt(1),s=pn.curve.getTangentAt(1),r=Math.atan2(-s.z,s.x),o=Gt({pos:[n.x,0,n.z],rotY:r}),a=(l,c,h,u)=>i.add(l,o.clone().multiply(Gt(c)),h,u);a(new $(.5,.7,3.2),{pos:[-.5,.75,0]},t.ironDark,{density:.7}),a(new $(1,.3,1.4),{pos:[-1,.6,0]},t.ironDark,{density:.7})}function j_(i,t){ks(0);const e=12,n=[],s=new Xt(.11,.15,4.3,8);for(let r=0;r<e;r++){const o=(r/e+.012)%1,a=ae.getPointAt(o),l=ae.getTangentAt(o);let c=l.z,h=-l.x;const u=Math.hypot(c,h)||1;c/=u,h/=u;const f=-ks(o),d=5.4,g=a.x+c*f*d,v=a.z+h*f*d,m=Math.atan2(-l.z,l.x),p=Gt({pos:[g,0,v],rotY:m});i.add(s,p,t.timber,{density:.6,project:!1}),i.add(new $(.14,.14,1.6),p.clone().multiply(Gt({pos:[0,3.85,0]})),t.timber,{density:1}),i.add(new $(.14,.14,1.2),p.clone().multiply(Gt({pos:[0,3.35,0]})),t.timber,{density:1}),n.push([new P(g,3.95,v).add(new P(c*f,0,h*f).multiplyScalar(0)),m])}for(let r=0;r<n.length;r++){const o=n[r][0],a=n[(r+1)%n.length][0];if(!(o.distanceTo(a)>40))for(const l of[-.7,.7]){const c=a.clone().sub(o),h=new P(-c.z,0,c.x).normalize().multiplyScalar(l),u=o.clone().add(h),f=a.clone().add(h),d=u.clone().add(f).multiplyScalar(.5);d.y-=.55;const g=new Wr([u,d,f]),v=new $a(g,8,.035,3,!1);i.add(v,null,t.ironDark,{density:1,project:!1,cast:!1})}}}function K_(i,t){for(const[e,n]of[[pn.uStart-.02,1],[pn.uEnd+.02,-1]]){const s=ae.getPointAt((e+1)%1),r=ae.getTangentAt((e+1)%1),o=r.z,a=-r.x,l=Math.hypot(o,a)||1,c=-ks(e)*n,h=s.x+o/l*4.6*c,u=s.z+a/l*4.6*c,f=Gt({pos:[h,0,u],rotY:Math.atan2(-r.z,r.x)});i.add(new Xt(.1,.14,3.2,8),f,t.ironDark,{density:.5,project:!1}),i.add(new $(.12,.12,1.1),f.clone().multiply(Gt({pos:[0,2.7,c*.5]})),t.ironDark,{density:1})}}function J_(i,t,e){const n=new He;n.name="railway";const s=D_(ae,{samples:1200,threshold:-.05,pad:3.2}),r=s.map(o=>({u0:o.u0,u1:o.u1}));return Rh(e,t,ae,{uStart:0,uEnd:1,length:Jn,gaps:r,ballast:!0,sleepers:!0,rails:!0}),s.forEach((o,a)=>{a%2===0?Y_(e,t,o,o.centre):q_(e,t,o,o.centre)}),Z_(e,t),j_(e,t),K_(e,t),e.build(n),i.add(n),{spans:s,group:n}}const Fn=.095,Ua=5.2,Tc=-.05;function $_(i){const t=i/2;return[[-t,.02],[-t+.3,Fn],[t-.3,Fn],[t,.02]]}function On(i,t,e,n,s,r){const o=e.clone().multiply(Gt(n));i.add(t,o,s,r)}function bc(i,t){const e=[];let n=-1;for(let s=0;s<=i;s++){const r=t(s/i);r&&n<0&&(n=s),(!r||s===i)&&n>=0&&(e.push([n/i,(r?s:s-1)/i]),n=-1)}return e}function Q_(i){const t=i.slice().sort((n,s)=>n[0]-s[0]),e=[];for(const n of t){const s=e[e.length-1];s&&n[0]<=s[1]+1e-4?s[1]=Math.max(s[1],n[1]):e.push([n[0],n[1]])}return e}function tv(i,t,e,n,s){const r=(n+s)/2,o=e.curve.getPointAt(r),a=e.curve.getTangentAt(r),l=Math.atan2(-a.z,a.x),c=(s-n)*e.length,h=e.width+1.7,u=Gt({pos:[o.x,0,o.z],rotY:l});if(e.bridge==="timber"){ev(i,t,{base:u,span:c,width:h,p:o});return}const d=Th({length:c+.6,depth:h,baseY:-2.5,topY:0,span:5.6,rise:.95,springY:-1.55});i.add(d,u,t.stone,{density:.34}),On(i,new $(c+1.1,.34,h+.1),u,{pos:[0,Fn-.17,0]},t.stoneWarm,{density:.5});for(const g of[-1,1])On(i,new $(c+1.5,.8,.36),u,{pos:[0,.38,g*(h/2-.18)]},t.stone,{density:.55})}function ev(i,t,{base:e,span:n,width:s,p:r}){const o=te(r.x,r.z);On(i,new $(n+.4,.26,s),e,{pos:[0,Fn-.13,0]},t.plank,{density:.28});for(const a of[-1,1])for(const l of[-n*.22,n*.22]){const c=Fn-o;On(i,new $(.26,c,.26),e,{pos:[l,o+c/2,a*(s/2-.3)]},t.timber,{density:1.1})}for(const a of[-n*.22,n*.22])On(i,new $(.3,.24,s),e,{pos:[a,Fn-.5,0]},t.timber,{density:1});for(const a of[-1,1]){for(let l=0;l<=6;l++){const c=-n/2+n*l/6;On(i,new $(.12,1,.12),e,{pos:[c,Fn+.5,a*(s/2-.06)]},t.timber,{density:1.1})}On(i,new $(n+.2,.12,.12),e,{pos:[0,Fn+1,a*(s/2-.06)]},t.timber,{density:1}),On(i,new $(n+.2,.1,.1),e,{pos:[0,Fn+.55,a*(s/2-.06)]},t.timber,{density:1})}}function nv(i,t,e,n,s){const r=s+.9,o=e.clone().addScaledVector(n,-r/2),a=e.clone().addScaledVector(n,r/2),l=o.clone().add(a).multiplyScalar(.5),c=Zr([[o.x,o.z],[l.x,l.z],[a.x,a.z]],!1,.5),h=ni(c,{profile:[[-Ua,.09],[-3,.44],[-.78,.44],[.78,.44],[3,.44],[Ua,.09]],samples:10,uDensity:.3,vDensity:.55});i.add(h,null,t.plank,{density:.4,project:!1});const u=ni(c,{profile:[[-.78,.42],[.78,.42],[.78,.58],[-.78,.58]],samples:6,closedProfile:!0,uDensity:.6,vDensity:.6});i.add(u,null,t.plank,{density:.4,project:!1}),new P(n.z,0,-n.x).normalize();const f=Math.atan2(-n.z,n.x),d=Gt({pos:[e.x,0,e.z],rotY:f});for(const g of[-1,1])for(const v of[-1,1]){const m=g*(s/2+1),p=v*5.9,w=new Xt(.075,.09,1.25,8);On(i,w,d,{pos:[m,.63,p]},t.steelDark,{density:.6,project:!1});for(const M of[Math.PI/4,-Math.PI/4]){const x=new $(1.2,.18,.06),R=d.clone().multiply(Gt({pos:[m,1.18,p],rotY:Math.PI/2})).multiply(new $t().makeRotationZ(M));i.add(x,R,t.trim,{density:1.2,project:!1})}}}function iv(i,t,e){const n=new He;n.name="roads";const s=[],r=[];for(const o of Ji){const l=new P,c=o.length,h=[];for(const[v,m]of bc(700,p=>(o.curve.getPointAt(p,l),te(l.x,l.z)<Tc)))h.push({u0:v-2.6/c,u1:m+2.6/c,type:"river"});for(const[v,m]of bc(700,p=>(o.curve.getPointAt(p,l),Cs(l.x,l.z)<Ua)))h.push({u0:v-.5/c,u1:m+.5/c,type:"rail"});const u=Q_(h.map(v=>[Math.max(0,v.u0),Math.min(1,v.u1)])),f=[];let d=0;for(const[v,m]of u)v-d>.002&&f.push([d,v]),d=Math.max(d,m);1-d>.002&&f.push([d,1]);const g=o.surface==="asphalt"?t.asphaltRoad:t.gravelRoad;for(const[v,m]of f){const p=ni(o.curve,{profile:$_(o.width),uStart:v,uEnd:m,samples:Math.max(3,Math.round((m-v)*c/1.4)),uDensity:.22,vDensity:.22});e.add(p,null,g,{density:.3,project:!1,cast:!1})}for(const[v,m]of u){const p=(v+m)/2;if(o.curve.getPointAt(p,l),o.curve.getTangentAt(p),te(l.x,l.z)<Tc)tv(e,t,o,v,m),r.push({road:o.id,type:o.bridge==="timber"?"timber":"arch",x:+l.x.toFixed(1),z:+l.z.toFixed(1)});else{const M=sv(l.x,l.z);nv(e,t,M.point,M.tangent,o.width),s.push({road:o.id,x:+M.point.x.toFixed(1),z:+M.point.z.toFixed(1)})}}}return e.build(n),i.add(n),{crossings:s,bridges:r}}const Oo=new P;function sv(i,t){let e=0,n=1/0;for(let o=0;o<900;o++){const a=o/900;ae.getPointAt(a,Oo);const l=(Oo.x-i)**2+(Oo.z-t)**2;l<n&&(n=l,e=a)}const s=ae.getPointAt(e).clone(),r=ae.getTangentAt(e).clone();return{u:e,point:s,tangent:r}}const wc=new $(.98,1.16,.06),Ss=new $(.74,.96,.05);function rv(i,t,e){const n=U_(),s=new u_(20240517),r=[],o=new He;o.name="town";const a=(U,N,Y,B,y)=>e.add(N,U.clone().multiply(Gt(Y)),B,y);function l(U,{width:N,depth:Y,floors:B,floorHeight:y,baseY:D,litRatio:F,rng:W,columns:k,sillMat:rt=t.trim}){const X=k??Math.max(1,Math.round(N/1.8));for(let q=0;q<B;q++){const xt=D+q*y+y*.56;for(let b=0;b<X;b++){const _=X===1?0:-N/2+N/X*(b+.5);for(const z of[1,-1]){const ot=W.next()<F?t.glassWarm:t.glassDark;a(U,wc,{pos:[_,xt,z*(Y/2+.02)]},rt,{density:1,project:!1}),a(U,Ss,{pos:[_,xt,z*(Y/2+.045)]},ot,{density:1,project:!1,cast:!1})}}const Rt=Math.max(1,Math.round(Y/1.8));for(let b=0;b<Rt;b++){const _=Rt===1?0:-Y/2+Y/Rt*(b+.5);for(const z of[1,-1]){const ot=W.next()<F?t.glassWarm:t.glassDark;a(U,wc,{pos:[z*(N/2+.02),xt,_],rotY:Math.PI/2},rt,{density:1,project:!1}),a(U,Ss,{pos:[z*(N/2+.045),xt,_],rotY:Math.PI/2},ot,{density:1,project:!1,cast:!1})}}}}function c(U){const{x:N,z:Y,yaw:B=0,width:y=5.4,depth:D=4.8,floors:F=2,floorHeight:W=1.85,roof:k="gable",roofRise:rt=1.9,overhang:X=.45,roofAlongX:q=!1,wall:xt=t.plaster[0],roofMat:Rt=t.roofs[0],chimney:b=!0,dormer:_=!1,litRatio:z=.5,doorSide:j=0,bay:ot=!1,plinth:et=t.stone}=U,gt=Gt({pos:[N,te(N,Y),Y],rotY:B}),ft=F*W,Tt=.24;a(gt,new $(y+.5,.5,D+.5),{pos:[0,.12,0]},et,{density:.5}),a(gt,new $(y,ft,D),{pos:[0,Tt+ft/2,0]},xt,{density:.55});for(const _t of[-1,1])for(const Ft of[-1,1])a(gt,new $(.22,ft+.06,.22),{pos:[_t*y/2,Tt+ft/2,Ft*D/2]},t.trimDark,{density:1});const Ct=Tt+ft;if(k==="gable"){const _t=ui(y+X*2,D+X*2,rt);a(gt,_t,{pos:[0,Ct,0],rotY:q?Math.PI/2:0},Rt,{density:.75}),a(gt,new $(y+X*2+.1,.14,.3),{pos:[0,Ct+.02,(D+X*2)/2],rotY:q?Math.PI/2:0},t.trimDark,{density:1})}else if(k==="hip"){const _t=Mr(y+X*2,D+X*2,rt,q?.42:.1);a(gt,_t,{pos:[0,Ct,0],rotY:q?0:Math.PI/2},Rt,{density:.75})}else{a(gt,new $(y+X*2,.22,D+X*2),{pos:[0,Ct+.11,0]},Rt,{density:.8});for(const _t of[-1,1])a(gt,new $(y+X*2,.4,.18),{pos:[0,Ct+.36,_t*(D+X*2)/2]},t.stone,{density:.9}),a(gt,new $(.18,.4,D+X*2),{pos:[_t*(y+X*2)/2,Ct+.36,0]},t.stone,{density:.9})}if(b){const _t=y*(s.chance(.5)?.28:-.28);a(gt,new $(.72,1.5,.72),{pos:[_t,Ct+rt*.55,0]},t.brick,{density:1.1}),a(gt,new $(.86,.16,.86),{pos:[_t,Ct+rt*.55+.8,0]},t.stone,{density:1.4});for(const Ft of[-1,1])a(gt,new Xt(.09,.09,.3,8),{pos:[_t+Ft*.2,Ct+rt*.55+.95,0]},t.ironDark,{density:1.6,project:!1})}if(_){const Ft=Ct+rt*.34;a(gt,new $(1.5,1.1,1.3),{pos:[0,Ft+.2,D*.18]},xt,{density:.8});const Nt=ui(1.8,1.5,.6);a(gt,Nt,{pos:[0,Ft+.75,D*.18]},Rt,{density:1}),a(gt,Ss,{pos:[0,Ft+.3,D*.18+.68]},t.glassDark,{density:1,project:!1,cast:!1})}l(gt,{width:y,depth:D,floors:F,floorHeight:W,baseY:Tt,litRatio:z,rng:s,columns:Math.max(1,Math.round(y/1.9))});const ut=j*(y/4);return a(gt,new $(1.05,2,.12),{pos:[ut,Tt+1,D/2+.03]},t.trimDark,{density:1.2}),a(gt,new $(.85,1.85,.1),{pos:[ut,Tt+.95,D/2+.07]},t.timber,{density:1.4}),a(gt,new $(1.6,.16,.7),{pos:[ut,Tt+2.15,D/2+.3]},Rt,{density:1.2}),a(gt,new $(1.1,.14,.5),{pos:[ut,Tt+.08,D/2+.2]},t.stone,{density:1.4}),ot&&(a(gt,new $(1.6,1.3,.7),{pos:[-y/3,Tt+.85,D/2+.2]},xt,{density:1}),a(gt,Ss,{pos:[-y/3,Tt+.9,D/2+.56]},t.glassDark,{density:1,project:!1,cast:!1}),a(gt,new $(1.9,.12,.95),{pos:[-y/3,Tt+1.5,D/2+.28]},Rt,{density:1.2})),n.reserve(N,Y,Math.max(y,D)*.6),gt}function h(U,N,{height:Y=2.9,light:B=!1,y=0}={}){const D=Gt({pos:[U,te(U,N)+y,N]});a(D,new Xt(.22,.3,.3,10),{pos:[0,.15,0]},t.ironDark,{density:1,project:!1}),a(D,new Xt(.075,.1,Y,10),{pos:[0,Y/2+.25,0]},t.ironDark,{density:1,project:!1}),a(D,new zs(.2,12,10),{pos:[0,Y+.3,0]},t.lampGlass,{density:1,project:!1,cast:!1}),a(D,new Zi(.26,.28,10),{pos:[0,Y+.58,0]},t.ironDark,{density:1,project:!1}),r.push({position:new P(U,te(U,N)+y+Y+.3,N),light:B})}function u(U,{from:N=.1,to:Y=.9,count:B=5,offset:y=3.2,height:D=2.9,lightEvery:F=0}){for(let W=0;W<B;W++){const k=N+(W+.5)/B*(Y-N),rt=U.curve.getPointAt(k),X=U.curve.getTangentAt(k),q=Math.hypot(X.z,-X.x)||1;h(rt.x+X.z/q*y,rt.z-X.x/q*y,{height:D,light:F>0&&W%F===0})}}function f(U,N,Y=1,B=null){const y=te(U,N),D=s.range(0,Math.PI*2),F=Y*s.range(.85,1.25),W=B||(s.next()<.34?"conifer":"broadleaf"),k=(W==="conifer"?1:1.5)*F;if(e.add(new Xt(.09*F,.16*F,k,6),Gt({pos:[U,y+k/2,N],rotY:D}),t.trunk,{density:.8,project:!1}),W==="conifer"){const rt=t.conifer[s.int(0,t.conifer.length-1)];for(let X=0;X<3;X++){const q=(1.35-X*.3)*F,xt=(1.7-X*.28)*F,Rt=y+k*.7+X*.8*F+xt/2;e.add(new Zi(q,xt,7),Gt({pos:[U,Rt,N],rotY:D+X*.5}),rt,{density:.7,project:!1})}}else{const rt=t.foliage[s.int(0,t.foliage.length-1)],X=s.int(2,4);for(let q=0;q<X;q++){const xt=s.range(.8,1.2)*F,Rt=s.jitter(.6)*F,b=s.jitter(.6)*F,_=y+k+s.range(.35,1.05)*F;e.add(new zr(xt,0),Gt({pos:[U+Rt,_,N+b],rotY:s.range(0,6.28),scale:[1,s.range(.82,1.1),1]}),rt,{density:.6,project:!1})}}}function d(U,N,Y=1){const B=te(U,N),y=t.foliage[s.int(0,t.foliage.length-1)],D=s.range(.45,.75)*Y;e.add(new zr(D,0),Gt({pos:[U,B+D*.6,N],rotY:s.range(0,6.28),scale:[1,.75,1]}),y,{density:.6,project:!1})}function g(U,N,Y,B,y=.95,D=.7){const F=Math.hypot(Y-U,B-N);if(F<.4)return;const W=Math.atan2(-(B-N),Y-U),k=(U+Y)/2,rt=(N+B)/2,X=(te(U,N)+te(Y,B))/2,q=new $(F,y,D);v(q,.06),e.add(q,Gt({pos:[k,X+y/2,rt],rotY:W}),t.hedge,{density:1.1,project:!1})}function v(U,N){const Y=U.attributes.position;for(let B=0;B<Y.count;B++)Y.setX(B,Y.getX(B)+s.jitter(N)),Y.setY(B,Y.getY(B)+s.jitter(N)),Y.setZ(B,Y.getZ(B)+s.jitter(N));U.computeVertexNormals()}function m(U,N,Y,B,y=.85){const D=Math.hypot(Y-U,B-N);if(D<.6)return;const F=Math.atan2(-(B-N),Y-U),W=(U+Y)/2,k=(N+B)/2,rt=(te(U,N)+te(Y,B))/2,X=Gt({pos:[W,rt,k],rotY:F}),q=Math.max(2,Math.round(D/1.4));for(let xt=0;xt<=q;xt++){const Rt=-D/2+D*xt/q;a(X,new $(.1,y,.1),{pos:[Rt,y/2,0]},t.timber,{density:1.4})}for(const xt of[y*.45,y*.85])a(X,new $(D,.09,.06),{pos:[0,xt,0]},t.timber,{density:1.2})}function p(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y}),y=9.5,D=15,F=6.4;a(B,new $(y+.9,.7,D+.9),{pos:[0,.35,0]},t.stone,{density:.5}),a(B,new $(y,F,D),{pos:[0,.7+F/2,0]},t.stoneWarm,{density:.4});for(const X of[-1,1])for(let q=-2;q<=2;q++)a(B,new $(.7,F*.8,.9),{pos:[X*(y/2+.3),.7+F*.4,q*3.2]},t.stone,{density:.6});const W=ui(y+1,D+.8,2.4);a(B,W,{pos:[0,.7+F,0]},t.roofs[2],{density:.7});const k=11.5;a(B,new $(4.2,k,4.2),{pos:[0,.7+k/2,D/2+.2]},t.stone,{density:.45});for(const X of[-1,1])a(B,new $(.5,k*.9,.5),{pos:[X*2.35,.7+k*.45,D/2+.2+X*.1]},t.stoneWarm,{density:.7});for(const X of[-1,1])a(B,new $(1.5,2,.2),{pos:[X*.9,.7+k-1.6,D/2+2.4]},t.timber,{density:1});const rt=new Zi(3.05,6.2,8);a(B,rt,{pos:[0,.7+k+3.1,D/2+.2]},t.roofs[2],{density:.7}),a(B,new Xt(.06,.06,1.1,6),{pos:[0,.7+k+6.7,D/2+.2]},t.brass,{density:1,project:!1}),a(B,new $(.5,.12,.12),{pos:[0,.7+k+7.1,D/2+.2]},t.brass,{density:2,project:!1}),a(B,new $(2.2,3.2,.3),{pos:[0,2.3,D/2+2.35]},t.timber,{density:1}),a(B,new $(2.6,.4,.5),{pos:[0,4.05,D/2+2.5]},t.stone,{density:1.2});for(let X=-2;X<=2;X++)for(const q of[-1,1])a(B,new $(.16,2.6,1.1),{pos:[q*(y/2+.06),4.2,X*3.2],rotY:Math.PI/2},t.glassWarm,{density:1,project:!1,cast:!1}),a(B,new $(.2,.34,1.5),{pos:[q*(y/2+.05),2.7,X*3.2],rotY:Math.PI/2},t.stone,{density:1,project:!1});n.reserve(U,N,9)}function w(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y}),y=13,D=8.5,F=6.2;a(B,new $(y+.8,.6,D+.8),{pos:[0,.3,0]},t.stone,{density:.5}),a(B,new $(y,F,D),{pos:[0,.6+F/2,0]},t.plaster[5],{density:.5}),a(B,new $(y+.3,.4,D+.3),{pos:[0,.6+F-.2,0]},t.trim,{density:.8}),a(B,new $(y+.3,.35,D+.3),{pos:[0,.9,0]},t.trim,{density:.9});const W=Mr(y+1,D+1,2.3,.55);a(B,W,{pos:[0,.6+F,0]},t.roofs[3],{density:.75});for(const q of[-1,1])a(B,new Xt(.3,.34,3.4,12),{pos:[q*1.9,2.3,D/2+1]},t.stone,{density:.7,project:!1});a(B,new $(5,.5,2.4),{pos:[0,4.2,D/2+.9]},t.stone,{density:.7}),a(B,new $(5.6,.8,3),{pos:[0,4.7,D/2+.7]},t.roofs[3],{density:.9});for(let q=0;q<3;q++)a(B,new $(.5,3.4,.5),{pos:[0,2.3+q%2,5.4-q*.9]},t.stone,{density:.8});for(let q=0;q<3;q++)a(B,new $(5.4,.22,.9),{pos:[0,.11+q*.22,D/2+1.6-q*.85]},t.stone,{density:1});const k=9;a(B,new $(3.6,k,3.6),{pos:[0,.6+k/2,-D/2+.4]},t.plaster[5],{density:.5}),a(B,new $(4.1,.4,4.1),{pos:[0,.6+k,-D/2+.4]},t.trim,{density:.9});const rt=new Vr(.85,20);for(let q=0;q<4;q++){const xt=B.clone().multiply(Gt({pos:[0,.6+k-1.4,-D/2+.4],rotY:q*Math.PI/2})).multiply(Gt({pos:[0,0,1.83]}));e.add(rt,xt,t.trim,{density:.5,project:!1,cast:!1})}const X=Mr(4.6,4.6,1.9,.01);a(B,X,{pos:[0,.6+k+.2,-D/2+.4]},t.roofs[3],{density:.8}),a(B,new Xt(.07,.07,1.4,6),{pos:[0,.6+k+3.1,-D/2+.4]},t.brass,{density:1,project:!1}),l(B,{width:y,depth:D,floors:3,floorHeight:1.9,baseY:.6,litRatio:.7,rng:s,columns:4}),a(B,new $(2,3,.2),{pos:[0,2.1,D/2+.05]},t.timber,{density:1}),n.reserve(U,N,10)}function M(){const U=ae.getPointAt(Sn),N=Er(Sn),Y=ys(Sn),B=U.x+N.x*11.5,y=U.z+N.z*11.5,D=Gt({pos:[B,te(B,y),y],rotY:Y}),F=17,W=7.5,k=5.2;a(D,new $(F+.8,.55,W+.8),{pos:[0,.27,0]},t.stone,{density:.5}),a(D,new $(F,k,W),{pos:[0,.55+k/2,0]},t.plaster[2],{density:.5}),a(D,new $(F+.4,.45,W+.4),{pos:[0,.55+k-.2,0]},t.trim,{density:.8}),a(D,new $(F+.4,.4,W+.4),{pos:[0,.85,0]},t.trim,{density:.9});const rt=Mr(F+1.2,W+1.2,2,.62);a(D,rt,{pos:[0,.55+k,0]},t.roofs[1],{density:.75}),a(D,new $(1,1.6,1),{pos:[-F/2+1.5,.55+k+1.5,0]},t.brick,{density:1});for(const q of[-1,1])a(D,new $(.9,1.7,.22),{pos:[q*3.6,.55+k-1,-W/2-.05]},t.timber,{density:1,project:!1});l(D,{width:F,depth:W,floors:2,floorHeight:2.2,baseY:.55,litRatio:.75,rng:s,columns:5});const X=3.3;a(D,new $(F-2.5,.14,2.1),{pos:[0,X,-W/2-.95]},t.roofs[1],{density:1.1}),a(D,new $(F-2.4,.2,.16),{pos:[0,X-.06,-W/2-1.95]},t.trim,{density:1.2});for(let q=-2;q<=2;q++)a(D,new Xt(.075,.09,X,8),{pos:[q*3.2,X/2,-W/2-1.85]},t.ironDark,{density:1,project:!1}),a(D,new $(.14,.14,2),{pos:[q*3.2,X-.14,-W/2-.95]},t.ironDark,{density:1});for(const q of[-1,1])a(D,new $(1.1,2.3,.14),{pos:[q*(F/2-.9),1.75,-W/2-.03]},t.timber,{density:1.2});return n.reserve(B,y,11),{cx:B,cz:y,yaw:Y,base:D}}function x(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y}),y=11,D=6.5,F=4.1;a(B,new $(y+.6,.5,D+.6),{pos:[0,.25,0]},t.stone,{density:.5}),a(B,new $(y,F,D),{pos:[0,.5+F/2,0]},t.brick,{density:.6});const W=ui(y+.8,D+1.4,1.7);a(B,W,{pos:[0,.5+F,0]},t.roofs[2],{density:.8});for(const k of[-1,1])a(B,new $(2.6,3,.2),{pos:[k*3,1.9,-D/2-.06]},t.timber,{density:1.1}),a(B,new $(.3,3,.2),{pos:[k*3+k*1.25,1.9,-D/2-.07]},t.trim,{density:1.4});a(B,new $(2.4,.2,1.2),{pos:[0,3.3,-D/2-.6]},t.timber,{density:1}),n.reserve(U,N,8)}function R(U,N){const Y=te(U,N),B=Gt({pos:[U,Y,N]});a(B,new Xt(1.5,1.7,.4,14),{pos:[0,.2,0]},t.stone,{density:.7,project:!1});for(let D=0;D<4;D++){const F=D/4*Math.PI*2+Math.PI/4;a(B,new Xt(.13,.16,6.4,8),{pos:[Math.cos(F)*1.05,3.4,Math.sin(F)*1.05]},t.steel,{density:.9,project:!1})}for(const D of[2.2,4.6])for(let F=0;F<4;F++){const W=F/4*Math.PI*2+Math.PI/4,k=(F+1)/4*Math.PI*2+Math.PI/4,rt=Math.cos(W)*1.05,X=Math.sin(W)*1.05,q=Math.cos(k)*1.05,xt=Math.sin(k)*1.05,Rt=Math.hypot(q-rt,xt-X);a(B,new $(Rt,.1,.1),{pos:[(rt+q)/2,D,(X+xt)/2],rotY:Math.atan2(-(xt-X),q-rt)},t.steel,{density:1.2})}const y=new Xt(2,2,2.6,16);a(B,y,{pos:[0,7,0]},t.timber,{density:.7,project:!1}),a(B,new Xt(2.15,2.15,.2,16),{pos:[0,8.3,0]},t.steelDark,{density:.9,project:!1}),a(B,new Xt(.5,.5,2.7,12),{pos:[0,7,0]},t.ironDark,{density:.9,project:!1}),n.reserve(U,N,4)}function A(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y}),y=8,D=7,F=5.8;a(B,new $(y+.7,.5,D+.7),{pos:[0,.25,0]},t.stone,{density:.5}),a(B,new $(y,F,D),{pos:[0,.5+F/2,0]},t.plaster[3],{density:.5});const W=ui(y+.9,D+1.2,2.2);a(B,W,{pos:[0,.5+F,0]},t.thatch,{density:.7}),a(B,new $(.9,1.7,.9),{pos:[y*.3,.5+F+1.1,0]},t.brick,{density:1}),a(B,new $(3.4,.42,1.4),{pos:[-y/2-1.7,2.5,0]},t.timber,{density:1});for(const _ of[-1,1])a(B,new $(.16,2.5,.16),{pos:[-y/2-2.6,1.25,_*.6]},t.timber,{density:1.2});l(B,{width:y,depth:D,floors:2,floorHeight:2.4,baseY:.5,litRatio:.6,rng:s,columns:3});const k=-y/2-2.1,rt=Math.cos(Y),X=Math.sin(Y),q=new He;q.position.set(U+k*rt,te(U,N)+.1,N-k*X),q.rotation.y=Y;const xt=new He;q.add(xt);const Rt=new ie(new Ja(1.9,.2,8,22),t.timber);Rt.geometry.rotateY(Math.PI/2),Rt.castShadow=!0,xt.add(Rt);const b=new ie(new Xt(.28,.28,1.3,10),t.timber);b.geometry.rotateZ(Math.PI/2),b.castShadow=!0,xt.add(b);for(let _=0;_<8;_++){const z=_/8*Math.PI*2,j=new ie(new $(.16,3.6,.16),t.timber);j.rotation.x=z,j.castShadow=!0,xt.add(j);const ot=new ie(new $(1.15,.7,.1),t.timber);ot.position.set(0,Math.cos(z)*1.85,Math.sin(z)*1.85),ot.rotation.x=z,ot.castShadow=!0,xt.add(ot)}return o.add(q),n.reserve(U,N,9),{pivot:q,spin:xt}}function C(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y}),y=10,D=6.5,F=4.4;a(B,new $(y+.5,.4,D+.5),{pos:[0,.2,0]},t.stone,{density:.5}),a(B,new $(y,F,D),{pos:[0,.4+F/2,0]},t.timber,{density:.6});const W=ui(y+1,D+1.6,2.4);a(B,W,{pos:[0,.4+F,0]},t.thatch,{density:.7});for(const k of[-1,1])a(B,new $(3,3.2,.2),{pos:[k*2.6,2,-D/2-.07]},t.woodDark,{density:1});a(B,new $(1.6,.3,1),{pos:[0,4,-D/2-.5]},t.timber,{density:1.2}),n.reserve(U,N,7)}function I(U,N,Y){c({x:U,z:N,yaw:Y,width:9,depth:7,floors:1,floorHeight:4.4,roof:"flat",roofRise:0,overhang:.3,wall:t.brick,roofMat:t.roofs[2],chimney:!1,litRatio:.45})}function E(U,N,Y,B=0){const y=Gt({pos:[U,te(U,N)+B,N],rotY:Y});for(const D of[-1,1])a(y,new $(.14,.42,.6),{pos:[D*.7,.21,0]},t.ironDark,{density:1.2});a(y,new $(1.9,.12,.6),{pos:[0,.45,0]},t.timber,{density:1.2}),a(y,new $(1.9,.5,.1),{pos:[0,.78,-.28]},t.timber,{density:1.2})}function S(U,N){const Y=te(U,N),B=Gt({pos:[U,Y,N],rotY:s.range(0,6.28)});a(B,new Xt(.34,.3,.8,12),{pos:[0,.4,0]},t.timber,{density:1.3,project:!1});for(const y of[.2,.6])a(B,new Xt(.36,.36,.1,12),{pos:[0,y,0]},t.ironDark,{density:1.6,project:!1})}function L(U,N,Y=1){const B=te(U,N),y=Gt({pos:[U,B,N],rotY:s.range(0,6.28)});a(y,new $(.9*Y,.75*Y,.9*Y),{pos:[0,.38*Y,0]},t.timber,{density:1.4})}function G(U,N){const Y=te(U,N),B=Gt({pos:[U,Y,N],rotY:s.range(0,6.28)});a(B,new Xt(.9,1.1,1.4,10),{pos:[0,.7,0]},t.thatch,{density:1.1,project:!1}),a(B,new Zi(1.15,.9,10),{pos:[0,1.8,0]},t.thatch,{density:1.1,project:!1})}function Z(U,N){const Y=te(U,N),B=Gt({pos:[U,Y,N]});a(B,new Xt(2.2,2.4,.7,20),{pos:[0,.35,0]},t.stone,{density:.8,project:!1}),a(B,new Xt(1.9,1.9,.2,20),{pos:[0,.62,0]},t.water,{density:.6,project:!1}),a(B,new Xt(.45,.6,1.3,12),{pos:[0,1.2,0]},t.stoneWarm,{density:1,project:!1}),a(B,new Xt(.9,.2,.5,14),{pos:[0,2.05,0]},t.stoneWarm,{density:1,project:!1}),a(B,new zs(.28,12,10),{pos:[0,2.45,0]},t.stone,{density:1.4,project:!1}),n.reserve(U,N,3)}function st(U,N){const Y=te(U,N),B=Gt({pos:[U,Y,N]});a(B,new Xt(.85,.9,.9,14),{pos:[0,.45,0]},t.stone,{density:.9,project:!1});for(const D of[-1,1])a(B,new $(.14,2,.14),{pos:[D*.7,1.4,0]},t.timber,{density:1.2});const y=ui(2.4,2,.8);y.rotateY(Math.PI/2),e.add(y,B.clone().multiply(Gt({pos:[0,2.5,0]})),t.thatch,{density:1}),n.reserve(U,N,2)}function Q(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y});a(B,new Xt(.07,.09,2.4,8),{pos:[0,1.2,0]},t.timber,{density:1.6,project:!1}),a(B,new $(.1,.34,1.4),{pos:[0,2.3,.5]},t.trim,{density:1.6}),a(B,new $(.1,.34,1.1),{pos:[0,1.8,-.4]},t.trim,{density:1.6})}function nt(U,N,Y){const B=Gt({pos:[U,te(U,N),N],rotY:Y});a(B,new $(5.4,1.5,2),{pos:[0,1.85,0]},t.timber,{density:.9}),a(B,new $(5.6,.22,2.1),{pos:[0,1.1,0]},t.woodDark,{density:1.1});for(const y of[-1.9,1.9])for(const D of[-1,1]){const F=new Xt(.3,.3,.16,14);F.rotateX(Math.PI/2),a(B,F,{pos:[y,.72,D*.82]},t.ironDark,{density:1.2,project:!1})}}function at(){const U=ks(Sn),N=[[U*Ye.innerOffset,0],[U*Ye.innerOffset,Ye.height],[U*Ye.outerOffset,Ye.height],[U*Ye.outerOffset,0]],Y=ni(ae,{profile:N,uStart:Yi.u0,uEnd:Yi.u1,samples:90,uDensity:.22,vDensity:.4});e.add(Y,null,t.platform,{density:.42,project:!1});const B=N.map(([D,F])=>[D,F+(F>.5?.12:0)]),y=ni(ae,{profile:B,uStart:Yi.u0,uEnd:Yi.u1,samples:90,uDensity:.3,vDensity:.5});e.add(y,null,t.platform,{density:.5,project:!1});for(const D of[Yi.u0,Yi.u1]){const F=ae.getPointAt(D),W=Er(D),k=(Ye.innerOffset+Ye.outerOffset)/2;a(Gt({pos:[F.x+W.x*k,0,F.z+W.z*k],rotY:ys(D)}),new $(.5,Ye.height,Ye.outerOffset-Ye.innerOffset),{pos:[0,Ye.height/2,0]},t.platform,{density:.6})}}const tt=Ji.find(U=>U.id==="north"),vt=Ji.find(U=>U.id==="main"),bt=Ji.find(U=>U.id==="south"),Pt=Ji.find(U=>U.id==="yard");at(),M();const Vt=pn.curve.getPointAt(1),Kt=Er(pn.uEnd);x(Vt.x+Kt.x*6.5,Vt.z+Kt.z*6.5,ys(pn.uEnd)),R(27,-10.5),I(20.5,22.5,.45),I(-2.5,-30,Math.PI+.06),h(27.5,-5.6,{light:!0}),h(27.5,5.2,{light:!0}),h(23.5,-.4,{light:!1});for(let U=-2;U<=2;U++){const N=Sn+U*.021,Y=ae.getPointAt(N),B=Er(N);h(Y.x+B.x*5.7,Y.z+B.z*5.7,{height:2.5,light:U===0||U===2,y:Ye.height}),U%2===0&&E(Y.x+B.x*4.6,Y.z+B.z*4.6,ys(N)+Math.PI/2,Ye.height)}w(15.5,12.5,Math.PI+.03),p(19.5,-14,.02),[[2.5,9.4],[8.6,9.9],[14.6,10.2]].forEach(([U,N],Y)=>{c({x:U,z:N,yaw:Math.PI-.03,width:5.6,depth:5,floors:Y===1?3:2,floorHeight:1.9,roof:"gable",roofAlongX:!0,roofRise:1.8,wall:t.plaster[(Y*2+1)%t.plaster.length],roofMat:t.roofs[Y%t.roofs.length],litRatio:.75,bay:Y===0,dormer:Y===1});const B=Gt({pos:[U,te(U,N),N],rotY:Math.PI-.03});a(B,new $(4.6,.25,1.6),{pos:[0,2.6,2.9]},t.trim,{density:1.2});for(let y=-1;y<=1;y++)a(B,new Xt(.06,.06,2.6,6),{pos:[y*2.2,1.3,3.5]},t.ironDark,{density:1.6,project:!1});a(B,Ss,{pos:[0,1.6,2.6]},t.glassWarm,{density:1,project:!1,cast:!1})}),c({x:22.5,z:3,yaw:.02,width:8.5,depth:6.2,floors:2,floorHeight:2.1,roof:"gable",roofAlongX:!0,wall:t.plaster[4],roofMat:t.roofs[0],litRatio:.8,bay:!0}),Z(11,6.6),u(vt,{from:.08,to:.95,count:7,offset:-3.4,height:3,lightEvery:2}),h(11,8.8,{light:!0}),h(15.5,9.2,{light:!0}),h(24.5,6.4,{light:!0}),Q(26.5,1.5,.6);const Qt=A(Fo.x,Fo.z,Fo.yaw);h(.2,-18.4,{height:2.6,light:!0}),C(-32,8,.5),G(-29,6),G(-30.5,8.8),G(-27.5,9.5),st(-34.5,3),m(-36,11,-36,17),m(-36,17,-30,17),c({x:-35.5,z:-6.5,yaw:-.4,width:6.2,depth:5.2,floors:2,floorHeight:1.9,roof:"gable",roofAlongX:!0,wall:t.plaster[1],roofMat:t.roofs[4],litRatio:.5,dormer:!0}),c({x:-36.5,z:.5,yaw:.25,width:5.4,depth:4.8,floors:1,floorHeight:2.1,roof:"hip",wall:t.plaster[7],roofMat:t.roofs[0],litRatio:.55});for(let U=0;U<7;U++){const N=-41+U*1.5,Y=5;for(let B=0;B<Y;B++){const y=-18+B*2;Cs(N,y)<6.5||e.add(new $(1.1,.34,1.75),Gt({pos:[N,te(N,y)+.15,y]}),B%2?t.crop:t.cropGreen,{density:.9})}}h(-25.5,1,{height:2.6,light:!0});function it(U,N){const{side:Y,from:B=.08,to:y=.94,gap:D=10.5,offset:F=7.2,jitter:W=1.2,floors:k=2,lit:rt=.5}=N,X=Math.max(1,Math.floor((y-B)*U.length/D));let q=0;for(let xt=0;xt<X;xt++){const Rt=B+(xt+.5)/X*(y-B),b=U.curve.getPointAt(Rt),_=U.curve.getTangentAt(Rt),z=Math.hypot(_.z,-_.x)||1,j=_.z/z,ot=-_.x/z,et=F+s.jitter(W),gt=b.x+j*et*Y,ft=b.z+ot*et*Y;if(!n.isFree(gt,ft,4.2))continue;const Tt=Math.atan2(-j*Y,-ot*Y)+s.jitter(.05);c({x:gt,z:ft,yaw:Tt,width:s.range(4.6,6.6),depth:s.range(4.2,5.6),floors:s.next()<.25?1:k,floorHeight:1.85,roof:s.chance(.7)?"gable":"hip",roofAlongX:s.chance(.5),roofRise:s.range(1.6,2.3),wall:t.plaster[s.int(0,t.plaster.length-1)],roofMat:t.roofs[s.int(0,t.roofs.length-1)],litRatio:rt,dormer:s.chance(.22),doorSide:s.chance(.5)?0:s.sign(),chimney:s.chance(.9)}),q++}return q}it(tt,{side:1,from:.2,to:.95,gap:11,offset:6.8,lit:.55}),it(tt,{side:-1,from:.3,to:.95,gap:13,offset:7.4,lit:.5}),it(vt,{side:1,from:.08,to:.42,gap:9.5,offset:6.6,lit:.6,floors:2}),it(vt,{side:-1,from:.5,to:.95,gap:12,offset:7.6,lit:.45}),it(bt,{side:1,from:.1,to:.45,gap:12,offset:7,lit:.5}),it(bt,{side:-1,from:.45,to:.8,gap:13,offset:7.2,lit:.5}),it(Pt,{side:1,from:.15,to:.9,gap:12,offset:6.4,lit:.55}),it(Pt,{side:-1,from:.2,to:.7,gap:14,offset:6.8,lit:.5});for(let U=0;U<5;U++){const N=-6+U*4.6+s.jitter(.6),Y=-29.5+s.jitter(1.6)+U%2*1.6;n.isFree(N,Y,4)&&c({x:N,z:Y,yaw:Math.PI+s.jitter(.2),width:s.range(4.4,5.6),depth:4.4,floors:s.chance(.5)?1:2,floorHeight:1.8,roof:"gable",roofAlongX:!0,wall:t.plaster[s.int(0,t.plaster.length-1)],roofMat:t.roofs[s.int(0,t.roofs.length-1)],litRatio:.45})}C(6,29.5,Math.PI+.1),m(-2,30.5,12,30.5),G(9,31);function ct(U,N,Y=null){let B=0,y=0;for(;B<U&&y<U*30;){y++;const D=s.range(Mt.minX+2,Mt.maxX-2),F=s.range(Mt.minZ+2,Mt.maxZ-2),W=Cs(D,F),k=kr(D,F),rt=Pr(D,F);W<5.6||k<5.4||rt<2.6||N(D,F,W,k,rt)&&n.isFree(D,F,1.7)&&(f(D,F,s.range(.85,1.35),Y),n.reserve(D,F,1.6),B++)}return B}ct(64,(U,N,Y,B)=>B<14),ct(34,(U,N)=>U<-26&&N<-24,"conifer"),ct(38,(U,N)=>N>25),ct(26,(U,N)=>U<-22&&N>0),ct(52,()=>!0);for(let U=0;U<4;U++)for(let N=0;N<4;N++){const Y=-33+U*2.6,B=10+N*2.6;Pr(Y,B)<2.4||f(Y,B,.8,"broadleaf")}for(let U=0;U<40;U++){const N=s.range(Mt.minX+2,Mt.maxX-2),Y=s.range(Mt.minZ+2,Mt.maxZ-2);Cs(N,Y)<5||kr(N,Y)<5.4||Pr(N,Y)<2.4||n.isFree(N,Y,1)&&(d(N,Y),n.reserve(N,Y,.9))}g(15,-8,24.5,-8),g(15,-8,15,-20),g(-6.5,-19,-1,-19),g(28,16.5,34,16.5);const St=pn.curve.getPointAt(1);return nt(St.x-5.5,St.z+1.6,ys(pn.uEnd)),L(St.x-3,St.z+4.2,1.1),L(St.x-2,St.z+5,.9),S(St.x-4.4,St.z+5.2),S(St.x-5.2,St.z+4.4),h(St.x-1.5,St.z+6.5,{height:2.6,light:!0}),c({x:6.5,z:-27.5,yaw:Math.PI-.5,width:5,depth:4.4,floors:2,floorHeight:1.75,roof:"gable",roofAlongX:!0,wall:t.plaster[6],roofMat:t.roofs[4],litRatio:.6,chimney:!0}),e.build(o),i.add(o),{group:o,lamps:r,planner:n,mill:Qt}}const ye={sunColor:16757355,sunIntensity:3.1,sunAzimuth:300,sunElevation:21,hemiSky:11059424,hemiGround:7035460,hemiIntensity:1,ambient:.3,fog:14129763,fogNear:340,fogFar:900,exposure:1.12,sky:{top:"#1d3f77",horizon:"#e8a15c",bottom:"#4a3524",sun:{azimuth:Ce.degToRad(300),elevation:Ce.degToRad(21),radius:150}}},$e={sunColor:11059438,sunIntensity:1.15,sunAzimuth:118,sunElevation:44,hemiSky:2834280,hemiGround:1514792,hemiIntensity:.95,ambient:.26,fog:923430,fogNear:300,fogFar:820,exposure:1.08,sky:{top:"#05080f",horizon:"#101d33",bottom:"#070a10",stars:900}};function ov(i,t){const e=Ce.degToRad(i),n=Ce.degToRad(t);return new P(Math.cos(n)*Math.sin(e),Math.sin(n),Math.cos(n)*Math.cos(e))}function av(i,t,e,n){const s=new Pa(t);s.compileEquirectangularShader();const r=Mc(ye.sky),o=Mc($e.sky),a=s.fromEquirectangular(r).texture,l=s.fromEquirectangular(o).texture;i.background=r,i.environment=a,i.fog=new Xa(ye.fog,ye.fogNear,ye.fogFar);const c=new id(ye.sunColor,ye.sunIntensity);c.castShadow=!0,c.shadow.mapSize.set(2048,2048);const h=78;c.shadow.camera.left=-h,c.shadow.camera.right=h,c.shadow.camera.top=h,c.shadow.camera.bottom=-h,c.shadow.camera.near=1,c.shadow.camera.far=420,c.shadow.bias=-6e-4,c.shadow.normalBias=.035,i.add(c),i.add(c.target);const u=new Qf(ye.hemiSky,ye.hemiGround,ye.hemiIntensity);i.add(u);const f=new sd(16777215,ye.ambient);i.add(f);const d=[],g=7;n.forEach((R,A)=>{if(R.light&&d.length<g){const C=new ed(16760435,0,17,2);C.position.copy(R.position),i.add(C),d.push(C)}});const v=[],m=e.glowSprite;for(const R of n){const A=new ih(m);A.position.copy(R.position),A.scale.set(5.2,5.2,5.2),A.visible=!1,i.add(A),v.push(A)}const p={mode:"day",blend:0,target:0},w=new Ht,M=new Ht;function x(R){const A=ov(Ce.lerp(ye.sunAzimuth,$e.sunAzimuth,R),Ce.lerp(ye.sunElevation,$e.sunElevation,R));c.position.copy(A.multiplyScalar(190)),c.target.position.set(0,0,0),w.setHex(ye.sunColor),M.setHex($e.sunColor),c.color.copy(w).lerp(M,R),c.intensity=Ce.lerp(ye.sunIntensity,$e.sunIntensity,R),w.setHex(ye.hemiSky),M.setHex($e.hemiSky),u.color.copy(w).lerp(M,R),w.setHex(ye.hemiGround),M.setHex($e.hemiGround),u.groundColor.copy(w).lerp(M,R),u.intensity=Ce.lerp(ye.hemiIntensity,$e.hemiIntensity,R),f.intensity=Ce.lerp(ye.ambient,$e.ambient,R),w.setHex(ye.fog),M.setHex($e.fog),i.fog.color.copy(w).lerp(M,R),i.fog.near=Ce.lerp(ye.fogNear,$e.fogNear,R),i.fog.far=Ce.lerp(ye.fogFar,$e.fogFar,R),t.toneMappingExposure=Ce.lerp(ye.exposure,$e.exposure,R);const C=R>.5;i.background!==(C?o:r)&&(i.background=C?o:r,i.environment=C?l:a),e.glassWarm.emissiveIntensity=Math.max(0,(R-.35)/.65)*1.4,e.lampGlass.emissiveIntensity=Math.max(0,(R-.3)/.7)*2.1,e.lampGlow.emissiveIntensity=0,m.opacity=Math.max(0,(R-.35)/.65)*.9;const I=R>.45;for(const E of v)E.visible=I;for(const E of d)E.intensity=I?14*((R-.45)/.55):0}return x(0),{sun:c,state:p,setMode(R){p.mode=R,p.target=R==="night"?1:0},get mode(){return p.mode},update(R){if(Math.abs(p.blend-p.target)<.001){p.blend!==p.target&&(p.blend=p.target,x(p.blend));return}const A=1.35,C=Math.sign(p.target-p.blend);p.blend=Ce.clamp(p.blend+C*A*R,0,1),(C>0&&p.blend>p.target||C<0&&p.blend<p.target)&&(p.blend=p.target),x(p.blend)}}}const Ch={loco:1.6,coach:2.6},il={loco:7.4,coach:7.6},lv=8.55,cv=2;function Ph(i,t,e,n=!1,s=null){const r=new Xt(i,i,t,18);r.rotateX(Math.PI/2);const o=new He,a=new ie(r,e);a.castShadow=!0,o.add(a);const l=new ie(new Xt(i*1.12,i*1.12,t*.22,18),e);if(l.geometry.rotateX(Math.PI/2),l.position.z=t*.62,o.add(l),n){const c=new ie(new Xt(.05,.05,.16,8),s);c.geometry.rotateX(Math.PI/2),c.position.set(0,i*.62,t*.85),o.add(c)}return o}function hv(i){const t=new He,e=(h,u,f,d=0)=>{const g=new ie(h,f);return g.position.set(u[0],u[1],u[2]),g.rotation.y=d,g.castShadow=!0,g.receiveShadow=!0,t.add(g),g};e(new $(7,.46,1.9),[0,.78,0],i.locoBlack),e(new $(6.4,.14,2.5),[-.2,1.02,0],i.locoBody);const n=new Xt(.62,.62,4.5,20);n.rotateZ(Math.PI/2),e(n,[.75,1.72,0],i.locoBody);const s=new Xt(.66,.66,.5,20);s.rotateZ(Math.PI/2),e(s,[3,1.72,0],i.locoBlack);const r=new ie(new Vr(.64,20),i.locoBlack);r.position.set(3.26,1.72,0),r.rotation.y=Math.PI/2,t.add(r),e(new Xt(.17,.24,.75,12),[2.5,2.5,0],i.locoBlack),e(new Xt(.26,.3,.18,12),[2.5,2.92,0],i.locoBlack);const o=new zs(.34,14,10);e(o,[.7,2.3,0],i.locoBody),e(new Xt(.12,.12,.3,8),[-.5,2.45,0],i.trainTrim),e(new $(2,1.5,2.05),[-2.5,2,0],i.locoBody),e(new $(2.35,.14,2.4),[-2.5,2.82,0],i.locoBlack);for(const h of[-1,1]){const u=new ie(new $(1,.6,.06),i.glassDark);u.position.set(-2.5,2.35,h*1.03),t.add(u);const f=new ie(new $(.06,.6,.8),i.glassDark);f.position.set(-1.53,2.35,h*.5),t.add(f)}for(const h of[-1,1]){const u=new Xt(.16,.2,.34,10);u.rotateZ(Math.PI/2),e(u,[3.6,.86,h*.55],i.steelDark)}e(new $(.5,.14,.14),[3.55,.7,0],i.ironDark);const a=[-1.9,-.1,1.7],l=[];for(const h of a)for(const u of[-1,1]){const f=Ph(.34,.18,i.ironDark,!0,i.rail);f.position.set(h,.34,u*.85),t.add(f),l.push(f)}const c=[];for(const h of[-1,1]){const u=new ie(new $(3.9,.1,.09),i.rail);u.castShadow=!0,t.add(u),c.push(u),u.userData.side=h}return{group:t,wheels:l,rods:c,wheelRadius:.34,crankRadius:.34*.62,axleMid:(a[0]+a[2])/2,length:il.loco,wheelBase:Ch.loco,chimneyLocal:new P(2.5,3,0)}}function Ac(i,t){const e=new He,n=i.carriages[t%i.carriages.length],s=(c,h,u)=>{const f=new ie(c,u);return f.position.set(h[0],h[1],h[2]),f.castShadow=!0,f.receiveShadow=!0,e.add(f),f};s(new $(7.4,.24,1.8),[0,.92,0],i.ironDark),s(new $(7.4,1.55,2.1),[0,1.82,0],n),s(new $(7.5,.16,2.14),[0,1.2,0],i.trainTrim),s(new $(7.5,.1,2.14),[0,2.52,0],i.trainTrim);const r=l_(2.28,7.6,.4);r.rotateY(Math.PI/2),s(r,[0,2.54,0],i.locoBlack);const o=[[!0,!1,!0,!0,!1],[!0,!0,!1,!0,!1]];for(const c of[-1,1]){for(let h=0;h<5;h++){const u=-2.9+h*1.45,f=o[t%2][h],d=new ie(new $(1,.8,.06),f?i.glassWarm:i.glassDark);d.position.set(u,1.95,c*1.055),e.add(d);const g=new ie(new $(1.14,.94,.04),i.trim);g.position.set(u,1.95,c*1.04),e.add(g)}for(const h of[-1,1]){const u=new ie(new $(.9,1.4,.06),i.trimDark);u.position.set(h*3.35,1.8,c*1.06),e.add(u)}}const a=[];for(const c of[-2.6,2.6]){const h=new ie(new $(2,.34,1.5),i.ironDark);h.position.set(c,.72,0),h.castShadow=!0,e.add(h);const u=[];for(const f of[c-.55,c+.55])for(const d of[-1,1]){const g=Ph(.3,.16,i.ironDark);g.position.set(f,.3,d*.82),e.add(g),u.push(g)}a.push(u)}for(const c of[-1,1])for(const h of[-1,1]){const u=new Xt(.15,.17,.3,10);u.rotateZ(Math.PI/2),s(u,[h*3.85,.86,c*.55],i.steelDark)}for(const c of[-1,1]){const h=new $(.4,.12,.12);s(h,[c*3.9,.72,0],i.ironDark)}const l=a.flat();return{group:e,wheels:l,wheelRadius:.3,length:il.coach,wheelBase:Ch.coach}}class uv{constructor(t,e){this.M=t,this.group=new He,this.group.name="train",e.add(this.group),this.loco=hv(t),this.coaches=[Ac(t,0),Ac(t,1)],this.cars=[this.loco,...this.coaches],this.cars.forEach(n=>this.group.add(n.group)),this.spacing=lv,this.trainLength=this.spacing*2+il.coach,this.stationArc=Sn*Jn,this.distance=0,this.wheelAngle=0,this.dwellTimer=0,this.speed=11,this.steam=this.createSteam(e),this.reset()}createSteam(t){const e=wh(),n=new Ya({map:e,color:14210252,transparent:!0,opacity:.5,depthWrite:!1}),s=[];for(let r=0;r<26;r++){const o=new ih(n.clone());o.visible=!1,o.scale.set(1.2,1.2,1.2),t.add(o),s.push({sprite:o,life:0,max:2.4,vel:new P})}return{puffs:s,timer:0,cursor:0}}reset(t){for(this.speed=t??this.speed,this.distance=this.stationArc+this.spacing-26,this.distance<0&&(this.distance+=Jn),this.nextStop=this.stationArc+this.spacing;this.nextStop<this.distance;)this.nextStop+=Jn;this.dwellTimer=0,this.wheelAngle=0,this.steam.puffs.forEach(e=>{e.life=0,e.sprite.visible=!1}),this.place()}get isDwelling(){return this.dwellTimer>0}update(t){if(this.dwellTimer>0){this.dwellTimer-=t,this.dwellTimer<0&&(this.dwellTimer=0),this.place(),this.updateSteam(t,!1);return}const e=this.speed*t;this.distance+=e,this.wheelAngle-=e/.34,this.distance>=this.nextStop&&(this.distance=this.nextStop,this.nextStop+=Jn,this.dwellTimer=cv),this.place(),this.updateSteam(t,!0)}place(){this.cars.forEach((r,o)=>{const l=(this.distance-o*this.spacing)/Jn%1,c=r.wheelBase/Jn,h=ae.getPointAt(((l+c)%1+1)%1),u=ae.getPointAt(((l-c)%1+1)%1),f=h.clone().add(u).multiplyScalar(.5),d=h.clone().sub(u).normalize();r.group.position.set(f.x,Ee.railTop,f.z),r.group.rotation.y=Math.atan2(-d.z,d.x),r.wheels.forEach(g=>{g.rotation.z=this.wheelAngle*(.34/r.wheelRadius)})});const t=this.loco.crankRadius,e=this.wheelAngle,n=this.loco.axleMid-t*Math.sin(e),s=.34+t*Math.cos(e);this.loco.rods.forEach(r=>{r.position.set(n,s,r.userData.side*.99)})}updateSteam(t,e){const{puffs:n}=this.steam;if(this.steam.timer-=t,e&&this.steam.timer<=0){this.steam.timer=.26;const r=n[this.steam.cursor];this.steam.cursor=(this.steam.cursor+1)%n.length;const o=this.loco.group.position,a=this.loco.group.rotation.y,l=this.loco.chimneyLocal,c=Math.cos(a),h=Math.sin(a);r.sprite.position.set(o.x+l.x*c+l.z*h,o.y+l.y,o.z-l.x*h+l.z*c),r.life=r.max,r.sprite.visible=!0,r.vel.set((Math.random()-.5)*.25,1.5,(Math.random()-.5)*.25)}for(const r of n){if(r.life<=0)continue;if(r.life-=t,r.life<=0){r.sprite.visible=!1;continue}const o=1-r.life/r.max;r.sprite.position.addScaledVector(r.vel,t),r.sprite.position.x+=Math.sin(o*6+r.max)*.2*t;const a=1.1+o*3.6;r.sprite.scale.set(a,a,a),r.sprite.material.opacity=.42*(1-o)*(1-o)}}}const fn={azimuth:40,elevation:34,distance:172,target:new P(0,.8,0)},Dr=11,fv=document.getElementById("scene"),Bo=document.getElementById("loading"),ln=new Wg({canvas:fv,antialias:!0,powerPreference:"high-performance"});ln.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ln.setSize(window.innerWidth,window.innerHeight,!1);ln.shadowMap.enabled=!0;ln.shadowMap.type=Dc;ln.toneMapping=Ic;ln.toneMappingExposure=1.02;const Vn=new df,Ei=new tn(30,window.innerWidth/window.innerHeight,1,2400);Dh();const Ve=new Yg(Ei,ln.domElement);Ve.enableDamping=!0;Ve.dampingFactor=.075;Ve.target.copy(fn.target);Ve.minDistance=38;Ve.maxDistance=430;Ve.minPolarAngle=Ce.degToRad(8);Ve.maxPolarAngle=Ce.degToRad(84);Ve.zoomSpeed=.85;Ve.rotateSpeed=.75;Ve.panSpeed=.7;Ve.update();function Dh(){const i=Ce.degToRad(fn.azimuth),t=Ce.degToRad(fn.elevation);Ei.position.set(fn.target.x+fn.distance*Math.cos(t)*Math.sin(i),fn.target.y+fn.distance*Math.sin(t),fn.target.z+fn.distance*Math.cos(t)*Math.cos(i)),Ei.lookAt(fn.target)}const An=N_(ln),Ws=new h_;F_(Vn,An,Ws);G_(Vn,An);const dv=J_(Vn,An,Ws),Rc=iv(Vn,An,Ws),Hr=rv(Vn,An,Ws),_i=new uv(An,Vn),sl=av(Vn,ln,An,Hr.lamps);console.info(`[diorama] triangles ${Math.round(Ws.triangles).toLocaleString()} · rail bridges ${dv.spans.length} · level crossings ${Rc.crossings.length} · road bridges ${Rc.bridges.length} · lamps ${Hr.lamps.length}`);const Te={paused:!1,speed:Dr,mode:"day"};_i.speed=Te.speed;const en={play:document.getElementById("btn-play"),reset:document.getElementById("btn-reset"),time:document.getElementById("btn-time"),speed:document.getElementById("speed"),speedVal:document.getElementById("speed-val"),status:document.getElementById("status-train"),note:document.getElementById("status-note")};function Xs(){en.play.textContent=Te.paused?"▶ 运行":"⏸ 暂停",en.time.textContent=Te.mode==="night"?"☀️ 切换到白天":"🌙 切换到夜晚",en.speedVal.textContent=Te.speed.toFixed(1)}function rl(i){Te.paused=i,Xs()}function ol(i){Te.mode=i,sl.setMode(i),Xs()}function al(){Te.paused=!1,Te.speed=Dr,en.speed.value=String(Dr),_i.reset(Dr),Dh(),Ve.target.copy(fn.target),Ve.update(),Xs()}en.play.addEventListener("click",()=>rl(!Te.paused));en.reset.addEventListener("click",al);en.time.addEventListener("click",()=>ol(Te.mode==="night"?"day":"night"));en.speed.addEventListener("input",()=>{Te.speed=Number(en.speed.value),_i.speed=Te.speed,Xs()});window.addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||(i.code==="Space"?(i.preventDefault(),rl(!Te.paused)):i.code==="KeyR"?al():i.code==="KeyN"&&ol(Te.mode==="night"?"day":"night"))});window.addEventListener("resize",()=>{Ei.aspect=window.innerWidth/window.innerHeight,Ei.updateProjectionMatrix(),ln.setSize(window.innerWidth,window.innerHeight,!1)});const pv=new od;let Ms=0,zo=0,Cc=!0;function Lh(){const i=Math.min(pv.getDelta(),.05);if(sl.update(i),Te.paused||(_i.update(i),Ms+=i*.035,An.water.map.offset.set(Ms*.35,Ms),An.water.bumpMap.offset.set(-Ms*.5,Ms*1.4),Hr.mill&&(Hr.mill.spin.rotation.x-=i*.95)),Ve.update(),ln.render(Vn,Ei),zo-=i,zo<=0){zo=.2;const t=Te.paused?"paused":_i.isDwelling?"dwell":"running",e=Te.paused?"已暂停":_i.isDwelling?"到站停靠":"运行中";en.status.textContent!==e&&(en.status.textContent=e,en.status.className=`pill ${t}`),en.note.textContent=Te.paused?"计时与车厢一并暂停":"车厢各自沿轨道行驶"}Cc&&(Cc=!1,Bo&&(Bo.classList.add("hidden"),setTimeout(()=>Bo.remove(),700))),requestAnimationFrame(Lh)}Xs();requestAnimationFrame(Lh);window.__diorama={scene:Vn,camera:Ei,renderer:ln,train:_i,state:Te,lighting:sl,controls:Ve,materials:An,trackCurve:ae,trackLength:Jn,setMode:ol,setPaused:rl,reset:al};
