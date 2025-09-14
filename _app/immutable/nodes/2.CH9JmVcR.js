import"../chunks/DsnmJJEf.js";import{i as Ie,a$ as Ve,b4 as Re,a1 as qe,e as Zt,aS as Fe,X as ut,t as Kt,J as Le,a2 as De,b5 as He,a8 as O,ab as G,aD as U,a9 as F,af as j,H as x,G as V,ac as l,ae as n,ad as r,I as bt,aa as W,u as Oe,aF as Qt,w as ft,q as s,aE as z,b6 as Ge,aC as ze,x as Je}from"../chunks/ZXj2Eqcl.js";import{I as K,s as pt,a as wt,b as We,e as ht,i as gt,r as et,d as xt}from"../chunks/V8BuF6xM.js";import{i as Y,c as $t,b as mt}from"../chunks/BOEK1XfF.js";import{b as Be,r as Ue,g as Ye}from"../chunks/B2_lQ9Qu.js";import{b as X,f as At,s as b}from"../chunks/CaydT6GA.js";import{s as Q,r as $,p as kt}from"../chunks/CpbKyDz9.js";const je=[];function Xe(e,t=!1,a=!1){return Ct(e,new Map,"",je,null,a)}function Ct(e,t,a,i,o=null,d=!1){if(typeof e=="object"&&e!==null){var u=t.get(e);if(u!==void 0)return u;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Ie(e)){var c=Array(e.length);t.set(e,c),o!==null&&t.set(o,c);for(var m=0;m<e.length;m+=1){var M=e[m];m in e&&(c[m]=Ct(M,t,a,i,null,d))}return c}if(Ve(e)===Re){c={},t.set(e,c),o!==null&&t.set(o,c);for(var w in e)c[w]=Ct(e[w],t,a,i,null,d);return c}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function"&&!d)return Ct(e.toJSON(),t,a,i,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function Ze(e,t,a){qe(()=>{var i=Zt(()=>t(e,a?.())||{});if(i?.destroy)return()=>i.destroy()})}function Z(e,t,a=t){var i=new WeakSet;Fe(e,"input",async o=>{var d=o?e.defaultValue:e.value;if(d=Ht(e)?Ot(d):d,a(d),ut!==null&&i.add(ut),await Kt(),d!==(d=t())){var u=e.selectionStart,c=e.selectionEnd;e.value=d??"",c!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(c,e.value.length))}}),(Le&&e.defaultValue!==e.value||Zt(t)==null&&e.value)&&(a(Ht(e)?Ot(e.value):e.value),ut!==null&&i.add(ut)),De(()=>{var o=t();if(e===document.activeElement){var d=He??ut;if(i.has(d))return}Ht(e)&&o===Ot(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function Ht(e){var t=e.type;return t==="number"||t==="range"}function Ot(e){return e===""?null:+e}function Ke(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];K(e,Q({name:"contact"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function Qe(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];K(e,Q({name:"plus"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function $e(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];K(e,Q({name:"receipt-text"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function ta(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];K(e,Q({name:"tent-tree"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function ea(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];K(e,Q({name:"tent"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function aa(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];K(e,Q({name:"trash"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function ra(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];K(e,Q({name:"users"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function la(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];K(e,Q({name:"utensils"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function na(e,t){O(t,!0);/**
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
 */let a=$(t,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];K(e,Q({name:"x"},()=>a,{get iconNode(){return i},children:(o,d)=>{var u=U(),c=F(u);X(c,()=>t.children??j),x(o,u)},$$slots:{default:!0}})),G()}function oa(e,t){return Be+Ue(e,t)}const ia="https://script.google.com/macros/s/AKfycbwJPPaUPJ30Roz2VennpVdNwDTkIcpp2J-KG1TBWo8-4q5euJTwn-9m_wkdXVweVCdljg/exec",te=40,Gt=5,zt=[{name:"Powered Site",rate:39,sleeps:20},{name:"Bunk Room",rate:72,sleeps:9},{name:"Lakeside Cabin",rate:138,sleeps:7},{name:"Family Room",rate:138,sleeps:13}],sa=["Friday Evening","Saturday Morning","Saturday Afternoon"],da=["Saturday Afternoon","Sunday Morning","Sunday Afternoon"],lt={nightly:{lakesideHall:200,additionalAdult:15,additionalChild:10}};var ca=V("<figure><img/></figure>"),ua=V('<button class="btn">Back</button>'),ma=(e,t,a)=>{t()&&a.onnext()},va=V('<button class="btn btn-primary">Next</button>'),fa=(e,t,a)=>{t()&&a.onsubmit()},ha=V('<span class="loading loading-spinner"></span>'),ga=V('<button class="btn btn-primary"><!></button>'),ba=V('<!> <div></div> <div class="flex flex-row self-end gap-2 mt-4"><!> <!> <!></div>',1),_a=V('<div><div><!> <div class="card-body gap-4 relative"><div><!></div> <div class="step-bar svelte-1qqvule"></div> <h2 class="card-title"> </h2> <!></div> <div class="scroll-catch svelte-1qqvule"></div></div></div>');function nt(e,t){O(t,!0);function a(){if(!t.controls)return!0;let v="";return t.controls.forEach(h=>{const y=i(h);y&&!v&&(v=y)}),v?(We({message:v,type:"warning"}),!1):!0}function i(v){let h;switch(v.type){case"input":h="input-error";break;case"select":h="select-error";break;default:throw new Error(`Unknown control type: ${v.type}`)}v.field.classList.remove(h);for(const y of v.validators){const T=y(v.field.value);if(T)return v.field.classList.add(h),T}return null}const o=v=>{Oe(()=>{if(!t.controls)return;const h=new AbortController;return t.controls.forEach(y=>{switch(y.type){case"input":y.field.addEventListener("input",()=>y.field.classList.remove("input-error"),{signal:h.signal});break;case"select":y.field.addEventListener("change",()=>y.field.classList.remove("select-error"),{signal:h.signal});break}}),()=>h.abort()})};var d=_a();let u;var c=l(d);let m;var M=l(c);{var w=v=>{var h=ca(),y=l(h);r(h),W(()=>{wt(y,"src",t.imageSrc),wt(y,"alt",t.title)}),x(v,h)};Y(M,v=>{t.imageSrc&&v(w)})}var P=n(M,2),S=l(P);let I;var C=l(S);{var _=v=>{var h=U(),y=F(h);$t(y,()=>t.Icon,(T,R)=>{R(T,{size:"16"})}),x(v,h)};Y(C,v=>{t.active&&v(_)})}r(S);var f=n(S,4),p=l(f,!0);r(f);var L=n(f,2);{var D=v=>{var h=ba(),y=F(h);X(y,()=>t.children??j);var T=n(y,2);Ze(T,q=>o?.());var R=n(T,2),k=l(R);{var B=q=>{var g=ua();g.__click=function(...N){t.onback?.apply(this,N)},W(()=>g.disabled=t.formState?.isLoading),x(q,g)};Y(k,q=>{t.onback&&q(B)})}var H=n(k,2);{var ot=q=>{var g=va();g.__click=[ma,a,t],W(()=>g.disabled=t.formState?.isLoading),x(q,g)};Y(H,q=>{t.onnext&&q(ot)})}var tt=n(H,2);{var it=q=>{var g=ga();g.__click=[fa,a,t];var N=l(g);{var A=E=>{var at=ha();x(E,at)},J=E=>{var at=Qt("Submit");x(E,at)};Y(N,E=>{t.formState?.isLoading?E(A):E(J,!1)})}r(g),W(()=>g.disabled=t.formState?.isLoading),x(q,g)};Y(tt,q=>{t.onsubmit&&q(it)})}r(R),x(v,h)};Y(L,v=>{t.active&&v(D)})}r(P),bt(2),r(c),r(d),W((v,h,y)=>{u=pt(d,1,"card-wrapper w-lg max-w-full svelte-1qqvule",null,u,v),m=pt(c,1,"card w-lg max-w-full relative bg-base-100",null,m,h),I=pt(S,1,"step svelte-1qqvule",null,I,y),b(p,t.title)},[()=>({active:t.active,visited:t.visited}),()=>({"shadow-md":t.active,"bg-base-200":!t.active}),()=>({"shadow-sm":t.active})]),x(e,d),G()}At(["click"]);const vt=e=>e===""?"Please fill in the required fields.":null,ya=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?null:"Please enter a valid email address.",pa=e=>(e=e.replace(/\s+/g,""),/^(?:\+614|04)\d{8}$/.test(e)?null:"Please enter a valid mobile number.");var xa=(e,t)=>t.calculateCosts(),Ca=V("<option> </option>"),wa=(e,t)=>t.calculateCosts(),Aa=V("<option> </option>"),ka=(e,t)=>t.calculateCosts(),Ma=(e,t)=>t.calculateCosts(),Sa=(e,t)=>t.calculateCosts(),Ta=V("<option> </option>"),Na=V("<br/>Your share of that cost will be <strong> </strong> ",1),Ea=V('<p class="mt-4">The total cost of accommodation will be <strong> </strong> <!></p>'),Pa=V(`<p>Fill out the fields below to select your accommodation preference and
        receive a cost estimate for your accommodation. Final costs will be
        provided at the end of the form.</p> <p class="mb-2">Camp Elim prices their accommodation based on the number of adults and
        children sharing a room, hence the need to provide these numbers to
        calculate your cost. The more bunkmates you have, the cheaper your
        accommodation will be!</p> <div class="flex flex-col gap-1"><p class="label whitespace-normal">Arrival/Departure</p> <label class="select mb-1"><span class="label">arrive</span> <select id="arrival-time" class="select"></select></label> <label class="select"><span class="label">depart</span> <select id="departure-time" class="select"></select></label></div> <div class="flex flex-col gap-1"><p class="label whitespace-normal"> </p> <div class="flex gap-2"><label class="input"><input type="text" id="adults-count"/> <span class="label">adults</span></label> <label class="input"><input type="text" id="children-count"/> <span class="label">children</span></label></div> <p class="label whitespace-normal"> </p></div> <div class="flex flex-col gap-1"><label for="accommodation-type" class="label">Accommodation Type</label> <select id="accommodation-type" class="select"></select> <p>Some accommodation types are unavailable due to the size of your
            party.</p></div> <!>`,1);function Ia(e,t){O(t,!0);let a=kt(t,"formValues",15);const i=z(()=>(a().additionalAdults||0)+(a().additionalChildren||0)),o=z(()=>a().familyMembers.length+1+s(i)),d=z(()=>{const c=zt.map(m=>m.sleeps);return s(o)>Math.min(...c)}),u=ft({"accommodation-type":{field:null,type:"select",validators:[vt]}});{let c=z(()=>Object.values(u));nt(e,{get Icon(){return ea},title:"Accommodation",get controls(){return s(c)},get active(){return t.active},get visited(){return t.visited},get onback(){return t.onback},get onnext(){return t.onnext},children:(m,M)=>{var w=Pa(),P=n(F(w),4),S=n(l(P),2),I=n(l(S),2);I.__change=[xa,t],ht(I,21,()=>sa,gt,(g,N)=>{var A=Ca(),J=l(A,!0);r(A);var E={};W(()=>{b(J,s(N)),E!==(E=s(N))&&(A.value=(A.__value=s(N))??"")}),x(g,A)}),r(I),r(S);var C=n(S,2),_=n(l(C),2);_.__change=[wa,t],ht(_,21,()=>da,gt,(g,N)=>{var A=Aa(),J=l(A,!0);r(A);var E={};W(()=>{b(J,s(N)),E!==(E=s(N))&&(A.value=(A.__value=s(N))??"")}),x(g,A)}),r(_),r(C),r(P);var f=n(P,2),p=l(f),L=l(p);r(p);var D=n(p,2),v=l(D),h=l(v);et(h),h.__input=[ka,t],bt(2),r(v);var y=n(v,2),T=l(y);et(T),T.__input=[Ma,t],bt(2),r(y),r(D);var R=n(D,2),k=l(R);r(R),r(f);var B=n(f,2),H=n(l(B),2);H.__change=[Sa,t],ht(H,21,()=>zt,gt,(g,N)=>{var A=Ta(),J=l(A,!0);r(A);var E={};W(()=>{A.disabled=s(N).sleeps<s(o),b(J,s(N).name),E!==(E=s(N).name)&&(A.value=(A.__value=s(N).name)??"")}),x(g,A)}),r(H),mt(H,g=>u["accommodation-type"].field=g,()=>u?.["accommodation-type"]?.field);var ot=n(H,2);let tt;r(B);var it=n(B,2);{var q=g=>{var N=Ea(),A=n(l(N)),J=l(A);r(A);var E=n(A),at=n(E);{var st=dt=>{var rt=Na(),ct=n(F(rt),2),_t=l(ct);r(ct);var Mt=n(ct);W(()=>{b(_t,`$${t.accommodationCosts.split.total??""}`),b(Mt,`.
                ($${t.accommodationCosts.split.nightly.total??""}/night)`)}),x(dt,rt)};Y(at,dt=>{s(i)>0&&dt(st)})}r(N),W(()=>{b(J,`$${t.accommodationCosts.total.total??""}`),b(E,`.
            ($${t.accommodationCosts.total.nightly.total??""}/night) `)}),x(g,N)};Y(it,g=>{a().preferredAccommodationType&&g(q)})}W(g=>{b(L,`${a().familyMembers.length?"We":"I"}
            will be bunking with...`),b(k,`Any additional families or individuals who will be sharing your
            accommodation with you. Exclude yourself
            ${a().familyMembers.length?"and your family":""}
            from the count.`),tt=pt(ot,1,"label whitespace-normal",null,tt,g)},[()=>({hidden:!s(d)})]),xt(I,()=>a().arrivalTime,g=>a(a().arrivalTime=g,!0)),xt(_,()=>a().departureTime,g=>a(a().departureTime=g,!0)),Z(h,()=>a().additionalAdults?.toString()||"",g=>a(a().additionalAdults=g?+g:null,!0)),Z(T,()=>a().additionalChildren?.toString()||"",g=>a(a().additionalChildren=g?+g:null,!0)),xt(H,()=>a().preferredAccommodationType,g=>a(a().preferredAccommodationType=g,!0)),x(m,w)},$$slots:{default:!0}})}G()}At(["change","input"]);function Va(e,t,a){t().familyMembers.push({name:"",ageGroup:"adult"}),a.calculateCosts()}var Ra=(e,t)=>t.calculateCosts(),qa=V('<tr><td><input type="text" class="input"/></td><td><select class="select"><option>Adult</option><option>Child (Under 18)</option></select></td><td><button class="btn btn-error btn-square"><!></button></td></tr>'),Fa=V(`<p class="mb-2">If you're bringing your family and would like to register them also,
        you can include them here.</p> <table class="table table-xs"><thead><tr><th>Given Name</th><th>Age Group</th><th class="w-1/100"></th></tr></thead><tbody><!><tr><td></td><td></td><td><button class="btn btn-success btn-square"><!></button></td></tr></tbody></table>`,1);function La(e,t){O(t,!0);let a=kt(t,"formValues",15);function i(o){a().familyMembers.splice(o,1),t.calculateCosts()}nt(e,{get Icon(){return ra},title:"Family Details",get active(){return t.active},get visited(){return t.visited},get onback(){return t.onback},get onnext(){return t.onnext},children:(o,d)=>{var u=Fa(),c=n(F(u),2),m=n(l(c)),M=l(m);ht(M,17,()=>a().familyMembers,gt,(C,_,f)=>{var p=qa(),L=l(p),D=l(L);et(D),wt(D,"id",`family-member-${f}-name`),r(L);var v=n(L),h=l(v);wt(h,"id",`family-member-${f}-age`),h.__change=[Ra,t];var y=l(h);y.value=y.__value="adult";var T=n(y);T.value=T.__value="child",r(h),r(v);var R=n(v),k=l(R);k.__click=()=>i(f);var B=l(k);aa(B,{size:16}),r(k),r(R),r(p),Z(D,()=>a().familyMembers[f].name,H=>a(a().familyMembers[f].name=H,!0)),xt(h,()=>a().familyMembers[f].ageGroup,H=>a(a().familyMembers[f].ageGroup=H,!0)),x(C,p)});var w=n(M),P=n(l(w),2),S=l(P);S.__click=[Va,a,t];var I=l(S);Qe(I,{size:16}),r(S),r(P),r(w),r(m),r(c),x(o,u)},$$slots:{default:!0}}),G()}At(["change","click"]);var Da=V(`<div class="flex flex-col gap-1"><label for="dietary-requirements" class="label">Dietary Requirements</label> <input type="text" id="dietary-requirements" class="input"/></div> <div class="flex flex-col gap-1"><label for="notes" class="label">Anything else you'd like us to know?</label> <textarea id="notes" class="textarea w-full"></textarea></div>`,1);function Ha(e,t){O(t,!0);let a=kt(t,"formValues",15);nt(e,{get Icon(){return la},title:"Other",get active(){return t.active},get visited(){return t.visited},get onback(){return t.onback},get onnext(){return t.onnext},children:(i,o)=>{var d=Da(),u=F(d),c=n(l(u),2);et(c),r(u);var m=n(u,2),M=n(l(m),2);Ge(M),r(m),Z(c,()=>a().dietaryRequirements,w=>a(a().dietaryRequirements=w,!0)),Z(M,()=>a().notes,w=>a(a().notes=w,!0)),x(i,d)},$$slots:{default:!0}}),G()}var Oa=V('<dialog id="costBreakdownModal" class="modal"><div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-square btn-ghost absolute right-4 top-4"><!></button></form> <h3 class="text-lg font-bold mb-4">Cost Breakdown</h3> <div class="overflow-x-auto rounded-box border border-base-300"><table class="table table-sm sm:table-md"><colgroup><col style="min-width: 8rem"/><col/><col/><col/><col style="min-width: 6rem;"/></colgroup><tbody><tr class="bg-base-200"><th>Item</th><th>Rate</th><th>Qty</th><th>Subtotal</th><th>Your Share</th></tr><tr class="bg-base-200"><td colspan="5"><strong>Accommodation</strong><br/> Subtotal is calculated based on all occupants and is then split into individual shares. You only need to pay your share.</td></tr><tr><td> </td><td> </td><td>1</td><td> </td><td class="bg-primary/5"> </td></tr><tr><td>Extra Adult</td><td> </td><td> </td><td> </td><td class="bg-primary/5"> </td></tr><tr><td>Extra Child</td><td> </td><td> </td><td> </td><td class="bg-primary/5"> </td></tr><tr><th colspan="3">Per Night</th><th> </th><th class="bg-primary/5"> </th></tr><tr><th colspan="3"> </th><th> </th><th class="bg-primary/5 border border-primary"> </th></tr><tr class="bg-base-200"><td colspan="5"><strong>Shared</strong><br/> The Lakeside Hall booking cost is estimated based on expected attendance. Saturday dinner is a per-person contribution.</td></tr><tr><td>Lakeside Hall</td><td> </td><td> </td><td></td><td class="bg-primary/5"> </td></tr><tr><td>Saturday Dinner</td><td> </td><td> </td><td></td><td class="bg-primary/5"> </td></tr><tr><th colspan="4">Total</th><th class="bg-primary/5 border border-primary"> </th></tr><tr><th colspan="4">Grand Total</th><th class="bg-primary border border-primary text-primary-content"> </th></tr></tbody></table></div></div></dialog>');function Ga(e,t){O(t,!0);const a=z(()=>t.accommodationCosts.total),i=z(()=>t.accommodationCosts.split),o=z(()=>t.formState.familyMembers.length+1),d=z(()=>lt.nightly.lakesideHall*2/te),u=z(()=>s(d)*s(o)),c=z(()=>Gt*s(o)),m=yt=>yt?`$${yt}`:"-";var M=Oa(),w=l(M),P=l(w),S=l(P),I=l(S);na(I,{size:16}),r(S),r(P);var C=n(P,4),_=l(C),f=n(l(_)),p=n(l(f),2),L=l(p),D=l(L,!0);r(L);var v=n(L),h=l(v,!0);r(v);var y=n(v,2),T=l(y,!0);r(y);var R=n(y),k=l(R,!0);r(R),r(p);var B=n(p),H=n(l(B)),ot=l(H,!0);r(H);var tt=n(H),it=l(tt,!0);r(tt);var q=n(tt),g=l(q,!0);r(q);var N=n(q),A=l(N,!0);r(N),r(B);var J=n(B),E=n(l(J)),at=l(E,!0);r(E);var st=n(E),dt=l(st,!0);r(st);var rt=n(st),ct=l(rt,!0);r(rt);var _t=n(rt),Mt=l(_t,!0);r(_t),r(J);var St=n(J),Tt=n(l(St)),ee=l(Tt,!0);r(Tt);var Jt=n(Tt),ae=l(Jt,!0);r(Jt),r(St);var Nt=n(St),Et=l(Nt),re=l(Et);r(Et);var Pt=n(Et),le=l(Pt,!0);r(Pt);var Wt=n(Pt),ne=l(Wt,!0);r(Wt),r(Nt);var It=n(Nt,2),Vt=n(l(It)),oe=l(Vt,!0);r(Vt);var Rt=n(Vt),ie=l(Rt,!0);r(Rt);var Bt=n(Rt,2),se=l(Bt,!0);r(Bt),r(It);var qt=n(It),Ft=n(l(qt)),de=l(Ft,!0);r(Ft);var Lt=n(Ft),ce=l(Lt,!0);r(Lt);var Ut=n(Lt,2),ue=l(Ut,!0);r(Ut),r(qt);var Dt=n(qt),Yt=n(l(Dt)),me=l(Yt,!0);r(Yt),r(Dt);var jt=n(Dt),Xt=n(l(jt)),ve=l(Xt,!0);r(Xt),r(jt),r(f),r(_),r(C),r(w),r(M),W((yt,fe,he,ge,be,_e,ye,pe,xe,Ce,we,Ae,ke,Me,Se,Te,Ne,Ee,Pe)=>{b(D,t.formState.preferredAccommodationType),b(h,yt),b(T,fe),b(k,he),b(ot,ge),b(it,t.accommodationCosts.additionalAdults||"-"),b(g,be),b(A,_e),b(at,ye),b(dt,t.accommodationCosts.additionalChildren||"-"),b(ct,pe),b(Mt,xe),b(ee,Ce),b(ae,we),b(re,`Total (${t.accommodationCosts.nights??""} Night${t.accommodationCosts.nights!==1?"s":""})`),b(le,Ae),b(ne,ke),b(oe,Me),b(ie,s(o)),b(se,Se),b(de,Te),b(ce,s(o)),b(ue,Ne),b(me,Ee),b(ve,Pe)},[()=>m(s(a).nightly.room),()=>m(s(a).nightly.room),()=>m(s(i).nightly.room),()=>m(lt.nightly.additionalAdult),()=>m(s(a).nightly.additionalAdults),()=>m(s(i).nightly.additionalAdults),()=>m(lt.nightly.additionalChild),()=>m(s(a).nightly.additionalChildren),()=>m(s(i).nightly.additionalChildren),()=>m(s(a).nightly.total),()=>m(s(i).nightly.total),()=>m(s(a).total),()=>m(s(i).total),()=>m(s(d)),()=>m(s(u)),()=>m(Gt),()=>m(s(c)),()=>m(t.formState.costs.sharedTotal),()=>m(t.formState.costs.grandTotal)]),x(e,M),G()}var za=()=>costBreakdownModal.showModal(),Ja=V(`<p> <strong> </strong>. <button class="link label">How'd we arrive at that figure?</button></p> <p>Please pay this amount into the church account before [cut off date].
        When you submit this form an email will be sent to you with your total,
        the church account details and more information about camp.</p> <p><!> Can't wait to see you there!</p> <!>`,1);function Wa(e,t){O(t,!0),nt(e,{get Icon(){return $e},title:"Summary",get active(){return t.active},get visited(){return t.visited},get formState(){return t.formState},get onback(){return t.onback},get onnext(){return t.onnext},get onsubmit(){return t.onsubmit},children:(a,i)=>{var o=Ja(),d=F(o),u=l(d),c=n(u),m=l(c);r(c);var M=n(c,2);M.__click=[za],r(d);var w=n(d,4),P=l(w);{var S=C=>{var _=Qt(`Once everything is booked, we'll let you know what cabin/room\r
            number you'll be in.`);x(C,_)};Y(P,C=>{t.formValues.preferredAccommodationType!=="Powered Site"&&C(S)})}bt(),r(w);var I=n(w,2);Ga(I,{get formState(){return t.formValues},get accommodationCosts(){return t.accommodationCosts}}),W(()=>{b(u,`The total cost for the weekend for
        ${t.formValues.familyMembers.length?"your family":"you"} is `),b(m,`$${t.formValues.costs.grandTotal??""}`)}),x(a,o)},$$slots:{default:!0}}),G()}At(["click"]);var Ba=V(`<p>Welcome! We're excited to spend some time away together in 2026! In case you missed it, we'll be spending the weekend together:</p> <ul class="pl-4"><li>at <strong>Camp Elim</strong> in Forster</li> <li>from the evening of <strong>Friday 30th Jan</strong></li> <li>to the afternoon of <strong>Sunday 1st Feb</strong>.</li></ul> <p>We look forward to seeing you there! Follow the prompts to register.</p>`,1);function Ua(e,t){nt(e,{imageSrc:"https://www.multipure.com/product_images/uploaded_images/family-double-piggyback-small.jpg",get Icon(){return ta},title:"2026 Church Weekend Away Registration",get active(){return t.active},get visited(){return t.visited},get onnext(){return t.onnext},children:(a,i)=>{var o=Ba();bt(4),x(a,o)},$$slots:{default:!0}})}var Ya=V('<div class="flex gap-2"><div class="flex flex-col gap-1"><label for="given-name" class="label">Given Name</label> <input type="text" id="given-name" autocomplete="given-name" class="input"/></div> <div class="flex flex-col gap-1"><label for="family-name" class="label">Family Name</label> <input type="text" id="family-name" autocomplete="family-name" class="input"/></div></div> <div class="flex flex-col gap-1"><label for="email-address" class="label">Email Address</label> <input type="email" id="email-address" autocomplete="email" class="input"/></div> <div class="flex flex-col gap-1"><label for="mobile-number" class="label">Mobile Number</label> <input type="tel" id="mobile-number" autocomplete="tel" class="input"/></div>',1);function ja(e,t){O(t,!0);let a=kt(t,"formValues",15);const i=ft({"given-name":{field:null,type:"input",validators:[vt]},"family-name":{field:null,type:"input",validators:[vt]},"email-address":{field:null,type:"input",validators:[vt,ya]},"mobile-number":{field:null,type:"input",validators:[vt,pa]}});{let o=z(()=>Object.values(i));nt(e,{get Icon(){return Ke},title:"Your Details",get controls(){return s(o)},get active(){return t.active},get visited(){return t.visited},get onback(){return t.onback},get onnext(){return t.onnext},children:(d,u)=>{var c=Ya(),m=F(c),M=l(m),w=n(l(M),2);et(w),mt(w,p=>i["given-name"].field=p,()=>i?.["given-name"]?.field),r(M);var P=n(M,2),S=n(l(P),2);et(S),mt(S,p=>i["family-name"].field=p,()=>i?.["family-name"]?.field),r(P),r(m);var I=n(m,2),C=n(l(I),2);et(C),mt(C,p=>i["email-address"].field=p,()=>i?.["email-address"]?.field),r(I);var _=n(I,2),f=n(l(_),2);et(f),mt(f,p=>i["mobile-number"].field=p,()=>i?.["mobile-number"]?.field),r(_),Z(w,()=>a().givenName,p=>a(a().givenName=p,!0)),Z(S,()=>a().familyName,p=>a(a().familyName=p,!0)),Z(C,()=>a().emailAddress,p=>a(a().emailAddress=p,!0)),Z(f,()=>a().mobileNumber,p=>a(a().mobileNumber=p,!0)),x(d,c)},$$slots:{default:!0}})}G()}var Xa=V('<div class="flex flex-col items-center gap-4 p-4"></div>');function rr(e,t){O(t,!0);const a=[Ua,ja,La,Ia,Ha,Wa];let i=ft({stepIndex:0,isLoading:!1}),o=ze(ft({givenName:"",familyName:"",emailAddress:"",mobileNumber:"",familyMembers:[],arrivalTime:"Friday Evening",departureTime:"Sunday Afternoon",preferredAccommodationType:"",additionalAdults:0,additionalChildren:0,costs:{accommodationTotal:0,accommodationSplit:0,sharedTotal:0,grandTotal:0},dietaryRequirements:"",notes:""})),d=ft({nights:0,additionalAdults:0,additionalChildren:0,total:{nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},split:{nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0}});const u=()=>M(i.stepIndex-1),c=()=>M(i.stepIndex+1),m=async()=>{i.isLoading=!0,await fetch(ia,{redirect:"follow",method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(Xe(s(o)))}),Ye(oa("/form-submitted"))};async function M(C){i.stepIndex=C,await Kt(),document.getElementsByClassName("scroll-catch")[C].scrollIntoView({behavior:"smooth"})}function w(){if(!s(o).preferredAccommodationType){P();return}const C=S(),_=d.total.nightly,f=d.split.nightly,p=zt.find(k=>k.name===s(o).preferredAccommodationType),L=s(o).familyMembers.filter(k=>k.ageGroup==="child").length,D=s(o).familyMembers.length-L+1;let v=s(o).additionalChildren||0,h=s(o).additionalAdults||0;const y=h+v>0;h+=D,v+=L;let T=h,R=v;for(let k=0;k<2;k++)T>0?T--:R>0&&R--;if(_.room=p.rate,f.room=p.rate,y){const k=_.room/h;f.room=Math.ceil(k*D)}if(d.nights=C,d.additionalAdults=T,d.additionalChildren=R,_.additionalAdults=T*lt.nightly.additionalAdult,_.additionalChildren=R*lt.nightly.additionalChild,f.additionalAdults=_.additionalAdults,f.additionalChildren=_.additionalChildren,y){if(_.additionalAdults){const k=_.additionalAdults/h;f.additionalAdults=Math.ceil(k*D)}if(_.additionalChildren&&v){const k=_.additionalChildren/v;f.additionalChildren=Math.ceil(k*L)}}_.total=_.room+_.additionalAdults+_.additionalChildren,f.total=f.room+f.additionalAdults+f.additionalChildren,d.total.total=_.total*C,d.split.total=f.total*C,s(o).costs.accommodationTotal=d.total.total,s(o).costs.accommodationSplit=d.split.total,s(o).costs.sharedTotal=(lt.nightly.lakesideHall*2/te+Gt)*(s(o).familyMembers.length+1),s(o).costs.grandTotal=s(o).costs.accommodationSplit+s(o).costs.sharedTotal}function P(){d.total={nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0},d.split={nightly:{room:0,additionalAdults:0,additionalChildren:0,total:0},total:0}}function S(){const C=s(o).arrivalTime==="Friday Evening",_=s(o).departureTime==="Sunday Morning"||s(o).departureTime==="Sunday Afternoon";let f=0;return C&&(f+=1),_&&(f+=1),f}var I=Xa();ht(I,21,()=>a,gt,(C,_,f)=>{var p=U(),L=F(p);{let D=z(()=>f===i.stepIndex),v=z(()=>f<i.stepIndex),h=z(()=>f<a.length-1?c:void 0),y=z(()=>f===a.length-1?m:void 0);$t(L,()=>s(_),(T,R)=>{R(T,{get formState(){return i},get accommodationCosts(){return d},calculateCosts:w,get active(){return s(D)},get visited(){return s(v)},onback:f>0?u:void 0,get onnext(){return s(h)},get onsubmit(){return s(y)},get formValues(){return s(o)},set formValues(k){Je(o,k,!0)}})})}x(C,p)}),r(I),x(e,I),G()}export{rr as component};
