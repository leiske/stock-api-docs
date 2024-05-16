"use strict";(self.webpackChunkstock_api_docs=self.webpackChunkstock_api_docs||[]).push([[488],{34899:function(e,t,n){n.d(t,{k:function(){return h}});var i=n(87462),a=n(42982),r=n(15007),s=n(1597),l=n(44264),o=n(95223),u=n(75900),c=n.n(u),d=n(77158),m=n(22222),p=n(63184);var v={name:"18ajqm7",styles:"box-sizing:border-box;padding:var(--spectrum-global-dimension-size-400);overflow:auto;height:calc(100vh - var(--spectrum-global-dimension-size-800))"},f={name:"v90p7h",styles:"&:not(.is-expanded) .spectrum-SideNav{display:none;}&:first-of-type .spectrum-SideNav-heading{margin-top:0;}"},g={name:"v90p7h",styles:"&:not(.is-expanded) .spectrum-SideNav{display:none;}&:first-of-type .spectrum-SideNav-heading{margin-top:0;}"},h=function(e){var t=e.versions,n=e.mainNavPages,u=e.selectedPages,h=e.selectedSubPages,b=e.setShowSideNav,N=e.location,Z=(0,r.useState)([]),S=Z[0],k=Z[1],x=(0,r.useState)([]),w=x[0],z=x[1],y=(0,r.useState)(!1),L=y[0],C=y[1],E=(0,r.useState)(!1),P=E[0],q=E[1],I=(0,r.useState)({}),U=I[0],_=I[1],A=h.some((function(e){return e.header})),G=h.some((function(e){var t;return(null==e||null===(t=e.pages)||void 0===t?void 0:t.length)>0})),O=(0,r.useRef)(null),R=function(e){O.current&&!O.current.contains(e.target)&&C(!1)};(0,r.useEffect)((function(){return document.addEventListener("click",R,!0),function(){document.removeEventListener("click",R,!0)}}),[]),(0,r.useEffect)((function(){var e=function(e,t){var n=(0,l.A6)(e.pathname),i=(0,l.Gh)(t),a=i.indexOf((0,l.Yx)(n,i)),r=n.split("/"),s=r.indexOf("use-cases");if(-1===a&&s>-1){r[s+1]="agreements-and-contracts",r[s+2]="sales-proposals-and-contracts",null==r[s+3]&&r.push("");var o=r.join("/");a=i.indexOf((0,l.Yx)(o,i))}return-1===a&&(a=0),a}(N,n),t=(0,l.A6)(N.pathname);_((0,l.xH)(t,n[e]))}),[N.pathname]),(0,r.useEffect)((function(){window.innerWidth<=parseInt(l.q9)?q(!0):q(!1),window.addEventListener("resize",(function(){window.innerWidth<=parseInt(l.q9)?q(!0):q(!1)}))}),[]);var j=function e(t,n){return t.filter((function(e){return e.title})).map((function(t,r){var p=u.find((function(e){return e===t})),v=(0,d.ZP)(),g=t.href?t.href:"#"+t.title.toLowerCase();return!p||L||w.includes(g)||z((function(e){return[].concat((0,a.Z)(e),[g])})),(0,o.tZ)("li",{key:r,role:"treeitem","aria-level":n,"aria-expanded":t.header||w.includes(g),css:f,className:c()(["spectrum-SideNav-item",{"is-expanded":t.header||w.includes(g)},{"is-selected":u[u.length-1]===t&&p}])},t.header?(0,o.tZ)("h2",{className:"spectrum-SideNav-heading",id:v},t.title):(0,l.Bm)(g)?(0,o.tZ)("a",(0,i.Z)({},(0,l.U3)(g),{href:g,className:"spectrum-SideNav-itemLink"}),t.title):(0,o.tZ)(s.rU,{onClick:function(){var e;C(!0),null!=t&&null!==(e=t.menu)&&void 0!==e&&e.length&&!t.header?w.includes(g)?z((function(e){return e.filter((function(e){return e!==g}))})):z([].concat((0,a.Z)(w),[g])):b(!1)},to:g,className:"spectrum-SideNav-itemLink"},U===t&&(0,o.tZ)(m.CheckMark,null),t.title,t.menu&&t.menu.length>0?(0,o.tZ)(m.ChevronRight,{css:(0,o.iv)("position:absolute;right:0px;width:var(--spectrum-global-dimension-size-125)!important;height:var(--spectrum-global-dimension-size-125)!important;margin-left:var(--spectrum-global-dimension-size-100);transition:transform var(--spectrum-global-animation-duration-100) ease-in-out;",w.includes(g)&&"transform: rotate(90deg);",";","")}):null),t.menu&&(0,o.tZ)("ul",(0,i.Z)({className:"spectrum-SideNav",role:"group",css:(0,o.iv)(n>1?"\n                    & > li > a {\n                      padding-left: calc("+(n+1)+" * var(--spectrum-global-dimension-size-150)) !important;\n                    }\n                  ":"",";","")},t.heading?{"aria-labelledby":v}:{}),e(t.menu,n+1)))}))};return(0,o.tZ)("nav",{ref:O,id:"side-menu",role:"navigation","aria-label":"Primary",css:(0,o.iv)("margin-top:var(--spectrum-global-dimension-size-800);@media screen and (max-width: ",l.q9,"){margin-top:var(--spectrum-global-dimension-size-400);}","")},(0,o.tZ)("div",{css:v},P&&(0,o.tZ)(r.default.Fragment,null,(0,o.tZ)("p",null,"Global Navigation"),(0,o.tZ)("ul",{role:"tree","aria-label":"Global Navigation",className:c()("spectrum-SideNav","spectrum-SideNav--multiLevel")},t&&j([{title:"Versions",menu:t}],1),j(n,1),(0,o.tZ)(p.A,{variant:"primary",href:"/console",id:"consoleId",tabIndex:"0"},"Console")),h.length>0&&(0,o.tZ)(r.default.Fragment,null,(0,o.tZ)("hr",null),(0,o.tZ)("p",null,"Table of contents"))),h.length>0&&(0,o.tZ)("ul",{role:"tree","aria-label":"Table of contents",className:c()("spectrum-SideNav",{"spectrum-SideNav--multiLevel":G&&!A})},function e(t,n){return t.filter((function(e){return e.title})).map((function(t,r){var p=u.find((function(e){return e===t})),v=(0,d.ZP)(),f=t.href?t.href:t.menu[0].href;return!p||L||S.includes(f)||k((function(e){return[].concat((0,a.Z)(e),[f])})),(0,o.tZ)("li",{key:r,role:"treeitem","aria-level":n,"aria-expanded":t.header||S.includes(f),css:g,className:c()(["spectrum-SideNav-item",{"is-expanded":t.header||S.includes(f)},{"is-selected":u[u.length-1]===t&&p}])},t.header?(0,o.tZ)("h2",{className:"spectrum-SideNav-heading",id:v},t.title):(0,l.Bm)(f)?(0,o.tZ)("a",(0,i.Z)({},(0,l.U3)(f),{href:f,className:"spectrum-SideNav-itemLink"}),t.title):(0,o.tZ)(s.rU,{onClick:function(){var e;C(!0),null!=t&&null!==(e=t.pages)&&void 0!==e&&e.length&&!t.header?S.includes(f)?k((function(e){return e.filter((function(e){return e!==f}))})):k([].concat((0,a.Z)(S),[f])):b(!1)},to:f,className:"spectrum-SideNav-itemLink"},t.title,t.pages&&t.pages.length>0?(0,o.tZ)(m.ChevronRight,{css:(0,o.iv)("position:absolute;right:0px;width:var(--spectrum-global-dimension-size-125)!important;height:var(--spectrum-global-dimension-size-125)!important;margin-left:var(--spectrum-global-dimension-size-100);transition:transform var(--spectrum-global-animation-duration-100) ease-in-out;",S.includes(f)&&"transform: rotate(90deg);",";","")}):null),t.pages&&(0,o.tZ)("ul",(0,i.Z)({className:"spectrum-SideNav",role:"group",css:(0,o.iv)(n>1?"\n                    & > li > a {\n                      padding-left: calc("+(n+1)+" * var(--spectrum-global-dimension-size-150)) !important;\n                    }\n                  ":"",";","")},t.heading?{"aria-labelledby":v}:{}),e(t.pages,n+1)))}))}(h,1))))}}}]);
//# sourceMappingURL=9919b502-4c7ba9978b92dbd25efd.js.map