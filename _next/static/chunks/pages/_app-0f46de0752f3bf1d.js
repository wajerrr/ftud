(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8174)}])},2773:function(e,t,n){"use strict";var r=n(5893);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},6026:function(e,t,n){"use strict";n.d(t,{F:function(){return r},v:function(){return o}});let r="From The Upper Deck",o="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},9783:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return s}});let o="refresh",l="navigate",i="restore",a="server-patch",c="prefetch",u="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},358:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(4005),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),o=r._(n(7294)),l=n(6722),i=n(4812),a=n(7822),c=n(9938),u=n(5017),s=n(5734),f=n(8503),d=n(7549),p=n(358),h=n(1417),x=n(9783),g=new Set;function m(e,t,n,r,o,l){if(!l&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(g.has(l))return;g.add(l)}let a=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:g,children:v,prefetch:j=null,passHref:y,replace:_,shallow:k,scroll:O,locale:E,onClick:C,onMouseEnter:N,onTouchStart:P,legacyBehavior:T=!1,...R}=e;n=v,T&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let w=o.default.useContext(s.RouterContext),M=o.default.useContext(f.AppRouterContext),A=null!=w?w:M,F=!w,I=!1!==j,S=null===j?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,{href:L,as:U}=o.default.useMemo(()=>{if(!w){let e=b(a);return{href:e,as:g?b(g):e}}let[e,t]=(0,l.resolveHref)(w,a,!0);return{href:e,as:g?(0,l.resolveHref)(w,g):t||e}},[w,a,g]),K=o.default.useRef(L),D=o.default.useRef(U);T&&(r=o.default.Children.only(n));let H=T?r&&"object"==typeof r&&r.ref:t,[z,V,Z]=(0,d.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(D.current!==U||K.current!==L)&&(Z(),D.current=U,K.current=L),z(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[U,H,L,Z,z]);o.default.useEffect(()=>{A&&V&&I&&m(A,L,U,{locale:E},{kind:S},F)},[U,L,V,E,I,null==w?void 0:w.locale,A,F,S]);let G={ref:B,onClick(e){T||"function"!=typeof C||C(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,l,a,c,u,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let h=()=>{let e=null==c||c;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:a,locale:u,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};s?o.default.startTransition(h):h()}(e,A,L,U,_,k,O,E,F,I)},onMouseEnter(e){T||"function"!=typeof N||N(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(I||!F)&&m(A,L,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:S},F)},onTouchStart(e){T||"function"!=typeof P||P(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(I||!F)&&m(A,L,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:S},F)}};if((0,c.isAbsoluteUrl)(U))G.href=U;else if(!T||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);G.href=t||(0,h.addBasePath)((0,u.addLocale)(U,e,null==w?void 0:w.defaultLocale))}return T?o.default.cloneElement(r,G):o.default.createElement("a",{...R,...G},n)}),j=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),o=n(517),l="function"==typeof IntersectionObserver,i=new Map,a=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,u=c||!l,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(u||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),i.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,s,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8174:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(2773),l=()=>(0,r.jsx)("footer",{className:"bg-neutral-50 border-t border-neutral-200",children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Statically Generated with Next.js."}),(0,r.jsx)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:(0,r.jsx)("a",{href:"https://nextjs.org/docs/basic-features/pages",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"})})]})})}),i=n(1664),a=n.n(i),c=n(6026),u=()=>(0,r.jsx)("header",{children:(0,r.jsx)("h1",{className:"bg-slate-200 text-2xl md:text-2xl font-semi-bold tracking-tight leading-tight p-2",children:(0,r.jsx)(a(),{href:"/",className:"hover:underline",children:c.F})})}),s=n(9008),f=n.n(s),d=()=>(0,r.jsxs)(f(),{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:c.F}),(0,r.jsx)("meta",{property:"og:image",content:c.v})]}),p=e=>{let{preview:t,children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:"pt-10 pb-10 max-w-4xl m-auto",children:(0,r.jsx)("main",{children:n})}),(0,r.jsx)(l,{})]})};function h(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(p,{children:[(0,r.jsx)(f(),{children:(0,r.jsx)("title",{children:c.F})}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(t,{...n})})]})}n(9610)},9610:function(){},9008:function(e,t,n){e.exports=n(4605)},1664:function(e,t,n){e.exports=n(2994)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(8355)}),_N_E=e.O()}]);