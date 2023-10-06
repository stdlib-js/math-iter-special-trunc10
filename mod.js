// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,t,e,o,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(F(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function k(r){var n,t,e;if(!T(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=I(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return x.apply(null,t)}var N,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,n)||C.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,n,t.get),a&&L&&L.call(r,n,t.set),r};var H=N;function W(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,n){return null!=r&&Y.call(r,n)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var n,t,e;if(null==r)return X.call(r);t=r[D],n=q(r,D);try{r[D]=void 0}catch(n){return X.call(r)}return e=X.call(r),n?r[D]=t:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function nr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return R(r)||nr(r)}function er(){return new Function("return this;")()}W(tr,"isPrimitive",R),W(tr,"isObject",nr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!R(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(cr)return cr;if(ir)return ir;if(or)return or;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",yr);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var n,t,e,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=yr.exec(e.toString()))return n[1]}return gr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!vr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(gr));var br="function"==typeof B||"object"==typeof sr||"function"==typeof lr?function(r){return dr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?dr(r).toLowerCase():n};function wr(r){return"function"===br(r)}function hr(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=Z();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Or(r){return mr(r)||Er(r)}W(Or,"isPrimitive",mr),W(Or,"isObject",Er);var Sr="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var xr,Ur=Object,Fr=Object.getPrototypeOf;xr=wr(Object.getPrototypeOf)?Fr:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=xr;var Tr=Object.prototype;function kr(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(n=function(r){return null==r?null:(r=Ur(r),Ir(r))}(r),!n||!q(r,"constructor")&&q(n,"constructor")&&wr(n.constructor)&&"[object Function]"===J(n.constructor)&&q(n,"isPrototypeOf")&&wr(n.isPrototypeOf)&&(n===Tr||function(r){var n;for(n in r)if(!q(r,n))return!1;return!0}(r)))}function Nr(r,n){return kr(n)?(q(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",n))}function Vr(r,n,t){var e,i,o,a;if(!hr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(n))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",n));if(e={invalid:NaN},arguments.length>2&&(o=Nr(e,t)))throw o;return W(i={},"next",u),W(i,"return",c),Sr&&wr(r[Sr])&&W(i,Sr,f),i;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:mr(t.value)?n(t.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Vr(r[Sr](),n,e)}}function Pr(r){return r!=r}var Gr=Number.POSITIVE_INFINITY,Lr=jr.NEGATIVE_INFINITY;function $r(r){return r===Gr||r===Lr}var Cr=Math.floor;function Hr(r){return Cr(r)===r}function Wr(r){return Hr(r/2)}function Br(r){return Wr(r>0?r-1:r+1)}var Rr=Math.sqrt;function Mr(r){return Math.abs(r)}var Zr="function"==typeof Uint32Array;var Xr="function"==typeof Uint32Array?Uint32Array:null;var Yr,qr="function"==typeof Uint32Array?Uint32Array:void 0;Yr=function(){var r,n,t;if("function"!=typeof Xr)return!1;try{n=new Xr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Zr&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr=Yr,Dr="function"==typeof Float64Array;var Jr="function"==typeof Float64Array?Float64Array:null;var Kr,Qr="function"==typeof Float64Array?Float64Array:void 0;Kr=function(){var r,n,t;if("function"!=typeof Jr)return!1;try{n=new Jr([1,3.14,-3.14,NaN]),t=n,r=(Dr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rn=Kr,nn="function"==typeof Uint8Array;var tn="function"==typeof Uint8Array?Uint8Array:null;var en,on="function"==typeof Uint8Array?Uint8Array:void 0;en=function(){var r,n,t;if("function"!=typeof tn)return!1;try{n=new tn(n=[1,3.14,-3.14,256,257]),t=n,r=(nn&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?on:function(){throw new Error("not implemented")};var an=en,un="function"==typeof Uint16Array;var cn="function"==typeof Uint16Array?Uint16Array:null;var fn,ln="function"==typeof Uint16Array?Uint16Array:void 0;fn=function(){var r,n,t;if("function"!=typeof cn)return!1;try{n=new cn(n=[1,3.14,-3.14,65536,65537]),t=n,r=(un&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var sn,pn={uint16:fn,uint8:an};(sn=new pn.uint16(1))[0]=4660;var yn,vn,gn=52===new pn.uint8(sn.buffer)[0];!0===gn?(yn=1,vn=0):(yn=0,vn=1);var dn={HIGH:yn,LOW:vn},bn=new rn(1),wn=new zr(bn.buffer),hn=dn.HIGH,mn=dn.LOW;function jn(r,n,t,e){return bn[0]=r,n[e]=wn[hn],n[e+t]=wn[mn],n}function An(r){return jn(r,[0,0],1,0)}W(An,"assign",jn);var _n=!0===gn?0:1,En=new rn(1),On=new zr(En.buffer);function Sn(r,n){return En[0]=r,On[_n]=n>>>0,En[0]}function xn(r){return 0|r}var Un,Fn,In=!0===gn?1:0,Tn=new rn(1),kn=new zr(Tn.buffer);function Nn(r){return Tn[0]=r,kn[In]}!0===gn?(Un=1,Fn=0):(Un=0,Fn=1);var Vn={HIGH:Un,LOW:Fn},Pn=new rn(1),Gn=new zr(Pn.buffer),Ln=Vn.HIGH,$n=Vn.LOW;function Cn(r,n){return Gn[Ln]=r,Gn[$n]=n,Pn[0]}var Hn=[0,0];function Wn(r,n){var t,e;return An.assign(r,Hn,1,0),t=Hn[0],t&=2147483647,e=Nn(n),Cn(t|=e&=2147483648,Hn[1])}var Bn=!0===gn?1:0,Rn=new rn(1),Mn=new zr(Rn.buffer);function Zn(r,n){return Rn[0]=r,Mn[Bn]=n>>>0,Rn[0]}var Xn=[1,1.5],Yn=[0,.5849624872207642],qn=[0,1.350039202129749e-8];function zn(r,n,t,e){return Pr(r)||$r(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Mr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}W((function(r){return zn(r,[0,0],1,0)}),"assign",zn);var Dn=[0,0],Jn=[0,0];function Kn(r,n){var t,e;return 0===n||0===r||Pr(r)||$r(r)?r:(zn(r,Dn,1,0),n+=Dn[1],n+=function(r){var n=Nn(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Dn[0]),n<-1074?Wn(0,r):n>1023?r<0?Lr:Gr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,An.assign(r,Jn,1,0),t=Jn[0],t&=2148532223,e*Cn(t|=n+1023<<20,Jn[1])))}var Qn=1e300,rt=1e-300,nt=[0,0],tt=[0,0];function et(r,n){var t,e,i,o,a,u,c,f,l,s,p,y,v,g;if(Pr(r)||Pr(n))return NaN;if(An.assign(n,nt,1,0),a=nt[0],0===nt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Rr(r);if(-.5===n)return 1/Rr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if($r(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Mr(r)<1==(n===Gr)?0:Gr}(r,n)}if(An.assign(r,nt,1,0),o=nt[0],0===nt[1]){if(0===o)return function(r,n){return n===Lr?Gr:n===Gr?0:n>0?Br(n)?r:0:Br(n)?Wn(Gr,r):Gr}(r,n);if(1===r)return 1;if(-1===r&&Br(n))return-1;if($r(r))return r===Lr?et(-0,-n):n<0?0:Gr}if(r<0&&!1===Hr(n))return(r-r)/(r-r);if(i=Mr(r),t=2147483647&o|0,e=2147483647&a|0,c=a>>>31|0,u=(u=o>>>31|0)&&Br(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Nn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===c?u*Qn*Qn:u*rt*rt;if(t>1072693248)return 0===c?u*Qn*Qn:u*rt*rt;p=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Sn(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(tt,i)}else p=function(r,n,t){var e,i,o,a,u,c,f,l,s,p,y,v,g,d,b,w,h,m,j,A,_;return m=0,t<1048576&&(m-=53,t=Nn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(j=1048575&t|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,t-=1048576),a=Sn(i=(w=(n=Zn(n,t))-(f=Xn[A]))*(h=1/(n+f)),0),e=524288+(t>>1|536870912),c=Zn(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Sn(c=3+(o=a*a)+(b+=(u=h*(w-a*c-a*(n-(c-f))))*(a+i)),0),g=(y=-7.028461650952758e-9*(s=Sn(s=(w=a*c)+(h=u*c+(b-(c-3-o))*i),0))+.9617966939259756*(h-(s-w))+qn[A])-((v=Sn(v=(p=.9617967009544373*s)+y+(l=Yn[A])+(d=m),0))-d-l-p),r[0]=v,r[1]=g,r}(tt,i,t);if(y=(s=(n-(f=Sn(n,0)))*p[0]+n*p[1])+(l=f*p[0]),An.assign(y,nt,1,0),v=xn(nt[0]),g=xn(nt[1]),v>=1083179008){if(0!=(v-1083179008|g))return u*Qn*Qn;if(s+8008566259537294e-32>y-l)return u*Qn*Qn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|g))return u*rt*rt;if(s<=y-l)return u*rt*rt}return y=function(r,n,t){var e,i,o,a,u,c,f,l,s,p,y;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),n-=o=Zn(0,e)),r=xn(r=Nn(f=1-((f=(a=.6931471824645996*(o=Sn(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(i=f-(o=f*f)*(0===(y=o)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-a))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?Kn(f,l):Zn(f,r)}(v,l,s),u*y}function it(r){var n,t,e,i,o,a,u;return Pr(r)||r<0?NaN:0===r?Lr:(o=0,(t=Nn(r))<1048576&&(o-=54,t=Nn(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,a=o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,i,o,a,u,c,f,l,s;return o=r-1,(1048575&2+(i=Nn(r)))<3?0===o?0:o*o*(.3333333333333333*o-.5):(l=(i&=1048575)-398458|0,s=440401-i|0,t=(f=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=e+t,(l|=s)>0?a*((n=.5*o*o)+c)-n:a*(c-o))}(r=Zn(r,t|1072693248^i)),u=3694239077158931e-28*a+25082946711645275e-27*((r-=1)+e),(u+=.4342944818781689*(r-(n=Sn(r,0))+e)+.4342944818781689*n)+.30102999566361177*a))}function ot(r){var n;return Pr(r)||$r(r)||0===r?r:(r<0?(r=-r,n=-1):n=1,n*et(10,Cr(it(r))))}function at(r){return Vr(r,ot)}export{at as default};
//# sourceMappingURL=mod.js.map
