import"../chunks/DsnmJJEf.js";import{i as Ut,b4 as zt,bc as Ht,as as Yt,e as ut,aX as vt,an as Oe,t as xt,B as mt,at as ft,aW as jt,au as ht,bd as Zt,aV as Jt,p as H,r as ae,v as G,w as le,x as ne,y as h,q as Y,b0 as Te,_ as M,$ as n,aA as o,a1 as l,a0 as _e,az as O,u as Ct,aF as ge,a5 as r,aE as Z,a8 as fe,be as Xt,aD as _t,a9 as bt}from"../chunks/C2THk1Zg.js";import{I as ce,s as re,a as X,e as pe,i as xe,b as Be,r as te,c as Ie}from"../chunks/CDBVbDT6.js";import{i as q,c as kt,b as be}from"../chunks/DWs90C11.js";import{b as Qt,r as Kt,g as $t}from"../chunks/DJcBhHa3.js";import{s as x}from"../chunks/CbIbb3by.js";import{s as ue,r as ve,p as Pe}from"../chunks/8jUZPFRg.js";import{s as wt}from"../chunks/DtpM97OC.js";import{T as ea}from"../chunks/9psdPfhS.js";const ta=[];function aa(a,e=!1,t=!1){return Ye(a,new Map,"",ta,null,t)}function Ye(a,e,t,i,s=null,m=!1){if(typeof a=="object"&&a!==null){var u=e.get(a);if(u!==void 0)return u;if(a instanceof Map)return new Map(a);if(a instanceof Set)return new Set(a);if(Ut(a)){var c=Array(a.length);e.set(a,c),s!==null&&e.set(s,c);for(var S=0;S<a.length;S+=1){var b=a[S];S in a&&(c[S]=Ye(b,e,t,i,null,m))}return c}if(zt(a)===Ht){c={},e.set(a,c),s!==null&&e.set(s,c);for(var T in a)c[T]=Ye(a[T],e,t,i,null,m);return c}if(a instanceof Date)return structuredClone(a);if(typeof a.toJSON=="function"&&!m)return Ye(a.toJSON(),e,t,i,a)}if(a instanceof EventTarget)return a;try{return structuredClone(a)}catch{return a}}function ra(a,e,t){Yt(()=>{var i=ut(()=>e(a,t?.())||{});if(i?.destroy)return()=>i.destroy()})}function ye(a,e,t=e){var i=new WeakSet;vt(a,"input",async s=>{var m=s?a.defaultValue:a.value;if(m=ot(a)?st(m):m,t(m),Oe!==null&&i.add(Oe),await xt(),m!==(m=e())){var u=a.selectionStart,c=a.selectionEnd;a.value=m??"",c!==null&&(a.selectionStart=u,a.selectionEnd=Math.min(c,a.value.length))}}),(mt&&a.defaultValue!==a.value||ut(e)==null&&a.value)&&(t(ot(a)?st(a.value):a.value),Oe!==null&&i.add(Oe)),ft(()=>{var s=e();if(a===document.activeElement){var m=Zt??Oe;if(i.has(m))return}ot(a)&&s===st(a.value)||a.type==="date"&&!s&&!a.value||s!==a.value&&(a.value=s??"")})}const nt=new Set;function yt(a,e,t,i,s=i){var m=t.getAttribute("type")==="checkbox",u=a;let c=!1;if(e!==null)for(var S of e)u=u[S]??=[];u.push(t),vt(t,"change",()=>{var b=t.__value;m&&(b=pt(u,b,t.checked)),s(b)},()=>s(m?[]:null)),ft(()=>{var b=i();if(mt&&t.defaultChecked!==t.checked){c=!0;return}m?(b=b||[],t.checked=b.includes(t.__value)):t.checked=Jt(t.__value,b)}),jt(()=>{var b=u.indexOf(t);b!==-1&&u.splice(b,1)}),nt.has(u)||(nt.add(u),ht(()=>{u.sort((b,T)=>b.compareDocumentPosition(T)===4?-1:1),nt.delete(u)})),ht(()=>{if(c){var b;if(m)b=pt(u,b,t.checked);else{var T=u.find(V=>V.checked);b=T?.__value}s(b)}})}function He(a,e,t=e){vt(a,"change",i=>{var s=i?a.defaultChecked:a.checked;t(s)}),(mt&&a.defaultChecked!==a.checked||ut(e)==null)&&t(a.checked),ft(()=>{var i=e();a.checked=!!i})}function pt(a,e,t){for(var i=new Set,s=0;s<a.length;s+=1)a[s].checked&&i.add(a[s].__value);return t||i.delete(e),Array.from(i)}function ot(a){var e=a.type;return e==="number"||e==="range"}function st(a){return a===""?null:+a}function ia(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];ce(a,ue({name:"badge-question-mark"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function la(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];ce(a,ue({name:"bed"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function na(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];ce(a,ue({name:"contact"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function At(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(a,ue({name:"plus"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function oa(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];ce(a,ue({name:"receipt-text"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function sa(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];ce(a,ue({name:"tent"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function Tt(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ce(a,ue({name:"trash"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function St(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ce(a,ue({name:"users"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function da(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ce(a,ue({name:"utensils"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function ca(a,e){H(e,!0);/**
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
 */let t=ve(e,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(a,ue({name:"x"},()=>t,{get iconNode(){return i},children:(s,m)=>{var u=ae(),c=G(u);le(c,()=>e.children??ne),h(s,u)},$$slots:{default:!0}})),Y()}function ua(a,e){return Qt+Kt(a,e)}const va="https://script.google.com/macros/s/AKfycbynSr8-qI_AVqN_He9PEEh8Qd6uHxiDcZwRab93EiZW6yw2WXzvxlkwUSPYtFe2eYPTEg/exec",dt=8,ct=[{name:"Powered Site",rate:39,sleeps:20},{name:"Bunk Room",rate:72,sleeps:9},{name:"Lakeside Cabin",rate:138,sleeps:7,disabled:!0},{name:"Family Room (Unit)",rate:138,sleeps:13}],ma=["Friday Evening","Saturday Morning","Saturday Afternoon (Before Dinner)","Saturday Evening (After Dinner)"],fa=["Saturday Afternoon (Before Dinner)","Saturday Evening (After Dinner)","Sunday Morning","Sunday Afternoon"],ga=[{value:"myself",label:"Myself"},{value:"family",label:"Myself and my spouse/family"}],ee={nightly:{additionalAdult:15,additionalChild:10},daily:{individual:5,family:15}},ha=[{value:"nobody",label:"Nobody else"},{value:"friends",label:"Some friends"},{value:"anyone",label:"Open to anyone"}];var _a=M("<figure><img/></figure>"),ba=M('<button class="btn">Back</button>'),ya=(a,e,t)=>{e()&&t.onnext()},pa=M('<button class="btn btn-primary">Next</button>'),xa=(a,e,t)=>{e()&&t.onsubmit()},Ca=M('<span class="loading loading-spinner"></span>'),ka=M('<button class="btn btn-primary"><!></button>'),wa=M('<!> <div></div> <div class="flex flex-row self-end gap-2 mt-4"><!> <!> <!></div>',1),Aa=M('<div><div><!> <div class="card-body gap-4 relative"><div><!></div> <div class="step-bar svelte-1yvm30a"></div> <h2 class="card-title"> </h2> <!></div> <div class="scroll-catch svelte-1yvm30a"></div></div></div>');function Ce(a,e){H(e,!0);function t(){if(!e.controls)return!0;let d="";return e.controls.forEach(g=>{const f=i(g);f&&!d&&(d=f)}),d?(wt({message:d,type:"warning"}),!1):!0}function i(d){let g=[];d.type==="radio"&&(g=Array.from(d.field.querySelectorAll('input[type="radio"]')));let f,A,I;switch(d.type){case"input":A=d.field.value,I="input-error";break;case"select":if(f=d.field,f.disabled)return null;A=f.value,I="select-error";break;case"radio":A=g.find(E=>E.checked)?.value??"",I="radio-error";break;default:throw new Error(`Unknown control type: ${d.type}`)}d.type==="radio"?g.forEach(E=>E.classList.remove("radio-error")):d.field.classList.remove(I);for(const E of d.validators){const D=E(A);if(D)return d.type==="radio"?g.forEach(P=>P.classList.add("radio-error")):d.field.classList.add(I),D}return null}const s=d=>{Ct(()=>{if(!e.controls)return;const g=new AbortController;return e.controls.forEach(f=>{switch(f.type){case"input":f.field.addEventListener("input",()=>f.field.classList.remove("input-error"),{signal:g.signal});break;case"select":f.field.addEventListener("change",()=>f.field.classList.remove("select-error"),{signal:g.signal});break;case"radio":const A=Array.from(f.field.querySelectorAll('input[type="radio"]'));A.forEach(I=>I.addEventListener("change",()=>A.forEach(E=>{E.classList.remove("radio-error")}),{signal:g.signal}))}}),()=>g.abort()})};var m=Aa();let u;var c=n(m);let S;var b=n(c);{var T=d=>{var g=_a(),f=n(g);l(g),O(()=>{X(f,"src",e.imageSrc),X(f,"alt",e.title)}),h(d,g)};q(b,d=>{e.imageSrc&&d(T)})}var V=o(b,2),R=n(V);let L;var N=n(R);{var W=d=>{var g=ae(),f=G(g);kt(f,()=>e.Icon,(A,I)=>{I(A,{size:"16"})}),h(d,g)};q(N,d=>{e.active&&d(W)})}l(R);var y=o(R,4),v=n(y,!0);l(y);var C=o(y,2);{var k=d=>{var g=wa(),f=G(g);le(f,()=>e.children??ne);var A=o(f,2);ra(A,_=>s?.());var I=o(A,2),E=n(I);{var D=_=>{var w=ba();w.__click=function(...Q){e.onback?.apply(this,Q)},O(()=>w.disabled=e.formState?.isLoading),h(_,w)};q(E,_=>{e.onback&&_(D)})}var P=o(E,2);{var F=_=>{var w=pa();w.__click=[ya,t,e],O(()=>w.disabled=e.formState?.isLoading),h(_,w)};q(P,_=>{e.onnext&&_(F)})}var j=o(P,2);{var p=_=>{var w=ka();w.__click=[xa,t,e];var Q=n(w);{var J=K=>{var se=Ca();h(K,se)},oe=K=>{var se=ge("Submit");h(K,se)};q(Q,K=>{e.formState?.isLoading?K(J):K(oe,!1)})}l(w),O(()=>w.disabled=e.formState?.isLoading),h(_,w)};q(j,_=>{e.onsubmit&&_(p)})}l(I),h(d,g)};q(C,d=>{e.active&&d(k)})}l(V),_e(2),l(c),l(m),O((d,g,f)=>{u=re(m,1,"card-wrapper w-lg max-w-full svelte-1yvm30a",null,u,d),S=re(c,1,"card w-lg max-w-full relative bg-base-100",null,S,g),L=re(R,1,"step svelte-1yvm30a",null,L,f),x(v,e.title)},[()=>({active:e.active,visited:e.visited}),()=>({"shadow-md":e.active,"bg-base-200":!e.active}),()=>({"shadow-sm":e.active})]),h(a,m),Y()}Te(["click"]);const de=a=>a===""?"Please fill in the required fields.":null,Ta=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?null:"Please enter a valid email address.",Sa=a=>(a=a.replace(/\s+/g,""),/^(?:\+614|04)\d{8}$/.test(a)?null:"Please enter a valid mobile number.");var Ma=(a,e)=>e.calculateCosts(),Na=M("<option> </option>"),Ea=(a,e)=>e.calculateCosts(),Fa=M("<option> </option>"),Ia=(a,e)=>e.calculateCosts(),Pa=M("<option> </option>"),Va=M("<br/>Your share of that cost will be <strong> </strong> ",1),Da=M('<p class="mt-4">The total cost of accommodation will be <strong> </strong> <!></p>'),Ra=M(`<p class="mb-2">Fill out the fields below to select your accommodation preference and
		receive a cost estimate for your accommodation. Final costs will be provided
		at the end of the form.</p> <div class="flex flex-col gap-1"><p class="label whitespace-normal">Arrival/Departure</p> <label class="select mb-1"><span class="label">arrive</span> <select id="arrival-time" class="select"></select></label> <label class="select"><span class="label">depart</span> <select id="departure-time" class="select"></select></label></div> <div class="flex flex-col gap-1"><div class="flex items-center gap-1"><label for="accommodation-type" class="label">Accommodation Type</label> <div class="tooltip"><div class="tooltip-content text-left"><p class="mb-2">More information can be found on the Camp Elim website but the key
						differences between the accommodation types are:</p> <ul class="list-disc pl-4"><li class="mb-1"><strong>Powered Site</strong> - campsite, shared camp bathroom + fridge</li> <li class="mb-1"><strong>Bunk Room</strong> - private bathroom, shared camp fridge,
							sleeps 9</li> <li class="mb-1"><strong>Lakeside Cabin</strong> - private kitchen, bathroom + living
							space, sleeps 7</li> <li><strong>Family Room (Unit)</strong> - private kitchenette, bathroom
							+ living space, sleeps 13</li></ul></div> <!></div></div> <select id="accommodation-type" class="select"></select> <p><!></p></div> <!>`,1);function La(a,e){H(e,!0);let t=Pe(e,"formValues",15),i=Z(()=>t().sharingWith==="friends"?t().bunkmates.length:0),s=Z(()=>t().payingFor==="family"?t().familyMembers.length:0),m=Z(()=>1+r(s)+r(i)),u=Z(()=>{const b=ct.map(T=>T.sleeps);return r(m)>Math.min(...b)}),c=Z(()=>t().stayingNights===0);Ct(()=>{if(r(c)){const b=S["accommodation-type"].field;if(!b)return;b.value="",t(t().preferredAccommodationType="",!0)}});let S=fe({"accommodation-type":{field:null,type:"select",validators:[de]}});{let b=Z(()=>Object.values(S));Ce(a,{get Icon(){return sa},title:"Accommodation",get controls(){return r(b)},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(T,V)=>{var R=Ra(),L=o(G(R),2),N=o(n(L),2),W=o(n(N),2);W.__change=[Ma,e],pe(W,21,()=>ma,xe,(p,_)=>{var w=Na(),Q=n(w,!0);l(w);var J={};O(()=>{x(Q,r(_)),J!==(J=r(_))&&(w.value=(w.__value=r(_))??"")}),h(p,w)}),l(W),l(N);var y=o(N,2),v=o(n(y),2);v.__change=[Ea,e],pe(v,21,()=>fa,xe,(p,_)=>{var w=Fa(),Q=n(w,!0);l(w);var J={};O(()=>{x(Q,r(_)),J!==(J=r(_))&&(w.value=(w.__value=r(_))??"")}),h(p,w)}),l(v),l(y),l(L);var C=o(L,2),k=n(C),d=o(n(k),2),g=o(n(d),2);ia(g,{size:16}),l(d),l(k);var f=o(k,2);f.__change=[Ia,e],pe(f,21,()=>ct,xe,(p,_)=>{var w=Pa(),Q=n(w,!0);l(w);var J={};O(()=>{w.disabled=r(_).disabled||r(_).sleeps<r(m),x(Q,r(_).name),J!==(J=r(_).name)&&(w.value=(w.__value=r(_).name)??"")}),h(p,w)}),l(f),be(f,p=>S["accommodation-type"].field=p,()=>S?.["accommodation-type"]?.field);var A=o(f,2);let I;var E=n(A);{var D=p=>{var _=ge("No need to select accommodation if you're just planning a day trip!");h(p,_)},P=p=>{var _=ge("Some accommodation types are unavailable due to the size of your party.");h(p,_)};q(E,p=>{r(c)?p(D):p(P,!1)})}l(A),l(C);var F=o(C,2);{var j=p=>{var _=Da(),w=o(n(_)),Q=n(w);l(w);var J=o(w),oe=o(J);{var K=se=>{var Ve=Va(),Se=o(G(Ve),2),je=n(Se);l(Se);var B=o(Se);O(()=>{x(je,`$${e.accommodationCosts.split.total??""}`),x(B,`. ($${e.accommodationCosts.split.nightly.total??""}/night)`)}),h(se,Ve)};q(oe,se=>{r(i)>0&&se(K)})}l(_),O(()=>{x(Q,`$${e.accommodationCosts.total.total??""}`),x(J,`. ($${e.accommodationCosts.total.nightly.total??""}/night) `)}),h(p,_)};q(F,p=>{t().preferredAccommodationType&&p(j)})}O(p=>{f.disabled=r(c),I=re(A,1,"label whitespace-normal",null,I,p)},[()=>({hidden:!r(u)&&!r(c)})]),Be(W,()=>t().arrivalTime,p=>t(t().arrivalTime=p,!0)),Be(v,()=>t().departureTime,p=>t(t().departureTime=p,!0)),Be(f,()=>t().preferredAccommodationType,p=>t(t().preferredAccommodationType=p,!0)),h(T,R)},$$slots:{default:!0}})}Y()}Te(["change"]);function Wa(a,e,t,i){e.push({field:null,type:"input",validators:[de]}),t().bunkmates.push({name:"",ageGroup:"adult"}),i.calculateCosts()}var qa=M('<label class="label">Given Name</label>'),Oa=M('<label class="label">Age Group</label>'),Ba=(a,e)=>e.calculateCosts(),Ga=M('<div class="flex gap-2 items-end self-stretch"><div class="flex flex-col gap-1 grow"><!> <input type="text" class="input"/></div> <div class="flex flex-col gap-1"><!> <select class="select"><option>Adult</option><option>Child (Under 18)</option></select></div> <button><!></button></div>'),Ua=M('<p class="mb-2"> </p> <div class="flex flex-col items-end gap-2"><!> <button class="btn btn-success btn-square"><!></button></div>',1);function za(a,e){H(e,!0);let t=Pe(e,"formValues",15);const i=fe(t().bunkmates.map(()=>({field:null,type:"input",validators:[de]})));function s(m){i.splice(m,1),t().bunkmates.splice(m,1),e.calculateCosts()}Ce(a,{get Icon(){return St},title:"Bunkmates Details",get controls(){return i},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(m,u)=>{var c=Ua(),S=G(c),b=n(S);l(S);var T=o(S,2),V=n(T);pe(V,17,()=>t().bunkmates,xe,(N,W,y)=>{var v=Ga(),C=n(v),k=n(C);{var d=p=>{var _=qa();X(_,"for",`bunkmate-${y}-name`),h(p,_)};q(k,p=>{y===0&&p(d)})}var g=o(k,2);te(g),X(g,"id",`bunkmate-${y}-name`),be(g,(p,_)=>i[_].field=p,p=>i?.[p]?.field,()=>[y]),l(C);var f=o(C,2),A=n(f);{var I=p=>{var _=Oa();X(_,"for",`bunkmate-${y}-age`),h(p,_)};q(A,p=>{y===0&&p(I)})}var E=o(A,2);X(E,"id",`bunkmate-${y}-age`),E.__change=[Ba,e];var D=n(E);D.value=D.__value="adult";var P=o(D);P.value=P.__value="child",l(E),l(f);var F=o(f,2);F.__click=()=>s(y),re(F,1,`btn btn-error btn-square ${y===0?"btn-disabled":""}`);var j=n(F);Tt(j,{size:16}),l(F),l(v),ye(g,()=>t().bunkmates[y].name,p=>t(t().bunkmates[y].name=p,!0)),Be(E,()=>t().bunkmates[y].ageGroup,p=>t(t().bunkmates[y].ageGroup=p,!0)),h(N,v)});var R=o(V,2);R.__click=[Wa,i,t,e];var L=n(R);At(L,{size:16}),l(R),l(T),O(()=>x(b,`Add the details for any friends
		${t().payingFor==="family"?"(outside your family)":""}
		who will be sharing your accommodation. Use the + (plus) button below to add
		bunkmates.`)),h(m,c)},$$slots:{default:!0}}),Y()}Te(["change","click"]);function Ha(a,e,t,i){e.push({field:null,type:"input",validators:[de]}),t().familyMembers.push({name:"",ageGroup:"adult"}),i.calculateCosts()}var Ya=M('<label class="label">Given Name</label>'),ja=M('<label class="label">Age Group</label>'),Za=(a,e)=>e.calculateCosts(),Ja=M('<div class="flex gap-2 items-end self-stretch"><div class="flex flex-col gap-1 grow"><!> <input type="text" class="input"/></div> <div class="flex flex-col gap-1"><!> <select class="select"><option>Adult</option><option>Child (Under 18)</option></select></div> <button><!></button></div>'),Xa=M('<p class="mb-2">Add the details for your spouse/family here.<br/> Use the + (plus) button below to add family members.<br/> <strong>Do not include yourself.</strong></p> <div class="flex flex-col items-end gap-2"><!> <button class="btn btn-success btn-square"><!></button></div>',1);function Qa(a,e){H(e,!0);let t=Pe(e,"formValues",15);const i=fe(t().familyMembers.map(()=>({field:null,type:"input",validators:[de]})));function s(m){i.splice(m,1),t().familyMembers.splice(m,1),e.calculateCosts()}Ce(a,{get Icon(){return St},title:"Family Details",get controls(){return i},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(m,u)=>{var c=Xa(),S=o(G(c),2),b=n(S);pe(b,17,()=>t().familyMembers,xe,(R,L,N)=>{var W=Ja(),y=n(W),v=n(y);{var C=F=>{var j=Ya();X(j,"for",`family-member-${N}-name`),h(F,j)};q(v,F=>{N===0&&F(C)})}var k=o(v,2);te(k),X(k,"id",`family-member-${N}-name`),be(k,(F,j)=>i[j].field=F,F=>i?.[F]?.field,()=>[N]),l(y);var d=o(y,2),g=n(d);{var f=F=>{var j=ja();X(j,"for",`family-member-${N}-age`),h(F,j)};q(g,F=>{N===0&&F(f)})}var A=o(g,2);X(A,"id",`family-member-${N}-age`),A.__change=[Za,e];var I=n(A);I.value=I.__value="adult";var E=o(I);E.value=E.__value="child",l(A),l(d);var D=o(d,2);D.__click=()=>s(N),re(D,1,`btn btn-error btn-square ${N===0?"btn-disabled":""}`);var P=n(D);Tt(P,{size:16}),l(D),l(W),ye(k,()=>t().familyMembers[N].name,F=>t(t().familyMembers[N].name=F,!0)),Be(A,()=>t().familyMembers[N].ageGroup,F=>t(t().familyMembers[N].ageGroup=F,!0)),h(R,W)});var T=o(b,2);T.__click=[Ha,i,t,e];var V=n(T);At(V,{size:16}),l(T),l(S),h(m,c)},$$slots:{default:!0}}),Y()}Te(["change","click"]);var Ka=M('<div class="flex gap-2"><div class="flex flex-col gap-1"><label for="given-name" class="label">Given Name</label> <input type="text" id="given-name" autocomplete="given-name" class="input"/></div> <div class="flex flex-col gap-1"><label for="family-name" class="label">Family Name</label> <input type="text" id="family-name" autocomplete="family-name" class="input"/></div></div> <div class="flex flex-col gap-1"><label for="email-address" class="label">Email Address</label> <input type="email" id="email-address" autocomplete="email" class="input"/></div> <div class="flex flex-col gap-1"><label for="mobile-number" class="label">Mobile Number</label> <input type="tel" id="mobile-number" autocomplete="tel" class="input"/></div>',1);function $a(a,e){H(e,!0);let t=Pe(e,"formValues",15);const i=fe({"given-name":{field:null,type:"input",validators:[de]},"family-name":{field:null,type:"input",validators:[de]},"email-address":{field:null,type:"input",validators:[de,Ta]},"mobile-number":{field:null,type:"input",validators:[de,Sa]}});{let s=Z(()=>Object.values(i));Ce(a,{get Icon(){return na},title:"My Details",get controls(){return r(s)},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(m,u)=>{var c=Ka(),S=G(c),b=n(S),T=o(n(b),2);te(T),be(T,v=>i["given-name"].field=v,()=>i?.["given-name"]?.field),l(b);var V=o(b,2),R=o(n(V),2);te(R),be(R,v=>i["family-name"].field=v,()=>i?.["family-name"]?.field),l(V),l(S);var L=o(S,2),N=o(n(L),2);te(N),be(N,v=>i["email-address"].field=v,()=>i?.["email-address"]?.field),l(L);var W=o(L,2),y=o(n(W),2);te(y),be(y,v=>i["mobile-number"].field=v,()=>i?.["mobile-number"]?.field),l(W),ye(T,()=>t().givenName,v=>t(t().givenName=v,!0)),ye(R,()=>t().familyName,v=>t(t().familyName=v,!0)),ye(N,()=>t().emailAddress,v=>t(t().emailAddress=v,!0)),ye(y,()=>t().mobileNumber,v=>t(t().mobileNumber=v,!0)),h(m,c)},$$slots:{default:!0}})}Y()}var er=(a,e)=>e(e().acceptingFinancialAssistance=!1,!0),tr=(a,e)=>e(e().offeringFinancialAssistance=!1,!0),ar=(a,e)=>e(e().acceptingLift=!1,!0),rr=(a,e)=>e(e().offeringLift=!1,!0),ir=M(`<div class="flex flex-col gap-2 mb-2"><p class="label">Financial Assistance</p> <div class="flex gap-2"><input type="checkbox" id="offering-financial-assistance" class="checkbox"/> <label for="offering-financial-assistance">I'm happy to offer financial assistance</label></div> <div class="flex gap-2"><input type="checkbox" id="accepting-financial-assistance" class="checkbox"/> <label for="accepting-financial-assistance">I need financial assistance</label></div></div> <div class="flex flex-col gap-2 mb-2"><p class="label">Carpooling</p> <div class="flex gap-2"><input type="checkbox" id="offering-lift" class="checkbox"/> <label for="offering-lift">I'm happy to offer a lift</label></div> <div class="flex gap-2"><input type="checkbox" id="accepting-lift" class="checkbox"/> <label for="accepting-lift">I need a lift</label></div></div> <div class="flex flex-col gap-1"><label for="dietary-requirements" class="label">Dietary Requirements</label> <input type="text" id="dietary-requirements" class="input"/> <p class="label whitespace-normal">This applies to the catered meal on Saturday night.<br/> All other meals will be self-catered.</p></div> <div class="flex flex-col gap-1"><label for="notes" class="label">Anything else you'd like us to know?</label> <textarea id="notes" class="textarea w-full resize-none"></textarea></div>`,1);function lr(a,e){H(e,!0);let t=Pe(e,"formValues",15);Ce(a,{get Icon(){return da},title:"Other",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(i,s)=>{var m=ir(),u=G(m),c=o(n(u),2),S=n(c);te(S),S.__change=[er,t],_e(2),l(c);var b=o(c,2),T=n(b);te(T),T.__change=[tr,t],_e(2),l(b),l(u);var V=o(u,2),R=o(n(V),2),L=n(R);te(L),L.__change=[ar,t],_e(2),l(R);var N=o(R,2),W=n(N);te(W),W.__change=[rr,t],_e(2),l(N),l(V);var y=o(V,2),v=o(n(y),2);te(v),_e(2),l(y);var C=o(y,2),k=o(n(C),2);Xt(k),l(C),He(S,()=>t().offeringFinancialAssistance,d=>t(t().offeringFinancialAssistance=d,!0)),He(T,()=>t().acceptingFinancialAssistance,d=>t(t().acceptingFinancialAssistance=d,!0)),He(L,()=>t().offeringLift,d=>t(t().offeringLift=d,!0)),He(W,()=>t().acceptingLift,d=>t(t().acceptingLift=d,!0)),ye(v,()=>t().dietaryRequirements,d=>t(t().dietaryRequirements=d,!0)),ye(k,()=>t().notes,d=>t(t().notes=d,!0)),h(i,m)},$$slots:{default:!0}}),Y()}Te(["change"]);var nr=(a,e)=>e.calculateCosts(),or=M('<div class="flex gap-2"><input type="radio" name="paying-for" class="radio"/> <label> </label></div>'),sr=(a,e)=>e.calculateCosts(),dr=M('<div class="flex gap-2"><input type="radio" name="sharing-with" class="radio"/> <div class="flex flex-col"><label> </label> <span class="label text-xs whitespace-normal"><!></span></div></div>'),cr=M(`<p class="mb-2">Please select the options that best describe your accommodation sharing
		situation. Camp Elim prices their accommodation based on the number of
		adults and children sharing a room, hence the need to provide this
		information to calculate your costs.</p> <div class="flex flex-col gap-2 mb-2"><p class="label">I am paying for accommodation/site use for...</p> <!></div> <p class="mb-2"> </p> <div class="flex flex-col gap-2"><p class="label"> </p> <!></div>`,1);function ur(a,e){H(e,!0);const t=[],i=[];let s=Pe(e,"formValues",15);const m=fe({"paying-for":{field:null,type:"radio",validators:[de]}});let u=Z(()=>!s().payingFor||s().payingFor==="myself"?{possessive:"my",pronoun:"I",pronounCaps:"I",verb:"am"}:{possessive:"our",pronoun:"we",pronounCaps:"We",verb:"are"});{let c=Z(()=>Object.values(m));Ce(a,{get Icon(){return la},title:"Who I'm Staying With",get controls(){return r(c)},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(S,b)=>{var T=cr(),V=o(G(T),2),R=o(n(V),2);pe(R,17,()=>ga,xe,(k,d)=>{var g=or(),f=n(g);te(f),f.__change=[nr,e];var A,I=o(f,2),E=n(I,!0);l(I),l(g),O(()=>{X(f,"id",r(d).value),A!==(A=r(d).value)&&(f.value=(f.__value=r(d).value)??""),X(I,"for",`paying-for-${r(d).value??""}`),x(E,r(d).label)}),yt(t,[],f,()=>(r(d).value,s().payingFor),D=>s(s().payingFor=D,!0)),h(k,g)}),l(V),be(V,k=>m["paying-for"].field=k,()=>m?.["paying-for"]?.field);var L=o(V,2),N=n(L);l(L);var W=o(L,2),y=n(W),v=n(y);l(y);var C=o(y,2);pe(C,17,()=>ha,xe,(k,d)=>{var g=dr(),f=n(g);te(f),f.__change=[sr,e];var A,I=o(f,2),E=n(I),D=n(E,!0);l(E);var P=o(E,2),F=n(P);{var j=_=>{var w=ge();O(()=>x(w,`${r(u).pronounCaps??""}'ve organised a group of friends who
							${r(u).pronoun??""} will share
							${r(u).possessive??""} accommodation with.`)),h(_,w)},p=_=>{var w=ae(),Q=G(w);{var J=oe=>{var K=ge();O(()=>x(K,`${r(u).pronounCaps??""}'ve not organised a group, but
							${r(u).pronoun??""}
							${r(u).verb??""} willing to share
							${r(u).possessive??""} accommodation with others if needed.`)),h(oe,K)};q(Q,oe=>{r(d).value==="anyone"&&oe(J)},!0)}h(_,w)};q(F,_=>{r(d).value==="friends"?_(j):_(p,!1)})}l(P),l(I),l(g),O(()=>{X(f,"id",r(d).value),A!==(A=r(d).value)&&(f.value=(f.__value=r(d).value)??""),X(E,"for",`sharing-with-${r(d).value??""}`),x(D,r(d).label)}),yt(i,[],f,()=>(r(d).value,s().sharingWith),_=>s(s().sharingWith=_,!0)),h(k,g)}),l(W),O(()=>{x(N,`If you would like to split your room with some friends
		${s().payingFor==="family"?" outside of your family":""} you can
		specify that here. The costs of accommodation will be automatically calculated
		and split between all parties sharing a room/site. The more bunkmates you have,
		the cheaper the cost will be per person!`),x(v,`${r(u).pronounCaps??""} will share ${r(u).possessive??""}
			accommodation with...`)}),h(S,T)},$$slots:{default:!0}})}Y()}Te(["change"]);var vr=M("<th>Your Share</th>"),mr=M('<td class="bg-primary/5"> </td>'),fr=M('<td class="bg-primary/5"> </td>'),gr=M('<td class="bg-primary/5"> </td>'),hr=M('<th class="bg-primary/5"> </th>'),_r=M('<th class="bg-primary/5 border border-primary"> </th>'),br=M('<tr><td> </td><td> </td><td> </td><td> </td><!></tr> <tr><td>Extra Adult</td><td> </td><td> </td><td> </td><!></tr> <tr><td>Extra Child</td><td> </td><td> </td><td> </td><!></tr> <tr><th colspan="3">Per Night</th><th> </th><!></tr> <tr><th colspan="3"> </th><th> </th><!></tr>',1),yr=M('<tr><td>Day Trip (individual)</td><td> </td><td> </td><td class="bg-primary/5"> </td></tr> <tr><td>Day Trip (family)</td><td> </td><td> </td><td class="bg-primary/5"> </td></tr> <tr><th colspan="3">Total</th><th> </th></tr>',1),pr=M("<td></td>"),xr=M('<dialog id="costBreakdownModal" class="modal"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-square btn-ghost absolute right-4 top-4"><!></button></form> <h3 class="text-lg font-bold mb-4">Cost Breakdown</h3> <div class="overflow-x-auto rounded-box border border-base-300"><table class="table table-sm sm:table-md"><colgroup><col style="min-width: 8rem"/><col/><col/><col/><col style="min-width: 6rem;"/></colgroup><tbody><tr class="bg-base-200"><th>Item</th><th>Rate</th><th>Qty</th><th>Subtotal</th><!></tr><tr class="bg-base-200"><td><strong>Accommodation / Site Use</strong><br/> <!></td></tr><!><tr class="bg-base-200"><td><strong>Shared</strong><br/> Saturday dinner is a per-person contribution.</td></tr><tr><td>Saturday Dinner</td><td> </td><td> </td><!><td class="bg-primary/5"> </td></tr><tr><th>Grand Total</th><th class="bg-primary border border-primary text-primary-content"> </th></tr></tbody></table></div></div></dialog>');function Cr(a,e){H(e,!0);const t=Z(()=>e.accommodationCosts.total),i=Z(()=>e.accommodationCosts.split),s=Z(()=>e.formValues.sharingWith==="friends"),m=Z(()=>e.formValues.payingFor==="family"?e.formValues.familyMembers.length+1:1),u=Z(()=>dt*(e.formValues.sharingDinner?r(m):0)),c=B=>B?`$${B}`:"-";var S=xr(),b=n(S),T=n(b),V=n(T),R=n(V);ca(R,{size:16}),l(V),l(T);var L=o(T,4),N=n(L),W=o(n(N)),y=n(W),v=o(n(y),4);{var C=B=>{var $=vr();h(B,$)};q(v,B=>{r(s)&&B(C)})}l(y);var k=o(y),d=n(k),g=o(n(d),3);{var f=B=>{var $=ge(`Subtotal is calculated based on all occupants and is then split\r
								into individual shares. You only need to pay your share.`);h(B,$)};q(g,B=>{r(s)&&B(f)})}l(d),l(k);var A=o(k);{var I=B=>{var $=br(),ke=G($),we=n(ke),Ze=n(we,!0);l(we);var Ae=o(we),Je=n(Ae,!0);l(Ae);var Me=o(Ae),Xe=n(Me,!0);l(Me);var he=o(Me),De=n(he,!0);l(he);var Qe=o(he);{var Re=U=>{var z=mr(),ie=n(z,!0);l(z),O(me=>x(ie,me),[()=>c(r(i).nightly.room)]),h(U,z)};q(Qe,U=>{r(s)&&U(Re)})}l(ke);var Le=o(ke,2),Ne=o(n(Le)),Ke=n(Ne,!0);l(Ne);var Ee=o(Ne),We=n(Ee,!0);l(Ee);var Fe=o(Ee),$e=n(Fe,!0);l(Fe);var et=o(Fe);{var tt=U=>{var z=fr(),ie=n(z,!0);l(z),O(me=>x(ie,me),[()=>c(r(i).nightly.additionalAdults)]),h(U,z)};q(et,U=>{r(s)&&U(tt)})}l(Le);var qe=o(Le,2),at=o(n(qe)),Mt=n(at,!0);l(at);var rt=o(at),Nt=n(rt,!0);l(rt);var Ge=o(rt),Et=n(Ge,!0);l(Ge);var Ft=o(Ge);{var It=U=>{var z=gr(),ie=n(z,!0);l(z),O(me=>x(ie,me),[()=>c(r(i).nightly.additionalChildren)]),h(U,z)};q(Ft,U=>{r(s)&&U(It)})}l(qe);var it=o(qe,2),Ue=o(n(it)),Pt=n(Ue,!0);l(Ue);var Vt=o(Ue);{var Dt=U=>{var z=hr(),ie=n(z,!0);l(z),O(me=>x(ie,me),[()=>c(r(i).nightly.total)]),h(U,z)};q(Vt,U=>{r(s)&&U(Dt)})}l(it);var gt=o(it,2),lt=n(gt),Rt=n(lt);l(lt);var ze=o(lt),Lt=n(ze);l(ze);var Wt=o(ze);{var qt=U=>{var z=_r(),ie=n(z);l(z),O(()=>x(ie,`$${r(i).total??""}`)),h(U,z)};q(Wt,U=>{r(s)&&U(qt)})}l(gt),O((U,z,ie,me,Ot,Bt,Gt)=>{x(Ze,e.formValues.preferredAccommodationType),x(Je,U),x(Xe,e.formValues.preferredAccommodationType?1:"-"),re(he,1,Ie({"bg-primary/5":!r(s)})),x(De,z),x(Ke,ie),x(We,e.accommodationCosts.additionalAdults||"-"),re(Fe,1,Ie({"bg-primary/5":!r(s)})),x($e,me),x(Mt,Ot),x(Nt,e.accommodationCosts.additionalChildren||"-"),re(Ge,1,Ie({"bg-primary/5":!r(s)})),x(Et,Bt),re(Ue,1,Ie({"bg-primary/5":!r(s)})),x(Pt,Gt),x(Rt,`Total (${e.formValues.stayingNights??""} Night${e.formValues.stayingNights!==1?"s":""})`),re(ze,1,Ie({"bg-primary/5 border border-primary":!r(s)})),x(Lt,`$${r(t).total??""}`)},[()=>c(r(t).nightly.room),()=>c(r(t).nightly.room),()=>c(ee.nightly.additionalAdult),()=>c(r(t).nightly.additionalAdults),()=>c(ee.nightly.additionalChild),()=>c(r(t).nightly.additionalChildren),()=>c(r(t).nightly.total)]),h(B,$)},E=B=>{var $=yr(),ke=G($),we=o(n(ke)),Ze=n(we,!0);l(we);var Ae=o(we),Je=n(Ae,!0);l(Ae);var Me=o(Ae),Xe=n(Me,!0);l(Me),l(ke);var he=o(ke,2),De=o(n(he)),Qe=n(De,!0);l(De);var Re=o(De),Le=n(Re,!0);l(Re);var Ne=o(Re),Ke=n(Ne,!0);l(Ne),l(he);var Ee=o(he,2),We=o(n(Ee)),Fe=n(We);l(We),l(Ee),O(($e,et,tt,qe)=>{x(Ze,$e),x(Je,e.dayTripCosts.individualsCount||"-"),x(Xe,et),x(Qe,tt),x(Le,e.dayTripCosts.familiesCount||"-"),x(Ke,qe),re(We,1,Ie({"bg-primary/5 border border-primary":!r(s)})),x(Fe,`$${e.dayTripCosts.total??""}`)},[()=>c(ee.daily.individual),()=>c(e.dayTripCosts.individualsCost),()=>c(ee.daily.family),()=>c(e.dayTripCosts.familiesCost)]),h(B,$)};q(A,B=>{e.formValues.stayingNights>0?B(I):B(E,!1)})}var D=o(A),P=n(D);l(D);var F=o(D),j=o(n(F)),p=n(j,!0);l(j);var _=o(j),w=n(_,!0);l(_);var Q=o(_);{var J=B=>{var $=pr();h(B,$)};q(Q,B=>{r(s)&&B(J)})}var oe=o(Q),K=n(oe,!0);l(oe),l(F);var se=o(F),Ve=n(se),Se=o(Ve),je=n(Se);l(Se),l(se),l(W),l(N),l(L),l(b),l(S),O((B,$)=>{X(d,"colspan",r(s)?5:4),X(P,"colspan",r(s)?5:4),x(p,B),x(w,e.formValues.sharingDinner?r(m):"-"),x(K,$),X(Ve,"colspan",r(s)?4:3),x(je,`$${e.formValues.costs.grandTotal??""}`)},[()=>c(dt),()=>c(r(u))]),h(a,S),Y()}var kr=()=>costBreakdownModal.showModal(),wr=M(`<p>If someone else would like to share accommodation, we'll contact you to
			arrange it. After registration closes, you'll receive another email with
			your final total (if your have some bunkmates, <strong>your costs will come down</strong>) and instructions for how to
			pay.</p>`),Ar=M(`<p> <strong> </strong>. <button class="link label">How'd we arrive at that figure?</button></p> <p>When you submit this form you will receive an email to confirm that you have
		registered. <!></p> <!> <p><!> Can't wait to see you there!</p> <!>`,1);function Tr(a,e){H(e,!0),Ce(a,{get Icon(){return oa},title:"Summary",get active(){return e.active},get visited(){return e.visited},get formState(){return e.formState},get onback(){return e.onback},get onnext(){return e.onnext},get onsubmit(){return e.onsubmit},children:(t,i)=>{var s=Ar(),m=G(s),u=n(m),c=o(u),S=n(c);l(c);var b=o(c,2);b.__click=[kr],l(m);var T=o(m,2),V=o(n(T));{var R=d=>{var g=ge("It will also include more information about camp.");h(d,g)},L=d=>{var g=ge(`It will also include your total, with instructions for how to pay and more\r
			information about camp.`);h(d,g)};q(V,d=>{e.formValues.sharingWith==="anyone"?d(R):d(L,!1)})}l(T);var N=o(T,2);{var W=d=>{var g=wr();h(d,g)};q(N,d=>{e.formValues.sharingWith==="anyone"&&d(W)})}var y=o(N,2),v=n(y);{var C=d=>{var g=ge(`Once everything is booked, we'll let you know what cabin/room number\r
			you'll be in.`);h(d,g)};q(v,d=>{e.formValues.preferredAccommodationType!=="Powered Site"&&d(C)})}_e(),l(y);var k=o(y,2);Cr(k,{get formValues(){return e.formValues},get accommodationCosts(){return e.accommodationCosts},get dayTripCosts(){return e.dayTripCosts}}),O(()=>{x(u,`The total cost for the weekend for
		${e.formValues.payingFor==="family"?"your family":"you"} is `),x(S,`$${e.formValues.costs.grandTotal??""}`)}),h(t,s)},$$slots:{default:!0}}),Y()}Te(["click"]);const Sr=""+new URL("../assets/form-banner-alt.ThAPCllC.jpg",import.meta.url).href;var Mr=M(`<p>Welcome! We're excited to spend some time away together in 2026! In case you
		missed it, we'll be spending the weekend together:</p> <ul class="pl-4"><li>at <strong>Camp Elim</strong> in Forster</li> <li>from the evening of <strong>Friday 30th Jan</strong></li> <li>to the afternoon of <strong>Sunday 1st Feb</strong>.</li></ul> <p>We look forward to seeing you there! Follow the prompts to register.</p>`,1);function Nr(a,e){Ce(a,{get imageSrc(){return Sr},get Icon(){return ea},title:"2026 Church Weekend Away Registration",get active(){return e.active},get visited(){return e.visited},get onnext(){return e.onnext},children:(t,i)=>{var s=Mr();_e(4),h(t,s)},$$slots:{default:!0}})}var Er=M('<div class="flex flex-col items-center gap-4 p-4"></div>');function Or(a,e){H(e,!0);let t=fe({stepIndex:0,isLoading:!1}),i=_t(fe({givenName:"",familyName:"",emailAddress:"",mobileNumber:"",payingFor:"",sharingWith:"nobody",familyMembers:[{name:"",ageGroup:"adult"}],bunkmates:[{name:"",ageGroup:"adult"}],arrivalTime:"Friday Evening",departureTime:"Sunday Afternoon",stayingNights:2,sharingDinner:!0,preferredAccommodationType:"",costs:{accommodationTotal:0,accommodationSplit:0,dayTripTotal:0,sharedTotal:0,grandTotal:0},offeringFinancialAssistance:!1,acceptingFinancialAssistance:!1,offeringLift:!1,acceptingLift:!1,dietaryRequirements:"",notes:""})),s=fe({additionalAdults:0,additionalChildren:0,total:{nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},split:{nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0}}),m=_t(fe({individualsCount:0,individualsCost:0,familiesCount:0,familiesCost:0,total:0})),u=Z(()=>{let v=[Nr,$a,ur];return r(i).payingFor==="family"&&v.push(Qa),r(i).sharingWith==="friends"&&v.push(za),v.push(La),v.push(lr),v.push(Tr),v});const c=()=>T(t.stepIndex-1),S=()=>T(t.stepIndex+1),b=async()=>{t.isLoading=!0,wt({message:"Submitting - please wait just a moment.",type:"info"}),await fetch(va,{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(aa(r(i)))}),$t(ua("/form-submitted"))};async function T(v){t.stepIndex=v,await xt(),document.getElementsByClassName("scroll-catch")[v].scrollIntoView({behavior:"smooth"})}function V(){R(),W(),r(i).preferredAccommodationType?L():N();let v=1;r(i).payingFor==="family"&&(v+=r(i).familyMembers.length),r(i).costs.sharedTotal=r(i).sharingDinner?dt*v:0,r(i).costs.grandTotal=r(i).costs.accommodationSplit+r(i).costs.dayTripTotal+r(i).costs.sharedTotal}function R(){const v=r(i).arrivalTime==="Friday Evening",C=r(i).departureTime==="Sunday Morning"||r(i).departureTime==="Sunday Afternoon";let k=0;v&&(k+=1),C&&(k+=1),r(i).stayingNights=k,r(i).sharingDinner=r(i).arrivalTime!=="Saturday Evening (After Dinner)"&&r(i).departureTime!=="Saturday Afternoon (Before Dinner)"}function L(){const v=s.total.nightly,C=s.split.nightly,k=ct.find(P=>P.name===r(i).preferredAccommodationType);let d=0,g=1;if(r(i).payingFor==="family"){const P=r(i).familyMembers;d+=P.filter(F=>F.ageGroup==="child").length,g+=P.length-d}let f=0,A=0;if(r(i).sharingWith==="friends"){const P=r(i).bunkmates;f+=P.filter(F=>F.ageGroup==="child").length,A+=P.length-f}const I=A+f>0;A+=g,f+=d;let E=A,D=f;for(let P=0;P<2;P++)E>0?E--:D>0&&D--;if(v.room=k.rate,C.room=k.rate,I){const P=v.room/A;C.room=Math.ceil(P*g)}if(s.additionalAdults=E,s.additionalChildren=D,v.additionalAdults=E*ee.nightly.additionalAdult,v.additionalChildren=D*ee.nightly.additionalChild,C.additionalAdults=v.additionalAdults,C.additionalChildren=v.additionalChildren,I){if(v.additionalAdults){const P=v.additionalAdults/A;C.additionalAdults=Math.ceil(P*g)}if(v.additionalChildren&&f){const P=v.additionalChildren/f;C.additionalChildren=Math.ceil(P*d)}}v.total=v.room+v.additionalAdults+v.additionalChildren,C.total=C.room+C.additionalAdults+C.additionalChildren,s.total.total=v.total*r(i).stayingNights,s.split.total=C.total*r(i).stayingNights,r(i).costs.accommodationTotal=s.total.total,r(i).costs.accommodationSplit=s.split.total}function N(){const v=r(i).familyMembers,C=v.length+1,k=v.filter(g=>g.ageGroup==="child").length,d=C-k;if(C<3||k===0)r(m).individualsCount=C,r(m).individualsCost=C*ee.daily.individual,r(m).total=C*ee.daily.individual,r(i).costs.dayTripTotal=C*ee.daily.individual;else{let g=0;const f=d-2;f>=1&&(g=f*ee.daily.individual),r(m).individualsCount=f>=1?f:0,r(m).individualsCost=g,r(m).familiesCount=1,r(m).familiesCost=ee.daily.family,r(m).total=ee.daily.family+g,r(i).costs.dayTripTotal=ee.daily.family+g}}function W(){s.total={nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},s.split={nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},bt(m,{individualsCount:0,individualsCost:0,familiesCount:0,familiesCost:0,total:0},!0),r(i).costs={accommodationTotal:0,accommodationSplit:0,dayTripTotal:0,sharedTotal:0,grandTotal:0}}var y=Er();pe(y,21,()=>r(u),xe,(v,C,k)=>{var d=ae(),g=G(d);{let f=Z(()=>k===t.stepIndex),A=Z(()=>k<t.stepIndex),I=Z(()=>k<r(u).length-1?S:void 0),E=Z(()=>k===r(u).length-1?b:void 0);kt(g,()=>r(C),(D,P)=>{P(D,{get formState(){return t},get accommodationCosts(){return s},get dayTripCosts(){return r(m)},calculateCosts:V,get active(){return r(f)},get visited(){return r(A)},onback:k>0?c:void 0,get onnext(){return r(I)},get onsubmit(){return r(E)},get formValues(){return r(i)},set formValues(F){bt(i,F,!0)}})})}h(v,d)}),l(y),h(a,y),Y()}export{Or as component};
