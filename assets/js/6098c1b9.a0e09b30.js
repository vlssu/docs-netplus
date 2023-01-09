"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294),a=n(6010),l=n(3438),o=n(9960),i=n(3919),c=n(5999);const u="cardContainer_fWXF",p="cardTitle_rnsV",s="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},n)}function d(e){let{href:t,icon:n,title:l,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:l},n," ",l),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",s),title:o},o))}function k(e){let{item:t}=e;const n=(0,l.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,l.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,l.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},8584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),l=n(2991),o=n(3438);const i={sidebarDepth:0},c="\u5e38\u89c1\u95ee\u9898",u={unversionedId:"faq/README",id:"faq/README",title:"\u5e38\u89c1\u95ee\u9898",description:"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4f7f\u7528\u65f6\u7ecf\u5e38\u51fa\u73b0\u7684\u95ee\u9898",source:"@site/docs/faq/README.md",sourceDirName:"faq",slug:"/faq/",permalink:"/faq/",draft:!1,editUrl:"https://github.com/vlssu/docs-netplus/tree/master/docs/faq/README.md",tags:[],version:"current",lastUpdatedBy:"\u98d2\u723d\u5e08\u53d4",lastUpdatedAt:1673240659,formattedLastUpdatedAt:"2023\u5e741\u67089\u65e5",frontMatter:{sidebarDepth:0},sidebar:"tutorialSidebar",previous:{title:"Minecraft\u7c7b\u578b",permalink:"/tutorial/minecraft"},next:{title:"\u6b63\u5e38\u5173\u95ed\u6570\u636e\u6267\u884c\u4fdd\u62a4",permalink:"/faq/data_execution_prevention"}},p={},s=[{value:"\u7aef\u53e3\u5305\u6708\u548c\u4f59\u989d\u6709\u5565\u533a\u522b",id:"\u7aef\u53e3\u5305\u6708\u548c\u4f59\u989d\u6709\u5565\u533a\u522b",level:2},{value:"\u8fd9\u4e2a\u652f\u6301\u51e0\u4e2a\u4eba\u5440",id:"\u8fd9\u4e2a\u652f\u6301\u51e0\u4e2a\u4eba\u5440",level:2},{value:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11\uff1f",id:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11",level:2},{value:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b\uff1f",id:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b",level:2},{value:"\u7aef\u53e3\u53ef\u4ee5\u56fa\u5b9a\u5417\uff1f",id:"\u7aef\u53e3\u53ef\u4ee5\u56fa\u5b9a\u5417",level:2},{value:"\u5565\u65f6\u5019\u66f4\u65b0Linux\u7248\u672c",id:"\u5565\u65f6\u5019\u66f4\u65b0linux\u7248\u672c",level:2},{value:"5\u5143\u80fd\u7528\u591a\u4e45\uff1f",id:"5\u5143\u80fd\u7528\u591a\u4e45",level:2},{value:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e\uff1f",id:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e",level:2},{value:"\u63d0\u793aNetPlus \u5ba2\u6237\u7aef \u5df2\u505c\u6b62\u5de5\u4f5c \u600e\u4e48\u529e\uff1f",id:"\u63d0\u793anetplus-\u5ba2\u6237\u7aef-\u5df2\u505c\u6b62\u5de5\u4f5c-\u600e\u4e48\u529e",level:2},{value:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\uff1a\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e\uff1f",id:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e",level:2},{value:"\u600e\u4e48\u6c2a\u91d1\uff1f \u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70",id:"\u600e\u4e48\u6c2a\u91d1-\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70",level:2},{value:"\u65b0\u7528\u6237\u9001\u7684\u4e94\u5143\u672a\u5230\u8d26?",id:"\u65b0\u7528\u6237\u9001\u7684\u4e94\u5143\u672a\u5230\u8d26",level:2},{value:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d?",id:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d",level:2},{value:"\u663e\u793a\u6ce8\u518c\u5931\u8d25.\u6700\u591a\u53ea\u80fd\u6ce8\u518c\u4e09\u4e2a\u8d26\u53f7",id:"\u663e\u793a\u6ce8\u518c\u5931\u8d25\u6700\u591a\u53ea\u80fd\u6ce8\u518c\u4e09\u4e2a\u8d26\u53f7",level:2},{value:"\u6620\u5c04\u6709\u90a3\u4e9b\u4e3b\u9898?",id:"\u6620\u5c04\u6709\u90a3\u4e9b\u4e3b\u9898",level:2},{value:"Minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f",id:"minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f",level:2},{value:"\u663e\u793a\u542f\u52a8\u5931\u8d25,\u5f53\u524d\u6620\u5c04\u5df2\u8fbe\u5230\u6700\u5927\u91cf",id:"\u663e\u793a\u542f\u52a8\u5931\u8d25\u5f53\u524d\u6620\u5c04\u5df2\u8fbe\u5230\u6700\u5927\u91cf",level:2}],m={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4f7f\u7528\u65f6\u7ecf\u5e38\u51fa\u73b0\u7684\u95ee\u9898"),(0,a.kt)(l.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u7aef\u53e3\u5305\u6708\u548c\u4f59\u989d\u6709\u5565\u533a\u522b"},"\u7aef\u53e3\u5305\u6708\u548c\u4f59\u989d\u6709\u5565\u533a\u522b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5305\u6708\u7545\u60f3\u5f53\u6708\u65e0\u9650\u6d41\u91cf \u53ca \u6700\u591a\u56db\u6761\u6620\u5c04")),(0,a.kt)("h2",{id:"\u8fd9\u4e2a\u652f\u6301\u51e0\u4e2a\u4eba\u5440"},"\u8fd9\u4e2a\u652f\u6301\u51e0\u4e2a\u4eba\u5440"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TCP\u534f\u8bae\u5f53\u524d\u5355\u8282\u70b9\u6709\u4e94\u4e2a\u8fde\u63a5\u989d\u5ea6\uff085\u8fde\u63a5\u6570\uff09")),(0,a.kt)("h2",{id:"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11"},"\u6211\u7684\u4e16\u754c\u7aef\u53e3\u591a\u5c11\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"JAVA\u7248\u9ed8\u8ba4\u7aef\u53e325565",(0,a.kt)("br",{parentName:"p"}),"\n","PE/BE/\u57fa\u5ca9\u7248\u9ed8\u8ba4\u7aef\u53e319132")),(0,a.kt)("h2",{id:"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b"},"\u6620\u5c04\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u73af\u5883\u4e0b\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8eTCP\u534f\u8bae\u4ee5\u53caWindows\u73af\u5883\u4e0b")),(0,a.kt)("h2",{id:"\u7aef\u53e3\u53ef\u4ee5\u56fa\u5b9a\u5417"},"\u7aef\u53e3\u53ef\u4ee5\u56fa\u5b9a\u5417\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6682\u65f6\u4e0d\u652f\u6301\u7aef\u53e3\u56fa\u5b9a")),(0,a.kt)("h2",{id:"\u5565\u65f6\u5019\u66f4\u65b0linux\u7248\u672c"},"\u5565\u65f6\u5019\u66f4\u65b0Linux\u7248\u672c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u5df2\u6709\u8ba1\u5212\uff0c\u5c3d\u60c5\u671f\u5f85")),(0,a.kt)("h2",{id:"5\u5143\u80fd\u7528\u591a\u4e45"},"5\u5143\u80fd\u7528\u591a\u4e45\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e24\u4e2a\u670b\u53cb\u8054\u673a\u53ef\u4ee5\u7528\u8fd120\u5929 \u81f3\u4e8e\u51c6\u786e\u7528\u591a\u4e45,\u56e0\u4eba\u800c\u5f02")),(0,a.kt)("h2",{id:"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e"},"\u63d0\u793a\u53d1\u9001\u9a8c\u8bc1\u7801\u5931\u8d25\u600e\u4e48\u529e\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u91cd\u8bd5\u5373\u53ef")),(0,a.kt)("h2",{id:"\u63d0\u793anetplus-\u5ba2\u6237\u7aef-\u5df2\u505c\u6b62\u5de5\u4f5c-\u600e\u4e48\u529e"},"\u63d0\u793aNetPlus \u5ba2\u6237\u7aef \u5df2\u505c\u6b62\u5de5\u4f5c \u600e\u4e48\u529e\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://zhidao.baidu.com/question/1366465077364459979.html"},"\u3010\u6b64\u94fe\u63a5\u3011"))),(0,a.kt)("h2",{id:"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e"},"\u6211\u7684\u4e16\u754c\u63d0\u793a\u767b\u5f55\u5931\u8d25\uff1a\u65e0\u6548\u7684\u4f1a\u8bdd\u600e\u4e48\u529e\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u670d\u52a1\u7aef\u90a3\u8fb9\u5f00\u542f\u4e86\u6b63\u7248\u9a8c\u8bc1\u3001\u6216\u8005\u662f\u8054\u673a\u65f6\u7528\u6237\u672a\u4f7f\u7528\u6b63\u7248\u7528\u6237\u767b\u9646\u6e38\u620f\uff0c\u89e3\u51b3\u65b9\u6cd5:1\u3001\u670d\u52a1\u7aef\u5173\u95ed\u6b63\u7248\u9a8c\u8bc1\u529f\u80fd 2\u3001\u5982\u679c\u662f\u8054\u673a\u3001\u8bf7\u786e\u4fdd\u8054\u673a\u7684\u7528\u6237\u662f\u6b63\u7248\u7528\u6237\u6216\u4f7f\u7528\u4e86\u5916\u7f6e\u767b\u5f55\u529f\u80fd \u4e5f\u53ef\u4ee5\u5b89\u88c5\u76f8\u5173\u8054\u673amod\u5173\u95ed\u9a8c\u8bc1\u529f\u80fd")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8fd9\u91cc\u968f\u4fbf\u5199\u4ec0\u4e48\uff0c\u53ef\u4ee5\u76f4\u63a5\u5199\u6b65\u9aa4\u540d",src:n(5796).Z,width:"350",height:"118"})),(0,a.kt)("h2",{id:"\u600e\u4e48\u6c2a\u91d1-\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70"},"\u600e\u4e48\u6c2a\u91d1\uff1f \u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u6216\u901a\u8fc7\u6dd8\u5b9d\u94fe\u63a5\u8d2d\u4e70"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d",(0,a.kt)("a",{parentName:"p",href:"http://wpa.qq.com/msgrd?v=3&uin=672183160&site=qq&menu=yes"},"\u3010\u5ba2\u670d\u5c0f\u8d85\u3011"),(0,a.kt)("a",{parentName:"p",href:"http://wpa.qq.com/msgrd?v=3&uin=1666633881&site=qq&menu=yes"},"\u3010\u5ba2\u670d\u5c0f\u4f1f\u3011")," \u6216\u8005\u901a\u8fc7\u6dd8\u5b9d\u8fde\u63a5",(0,a.kt)("a",{parentName:"p",href:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-22409864018.2.67477092FAdx3v&id=611262672455"},"\u3010\u6dd8\u5b9d\u5e97\u94fa\u3011"))),(0,a.kt)("h2",{id:"\u65b0\u7528\u6237\u9001\u7684\u4e94\u5143\u672a\u5230\u8d26"},"\u65b0\u7528\u6237\u9001\u7684\u4e94\u5143\u672a\u5230\u8d26?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u5148\u5b9e\u540d\u8ba4\u8bc1\u624d\u53ef\u4ee5\u83b7\u53d6\u4e94\u5143\u4f59\u989d\u3001\u5982\u679c\u5b9e\u540d\u8ba4\u8bc1\u540e\u8fd8\u6ca1\u5230\u8d26\u53ef\u4ee5\u8054\u7cfb\u5ba2\u670d\u63d0\u4f9b\u90ae\u7bb1\u8865\u4f59\u989d\uff08\u6ce8:\u672c\u4f59\u989d\u4e0d\u80fd\u4f5c\u4e3a\u5305\u6708\u7b49\u4ed8\u8d39\u9879\u76ee\u7684\u8d2d\u4e70\uff09")),(0,a.kt)("h2",{id:"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d"},"\u6211\u5e94\u8be5\u9009\u90a3\u4e2a\u8282\u70b9\u66f4\u597d?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u60a8\u7684\u5730\u7406\u4f4d\u7f6e\u51b3\u5b9a \u53ef\u4ee5\u4f7f\u7528\u8bbe\u7f6e\u4e2d\u7684\u81ea\u52a8\u4f18\u9009,\u6765\u9009\u62e9\u6700\u9002\u5408\u60a8\u7684\u8282\u70b9")),(0,a.kt)("h2",{id:"\u663e\u793a\u6ce8\u518c\u5931\u8d25\u6700\u591a\u53ea\u80fd\u6ce8\u518c\u4e09\u4e2a\u8d26\u53f7"},"\u663e\u793a\u6ce8\u518c\u5931\u8d25.\u6700\u591a\u53ea\u80fd\u6ce8\u518c\u4e09\u4e2a\u8d26\u53f7"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u66f4\u597d\u7684\u7edf\u8ba1\u6ce8\u518c\u6570\u91cf,\u6211\u4eec\u5bf9\u7528\u6237\u6ce8\u518c\u505a\u51fa\u4e86\u9650\u5236.\u5982\u679c\u9700\u8981\u7ee7\u7eed\u6ce8\u518c,\u8bf7\u8054\u7cfb\u5ba2\u670d")),(0,a.kt)("h2",{id:"\u6620\u5c04\u6709\u90a3\u4e9b\u4e3b\u9898"},"\u6620\u5c04\u6709\u90a3\u4e9b\u4e3b\u9898?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u62e5\u6709\u767d\u8272\u4ee5\u53ca\u6697\u591c\u8272")),(0,a.kt)("h2",{id:"minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f"},"Minecraft\u663e\u793a\u670d\u52a1\u5668\u7248\u672c\u5df2\u8fc7\u671f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u5668\u521a\u5f00\u4f1a\u8fd9\u6837,\u7b49\u4e00\u4f1a\u5c31\u597d\u4e86")),(0,a.kt)("h2",{id:"\u663e\u793a\u542f\u52a8\u5931\u8d25\u5f53\u524d\u6620\u5c04\u5df2\u8fbe\u5230\u6700\u5927\u91cf"},"\u663e\u793a\u542f\u52a8\u5931\u8d25,\u5f53\u524d\u6620\u5c04\u5df2\u8fbe\u5230\u6700\u5927\u91cf"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u975e\u5305\u6708\u7528\u6237\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5176\u4ed6\u95ee\u9898\u53ef\u4ee5\u52a0\u5165Q\u7fa4\u63d0\u95ee,\u89e3\u51b3\u7684\u95ee\u9898\u4f1a\u88ab\u66f4\u65b0\u5230\u8fd9\u91cc Q\u7fa4:1019593660 \u5ba2\u670d:",(0,a.kt)("a",{parentName:"p",href:"http://wpa.qq.com/msgrd?v=3&uin=672183160&site=qq&menu=yes"},"\u3010\u5ba2\u670d\u5c0f\u8d85\u3011"),(0,a.kt)("a",{parentName:"p",href:"http://wpa.qq.com/msgrd?v=3&uin=1666633881&site=qq&menu=yes"},"\u3010\u5ba2\u670d\u5c0f\u4f1f\u3011"))))}d.isMDXComponent=!0},5796:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/faq-1-ab208a51fbbf837ddfd794e15fb7954b.png"}}]);