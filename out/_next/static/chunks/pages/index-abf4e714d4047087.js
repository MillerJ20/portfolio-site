(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8364)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),l=n(1003),i=n(7795),c=n(4465),f=n(2692),s=n(8245),d=n(9246),p=n(227),v=n(3468),m=new Set;function h(e,t,n,r){if(l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){var o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(function(e){})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}var b=u.default.forwardRef(function(e,t){var n,o,i=e.href,m=e.as,b=e.children,g=e.prefetch,_=e.passHref,j=e.replace,M=e.shallow,k=e.scroll,E=e.locale,x=e.onClick,C=e.onMouseEnter,w=e.onTouchStart,O=e.legacyBehavior,P=void 0===O?!0!==Boolean(!0):O,S=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,P&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));var N=!1!==g,A=u.default.useContext(f.RouterContext),I=u.default.useContext(s.AppRouterContext),L=null!=A?A:I,R=!A,T=u.default.useMemo(function(){if(!A){var e=y(i);return{href:e,as:m?y(m):e}}var t=r(l.resolveHref(A,i,!0),2),n=t[0],o=t[1];return{href:n,as:m?l.resolveHref(A,m):o||n}},[A,i,m]),B=T.href,H=T.as,U=u.default.useRef(B),D=u.default.useRef(H);P&&(o=u.default.Children.only(n));var J=P?o&&"object"==typeof o&&o.ref:t,K=r(d.useIntersection({rootMargin:"200px"}),3),Z=K[0],X=K[1],q=K[2],z=u.default.useCallback(function(e){(D.current!==H||U.current!==B)&&(q(),D.current=H,U.current=B),Z(e),J&&("function"==typeof J?J(e):"object"==typeof J&&(J.current=e))},[H,J,B,q,Z]);u.default.useEffect(function(){L&&X&&N&&h(L,B,H,{locale:E})},[H,B,X,E,N,null==A?void 0:A.locale,L]);var G={ref:z,onClick:function(e){P||"function"!=typeof x||x(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,a,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};f?u.default.startTransition(v):v()}}(e,L,B,H,j,M,k,E,R,N)},onMouseEnter:function(e){P||"function"!=typeof C||C(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(N||!R)&&h(L,B,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){P||"function"!=typeof w||w(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(N||!R)&&h(L,B,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||_||"a"===o.type&&!("href"in o.props)){var W=void 0!==E?E:null==A?void 0:A.locale,$=(null==A?void 0:A.isLocaleDomain)&&p.getDomainLocale(H,W,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);G.href=$||v.addBasePath(c.addLocale(H,W,null==A?void 0:A.defaultLocale))}return P?u.default.cloneElement(o,G):u.default.createElement("a",Object.assign({},S,G),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),v=p[0],m=p[1];return o.useEffect(function(){if(u){if(!c&&!s&&v&&v.tagName){var e,r,o,f;return r=(e=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,o=e.observer,(f=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(f.delete(v),o.unobserve(v),0===f.size){o.disconnect(),l.delete(r);var e=i.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var p=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(p)}}},[v,c,n,t,s]),[m,s,o.useCallback(function(){d(!1)},[])]};var o=n(7294),a=n(4686),u="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8364:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a=n(7294),u=function(e){var t=e.brand;return(0,r.jsx)("div",{className:"header",children:t.name})},l=n(1664),i=n.n(l),c=function(e){var t=e.links.map(function(e,t){return(0,r.jsx)(i(),{onMouseOver:function(){return document.documentElement.style.setProperty("--active-index","".concat(t))},href:e.to,className:"menu-item",children:e.name})});return(0,r.jsxs)("div",{id:"menu",children:[(0,r.jsx)("div",{id:"menu-items",children:t}),(0,r.jsx)("div",{id:"menu-background-pattern",className:"left"}),(0,r.jsx)("div",{id:"menu-background-pattern",className:"right"})]})},f={brand:{name:"Miller Johnston | Software Engineer",to:"/"},links:[{name:"LinkedIn",to:"https://www.linkedin.com/in/miller-johnston/"},{name:"GitHub",to:"https://github.com/MillerJ20"},{name:"Resume",to:"/assets/Miller Johnston SWE Resume(B).pdf"},{name:"Email",to:"mailto: miller.johnston17@gmail.com"},{name:"About",to:"/About"},{name:"Blog",to:"/Blog"}]},s=function(){var e,t=(function(e){if(Array.isArray(e))return e}(e=(0,a.useState)("Miller J"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,1)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];(0,a.useEffect)(function(){document.title=t},[t]);var n=f.brand,l=f.links;return(0,r.jsxs)("div",{className:"App",children:[(0,r.jsx)(u,{brand:n}),(0,r.jsx)(c,{links:l})]})},d=function(){return(0,r.jsx)(s,{})}},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);