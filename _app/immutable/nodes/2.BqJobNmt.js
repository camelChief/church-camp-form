import"../chunks/DsnmJJEf.js";import{i as Dt,a$ as Lt,b4 as Wt,a1 as qt,e as at,aS as rt,X as xe,t as lt,J as ot,a2 as nt,az as Ot,a3 as $e,b5 as Gt,aU as zt,a8 as B,ab as U,aD as K,a9 as z,af as $,H as m,G as N,ac as i,ae as s,ad as o,I as Ee,aa as G,u as it,aF as ue,q as l,aE as j,w as he,b6 as Bt,aC as Ut,x as Ht}from"../chunks/ZXj2Eqcl.js";import{I as oe,s as le,a as J,b as jt,e as ge,i as _e,d as ke,r as ce,c as Ce}from"../chunks/BreVOUHX.js";import{i as D,c as st,b as me}from"../chunks/BOzATCuY.js";import{b as Yt,r as Jt,g as Zt}from"../chunks/B56mCEQO.js";import{b as ee,f as ye,s as T}from"../chunks/CaydT6GA.js";import{s as ne,r as ie,p as pe}from"../chunks/BAV2g6P-.js";const Qt=[];function Kt(a,e=!1,t=!1){return Te(a,new Map,"",Qt,null,t)}function Te(a,e,t,r,n=null,v=!1){if(typeof a=="object"&&a!==null){var u=e.get(a);if(u!==void 0)return u;if(a instanceof Map)return new Map(a);if(a instanceof Set)return new Set(a);if(Dt(a)){var c=Array(a.length);e.set(a,c),n!==null&&e.set(n,c);for(var M=0;M<a.length;M+=1){var y=a[M];M in a&&(c[M]=Te(y,e,t,r,null,v))}return c}if(Lt(a)===Wt){c={},e.set(a,c),n!==null&&e.set(n,c);for(var A in a)c[A]=Te(a[A],e,t,r,null,v);return c}if(a instanceof Date)return structuredClone(a);if(typeof a.toJSON=="function"&&!v)return Te(a.toJSON(),e,t,r,a)}if(a instanceof EventTarget)return a;try{return structuredClone(a)}catch{return a}}function Xt(a,e,t){qt(()=>{var r=at(()=>e(a,t?.())||{});if(r?.destroy)return()=>r.destroy()})}function fe(a,e,t=e){var r=new WeakSet;rt(a,"input",async n=>{var v=n?a.defaultValue:a.value;if(v=Ue(a)?He(v):v,t(v),xe!==null&&r.add(xe),await lt(),v!==(v=e())){var u=a.selectionStart,c=a.selectionEnd;a.value=v??"",c!==null&&(a.selectionStart=u,a.selectionEnd=Math.min(c,a.value.length))}}),(ot&&a.defaultValue!==a.value||at(e)==null&&a.value)&&(t(Ue(a)?He(a.value):a.value),xe!==null&&r.add(xe)),nt(()=>{var n=e();if(a===document.activeElement){var v=Gt??xe;if(r.has(v))return}Ue(a)&&n===He(a.value)||a.type==="date"&&!n&&!a.value||n!==a.value&&(a.value=n??"")})}const Be=new Set;function et(a,e,t,r,n=r){var v=t.getAttribute("type")==="checkbox",u=a;let c=!1;if(e!==null)for(var M of e)u=u[M]??=[];u.push(t),rt(t,"change",()=>{var y=t.__value;v&&(y=tt(u,y,t.checked)),n(y)},()=>n(v?[]:null)),nt(()=>{var y=r();if(ot&&t.defaultChecked!==t.checked){c=!0;return}v?(y=y||[],t.checked=y.includes(t.__value)):t.checked=zt(t.__value,y)}),Ot(()=>{var y=u.indexOf(t);y!==-1&&u.splice(y,1)}),Be.has(u)||(Be.add(u),$e(()=>{u.sort((y,A)=>y.compareDocumentPosition(A)===4?-1:1),Be.delete(u)})),$e(()=>{if(c){var y;if(v)y=tt(u,y,t.checked);else{var A=u.find(L=>L.checked);y=A?.__value}n(y)}})}function tt(a,e,t){for(var r=new Set,n=0;n<a.length;n+=1)a[n].checked&&r.add(a[n].__value);return t||r.delete(e),Array.from(r)}function Ue(a){var e=a.type;return e==="number"||e==="range"}function He(a){return a===""?null:+a}function $t(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];oe(a,ne({name:"badge-question-mark"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function ea(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];oe(a,ne({name:"bed"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function ta(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];oe(a,ne({name:"contact"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function dt(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];oe(a,ne({name:"plus"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function aa(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];oe(a,ne({name:"receipt-text"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function ra(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];oe(a,ne({name:"tent-tree"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function la(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];oe(a,ne({name:"tent"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function ct(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];oe(a,ne({name:"trash"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function ut(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];oe(a,ne({name:"users"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function oa(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];oe(a,ne({name:"utensils"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function na(a,e){B(e,!0);/**
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
 */let t=ie(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];oe(a,ne({name:"x"},()=>t,{get iconNode(){return r},children:(n,v)=>{var u=K(),c=z(u);ee(c,()=>e.children??$),m(n,u)},$$slots:{default:!0}})),U()}function ia(a,e){return Yt+Jt(a,e)}const sa="https://script.google.com/macros/s/AKfycbzCLwqREzlP7b9Zdb3bTW_sna_fpTkzj_2HMft_bhrwQvjTdJb6VvqPU4wZz2h4kYgKoQ/exec",je=8,Ye=[{name:"Powered Site",rate:39,sleeps:20},{name:"Bunk Room",rate:72,sleeps:9},{name:"Lakeside Cabin",rate:138,sleeps:7},{name:"Family Room (Unit)",rate:138,sleeps:13}],da=["Friday Evening","Saturday Morning","Saturday Afternoon (Before Dinner)","Saturday Evening (After Dinner)"],ca=["Saturday Afternoon (Before Dinner)","Saturday Evening (After Dinner)","Sunday Morning","Sunday Afternoon"],ua=[{value:"myself",label:"Myself"},{value:"family",label:"Myself and my spouse/family"}],Ne={nightly:{additionalAdult:15,additionalChild:10}},va=[{value:"nobody",label:"Nobody else"},{value:"friends",label:"Some friends"},{value:"anyone",label:"Open to anyone"}];var ma=N("<figure><img/></figure>"),fa=N('<button class="btn">Back</button>'),ha=(a,e,t)=>{e()&&t.onnext()},ga=N('<button class="btn btn-primary">Next</button>'),_a=(a,e,t)=>{e()&&t.onsubmit()},ba=N('<span class="loading loading-spinner"></span>'),ya=N('<button class="btn btn-primary"><!></button>'),pa=N('<!> <div></div> <div class="flex flex-row self-end gap-2 mt-4"><!> <!> <!></div>',1),xa=N('<div><div><!> <div class="card-body gap-4 relative"><div><!></div> <div class="step-bar svelte-1yvm30a"></div> <h2 class="card-title"> </h2> <!></div> <div class="scroll-catch svelte-1yvm30a"></div></div></div>');function be(a,e){B(e,!0);function t(){if(!e.controls)return!0;let d="";return e.controls.forEach(f=>{const h=r(f);h&&!d&&(d=h)}),d?(jt({message:d,type:"warning"}),!1):!0}function r(d){let f=[];d.type==="radio"&&(f=Array.from(d.field.querySelectorAll('input[type="radio"]')));let h,w,S;switch(d.type){case"input":w=d.field.value,S="input-error";break;case"select":if(h=d.field,h.disabled)return null;w=h.value,S="select-error";break;case"radio":w=f.find(x=>x.checked)?.value??"",S="radio-error";break;default:throw new Error(`Unknown control type: ${d.type}`)}d.type==="radio"?f.forEach(x=>x.classList.remove("radio-error")):d.field.classList.remove(S);for(const x of d.validators){const F=x(w);if(F)return d.type==="radio"?f.forEach(Z=>Z.classList.add("radio-error")):d.field.classList.add(S),F}return null}const n=d=>{it(()=>{if(!e.controls)return;const f=new AbortController;return e.controls.forEach(h=>{switch(h.type){case"input":h.field.addEventListener("input",()=>h.field.classList.remove("input-error"),{signal:f.signal});break;case"select":h.field.addEventListener("change",()=>h.field.classList.remove("select-error"),{signal:f.signal});break;case"radio":const w=Array.from(h.field.querySelectorAll('input[type="radio"]'));w.forEach(S=>S.addEventListener("change",()=>w.forEach(x=>{x.classList.remove("radio-error")}),{signal:f.signal}))}}),()=>f.abort()})};var v=xa();let u;var c=i(v);let M;var y=i(c);{var A=d=>{var f=ma(),h=i(f);o(f),G(()=>{J(h,"src",e.imageSrc),J(h,"alt",e.title)}),m(d,f)};D(y,d=>{e.imageSrc&&d(A)})}var L=s(y,2),W=i(L);let O;var E=i(W);{var _=d=>{var f=K(),h=z(f);st(h,()=>e.Icon,(w,S)=>{S(w,{size:"16"})}),m(d,f)};D(E,d=>{e.active&&d(_)})}o(W);var g=s(W,4),C=i(g,!0);o(g);var q=s(g,2);{var P=d=>{var f=pa(),h=z(f);ee(h,()=>e.children??$);var w=s(h,2);Xt(w,b=>n?.());var S=s(w,2),x=i(S);{var F=b=>{var k=fa();k.__click=function(...Q){e.onback?.apply(this,Q)},G(()=>k.disabled=e.formState?.isLoading),m(b,k)};D(x,b=>{e.onback&&b(F)})}var Z=s(x,2);{var I=b=>{var k=ga();k.__click=[ha,t,e],G(()=>k.disabled=e.formState?.isLoading),m(b,k)};D(Z,b=>{e.onnext&&b(I)})}var Y=s(Z,2);{var p=b=>{var k=ya();k.__click=[_a,t,e];var Q=i(k);{var H=X=>{var ae=ba();m(X,ae)},te=X=>{var ae=ue("Submit");m(X,ae)};D(Q,X=>{e.formState?.isLoading?X(H):X(te,!1)})}o(k),G(()=>k.disabled=e.formState?.isLoading),m(b,k)};D(Y,b=>{e.onsubmit&&b(p)})}o(S),m(d,f)};D(q,d=>{e.active&&d(P)})}o(L),Ee(2),o(c),o(v),G((d,f,h)=>{u=le(v,1,"card-wrapper w-lg max-w-full svelte-1yvm30a",null,u,d),M=le(c,1,"card w-lg max-w-full relative bg-base-100",null,M,f),O=le(W,1,"step svelte-1yvm30a",null,O,h),T(C,e.title)},[()=>({active:e.active,visited:e.visited}),()=>({"shadow-md":e.active,"bg-base-200":!e.active}),()=>({"shadow-sm":e.active})]),m(a,v),U()}ye(["click"]);const se=a=>a===""?"Please fill in the required fields.":null,Ca=a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?null:"Please enter a valid email address.",ka=a=>(a=a.replace(/\s+/g,""),/^(?:\+614|04)\d{8}$/.test(a)?null:"Please enter a valid mobile number.");var wa=(a,e)=>e.calculateCosts(),Aa=N("<option> </option>"),Ma=(a,e)=>e.calculateCosts(),Sa=N("<option> </option>"),Ta=(a,e)=>e.calculateCosts(),Na=N("<option> </option>"),Ea=N("<br/>Your share of that cost will be <strong> </strong> ",1),Va=N('<p class="mt-4">The total cost of accommodation will be <strong> </strong> <!></p>'),Pa=N(`<p class="mb-2">Fill out the fields below to select your accommodation preference and
		receive a cost estimate for your accommodation. Final costs will be provided
		at the end of the form.</p> <div class="flex flex-col gap-1"><p class="label whitespace-normal">Arrival/Departure</p> <label class="select mb-1"><span class="label">arrive</span> <select id="arrival-time" class="select"></select></label> <label class="select"><span class="label">depart</span> <select id="departure-time" class="select"></select></label></div> <div class="flex flex-col gap-1"><div class="flex items-center gap-1"><label for="accommodation-type" class="label">Accommodation Type</label> <div class="tooltip"><div class="tooltip-content text-left"><p class="mb-2">More information can be found on the Camp Elim website but the key
						differences between the accommodation types are:</p> <ul class="list-disc pl-4"><li class="mb-1"><strong>Powered Site</strong> - campsite, shared camp bathroom + fridge</li> <li class="mb-1"><strong>Bunk Room</strong> - private bathroom, shared camp fridge,
							sleeps 9</li> <li class="mb-1"><strong>Lakeside Cabin</strong> - private kitchen, bathroom + living
							space, sleeps 7</li> <li><strong>Family Room (Unit)</strong> - private kitchenette, bathroom
							+ living space, sleeps 13</li></ul></div> <!></div></div> <select id="accommodation-type" class="select"></select> <p><!></p></div> <!>`,1);function Ia(a,e){B(e,!0);let t=pe(e,"formValues",15),r=j(()=>t().sharingWith==="friends"?t().bunkmates.length:0),n=j(()=>t().payingFor==="family"?t().familyMembers.length:0),v=j(()=>1+l(n)+l(r)),u=j(()=>{const y=Ye.map(A=>A.sleeps);return l(v)>Math.min(...y)}),c=j(()=>t().stayingNights===0);it(()=>{if(l(c)){const y=M["accommodation-type"].field;if(!y)return;y.value="",t(t().preferredAccommodationType="",!0)}});let M=he({"accommodation-type":{field:null,type:"select",validators:[se]}});{let y=j(()=>Object.values(M));be(a,{get Icon(){return la},title:"Accommodation",get controls(){return l(y)},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(A,L)=>{var W=Pa(),O=s(z(W),2),E=s(i(O),2),_=s(i(E),2);_.__change=[wa,e],ge(_,21,()=>da,_e,(p,b)=>{var k=Aa(),Q=i(k,!0);o(k);var H={};G(()=>{T(Q,l(b)),H!==(H=l(b))&&(k.value=(k.__value=l(b))??"")}),m(p,k)}),o(_),o(E);var g=s(E,2),C=s(i(g),2);C.__change=[Ma,e],ge(C,21,()=>ca,_e,(p,b)=>{var k=Sa(),Q=i(k,!0);o(k);var H={};G(()=>{T(Q,l(b)),H!==(H=l(b))&&(k.value=(k.__value=l(b))??"")}),m(p,k)}),o(C),o(g),o(O);var q=s(O,2),P=i(q),d=s(i(P),2),f=s(i(d),2);$t(f,{size:16}),o(d),o(P);var h=s(P,2);h.__change=[Ta,e],ge(h,21,()=>Ye,_e,(p,b)=>{var k=Na(),Q=i(k,!0);o(k);var H={};G(()=>{k.disabled=l(b).sleeps<l(v),T(Q,l(b).name),H!==(H=l(b).name)&&(k.value=(k.__value=l(b).name)??"")}),m(p,k)}),o(h),me(h,p=>M["accommodation-type"].field=p,()=>M?.["accommodation-type"]?.field);var w=s(h,2);let S;var x=i(w);{var F=p=>{var b=ue("No need to select accommodation if you're just planning a day trip!");m(p,b)},Z=p=>{var b=ue("Some accommodation types are unavailable due to the size of your party.");m(p,b)};D(x,p=>{l(c)?p(F):p(Z,!1)})}o(w),o(q);var I=s(q,2);{var Y=p=>{var b=Va(),k=s(i(b)),Q=i(k);o(k);var H=s(k),te=s(H);{var X=ae=>{var we=Ea(),ve=s(z(we),2),Ve=i(ve);o(ve);var Pe=s(ve);G(()=>{T(Ve,`$${e.accommodationCosts.split.total??""}`),T(Pe,`. ($${e.accommodationCosts.split.nightly.total??""}/night)`)}),m(ae,we)};D(te,ae=>{l(r)>0&&ae(X)})}o(b),G(()=>{T(Q,`$${e.accommodationCosts.total.total??""}`),T(H,`. ($${e.accommodationCosts.total.nightly.total??""}/night) `)}),m(p,b)};D(I,p=>{t().preferredAccommodationType&&p(Y)})}G(p=>{h.disabled=l(c),S=le(w,1,"label whitespace-normal",null,S,p)},[()=>({hidden:!l(u)&&!l(c)})]),ke(_,()=>t().arrivalTime,p=>t(t().arrivalTime=p,!0)),ke(C,()=>t().departureTime,p=>t(t().departureTime=p,!0)),ke(h,()=>t().preferredAccommodationType,p=>t(t().preferredAccommodationType=p,!0)),m(A,W)},$$slots:{default:!0}})}U()}ye(["change"]);function Fa(a,e,t,r){e.push({field:null,type:"input",validators:[se]}),t().bunkmates.push({name:"",ageGroup:"adult"}),r.calculateCosts()}var Ra=N('<label class="label">Given Name</label>'),Da=N('<label class="label">Age Group</label>'),La=(a,e)=>e.calculateCosts(),Wa=N('<div class="flex gap-2 items-end self-stretch"><div class="flex flex-col gap-1 grow"><!> <input type="text" class="input"/></div> <div class="flex flex-col gap-1"><!> <select class="select"><option>Adult</option><option>Child (Under 18)</option></select></div> <button><!></button></div>'),qa=N('<p class="mb-2"> </p> <div class="flex flex-col items-end gap-2"><!> <button class="btn btn-success btn-square"><!></button></div>',1);function Oa(a,e){B(e,!0);let t=pe(e,"formValues",15);const r=he(t().bunkmates.map(()=>({field:null,type:"input",validators:[se]})));function n(v){r.splice(v,1),t().bunkmates.splice(v,1),e.calculateCosts()}be(a,{get Icon(){return ut},title:"Bunkmates Details",get controls(){return r},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(v,u)=>{var c=qa(),M=z(c),y=i(M);o(M);var A=s(M,2),L=i(A);ge(L,17,()=>t().bunkmates,_e,(E,_,g)=>{var C=Wa(),q=i(C),P=i(q);{var d=p=>{var b=Ra();J(b,"for",`bunkmate-${g}-name`),m(p,b)};D(P,p=>{g===0&&p(d)})}var f=s(P,2);ce(f),J(f,"id",`bunkmate-${g}-name`),me(f,(p,b)=>r[b].field=p,p=>r?.[p]?.field,()=>[g]),o(q);var h=s(q,2),w=i(h);{var S=p=>{var b=Da();J(b,"for",`bunkmate-${g}-age`),m(p,b)};D(w,p=>{g===0&&p(S)})}var x=s(w,2);J(x,"id",`bunkmate-${g}-age`),x.__change=[La,e];var F=i(x);F.value=F.__value="adult";var Z=s(F);Z.value=Z.__value="child",o(x),o(h);var I=s(h,2);I.__click=()=>n(g),le(I,1,`btn btn-error btn-square ${g===0?"btn-disabled":""}`);var Y=i(I);ct(Y,{size:16}),o(I),o(C),fe(f,()=>t().bunkmates[g].name,p=>t(t().bunkmates[g].name=p,!0)),ke(x,()=>t().bunkmates[g].ageGroup,p=>t(t().bunkmates[g].ageGroup=p,!0)),m(E,C)});var W=s(L,2);W.__click=[Fa,r,t,e];var O=i(W);dt(O,{size:16}),o(W),o(A),G(()=>T(y,`Add the details for any friends
		${t().payingFor==="family"?"(outside your family)":""}
		who will be sharing your accommodation. Use the + (plus) button below to add
		bunkmates.`)),m(v,c)},$$slots:{default:!0}}),U()}ye(["change","click"]);function Ga(a,e,t,r){e.push({field:null,type:"input",validators:[se]}),t().familyMembers.push({name:"",ageGroup:"adult"}),r.calculateCosts()}var za=N('<label class="label">Given Name</label>'),Ba=N('<label class="label">Age Group</label>'),Ua=(a,e)=>e.calculateCosts(),Ha=N('<div class="flex gap-2 items-end self-stretch"><div class="flex flex-col gap-1 grow"><!> <input type="text" class="input"/></div> <div class="flex flex-col gap-1"><!> <select class="select"><option>Adult</option><option>Child (Under 18)</option></select></div> <button><!></button></div>'),ja=N('<p class="mb-2">Add the details for your spouse/family here.<br/> Use the + (plus) button below to add family members.</p> <div class="flex flex-col items-end gap-2"><!> <button class="btn btn-success btn-square"><!></button></div>',1);function Ya(a,e){B(e,!0);let t=pe(e,"formValues",15);const r=he(t().familyMembers.map(()=>({field:null,type:"input",validators:[se]})));function n(v){r.splice(v,1),t().familyMembers.splice(v,1),e.calculateCosts()}be(a,{get Icon(){return ut},title:"Family Details",get controls(){return r},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(v,u)=>{var c=ja(),M=s(z(c),2),y=i(M);ge(y,17,()=>t().familyMembers,_e,(W,O,E)=>{var _=Ha(),g=i(_),C=i(g);{var q=I=>{var Y=za();J(Y,"for",`family-member-${E}-name`),m(I,Y)};D(C,I=>{E===0&&I(q)})}var P=s(C,2);ce(P),J(P,"id",`family-member-${E}-name`),me(P,(I,Y)=>r[Y].field=I,I=>r?.[I]?.field,()=>[E]),o(g);var d=s(g,2),f=i(d);{var h=I=>{var Y=Ba();J(Y,"for",`family-member-${E}-age`),m(I,Y)};D(f,I=>{E===0&&I(h)})}var w=s(f,2);J(w,"id",`family-member-${E}-age`),w.__change=[Ua,e];var S=i(w);S.value=S.__value="adult";var x=s(S);x.value=x.__value="child",o(w),o(d);var F=s(d,2);F.__click=()=>n(E),le(F,1,`btn btn-error btn-square ${E===0?"btn-disabled":""}`);var Z=i(F);ct(Z,{size:16}),o(F),o(_),fe(P,()=>t().familyMembers[E].name,I=>t(t().familyMembers[E].name=I,!0)),ke(w,()=>t().familyMembers[E].ageGroup,I=>t(t().familyMembers[E].ageGroup=I,!0)),m(W,_)});var A=s(y,2);A.__click=[Ga,r,t,e];var L=i(A);dt(L,{size:16}),o(A),o(M),m(v,c)},$$slots:{default:!0}}),U()}ye(["change","click"]);var Ja=N('<div class="flex gap-2"><div class="flex flex-col gap-1"><label for="given-name" class="label">Given Name</label> <input type="text" id="given-name" autocomplete="given-name" class="input"/></div> <div class="flex flex-col gap-1"><label for="family-name" class="label">Family Name</label> <input type="text" id="family-name" autocomplete="family-name" class="input"/></div></div> <div class="flex flex-col gap-1"><label for="email-address" class="label">Email Address</label> <input type="email" id="email-address" autocomplete="email" class="input"/></div> <div class="flex flex-col gap-1"><label for="mobile-number" class="label">Mobile Number</label> <input type="tel" id="mobile-number" autocomplete="tel" class="input"/></div>',1);function Za(a,e){B(e,!0);let t=pe(e,"formValues",15);const r=he({"given-name":{field:null,type:"input",validators:[se]},"family-name":{field:null,type:"input",validators:[se]},"email-address":{field:null,type:"input",validators:[se,Ca]},"mobile-number":{field:null,type:"input",validators:[se,ka]}});{let n=j(()=>Object.values(r));be(a,{get Icon(){return ta},title:"My Details",get controls(){return l(n)},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(v,u)=>{var c=Ja(),M=z(c),y=i(M),A=s(i(y),2);ce(A),me(A,C=>r["given-name"].field=C,()=>r?.["given-name"]?.field),o(y);var L=s(y,2),W=s(i(L),2);ce(W),me(W,C=>r["family-name"].field=C,()=>r?.["family-name"]?.field),o(L),o(M);var O=s(M,2),E=s(i(O),2);ce(E),me(E,C=>r["email-address"].field=C,()=>r?.["email-address"]?.field),o(O);var _=s(O,2),g=s(i(_),2);ce(g),me(g,C=>r["mobile-number"].field=C,()=>r?.["mobile-number"]?.field),o(_),fe(A,()=>t().givenName,C=>t(t().givenName=C,!0)),fe(W,()=>t().familyName,C=>t(t().familyName=C,!0)),fe(E,()=>t().emailAddress,C=>t(t().emailAddress=C,!0)),fe(g,()=>t().mobileNumber,C=>t(t().mobileNumber=C,!0)),m(v,c)},$$slots:{default:!0}})}U()}var Qa=N(`<div class="flex flex-col gap-1"><label for="dietary-requirements" class="label">Dietary Requirements</label> <input type="text" id="dietary-requirements" class="input"/> <p class="label whitespace-normal">This applies to the catered meal on Saturday night.<br/> All other meals will be self-catered.</p></div> <div class="flex flex-col gap-1"><label for="notes" class="label">Anything else you'd like us to know?</label> <textarea id="notes" class="textarea w-full resize-none"></textarea></div>`,1);function Ka(a,e){B(e,!0);let t=pe(e,"formValues",15);be(a,{get Icon(){return oa},title:"Other",get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(r,n)=>{var v=Qa(),u=z(v),c=s(i(u),2);ce(c),Ee(2),o(u);var M=s(u,2),y=s(i(M),2);Bt(y),o(M),fe(c,()=>t().dietaryRequirements,A=>t(t().dietaryRequirements=A,!0)),fe(y,()=>t().notes,A=>t(t().notes=A,!0)),m(r,v)},$$slots:{default:!0}}),U()}var Xa=(a,e)=>e.calculateCosts(),$a=N('<div class="flex gap-2"><input type="radio" name="paying-for" class="radio"/> <label> </label></div>'),er=(a,e)=>e.calculateCosts(),tr=N('<div class="flex gap-2"><input type="radio" name="sharing-with" class="radio"/> <div class="flex flex-col"><label> </label> <span class="label text-xs whitespace-normal"><!></span></div></div>'),ar=N(`<p class="mb-2">Please select the options that best describe your accommodation sharing
		situation. Camp Elim prices their accommodation based on the number of
		adults and children sharing a room, hence the need to provide this
		information to calculate your costs.</p> <div class="flex flex-col gap-2 mb-2"><p class="label">I am paying for accommodation for...</p> <!></div> <p class="mb-2"> </p> <div class="flex flex-col gap-2"><p class="label"> </p> <!></div>`,1);function rr(a,e){B(e,!0);const t=[],r=[];let n=pe(e,"formValues",15);const v=he({"paying-for":{field:null,type:"radio",validators:[se]}});let u=j(()=>!n().payingFor||n().payingFor==="myself"?{possessive:"my",pronoun:"I",pronounCaps:"I",verb:"am"}:{possessive:"our",pronoun:"we",pronounCaps:"We",verb:"are"});{let c=j(()=>Object.values(v));be(a,{get Icon(){return ea},title:"Who I'm Staying With",get controls(){return l(c)},get active(){return e.active},get visited(){return e.visited},get onback(){return e.onback},get onnext(){return e.onnext},children:(M,y)=>{var A=ar(),L=s(z(A),2),W=s(i(L),2);ge(W,17,()=>ua,_e,(P,d)=>{var f=$a(),h=i(f);ce(h),h.__change=[Xa,e];var w,S=s(h,2),x=i(S,!0);o(S),o(f),G(()=>{J(h,"id",l(d).value),w!==(w=l(d).value)&&(h.value=(h.__value=l(d).value)??""),J(S,"for",`paying-for-${l(d).value??""}`),T(x,l(d).label)}),et(t,[],h,()=>(l(d).value,n().payingFor),F=>n(n().payingFor=F,!0)),m(P,f)}),o(L),me(L,P=>v["paying-for"].field=P,()=>v?.["paying-for"]?.field);var O=s(L,2),E=i(O);o(O);var _=s(O,2),g=i(_),C=i(g);o(g);var q=s(g,2);ge(q,17,()=>va,_e,(P,d)=>{var f=tr(),h=i(f);ce(h),h.__change=[er,e];var w,S=s(h,2),x=i(S),F=i(x,!0);o(x);var Z=s(x,2),I=i(Z);{var Y=b=>{var k=ue();G(()=>T(k,`${l(u).pronounCaps??""}'ve organised a group of friends who
							${l(u).pronoun??""} will share
							${l(u).possessive??""} accommodation with.`)),m(b,k)},p=b=>{var k=K(),Q=z(k);{var H=te=>{var X=ue();G(()=>T(X,`${l(u).pronounCaps??""}'ve not organised a group, but
							${l(u).pronoun??""}
							${l(u).verb??""} willing to share
							${l(u).possessive??""} accommodation with others if needed.`)),m(te,X)};D(Q,te=>{l(d).value==="anyone"&&te(H)},!0)}m(b,k)};D(I,b=>{l(d).value==="friends"?b(Y):b(p,!1)})}o(Z),o(S),o(f),G(()=>{J(h,"id",l(d).value),w!==(w=l(d).value)&&(h.value=(h.__value=l(d).value)??""),J(x,"for",`sharing-with-${l(d).value??""}`),T(F,l(d).label)}),et(r,[],h,()=>(l(d).value,n().sharingWith),b=>n(n().sharingWith=b,!0)),m(P,f)}),o(_),G(()=>{T(E,`If you would like to split your room with some friends
		${n().payingFor==="family"?" outside of your family":""} you can
		specify that here. The costs of accommodation will be automatically calculated
		and split between all parties sharing a room/site. The more bunkmates you have,
		the cheaper the cost will be per person!`),T(C,`${l(u).pronounCaps??""} will share ${l(u).possessive??""}
			accommodation with...`)}),m(M,A)},$$slots:{default:!0}})}U()}ye(["change"]);var lr=N("<th>Your Share</th>"),or=N('<td class="bg-primary/5"> </td>'),nr=N('<td class="bg-primary/5"> </td>'),ir=N('<td class="bg-primary/5"> </td>'),sr=N('<th class="bg-primary/5"> </th>'),dr=N('<th class="bg-primary/5 border border-primary"> </th>'),cr=N("<td></td>"),ur=N('<dialog id="costBreakdownModal" class="modal"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-square btn-ghost absolute right-4 top-4"><!></button></form> <h3 class="text-lg font-bold mb-4">Cost Breakdown</h3> <div class="overflow-x-auto rounded-box border border-base-300"><table class="table table-sm sm:table-md"><colgroup><col style="min-width: 8rem"/><col/><col/><col/><col style="min-width: 6rem;"/></colgroup><tbody><tr class="bg-base-200"><th>Item</th><th>Rate</th><th>Qty</th><th>Subtotal</th><!></tr><tr class="bg-base-200"><td><strong>Accommodation</strong><br/> <!></td></tr><tr><td> </td><td> </td><td> </td><td> </td><!></tr><tr><td>Extra Adult</td><td> </td><td> </td><td> </td><!></tr><tr><td>Extra Child</td><td> </td><td> </td><td> </td><!></tr><tr><th colspan="3">Per Night</th><th> </th><!></tr><tr><th colspan="3"> </th><th> </th><!></tr><tr class="bg-base-200"><td><strong>Shared</strong><br/> Saturday dinner is a per-person contribution.</td></tr><tr><td>Saturday Dinner</td><td> </td><td> </td><!><td class="bg-primary/5"> </td></tr><tr><th>Grand Total</th><th class="bg-primary border border-primary text-primary-content"> </th></tr></tbody></table></div></div></dialog>');function vr(a,e){B(e,!0);const t=j(()=>e.accommodationCosts.total),r=j(()=>e.accommodationCosts.split),n=j(()=>e.formValues.sharingWith==="friends"),v=j(()=>e.formValues.payingFor==="family"?e.formValues.familyMembers.length+1:1),u=j(()=>je*(e.formValues.sharingDinner?l(v):0)),c=V=>V?`$${V}`:"-";var M=ur(),y=i(M),A=i(y),L=i(A),W=i(L);na(W,{size:16}),o(L),o(A);var O=s(A,4),E=i(O),_=s(i(E)),g=i(_),C=s(i(g),4);{var q=V=>{var R=lr();m(V,R)};D(C,V=>{l(n)&&V(q)})}o(g);var P=s(g),d=i(P),f=s(i(d),3);{var h=V=>{var R=ue(`Subtotal is calculated based on all occupants and is then split\r
								into individual shares. You only need to pay your share.`);m(V,R)};D(f,V=>{l(n)&&V(h)})}o(d),o(P);var w=s(P),S=i(w),x=i(S,!0);o(S);var F=s(S),Z=i(F,!0);o(F);var I=s(F),Y=i(I,!0);o(I);var p=s(I),b=i(p,!0);o(p);var k=s(p);{var Q=V=>{var R=or(),re=i(R,!0);o(R),G(de=>T(re,de),[()=>c(l(r).nightly.room)]),m(V,R)};D(k,V=>{l(n)&&V(Q)})}o(w);var H=s(w),te=s(i(H)),X=i(te,!0);o(te);var ae=s(te),we=i(ae,!0);o(ae);var ve=s(ae),Ve=i(ve,!0);o(ve);var Pe=s(ve);{var vt=V=>{var R=nr(),re=i(R,!0);o(R),G(de=>T(re,de),[()=>c(l(r).nightly.additionalAdults)]),m(V,R)};D(Pe,V=>{l(n)&&V(vt)})}o(H);var Ie=s(H),Fe=s(i(Ie)),mt=i(Fe,!0);o(Fe);var Re=s(Fe),ft=i(Re,!0);o(Re);var Ae=s(Re),ht=i(Ae,!0);o(Ae);var gt=s(Ae);{var _t=V=>{var R=ir(),re=i(R,!0);o(R),G(de=>T(re,de),[()=>c(l(r).nightly.additionalChildren)]),m(V,R)};D(gt,V=>{l(n)&&V(_t)})}o(Ie);var De=s(Ie),Me=s(i(De)),bt=i(Me,!0);o(Me);var yt=s(Me);{var pt=V=>{var R=sr(),re=i(R,!0);o(R),G(de=>T(re,de),[()=>c(l(r).nightly.total)]),m(V,R)};D(yt,V=>{l(n)&&V(pt)})}o(De);var Le=s(De),We=i(Le),xt=i(We);o(We);var Se=s(We),Ct=i(Se);o(Se);var kt=s(Se);{var wt=V=>{var R=dr(),re=i(R);o(R),G(()=>T(re,`$${l(r).total??""}`)),m(V,R)};D(kt,V=>{l(n)&&V(wt)})}o(Le);var qe=s(Le),At=i(qe);o(qe);var Oe=s(qe),Ge=s(i(Oe)),Mt=i(Ge,!0);o(Ge);var ze=s(Ge),St=i(ze,!0);o(ze);var Je=s(ze);{var Tt=V=>{var R=cr();m(V,R)};D(Je,V=>{l(n)&&V(Tt)})}var Ze=s(Je),Nt=i(Ze,!0);o(Ze),o(Oe);var Qe=s(Oe),Ke=i(Qe),Xe=s(Ke),Et=i(Xe);o(Xe),o(Qe),o(_),o(E),o(O),o(y),o(M),G((V,R,re,de,Vt,Pt,It,Ft,Rt)=>{J(d,"colspan",l(n)?5:4),T(x,e.formValues.preferredAccommodationType||"None"),T(Z,V),T(Y,e.formValues.preferredAccommodationType?1:"-"),le(p,1,Ce({"bg-primary/5":!l(n)})),T(b,R),T(X,re),T(we,e.accommodationCosts.additionalAdults||"-"),le(ve,1,Ce({"bg-primary/5":!l(n)})),T(Ve,de),T(mt,Vt),T(ft,e.accommodationCosts.additionalChildren||"-"),le(Ae,1,Ce({"bg-primary/5":!l(n)})),T(ht,Pt),le(Me,1,Ce({"bg-primary/5":!l(n)})),T(bt,It),T(xt,`Total (${e.formValues.stayingNights??""} Night${e.formValues.stayingNights!==1?"s":""})`),le(Se,1,Ce({"bg-primary/5 border border-primary":!l(n)})),T(Ct,`$${l(t).total??""}`),J(At,"colspan",l(n)?5:4),T(Mt,Ft),T(St,e.formValues.sharingDinner?l(v):"-"),T(Nt,Rt),J(Ke,"colspan",l(n)?4:3),T(Et,`$${e.formValues.costs.grandTotal??""}`)},[()=>c(l(t).nightly.room),()=>c(l(t).nightly.room),()=>c(Ne.nightly.additionalAdult),()=>c(l(t).nightly.additionalAdults),()=>c(Ne.nightly.additionalChild),()=>c(l(t).nightly.additionalChildren),()=>c(l(t).nightly.total),()=>c(je),()=>c(l(u))]),m(a,M),U()}var mr=()=>costBreakdownModal.showModal(),fr=N(`<p>If someone else would like to share accommodation, we'll contact you to
			arrange it. After registration closes, you'll receive another email with
			your final total (if your have some bunkmates, <strong>your costs will come down</strong>) and instructions for how to
			pay.</p>`),hr=N(`<p> <strong> </strong>. <button class="link label">How'd we arrive at that figure?</button></p> <p>When you submit this form you will receive an email to confirm that you have
		registered. <!></p> <!> <p><!> Can't wait to see you there!</p> <!>`,1);function gr(a,e){B(e,!0),be(a,{get Icon(){return aa},title:"Summary",get active(){return e.active},get visited(){return e.visited},get formState(){return e.formState},get onback(){return e.onback},get onnext(){return e.onnext},get onsubmit(){return e.onsubmit},children:(t,r)=>{var n=hr(),v=z(n),u=i(v),c=s(u),M=i(c);o(c);var y=s(c,2);y.__click=[mr],o(v);var A=s(v,2),L=s(i(A));{var W=d=>{var f=ue("It will also include more information about camp.");m(d,f)},O=d=>{var f=ue(`It will also include your total, with instructions for how to pay and more\r
			information about camp.`);m(d,f)};D(L,d=>{e.formValues.sharingWith==="anyone"?d(W):d(O,!1)})}o(A);var E=s(A,2);{var _=d=>{var f=fr();m(d,f)};D(E,d=>{e.formValues.sharingWith==="anyone"&&d(_)})}var g=s(E,2),C=i(g);{var q=d=>{var f=ue(`Once everything is booked, we'll let you know what cabin/room number\r
			you'll be in.`);m(d,f)};D(C,d=>{e.formValues.preferredAccommodationType!=="Powered Site"&&d(q)})}Ee(),o(g);var P=s(g,2);vr(P,{get formValues(){return e.formValues},get accommodationCosts(){return e.accommodationCosts}}),G(()=>{T(u,`The total cost for the weekend for
		${e.formValues.payingFor==="family"?"your family":"you"} is `),T(M,`$${e.formValues.costs.grandTotal??""}`)}),m(t,n)},$$slots:{default:!0}}),U()}ye(["click"]);const _r=""+new URL("../assets/form-banner-alt.ThAPCllC.jpg",import.meta.url).href;var br=N(`<p>Welcome! We're excited to spend some time away together in 2026! In case you
		missed it, we'll be spending the weekend together:</p> <ul class="pl-4"><li>at <strong>Camp Elim</strong> in Forster</li> <li>from the evening of <strong>Friday 30th Jan</strong></li> <li>to the afternoon of <strong>Sunday 1st Feb</strong>.</li></ul> <p>We look forward to seeing you there! Follow the prompts to register.</p>`,1);function yr(a,e){be(a,{get imageSrc(){return _r},get Icon(){return ra},title:"2026 Church Weekend Away Registration",get active(){return e.active},get visited(){return e.visited},get onnext(){return e.onnext},children:(t,r)=>{var n=br();Ee(4),m(t,n)},$$slots:{default:!0}})}var pr=N('<div class="flex flex-col items-center gap-4 p-4"></div>');function Tr(a,e){B(e,!0);let t=he({stepIndex:0,isLoading:!1}),r=Ut(he({givenName:"",familyName:"",emailAddress:"",mobileNumber:"",payingFor:"",sharingWith:"nobody",familyMembers:[{name:"",ageGroup:"adult"}],bunkmates:[{name:"",ageGroup:"adult"}],arrivalTime:"Friday Evening",departureTime:"Sunday Afternoon",stayingNights:2,sharingDinner:!0,preferredAccommodationType:"",costs:{accommodationTotal:0,accommodationSplit:0,sharedTotal:0,grandTotal:0},dietaryRequirements:"",notes:""})),n=he({additionalAdults:0,additionalChildren:0,total:{nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},split:{nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0}}),v=j(()=>{let _=[yr,Za,rr];return l(r).payingFor==="family"&&_.push(Ya),l(r).sharingWith==="friends"&&_.push(Oa),_.push(Ia),_.push(Ka),_.push(gr),_});const u=()=>y(t.stepIndex-1),c=()=>y(t.stepIndex+1),M=async()=>{t.isLoading=!0,await fetch(sa,{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(Kt(l(r)))}),Zt(ia("/form-submitted"))};async function y(_){t.stepIndex=_,await lt(),document.getElementsByClassName("scroll-catch")[_].scrollIntoView({behavior:"smooth"})}function A(){L(),l(r).preferredAccommodationType?W():O();let _=1;l(r).payingFor==="family"&&(_+=l(r).familyMembers.length),l(r).costs.sharedTotal=l(r).sharingDinner?je*_:0,l(r).costs.grandTotal=l(r).costs.accommodationSplit+l(r).costs.sharedTotal}function L(){const _=l(r).arrivalTime==="Friday Evening",g=l(r).departureTime==="Sunday Morning"||l(r).departureTime==="Sunday Afternoon";let C=0;_&&(C+=1),g&&(C+=1),l(r).stayingNights=C,l(r).sharingDinner=l(r).arrivalTime!=="Saturday Evening (After Dinner)"&&l(r).departureTime!=="Saturday Afternoon (Before Dinner)"}function W(){const _=n.total.nightly,g=n.split.nightly,C=Ye.find(x=>x.name===l(r).preferredAccommodationType);let q=0,P=1;if(l(r).payingFor==="family"){const x=l(r).familyMembers;q+=x.filter(F=>F.ageGroup==="child").length,P+=x.length-q}let d=0,f=0;if(l(r).sharingWith==="friends"){const x=l(r).bunkmates;d+=x.filter(F=>F.ageGroup==="child").length,f+=x.length-d}const h=f+d>0;f+=P,d+=q;let w=f,S=d;for(let x=0;x<2;x++)w>0?w--:S>0&&S--;if(_.room=C.rate,g.room=C.rate,h){const x=_.room/f;g.room=Math.ceil(x*P)}if(n.additionalAdults=w,n.additionalChildren=S,_.additionalAdults=w*Ne.nightly.additionalAdult,_.additionalChildren=S*Ne.nightly.additionalChild,g.additionalAdults=_.additionalAdults,g.additionalChildren=_.additionalChildren,h){if(_.additionalAdults){const x=_.additionalAdults/f;g.additionalAdults=Math.ceil(x*P)}if(_.additionalChildren&&d){const x=_.additionalChildren/d;g.additionalChildren=Math.ceil(x*q)}}_.total=_.room+_.additionalAdults+_.additionalChildren,g.total=g.room+g.additionalAdults+g.additionalChildren,n.total.total=_.total*l(r).stayingNights,n.split.total=g.total*l(r).stayingNights,l(r).costs.accommodationTotal=n.total.total,l(r).costs.accommodationSplit=n.split.total}function O(){n.total={nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},n.split={nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0}}var E=pr();ge(E,21,()=>l(v),_e,(_,g,C)=>{var q=K(),P=z(q);{let d=j(()=>C===t.stepIndex),f=j(()=>C<t.stepIndex),h=j(()=>C<l(v).length-1?c:void 0),w=j(()=>C===l(v).length-1?M:void 0);st(P,()=>l(g),(S,x)=>{x(S,{get formState(){return t},get accommodationCosts(){return n},calculateCosts:A,get active(){return l(d)},get visited(){return l(f)},onback:C>0?u:void 0,get onnext(){return l(h)},get onsubmit(){return l(w)},get formValues(){return l(r)},set formValues(F){Ht(r,F,!0)}})})}m(_,q)}),o(E),m(a,E),U()}export{Tr as component};
