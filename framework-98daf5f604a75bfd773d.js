(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[774],{15007:function(n,e,t){"use strict";t.r(e),t.d(e,{Children:function(){return xn},Component:function(){return b},Fragment:function(){return y},PureComponent:function(){return bn},StrictMode:function(){return oe},Suspense:function(){return On},SuspenseList:function(){return Tn},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:function(){return Jn},cloneElement:function(){return ne},createContext:function(){return V},createElement:function(){return h},createFactory:function(){return Qn},createPortal:function(){return An},createRef:function(){return m},default:function(){return ue},findDOMNode:function(){return te},flushSync:function(){return _e},forwardRef:function(){return En},hydrate:function(){return Vn},isValidElement:function(){return Xn},lazy:function(){return wn},memo:function(){return gn},render:function(){return In},unmountComponentAtNode:function(){return ee},unstable_batchedUpdates:function(){return re},useCallback:function(){return un},useContext:function(){return ln},useDebugValue:function(){return cn},useEffect:function(){return en},useErrorBoundary:function(){return fn},useImperativeHandle:function(){return _n},useLayoutEffect:function(){return tn},useMemo:function(){return on},useReducer:function(){return nn},useRef:function(){return rn},useState:function(){return X},version:function(){return Kn}});var r,_,o,u,i,l,c,f={},a=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(n,e){for(var t in e)n[t]=e[t];return n}function d(n){var e=n.parentNode;e&&e.removeChild(n)}function h(n,e,t){var _,o,u,i={};for(u in e)"key"==u?_=e[u]:"ref"==u?o=e[u]:i[u]=e[u];if(arguments.length>2&&(i.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(u in n.defaultProps)void 0===i[u]&&(i[u]=n.defaultProps[u]);return v(n,i,_,o,null)}function v(n,e,t,r,u){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==u?++o:u};return null==u&&null!=_.vnode&&_.vnode(i),i}function m(){return{current:null}}function y(n){return n.children}function b(n,e){this.props=n,this.context=e}function g(n,e){if(null==e)return n.__?g(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?g(n):null}function k(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return k(n)}}function C(n){(!n.__d&&(n.__d=!0)&&u.push(n)&&!E.__r++||l!==_.debounceRendering)&&((l=_.debounceRendering)||i)(E)}function E(){for(var n;E.__r=u.length;)n=u.sort((function(n,e){return n.__v.__b-e.__v.__b})),u=[],n.some((function(n){var e,t,r,_,o,u;n.__d&&(o=(_=(e=n).__v).__e,(u=e.__P)&&(t=[],(r=p({},_)).__v=_.__v+1,U(u,_,r,e.__n,void 0!==u.ownerSVGElement,null!=_.__h?[o]:null,t,null==o?g(_):o,_.__h),H(t,_),_.__e!=o&&k(_)))}))}function S(n,e,t,r,_,o,u,i,l,c){var s,p,d,h,m,b,k,C=r&&r.__k||a,E=C.length;for(t.__k=[],s=0;s<e.length;s++)if(null!=(h=t.__k[s]=null==(h=e[s])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?v(null,h,null,null,h):Array.isArray(h)?v(y,{children:h},null,null,null):h.__b>0?v(h.type,h.props,h.key,null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=C[s])||d&&h.key==d.key&&h.type===d.type)C[s]=void 0;else for(p=0;p<E;p++){if((d=C[p])&&h.key==d.key&&h.type===d.type){C[p]=void 0;break}d=null}U(n,h,d=d||f,_,o,u,i,l,c),m=h.__e,(p=h.ref)&&d.ref!=p&&(k||(k=[]),d.ref&&k.push(d.ref,null,h),k.push(p,h.__c||m,h)),null!=m?(null==b&&(b=m),"function"==typeof h.type&&h.__k===d.__k?h.__d=l=x(h,l,n):l=N(n,h,d,C,m,l),"function"==typeof t.type&&(t.__d=l)):l&&d.__e==l&&l.parentNode!=n&&(l=g(d))}for(t.__e=b,s=E;s--;)null!=C[s]&&("function"==typeof t.type&&null!=C[s].__e&&C[s].__e==t.__d&&(t.__d=g(r,s+1)),L(C[s],C[s]));if(k)for(s=0;s<k.length;s++)A(k[s],k[++s],k[++s])}function x(n,e,t){for(var r,_=n.__k,o=0;_&&o<_.length;o++)(r=_[o])&&(r.__=n,e="function"==typeof r.type?x(r,e,t):N(t,r,r,_,r.__e,e));return e}function P(n,e){return e=e||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){P(n,e)})):e.push(n)),e}function N(n,e,t,r,_,o){var u,i,l;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==t||_!=o||null==_.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(_),u=null;else{for(i=o,l=0;(i=i.nextSibling)&&l<r.length;l+=2)if(i==_)break n;n.insertBefore(_,o),u=o}return void 0!==u?u:_.nextSibling}function O(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||s.test(e)?t:t+"px"}function R(n,e,t,r,_){var o;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||O(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||O(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?r||n.addEventListener(e,o?T:w,o):n.removeEventListener(e,o?T:w,o);else if("dangerouslySetInnerHTML"!==e){if(_)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null!=t&&(!1!==t||"a"===e[0]&&"r"===e[1])?n.setAttribute(e,t):n.removeAttribute(e))}}function w(n){this.l[n.type+!1](_.event?_.event(n):n)}function T(n){this.l[n.type+!0](_.event?_.event(n):n)}function U(n,e,t,r,o,u,i,l,c){var f,a,s,d,h,v,m,g,k,C,E,x=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(c=t.__h,l=e.__e=t.__e,e.__h=null,u=[l]),(f=_.__b)&&f(e);try{n:if("function"==typeof x){if(g=e.props,k=(f=x.contextType)&&r[f.__c],C=f?k?k.props.value:f.__:r,t.__c?m=(a=e.__c=t.__c).__=a.__E:("prototype"in x&&x.prototype.render?e.__c=a=new x(g,C):(e.__c=a=new b(g,C),a.constructor=x,a.render=W),k&&k.sub(a),a.props=g,a.state||(a.state={}),a.context=C,a.__n=r,s=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=x.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=p({},a.__s)),p(a.__s,x.getDerivedStateFromProps(g,a.__s))),d=a.props,h=a.state,s)null==x.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==x.getDerivedStateFromProps&&g!==d&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,C)||e.__v===t.__v){a.props=g,a.state=a.__s,e.__v!==t.__v&&(a.__d=!1),a.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach((function(n){n&&(n.__=e)})),a.__h.length&&i.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,C),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(d,h,v)}))}a.context=C,a.props=g,a.state=a.__s,(f=_.__r)&&f(e),a.__d=!1,a.__v=e,a.__P=n,f=a.render(a.props,a.state,a.context),a.state=a.__s,null!=a.getChildContext&&(r=p(p({},r),a.getChildContext())),s||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(d,h)),E=null!=f&&f.type===y&&null==f.key?f.props.children:f,S(n,Array.isArray(E)?E:[E],e,t,r,o,u,i,l,c),a.base=e.__e,e.__h=null,a.__h.length&&i.push(a),m&&(a.__E=a.__=null),a.__e=!1}else null==u&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=D(t.__e,e,t,r,o,u,i,c);(f=_.diffed)&&f(e)}catch(n){e.__v=null,(c||null!=u)&&(e.__e=l,e.__h=!!c,u[u.indexOf(l)]=null),_.__e(n,e,t)}}function H(n,e){_.__c&&_.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){_.__e(n,e.__v)}}))}function D(n,e,t,_,o,u,i,l){var c,a,s,p=t.props,h=e.props,v=e.type,m=0;if("svg"===v&&(o=!0),null!=u)for(;m<u.length;m++)if((c=u[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){n=c,u[m]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),u=null,l=!1}if(null===v)p===h||l&&n.data===h||(n.data=h);else{if(u=u&&r.call(n.childNodes),a=(p=t.props||f).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(null!=u)for(p={},m=0;m<n.attributes.length;m++)p[n.attributes[m].name]=n.attributes[m].value;(s||a)&&(s&&(a&&s.__html==a.__html||s.__html===n.innerHTML)||(n.innerHTML=s&&s.__html||""))}if(function(n,e,t,r,_){var o;for(o in t)"children"===o||"key"===o||o in e||R(n,o,null,t[o],r);for(o in e)_&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===e[o]||R(n,o,e[o],t[o],r)}(n,h,p,o,l),s)e.__k=[];else if(m=e.props.children,S(n,Array.isArray(m)?m:[m],e,t,_,o&&"foreignObject"!==v,u,i,u?u[0]:t.__k&&g(t,0),l),null!=u)for(m=u.length;m--;)null!=u[m]&&d(u[m]);l||("value"in h&&void 0!==(m=h.value)&&(m!==p.value||m!==n.value||"progress"===v&&!m)&&R(n,"value",m,p.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==n.checked&&R(n,"checked",m,p.checked,!1))}return n}function A(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){_.__e(n,t)}}function L(n,e,t){var r,o;if(_.unmount&&_.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||A(r,null,e)),null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){_.__e(n,e)}r.base=r.__P=null}if(r=n.__k)for(o=0;o<r.length;o++)r[o]&&L(r[o],e,"function"!=typeof n.type);t||null==n.__e||d(n.__e),n.__e=n.__d=void 0}function W(n,e,t){return this.constructor(n,t)}function F(n,e,t){var o,u,i;_.__&&_.__(n,e),u=(o="function"==typeof t)?null:t&&t.__k||e.__k,i=[],U(e,n=(!o&&t||e).__k=h(y,null,[n]),u||f,f,void 0!==e.ownerSVGElement,!o&&t?[t]:u?null:e.firstChild?r.call(e.childNodes):null,i,!o&&t?t:u?u.__e:e.firstChild,o),H(i,n)}function M(n,e){F(n,e,M)}function I(n,e,t){var _,o,u,i=p({},n.props);for(u in e)"key"==u?_=e[u]:"ref"==u?o=e[u]:i[u]=e[u];return arguments.length>2&&(i.children=arguments.length>3?r.call(arguments,2):t),v(n.type,i,_||n.key,o||n.ref,null)}function V(n,e){var t={__c:e="__cC"+c++,__:n,Consumer:function(n,e){return n.children(e)},Provider:function(n){var t,r;return this.getChildContext||(t=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.some(C)},this.sub=function(n){t.push(n);var e=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),e&&e.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}r=a.slice,_={__e:function(n,e){for(var t,r,_;e=e.__;)if((t=e.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),_=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n),_=t.__d),_)return t.__E=t}catch(e){n=e}throw n}},o=0,b.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof n&&(n=n(p({},t),this.props)),n&&p(t,n),null!=n&&this.__v&&(e&&this.__h.push(e),C(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),C(this))},b.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E.__r=0,c=0;var $,B,j,z=0,q=[],Y=_.__b,G=_.__r,Z=_.diffed,J=_.__c,K=_.unmount;function Q(n,e){_.__h&&_.__h(B,n,z||e),z=0;var t=B.__H||(B.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function X(n){return z=1,nn(vn,n)}function nn(n,e,t){var r=Q($++,2);return r.t=n,r.__c||(r.__=[t?t(e):vn(void 0,e),function(n){var e=r.t(r.__[0],n);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=B),r.__}function en(n,e){var t=Q($++,3);!_.__s&&hn(t.__H,e)&&(t.__=n,t.__H=e,B.__H.__h.push(t))}function tn(n,e){var t=Q($++,4);!_.__s&&hn(t.__H,e)&&(t.__=n,t.__H=e,B.__h.push(t))}function rn(n){return z=5,on((function(){return{current:n}}),[])}function _n(n,e,t){z=6,tn((function(){"function"==typeof n?n(e()):n&&(n.current=e())}),null==t?t:t.concat(n))}function on(n,e){var t=Q($++,7);return hn(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function un(n,e){return z=8,on((function(){return n}),e)}function ln(n){var e=B.context[n.__c],t=Q($++,9);return t.c=n,e?(null==t.__&&(t.__=!0,e.sub(B)),e.props.value):n.__}function cn(n,e){_.useDebugValue&&_.useDebugValue(e?e(n):n)}function fn(n){var e=Q($++,10),t=X();return e.__=n,B.componentDidCatch||(B.componentDidCatch=function(n){e.__&&e.__(n),t[1](n)}),[t[0],function(){t[1](void 0)}]}function an(){var n;for(q.sort((function(n,e){return n.__v.__b-e.__v.__b}));n=q.pop();)if(n.__P)try{n.__H.__h.forEach(pn),n.__H.__h.forEach(dn),n.__H.__h=[]}catch(o){n.__H.__h=[],_.__e(o,n.__v)}}_.__b=function(n){B=null,Y&&Y(n)},_.__r=function(n){G&&G(n),$=0;var e=(B=n.__c).__H;e&&(e.__h.forEach(pn),e.__h.forEach(dn),e.__h=[])},_.diffed=function(n){Z&&Z(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(1!==q.push(e)&&j===_.requestAnimationFrame||((j=_.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(r),sn&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);sn&&(e=requestAnimationFrame(t))})(an)),B=null},_.__c=function(n,e){e.some((function(n){try{n.__h.forEach(pn),n.__h=n.__h.filter((function(n){return!n.__||dn(n)}))}catch(i){e.some((function(n){n.__h&&(n.__h=[])})),e=[],_.__e(i,n.__v)}})),J&&J(n,e)},_.unmount=function(n){K&&K(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{pn(n)}catch(n){e=n}})),e&&_.__e(e,t.__v))};var sn="function"==typeof requestAnimationFrame;function pn(n){var e=B,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),B=e}function dn(n){var e=B;n.__c=n.__(),B=e}function hn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function vn(n,e){return"function"==typeof e?e(n):e}function mn(n,e){for(var t in e)n[t]=e[t];return n}function yn(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var r in e)if("__source"!==r&&n[r]!==e[r])return!0;return!1}function bn(n){this.props=n}function gn(n,e){function t(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:yn(this.props,n)}function r(e){return this.shouldComponentUpdate=t,h(n,e)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(bn.prototype=new b).isPureReactComponent=!0,bn.prototype.shouldComponentUpdate=function(n,e){return yn(this.props,n)||yn(this.state,e)};var kn=_.__b;_.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),kn&&kn(n)};var Cn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function En(n){function e(e,t){var r=mn({},e);return delete r.ref,n(r,(t=e.ref||t)&&("object"!=typeof t||"current"in t)?t:null)}return e.$$typeof=Cn,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var Sn=function(n,e){return null==n?null:P(P(n).map(e))},xn={map:Sn,forEach:Sn,count:function(n){return n?P(n).length:0},only:function(n){var e=P(n);if(1!==e.length)throw"Children.only";return e[0]},toArray:P},Pn=_.__e;_.__e=function(n,e,t){if(n.then)for(var r,_=e;_=_.__;)if((r=_.__c)&&r.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e);Pn(n,e,t)};var Nn=_.unmount;function On(){this.__u=0,this.t=null,this.__b=null}function Rn(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function wn(n){var e,t,r;function _(_){if(e||(e=n()).then((function(n){t=n.default||n}),(function(n){r=n})),r)throw r;if(!t)throw e;return h(t,_)}return _.displayName="Lazy",_.__f=!0,_}function Tn(){this.u=null,this.o=null}_.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&!0===n.__h&&(n.type=null),Nn&&Nn(n)},(On.prototype=new b).__c=function(n,e){var t=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(t);var _=Rn(r.__v),o=!1,u=function(){o||(o=!0,t.__R=null,_?_(i):i())};t.__R=u;var i=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(e,t,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return n(e,t,r)})),e.__c&&e.__c.__P===t&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(n,n.__c.__P,n.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},l=!0===e.__h;r.__u++||l||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(u,u)},On.prototype.componentWillUnmount=function(){this.t=[]},On.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),e.__c.__H=null),null!=(e=mn({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return n(e,t,r)}))),e}(this.__b,t,r.__O=r.__P)}this.__b=null}var _=e.__e&&h(y,null,n.fallback);return _&&(_.__h=null),[h(y,null,e.__e?null:n.children),_]};var Un=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function Hn(n){return this.getChildContext=function(){return n.context},n.children}function Dn(n){var e=this,t=n.i;e.componentWillUnmount=function(){F(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),n.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),F(h(Hn,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function An(n,e){return h(Dn,{__v:n,i:e})}(Tn.prototype=new b).__e=function(n){var e=this,t=Rn(e.__v),r=e.o.get(n);return r[0]++,function(_){var o=function(){e.props.revealOrder?(r.push(_),Un(e,n,r)):_()};t?t(o):o()}},Tn.prototype.render=function(n){this.u=null,this.o=new Map;var e=P(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Tn.prototype.componentDidUpdate=Tn.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){Un(n,t,e)}))};var Ln="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Wn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Fn="undefined"!=typeof document,Mn=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function In(n,e,t){return null==e.__k&&(e.textContent=""),F(n,e),"function"==typeof t&&t(),n?n.__c:null}function Vn(n,e,t){return M(n,e),"function"==typeof t&&t(),n?n.__c:null}b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(b.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var $n=_.event;function Bn(){}function jn(){return this.cancelBubble}function zn(){return this.defaultPrevented}_.event=function(n){return $n&&(n=$n(n)),n.persist=Bn,n.isPropagationStopped=jn,n.isDefaultPrevented=zn,n.nativeEvent=n};var qn,Yn={configurable:!0,get:function(){return this.class}},Gn=_.vnode;_.vnode=function(n){var e=n.type,t=n.props,r=t;if("string"==typeof e){var _=-1===e.indexOf("-");for(var o in r={},t){var u=t[o];Fn&&"children"===o&&"noscript"===e||"value"===o&&"defaultValue"in t&&null==u||("defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===u?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!Mn(t.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():_&&Wn.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[o]=u)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=P(t.children).forEach((function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=P(t.children).forEach((function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value}))),n.props=r,t.class!=t.className&&(Yn.enumerable="className"in t,null!=t.className&&(r.class=t.className),Object.defineProperty(r,"className",Yn))}n.$$typeof=Ln,Gn&&Gn(n)};var Zn=_.__r;_.__r=function(n){Zn&&Zn(n),qn=n.__c};var Jn={ReactCurrentDispatcher:{current:{readContext:function(n){return qn.__n[n.__c].props.value}}}},Kn="17.0.2";function Qn(n){return h.bind(null,n)}function Xn(n){return!!n&&n.$$typeof===Ln}function ne(n){return Xn(n)?I.apply(null,arguments):n}function ee(n){return!!n.__k&&(F(null,n),!0)}function te(n){return n&&(n.base||1===n.nodeType&&n)||null}var re=function(n,e){return n(e)},_e=function(n,e){return n(e)},oe=y,ue={useState:X,useReducer:nn,useEffect:en,useLayoutEffect:tn,useRef:rn,useImperativeHandle:_n,useMemo:on,useCallback:un,useContext:ln,useDebugValue:cn,version:"17.0.2",Children:xn,render:In,hydrate:Vn,unmountComponentAtNode:ee,createPortal:An,createElement:h,createContext:V,createFactory:Qn,cloneElement:ne,createRef:m,Fragment:y,isValidElement:Xn,findDOMNode:te,Component:b,PureComponent:bn,memo:gn,forwardRef:En,flushSync:_e,unstable_batchedUpdates:re,StrictMode:y,Suspense:On,SuspenseList:Tn,lazy:wn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Jn}},92703:function(n,e,t){"use strict";var r=t(50414);function _(){}function o(){}o.resetWarningCache=_,n.exports=function(){function n(n,e,t,_,o,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:_};return t.PropTypes=t,t}},45697:function(n,e,t){n.exports=t(92703)()},50414:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=framework-98daf5f604a75bfd773d.js.map