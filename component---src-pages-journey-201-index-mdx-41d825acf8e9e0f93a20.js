(window.webpackJsonp=window.webpackJsonp||[]).push([[45,115],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},f=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,c=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),k=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[k.selectedItem]=i,t),k.listItem)},Object(m.b)(s.Link,{className:k.link,to:""+l},e))}));return Object(m.b)("div",{className:k.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:k.list},i))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),x=a("Asxa"),N=a("OIbQ"),A=a.n(N),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(x.c,{className:A.a.row},Object(m.b)(x.a,null,Object(m.b)("div",{className:A.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,u=b.tabs,f=b.title,j=b.theme,k=b.description,x=b.keywords,N=b.date,A=Object(w.a)().interiorTheme,S=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=S?n.pathname.replace(S,""):n.pathname,z=u?I.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",P=j||A;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:P,pageTitle:f,pageDescription:k,pageKeywords:x,titleType:p},Object(m.b)(h,{title:r?Object(m.b)(r,null):f,label:"label",tabs:u,theme:P}),u&&Object(m.b)(y,{title:f,slug:I,tabs:u,currentTab:z}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d}),Object(m.b)(T,{date:N})),Object(m.b)(O.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:z}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I4bF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("InlineNotification"),b=c("AnchorLinks"),d=c("AnchorLink"),p={_frontmatter:s},u=o.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("strong",null,"Updated 10/25/2021 - Work In Progress")),Object(i.b)("p",null,"In this ",Object(i.b)("inlineCode",{parentName:"p"},"201")," content, you should be able to learn more about Kafka, Event Streams, Messaging, and Event-driven solution."),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"More Kafka"),Object(i.b)(d,{mdxType:"AnchorLink"},"Production deployment - High Availability"),Object(i.b)(d,{mdxType:"AnchorLink"},"Performance considerations"),Object(i.b)(d,{mdxType:"AnchorLink"},"EDA Design patterns"),Object(i.b)(d,{mdxType:"AnchorLink"},"Kafka Connect Framework"),Object(i.b)(d,{mdxType:"AnchorLink"},"Integrate with MQ"),Object(i.b)(d,{mdxType:"AnchorLink"},"Introduction to schema management"),Object(i.b)(d,{mdxType:"AnchorLink"},"AsyncAPI"),Object(i.b)(d,{mdxType:"AnchorLink"},"Debezium change data capture"),Object(i.b)(d,{mdxType:"AnchorLink"},"Mirroring Data")),Object(i.b)("h2",null,"More Kafka"),Object(i.b)("p",null,"We have already covered the Kafka architecture in ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-eda/technology/kafka-overview/#kafka-components"},"this section"),".\nWhen we deploy Event Streams on Kubernetes, it uses Operator, and it is in fact a wrapper on top of ",Object(i.b)("a",{parentName:"p",href:"http://strimzi.io"},"Strimzi"),",\nthe open source kafka operator."),Object(i.b)("h3",null,"Strimzi"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://strimzi.io/"},"Strimzi")," uses the Cluster Operator to deploy and manage Kafka (including Zookeeper) and Kafka Connect clusters.\nWhen the Strimzi Cluster Operator is up and runnning, it starts to watch for certain OpenShift or Kubernetes resources containing the\ndesired Kafka and/or Kafka Connect cluster configuration. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPklEQVQoz5VTPY/TQBBNyw9B9PyBk+jpqOiQEBUVdIgCXYMEHQVIVHRAScdPOIm7C0mc3BFyie3dnd1N4sRre/0VX8KzLxF3p6NgNBqNVn47771ZtwRJRoqTYkL+V3KSLZfRj8Oj4/ZPLggXkVQkpVSqaep+11xPj8sWE2qxCCITZU1Ya1Nr4yhCSVMbhmFz1Q3hX4DLslwul9MmAN5sNr2ec3I6zLI8juNrYK31bDZD3YKLopjP547juK5r02yzqZ5/Prv9ov3406i0BnLkLoQQGANwFEWcdA3O89wYMxgMGGNJA374cdR6cnzvrZOauefjmHHOBGee54EdZgRBINS0BkNqVVWYjwZ1tSpny3hMoQxiaxMi0kqLeh01Z4BhBJg2tEnZJhbwLVjUhmWF1oqEQB+auO84B93R/Xcnd/d7778Pi2QJIcBzqa+AoSdN0zDOIMmEYZom86XBBg/67M7L7q2n7Vdfe2k4G40nmLylDaq1BiGAWa/X1ar0dXR0FoykSW2iG4dPXeqNiJEGPXyGSVu3YRhmdjod3/ezvIBhDz4MW48O9173YJjbOCYF1yQ8163V+j5obycDnCTJZDLBGi9Wtf/N33szePZlnFsjLq0K5mFP4AimW80Aw+3z82oFo8uyqlZ5/dSSIs9wqVIS/l1KPf/7SEibKI7iODQmNBGqqWtkmoT/uwd/OXEia/DY9fqnw5Nfv12fe5zqZLRtOPmc/vVX4dLWeDLudruDfp9ITKf6KsMm1c2J+AMqjlqJhxLB6wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Strimzi",title:"Strimzi",src:"/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/3cbba/strimzi.png",srcSet:["/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/7fc1e/strimzi.png 288w","/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/a5df1/strimzi.png 576w","/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/3cbba/strimzi.png 1152w","/refarch-eda/static/68cda2210752c9ebd3d4d5382322a1ae/d734d/strimzi.png 1520w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"It supports the following capabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deploy Kafka OOS on any OpenShift or k8s platform"),Object(i.b)("li",{parentName:"ul"},"Support TLS and SCRAM-SHA authentication, and automated certificate management"),Object(i.b)("li",{parentName:"ul"},"Define operators for cluster, users and topics"),Object(i.b)("li",{parentName:"ul"},"All resources are defined in yaml file so easily integrated into GitOps")),Object(i.b)("p",null,"The Cluster Operator is a pod used to deploys and manages Apache Kafka clusters, Kafka\nConnect, Kafka MirrorMaker (1 and 2), Kafka Bridge, Kafka Exporter, and the Entity Operator.\nWhen deployed the following commands goes to the Cluster operator:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Get the current cluster list\noc get kafka\n# get the list of topic\noc get kafkatopics\n")),Object(i.b)("h4",null,"Installation on OpenShift"),Object(i.b)("p",null,"The Strimzi operators deployment is done in two phases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deploy the main operator via Subscription"),Object(i.b)("li",{parentName:"ul"},"Deploy one to many instances of the Strimzi CRDs: cluster, users, topics…")),Object(i.b)("p",null,"For that we have define subscription and configuration in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-gitops-catalog"},"this eda-gitops-catalog repo"),".\nSo below are the operations to perform:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"}," # clone \n git clone https://github.com/ibm-cloud-architecture/eda-gitops-catalog.git\n # Define subscription\n oc apply -k kafka-strimzi/operator/overlays/stable/\n # The subscription creates an operator pod under the openshift-operators project\n oc get pods -n openshift-operators\n # Create a project e.g. strimzi\n oc new-project strimzi\n # deploy a simple kafka cluster with 3 brokers\n oc apply -k  kafka-strimzi/instance/\n # Verify installation\n oc get pods\n # should get kafka, zookeeper and the entity operator running.\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://strimzi.io/docs/operators/latest/using.html"},"Strimzi documentation")," is very good to present a lot of configuration and tuning practices."),Object(i.b)("h4",null,"Application"),Object(i.b)("p",null,"All applications written with Kafka API will work the same way with Strimzi and Event Streams. So developer\ncan use Strimzi images for their local development."),Object(i.b)("h2",null,"Production deployment - High Availability"),Object(i.b)("p",null,"Kafka clustering brings availability for message replication and failover, see details in this ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-overview/advance/#high-availability"},"high availability section."),"\nThis chapter presents replicas, in-synch replicas concepts and addresses some broker failure scenarios that are important to understand."),Object(i.b)("p",null,"When looking how Kafka is deployed on Kubernetes / Openshift it is important to isolate each broker\nto different worker node as illustrated in ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-overview/advance/#high-availability-in-the-context-of-kubernetes-deployment"},"this section"),"."),Object(i.b)("p",null,"In end-to-end deployment, the high availability will become more of a challenge for the producer and consumer.\nConsumers and producers should better run on separate servers than the brokers nodes. Producer may need\nto address back preasure on their own. Consumers need to have configuration that permit to do not enforce\npartition to consumer reassignment too quickly. Consumer process can fail and restart quickly and get the same partition allocated."),Object(i.b)("h2",null,"Performance considerations"),Object(i.b)("p",null,"Read ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-overview/advance/#performance-considerations"},"this dedicated article on performance, resilience, throughput.")),Object(i.b)("h2",null,"EDA Design patterns"),Object(i.b)("p",null,"Event-driven solutions are based on a set of design pattern for application design. In\n",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/patterns/intro/"},"this article"),", you will find the different pattern which\nare used a lot in the field like"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/patterns/event-sourcing/"},"Event sourcing"),": persists, to an append log, the states of a business entity, such as an Order, as a sequence of immutable state-changing events."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/patterns/cqrs/"},"Command Query Responsibility Segregation"),": helps to separate queries from commands and help to address queries with cross-microservice boundary."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/patterns/saga/"},"Saga pattern:")," Microservices publish events when something happens in the scope of their control like an update in the business entities they are responsible for. A microservice, interested in other business entities, subscribes to those events and it can update its own state and business entities on receipt of these events. Business entity keys need to be unique and immutable."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/patterns/dlq/"},"Event reprocessing with dead letter"),": event driven microservices may have to call external services via a synchronous call. We need to process failure in order to get response from those services using event backbone."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/patterns/intro/#transactional-outbox"},"Transactional outbox"),": A service command typically needs to update the database and send messages/events.\nThe approach is to use an outbox table to keep the message to sent and a message relay process to publish events inserted into database to the event backbone. (Source Chris Richardson - Microservices Patterns)")),Object(i.b)("h2",null,"Kafka Connect Framework"),Object(i.b)("p",null,"Kafka connect is an open source component for easily integrate external systems with Kafka.\nIt works with any Kafka product such as IBM Event Streams, Red Hat AMQ Streams, or Strimzi.\nYou can learn more about it ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-connect/"},"in this article")," and with those labs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/connect-s3/"},"Connect to S3 source and sink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/connect-cos/"},"Connect to IBM Cloud Object Storage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/connect-jdbc/"},"Connect to a Database with JDBC Sink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"use-cases/connect-mq/"},"Connect to MQ queue as source or Sink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/connect-rabbitmq/"},"Connect to RabbitMQ"))),Object(i.b)("h2",null,"Integrate with MQ"),Object(i.b)("p",null,"Using Kafka Connect framework, IBM has a ",Object(i.b)("a",{parentName:"p",href:""},"MQ connector")," to integrate easily between Event Streams and IBM MQ\nand the ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/connect-mq/"},"following labs")," will help you learn more about how to use it."),Object(i.b)("h2",null,"Introduction to schema management"),Object(i.b)("h2",null,"AsyncAPI"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/refarch-eda/patterns/api-mgt/"},"This article on AsyncAPI management")),Object(i.b)("h2",null,"Debezium change data capture"),Object(i.b)("h2",null,"Mirroring Data"))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-journey-201-index-mdx-41d825acf8e9e0f93a20.js.map