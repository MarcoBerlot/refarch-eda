(window.webpackJsonp=window.webpackJsonp||[]).push([[28,99],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),c=a("NmYn"),r=a.n(c),s=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,c=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,c=i.baseUrl,r=i.subDirectory,o=c+"/edit/"+i.branch+r+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},f=a("FCXl"),w=a("dI71"),v=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===i,o=new RegExp(i+"/?(#.*)?$"),l=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=c,t),v.listItem)},Object(p.b)(s.Link,{className:v.link,to:""+l},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},c))))))},t}(i.a.Component),j=a("MjG9"),T=a("CzIb"),A=a("Asxa"),y=a("OIbQ"),k=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(A.c,{className:k.a.row},Object(p.b)(A.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,c=t.frontmatter,b=void 0===c?{}:c,d=t.relativePagePath,u=t.titleType,m=b.tabs,h=b.title,w=b.theme,v=b.description,A=b.keywords,y=b.date,k=Object(T.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,E=N?n.pathname.replace(N,""):n.pathname,z=m?E.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",C=w||k;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:C,pageTitle:h,pageDescription:v,pageKeywords:A,titleType:u},Object(p.b)(g,{title:i?Object(p.b)(i,null):h,label:"label",tabs:m,theme:C}),m&&Object(p.b)(O,{title:h,slug:E,tabs:m,currentTab:z}),Object(p.b)(j.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(P,{date:y})),Object(p.b)(f.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:z}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Efxb:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),{}),o={_frontmatter:s},l=r.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Push"),Object(c.b)("p",null,"Event-Driven applications use a broadcast style of communication when events occur. Rather than using a traditional request and response, in event-driven architectures a push-based communication is often used. Services no longer need to poll to receive updates, they need only subscribe to events and they will arrive as and when they are available (pushed). This can be powerful for on-the-fly data science workflows or real-time client dashboards.  "),Object(c.b)("p",null,"The following image shows the main differences in communication style between pull and push. "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.916666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAABF0lEQVQY0z2Qv0oDQRjEr1DsfERLXyEqiJ1PIIiFLyCkVvBPZdAmhYUWMZJoQmKM8ZLzzr273W9/fruJHgzDcjPzDZMU2QLwWOcQBU7wyk4ZL/Ff4KosSWdTbF2pRP61kVXTneY0H8YkvY85lXrCVyvmCMaHEE9WWkZZiakdRgOfhxMyY6M2xOSqzUXi++TulY3dK5KtFpz1JEpadU7DTWmWKZiCvfMOm/s3XDy9MzKwfa/Gjh4Tx2P9w4H75LT6it7jVp/1nUuSlwxmJbH2t3cMsMzE4q1lMDe0hwvSotKWQnfhmRhi+0JnGHjL2C0bH932WWtoYCwvYbPlJn9wstov3gpbqVEPBgStX+m8XW7Yfks5vO7yC1CVd6sgKksaAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/3cbba/push.png",srcSet:["/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/7fc1e/push.png 288w","/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/a5df1/push.png 576w","/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/3cbba/push.png 1152w","/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/0b124/push.png 1728w","/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/4ea69/push.png 2304w","/refarch-eda/static/c78a258c0276e09b9e89731d36cf6ce2/19a13/push.png 2512w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}b.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-advantages-push-index-mdx-3b9de2f21e507b69cb38.js.map