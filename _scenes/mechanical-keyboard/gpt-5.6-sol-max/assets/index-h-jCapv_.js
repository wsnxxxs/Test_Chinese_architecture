(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fh={exports:{}},Fo={};var G_;function XS(){if(G_)return Fo;G_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=t,Fo.jsx=i,Fo.jsxs=i,Fo}var V_;function WS(){return V_||(V_=1,fh.exports=XS()),fh.exports}var J=WS(),hh={exports:{}},ce={};var k_;function YS(){if(k_)return ce;k_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(L,nt,Et){this.props=L,this.context=nt,this.refs=y,this.updater=Et||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=_.prototype;function N(L,nt,Et){this.props=L,this.context=nt,this.refs=y,this.updater=Et||b}var w=N.prototype=new B;w.constructor=N,R(w,_.prototype),w.isPureReactComponent=!0;var G=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function C(L,nt,Et){var Ct=Et.ref;return{$$typeof:r,type:L,key:nt,ref:Ct!==void 0?Ct:null,props:Et}}function D(L,nt){return C(L.type,nt,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function W(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return nt[Et]})}var ot=/\/+/g;function dt(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?W(""+L.key):nt.toString(36)}function ct(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,nt,Et,Ct,Ot){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ut=!1;if(L===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(L.$$typeof){case r:case t:ut=!0;break;case x:return ut=L._init,P(ut(L._payload),nt,Et,Ct,Ot)}}if(ut)return Ot=Ot(L),ut=Ct===""?"."+dt(L,0):Ct,G(Ot)?(Et="",ut!=null&&(Et=ut.replace(ot,"$&/")+"/"),P(Ot,nt,Et,"",function(Vt){return Vt})):Ot!=null&&(V(Ot)&&(Ot=D(Ot,Et+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(ot,"$&/")+"/")+ut)),nt.push(Ot)),1;ut=0;var Nt=Ct===""?".":Ct+":";if(G(L))for(var It=0;It<L.length;It++)Ct=L[It],it=Nt+dt(Ct,It),ut+=P(Ct,nt,Et,it,Ot);else if(It=M(L),typeof It=="function")for(L=It.call(L),It=0;!(Ct=L.next()).done;)Ct=Ct.value,it=Nt+dt(Ct,It++),ut+=P(Ct,nt,Et,it,Ot);else if(it==="object"){if(typeof L.then=="function")return P(ct(L),nt,Et,Ct,Ot);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function Q(L,nt,Et){if(L==null)return L;var Ct=[],Ot=0;return P(L,Ct,"","",function(it){return nt.call(Et,it,Ot++)}),Ct}function j(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Rt={map:Q,forEach:function(L,nt,Et){Q(L,function(){nt.apply(this,arguments)},Et)},count:function(L){var nt=0;return Q(L,function(){nt++}),nt},toArray:function(L){return Q(L,function(nt){return nt})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ce.Activity=g,ce.Children=Rt,ce.Component=_,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(L,nt,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ct=R({},L.props),Ot=L.key;if(nt!=null)for(it in nt.key!==void 0&&(Ot=""+nt.key),nt)!H.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(Ct[it]=nt[it]);var it=arguments.length-2;if(it===1)Ct.children=Et;else if(1<it){for(var ut=Array(it),Nt=0;Nt<it;Nt++)ut[Nt]=arguments[Nt+2];Ct.children=ut}return C(L.type,Ot,Ct)},ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ce.createElement=function(L,nt,Et){var Ct,Ot={},it=null;if(nt!=null)for(Ct in nt.key!==void 0&&(it=""+nt.key),nt)H.call(nt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Ot[Ct]=nt[Ct]);var ut=arguments.length-2;if(ut===1)Ot.children=Et;else if(1<ut){for(var Nt=Array(ut),It=0;It<ut;It++)Nt[It]=arguments[It+2];Ot.children=Nt}if(L&&L.defaultProps)for(Ct in ut=L.defaultProps,ut)Ot[Ct]===void 0&&(Ot[Ct]=ut[Ct]);return C(L,it,Ot)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=V,ce.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:j}},ce.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ce.startTransition=function(L){var nt=O.T,Et={};O.T=Et;try{var Ct=L(),Ot=O.S;Ot!==null&&Ot(Et,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(F,St)}catch(it){St(it)}finally{nt!==null&&Et.types!==null&&(nt.types=Et.types),O.T=nt}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(L){return O.H.use(L)},ce.useActionState=function(L,nt,Et){return O.H.useActionState(L,nt,Et)},ce.useCallback=function(L,nt){return O.H.useCallback(L,nt)},ce.useContext=function(L){return O.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,nt){return O.H.useDeferredValue(L,nt)},ce.useEffect=function(L,nt){return O.H.useEffect(L,nt)},ce.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(L,nt,Et){return O.H.useImperativeHandle(L,nt,Et)},ce.useInsertionEffect=function(L,nt){return O.H.useInsertionEffect(L,nt)},ce.useLayoutEffect=function(L,nt){return O.H.useLayoutEffect(L,nt)},ce.useMemo=function(L,nt){return O.H.useMemo(L,nt)},ce.useOptimistic=function(L,nt){return O.H.useOptimistic(L,nt)},ce.useReducer=function(L,nt,Et){return O.H.useReducer(L,nt,Et)},ce.useRef=function(L){return O.H.useRef(L)},ce.useState=function(L){return O.H.useState(L)},ce.useSyncExternalStore=function(L,nt,Et){return O.H.useSyncExternalStore(L,nt,Et)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.2.6",ce}var X_;function Gd(){return X_||(X_=1,hh.exports=YS()),hh.exports}var Be=Gd(),dh={exports:{}},Ho={},ph={exports:{}},mh={};var W_;function jS(){return W_||(W_=1,(function(r){function t(P,Q){var j=P.length;P.push(Q);t:for(;0<j;){var St=j-1>>>1,Rt=P[St];if(0<l(Rt,Q))P[St]=Q,P[j]=Rt,j=St;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Q=P[0],j=P.pop();if(j!==Q){P[0]=j;t:for(var St=0,Rt=P.length,L=Rt>>>1;St<L;){var nt=2*(St+1)-1,Et=P[nt],Ct=nt+1,Ot=P[Ct];if(0>l(Et,j))Ct<Rt&&0>l(Ot,Et)?(P[St]=Ot,P[Ct]=j,St=Ct):(P[St]=Et,P[nt]=j,St=nt);else if(Ct<Rt&&0>l(Ot,j))P[St]=Ot,P[Ct]=j,St=Ct;else break t}}return Q}function l(P,Q){var j=P.sortIndex-Q.sortIndex;return j!==0?j:P.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,S=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var Q=i(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=P)s(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function G(P){if(R=!1,w(P),!b)if(i(m)!==null)b=!0,F||(F=!0,W());else{var Q=i(p);Q!==null&&ct(G,Q.startTime-P)}}var F=!1,O=-1,H=5,C=-1;function D(){return y?!0:!(r.unstable_now()-C<H)}function V(){if(y=!1,F){var P=r.unstable_now();C=P;var Q=!0;try{t:{b=!1,R&&(R=!1,B(O),O=-1),M=!0;var j=S;try{e:{for(w(P),g=i(m);g!==null&&!(g.expirationTime>P&&D());){var St=g.callback;if(typeof St=="function"){g.callback=null,S=g.priorityLevel;var Rt=St(g.expirationTime<=P);if(P=r.unstable_now(),typeof Rt=="function"){g.callback=Rt,w(P),Q=!0;break e}g===i(m)&&s(m),w(P)}else s(m);g=i(m)}if(g!==null)Q=!0;else{var L=i(p);L!==null&&ct(G,L.startTime-P),Q=!1}}break t}finally{g=null,S=j,M=!1}Q=void 0}}finally{Q?W():F=!1}}}var W;if(typeof N=="function")W=function(){N(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=V,W=function(){dt.postMessage(null)}}else W=function(){_(V,0)};function ct(P,Q){O=_(function(){P(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var j=S;S=Q;try{return P()}finally{S=j}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=S;S=P;try{return Q()}finally{S=j}},r.unstable_scheduleCallback=function(P,Q,j){var St=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?St+j:St):j=St,P){case 1:var Rt=-1;break;case 2:Rt=250;break;case 5:Rt=1073741823;break;case 4:Rt=1e4;break;default:Rt=5e3}return Rt=j+Rt,P={id:x++,callback:Q,priorityLevel:P,startTime:j,expirationTime:Rt,sortIndex:-1},j>St?(P.sortIndex=j,t(p,P),i(m)===null&&P===i(p)&&(R?(B(O),O=-1):R=!0,ct(G,j-St))):(P.sortIndex=Rt,t(m,P),b||M||(b=!0,F||(F=!0,W()))),P},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(P){var Q=S;return function(){var j=S;S=Q;try{return P.apply(this,arguments)}finally{S=j}}}})(mh)),mh}var Y_;function qS(){return Y_||(Y_=1,ph.exports=jS()),ph.exports}var gh={exports:{}},Ln={};var j_;function ZS(){if(j_)return Ln;j_=1;var r=Gd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Ln.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.6",Ln}var q_;function KS(){if(q_)return gh.exports;q_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),gh.exports=ZS(),gh.exports}var Z_;function QS(){if(Z_)return Ho;Z_=1;var r=qS(),t=Gd(),i=KS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,o=f;break}if(T===o){v=!0,o=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=u;break}if(T===o){v=!0,o=f,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ct=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},St=[],Rt=-1;function L(e){return{current:e}}function nt(e){0>Rt||(e.current=St[Rt],St[Rt]=null,Rt--)}function Et(e,n){Rt++,St[Rt]=e.current,e.current=n}var Ct=L(null),Ot=L(null),it=L(null),ut=L(null);function Nt(e,n){switch(Et(it,n),Et(Ot,e),Et(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Ct),Et(Ct,e)}function It(){nt(Ct),nt(Ot),nt(it)}function Vt(e){e.memoizedState!==null&&Et(ut,e);var n=Ct.current,a=f_(n,e.type);n!==a&&(Et(Ot,e),Et(Ct,a))}function ee(e){Ot.current===e&&(nt(Ct),nt(Ot)),ut.current===e&&(nt(ut),Po._currentValue=j)}var Pe,z;function _e(e){if(Pe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pe=n&&n[1]||"",z=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+z}var ie=!1;function Qt(e,n){if(!e||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var at=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){at=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){at=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var I=v.split(`
`),et=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return _e("Activity");default:return""}}function Le(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,re=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,Ze=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,qt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,jt=r.log,Zt=r.unstable_setDisableYieldValue,bt=null,Ut=null;function Mt(e){if(typeof jt=="function"&&Zt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(bt,e)}catch{}}var vt=Math.clz32?Math.clz32:X,Lt=Math.log,oe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Lt(e)/oe|0)|0}var Tt=256,wt=262144,Ht=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=At(o):(v&=T,v!==0?u=At(v):a||(a=T&~e,a!==0&&(u=At(a))))):(T=o&~f,T!==0?u=At(T):v!==0?u=At(v):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Me(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-vt(a),_t=1<<ht;T[ht]=0,I[ht]=-1;var at=et[ht];if(at!==null)for(et[ht]=null,ht=0;ht<at.length;ht++){var lt=at[ht];lt!==null&&(lt.lane&=-536870913)}a&=~_t}o!==0&&xa(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function xa(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Zn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Sa(e,n){var a=n&-n;return a=(a&42)!==0?1:Kn(a),(a&(e.suspendedLanes|n))!==0?0:a}function Kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ya(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ci(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:O_(e.type))}function is(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var bn=Math.random().toString(36).slice(2),tn="__reactFiber$"+bn,mn="__reactProps$"+bn,Li="__reactContainer$"+bn,Si="__reactEvents$"+bn,Hs="__reactListeners$"+bn,su="__reactHandles$"+bn,ll="__reactResources$"+bn,as="__reactMarker$"+bn;function A(e){delete e[tn],delete e[mn],delete e[Si],delete e[Hs],delete e[su]}function Y(e){var n=e[tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Li]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=v_(e);e!==null;){if(a=e[tn])return a;e=v_(e)}return n}e=a,a=e.parentNode}return null}function st(e){if(e=e[tn]||e[Li]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Z(e){var n=e[ll];return n||(n=e[ll]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xt(e){e[as]=!0}var Pt=new Set,Wt={};function Bt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(Wt[e]=n,e=0;e<n.length;e++)Pt.add(n[e])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},pe={};function Ne(e){return Gt.call(pe,e)?!0:Gt.call($t,e)?!1:se.test(e)?pe[e]=!0:($t[e]=!0,!1)}function je(e,n,a){if(Ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function An(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=Re(e,n,""+e[n])}}function ki(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ss=/[\n"\\]/g;function Ee(e){return e.replace(ss,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(e,n,a,o,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yt(n)):e.value!==""+Yt(n)&&(e.value=""+Yt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?gn(e,v,Yt(n)):a!=null?gn(e,v,Yt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Yt(T):e.removeAttribute("name")}function zn(e,n,a,o,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){An(e);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),An(e)}function gn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Gs(e,n,a){if(n!=null&&(n=""+Yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Yt(a):""}function Ni(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Yt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),An(e)}function Vs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function op(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Fv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function lp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&op(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&op(e,f,n[f])}function ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return Gv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function cp(e){var n=st(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(s(90));Un(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ki(o)}break t;case"textarea":Gs(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var cu=!1;function up(e,n,a){if(cu)return e(n,a);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(ks!==null||Xs!==null)&&(Kl(),ks&&(n=ks,e=Xs,Xs=ks=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function Qr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Wi)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{uu=!1}var Ma=null,fu=null,ul=null;function fp(){if(ul)return ul;var e,n=fu,a=n.length,o,u="value"in Ma?Ma.value:Ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ul=u.slice(e,1<o?1-o:void 0)}function fl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function hp(){return!1}function Gn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hl:hp,this.isPropagationStopped=hp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Gn(rs),$r=g({},rs,{view:0,detail:0}),Vv=Gn($r),hu,du,to,pl=g({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(hu=e.screenX-to.screenX,du=e.screenY-to.screenY):du=hu=0,to=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),dp=Gn(pl),kv=g({},pl,{dataTransfer:0}),Xv=Gn(kv),Wv=g({},$r,{relatedTarget:0}),pu=Gn(Wv),Yv=g({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Gn(Yv),qv=g({},rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zv=Gn(qv),Kv=g({},rs,{data:0}),pp=Gn(Kv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$v[e])?!!n[e]:!1}function mu(){return tx}var ex=g({},$r,{key:function(e){if(e.key){var n=Qv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=Gn(ex),ix=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Gn(ix),ax=g({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),sx=Gn(ax),rx=g({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=Gn(rx),lx=g({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Gn(lx),ux=g({},rs,{newState:0,oldState:0}),fx=Gn(ux),hx=[9,13,27,32],gu=Wi&&"CompositionEvent"in window,eo=null;Wi&&"documentMode"in document&&(eo=document.documentMode);var dx=Wi&&"TextEvent"in window&&!eo,gp=Wi&&(!gu||eo&&8<eo&&11>=eo),_p=" ",vp=!1;function xp(e,n){switch(e){case"keyup":return hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function px(e,n){switch(e){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return e=n.data,e===_p&&vp?null:e;default:return null}}function mx(e,n){if(Ws)return e==="compositionend"||!gu&&xp(e,n)?(e=fp(),ul=fu=Ma=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gx[e.type]:n==="textarea"}function Mp(e,n,a,o){ks?Xs?Xs.push(o):Xs=[o]:ks=o,n=ic(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var no=null,io=null;function _x(e){a_(e,0)}function ml(e){var n=rt(e);if(ki(n))return e}function Ep(e,n){if(e==="change")return n}var Tp=!1;if(Wi){var _u;if(Wi){var vu="oninput"in document;if(!vu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),vu=typeof bp.oninput=="function"}_u=vu}else _u=!1;Tp=_u&&(!document.documentMode||9<document.documentMode)}function Ap(){no&&(no.detachEvent("onpropertychange",Rp),io=no=null)}function Rp(e){if(e.propertyName==="value"&&ml(io)){var n=[];Mp(n,io,e,lu(e)),up(_x,n)}}function vx(e,n,a){e==="focusin"?(Ap(),no=n,io=a,no.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(io)}function Sx(e,n){if(e==="click")return ml(n)}function yx(e,n){if(e==="input"||e==="change")return ml(n)}function Mx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Mx;function ao(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Gt.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var a=Cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ex=Wi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Su=null,so=null,yu=!1;function Lp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Ys==null||Ys!==yn(o)||(o=Ys,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ao(so,o)||(so=o,o=ic(Su,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ys)))}function os(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Mu={},Np={};Wi&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ls(e){if(Mu[e])return Mu[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return Mu[e]=n[a];return e}var Op=ls("animationend"),Pp=ls("animationiteration"),zp=ls("animationstart"),Tx=ls("transitionrun"),bx=ls("transitionstart"),Ax=ls("transitioncancel"),Ip=ls("transitionend"),Bp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function yi(e,n){Bp.set(e,n),Bt(n,[e])}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],qs=0,Tu=0;function _l(){for(var e=qs,n=Tu=qs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Fp(a,u,f)}}function vl(e,n,a,o){ui[qs++]=e,ui[qs++]=n,ui[qs++]=a,ui[qs++]=o,Tu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bu(e,n,a,o){return vl(e,n,a,o),xl(e)}function cs(e,n){return vl(e,null,null,n),xl(e)}function Fp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-vt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function xl(e){if(50<Co)throw Co=0,Pf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Rx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new Rx(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Sl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Au(e)&&(v=1);else if(typeof e=="string")v=LS(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Jn(31,a,n,u),e.elementType=C,e.lanes=f,e;case R:return us(a.children,u,f,n);case y:v=8,u|=24;break;case _:return e=Jn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case G:return e=Jn(13,a,n,u),e.elementType=G,e.lanes=f,e;case F:return e=Jn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case B:v=9;break t;case w:v=11;break t;case O:v=14;break t;case H:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Jn(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function us(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Gp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Cu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var Ks=[],Qs=0,yl=null,ro=0,hi=[],di=0,Ea=null,Oi=1,Pi="";function ji(e,n){Ks[Qs++]=ro,Ks[Qs++]=yl,yl=e,ro=n}function kp(e,n,a){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=Ea,Ea=e;var o=Oi;e=Pi;var u=32-vt(o)-1;o&=~(1<<u),a+=1;var f=32-vt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Oi=1<<32-vt(n)+u|a<<u|o,Pi=f+e}else Oi=1<<f|a<<u|o,Pi=e}function wu(e){e.return!==null&&(ji(e,1),kp(e,1,0))}function Du(e){for(;e===yl;)yl=Ks[--Qs],Ks[Qs]=null,ro=Ks[--Qs],Ks[Qs]=null;for(;e===Ea;)Ea=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,Oi=hi[--di],hi[di]=null}function Xp(e,n){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=Ea,Oi=n.id,Pi=n.overflow,Ea=e}var Rn=null,Je=null,Ae=!1,Ta=null,pi=!1,Uu=Error(s(519));function ba(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(fi(n,e)),Uu}function Wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[tn]=e,n[mn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)Se(Do[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||l_(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||ba(e,!0)}function Yp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function Js(e){if(e!==Rn)return!1;if(!Ae)return Yp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Je&&ba(e),Yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=__(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=__(e)}else n===27?(n=Je,Fa(e.type)?(e=eh,eh=null,Je=e):Je=n):Je=Rn?gi(e.stateNode.nextSibling):null;return!0}function fs(){Je=Rn=null,Ae=!1}function Lu(){var e=Ta;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ta=null),e}function oo(e){Ta===null?Ta=[e]:Ta.push(e)}var Nu=L(null),hs=null,qi=null;function Aa(e,n,a){Et(Nu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=Nu.current,nt(Nu)}function Ou(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ou(f.return,a,e),o||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ou(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function $s(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;Qn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===ut.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Pu(n,e,a,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return jp(hs,e)}function El(e,n){return hs===null&&ds(e),jp(e,n)}function jp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(s(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wx=r.unstable_scheduleCallback,Dx=r.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Cx,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&wx(Dx,function(){e.controller.abort()})}var co=null,Iu=0,tr=0,er=null;function Ux(e,n){if(co===null){var a=co=[];Iu=0,tr=Gf(),er={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(qp,qp),n}function qp(){if(--Iu===0&&co!==null){er!==null&&(er.status="fulfilled");var e=co;co=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=P.S;P.S=function(e,n){Lg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ux(e,n),Zp!==null&&Zp(e,n)};var ps=L(null);function Bu(){var e=ps.current;return e!==null?e:qe.pooledCache}function Tl(e,n){n===null?Et(ps,ps.current):Et(ps,n.pool)}function Kp(){var e=Bu();return e===null?null:{parent:cn._currentValue,pool:e}}var nr=Error(s(460)),Fu=Error(s(474)),bl=Error(s(542)),Al={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw gs=n,nr}}function ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,nr):a}}var gs=null;function $p(){if(gs===null)throw Error(s(459));var e=gs;return gs=null,e}function tm(e){if(e===nr||e===bl)throw Error(s(483))}var ir=null,uo=0;function Rl(e){var n=uo;return uo+=1,ir===null&&(ir=[]),Jp(ir,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function em(e){function n(q,k){if(e){var tt=q.deletions;tt===null?(q.deletions=[k],q.flags|=16):tt.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Yi(q,k),q.index=0,q.sibling=null,q}function f(q,k,tt){return q.index=tt,e?(tt=q.alternate,tt!==null?(tt=tt.index,tt<k?(q.flags|=67108866,k):tt):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,tt,gt){return k===null||k.tag!==6?(k=Ru(tt,q.mode,gt),k.return=q,k):(k=u(k,tt),k.return=q,k)}function I(q,k,tt,gt){var te=tt.type;return te===R?ht(q,k,tt.props.children,gt,tt.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===H&&ms(te)===k.type)?(k=u(k,tt.props),fo(k,tt),k.return=q,k):(k=Sl(tt.type,tt.key,tt.props,null,q.mode,gt),fo(k,tt),k.return=q,k)}function et(q,k,tt,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=Cu(tt,q.mode,gt),k.return=q,k):(k=u(k,tt.children||[]),k.return=q,k)}function ht(q,k,tt,gt,te){return k===null||k.tag!==7?(k=us(tt,q.mode,gt,te),k.return=q,k):(k=u(k,tt),k.return=q,k)}function _t(q,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ru(""+k,q.mode,tt),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=Sl(k.type,k.key,k.props,null,q.mode,tt),fo(tt,k),tt.return=q,tt;case b:return k=Cu(k,q.mode,tt),k.return=q,k;case H:return k=ms(k),_t(q,k,tt)}if(ct(k)||W(k))return k=us(k,q.mode,tt,null),k.return=q,k;if(typeof k.then=="function")return _t(q,Rl(k),tt);if(k.$$typeof===N)return _t(q,El(q,k),tt);Cl(q,k)}return null}function at(q,k,tt,gt){var te=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return te!==null?null:T(q,k,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===te?I(q,k,tt,gt):null;case b:return tt.key===te?et(q,k,tt,gt):null;case H:return tt=ms(tt),at(q,k,tt,gt)}if(ct(tt)||W(tt))return te!==null?null:ht(q,k,tt,gt,null);if(typeof tt.then=="function")return at(q,k,Rl(tt),gt);if(tt.$$typeof===N)return at(q,k,El(q,tt),gt);Cl(q,tt)}return null}function lt(q,k,tt,gt,te){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return q=q.get(tt)||null,T(k,q,""+gt,te);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return q=q.get(gt.key===null?tt:gt.key)||null,I(k,q,gt,te);case b:return q=q.get(gt.key===null?tt:gt.key)||null,et(k,q,gt,te);case H:return gt=ms(gt),lt(q,k,tt,gt,te)}if(ct(gt)||W(gt))return q=q.get(tt)||null,ht(k,q,gt,te,null);if(typeof gt.then=="function")return lt(q,k,tt,Rl(gt),te);if(gt.$$typeof===N)return lt(q,k,tt,El(k,gt),te);Cl(k,gt)}return null}function Xt(q,k,tt,gt){for(var te=null,Ce=null,Kt=k,fe=k=0,be=null;Kt!==null&&fe<tt.length;fe++){Kt.index>fe?(be=Kt,Kt=null):be=Kt.sibling;var we=at(q,Kt,tt[fe],gt);if(we===null){Kt===null&&(Kt=be);break}e&&Kt&&we.alternate===null&&n(q,Kt),k=f(we,k,fe),Ce===null?te=we:Ce.sibling=we,Ce=we,Kt=be}if(fe===tt.length)return a(q,Kt),Ae&&ji(q,fe),te;if(Kt===null){for(;fe<tt.length;fe++)Kt=_t(q,tt[fe],gt),Kt!==null&&(k=f(Kt,k,fe),Ce===null?te=Kt:Ce.sibling=Kt,Ce=Kt);return Ae&&ji(q,fe),te}for(Kt=o(Kt);fe<tt.length;fe++)be=lt(Kt,q,fe,tt[fe],gt),be!==null&&(e&&be.alternate!==null&&Kt.delete(be.key===null?fe:be.key),k=f(be,k,fe),Ce===null?te=be:Ce.sibling=be,Ce=be);return e&&Kt.forEach(function(Xa){return n(q,Xa)}),Ae&&ji(q,fe),te}function ne(q,k,tt,gt){if(tt==null)throw Error(s(151));for(var te=null,Ce=null,Kt=k,fe=k=0,be=null,we=tt.next();Kt!==null&&!we.done;fe++,we=tt.next()){Kt.index>fe?(be=Kt,Kt=null):be=Kt.sibling;var Xa=at(q,Kt,we.value,gt);if(Xa===null){Kt===null&&(Kt=be);break}e&&Kt&&Xa.alternate===null&&n(q,Kt),k=f(Xa,k,fe),Ce===null?te=Xa:Ce.sibling=Xa,Ce=Xa,Kt=be}if(we.done)return a(q,Kt),Ae&&ji(q,fe),te;if(Kt===null){for(;!we.done;fe++,we=tt.next())we=_t(q,we.value,gt),we!==null&&(k=f(we,k,fe),Ce===null?te=we:Ce.sibling=we,Ce=we);return Ae&&ji(q,fe),te}for(Kt=o(Kt);!we.done;fe++,we=tt.next())we=lt(Kt,q,fe,we.value,gt),we!==null&&(e&&we.alternate!==null&&Kt.delete(we.key===null?fe:we.key),k=f(we,k,fe),Ce===null?te=we:Ce.sibling=we,Ce=we);return e&&Kt.forEach(function(kS){return n(q,kS)}),Ae&&ji(q,fe),te}function Ge(q,k,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===R&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var te=tt.key;k!==null;){if(k.key===te){if(te=tt.type,te===R){if(k.tag===7){a(q,k.sibling),gt=u(k,tt.props.children),gt.return=q,q=gt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===H&&ms(te)===k.type){a(q,k.sibling),gt=u(k,tt.props),fo(gt,tt),gt.return=q,q=gt;break t}a(q,k);break}else n(q,k);k=k.sibling}tt.type===R?(gt=us(tt.props.children,q.mode,gt,tt.key),gt.return=q,q=gt):(gt=Sl(tt.type,tt.key,tt.props,null,q.mode,gt),fo(gt,tt),gt.return=q,q=gt)}return v(q);case b:t:{for(te=tt.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(q,k.sibling),gt=u(k,tt.children||[]),gt.return=q,q=gt;break t}else{a(q,k);break}else n(q,k);k=k.sibling}gt=Cu(tt,q.mode,gt),gt.return=q,q=gt}return v(q);case H:return tt=ms(tt),Ge(q,k,tt,gt)}if(ct(tt))return Xt(q,k,tt,gt);if(W(tt)){if(te=W(tt),typeof te!="function")throw Error(s(150));return tt=te.call(tt),ne(q,k,tt,gt)}if(typeof tt.then=="function")return Ge(q,k,Rl(tt),gt);if(tt.$$typeof===N)return Ge(q,k,El(q,tt),gt);Cl(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(q,k.sibling),gt=u(k,tt),gt.return=q,q=gt):(a(q,k),gt=Ru(tt,q.mode,gt),gt.return=q,q=gt),v(q)):a(q,k)}return function(q,k,tt,gt){try{uo=0;var te=Ge(q,k,tt,gt);return ir=null,te}catch(Kt){if(Kt===nr||Kt===bl)throw Kt;var Ce=Jn(29,Kt,null,q.mode);return Ce.lanes=gt,Ce.return=q,Ce}}}var _s=em(!0),nm=em(!1),Ra=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(e),Fp(e,null,a),n}return vl(e,o,n,a),xl(e)}function ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Zn(e,a)}}function Vu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ku=!1;function po(){if(ku){var e=er;if(e!==null)throw e}}function mo(e,n,a,o){ku=!1;var u=e.updateQueue;Ra=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,et=I.next;I.next=null,v===null?f=et:v.next=et,v=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=et:T.next=et,ht.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;v=0,ht=et=I=null,T=f;do{var at=T.lane&-536870913,lt=at!==T.lane;if(lt?(Te&at)===at:(o&at)===at){at!==0&&at===tr&&(ku=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Xt=e,ne=T;at=n;var Ge=a;switch(ne.tag){case 1:if(Xt=ne.payload,typeof Xt=="function"){_t=Xt.call(Ge,_t,at);break t}_t=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ne.payload,at=typeof Xt=="function"?Xt.call(Ge,_t,at):Xt,at==null)break t;_t=g({},_t,at);break t;case 2:Ra=!0}}at=T.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(et=ht=lt,I=_t):ht=ht.next=lt,v|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Oa|=v,e.lanes=v,e.memoizedState=_t}}function im(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var ar=L(null),wl=L(0);function sm(e,n){e=aa,Et(wl,e),Et(ar,n),aa=e|n.baseLanes}function Xu(){Et(wl,aa),Et(ar,ar.current)}function Wu(){aa=wl.current,nt(ar),nt(wl)}var $n=L(null),mi=null;function Da(e){var n=e.alternate;Et(on,on.current&1),Et($n,e),mi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(mi=e)}function Yu(e){Et(on,on.current),Et($n,e),mi===null&&(mi=e)}function rm(e){e.tag===22?(Et(on,on.current),Et($n,e),mi===null&&(mi=e)):Ua()}function Ua(){Et(on,on.current),Et($n,$n.current)}function ti(e){nt($n),mi===e&&(mi=null),nt(on)}var on=L(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||th(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ue=null,Fe=null,un=null,Ul=!1,sr=!1,vs=!1,Ll=0,go=0,rr=null,Nx=0;function nn(){throw Error(s(321))}function ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function qu(e,n,a,o,u,f){return Ki=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?km:uf,vs=!1,f=a(o,u),vs=!1,sr&&(f=lm(n,a,o,u)),om(e),f}function om(e){P.H=xo;var n=Fe!==null&&Fe.next!==null;if(Ki=0,un=Fe=ue=null,Ul=!1,go=0,rr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Ml(e)&&(fn=!0))}function lm(e,n,a,o){ue=e;var u=0;do{if(sr&&(rr=null),go=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,un=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Xm,f=n(a,o)}while(sr);return f}function Ox(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?_o(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Zu(){var e=Ll!==0;return Ll=0,e}function Ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Qu(e){if(Ul){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ul=!1}Ki=0,un=Fe=ue=null,sr=!1,go=Ll=0,rr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ue.memoizedState=un=e:un=un.next=e,un}function ln(){if(Fe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=un===null?ue.memoizedState:un.next;if(n!==null)un=n,Fe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?ue.memoizedState=un=e:un=un.next=e}return un}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(e){var n=go;return go+=1,rr===null&&(rr=[]),e=Jp(rr,e,n),n=ue,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?km:uf),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _o(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function Ju(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function Pl(e){var n=ln();return $u(n,Fe,e)}function $u(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,I=null,et=n,ht=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(Te&_t)===_t:(Ki&_t)===_t){var at=et.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===tr&&(ht=!0);else if((Ki&at)===at){et=et.next,at===tr&&(ht=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(T=I=_t,v=f):I=I.next=_t,ue.lanes|=at,Oa|=at;_t=et.action,vs&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else at={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(T=I=at,v=f):I=I.next=at,ue.lanes|=_t,Oa|=_t;et=et.next}while(et!==null&&et!==n);if(I===null?v=f:I.next=T,!Qn(f,e.memoizedState)&&(fn=!0,ht&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function tf(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Qn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function cm(e,n,a){var o=ue,u=ln(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Qn((Fe||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,af(hm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,or(9,{destroy:void 0},fm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(Ki&127)!==0||um(o,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Nl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function pm(e){var n=cs(e,2);n!==null&&Yn(n,e,2)}function ef(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),vs){Mt(!0);try{a()}finally{Mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,$u(e,Fe,typeof o=="function"?o:Qi)}function Px(e,n,a,o,u){if(Bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var T=a(u,o),I=P.S;I!==null&&I(v,T),_m(e,n,T)}catch(et){nf(e,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,o),_m(e,n,f)}catch(et){nf(e,n,et)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(e,n,o)},function(o){return nf(e,n,o)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function nf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function ym(e,n){if(Ae){var a=qe.formState;if(a!==null){t:{var o=ue;if(Ae){if(Je){e:{for(var u=Je,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Je=gi(u.nextSibling),o=u.data==="F!";break t}}ba(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,ue,o),o.dispatch=a,o=ef(!1),f=cf.bind(null,ue,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Px.bind(null,ue,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Mm(e){var n=ln();return Em(n,Fe,e)}function Em(e,n,a){if(n=$u(e,n,Sm)[0],e=Pl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(v){throw v===nr?bl:v}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,or(9,{destroy:void 0},zx.bind(null,u,a),null)),[o,f,e]}function zx(e,n){e.action=n}function Tm(e){var n=ln(),a=Fe;if(a!==null)return Em(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function or(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Nl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function bm(){return ln().memoizedState}function zl(e,n,a,o){var u=In();ue.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(e,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;Fe!==null&&o!==null&&ju(o,Fe.memoizedState.deps)?u.memoizedState=or(n,f,a,o):(ue.flags|=e,u.memoizedState=or(1|n,f,a,o))}function Am(e,n){zl(8390656,8,e,n)}function af(e,n){Il(2048,8,e,n)}function Ix(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Nl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=ln().memoizedState;return Ix({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return Il(4,2,e,n)}function wm(e,n){return Il(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,Il(4,4,Dm.bind(null,n,e),a)}function sf(){}function Lm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=e(),vs){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[o,n],o}function rf(e,n,a){return a===void 0||(Ki&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Og(),ue.lanes|=e,Oa|=e,a)}function Om(e,n,a,o){return Qn(a,n)?a:ar.current!==null?(e=rf(e,a,o),Qn(e,n)||(fn=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(Te&261930)===0?(fn=!0,e.memoizedState=a):(e=Og(),ue.lanes|=e,Oa|=e,n)}function Pm(e,n,a,o,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var v=P.T,T={};P.T=T,cf(e,!1,n,a);try{var I=u(),et=P.S;if(et!==null&&et(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Lx(I,o);vo(e,n,ht,ii(e))}else vo(e,n,o,ii(e))}catch(_t){vo(e,n,{then:function(){},status:"rejected",reason:_t},ii())}finally{Q.p=f,v!==null&&T.types!==null&&(v.types=T.types),P.T=v}}function Bx(){}function of(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=zm(e).queue;Pm(e,u,n,j,a===null?Bx:function(){return Im(e),a(o)})}function zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=zm(e);n.next===null&&(n=e.alternate.memoizedState),vo(e,n.next.queue,{},ii())}function lf(){return Cn(Po)}function Bm(){return ln().memoizedState}function Fm(){return ln().memoizedState}function Fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Ca(a);var o=wa(n,e,a);o!==null&&(Yn(o,n,a),ho(o,n,a)),n={cache:zu()},e.payload=n;return}n=n.return}}function Hx(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(e)?Gm(n,a):(a=bu(e,n,a,o),a!==null&&(Yn(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=ii();vo(e,n,a,o)}function vo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))Gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,Qn(T,v))return vl(e,n,u,0),qe===null&&_l(),!1}catch{}if(a=bu(e,n,u,o),a!==null)return Yn(a,e,o),Vm(a,n,o),!0}return!1}function cf(e,n,a,o){if(o={lane:2,revertLane:Gf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(n)throw Error(s(479))}else n=bu(e,a,o,2),n!==null&&Yn(n,e,2)}function Bl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Gm(e,n){sr=Ul=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Zn(e,a)}}var xo={readContext:Cn,use:Ol,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};xo.useEffectEvent=nn;var km={readContext:Cn,use:Ol,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(vs){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(vs){Mt(!0);try{a(n)}finally{Mt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Hx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,a=Hm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=In();return rf(a,e,n)},useTransition:function(){var e=ef(!1);return e=Pm.bind(null,ue,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=In();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Te&127)!==0||um(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,o,f,e),[e]),o.flags|=2048,or(9,{destroy:void 0},fm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=qe.identifierPrefix;if(Ae){var a=Pi,o=Oi;a=(o&~(1<<32-vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:ym,useActionState:ym,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return In().memoizedState=Fx.bind(null,ue)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:Cn,use:Ol,useCallback:Lm,useContext:Cn,useEffect:af,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:Pl,useRef:bm,useState:function(){return Pl(Qi)},useDebugValue:sf,useDeferredValue:function(e,n){var a=ln();return Om(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Pl(Qi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:_o(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:lf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=ln();return mm(a,Fe,e,n)},useMemoCache:Ju,useCacheRefresh:Fm};uf.useEffectEvent=Rm;var Xm={readContext:Cn,use:Ol,useCallback:Lm,useContext:Cn,useEffect:af,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:tf,useRef:bm,useState:function(){return tf(Qi)},useDebugValue:sf,useDeferredValue:function(e,n){var a=ln();return Fe===null?rf(a,e,n):Om(a,Fe.memoizedState,e,n)},useTransition:function(){var e=tf(Qi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:_o(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:lf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=ln();return Fe!==null?mm(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Fm};Xm.useEffectEvent=Rm;function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Ca(o);u.payload=n,a!=null&&(u.callback=a),n=wa(e,u,o),n!==null&&(Yn(n,e,o),ho(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Ca(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=wa(e,u,o),n!==null&&(Yn(n,e,o),ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Ca(a);o.tag=2,n!=null&&(o.callback=n),n=wa(e,o,a),n!==null&&(Yn(n,e,a),ho(n,e,a))}};function Wm(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,f):!0}function Ym(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function jm(e){gl(e)}function qm(e){console.error(e)}function Zm(e){gl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function Qm(e){return e=Ca(e),e.tag=3,e}function Jm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Km(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,o),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Gx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Ql():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bf(e,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bf(e,o,u)),!1}throw Error(s(435,a.tag))}return Bf(e,o,u),Ql(),!1}if(Ae)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(s(422),{cause:o}),oo(fi(e,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),oo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=df(e.stateNode,o,u),Vu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),Ro===null?Ro=[f]:Ro.push(f),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=df(a.stateNode,o,e),Vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,e,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pf=Error(s(461)),fn=!1;function wn(e,n,a,o){n.child=e===null?nm(n,null,a,o):_s(n,e.child,a,o)}function $m(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return ds(n),o=qu(e,n,a,v,f,u),T=Zu(),e!==null&&!fn?(Ku(e,n,u),Ji(e,n,u)):(Ae&&T&&wu(n),n.flags|=1,wn(e,n,o,u),n.child)}function tg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,eg(e,n,f,o,u)):(e=Sl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(v,o)&&e.ref===n.ref)return Ji(e,n,u)}return n.flags|=1,e=Yi(f,o),e.ref=n.ref,e.return=n,n.child=e}function eg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ao(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Mf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Ji(e,n,u)}return mf(e,n,a,o,u)}function ng(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return ig(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Xu(),rm(n);else return o=n.lanes=536870912,ig(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Tl(n,f.cachePool),sm(n,f),Ua(),n.memoizedState=null):(e!==null&&Tl(n,null),Xu(),Ua());return wn(e,n,u,a),n.child}function So(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(e,n,a,o,u){var f=Bu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Tl(n,null),Xu(),rm(n),e!==null&&$s(e,n,o,!0),n.childLanes=u,null}function Hl(e,n){return n=Vl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ag(e,n,a){return _s(n,e.child,null,a),e=Hl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Vx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=Hl(n,o),n.lanes=536870912,So(null,e);if(Yu(n),(e=Je)?(e=g_(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Rn=n,Je=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return Hl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Yu(n),u)if(n.flags&256)n.flags&=-257,n=ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||$s(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(v=Sa(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cs(e,v),Yn(o,e,v),pf;Ql(),n=ag(e,n,a)}else e=f.treeContext,Je=gi(v.nextSibling),Rn=n,Ae=!0,Ta=null,pi=!1,e!==null&&Xp(n,e),n=Hl(n,o),n.flags|=4096;return n}return e=Yi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mf(e,n,a,o,u){return ds(n),a=qu(e,n,a,o,void 0,u),o=Zu(),e!==null&&!fn?(Ku(e,n,u),Ji(e,n,u)):(Ae&&o&&wu(n),n.flags|=1,wn(e,n,a,u),n.child)}function sg(e,n,a,o,u,f){return ds(n),n.updateQueue=null,a=lm(n,o,a,u),om(e),o=Zu(),e!==null&&!fn?(Ku(e,n,f),Ji(e,n,f)):(Ae&&o&&wu(n),n.flags|=1,wn(e,n,a,f),n.child)}function rg(e,n,a,o,u){if(ds(n),n.stateNode===null){var f=Zs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Hu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):Zs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ff(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&hf.enqueueReplaceState(f,f.state,null),mo(n,o,f,u),po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=xs(a,T);f.props=I;var et=f.context,ht=a.contextType;v=Zs,typeof ht=="object"&&ht!==null&&(v=Cn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==v)&&Ym(n,f,o,v),Ra=!1;var at=n.memoizedState;f.state=at,mo(n,o,f,u),po(),et=n.memoizedState,T||at!==et||Ra?(typeof _t=="function"&&(ff(n,a,_t,o),et=n.memoizedState),(I=Ra||Wm(n,a,I,o,at,et,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),f.props=o,f.state=et,f.context=v,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Gu(e,n),v=n.memoizedProps,ht=xs(a,v),f.props=ht,_t=n.pendingProps,at=f.context,et=a.contextType,I=Zs,typeof et=="object"&&et!==null&&(I=Cn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||at!==I)&&Ym(n,f,o,I),Ra=!1,at=n.memoizedState,f.state=at,mo(n,o,f,u),po();var lt=n.memoizedState;v!==_t||at!==lt||Ra||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof T=="function"&&(ff(n,a,T,o),lt=n.memoizedState),(ht=Ra||Wm(n,a,ht,o,at,lt,I)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=I,o=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=_s(n,e.child,null,u),n.child=_s(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ji(e,n,u),e}function og(e,n,a,o){return fs(),n.flags|=256,wn(e,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:Kp()}}function vf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function lg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Da(n):Ua(),(e=Je)?(e=g_(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,Rn=n,Je=null)):e=null,e===null)throw ba(n);return th(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ua(),u=n.mode,T=Vl({mode:"hidden",children:T},u),o=us(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=_f(a),o.childLanes=vf(e,v,a),n.memoizedState=gf,So(null,o)):(Da(n),xf(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),T=o.fallback,u=n.mode,o=Vl({mode:"visible",children:o.children},u),T=us(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,_s(n,e.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=vf(e,v,a),n.memoizedState=gf,n=So(null,o));else if(Da(n),th(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var et=v.dgst;v=et,o=Error(s(419)),o.stack="",o.digest=v,oo({value:o,source:null,stack:null}),n=Sf(e,n,a)}else if(fn||$s(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=qe,v!==null&&(o=Sa(v,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,cs(e,o),Yn(v,e,o),pf;$f(T)||Ql(),n=Sf(e,n,a)}else $f(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Je=gi(T.nextSibling),Rn=n,Ae=!0,Ta=null,pi=!1,e!==null&&Xp(n,e),n=xf(n,o.children),n.flags|=4096);return n}return u?(Ua(),T=o.fallback,u=n.mode,I=e.child,et=I.sibling,o=Yi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?T=Yi(et,T):(T=us(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,So(null,o),o=n.child,T=e.child.memoizedState,T===null?T=_f(a):(u=T.cachePool,u!==null?(I=cn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Kp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=vf(e,v,a),n.memoizedState=gf,So(e.child,o)):(Da(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function xf(e,n){return n=Vl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Sf(e,n,a){return _s(n,e.child,null,a),e=xf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ou(e.return,n,a)}function yf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function ug(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=on.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Et(on,v),wn(e,n,o,a),o=Ae?ro:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,n);else if(e.tag===19)cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(n,!0,a,null,f,o);break;case"together":yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function kx(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),Aa(n,cn,e.memoizedState.cache),fs();break;case 27:case 5:Vt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(e,n,a):(Da(n),e=Ji(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ug(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et(on,on.current),o)break;return null;case 22:return n.lanes=0,ng(e,n,a,n.pendingProps);case 24:Aa(n,cn,e.memoizedState.cache)}return Ji(e,n,a)}function fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Mf(e,a)&&(n.flags&128)===0)return fn=!1,kx(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ae&&(n.flags&1048576)!==0&&kp(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ms(n.elementType),n.type=e,typeof e=="function")Au(e)?(o=xs(e,o),n.tag=1,n=rg(null,n,e,o,a)):(n.tag=0,n=mf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=$m(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=tg(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),rg(e,n,o,u,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(e,n),mo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Aa(n,cn,o),o!==f.cache&&Pu(n,[cn],a,!0),po(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),oo(u),n=og(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=gi(e.firstChild),Rn=n,Ae=!0,Ta=null,pi=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),o===u){n=Ji(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=M_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=ac(it.current).createElement(a),o[tn]=n,o[mn]=e,Dn(o,a,e),xt(o),n.stateNode=o):n.memoizedState=M_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Ae&&(o=n.stateNode=x_(n.type,n.pendingProps,it.current),Rn=n,pi=!0,u=Je,Fa(n.type)?(eh=u,Je=gi(o.firstChild)):Je=u),wn(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Je)&&(o=xS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Je=gi(o.firstChild),pi=!1,u=!0):u=!1),u||ba(n)),Vt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Kf(u,f)?o=null:v!==null&&Kf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,Ox,null,null,a),Po._currentValue=u),Gl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Je)&&(a=SS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Je=null,e=!0):e=!1),e||ba(n)),null;case 13:return lg(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_s(n,null,o,a):wn(e,n,o,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Aa(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ds(n),u=Cn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return tg(e,n,n.type,n.pendingProps,a);case 15:return eg(e,n,n.type,n.pendingProps,a);case 19:return ug(e,n,a);case 31:return Vx(e,n,a);case 22:return ng(e,n,a,n.pendingProps);case 24:return ds(n),o=Cn(cn),e===null?(u=Bu(),u===null&&(u=qe,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Hu(n),Aa(n,cn,u)):((e.lanes&a)!==0&&(Gu(e,n),mo(n,null,null,a),po()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,cn,o)):(o=f.cache,Aa(n,cn,o),o!==u.cache&&Pu(n,[cn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $i(e){e.flags|=4}function Ef(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Bg())e.flags|=8192;else throw gs=Al,Fu}else e.flags&=-16777217}function hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R_(n))if(Bg())e.flags|=8192;else throw gs=Al,Fu}function kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ye():536870912,e.lanes|=n,fr|=n)}function yo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Xx(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(cn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),$e(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?($i(n),f!==null?($e(n),hg(n,f)):($e(n),Ef(n,u,null,o,a))):f?f!==e.memoizedState?($i(n),$e(n),hg(n,f)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$i(n),$e(n),Ef(n,u,e,o,a)),null;case 27:if(ee(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=Ct.current,Js(n)?Wp(n):(e=x_(u,o,a),n.stateNode=e,$i(n))}return $e(n),null;case 5:if(ee(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(f=Ct.current,Js(n))Wp(n);else{var v=ac(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[tn]=n,f[mn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&$i(n)}}return $e(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[tn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||l_(e.nodeValue,a)),e||ba(n,!0)}else e=ac(e).createTextNode(o),e[tn]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Js(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tn]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[tn]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),$e(n),null);case 4:return It(),e===null&&Wf(n.stateNode.containerInfo),$e(n),null;case 10:return Zi(n.type),$e(n),null;case 19:if(nt(on),o=n.memoizedState,o===null)return $e(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)yo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Dl(e),f!==null){for(n.flags|=128,yo(o,!1),e=f.updateQueue,n.updateQueue=e,kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return Et(on,on.current&1|2),Ae&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>ql&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Dl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,kl(n,e),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return $e(n),null}else 2*E()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,yo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=on.current,Et(on,u?a&1|2:a&1),Ae&&ji(n,o.treeForkCount),e):($e(n),null);case 22:case 23:return ti(n),Wu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(cn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(cn),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(on),null;case 4:return It(),null;case 10:return Zi(n.type),null;case 22:case 23:return ti(n),Wu(),e!==null&&nt(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(cn),null;case 25:return null;default:return null}}function dg(e,n){switch(Du(n),n.tag){case 3:Zi(cn),It();break;case 26:case 27:case 5:ee(n);break;case 4:It();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:nt(on);break;case 10:Zi(n.type);break;case 22:case 23:ti(n),Wu(),e!==null&&nt(ps);break;case 24:Zi(cn)}}function Mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(T){Ie(n,n.return,T)}}function La(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var I=a,et=T;try{et()}catch(ht){Ie(u,I,ht)}}}o=o.next}while(o!==f)}}catch(ht){Ie(n,n.return,ht)}}function pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(o){Ie(e,e.return,o)}}}function mg(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function Eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ie(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ie(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,n,u)}else a.current=null}function gg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function Tf(e,n,a){try{var o=e.stateNode;dS(o,e.type,a,n),o[mn]=n}catch(u){Ie(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Xl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,n,a),e=e.sibling;e!==null;)Xl(e,n,a),e=e.sibling}function vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[tn]=e,n[mn]=a}catch(f){Ie(e,e.return,f)}}var ta=!1,hn=!1,Rf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Yx(e,n){if(e=e.containerInfo,qf=fc,e=Up(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,I=-1,et=0,ht=0,_t=e,at=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(T=v+u),_t!==f||o!==0&&_t.nodeType!==3||(I=v+o),_t.nodeType===3&&(v+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)at=_t,_t=lt;for(;;){if(_t===e)break e;if(at===a&&++et===u&&(T=v),at===f&&++ht===o&&(I=v),(lt=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=lt}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:e,selectionRange:a},fc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xt=xs(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ie(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Sg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&Mo(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ie(a,a.return,v)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ie(a,a.return,v)}}o&64&&pg(a),o&512&&Eo(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(v){Ie(a,a.return,v)}}break;case 27:n===null&&o&4&&vg(a);case 26:case 5:na(e,a),n===null&&o&4&&gg(a),o&512&&Eo(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&Eg(e,a);break;case 13:na(e,a),o&4&&Tg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eS.bind(null,a),yS(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||hn,u=ta;var f=hn;ta=o,(hn=n)&&!f?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=u,hn=f}break;case 30:break;default:na(e,a)}}function yg(e){var n=e.alternate;n!==null&&(e.alternate=null,yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&A(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Vn=!1;function ea(e,n,a){for(a=a.child;a!==null;)Mg(e,n,a),a=a.sibling}function Mg(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=en,u=Vn;Fa(a.type)&&(en=a.stateNode,Vn=!1),ea(e,n,a),Lo(a.stateNode),en=o,Vn=u;break;case 5:hn||zi(a,n);case 6:if(o=en,u=Vn,en=null,ea(e,n,a),en=o,Vn=u,en!==null)if(Vn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:en!==null&&(Vn?(e=en,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):p_(en,a.stateNode));break;case 4:o=en,u=Vn,en=a.stateNode.containerInfo,Vn=!0,ea(e,n,a),en=o,Vn=u;break;case 0:case 11:case 14:case 15:La(2,a,n),hn||La(4,a,n),ea(e,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ea(e,n,a),hn=o;break;default:ea(e,n,a)}}function Eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){Ie(n,n.return,a)}}}function Tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){Ie(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xg),n;default:throw Error(s(435,e.tag))}}function Wl(e,n){var a=jx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=nS.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Fa(T.type)){en=T.stateNode,Vn=!1;break t}break;case 5:en=T.stateNode,Vn=!1;break t;case 3:case 4:en=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(en===null)throw Error(s(160));Mg(f,v,u),en=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)bg(n,e),n=n.sibling}var Mi=null;function bg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(La(3,e,e.return),Mo(3,e),La(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[tn]=e,xt(f),o=f;break t;case"link":var v=b_("link","href",u).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=b_("meta","content",u).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[tn]=e,xt(f),o=f}e.stateNode=o}else A_(u,e.type,e.stateNode);else e.stateNode=T_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?A_(u,e.type,e.stateNode):T_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(hn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Vs(u,"")}catch(Xt){Ie(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Rf=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Ie(e,e.return,Xt)}}break;case 3:if(oc=null,u=Mi,Mi=sc(n.containerInfo),kn(n,e),Mi=u,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Xt){Ie(e,e.return,Xt)}Rf&&(Rf=!1,Ag(e));break;case 4:o=Mi,Mi=sc(e.stateNode.containerInfo),kn(n,e),Xn(e),Mi=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,et=ta,ht=hn;if(ta=et||u,hn=ht||I,kn(n,e),hn=ht,ta=et,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ta||hn||Ss(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var _t=I.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Xt){Ie(I,I.return,Xt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Xt){Ie(I,I.return,Xt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;u?m_(lt,!0):m_(I.stateNode,!1)}catch(Xt){Ie(I,I.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(_g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(e);Xl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Vs(v,""),a.flags&=-33);var T=bf(e);Xl(e,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,et=bf(e);Af(e,et,I);break;default:throw Error(s(161))}}catch(ht){Ie(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(e,n.alternate,n),n=n.sibling}function Ss(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),Ss(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),Ss(n);break;case 27:Lo(n.stateNode);case 26:case 5:zi(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}e=e.sibling}}function ia(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ia(u,f,a),Mo(4,f);break;case 1:if(ia(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ie(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)im(I[u],T)}catch(et){Ie(o,o.return,et)}}a&&v&64&&pg(f),Eo(f,f.return);break;case 27:vg(f);case 26:case 5:ia(u,f,a),a&&o===null&&v&4&&gg(f),Eo(f,f.return);break;case 12:ia(u,f,a);break;case 31:ia(u,f,a),a&&v&4&&Eg(u,f);break;case 13:ia(u,f,a),a&&v&4&&Tg(u,f);break;case 22:f.memoizedState===null&&ia(u,f,a),Eo(f,f.return);break;case 30:break;default:ia(u,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&lo(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&lo(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(e,n,a,o),n=n.sibling}function Rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&Mo(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&lo(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ie(n,n.return,I)}}else Ei(e,n,a,o);break;case 31:Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):To(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,lr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cf(v,n);break;case 24:Ei(e,n,a,o),u&2048&&wf(n.alternate,n);break;default:Ei(e,n,a,o)}}function lr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,I=o,et=v.flags;switch(v.tag){case 0:case 11:case 15:lr(f,v,T,I,u),Mo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?lr(f,v,T,I,u):To(f,v):(ht._visibility|=2,lr(f,v,T,I,u)),u&&et&2048&&Cf(v.alternate,v);break;case 24:lr(f,v,T,I,u),u&&et&2048&&wf(v.alternate,v);break;default:lr(f,v,T,I,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:To(a,o),u&2048&&Cf(o.alternate,o);break;case 24:To(a,o),u&2048&&wf(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var bo=8192;function cr(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Cg(e,n,a),e=e.sibling}function Cg(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&bo&&e.memoizedState!==null&&NS(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var o=Mi;Mi=sc(e.stateNode.containerInfo),cr(e,n,a),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,cr(e,n,a),bo=o):cr(e,n,a));break;default:cr(e,n,a)}}function wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Ug(o,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dg(e),e=e.sibling}function Dg(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&La(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Ao(e);break;default:Ao(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Ug(o,e)}wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function Ug(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(yg(o),o===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var qx={getCacheForType:function(e){var n=Cn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,xe=null,Te=0,ze=0,ei=null,Na=!1,ur=!1,Df=!1,aa=0,an=0,Oa=0,ys=0,Uf=0,ni=0,fr=0,Ro=null,Wn=null,Lf=!1,jl=0,Lg=0,ql=1/0,Zl=null,Pa=null,_n=0,za=null,hr=null,sa=0,Nf=0,Of=null,Ng=null,Co=0,Pf=null;function ii(){return(Ue&2)!==0&&Te!==0?Te&-Te:P.T!==null?Gf():ci()}function Og(){if(ni===0)if((Te&536870912)===0||Ae){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Ia(e,Te,ni,!1)),pn(e,a),((Ue&2)===0||e!==qe)&&(e===qe&&((Ue&2)===0&&(ys|=a),an===4&&Ia(e,Te,ni,!1)),Ii(e))}function Pg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?Jx(e,n):If(e,n,!0),f=o;do{if(u===0){ur&&!o&&Ia(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Kx(a)){u=If(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=Ro;var I=T.current.memoizedState.isDehydrated;if(I&&(dr(T,v).flags|=256),v=If(T,v,!1),v!==2){if(Df&&!I){T.errorRecoveryDisabledLanes|=f,ys|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){dr(e,0),Ia(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,ni,!Na);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-E(),10<u)){if(Ia(o,n,ni,!Na),mt(o,0,!0)!==0)break t;sa=n,o.timeoutHandle=h_(zg.bind(null,o,a,Wn,Zl,Lf,n,ni,ys,fr,Na,f,"Throttled",-0,0),u);break t}zg(o,a,Wn,Zl,Lf,n,ni,ys,fr,Na,f,null,-0,0)}}break}while(!0);Ii(e)}function zg(e,n,a,o,u,f,v,T,I,et,ht,_t,at,lt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Cg(n,f,_t);var Xt=(f&62914560)===f?jl-E():(f&4194048)===f?Lg-E():0;if(Xt=OS(_t,Xt),Xt!==null){sa=f,e.cancelPendingCommit=Xt(Xg.bind(null,e,n,f,a,o,u,v,T,I,ht,_t,null,at,lt)),Ia(e,f,v,!et);return}}Xg(e,n,f,a,o,u,v,T,I)}function Kx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(e,n,a,o){n&=~Uf,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-vt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&xa(e,a,n)}function Kl(){return(Ue&6)===0?(wo(0),!1):!0}function zf(){if(xe!==null){if(ze===0)var e=xe.return;else e=xe,qi=hs=null,Qu(e),ir=null,uo=0,e=xe;for(;e!==null;)dg(e.alternate,e),e=e.return;xe=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,zf(),qe=e,xe=a=Yi(e.current,null),Te=n,ze=0,ei=null,Na=!1,ur=Ft(e,n),Df=!1,fr=ni=Uf=ys=Oa=an=0,Wn=Ro=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-vt(o),f=1<<u;n|=e[u],o&=~f}return aa=n,_l(),a}function Ig(e,n){ue=null,P.H=xo,n===nr||n===bl?(n=$p(),ze=3):n===Fu?(n=$p(),ze=4):ze=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,xe===null&&(an=1,Fl(e,fi(n,e.current)))}function Bg(){var e=$n.current;return e===null?!0:(Te&4194048)===Te?mi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===mi:!1}function Fg(){var e=P.H;return P.H=xo,e===null?xo:e}function Hg(){var e=P.A;return P.A=qx,e}function Ql(){an=4,Na||(Te&4194048)!==Te&&$n.current!==null||(ur=!0),(Oa&134217727)===0&&(ys&134217727)===0||qe===null||Ia(qe,Te,ni,!1)}function If(e,n,a){var o=Ue;Ue|=2;var u=Fg(),f=Hg();(qe!==e||Te!==n)&&(Zl=null,dr(e,n)),n=!1;var v=an;t:do try{if(ze!==0&&xe!==null){var T=xe,I=ei;switch(ze){case 8:zf(),v=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var et=ze;if(ze=0,ei=null,pr(e,T,I,et),a&&ur){v=0;break t}break;default:et=ze,ze=0,ei=null,pr(e,T,I,et)}}Qx(),v=an;break}catch(ht){Ig(e,ht)}while(!0);return n&&e.shellSuspendCounter++,qi=hs=null,Ue=o,P.H=u,P.A=f,xe===null&&(qe=null,Te=0,_l()),v}function Qx(){for(;xe!==null;)Gg(xe)}function Jx(e,n){var a=Ue;Ue|=2;var o=Fg(),u=Hg();qe!==e||Te!==n?(Zl=null,ql=E()+500,dr(e,n)):ur=Ft(e,n);t:do try{if(ze!==0&&xe!==null){n=xe;var f=ei;e:switch(ze){case 1:ze=0,ei=null,pr(e,n,f,1);break;case 2:case 9:if(Qp(f)){ze=0,ei=null,Vg(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Ii(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Qp(f)?(ze=0,ei=null,Vg(n)):(ze=0,ei=null,pr(e,n,f,7));break;case 5:var v=null;switch(xe.tag){case 26:v=xe.memoizedState;case 5:case 27:var T=xe;if(v?R_(v):T.stateNode.complete){ze=0,ei=null;var I=T.sibling;if(I!==null)xe=I;else{var et=T.return;et!==null?(xe=et,Jl(et)):xe=null}break e}}ze=0,ei=null,pr(e,n,f,5);break;case 6:ze=0,ei=null,pr(e,n,f,6);break;case 8:zf(),an=6;break t;default:throw Error(s(462))}}$x();break}catch(ht){Ig(e,ht)}while(!0);return qi=hs=null,P.H=o,P.A=u,Ue=a,xe!==null?0:(qe=null,Te=0,_l(),an)}function $x(){for(;xe!==null&&!Ze();)Gg(xe)}function Gg(e){var n=fg(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?Jl(e):xe=n}function Vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Qu(n);default:dg(a,n),n=xe=Hp(n,aa),n=fg(a,n,aa)}e.memoizedProps=e.pendingProps,n===null?Jl(e):xe=n}function pr(e,n,a,o){qi=hs=null,Qu(n),ir=null,uo=0;var u=n.return;try{if(Gx(e,u,n,a,Te)){an=1,Fl(e,fi(a,e.current)),xe=null;return}}catch(f){if(u!==null)throw xe=u,f;an=1,Fl(e,fi(a,e.current)),xe=null;return}n.flags&32768?(Ae||o===1?e=!0:ur||(Te&536870912)!==0?e=!1:(Na=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(n,e)):Jl(n)}function Jl(e){var n=e;do{if((n.flags&32768)!==0){kg(n,Na);return}e=n.return;var a=Xx(n.alternate,n,aa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);an===0&&(an=5)}function kg(e,n){do{var a=Wx(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);an=6,xe=null}function Xg(e,n,a,o,u,f,v,T,I){e.cancelPendingCommit=null;do $l();while(_n!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Tu,sn(e,a,f,v,T,I),e===qe&&(xe=qe=null,Te=0),hr=n,za=e,sa=a,Nf=f,Of=u,Ng=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iS(ft,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Q.p,Q.p=2,v=Ue,Ue|=4;try{Yx(e,n,a)}finally{Ue=v,Q.p=u,P.T=o}}_n=1,Wg(),Yg(),jg()}}function Wg(){if(_n===1){_n=0;var e=za,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var u=Ue;Ue|=4;try{bg(n,e);var f=Zf,v=Up(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Dp(T.ownerDocument.documentElement,T)){if(I!==null&&xu(T)){var et=I.start,ht=I.end;if(ht===void 0&&(ht=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var lt=at.getSelection(),Xt=T.textContent.length,ne=Math.min(I.start,Xt),Ge=I.end===void 0?ne:Math.min(I.end,Xt);!lt.extend&&ne>Ge&&(v=Ge,Ge=ne,ne=v);var q=wp(T,ne),k=wp(T,Ge);if(q&&k&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var tt=_t.createRange();tt.setStart(q.node,q.offset),lt.removeAllRanges(),ne>Ge?(lt.addRange(tt),lt.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),lt.addRange(tt))}}}}for(_t=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var gt=_t[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}fc=!!qf,Zf=qf=null}finally{Ue=u,Q.p=o,P.T=a}}e.current=n,_n=2}}function Yg(){if(_n===2){_n=0;var e=za,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var u=Ue;Ue|=4;try{Sg(e,n.alternate,n)}finally{Ue=u,Q.p=o,P.T=a}}_n=3}}function jg(){if(_n===4||_n===3){_n=0,U();var e=za,n=hr,a=sa,o=Ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,hr=za=null,qg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Pa=null),ya(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Q.p,Q.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Q.p=u}}(sa&3)!==0&&$l(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Pf?Co++:(Co=0,Pf=e):Co=0,wo(0)}}function qg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,lo(n)))}function $l(){return Wg(),Yg(),jg(),Zg()}function Zg(){if(_n!==5)return!1;var e=za,n=Nf;Nf=0;var a=ya(sa),o=P.T,u=Q.p;try{Q.p=32>a?32:a,P.T=null,a=Of,Of=null;var f=za,v=sa;if(_n=0,hr=za=null,sa=0,(Ue&6)!==0)throw Error(s(331));var T=Ue;if(Ue|=4,Dg(f.current),Rg(f,f.current,v,a),Ue=T,wo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{Q.p=u,P.T=o,qg(e,n)}}function Kg(e,n,a){n=fi(a,n),n=df(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(pn(e,2),Ii(e))}function Ie(e,n,a){if(e.tag===3)Kg(e,e,a);else for(;n!==null;){if(n.tag===3){Kg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){e=fi(a,e),a=Qm(2),o=wa(n,a,2),o!==null&&(Jm(a,o,n,e),pn(o,2),Ii(o));break}}n=n.return}}function Bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Df=!0,u.add(a),e=tS.bind(null,e,n,a),n.then(e,e))}function tS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Te&a)===a&&(an===4||an===3&&(Te&62914560)===Te&&300>E()-jl?(Ue&2)===0&&dr(e,0):Uf|=a,fr===Te&&(fr=0)),Ii(e)}function Qg(e,n){n===0&&(n=ye()),e=cs(e,n),e!==null&&(pn(e,n),Ii(e))}function eS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(e,a)}function nS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Qg(e,a)}function iS(e,n){return re(e,n)}var tc=null,mr=null,Ff=!1,ec=!1,Hf=!1,Ba=0;function Ii(e){e!==mr&&e.next===null&&(mr===null?tc=mr=e:mr=mr.next=e),ec=!0,Ff||(Ff=!0,sS())}function wo(e,n){if(!Hf&&ec){Hf=!0;do for(var a=!1,o=tc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-vt(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,e_(o,f))}else f=Te,f=mt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ft(o,f)||(a=!0,e_(o,f));o=o.next}while(a);Hf=!1}}function aS(){Jg()}function Jg(){ec=Ff=!1;var e=0;Ba!==0&&mS()&&(e=Ba);for(var n=E(),a=null,o=tc;o!==null;){var u=o.next,f=$g(o,n);f===0?(o.next=null,a===null?tc=u:a.next=u,u===null&&(mr=a)):(a=o,(e!==0||(f&3)!==0)&&(ec=!0)),o=u}_n!==0&&_n!==5||wo(e),Ba!==0&&(Ba=0)}function $g(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-vt(f),T=1<<v,I=u[v];I===-1?((T&a)===0||(T&o)!==0)&&(u[v]=ae(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=qe,a=Te,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ye(o),ya(a)){case 2:case 8:a=yt;break;case 32:a=ft;break;case 268435456:a=Dt;break;default:a=ft}return o=t_.bind(null,e),a=re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),e.callbackPriority=2,e.callbackNode=null,2}function t_(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($l()&&e.callbackNode!==a)return null;var o=Te;return o=mt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Pg(e,o,n),$g(e,E()),e.callbackNode!=null&&e.callbackNode===a?t_.bind(null,e):null)}function e_(e,n){if($l())return null;Pg(e,n,!0)}function sS(){_S(function(){(Ue&6)!==0?re(pt,aS):Jg()})}function Gf(){if(Ba===0){var e=tr;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Ba=e}return Ba}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function i_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=n_((u[mn]||null).action),v=o.submitter;v&&(n=(n=v[mn]||null)?n_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new dl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var I=v?i_(u,v):new FormData(u);of(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=v?i_(u,v):new FormData(u),of(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Vf=0;Vf<Eu.length;Vf++){var kf=Eu[Vf],oS=kf.toLowerCase(),lS=kf[0].toUpperCase()+kf.slice(1);yi(oS,"on"+lS)}yi(Op,"onAnimationEnd"),yi(Pp,"onAnimationIteration"),yi(zp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Tx,"onTransitionRun"),yi(bx,"onTransitionStart"),yi(Ax,"onTransitionCancel"),yi(Ip,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function a_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],I=T.instance,et=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=et;try{f(u)}catch(ht){gl(ht)}u.currentTarget=null,f=I}else for(v=0;v<o.length;v++){if(T=o[v],I=T.instance,et=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=et;try{f(u)}catch(ht){gl(ht)}u.currentTarget=null,f=I}}}}function Se(e,n){var a=n[Si];a===void 0&&(a=n[Si]=new Set);var o=e+"__bubble";a.has(o)||(s_(n,e,2,!1),a.add(o))}function Xf(e,n,a){var o=0;n&&(o|=4),s_(a,e,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[nc]){e[nc]=!0,Pt.forEach(function(a){a!=="selectionchange"&&(cS.has(a)||Xf(a,!1,e),Xf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[nc]||(n[nc]=!0,Xf("selectionchange",!1,n))}}function s_(e,n,a,o){switch(O_(n)){case 2:var u=IS;break;case 8:u=BS;break;default:u=rh}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Yf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=o.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Y(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){o=f=v;continue t}T=T.parentNode}}o=o.return}up(function(){var et=f,ht=lu(a),_t=[];t:{var at=Bp.get(e);if(at!==void 0){var lt=dl,Xt=e;switch(e){case"keypress":if(fl(a)===0)break t;case"keydown":case"keyup":lt=nx;break;case"focusin":Xt="focus",lt=pu;break;case"focusout":Xt="blur",lt=pu;break;case"beforeblur":case"afterblur":lt=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=sx;break;case Op:case Pp:case zp:lt=jv;break;case Ip:lt=ox;break;case"scroll":case"scrollend":lt=Vv;break;case"wheel":lt=cx;break;case"copy":case"cut":case"paste":lt=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=mp;break;case"toggle":case"beforetoggle":lt=fx}var ne=(n&4)!==0,Ge=!ne&&(e==="scroll"||e==="scrollend"),q=ne?at!==null?at+"Capture":null:at;ne=[];for(var k=et,tt;k!==null;){var gt=k;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||q===null||(gt=Qr(k,q),gt!=null&&ne.push(Uo(k,gt,tt))),Ge)break;k=k.return}0<ne.length&&(at=new lt(at,Xt,null,a,ht),_t.push({event:at,listeners:ne}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==ou&&(Xt=a.relatedTarget||a.fromElement)&&(Y(Xt)||Xt[Li]))break t;if((lt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(Xt=a.relatedTarget||a.toElement,lt=et,Xt=Xt?Y(Xt):null,Xt!==null&&(Ge=c(Xt),ne=Xt.tag,Xt!==Ge||ne!==5&&ne!==27&&ne!==6)&&(Xt=null)):(lt=null,Xt=et),lt!==Xt)){if(ne=dp,gt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=mp,gt="onPointerLeave",q="onPointerEnter",k="pointer"),Ge=lt==null?at:rt(lt),tt=Xt==null?at:rt(Xt),at=new ne(gt,k+"leave",lt,a,ht),at.target=Ge,at.relatedTarget=tt,gt=null,Y(ht)===et&&(ne=new ne(q,k+"enter",Xt,a,ht),ne.target=tt,ne.relatedTarget=Ge,gt=ne),Ge=gt,lt&&Xt)e:{for(ne=uS,q=lt,k=Xt,tt=0,gt=q;gt;gt=ne(gt))tt++;gt=0;for(var te=k;te;te=ne(te))gt++;for(;0<tt-gt;)q=ne(q),tt--;for(;0<gt-tt;)k=ne(k),gt--;for(;tt--;){if(q===k||k!==null&&q===k.alternate){ne=q;break e}q=ne(q),k=ne(k)}ne=null}else ne=null;lt!==null&&r_(_t,at,lt,ne,!1),Xt!==null&&Ge!==null&&r_(_t,Ge,Xt,ne,!0)}}t:{if(at=et?rt(et):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Ce=Ep;else if(yp(at))if(Tp)Ce=yx;else{Ce=xx;var Kt=vx}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&ru(et.elementType)&&(Ce=Ep):Ce=Sx;if(Ce&&(Ce=Ce(e,et))){Mp(_t,Ce,a,ht);break t}Kt&&Kt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&gn(at,"number",at.value)}switch(Kt=et?rt(et):window,e){case"focusin":(yp(Kt)||Kt.contentEditable==="true")&&(Ys=Kt,Su=et,so=null);break;case"focusout":so=Su=Ys=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Lp(_t,a,ht);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Lp(_t,a,ht)}var fe;if(gu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Ws?xp(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(gp&&a.locale!=="ko"&&(Ws||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ws&&(fe=fp()):(Ma=ht,fu="value"in Ma?Ma.value:Ma.textContent,Ws=!0)),Kt=ic(et,be),0<Kt.length&&(be=new pp(be,e,null,a,ht),_t.push({event:be,listeners:Kt}),fe?be.data=fe:(fe=Sp(a),fe!==null&&(be.data=fe)))),(fe=dx?px(e,a):mx(e,a))&&(be=ic(et,"onBeforeInput"),0<be.length&&(Kt=new pp("onBeforeInput","beforeinput",null,a,ht),_t.push({event:Kt,listeners:be}),Kt.data=fe)),rS(_t,e,et,a,ht)}a_(_t,n)})}function Uo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ic(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qr(e,a),u!=null&&o.unshift(Uo(e,u,f)),u=Qr(e,n),u!=null&&o.push(Uo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function uS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,I=T.alternate,et=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||et===null||(I=et,u?(et=Qr(a,f),et!=null&&v.unshift(Uo(a,et,I))):u||(et=Qr(a,f),et!=null&&v.push(Uo(a,et,I)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var fS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function o_(e){return(typeof e=="string"?e:""+e).replace(fS,`
`).replace(hS,"")}function l_(e,n){return n=o_(n),o_(e)===n}function He(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vs(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vs(e,""+o);break;case"className":Oe(e,"class",o);break;case"tabIndex":Oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,a,o);break;case"style":lp(e,o,f);break;case"data":if(n!=="object"){Oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),je(e,"popover",o);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":je(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hv.get(a)||a,je(e,a,o))}}function jf(e,n,a,o,u,f){switch(a){case"style":lp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vs(e,o):(typeof o=="number"||typeof o=="bigint")&&Vs(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):je(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,v,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var T=f=v=u=null,I=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":v=ht;break;case"checked":I=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:He(e,n,o,ht,a,null)}}zn(e,f,T,I,et,v,u,!1);return;case"select":Se("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:He(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":Se("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:He(e,n,v,T,a,null)}Ni(e,o,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,I,o,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)Se(Do[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,et,o,a,null)}return;default:if(ru(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&jf(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&He(e,n,T,o,a,null))}function dS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,I=null,et=null,ht=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=_t;default:o.hasOwnProperty(lt)||He(e,n,lt,null,o,_t)}}for(var at in o){var lt=o[at];if(_t=a[at],o.hasOwnProperty(at)&&(lt!=null||_t!=null))switch(at){case"type":f=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":ht=lt;break;case"value":v=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==_t&&He(e,n,at,lt,o,_t)}}Un(e,v,T,I,et,ht,f,u);return;case"select":lt=v=T=at=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:o.hasOwnProperty(f)||He(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==I&&He(e,n,u,f,o,I)}n=T,a=v,o=lt,at!=null?rn(e,!!a,at,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(e,n,T,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,n,v,u,o,f)}Gs(e,at,lt);return;case"option":for(var Xt in a)at=a[Xt],a.hasOwnProperty(Xt)&&at!=null&&!o.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:He(e,n,Xt,null,o,at));for(I in o)at=o[I],lt=a[I],o.hasOwnProperty(I)&&at!==lt&&(at!=null||lt!=null)&&(I==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":He(e,n,I,at,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)at=a[ne],a.hasOwnProperty(ne)&&at!=null&&!o.hasOwnProperty(ne)&&He(e,n,ne,null,o,at);for(et in o)if(at=o[et],lt=a[et],o.hasOwnProperty(et)&&at!==lt&&(at!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:He(e,n,et,at,o,lt)}return;default:if(ru(n)){for(var Ge in a)at=a[Ge],a.hasOwnProperty(Ge)&&at!==void 0&&!o.hasOwnProperty(Ge)&&jf(e,n,Ge,void 0,o,at);for(ht in o)at=o[ht],lt=a[ht],!o.hasOwnProperty(ht)||at===lt||at===void 0&&lt===void 0||jf(e,n,ht,at,o,lt);return}}for(var q in a)at=a[q],a.hasOwnProperty(q)&&at!=null&&!o.hasOwnProperty(q)&&He(e,n,q,null,o,at);for(_t in o)at=o[_t],lt=a[_t],!o.hasOwnProperty(_t)||at===lt||at==null&&lt==null||He(e,n,_t,at,o,lt)}function c_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&c_(v)){for(v=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],et=I.startTime;if(et>T)break;var ht=I.transferSize,_t=I.initiatorType;ht&&c_(_t)&&(I=I.responseEnd,v+=ht*(I<T?1:(T-et)/(I-et)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qf=null,Zf=null;function ac(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function mS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(vS)}:h_;function vS(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function p_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),xr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[as]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Lo(e.ownerDocument.body);a=u}while(a);xr(n)}function m_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[as])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function SS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function g_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var eh=null;function __(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function v_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function x_(e,n,a){switch(n=ac(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);A(e)}var _i=new Map,S_=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=Q.d;Q.d={f:MS,r:ES,D:TS,C:bS,L:AS,m:RS,X:wS,S:CS,M:DS};function MS(){var e=ra.f(),n=Kl();return e||n}function ES(e){var n=st(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):ra.r(e)}var gr=typeof document>"u"?null:document;function y_(e,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=Ee(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),S_.has(u)||(S_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),xt(n),o.head.appendChild(n)))}}function TS(e){ra.D(e),y_("dns-prefetch",e,null)}function bS(e,n){ra.C(e,n),y_("preconnect",e,n)}function AS(e,n,a){ra.L(e,n,a);var o=gr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ee(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ee(a.imageSizes)+'"]')):u+='[href="'+Ee(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=vr(e)}_i.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Oo(f))||(n=o.createElement("link"),Dn(n,"link",e),xt(n),o.head.appendChild(n)))}}function RS(e,n){ra.m(e,n);var a=gr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ee(o)+'"][href="'+Ee(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!_i.has(f)&&(e=g({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(f)))return}o=a.createElement("link"),Dn(o,"link",e),xt(o),a.head.appendChild(o)}}}function CS(e,n,a){ra.S(e,n,a);var o=gr;if(o&&e){var u=Z(o).hoistableStyles,f=_r(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(No(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&nh(e,a);var I=v=o.createElement("link");xt(I),Dn(I,"link",e),I._p=new Promise(function(et,ht){I.onload=et,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,rc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function wS(e,n){ra.X(e,n);var a=gr;if(a&&e){var o=Z(a).hoistableScripts,u=vr(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=g({src:e,async:!0},n),(n=_i.get(u))&&ih(e,n),f=a.createElement("script"),xt(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function DS(e,n){ra.M(e,n);var a=gr;if(a&&e){var o=Z(a).hoistableScripts,u=vr(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&ih(e,n),f=a.createElement("script"),xt(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function M_(e,n,a,o){var u=(u=it.current)?sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=Z(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=Z(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(No(e)))&&!f._p&&(v.instance=f,v.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||US(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=Z(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+Ee(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function E_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function US(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),xt(n),e.head.appendChild(n))}function vr(e){return'[src="'+Ee(e)+'"]'}function Oo(e){return"script[async]"+e}function T_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(o)return n.instance=o,xt(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),xt(o),Dn(o,"style",u),rc(o,a.precedence,e),n.instance=o;case"stylesheet":u=_r(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,xt(f),f;o=E_(a),(u=_i.get(u))&&nh(o,u),f=(e.ownerDocument||e).createElement("link"),xt(f);var v=f;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Dn(f,"link",o),n.state.loading|=4,rc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(u=e.querySelector(Oo(f)))?(n.instance=u,xt(u),u):(o=a,(u=_i.get(f))&&(o=g({},a),ih(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),xt(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,e));return n.instance}function rc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var oc=null;function b_(e,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[tn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function A_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function NS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=lc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,xt(f);return}f=n.ownerDocument||n,o=E_(o),(u=_i.get(u))&&nh(o,u),f=f.createElement("link"),xt(f);var v=f;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=lc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ah=0;function OS(e,n){return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ah===0&&(ah=62500*pS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ah?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function uc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,n.forEach(PS,e),cc=null,lc.call(e))}function PS(e,n){if(!(n.state.loading&4)){var a=cc.get(e);if(a)var o=a.get(null);else{a=new Map,cc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function zS(e,n,a,o,u,f,v,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function C_(e,n,a,o,u,f,v,T,I,et,ht,_t){return e=new zS(e,n,a,v,I,et,ht,_t,T),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=zu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Hu(f),e}function w_(e){return e?(e=Zs,e):Zs}function D_(e,n,a,o,u,f){u=w_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ca(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=wa(e,o,n),a!==null&&(Yn(a,e,n),ho(a,e,n))}function U_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sh(e,n){U_(e,n),(e=e.alternate)&&U_(e,n)}function L_(e){if(e.tag===13||e.tag===31){var n=cs(e,67108864);n!==null&&Yn(n,e,67108864),sh(e,67108864)}}function N_(e){if(e.tag===13||e.tag===31){var n=ii();n=Kn(n);var a=cs(e,n);a!==null&&Yn(a,e,n),sh(e,n)}}var fc=!0;function IS(e,n,a,o){var u=P.T;P.T=null;var f=Q.p;try{Q.p=2,rh(e,n,a,o)}finally{Q.p=f,P.T=u}}function BS(e,n,a,o){var u=P.T;P.T=null;var f=Q.p;try{Q.p=8,rh(e,n,a,o)}finally{Q.p=f,P.T=u}}function rh(e,n,a,o){if(fc){var u=oh(o);if(u===null)Yf(e,n,o,hc,a),P_(e,o);else if(HS(u,e,n,a,o))o.stopPropagation();else if(P_(e,o),n&4&&-1<FS.indexOf(e)){for(;u!==null;){var f=st(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=At(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-vt(v);T.entanglements[1]|=I,v&=~I}Ii(f),(Ue&6)===0&&(ql=E()+500,wo(0))}}break;case 31:case 13:T=cs(f,2),T!==null&&Yn(T,f,2),Kl(),sh(f,2)}if(f=oh(o),f===null&&Yf(e,n,o,hc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Yf(e,n,o,null,a)}}function oh(e){return e=lu(e),lh(e)}var hc=null;function lh(e){if(hc=null,e=Y(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hc=e,null}function O_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case pt:return 2;case yt:return 8;case ft:case qt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var ch=!1,Ha=null,Ga=null,Va=null,zo=new Map,Io=new Map,ka=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Bo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=st(n),n!==null&&L_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function HS(e,n,a,o,u){switch(n){case"focusin":return Ha=Bo(Ha,e,n,a,o,u),!0;case"dragenter":return Ga=Bo(Ga,e,n,a,o,u),!0;case"mouseover":return Va=Bo(Va,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Bo(zo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Io.set(f,Bo(Io.get(f)||null,e,n,a,o,u)),!0}return!1}function z_(e){var n=Y(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,is(e.priority,function(){N_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,is(e.priority,function(){N_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=oh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=st(a),n!==null&&L_(n),e.blockedOn=a,!1;n.shift()}return!0}function I_(e,n,a){dc(e)&&a.delete(n)}function GS(){ch=!1,Ha!==null&&dc(Ha)&&(Ha=null),Ga!==null&&dc(Ga)&&(Ga=null),Va!==null&&dc(Va)&&(Va=null),zo.forEach(I_),Io.forEach(I_)}function pc(e,n){e.blockedOn===n&&(e.blockedOn=null,ch||(ch=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,GS)))}var mc=null;function B_(e){mc!==e&&(mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(lh(o||a)===null)continue;break}var f=st(a);f!==null&&(e.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xr(e){function n(I){return pc(I,e)}Ha!==null&&pc(Ha,e),Ga!==null&&pc(Ga,e),Va!==null&&pc(Va,e),zo.forEach(n),Io.forEach(n);for(var a=0;a<ka.length;a++){var o=ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[mn]||null;if(typeof f=="function")v||B_(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[mn]||null)T=v.formAction;else if(lh(u)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),B_(a)}}}function F_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function uh(e){this._internalRoot=e}gc.prototype.render=uh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();D_(a,o,e,n,null,null)},gc.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;D_(e.current,2,null,e,null,null),Kl(),n[Li]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ci();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&z_(e)}};var H_=t.version;if(H_!=="19.2.6")throw Error(s(527,H_,"19.2.6"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{bt=_c.inject(VS),Ut=_c}catch{}}return Ho.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=jm,f=qm,v=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=C_(e,1,!1,null,null,a,o,null,u,f,v,F_),e[Li]=n.current,Wf(e),new uh(n)},Ho.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=jm,v=qm,T=Zm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=C_(e,1,!0,n,a??null,o,u,I,f,v,T,F_),n.context=w_(null),a=n.current,o=ii(),o=Kn(o),u=Ca(o),u.callback=null,wa(a,u,o),a=o,n.current.lanes=a,pn(n,a),Ii(n),e[Li]=n.current,Wf(e),new gc(n)},Ho.version="19.2.6",Ho}var K_;function JS(){if(K_)return dh.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=QS(),dh.exports}var $S=JS();const Vd="180",Hr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ty=0,Q_=1,ey=2,sv=1,rv=2,da=3,es=0,Hn=1,pa=2,$a=0,Gr=1,J_=2,$_=3,t0=4,ny=5,Ds=100,iy=101,ay=102,sy=103,ry=104,oy=200,ly=201,cy=202,uy=203,Zh=204,Kh=205,fy=206,hy=207,dy=208,py=209,my=210,gy=211,_y=212,vy=213,xy=214,Qh=0,Jh=1,$h=2,kr=3,td=4,ed=5,nd=6,id=7,kd=0,Sy=1,yy=2,ts=0,My=1,Ey=2,Ty=3,ov=4,by=5,Ay=6,Ry=7,lv=300,Xr=301,Wr=302,ad=303,sd=304,nu=306,rd=1e3,Ls=1001,od=1002,oi=1003,Cy=1004,vc=1005,Fi=1006,_h=1007,Ns=1008,Vi=1009,cv=1010,uv=1011,$o=1012,Xd=1013,Os=1014,Hi=1015,rl=1016,Wd=1017,Yd=1018,tl=1020,fv=35902,hv=35899,dv=1021,pv=1022,wi=1023,el=1026,nl=1027,jd=1028,qd=1029,mv=1030,Zd=1031,Kd=1033,Wc=33776,Yc=33777,jc=33778,qc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,Sd=37813,yd=37814,Md=37815,Ed=37816,Td=37817,bd=37818,Ad=37819,Rd=37820,Cd=37821,wd=36492,Dd=36494,Ud=36495,Ld=36283,Nd=36284,Od=36285,Pd=36286,wy=3200,Dy=3201,Qd=0,Uy=1,Ja="",qn="srgb",Yr="srgb-linear",Jc="linear",Ve="srgb",Sr=7680,e0=519,Ly=512,Ny=513,Oy=514,gv=515,Py=516,zy=517,Iy=518,By=519,n0=35044,i0="300 es",Gi=2e3,$c=2001;class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a0=1234567;const Qo=Math.PI/180,il=180/Math.PI;function Zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function me(r,t,i){return Math.max(t,Math.min(i,r))}function Jd(r,t){return(r%t+t)%t}function Fy(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Hy(r,t,i){return r!==t?(i-r)/(t-r):0}function Jo(r,t,i){return(1-i)*r+i*t}function Gy(r,t,i,s){return Jo(r,t,1-Math.exp(-i*s))}function Vy(r,t=1){return t-Math.abs(Jd(r,t*2)-t)}function ky(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function Xy(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Wy(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Yy(r,t){return r+Math.random()*(t-r)}function jy(r){return r*(.5-Math.random())}function qy(r){r!==void 0&&(a0=r);let t=a0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zy(r){return r*Qo}function Ky(r){return r*il}function Qy(r){return(r&r-1)===0&&r!==0}function Jy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $y(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),x=h((t+s)/2),g=c((t-s)/2),S=h((t-s)/2),M=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*x,m*g,m*S,d*p);break;case"YZY":r.set(m*S,d*x,m*g,d*p);break;case"ZXZ":r.set(m*g,m*S,d*x,d*p);break;case"XZX":r.set(d*x,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*x,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*x,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ir(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cs={DEG2RAD:Qo,RAD2DEG:il,generateUUID:Zr,clamp:me,euclideanModulo:Jd,mapLinear:Fy,inverseLerp:Hy,lerp:Jo,damp:Gy,pingpong:Vy,smoothstep:ky,smootherstep:Xy,randInt:Wy,randFloat:Yy,randFloatSpread:jy,seededRandom:qy,degToRad:Zy,radToDeg:Ky,isPowerOfTwo:Qy,ceilPowerOfTwo:Jy,floorPowerOfTwo:$y,setQuaternionFromProperEuler:tM,normalize:Bn,denormalize:Ir};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3];const S=c[h+0],M=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(g!==R||m!==S||p!==M||x!==b){let y=1-d;const _=m*S+p*M+x*b+g*R,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const G=Math.sqrt(N),F=Math.atan2(G,_*B);y=Math.sin(y*F)/G,d=Math.sin(d*F)/G}const w=d*B;if(m=m*y+S*w,p=p*y+M*w,x=x*y+b*w,g=g*y+R*w,y===1-d){const G=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=G,p*=G,x*=G,g*=G}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[h],S=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+x*g+m*M-p*S,t[i+1]=m*b+x*S+p*g-d*M,t[i+2]=p*b+x*M+d*S-m*g,t[i+3]=x*b-d*g-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(c/2),S=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*x*g+p*M*b,this._y=p*M*g-S*x*b,this._z=p*x*b+S*M*g,this._w=p*x*g-S*M*b;break;case"YXZ":this._x=S*x*g+p*M*b,this._y=p*M*g-S*x*b,this._z=p*x*b-S*M*g,this._w=p*x*g+S*M*b;break;case"ZXY":this._x=S*x*g-p*M*b,this._y=p*M*g+S*x*b,this._z=p*x*b+S*M*g,this._w=p*x*g-S*M*b;break;case"ZYX":this._x=S*x*g-p*M*b,this._y=p*M*g+S*x*b,this._z=p*x*b-S*M*g,this._w=p*x*g+S*M*b;break;case"YZX":this._x=S*x*g+p*M*b,this._y=p*M*g+S*x*b,this._z=p*x*b-S*M*g,this._w=p*x*g-S*M*b;break;case"XZY":this._x=S*x*g-p*M*b,this._y=p*M*g-S*x*b,this._z=p*x*b+S*M*g,this._w=p*x*g+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),g=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=h*g+this._w*S,this._x=s*g+this._x*S,this._y=l*g+this._y*S,this._z=c*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*x,this.y=s+m*x+d*p-c*g,this.z=l+m*g+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new K,s0=new Ps;class he{constructor(t,i,s,l,c,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],M=s[5],b=s[8],R=l[0],y=l[3],_=l[6],B=l[1],N=l[4],w=l[7],G=l[2],F=l[5],O=l[8];return c[0]=h*R+d*B+m*G,c[3]=h*y+d*N+m*F,c[6]=h*_+d*w+m*O,c[1]=p*R+x*B+g*G,c[4]=p*y+x*N+g*F,c[7]=p*_+x*w+g*O,c[2]=S*R+M*B+b*G,c[5]=S*y+M*N+b*F,c[8]=S*_+M*w+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=x*h-d*p,S=d*m-x*c,M=p*c-h*m,b=i*g+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=g*R,t[1]=(l*p-x*s)*R,t[2]=(d*s-l*h)*R,t[3]=S*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xh.makeScale(t,i)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new he;function _v(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function eM(){const r=tu("canvas");return r.style.display="block",r}const r0={};function al(r){r in r0||(r0[r]=!0,console.warn(r))}function nM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const o0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const r={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yr]:{primaries:t,whitePoint:s,transfer:Jc,toXYZ:o0,fromXYZ:l0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:o0,fromXYZ:l0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}const De=iM();function ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=tu("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ga(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Sh(l[h].image)):c.push(Sh(l[h]))}else c=Sh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;const yh=new K;class Pn extends Is{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=Ls,l=Ls,c=Fi,h=Ns,d=wi,m=Vi,p=Pn.DEFAULT_ANISOTROPY,x=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Zr(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=lv;Pn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,i=0,s=0,l=1){We.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(M+1)/2,G=(_+1)/2,F=(x+S)/4,O=(g+R)/4,H=(b+y)/4;return N>w&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=F/s,c=O/s):w>G?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=F/l,c=H/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=O/c,l=H/c),this.set(s,l,c,i),this}let B=Math.sqrt((y-b)*(y-b)+(g-R)*(g-R)+(S-x)*(S-x));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(g-R)/B,this.z=(S-x)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Is{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new We(0,0,t,i),this.scissorTest=!1,this.viewport=new We(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Pn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new $d(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends oM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class vv extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xc.copy(s.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),Sc.subVectors(this.max,Go),Mr.subVectors(t.a,Go),Er.subVectors(t.b,Go),Tr.subVectors(t.c,Go),Wa.subVectors(Er,Mr),Ya.subVectors(Tr,Er),Ms.subVectors(Mr,Tr);let i=[0,-Wa.z,Wa.y,0,-Ya.z,Ya.y,0,-Ms.z,Ms.y,Wa.z,0,-Wa.x,Ya.z,0,-Ya.x,Ms.z,0,-Ms.x,-Wa.y,Wa.x,0,-Ya.y,Ya.x,0,-Ms.y,Ms.x,0];return!Mh(i,Mr,Er,Tr,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,Mr,Er,Tr,Sc))?!1:(yc.crossVectors(Wa,Ya),i=[yc.x,yc.y,yc.z],Mh(i,Mr,Er,Tr,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new K,new K,new K,new K,new K,new K,new K,new K],Ti=new K,xc=new Bs,Mr=new K,Er=new K,Tr=new K,Wa=new K,Ya=new K,Ms=new K,Go=new K,Sc=new K,yc=new K,Es=new K;function Mh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Es.fromArray(r,c);const d=l.x*Math.abs(Es.x)+l.y*Math.abs(Es.y)+l.z*Math.abs(Es.z),m=t.dot(Es),p=i.dot(Es),x=s.dot(Es);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const cM=new Bs,Vo=new K,Eh=new K;class ol{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):cM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Eh)),this.expandByPoint(Vo.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new K,Th=new K,Mc=new K,ja=new K,bh=new K,Ec=new K,Ah=new K;class tp{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Th.copy(t).add(i).multiplyScalar(.5),Mc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(Th);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Mc),d=ja.dot(this.direction),m=-ja.dot(Mc),p=ja.lengthSq(),x=Math.abs(1-h*h);let g,S,M,b;if(x>0)if(g=h*m-d,S=h*d-m,b=c*x,g>=0)if(S>=-b)if(S<=b){const R=1/x;g*=R,S*=R,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Th).addScaledVector(Mc,S),M}intersectSphere(t,i){la.subVectors(t.center,this.origin);const s=la.dot(this.direction),l=la.dot(la)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(c=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(c=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,s,l,c){bh.subVectors(i,t),Ec.subVectors(s,t),Ah.crossVectors(bh,Ec);let h=this.direction.dot(Ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ja.subVectors(this.origin,t);const m=d*this.direction.dot(Ec.crossVectors(ja,Ec));if(m<0)return null;const p=d*this.direction.dot(bh.cross(ja));if(p<0||m+p>h)return null;const x=-d*ja.dot(Ah);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,c,h,d,m,p,x,g,S,M,b,R,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,x,g,S,M,b,R,y)}set(t,i,s,l,c,h,d,m,p,x,g,S,M,b,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=S,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/br.setFromMatrixColumn(t,0).length(),c=1/br.setFromMatrixColumn(t,1).length(),h=1/br.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const S=h*x,M=h*g,b=d*x,R=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*x,M=m*g,b=p*x,R=p*g;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*x,M=m*g,b=p*x,R=p*g;i[0]=S-R*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*x,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*x,M=h*g,b=d*x,R=d*g;i[0]=m*x,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=R-S*g,i[8]=b*g+M,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*g+b,i[10]=S-R*g}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+R,i[5]=h*x,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*x,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),qa.crossVectors(s,ai),qa.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),qa.crossVectors(s,ai)),qa.normalize(),Tc.crossVectors(ai,qa),l[0]=qa.x,l[4]=Tc.x,l[8]=ai.x,l[1]=qa.y,l[5]=Tc.y,l[9]=ai.y,l[2]=qa.z,l[6]=Tc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],_=s[14],B=s[3],N=s[7],w=s[11],G=s[15],F=l[0],O=l[4],H=l[8],C=l[12],D=l[1],V=l[5],W=l[9],ot=l[13],dt=l[2],ct=l[6],P=l[10],Q=l[14],j=l[3],St=l[7],Rt=l[11],L=l[15];return c[0]=h*F+d*D+m*dt+p*j,c[4]=h*O+d*V+m*ct+p*St,c[8]=h*H+d*W+m*P+p*Rt,c[12]=h*C+d*ot+m*Q+p*L,c[1]=x*F+g*D+S*dt+M*j,c[5]=x*O+g*V+S*ct+M*St,c[9]=x*H+g*W+S*P+M*Rt,c[13]=x*C+g*ot+S*Q+M*L,c[2]=b*F+R*D+y*dt+_*j,c[6]=b*O+R*V+y*ct+_*St,c[10]=b*H+R*W+y*P+_*Rt,c[14]=b*C+R*ot+y*Q+_*L,c[3]=B*F+N*D+w*dt+G*j,c[7]=B*O+N*V+w*ct+G*St,c[11]=B*H+N*W+w*P+G*Rt,c[15]=B*C+N*ot+w*Q+G*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],g=t[6],S=t[10],M=t[14],b=t[3],R=t[7],y=t[11],_=t[15];return b*(+c*m*g-l*p*g-c*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+c*h*S-l*h*M+l*p*x-c*m*x)+y*(+i*p*g-i*d*M-c*h*g+s*h*M+c*d*x-s*p*x)+_*(-l*d*x-i*m*g+i*d*S+l*h*g-s*h*S+s*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=t[9],S=t[10],M=t[11],b=t[12],R=t[13],y=t[14],_=t[15],B=g*y*p-R*S*p+R*m*M-d*y*M-g*m*_+d*S*_,N=b*S*p-x*y*p-b*m*M+h*y*M+x*m*_-h*S*_,w=x*R*p-b*g*p+b*d*M-h*R*M-x*d*_+h*g*_,G=b*g*m-x*R*m-b*d*S+h*R*S+x*d*y-h*g*y,F=i*B+s*N+l*w+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=B*O,t[1]=(R*S*c-g*y*c-R*l*M+s*y*M+g*l*_-s*S*_)*O,t[2]=(d*y*c-R*m*c+R*l*p-s*y*p-d*l*_+s*m*_)*O,t[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*M-s*m*M)*O,t[4]=N*O,t[5]=(x*y*c-b*S*c+b*l*M-i*y*M-x*l*_+i*S*_)*O,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*_-i*m*_)*O,t[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*M+i*m*M)*O,t[8]=w*O,t[9]=(b*g*c-x*R*c-b*s*M+i*R*M+x*s*_-i*g*_)*O,t[10]=(h*R*c-b*d*c+b*s*p-i*R*p-h*s*_+i*d*_)*O,t[11]=(x*d*c-h*g*c-x*s*p+i*g*p+h*s*M-i*d*M)*O,t[12]=G*O,t[13]=(x*R*l-b*g*l+b*s*S-i*R*S-x*s*y+i*g*y)*O,t[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*O,t[15]=(h*g*l-x*d*l+x*s*m-i*g*m-h*s*S+i*d*S)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,g=d+d,S=c*p,M=c*x,b=c*g,R=h*x,y=h*g,_=d*g,B=m*p,N=m*x,w=m*g,G=s.x,F=s.y,O=s.z;return l[0]=(1-(R+_))*G,l[1]=(M+w)*G,l[2]=(b-N)*G,l[3]=0,l[4]=(M-w)*F,l[5]=(1-(S+_))*F,l[6]=(y+B)*F,l[7]=0,l[8]=(b+N)*O,l[9]=(y-B)*O,l[10]=(1-(S+R))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=br.set(l[0],l[1],l[2]).length();const h=br.set(l[4],l[5],l[6]).length(),d=br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/c,x=1/h,g=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===Gi)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===$c)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,x=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===Gi)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===$c)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const br=new K,bi=new Qe,uM=new K(0,0,0),fM=new K(1,1,1),qa=new K,Tc=new K,ai=new K,c0=new Qe,u0=new Ps;class Ui{constructor(t=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return c0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return u0.setFromEuler(this),this.setFromQuaternion(u0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const f0=new K,Ar=new Ps,ca=new Qe,bc=new K,ko=new K,dM=new K,pM=new Ps,h0=new K(1,0,0),d0=new K(0,1,0),p0=new K(0,0,1),m0={type:"added"},mM={type:"removed"},Rr={type:"childadded",child:null},Rh={type:"childremoved",child:null};class Tn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new K,i=new Ui,s=new Ps,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new he}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(h0,t)}rotateY(t){return this.rotateOnAxis(d0,t)}rotateZ(t){return this.rotateOnAxis(p0,t)}translateOnAxis(t,i){return f0.copy(t).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(h0,t)}translateY(t){return this.translateOnAxis(d0,t)}translateZ(t){return this.translateOnAxis(p0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(ko,bc,this.up):ca.lookAt(bc,ko,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(ca),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(m0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(m0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),g=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new K(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new K,ua=new K,Ch=new K,fa=new K,Cr=new K,wr=new K,g0=new K,wh=new K,Dh=new K,Uh=new K,Lh=new We,Nh=new We,Oh=new We;class Ci{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),ua.subVectors(s,i),Ch.subVectors(t,i);const h=Ai.dot(Ai),d=Ai.dot(ua),m=Ai.dot(Ch),p=ua.dot(ua),x=ua.dot(Ch),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,M=(p*m-d*x)*S,b=(h*x-d*m)*S;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(h,fa.y),m.addScaledVector(d,fa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Lh.setScalar(0),Nh.setScalar(0),Oh.setScalar(0),Lh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,s),Oh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Lh,c.x),h.addScaledVector(Nh,c.y),h.addScaledVector(Oh,c.z),h}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),ua.subVectors(t,i),Ai.cross(ua).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ai.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Cr.subVectors(l,s),wr.subVectors(c,s),wh.subVectors(t,s);const m=Cr.dot(wh),p=wr.dot(wh);if(m<=0&&p<=0)return i.copy(s);Dh.subVectors(t,l);const x=Cr.dot(Dh),g=wr.dot(Dh);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Cr,h);Uh.subVectors(t,c);const M=Cr.dot(Uh),b=wr.dot(Uh);if(b>=0&&M<=b)return i.copy(c);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(wr,d);const y=x*b-M*g;if(y<=0&&g-x>=0&&M-b>=0)return g0.subVectors(c,l),d=(g-x)/(g-x+(M-b)),i.copy(l).addScaledVector(g0,d);const _=1/(y+R+S);return h=R*_,d=S*_,i.copy(s).addScaledVector(Cr,h).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Ph(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=Jd(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ph(h,c,t+1/3),this.g=Ph(h,c,t),this.b=Ph(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=qn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=qn){const s=xv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return De.workingToColorSpace(On.copy(this),t),Math.round(me(On.r*255,0,255))*65536+Math.round(me(On.g*255,0,255))*256+Math.round(me(On.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=qn){De.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==qn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(Ac);const s=Jo(Za.h,Ac.h,i),l=Jo(Za.s,Ac.s,i),c=Jo(Za.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ge;ge.NAMES=xv;let gM=0;class Fs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Gr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class eu extends Fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new K,Rc=new le;let _M=0;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=n0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(t),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ir(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ir(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ir(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ir(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ir(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==n0&&(t.usage=this.usage),t}}class Sv extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class yv extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class li extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let vM=0;const vi=new Qe,zh=new Tn,Dr=new K,si=new Bs,Xo=new Bs,En=new K;class _a extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_v(t)?yv:Sv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new li(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(si.min,Xo.min),si.expandByPoint(En),En.addVectors(si.max,Xo.max),si.expandByPoint(En)):(si.expandByPoint(Xo.min),si.expandByPoint(Xo.max))}si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)En.fromBufferAttribute(d,p),m&&(Dr.fromBufferAttribute(t,p),En.add(Dr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let H=0;H<s.count;H++)d[H]=new K,m[H]=new K;const p=new K,x=new K,g=new K,S=new le,M=new le,b=new le,R=new K,y=new K;function _(H,C,D){p.fromBufferAttribute(s,H),x.fromBufferAttribute(s,C),g.fromBufferAttribute(s,D),S.fromBufferAttribute(c,H),M.fromBufferAttribute(c,C),b.fromBufferAttribute(c,D),x.sub(p),g.sub(p),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(V),d[H].add(R),d[C].add(R),d[D].add(R),m[H].add(y),m[C].add(y),m[D].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let H=0,C=B.length;H<C;++H){const D=B[H],V=D.start,W=D.count;for(let ot=V,dt=V+W;ot<dt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const N=new K,w=new K,G=new K,F=new K;function O(H){G.fromBufferAttribute(l,H),F.copy(G);const C=d[H];N.copy(C),N.sub(G.multiplyScalar(G.dot(C))).normalize(),w.crossVectors(F,C);const V=w.dot(m[H])<0?-1:1;h.setXYZW(H,N.x,N.y,N.z,V)}for(let H=0,C=B.length;H<C;++H){const D=B[H],V=D.start,W=D.count;for(let ot=V,dt=V+W;ot<dt;ot+=3)O(t.getX(ot+0)),O(t.getX(ot+1)),O(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,x=new K,g=new K;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),R=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,g=d.normalized,S=new p.constructor(m.length*x);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*x;for(let _=0;_<x;_++)S[b++]=p[M++]}return new Di(S,x,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _a,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const S=p[x],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,M=g.length;S<M;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _0=new Qe,Ts=new tp,Cc=new ol,v0=new K,wc=new K,Dc=new K,Uc=new K,Ih=new K,Lc=new K,x0=new K,Nc=new K;class Xe extends Tn{constructor(t=new _a,i=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Lc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(Ih.fromBufferAttribute(g,t),h?Lc.addScaledVector(Ih,x):Lc.addScaledVector(Ih.sub(i),x))}i.add(Lc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(Cc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Cc,v0)===null||Ts.origin.distanceToSquared(v0)>(t.far-t.near)**2))&&(_0.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(_0),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=B,G=N;w<G;w+=3){const F=d.getX(w),O=d.getX(w+1),H=d.getX(w+2);l=Oc(this,_,t,s,p,x,g,F,O,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const B=d.getX(y),N=d.getX(y+1),w=d.getX(y+2);l=Oc(this,h,t,s,p,x,g,B,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=B,G=N;w<G;w+=3){const F=w,O=w+1,H=w+2;l=Oc(this,_,t,s,p,x,g,F,O,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const B=y,N=y+1,w=y+2;l=Oc(this,h,t,s,p,x,g,B,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function xM(r,t,i,s,l,c,h,d){let m;if(t.side===Hn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===es,d),m===null)return null;Nc.copy(d),Nc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Nc);return p<i.near||p>i.far?null:{distance:p,point:Nc.clone(),object:r}}function Oc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,wc),r.getVertexPosition(m,Dc),r.getVertexPosition(p,Uc);const x=xM(r,t,i,s,wc,Dc,Uc,x0);if(x){const g=new K;Ci.getBarycoord(x0,wc,Dc,Uc,g),l&&(x.uv=Ci.getInterpolatedAttribute(l,d,m,p,g,new le)),c&&(x.uv1=Ci.getInterpolatedAttribute(c,d,m,p,g,new le)),h&&(x.normal=Ci.getInterpolatedAttribute(h,d,m,p,g,new K),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new K,materialIndex:0};Ci.getNormal(wc,Dc,Uc,S.normal),x.face=S,x.barycoord=g}return x}class va extends _a{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new li(p,3)),this.setAttribute("normal",new li(x,3)),this.setAttribute("uv",new li(g,2));function b(R,y,_,B,N,w,G,F,O,H,C){const D=w/O,V=G/H,W=w/2,ot=G/2,dt=F/2,ct=O+1,P=H+1;let Q=0,j=0;const St=new K;for(let Rt=0;Rt<P;Rt++){const L=Rt*V-ot;for(let nt=0;nt<ct;nt++){const Et=nt*D-W;St[R]=Et*B,St[y]=L*N,St[_]=dt,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[_]=F>0?1:-1,x.push(St.x,St.y,St.z),g.push(nt/O),g.push(1-Rt/H),Q+=1}}for(let Rt=0;Rt<H;Rt++)for(let L=0;L<O;L++){const nt=S+L+ct*Rt,Et=S+L+ct*(Rt+1),Ct=S+(L+1)+ct*(Rt+1),Ot=S+(L+1)+ct*Rt;m.push(nt,Et,Ot),m.push(Et,Ct,Ot),j+=6}d.addGroup(M,j,C),M+=j,S+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function SM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Mv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const yM={clone:jr,merge:Fn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends Fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Ev extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new K,S0=new le,y0=new le;class ri extends Ev{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,S0,y0),i.subVectors(y0,S0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class TM extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new ri(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const h=new ri(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const d=new ri(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const m=new ri(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new ri(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===$c)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(g,S,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Tv extends Pn{constructor(t=[],i=Xr,s,l,c,h,d,m,p,x){super(t,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bM extends zs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new va(5,5,5),c=new ns({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:$a});c.uniforms.tEquirect.value=i;const h=new Xe(l,c),d=i.minFilter;return i.minFilter===Ns&&(i.minFilter=Fi),new TM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class ma extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ma;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class bv extends Tn{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM extends Pn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=oi,x=oi,g,S){super(null,h,d,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M0 extends Di{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Nr=new Qe,E0=new Qe,Pc=[],T0=new Bs,CM=new Qe,Wo=new Xe,Yo=new ol;class wM extends Xe{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new M0(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,CM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Nr),T0.copy(t.boundingBox).applyMatrix4(Nr),this.boundingBox.union(T0)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ol),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Nr),Yo.copy(t.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Yo)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(s),t.ray.intersectsSphere(Yo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Nr),E0.multiplyMatrices(s,Nr),Wo.matrixWorld=E0,Wo.raycast(t,Pc);for(let h=0,d=Pc.length;h<d;h++){const m=Pc[h];m.instanceId=c,m.object=this,i.push(m)}Pc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new M0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new RM(new Float32Array(l*this.count),l,this.count,jd,Hi));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fh=new K,DM=new K,UM=new he;class Qa{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fh.subVectors(s,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||UM.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new ol,LM=new le(.5,.5),zc=new K;class np{constructor(t=new Qa,i=new Qa,s=new Qa,l=new Qa,c=new Qa,h=new Qa){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],M=c[7],b=c[8],R=c[9],y=c[10],_=c[11],B=c[12],N=c[13],w=c[14],G=c[15];if(l[0].setComponents(p-h,M-x,_-b,G-B).normalize(),l[1].setComponents(p+h,M+x,_+b,G+B).normalize(),l[2].setComponents(p+d,M+g,_+R,G+N).normalize(),l[3].setComponents(p-d,M-g,_-R,G-N).normalize(),s)l[4].setComponents(m,S,y,w).normalize(),l[5].setComponents(p-m,M-S,_-y,G-w).normalize();else if(l[4].setComponents(p-m,M-S,_-y,G-w).normalize(),i===Gi)l[5].setComponents(p+m,M+S,_+y,G+w).normalize();else if(i===$c)l[5].setComponents(m,S,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);const i=LM.distanceTo(t.center);return bs.radius=.7071067811865476+i,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class NM extends Pn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Av extends Pn{constructor(t,i,s=Os,l,c,h,d=oi,m=oi,p,x=el,g=1){if(x!==el&&x!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $d(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ip extends _a{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],d=[],m=[],p=new K,x=new le;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let g=0,S=3;g<=i;g++,S+=3){const M=s+g/i*l;p.x=t*Math.cos(M),p.y=t*Math.sin(M),h.push(p.x,p.y,p.z),d.push(0,0,1),x.x=(h[S]/t+1)/2,x.y=(h[S+1]/t+1)/2,m.push(x.x,x.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new li(h,3)),this.setAttribute("normal",new li(d,3)),this.setAttribute("uv",new li(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class iu extends _a{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],g=[],S=[],M=[];let b=0;const R=[],y=s/2;let _=0;B(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(x),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(S,3)),this.setAttribute("uv",new li(M,2));function B(){const w=new K,G=new K;let F=0;const O=(i-t)/s;for(let H=0;H<=c;H++){const C=[],D=H/c,V=D*(i-t)+t;for(let W=0;W<=l;W++){const ot=W/l,dt=ot*m+d,ct=Math.sin(dt),P=Math.cos(dt);G.x=V*ct,G.y=-D*s+y,G.z=V*P,g.push(G.x,G.y,G.z),w.set(ct,O,P).normalize(),S.push(w.x,w.y,w.z),M.push(ot,1-D),C.push(b++)}R.push(C)}for(let H=0;H<l;H++)for(let C=0;C<c;C++){const D=R[C][H],V=R[C+1][H],W=R[C+1][H+1],ot=R[C][H+1];(t>0||C!==0)&&(x.push(D,V,ot),F+=3),(i>0||C!==c-1)&&(x.push(V,W,ot),F+=3)}p.addGroup(_,F,0),_+=F}function N(w){const G=b,F=new le,O=new K;let H=0;const C=w===!0?t:i,D=w===!0?1:-1;for(let W=1;W<=l;W++)g.push(0,y*D,0),S.push(0,D,0),M.push(.5,.5),b++;const V=b;for(let W=0;W<=l;W++){const dt=W/l*m+d,ct=Math.cos(dt),P=Math.sin(dt);O.x=C*P,O.y=y*D,O.z=C*ct,g.push(O.x,O.y,O.z),S.push(0,D,0),F.x=ct*.5+.5,F.y=P*.5*D+.5,M.push(F.x,F.y),b++}for(let W=0;W<l;W++){const ot=G+W,dt=V+W;w===!0?x.push(dt,dt+1,ot):x.push(dt+1,dt,ot),H+=3}p.addGroup(_,H,w===!0?1:2),_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new iu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qr extends _a{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=t/d,S=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<x;_++){const B=_*S-h;for(let N=0;N<p;N++){const w=N*g-c;b.push(w,-B,0),R.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const N=B+p*_,w=B+p*(_+1),G=B+1+p*(_+1),F=B+1+p*_;M.push(N,w,F),M.push(w,G,F)}this.setIndex(M),this.setAttribute("position",new li(b,3)),this.setAttribute("normal",new li(R,3)),this.setAttribute("uv",new li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.widthSegments,t.heightSegments)}}class OM extends Fs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Ri extends Fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jo extends Ri{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class PM extends Fs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zM extends Fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IM extends Fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ap extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class BM extends ap{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Hh=new Qe,b0=new K,A0=new K;class Cv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;b0.setFromMatrixPosition(t.matrixWorld),i.position.copy(b0),A0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A0),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const R0=new Qe,qo=new K,Gh=new K;class FM extends Cv{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),qo.setFromMatrixPosition(t.matrixWorld),s.position.copy(qo),Gh.copy(s.position),Gh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Gh),s.updateMatrixWorld(),l.makeTranslation(-qo.x,-qo.y,-qo.z),R0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R0,s.coordinateSystem,s.reversedDepth)}}class wv extends ap{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new FM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dv extends Ev{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HM extends Cv{constructor(){super(new Dv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C0 extends ap{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new HM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class GM extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class VM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const w0=new Qe;class kM{constructor(t,i,s=0,l=1/0){this.ray=new tp(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return w0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w0),this}intersectObject(t,i=!0,s=[]){return zd(t,this,s,i),s.sort(D0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)zd(t[l],this,s,i);return s.sort(D0),s}}function D0(r,t){return r.distance-t.distance}function zd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)zd(c[h],t,i,!0)}}class Id{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XM extends Is{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function U0(r,t,i,s){const l=WM(s);switch(i){case dv:return r*t;case jd:return r*t/l.components*l.byteLength;case qd:return r*t/l.components*l.byteLength;case mv:return r*t*2/l.components*l.byteLength;case Zd:return r*t*2/l.components*l.byteLength;case pv:return r*t*3/l.components*l.byteLength;case wi:return r*t*4/l.components*l.byteLength;case Kd:return r*t*4/l.components*l.byteLength;case Wc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case jc:case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wd:case Dd:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ld:case Nd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WM(r){switch(r){case Vi:case cv:return{byteLength:1,components:1};case $o:case uv:case rl:return{byteLength:2,components:1};case Wd:case Yd:return{byteLength:2,components:4};case Os:case Xd:case Hi:return{byteLength:4,components:1};case fv:case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);function Uv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function YM(r){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,x);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],R=g[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,g[S]=R)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const R=g[M];r.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eE=`#ifdef USE_BATCHING
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
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,oE=`#ifdef USE_BUMPMAP
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gE=`#define PI 3.141592653589793
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
} // validated`,_E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vE=`vec3 transformedNormal = objectNormal;
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
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EE="gl_FragColor = linearToOutputTexel( gl_FragColor );",TE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
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
}`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
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
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
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
#endif`,WE=`struct PhysicalMaterial {
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
}`,YE=`
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nT=`#if defined( USE_POINTS_UV )
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
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
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
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_T=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ST=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,OT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PT=`#ifdef USE_SKINNING
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
#endif`,zT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
}`,tb=`#define DISTANCE
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
}`,eb=`#define DISTANCE
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,ob=`uniform vec3 diffuse;
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
}`,lb=`#define LAMBERT
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
}`,cb=`#define LAMBERT
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
}`,ub=`#define MATCAP
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
}`,fb=`#define MATCAP
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
}`,hb=`#define NORMAL
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
}`,db=`#define NORMAL
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
}`,pb=`#define PHONG
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
}`,mb=`#define PHONG
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
}`,gb=`#define STANDARD
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
}`,_b=`#define STANDARD
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
}`,vb=`#define TOON
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
}`,xb=`#define TOON
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
}`,Sb=`uniform float size;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Eb=`uniform vec3 color;
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
}`,Tb=`uniform float rotation;
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
}`,bb=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:jM,alphahash_pars_fragment:qM,alphamap_fragment:ZM,alphamap_pars_fragment:KM,alphatest_fragment:QM,alphatest_pars_fragment:JM,aomap_fragment:$M,aomap_pars_fragment:tE,batching_pars_vertex:eE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:aE,bsdfs:sE,iridescence_fragment:rE,bumpmap_pars_fragment:oE,clipping_planes_fragment:lE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:fE,color_fragment:hE,color_pars_fragment:dE,color_pars_vertex:pE,color_vertex:mE,common:gE,cube_uv_reflection_fragment:_E,defaultnormal_vertex:vE,displacementmap_pars_vertex:xE,displacementmap_vertex:SE,emissivemap_fragment:yE,emissivemap_pars_fragment:ME,colorspace_fragment:EE,colorspace_pars_fragment:TE,envmap_fragment:bE,envmap_common_pars_fragment:AE,envmap_pars_fragment:RE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:FE,envmap_vertex:wE,fog_vertex:DE,fog_pars_vertex:UE,fog_fragment:LE,fog_pars_fragment:NE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:PE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:IE,lights_pars_begin:BE,lights_toon_fragment:HE,lights_toon_pars_fragment:GE,lights_phong_fragment:VE,lights_phong_pars_fragment:kE,lights_physical_fragment:XE,lights_physical_pars_fragment:WE,lights_fragment_begin:YE,lights_fragment_maps:jE,lights_fragment_end:qE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:JE,map_fragment:$E,map_pars_fragment:tT,map_particle_fragment:eT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:aT,morphinstance_vertex:sT,morphcolor_vertex:rT,morphnormal_vertex:oT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:fT,normal_pars_fragment:hT,normal_pars_vertex:dT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:_T,clearcoat_pars_fragment:vT,iridescence_pars_fragment:xT,opaque_fragment:ST,packing:yT,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:TT,dithering_pars_fragment:bT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:RT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:wT,shadowmap_vertex:DT,shadowmask_pars_fragment:UT,skinbase_vertex:LT,skinning_pars_vertex:NT,skinning_vertex:OT,skinnormal_vertex:PT,specularmap_fragment:zT,specularmap_pars_fragment:IT,tonemapping_fragment:BT,tonemapping_pars_fragment:FT,transmission_fragment:HT,transmission_pars_fragment:GT,uv_pars_fragment:VT,uv_pars_vertex:kT,uv_vertex:XT,worldpos_vertex:WT,background_vert:YT,background_frag:jT,backgroundCube_vert:qT,backgroundCube_frag:ZT,cube_vert:KT,cube_frag:QT,depth_vert:JT,depth_frag:$T,distanceRGBA_vert:tb,distanceRGBA_frag:eb,equirect_vert:nb,equirect_frag:ib,linedashed_vert:ab,linedashed_frag:sb,meshbasic_vert:rb,meshbasic_frag:ob,meshlambert_vert:lb,meshlambert_frag:cb,meshmatcap_vert:ub,meshmatcap_frag:fb,meshnormal_vert:hb,meshnormal_frag:db,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:_b,meshtoon_vert:vb,meshtoon_frag:xb,points_vert:Sb,points_frag:yb,shadow_vert:Mb,shadow_frag:Eb,sprite_vert:Tb,sprite_frag:bb},zt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Fn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ge(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Fn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Fn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Fn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ge(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Fn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Fn([zt.points,zt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Fn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Fn([zt.common,zt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Fn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Fn([zt.sprite,zt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Fn([zt.common,zt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Fn([zt.lights,zt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ic={r:0,b:0,g:0},As=new Ui,Ab=new Qe;function Rb(r,t,i,s,l,c,h){const d=new ge(0);let m=c===!0?0:1,p,x,g=null,S=0,M=null;function b(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:t).get(w)),w}function R(N){let w=!1;const G=b(N);G===null?_(d,m):G&&G.isColor&&(_(G,1),w=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,w){const G=b(w);G&&(G.isCubeTexture||G.mapping===nu)?(x===void 0&&(x=new Xe(new va(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:jr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(F,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),As.copy(w.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(As)),x.material.toneMapped=De.getTransfer(G.colorSpace)!==Ve,(g!==G||S!==G.version||M!==r.toneMapping)&&(x.material.needsUpdate=!0,g=G,S=G.version,M=r.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Xe(new qr(2,2),new ns({name:"BackgroundMaterial",uniforms:jr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=De.getTransfer(G.colorSpace)!==Ve,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||S!==G.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=G,S=G.version,M=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,w){N.getRGB(Ic,Mv(r)),s.buffers.color.setClear(Ic.r,Ic.g,Ic.b,w,h)}function B(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:R,addToRenderList:y,dispose:B}}function Cb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(D,V,W,ot,dt){let ct=!1;const P=g(ot,W,V);c!==P&&(c=P,p(c.object)),ct=M(D,ot,W,dt),ct&&b(D,ot,W,dt),dt!==null&&t.update(dt,r.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,w(D,V,W,ot),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function x(D){return r.deleteVertexArray(D)}function g(D,V,W){const ot=W.wireframe===!0;let dt=s[D.id];dt===void 0&&(dt={},s[D.id]=dt);let ct=dt[V.id];ct===void 0&&(ct={},dt[V.id]=ct);let P=ct[ot];return P===void 0&&(P=S(m()),ct[ot]=P),P}function S(D){const V=[],W=[],ot=[];for(let dt=0;dt<i;dt++)V[dt]=0,W[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:ot,object:D,attributes:{},index:null}}function M(D,V,W,ot){const dt=c.attributes,ct=V.attributes;let P=0;const Q=W.getAttributes();for(const j in Q)if(Q[j].location>=0){const Rt=dt[j];let L=ct[j];if(L===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),Rt===void 0||Rt.attribute!==L||L&&Rt.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function b(D,V,W,ot){const dt={},ct=V.attributes;let P=0;const Q=W.getAttributes();for(const j in Q)if(Q[j].location>=0){let Rt=ct[j];Rt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Rt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Rt=D.instanceColor));const L={};L.attribute=Rt,Rt&&Rt.data&&(L.data=Rt.data),dt[j]=L,P++}c.attributes=dt,c.attributesNum=P,c.index=ot}function R(){const D=c.newAttributes;for(let V=0,W=D.length;V<W;V++)D[V]=0}function y(D){_(D,0)}function _(D,V){const W=c.newAttributes,ot=c.enabledAttributes,dt=c.attributeDivisors;W[D]=1,ot[D]===0&&(r.enableVertexAttribArray(D),ot[D]=1),dt[D]!==V&&(r.vertexAttribDivisor(D,V),dt[D]=V)}function B(){const D=c.newAttributes,V=c.enabledAttributes;for(let W=0,ot=V.length;W<ot;W++)V[W]!==D[W]&&(r.disableVertexAttribArray(W),V[W]=0)}function N(D,V,W,ot,dt,ct,P){P===!0?r.vertexAttribIPointer(D,V,W,dt,ct):r.vertexAttribPointer(D,V,W,ot,dt,ct)}function w(D,V,W,ot){R();const dt=ot.attributes,ct=W.getAttributes(),P=V.defaultAttributeValues;for(const Q in ct){const j=ct[Q];if(j.location>=0){let St=dt[Q];if(St===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),St!==void 0){const Rt=St.normalized,L=St.itemSize,nt=t.get(St);if(nt===void 0)continue;const Et=nt.buffer,Ct=nt.type,Ot=nt.bytesPerElement,it=Ct===r.INT||Ct===r.UNSIGNED_INT||St.gpuType===Xd;if(St.isInterleavedBufferAttribute){const ut=St.data,Nt=ut.stride,It=St.offset;if(ut.isInstancedInterleavedBuffer){for(let Vt=0;Vt<j.locationSize;Vt++)_(j.location+Vt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Vt=0;Vt<j.locationSize;Vt++)y(j.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Vt=0;Vt<j.locationSize;Vt++)N(j.location+Vt,L/j.locationSize,Ct,Rt,Nt*Ot,(It+L/j.locationSize*Vt)*Ot,it)}else{if(St.isInstancedBufferAttribute){for(let ut=0;ut<j.locationSize;ut++)_(j.location+ut,St.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ut=0;ut<j.locationSize;ut++)y(j.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let ut=0;ut<j.locationSize;ut++)N(j.location+ut,L/j.locationSize,Ct,Rt,L*Ot,L/j.locationSize*ut*Ot,it)}}else if(P!==void 0){const Rt=P[Q];if(Rt!==void 0)switch(Rt.length){case 2:r.vertexAttrib2fv(j.location,Rt);break;case 3:r.vertexAttrib3fv(j.location,Rt);break;case 4:r.vertexAttrib4fv(j.location,Rt);break;default:r.vertexAttrib1fv(j.location,Rt)}}}}B()}function G(){H();for(const D in s){const V=s[D];for(const W in V){const ot=V[W];for(const dt in ot)x(ot[dt].object),delete ot[dt];delete V[W]}delete s[D]}}function F(D){if(s[D.id]===void 0)return;const V=s[D.id];for(const W in V){const ot=V[W];for(const dt in ot)x(ot[dt].object),delete ot[dt];delete V[W]}delete s[D.id]}function O(D){for(const V in s){const W=s[V];if(W[D.id]===void 0)continue;const ot=W[D.id];for(const dt in ot)x(ot[dt].object),delete ot[dt];delete W[D.id]}}function H(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:B}}function wb(r,t,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,g){g!==0&&(r.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function d(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let M=0;for(let b=0;b<g;b++)M+=x[b];i.update(M,s,1)}function m(p,x,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let b=0;for(let R=0;R<g;R++)b+=x[R]*S[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Db(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==wi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const H=O===rl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Vi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!H)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:G,maxSamples:F}}function Ub(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Qa,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||l;return l=S,s=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,_=r.get(g);if(!l||b===null||b.length===0||c&&!y)c?x(null):p();else{const B=c?0:s,N=B*4;let w=_.clippingState||null;m.value=w,w=x(b,S,N,M);for(let G=0;G!==N;++G)w[G]=i[G];_.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,S,M,b){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,w=M;N!==R;++N,w+=4)h.copy(g[N]).applyMatrix4(B,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function Lb(r){let t=new WeakMap;function i(h,d){return d===ad?h.mapping=Xr:d===sd&&(h.mapping=Wr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===sd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new bM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Fr=4,L0=[.125,.215,.35,.446,.526,.582],Us=20,Vh=new Dv,N0=new ge;let kh=null,Xh=0,Wh=0,Yh=!1;const ws=(1+Math.sqrt(5))/2,Or=1/ws,O0=[new K(-ws,Or,0),new K(ws,Or,0),new K(-Or,0,ws),new K(Or,0,ws),new K(0,ws,-Or),new K(0,ws,Or),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Nb=new K;class Bd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Nb}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=Yh,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Xr||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:rl,format:wi,colorSpace:Yr,depthBuffer:!1},l=P0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ob(c)),this._blurMaterial=Pb(c,t,i)}return l}_compileMaterial(t){const i=new Xe(this._lodPlanes[0],t);this._renderer.compile(i,Vh)}_sceneToCubeUV(t,i,s,l,c){const m=new ri(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(N0),g.toneMapping=ts,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new eu({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),y=new Xe(new va,R);let _=!1;const B=t.background;B?B.isColor&&(R.color.copy(B),t.background=null,_=!0):(R.color.copy(N0),_=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):w===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const G=this._cubeSize;Bc(l,w*G,N>2?G:0,G,G),g.setRenderTarget(l),_&&g.render(y,m),g.render(t,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=M,g.autoClear=S,t.background=B}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Xr||t.mapping===Wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Xe(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Bc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=O0[(l-c-1)%O0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,g=new Xe(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Us-1),R=c/b,y=isFinite(c)?1+Math.floor(x*R):Us;y>Us&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const _=[];let B=0;for(let O=0;O<Us;++O){const H=O/R,C=Math.exp(-H*H/2);_.push(C),O===0?B+=C:O<y&&(B+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/B;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const w=this._sizeLods[l],G=3*w*(l>N-Fr?l-N+Fr:0),F=4*(this._cubeSize-w);Bc(i,G,F,3*w,2*w),m.setRenderTarget(i),m.render(g,Vh)}}function Ob(r){const t=[],i=[],s=[];let l=r;const c=r-Fr+1+L0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Fr?m=L0[h-r+Fr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,b=6,R=3,y=2,_=1,B=new Float32Array(R*b*M),N=new Float32Array(y*b*M),w=new Float32Array(_*b*M);for(let F=0;F<M;F++){const O=F%3*2/3-1,H=F>2?0:-1,C=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];B.set(C,R*b*F),N.set(S,y*b*F);const D=[F,F,F,F,F,F];w.set(D,_*b*F)}const G=new _a;G.setAttribute("position",new Di(B,R)),G.setAttribute("uv",new Di(N,y)),G.setAttribute("faceIndex",new Di(w,_)),t.push(G),l>Fr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function P0(r,t,i){const s=new zs(r,t,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Bc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Pb(r,t,i){const s=new Float32Array(Us),l=new K(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sp(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function z0(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function I0(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function zb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===sd,x=m===Xr||m===Wr;if(p||x){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Bd(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Bd(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Ib(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Bb(r,t,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)t.update(S[M],r.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,b=g.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let N=0,w=B.length;N<w;N+=3){const G=B[N+0],F=B[N+1],O=B[N+2];S.push(G,F,F,O,O,G)}}else if(b!==void 0){const B=b.array;R=b.version;for(let N=0,w=B.length/3-1;N<w;N+=3){const G=N+0,F=N+1,O=N+2;S.push(G,F,F,O,O,G)}}else return;const y=new(_v(S)?yv:Sv)(S,1);y.version=R;const _=c.get(g);_&&t.remove(_),c.set(g,y)}function x(g){const S=c.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function Fb(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,M){r.drawElements(s,M,c,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,S*h,b),i.update(M,s,b))}function x(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function g(S,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,R,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*R[B];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function Hb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Gb(r,t,i){const s=new WeakMap,l=new We;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let D=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let G=d.attributes.position.count*w,F=1;G>t.maxTextureSize&&(F=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const O=new Float32Array(G*F*4*g),H=new vv(O,G,F,g);H.type=Hi,H.needsUpdate=!0;const C=w*4;for(let V=0;V<g;V++){const W=_[V],ot=B[V],dt=N[V],ct=G*F*4*V;for(let P=0;P<W.count;P++){const Q=P*C;b===!0&&(l.fromBufferAttribute(W,P),O[ct+Q+0]=l.x,O[ct+Q+1]=l.y,O[ct+Q+2]=l.z,O[ct+Q+3]=0),R===!0&&(l.fromBufferAttribute(ot,P),O[ct+Q+4]=l.x,O[ct+Q+5]=l.y,O[ct+Q+6]=l.z,O[ct+Q+7]=0),y===!0&&(l.fromBufferAttribute(dt,P),O[ct+Q+8]=l.x,O[ct+Q+9]=l.y,O[ct+Q+10]=l.z,O[ct+Q+11]=dt.itemSize===4?l.w:1)}}S={count:g,texture:H,size:new le(G,F)},s.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function Vb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Lv=new Pn,B0=new Av(1,1),Nv=new vv,Ov=new lM,Pv=new Tv,F0=[],H0=[],G0=new Float32Array(16),V0=new Float32Array(9),k0=new Float32Array(4);function Kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=F0[l];if(c===void 0&&(c=new Float32Array(l),F0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function au(r,t){let i=H0[t];i===void 0&&(i=new Int32Array(t),H0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function kb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function Wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function Yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function jb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;k0.set(s),r.uniformMatrix2fv(this.addr,!1,k0),Sn(i,s)}}function qb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;V0.set(s),r.uniformMatrix3fv(this.addr,!1,V0),Sn(i,s)}}function Zb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;G0.set(s),r.uniformMatrix4fv(this.addr,!1,G0),Sn(i,s)}}function Kb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function Jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function t1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function e1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function n1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function a1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(B0.compareFunction=gv,c=B0):c=Lv,i.setTexture2D(t||c,l)}function s1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ov,l)}function r1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Pv,l)}function o1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Nv,l)}function l1(r){switch(r){case 5126:return kb;case 35664:return Xb;case 35665:return Wb;case 35666:return Yb;case 35674:return jb;case 35675:return qb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(r,t){r.uniform1fv(this.addr,t)}function u1(r,t){const i=Kr(t,this.size,2);r.uniform2fv(this.addr,i)}function f1(r,t){const i=Kr(t,this.size,3);r.uniform3fv(this.addr,i)}function h1(r,t){const i=Kr(t,this.size,4);r.uniform4fv(this.addr,i)}function d1(r,t){const i=Kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function p1(r,t){const i=Kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function m1(r,t){const i=Kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function g1(r,t){r.uniform1iv(this.addr,t)}function _1(r,t){r.uniform2iv(this.addr,t)}function v1(r,t){r.uniform3iv(this.addr,t)}function x1(r,t){r.uniform4iv(this.addr,t)}function S1(r,t){r.uniform1uiv(this.addr,t)}function y1(r,t){r.uniform2uiv(this.addr,t)}function M1(r,t){r.uniform3uiv(this.addr,t)}function E1(r,t){r.uniform4uiv(this.addr,t)}function T1(r,t,i){const s=this.cache,l=t.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Lv,c[h])}function b1(r,t,i){const s=this.cache,l=t.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ov,c[h])}function A1(r,t,i){const s=this.cache,l=t.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Pv,c[h])}function R1(r,t,i){const s=this.cache,l=t.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Nv,c[h])}function C1(r){switch(r){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return S1;case 36294:return y1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class w1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=l1(i.type)}}class D1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=C1(i.type)}}class U1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function X0(r,t){r.seq.push(t),r.map[t.id]=t}function L1(r,t,i){const s=r.name,l=s.length;for(jh.lastIndex=0;;){const c=jh.exec(s),h=jh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){X0(i,p===void 0?new w1(d,r,t):new D1(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new U1(d),X0(i,g)),i=g}}}class Zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);L1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function W0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const N1=37297;let O1=0;function P1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Y0=new he;function z1(r){De._getMatrix(Y0,De.workingColorSpace,r);const t=`mat3( ${Y0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case Jc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function j0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+P1(r.getShaderSource(t),d)}else return c}function I1(r,t){const i=z1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function B1(r,t){let i;switch(t){case My:i="Linear";break;case Ey:i="Reinhard";break;case Ty:i="Cineon";break;case ov:i="ACESFilmic";break;case Ay:i="AgX";break;case Ry:i="Neutral";break;case by:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new K;function F1(){De.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function G1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function V1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Ko(r){return r!==""}function q0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(r){return r.replace(k1,W1)}const X1=new Map;function W1(r,t){let i=de[t];if(i===void 0){const s=X1.get(t);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Fd(i)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(r){return r.replace(Y1,j1)}function j1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(t="SHADOWMAP_TYPE_VSM"),t}function Z1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case Wr:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K1(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Wr&&(t="ENVMAP_MODE_REFRACTION"),t}function Q1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kd:t="ENVMAP_BLENDING_MULTIPLY";break;case Sy:t="ENVMAP_BLENDING_MIX";break;case yy:t="ENVMAP_BLENDING_ADD";break}return t}function J1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function $1(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=q1(i),p=Z1(i),x=K1(i),g=Q1(i),S=J1(i),M=H1(i),b=G1(c),R=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),_.length>0&&(_+=`
`)):(y=[Q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),_=[Q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ts?"#define TONE_MAPPING":"",i.toneMapping!==ts?de.tonemapping_pars_fragment:"",i.toneMapping!==ts?B1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,I1("linearToOutputTexel",i.outputColorSpace),F1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=Fd(h),h=q0(h,i),h=Z0(h,i),d=Fd(d),d=q0(d,i),d=Z0(d,i),h=K0(h),d=K0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+y+h,w=B+_+d,G=W0(l,l.VERTEX_SHADER,N),F=W0(l,l.FRAGMENT_SHADER,w);l.attachShader(R,G),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(V){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(G)||"",dt=l.getShaderInfoLog(F)||"",ct=W.trim(),P=ot.trim(),Q=dt.trim();let j=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,G,F);else{const Rt=j0(l,G,"vertex"),L=j0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ct+`
`+Rt+`
`+L)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(P===""||Q==="")&&(St=!1);St&&(V.diagnostics={runnable:j,programLog:ct,vertexShader:{log:P,prefix:y},fragmentShader:{log:Q,prefix:_}})}l.deleteShader(G),l.deleteShader(F),H=new Zc(l,R),C=V1(l,R)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(R,N1)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=F,this}let tA=0;class eA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new nA(t),i.set(t,s)),s}}class nA{constructor(t){this.id=tA++,this.code=t,this.usedTimes=0}}function iA(r,t,i,s,l,c,h){const d=new ep,m=new eA,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,V,W,ot){const dt=W.fog,ct=ot.geometry,P=C.isMeshStandardMaterial?W.environment:null,Q=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),j=Q&&Q.mapping===nu?Q.image.height:null,St=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Rt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,L=Rt!==void 0?Rt.length:0;let nt=0;ct.morphAttributes.position!==void 0&&(nt=1),ct.morphAttributes.normal!==void 0&&(nt=2),ct.morphAttributes.color!==void 0&&(nt=3);let Et,Ct,Ot,it;if(St){const Me=Bi[St];Et=Me.vertexShader,Ct=Me.fragmentShader}else Et=C.vertexShader,Ct=C.fragmentShader,m.update(C),Ot=m.getVertexShaderID(C),it=m.getFragmentShaderID(C);const ut=r.getRenderTarget(),Nt=r.state.buffers.depth.getReversed(),It=ot.isInstancedMesh===!0,Vt=ot.isBatchedMesh===!0,ee=!!C.map,Pe=!!C.matcap,z=!!Q,_e=!!C.aoMap,ie=!!C.lightMap,Qt=!!C.bumpMap,kt=!!C.normalMap,Le=!!C.displacementMap,Gt=!!C.emissiveMap,re=!!C.metalnessMap,Ye=!!C.roughnessMap,Ze=C.anisotropy>0,U=C.clearcoat>0,E=C.dispersion>0,$=C.iridescence>0,pt=C.sheen>0,yt=C.transmission>0,ft=Ze&&!!C.anisotropyMap,qt=U&&!!C.clearcoatMap,Dt=U&&!!C.clearcoatNormalMap,jt=U&&!!C.clearcoatRoughnessMap,Zt=$&&!!C.iridescenceMap,bt=$&&!!C.iridescenceThicknessMap,Ut=pt&&!!C.sheenColorMap,Mt=pt&&!!C.sheenRoughnessMap,vt=!!C.specularMap,Lt=!!C.specularColorMap,oe=!!C.specularIntensityMap,X=yt&&!!C.transmissionMap,Tt=yt&&!!C.thicknessMap,wt=!!C.gradientMap,Ht=!!C.alphaMap,At=C.alphaTest>0,mt=!!C.alphaHash,Ft=!!C.extensions;let ae=ts;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ae=r.toneMapping);const ye={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:Et,fragmentShader:Ct,defines:C.defines,customVertexShaderID:Ot,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Vt,batchingColor:Vt&&ot._colorsTexture!==null,instancing:It,instancingColor:It&&ot.instanceColor!==null,instancingMorph:It&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Yr,alphaToCoverage:!!C.alphaToCoverage,map:ee,matcap:Pe,envMap:z,envMapMode:z&&Q.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:ie,bumpMap:Qt,normalMap:kt,displacementMap:S&&Le,emissiveMap:Gt,normalMapObjectSpace:kt&&C.normalMapType===Uy,normalMapTangentSpace:kt&&C.normalMapType===Qd,metalnessMap:re,roughnessMap:Ye,anisotropy:Ze,anisotropyMap:ft,clearcoat:U,clearcoatMap:qt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:jt,dispersion:E,iridescence:$,iridescenceMap:Zt,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:vt,specularColorMap:Lt,specularIntensityMap:oe,transmission:yt,transmissionMap:X,thicknessMap:Tt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Gr&&C.alphaToCoverage===!1,alphaMap:Ht,alphaTest:At,alphaHash:mt,combine:C.combine,mapUv:ee&&R(C.map.channel),aoMapUv:_e&&R(C.aoMap.channel),lightMapUv:ie&&R(C.lightMap.channel),bumpMapUv:Qt&&R(C.bumpMap.channel),normalMapUv:kt&&R(C.normalMap.channel),displacementMapUv:Le&&R(C.displacementMap.channel),emissiveMapUv:Gt&&R(C.emissiveMap.channel),metalnessMapUv:re&&R(C.metalnessMap.channel),roughnessMapUv:Ye&&R(C.roughnessMap.channel),anisotropyMapUv:ft&&R(C.anisotropyMap.channel),clearcoatMapUv:qt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&R(C.sheenRoughnessMap.channel),specularMapUv:vt&&R(C.specularMap.channel),specularColorMapUv:Lt&&R(C.specularColorMap.channel),specularIntensityMapUv:oe&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Tt&&R(C.thicknessMap.channel),alphaMapUv:Ht&&R(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(kt||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ct.attributes.uv&&(ee||Ht),fog:!!dt,useFog:C.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Nt,skinning:ot.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:ee&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Gt&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===pa,flipSided:C.side===Hn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ye.vertexUv1s=p.has(1),ye.vertexUv2s=p.has(2),ye.vertexUv3s=p.has(3),p.clear(),ye}function _(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)D.push(V),D.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(B(D,C),N(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function B(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function N(C,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function w(C){const D=b[C.type];let V;if(D){const W=Bi[D];V=yM.clone(W.uniforms)}else V=C.uniforms;return V}function G(C,D){let V;for(let W=0,ot=x.length;W<ot;W++){const dt=x[W];if(dt.cacheKey===D){V=dt,++V.usedTimes;break}}return V===void 0&&(V=new $1(r,D,C,c),x.push(V)),V}function F(C){if(--C.usedTimes===0){const D=x.indexOf(C);x[D]=x[x.length-1],x.pop(),C.destroy()}}function O(C){m.remove(C)}function H(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:G,releaseProgram:F,releaseShaderCache:O,programs:x,dispose:H}}function aA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function sA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function J0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,S,M,b,R,y){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:R,group:y},r[t]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=R,_.group=y),t++,_}function d(g,S,M,b,R,y){const _=h(g,S,M,b,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,S,M,b,R,y){const _=h(g,S,M,b,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||sA),s.length>1&&s.sort(S||J0),l.length>1&&l.sort(S||J0)}function x(){for(let g=t,S=r.length;g<S;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function rA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new $0,r.set(s,[h])):l>=c.length?(h=new $0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function oA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new ge};break;case"SpotLight":i={position:new K,direction:new K,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function lA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let cA=0;function uA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fA(r){const t=new oA,i=lA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new Qe,h=new Qe;function d(p){let x=0,g=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,B=0,N=0,w=0,G=0,F=0,O=0;p.sort(uA);for(let C=0,D=p.length;C<D;C++){const V=p[C],W=V.color,ot=V.intensity,dt=V.distance,ct=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=W.r*ot,g+=W.g*ot,S+=W.b*ot;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],ot);O++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,j=i.get(V);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=V.shadow.matrix,B++}s.directional[M]=P,M++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(W).multiplyScalar(ot),P.distance=dt,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[R]=P;const Q=V.shadow;if(V.map&&(s.spotLightMap[G]=V.map,G++,Q.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[R]=Q.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,s.spotShadow[R]=j,s.spotShadowMap[R]=ct,w++}R++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(W).multiplyScalar(ot),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=P,y++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const Q=V.shadow,j=i.get(V);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=V.shadow.matrix,N++}s.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(ot),P.groundColor.copy(V.groundColor).multiplyScalar(ot),s.hemi[_]=P,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const H=s.hash;(H.directionalLength!==M||H.pointLength!==b||H.spotLength!==R||H.rectAreaLength!==y||H.hemiLength!==_||H.numDirectionalShadows!==B||H.numPointShadows!==N||H.numSpotShadows!==w||H.numSpotMaps!==G||H.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=w+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=O,H.directionalLength=M,H.pointLength=b,H.spotLength=R,H.rectAreaLength=y,H.hemiLength=_,H.numDirectionalShadows=B,H.numPointShadows=N,H.numSpotShadows=w,H.numSpotMaps=G,H.numLightProbes=O,s.version=cA++)}function m(p,x){let g=0,S=0,M=0,b=0,R=0;const y=x.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const N=p[_];if(N.isDirectionalLight){const w=s.directional[g];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),g++}else if(N.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(N.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const w=s.point[S];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function tv(r){const t=new fA(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function hA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new tv(r),t.set(l,[d])):c>=h.length?(d=new tv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const dA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
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
}`;function mA(r,t,i){let s=new np;const l=new le,c=new le,h=new We,d=new zM({depthPacking:Dy}),m=new IM,p={},x=i.maxTextureSize,g={[es]:Hn,[Hn]:es,[pa]:pa},S=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:dA,fragmentShader:pA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new _a;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Xe(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sv;let _=this.type;this.render=function(F,O,H){if(window.__galleryCaptureScene)return;if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),W=r.state;W.setBlending($a),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ot=_!==da&&this.type===da,dt=_===da&&this.type!==da;for(let ct=0,P=F.length;ct<P;ct++){const Q=F[ct],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const St=j.getFrameExtents();if(l.multiply(St),c.copy(j.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/St.x),l.x=c.x*St.x,j.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/St.y),l.y=c.y*St.y,j.mapSize.y=c.y)),j.map===null||ot===!0||dt===!0){const L=this.type!==da?{minFilter:oi,magFilter:oi}:{};j.map!==null&&j.map.dispose(),j.map=new zs(l.x,l.y,L),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Rt=j.getViewportCount();for(let L=0;L<Rt;L++){const nt=j.getViewport(L);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),W.viewport(h),j.updateMatrices(Q,L),s=j.getFrustum(),w(O,H,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===da&&B(j,H),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(C,D,V)};function B(F,O){const H=t.update(R);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new zs(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(O,null,H,S,R,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(O,null,H,M,R,null)}function N(F,O,H,C){let D=null;const V=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)D=V;else if(D=H.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=D.uuid,ot=O.uuid;let dt=p[W];dt===void 0&&(dt={},p[W]=dt);let ct=dt[ot];ct===void 0&&(ct=D.clone(),dt[ot]=ct,O.addEventListener("dispose",G)),D=ct}if(D.visible=O.visible,D.wireframe=O.wireframe,C===da?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:g[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const W=r.properties.get(D);W.light=H}return D}function w(F,O,H,C,D){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===da)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),dt=F.material;if(Array.isArray(dt)){const ct=ot.groups;for(let P=0,Q=ct.length;P<Q;P++){const j=ct[P],St=dt[j.materialIndex];if(St&&St.visible){const Rt=N(F,St,C,D);F.onBeforeShadow(r,F,O,H,ot,Rt,j),r.renderBufferDirect(H,null,ot,Rt,F,j),F.onAfterShadow(r,F,O,H,ot,Rt,j)}}}else if(dt.visible){const ct=N(F,dt,C,D);F.onBeforeShadow(r,F,O,H,ot,ct,null),r.renderBufferDirect(H,null,ot,ct,F,null),F.onAfterShadow(r,F,O,H,ot,ct,null)}}const W=F.children;for(let ot=0,dt=W.length;ot<dt;ot++)w(W[ot],O,H,C,D)}function G(F){F.target.removeEventListener("dispose",G);for(const H in p){const C=p[H],D=F.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const gA={[Qh]:Jh,[$h]:nd,[td]:id,[kr]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:kr};function _A(r,t){function i(){let X=!1;const Tt=new We;let wt=null;const Ht=new We(0,0,0,0);return{setMask:function(At){wt!==At&&!X&&(r.colorMask(At,At,At,At),wt=At)},setLocked:function(At){X=At},setClear:function(At,mt,Ft,ae,ye){ye===!0&&(At*=ae,mt*=ae,Ft*=ae),Tt.set(At,mt,Ft,ae),Ht.equals(Tt)===!1&&(r.clearColor(At,mt,Ft,ae),Ht.copy(Tt))},reset:function(){X=!1,wt=null,Ht.set(-1,0,0,0)}}}function s(){let X=!1,Tt=!1,wt=null,Ht=null,At=null;return{setReversed:function(mt){if(Tt!==mt){const Ft=t.get("EXT_clip_control");mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Tt=mt;const ae=At;At=null,this.setClear(ae)}},getReversed:function(){return Tt},setTest:function(mt){mt?ut(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!X&&(r.depthMask(mt),wt=mt)},setFunc:function(mt){if(Tt&&(mt=gA[mt]),Ht!==mt){switch(mt){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=mt}},setLocked:function(mt){X=mt},setClear:function(mt){At!==mt&&(Tt&&(mt=1-mt),r.clearDepth(mt),At=mt)},reset:function(){X=!1,wt=null,Ht=null,At=null,Tt=!1}}}function l(){let X=!1,Tt=null,wt=null,Ht=null,At=null,mt=null,Ft=null,ae=null,ye=null;return{setTest:function(Me){X||(Me?ut(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(Me){Tt!==Me&&!X&&(r.stencilMask(Me),Tt=Me)},setFunc:function(Me,pn,sn){(wt!==Me||Ht!==pn||At!==sn)&&(r.stencilFunc(Me,pn,sn),wt=Me,Ht=pn,At=sn)},setOp:function(Me,pn,sn){(mt!==Me||Ft!==pn||ae!==sn)&&(r.stencilOp(Me,pn,sn),mt=Me,Ft=pn,ae=sn)},setLocked:function(Me){X=Me},setClear:function(Me){ye!==Me&&(r.clearStencil(Me),ye=Me)},reset:function(){X=!1,Tt=null,wt=null,Ht=null,At=null,mt=null,Ft=null,ae=null,ye=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,B=null,N=null,w=null,G=null,F=null,O=new ge(0,0,0),H=0,C=!1,D=null,V=null,W=null,ot=null,dt=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=Q>=2);let St=null,Rt={};const L=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),Et=new We().fromArray(L),Ct=new We().fromArray(nt);function Ot(X,Tt,wt,Ht){const At=new Uint8Array(4),mt=r.createTexture();r.bindTexture(X,mt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<wt;Ft++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Tt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return mt}const it={};it[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(r.DEPTH_TEST),h.setFunc(kr),Qt(!1),kt(Q_),ut(r.CULL_FACE),_e($a);function ut(X){x[X]!==!0&&(r.enable(X),x[X]=!0)}function Nt(X){x[X]!==!1&&(r.disable(X),x[X]=!1)}function It(X,Tt){return g[X]!==Tt?(r.bindFramebuffer(X,Tt),g[X]=Tt,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Vt(X,Tt){let wt=M,Ht=!1;if(X){wt=S.get(Tt),wt===void 0&&(wt=[],S.set(Tt,wt));const At=X.textures;if(wt.length!==At.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Ft=At.length;mt<Ft;mt++)wt[mt]=r.COLOR_ATTACHMENT0+mt;wt.length=At.length,Ht=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(wt)}function ee(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Pe={[Ds]:r.FUNC_ADD,[iy]:r.FUNC_SUBTRACT,[ay]:r.FUNC_REVERSE_SUBTRACT};Pe[sy]=r.MIN,Pe[ry]=r.MAX;const z={[oy]:r.ZERO,[ly]:r.ONE,[cy]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[my]:r.SRC_ALPHA_SATURATE,[dy]:r.DST_COLOR,[fy]:r.DST_ALPHA,[uy]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[py]:r.ONE_MINUS_DST_COLOR,[hy]:r.ONE_MINUS_DST_ALPHA,[gy]:r.CONSTANT_COLOR,[_y]:r.ONE_MINUS_CONSTANT_COLOR,[vy]:r.CONSTANT_ALPHA,[xy]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(X,Tt,wt,Ht,At,mt,Ft,ae,ye,Me){if(X===$a){R===!0&&(Nt(r.BLEND),R=!1);return}if(R===!1&&(ut(r.BLEND),R=!0),X!==ny){if(X!==y||Me!==C){if((_!==Ds||w!==Ds)&&(r.blendEquation(r.FUNC_ADD),_=Ds,w=Ds),Me)switch(X){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J_:r.blendFunc(r.ONE,r.ONE);break;case $_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case t0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case t0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,N=null,G=null,F=null,O.set(0,0,0),H=0,y=X,C=Me}return}At=At||Tt,mt=mt||wt,Ft=Ft||Ht,(Tt!==_||At!==w)&&(r.blendEquationSeparate(Pe[Tt],Pe[At]),_=Tt,w=At),(wt!==B||Ht!==N||mt!==G||Ft!==F)&&(r.blendFuncSeparate(z[wt],z[Ht],z[mt],z[Ft]),B=wt,N=Ht,G=mt,F=Ft),(ae.equals(O)===!1||ye!==H)&&(r.blendColor(ae.r,ae.g,ae.b,ye),O.copy(ae),H=ye),y=X,C=!1}function ie(X,Tt){X.side===pa?Nt(r.CULL_FACE):ut(r.CULL_FACE);let wt=X.side===Hn;Tt&&(wt=!wt),Qt(wt),X.blending===Gr&&X.transparent===!1?_e($a):_e(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ht=X.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Gt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(X){D!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),D=X)}function kt(X){X!==ty?(ut(r.CULL_FACE),X!==V&&(X===Q_?r.cullFace(r.BACK):X===ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),V=X}function Le(X){X!==W&&(P&&r.lineWidth(X),W=X)}function Gt(X,Tt,wt){X?(ut(r.POLYGON_OFFSET_FILL),(ot!==Tt||dt!==wt)&&(r.polygonOffset(Tt,wt),ot=Tt,dt=wt)):Nt(r.POLYGON_OFFSET_FILL)}function re(X){X?ut(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=r.TEXTURE0+ct-1),St!==X&&(r.activeTexture(X),St=X)}function Ze(X,Tt,wt){wt===void 0&&(St===null?wt=r.TEXTURE0+ct-1:wt=St);let Ht=Rt[wt];Ht===void 0&&(Ht={type:void 0,texture:void 0},Rt[wt]=Ht),(Ht.type!==X||Ht.texture!==Tt)&&(St!==wt&&(r.activeTexture(wt),St=wt),r.bindTexture(X,Tt||it[X]),Ht.type=X,Ht.texture=Tt)}function U(){const X=Rt[St];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(X){Et.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Mt(X){Ct.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function vt(X,Tt){let wt=p.get(Tt);wt===void 0&&(wt=new WeakMap,p.set(Tt,wt));let Ht=wt.get(X);Ht===void 0&&(Ht=r.getUniformBlockIndex(Tt,X.name),wt.set(X,Ht))}function Lt(X,Tt){const Ht=p.get(Tt).get(X);m.get(Tt)!==Ht&&(r.uniformBlockBinding(Tt,Ht,X.__bindingPointIndex),m.set(Tt,Ht))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},St=null,Rt={},g={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,B=null,N=null,w=null,G=null,F=null,O=new ge(0,0,0),H=0,C=!1,D=null,V=null,W=null,ot=null,dt=null,Et.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:Nt,bindFramebuffer:It,drawBuffers:Vt,useProgram:ee,setBlending:_e,setMaterial:ie,setFlipSided:Qt,setCullFace:kt,setLineWidth:Le,setPolygonOffset:Gt,setScissorTest:re,activeTexture:Ye,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Zt,texImage3D:bt,updateUBOMapping:vt,uniformBlockBinding:Lt,texStorage2D:Dt,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:qt,scissor:Ut,viewport:Mt,reset:oe}}function vA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,x=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):tu("canvas")}function R(U,E,$){let pt=1;const yt=Ze(U);if((yt.width>$||yt.height>$)&&(pt=$/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(pt*yt.width),qt=Math.floor(pt*yt.height);g===void 0&&(g=b(ft,qt));const Dt=E?b(ft,qt):g;return Dt.width=ft,Dt.height=qt,Dt.getContext("2d").drawImage(U,0,0,ft,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+qt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){r.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,E,$,pt,yt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=E;if(E===r.RED&&($===r.FLOAT&&(ft=r.R32F),$===r.HALF_FLOAT&&(ft=r.R16F),$===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.R8UI),$===r.UNSIGNED_SHORT&&(ft=r.R16UI),$===r.UNSIGNED_INT&&(ft=r.R32UI),$===r.BYTE&&(ft=r.R8I),$===r.SHORT&&(ft=r.R16I),$===r.INT&&(ft=r.R32I)),E===r.RG&&($===r.FLOAT&&(ft=r.RG32F),$===r.HALF_FLOAT&&(ft=r.RG16F),$===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.RG8UI),$===r.UNSIGNED_SHORT&&(ft=r.RG16UI),$===r.UNSIGNED_INT&&(ft=r.RG32UI),$===r.BYTE&&(ft=r.RG8I),$===r.SHORT&&(ft=r.RG16I),$===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),$===r.UNSIGNED_INT&&(ft=r.RGB32UI),$===r.BYTE&&(ft=r.RGB8I),$===r.SHORT&&(ft=r.RGB16I),$===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),$===r.UNSIGNED_INT&&(ft=r.RGBA32UI),$===r.BYTE&&(ft=r.RGBA8I),$===r.SHORT&&(ft=r.RGBA16I),$===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const qt=yt?Jc:De.getTransfer(pt);$===r.FLOAT&&(ft=r.RGBA32F),$===r.HALF_FLOAT&&(ft=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ft=qt===Ve?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function w(U,E){let $;return U?E===null||E===Os||E===tl?$=r.DEPTH24_STENCIL8:E===Hi?$=r.DEPTH32F_STENCIL8:E===$o&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Os||E===tl?$=r.DEPTH_COMPONENT24:E===Hi?$=r.DEPTH_COMPONENT32F:E===$o&&($=r.DEPTH_COMPONENT16),$}function G(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==oi&&U.minFilter!==Fi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),H(E),E.isVideoTexture&&x.delete(E)}function O(U){const E=U.target;E.removeEventListener("dispose",O),D(E)}function H(U){const E=s.get(U);if(E.__webglInit===void 0)return;const $=U.source,pt=S.get($);if(pt){const yt=pt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&C(U),Object.keys(pt).length===0&&S.delete($)}s.remove(U)}function C(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const $=U.source,pt=S.get($);delete pt[E.__cacheKey],h.memory.textures--}function D(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let yt=0;yt<E.__webglFramebuffer[pt].length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[pt][yt]);else r.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)r.deleteFramebuffer(E.__webglFramebuffer[pt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let pt=0,yt=$.length;pt<yt;pt++){const ft=s.get($[pt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove($[pt])}s.remove(U)}let V=0;function W(){V=0}function ot(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function dt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ct(U,E){const $=s.get(U);if(U.isVideoTexture&&re(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function P(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){it($,U,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function Q(U,E){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){it($,U,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function j(U,E){const $=s.get(U);if(U.version>0&&$.__version!==U.version){ut($,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const St={[rd]:r.REPEAT,[Ls]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},Rt={[oi]:r.NEAREST,[Cy]:r.NEAREST_MIPMAP_NEAREST,[vc]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[_h]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},L={[Ly]:r.NEVER,[By]:r.ALWAYS,[Ny]:r.LESS,[gv]:r.LEQUAL,[Oy]:r.EQUAL,[Iy]:r.GEQUAL,[Py]:r.GREATER,[zy]:r.NOTEQUAL};function nt(U,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Fi||E.magFilter===_h||E.magFilter===vc||E.magFilter===Ns||E.minFilter===Fi||E.minFilter===_h||E.minFilter===vc||E.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,St[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,St[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,St[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Rt[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Rt[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==vc&&E.minFilter!==Ns||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Et(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const pt=E.source;let yt=S.get(pt);yt===void 0&&(yt={},S.set(pt,yt));const ft=dt(E);if(ft!==U.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),yt[ft].usedTimes++;const qt=yt[U.__cacheKey];qt!==void 0&&(yt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&C(E)),U.__cacheKey=ft,U.__webglTexture=yt[ft].texture}return $}function Ct(U,E,$){return Math.floor(Math.floor(U/$)/E)}function Ot(U,E,$,pt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,pt,E.data);else{ft.sort((bt,Ut)=>bt.start-Ut.start);let qt=0;for(let bt=1;bt<ft.length;bt++){const Ut=ft[qt],Mt=ft[bt],vt=Ut.start+Ut.count,Lt=Ct(Mt.start,E.width,4),oe=Ct(Ut.start,E.width,4);Mt.start<=vt+1&&Lt===oe&&Ct(Mt.start+Mt.count-1,E.width,4)===Lt?Ut.count=Math.max(Ut.count,Mt.start+Mt.count-Ut.start):(++qt,ft[qt]=Mt)}ft.length=qt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),Zt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let bt=0,Ut=ft.length;bt<Ut;bt++){const Mt=ft[bt],vt=Math.floor(Mt.start/4),Lt=Math.ceil(Mt.count/4),oe=vt%E.width,X=Math.floor(vt/E.width),Tt=Lt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,oe,X,Tt,wt,$,pt,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Zt)}}function it(U,E,$){let pt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=r.TEXTURE_3D);const yt=Et(U,E),ft=E.source;i.bindTexture(pt,U.__webglTexture,r.TEXTURE0+$);const qt=s.get(ft);if(ft.version!==qt.__version||yt===!0){i.activeTexture(r.TEXTURE0+$);const Dt=De.getPrimaries(De.workingColorSpace),jt=E.colorSpace===Ja?null:De.getPrimaries(E.colorSpace),Zt=E.colorSpace===Ja||Dt===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let bt=R(E.image,!1,l.maxTextureSize);bt=Ye(E,bt);const Ut=c.convert(E.format,E.colorSpace),Mt=c.convert(E.type);let vt=N(E.internalFormat,Ut,Mt,E.colorSpace,E.isVideoTexture);nt(pt,E);let Lt;const oe=E.mipmaps,X=E.isVideoTexture!==!0,Tt=qt.__version===void 0||yt===!0,wt=ft.dataReady,Ht=G(E,bt);if(E.isDepthTexture)vt=w(E.format===nl,E.type),Tt&&(X?i.texStorage2D(r.TEXTURE_2D,1,vt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,vt,bt.width,bt.height,0,Ut,Mt,null));else if(E.isDataTexture)if(oe.length>0){X&&Tt&&i.texStorage2D(r.TEXTURE_2D,Ht,vt,oe[0].width,oe[0].height);for(let At=0,mt=oe.length;At<mt;At++)Lt=oe[At],X?wt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ut,Mt,Lt.data):i.texImage2D(r.TEXTURE_2D,At,vt,Lt.width,Lt.height,0,Ut,Mt,Lt.data);E.generateMipmaps=!1}else X?(Tt&&i.texStorage2D(r.TEXTURE_2D,Ht,vt,bt.width,bt.height),wt&&Ot(E,bt,Ut,Mt)):i.texImage2D(r.TEXTURE_2D,0,vt,bt.width,bt.height,0,Ut,Mt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Tt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,vt,oe[0].width,oe[0].height,bt.depth);for(let At=0,mt=oe.length;At<mt;At++)if(Lt=oe[At],E.format!==wi)if(Ut!==null)if(X){if(wt)if(E.layerUpdates.size>0){const Ft=U0(Lt.width,Lt.height,E.format,E.type);for(const ae of E.layerUpdates){const ye=Lt.data.subarray(ae*Ft/Lt.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,ae,Lt.width,Lt.height,1,Ut,ye)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,bt.depth,Ut,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,vt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,bt.depth,Ut,Mt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,vt,Lt.width,Lt.height,bt.depth,0,Ut,Mt,Lt.data)}else{X&&Tt&&i.texStorage2D(r.TEXTURE_2D,Ht,vt,oe[0].width,oe[0].height);for(let At=0,mt=oe.length;At<mt;At++)Lt=oe[At],E.format!==wi?Ut!==null?X?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ut,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,At,vt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Ut,Mt,Lt.data):i.texImage2D(r.TEXTURE_2D,At,vt,Lt.width,Lt.height,0,Ut,Mt,Lt.data)}else if(E.isDataArrayTexture)if(X){if(Tt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,vt,bt.width,bt.height,bt.depth),wt)if(E.layerUpdates.size>0){const At=U0(bt.width,bt.height,E.format,E.type);for(const mt of E.layerUpdates){const Ft=bt.data.subarray(mt*At/bt.data.BYTES_PER_ELEMENT,(mt+1)*At/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,bt.width,bt.height,1,Ut,Mt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ut,Mt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,bt.width,bt.height,bt.depth,0,Ut,Mt,bt.data);else if(E.isData3DTexture)X?(Tt&&i.texStorage3D(r.TEXTURE_3D,Ht,vt,bt.width,bt.height,bt.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ut,Mt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,vt,bt.width,bt.height,bt.depth,0,Ut,Mt,bt.data);else if(E.isFramebufferTexture){if(Tt)if(X)i.texStorage2D(r.TEXTURE_2D,Ht,vt,bt.width,bt.height);else{let At=bt.width,mt=bt.height;for(let Ft=0;Ft<Ht;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,vt,At,mt,0,Ut,Mt,null),At>>=1,mt>>=1}}else if(oe.length>0){if(X&&Tt){const At=Ze(oe[0]);i.texStorage2D(r.TEXTURE_2D,Ht,vt,At.width,At.height)}for(let At=0,mt=oe.length;At<mt;At++)Lt=oe[At],X?wt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ut,Mt,Lt):i.texImage2D(r.TEXTURE_2D,At,vt,Ut,Mt,Lt);E.generateMipmaps=!1}else if(X){if(Tt){const At=Ze(bt);i.texStorage2D(r.TEXTURE_2D,Ht,vt,At.width,At.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Mt,bt)}else i.texImage2D(r.TEXTURE_2D,0,vt,Ut,Mt,bt);y(E)&&_(pt),qt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ut(U,E,$){if(E.image.length!==6)return;const pt=Et(U,E),yt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+$);const ft=s.get(yt);if(yt.version!==ft.__version||pt===!0){i.activeTexture(r.TEXTURE0+$);const qt=De.getPrimaries(De.workingColorSpace),Dt=E.colorSpace===Ja?null:De.getPrimaries(E.colorSpace),jt=E.colorSpace===Ja||qt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let mt=0;mt<6;mt++)!Zt&&!bt?Ut[mt]=R(E.image[mt],!0,l.maxCubemapSize):Ut[mt]=bt?E.image[mt].image:E.image[mt],Ut[mt]=Ye(E,Ut[mt]);const Mt=Ut[0],vt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),oe=N(E.internalFormat,vt,Lt,E.colorSpace),X=E.isVideoTexture!==!0,Tt=ft.__version===void 0||pt===!0,wt=yt.dataReady;let Ht=G(E,Mt);nt(r.TEXTURE_CUBE_MAP,E);let At;if(Zt){X&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,oe,Mt.width,Mt.height);for(let mt=0;mt<6;mt++){At=Ut[mt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ae=At[Ft];E.format!==wi?vt!==null?X?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,ae.width,ae.height,vt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,ae.width,ae.height,vt,Lt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,oe,ae.width,ae.height,0,vt,Lt,ae.data)}}}else{if(At=E.mipmaps,X&&Tt){At.length>0&&Ht++;const mt=Ze(Ut[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(bt){X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ut[mt].width,Ut[mt].height,vt,Lt,Ut[mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Ut[mt].width,Ut[mt].height,0,vt,Lt,Ut[mt].data);for(let Ft=0;Ft<At.length;Ft++){const ye=At[Ft].image[mt].image;X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,ye.width,ye.height,vt,Lt,ye.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,oe,ye.width,ye.height,0,vt,Lt,ye.data)}}else{X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,vt,Lt,Ut[mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,vt,Lt,Ut[mt]);for(let Ft=0;Ft<At.length;Ft++){const ae=At[Ft];X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,vt,Lt,ae.image[mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,oe,vt,Lt,ae.image[mt])}}}y(E)&&_(r.TEXTURE_CUBE_MAP),ft.__version=yt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Nt(U,E,$,pt,yt,ft){const qt=c.convert($.format,$.colorSpace),Dt=c.convert($.type),jt=N($.internalFormat,qt,Dt,$.colorSpace),Zt=s.get(E),bt=s.get($);if(bt.__renderTarget=E,!Zt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ft),Mt=Math.max(1,E.height>>ft);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,ft,jt,Ut,Mt,E.depth,0,qt,Dt,null):i.texImage2D(yt,ft,jt,Ut,Mt,0,qt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,yt,bt.__webglTexture,0,Le(E)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,yt,bt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(U,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const pt=E.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=w(E.stencilBuffer,yt),qt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=Le(E);Gt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,ft,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qt,r.RENDERBUFFER,U)}else{const pt=E.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],qt=c.convert(ft.format,ft.colorSpace),Dt=c.convert(ft.type),jt=N(ft.internalFormat,qt,Dt,ft.colorSpace),Zt=Le(E);$&&Gt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,jt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,jt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,jt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(E.depthTexture);pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct(E.depthTexture,0);const yt=pt.__webglTexture,ft=Le(E);if(E.depthTexture.format===el)Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0);else if(E.depthTexture.format===nl)Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function ee(U){const E=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=pt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?Vt(E.__webglFramebuffer[0],U):Vt(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=r.createRenderbuffer(),It(E.__webglDepthbuffer[pt],U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),It(E.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(U,E,$){const pt=s.get(U);E!==void 0&&Nt(pt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ee(U)}function z(U){const E=U.texture,$=s.get(U),pt=s.get(E);U.addEventListener("dispose",O);const yt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,qt=yt.length>1;if(qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=E.version,h.memory.textures++),ft){$.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Dt]=[];for(let jt=0;jt<E.mipmaps.length;jt++)$.__webglFramebuffer[Dt][jt]=r.createFramebuffer()}else $.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)$.__webglFramebuffer[Dt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(qt)for(let Dt=0,jt=yt.length;Dt<jt;Dt++){const Zt=s.get(yt[Dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Gt(U)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const jt=yt[Dt];$.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Dt]);const Zt=c.convert(jt.format,jt.colorSpace),bt=c.convert(jt.type),Ut=N(jt.internalFormat,Zt,bt,jt.colorSpace,U.isXRRenderTarget===!0),Mt=Le(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,Ut,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,$.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),It($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Nt($.__webglFramebuffer[Dt][jt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt);else Nt($.__webglFramebuffer[Dt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,jt=yt.length;Dt<jt;Dt++){const Zt=yt[Dt],bt=s.get(Zt);let Ut=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,bt.__webglTexture),nt(Ut,Zt),Nt($.__webglFramebuffer,U,Zt,r.COLOR_ATTACHMENT0+Dt,Ut,0),y(Zt)&&_(Ut)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),nt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Nt($.__webglFramebuffer[jt],U,E,r.COLOR_ATTACHMENT0,Dt,jt);else Nt($.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,Dt,0);y(E)&&_(Dt),i.unbindTexture()}U.depthBuffer&&ee(U)}function _e(U){const E=U.textures;for(let $=0,pt=E.length;$<pt;$++){const yt=E[$];if(y(yt)){const ft=B(U),qt=s.get(yt).__webglTexture;i.bindTexture(ft,qt),_(ft),i.unbindTexture()}}}const ie=[],Qt=[];function kt(U){if(U.samples>0){if(Gt(U)===!1){const E=U.textures,$=U.width,pt=U.height;let yt=r.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qt=s.get(U),Dt=E.length>1;if(Dt)for(let Zt=0;Zt<E.length;Zt++)i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Zt=0;Zt<E.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qt.__webglColorRenderbuffer[Zt]);const bt=s.get(E[Zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,$,pt,0,0,$,pt,yt,r.NEAREST),m===!0&&(ie.length=0,Qt.length=0,ie.push(r.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ft),Qt.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let Zt=0;Zt<E.length;Zt++){i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.RENDERBUFFER,qt.__webglColorRenderbuffer[Zt]);const bt=s.get(E[Zt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Zt,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Le(U){return Math.min(l.maxSamples,U.samples)}function Gt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(U){const E=h.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function Ye(U,E){const $=U.colorSpace,pt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Yr&&$!==Ja&&(De.getTransfer($)===Ve?(pt!==wi||yt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=W,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Pe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Gt}function xA(r,t){function i(s,l=Ja){let c;const h=De.getTransfer(l);if(s===Vi)return r.UNSIGNED_BYTE;if(s===Wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===fv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===hv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===cv)return r.BYTE;if(s===uv)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===Xd)return r.INT;if(s===Os)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===rl)return r.HALF_FLOAT;if(s===dv)return r.ALPHA;if(s===pv)return r.RGB;if(s===wi)return r.RGBA;if(s===el)return r.DEPTH_COMPONENT;if(s===nl)return r.DEPTH_STENCIL;if(s===jd)return r.RED;if(s===qd)return r.RED_INTEGER;if(s===mv)return r.RG;if(s===Zd)return r.RG_INTEGER;if(s===Kd)return r.RGBA_INTEGER;if(s===Wc||s===Yc||s===jc||s===qc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Rd||s===Cd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wd||s===Dd||s===Ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===wd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ld||s===Nd||s===Od||s===Pd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ld)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Od)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const SA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class MA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ns({vertexShader:SA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xe(new qr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EA extends Is{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,S=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new MA,_={},B=i.getContextAttributes();let N=null,w=null;const G=[],F=[],O=new le;let H=null;const C=new ri;C.viewport=new We;const D=new ri;D.viewport=new We;const V=[C,D],W=new GM;let ot=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=G[it];return ut===void 0&&(ut=new Bh,G[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=G[it];return ut===void 0&&(ut=new Bh,G[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=G[it];return ut===void 0&&(ut=new Bh,G[it]=ut),ut.getHandSpace()};function ct(it){const ut=F.indexOf(it.inputSource);if(ut===-1)return;const Nt=G[ut];Nt!==void 0&&(Nt.update(it.inputSource,it.frame,p||h),Nt.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Q);for(let it=0;it<G.length;it++){const ut=F[it];ut!==null&&(F[it]=null,G[it].disconnect(ut))}ot=null,dt=null,y.reset();for(const it in _)delete _[it];t.setRenderTarget(N),M=null,S=null,g=null,l=null,w=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Q),B.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,It=null,Vt=null;B.depth&&(Vt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=B.stencil?nl:el,It=B.stencil?tl:Os);const ee={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(ee),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),w=new zs(S.textureWidth,S.textureHeight,{format:wi,type:Vi,depthTexture:new Av(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Nt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new zs(M.framebufferWidth,M.framebufferHeight,{format:wi,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(it){for(let ut=0;ut<it.removed.length;ut++){const Nt=it.removed[ut],It=F.indexOf(Nt);It>=0&&(F[It]=null,G[It].disconnect(Nt))}for(let ut=0;ut<it.added.length;ut++){const Nt=it.added[ut];let It=F.indexOf(Nt);if(It===-1){for(let ee=0;ee<G.length;ee++)if(ee>=F.length){F.push(Nt),It=ee;break}else if(F[ee]===null){F[ee]=Nt,It=ee;break}if(It===-1)break}const Vt=G[It];Vt&&Vt.connect(Nt)}}const j=new K,St=new K;function Rt(it,ut,Nt){j.setFromMatrixPosition(ut.matrixWorld),St.setFromMatrixPosition(Nt.matrixWorld);const It=j.distanceTo(St),Vt=ut.projectionMatrix.elements,ee=Nt.projectionMatrix.elements,Pe=Vt[14]/(Vt[10]-1),z=Vt[14]/(Vt[10]+1),_e=(Vt[9]+1)/Vt[5],ie=(Vt[9]-1)/Vt[5],Qt=(Vt[8]-1)/Vt[0],kt=(ee[8]+1)/ee[0],Le=Pe*Qt,Gt=Pe*kt,re=It/(-Qt+kt),Ye=re*-Qt;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ye),it.translateZ(re),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Vt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ze=Pe+re,U=z+re,E=Le-Ye,$=Gt+(It-Ye),pt=_e*z/U*Ze,yt=ie*z/U*Ze;it.projectionMatrix.makePerspective(E,$,pt,yt,Ze,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,Nt=it.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Nt=y.depthFar)),W.near=D.near=C.near=ut,W.far=D.far=C.far=Nt,(ot!==W.near||dt!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),ot=W.near,dt=W.far),W.layers.mask=it.layers.mask|6,C.layers.mask=W.layers.mask&3,D.layers.mask=W.layers.mask&5;const It=it.parent,Vt=W.cameras;L(W,It);for(let ee=0;ee<Vt.length;ee++)L(Vt[ee],It);Vt.length===2?Rt(W,C,D):W.projectionMatrix.copy(C.projectionMatrix),nt(it,W,It)};function nt(it,ut,Nt){Nt===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Nt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=il*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(it){return _[it]};let Et=null;function Ct(it,ut){if(x=ut.getViewerPose(p||h),b=ut,x!==null){const Nt=x.views;M!==null&&(t.setRenderTargetFramebuffer(w,M.framebuffer),t.setRenderTarget(w));let It=!1;Nt.length!==W.cameras.length&&(W.cameras.length=0,It=!0);for(let z=0;z<Nt.length;z++){const _e=Nt[z];let ie=null;if(M!==null)ie=M.getViewport(_e);else{const kt=g.getViewSubImage(S,_e);ie=kt.viewport,z===0&&(t.setRenderTargetTextures(w,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(w))}let Qt=V[z];Qt===void 0&&(Qt=new ri,Qt.layers.enable(z),Qt.viewport=new We,V[z]=Qt),Qt.matrix.fromArray(_e.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(_e.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ie.x,ie.y,ie.width,ie.height),z===0&&(W.matrix.copy(Qt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),It===!0&&W.cameras.push(Qt)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=s.getBinding();const z=g.getDepthInformation(Nt[0]);z&&z.isValid&&z.texture&&y.init(z,l.renderState)}if(Vt&&Vt.includes("camera-access")&&R){t.state.unbindTexture(),g=s.getBinding();for(let z=0;z<Nt.length;z++){const _e=Nt[z].camera;if(_e){let ie=_[_e];ie||(ie=new Rv,_[_e]=ie);const Qt=g.getCameraImage(_e);ie.sourceTexture=Qt}}}}for(let Nt=0;Nt<G.length;Nt++){const It=F[Nt],Vt=G[Nt];It!==null&&Vt!==void 0&&Vt.update(It,ut,p||h)}Et&&Et(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),b=null}const Ot=new Uv;Ot.setAnimationLoop(Ct),this.setAnimationLoop=function(it){Et=it},this.dispose=function(){}}}const Rs=new Ui,TA=new Qe;function bA(r,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,Mv(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,N,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),x(y,_)):_.isMeshStandardMaterial?(c(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(c(y,_),b(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),R(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Hn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Hn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=t.get(_),N=B.envMap,w=B.envMapRotation;N&&(y.envMap.value=N,Rs.copy(w),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),y.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(Rs)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const B=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function AA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const w=N.program;s.uniformBlockBinding(B,w)}function p(B,N){let w=l[B.id];w===void 0&&(b(B),w=x(B),l[B.id]=w,B.addEventListener("dispose",y));const G=N.program;s.updateUBOMapping(B,G);const F=t.render.frame;c[B.id]!==F&&(S(B),c[B.id]=F)}function x(B){const N=g();B.__bindingPointIndex=N;const w=r.createBuffer(),G=B.__size,F=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,G,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,w),w}function g(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],w=B.uniforms,G=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let F=0,O=w.length;F<O;F++){const H=Array.isArray(w[F])?w[F]:[w[F]];for(let C=0,D=H.length;C<D;C++){const V=H[C];if(M(V,F,C,G)===!0){const W=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ct=0;ct<ot.length;ct++){const P=ot[ct],Q=R(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,W+dt,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,dt),dt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(B,N,w,G){const F=B.value,O=N+"_"+w;if(G[O]===void 0)return typeof F=="number"||typeof F=="boolean"?G[O]=F:G[O]=F.clone(),!0;{const H=G[O];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return G[O]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function b(B){const N=B.uniforms;let w=0;const G=16;for(let O=0,H=N.length;O<H;O++){const C=Array.isArray(N[O])?N[O]:[N[O]];for(let D=0,V=C.length;D<V;D++){const W=C[D],ot=Array.isArray(W.value)?W.value:[W.value];for(let dt=0,ct=ot.length;dt<ct;dt++){const P=ot[dt],Q=R(P),j=w%G,St=j%Q.boundary,Rt=j+St;w+=St,Rt!==0&&G-Rt<Q.storage&&(w+=G-Rt),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=Q.storage}}}const F=w%G;return F>0&&(w+=G-F),B.__size=w,B.__cache={},this}function R(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function y(B){const N=B.target;N.removeEventListener("dispose",y);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const B in l)r.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class RA{constructor(t={}){const{canvas:i=eM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let G=!1;this._outputColorSpace=qn;let F=0,O=0,H=null,C=-1,D=null;const V=new We,W=new We;let ot=null;const dt=new ge(0);let ct=0,P=i.width,Q=i.height,j=1,St=null,Rt=null;const L=new We(0,0,P,Q),nt=new We(0,0,P,Q);let Et=!1;const Ct=new np;let Ot=!1,it=!1;const ut=new Qe,Nt=new K,It=new We,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Pe(){return H===null?j:1}let z=s;function _e(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",At,!1),z===null){const Y="webgl2";if(z=_e(Y,A),z===null)throw _e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,Qt,kt,Le,Gt,re,Ye,Ze,U,E,$,pt,yt,ft,qt,Dt,jt,Zt,bt,Ut,Mt,vt,Lt,oe;function X(){ie=new Ib(z),ie.init(),vt=new xA(z,ie),Qt=new Db(z,ie,t,vt),kt=new _A(z,ie),Qt.reversedDepthBuffer&&S&&kt.buffers.depth.setReversed(!0),Le=new Hb(z),Gt=new aA,re=new vA(z,ie,kt,Gt,Qt,vt,Le),Ye=new Lb(w),Ze=new zb(w),U=new YM(z),Lt=new Cb(z,U),E=new Bb(z,U,Le,Lt),$=new Vb(z,E,U,Le),bt=new Gb(z,Qt,re),Dt=new Ub(Gt),pt=new iA(w,Ye,Ze,ie,Qt,Lt,Dt),yt=new bA(w,Gt),ft=new rA,qt=new hA(ie),Zt=new Rb(w,Ye,Ze,kt,$,M,m),jt=new mA(w,$,Qt),oe=new AA(z,Le,Qt,kt),Ut=new wb(z,ie,Le),Mt=new Fb(z,ie,Le),Le.programs=pt.programs,w.capabilities=Qt,w.extensions=ie,w.properties=Gt,w.renderLists=ft,w.shadowMap=jt,w.state=kt,w.info=Le}X();const Tt=new EA(w,z);this.xr=Tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(P,Q,!1))},this.getSize=function(A){return A.set(P,Q)},this.setSize=function(A,Y,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Q=Y,i.width=Math.floor(A*j),i.height=Math.floor(Y*j),st===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*j,Q*j).floor()},this.setDrawingBufferSize=function(A,Y,st){P=A,Q=Y,j=st,i.width=Math.floor(A*st),i.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,Y,st,rt){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,Y,st,rt),kt.viewport(V.copy(L).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,Y,st,rt){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,Y,st,rt),kt.scissor(W.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){kt.setScissorTest(Et=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Rt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,st=!0){let rt=0;if(A){let Z=!1;if(H!==null){const xt=H.texture.format;Z=xt===Kd||xt===Zd||xt===qd}if(Z){const xt=H.texture.type,Pt=xt===Vi||xt===Os||xt===$o||xt===tl||xt===Wd||xt===Yd,Wt=Zt.getClearColor(),Bt=Zt.getClearAlpha(),Jt=Wt.r,se=Wt.g,$t=Wt.b;Pt?(b[0]=Jt,b[1]=se,b[2]=$t,b[3]=Bt,z.clearBufferuiv(z.COLOR,0,b)):(R[0]=Jt,R[1]=se,R[2]=$t,R[3]=Bt,z.clearBufferiv(z.COLOR,0,R))}else rt|=z.COLOR_BUFFER_BIT}Y&&(rt|=z.DEPTH_BUFFER_BIT),st&&(rt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Zt.dispose(),ft.dispose(),qt.dispose(),Gt.dispose(),Ye.dispose(),Ze.dispose(),$.dispose(),Lt.dispose(),oe.dispose(),pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",sn),Tt.removeEventListener("sessionend",xa),Zn.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Le.autoReset,Y=jt.enabled,st=jt.autoUpdate,rt=jt.needsUpdate,Z=jt.type;X(),Le.autoReset=A,jt.enabled=Y,jt.autoUpdate=st,jt.needsUpdate=rt,jt.type=Z}function At(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const Y=A.target;Y.removeEventListener("dispose",mt),Ft(Y)}function Ft(A){ae(A),Gt.remove(A)}function ae(A){const Y=Gt.get(A).programs;Y!==void 0&&(Y.forEach(function(st){pt.releaseProgram(st)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,rt,Z,xt){Y===null&&(Y=Vt);const Pt=Z.isMesh&&Z.matrixWorld.determinant()<0,Wt=Li(A,Y,st,rt,Z);kt.setMaterial(rt,Pt);let Bt=st.index,Jt=1;if(rt.wireframe===!0){if(Bt=E.getWireframeAttribute(st),Bt===void 0)return;Jt=2}const se=st.drawRange,$t=st.attributes.position;let pe=se.start*Jt,Ne=(se.start+se.count)*Jt;xt!==null&&(pe=Math.max(pe,xt.start*Jt),Ne=Math.min(Ne,(xt.start+xt.count)*Jt)),Bt!==null?(pe=Math.max(pe,0),Ne=Math.min(Ne,Bt.count)):$t!=null&&(pe=Math.max(pe,0),Ne=Math.min(Ne,$t.count));const je=Ne-pe;if(je<0||je===1/0)return;Lt.setup(Z,rt,Wt,st,Bt);let Oe,ve=Ut;if(Bt!==null&&(Oe=U.get(Bt),ve=Mt,ve.setIndex(Oe)),Z.isMesh)rt.wireframe===!0?(kt.setLineWidth(rt.wireframeLinewidth*Pe()),ve.setMode(z.LINES)):ve.setMode(z.TRIANGLES);else if(Z.isLine){let Yt=rt.linewidth;Yt===void 0&&(Yt=1),kt.setLineWidth(Yt*Pe()),Z.isLineSegments?ve.setMode(z.LINES):Z.isLineLoop?ve.setMode(z.LINE_LOOP):ve.setMode(z.LINE_STRIP)}else Z.isPoints?ve.setMode(z.POINTS):Z.isSprite&&ve.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)al("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Yt=Z._multiDrawStarts,Ke=Z._multiDrawCounts,Re=Z._multiDrawCount,An=Bt?U.get(Bt).bytesPerElement:1,ki=Gt.get(rt).currentProgram.getUniforms();for(let yn=0;yn<Re;yn++)ki.setValue(z,"_gl_DrawID",yn),ve.render(Yt[yn]/An,Ke[yn])}else if(Z.isInstancedMesh)ve.renderInstances(pe,je,Z.count);else if(st.isInstancedBufferGeometry){const Yt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ke=Math.min(st.instanceCount,Yt);ve.renderInstances(pe,je,Ke)}else ve.render(pe,je)};function ye(A,Y,st){A.transparent===!0&&A.side===pa&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,bn(A,Y,st),A.side=es,A.needsUpdate=!0,bn(A,Y,st),A.side=pa):bn(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),_=qt.get(st),_.init(Y),N.push(_),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),A!==st&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const rt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const xt=Z.material;if(xt)if(Array.isArray(xt))for(let Pt=0;Pt<xt.length;Pt++){const Wt=xt[Pt];ye(Wt,st,Z),rt.add(Wt)}else ye(xt,st,Z),rt.add(xt)}),_=N.pop(),rt},this.compileAsync=function(A,Y,st=null){const rt=this.compile(A,Y,st);return new Promise(Z=>{function xt(){if(rt.forEach(function(Pt){Gt.get(Pt).currentProgram.isReady()&&rt.delete(Pt)}),rt.size===0){Z(A);return}setTimeout(xt,10)}ie.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Me=null;function pn(A){Me&&Me(A)}function sn(){Zn.stop()}function xa(){Zn.start()}const Zn=new Uv;Zn.setAnimationLoop(pn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(A){Me=A,Tt.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},Tt.addEventListener("sessionstart",sn),Tt.addEventListener("sessionend",xa),this.render=function(A,Y){if(window.__galleryCaptureScene)return;if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,H),_=qt.get(A,N.length),_.init(Y),N.push(_),ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ct.setFromProjectionMatrix(ut,Gi,Y.reversedDepth),it=this.localClippingEnabled,Ot=Dt.init(this.clippingPlanes,it),y=ft.get(A,B.length),y.init(),B.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const xt=w.xr.getDepthSensingMesh();xt!==null&&Sa(xt,Y,-1/0,w.sortObjects)}Sa(A,Y,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(St,Rt),ee=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ee&&Zt.addToRenderList(y,A),this.info.render.frame++,Ot===!0&&Dt.beginShadows();const st=_.state.shadowsArray;jt.render(st,A,Y),Ot===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,Z=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const xt=Y.cameras;if(Z.length>0)for(let Pt=0,Wt=xt.length;Pt<Wt;Pt++){const Bt=xt[Pt];ya(rt,Z,A,Bt)}ee&&Zt.render(A);for(let Pt=0,Wt=xt.length;Pt<Wt;Pt++){const Bt=xt[Pt];Kn(y,A,Bt,Bt.viewport)}}else Z.length>0&&ya(rt,Z,A,Y),ee&&Zt.render(A),Kn(y,A,Y);H!==null&&O===0&&(re.updateMultisampleRenderTarget(H),re.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(w,A,Y),Lt.resetDefaultState(),C=-1,D=null,N.pop(),N.length>0?(_=N[N.length-1],Ot===!0&&Dt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Sa(A,Y,st,rt){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ct.intersectsSprite(A)){rt&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const Pt=$.update(A),Wt=A.material;Wt.visible&&y.push(A,Pt,Wt,st,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ct.intersectsObject(A))){const Pt=$.update(A),Wt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),It.copy(Pt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Wt)){const Bt=Pt.groups;for(let Jt=0,se=Bt.length;Jt<se;Jt++){const $t=Bt[Jt],pe=Wt[$t.materialIndex];pe&&pe.visible&&y.push(A,Pt,pe,st,It.z,$t)}}else Wt.visible&&y.push(A,Pt,Wt,st,It.z,null)}}const xt=A.children;for(let Pt=0,Wt=xt.length;Pt<Wt;Pt++)Sa(xt[Pt],Y,st,rt)}function Kn(A,Y,st,rt){const Z=A.opaque,xt=A.transmissive,Pt=A.transparent;_.setupLightsView(st),Ot===!0&&Dt.setGlobalState(w.clippingPlanes,st),rt&&kt.viewport(V.copy(rt)),Z.length>0&&ci(Z,Y,st),xt.length>0&&ci(xt,Y,st),Pt.length>0&&ci(Pt,Y,st),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function ya(A,Y,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new zs(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?rl:Vi,minFilter:Ns,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const xt=_.state.transmissionRenderTarget[rt.id],Pt=rt.viewport||V;xt.setSize(Pt.z*w.transmissionResolutionScale,Pt.w*w.transmissionResolutionScale);const Wt=w.getRenderTarget(),Bt=w.getActiveCubeFace(),Jt=w.getActiveMipmapLevel();w.setRenderTarget(xt),w.getClearColor(dt),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),ee&&Zt.render(st);const se=w.toneMapping;w.toneMapping=ts;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),Ot===!0&&Dt.setGlobalState(w.clippingPlanes,rt),ci(A,st,rt),re.updateMultisampleRenderTarget(xt),re.updateRenderTargetMipmap(xt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ne=0,je=Y.length;Ne<je;Ne++){const Oe=Y[Ne],ve=Oe.object,Yt=Oe.geometry,Ke=Oe.material,Re=Oe.group;if(Ke.side===pa&&ve.layers.test(rt.layers)){const An=Ke.side;Ke.side=Hn,Ke.needsUpdate=!0,is(ve,st,rt,Yt,Ke,Re),Ke.side=An,Ke.needsUpdate=!0,pe=!0}}pe===!0&&(re.updateMultisampleRenderTarget(xt),re.updateRenderTargetMipmap(xt))}w.setRenderTarget(Wt,Bt,Jt),w.setClearColor(dt,ct),$t!==void 0&&(rt.viewport=$t),w.toneMapping=se}function ci(A,Y,st){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,xt=A.length;Z<xt;Z++){const Pt=A[Z],Wt=Pt.object,Bt=Pt.geometry,Jt=Pt.group;let se=Pt.material;se.allowOverride===!0&&rt!==null&&(se=rt),Wt.layers.test(st.layers)&&is(Wt,Y,st,Bt,se,Jt)}}function is(A,Y,st,rt,Z,xt){A.onBeforeRender(w,Y,st,rt,Z,xt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(w,Y,st,rt,A,xt),Z.transparent===!0&&Z.side===pa&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,w.renderBufferDirect(st,Y,rt,Z,A,xt),Z.side=es,Z.needsUpdate=!0,w.renderBufferDirect(st,Y,rt,Z,A,xt),Z.side=pa):w.renderBufferDirect(st,Y,rt,Z,A,xt),A.onAfterRender(w,Y,st,rt,Z,xt)}function bn(A,Y,st){Y.isScene!==!0&&(Y=Vt);const rt=Gt.get(A),Z=_.state.lights,xt=_.state.shadowsArray,Pt=Z.state.version,Wt=pt.getParameters(A,Z.state,xt,Y,st),Bt=pt.getProgramCacheKey(Wt);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(A.isMeshStandardMaterial?Ze:Ye).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",mt),Jt=new Map,rt.programs=Jt);let se=Jt.get(Bt);if(se!==void 0){if(rt.currentProgram===se&&rt.lightsStateVersion===Pt)return mn(A,Wt),se}else Wt.uniforms=pt.getUniforms(A),A.onBeforeCompile(Wt,w),se=pt.acquireProgram(Wt,Bt),Jt.set(Bt,se),rt.uniforms=Wt.uniforms;const $t=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=Dt.uniform),mn(A,Wt),rt.needsLights=Hs(A),rt.lightsStateVersion=Pt,rt.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.directionalShadowMap.value=Z.state.directionalShadowMap,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotShadowMap.value=Z.state.spotShadowMap,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMap.value=Z.state.pointShadowMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=se,rt.uniformsList=null,se}function tn(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Zc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function mn(A,Y){const st=Gt.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function Li(A,Y,st,rt,Z){Y.isScene!==!0&&(Y=Vt),re.resetTextureUnits();const xt=Y.fog,Pt=rt.isMeshStandardMaterial?Y.environment:null,Wt=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Yr,Bt=(rt.isMeshStandardMaterial?Ze:Ye).get(rt.envMap||Pt),Jt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,se=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),$t=!!st.morphAttributes.position,pe=!!st.morphAttributes.normal,Ne=!!st.morphAttributes.color;let je=ts;rt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(je=w.toneMapping);const Oe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ve=Oe!==void 0?Oe.length:0,Yt=Gt.get(rt),Ke=_.state.lights;if(Ot===!0&&(it===!0||A!==D)){const gn=A===D&&rt.id===C;Dt.setState(rt,A,gn)}let Re=!1;rt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ke.state.version||Yt.outputColorSpace!==Wt||Z.isBatchedMesh&&Yt.batching===!1||!Z.isBatchedMesh&&Yt.batching===!0||Z.isBatchedMesh&&Yt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Yt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Yt.instancing===!1||!Z.isInstancedMesh&&Yt.instancing===!0||Z.isSkinnedMesh&&Yt.skinning===!1||!Z.isSkinnedMesh&&Yt.skinning===!0||Z.isInstancedMesh&&Yt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Yt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Yt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Yt.instancingMorph===!1&&Z.morphTexture!==null||Yt.envMap!==Bt||rt.fog===!0&&Yt.fog!==xt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Dt.numPlanes||Yt.numIntersection!==Dt.numIntersection)||Yt.vertexAlphas!==Jt||Yt.vertexTangents!==se||Yt.morphTargets!==$t||Yt.morphNormals!==pe||Yt.morphColors!==Ne||Yt.toneMapping!==je||Yt.morphTargetsCount!==ve)&&(Re=!0):(Re=!0,Yt.__version=rt.version);let An=Yt.currentProgram;Re===!0&&(An=bn(rt,Y,Z));let ki=!1,yn=!1,ss=!1;const Ee=An.getUniforms(),Un=Yt.uniforms;if(kt.useProgram(An.program)&&(ki=!0,yn=!0,ss=!0),rt.id!==C&&(C=rt.id,yn=!0),ki||D!==A){kt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ee.setValue(z,"projectionMatrix",A.projectionMatrix),Ee.setValue(z,"viewMatrix",A.matrixWorldInverse);const rn=Ee.map.cameraPosition;rn!==void 0&&rn.setValue(z,Nt.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&Ee.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ee.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,yn=!0,ss=!0)}if(Z.isSkinnedMesh){Ee.setOptional(z,Z,"bindMatrix"),Ee.setOptional(z,Z,"bindMatrixInverse");const gn=Z.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ee.setValue(z,"boneTexture",gn.boneTexture,re))}Z.isBatchedMesh&&(Ee.setOptional(z,Z,"batchingTexture"),Ee.setValue(z,"batchingTexture",Z._matricesTexture,re),Ee.setOptional(z,Z,"batchingIdTexture"),Ee.setValue(z,"batchingIdTexture",Z._indirectTexture,re),Ee.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ee.setValue(z,"batchingColorTexture",Z._colorsTexture,re));const zn=st.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&bt.update(Z,st,An),(yn||Yt.receiveShadow!==Z.receiveShadow)&&(Yt.receiveShadow=Z.receiveShadow,Ee.setValue(z,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Un.envMap.value=Bt,Un.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),yn&&(Ee.setValue(z,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&Si(Un,ss),xt&&rt.fog===!0&&yt.refreshFogUniforms(Un,xt),yt.refreshMaterialUniforms(Un,rt,j,Q,_.state.transmissionRenderTarget[A.id]),Zc.upload(z,tn(Yt),Un,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Zc.upload(z,tn(Yt),Un,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ee.setValue(z,"center",Z.center),Ee.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ee.setValue(z,"normalMatrix",Z.normalMatrix),Ee.setValue(z,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const gn=rt.uniformsGroups;for(let rn=0,Gs=gn.length;rn<Gs;rn++){const Ni=gn[rn];oe.update(Ni,An),oe.bind(Ni,An)}}return An}function Si(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Hs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,Y,st){const rt=Gt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=Y,Gt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const st=Gt.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const su=z.createFramebuffer();this.setRenderTarget=function(A,Y=0,st=0){H=A,F=Y,O=st;let rt=!0,Z=null,xt=!1,Pt=!1;if(A){const Bt=Gt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),rt=!1;else if(Bt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Bt.__hasExternalTextures)re.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(Bt.__boundDepthTexture!==$t){if($t!==null&&Gt.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const se=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[Y])?Z=se[Y][st]:Z=se[Y],xt=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Z=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?Z=se[st]:Z=se,V.copy(A.viewport),W.copy(A.scissor),ot=A.scissorTest}else V.copy(L).multiplyScalar(j).floor(),W.copy(nt).multiplyScalar(j).floor(),ot=Et;if(st!==0&&(Z=su),kt.bindFramebuffer(z.FRAMEBUFFER,Z)&&rt&&kt.drawBuffers(A,Z),kt.viewport(V),kt.scissor(W),kt.setScissorTest(ot),xt){const Bt=Gt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,st)}else if(Pt){const Bt=Y;for(let Jt=0;Jt<A.textures.length;Jt++){const se=Gt.get(A.textures[Jt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Jt,se.__webglTexture,st,Bt)}}else if(A!==null&&st!==0){const Bt=Gt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,st)}C=-1},this.readRenderTargetPixels=function(A,Y,st,rt,Z,xt,Pt,Wt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){kt.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const Jt=A.textures[Wt],se=Jt.format,$t=Jt.type;if(!Qt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-rt&&st>=0&&st<=A.height-Z&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Wt),z.readPixels(Y,st,rt,Z,vt.convert(se),vt.convert($t),xt))}finally{const Jt=H!==null?Gt.get(H).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,rt,Z,xt,Pt,Wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt)if(Y>=0&&Y<=A.width-rt&&st>=0&&st<=A.height-Z){kt.bindFramebuffer(z.FRAMEBUFFER,Bt);const Jt=A.textures[Wt],se=Jt.format,$t=Jt.type;if(!Qt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.bufferData(z.PIXEL_PACK_BUFFER,xt.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Wt),z.readPixels(Y,st,rt,Z,vt.convert(se),vt.convert($t),0);const Ne=H!==null?Gt.get(H).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Ne);const je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await nM(z,je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xt),z.deleteBuffer(pe),z.deleteSync(je),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,st=0){const rt=Math.pow(2,-st),Z=Math.floor(A.image.width*rt),xt=Math.floor(A.image.height*rt),Pt=Y!==null?Y.x:0,Wt=Y!==null?Y.y:0;re.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Pt,Wt,Z,xt),kt.unbindTexture()};const ll=z.createFramebuffer(),as=z.createFramebuffer();this.copyTextureToTexture=function(A,Y,st=null,rt=null,Z=0,xt=null){xt===null&&(Z!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=Z,Z=0):xt=0);let Pt,Wt,Bt,Jt,se,$t,pe,Ne,je;const Oe=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(st!==null)Pt=st.max.x-st.min.x,Wt=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,se=st.min.y,$t=st.isBox3?st.min.z:0;else{const zn=Math.pow(2,-Z);Pt=Math.floor(Oe.width*zn),Wt=Math.floor(Oe.height*zn),A.isDataArrayTexture?Bt=Oe.depth:A.isData3DTexture?Bt=Math.floor(Oe.depth*zn):Bt=1,Jt=0,se=0,$t=0}rt!==null?(pe=rt.x,Ne=rt.y,je=rt.z):(pe=0,Ne=0,je=0);const ve=vt.convert(Y.format),Yt=vt.convert(Y.type);let Ke;Y.isData3DTexture?(re.setTexture3D(Y,0),Ke=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),Ke=z.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),Ke=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Re=z.getParameter(z.UNPACK_ROW_LENGTH),An=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ki=z.getParameter(z.UNPACK_SKIP_PIXELS),yn=z.getParameter(z.UNPACK_SKIP_ROWS),ss=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,se),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);const Ee=A.isDataArrayTexture||A.isData3DTexture,Un=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const zn=Gt.get(A),gn=Gt.get(Y),rn=Gt.get(zn.__renderTarget),Gs=Gt.get(gn.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,rn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let Ni=0;Ni<Bt;Ni++)Ee&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,Z,$t+Ni),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,xt,je+Ni)),z.blitFramebuffer(Jt,se,Pt,Wt,pe,Ne,Pt,Wt,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Gt.has(A)){const zn=Gt.get(A),gn=Gt.get(Y);kt.bindFramebuffer(z.READ_FRAMEBUFFER,ll),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,as);for(let rn=0;rn<Bt;rn++)Ee?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zn.__webglTexture,Z,$t+rn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,zn.__webglTexture,Z),Un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gn.__webglTexture,xt,je+rn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gn.__webglTexture,xt),Z!==0?z.blitFramebuffer(Jt,se,Pt,Wt,pe,Ne,Pt,Wt,z.COLOR_BUFFER_BIT,z.NEAREST):Un?z.copyTexSubImage3D(Ke,xt,pe,Ne,je+rn,Jt,se,Pt,Wt):z.copyTexSubImage2D(Ke,xt,pe,Ne,Jt,se,Pt,Wt);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ke,xt,pe,Ne,je,Pt,Wt,Bt,ve,Yt,Oe.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Ke,xt,pe,Ne,je,Pt,Wt,Bt,ve,Oe.data):z.texSubImage3D(Ke,xt,pe,Ne,je,Pt,Wt,Bt,ve,Yt,Oe):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xt,pe,Ne,Pt,Wt,ve,Yt,Oe.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xt,pe,Ne,Oe.width,Oe.height,ve,Oe.data):z.texSubImage2D(z.TEXTURE_2D,xt,pe,Ne,Pt,Wt,ve,Yt,Oe);z.pixelStorei(z.UNPACK_ROW_LENGTH,Re),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,An),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ki),z.pixelStorei(z.UNPACK_SKIP_ROWS,yn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ss),xt===0&&Y.generateMipmaps&&z.generateMipmap(Ke),kt.unbindTexture()},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){F=0,O=0,H=null,kt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const ev={type:"change"},rp={type:"start"},zv={type:"end"},Hc=new tp,nv=new Qa,CA=Math.cos(70*Cs.DEG2RAD),vn=new K,jn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class wA extends XM{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Ps,this._lastTargetPosition=new K,this._quat=new Ps().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Id,this._sphericalDelta=new Id,this._scale=1,this._panOffset=new K,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new K,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UA.bind(this),this._onPointerDown=DA.bind(this),this._onPointerUp=LA.bind(this),this._onContextMenu=FA.bind(this),this._onMouseWheel=PA.bind(this),this._onKeyDown=zA.bind(this),this._onTouchStart=IA.bind(this),this._onTouchMove=BA.bind(this),this._onMouseDown=NA.bind(this),this._onMouseMove=OA.bind(this),this._interceptControlDown=HA.bind(this),this._interceptControlUp=GA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ev),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<CA?this.object.lookAt(this.target):(nv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(nv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function DA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function UA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function LA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zv),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function NA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case Hr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case Hr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(rp)}function OA(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function PA(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(rp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(zv))}function zA(r){this.enabled!==!1&&this._handleKeyDown(r)}function IA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(rp)}function BA(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function FA(r){this.enabled!==!1&&r.preventDefault()}function HA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function GA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Zo=new K;function xi(r,t,i,s,l,c){const h=2*Math.PI*l/4,d=Math.max(c-2*l,0),m=Math.PI/4;Zo.copy(t),Zo[s]=0,Zo.normalize();const p=.5*h/(h+d),x=1-Zo.angleTo(r)/m;return Math.sign(Zo[i])===1?x*p:d/(h+d)+p+p*(1-x)}class sl extends va{constructor(t=1,i=1,s=1,l=2,c=.1){const h=l*2+1;if(c=Math.min(t/2,i/2,s/2,c),super(1,1,1,h,h,h),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:s,segments:l,radius:c},h===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const m=new K,p=new K,x=new K(t,i,s).divideScalar(2).subScalar(c),g=this.attributes.position.array,S=this.attributes.normal.array,M=this.attributes.uv.array,b=g.length/6,R=new K,y=.5/h;for(let _=0,B=0;_<g.length;_+=3,B+=2)switch(m.fromArray(g,_),p.copy(m),p.x-=Math.sign(p.x)*y,p.y-=Math.sign(p.y)*y,p.z-=Math.sign(p.z)*y,p.normalize(),g[_+0]=x.x*Math.sign(m.x)+p.x*c,g[_+1]=x.y*Math.sign(m.y)+p.y*c,g[_+2]=x.z*Math.sign(m.z)+p.z*c,S[_+0]=p.x,S[_+1]=p.y,S[_+2]=p.z,Math.floor(_/b)){case 0:R.set(1,0,0),M[B+0]=xi(R,p,"z","y",c,s),M[B+1]=1-xi(R,p,"y","z",c,i);break;case 1:R.set(-1,0,0),M[B+0]=1-xi(R,p,"z","y",c,s),M[B+1]=1-xi(R,p,"y","z",c,i);break;case 2:R.set(0,1,0),M[B+0]=1-xi(R,p,"x","z",c,t),M[B+1]=xi(R,p,"z","x",c,s);break;case 3:R.set(0,-1,0),M[B+0]=1-xi(R,p,"x","z",c,t),M[B+1]=1-xi(R,p,"z","x",c,s);break;case 4:R.set(0,0,1),M[B+0]=1-xi(R,p,"x","y",c,t),M[B+1]=1-xi(R,p,"y","x",c,i);break;case 5:R.set(0,0,-1),M[B+0]=xi(R,p,"x","y",c,t),M[B+1]=1-xi(R,p,"y","x",c,i);break}}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.segments,t.radius)}}class VA extends bv{constructor(){super();const t=new va;t.deleteAttribute("uv");const i=new Ri({side:Hn}),s=new Ri,l=new wv(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Xe(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new wM(t,s,6),d=new Tn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const m=new Xe(t,Pr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Xe(t,Pr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const x=new Xe(t,Pr(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const g=new Xe(t,Pr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const S=new Xe(t,Pr(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const M=new Xe(t,Pr(100));M.position.set(0,20,0),M.scale.set(1,.1,1),this.add(M)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Pr(r){return new PM({color:0,emissive:16777215,emissiveIntensity:r})}const Iv=[[["Esc",1,"accent"],["1",1],["2",1],["3",1],["4",1],["5",1],["6",1],["7",1],["8",1],["9",1],["0",1],["−",1],["=",1],["Backspace",1.25,"modifier"],["Del",.75,"modifier"]],[["Tab",1.5,"modifier"],["Q",1],["W",1],["E",1],["R",1],["T",1],["Y",1],["U",1],["I",1],["O",1],["P",1],["[",1],["]",1],["\\",1.5,"modifier"]],[["Caps",1.75,"modifier"],["A",1],["S",1],["D",1],["F",1],["G",1],["H",1],["J",1],["K",1],["L",1],[";",1],["'",1],["Enter",2.25,"accent"]],[["Shift",2.25,"modifier"],["Z",1],["X",1],["C",1],["V",1],["B",1],["N",1],["M",1],[",",1],[".",1],["/",1],["Shift",1.75,"modifier"],["↑",1,"accent"]],[["Ctrl",1.25,"modifier"],["Meta",1.25,"modifier"],["Alt",1.25,"modifier"],["Space",6.25,"space"],["Alt",1.25,"modifier"],["Fn",1.25,"modifier"],["←",1,"accent"],["↓",1,"accent"],["→",1,"accent"]]],kA=Iv.reduce((r,t)=>r+t.length,0),Gc=.92,XA=.085,WA=.94,Vc=new K(13.8,12.3,19.5),kc=new K(0,.55,.1);function YA(r){return r instanceof HTMLElement?r.matches('input, textarea, select, [contenteditable="true"]')||!!r.closest('[contenteditable="true"]'):!1}function iv(r,t){const i=r==="Space"?"SPACE":r==="Meta"?"◆":r,s=i.length>2,l=document.createElement("canvas");l.width=s?384:160,l.height=160;const c=l.getContext("2d");c.clearRect(0,0,l.width,l.height),c.fillStyle=t,c.textAlign="center",c.textBaseline="middle",c.font=`${i.length>6?600:700} ${i.length>7?42:i.length>3?50:68}px Arial, sans-serif`,c.fillText(i,l.width/2,l.height/2+2);const h=new NM(l);return h.colorSpace=qn,h.anisotropy=4,h.needsUpdate=!0,{texture:h,aspect:l.width/l.height}}function av(r,t){return t==="accent"?{cap:r.accentKey,legend:r.legendOnDark}:t==="modifier"||t==="space"?{cap:r.modifier,legend:r.legendOnDark}:{cap:r.alpha,legend:r.legendOnLight}}function ha(r,t,i,s,l=.08,c=3){const h=new sl(t[0],t[1],t[2],c,l),d=new Xe(h,s);return d.position.set(...i),d.castShadow=!0,d.receiveShadow=!0,r.add(d),d}function Xc(r,t,i,s){const l=new iu(.065,.065,.035,20),c=new Xe(l,s);c.position.set(t,.555,i),c.castShadow=!0,r.add(c);const h=new Xe(new va(.075,.008,.018),new Ri({color:"#17191c",roughness:.7}));h.position.set(t,.578,i),h.rotation.y=Math.PI/4,r.add(h)}function jA({caseColor:r,keyTheme:t,exploded:i,experienceEnabled:s,viewCommand:l,onKeyFeedback:c}){const h=Be.useRef(null),d=Be.useRef(null),m=Be.useRef(null),p=Be.useRef([]),x=Be.useRef([]),g=Be.useRef(i?1:0),S=Be.useRef(s),M=Be.useRef(c),b=Be.useRef(null),[R,y]=Be.useState(!1),[_,B]=Be.useState("");return Be.useEffect(()=>{g.current=i?1:0},[i]),Be.useEffect(()=>{S.current=s},[s]),Be.useEffect(()=>{M.current=c},[c]),Be.useEffect(()=>{if(!m.current)return;const N=m.current;N.caseBody.color.set(r.color),N.caseBody.sheenColor.set(r.edge),N.caseEdge.color.set(r.edge),N.accent.color.set(r.accent),N.rimLight.color.set(r.accent),N.halo.color.set(r.accent),N.alpha.color.set(t.alpha),N.modifier.color.set(t.modifier),N.keyAccent.color.set(t.accentKey),x.current.forEach(w=>{w.material.map?.dispose();const{legend:G}=av(t,w.role),F=iv(w.label,G);w.material.map=F.texture,w.material.needsUpdate=!0})},[r,t]),Be.useEffect(()=>{const N=d.current;if(!N||!l)return;const{camera:w,controls:G,resetting:F}=N;if(F.active=!1,l.type==="reset"){F.active=!0;return}const O=w.position.clone().sub(G.target);if(l.type==="zoom-in"||l.type==="zoom-out"){const H=l.type==="zoom-in"?.84:1.18;O.multiplyScalar(H)}if(l.type==="rotate-left"||l.type==="rotate-right"){const H=new Id().setFromVector3(O);H.theta+=l.type==="rotate-left"?-.32:.32,O.setFromSpherical(H)}w.position.copy(G.target).add(O),G.update()},[l]),Be.useEffect(()=>{const N=h.current;if(!N)return;let w,G=!0;const F=[],O=[];try{const H=new bv,C=new ri(33,1,.1,100);C.position.copy(Vc),w=new RA({antialias:!0,alpha:!0,powerPreference:"high-performance"}),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.outputColorSpace=qn,w.toneMapping=ov,w.toneMappingExposure=.86,w.shadowMap.enabled=!0,w.shadowMap.type=rv,w.domElement.className="keyboard-canvas",w.domElement.setAttribute("role","img"),w.domElement.setAttribute("aria-label","可旋转缩放的 KEPLER 65 机械键盘三维模型"),N.appendChild(w.domElement);const D=new Bd(w),V=D.fromScene(new VA,.04).texture;H.environment=V,F.push(V,D);const W=new wA(C,w.domElement);W.enableDamping=!0,W.dampingFactor=.065,W.enablePan=!1,W.minDistance=8.8,W.maxDistance=34,W.minPolarAngle=.28,W.maxPolarAngle=Math.PI/2.08,W.target.copy(kc),W.update();const ot={active:!1};W.addEventListener("start",()=>{ot.active=!1});const dt=new BM("#dce6ff","#2e1d18",1.2);H.add(dt);const ct=new C0("#fff4ea",2.9);ct.position.set(6,10,8),ct.castShadow=!0,ct.shadow.mapSize.set(2048,2048),ct.shadow.camera.left=-10,ct.shadow.camera.right=10,ct.shadow.camera.top=8,ct.shadow.camera.bottom=-8,ct.shadow.bias=-4e-4,H.add(ct);const P=new C0(r.accent,3.2);P.position.set(-8,5,-6),H.add(P);const Q=new wv("#8aa8ff",15,22,2);Q.position.set(-5,2,7),H.add(Q);const j=new jo({color:r.color,metalness:.86,roughness:.28,clearcoat:.4,clearcoatRoughness:.35,sheen:.25,sheenColor:r.edge}),St=new Ri({color:r.edge,metalness:.9,roughness:.23}),Rt=new jo({color:"#9aa1a8",metalness:.95,roughness:.2,clearcoat:.5}),L=new Ri({color:"#353a40",metalness:.82,roughness:.34}),nt=new jo({color:t.alpha,roughness:.43,metalness:.02,clearcoat:.2}),Et=new jo({color:t.modifier,roughness:.4,metalness:.03,clearcoat:.18}),Ct=new jo({color:t.accentKey,roughness:.38,metalness:.02,clearcoat:.22}),Ot=new Ri({color:r.accent,metalness:.62,roughness:.28}),it=new Ri({color:"#171a1e",metalness:.12,roughness:.48}),ut=new Ri({color:"#183d3a",metalness:.24,roughness:.54}),Nt=new Ri({color:"#c8a95e",metalness:.92,roughness:.24}),It=new Ri({color:"#858c93",metalness:.96,roughness:.16});m.current={caseBody:j,caseEdge:St,accent:Ot,alpha:nt,modifier:Et,keyAccent:Ct,rimLight:P},F.push(j,St,Rt,L,nt,Et,Ct,Ot,it,ut,Nt,It);const Vt=new ma;Vt.rotation.x=-.055,Vt.position.y=0,H.add(Vt);const ee=new ma;ee.name="case-layer",Vt.add(ee),ha(ee,[15.05,.64,5.55],[0,.18,0],j,.28,5),ha(ee,[14.54,.18,5.05],[0,.5,0],L,.14,4),ha(ee,[14.22,.075,4.73],[0,.61,0],ut,.08,3),ha(ee,[5.2,.075,.11],[0,-.115,2.76],Ot,.04,3),ha(ee,[10.8,.12,.3],[0,-.2,-2.45],St,.08,3),ha(ee,[7.5,.12,.24],[0,-.2,2.42],St,.08,3),Xc(ee,-6.95,-2.32,It),Xc(ee,6.95,-2.32,It),Xc(ee,-6.95,2.32,It),Xc(ee,6.95,2.32,It);for(let Mt=0;Mt<18;Mt+=1){const vt=new Xe(new iu(.024,.024,.012,10),Nt);vt.position.set(-6.4+Mt%9*1.6,.657,-1.75+Math.floor(Mt/9)*3.45),ee.add(vt)}const Pe=new ma;Pe.name="plate-layer",Vt.add(Pe),ha(Pe,[14.48,.14,4.92],[0,.72,0],Rt,.12,4),ha(Pe,[14.03,.038,4.48],[0,.805,0],L,.08,3);const z=new ma;z.name="keycap-layer",Vt.add(z);const _e=[],ie=[],Qt=[],kt=new Map;Iv.forEach((Mt,vt)=>{let oe=-(Mt.reduce((Tt,[,wt])=>Tt+wt,0)*Gc)/2;const X=(vt-2)*WA;Mt.forEach(([Tt,wt=1,Ht],At)=>{const mt=Ht||"alpha",Ft=wt*Gc-XA,ae=oe+wt*Gc/2;oe+=wt*Gc;const ye=`${vt}-${At}-${Tt}`,Me=ha(Pe,[Math.min(.56,Ft*.68),.22,.56],[ae,.91,X],it,.045,2);Me.userData.keyId=ye;const pn=new Xe(new va(.16,.24,.16),Ot);pn.position.set(ae,1.08,X),pn.castShadow=!0,Pe.add(pn);const sn=new ma,xa=.92-vt*.018;sn.position.set(ae,xa,X),sn.rotation.x=[.045,.027,.005,-.018,-.035][vt],sn.userData.keyId=ye,z.add(sn);const Zn=mt==="accent"?Ct:mt==="modifier"||mt==="space"?Et:nt,Sa=new sl(Ft,.5,.82,4,.09),Kn=new Xe(Sa,Zn);Kn.position.y=.27,Kn.castShadow=!0,Kn.receiveShadow=!0,Kn.userData.keyId=ye,Qt.push(Kn),sn.add(Kn);const ya=new sl(Math.max(.14,Ft-.1),.018,.7,2,.045),ci=new Xe(ya,Zn);ci.position.y=.526,ci.userData.keyId=ye,Qt.push(ci),sn.add(ci);const{legend:is}=av(t,mt),bn=iv(Tt,is);O.push(bn.texture);const tn=new eu({map:bn.texture,transparent:!0,depthWrite:!1,toneMapped:!1});F.push(tn);const mn=Math.min(Ft*.74,.185*bn.aspect),Li=new qr(mn,.185),Si=new Xe(Li,tn);Si.rotation.x=-Math.PI/2,Si.position.set(0,.543,-.015),Si.userData.keyId=ye,sn.add(Si),Qt.push(Si),ie.push({label:Tt,role:mt,material:tn});const Hs={id:ye,label:Tt,group:sn,baseY:xa,pressed:!1,pressOffset:0};_e.push(Hs),(/^[A-Z]$/.test(Tt)||Tt==="Space")&&kt.set(Tt,Hs)})}),p.current=_e,x.current=ie;const Le=new OM({color:"#000000",opacity:.32,transparent:!0}),Gt=new Xe(new qr(40,26),Le);Gt.rotation.x=-Math.PI/2,Gt.position.y=-.58,Gt.receiveShadow=!0,H.add(Gt),F.push(Gt.geometry,Le);const re=new eu({color:r.accent,transparent:!0,opacity:.055,depthWrite:!1}),Ye=new Xe(new ip(7.5,96),re);Ye.rotation.x=-Math.PI/2,Ye.position.set(-2.5,-.54,-.4),H.add(Ye),m.current.halo=re,F.push(Ye.geometry,re);const Ze=new kM,U=new le,E=(Mt,vt,Lt="keyboard")=>{!Mt||Mt.pressed===vt||(Mt.pressed=vt,vt&&M.current?.(Mt.label,Lt))},$=Mt=>{const vt=w.domElement.getBoundingClientRect();U.x=(Mt.clientX-vt.left)/vt.width*2-1,U.y=-((Mt.clientY-vt.top)/vt.height)*2+1,Ze.setFromCamera(U,C);const Lt=Ze.intersectObjects(Qt,!1)[0];return Lt&&_e.find(oe=>oe.id===Lt.object.userData.keyId)||null},pt=Mt=>{if(!S.current)return;const vt=$(Mt);vt&&(Mt.preventDefault(),b.current=vt,W.enabled=!1,w.domElement.setPointerCapture?.(Mt.pointerId),E(vt,!0,"pointer"))},yt=()=>{b.current&&(E(b.current,!1,"pointer"),b.current=null),W.enabled=!0},ft=Mt=>{if(!S.current||YA(Mt.target))return;const vt=Mt.code==="Space"?"Space":/^Key[A-Z]$/.test(Mt.code)?Mt.code.slice(3):"";vt&&(Mt.code==="Space"&&Mt.preventDefault(),E(kt.get(vt),!0,"keyboard"))},qt=Mt=>{const vt=Mt.code==="Space"?"Space":/^Key[A-Z]$/.test(Mt.code)?Mt.code.slice(3):"";vt&&E(kt.get(vt),!1,"keyboard")};w.domElement.addEventListener("pointerdown",pt),window.addEventListener("pointerup",yt),window.addEventListener("pointercancel",yt),window.addEventListener("keydown",ft),window.addEventListener("keyup",qt);const Dt=()=>{const Mt=Math.max(1,N.clientWidth),vt=Math.max(1,N.clientHeight);w.setSize(Mt,vt,!1),C.aspect=Mt/vt,C.fov=C.aspect<.82?60:C.aspect<1.05?41:35,C.updateProjectionMatrix()},jt=new ResizeObserver(Dt);jt.observe(N),Dt();const Zt=new VM;let bt=i?1:0;const Ut=()=>{if(!G)return;const Mt=Math.min(Zt.getDelta(),.05);bt=Cs.damp(bt,g.current,5.2,Mt),z.position.y=Cs.lerp(0,3.12,bt),Pe.position.y=Cs.lerp(0,1.48,bt),z.rotation.y=Cs.lerp(0,-.018,bt),Pe.rotation.y=Cs.lerp(0,.012,bt),_e.forEach(vt=>{vt.pressOffset=Cs.damp(vt.pressOffset,vt.pressed?-.16:0,vt.pressed?24:15,Mt),vt.group.position.y=vt.baseY+vt.pressOffset}),ot.active&&(C.position.lerp(Vc,1-Math.exp(-5.5*Mt)),W.target.lerp(kc,1-Math.exp(-5.5*Mt)),C.position.distanceToSquared(Vc)<8e-4&&W.target.distanceToSquared(kc)<8e-4&&(C.position.copy(Vc),W.target.copy(kc),ot.active=!1)),W.update(),w.render(H,C)};return w.setAnimationLoop(Ut),d.current={camera:C,controls:W,resetting:ot},y(!0),()=>{G=!1,w.setAnimationLoop(null),jt.disconnect(),w.domElement.removeEventListener("pointerdown",pt),window.removeEventListener("pointerup",yt),window.removeEventListener("pointercancel",yt),window.removeEventListener("keydown",ft),window.removeEventListener("keyup",qt),W.dispose(),H.traverse(Mt=>{Mt.geometry&&Mt.geometry.dispose()}),O.forEach(Mt=>Mt.dispose()),ie.forEach(Mt=>Mt.material.map?.dispose()),F.forEach(Mt=>Mt.dispose?.()),w.dispose(),w.forceContextLoss(),w.domElement.remove(),d.current=null,m.current=null,p.current=[],x.current=[]}}catch(H){console.error(H),B("当前浏览器无法启动 3D 预览，请确认已开启硬件加速。"),y(!1),w?.domElement?.parentNode===N&&w.domElement.remove();return}},[]),J.jsxs("div",{className:"scene-mount",ref:h,children:[!R&&!_&&J.jsxs("div",{className:"scene-loading","aria-live":"polite",children:[J.jsx("span",{className:"loading-ring"}),J.jsx("span",{children:"正在装配 64 枚键帽"})]}),_&&J.jsx("div",{className:"scene-error",children:_})]})}const Kc=[{id:"meteor",name:"陨石黑",detail:"阳极氧化铝",color:"#24272b",edge:"#4d535c",accent:"#ff6b35",swatch:"linear-gradient(135deg, #555b63 0%, #17191c 78%)"},{id:"lunar",name:"月岩银",detail:"微珠喷砂铝",color:"#aeb4b9",edge:"#e7ebec",accent:"#ff6338",swatch:"linear-gradient(135deg, #f0f2f1 0%, #8d959c 78%)"},{id:"forest",name:"苔原绿",detail:"深色电泳铝",color:"#354b43",edge:"#789083",accent:"#f2bb55",swatch:"linear-gradient(135deg, #718a7d 0%, #23352f 78%)"}],Qc=[{id:"carbon",name:"碳素",hint:"冷灰 / 橙",alpha:"#d4d1c8",modifier:"#393d42",accentKey:"#f06432",legendOnLight:"#202328",legendOnDark:"#f4f1e9",accent:"#ff6b35",preview:["#d4d1c8","#393d42","#f06432"]},{id:"paper",name:"纸境",hint:"暖白 / 墨",alpha:"#eee9dc",modifier:"#d4c7ad",accentKey:"#303b47",legendOnLight:"#313230",legendOnDark:"#f7f3e8",accent:"#d19049",preview:["#eee9dc","#d4c7ad","#303b47"]},{id:"signal",name:"信号",hint:"深紫 / 青",alpha:"#28283a",modifier:"#171923",accentKey:"#5ce1d4",legendOnLight:"#111820",legendOnDark:"#eeecff",accent:"#5ce1d4",preview:["#28283a","#171923","#5ce1d4"]}],Bv={caseId:"meteor",themeId:"carbon"},Hd="kepler-65-config-v1";function qA(){try{const r=JSON.parse(localStorage.getItem(Hd)),t=Kc.some(s=>s.id===r?.caseId),i=Qc.some(s=>s.id===r?.themeId);if(t&&i)return{config:r,restored:!0}}catch{}return{config:Bv,restored:!1}}function zr({name:r}){const t={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};return r==="rotate-left"?J.jsxs("svg",{...t,children:[J.jsx("path",{d:"M4 7v5h5"}),J.jsx("path",{d:"M5.7 16.8A8 8 0 1 0 5 8.3L4 12"})]}):r==="rotate-right"?J.jsxs("svg",{...t,children:[J.jsx("path",{d:"M20 7v5h-5"}),J.jsx("path",{d:"M18.3 16.8A8 8 0 1 1 19 8.3l1 3.7"})]}):r==="minus"?J.jsxs("svg",{...t,children:[J.jsx("circle",{cx:"11",cy:"11",r:"7"}),J.jsx("path",{d:"M8 11h6M20 20l-4-4"})]}):r==="plus"?J.jsxs("svg",{...t,children:[J.jsx("circle",{cx:"11",cy:"11",r:"7"}),J.jsx("path",{d:"M8 11h6M11 8v6M20 20l-4-4"})]}):r==="reset"?J.jsxs("svg",{...t,children:[J.jsx("path",{d:"M4 4v6h6"}),J.jsx("path",{d:"M5.5 15.5a8 8 0 1 0 .3-8.7L4 10"})]}):r==="save"?J.jsxs("svg",{...t,children:[J.jsx("path",{d:"M5 4h11l3 3v13H5z"}),J.jsx("path",{d:"M8 4v6h8V4M8 20v-6h8v6"})]}):null}function ZA({item:r,selected:t,onSelect:i}){return J.jsxs("button",{type:"button",className:`case-swatch ${t?"is-selected":""}`,onClick:()=>i(r.id),"aria-pressed":t,"aria-label":`${r.name}，${r.detail}`,children:[J.jsx("span",{className:"swatch-orb",style:{background:r.swatch},children:J.jsx("span",{className:"swatch-shine"})}),J.jsxs("span",{className:"swatch-copy",children:[J.jsx("strong",{children:r.name}),J.jsx("small",{children:r.detail})]}),J.jsx("span",{className:"choice-mark","aria-hidden":"true"})]})}function KA({theme:r,selected:t,onSelect:i}){return J.jsxs("button",{type:"button",className:`theme-card ${t?"is-selected":""}`,onClick:()=>i(r.id),"aria-pressed":t,children:[J.jsx("span",{className:"mini-keys","aria-hidden":"true",children:r.preview.map((s,l)=>J.jsx("span",{style:{background:s},children:["A","⌘","↵"][l]},s))}),J.jsxs("span",{children:[J.jsx("strong",{children:r.name}),J.jsx("small",{children:r.hint})]})]})}function QA(){const r=Be.useMemo(qA,[]),[t,i]=Be.useState(r.config),[s,l]=Be.useState(!1),[c,h]=Be.useState(!1),[d,m]=Be.useState({type:"reset",nonce:0}),[p,x]=Be.useState("—"),[g,S]=Be.useState(0),[M,b]=Be.useState(r.restored?"已恢复上次保存的配置":""),R=Be.useRef(null),y=Kc.find(H=>H.id===t.caseId)||Kc[0],_=Qc.find(H=>H.id===t.themeId)||Qc[0],B=H=>{window.clearTimeout(R.current),b(""),window.requestAnimationFrame(()=>b(H)),R.current=window.setTimeout(()=>b(""),2600)};Be.useEffect(()=>{if(r.restored)return R.current=window.setTimeout(()=>b(""),2600),()=>window.clearTimeout(R.current)},[r.restored]),Be.useEffect(()=>()=>{window.clearTimeout(R.current)},[]);const N=(H,C)=>{i(D=>({...D,[H]:C}))},w=H=>{m(C=>({type:H,nonce:C.nonce+1}))},G=()=>{localStorage.setItem(Hd,JSON.stringify(t)),B("配置已保存到此设备")},F=()=>{localStorage.removeItem(Hd),i(Bv),l(!1),h(!1),x("—"),w("reset"),B("已恢复出厂配置")},O=H=>{x(H==="Space"?"空格":H),S(C=>C+1)};return J.jsxs("div",{className:"app-shell",style:{"--case-accent":y.accent,"--theme-accent":_.accent,"--case-color":y.color},children:[J.jsxs("header",{className:"topbar",children:[J.jsxs("a",{className:"brand",href:"#top","aria-label":"KEPLER 首页",children:[J.jsxs("span",{className:"brand-mark","aria-hidden":"true",children:[J.jsx("i",{}),J.jsx("i",{}),J.jsx("i",{})]}),J.jsx("span",{children:"KEPLER"}),J.jsx("em",{children:"STUDIO / 01"})]}),J.jsxs("div",{className:"topbar-meta",children:[J.jsx("span",{className:"spec-chip",children:"65% COMPACT"}),J.jsxs("span",{className:"status-chip",children:[J.jsx("i",{})," 3D CONFIGURATOR"]})]})]}),J.jsxs("main",{className:"workspace",id:"top",children:[J.jsxs("section",{className:"product-stage","aria-labelledby":"product-title",children:[J.jsx("div",{className:"stage-grid","aria-hidden":"true"}),J.jsx("div",{className:"ambient-glow glow-one","aria-hidden":"true"}),J.jsx("div",{className:"ambient-glow glow-two","aria-hidden":"true"}),J.jsxs("div",{className:"product-copy",children:[J.jsxs("div",{className:"eyebrow",children:[J.jsx("span",{children:"01"}),J.jsx("i",{}),"PRECISION INPUT SYSTEM"]}),J.jsxs("h1",{id:"product-title",children:["KEPLER ",J.jsx("span",{children:"65"})]}),J.jsx("p",{children:"紧凑，但不妥协。全铝结构、五行 64 键布局与可拆解悬浮式内胆，为每一次输入留下清晰回响。"})]}),J.jsxs("div",{className:"stage-telemetry stage-telemetry-left","aria-hidden":"true",children:[J.jsx("span",{children:"BODY / 6063 AL"}),J.jsx("span",{children:"PLATE / CNC"})]}),J.jsxs("div",{className:`layer-indicator ${s?"is-exploded":""}`,"aria-live":"polite",children:[J.jsxs("span",{className:"layer-line layer-line-keys",children:[J.jsx("i",{})," 键帽层"]}),J.jsxs("span",{className:"layer-line layer-line-plate",children:[J.jsx("i",{})," 定位板"]}),J.jsxs("span",{className:"layer-line layer-line-case",children:[J.jsx("i",{})," 底壳"]})]}),J.jsx(jA,{caseColor:y,keyTheme:_,exploded:s,experienceEnabled:c,viewCommand:d,onKeyFeedback:O}),J.jsxs("div",{className:"scene-badge","aria-hidden":"true",children:[J.jsx("span",{className:"live-dot"}),"REAL-TIME 3D"]}),J.jsxs("div",{className:"view-toolbar","aria-label":"3D 视图控制",children:[J.jsxs("button",{type:"button",onClick:()=>w("rotate-left"),title:"向左旋转",children:[J.jsx(zr,{name:"rotate-left"}),J.jsx("span",{children:"左转"})]}),J.jsxs("button",{type:"button",onClick:()=>w("rotate-right"),title:"向右旋转",children:[J.jsx(zr,{name:"rotate-right"}),J.jsx("span",{children:"右转"})]}),J.jsx("span",{className:"toolbar-divider"}),J.jsxs("button",{type:"button",onClick:()=>w("zoom-out"),title:"缩小",children:[J.jsx(zr,{name:"minus"}),J.jsx("span",{children:"缩小"})]}),J.jsxs("button",{type:"button",onClick:()=>w("zoom-in"),title:"放大",children:[J.jsx(zr,{name:"plus"}),J.jsx("span",{children:"放大"})]}),J.jsxs("button",{className:"toolbar-reset",type:"button",onClick:()=>w("reset"),title:"复位视角",children:[J.jsx(zr,{name:"reset"}),J.jsx("span",{children:"复位"})]})]}),J.jsxs("div",{className:"orbit-hint",children:[J.jsx("span",{className:"mouse-icon","aria-hidden":"true",children:J.jsx("i",{})}),"拖拽旋转 · 滚轮缩放"]}),c&&J.jsxs("div",{className:"experience-float",children:[J.jsx("span",{children:"体验模式"}),"按下 A—Z 或空格，也可直接点击键帽"]})]}),J.jsxs("aside",{className:"config-panel","aria-label":"键盘配置",children:[J.jsxs("div",{className:"panel-heading",children:[J.jsxs("div",{children:[J.jsx("span",{className:"panel-index",children:"CONFIG / 01"}),J.jsx("h2",{children:"定制你的 KEPLER"})]}),J.jsxs("span",{className:"panel-live",children:[J.jsx("i",{})," LIVE"]})]}),J.jsxs("div",{className:"panel-scroll",children:[J.jsxs("section",{className:"config-section",children:[J.jsxs("div",{className:"section-heading",children:[J.jsxs("span",{children:[J.jsx("b",{children:"01"})," 外壳配色"]}),J.jsx("em",{children:y.name})]}),J.jsx("div",{className:"case-options",children:Kc.map(H=>J.jsx(ZA,{item:H,selected:t.caseId===H.id,onSelect:C=>N("caseId",C)},H.id))})]}),J.jsxs("section",{className:"config-section",children:[J.jsxs("div",{className:"section-heading",children:[J.jsxs("span",{children:[J.jsx("b",{children:"02"})," 键帽主题"]}),J.jsx("em",{children:_.name})]}),J.jsx("div",{className:"theme-options",children:Qc.map(H=>J.jsx(KA,{theme:H,selected:t.themeId===H.id,onSelect:C=>N("themeId",C)},H.id))})]}),J.jsxs("section",{className:"config-section interaction-section",children:[J.jsxs("div",{className:"section-heading",children:[J.jsxs("span",{children:[J.jsx("b",{children:"03"})," 结构与手感"]}),J.jsx("em",{children:s?"已拆解":"已组装"})]}),J.jsxs("button",{type:"button",className:`feature-toggle explode-toggle ${s?"is-active":""}`,onClick:()=>l(H=>!H),"aria-pressed":s,children:[J.jsxs("span",{className:"layer-glyph","aria-hidden":"true",children:[J.jsx("i",{}),J.jsx("i",{}),J.jsx("i",{})]}),J.jsxs("span",{className:"feature-copy",children:[J.jsx("strong",{children:s?"组装键盘":"拆解结构"}),J.jsx("small",{children:"键帽 / 定位板 / 底壳"})]}),J.jsx("span",{className:"toggle-arrow","aria-hidden":"true",children:s?"↓":"↑"})]}),J.jsxs("div",{className:`experience-card ${c?"is-active":""}`,children:[J.jsxs("button",{type:"button",className:"experience-toggle",onClick:()=>h(H=>!H),"aria-pressed":c,children:[J.jsxs("span",{children:[J.jsx("strong",{children:"键盘体验模式"}),J.jsx("small",{children:"A—Z / 空格 / 触屏键帽"})]}),J.jsx("i",{className:"switch-control",children:J.jsx("b",{})})]}),J.jsxs("div",{className:"key-readout",children:[J.jsx("span",{children:"LAST INPUT"}),J.jsx("strong",{children:p},g),J.jsx("i",{children:c?"READY":"OFF"})]})]})]}),J.jsxs("section",{className:"config-summary","aria-label":"当前配置摘要",children:[J.jsxs("div",{className:"summary-title",children:[J.jsx("span",{children:"配置摘要"}),J.jsxs("em",{children:["K65-",y.id.slice(0,2).toUpperCase(),_.id.slice(0,2).toUpperCase()]})]}),J.jsxs("dl",{children:[J.jsxs("div",{children:[J.jsx("dt",{children:"外壳"}),J.jsxs("dd",{children:[y.name," · ",y.detail]})]}),J.jsxs("div",{children:[J.jsx("dt",{children:"键帽"}),J.jsxs("dd",{children:[_.name," · PBT 热升华"]})]}),J.jsxs("div",{children:[J.jsx("dt",{children:"布局"}),J.jsxs("dd",{children:["65% · ",kA," 键 · ANSI"]})]}),J.jsxs("div",{children:[J.jsx("dt",{children:"结构"}),J.jsx("dd",{children:"Gasket Mount · CNC 定位板"})]})]})]})]}),J.jsxs("div",{className:"panel-actions",children:[J.jsxs("button",{type:"button",className:"save-button",onClick:G,children:[J.jsx(zr,{name:"save"}),"保存此配置"]}),J.jsx("button",{type:"button",className:"reset-button",onClick:F,children:"恢复默认"})]})]})]}),J.jsxs("div",{className:`toast ${M?"is-visible":""}`,role:"status","aria-live":"polite",children:[J.jsx("span",{children:"✓"}),M]})]})}$S.createRoot(document.getElementById("root")).render(J.jsx(Be.StrictMode,{children:J.jsx(QA,{})}));
