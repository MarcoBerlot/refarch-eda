(window.webpackJsonp=window.webpackJsonp||[]).push([[67,73,123],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("NmYn"),i=n.n(r),s=n("Wbzz"),l=n("Xrax"),c=n("k4MR"),b=n("TSYQ"),p=n.n(b),m=n("QH2O"),d=n.n(m),u=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},n)))))},h=n("BAC9"),v=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},f=n("FCXl"),y=n("dI71"),O=n("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),r=n===o,l=new RegExp(o+"/?(#.*)?$"),c=a.replace(l,n);return Object(u.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(o.a.Component),k=n("MjG9"),N=n("CzIb"),x=n("Asxa"),w=n("OIbQ"),A=n.n(w),E=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(x.c,{className:A.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:A.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,d=b.tabs,h=b.title,y=b.theme,O=b.description,x=b.keywords,w=b.date,A=Object(N.a)().interiorTheme,R=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=R?a.pathname.replace(R,""):a.pathname,C=d?T.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"",z=y||A;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:z,pageTitle:h,pageDescription:O,pageKeywords:x,titleType:m},Object(u.b)(g,{title:o?Object(u.b)(o,null):h,label:"label",tabs:d,theme:z}),d&&Object(u.b)(j,{title:h,slug:T,tabs:d,currentTab:C}),Object(u.b)(k.a,{padded:!0},n,Object(u.b)(v,{relativePagePath:p}),Object(u.b)(E,{date:w})),Object(u.b)(f.a,{pageContext:t,location:a,slug:T,tabs:d,currentTab:C}),Object(u.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ycnG:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),l={_frontmatter:s},c=i.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"A little bit more on environments"),Object(r.b)("p",null,"For demonstration purpose, only the ",Object(r.b)("inlineCode",{parentName:"p"},"rt-inventory-dev")," environment is detailed. One ArgoCD app: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-rt-inventory-gitops/blob/main/config/argocd/rt-inventory-dev-env-app.yaml"},"rt-inventory-dev-env")," is monitoring\nthe folder ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-rt-inventory-gitops/tree/main/environments/rt-inventory-dev/env/overlays"},"environments/rt-inventory-dev/env/overlays")," which define the namespace and roles,…\nEach application of the solution are also monitored by an ArgoCD and their declarations are done using standard kubernetes manifests. Here is an exampe of app tree structure:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"── store-inventory\n│   ├── base\n│   │   └── kustomization.yaml\n│   ├── kustomization.yaml\n│   ├── overlays\n│   │   └── kustomization.yaml\n│   └── services\n│       └── store-inventory\n│           ├── base\n│           │   ├── config\n│           │   │   ├── configmap.yaml\n│           │   │   ├── deployment.yaml\n│           │   │   ├── kustomization.yaml\n│           │   │   ├── rolebinding.yaml\n│           │   │   ├── route.yaml\n│           │   │   ├── service.yaml\n│           │   │   └── serviceaccount.yaml\n│           │   └── kustomization.yaml\n│           ├── kustomization.yaml\n│           └── overlays\n│               └── kustomization.yaml\n")),Object(r.b)("p",null,"The last intesting part is to declare the products used within the Cloud Pak for Integration, and deployed in the context of\nthe respective environments. Everything is in ",Object(r.b)("inlineCode",{parentName:"p"},"services")," folder. The tree looks like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"── apicurio\n│   ├── base\n│   │   ├── es-kafka-topics.yaml\n│   │   ├── kustomization.yaml\n│   │   └── registry.yaml\n│   └── overlays\n│       └── kustomization.yaml\n├── event-endpoint\n│   ├── base\n│   │   ├── eventendpointmanager-eepm-eda.yaml\n│   │   └── kustomization.yaml\n│   └── overlays\n│       ├── kustomization.yaml\n│       └── v10.0.4.0\n│           ├── kustomization.yaml\n│           └── patch-version.yaml\n├── ibm-eventstreams\n│   ├── base\n│   │   ├── es-topics.yaml\n│   │   ├── eventstreams-dev.yaml\n│   │   ├── kustomization.yaml\n│   │   ├── scram-user.yaml\n│   │   └── tls-user.yaml\n│   └── overlays\n│       ├── kustomization.yaml\n│       └── v10.5\n│           ├── kustomization.yaml\n│           └── patch-version.yaml\n├── ibm-mq\n│   ├── base\n│   │   ├── kustomization.yaml\n│   │   └── qmgr.yaml\n│   └── overlays\n│       ├── kustomization.yaml\n│       └── v9.2.4\n│           ├── kustomization.yaml\n│           └── patch-channel.yaml\n├── kconnect\n│   ├── README.md\n│   ├── kafka-connect.yaml\n│   ├── kafka-cos-sink-connector.yaml\n│   ├── kustomization.yaml\n│   └── mq-source.json\n└── kustomization.yaml\n")),Object(r.b)("p",null,"With the public docker images, and the public GitOps repository, the solution can be deployed to an OpenShift cluster with or without Cloud Pak for Integration already deployed."),Object(r.b)("h3",null,"Install Yourself on OpenShift"),Object(r.b)("p",null,"It is possible to do a step by step deployment of the solution without any gitops deployment. This is more like a lab tutorial, where you can progress more slowly and verify\nthe result at each steps."),Object(r.b)("p",null,"Go to the ",Object(r.b)("inlineCode",{parentName:"p"},"rt-inventory-gitops/ocp-demo-step-by-step")," folder and follow the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-rt-inventory-gitops/tree/main/ocp-demo-step-by-step"},"README instructions")," to make\na step by step approach creating records with the simulator, see them in MQ Queue, start the Kafka Connector MQ source, to move data to Event Streams topic, then\ndo the kafka streams processing. "),Object(r.b)("h3",null,"Run with gitops on openshift"),Object(r.b)("p",null,"In this approach, we propose to use a GitOps repository and deploy the solution using few scripts and ",Object(r.b)("inlineCode",{parentName:"p"},"oc")," CLI commands.\nIn the figure below, all the components are deployed with OpenShift GitOps. The blue components are IBM product components like Event Streams and MQ operators and some other operators, like Elastic Search.\nThe green rectangles represent the microservices and kafka connectors source or sink deployed as part of the solution."),Object(r.b)("img",{src:"./images/hl-view.png",alt:null}),Object(r.b)("p",null,"See next guided tour for GitOps approach."),Object(r.b)("h2",null,"Bootstrap GitOps"),Object(r.b)("p",null,"Bootstrapping GitOps is mostly to install the MQ, Event Streams, APIC Connect, OpenShift Gitops, and ElasticSearch operators, and do any pre-requisites like entitlement keys."),Object(r.b)("p",null,"We prefer to keep the bootstrap instructions in the source repository, therefore follow ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-rt-inventory-gitops#bootstrap-gitops"},"the up to date instructions")," from the gitops main readme."),Object(r.b)("h2",null,"Deploy the Solution"),Object(r.b)("p",null,"Once operators are deployed. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Deploying the full solution is by starting ArgoCD app of apps:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"oc apply -k config/argocd\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Access the OpenShift GitOps (ArgoCD) console"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-sh"}," chrome https://$(oc get route openshift-gitops-server -o jsonpath='{.status.ingress[].host}'  -n openshift-gitops)\n")))),Object(r.b)("p",null,"The expected set of ArgoCD apps looks like (and all should be green):"),Object(r.b)("p",null,"  ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACE0lEQVQoz32S6W7bMBCE9f7vVDc/giZubOdwkziObZ2xLIo6KVGUr8lQDoICBSpgIe63w11yl85N6GG6DTGLP/CcCdyLGNeBj/s4IovwSP8hscwd/Ok2wlO6I6tw7aeYhDnutyVS6UKKNzieEGgqBZFKHDuDpu0RJgU61SAVGRRjRhsEaYqmpk5ImEbDdB1CKRgvIaWENgfaCU5Q5MD5DN0b2K82e4R5Pay1MTgcj2hYyOpO1LVkp9MJiiwsCpyps+x4PKDvezjzIMBy7eF15SL8iBEz2WuYYLW5sE0QIZEFXqJo0C3I1n6EXZb/w0RWwHmgc/f0ismfN/zm/z2M8exGuJsvvtmabO4Gw9oyG1tHFzZ+fMH0eTmwVbCF49reNC2Kqsb+cERnNBKxRas7sop+j5bXG3RaIysrHKhr+z089l197e3p9/sDE8oUmg0WeY6aQaUqTmyHrtPI8wwFE+Tc4GeSiS86xYGVtG/GXtZKDQWdDRN2rR6AraK14tRintCgqtXQ6Ian9ezmb10P9cX0wBoYMnsbZ7xY4ufNFFfjGUY3M6w8n8N4x+h2hiva6HaKpcc3udowftFZvvQv7MevyYXRlm7IE+5yZEUFWdas1CKjbXaCfeFJixpF3fDKCl4s4e8y+Ek2/N1tCtey5C9G31mLgkNpIPg4S/ZC2H5xALbZIhUsVqJkQptgFQmsP/5vn/0KMYYCCqhwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"rt inv argoapps",title:"rt inv argoapps",src:"/refarch-eda/static/ab7be809f48d69e9756ddaeb55029450/3cbba/rt-inv-argoapps.png",srcSet:["/refarch-eda/static/ab7be809f48d69e9756ddaeb55029450/7fc1e/rt-inv-argoapps.png 288w","/refarch-eda/static/ab7be809f48d69e9756ddaeb55029450/a5df1/rt-inv-argoapps.png 576w","/refarch-eda/static/ab7be809f48d69e9756ddaeb55029450/3cbba/rt-inv-argoapps.png 1152w","/refarch-eda/static/ab7be809f48d69e9756ddaeb55029450/590a8/rt-inv-argoapps.png 1355w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-Argo-app")," is an app of apps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-dev-env")," is for the rt-inventory-dev namespace")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-dev-services")," is for event streams, kafka connect cluster and mq deployments in dev-env namespace")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-store-simulator-app")," is for the simulator app used in the demo.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-item-inventory")," for the item aggregator application")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-store-inventory")," for the store aggregator application")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-dev-eepm-service")," for Event End Point management")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-dev-elastic-svc")," for Elastic Search deployment")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"rt-inventory-dv-kibana-svc")," for Kibana")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Verify pods"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"  oc project rt-inventory-dev\n  oc get pods\n\n  NAME                                         READY   STATUS    RESTARTS   AGE\n  dev-kafka-cruise-control-6d6bf8b774-99rwl    2/2     Running   0          4d\n  dev-kafka-entity-operator-75f7bc8f5c-x4vkt   3/3     Running   0          4d\n  dev-kafka-kafka-0                            1/1     Running   0          4d\n  dev-kafka-kafka-1                            1/1     Running   0          4d\n  dev-kafka-kafka-2                            1/1     Running   0          4d\n  dev-kafka-zookeeper-0                        1/1     Running   0          4d\n  dev-kafka-zookeeper-1                        1/1     Running   0          4d\n  dev-kafka-zookeeper-2                        1/1     Running   0          4d\n  item-inventory-669fd4fffc-4fvhk             1/1     Running   0          30h\n  store-inventory-7df98556ff-f2ndq            1/1     Running   0          29h\n  store-simulator-56f8958498-mvhp9             1/1     Running   0          4d\n  dev-entity-operator-74d7dc5cfb-ksv68                              3/3     Running     0          5d21h\n  dev-ibm-es-ac-reg-77bfbf84b9-qn8ln                                2/2     Running     0          5d21h\n  dev-ibm-es-admapi-6f6bcd465c-h8scj                                1/1     Running     0          5d21h\n  dev-ibm-es-metrics-9c4679cd-n5bb7                                 1/1     Running     0          5d21h\n  dev-ibm-es-recapi-775bf874b9-gqbdn                                1/1     Running     0          5d21h\n  dev-ibm-es-ui-5d488967d4-6v2tm                                    2/2     Running     0          5d21h\n  eda-eepm-mgmt-27885b45-postgres-55b548f64f-nqs6f                  0/1     Init:0/1    0          4d23h\n  eda-eepm-mgmt-27885b45-postgres-backrest-shared-repo-7b58fjdd7s   1/1     Running     0          12d\n  eda-eepm-mgmt-27885b45-postgres-pgbouncer-5575bc4595-c9zng        1/1     Running     0          12d\n  eda-kconnect-cluster-connect-78ccb7cc56-jh2ck                     1/1     Running     0          4d17h\n  elasticsearch-es-default-0                                        1/1     Running     0          36m\n  elasticsearch-es-default-1                                        1/1     Running     0          36m\n  elasticsearch-es-default-2                                        1/1     Running     0          36m\n  kibana-kb-67f4c87c65-9whwz                                        1/1     Running     0          36m\n  store-mq-ibm-mq-0                                                 1/1     Running     1          4d19h\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scenarios-realtime-inventory-index-mdx-e58dfcc7f744a864729e.js.map