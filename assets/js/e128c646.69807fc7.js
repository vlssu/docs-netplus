"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(6010),i=r(3438),o=r(9960),c=r(3919),l=r(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function d(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},6258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),i=r(2991),o=r(3438);const c={description:"\u5404\u4e2a\u6e38\u620f\u7684\u8054\u673a\u7aef\u53e3\u83b7\u53d6\u65b9\u5f0f\u4e0d\u540c,\u8fd9\u91cc\u5c06\u6559\u5982\u679c\u4f7f\u7528"},l="\u5b98\u65b9\u6559\u7a0b",s={unversionedId:"tutorial/README",id:"tutorial/README",title:"\u5b98\u65b9\u6559\u7a0b",description:"\u5404\u4e2a\u6e38\u620f\u7684\u8054\u673a\u7aef\u53e3\u83b7\u53d6\u65b9\u5f0f\u4e0d\u540c,\u8fd9\u91cc\u5c06\u6559\u5982\u679c\u4f7f\u7528",source:"@site/docs/tutorial/README.md",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/tutorial/",draft:!1,editUrl:"https://github.com/vlssu/docs-netplus/tree/master/docs/tutorial/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1673240659,formattedLastUpdatedAt:"2023\u5e741\u67089\u65e5",frontMatter:{description:"\u5404\u4e2a\u6e38\u620f\u7684\u8054\u673a\u7aef\u53e3\u83b7\u53d6\u65b9\u5f0f\u4e0d\u540c,\u8fd9\u91cc\u5c06\u6559\u5982\u679c\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u6b22\u8fce\u6d4f\u89c8 NetPlus \u7528\u6237\u4f7f\u7528\u624b\u518c\uff01",permalink:"/"},next:{title:"Minecraft\u7c7b\u578b",permalink:"/tutorial/minecraft"}},u={},m=[],p={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b98\u65b9\u6559\u7a0b"},"\u5b98\u65b9\u6559\u7a0b"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4f60\u9700\u8981\u7684\u670d\u52a1\u5668,\u8bf7\u63d0\u4ea4 issue ,\u5f53\u7136\u5982\u679c\u53ef\u4ee5,\u4f60\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e9b\u6559\u7a0b.",(0,a.kt)("br",{parentName:"p"}),"\n","\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vlssu/docs-netplus/new/master/docs/tutorial"},"GitHub \u62c9\u53d6\u8bf7\u6c42")," \u8d21\u732e\u66f4\u591a\u6559\u7a0b.(\u8bf7\u4f7f\u7528 markdown \u6765\u8fdb\u884c\u7f16\u5199)"),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);