(window.webpackJsonp=window.webpackJsonp||[]).push([[45,114],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),k=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),s=n.replace(l,a);return Object(m.b)("li",{key:e,className:d()((t={},t[k.selectedItem]=r,t),k.listItem)},Object(m.b)(c.Link,{className:k.link,to:""+s},e))}));return Object(m.b)("div",{className:k.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:k.list},r))))))},t}(i.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),A=a("OIbQ"),N=a.n(A),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:N.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,u=b.tabs,g=b.title,j=b.theme,k=b.description,v=b.keywords,A=b.date,N=Object(w.a)().interiorTheme,z=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=z?n.pathname.replace(z,""):n.pathname,S=u?P.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",I=j||N;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:I,pageTitle:g,pageDescription:k,pageKeywords:v,titleType:p},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:u,theme:I}),u&&Object(m.b)(x,{title:g,slug:P,tabs:u,currentTab:S}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d}),Object(m.b)(T,{date:A})),Object(m.b)(O.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:S}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I4bF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=l("InlineNotification"),b=l("AnchorLinks"),d=l("AnchorLink"),p={_frontmatter:c},u=o.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("strong",null,"Updated 10/13/2021 - Work In Progress")),Object(r.b)("p",null,"In this ",Object(r.b)("inlineCode",{parentName:"p"},"201")," content, you should be able to learn more about Kafka, Event Streams, Messaging, and Event-driven solution."),Object(r.b)(b,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"More Kafka"),Object(r.b)(d,{mdxType:"AnchorLink"},"Production deployment - High Availability"),Object(r.b)(d,{mdxType:"AnchorLink"},"Performance considerations")),Object(r.b)("h2",null,"More Kafka"),Object(r.b)("p",null,"We have already covered the Kafka architecture in ",Object(r.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-eda/technology/kafka-overview/#kafka-components"},"this section"),".\nWhen we deploy Event Streams on Kubernetes, it uses Operator, and it is in fact a wrapper on top of ",Object(r.b)("a",{parentName:"p",href:"http://strimzi.io"},"Strimzi"),",\nthe open source kafka operator."),Object(r.b)("h3",null,"Strimzi"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://strimzi.io/"},"Strimzi")," uses the Cluster Operator to deploy and manage Kafka (including Zookeeper) and Kafka Connect clusters.\nWhen the Strimzi Cluster Operator is up and runnning, it starts to watch for certain OpenShift or Kubernetes resources containing the\ndesired Kafka and/or Kafka Connect cluster configuration. "),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPklEQVQoz5VTPY/TQBBNyw9B9PyBk+jpqOiQEBUVdIgCXYMEHQVIVHRAScdPOIm7C0mc3BFyie3dnd1N4sRre/0VX8KzLxF3p6NgNBqNVn47771ZtwRJRoqTYkL+V3KSLZfRj8Oj4/ZPLggXkVQkpVSqaep+11xPj8sWE2qxCCITZU1Ya1Nr4yhCSVMbhmFz1Q3hX4DLslwul9MmAN5sNr2ec3I6zLI8juNrYK31bDZD3YKLopjP547juK5r02yzqZ5/Prv9ov3406i0BnLkLoQQGANwFEWcdA3O89wYMxgMGGNJA374cdR6cnzvrZOauefjmHHOBGee54EdZgRBINS0BkNqVVWYjwZ1tSpny3hMoQxiaxMi0kqLeh01Z4BhBJg2tEnZJhbwLVjUhmWF1oqEQB+auO84B93R/Xcnd/d7778Pi2QJIcBzqa+AoSdN0zDOIMmEYZom86XBBg/67M7L7q2n7Vdfe2k4G40nmLylDaq1BiGAWa/X1ar0dXR0FoykSW2iG4dPXeqNiJEGPXyGSVu3YRhmdjod3/ezvIBhDz4MW48O9173YJjbOCYF1yQ8163V+j5obycDnCTJZDLBGi9Wtf/N33szePZlnFsjLq0K5mFP4AimW80Aw+3z82oFo8uyqlZ5/dSSIs9wqVIS/l1KPf/7SEibKI7iODQmNBGqqWtkmoT/uwd/OXEia/DY9fqnw5Nfv12fe5zqZLRtOPmc/vVX4dLWeDLudruDfp9ITKf6KsMm1c2J+AMqjlqJhxLB6wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Strimzi",title:"Strimzi",src:"/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/3cbba/strimzi.png",srcSet:["/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/7fc1e/strimzi.png 288w","/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/a5df1/strimzi.png 576w","/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/3cbba/strimzi.png 1152w","/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/d734d/strimzi.png 1520w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"It supports the following capabilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy Kafka OOS on any OpenShift or k8s platform"),Object(r.b)("li",{parentName:"ul"},"Support TLS and SCRAM-SHA authentication, and automated certificate management"),Object(r.b)("li",{parentName:"ul"},"Define operators for cluster, users and topics"),Object(r.b)("li",{parentName:"ul"},"All resources are defined in yaml file so easily integrated into GitOps")),Object(r.b)("p",null,"The Cluster Operator is a pod used to deploys and manages Apache Kafka clusters, Kafka\nConnect, Kafka MirrorMaker (1 and 2), Kafka Bridge, Kafka Exporter, and the Entity Operator.\nWhen deployed the following commands goes to the Cluster operator:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# Get the current cluster list\noc get kafka\n# get the list of topic\noc get kafkatopics\n")),Object(r.b)("h4",null,"Installation on OpenShift"),Object(r.b)("p",null,"The Strimzi operators deployment is done in two phases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy the main operator via Subscription"),Object(r.b)("li",{parentName:"ul"},"Deploy one to many instances of the Strimzi CRDs: cluster, users, topics…")),Object(r.b)("p",null,"For that we have define subscription and configuration in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-gitops-catalog"},"this eda-gitops-catalog repo"),".\nSo below are the operations to perform:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"}," # clone \n git clone https://github.com/ibm-cloud-architecture/eda-gitops-catalog.git\n # Define subscription\n oc apply -k kafka-strimzi/operator/overlays/stable/\n # The subscription creates an operator pod under the openshift-operators project\n oc get pods -n openshift-operators\n # Create a project e.g. strimzi\n oc new-project strimzi\n # deploy a simple kafka cluster with 3 brokers\n oc apply -k  kafka-strimzi/instance/\n # Verify installation\n oc get pods\n # should get kafka, zookeeper and the entity operator running.\n")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://strimzi.io/docs/operators/latest/using.html"},"Strimzi documentation")," is very good to present a lot of configuration and tuning practices."),Object(r.b)("h4",null,"Application"),Object(r.b)("p",null,"All applications written with Kafka API will work the same way with Strimzi and Event Streams. So developer\ncan use Strimzi images for their local development."),Object(r.b)("h2",null,"Production deployment - High Availability"),Object(r.b)("p",null,"Kafka clustering brings availability for message replication and failover, see details in this ",Object(r.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-overview/advance/#high-availability"},"high availability section."),"\nThis chapter also presents replicas, in-synch replicas concepts and failure scenarios."),Object(r.b)("h2",null,"Performance considerations"),Object(r.b)("h2",null,"Kafka Connect Framework"),Object(r.b)("h2",null,"Integrate with MQ"),Object(r.b)("h2",null,"Debezium change data capture"),Object(r.b)("h2",null,"Schema registry"),Object(r.b)("h2",null,"Anatomy of an event-driven microservice"),Object(r.b)("h2",null,"AsyncAPI"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/refarch-eda/patterns/api-mgt/"},"This article on AsyncAPI management")),Object(r.b)("h2",null,"Mirroring Data"),Object(r.b)("h2",null,"Deployment with GitOps practices"))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-journey-201-index-mdx-23285ac4d853b856125b.js.map