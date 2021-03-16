(window.webpackJsonp=window.webpackJsonp||[]).push([[32,95],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),s=a.n(i),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=o.subDirectory,c=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0,strict:!0}),i=o===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,o);return Object(u.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(u.b)(r.Link,{className:O.link,to:""+l},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:O.list},o))))))},t}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,h=b.tabs,j=b.title,O=b.theme,y=b.description,k=b.keywords,x=Object(r.useStaticQuery)("2456312558").site.pathPrefix,A=x?n.pathname.replace(x,""):n.pathname,N=h?A.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:h,homepage:!1,theme:O,pageTitle:j,pageDescription:y,pageKeywords:k,titleType:d},Object(u.b)(m,{title:o?Object(u.b)(o,null):j,label:"label",tabs:h}),h&&Object(u.b)(v,{slug:A,tabs:h,currentTab:N}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:p})),Object(u.b)(f.a,{pageContext:t,location:n,slug:A,tabs:h,currentTab:N}),Object(u.b)(c.a,null))}},B009:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("AnchorLinks"),b=c("AnchorLink"),p={_frontmatter:r},d=s.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this note we want to list some of the criterias to consider and assess during an event-driven architecture establishment work and as part of a continuous application governance. This is not fully exhaustive, but give good foundations for analysis and study.\nFit for purpose practices should be done under a bigger program about application development governance and data governance.\nWe can look at least to the following major subject:"),Object(i.b)(l,{mdxType:"AnchorLinks"},Object(i.b)(b,{mdxType:"AnchorLink"},"Cloud native applications"),Object(i.b)(b,{mdxType:"AnchorLink"},"Modern data pipeline"),Object(i.b)(b,{mdxType:"AnchorLink"},"MQ Versus Kafka"),Object(i.b)(b,{mdxType:"AnchorLink"},"Kafka Streams vs Apache Flink")),Object(i.b)("h2",null,"Cloud native applications"),Object(i.b)("p",null,"With the adoption of cloud native and microservice applications (12 factors app), the following needs to be addressed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Responsiveness with elastic scaling and resilience to failure. Which leads to adopt the ’",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/advantages/reactive/"}),"reactive")," manifesto’ and consider messaging as a way to communicate between apps. Elastic also may lead to multi cloud deployment practice."),Object(i.b)("li",{parentName:"ul"},"Address data sharing using a push model to improve decoupling, and performance. Instead of having each service using REST end point to pull the data from other services, each service push the change to their main business entity to a event backbone. Each future service which needs those data, pull from the messaging system."),Object(i.b)("li",{parentName:"ul"},"Adopting common pattern like ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/patterns/cqrs/"}),"command query responsibility seggregation")," to help implementing complex queries, joining different business entities owned by different microservices, ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/patterns/event-sourcing/"}),"event sourcing"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/patterns/intro/#transactional-outbox"}),"transactional outbox")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/patterns/saga/"}),"SAGA"),"."),Object(i.b)("li",{parentName:"ul"},"Addressing data eventual consistency to propagate change to other components versus ACID transaction."),Object(i.b)("li",{parentName:"ul"},"Support always-on approach with the deployment to multiple data centers (at least three) being active/active and being able to propagate data in all data centers.")),Object(i.b)("p",null,"So the net: ",Object(i.b)("strong",{parentName:"p"},"do we need to implement event-driven microservices because of those needs?")),Object(i.b)("h2",null,"Modern data pipeline"),Object(i.b)("p",null,"As new business applications need to react to events in real time, the adoption of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/refarch-eda/concepts/terms-and-definitions/#event-backbone"}),"event backbone")," is really part of the IT toolbox. Some existing deployment consider this to be their new data hub, where all the data about the ‘customer’ is accessible. Therefore, it is natural to assess the data movement strategy and offload some of those ETL jobs running at night, as most of those works are done already inside of the applications generating those data, but not those data are visible inside the backbone."),Object(i.b)("p",null,"We detailed the new architecture in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"introduction/reference-architecture/#modern-data-lake"}),"this modern data lake")," discussion, so from a ",Object(i.b)("em",{parentName:"p"},"fit for purpose")," point of view, we need to assess what those ETL jobs were doing and how much of those data is now visible to other to consume."),Object(i.b)("p",null,"With Event Backbone like Kafka, any consumer can join the consumption at any point of time, within the retention period. So if new data is kept like 10 days, within those 10 days a consumer can continuously get the data, no more wait for the next morning, just connected to the topic you need to."),Object(i.b)("h2",null,"Integrated governance"),Object(i.b)("h2",null,"MQ Versus Kafka"),Object(i.b)("p",null,"Consider queue system. like IBM MQ, for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Exactly once delivery, and to participate into two phase commit transaction"),Object(i.b)("li",{parentName:"ul"},"Asynchronous request / reply communication: the semantic of the communication is for one component to ask a second command to do something on its data. This is a command pattern with delay on the response."),Object(i.b)("li",{parentName:"ul"},"Recall messages in queue are kept until consumer(s) got them.")),Object(i.b)("p",null,"Consider Kafka as pub/sub and persistence system for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Publish events as immutable facts of what happen in an application"),Object(i.b)("li",{parentName:"ul"},"Get continuous visibility of the data Streams"),Object(i.b)("li",{parentName:"ul"},"Keep data once consumed, for future consumers, for replayability"),Object(i.b)("li",{parentName:"ul"},"Scale horizontally the message consumption")),Object(i.b)("h2",null,"Kafka Streams vs Apache Flink"),Object(i.b)("p",null,"Once we have setup data streams, we need technology to support real-time analytics and complex event processing. Historically, analytics performed on static data was done using batch reporting techniques. However, if\ninsights have to be derived in real-time, event-driven architectures help to analyse and look for patterns within events."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://flink.apache.org"}),"Apache Flink")," (2016) is a framework and ",Object(i.b)("strong",{parentName:"p"},"distributed processing")," engine for stateful computations over unbounded and bounded data streams. It is considered to be superior to Apache Spark and Hadoop. It supports batch and graph processing and complex event processing. "),Object(i.b)("p",null,"Here is simple diagram of Flink architecture."),Object(i.b)("p",null," ",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"577px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVQoz52STWsTURSG5y+5clXdufAf+LFpIdG10qJg48aFUC0YBVFXih9LLVgNTSWkNZ3MTDOZyagIapJak/lITY1kMslkJo8zIygqGPHAc++557y893LvFZp7n7lX3uahonJfqvBYM3hqvOGBrPIoqt0tK7x8XyeOyWTCtBDWXr/l4OVlDi9fZ+ZKliPXbnL0xi0OXc0ys5TlwKUlLjxZTcRBGE43DMKAzdInJLnFxuYuqmai6ib59R3cgcvXfh9vOPz3E8bDet5io+hQeGFT079QrXR5ttr+RRiGk6nEGyaGhYJFqWRTLFoYxj663iWXa/M/IcSu+bXdyLRF7vlHRNGmUumwstJgrzPCtod0u36S1+sujYZLs+limh6tlpesY+of+vR6PoLjeJw+pTA7K5FOKZw/p5PJGCwsaMzNyRw/JrK4aHDn9jtOnhBJp2Xm56tczNQiXY2zZ1RSqVi3RT5vIngDH0UykUQTOZq3ZQu5bFJRrKRe3mpj6B12mj30qhPl34nzmubwqtbBiNBUG8d2EcajYOq9eD0Pd9+L/81fdYEfIMSvMxoGP/B/I64NB+OEkTf+o/9TNyYYh3wDWeHT9FDbREoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Flink components",title:"Flink components",src:"/refarch-eda/static/165a7d9e27d199c7f3f45617b5c11a04/71b62/arch.png",srcSet:["/refarch-eda/static/165a7d9e27d199c7f3f45617b5c11a04/7fc1e/arch.png 288w","/refarch-eda/static/165a7d9e27d199c7f3f45617b5c11a04/a5df1/arch.png 576w","/refarch-eda/static/165a7d9e27d199c7f3f45617b5c11a04/71b62/arch.png 577w"],sizes:"(max-width: 577px) 100vw, 577px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"The run time can run on any common resource manager like Hadoop Yarn, Mesos, or kubernetes. It can run on its own with two majors cluster types: Job manager and task manager. Two types of processing: data set or data stream. For development purpose we can use the docker images to deploy a ",Object(i.b)("strong",{parentName:"p"},"Session")," or ",Object(i.b)("strong",{parentName:"p"},"Job cluster")," in a containerized environment. "),Object(i.b)("p",null,"See also ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.confluent.io/blog/apache-flink-apache-kafka-streams-comparison-guideline-users"}),"this article from Confluent")))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-concepts-fit-to-purpose-index-mdx-e078b31c2ae0ecccc9f0.js.map