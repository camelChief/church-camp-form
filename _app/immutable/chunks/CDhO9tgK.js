import{U as de,K as x,aF as Se,R as W,I as T,an as we,J as oe,v as O,x as qe,N as Ve,O as We,Q as ge,T as k,$ as C,ak as Ue,aq as Ye,V as L,Y as ze,aG as ee,aH as re,W as Be,aI as be,aA as Fe,aJ as pe,au as me,i as Ie,Z as _e,_ as ye,aK as Ke,aL as fe,a2 as Ze,az as R,aM as Ge,am as Xe,aN as Je,at as Qe,aO as je,B as Ce,aP as xe,M as er,aQ as rr,aw as ar,a0 as he,aR as tr,aS as ir,aT as sr,ay as fr,aU as nr,aV as lr,aW as ur,aX as or,aY as cr,aZ as vr,X as dr,a_ as _r,a$ as hr,b0 as gr,a7 as Y,b1 as br,ab as pr,aC as z,a8 as B,o as D,ad as Ar,ae as F,ac as Nr,aa as K,aD as Er,b2 as Tr,y as Sr}from"./l4D6UDle.js";import"./DsnmJJEf.js";import{i as wr,d as mr,e as Ir,f as yr,n as Cr,g as Mr,b as Z}from"./CN7JOoou.js";import{p as H,r as G,s as ae}from"./DiS8vlLP.js";function $r(e,a){return a}function kr(e,a,r){for(var t=e.items,i=[],f=a.length,s=0;s<f;s++)Je(a[s].e,i,!0);var n=f>0&&i.length===0&&r!==null;if(n){var _=r.parentNode;Qe(_),_.append(r),t.clear(),y(e,a[0].prev,a[f-1].next)}je(i,()=>{for(var l=0;l<f;l++){var p=a[l];n||(t.delete(p.k),y(e,p.prev,p.next)),R(p.e,!n)}})}function Or(e,a,r,t,i,f=null){var s=e,n={flags:a,items:new Map,first:null},_=(a&Se)!==0;if(_){var l=e;s=T?W(we(l)):l.appendChild(de())}T&&oe();var p=null,h=!1,v=new Map,S=qe(()=>{var b=r();return Ie(b)?b:b==null?[]:me(b)}),u,d;function A(){Lr(d,u,n,v,s,i,a,t,r),f!==null&&(u.length===0?p?_e(p):p=L(()=>f(s)):p!==null&&ye(p,()=>{p=null}))}x(()=>{d??=Ce,u=O(S);var b=u.length;if(h&&b===0)return;h=b===0;let w=!1;if(T){var g=Ve(s)===We;g!==(b===0)&&(s=ge(),W(s),k(!1),w=!0)}if(T){for(var N=null,E,o=0;o<b;o++){if(C.nodeType===Ue&&C.data===Ye){s=C,w=!0,k(!1);break}var c=u[o],m=t(c,o);E=ce(C,n,N,null,c,m,o,i,a,r),n.items.set(m,E),N=E}b>0&&W(ge())}if(T)b===0&&f&&(p=L(()=>f(s)));else if(ze()){var M=new Set,X=Be;for(o=0;o<b;o+=1){c=u[o],m=t(c,o);var $=n.items.get(m)??v.get(m);$?(a&(ee|re))!==0&&Me($,c,o,a):(E=ce(null,n,null,null,c,m,o,i,a,r,!0),v.set(m,E)),M.add(m)}for(const[I,J]of n.items)M.has(I)||X.skipped_effects.add(J.e);X.add_callback(A)}else A();w&&k(!0),O(S)}),T&&(s=C)}function Lr(e,a,r,t,i,f,s,n,_){var l=(s&Ge)!==0,p=(s&(ee|re))!==0,h=a.length,v=r.items,S=r.first,u=S,d,A=null,b,w=[],g=[],N,E,o,c;if(l)for(c=0;c<h;c+=1)N=a[c],E=n(N,c),o=v.get(E),o!==void 0&&(o.a?.measure(),(b??=new Set).add(o));for(c=0;c<h;c+=1){if(N=a[c],E=n(N,c),o=v.get(E),o===void 0){var m=t.get(E);if(m!==void 0){t.delete(E),v.set(E,m);var M=A?A.next:u;y(r,A,m),y(r,m,M),ne(m,M,i),A=m}else{var X=u?u.e.nodes_start:i;A=ce(X,r,A,A===null?r.first:A.next,N,E,c,f,s,_)}v.set(E,A),w=[],g=[],u=A.next;continue}if(p&&Me(o,N,c,s),(o.e.f&fe)!==0&&(_e(o.e),l&&(o.a?.unfix(),(b??=new Set).delete(o))),o!==u){if(d!==void 0&&d.has(o)){if(w.length<g.length){var $=g[0],I;A=$.prev;var J=w[0],ie=w[w.length-1];for(I=0;I<w.length;I+=1)ne(w[I],$,i);for(I=0;I<g.length;I+=1)d.delete(g[I]);y(r,J.prev,ie.next),y(r,A,J),y(r,ie,$),u=$,A=ie,c-=1,w=[],g=[]}else d.delete(o),ne(o,u,i),y(r,o.prev,o.next),y(r,o,A===null?r.first:A.next),y(r,A,o),A=o;continue}for(w=[],g=[];u!==null&&u.k!==E;)(u.e.f&fe)===0&&(d??=new Set).add(u),g.push(u),u=u.next;if(u===null)continue;o=u}w.push(o),A=o,u=o.next}if(u!==null||d!==void 0){for(var P=d===void 0?[]:me(d);u!==null;)(u.e.f&fe)===0&&P.push(u),u=u.next;var se=P.length;if(se>0){var Pe=(s&Se)!==0&&h===0?i:null;if(l){for(c=0;c<se;c+=1)P[c].a?.measure();for(c=0;c<se;c+=1)P[c].a?.fix()}kr(r,P,Pe)}}l&&Ze(()=>{if(b!==void 0)for(o of b)o.a?.apply()}),e.first=r.first&&r.first.e,e.last=A&&A.e;for(var He of t.values())R(He.e);t.clear()}function Me(e,a,r,t){(t&ee)!==0&&be(e.v,a),(t&re)!==0?be(e.i,r):e.i=r}function ce(e,a,r,t,i,f,s,n,_,l,p){var h=(_&ee)!==0,v=(_&Ke)===0,S=h?v?Fe(i,!1,!1):pe(i):i,u=(_&re)===0?s:pe(s),d={i:u,v:S,k:f,a:null,e:null,prev:r,next:t};try{if(e===null){var A=document.createDocumentFragment();A.append(e=de())}return d.e=L(()=>n(e,S,u,l),T),d.e.prev=r&&r.e,d.e.next=t&&t.e,r===null?p||(a.first=d):(r.next=d,r.e.next=d.e),t!==null&&(t.prev=d,t.e.prev=d.e),d}finally{}}function ne(e,a,r){for(var t=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,f=e.e.nodes_start;f!==null&&f!==t;){var s=Xe(f);i.before(f),f=s}}function y(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Rr(e,a,r,t,i,f){let s=T;T&&oe();var n,_,l=null;T&&C.nodeType===xe&&(l=C,oe());var p=T?C:e,h;x(()=>{const v=a()||null;var S=rr;v!==n&&(h&&(v===null?ye(h,()=>{h=null,_=null}):v===_?_e(h):R(h)),v&&v!==_&&(h=L(()=>{if(l=T?l:document.createElementNS(S,v),ar(l,l),t){T&&wr(v)&&l.append(document.createComment(""));var u=T?we(l):l.appendChild(de());T&&(u===null?k(!1):W(u)),t(l,u)}Ce.nodes_end=l,p.before(l)})),n=v,n&&(_=n))},er),s&&(k(!0),W(p))}function Dr(e,a){var r=void 0,t;x(()=>{r!==(r=a())&&(t&&(R(t),t=null),r&&(t=L(()=>{he(()=>r(e))})))})}function $e(e){var a,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(a=0;a<i;a++)e[a]&&(r=$e(e[a]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function Pr(){for(var e,a,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(a=$e(e))&&(t&&(t+=" "),t+=a);return t}function Hr(e){return typeof e=="object"?Pr(e):e??""}const Ae=[...` 	
\r\f \v\uFEFF`];function qr(e,a,r){var t=e==null?"":""+e;if(a&&(t=t?t+" "+a:a),r){for(var i in r)if(r[i])t=t?t+" "+i:i;else if(t.length)for(var f=i.length,s=0;(s=t.indexOf(i,s))>=0;){var n=s+f;(s===0||Ae.includes(t[s-1]))&&(n===t.length||Ae.includes(t[n]))?t=(s===0?"":t.substring(0,s))+t.substring(n+1):s=n}}return t===""?null:t}function Ne(e,a=!1){var r=a?" !important;":";",t="";for(var i in e){var f=e[i];f!=null&&f!==""&&(t+=" "+i+": "+f+r)}return t}function le(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Vr(e,a){if(a){var r="",t,i;if(Array.isArray(a)?(t=a[0],i=a[1]):t=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var f=!1,s=0,n=!1,_=[];t&&_.push(...Object.keys(t).map(le)),i&&_.push(...Object.keys(i).map(le));var l=0,p=-1;const d=e.length;for(var h=0;h<d;h++){var v=e[h];if(n?v==="/"&&e[h-1]==="*"&&(n=!1):f?f===v&&(f=!1):v==="/"&&e[h+1]==="*"?n=!0:v==='"'||v==="'"?f=v:v==="("?s++:v===")"&&s--,!n&&f===!1&&s===0){if(v===":"&&p===-1)p=h;else if(v===";"||h===d-1){if(p!==-1){var S=le(e.substring(l,p).trim());if(!_.includes(S)){v!==";"&&h++;var u=e.substring(l,h).trim();r+=" "+u+";"}}l=h+1,p=-1}}}}return t&&(r+=Ne(t)),i&&(r+=Ne(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Wr(e,a,r,t,i,f){var s=e.__className;if(T||s!==r||s===void 0){var n=qr(r,t,f);(!T||n!==e.getAttribute("class"))&&(n==null?e.removeAttribute("class"):a?e.className=n:e.setAttribute("class",n)),e.__className=r}else if(f&&i!==f)for(var _ in f){var l=!!f[_];(i==null||l!==!!i[_])&&e.classList.toggle(_,l)}return f}function ue(e,a={},r,t){for(var i in r){var f=r[i];a[i]!==f&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,f,t))}}function Ur(e,a,r,t){var i=e.__style;if(T||i!==a){var f=Vr(a,t);(!T||f!==e.getAttribute("style"))&&(f==null?e.removeAttribute("style"):e.style.cssText=f),e.__style=a}else t&&(Array.isArray(t)?(ue(e,r?.[0],t[0]),ue(e,r?.[1],t[1],"important")):ue(e,r,t));return t}function Q(e,a,r=!1){if(e.multiple){if(a==null)return;if(!Ie(a))return ir();for(var t of e.options)t.selected=a.includes(U(t));return}for(t of e.options){var i=U(t);if(sr(i,a)){t.selected=!0;return}}(!r||a!==void 0)&&(e.selectedIndex=-1)}function ke(e){var a=new MutationObserver(()=>{Q(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),fr(()=>{a.disconnect()})}function ta(e,a,r=a){var t=!0;tr(e,"change",i=>{var f=i?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(f),U);else{var n=e.querySelector(f)??e.querySelector("option:not([disabled])");s=n&&U(n)}r(s)}),he(()=>{var i=a();if(Q(e,i,t),t&&i===void 0){var f=e.querySelector(":checked");f!==null&&(i=U(f),r(i))}e.__value=i,t=!1}),ke(e)}function U(e){return"__value"in e?e.__value:e.value}const q=Symbol("class"),V=Symbol("style"),Oe=Symbol("is custom element"),Le=Symbol("is html");function ia(e){if(T){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var t=e.value;j(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var i=e.checked;j(e,"checked",null),e.checked=i}}};e.__on_r=r,or(r),cr()}}function Yr(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function j(e,a,r,t){var i=Re(e);T&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="loading"&&(e[hr]=r),r==null?e.removeAttribute(a):typeof r!="string"&&De(e).includes(a)?e[a]=r:e.setAttribute(a,r))}function zr(e,a,r,t,i=!1){var f=Re(e),s=f[Oe],n=!f[Le];let _=T&&s;_&&k(!1);var l=a||{},p=e.tagName==="OPTION";for(var h in a)h in r||(r[h]=null);r.class?r.class=Hr(r.class):r[q]&&(r.class=null),r[V]&&(r.style??=null);var v=De(e);for(const g in r){let N=r[g];if(p&&g==="value"&&N==null){e.value=e.__value="",l[g]=N;continue}if(g==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";Wr(e,S,N,t,a?.[q],r[q]),l[g]=N,l[q]=r[q];continue}if(g==="style"){Ur(e,N,a?.[V],r[V]),l[g]=N,l[V]=r[V];continue}var u=l[g];if(!(N===u&&!(N===void 0&&e.hasAttribute(g)))){l[g]=N;var d=g[0]+g[1];if(d!=="$$")if(d==="on"){const E={},o="$$"+g;let c=g.slice(2);var A=Mr(c);if(mr(c)&&(c=c.slice(0,-7),E.capture=!0),!A&&u){if(N!=null)continue;e.removeEventListener(c,l[o],E),l[o]=null}if(N!=null)if(A)e[`__${c}`]=N,yr([c]);else{let m=function(M){l[g].call(this,M)};l[o]=Ir(c,e,m,E)}else A&&(e[`__${c}`]=void 0)}else if(g==="style")j(e,g,N);else if(g==="autofocus")vr(e,!!N);else if(!s&&(g==="__value"||g==="value"&&N!=null))e.value=e.__value=N;else if(g==="selected"&&p)Yr(e,N);else{var b=g;n||(b=Cr(b));var w=b==="defaultValue"||b==="defaultChecked";if(N==null&&!s&&!w)if(f[g]=null,b==="value"||b==="checked"){let E=e;const o=a===void 0;if(b==="value"){let c=E.defaultValue;E.removeAttribute(b),E.defaultValue=c,E.value=E.__value=o?c:null}else{let c=E.defaultChecked;E.removeAttribute(b),E.defaultChecked=c,E.checked=o?c:!1}}else e.removeAttribute(g);else w||v.includes(b)&&(s||typeof N!="string")?(e[b]=N,b in f&&(f[b]=dr)):typeof N!="function"&&j(e,b,N)}}}return _&&k(!0),l}function Ee(e,a,r=[],t=[],i,f=!1){lr(r,t,s=>{var n=void 0,_={},l=e.nodeName==="SELECT",p=!1;if(x(()=>{var v=a(...s.map(O)),S=zr(e,n,v,i,f);p&&l&&"value"in v&&Q(e,v.value);for(let d of Object.getOwnPropertySymbols(_))v[d]||R(_[d]);for(let d of Object.getOwnPropertySymbols(v)){var u=v[d];d.description===ur&&(!n||u!==n[d])&&(_[d]&&R(_[d]),_[d]=L(()=>Dr(e,()=>u))),S[d]=u}n=S}),l){var h=e;he(()=>{Q(h,n.value,!0),ke(h)})}p=!0})}function Re(e){return e.__attributes??={[Oe]:e.nodeName.includes("-"),[Le]:e.namespaceURI===nr}}var Te=new Map;function De(e){var a=e.getAttribute("is")||e.nodeName,r=Te.get(a);if(r)return r;Te.set(a,r=[]);for(var t,i=e,f=Element.prototype;f!==i;){t=gr(i);for(var s in t)t[s].set&&r.push(s);i=_r(i)}return r}/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Br={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Fr=br("<svg><!><!></svg>");function te(e,a){Y(a,!0);const r=H(a,"color",3,"currentColor"),t=H(a,"size",3,24),i=H(a,"strokeWidth",3,2),f=H(a,"absoluteStrokeWidth",3,!1),s=H(a,"iconNode",19,()=>[]),n=G(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var _=Fr();Ee(_,h=>({...Br,...n,width:t(),height:t(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>f()?Number(i())*24/Number(t()):i()]);var l=pr(_);Or(l,17,s,$r,(h,v)=>{var S=Er(()=>Tr(O(v),2));let u=()=>O(S)[0],d=()=>O(S)[1];var A=z(),b=B(A);Rr(b,u,!0,(w,g)=>{Ee(w,()=>({...d()}))}),D(h,A)});var p=Ar(l);Z(p,()=>a.children??F),Nr(_),D(e,_),K()}function Kr(e,a){Y(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=G(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]];te(e,ae({name:"badge-info"},()=>r,{get iconNode(){return t},children:(i,f)=>{var s=z(),n=B(s);Z(n,()=>a.children??F),D(i,s)},$$slots:{default:!0}})),K()}function Zr(e,a){Y(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=G(a,["$$slots","$$events","$$legacy"]);const t=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];te(e,ae({name:"circle-check"},()=>r,{get iconNode(){return t},children:(i,f)=>{var s=z(),n=B(s);Z(n,()=>a.children??F),D(i,s)},$$slots:{default:!0}})),K()}function Gr(e,a){Y(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=G(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]];te(e,ae({name:"octagon-x"},()=>r,{get iconNode(){return t},children:(i,f)=>{var s=z(),n=B(s);Z(n,()=>a.children??F),D(i,s)},$$slots:{default:!0}})),K()}function Xr(e,a){Y(a,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=G(a,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];te(e,ae({name:"triangle-alert"},()=>r,{get iconNode(){return t},children:(i,f)=>{var s=z(),n=B(s);Z(n,()=>a.children??F),D(i,s)},$$slots:{default:!0}})),K()}let Jr=0;const ve=Sr([]);function sa(e){const a=++Jr;let r;switch(e.type){case"success":r=Zr;break;case"warning":r=Xr;break;case"error":r=Gr;break;case"info":default:r=Kr;break}const t={id:a,Icon:r,...e};ve.push(t),jr(a,t.duration??3e3)}function Qr(e){const a=ve.findIndex(r=>r.id===e);a!==-1&&ve.splice(a,1)}function jr(e,a){setTimeout(()=>Qr(e),a)}export{te as I,j as a,sa as b,Hr as c,ta as d,Or as e,$r as i,ia as r,Wr as s,ve as t};
