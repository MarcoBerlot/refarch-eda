(window.webpackJsonp=window.webpackJsonp||[]).push([[26,99],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),l=a("Wbzz"),s=a("Xrax"),o=a("k4MR"),b=a("TSYQ"),m=a.n(b),u=a("QH2O"),p=a.n(u),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(d.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},f=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,s=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+f.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),g=a("dI71"),w=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),o=n.replace(s,a);return Object(d.b)("li",{key:e,className:m()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(d.b)(l.Link,{className:w.link,to:""+o},e))}));return Object(d.b)("div",{className:w.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:w.list},i))))))},t}(r.a.Component),k=a("MjG9"),v=a("CzIb"),x=a("Asxa"),I=a("OIbQ"),y=a.n(I),T=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(x.c,{className:y.a.row},Object(d.b)(x.a,null,Object(d.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,m=t.relativePagePath,u=t.titleType,p=b.tabs,f=b.title,g=b.theme,w=b.description,x=b.keywords,I=b.date,y=Object(v.a)().interiorTheme,S=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=S?n.pathname.replace(S,""):n.pathname,P=p?M.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",K=g||y;return Object(d.b)(o.a,{tabs:p,homepage:!1,theme:K,pageTitle:f,pageDescription:w,pageKeywords:x,titleType:u},Object(d.b)(h,{title:r?Object(d.b)(r,null):f,label:"label",tabs:p,theme:K}),p&&Object(d.b)(N,{title:f,slug:M,tabs:p,currentTab:P}),Object(d.b)(k.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:m}),Object(d.b)(T,{date:I})),Object(d.b)(j.a,{pageContext:t,location:n,slug:M,tabs:p,currentTab:P}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XzoS:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},o=c.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(o,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Event-Driven Architecture"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://learn.ibm.com/course/view.php?id=5900"},"Event-Driven Architecture Learning Journey")," via ",Object(i.b)("strong",{parentName:"li"},"IBM Skills Gateway"),", provides a navigable guide through this GitBook and associated assets.")),Object(i.b)("h3",null,"IBM Event Streams"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/about/overview/"},"IBM Event Streams presentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/getting-started/generating-starter-app/"},"Validating Event Streams deployment with sample app.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/installing/installing-openshift/"},"Install IBM Event Streams on Red Hat OpenShift"))),Object(i.b)("h3",null,"Kafka"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kafka.apache.org/intro"},"Start by reading Kafka introduction - a must read!")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.confluent.io/blog/introducing-Kafka-streams-stream-processing-made-simple"},"Another introduction from Confluent, one of the main contributors of the open source.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../technology/kafka-overview/"},"Kafka summary and deployment on IBM Cloud Private")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/installing/planning/"},"Planning event streams installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://Kafka.apache.org/11/documentation/streams/"},"Develop Stream Application using Kafka")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.ibm.com/tutorials/kafka-authn-authz/"},"Tutorial on access control, user authentication and authorization from IBM.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.ibm.com/messaging/event-streams/docs/learn-about-Kafka/"},"IBM Developer article - learn kafka")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@andrew_schofield/using-kafka-connect-to-connect-to-enterprise-mq-systems-5674d53fe55e"},"Using Kafka Connect to connect to enterprise MQ systems - Andrew Schofield")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@andrew_schofield/does-apache-kafka-do-acid-transactions-647b207f3d0e"},"Does Apache Kafka do ACID transactions? - Andrew Schofield")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://aseigneurin.github.io/2016/05/07/spark-kafka-achieving-zero-data-loss.html"},"Spark and Kafka with direct stream, and persistence considerations and best practices")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.madewithtea.com/processing-tweets-with-kafka-streams.html"},"Example in scala for processing Tweets with Kafka Streams"))),Object(i.b)("h3",null,"Microservices and event-driven patterns"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/eclipse/microprofile-reactive-messaging/blob/master/spec/src/main/asciidoc/architecture.asciidoc"},"API for declaring messaging handlers using Reactive Streams")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.manning.com/books/microservices-patterns"},"Microservice patterns - Chris Richardson")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-integration/blob/master/docs/service-mesh/readme.md"},"Service mesh"))),Object(i.b)("h3",null,"Stream Analytics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibmstreams.github.io/samples/"},"IBM Streams Samples")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/StreamingAnalytics/t_starter_app_deploy.html#starterapps_deploy"},"Getting started with IBM Streaming Analytics on IBM Cloud"))),Object(i.b)("h3",null,"Integration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Interesting article on ",Object(i.b)("a",{parentName:"li",href:"https://developer.ibm.com/articles/mw-1606-clark-trs/"},"the evolving hybrid integration reference architecture"),": How to ensure your integration landscape keeps pace with digital transformation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-integration"},"Companion web site for hybrid integration reference architecture"))),Object(i.b)("h3",null,"Conferences, Talks, and Sessions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/events/think/watch/replay/126541228/"},"IBM THINK 2020 - From Monolithic Application to API Centric and Event-Driven Microservices – the Cloud Journey of a Leading Health Care Organization")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/events/think/watch/replay/126498392/"},"IBM THINK 2020 - Change the Way You Integrate Applications with IBM Cloud Pak for Integration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/events/think/watch/replay/126543731/"},"IBM THINK 2020 - Modernize Integration to Unlock Data and Applications Securely While Lowering Costs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-san-francisco-2016/"},"Kafka Summit 2016 - San Francisco")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-new-york-2017/"},"Kafka Summit 2017 - New York")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-san-francisco-2017/"},"Kafka Summit 2017 - San Francisco")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-san-francisco-2018/"},"Kafka Summit 2018 - San Francisco")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-san-francisco-2019/"},"Kafka Summit 2019 - San Francisco")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-london-2019/"},"Kafka Summit 2019 - London")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/resources/kafka-summit-2020/"},"Kafka Summit 2020 - Virtual"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-additional-reading-index-mdx-4c91dee58414be3d3d09.js.map