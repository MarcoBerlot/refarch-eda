(window.webpackJsonp=window.webpackJsonp||[]).push([[30,99],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},v=a("FCXl"),x=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(p.b)(s.Link,{className:w.link,to:""+c},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},r))))))},t}(i.a.Component),O=a("MjG9"),j=a("CzIb"),T=a("Asxa"),k=a("OIbQ"),A=a.n(k),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:A.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:A.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,x=b.theme,w=b.description,T=b.keywords,k=b.date,A=Object(j.a)().interiorTheme,P=Object(s.useStaticQuery)("2456312558").site.pathPrefix,z=P?n.pathname.replace(P,""):n.pathname,H=m?z.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",I=x||A;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:w,pageKeywords:T,titleType:u},Object(p.b)(h,{title:i?Object(p.b)(i,null):g,label:"label",tabs:m,theme:I}),m&&Object(p.b)(y,{title:g,slug:z,tabs:m,currentTab:H}),Object(p.b)(O.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(N,{date:k})),Object(p.b)(v.a,{pageContext:t,location:n,slug:z,tabs:m,currentTab:H}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},awyL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),l={_frontmatter:s},c=o.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Resiliency"),Object(r.b)("p",null,"The reduction in inter-dependency between applications that is enabled in an Event-Driven architecture enables increased resiliency. If services fail, they can restart autonomously and, subsequently, recover events and replay them if needed. Their ability to self-heal means that the functionality of the whole system is less reliant on certain services being immediately available. We are detailing how consumer offset management works and how to rebuild data projection after recovery ",Object(r.b)("a",{parentName:"p",href:"../../technology/kafka-producers-consumers/"},"in this article"),"."),Object(r.b)("p",null,"Reduced coupling between services means they do not need to have any knowledge of the services to which they produce or from whom they consume. There are a number of advantages to this. For example, even if a service goes down, events will still be produced or consumed once it has recovered, known as ‘Guaranteed Delivery’. "),Object(r.b)("p",null,"For instance, let’s say we run a shipping company that operates a fleet of container ships. The containers themselves could be smart IoT devices, in that they collect data about the health of the container (temperature, position etc). At the vesset level, we can use edge computing with local event backbone to do some simple aggregations and correlations before sending those data back at regular intervals to a central onshore monitoring platform. If the ship network goes offline and the refrigerator containers can not send back the data, it can still be collected and will be sent once the service is available again. We have resilience between data centers. Here is diagram illustrating those concepts with some underlying technologies."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"690px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.138888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVQoz12SS2vUUBTH8zVc+Bn0C7jpVihudSVddOUDQXDhQsSiIEKgoLisuOtCxHZhYZY+wbbYYptObce2Mxk7STMzed687s+bzEwm9cDlnOT87//+z0NLkgTXdel0/zIyiZRyHMqxm/oq99/3JNZ836PTabPWaPDtx2aZzPO85Kou1Hxx0jQtMZNH66RaEUaRwNhrsmP8rlSOzoR0qjJQWC8M8YIQoYhlTW1hGsM+eDa4A2JnSHTaI89yclkoPV96bFskPVNh1R3HQnTb+Kq6LEmnCs1jh/fbguWNAV6UKAk+oS+IVUVBLHEjWaoQQtBp/sFoe/xqnfHzwGK/F3N6YhGc2SOlBeHap0Nm9W1uvt5h9UuTrc1dSJPyxTST9ENJKDJEGLBlOMy/S7i/GnHvQ8jtlZSP60PwB7iqBWXJ+psVLszMsfT0ObNzD5iZfzIazLjZipNM9apQKKwepmGwv7HO7vevdPcMhifHJT5UfS2Gpd3R33Lxyg2e6a/QLl3l8vW71aTrwwmCANvp0zZNDlotDo+Oyth2nHLtinypcLnxmYcLOgsvXnLt1iMeLy6d26v63lWrUjOp/mVZVuH+AfFdnHKASDylAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/8bbc1a5bc84e2f6c3495492d694f5074/ece61/resilience.png",srcSet:["/refarch-eda/static/8bbc1a5bc84e2f6c3495492d694f5074/7fc1e/resilience.png 288w","/refarch-eda/static/8bbc1a5bc84e2f6c3495492d694f5074/a5df1/resilience.png 576w","/refarch-eda/static/8bbc1a5bc84e2f6c3495492d694f5074/ece61/resilience.png 690w"],sizes:"(max-width: 690px) 100vw, 690px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"Applications on the right, run in a data center or cloud provider, and receive aggregate data coming from the Kafka cluster running on the vessel. The topic data replication is done via ",Object(r.b)("a",{parentName:"p",href:"../../technology/kafka-mirrormaker/"},"Mirror Maker 2"),". A second level of real time analytics could compute aggregates between all the vessels sailing over seas. If the connection is lost the mirroring will get the records when reconnecting. On the vessel level, multiple brokers ensure high availability, and replication cross broker ensures data resilience. Real time analytic components can scale horizontally, even when computing global aggregate by using ",Object(r.b)("a",{parentName:"p",href:"../../technology/kafka-streams/#interactive-queries"},"kafka streams capability of Ktable and store"),". "))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-advantages-resiliency-index-mdx-8e9be3ea23abec4e4a1c.js.map