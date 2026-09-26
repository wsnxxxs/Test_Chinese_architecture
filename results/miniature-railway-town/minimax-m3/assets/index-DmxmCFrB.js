(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="160",Wn={ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kc=0,Jr=1,Wc=2,Na=1,Oa=2,on=3,yn=0,Le=1,an=2,Mn=0,hi=1,$r=2,Qr=3,to=4,Xc=5,Un=100,Yc=101,qc=102,eo=103,no=104,Zc=200,Kc=201,jc=202,Jc=203,gr=204,_r=205,$c=206,Qc=207,tl=208,el=209,nl=210,il=211,sl=212,rl=213,ol=214,al=0,cl=1,ll=2,gs=3,ul=4,hl=5,dl=6,fl=7,Fa=0,pl=1,ml=2,Sn=0,gl=1,_l=2,xl=3,za=4,vl=5,Ml=6,Ba=300,fi=301,pi=302,xr=303,vr=304,Ts=306,Mr=1e3,qe=1001,Sr=1002,Ae=1003,io=1004,Is=1005,He=1006,Sl=1007,Pi=1008,En=1009,El=1010,yl=1011,Cr=1012,Ha=1013,xn=1014,vn=1015,Li=1016,Ga=1017,Va=1018,Nn=1020,Tl=1021,Ze=1023,wl=1024,bl=1025,On=1026,mi=1027,Al=1028,ka=1029,Rl=1030,Wa=1031,Xa=1033,Ns=33776,Os=33777,Fs=33778,zs=33779,so=35840,ro=35841,oo=35842,ao=35843,Ya=36196,co=37492,lo=37496,uo=37808,ho=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,xo=37815,vo=37816,Mo=37817,So=37818,Eo=37819,yo=37820,To=37821,Bs=36492,wo=36494,bo=36495,Cl=36283,Ao=36284,Ro=36285,Co=36286,qa=3e3,Fn=3001,Pl=3200,Ll=3201,Za=0,Dl=1,Ve="",me="srgb",hn="srgb-linear",Pr="display-p3",ws="display-p3-linear",_s="linear",Qt="srgb",xs="rec709",vs="p3",Yn=7680,Po=519,Ul=512,Il=513,Nl=514,Ka=515,Ol=516,Fl=517,zl=518,Bl=519,Lo=35044,Do="300 es",Er=1035,cn=2e3,Ms=2001;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,yr=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function Hs(i,t,e){return(1-e)*i+e*t}function Uo(i){return(i&i-1)===0&&i!==0}function Tr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gl={DEG2RAD:ps};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],v=s[1],x=s[4],S=s[7],C=s[2],A=s[5],b=s[8];return r[0]=a*_+o*v+c*C,r[3]=a*p+o*x+c*A,r[6]=a*d+o*S+c*b,r[1]=l*_+u*v+h*C,r[4]=l*p+u*x+h*A,r[7]=l*d+u*S+h*b,r[2]=f*_+m*v+g*C,r[5]=f*p+m*x+g*A,r[8]=f*d+m*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,m=l*r-a*c,g=e*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Xt;function ja(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vl(){const i=Ss("canvas");return i.style.display="block",i}const Io={};function bi(i){i in Io||(Io[i]=!0,console.warn(i))}const No=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oo=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[hn]:{transfer:_s,primaries:xs,toReference:i=>i,fromReference:i=>i},[me]:{transfer:Qt,primaries:xs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ws]:{transfer:_s,primaries:vs,toReference:i=>i.applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(No)},[Pr]:{transfer:Qt,primaries:vs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oo),fromReference:i=>i.applyMatrix3(No).convertLinearToSRGB()}},kl=new Set([hn,ws]),Jt={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Gi[t].toReference,s=Gi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gi[i].primaries},getTransfer:function(i){return i===Ve?_s:Gi[i].transfer}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class Ja{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=Ss("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wl=0;class $a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=_i(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ks(s[a].image)):r.push(ks(s[a]))}else r=ks(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Ne extends kn{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=qe,s=qe,r=He,a=Pi,o=Ze,c=En,l=Ne.DEFAULT_ANISOTROPY,u=Ve){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=_i(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fn?me:Ve),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ba)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case qe:t.x=t.x<0?0:1;break;case Sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case qe:t.y=t.y<0?0:1;break;case Sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?Fn:qa}set encoding(t){bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?me:Ve}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Ba;Ne.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(m+1)/2,C=(d+1)/2,A=(u+f)/4,b=(h+_)/4,O=(g+p)/4;return x>S&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=b/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=O/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=b/r,s=O/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fn?me:Ve),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qa extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==m||u!==g){let p=1-o;const d=c*f+l*m+u*g+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,d*v);p=Math.sin(p*A)/C,o=Math.sin(o*A)/C}const S=o*v;if(c=c*p+f*S,l=l*p+m*S,u=u*p+g*S,h=h*p+_*S,p===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-o*m,t[e+2]=l*g+u*m+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new P,Fo=new Hn;class Oi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vi.copy(n.boundingBox)),Vi.applyMatrix4(t.matrixWorld),this.union(Vi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),ki.subVectors(this.max,Ei),Zn.subVectors(t.a,Ei),Kn.subVectors(t.b,Ei),jn.subVectors(t.c,Ei),dn.subVectors(Kn,Zn),fn.subVectors(jn,Kn),Rn.subVectors(Zn,jn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!Xs(e,Zn,Kn,jn,ki)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,Zn,Kn,jn,ki))?!1:(Wi.crossVectors(dn,fn),e=[Wi.x,Wi.y,Wi.z],Xs(e,Zn,Kn,jn,ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tn=[new P,new P,new P,new P,new P,new P,new P,new P],ke=new P,Vi=new Oi,Zn=new P,Kn=new P,jn=new P,dn=new P,fn=new P,Rn=new P,Ei=new P,ki=new P,Wi=new P,Cn=new P;function Xs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=t.dot(Cn),l=e.dot(Cn),u=n.dot(Cn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Zl=new Oi,yi=new P,Ys=new P;class Lr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Ys)),this.expandByPoint(yi.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,qs=new P,Xi=new P,pn=new P,Zs=new P,Yi=new P,Ks=new P;class tc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qs.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xi),o=pn.dot(this.direction),c=-pn.dot(Xi),l=pn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qs).addScaledVector(Xi,f),m}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){Zs.subVectors(e,t),Yi.subVectors(n,t),Ks.crossVectors(Zs,Yi);let a=this.direction.dot(Ks),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);const c=o*this.direction.dot(Yi.crossVectors(pn,Yi));if(c<0)return null;const l=o*this.direction.dot(Zs.cross(pn));if(l<0||c+l>a)return null;const u=-o*pn.dot(Ks);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,a,o,c,l,u,h,f,m,g,_,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,m,g,_,p)}set(t,e,n,s,r,a,o,c,l,u,h,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,_=l*h;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,_=l*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kl,t,jl)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),mn.crossVectors(n,Ue),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),mn.crossVectors(n,Ue)),mn.normalize(),qi.crossVectors(Ue,mn),s[0]=mn.x,s[4]=qi.x,s[8]=Ue.x,s[1]=mn.y,s[5]=qi.y,s[9]=Ue.y,s[2]=mn.z,s[6]=qi.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],v=n[3],x=n[7],S=n[11],C=n[15],A=s[0],b=s[4],O=s[8],M=s[12],T=s[1],z=s[5],H=s[9],Y=s[13],D=s[2],I=s[6],V=s[10],Z=s[14],X=s[3],q=s[7],K=s[11],st=s[15];return r[0]=a*A+o*T+c*D+l*X,r[4]=a*b+o*z+c*I+l*q,r[8]=a*O+o*H+c*V+l*K,r[12]=a*M+o*Y+c*Z+l*st,r[1]=u*A+h*T+f*D+m*X,r[5]=u*b+h*z+f*I+m*q,r[9]=u*O+h*H+f*V+m*K,r[13]=u*M+h*Y+f*Z+m*st,r[2]=g*A+_*T+p*D+d*X,r[6]=g*b+_*z+p*I+d*q,r[10]=g*O+_*H+p*V+d*K,r[14]=g*M+_*Y+p*Z+d*st,r[3]=v*A+x*T+S*D+C*X,r[7]=v*b+x*z+S*I+C*q,r[11]=v*O+x*H+S*V+C*K,r[15]=v*M+x*Y+S*Z+C*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*m-n*c*m)+_*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*u-r*c*u)+p*(+e*l*h-e*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+d*(-s*o*u-e*c*h+e*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],v=h*p*l-_*f*l+_*c*m-o*p*m-h*c*d+o*f*d,x=g*f*l-u*p*l-g*c*m+a*p*m+u*c*d-a*f*d,S=u*_*l-g*h*l+g*o*m-a*_*m-u*o*d+a*h*d,C=g*h*c-u*_*c-g*o*f+a*_*f+u*o*p-a*h*p,A=e*v+n*x+s*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=v*b,t[1]=(_*f*r-h*p*r-_*s*m+n*p*m+h*s*d-n*f*d)*b,t[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*d+n*c*d)*b,t[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*m-n*c*m)*b,t[4]=x*b,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*d+e*f*d)*b,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*d-e*c*d)*b,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*m+e*c*m)*b,t[8]=S*b,t[9]=(g*h*r-u*_*r-g*n*m+e*_*m+u*n*d-e*h*d)*b,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*d+e*o*d)*b,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*m-e*o*m)*b,t[12]=C*b,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*p+e*h*p)*b,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*p-e*o*p)*b,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,m=r*u,g=r*h,_=a*u,p=a*h,d=o*h,v=c*l,x=c*u,S=c*h,C=n.x,A=n.y,b=n.z;return s[0]=(1-(_+d))*C,s[1]=(m+S)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(f+d))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+x)*b,s[9]=(p-v)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const a=Jn.set(s[4],s[5],s[6]).length(),o=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const l=1/r,u=1/a,h=1/o;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=h,We.elements[9]*=h,We.elements[10]*=h,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=cn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(o===cn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ms)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*l,m=(n+s)*u;let g,_;if(o===cn)g=(a+r)*h,_=-2*h;else if(o===Ms)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new P,We=new ue,Kl=new P(0,0,0),jl=new P(1,1,1),mn=new P,qi=new P,Ue=new P,zo=new ue,Bo=new Hn;class bs{constructor(t=0,e=0,n=0,s=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jl=0;const Ho=new P,$n=new Hn,nn=new ue,Zi=new P,Ti=new P,$l=new P,Ql=new Hn,Go=new P(1,0,0),Vo=new P(0,1,0),ko=new P(0,0,1),tu={type:"added"},eu={type:"removed"};class Se extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new P,e=new bs,n=new Hn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Go,t)}rotateY(t){return this.rotateOnAxis(Vo,t)}rotateZ(t){return this.rotateOnAxis(ko,t)}translateOnAxis(t,e){return Ho.copy(t).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Go,t)}translateY(t){return this.translateOnAxis(Vo,t)}translateZ(t){return this.translateOnAxis(ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ti,Zi,this.up):nn.lookAt(Zi,Ti,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(nn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,$l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new P(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new P,sn=new P,js=new P,rn=new P,Qn=new P,ti=new P,Wo=new P,Js=new P,$s=new P,Qs=new P;let Ki=!1;class Ye{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),sn.subVectors(n,e),js.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(sn),c=Xe.dot(js),l=sn.dot(sn),u=sn.dot(js),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),sn.subVectors(t,e),Xe.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Xe.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,n),ti.subVectors(r,n),Js.subVectors(t,n);const c=Qn.dot(Js),l=ti.dot(Js);if(c<=0&&l<=0)return e.copy(n);$s.subVectors(t,s);const u=Qn.dot($s),h=ti.dot($s);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Qn,a);Qs.subVectors(t,r);const m=Qn.dot(Qs),g=ti.dot(Qs);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ti,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Wo.subVectors(r,s),o=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(Wo,o);const d=1/(p+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function tr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Hl(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=tr(a,r,t+1/3),this.g=tr(a,r,t),this.b=tr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Jt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Me(Te.r*255,0,255))*65536+Math.round(Me(Te.g*255,0,255))*256+Math.round(Me(Te.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=me){Jt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(ji);const n=Hs(gn.h,ji.h,e),s=Hs(gn.s,ji.s,e),r=Hs(gn.l,ji.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Gt;Gt.NAMES=nc;let nu=0;class Fi extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=hi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=_r,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ic extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new P,Ji=new ct;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class sc extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rc extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let iu=0;const Be=new ue,er=new Se,ei=new P,Ie=new Oi,wi=new Oi,pe=new P;class Ce extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ja(t)?rc:sc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return er.lookAt(t),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ie.min,wi.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,wi.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(wi.min),Ie.expandByPoint(wi.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)pe.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(t,l),pe.add(ei)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<o;T++)l[T]=new P,u[T]=new P;const h=new P,f=new P,m=new P,g=new ct,_=new ct,p=new ct,d=new P,v=new P;function x(T,z,H){h.fromArray(s,T*3),f.fromArray(s,z*3),m.fromArray(s,H*3),g.fromArray(a,T*2),_.fromArray(a,z*2),p.fromArray(a,H*2),f.sub(h),m.sub(h),_.sub(g),p.sub(g);const Y=1/(_.x*p.y-p.x*_.y);isFinite(Y)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Y),v.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Y),l[T].add(d),l[z].add(d),l[H].add(d),u[T].add(v),u[z].add(v),u[H].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,z=S.length;T<z;++T){const H=S[T],Y=H.start,D=H.count;for(let I=Y,V=Y+D;I<V;I+=3)x(n[I+0],n[I+1],n[I+2])}const C=new P,A=new P,b=new P,O=new P;function M(T){b.fromArray(r,T*3),O.copy(b);const z=l[T];C.copy(z),C.sub(b.multiplyScalar(b.dot(z))).normalize(),A.crossVectors(O,z);const Y=A.dot(u[T])<0?-1:1;c[T*4]=C.x,c[T*4+1]=C.y,c[T*4+2]=C.z,c[T*4+3]=Y}for(let T=0,z=S.length;T<z;++T){const H=S[T],Y=H.start,D=H.count;for(let I=Y,V=Y+D;I<V;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new Oe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new ue,Pn=new tc,$i=new Lr,Yo=new P,ni=new P,ii=new P,si=new P,nr=new P,Qi=new P,ts=new ct,es=new ct,ns=new ct,qo=new P,Zo=new P,Ko=new P,is=new P,ss=new P;class rt extends Se{constructor(t=new Ce,e=new ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Qi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(nr.fromBufferAttribute(h,t),a?Qi.addScaledVector(nr,u):Qi.addScaledVector(nr.sub(e),u))}e.add(Qi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!($i.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere($i,Yo)===null||Pn.origin.distanceToSquared(Yo)>(t.far-t.near)**2))&&(Xo.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Xo),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,C=x;S<C;S+=3){const A=o.getX(S),b=o.getX(S+1),O=o.getX(S+2);s=rs(this,d,t,n,l,u,h,A,b,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);s=rs(this,a,t,n,l,u,h,v,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,C=x;S<C;S+=3){const A=S,b=S+1,O=S+2;s=rs(this,d,t,n,l,u,h,A,b,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=p,x=p+1,S=p+2;s=rs(this,a,t,n,l,u,h,v,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function su(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===yn,o),c===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:i}}function rs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ni),i.getVertexPosition(c,ii),i.getVertexPosition(l,si);const u=su(i,t,e,n,ni,ii,si,is);if(u){s&&(ts.fromBufferAttribute(s,o),es.fromBufferAttribute(s,c),ns.fromBufferAttribute(s,l),u.uv=Ye.getInterpolation(is,ni,ii,si,ts,es,ns,new ct)),r&&(ts.fromBufferAttribute(r,o),es.fromBufferAttribute(r,c),ns.fromBufferAttribute(r,l),u.uv1=Ye.getInterpolation(is,ni,ii,si,ts,es,ns,new ct),u.uv2=u.uv1),a&&(qo.fromBufferAttribute(a,o),Zo.fromBufferAttribute(a,c),Ko.fromBufferAttribute(a,l),u.normal=Ye.getInterpolation(is,ni,ii,si,qo,Zo,Ko,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};Ye.getNormal(ni,ii,si,h.normal),u.face=h}return u}class Ut extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(_,p,d,v,x,S,C,A,b,O,M){const T=S/b,z=C/O,H=S/2,Y=C/2,D=A/2,I=b+1,V=O+1;let Z=0,X=0;const q=new P;for(let K=0;K<V;K++){const st=K*z-Y;for(let ot=0;ot<I;ot++){const W=ot*T-H;q[_]=W*v,q[p]=st*x,q[d]=D,l.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[d]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(ot/b),h.push(1-K/O),Z+=1}}for(let K=0;K<O;K++)for(let st=0;st<b;st++){const ot=f+st+I*K,W=f+st+I*(K+1),j=f+(st+1)+I*(K+1),ht=f+(st+1)+I*K;c.push(ot,W,ht),c.push(W,j,ht),X+=6}o.addGroup(m,X,M),m+=X,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=gi(i[e]);for(const s in n)t[s]=n[s]}return t}function ru(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oc(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt.workingColorSpace}const ou={clone:gi,merge:be};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ac extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ge extends ac{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,oi=1;class lu extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(ri,oi,t,e);s.layers=this.layers,this.add(s);const r=new Ge(ri,oi,t,e);r.layers=this.layers,this.add(r);const a=new Ge(ri,oi,t,e);a.layers=this.layers,this.add(a);const o=new Ge(ri,oi,t,e);o.layers=this.layers,this.add(o);const c=new Ge(ri,oi,t,e);c.layers=this.layers,this.add(c);const l=new Ge(ri,oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Ne{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:fi,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uu extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?me:Ve),this.texture=new cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Mn});r.uniforms.tEquirect.value=e;const a=new rt(s,r),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=He),new lu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ir=new P,hu=new P,du=new Xt;class _n{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ir.subVectors(n,e).cross(hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||du.getNormalMatrix(t),s=this.coplanarPoint(ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Lr,os=new P;class Dr{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],v=s[13],x=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,p-m,S-d).normalize(),n[1].setComponents(c+r,f+l,p+m,S+d).normalize(),n[2].setComponents(c+a,f+u,p+g,S+v).normalize(),n[3].setComponents(c-a,f-u,p-g,S-v).normalize(),n[4].setComponents(c-o,f-h,p-_,S-x).normalize(),e===cn)n[5].setComponents(c+o,f+h,p+_,S+x).normalize();else if(e===Ms)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(os.x=s.normal.x>0?t.max.x:t.min.x,os.y=s.normal.y>0?t.max.y:t.min.y,os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fu(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,f=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];e?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class Tn extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const v=d*f-a;for(let x=0;x<l;x++){const S=x*h-r;g.push(S,-v,0),_.push(0,0,1),p.push(x/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const x=v+l*d,S=v+l*(d+1),C=v+1+l*(d+1),A=v+1+l*d;m.push(x,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}var pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mu=`#ifdef USE_ALPHAHASH
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
#endif`,gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mu=`#ifdef USE_AOMAP
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
#endif`,Su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Au=`#ifdef USE_IRIDESCENCE
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
#endif`,Ru=`#ifdef USE_BUMPMAP
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Yu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eh=`#ifdef USE_GRADIENTMAP
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
}`,nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ah=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dh=`PhysicalMaterial material;
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
#endif`,fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,ph=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mh=`#if defined( RE_IndirectDiffuse )
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
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ah=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ch=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ph=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oh=`#ifdef USE_NORMALMAP
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
#endif`,Fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$h=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
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
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,od=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ad=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
}`,Md=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sd=`#define DISTANCE
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
}`,Ed=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
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
}`,Rd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cd=`#define LAMBERT
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
}`,Pd=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ld=`#define MATCAP
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
}`,Dd=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ud=`#define NORMAL
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
}`,Id=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nd=`#define PHONG
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
}`,Od=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fd=`#define STANDARD
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
}`,zd=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bd=`#define TOON
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
}`,Hd=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gd=`uniform float size;
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
}`,Vd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Wd=`uniform vec3 color;
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
}`,Xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Yd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ht={alphahash_fragment:pu,alphahash_pars_fragment:mu,alphamap_fragment:gu,alphamap_pars_fragment:_u,alphatest_fragment:xu,alphatest_pars_fragment:vu,aomap_fragment:Mu,aomap_pars_fragment:Su,batching_pars_vertex:Eu,batching_vertex:yu,begin_vertex:Tu,beginnormal_vertex:wu,bsdfs:bu,iridescence_fragment:Au,bumpmap_pars_fragment:Ru,clipping_planes_fragment:Cu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Du,color_fragment:Uu,color_pars_fragment:Iu,color_pars_vertex:Nu,color_vertex:Ou,common:Fu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Bu,displacementmap_pars_vertex:Hu,displacementmap_vertex:Gu,emissivemap_fragment:Vu,emissivemap_pars_fragment:ku,colorspace_fragment:Wu,colorspace_pars_fragment:Xu,envmap_fragment:Yu,envmap_common_pars_fragment:qu,envmap_pars_fragment:Zu,envmap_pars_vertex:Ku,envmap_physical_pars_fragment:ah,envmap_vertex:ju,fog_vertex:Ju,fog_pars_vertex:$u,fog_fragment:Qu,fog_pars_fragment:th,gradientmap_pars_fragment:eh,lightmap_fragment:nh,lightmap_pars_fragment:ih,lights_lambert_fragment:sh,lights_lambert_pars_fragment:rh,lights_pars_begin:oh,lights_toon_fragment:ch,lights_toon_pars_fragment:lh,lights_phong_fragment:uh,lights_phong_pars_fragment:hh,lights_physical_fragment:dh,lights_physical_pars_fragment:fh,lights_fragment_begin:ph,lights_fragment_maps:mh,lights_fragment_end:gh,logdepthbuf_fragment:_h,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:Mh,map_fragment:Sh,map_pars_fragment:Eh,map_particle_fragment:yh,map_particle_pars_fragment:Th,metalnessmap_fragment:wh,metalnessmap_pars_fragment:bh,morphcolor_vertex:Ah,morphnormal_vertex:Rh,morphtarget_pars_vertex:Ch,morphtarget_vertex:Ph,normal_fragment_begin:Lh,normal_fragment_maps:Dh,normal_pars_fragment:Uh,normal_pars_vertex:Ih,normal_vertex:Nh,normalmap_pars_fragment:Oh,clearcoat_normal_fragment_begin:Fh,clearcoat_normal_fragment_maps:zh,clearcoat_pars_fragment:Bh,iridescence_pars_fragment:Hh,opaque_fragment:Gh,packing:Vh,premultiplied_alpha_fragment:kh,project_vertex:Wh,dithering_fragment:Xh,dithering_pars_fragment:Yh,roughnessmap_fragment:qh,roughnessmap_pars_fragment:Zh,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:jh,shadowmap_vertex:Jh,shadowmask_pars_fragment:$h,skinbase_vertex:Qh,skinning_pars_vertex:td,skinning_vertex:ed,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:sd,tonemapping_fragment:rd,tonemapping_pars_fragment:od,transmission_fragment:ad,transmission_pars_fragment:cd,uv_pars_fragment:ld,uv_pars_vertex:ud,uv_vertex:hd,worldpos_vertex:dd,background_vert:fd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:gd,cube_vert:_d,cube_frag:xd,depth_vert:vd,depth_frag:Md,distanceRGBA_vert:Sd,distanceRGBA_frag:Ed,equirect_vert:yd,equirect_frag:Td,linedashed_vert:wd,linedashed_frag:bd,meshbasic_vert:Ad,meshbasic_frag:Rd,meshlambert_vert:Cd,meshlambert_frag:Pd,meshmatcap_vert:Ld,meshmatcap_frag:Dd,meshnormal_vert:Ud,meshnormal_frag:Id,meshphong_vert:Nd,meshphong_frag:Od,meshphysical_vert:Fd,meshphysical_frag:zd,meshtoon_vert:Bd,meshtoon_frag:Hd,points_vert:Gd,points_frag:Vd,shadow_vert:kd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:Yd},at={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},je={basic:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:be([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:be([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:be([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:be([at.common,at.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:be([at.lights,at.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};je.physical={uniforms:be([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const as={r:0,b:0,g:0};function qd(i,t,e,n,s,r,a){const o=new Gt(0);let c=r===!0?0:1,l,u,h=null,f=0,m=null;function g(p,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),v=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ts)?(u===void 0&&(u=new rt(new Ut(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:gi(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Jt.getTransfer(x.colorSpace)!==Qt,(h!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rt(new Tn(2,2),new Gn({name:"BackgroundMaterial",uniforms:gi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,d){p.getRGB(as,oc(i)),n.buffers.color.setClear(as.r,as.g,as.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function Zd(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(D,I,V,Z,X){let q=!1;if(a){const K=_(Z,V,I);l!==K&&(l=K,m(l.object)),q=d(D,Z,V,X),q&&v(D,Z,V,X)}else{const K=I.wireframe===!0;(l.geometry!==Z.id||l.program!==V.id||l.wireframe!==K)&&(l.geometry=Z.id,l.program=V.id,l.wireframe=K,q=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,O(D,I,V,Z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,I,V){const Z=V.wireframe===!0;let X=o[D.id];X===void 0&&(X={},o[D.id]=X);let q=X[I.id];q===void 0&&(q={},X[I.id]=q);let K=q[Z];return K===void 0&&(K=p(f()),q[Z]=K),K}function p(D){const I=[],V=[],Z=[];for(let X=0;X<s;X++)I[X]=0,V[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:Z,object:D,attributes:{},index:null}}function d(D,I,V,Z){const X=l.attributes,q=I.attributes;let K=0;const st=V.getAttributes();for(const ot in st)if(st[ot].location>=0){const j=X[ot];let ht=q[ot];if(ht===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),j===void 0||j.attribute!==ht||ht&&j.data!==ht.data)return!0;K++}return l.attributesNum!==K||l.index!==Z}function v(D,I,V,Z){const X={},q=I.attributes;let K=0;const st=V.getAttributes();for(const ot in st)if(st[ot].location>=0){let j=q[ot];j===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ht={};ht.attribute=j,j&&j.data&&(ht.data=j.data),X[ot]=ht,K++}l.attributes=X,l.attributesNum=K,l.index=Z}function x(){const D=l.newAttributes;for(let I=0,V=D.length;I<V;I++)D[I]=0}function S(D){C(D,0)}function C(D,I){const V=l.newAttributes,Z=l.enabledAttributes,X=l.attributeDivisors;V[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),X[D]!==I&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),X[D]=I)}function A(){const D=l.newAttributes,I=l.enabledAttributes;for(let V=0,Z=I.length;V<Z;V++)I[V]!==D[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function b(D,I,V,Z,X,q,K){K===!0?i.vertexAttribIPointer(D,I,V,X,q):i.vertexAttribPointer(D,I,V,Z,X,q)}function O(D,I,V,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const X=Z.attributes,q=V.getAttributes(),K=I.defaultAttributeValues;for(const st in q){const ot=q[st];if(ot.location>=0){let W=X[st];if(W===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const j=W.normalized,ht=W.itemSize,Mt=e.get(W);if(Mt===void 0)continue;const xt=Mt.buffer,It=Mt.type,Nt=Mt.bytesPerElement,bt=n.isWebGL2===!0&&(It===i.INT||It===i.UNSIGNED_INT||W.gpuType===Ha);if(W.isInterleavedBufferAttribute){const Yt=W.data,F=Yt.stride,ve=W.offset;if(Yt.isInstancedInterleavedBuffer){for(let yt=0;yt<ot.locationSize;yt++)C(ot.location+yt,Yt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let yt=0;yt<ot.locationSize;yt++)S(ot.location+yt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let yt=0;yt<ot.locationSize;yt++)b(ot.location+yt,ht/ot.locationSize,It,j,F*Nt,(ve+ht/ot.locationSize*yt)*Nt,bt)}else{if(W.isInstancedBufferAttribute){for(let Yt=0;Yt<ot.locationSize;Yt++)C(ot.location+Yt,W.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Yt=0;Yt<ot.locationSize;Yt++)S(ot.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Yt=0;Yt<ot.locationSize;Yt++)b(ot.location+Yt,ht/ot.locationSize,It,j,ht*Nt,ht/ot.locationSize*Yt*Nt,bt)}}else if(K!==void 0){const j=K[st];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ot.location,j);break;case 3:i.vertexAttrib3fv(ot.location,j);break;case 4:i.vertexAttrib4fv(ot.location,j);break;default:i.vertexAttrib1fv(ot.location,j)}}}}A()}function M(){H();for(const D in o){const I=o[D];for(const V in I){const Z=I[V];for(const X in Z)g(Z[X].object),delete Z[X];delete I[V]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const I=o[D.id];for(const V in I){const Z=I[V];for(const X in Z)g(Z[X].object),delete Z[X];delete I[V]}delete o[D.id]}function z(D){for(const I in o){const V=o[I];if(V[D.id]===void 0)continue;const Z=V[D.id];for(const X in Z)g(Z[X].object),delete Z[X];delete V[D.id]}}function H(){Y(),u=!0,l!==c&&(l=c,m(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function Kd(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function jd(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=a||t.has("OES_texture_float"),C=x&&S,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function Jd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _n,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const v=r?0:n,x=v*4;let S=d.clippingState||null;c.value=S,S=u(g,f,x,m);for(let C=0;C!==x;++C)S[C]=e[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const d=m+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,S=m;x!==_;++x,S+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function $d(i){let t=new WeakMap;function e(a,o){return o===xr?a.mapping=fi:o===vr&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xr||o===vr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new uu(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uc extends ac{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,jo=[.125,.215,.35,.446,.526,.582],In=20,sr=new uc,Jo=new Gt;let rr=null,or=0,ar=0;const Dn=(1+Math.sqrt(5))/2,ai=1/Dn,$o=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Dn,ai),new P(0,Dn,-ai),new P(ai,0,Dn),new P(-ai,0,Dn),new P(Dn,ai,0),new P(-Dn,ai,0)];class Qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rr=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rr,or,ar),t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rr=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Li,format:Ze,colorSpace:hn,depthBuffer:!1},s=ta(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ta(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(r)),this._blurMaterial=tf(r,t,e)}return s}_compileMaterial(t){const e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,n,s){const o=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Sn,u.autoClear=!1;const m=new ic({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new rt(new Ut,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Jo),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const x=this._cubeSize;cs(s,v*x,d>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===fi||t.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=na()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$o[(s-1)%$o.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*In-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):In;p>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const d=[];let v=0;for(let b=0;b<In;++b){const O=b/_,M=Math.exp(-O*O/2);d.push(M),b===0?v+=M:b<p&&(v+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[s],C=3*S*(s>x-ci?s-x+ci:0),A=4*(this._cubeSize-S);cs(e,C,A,3*S,2*S),c.setRenderTarget(e),c.render(h,sr)}}function Qd(i){const t=[],e=[],n=[];let s=i;const r=i-ci+1+jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ci?c=jo[a-i+ci-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,O=A>2?0:-1,M=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];v.set(M,_*g*A),x.set(f,p*g*A);const T=[A,A,A,A,A,A];S.set(T,d*g*A)}const C=new Ce;C.setAttribute("position",new Oe(v,_)),C.setAttribute("uv",new Oe(x,p)),C.setAttribute("faceIndex",new Oe(S,d)),t.push(C),s>ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ta(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tf(i,t,e){const n=new Float32Array(In),s=new P(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ea(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function na(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ur(){return`

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
	`}function ef(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===xr||c===vr,u=c===fi||c===pi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Qo(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Qo(i));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function nf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sf(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],A=v[x+1],b=v[x+2];f.push(C,A,A,b,b,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,A=x+1,b=x+2;f.push(C,A,A,b,b,C)}}else return;const p=new(ja(f)?rc:sc)(f,1);p.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function rf(i,t,e,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*c),e.update(g,r,1)}function h(m,g,_){if(_===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*c,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];e.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function of(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function af(i,t){return i[0]-t[0]}function cf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function lf(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new _e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let I=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let T=u.attributes.position.count*M,z=1;T>t.maxTextureSize&&(z=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const H=new Float32Array(T*z*4*_),Y=new Qa(H,T,z,_);Y.type=vn,Y.needsUpdate=!0;const D=M*4;for(let V=0;V<_;V++){const Z=A[V],X=b[V],q=O[V],K=T*z*4*V;for(let st=0;st<Z.count;st++){const ot=st*D;x===!0&&(a.fromBufferAttribute(Z,st),H[K+ot+0]=a.x,H[K+ot+1]=a.y,H[K+ot+2]=a.z,H[K+ot+3]=0),S===!0&&(a.fromBufferAttribute(X,st),H[K+ot+4]=a.x,H[K+ot+5]=a.y,H[K+ot+6]=a.z,H[K+ot+7]=0),C===!0&&(a.fromBufferAttribute(q,st),H[K+ot+8]=a.x,H[K+ot+9]=a.y,H[K+ot+10]=a.z,H[K+ot+11]=q.itemSize===4?a.w:1)}}p={count:_,texture:Y,size:new ct(T,z)},r.set(u,p),u.addEventListener("dispose",I)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const v=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=f[S]}_.sort(cf);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(af);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const C=o[S],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+S)!==p[A]&&u.setAttribute("morphTarget"+S,p[A]),d&&u.getAttribute("morphNormal"+S)!==d[A]&&u.setAttribute("morphNormal"+S,d[A]),s[S]=b,v+=b):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function uf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class hc extends Ne{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:On,u!==On&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===On&&(n=xn),n===void 0&&u===mi&&(n=Nn),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dc=new Ne,fc=new hc(1,1);fc.compareFunction=Ka;const pc=new Qa,mc=new ql,gc=new cc,ia=[],sa=[],ra=new Float32Array(16),oa=new Float32Array(9),aa=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ia[s];if(r===void 0&&(r=new Float32Array(s),ia[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function As(i,t){let e=sa[t];e===void 0&&(e=new Int32Array(t),sa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function mf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;aa.set(n),i.uniformMatrix2fv(this.addr,!1,aa),de(e,n)}}function gf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;oa.set(n),i.uniformMatrix3fv(this.addr,!1,oa),de(e,n)}}function _f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(he(e,n))return;ra.set(n),i.uniformMatrix4fv(this.addr,!1,ra),de(e,n)}}function xf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function Tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function bf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?fc:dc;e.setTexture2D(t||r,s)}function Af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mc,s)}function Rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gc,s)}function Cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pc,s)}function Pf(i){switch(i){case 5126:return hf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return vf;case 35668:case 35672:return Mf;case 35669:case 35673:return Sf;case 5125:return Ef;case 36294:return yf;case 36295:return Tf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}function Lf(i,t){i.uniform1fv(this.addr,t)}function Df(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Uf(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function If(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Nf(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Of(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ff(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zf(i,t){i.uniform1iv(this.addr,t)}function Bf(i,t){i.uniform2iv(this.addr,t)}function Hf(i,t){i.uniform3iv(this.addr,t)}function Gf(i,t){i.uniform4iv(this.addr,t)}function Vf(i,t){i.uniform1uiv(this.addr,t)}function kf(i,t){i.uniform2uiv(this.addr,t)}function Wf(i,t){i.uniform3uiv(this.addr,t)}function Xf(i,t){i.uniform4uiv(this.addr,t)}function Yf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||dc,r[a])}function qf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mc,r[a])}function Zf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gc,r[a])}function Kf(i,t,e){const n=this.cache,s=t.length,r=As(e,s);he(n,r)||(i.uniform1iv(this.addr,r),de(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pc,r[a])}function jf(i){switch(i){case 5126:return Lf;case 35664:return Df;case 35665:return Uf;case 35666:return If;case 35674:return Nf;case 35675:return Of;case 35676:return Ff;case 5124:case 35670:return zf;case 35667:case 35671:return Bf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return kf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Kf}}class Jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pf(e.type)}}class $f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jf(e.type)}}class Qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function ca(i,t){i.seq.push(t),i.map[t.id]=t}function tp(i,t,e){const n=i.name,s=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),a=cr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ca(e,l===void 0?new Jf(o,i,t):new $f(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Qf(o),ca(e,h)),e=h}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function la(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ep=37297;let np=0;function ip(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function sp(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===vs&&e===xs?n="LinearDisplayP3ToLinearSRGB":t===xs&&e===vs&&(n="LinearSRGBToLinearDisplayP3"),i){case hn:case ws:return[n,"LinearTransferOETF"];case me:case Pr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ua(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ip(i.getShaderSource(t),a)}else return s}function rp(i,t){const e=sp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function op(i,t){let e;switch(t){case gl:e="Linear";break;case _l:e="Reinhard";break;case xl:e="OptimizedCineon";break;case za:e="ACESFilmic";break;case Ml:e="AgX";break;case vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ap(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(li).join(`
`)}function lp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function up(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function li(i){return i!==""}function ha(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function da(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(i){return i.replace(hp,fp)}const dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fp(i,t){let e=Ht[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wr(e)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fa(i){return i.replace(pp,mp)}function mp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pa(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Na?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function _p(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fa:t="ENVMAP_BLENDING_MULTIPLY";break;case pl:t="ENVMAP_BLENDING_MIX";break;case ml:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=gp(e),l=_p(e),u=xp(e),h=vp(e),f=Mp(e),m=e.isWebGL2?"":ap(e),g=cp(e),_=lp(r),p=s.createProgram();let d,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(li).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(li).join(`
`),v.length>0&&(v+=`
`)):(d=[pa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),v=[m,pa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Sn?op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(li).join(`
`)),a=wr(a),a=ha(a,e),a=da(a,e),o=wr(o),o=ha(o,e),o=da(o,e),a=fa(a),o=fa(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=x+d+a,C=x+v+o,A=la(s,s.VERTEX_SHADER,S),b=la(s,s.FRAGMENT_SHADER,C);s.attachShader(p,A),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function O(H){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(A).trim(),I=s.getShaderInfoLog(b).trim();let V=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,b);else{const X=ua(s,A,"vertex"),q=ua(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+X+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(D===""||I==="")&&(Z=!1);Z&&(H.diagnostics={runnable:V,programLog:Y,vertexShader:{log:D,prefix:d},fragmentShader:{log:I,prefix:v}})}s.deleteShader(A),s.deleteShader(b),M=new ms(s,p),T=up(s,p)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,ep)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let Ep=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tp(t),e.set(t,n)),n}}class Tp{constructor(t){this.id=Ep++,this.code=t,this.usedTimes=0}}function wp(i,t,e,n,s,r,a){const o=new ec,c=new yp,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,z,H,Y){const D=H.fog,I=Y.geometry,V=M.isMeshStandardMaterial?H.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),X=Z&&Z.mapping===Ts?Z.image.height:null,q=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,st=K!==void 0?K.length:0;let ot=0;I.morphAttributes.position!==void 0&&(ot=1),I.morphAttributes.normal!==void 0&&(ot=2),I.morphAttributes.color!==void 0&&(ot=3);let W,j,ht,Mt;if(q){const re=je[q];W=re.vertexShader,j=re.fragmentShader}else W=M.vertexShader,j=M.fragmentShader,c.update(M),ht=c.getVertexShaderID(M),Mt=c.getFragmentShaderID(M);const xt=i.getRenderTarget(),It=Y.isInstancedMesh===!0,Nt=Y.isBatchedMesh===!0,bt=!!M.map,Yt=!!M.matcap,F=!!Z,ve=!!M.aoMap,yt=!!M.lightMap,Pt=!!M.bumpMap,gt=!!M.normalMap,$t=!!M.displacementMap,Ft=!!M.emissiveMap,w=!!M.metalnessMap,E=!!M.roughnessMap,N=M.anisotropy>0,tt=M.clearcoat>0,$=M.iridescence>0,et=M.sheen>0,_t=M.transmission>0,ut=N&&!!M.anisotropyMap,mt=tt&&!!M.clearcoatMap,wt=tt&&!!M.clearcoatNormalMap,zt=tt&&!!M.clearcoatRoughnessMap,J=$&&!!M.iridescenceMap,jt=$&&!!M.iridescenceThicknessMap,Vt=et&&!!M.sheenColorMap,Lt=et&&!!M.sheenRoughnessMap,Et=!!M.specularMap,dt=!!M.specularColorMap,R=!!M.specularIntensityMap,nt=_t&&!!M.transmissionMap,vt=_t&&!!M.thicknessMap,pt=!!M.gradientMap,Q=!!M.alphaMap,L=M.alphaTest>0,it=!!M.alphaHash,lt=!!M.extensions,At=!!I.attributes.uv1,Tt=!!I.attributes.uv2,qt=!!I.attributes.uv3;let Zt=Sn;return M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:j,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Nt,instancing:It,instancingColor:It&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:hn,map:bt,matcap:Yt,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:X,aoMap:ve,lightMap:yt,bumpMap:Pt,normalMap:gt,displacementMap:f&&$t,emissiveMap:Ft,normalMapObjectSpace:gt&&M.normalMapType===Dl,normalMapTangentSpace:gt&&M.normalMapType===Za,metalnessMap:w,roughnessMap:E,anisotropy:N,anisotropyMap:ut,clearcoat:tt,clearcoatMap:mt,clearcoatNormalMap:wt,clearcoatRoughnessMap:zt,iridescence:$,iridescenceMap:J,iridescenceThicknessMap:jt,sheen:et,sheenColorMap:Vt,sheenRoughnessMap:Lt,specularMap:Et,specularColorMap:dt,specularIntensityMap:R,transmission:_t,transmissionMap:nt,thicknessMap:vt,gradientMap:pt,opaque:M.transparent===!1&&M.blending===hi,alphaMap:Q,alphaTest:L,alphaHash:it,combine:M.combine,mapUv:bt&&_(M.map.channel),aoMapUv:ve&&_(M.aoMap.channel),lightMapUv:yt&&_(M.lightMap.channel),bumpMapUv:Pt&&_(M.bumpMap.channel),normalMapUv:gt&&_(M.normalMap.channel),displacementMapUv:$t&&_(M.displacementMap.channel),emissiveMapUv:Ft&&_(M.emissiveMap.channel),metalnessMapUv:w&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(M.sheenRoughnessMap.channel),specularMapUv:Et&&_(M.specularMap.channel),specularColorMapUv:dt&&_(M.specularColorMap.channel),specularIntensityMapUv:R&&_(M.specularIntensityMap.channel),transmissionMapUv:nt&&_(M.transmissionMap.channel),thicknessMapUv:vt&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:Tt,vertexUv3s:qt,pointsUvs:Y.isPoints===!0&&!!I.attributes.uv&&(bt||Q),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ot,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:lt&&M.extensions.derivatives===!0,extensionFragDepth:lt&&M.extensions.fragDepth===!0,extensionDrawBuffers:lt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(v(T,M),x(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const T=g[M.type];let z;if(T){const H=je[T];z=ou.clone(H.uniforms)}else z=M.uniforms;return z}function C(M,T){let z;for(let H=0,Y=l.length;H<Y;H++){const D=l[H];if(D.cacheKey===T){z=D,++z.usedTimes;break}}return z===void 0&&(z=new Sp(i,T,M,r),l.push(z)),z}function A(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:O}}function bp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ma(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ga(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,m,g,_,p){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function o(h,f,m,g,_,p){const d=a(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(h,f,m,g,_,p){const d=a(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||Ap),n.length>1&&n.sort(f||ma),s.length>1&&s.sort(f||ma)}function u(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Rp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ga,i.set(n,[a])):s>=r.length?(a=new ga,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Pp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lp=0;function Dp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Up(i,t){const e=new Cp,n=Pp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,a=new ue,o=new ue;function c(u,h){let f=0,m=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let _=0,p=0,d=0,v=0,x=0,S=0,C=0,A=0,b=0,O=0,M=0;u.sort(Dp);const T=h===!0?Math.PI:1;for(let H=0,Y=u.length;H<Y;H++){const D=u[H],I=D.color,V=D.intensity,Z=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*V*T,m+=I.g*V*T,g+=I.b*V*T;else if(D.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(D.sh.coefficients[q],V);M++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const K=D.shadow,st=n.get(D);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,s.directionalShadow[_]=st,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=D.shadow.matrix,S++}s.directional[_]=q,_++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(I).multiplyScalar(V*T),q.distance=Z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,s.spot[d]=q;const K=D.shadow;if(D.map&&(s.spotLightMap[b]=D.map,b++,K.updateMatrices(D),D.castShadow&&O++),s.spotLightMatrix[d]=K.matrix,D.castShadow){const st=n.get(D);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,s.spotShadow[d]=st,s.spotShadowMap[d]=X,A++}d++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(I).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),s.rectArea[v]=q,v++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*T),q.distance=D.distance,q.decay=D.decay,D.castShadow){const K=D.shadow,st=n.get(D);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,st.shadowCameraNear=K.camera.near,st.shadowCameraFar=K.camera.far,s.pointShadow[p]=st,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=D.shadow.matrix,C++}s.point[p]=q,p++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(V*T),q.groundColor.copy(D.groundColor).multiplyScalar(V*T),s.hemi[x]=q,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const z=s.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==d||z.rectAreaLength!==v||z.hemiLength!==x||z.numDirectionalShadows!==S||z.numPointShadows!==C||z.numSpotShadows!==A||z.numSpotMaps!==b||z.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=v,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+b-O,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=M,z.directionalLength=_,z.pointLength=p,z.spotLength=d,z.rectAreaLength=v,z.hemiLength=x,z.numDirectionalShadows=S,z.numPointShadows=C,z.numSpotShadows=A,z.numSpotMaps=b,z.numLightProbes=M,s.version=Lp++)}function l(u,h){let f=0,m=0,g=0,_=0,p=0;const d=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const S=u[v];if(S.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(S.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:s}}function _a(i,t){const e=new Up(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ip(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new _a(i,t),e.set(r,[c])):a>=o.length?(c=new _a(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Np extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
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
}`;function Bp(i,t,e){let n=new Dr;const s=new ct,r=new ct,a=new _e,o=new Np({depthPacking:Ll}),c=new Op,l={},u=e.maxTextureSize,h={[yn]:Le,[Le]:yn,[an]:an},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Fp,fragmentShader:zp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let d=this.type;this.render=function(A,b,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Mn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=d!==on&&this.type===on,D=d===on&&this.type!==on;for(let I=0,V=A.length;I<V;I++){const Z=A[I],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const q=X.getFrameExtents();if(s.multiply(q),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,X.mapSize.y=r.y)),X.map===null||Y===!0||D===!0){const st=this.type!==on?{minFilter:Ae,magFilter:Ae}:{};X.map!==null&&X.map.dispose(),X.map=new Bn(s.x,s.y,st),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const K=X.getViewportCount();for(let st=0;st<K;st++){const ot=X.getViewport(st);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),H.viewport(a),X.updateMatrices(Z,st),n=X.getFrustum(),S(b,O,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===on&&v(X,O),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,T,z)};function v(A,b){const O=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,O,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,O,m,_,null)}function x(A,b,O,M){let T=null;const z=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)T=z;else if(T=O.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=T.uuid,Y=b.uuid;let D=l[H];D===void 0&&(D={},l[H]=D);let I=D[Y];I===void 0&&(I=T.clone(),D[Y]=I,b.addEventListener("dispose",C)),T=I}if(T.visible=b.visible,T.wireframe=b.wireframe,M===on?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=i.properties.get(T);H.light=O}return T}function S(A,b,O,M,T){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===on)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const Y=t.update(A),D=A.material;if(Array.isArray(D)){const I=Y.groups;for(let V=0,Z=I.length;V<Z;V++){const X=I[V],q=D[X.materialIndex];if(q&&q.visible){const K=x(A,q,M,T);A.onBeforeShadow(i,A,b,O,Y,K,X),i.renderBufferDirect(O,null,Y,K,A,X),A.onAfterShadow(i,A,b,O,Y,K,X)}}}else if(D.visible){const I=x(A,D,M,T);A.onBeforeShadow(i,A,b,O,Y,I,null),i.renderBufferDirect(O,null,Y,I,A,null),A.onAfterShadow(i,A,b,O,Y,I,null)}}const H=A.children;for(let Y=0,D=H.length;Y<D;Y++)S(H[Y],b,O,M,T)}function C(A){A.target.removeEventListener("dispose",C);for(const O in l){const M=l[O],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Hp(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const it=new _e;let lt=null;const At=new _e(0,0,0,0);return{setMask:function(Tt){lt!==Tt&&!L&&(i.colorMask(Tt,Tt,Tt,Tt),lt=Tt)},setLocked:function(Tt){L=Tt},setClear:function(Tt,qt,Zt,ie,re){re===!0&&(Tt*=ie,qt*=ie,Zt*=ie),it.set(Tt,qt,Zt,ie),At.equals(it)===!1&&(i.clearColor(Tt,qt,Zt,ie),At.copy(it))},reset:function(){L=!1,lt=null,At.set(-1,0,0,0)}}}function r(){let L=!1,it=null,lt=null,At=null;return{setTest:function(Tt){Tt?Nt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Tt){it!==Tt&&!L&&(i.depthMask(Tt),it=Tt)},setFunc:function(Tt){if(lt!==Tt){switch(Tt){case al:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Tt}},setLocked:function(Tt){L=Tt},setClear:function(Tt){At!==Tt&&(i.clearDepth(Tt),At=Tt)},reset:function(){L=!1,it=null,lt=null,At=null}}}function a(){let L=!1,it=null,lt=null,At=null,Tt=null,qt=null,Zt=null,ie=null,re=null;return{setTest:function(Kt){L||(Kt?Nt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!L&&(i.stencilMask(Kt),it=Kt)},setFunc:function(Kt,ce,Ke){(lt!==Kt||At!==ce||Tt!==Ke)&&(i.stencilFunc(Kt,ce,Ke),lt=Kt,At=ce,Tt=Ke)},setOp:function(Kt,ce,Ke){(qt!==Kt||Zt!==ce||ie!==Ke)&&(i.stencilOp(Kt,ce,Ke),qt=Kt,Zt=ce,ie=Ke)},setLocked:function(Kt){L=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){L=!1,it=null,lt=null,At=null,Tt=null,qt=null,Zt=null,ie=null,re=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,x=null,S=null,C=null,A=null,b=null,O=null,M=new Gt(0,0,0),T=0,z=!1,H=null,Y=null,D=null,I=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=q>=2);let st=null,ot={};const W=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ht=new _e().fromArray(W),Mt=new _e().fromArray(j);function xt(L,it,lt,At){const Tt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(L,qt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<lt;Zt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(it,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(it+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return qt}const It={};It[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Nt(i.DEPTH_TEST),c.setFunc(gs),Ft(!1),w(Jr),Nt(i.CULL_FACE),gt(Mn);function Nt(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function bt(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Yt(L,it){return m[L]!==it?(i.bindFramebuffer(L,it),m[L]=it,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=it)),!0):!1}function F(L,it){let lt=_,At=!1;if(L)if(lt=g.get(it),lt===void 0&&(lt=[],g.set(it,lt)),L.isWebGLMultipleRenderTargets){const Tt=L.texture;if(lt.length!==Tt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Zt=Tt.length;qt<Zt;qt++)lt[qt]=i.COLOR_ATTACHMENT0+qt;lt.length=Tt.length,At=!0}}else lt[0]!==i.COLOR_ATTACHMENT0&&(lt[0]=i.COLOR_ATTACHMENT0,At=!0);else lt[0]!==i.BACK&&(lt[0]=i.BACK,At=!0);At&&(e.isWebGL2?i.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function ve(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const yt={[Un]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};if(n)yt[eo]=i.MIN,yt[no]=i.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(yt[eo]=L.MIN_EXT,yt[no]=L.MAX_EXT)}const Pt={[Zc]:i.ZERO,[Kc]:i.ONE,[jc]:i.SRC_COLOR,[gr]:i.SRC_ALPHA,[nl]:i.SRC_ALPHA_SATURATE,[tl]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Jc]:i.ONE_MINUS_SRC_COLOR,[_r]:i.ONE_MINUS_SRC_ALPHA,[el]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[il]:i.CONSTANT_COLOR,[sl]:i.ONE_MINUS_CONSTANT_COLOR,[rl]:i.CONSTANT_ALPHA,[ol]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(L,it,lt,At,Tt,qt,Zt,ie,re,Kt){if(L===Mn){d===!0&&(bt(i.BLEND),d=!1);return}if(d===!1&&(Nt(i.BLEND),d=!0),L!==Xc){if(L!==v||Kt!==z){if((x!==Un||A!==Un)&&(i.blendEquation(i.FUNC_ADD),x=Un,A=Un),Kt)switch(L){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.ONE,i.ONE);break;case Qr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,b=null,O=null,M.set(0,0,0),T=0,v=L,z=Kt}return}Tt=Tt||it,qt=qt||lt,Zt=Zt||At,(it!==x||Tt!==A)&&(i.blendEquationSeparate(yt[it],yt[Tt]),x=it,A=Tt),(lt!==S||At!==C||qt!==b||Zt!==O)&&(i.blendFuncSeparate(Pt[lt],Pt[At],Pt[qt],Pt[Zt]),S=lt,C=At,b=qt,O=Zt),(ie.equals(M)===!1||re!==T)&&(i.blendColor(ie.r,ie.g,ie.b,re),M.copy(ie),T=re),v=L,z=!1}function $t(L,it){L.side===an?bt(i.CULL_FACE):Nt(i.CULL_FACE);let lt=L.side===Le;it&&(lt=!lt),Ft(lt),L.blending===hi&&L.transparent===!1?gt(Mn):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Nt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){H!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),H=L)}function w(L){L!==kc?(Nt(i.CULL_FACE),L!==Y&&(L===Jr?i.cullFace(i.BACK):L===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),Y=L}function E(L){L!==D&&(X&&i.lineWidth(L),D=L)}function N(L,it,lt){L?(Nt(i.POLYGON_OFFSET_FILL),(I!==it||V!==lt)&&(i.polygonOffset(it,lt),I=it,V=lt)):bt(i.POLYGON_OFFSET_FILL)}function tt(L){L?Nt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function $(L){L===void 0&&(L=i.TEXTURE0+Z-1),st!==L&&(i.activeTexture(L),st=L)}function et(L,it,lt){lt===void 0&&(st===null?lt=i.TEXTURE0+Z-1:lt=st);let At=ot[lt];At===void 0&&(At={type:void 0,texture:void 0},ot[lt]=At),(At.type!==L||At.texture!==it)&&(st!==lt&&(i.activeTexture(lt),st=lt),i.bindTexture(L,it||It[L]),At.type=L,At.texture=it)}function _t(){const L=ot[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(L){ht.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function nt(L){Mt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Mt.copy(L))}function vt(L,it){let lt=h.get(it);lt===void 0&&(lt=new WeakMap,h.set(it,lt));let At=lt.get(L);At===void 0&&(At=i.getUniformBlockIndex(it,L.name),lt.set(L,At))}function pt(L,it){const At=h.get(it).get(L);u.get(it)!==At&&(i.uniformBlockBinding(it,At,L.__bindingPointIndex),u.set(it,At))}function Q(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},st=null,ot={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,x=null,S=null,C=null,A=null,b=null,O=null,M=new Gt(0,0,0),T=0,z=!1,H=null,Y=null,D=null,I=null,V=null,ht.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Nt,disable:bt,bindFramebuffer:Yt,drawBuffers:F,useProgram:ve,setBlending:gt,setMaterial:$t,setFlipSided:Ft,setCullFace:w,setLineWidth:E,setPolygonOffset:N,setScissorTest:tt,activeTexture:$,bindTexture:et,unbindTexture:_t,compressedTexImage2D:ut,compressedTexImage3D:mt,texImage2D:Et,texImage3D:dt,updateUBOMapping:vt,uniformBlockBinding:pt,texStorage2D:Vt,texStorage3D:Lt,texSubImage2D:wt,texSubImage3D:zt,compressedTexSubImage2D:J,compressedTexSubImage3D:jt,scissor:R,viewport:nt,reset:Q}}function Gp(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return m?new OffscreenCanvas(w,E):Ss("canvas")}function _(w,E,N,tt){let $=1;if((w.width>tt||w.height>tt)&&($=tt/Math.max(w.width,w.height)),$<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const et=E?Tr:Math.floor,_t=et($*w.width),ut=et($*w.height);h===void 0&&(h=g(_t,ut));const mt=N?g(_t,ut):h;return mt.width=_t,mt.height=ut,mt.getContext("2d").drawImage(w,0,0,_t,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_t+"x"+ut+")."),mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Uo(w.width)&&Uo(w.height)}function d(w){return o?!1:w.wrapS!==qe||w.wrapT!==qe||w.minFilter!==Ae&&w.minFilter!==He}function v(w,E){return w.generateMipmaps&&E&&w.minFilter!==Ae&&w.minFilter!==He}function x(w){i.generateMipmap(w)}function S(w,E,N,tt,$=!1){if(o===!1)return E;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let et=E;if(E===i.RED&&(N===i.FLOAT&&(et=i.R32F),N===i.HALF_FLOAT&&(et=i.R16F),N===i.UNSIGNED_BYTE&&(et=i.R8)),E===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(et=i.R8UI),N===i.UNSIGNED_SHORT&&(et=i.R16UI),N===i.UNSIGNED_INT&&(et=i.R32UI),N===i.BYTE&&(et=i.R8I),N===i.SHORT&&(et=i.R16I),N===i.INT&&(et=i.R32I)),E===i.RG&&(N===i.FLOAT&&(et=i.RG32F),N===i.HALF_FLOAT&&(et=i.RG16F),N===i.UNSIGNED_BYTE&&(et=i.RG8)),E===i.RGBA){const _t=$?_s:Jt.getTransfer(tt);N===i.FLOAT&&(et=i.RGBA32F),N===i.HALF_FLOAT&&(et=i.RGBA16F),N===i.UNSIGNED_BYTE&&(et=_t===Qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function C(w,E,N){return v(w,N)===!0||w.isFramebufferTexture&&w.minFilter!==Ae&&w.minFilter!==He?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function A(w){return w===Ae||w===io||w===Is?i.NEAREST:i.LINEAR}function b(w){const E=w.target;E.removeEventListener("dispose",b),M(E),E.isVideoTexture&&u.delete(E)}function O(w){const E=w.target;E.removeEventListener("dispose",O),z(E)}function M(w){const E=n.get(w);if(E.__webglInit===void 0)return;const N=w.source,tt=f.get(N);if(tt){const $=tt[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(w),Object.keys(tt).length===0&&f.delete(N)}n.remove(w)}function T(w){const E=n.get(w);i.deleteTexture(E.__webglTexture);const N=w.source,tt=f.get(N);delete tt[E.__cacheKey],a.memory.textures--}function z(w){const E=w.texture,N=n.get(w),tt=n.get(E);if(tt.__webglTexture!==void 0&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(N.__webglFramebuffer[$]))for(let et=0;et<N.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(N.__webglFramebuffer[$][et]);else i.deleteFramebuffer(N.__webglFramebuffer[$]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[$])}else{if(Array.isArray(N.__webglFramebuffer))for(let $=0;$<N.__webglFramebuffer.length;$++)i.deleteFramebuffer(N.__webglFramebuffer[$]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let $=0;$<N.__webglColorRenderbuffer.length;$++)N.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[$]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,et=E.length;$<et;$++){const _t=n.get(E[$]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(E[$])}n.remove(E),n.remove(w)}let H=0;function Y(){H=0}function D(){const w=H;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),H+=1,w}function I(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function V(w,E){const N=n.get(w);if(w.isVideoTexture&&$t(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const tt=w.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(N,w,E);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+E)}function Z(w,E){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ht(N,w,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+E)}function X(w,E){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ht(N,w,E);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+E)}function q(w,E){const N=n.get(w);if(w.version>0&&N.__version!==w.version){Mt(N,w,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+E)}const K={[Mr]:i.REPEAT,[qe]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},st={[Ae]:i.NEAREST,[io]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Sl]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},ot={[Ul]:i.NEVER,[Bl]:i.ALWAYS,[Il]:i.LESS,[Ka]:i.LEQUAL,[Nl]:i.EQUAL,[zl]:i.GEQUAL,[Ol]:i.GREATER,[Fl]:i.NOTEQUAL};function W(w,E,N){if(N?(i.texParameteri(w,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,K[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,st[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,st[E.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==qe||E.wrapT!==qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,A(E.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Ae&&E.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ot[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ae||E.minFilter!==Is&&E.minFilter!==Pi||E.type===vn&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Li&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(w,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function j(w,E){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",b));const tt=E.source;let $=f.get(tt);$===void 0&&($={},f.set(tt,$));const et=I(E);if(et!==w.__cacheKey){$[et]===void 0&&($[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[et].usedTimes++;const _t=$[w.__cacheKey];_t!==void 0&&($[w.__cacheKey].usedTimes--,_t.usedTimes===0&&T(E)),w.__cacheKey=et,w.__webglTexture=$[et].texture}return N}function ht(w,E,N){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);const $=j(w,E),et=E.source;e.bindTexture(tt,w.__webglTexture,i.TEXTURE0+N);const _t=n.get(et);if(et.version!==_t.__version||$===!0){e.activeTexture(i.TEXTURE0+N);const ut=Jt.getPrimaries(Jt.workingColorSpace),mt=E.colorSpace===Ve?null:Jt.getPrimaries(E.colorSpace),wt=E.colorSpace===Ve||ut===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const zt=d(E)&&p(E.image)===!1;let J=_(E.image,zt,!1,s.maxTextureSize);J=Ft(E,J);const jt=p(J)||o,Vt=r.convert(E.format,E.colorSpace);let Lt=r.convert(E.type),Et=S(E.internalFormat,Vt,Lt,E.colorSpace,E.isVideoTexture);W(tt,E,jt);let dt;const R=E.mipmaps,nt=o&&E.isVideoTexture!==!0&&Et!==Ya,vt=_t.__version===void 0||$===!0,pt=C(E,J,jt);if(E.isDepthTexture)Et=i.DEPTH_COMPONENT,o?E.type===vn?Et=i.DEPTH_COMPONENT32F:E.type===xn?Et=i.DEPTH_COMPONENT24:E.type===Nn?Et=i.DEPTH24_STENCIL8:Et=i.DEPTH_COMPONENT16:E.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===On&&Et===i.DEPTH_COMPONENT&&E.type!==Cr&&E.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=xn,Lt=r.convert(E.type)),E.format===mi&&Et===i.DEPTH_COMPONENT&&(Et=i.DEPTH_STENCIL,E.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Nn,Lt=r.convert(E.type))),vt&&(nt?e.texStorage2D(i.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,Vt,Lt,null));else if(E.isDataTexture)if(R.length>0&&jt){nt&&vt&&e.texStorage2D(i.TEXTURE_2D,pt,Et,R[0].width,R[0].height);for(let Q=0,L=R.length;Q<L;Q++)dt=R[Q],nt?e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,Vt,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,Q,Et,dt.width,dt.height,0,Vt,Lt,dt.data);E.generateMipmaps=!1}else nt?(vt&&e.texStorage2D(i.TEXTURE_2D,pt,Et,J.width,J.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Vt,Lt,J.data)):e.texImage2D(i.TEXTURE_2D,0,Et,J.width,J.height,0,Vt,Lt,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Et,R[0].width,R[0].height,J.depth);for(let Q=0,L=R.length;Q<L;Q++)dt=R[Q],E.format!==Ze?Vt!==null?nt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,J.depth,Vt,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Et,dt.width,dt.height,J.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,J.depth,Vt,Lt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Et,dt.width,dt.height,J.depth,0,Vt,Lt,dt.data)}else{nt&&vt&&e.texStorage2D(i.TEXTURE_2D,pt,Et,R[0].width,R[0].height);for(let Q=0,L=R.length;Q<L;Q++)dt=R[Q],E.format!==Ze?Vt!==null?nt?e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,Vt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Et,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,Vt,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,Q,Et,dt.width,dt.height,0,Vt,Lt,dt.data)}else if(E.isDataArrayTexture)nt?(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Et,J.width,J.height,J.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Vt,Lt,J.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,Vt,Lt,J.data);else if(E.isData3DTexture)nt?(vt&&e.texStorage3D(i.TEXTURE_3D,pt,Et,J.width,J.height,J.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Vt,Lt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,Vt,Lt,J.data);else if(E.isFramebufferTexture){if(vt)if(nt)e.texStorage2D(i.TEXTURE_2D,pt,Et,J.width,J.height);else{let Q=J.width,L=J.height;for(let it=0;it<pt;it++)e.texImage2D(i.TEXTURE_2D,it,Et,Q,L,0,Vt,Lt,null),Q>>=1,L>>=1}}else if(R.length>0&&jt){nt&&vt&&e.texStorage2D(i.TEXTURE_2D,pt,Et,R[0].width,R[0].height);for(let Q=0,L=R.length;Q<L;Q++)dt=R[Q],nt?e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Vt,Lt,dt):e.texImage2D(i.TEXTURE_2D,Q,Et,Vt,Lt,dt);E.generateMipmaps=!1}else nt?(vt&&e.texStorage2D(i.TEXTURE_2D,pt,Et,J.width,J.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt,Lt,J)):e.texImage2D(i.TEXTURE_2D,0,Et,Vt,Lt,J);v(E,jt)&&x(tt),_t.__version=et.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Mt(w,E,N){if(E.image.length!==6)return;const tt=j(w,E),$=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const et=n.get($);if($.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+N);const _t=Jt.getPrimaries(Jt.workingColorSpace),ut=E.colorSpace===Ve?null:Jt.getPrimaries(E.colorSpace),mt=E.colorSpace===Ve||_t===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,zt=E.image[0]&&E.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!wt&&!zt?J[Q]=_(E.image[Q],!1,!0,s.maxCubemapSize):J[Q]=zt?E.image[Q].image:E.image[Q],J[Q]=Ft(E,J[Q]);const jt=J[0],Vt=p(jt)||o,Lt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),dt=S(E.internalFormat,Lt,Et,E.colorSpace),R=o&&E.isVideoTexture!==!0,nt=et.__version===void 0||tt===!0;let vt=C(E,jt,Vt);W(i.TEXTURE_CUBE_MAP,E,Vt);let pt;if(wt){R&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,dt,jt.width,jt.height);for(let Q=0;Q<6;Q++){pt=J[Q].mipmaps;for(let L=0;L<pt.length;L++){const it=pt[L];E.format!==Ze?Lt!==null?R?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,it.width,it.height,Lt,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,dt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,0,0,it.width,it.height,Lt,Et,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L,dt,it.width,it.height,0,Lt,Et,it.data)}}}else{pt=E.mipmaps,R&&nt&&(pt.length>0&&vt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,dt,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(zt){R?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Lt,Et,J[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,dt,J[Q].width,J[Q].height,0,Lt,Et,J[Q].data);for(let L=0;L<pt.length;L++){const lt=pt[L].image[Q].image;R?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,lt.width,lt.height,Lt,Et,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,dt,lt.width,lt.height,0,Lt,Et,lt.data)}}else{R?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,Et,J[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,dt,Lt,Et,J[Q]);for(let L=0;L<pt.length;L++){const it=pt[L];R?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,0,0,Lt,Et,it.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,L+1,dt,Lt,Et,it.image[Q])}}}v(E,Vt)&&x(i.TEXTURE_CUBE_MAP),et.__version=$.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function xt(w,E,N,tt,$,et){const _t=r.convert(N.format,N.colorSpace),ut=r.convert(N.type),mt=S(N.internalFormat,_t,ut,N.colorSpace);if(!n.get(E).__hasExternalTextures){const zt=Math.max(1,E.width>>et),J=Math.max(1,E.height>>et);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,et,mt,zt,J,E.depth,0,_t,ut,null):e.texImage2D($,et,mt,zt,J,0,_t,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),gt(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,n.get(N).__webglTexture,0,Pt(E)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,n.get(N).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(w,E,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let tt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||gt(E)){const $=E.depthTexture;$&&$.isDepthTexture&&($.type===vn?tt=i.DEPTH_COMPONENT32F:$.type===xn&&(tt=i.DEPTH_COMPONENT24));const et=Pt(E);gt(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,tt,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,tt,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,tt,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const tt=Pt(E);N&&gt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,E.width,E.height):gt(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const tt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0;$<tt.length;$++){const et=tt[$],_t=r.convert(et.format,et.colorSpace),ut=r.convert(et.type),mt=S(et.internalFormat,_t,ut,et.colorSpace),wt=Pt(E);N&&gt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,mt,E.width,E.height):gt(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const tt=n.get(E.depthTexture).__webglTexture,$=Pt(E);if(E.depthTexture.format===On)gt(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(E.depthTexture.format===mi)gt(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function bt(w){const E=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Nt(E.__webglFramebuffer,w)}else if(N){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]=i.createRenderbuffer(),It(E.__webglDepthbuffer[tt],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),It(E.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(w,E,N){const tt=n.get(w);E!==void 0&&xt(tt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&bt(w)}function F(w){const E=w.texture,N=n.get(w),tt=n.get(E);w.addEventListener("dispose",O),w.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,a.memory.textures++);const $=w.isWebGLCubeRenderTarget===!0,et=w.isWebGLMultipleRenderTargets===!0,_t=p(w)||o;if($){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let mt=0;mt<E.mipmaps.length;mt++)N.__webglFramebuffer[ut][mt]=i.createFramebuffer()}else N.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)N.__webglFramebuffer[ut]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers){const ut=w.texture;for(let mt=0,wt=ut.length;mt<wt;mt++){const zt=n.get(ut[mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&gt(w)===!1){const ut=et?E:[E];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let mt=0;mt<ut.length;mt++){const wt=ut[mt];N.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[mt]);const zt=r.convert(wt.format,wt.colorSpace),J=r.convert(wt.type),jt=S(wt.internalFormat,zt,J,wt.colorSpace,w.isXRRenderTarget===!0),Vt=Pt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,jt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,N.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),It(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),W(i.TEXTURE_CUBE_MAP,E,_t);for(let ut=0;ut<6;ut++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)xt(N.__webglFramebuffer[ut][mt],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else xt(N.__webglFramebuffer[ut],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(E,_t)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const ut=w.texture;for(let mt=0,wt=ut.length;mt<wt;mt++){const zt=ut[mt],J=n.get(zt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),W(i.TEXTURE_2D,zt,_t),xt(N.__webglFramebuffer,w,zt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),v(zt,_t)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,tt.__webglTexture),W(ut,E,_t),o&&E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)xt(N.__webglFramebuffer[mt],w,E,i.COLOR_ATTACHMENT0,ut,mt);else xt(N.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,ut,0);v(E,_t)&&x(ut),e.unbindTexture()}w.depthBuffer&&bt(w)}function ve(w){const E=p(w)||o,N=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0,$=N.length;tt<$;tt++){const et=N[tt];if(v(et,E)){const _t=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ut=n.get(et).__webglTexture;e.bindTexture(_t,ut),x(_t),e.unbindTexture()}}}function yt(w){if(o&&w.samples>0&&gt(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],N=w.width,tt=w.height;let $=i.COLOR_BUFFER_BIT;const et=[],_t=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(w),mt=w.isWebGLMultipleRenderTargets===!0;if(mt)for(let wt=0;wt<E.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){et.push(i.COLOR_ATTACHMENT0+wt),w.depthBuffer&&et.push(_t);const zt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_t]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_t])),mt){const J=n.get(E[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,N,tt,0,0,N,tt,$,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let wt=0;wt<E.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]);const zt=n.get(E[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Pt(w){return Math.min(s.maxSamples,w.samples)}function gt(w){const E=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(w){const E=a.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function Ft(w,E){const N=w.colorSpace,tt=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Er||N!==hn&&N!==Ve&&(Jt.getTransfer(N)===Qt?o===!1?t.has("EXT_sRGB")===!0&&tt===Ze?(w.format=Er,w.minFilter=He,w.generateMipmaps=!1):E=Ja.sRGBToLinear(E):(tt!==Ze||$!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Yt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=gt}function Vp(i,t,e){const n=e.isWebGL2;function s(r,a=Ve){let o;const c=Jt.getTransfer(a);if(r===En)return i.UNSIGNED_BYTE;if(r===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(r===El)return i.BYTE;if(r===yl)return i.SHORT;if(r===Cr)return i.UNSIGNED_SHORT;if(r===Ha)return i.INT;if(r===xn)return i.UNSIGNED_INT;if(r===vn)return i.FLOAT;if(r===Li)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Tl)return i.ALPHA;if(r===Ze)return i.RGBA;if(r===wl)return i.LUMINANCE;if(r===bl)return i.LUMINANCE_ALPHA;if(r===On)return i.DEPTH_COMPONENT;if(r===mi)return i.DEPTH_STENCIL;if(r===Er)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Al)return i.RED;if(r===ka)return i.RED_INTEGER;if(r===Rl)return i.RG;if(r===Wa)return i.RG_INTEGER;if(r===Xa)return i.RGBA_INTEGER;if(r===Ns||r===Os||r===Fs||r===zs)if(c===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===so||r===ro||r===oo||r===ao)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===so)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ao)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ya)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===co||r===lo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===co)return c===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===lo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===vo||r===Mo||r===So||r===Eo||r===yo||r===To)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ho)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===po)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===go)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_o)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===So)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs||r===wo||r===bo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Bs)return c===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cl||r===Ao||r===Ro||r===Co)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Bs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ao)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ro)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Co)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class kp extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Xp extends kn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,d=null;const v=[],x=[],S=new ct;let C=null;const A=new Ge;A.layers.enable(1),A.viewport=new _e;const b=new Ge;b.layers.enable(2),b.viewport=new _e;const O=[A,b],M=new kp;M.layers.enable(1),M.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=v[W];return j===void 0&&(j=new lr,v[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=v[W];return j===void 0&&(j=new lr,v[W]=j),j.getGripSpace()},this.getHand=function(W){let j=v[W];return j===void 0&&(j=new lr,v[W]=j),j.getHandSpace()};function H(W){const j=x.indexOf(W.inputSource);if(j===-1)return;const ht=v[j];ht!==void 0&&(ht.update(W.inputSource,W.frame,l||a),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",D);for(let W=0;W<v.length;W++){const j=x[W];j!==null&&(x[W]=null,v[W].disconnect(j))}T=null,z=null,t.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:En,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ht=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?mi:On,ht=_.stencil?Nn:xn);const xt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Bn(f.textureWidth,f.textureHeight,{format:Ze,type:En,depthTexture:new hc(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(d);It.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(W){for(let j=0;j<W.removed.length;j++){const ht=W.removed[j],Mt=x.indexOf(ht);Mt>=0&&(x[Mt]=null,v[Mt].disconnect(ht))}for(let j=0;j<W.added.length;j++){const ht=W.added[j];let Mt=x.indexOf(ht);if(Mt===-1){for(let It=0;It<v.length;It++)if(It>=x.length){x.push(ht),Mt=It;break}else if(x[It]===null){x[It]=ht,Mt=It;break}if(Mt===-1)break}const xt=v[Mt];xt&&xt.connect(ht)}}const I=new P,V=new P;function Z(W,j,ht){I.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);const Mt=I.distanceTo(V),xt=j.projectionMatrix.elements,It=ht.projectionMatrix.elements,Nt=xt[14]/(xt[10]-1),bt=xt[14]/(xt[10]+1),Yt=(xt[9]+1)/xt[5],F=(xt[9]-1)/xt[5],ve=(xt[8]-1)/xt[0],yt=(It[8]+1)/It[0],Pt=Nt*ve,gt=Nt*yt,$t=Mt/(-ve+yt),Ft=$t*-ve;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ft),W.translateZ($t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const w=Nt+$t,E=bt+$t,N=Pt-Ft,tt=gt+(Mt-Ft),$=Yt*bt/E*w,et=F*bt/E*w;W.projectionMatrix.makePerspective(N,tt,$,et,w,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;M.near=b.near=A.near=W.near,M.far=b.far=A.far=W.far,(T!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far);const j=W.parent,ht=M.cameras;X(M,j);for(let Mt=0;Mt<ht.length;Mt++)X(ht[Mt],j);ht.length===2?Z(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),q(W,M,j)};function q(W,j,ht){ht===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=yr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let K=null;function st(W,j){if(u=j.getViewerPose(l||a),g=j,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let Mt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,Mt=!0);for(let xt=0;xt<ht.length;xt++){const It=ht[xt];let Nt=null;if(m!==null)Nt=m.getViewport(It);else{const Yt=h.getViewSubImage(f,It);Nt=Yt.viewport,xt===0&&(t.setRenderTargetTextures(d,Yt.colorTexture,f.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(d))}let bt=O[xt];bt===void 0&&(bt=new Ge,bt.layers.enable(xt),bt.viewport=new _e,O[xt]=bt),bt.matrix.fromArray(It.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(It.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),xt===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Mt===!0&&M.cameras.push(bt)}}for(let ht=0;ht<v.length;ht++){const Mt=x[ht],xt=v[ht];Mt!==null&&xt!==void 0&&xt.update(Mt,j,l||a)}K&&K(W,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ot=new lc;ot.setAnimationLoop(st),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function Yp(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,oc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,v,x):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Le&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Le&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=t.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,v,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qp(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function l(v,x){let S=s[v.id];S===void 0&&(g(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(v,C);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){const x=h();v.__bindingPointIndex=x;const S=i.createBuffer(),C=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,b=S.length;A<b;A++){const O=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,T=O.length;M<T;M++){const z=O[M];if(m(z,A,M,C)===!0){const H=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let D=0;for(let I=0;I<Y.length;I++){const V=Y[I],Z=_(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+D,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,x,S,C){const A=v.value,b=x+"_"+S;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const O=C[b];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return C[b]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(v){const x=v.uniforms;let S=0;const C=16;for(let b=0,O=x.length;b<O;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,z=M.length;T<z;T++){const H=M[T],Y=Array.isArray(H.value)?H.value:[H.value];for(let D=0,I=Y.length;D<I;D++){const V=Y[D],Z=_(V),X=S%C;X!==0&&C-X<Z.boundary&&(S+=C-X),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Z.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class _c{constructor(t={}){const{canvas:e=Vl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const x=this;let S=!1,C=0,A=0,b=null,O=-1,M=null;const T=new _e,z=new _e;let H=null;const Y=new Gt(0);let D=0,I=e.width,V=e.height,Z=1,X=null,q=null;const K=new _e(0,0,I,V),st=new _e(0,0,I,V);let ot=!1;const W=new Dr;let j=!1,ht=!1,Mt=null;const xt=new ue,It=new ct,Nt=new P,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return b===null?Z:1}let F=n;function ve(y,U){for(let G=0;G<y.length;G++){const k=y[G],B=e.getContext(k,U);if(B!==null)return B}return null}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rr}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=ve(U,y),F===null)throw ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let yt,Pt,gt,$t,Ft,w,E,N,tt,$,et,_t,ut,mt,wt,zt,J,jt,Vt,Lt,Et,dt,R,nt;function vt(){yt=new nf(F),Pt=new jd(F,yt,t),yt.init(Pt),dt=new Vp(F,yt,Pt),gt=new Hp(F,yt,Pt),$t=new of(F),Ft=new bp,w=new Gp(F,yt,gt,Ft,Pt,dt,$t),E=new $d(x),N=new ef(x),tt=new fu(F,Pt),R=new Zd(F,yt,tt,Pt),$=new sf(F,tt,$t,R),et=new uf(F,$,tt,$t),Vt=new lf(F,Pt,w),zt=new Jd(Ft),_t=new wp(x,E,N,yt,Pt,R,zt),ut=new Yp(x,Ft),mt=new Rp,wt=new Ip(yt,Pt),jt=new qd(x,E,N,gt,et,f,c),J=new Bp(x,et,Pt),nt=new qp(F,$t,Pt,gt),Lt=new Kd(F,yt,$t,Pt),Et=new rf(F,yt,$t,Pt),$t.programs=_t.programs,x.capabilities=Pt,x.extensions=yt,x.properties=Ft,x.renderLists=mt,x.shadowMap=J,x.state=gt,x.info=$t}vt();const pt=new Xp(x,F);this.xr=pt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(I,V,!1))},this.getSize=function(y){return y.set(I,V)},this.setSize=function(y,U,G=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=y,V=U,e.width=Math.floor(y*Z),e.height=Math.floor(U*Z),G===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(I*Z,V*Z).floor()},this.setDrawingBufferSize=function(y,U,G){I=y,V=U,Z=G,e.width=Math.floor(y*G),e.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,U,G,k){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,U,G,k),gt.viewport(T.copy(K).multiplyScalar(Z).floor())},this.getScissor=function(y){return y.copy(st)},this.setScissor=function(y,U,G,k){y.isVector4?st.set(y.x,y.y,y.z,y.w):st.set(y,U,G,k),gt.scissor(z.copy(st).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(y){gt.setScissorTest(ot=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){q=y},this.getClearColor=function(y){return y.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(y=!0,U=!0,G=!0){let k=0;if(y){let B=!1;if(b!==null){const ft=b.texture.format;B=ft===Xa||ft===Wa||ft===ka}if(B){const ft=b.texture.type,St=ft===En||ft===xn||ft===Cr||ft===Nn||ft===Ga||ft===Va,Rt=jt.getClearColor(),Dt=jt.getClearAlpha(),kt=Rt.r,Ot=Rt.g,Bt=Rt.b;St?(m[0]=kt,m[1]=Ot,m[2]=Bt,m[3]=Dt,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=kt,g[1]=Ot,g[2]=Bt,g[3]=Dt,F.clearBufferiv(F.COLOR,0,g))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT),G&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",it,!1),mt.dispose(),wt.dispose(),Ft.dispose(),E.dispose(),N.dispose(),et.dispose(),R.dispose(),nt.dispose(),_t.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",re),pt.removeEventListener("sessionend",Kt),Mt&&(Mt.dispose(),Mt=null),ce.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const y=$t.autoReset,U=J.enabled,G=J.autoUpdate,k=J.needsUpdate,B=J.type;vt(),$t.autoReset=y,J.enabled=U,J.autoUpdate=G,J.needsUpdate=k,J.type=B}function it(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function lt(y){const U=y.target;U.removeEventListener("dispose",lt),At(U)}function At(y){Tt(y),Ft.remove(y)}function Tt(y){const U=Ft.get(y).programs;U!==void 0&&(U.forEach(function(G){_t.releaseProgram(G)}),y.isShaderMaterial&&_t.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,k,B,ft){U===null&&(U=bt);const St=B.isMesh&&B.matrixWorld.determinant()<0,Rt=Bc(y,U,G,k,B);gt.setMaterial(k,St);let Dt=G.index,kt=1;if(k.wireframe===!0){if(Dt=$.getWireframeAttribute(G),Dt===void 0)return;kt=2}const Ot=G.drawRange,Bt=G.attributes.position;let oe=Ot.start*kt,De=(Ot.start+Ot.count)*kt;ft!==null&&(oe=Math.max(oe,ft.start*kt),De=Math.min(De,(ft.start+ft.count)*kt)),Dt!==null?(oe=Math.max(oe,0),De=Math.min(De,Dt.count)):Bt!=null&&(oe=Math.max(oe,0),De=Math.min(De,Bt.count));const fe=De-oe;if(fe<0||fe===1/0)return;R.setup(B,k,Rt,G,Dt);let Qe,ee=Lt;if(Dt!==null&&(Qe=tt.get(Dt),ee=Et,ee.setIndex(Qe)),B.isMesh)k.wireframe===!0?(gt.setLineWidth(k.wireframeLinewidth*Yt()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(B.isLine){let Wt=k.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*Yt()),B.isLineSegments?ee.setMode(F.LINES):B.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else B.isPoints?ee.setMode(F.POINTS):B.isSprite&&ee.setMode(F.TRIANGLES);if(B.isBatchedMesh)ee.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ee.renderInstances(oe,fe,B.count);else if(G.isInstancedBufferGeometry){const Wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ps=Math.min(G.instanceCount,Wt);ee.renderInstances(oe,fe,Ps)}else ee.render(oe,fe)};function qt(y,U,G){y.transparent===!0&&y.side===an&&y.forceSinglePass===!1?(y.side=Le,y.needsUpdate=!0,Hi(y,U,G),y.side=yn,y.needsUpdate=!0,Hi(y,U,G),y.side=an):Hi(y,U,G)}this.compile=function(y,U,G=null){G===null&&(G=y),p=wt.get(G),p.init(),v.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),y!==G&&y.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(x._useLegacyLights);const k=new Set;return y.traverse(function(B){const ft=B.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const Rt=ft[St];qt(Rt,G,B),k.add(Rt)}else qt(ft,G,B),k.add(ft)}),v.pop(),p=null,k},this.compileAsync=function(y,U,G=null){const k=this.compile(y,U,G);return new Promise(B=>{function ft(){if(k.forEach(function(St){Ft.get(St).currentProgram.isReady()&&k.delete(St)}),k.size===0){B(y);return}setTimeout(ft,10)}yt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Zt=null;function ie(y){Zt&&Zt(y)}function re(){ce.stop()}function Kt(){ce.start()}const ce=new lc;ce.setAnimationLoop(ie),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(y){Zt=y,pt.setAnimationLoop(y),y===null?ce.stop():ce.start()},pt.addEventListener("sessionstart",re),pt.addEventListener("sessionend",Kt),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(U),U=pt.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,U,b),p=wt.get(y,v.length),p.init(),v.push(p),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(xt),ht=this.localClippingEnabled,j=zt.init(this.clippingPlanes,ht),_=mt.get(y,d.length),_.init(),d.push(_),Ke(y,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,q),this.info.render.frame++,j===!0&&zt.beginShadows();const G=p.state.shadowsArray;if(J.render(G,y,U),j===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(_,y),p.setupLights(x._useLegacyLights),U.isArrayCamera){const k=U.cameras;for(let B=0,ft=k.length;B<ft;B++){const St=k[B];Xr(_,y,St,St.viewport)}}else Xr(_,y,U);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(x,y,U),R.resetDefaultState(),O=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ke(y,U,G,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const St=et.update(y),Rt=y.material;Rt.visible&&_.push(y,St,Rt,G,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const St=et.update(y),Rt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Nt.copy(St.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){const Dt=St.groups;for(let kt=0,Ot=Dt.length;kt<Ot;kt++){const Bt=Dt[kt],oe=Rt[Bt.materialIndex];oe&&oe.visible&&_.push(y,St,oe,G,Nt.z,Bt)}}else Rt.visible&&_.push(y,St,Rt,G,Nt.z,null)}}const ft=y.children;for(let St=0,Rt=ft.length;St<Rt;St++)Ke(ft[St],U,G,k)}function Xr(y,U,G,k){const B=y.opaque,ft=y.transmissive,St=y.transparent;p.setupLightsView(G),j===!0&&zt.setGlobalState(x.clippingPlanes,G),ft.length>0&&zc(B,ft,U,G),k&&gt.viewport(T.copy(k)),B.length>0&&Bi(B,U,G),ft.length>0&&Bi(ft,U,G),St.length>0&&Bi(St,U,G),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function zc(y,U,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ft=Pt.isWebGL2;Mt===null&&(Mt=new Bn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Li:En,minFilter:Pi,samples:ft?4:0})),x.getDrawingBufferSize(It),ft?Mt.setSize(It.x,It.y):Mt.setSize(Tr(It.x),Tr(It.y));const St=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(Y),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Rt=x.toneMapping;x.toneMapping=Sn,Bi(y,G,k),w.updateMultisampleRenderTarget(Mt),w.updateRenderTargetMipmap(Mt);let Dt=!1;for(let kt=0,Ot=U.length;kt<Ot;kt++){const Bt=U[kt],oe=Bt.object,De=Bt.geometry,fe=Bt.material,Qe=Bt.group;if(fe.side===an&&oe.layers.test(k.layers)){const ee=fe.side;fe.side=Le,fe.needsUpdate=!0,Yr(oe,G,k,De,fe,Qe),fe.side=ee,fe.needsUpdate=!0,Dt=!0}}Dt===!0&&(w.updateMultisampleRenderTarget(Mt),w.updateRenderTargetMipmap(Mt)),x.setRenderTarget(St),x.setClearColor(Y,D),x.toneMapping=Rt}function Bi(y,U,G){const k=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ft=y.length;B<ft;B++){const St=y[B],Rt=St.object,Dt=St.geometry,kt=k===null?St.material:k,Ot=St.group;Rt.layers.test(G.layers)&&Yr(Rt,U,G,Dt,kt,Ot)}}function Yr(y,U,G,k,B,ft){y.onBeforeRender(x,U,G,k,B,ft),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(x,U,G,k,y,ft),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,x.renderBufferDirect(G,U,k,B,y,ft),B.side=yn,B.needsUpdate=!0,x.renderBufferDirect(G,U,k,B,y,ft),B.side=an):x.renderBufferDirect(G,U,k,B,y,ft),y.onAfterRender(x,U,G,k,B,ft)}function Hi(y,U,G){U.isScene!==!0&&(U=bt);const k=Ft.get(y),B=p.state.lights,ft=p.state.shadowsArray,St=B.state.version,Rt=_t.getParameters(y,B.state,ft,U,G),Dt=_t.getProgramCacheKey(Rt);let kt=k.programs;k.environment=y.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(y.isMeshStandardMaterial?N:E).get(y.envMap||k.environment),kt===void 0&&(y.addEventListener("dispose",lt),kt=new Map,k.programs=kt);let Ot=kt.get(Dt);if(Ot!==void 0){if(k.currentProgram===Ot&&k.lightsStateVersion===St)return Zr(y,Rt),Ot}else Rt.uniforms=_t.getUniforms(y),y.onBuild(G,Rt,x),y.onBeforeCompile(Rt,x),Ot=_t.acquireProgram(Rt,Dt),kt.set(Dt,Ot),k.uniforms=Rt.uniforms;const Bt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Bt.clippingPlanes=zt.uniform),Zr(y,Rt),k.needsLights=Gc(y),k.lightsStateVersion=St,k.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Ot,k.uniformsList=null,Ot}function qr(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ms.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Zr(y,U){const G=Ft.get(y);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Bc(y,U,G,k,B){U.isScene!==!0&&(U=bt),w.resetTextureUnits();const ft=U.fog,St=k.isMeshStandardMaterial?U.environment:null,Rt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:hn,Dt=(k.isMeshStandardMaterial?N:E).get(k.envMap||St),kt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Bt=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,De=!!G.morphAttributes.color;let fe=Sn;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=Qe!==void 0?Qe.length:0,Wt=Ft.get(k),Ps=p.state.lights;if(j===!0&&(ht===!0||y!==M)){const ze=y===M&&k.id===O;zt.setState(k,y,ze)}let se=!1;k.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ps.state.version||Wt.outputColorSpace!==Rt||B.isBatchedMesh&&Wt.batching===!1||!B.isBatchedMesh&&Wt.batching===!0||B.isInstancedMesh&&Wt.instancing===!1||!B.isInstancedMesh&&Wt.instancing===!0||B.isSkinnedMesh&&Wt.skinning===!1||!B.isSkinnedMesh&&Wt.skinning===!0||B.isInstancedMesh&&Wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Wt.instancingColor===!1&&B.instanceColor!==null||Wt.envMap!==Dt||k.fog===!0&&Wt.fog!==ft||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==zt.numPlanes||Wt.numIntersection!==zt.numIntersection)||Wt.vertexAlphas!==kt||Wt.vertexTangents!==Ot||Wt.morphTargets!==Bt||Wt.morphNormals!==oe||Wt.morphColors!==De||Wt.toneMapping!==fe||Pt.isWebGL2===!0&&Wt.morphTargetsCount!==ee)&&(se=!0):(se=!0,Wt.__version=k.version);let bn=Wt.currentProgram;se===!0&&(bn=Hi(k,U,B));let Kr=!1,Mi=!1,Ls=!1;const Ee=bn.getUniforms(),An=Wt.uniforms;if(gt.useProgram(bn.program)&&(Kr=!0,Mi=!0,Ls=!0),k.id!==O&&(O=k.id,Mi=!0),Kr||M!==y){Ee.setValue(F,"projectionMatrix",y.projectionMatrix),Ee.setValue(F,"viewMatrix",y.matrixWorldInverse);const ze=Ee.map.cameraPosition;ze!==void 0&&ze.setValue(F,Nt.setFromMatrixPosition(y.matrixWorld)),Pt.logarithmicDepthBuffer&&Ee.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ee.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Mi=!0,Ls=!0)}if(B.isSkinnedMesh){Ee.setOptional(F,B,"bindMatrix"),Ee.setOptional(F,B,"bindMatrixInverse");const ze=B.skeleton;ze&&(Pt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),Ee.setValue(F,"boneTexture",ze.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ee.setOptional(F,B,"batchingTexture"),Ee.setValue(F,"batchingTexture",B._matricesTexture,w));const Ds=G.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0&&Pt.isWebGL2===!0)&&Vt.update(B,G,bn),(Mi||Wt.receiveShadow!==B.receiveShadow)&&(Wt.receiveShadow=B.receiveShadow,Ee.setValue(F,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(An.envMap.value=Dt,An.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Mi&&(Ee.setValue(F,"toneMappingExposure",x.toneMappingExposure),Wt.needsLights&&Hc(An,Ls),ft&&k.fog===!0&&ut.refreshFogUniforms(An,ft),ut.refreshMaterialUniforms(An,k,Z,V,Mt),ms.upload(F,qr(Wt),An,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ms.upload(F,qr(Wt),An,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ee.setValue(F,"center",B.center),Ee.setValue(F,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(F,"normalMatrix",B.normalMatrix),Ee.setValue(F,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ze=k.uniformsGroups;for(let Us=0,Vc=ze.length;Us<Vc;Us++)if(Pt.isWebGL2){const jr=ze[Us];nt.update(jr,bn),nt.bind(jr,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function Hc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Gc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,U,G){Ft.get(y.texture).__webglTexture=U,Ft.get(y.depthTexture).__webglTexture=G;const k=Ft.get(y);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const G=Ft.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){b=y,C=U,A=G;let k=!0,B=null,ft=!1,St=!1;if(y){const Dt=Ft.get(y);Dt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(F.FRAMEBUFFER,null),k=!1):Dt.__webglFramebuffer===void 0?w.setupRenderTarget(y):Dt.__hasExternalTextures&&w.rebindTextures(y,Ft.get(y.texture).__webglTexture,Ft.get(y.depthTexture).__webglTexture);const kt=y.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(St=!0);const Ot=Ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?B=Ot[U][G]:B=Ot[U],ft=!0):Pt.isWebGL2&&y.samples>0&&w.useMultisampledRTT(y)===!1?B=Ft.get(y).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[G]:B=Ot,T.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else T.copy(K).multiplyScalar(Z).floor(),z.copy(st).multiplyScalar(Z).floor(),H=ot;if(gt.bindFramebuffer(F.FRAMEBUFFER,B)&&Pt.drawBuffers&&k&&gt.drawBuffers(y,B),gt.viewport(T),gt.scissor(z),gt.setScissorTest(H),ft){const Dt=Ft.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt.__webglTexture,G)}else if(St){const Dt=Ft.get(y.texture),kt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,kt)}O=-1},this.readRenderTargetPixels=function(y,U,G,k,B,ft,St){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){gt.bindFramebuffer(F.FRAMEBUFFER,Rt);try{const Dt=y.texture,kt=Dt.format,Ot=Dt.type;if(kt!==Ze&&dt.convert(kt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ot===Li&&(yt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ot!==En&&dt.convert(Ot)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===vn&&(Pt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&G>=0&&G<=y.height-B&&F.readPixels(U,G,k,B,dt.convert(kt),dt.convert(Ot),ft)}finally{const Dt=b!==null?Ft.get(b).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(y,U,G=0){const k=Math.pow(2,-G),B=Math.floor(U.image.width*k),ft=Math.floor(U.image.height*k);w.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,y.x,y.y,B,ft),gt.unbindTexture()},this.copyTextureToTexture=function(y,U,G,k=0){const B=U.image.width,ft=U.image.height,St=dt.convert(G.format),Rt=dt.convert(G.type);w.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,y.x,y.y,B,ft,St,Rt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,St,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,k,y.x,y.y,St,Rt,U.image),k===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,G,k,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=y.max.x-y.min.x+1,St=y.max.y-y.min.y+1,Rt=y.max.z-y.min.z+1,Dt=dt.convert(k.format),kt=dt.convert(k.type);let Ot;if(k.isData3DTexture)w.setTexture3D(k,0),Ot=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)w.setTexture2DArray(k,0),Ot=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Bt=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),De=F.getParameter(F.UNPACK_SKIP_PIXELS),fe=F.getParameter(F.UNPACK_SKIP_ROWS),Qe=F.getParameter(F.UNPACK_SKIP_IMAGES),ee=G.isCompressedTexture?G.mipmaps[B]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,y.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,y.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,y.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Ot,B,U.x,U.y,U.z,ft,St,Rt,Dt,kt,ee.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ot,B,U.x,U.y,U.z,ft,St,Rt,Dt,ee.data)):F.texSubImage3D(Ot,B,U.x,U.y,U.z,ft,St,Rt,Dt,kt,ee),F.pixelStorei(F.UNPACK_ROW_LENGTH,Bt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,De),F.pixelStorei(F.UNPACK_SKIP_ROWS,fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe),B===0&&k.generateMipmaps&&F.generateMipmap(Ot),gt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),gt.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,gt.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pr?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===ws?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?Fn:qa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?me:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Zp extends _c{}Zp.prototype.isWebGL1Renderer=!0;class Ir{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Je{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ct:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new ue;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nr extends Je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new ct,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jp extends Nr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Or(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,m*=u,s(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ls=new P,ur=new Or,hr=new Or,dr=new Or;class Fr extends Je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(ls.subVectors(s[0],s[1]).add(s[0]),l=ls);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ls.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ls),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ur.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,p),hr.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,p),dr.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(ur.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),hr.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),dr.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ur.calc(c),hr.calc(c),dr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xa(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Jp(i,t){const e=1-i;return e*e*t}function $p(i,t){return 2*(1-i)*i*t}function Qp(i,t){return i*i*t}function Ai(i,t,e,n){return Jp(i,t)+$p(i,e)+Qp(i,n)}function tm(i,t){const e=1-i;return e*e*e*t}function em(i,t){const e=1-i;return 3*e*e*i*t}function nm(i,t){return 3*(1-i)*i*i*t}function im(i,t){return i*i*i*t}function Ri(i,t,e,n,s){return tm(i,t)+em(i,e)+nm(i,n)+im(i,s)}class xc extends Je{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ri(t,s.x,r.x,a.x,o.x),Ri(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sm extends Je{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ri(t,s.x,r.x,a.x,o.x),Ri(t,s.y,r.y,a.y,o.y),Ri(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vc extends Je{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rm extends Je{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends Je{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ai(t,s.x,r.x,a.x),Ai(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class om extends Je{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ai(t,s.x,r.x,a.x),Ai(t,s.y,r.y,a.y),Ai(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sc extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(xa(o,c.x,l.x,u.x,h.x),xa(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var va=Object.freeze({__proto__:null,ArcCurve:jp,CatmullRomCurve3:Fr,CubicBezierCurve:xc,CubicBezierCurve3:sm,EllipseCurve:Nr,LineCurve:vc,LineCurve3:rm,QuadraticBezierCurve:Mc,QuadraticBezierCurve3:om,SplineCurve:Sc});class am extends Je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new va[s.type]().fromJSON(s))}return this}}class Ma extends am{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vc(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Mc(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xc(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Nr(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zr extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,u=new ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=n+h/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ge extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(m,2));function v(){const S=new P,C=new P;let A=0;const b=(e-t)/n;for(let O=0;O<=r;O++){const M=[],T=O/r,z=T*(e-t)+t;for(let H=0;H<=s;H++){const Y=H/s,D=Y*c+o,I=Math.sin(D),V=Math.cos(D);C.x=z*I,C.y=-T*n+p,C.z=z*V,h.push(C.x,C.y,C.z),S.set(I,b,V).normalize(),f.push(S.x,S.y,S.z),m.push(Y,1-T),M.push(g++)}_.push(M)}for(let O=0;O<s;O++)for(let M=0;M<r;M++){const T=_[M][O],z=_[M+1][O],H=_[M+1][O+1],Y=_[M][O+1];u.push(T,z,Y),u.push(z,H,Y),A+=6}l.addGroup(d,A,0),d+=A}function x(S){const C=g,A=new ct,b=new P;let O=0;const M=S===!0?t:e,T=S===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const z=g;for(let H=0;H<=s;H++){const D=H/s*c+o,I=Math.cos(D),V=Math.sin(D);b.x=M*V,b.y=p*T,b.z=M*I,h.push(b.x,b.y,b.z),f.push(0,T,0),A.x=I*.5+.5,A.y=V*.5*T+.5,m.push(A.x,A.y),g++}for(let H=0;H<s;H++){const Y=C+H,D=z+H;S===!0?u.push(D,D+1,Y):u.push(D+1,D,Y),O+=3}l.addGroup(d,O,S===!0?1:2),d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zi extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new zi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Br extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new P,S=new P,C=new P;for(let A=0;A<e.length;A+=3)m(e[A+0],x),m(e[A+1],S),m(e[A+2],C),c(x,S,C,v)}function c(v,x,S,C){const A=C+1,b=[];for(let O=0;O<=A;O++){b[O]=[];const M=v.clone().lerp(S,O/A),T=x.clone().lerp(S,O/A),z=A-O;for(let H=0;H<=z;H++)H===0&&O===A?b[O][H]=M:b[O][H]=M.clone().lerp(T,H/z)}for(let O=0;O<A;O++)for(let M=0;M<2*(A-O)-1;M++){const T=Math.floor(M/2);M%2===0?(f(b[O][T+1]),f(b[O+1][T]),f(b[O][T])):(f(b[O][T+1]),f(b[O+1][T+1]),f(b[O+1][T]))}}function l(v){const x=new P;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(v),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function u(){const v=new P;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const S=p(v)/2/Math.PI+.5,C=d(v)/Math.PI+.5;a.push(S,1-C)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const x=a[v+0],S=a[v+2],C=a[v+4],A=Math.max(x,S,C),b=Math.min(x,S,C);A>.9&&b<.1&&(x<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,x){const S=v*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function g(){const v=new P,x=new P,S=new P,C=new P,A=new ct,b=new ct,O=new ct;for(let M=0,T=0;M<r.length;M+=9,T+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),A.set(a[T+0],a[T+1]),b.set(a[T+2],a[T+3]),O.set(a[T+4],a[T+5]),C.copy(v).add(x).add(S).divideScalar(3);const z=p(C);_(A,T+0,v,z),_(b,T+2,x,z),_(O,T+4,S,z)}}function _(v,x,S,C){C<0&&v.x===1&&(a[x]=v.x-1),S.x===0&&S.z===0&&(a[x]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.vertices,t.indices,t.radius,t.details)}}class Ec extends Ma{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ma().fromJSON(s))}return this}}const cm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,m;if(n&&(r=fm(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);m=Math.max(l-o,u-c),m=m!==0?32767/m:0}return Di(r,a,e,o,c,m,0),a}};function yc(i,t,e,n,s){let r,a;if(s===Tm(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Sa(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Sa(r,i[r],i[r+1],a);return a&&Rs(a,a.next)&&(Ii(a),a=a.next),a}function Vn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rs(e,e.next)||ne(e.prev,e,e.next)===0)){if(Ii(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Di(i,t,e,n,s,r,a){if(!i)return;!a&&r&&xm(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?um(i,n,s,r):lm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ii(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=hm(Vn(i),t,e),Di(i,t,e,n,s,r,2)):a===2&&dm(i,t,e,n,s,r):Di(Vn(i),t,e,n,s,r,1);break}}}function lm(i){const t=i.prev,e=i,n=i.next;if(ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&ui(s,o,r,c,a,l,g.x,g.y)&&ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function um(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ne(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,f=a.y,m=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=o>c?o>l?o:l:c>l?c:l,p=u>h?u>f?u:f:h>f?h:f,d=br(m,g,t,e,n),v=br(_,p,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=d&&S&&S.z<=v;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&ui(o,u,c,h,l,f,x.x,x.y)&&ne(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&ui(o,u,c,h,l,f,S.x,S.y)&&ne(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&ui(o,u,c,h,l,f,x.x,x.y)&&ne(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=m&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&ui(o,u,c,h,l,f,S.x,S.y)&&ne(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function hm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Rs(s,r)&&Tc(s,n,n.next,r)&&Ui(s,r)&&Ui(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ii(n),Ii(n.next),n=i=r),n=n.next}while(n!==i);return Vn(n)}function dm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sm(a,o)){let c=wc(a,o);a=Vn(a,a.next),c=Vn(c,c.next),Di(a,t,e,n,s,r,0),Di(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function fm(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=yc(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Mm(l));for(s.sort(pm),r=0;r<s.length;r++)e=mm(s[r],e);return e}function pm(i,t){return i.x-t.x}function mm(i,t){const e=gm(i,t);if(!e)return t;const n=wc(e,i);return Vn(n,n.next),Vn(e,e.next)}function gm(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ui(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Ui(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&_m(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function _m(i,t){return ne(i.prev,i,t.prev)<0&&ne(t.next,i,i.next)<0}function xm(i,t,e,n){let s=i;do s.z===0&&(s.z=br(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vm(s)}function vm(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function br(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ui(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Sm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Em(i,t)&&(Ui(i,t)&&Ui(t,i)&&ym(i,t)&&(ne(i.prev,i,t.prev)||ne(i,t.prev,t))||Rs(i,t)&&ne(i.prev,i,i.next)>0&&ne(t.prev,t,t.next)>0)}function ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rs(i,t){return i.x===t.x&&i.y===t.y}function Tc(i,t,e,n){const s=hs(ne(i,t,e)),r=hs(ne(i,t,n)),a=hs(ne(e,n,i)),o=hs(ne(e,n,t));return!!(s!==r&&a!==o||s===0&&us(i,e,t)||r===0&&us(i,n,t)||a===0&&us(e,i,n)||o===0&&us(e,t,n))}function us(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hs(i){return i>0?1:i<0?-1:0}function Em(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ui(i,t){return ne(i.prev,i,i.next)<0?ne(i,t,i.next)>=0&&ne(i,i.prev,t)>=0:ne(i,t,i.prev)<0||ne(i,i.next,t)<0}function ym(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wc(i,t){const e=new Ar(i.i,i.x,i.y),n=new Ar(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sa(i,t,e,n){const s=new Ar(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ii(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ar(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ci{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ci.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ea(t),ya(n,t);let a=t.length;e.forEach(Ea);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ya(n,e[c]);const o=cm.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Ea(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ya(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Es extends Br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class Hr extends Ce{constructor(t=new Ec([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let m=f.shape;const g=f.holes;Ci.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){const v=g[p];Ci.isClockWise(v)===!0&&(g[p]=v.reverse())}const _=Ci.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){const v=g[p];m=m.concat(v)}for(let p=0,d=m.length;p<d;p++){const v=m[p];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,d=_.length;p<d;p++){const v=_[p],x=v[0]+h,S=v[1]+h,C=v[2]+h;n.push(x,S,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Hr(n,t.curveSegments)}}function wm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ni extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,f=new P,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const v=[],x=d/n;let S=0;d===0&&a===0?S=.5/e:d===n&&c===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const A=C/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(A+S,1-x),v.push(l++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const x=u[d][v+1],S=u[d][v],C=u[d+1][v],A=u[d+1][v+1];(d!==0||a>0)&&m.push(x,S,A),(d!==n-1||c<Math.PI)&&m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ct extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gr extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class bm extends Gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fr=new ue,Ta=new P,wa=new P;class Am{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ta.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ta),wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wa),e.updateMatrixWorld(),fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rm extends Am{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ba extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cm extends Gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Aa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Aa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Aa(){return(typeof performance>"u"?Date:performance).now()}class Ra{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);const Ca={type:"change"},pr={type:"start"},Pa={type:"end"},ds=new tc,La=new _n,Lm=Math.cos(70*Gl.DEG2RAD);class Dm extends kn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",wt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",wt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ca),n.update(),r=s.NONE},this.update=function(){const R=new P,nt=new Hn().setFromUnitVectors(t.up,new P(0,1,0)),vt=nt.clone().invert(),pt=new P,Q=new Hn,L=new P,it=2*Math.PI;return function(At=null){const Tt=n.object.position;R.copy(Tt).sub(n.target),R.applyQuaternion(nt),o.setFromVector3(R),n.autoRotate&&r===s.NONE&&H(T(At)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let qt=n.minAzimuthAngle,Zt=n.maxAzimuthAngle;isFinite(qt)&&isFinite(Zt)&&(qt<-Math.PI?qt+=it:qt>Math.PI&&(qt-=it),Zt<-Math.PI?Zt+=it:Zt>Math.PI&&(Zt-=it),qt<=Zt?o.theta=Math.max(qt,Math.min(Zt,o.theta)):o.theta=o.theta>(qt+Zt)/2?Math.max(qt,o.theta):Math.min(Zt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*l),R.setFromSpherical(o),R.applyQuaternion(vt),Tt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ie=!1;if(n.zoomToCursor&&A){let re=null;if(n.object.isPerspectiveCamera){const Kt=R.length();re=K(Kt*l);const ce=Kt-re;n.object.position.addScaledVector(S,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Kt=new P(C.x,C.y,0);Kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ie=!0;const ce=new P(C.x,C.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(Kt),n.object.updateMatrixWorld(),re=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(re).add(n.object.position):(ds.origin.copy(n.object.position),ds.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ds.direction))<Lm?t.lookAt(n.target):(La.setFromNormalAndCoplanarPoint(n.object.up,n.target),ds.intersectPlane(La,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ie=!0);return l=1,A=!1,ie||pt.distanceToSquared(n.object.position)>a||8*(1-Q.dot(n.object.quaternion))>a||L.distanceToSquared(n.target)>0?(n.dispatchEvent(Ca),pt.copy(n.object.position),Q.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",jt),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",N),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",wt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Ra,c=new Ra;let l=1;const u=new P,h=new ct,f=new ct,m=new ct,g=new ct,_=new ct,p=new ct,d=new ct,v=new ct,x=new ct,S=new P,C=new ct;let A=!1;const b=[],O={};let M=!1;function T(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function z(R){const nt=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*nt)}function H(R){c.theta-=R}function Y(R){c.phi-=R}const D=function(){const R=new P;return function(vt,pt){R.setFromMatrixColumn(pt,0),R.multiplyScalar(-vt),u.add(R)}}(),I=function(){const R=new P;return function(vt,pt){n.screenSpacePanning===!0?R.setFromMatrixColumn(pt,1):(R.setFromMatrixColumn(pt,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(vt),u.add(R)}}(),V=function(){const R=new P;return function(vt,pt){const Q=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;R.copy(L).sub(n.target);let it=R.length();it*=Math.tan(n.object.fov/2*Math.PI/180),D(2*vt*it/Q.clientHeight,n.object.matrix),I(2*pt*it/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(vt*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),I(pt*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R,nt){if(!n.zoomToCursor)return;A=!0;const vt=n.domElement.getBoundingClientRect(),pt=R-vt.left,Q=nt-vt.top,L=vt.width,it=vt.height;C.x=pt/L*2-1,C.y=-(Q/it)*2+1,S.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function st(R){h.set(R.clientX,R.clientY)}function ot(R){q(R.clientX,R.clientX),d.set(R.clientX,R.clientY)}function W(R){g.set(R.clientX,R.clientY)}function j(R){f.set(R.clientX,R.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const nt=n.domElement;H(2*Math.PI*m.x/nt.clientHeight),Y(2*Math.PI*m.y/nt.clientHeight),h.copy(f),n.update()}function ht(R){v.set(R.clientX,R.clientY),x.subVectors(v,d),x.y>0?Z(z(x.y)):x.y<0&&X(z(x.y)),d.copy(v),n.update()}function Mt(R){_.set(R.clientX,R.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_),n.update()}function xt(R){q(R.clientX,R.clientY),R.deltaY<0?X(z(R.deltaY)):R.deltaY>0&&Z(z(R.deltaY)),n.update()}function It(R){let nt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),nt=!0;break}nt&&(R.preventDefault(),n.update())}function Nt(R){if(b.length===1)h.set(R.pageX,R.pageY);else{const nt=dt(R),vt=.5*(R.pageX+nt.x),pt=.5*(R.pageY+nt.y);h.set(vt,pt)}}function bt(R){if(b.length===1)g.set(R.pageX,R.pageY);else{const nt=dt(R),vt=.5*(R.pageX+nt.x),pt=.5*(R.pageY+nt.y);g.set(vt,pt)}}function Yt(R){const nt=dt(R),vt=R.pageX-nt.x,pt=R.pageY-nt.y,Q=Math.sqrt(vt*vt+pt*pt);d.set(0,Q)}function F(R){n.enableZoom&&Yt(R),n.enablePan&&bt(R)}function ve(R){n.enableZoom&&Yt(R),n.enableRotate&&Nt(R)}function yt(R){if(b.length==1)f.set(R.pageX,R.pageY);else{const vt=dt(R),pt=.5*(R.pageX+vt.x),Q=.5*(R.pageY+vt.y);f.set(pt,Q)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const nt=n.domElement;H(2*Math.PI*m.x/nt.clientHeight),Y(2*Math.PI*m.y/nt.clientHeight),h.copy(f)}function Pt(R){if(b.length===1)_.set(R.pageX,R.pageY);else{const nt=dt(R),vt=.5*(R.pageX+nt.x),pt=.5*(R.pageY+nt.y);_.set(vt,pt)}p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_)}function gt(R){const nt=dt(R),vt=R.pageX-nt.x,pt=R.pageY-nt.y,Q=Math.sqrt(vt*vt+pt*pt);v.set(0,Q),x.set(0,Math.pow(v.y/d.y,n.zoomSpeed)),Z(x.y),d.copy(v);const L=(R.pageX+nt.x)*.5,it=(R.pageY+nt.y)*.5;q(L,it)}function $t(R){n.enableZoom&&gt(R),n.enablePan&&Pt(R)}function Ft(R){n.enableZoom&&gt(R),n.enableRotate&&yt(R)}function w(R){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",N)),Vt(R),R.pointerType==="touch"?zt(R):tt(R))}function E(R){n.enabled!==!1&&(R.pointerType==="touch"?J(R):$(R))}function N(R){Lt(R),b.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",N)),n.dispatchEvent(Pa),r=s.NONE}function tt(R){let nt;switch(R.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case Wn.DOLLY:if(n.enableZoom===!1)return;ot(R),r=s.DOLLY;break;case Wn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;W(R),r=s.PAN}else{if(n.enableRotate===!1)return;st(R),r=s.ROTATE}break;case Wn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;st(R),r=s.ROTATE}else{if(n.enablePan===!1)return;W(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(pr)}function $(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;j(R);break;case s.DOLLY:if(n.enableZoom===!1)return;ht(R);break;case s.PAN:if(n.enablePan===!1)return;Mt(R);break}}function et(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(pr),xt(_t(R)),n.dispatchEvent(Pa))}function _t(R){const nt=R.deltaMode,vt={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(nt){case 1:vt.deltaY*=16;break;case 2:vt.deltaY*=100;break}return R.ctrlKey&&!M&&(vt.deltaY*=10),vt}function ut(R){R.key==="Control"&&(M=!0,document.addEventListener("keyup",mt,{passive:!0,capture:!0}))}function mt(R){R.key==="Control"&&(M=!1,document.removeEventListener("keyup",mt,{passive:!0,capture:!0}))}function wt(R){n.enabled===!1||n.enablePan===!1||It(R)}function zt(R){switch(Et(R),b.length){case 1:switch(n.touches.ONE){case Xn.ROTATE:if(n.enableRotate===!1)return;Nt(R),r=s.TOUCH_ROTATE;break;case Xn.PAN:if(n.enablePan===!1)return;bt(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Xn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(R),r=s.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(pr)}function J(R){switch(Et(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Pt(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$t(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ft(R),n.update();break;default:r=s.NONE}}function jt(R){n.enabled!==!1&&R.preventDefault()}function Vt(R){b.push(R.pointerId)}function Lt(R){delete O[R.pointerId];for(let nt=0;nt<b.length;nt++)if(b[nt]==R.pointerId){b.splice(nt,1);return}}function Et(R){let nt=O[R.pointerId];nt===void 0&&(nt=new ct,O[R.pointerId]=nt),nt.set(R.pageX,R.pageY)}function dt(R){const nt=R.pointerId===b[0]?b[1]:b[0];return O[nt]}n.domElement.addEventListener("contextmenu",jt),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",et,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}function Cs(i=4871603){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function zn(i,t,e){return t+(e-t)*i()}function Da(i,t){return t[Math.floor(i()*t.length)]}function Um({size:i=30,thickness:t=1.4}={}){const e=new ae,n=new Ct({color:7227946,roughness:.78,metalness:.05}),s=new Ut(i+.6,t,i+.6),r=new rt(s,n);r.position.y=-t/2,r.receiveShadow=!0,r.castShadow=!1,e.add(r);const a=new Ct({color:9067058,roughness:.65,metalness:.05}),o=.18,c=.16,l=i/2+.3,u=new Ut(i+.6+o*2,c,.5);for(const m of[-(l+.18),l+.18-.5]){const g=new rt(u,a);g.position.set(0,c/2,m),g.castShadow=!0,g.receiveShadow=!0,e.add(g)}const h=new Ut(.5,c,i+.6+o*2);for(const m of[-(l+.18),l+.18-.5]){const g=new rt(h,a);g.position.set(m,c/2,0),g.castShadow=!0,g.receiveShadow=!0,e.add(g)}const f=new Ut(.45,c+.04,.45);for(const m of[-1,1])for(const g of[-1,1]){const _=new rt(f,a);_.position.set(m*(l-.05),(c+.04)/2,g*(l-.05)),_.castShadow=!0,_.receiveShadow=!0,e.add(_)}return e}function Im({size:i=30,segments:t=48}={}){const e=Cs(10236842),n=new Tn(i,i,t,t);n.rotateX(-Math.PI/2);const s=n.attributes.position;for(let f=0;f<s.count;f++){const m=s.getX(f),g=s.getZ(f),_=Math.sqrt(m*m+g*g),p=Math.min(1,Math.max(0,(i/2-_)/4)),d=(e()-.5)*.05*p;s.setY(f,d)}n.computeVertexNormals();const r=new Float32Array(s.count*3),a=new Gt(7319626),o=new Gt(8372309),c=new Gt(9424998),l=[a,o,c];for(let f=0;f<s.count;f++){const m=l[Math.floor(e()*l.length)],g=.92+e()*.16;r[f*3+0]=Math.min(1,m.r*g),r[f*3+1]=Math.min(1,m.g*g),r[f*3+2]=Math.min(1,m.b*g)}n.setAttribute("color",new Oe(r,3));const u=new Ct({vertexColors:!0,roughness:.95,metalness:0}),h=new rt(n,u);return h.position.y=0,h.receiveShadow=!0,h}function Nm({width:i=2.6,start:t=new P(-13,0,-8),end:e=new P(13,0,11),mid:n=[new P(-7,0,-4.5),new P(0,0,-.5),new P(7,0,3.5)]}={}){const s=[t,...n,e],r=new Fr(s,!1,"catmullrom",.4),a=80,o=new Ec,c=[],l=[];for(let x=0;x<=a;x++){const S=x/a,C=r.getPointAt(S),A=r.getTangentAt(S).setY(0).normalize(),b=-A.z,O=A.x;c.push(new ct(C.x+b*i/2,C.z+O*i/2)),l.push(new ct(C.x-b*i/2,C.z-O*i/2))}o.moveTo(c[0].x,c[0].y);for(let x=1;x<c.length;x++)o.lineTo(c[x].x,c[x].y);for(let x=0;x<l.length;x++)o.lineTo(l[x].x,l[x].y);o.closePath();const u=new Hr(o,24);u.rotateX(-Math.PI/2);const h=u.attributes.position,f=new Float32Array(h.count*3),m=new Gt(3898017),g=new Gt(2775677),_=new Gt(7251656),p=Cs(7842620);for(let x=0;x<h.count;x++){h.getX(x),h.getZ(x),h.getY(x);const C=(p()-.5)*.6,A=C>0?m.clone().lerp(_,C):m.clone().lerp(g,-C);f[x*3+0]=A.r,f[x*3+1]=A.g,f[x*3+2]=A.b}u.setAttribute("color",new Oe(f,3));const d=new Ct({vertexColors:!0,roughness:.32,metalness:.05,transparent:!1}),v=new rt(u,d);return v.position.y=.015,v.receiveShadow=!0,v.name="river",{mesh:v,centerline:r}}function Om({centerline:i,atT:t=.55,length:e=5.2,width:n=2.6}={}){const s=new ae,r=i.getPointAt(t),a=i.getTangentAt(t).setY(0).normalize(),o=new P(a.x,0,a.z),c=new P(-o.z,0,o.x).normalize(),l=Math.atan2(c.x,c.z),u=new Ut(n+.6,.18,e),h=new Ct({color:7031340,roughness:.78,metalness:.05}),f=new rt(u,h);f.position.set(r.x,.55,r.z),f.rotation.y=l,f.castShadow=!0,f.receiveShadow=!0,s.add(f);const m=new Ct({color:9069112,roughness:.75}),g=8;for(let d=0;d<g;d++){const v=(d+.5)/g-.5,x=new rt(new Ut(n+.55,.04,.18),m);x.position.set(r.x+c.x*v*e,.65,r.z+c.z*v*e),x.rotation.y=l,x.castShadow=!0,x.receiveShadow=!0,s.add(x)}const _=new Ct({color:5913120,roughness:.75});for(const d of[-1,1]){const v=new rt(new Ut(.12,.06,e-.1),_);v.position.set(r.x+o.x*d*(n/2+.25),.78,r.z+o.z*d*(n/2+.25)),v.rotation.y=l,v.castShadow=!0,s.add(v);const x=new rt(new Ut(.1,.05,e-.1),_);x.position.set(r.x+o.x*d*(n/2+.25),1.02,r.z+o.z*d*(n/2+.25)),x.rotation.y=l,x.castShadow=!0,s.add(x);const S=Math.max(2,Math.floor((e-.2)/1.2));for(let C=0;C<S;C++){const A=(C+.5)/S-.5,b=new rt(new Ut(.1,.32,.1),_);b.position.set(r.x+o.x*d*(n/2+.25)+c.x*A*(e-.1),.86,r.z+o.z*d*(n/2+.25)+c.z*A*(e-.1)),b.rotation.y=l,b.castShadow=!0,s.add(b)}}const p=new Ct({color:10129020,roughness:.92,metalness:0});for(const d of[-1,1]){const v=new rt(new Ut(n+1,.55,.7),p);v.position.set(r.x+c.x*d*(e/2+.1),.18,r.z+c.z*d*(e/2+.1)),v.rotation.y=l,v.castShadow=!0,v.receiveShadow=!0,s.add(v)}return{group:s,atT:t,center:r}}function Fm(){const i=new ae;i.name="track";const t=[new P(-13,.5,0),new P(-12,.5,-5.5),new P(-7.5,.5,-9),new P(0,.5,-10.5),new P(7.5,.5,-9),new P(12,.5,-5.5),new P(14,.5,-2),new P(14.5,.5,0),new P(14,.5,2),new P(12,.5,6),new P(7.5,.5,9.5),new P(0,.5,10.5),new P(-7.5,.5,9.5),new P(-12,.5,6)],e=new Fr(t,!0,"catmullrom",.5);e.arcLengthDivisions=400;const n=new Ct({color:7031340,roughness:.85,metalness:.05}),s=new Ct({color:10133928,roughness:.35,metalness:.85}),r=new Ct({color:10259307,roughness:.95});{const u=[],h=[];for(let _=0;_<=360;_++){const p=_/360,d=e.getPointAt(p),v=e.getTangentAt(p).setY(0).normalize(),x=-v.z,S=v.x;u.push(d.x+x*.95,.48,d.z+S*.95),u.push(d.x-x*.95,.48,d.z-S*.95)}for(let _=0;_<360;_++){const p=_*2,d=_*2+1,v=(_+1)*2,x=(_+1)*2+1;h.push(p,d,v,d,x,v)}const m=new Ce;m.setAttribute("position",new te(u,3)),m.setIndex(h),m.computeVertexNormals();const g=new rt(m,r);g.receiveShadow=!0,i.add(g)}{const l=e.getLength(),h=Math.floor(l/.32),f=new Ut(1.5,.07,.13);for(let m=0;m<h;m++){const g=m/h,_=e.getPointAt(g),p=e.getTangentAt(g).setY(0).normalize(),d=Math.atan2(p.x,p.z),v=new rt(f,n);v.position.set(_.x,.51,_.z),v.rotation.y=d,v.castShadow=!1,v.receiveShadow=!0,i.add(v)}}for(const f of[-1,1]){const m=[],g=[],_=f*.62;for(let v=0;v<=600;v++){const x=v/600,S=e.getPointAt(x),C=e.getTangentAt(x).setY(0).normalize(),A=-C.z,b=C.x,O=S.x+A*_,M=S.z+b*_;m.push(O,.55+.05,M),m.push(O,.55,M)}for(let v=0;v<600;v++){const x=v*2,S=v*2+1,C=(v+1)*2,A=(v+1)*2+1;g.push(x,S,C,S,A,C)}const p=new Ce;p.setAttribute("position",new te(m,3)),p.setIndex(g),p.computeVertexNormals();const d=new rt(p,s);d.castShadow=!1,d.receiveShadow=!0,i.add(d)}const a=0,o=e.getPointAt(a).clone(),c=e.getTangentAt(a).setY(0).normalize();return new P(c.z,0,-c.x),o.z+=0,{group:i,curve:e,stationT:a,stationPos:o}}function zm({position:i,tangent:t}){const e=new ae;e.name="station",new P(-t.z,0,t.x);const n=i.z+1.7,s=new Ct({color:11117466,roughness:.92,metalness:.02}),r=new Ut(7,.18,2),a=new rt(r,s);a.position.set(i.x-.6,.36,n),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const o=new Ct({color:15255129,roughness:.7}),c=new rt(new Ut(6.8,.02,.1),o);c.position.set(i.x-.6,.46,n-.95),c.castShadow=!1,c.receiveShadow=!0,e.add(c);const l=new Ct({color:13150328,roughness:.85}),u=new Ct({color:7222054,roughness:.7}),h=new Ct({color:4007448,roughness:.6}),f=new Ut(5.6,1.6,1.6),m=new rt(f,l);m.position.set(i.x-.4,.9+.18,n-.6),m.castShadow=!0,m.receiveShadow=!0,e.add(m);const g=bc(5.6,2,.9),_=new rt(g,u);_.position.set(i.x-.4,.9+.18+.8,n-.6),_.rotation.y=Math.PI/2,_.castShadow=!0,e.add(_);const p=new rt(new Ut(5.8,.1,1.75),h);p.position.set(i.x-.4,.9+.18+.86,n-.6),p.castShadow=!0,e.add(p);const d=new Ct({color:2770008,roughness:.3,metalness:.3,emissive:0}),v=[];for(let Y=0;Y<5;Y++){const D=new rt(new Ut(.7,.5,.05),d.clone()),I=(Y-2)*1.05;D.position.set(i.x-.4+I,1.3,n-.6+.83),D.userData.baseEmissive=2241348,D.userData.isWindow=!0,D.userData.isNightLit=!0,v.push(D.material),e.add(D)}for(let Y=0;Y<5;Y++){const D=(Y-2)*1.05,I=new rt(new Ut(.78,.06,.05),h);I.position.set(i.x-.4+D,1.62,n-.6+.83),e.add(I);const V=new rt(new Ut(.78,.06,.05),h);V.position.set(i.x-.4+D,.98,n-.6+.83),e.add(V)}const x=new Ct({color:4007448,roughness:.7}),S=new rt(new Ut(.6,1,.06),x);S.position.set(i.x-2.95,.6+.18,n-.6+.8),S.castShadow=!0,e.add(S);const C=new rt(new Ut(6.4,.05,1.4),new Ct({color:7222054,roughness:.7}));C.position.set(i.x-.6,2.55,n-1.4),C.castShadow=!0,e.add(C);for(const Y of[-2.6,1.4]){const D=new rt(new ge(.05,.05,1.3,8),h);D.position.set(i.x+Y,1.85,n-1.8),D.castShadow=!0,e.add(D)}const A=new rt(new Ut(.9,1.2,.9),l);A.position.set(i.x+2.5,1.7,n-.6),A.castShadow=!0,e.add(A);const b=new rt(new Ut(1,.4,1),u);b.position.set(i.x+2.5,2.5,n-.6),b.castShadow=!0,e.add(b);const O=new rt(new zi(.15,.6,8),h);O.position.set(i.x+2.5,3,n-.6),O.castShadow=!0,e.add(O);const M=new Ct({color:15392968,roughness:.4,emissive:0});M.userData.baseEmissive=16765578,M.userData.isNightLit=!0,v.push(M);const T=new rt(new zr(.25,16),M);T.position.set(i.x+2.96,2,n-.6),T.rotation.y=Math.PI/2,e.add(T);const z=[];for(let Y=0;Y<4;Y++){const D=new rt(new ge(.04,.04,1.6,6),h),I=(Y-1.5)*1.5;D.position.set(i.x+I,1.9,n-1.8),D.castShadow=!0,e.add(D);const V=Ac({size:.18});V.position.set(i.x+I,2.8,n-1.8),e.add(V),z.push(...V.userData.emissiveMaterials)}const H=new rt(new Ut(2,.4,.05),new Ct({color:4007448,roughness:.6}));return H.position.set(i.x-.4,2.4,n-.6+.83),H.castShadow=!0,e.add(H),{group:e,emissiveMaterials:[...v,...z]}}function bc(i,t,e){const n=new Ce,s=i/2,r=t/2,a=e,o=new Float32Array([-s,0,-r,s,0,-r,0,a,-r,-s,0,r,s,0,r,0,a,r,-s,0,-r,0,a,-r,-s,0,r,-s,0,r,0,a,-r,0,a,r,s,0,-r,s,0,r,0,a,-r,0,a,-r,s,0,r,0,a,r]);return n.setAttribute("position",new Oe(o,3)),n.computeVertexNormals(),n}function Bm({center:i=new P(-6,0,5),count:t=7}={}){const e=Cs(8917454),n=new ae;n.name="town-houses";const s=[],r=[{wall:15393224,roof:7090981,trim:4007448},{wall:14070918,roof:4859418,trim:2758672},{wall:13352861,roof:6171168,trim:4007448},{wall:15714723,roof:5910046,trim:2758672},{wall:12558720,roof:5187608,trim:4007448},{wall:11122828,roof:4859418,trim:2758672},{wall:14270616,roof:6172194,trim:4007448}],a=[];for(let o=0;o<t;o++){const c=-1+(o+.5)/t*2.2,l=i.x+c*5,u=i.z+(e()-.4)*2.4+Math.abs(c)*.6;a.push({x:l,z:u})}a.sort((o,c)=>o.x-c.x);for(let o=0;o<a.length;o++){const c=a[o],l=r[o%r.length],u=zn(e,1.4,2),h=zn(e,1.2,1.7),f=zn(e,1.4,2),m=e()*.4-.2,g=new ae,_=new Ct({color:l.wall,roughness:.85}),p=new rt(new Ut(u,h,f),_);p.position.y=h/2,p.castShadow=!0,p.receiveShadow=!0,g.add(p);const d=new Ct({color:l.roof,roughness:.7}),v=new rt(bc(u+.18,f+.18,.7),d);v.position.y=h,v.rotation.y=Math.PI/2,v.castShadow=!0,g.add(v);const x=new Ct({color:l.trim,roughness:.6}),S=.35,C=.75,A=new rt(new Ut(S,C,.05),x);A.position.set(0,C/2,f/2+.01),g.add(A);const b=new Ct({color:2770008,roughness:.3,metalness:.3,emissive:0});b.userData.baseEmissive=2767434,b.userData.isNightLit=!0,s.push(b);const O=[{x:-u/4,y:h*.6,z:f/2+.02},{x:u/4,y:h*.6,z:f/2+.02}];for(const M of O){const T=new rt(new Ut(.32,.32,.04),b);T.position.set(M.x,M.y,M.z),g.add(T);const z=new rt(new Ut(.04,.32,.02),x);z.position.set(M.x,M.y,M.z+.01),g.add(z);const H=new rt(new Ut(.32,.04,.02),x);H.position.set(M.x,M.y,M.z+.01),g.add(H)}if(e()>.4){const M=new rt(new Ut(.32,.32,.04),b);M.position.set(u/2+.01,h*.6,0),M.rotation.y=Math.PI/2,g.add(M)}if(e()>.3){const M=new rt(new Ut(.22,.6,.22),new Ct({color:8016448,roughness:.85}));M.position.set(u*.25,h+.55,-f*.1),M.castShadow=!0,g.add(M)}g.position.set(c.x,0,c.z),g.rotation.y=m,n.add(g)}return{group:n,emissiveMaterials:s}}function Hm({count:i=32,avoidFn:t=()=>!1,riverCenterline:e=null}={}){const n=Cs(4517393),s=new ae;s.name="trees";let r=0,a=0;for(;r<i&&a<i*12;){a++;const o=zn(n,-14,14),c=zn(n,-14,14);if(t(o,c))continue;if(e){let f=1/0;for(let m=0;m<=40;m++){const g=m/40,_=e.getPointAt(g),p=Math.hypot(_.x-o,_.z-c);p<f&&(f=p)}if(f<2.2)continue}const l=n()>.55?"broad":"conifer",u=Gm(l,n);u.position.set(o,0,c),u.rotation.y=n()*Math.PI*2,s.add(u),r++}return s}function Gm(i,t){const e=new ae,n=new Ct({color:5913122,roughness:.9}),s=i==="broad"?.8:.5,r=new rt(new ge(.07,.1,s,6),n);if(r.position.y=s/2,r.castShadow=!0,e.add(r),i==="broad"){const a=new Ct({color:Da(t,[6065210,7251258,5208626,8431178,6982208]),roughness:.85}),o=zn(t,.4,.7),c=new rt(new Es(o,1),a);if(c.position.y=s+o*.7,c.castShadow=!0,e.add(c),t()>.4){const l=o*.6,u=new rt(new Es(l,1),a);u.position.y=s+o*1.3,u.castShadow=!0,e.add(u)}}else{const a=new Ct({color:Da(t,[3497258,4550198,3103270,4878902]),roughness:.9}),o=3,c=zn(t,.35,.55);for(let l=0;l<o;l++){const u=c*(1-l*.22),h=new rt(new zi(u,.6,8),a);h.position.y=s+l*.35+.3,h.castShadow=!0,e.add(h)}}return e}function Vm({positions:i=[]}={}){const t=new ae;t.name="lamps";const e=[];for(const n of i){const s=km();s.position.set(n.x,0,n.z),s.rotation.y=n.yaw||0,e.push(...s.userData.emissiveMaterials),t.add(s)}return{group:t,emissiveMaterials:e}}function Ac({size:i=.18}={}){const t=new ae,e=new Ct({color:16770216,emissive:0,roughness:.4,transparent:!0,opacity:.95});e.userData.baseEmissive=16757084,e.userData.isNightLit=!0;const n=new rt(new Ni(i,12,8),e);t.add(n);const s=new Ct({color:4007448,roughness:.6}),r=new rt(new zi(i*1.1,i*.7,8),s);return r.position.y=i*1,r.rotation.x=Math.PI,t.add(r),t.userData.emissiveMaterials=[e],t}function km(){const i=new ae,t=new Ct({color:2758672,roughness:.7}),e=new rt(new ge(.12,.16,.2,8),t);e.position.y=.1,e.castShadow=!0,i.add(e);const n=new rt(new ge(.05,.05,1.4,8),t);n.position.y=.9,n.castShadow=!0,i.add(n);const s=new rt(new ge(.03,.03,.3,8),t);s.position.set(.13,1.55,0),s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);const r=Ac({size:.14});return r.position.set(.27,1.55,0),i.add(r),i.userData.emissiveMaterials=r.userData.emissiveMaterials,i}function Wm({paths:i=[]}={}){const t=new ae;t.name="roads";const e=new Ct({color:3816e3,roughness:.92,metalness:0}),n=new Ct({color:10129020,roughness:.9}),s=1.6;for(const r of i)for(let a=0;a<r.length-1;a++){const o=r[a],c=r[a+1],l=c.x-o.x,u=c.z-o.z,h=Math.hypot(l,u),f=(o.x+c.x)/2,m=(o.z+c.z)/2,g=Math.atan2(l,u),_=new rt(new Tn(s,h),e);_.rotation.x=-Math.PI/2,_.rotation.z=-g,_.position.set(f,.012,m),_.receiveShadow=!0,t.add(_);for(const p of[-1,1]){const d=new rt(new Tn(.08,h),n);d.rotation.x=-Math.PI/2,d.rotation.z=-g,d.position.set(f+Math.cos(g)*(s/2+.04)*-p,.013,m+Math.sin(g)*(s/2+.04)*-p),d.receiveShadow=!0,t.add(d)}}return t}function Xm({segments:i=[]}={}){const t=new ae;t.name="fences";const e=new Ct({color:15720901,roughness:.7});for(const n of i){const{a:s,b:r}=n,a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o),l=(s.x+r.x)/2,u=(s.z+r.z)/2,h=Math.atan2(a,o),f=Math.max(2,Math.floor(c/.4)),m=new rt(new Ut(.06,.06,c),e);m.position.set(l,.18,u),m.rotation.y=h,m.castShadow=!0,m.receiveShadow=!0,t.add(m);const g=m.clone();g.position.y=.42,t.add(g);for(let _=0;_<f;_++){const p=(_+.5)/f-.5,d=new rt(new Ut(.08,.55,.04),e);d.position.set(l+Math.sin(h)*p*c,.28,u+Math.cos(h)*p*c),d.rotation.y=h,d.castShadow=!0,t.add(d)}}return t}function Ym(){const i=new ae;i.name="locomotive";const t=new Ct({color:3103290,roughness:.55,metalness:.25}),e=new Ct({color:7222054,roughness:.7}),n=new Ct({color:15909198,roughness:.4,metalness:.4}),s=new Ct({color:2759184,roughness:.7,metalness:.4}),r=new Ct({color:12566463,roughness:.4,metalness:.8}),a=new rt(new ge(.32,.32,1.4,16),t);a.rotation.z=Math.PI/2,a.position.set(.4,.5,0),a.castShadow=!0,a.receiveShadow=!0,i.add(a);const o=new rt(new ge(.34,.34,.05,16),t);o.rotation.z=Math.PI/2,o.position.set(1.1,.5,0),i.add(o);const c=new Ct({color:16770216,emissive:0,roughness:.4});c.userData.baseEmissive=16765578,c.userData.isNightLit=!0,i.userData.emissiveMaterials=[c];const l=new rt(new Ni(.12,12,8),c);l.position.set(1.18,.55,0),i.add(l);const u=new rt(new ge(.1,.13,.4,10),n);u.position.set(.5,1,0),u.castShadow=!0,i.add(u);const h=new rt(new ge(.13,.13,.06,10),n);h.position.set(.5,1.22,0),i.add(h);const f=new rt(new Ni(.14,12,8,0,Math.PI*2,0,Math.PI/2),n);f.position.set(.2,.82,0),i.add(f);const m=new rt(new Ut(.7,.7,.7),e);m.position.set(-.6,.45,0),m.castShadow=!0,m.receiveShadow=!0,i.add(m);const g=new rt(new Ut(.78,.08,.78),n);g.position.set(-.6,.83,0),g.castShadow=!0,i.add(g);const _=new Ct({color:1714746,emissive:0,roughness:.3});_.userData.baseEmissive=2767434,_.userData.isNightLit=!0,i.userData.emissiveMaterials.push(_);for(const x of[-.28,.28]){const S=new rt(new Tn(.18,.22),_);S.position.set(-.95,.6,x),S.rotation.y=Math.PI/2,i.add(S)}const p=new rt(new Ut(.12,.16,.7),n);p.position.set(1.18,.18,0),p.castShadow=!0,i.add(p);for(const x of[.6,0,-.6])for(const S of[-.32,.32]){const C=new rt(new ge(.18,.18,.08,12),s);C.rotation.x=Math.PI/2,C.position.set(x,.18,S),C.castShadow=!0,i.add(C);const A=new rt(new ge(.07,.07,.09,8),n);A.rotation.x=Math.PI/2,A.position.set(x,.18,S+(S>0?.005:-.005)),i.add(A)}const d=new rt(new Ut(.9,.04,.04),r);d.position.set(.3,.18,.32),i.add(d);const v=d.clone();return v.position.z=-.32,i.add(v),i}function Ua({bodyColor:i=7222054,roofColor:t=4007448}={}){const e=new ae;e.name="carriage";const n=new Ct({color:i,roughness:.65}),s=new Ct({color:t,roughness:.6}),r=new Ct({color:15909198,roughness:.4,metalness:.4}),a=new Ct({color:2759184,roughness:.7}),o=new rt(new Ut(1.9,.7,.7),n);o.position.y=.55,o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new rt(new Ut(2,.08,.78),s);c.position.y=.94,c.castShadow=!0,e.add(c);const l=new rt(new Ut(1.95,.06,.74),r);l.position.y=.22,e.add(l);const u=new Ct({color:15258778,roughness:.3,emissive:0});u.userData.baseEmissive=16765578,u.userData.isNightLit=!0,e.userData.emissiveMaterials=[u];for(let h=0;h<4;h++){const f=(h-1.5)*.4;for(const m of[-.36,.36]){const g=new rt(new Tn(.28,.32),u);g.position.set(f,.6,m),m>0?g.rotation.y=0:g.rotation.y=Math.PI,e.add(g);const _=new rt(new Ut(.32,.36,.04),r);_.position.set(f,.6,m+(m>0?.01:-.01)),e.add(_)}}for(const h of[-1,1]){const f=new rt(new ge(.05,.05,.18,6),r);f.rotation.z=Math.PI/2,f.position.set(h*1,.4,0),e.add(f)}for(const h of[-.6,.6])for(const f of[-.32,.32]){const m=new rt(new ge(.18,.18,.08,12),a);m.rotation.x=Math.PI/2,m.position.set(h,.18,f),m.castShadow=!0,e.add(m);const g=new rt(new ge(.07,.07,.09,8),r);g.rotation.x=Math.PI/2,g.position.set(h,.18,f+(f>0?.005:-.005)),e.add(g)}return e}function qm(){const i=new ae;i.name="train";const t=Ym(),e=Ua({bodyColor:7222054,roofColor:4007448}),n=Ua({bodyColor:3694206,roofColor:1714746});i.add(t),i.add(e),i.add(n);const s=[...t.userData.emissiveMaterials,...e.userData.emissiveMaterials,...n.userData.emissiveMaterials];return{group:i,cars:[t,e,n],emissiveMaterials:s}}class Zm{constructor({curve:t,cars:e,options:n={}}){this.curve=t,this.cars=e,this.trainT=n.startT??.1,this.stationT=n.stationT??0,this.speed=n.speed??1,this.baseLinearSpeed=(t.getLength()??60)/30,this.dwell=n.dwellSeconds??2,this.elapsedAtStation=-1,this.spacing=n.spacing??.06,this.lastTrainT=this.trainT,this.isPlaying=!0,this.onDwellStart=n.onDwellStart??(()=>{}),this.onDwellEnd=n.onDwellEnd??(()=>{}),this.offsets=e.map((s,r)=>r*this.spacing),this.placeCars()}setSpeed(t){this.speed=Math.max(0,t)}setPlaying(t){this.isPlaying=t}reset({startT:t=this.stationT+.05}={}){this.trainT=(t%1+1)%1,this.lastTrainT=this.trainT,this.elapsedAtStation=-1,this.placeCars()}getDwellRemaining(){return this.elapsedAtStation>0?this.dwell-this.elapsedAtStation:0}isAtStation(){return this.elapsedAtStation>=0}update(t){if(!this.isPlaying)return;if(this.elapsedAtStation>=0){this.elapsedAtStation+=t,this.elapsedAtStation>=this.dwell&&(this.elapsedAtStation=-1,this.onDwellEnd&&this.onDwellEnd());return}const e=this.speed*this.baseLinearSpeed*t/this.curve.getLength(),n=this.trainT;let s=n+e;for(;s>=1;)s-=1;for(;s<0;)s+=1;this._crossedForward(n,s,this.stationT,e)?(this.trainT=this.stationT,this.elapsedAtStation=0,this.onDwellStart&&this.onDwellStart()):this.trainT=s,this.lastTrainT=this.trainT,this.placeCars()}_crossedForward(t,e,n,s){return s>=.5||t===e?!1:t<e?t<n&&e>=n:n>=t||n<e}placeCars(){for(let t=0;t<this.cars.length;t++){const e=this.cars[t];let n=this.trainT-this.offsets[t];for(;n<0;)n+=1;for(;n>=1;)n-=1;const s=this.curve.getPointAt(n),r=this.curve.getTangentAt(n).setY(0).normalize(),a=t===0?1:.95;e.position.set(s.x-r.x*a,.6,s.z-r.z*a);const o=Math.atan2(r.x,r.z);e.rotation.y=o}}}function Km(){const i=new ae;i.name="lighting";const t=new bm(12626080,4864550,.55);i.add(t);const e=new ba(16767400,2.2);e.position.set(-12,16,10),e.target.position.set(0,0,0),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=80;const n=20;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.bias=-6e-4,e.shadow.normalBias=.02,i.add(e),i.add(e.target);const s=new ba(11056592,.35);s.position.set(14,8,-6),s.target.position.set(0,0,0),i.add(s),i.add(s.target);const r=new Cm(16773328,.18);i.add(r);const a=new Ir(2760474,35,90),o={day:{sunColor:16773852,sunIntensity:2.5,fillColor:11978976,fillIntensity:.4,hemiSky:13162728,hemiGround:5917234,hemiIntensity:.7,ambientColor:16774624,ambientIntensity:.22,fogColor:13228262,fogNear:38,fogFar:95,bgColor:12900072,emissiveStrength:0},sunset:{sunColor:16758904,sunIntensity:2.4,fillColor:8955088,fillIntensity:.32,hemiSky:16763036,hemiGround:3811352,hemiIntensity:.6,ambientColor:16767400,ambientIntensity:.2,fogColor:13144176,fogNear:36,fogFar:92,bgColor:14854264,emissiveStrength:0},night:{sunColor:9087192,sunIntensity:.55,fillColor:4872824,fillIntensity:.22,hemiSky:2766936,hemiGround:1316380,hemiIntensity:.32,ambientColor:8954048,ambientIntensity:.18,fogColor:1581114,fogNear:30,fogFar:95,bgColor:923696,emissiveStrength:1}};function c(u){const h=o[u];if(h)return e.color.setHex(h.sunColor),e.intensity=h.sunIntensity,s.color.setHex(h.fillColor),s.intensity=h.fillIntensity,t.color.setHex(h.hemiSky),t.groundColor.setHex(h.hemiGround),t.intensity=h.hemiIntensity,r.color.setHex(h.ambientColor),r.intensity=h.ambientIntensity,a.color.setHex(h.fogColor),a.near=h.fogNear,a.far=h.fogFar,{bgColor:h.bgColor,fog:a,emissiveStrength:h.emissiveStrength}}const l=c("sunset");return{group:i,apply:c,presets:o,fog:a,sun:e,fill:s,hemi:t,ambient:r,initial:l}}function jm(i,t){for(const e of i){if(!e)continue;const n=e.userData?.baseEmissive;typeof n=="number"&&(t>0?(e.emissive.setHex(n),e.emissiveIntensity=1*t):(e.emissive.setHex(0),e.emissiveIntensity=0))}}const Rc=document.getElementById("scene-canvas"),$e=new _c({canvas:Rc,antialias:!0,alpha:!1,powerPreference:"high-performance"});$e.setPixelRatio(Math.min(window.devicePixelRatio,2));$e.setSize(window.innerWidth,window.innerHeight,!1);$e.shadowMap.enabled=!0;$e.shadowMap.type=Oa;$e.outputColorSpace=me;$e.toneMapping=za;$e.toneMappingExposure=1.05;const xe=new Kp;xe.background=new Gt(14854264);const wn=new Ge(35,window.innerWidth/window.innerHeight,.1,200),Cc=new P(24,20,24),Vr=new P(-2,0,0);wn.position.copy(Cc);wn.lookAt(Vr);const Fe=new Dm(wn,Rc);Fe.target.copy(Vr);Fe.enableDamping=!0;Fe.dampingFactor=.08;Fe.minDistance=14;Fe.maxDistance=55;Fe.minPolarAngle=.18;Fe.maxPolarAngle=Math.PI*.46;Fe.enablePan=!1;Fe.rotateSpeed=.65;Fe.zoomSpeed=.85;const Jm=Um({size:30,thickness:1.4});xe.add(Jm);const $m=Im({size:30,segments:56});xe.add($m);const{mesh:Qm,centerline:Pc}=Nm({});xe.add(Qm);const tg=Om({centerline:Pc,atT:.62,length:5.2});xe.add(tg.group);const ln=Fm();xe.add(ln.group);const Lc=zm({position:ln.stationPos,tangent:ln.curve.getTangentAt(ln.stationT)});xe.add(Lc.group);const eg=new P(-6.5,0,5.5),ys=Bm({center:eg,count:7});xe.add(ys.group);const Dc=[[{x:-13,z:2},{x:-10,z:3},{x:-7,z:4},{x:-3,z:4.8},{x:1,z:5},{x:5,z:5.2}],[{x:-7,z:4},{x:-7,z:7.5},{x:-5,z:9}],[{x:5,z:5.2},{x:9,z:4},{x:11.5,z:2.5},{x:13,z:0}]],ng=Wm({paths:Dc});xe.add(ng);const Uc=[];for(let i=0;i<7;i++){const t=i/6,e=-13+t*18,n=1.8+Math.sin(t*Math.PI)*.6+(i%2===0?-.9:.9);Uc.push({x:e,z:n})}const Ic=Vm({positions:Uc});xe.add(Ic.group);const ig=[{a:{x:-10.5,z:3},b:{x:-3,z:3.4}},{a:{x:-3,z:3.4},b:{x:-3,z:7}}],sg=Xm({segments:ig});xe.add(sg);const rg=(i,t)=>{for(let e=0;e<32;e++){const n=e/32,s=ln.curve.getPointAt(n);if(Math.hypot(s.x-i,s.z-t)<1.4)return!0}for(const e of Dc)for(let n=0;n<e.length-1;n++){const s=e[n],r=e[n+1],a=r.x-s.x,o=r.z-s.z,c=a*a+o*o;if(c<.001)continue;let l=((i-s.x)*a+(t-s.z)*o)/c;l=Math.max(0,Math.min(1,l));const u=s.x+a*l,h=s.z+o*l;if(Math.hypot(u-i,h-t)<1.3)return!0}for(const e of Nc)if(Math.hypot(e.x-i,e.z-t)<1.4)return!0;return!1},Nc=[];ys.group.traverse(i=>{i.isGroup&&i!==ys.group&&i.children.length>0&&Nc.push({x:i.position.x,z:i.position.z})});const og=Hm({count:28,avoidFn:rg,riverCenterline:Pc});xe.add(og);const kr=qm();xe.add(kr.group);const un=new Zm({curve:ln.curve,cars:kr.cars,stationT:ln.stationT,startT:ln.stationT+.07,speed:1}),Oc=Km();xe.add(Oc.group);const ag=[...Lc.emissiveMaterials,...ys.emissiveMaterials,...Ic.emissiveMaterials,...kr.emissiveMaterials],we={isPlaying:!0,timeOfDay:"sunset",speed:1};function Wr(i){const t=Oc.apply(i);t&&t.bgColor!==void 0&&xe.background.setHex(t.bgColor),xe.fog=t.fog,jm(ag,t.emissiveStrength),we.timeOfDay=i}Wr("sunset");const Re={btnPlay:document.getElementById("btn-play"),btnReset:document.getElementById("btn-reset"),speed:document.getElementById("speed"),speedVal:document.getElementById("speed-val"),daynight:document.getElementById("daynight"),daynightLabel:document.getElementById("daynight-label"),hudState:document.getElementById("hud-state"),hudSpeed:document.getElementById("hud-speed"),hudTime:document.getElementById("hud-time"),hudDwell:document.getElementById("hud-dwell")};function vi(){Re.hudState.textContent=we.isPlaying?"运行中":"已暂停",Re.hudSpeed.textContent=we.speed.toFixed(2)+"×",Re.hudTime.textContent={sunset:"傍晚",day:"白天",night:"夜晚"}[we.timeOfDay]||we.timeOfDay,un.isAtStation()?Re.hudDwell.textContent=un.getDwellRemaining().toFixed(1)+"s":Re.hudDwell.textContent="—"}Re.btnPlay.addEventListener("click",()=>{we.isPlaying=!we.isPlaying,un.setPlaying(we.isPlaying),Re.btnPlay.textContent=we.isPlaying?"暂停":"运行",vi()});Re.btnReset.addEventListener("click",()=>{un.reset({startT:ln.stationT+.07}),we.speed=1,we.isPlaying=!0,un.setPlaying(!0),un.setSpeed(we.speed),Re.speed.value="1",Re.speedVal.textContent="1.00×",Re.btnPlay.textContent="暂停",wn.position.copy(Cc),Fe.target.copy(Vr),Fe.update(),vi()});Re.speed.addEventListener("input",i=>{we.speed=parseFloat(i.target.value),un.setSpeed(we.speed),Re.speedVal.textContent=we.speed.toFixed(2)+"×",vi()});let fs=0;const mr=["sunset","day","night"];Re.daynight.addEventListener("click",()=>{fs=(fs+1)%mr.length,Wr(mr[fs]),Re.daynight.classList.toggle("night",mr[fs]==="night"),vi()});window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;wn.aspect=i/t,wn.updateProjectionMatrix(),$e.setSize(i,t,!1)});const cg=new Pm;function Fc(){const i=Math.min(cg.getDelta(),.05);un.update(i),Fe.update(),$e.render(xe,wn),performance.now()-Ia>100&&(vi(),Ia=performance.now()),requestAnimationFrame(Fc)}let Ia=0;vi();requestAnimationFrame(Fc);window.__sandbox={scene:xe,camera:wn,renderer:$e,motion:un,state:we,applyPreset:Wr};
