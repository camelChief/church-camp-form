import"../chunks/DsnmJJEf.js";import{q as He,a1 as at,d as ce,t as q,g as rt,h as Fe,X as m,ae as xt,a3 as wt,a4 as kt,a5 as Je,s as ue,j as ee,C as Nt,k as Mt,r as ge,a8 as St,a6 as ne,aR as je,aB as Ct,aS as et,o as nt,E as Tt,aT as xe,a9 as We,aa as lt,aU as we,aV as At,aW as Ie,ay as Be,b as Et,aX as It,n as Pt,aY as Rt,x as ot,at as Dt,aZ as it,a_ as qt,a$ as Ft,a2 as Ot,b0 as Ht,w as Wt,aF as Bt,P as st,I as Vt,aA as $t,b1 as zt,f as D,_ as h,a0 as d,$ as f,b2 as oe,S as le,a as C,Q as V,R as P,T as z,u as F,b3 as Gt,y as O,aD as R,b4 as Lt,aC as _e,ag as pe,b5 as Yt,aE as Ut,af as Xt}from"../chunks/D04MXYOx.js";import{i as X,c as dt,p as K,r as Y,s as J}from"../chunks/Cwpqr4-g.js";import{s as Z}from"../chunks/Zl-FbxyN.js";import{a as Pe,s as ye,b as tt,r as te,c as Zt,d as be}from"../chunks/C_FnHHg7.js";import{k as Kt,g as Ve,s as G}from"../chunks/DKxXcTMX.js";import"../chunks/CUFjVivc.js";import{g as Qt}from"../chunks/DAL3J5Y-.js";function $e(a,e){return e}function Jt(a,e,t){for(var n=a.items,l=[],i=e.length,r=0;r<i;r++)It(e[r].e,l,!0);var o=i>0&&l.length===0&&t!==null;if(o){var w=t.parentNode;Pt(w),w.append(t),n.clear(),L(a,e[0].prev,e[i-1].next)}Rt(l,()=>{for(var c=0;c<i;c++){var g=e[c];o||(n.delete(g.k),L(a,g.prev,g.next)),Be(g.e,!o)}})}function ze(a,e,t,n,l,i=null){var r=a,o={flags:e,items:new Map,first:null},w=(e&it)!==0;if(w){var c=a;r=q?ce(rt(c)):c.appendChild(He())}q&&Fe();var g=null,S=!1,k=new Map,T=xt(()=>{var y=t();return Tt(y)?y:y==null?[]:nt(y)}),s,p;function _(){jt(p,s,o,k,r,l,e,n,t),i!==null&&(s.length===0?g?We(g):g=ge(()=>i(r)):g!==null&&lt(g,()=>{g=null}))}at(()=>{p??=ot,s=m(T);var y=s.length;if(S&&y===0)return;S=y===0;let v=!1;if(q){var b=wt(r)===kt;b!==(y===0)&&(r=Je(),ce(r),ue(!1),v=!0)}if(q){for(var x=null,N,u=0;u<y;u++){if(ee.nodeType===Nt&&ee.data===Mt){r=ee,v=!0,ue(!1);break}var M=s[u],E=n(M,u);N=Oe(ee,o,x,null,M,E,u,l,e,t),o.items.set(E,N),x=N}y>0&&ce(Je())}if(q)y===0&&i&&(g=ge(()=>i(r)));else if(St()){var H=new Set,$=ne;for(u=0;u<y;u+=1){M=s[u],E=n(M,u);var A=o.items.get(E)??k.get(E);A?(e&(we|xe))!==0&&ct(A,M,u,e):(N=Oe(null,o,null,null,M,E,u,l,e,t,!0),k.set(E,N)),H.add(E)}for(const[I,B]of o.items)H.has(I)||$.skipped_effects.add(B.e);$.add_callback(_)}else _();v&&ue(!0),m(T)}),q&&(r=ee)}function jt(a,e,t,n,l,i,r,o,w){var c=(r&qt)!==0,g=(r&(we|xe))!==0,S=e.length,k=t.items,T=t.first,s=T,p,_=null,y,v=[],b=[],x,N,u,M;if(c)for(M=0;M<S;M+=1)x=e[M],N=o(x,M),u=k.get(N),u!==void 0&&(u.a?.measure(),(y??=new Set).add(u));for(M=0;M<S;M+=1){if(x=e[M],N=o(x,M),u=k.get(N),u===void 0){var E=n.get(N);if(E!==void 0){n.delete(N),k.set(N,E);var H=_?_.next:s;L(t,_,E),L(t,E,H),Re(E,H,l),_=E}else{var $=s?s.e.nodes_start:l;_=Oe($,t,_,_===null?t.first:_.next,x,N,M,i,r,w)}k.set(N,_),v=[],b=[],s=_.next;continue}if(g&&ct(u,x,M,r),(u.e.f&Ie)!==0&&(We(u.e),c&&(u.a?.unfix(),(y??=new Set).delete(u))),u!==s){if(p!==void 0&&p.has(u)){if(v.length<b.length){var A=b[0],I;_=A.prev;var B=v[0],ae=v[v.length-1];for(I=0;I<v.length;I+=1)Re(v[I],A,l);for(I=0;I<b.length;I+=1)p.delete(b[I]);L(t,B.prev,ae.next),L(t,_,B),L(t,ae,A),s=A,_=ae,M-=1,v=[],b=[]}else p.delete(u),Re(u,s,l),L(t,u.prev,u.next),L(t,u,_===null?t.first:_.next),L(t,_,u),_=u;continue}for(v=[],b=[];s!==null&&s.k!==N;)(s.e.f&Ie)===0&&(p??=new Set).add(s),b.push(s),s=s.next;if(s===null)continue;u=s}v.push(u),_=u,s=u.next}if(s!==null||p!==void 0){for(var U=p===void 0?[]:nt(p);s!==null;)(s.e.f&Ie)===0&&U.push(s),s=s.next;var re=U.length;if(re>0){var se=(r&it)!==0&&S===0?l:null;if(c){for(M=0;M<re;M+=1)U[M].a?.measure();for(M=0;M<re;M+=1)U[M].a?.fix()}Jt(t,U,se)}}c&&Dt(()=>{if(y!==void 0)for(u of y)u.a?.apply()}),a.first=t.first&&t.first.e,a.last=_&&_.e;for(var de of n.values())Be(de.e);n.clear()}function ct(a,e,t,n){(n&we)!==0&&je(a.v,e),(n&xe)!==0?je(a.i,t):a.i=t}function Oe(a,e,t,n,l,i,r,o,w,c,g){var S=(w&we)!==0,k=(w&At)===0,T=S?k?Ct(l,!1,!1):et(l):l,s=(w&xe)===0?r:et(r),p={i:s,v:T,k:i,a:null,e:null,prev:t,next:n};try{if(a===null){var _=document.createDocumentFragment();_.append(a=He())}return p.e=ge(()=>o(a,T,s,c),q),p.e.prev=t&&t.e,p.e.next=n&&n.e,t===null?g||(e.first=p):(t.next=p,t.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function Re(a,e,t){for(var n=a.next?a.next.e.nodes_start:t,l=e?e.e.nodes_start:t,i=a.e.nodes_start;i!==null&&i!==n;){var r=Et(i);l.before(i),i=r}}function L(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ea(a,e,t,n,l,i){let r=q;q&&Fe();var o,w,c=null;q&&ee.nodeType===Ft&&(c=ee,Fe());var g=q?ee:a,S;at(()=>{const k=e()||null;var T=Ht;k!==o&&(S&&(k===null?lt(S,()=>{S=null,w=null}):k===w?We(S):Be(S)),k&&k!==w&&(S=ge(()=>{if(c=q?c:document.createElementNS(T,k),Wt(c,c),n){q&&Kt(k)&&c.append(document.createComment(""));var s=q?rt(c):c.appendChild(He());q&&(s===null?ue(!1):ce(s)),n(c,s)}ot.nodes_end=c,g.before(c)})),o=k,o&&(w=o))},Ot),r&&(ue(!0),ce(g))}function Q(a,e,t=e){var n=new WeakSet;Bt(a,"input",async l=>{var i=l?a.defaultValue:a.value;if(i=De(a)?qe(i):i,t(i),ne!==null&&n.add(ne),await st(),i!==(i=e())){var r=a.selectionStart,o=a.selectionEnd;a.value=i??"",o!==null&&(a.selectionStart=r,a.selectionEnd=Math.min(o,a.value.length))}}),(q&&a.defaultValue!==a.value||Vt(e)==null&&a.value)&&(t(De(a)?qe(a.value):a.value),ne!==null&&n.add(ne)),$t(()=>{var l=e();if(a===document.activeElement){var i=zt??ne;if(n.has(i))return}De(a)&&l===qe(a.value)||a.type==="date"&&!l&&!a.value||l!==a.value&&(a.value=l??"")})}function De(a){var e=a.type;return e==="number"||e==="range"}function qe(a){return a===""?null:+a}var ta=D("<figure><img/></figure>"),aa=D('<button class="btn">Back</button>'),ra=D('<button class="btn btn-primary">Next</button>'),na=D('<button class="btn btn-primary">Submit</button>'),la=D('<!> <div class="flex flex-row self-end gap-2 mt-4"><!> <!> <!></div>',1),oa=D('<div><div><!> <div class="card-body gap-4 relative"><div><!></div> <div class="step-bar svelte-1qqvule"></div> <h2 class="card-title"> </h2> <!></div> <div class="scroll-catch svelte-1qqvule"></div></div></div>');function ie(a,e){var t=oa();let n;var l=h(t);let i;var r=h(l);{var o=y=>{var v=ta(),b=h(v);f(v),le(()=>{ye(b,"src",e.imageSrc),ye(b,"alt",e.title)}),C(y,v)};X(r,y=>{e.imageSrc&&y(o)})}var w=d(r,2),c=h(w);let g;var S=h(c);{var k=y=>{var v=V(),b=P(v);dt(b,()=>e.Icon,(x,N)=>{N(x,{size:"16"})}),C(y,v)};X(S,y=>{e.active&&y(k)})}f(c);var T=d(c,4),s=h(T,!0);f(T);var p=d(T,2);{var _=y=>{var v=la(),b=P(v);G(b,()=>e.children??z);var x=d(b,2),N=h(x);{var u=A=>{var I=aa();I.__click=function(...B){e.onback?.apply(this,B)},C(A,I)};X(N,A=>{e.onback&&A(u)})}var M=d(N,2);{var E=A=>{var I=ra();I.__click=function(...B){e.onnext?.apply(this,B)},C(A,I)};X(M,A=>{e.onnext&&A(E)})}var H=d(M,2);{var $=A=>{var I=na();I.__click=function(...B){e.onsubmit?.apply(this,B)},C(A,I)};X(H,A=>{e.onsubmit&&A($)})}f(x),C(y,v)};X(p,y=>{e.active&&y(_)})}f(w),oe(2),f(l),f(t),le((y,v,b)=>{n=Pe(t,1,"card-wrapper w-lg max-w-full svelte-1qqvule",null,n,y),i=Pe(l,1,"card w-lg max-w-full relative bg-base-100",null,i,v),g=Pe(c,1,"step svelte-1qqvule",null,g,b),Z(s,e.title)},[()=>({active:e.active,visited:e.visited}),()=>({"shadow-md":e.active,"bg-base-200":!e.active}),()=>({"shadow-sm":e.active})]),C(a,t)}Ve(["click"]);const ia=9,sa=7,he={perNight:{poweredSite:39,bunkRoom:72,lakesideCabin:138,familyRoom:138,additionalAdult:15,additionalChild:10}};/**
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
 */const da={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ca=Gt("<svg><!><!></svg>");function j(a,e){F(e,!0);const t=K(e,"color",3,"currentColor"),n=K(e,"size",3,24),l=K(e,"strokeWidth",3,2),i=K(e,"absoluteStrokeWidth",3,!1),r=K(e,"iconNode",19,()=>[]),o=Y(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var w=ca();tt(w,S=>({...da,...o,width:n(),height:n(),stroke:t(),"stroke-width":S,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(l())*24/Number(n()):l()]);var c=h(w);ze(c,17,r,$e,(S,k)=>{var T=R(()=>Lt(m(k),2));let s=()=>m(T)[0],p=()=>m(T)[1];var _=V(),y=P(_);ea(y,s,!0,(v,b)=>{tt(v,()=>({...p()}))}),C(S,_)});var g=d(c);G(g,()=>e.children??z),f(w),C(a,w),O()}function ua(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];j(a,J({name:"contact"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function va(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];j(a,J({name:"plus"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function ma(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];j(a,J({name:"receipt-text"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function fa(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];j(a,J({name:"tent-tree"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function ha(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];j(a,J({name:"tent"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function ba(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];j(a,J({name:"trash"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function ga(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];j(a,J({name:"users"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function _a(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];j(a,J({name:"utensils"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}function pa(a,e){F(e,!0);/**
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
 */let t=Y(e,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];j(a,J({name:"x"},()=>t,{get iconNode(){return n},children:(l,i)=>{var r=V(),o=P(r);G(o,()=>e.children??z),C(l,r)},$$slots:{default:!0}})),O()}var ya=D("<br/>Your share of that cost will be <strong> </strong> ",1),xa=D("<p>The total cost of accommodation will be <strong> </strong> <!></p>"),wa=D(`<p class="mb-2">Fill out the fields below to select your accommodation preference and
        receive a cost estimate for your accommodation. A final total cost will
        be provided at the end of the form.</p> <div class="flex flex-col gap-2"><p class="label whitespace-normal">Arrival/Departure</p> <label class="select"><span class="label">arrive</span> <select id="arrival" class="select"><option>Friday Evening</option><option>Saturday Morning</option><option>Saturday Afternoon</option></select></label> <label class="select"><span class="label">depart</span> <select id="departure" class="select"><option disabled>Departing</option><option>Saturday Afternoon</option><option>Sunday Morning</option><option>Sunday Afternoon</option></select></label></div> <div class="flex flex-col gap-2"><p class="label whitespace-normal"> </p> <div class="flex gap-2"><label class="input"><input type="text" id="adults-count"/> <span class="label">adults</span></label> <label class="input"><input type="text" id="children-count"/> <span class="label">children</span></label></div> <p class="label whitespace-normal"> </p></div> <div class="flex flex-col"><label for="accommodation-type" class="label">Accommodation Type</label> <select id="accommodation-type" class="select"><option>Powered Site</option><option>Bunk Room</option><option>Lakeside Cabin</option><option>Family Room</option></select> <p class="label mt-2 whitespace-normal">Some accommodation types are unavailable due to the size of your party.</p></div> <!>`,1);function ka(a,e){F(e,!0);let t=K(e,"formState",15),n=R(()=>{const v=t().arrivalTime==="friday evening",b=t().departureTime==="sunday morning"||t().departureTime==="sunday afternoon";let x=0;return v&&(x+=1),b&&(x+=1),x}),l=_e("0"),i=_e("0"),r=R(()=>{const v=parseInt(m(l)||"0"),b=parseInt(m(i)||"0");return v+b>0}),o=R(()=>{let b=t().familyMembers.filter(x=>x.ageGroup==="adult").length+1;return b+=parseInt(m(l)||"0"),b}),w=R(()=>{let b=t().familyMembers.filter(x=>x.ageGroup==="child").length;return b+=parseInt(m(i)||"0"),b}),c=R(()=>m(o)+m(w)),g=R(()=>m(c)>sa),S=R(()=>m(c)>ia),k=R(()=>t().preferredAccommodationType!==""),T=R(()=>{const v=t().preferredAccommodationType,b=he.perNight;let x=0;switch(v){case"powered site":x=b.poweredSite;break;case"bunk room":x=b.bunkRoom;break;case"lakeside cabin":x=b.lakesideCabin;break;case"family room":x=b.familyRoom;break}return x}),s=R(()=>{const v=he.perNight,b=v.additionalAdult,x=m(o)>2?(m(o)-2)*b:0,N=v.additionalChild,u=m(w)*N;return m(T)+x+u}),p=R(()=>{if(!parseInt(m(l)||"0")&&!parseInt(m(i)||"0"))return m(s);const v=m(T)/m(c)*(t().familyMembers.length+1);if(m(c)<=2)return v;const b=(m(o)-2)*he.perNight.additionalAdult/m(o)*t().familyMembers.filter(N=>N.ageGroup==="adult").length,x=t().familyMembers.filter(N=>N.ageGroup==="child").length*he.perNight.additionalChild;return v+b+x}),_=R(()=>m(s)*m(n)),y=R(()=>m(p)*m(n));ie(a,{get Icon(){return ha},title:"Accommodation",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(v,b)=>{var x=wa(),N=d(P(x),2),u=d(h(N),2),M=d(h(u),2),E=h(M);E.value=E.__value="friday evening";var H=d(E);H.value=H.__value="saturday morning";var $=d(H);$.value=$.__value="saturday afternoon",f(M),f(u);var A=d(u,2),I=d(h(A),2),B=h(I);B.value=B.__value="default";var ae=d(B);ae.value=ae.__value="saturday afternoon";var U=d(ae);U.value=U.__value="sunday morning";var re=d(U);re.value=re.__value="sunday afternoon",f(I),f(A),f(N);var se=d(N,2),de=h(se),ut=h(de);f(de);var ke=d(de,2),Ne=h(ke),Ge=h(Ne);te(Ge),oe(2),f(Ne);var Le=d(Ne,2),Ye=h(Le);te(Ye),oe(2),f(Le),f(ke);var Ue=d(ke,2),vt=h(Ue);f(Ue),f(se);var Me=d(se,2),ve=d(h(Me),2),Se=h(ve);Se.value=Se.__value="powered site";var me=d(Se);me.value=me.__value="bunk room";var fe=d(me);fe.value=fe.__value="lakeside cabin";var Xe=d(fe);Xe.value=Xe.__value="family room",f(ve);var mt=d(ve,2);let Ze;f(Me);var ft=d(Me,2);{var ht=W=>{var Ce=xa(),Te=d(h(Ce)),bt=h(Te);f(Te);var Ke=d(Te),gt=d(Ke);{var _t=Ae=>{var Qe=ya(),Ee=d(P(Qe),2),pt=h(Ee);f(Ee);var yt=d(Ee);le(()=>{Z(pt,`$${m(y)??""}`),Z(yt,`. ($${m(p)??""}/night)`)}),C(Ae,Qe)};X(gt,Ae=>{m(r)&&Ae(_t)})}f(Ce),le(()=>{Z(bt,`$${m(_)??""}`),Z(Ke,`. ($${m(s)??""}/night) `)}),C(W,Ce)};X(ft,W=>{m(k)&&W(ht)})}le(W=>{Z(ut,`${t().familyMembers.length?"We":"I"}
            will be sharing ${t().familyMembers.length?"our":"my"}
            accommodation with...`),Z(vt,`Any additional families or individuals who will be bunking with
            you. Exclude yourself
            ${t().familyMembers.length?"and your family":""}
            from the count.`),me.disabled=m(S),fe.disabled=m(g),Ze=Zt(mt,"",Ze,W)},[()=>({display:m(g)?"block":"none"})]),be(M,()=>t().arrivalTime,W=>t(t().arrivalTime=W,!0)),be(I,()=>t().departureTime,W=>t(t().departureTime=W,!0)),Q(Ge,()=>m(l),W=>pe(l,W)),Q(Ye,()=>m(i),W=>pe(i,W)),be(ve,()=>t().preferredAccommodationType,W=>t(t().preferredAccommodationType=W,!0)),C(v,x)}}),O()}function Na(a,e){e().familyMembers.push({name:"",ageGroup:"adult"})}var Ma=D('<tr><td><input type="text" class="input"/></td><td><select class="select"><option>Adult</option><option>Child (Under 18)</option></select></td><td><button class="btn btn-error btn-square"><!></button></td></tr>'),Sa=D(`<p class="mb-2">If you're bringing your family and would like to register them also,
        you can include them here.</p> <table class="table table-xs"><thead><tr><th>First Name</th><th>Age Group</th><th class="w-1/100"></th></tr></thead><tbody><!><tr><td></td><td></td><td><button class="btn btn-success btn-square"><!></button></td></tr></tbody></table>`,1);function Ca(a,e){F(e,!0);let t=K(e,"formState",15);function n(l){t().familyMembers.splice(l,1)}ie(a,{get Icon(){return ga},title:"Family Details",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(l,i)=>{var r=Sa(),o=d(P(r),2),w=d(h(o)),c=h(w);ze(c,17,()=>t().familyMembers,$e,(s,p,_)=>{var y=Ma(),v=h(y),b=h(v);te(b),ye(b,"id",`family-member-${_}-name`),f(v);var x=d(v),N=h(x);ye(N,"id",`family-member-${_}-age`);var u=h(N);u.value=u.__value="adult";var M=d(u);M.value=M.__value="child",f(N),f(x);var E=d(x),H=h(E);H.__click=()=>n(_);var $=h(H);ba($,{size:16}),f(H),f(E),f(y),Q(b,()=>t().familyMembers[_].name,A=>t(t().familyMembers[_].name=A,!0)),be(N,()=>t().familyMembers[_].ageGroup,A=>t(t().familyMembers[_].ageGroup=A,!0)),C(s,y)});var g=d(c),S=d(h(g),2),k=h(S);k.__click=[Na,t];var T=h(k);va(T,{size:16}),f(k),f(S),f(g),f(w),f(o),C(l,r)}}),O()}Ve(["click"]);var Ta=D(`<div class="flex flex-col"><label for="dietary-requirements" class="label">Dietary Requirements</label> <input type="text" id="dietary-requirements" class="input"/></div> <div class="flex flex-col"><label for="notes" class="label">Anything else you'd like us to know?</label> <textarea id="notes" class="textarea w-full"></textarea></div>`,1);function Aa(a,e){F(e,!0);let t=K(e,"formState",15);ie(a,{get Icon(){return _a},title:"Other",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(n,l)=>{var i=Ta(),r=P(i),o=d(h(r),2);te(o),f(r);var w=d(r,2),c=d(h(w),2);Yt(c),f(w),Q(o,()=>t().dietaryRequirements,g=>t(t().dietaryRequirements=g,!0)),Q(c,()=>t().notes,g=>t(t().notes=g,!0)),C(n,i)}}),O()}var Ea=D('<dialog id="costBreakdownModal" class="modal"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-square btn-ghost absolute right-4 top-4"><!></button></form> <h3 class="text-lg font-bold mb-4">Cost Breakdown</h3> <div class="overflow-x-auto rounded-box border border-base-300"><table class="table table-sm sm:table-md"><colgroup><col style="min-width: 8rem"/><col/><col/><col/><col style="min-width: 6rem;"/></colgroup><tbody><tr class="bg-base-200"><th>Item</th><th>Rate</th><th>Qty</th><th>Subtotal</th><th>Your Share</th></tr><tr class="bg-base-200"><td colspan="5"><strong>Accommodation</strong><br/> Subtotal is calculated based on all occupants and is then split into individual shares. You only need to pay your share.</td></tr><tr><td>Family Room</td><td>$138</td><td>1</td><td>$138</td><td class="bg-primary/5">$138</td></tr><tr><td>Extra Adult</td><td>$15</td><td>2</td><td>$30</td><td class="bg-primary/5">$15</td></tr><tr><td>Extra Child</td><td>$10</td><td>3</td><td>$30</td><td class="bg-primary/5">-</td></tr><tr><th colspan="3">Per Night</th><th>$198</th><th class="bg-primary/5">$84</th></tr><tr><th colspan="3">Total (2 Nights)</th><th>$396</th><th class="bg-primary/5 border border-primary">$168</th></tr><tr class="bg-base-200"><td colspan="5"><strong>Shared</strong><br/> The Lakeside Hall booking cost is estimated based on expected attendance. Saturday dinner is a per-person contribution.</td></tr><tr><td>Lakeside Hall</td><td>$40</td><td>1</td><td></td><td class="bg-primary/5">$40</td></tr><tr><td>Saturday Dinner</td><td>$5</td><td>2</td><td></td><td class="bg-primary/5">$10</td></tr><tr><th colspan="4">Total</th><th class="bg-primary/5 border border-primary">$50</th></tr><tr><th colspan="4">Grand Total</th><th class="bg-primary border border-primary text-primary-content">$218</th></tr></tbody></table></div></div></dialog>');function Ia(a){var e=Ea(),t=h(e),n=h(t),l=h(n),i=h(l);pa(i,{size:16}),f(l),f(n),oe(4),f(t),f(e),C(a,e)}var Pa=()=>costBreakdownModal.showModal(),Ra=D(`<p> <strong> </strong>. <button class="link label">How'd we arrive at that figure?</button></p> <p>Please pay this amount into the church account before [cut off date].
        When you submit this form an email will be sent to you with your total,
        the church account details and more information about camp.</p> <p><!> Can't wait to see you there!</p> <!>`,1);function Da(a,e){F(e,!0),ie(a,{get Icon(){return ma},title:"Summary",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},get onsubmit(){return e.onsubmit},children:(t,n)=>{var l=Ra(),i=P(l),r=h(i),o=d(r),w=h(o);f(o);var c=d(o,2);c.__click=[Pa],f(i);var g=d(i,4),S=h(g);{var k=s=>{var p=Ut(`Once everything is booked, we'll let you know what cabin/room\r
            number you'll be in.`);C(s,p)};X(S,s=>{e.formState.preferredAccommodationType!=="powered site"&&s(k)})}oe(),f(g);var T=d(g,2);Ia(T),le(()=>{Z(r,`The total cost for the weekend for
        ${e.formState.familyMembers.length?"your family":"you"} is `),Z(w,`$${e.formState.costs.grandTotal??""}`)}),C(t,l)}}),O()}Ve(["click"]);var qa=D(`<p>Welcome! We're excited to spend some time away together in 2026! In case you missed it, we'll be spending the weekend together:</p> <ul class="pl-4"><li>at <strong>Camp Elim</strong> in Forster</li> <li>from the evening of <strong>Friday 30th Jan</strong></li> <li>to the afternoon of <strong>Sunday 1st Feb</strong>.</li></ul> <p>We look forward to seeing you there! Follow the prompts to register.</p>`,1);function Fa(a,e){ie(a,{imageSrc:"https://www.multipure.com/product_images/uploaded_images/family-double-piggyback-small.jpg",get Icon(){return fa},title:"2026 Church Weekend Away Registration",get active(){return e.active},get visited(){return e.visited},get onnext(){return e.onnext},children:(t,n)=>{var l=qa();oe(4),C(t,l)}})}var Oa=D('<div class="flex gap-2"><div class="flex flex-col"><label for="first-name" class="label">First Name</label> <input type="text" id="first-name" class="input"/></div> <div class="flex flex-col"><label for="surname" class="label">Surname</label> <input type="text" id="surname" class="input"/></div></div> <div class="flex flex-col"><label for="email" class="label">Email Address</label> <input type="email" id="email" class="input"/></div> <div class="flex flex-col"><label for="mobile" class="label">Mobile Number</label> <input type="tel" id="mobile" class="input"/></div>',1);function Ha(a,e){F(e,!0);let t=K(e,"formState",15);ie(a,{get Icon(){return ua},title:"Your Details",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(n,l)=>{var i=Oa(),r=P(i),o=h(r),w=d(h(o),2);te(w),f(o);var c=d(o,2),g=d(h(c),2);te(g),f(c),f(r);var S=d(r,2),k=d(h(S),2);te(k),f(S);var T=d(S,2),s=d(h(T),2);te(s),f(T),Q(w,()=>t().firstName,p=>t(t().firstName=p,!0)),Q(g,()=>t().surname,p=>t(t().surname=p,!0)),Q(k,()=>t().emailAddress,p=>t(t().emailAddress=p,!0)),Q(s,()=>t().mobileNumber,p=>t(t().mobileNumber=p,!0)),C(n,i)}}),O()}var Wa=D('<div class="flex flex-col items-center gap-4 p-4"></div>');function Xa(a,e){F(e,!0);const t=[Fa,Ha,Ca,ka,Aa,Da];let n=_e(0),l=_e(Xt({firstName:"",surname:"",emailAddress:"",mobileNumber:"",familyMembers:[],arrivalTime:"friday evening",departureTime:"sunday afternoon",partySize:0,preferredAccommodationType:"",costs:{accommodationTotal:0,accommodationSplit:0,sharedTotal:0,grandTotal:0},dietaryRequirements:"",notes:""}));const i=()=>w(m(n)-1),r=()=>w(m(n)+1),o=()=>Qt("/form-submitted");async function w(g){pe(n,g,!0),await st(),document.getElementsByClassName("scroll-catch")[g].scrollIntoView({behavior:"smooth"})}var c=Wa();ze(c,21,()=>t,$e,(g,S,k)=>{var T=V(),s=P(T);{let p=R(()=>k===m(n)),_=R(()=>k<m(n)),y=R(()=>k<t.length-1?r:void 0),v=R(()=>k===t.length-1?o:void 0);dt(s,()=>m(S),(b,x)=>{x(b,{get active(){return m(p)},get visited(){return m(_)},onback:k>0?i:void 0,get onnext(){return m(y)},get onsubmit(){return m(v)},get formState(){return m(l)},set formState(N){pe(l,N,!0)}})})}C(g,T)}),f(c),C(a,c),O()}export{Xa as component};
