"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[537],{6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},6985:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(8733),r=n(7294),l=n(795),i=n(1883),o=n(6799);var c=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(l.xu,{mb:4},(0,a.tZ)(i.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2],color:"text"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:1}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags}))))};var m=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(c,{key:e.slug,post:e,showTags:r}))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:g,siteTitleAlt:u,siteUrl:p,siteDescription:h,siteImage:Z,author:d,siteLanguage:E}=s,f={title:t?t+" | "+g:u,description:n||h,url:""+p+(i||""),image:""+p+(o||Z)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:d}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,c)}},8578:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return u}});var a=n(7294),r=n(8733),l=n(8227),i=n(6985),o=n(3494),c=n(4232),m=n(8871);var s=e=>{let{posts:t}=e;const{basePath:n,blogPath:a}=(0,o.Z)(),{siteTitle:m}=(0,c.Z)();return(0,r.tZ)(l.Z,null,(0,r.tZ)(i.Z,{posts:t,showTags:!1}))};const g=()=>(0,r.tZ)(m.Z,null);var u=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(s,Object.assign({posts:n.nodes},t))}}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-minimal-blog-core-templates-homepage-query-tsx-c83f7eb8ba5d53e01782.js.map