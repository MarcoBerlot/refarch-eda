(window.webpackJsonp=window.webpackJsonp||[]).push([[65,85],{"013z":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("NmYn"),i=t.n(o),c=t("Wbzz"),s=t("Xrax"),l=t("k4MR"),b=t("TSYQ"),p=t.n(b),m=t("QH2O"),d=t("qKvR"),g=function(e){var a,t=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(a={},a[m.withTabs]=r.length,a))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},t)))))},u=t("BAC9"),h=function(e){var a=e.relativePagePath,t=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=t||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+a;return o?Object(d.b)("div",{className:"bx--row "+u.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:u.link,href:s},"Edit this page on GitHub"))):null},f=t("FCXl"),A=t("dI71"),O=t("I8xM"),j=function(e){function a(){return e.apply(this,arguments)||this}return Object(A.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,n=t.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var a,r=i()(e,{lower:!0,strict:!0}),o=r===n,s=new RegExp(n+"/?(#.*)?$"),l=t.replace(s,r);return Object(d.b)("li",{key:e,className:p()((a={},a[O.selectedItem]=o,a),O.listItem)},Object(d.b)(c.Link,{className:O.link,to:""+l},e))}));return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:O.list},r))))))},a}(r.a.Component),w=t("MjG9");a.a=function(e){var a=e.pageContext,t=e.children,n=e.location,r=e.Title,o=a.frontmatter,b=void 0===o?{}:o,p=a.relativePagePath,m=a.titleType,u=b.tabs,A=b.title,O=b.theme,y=b.description,v=b.keywords,N=Object(c.useStaticQuery)("2456312558").site.pathPrefix,x=N?n.pathname.replace(N,""):n.pathname,k=u?x.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:u,homepage:!1,theme:O,pageTitle:A,pageDescription:y,pageKeywords:v,titleType:m},Object(d.b)(g,{title:r?Object(d.b)(r,null):A,label:"label",tabs:u}),u&&Object(d.b)(j,{slug:x,tabs:u,currentTab:k}),Object(d.b)(w.a,{padded:!0},t,Object(d.b)(h,{relativePagePath:p})),Object(d.b)(f.a,{pageContext:a,location:n,slug:x,tabs:u,currentTab:k}),Object(d.b)(s.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rXLx:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return m}));var n,r=t("wx14"),o=t("zLVn"),i=(t("q1tI"),t("7ljp")),c=t("013z"),s=(t("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component '"+n+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:s},p=c.a;function m(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("strong",null,"TODO")," - Work in progress"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.2.0/com.ibm.mq.pro.doc/q001020_.htm"}),"IBM MQ")," is the enterprise solution to exchange message over queues.\nAs it supports loosely coupling communication between applications, via asynchronous protocol, it is part of the event driven architecture product portfolio and makes senses to continue to include it as part of modern cloud native solutions. "),Object(i.b)("p",null,"This note is to summarize for architect the technology fits into EDA and gives pointers to important documentations, articles, and code repositories for using MQ."),Object(i.b)("p",null,"We already addressed the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../concepts/events-versus-messages"}),"difference between event and messaging")," systems, and we can affirm that real production plaform needs to include both. This site includes a lot on Kafka as the backbone to support EDA, but MQ delivers a very important missing element is the transactional support to write message to queue to ensure message delivery. "),Object(i.b)("p",null,"MQ queue managers are the main component to define queue and where applications connect to. They can be organized in network to deliver messages between applications and locations. Managers can be organized in cluster to increase high availability and scaling."),Object(i.b)("p",null," ",Object(i.b)("span",Object(r.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}}),"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.33333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAADoklEQVQ4y4VTf2wTdRT/tt2PdGRGioqDDbFkq0GrjHRxC6DRRQeKhighMVkMhsQ/+MeYITYowUgyFmEMcMJoRpgxGhY0bCwsrNnGZJljmWG7tV17ba9315/X9vpzXdctbI+779FCRqMvubx37/u+n/d57/seQk/IMjUtEzWMTirn/ff7g7y9F+CvMoT2FdXtvbJ2S+3PhWiVhNhhrG8OWNBTwro4hahtVu4ArAAwS0lgIw6P/vvrO0o1bS/rGgzVCO1XLQMUceF71QCnS8V4NzUsQ/nE6orhA8IarHCwSYPTG18xk74oSQZey8Y4nbyeS2YS9oUouP3ENVwRkLIb/ea8mMjJxnLZLGZv3d275CbpEgj+ZwtGxujGQCg1FUg8AJPVc+dC+0SxeD467pQuHfyqTwhux/ZiagDt+xCh9qv/yv/+h1JkgWnaViDq6vcM2wSFAWYIz55B44xStAeHyVWsnHGUXkwrBkMgF5is4iz9r9Oerdjxcedmyfd1rgrjkB3rll+mJEc0PP9U2eq6jhe31XdsUNdeLLt0/IwSHrh2tZwa2opQUe6VhcTyL4/0ykWbYu+jpblbjwFoZ1gVjGWarAmuh/GPtRaXnVR/eqj7OYS+2UhNWpogzQKToCywNFgvxjd81rV2k+58gQSczrWGMhsfGXTkk3QGYE5I6+Z5YEnflmwQw0bbIoll4IUzB0szNbuuvvDKWxe36ho6NYryky9h0C+Q0CoktSE1l8HGjIWrcjhC3YTJe+Ran9Rs/YnbQklKoaTY5zTNjxNm3+GWy6M5Rj+cvlPLxxcM5nh42hud7l3p2oxZo1tGu4ReqK/KBs+ZemVUZEjIXCk5So6tz571GW0YNBZP60J8KpwS2DOhKHT9MXEceYMLqHz7WRz45gdXNB81/r4u33y+UX9Zd1jfV5xbuXAKk2huu1dI2rjvCMJzoP3XyRIUzKQV4x6fAmAFHf32ukKlPbd96sZI1XxoeoTjyVaA5tLntec1NbsN5SLAq29fyiXx+hP5V+7xKCziHrjsgWYQHwhSwATME2rthey2YMCa3Z3IzyWldXWEZS42opglffLuHmEW7XzqIBO3tMLCn5ossDuQ1NroeL83kgFhl2f5QEyFh3jE9t+MHmWFtPA5XQ5hMt8vOdTUU4rWHFMrK37cyFDBnQO3Tbino2MO2eqS84qLiZ6atQVmLTZ/4zOVP214/Z2Oynf3/6Z6cgUJwo3Bpkzu/yX4EPv26hRnM0FZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/27603ff631b8cf501f92def60154986f/ef14d/Picture1.png",srcSet:["/refarch-eda/static/27603ff631b8cf501f92def60154986f/7fc1e/Picture1.png 288w","/refarch-eda/static/27603ff631b8cf501f92def60154986f/a5df1/Picture1.png 576w","/refarch-eda/static/27603ff631b8cf501f92def60154986f/ef14d/Picture1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"We encourage to read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.ibm.com/components/ibm-mq/articles/mq-fundamentals"}),"article from Richard Coppen’s: ‘IBM MQ fundamentals’"),"."),Object(i.b)("h2",null,"Major benefits in EDA"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MQ provides assured delivery of data"),": No data loss and no duplication, strong support of exactly once."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MQ is horizontally scalable"),": As the workload for a single queue manager increases, it is easy to add more queue managers to share tasks and distribute the messages across them. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Highly available")),Object(i.b)("li",{parentName:"ul"},"Integrate well with Mainframe to propagate transaction to eventual consistenty world of cloud native distributed applications. Writing to database and MQ queue is part of the same transaction, which simplifies the injection into event backbone like Kafka, via MQ connector."),Object(i.b)("li",{parentName:"ul"},"Containerized to run on modern kubernetes platform.")),Object(i.b)("h2",null,"Installation with Cloud Pak for Integration"),Object(i.b)("p",null,"Starting with release 2020.2, MQ can be installed via Kubernetes Operator on Openshift platform. From the operator catalog search for MQ. See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.2.0/com.ibm.mq.ctr.doc/ctr_installing_ui.htm"}),"product documentation installation guide")," for up to date details."),Object(i.b)("p",null,"You can verify your installation with the following CLI, and get the IBM catalogs accessible:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc project openshift-marketplace\noc get CatalogSource\nNAME                   DISPLAY                TYPE      PUBLISHER     AGE\ncertified-operators    Certified Operators    grpc      Red Hat       42d\ncommunity-operators    Community Operators    grpc      Red Hat       42d\nibm-operator-catalog   ibm-operator-catalog   grpc      IBM Content   39d\nopencloud-operators    IBMCS Operators        grpc      IBM           39d\nredhat-marketplace     Red Hat Marketplace    grpc      Red Hat       42d\nredhat-operators       Red Hat Operators      grpc      Red Hat       42d\n")),Object(i.b)("p",null,"Once everything is set up, create an operator. The IBM MQ operator can be installed scoped to a single namespace or all namespaces.  "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"778px"}},"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABe0lEQVQ4y52Ti26DMAxF+f9PXLs+BBRogRbGIzw9TiR3GWWbNEtXSRx842sbr+s6KYpCqqqya9u2gs3z/C94TV3Lbvcmh8O77Pc7SdPUXozjKNM0WbBX6HkYhm9nhde2RsIoET+MJFhwuVzkfD7L6XSy6/F4tGsYhhIEwXP1fX/T5w3jJFnZSb4gLRrJ89xKB2VZyv1+t2Uga83YhasEeLUZxfTTEiAvBtG6puv6quneElbton+aXwJpVL3UeO3/zby+M3K9JguukiSJ9H3/vDTG2PMwfDXhzy4jKY5jeTwetmYEYRBxB6lK1wdYm6bZhCWMosg2wZXEfBJMofV1HmOslJCSrOFxiVwOrmmGjIRmDTk+5CshNXZhCZk9SJGsWSphvNS1/PgQtx18Q/AmIdKQTEPcpighvizL5Ha72Rll70reJCRDBpgP15K5o2lIBzQP6T9mqJJpijugPAQhQWSjATwEthrybAr/IP8ixEpI4XVMIFfgA67PxScNp40UImY8DQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"mq operator",title:"mq operator",src:"/refarch-eda/static/e1eea337338aad0347afb8ded7ad3a96/eb090/mq-operator.png",srcSet:["/refarch-eda/static/e1eea337338aad0347afb8ded7ad3a96/7fc1e/mq-operator.png 288w","/refarch-eda/static/e1eea337338aad0347afb8ded7ad3a96/a5df1/mq-operator.png 576w","/refarch-eda/static/e1eea337338aad0347afb8ded7ad3a96/eb090/mq-operator.png 778w"],sizes:"(max-width: 778px) 100vw, 778px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Verify your environment fits the deployment. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.2.0/com.ibm.mq.ctr.doc/ctr_prepare_project_ui.htm"}),"Prepare your Red Hat OpenShift Container Platform for MQ"),"\nThen once the operator is installed (it could take up to a minute), go to the operator page and create a MQ Manager instance. For example be sure to have defined an ibm-entitlement-key in the project you are planning to use to deploy MQ manager"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.4861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABQUlEQVQ4y6WSbW+EIBCE/f8/8e6LrbU9X+DEAxYEnLJccrk2NtHrJkhUHJ+Z3co5ByEE1HSF1hrruuK5+P7IqmJMILfAuggfErz3ICJYaxFCKIdSSrtXZSjg/Emo2xFtJ8HEap4x57Usy4Nyi3arKpvp6ouGUldIMT7I9tSmZbb6IahYlvKeIxMKITFNU4mAn3MM8+0GISVGzlzN25bJR3RzxJJQLIaQs/Q50yzA9mOMWcwV6nu+rohTfreVb0VkcWkbvL/VaJqmWP5PVayqNEHdNIwxheo58MNjkz/BWa44fSnIsUfXdYWSf8R2nzv6V2d/EPKFG9H3PYZhyA2QZedh59Fh4cOCLHY6nVHX9xzbtn1k+RKhNToTDfCOykO2ymQvCq6YKWGyKyaTYFzaHODdgnzILxHOh7LzHP6erSOC3zj0TMrtJ8wOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"mq mgr via operator",title:"mq mgr via operator",src:"/refarch-eda/static/2a8e50cf699c7d460e2ee49a61b553bd/a12c0/mq-mgr-via-operator.png",srcSet:["/refarch-eda/static/2a8e50cf699c7d460e2ee49a61b553bd/7fc1e/mq-mgr-via-operator.png 288w","/refarch-eda/static/2a8e50cf699c7d460e2ee49a61b553bd/a5df1/mq-mgr-via-operator.png 576w","/refarch-eda/static/2a8e50cf699c7d460e2ee49a61b553bd/a12c0/mq-mgr-via-operator.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Then update the Yaml file for name, license and persistence."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"684px"}},"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.1388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/ElEQVQ4y5WS2W/aQBCH/dwIquCLwyEYjDHY5qgT7CRUIVVIqkZCiaoqav9taiOatm99KARSiQI2R3/dNUqeesDD55nVaj/PzC4znU7R6/XgeR4+3d2h2+2i0+mEuK6L2WyG1WqF5XIZxj9B9x5h6Gc0GmE4HOLHwwMGgz7JR/je7+P+fojx+Ccmk0ko9n0/zB/XNNKCaD4lBP4MDP1DEMwxn88RzBcIFr9I7gOrgOBjtaAHpuHBf0Fl3wZjMJ+/fMXNu1u8efsBlze3uG6f4327jvZFHRdnNq5adTiOA5vg/AXbXkfr0Abz0fVgWnXImol00YIii8ildpBORBDbjeDZThTR6P+JEJ4TGI9cwuHJKTSzBqVch6KVoOcF2AaL3D4PnhcgCgKEDWFcIrSOGlCNKuRiFSm5QDaSiLECgSNCfisY1yMVNprI5lVI2QI06xhlLYODkoCKGkNc5MBxmxMKT1uvUTTKkPUD1BwbTk1CtRBDZm/zVp9apjN8dXkF3SxjXzVhOE2YehaSlAjb3lpIb/m4eQ61aCAp7UGpvYRWqaGqp5BOsmBZOpstWqbCk7MW8kUdcukFcrpF5sYjGWfDIbPclpdChQ0ipBXSkjMFExmtAjEeR4JIqZzj1lWu2UBIK1RLBkRRJG+OgySrUMj6yNwlb5F7ansT4W+5xShBl1GA3QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"mq yaml",title:"mq yaml",src:"/refarch-eda/static/72db2d11e7c2205c7d2634b8a403f7a1/ed00d/mq-yaml.png",srcSet:["/refarch-eda/static/72db2d11e7c2205c7d2634b8a403f7a1/7fc1e/mq-yaml.png 288w","/refarch-eda/static/72db2d11e7c2205c7d2634b8a403f7a1/a5df1/mq-yaml.png 576w","/refarch-eda/static/72db2d11e7c2205c7d2634b8a403f7a1/ed00d/mq-yaml.png 684w"],sizes:"(max-width: 684px) 100vw, 684px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"As an alternate define a QueueManager manifest / yaml file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: mq.ibm.com/v1beta1\nkind: QueueManager\nmetadata:\n name: eda-mq-lab\nspec:\n version: 9.2.0.0-r1\n license:\n   accept: true\n   license: L-RJON-BN7PN3\n   use: NonProduction\n web:\n   enabled: true\n queueManager:\n   name: "EDAQMGR1"\n   storage:\n     queueManager:\n       type: ephemeral\n template:\n   pod:\n     containers:\n      - name: qmgr\n        env:\n        - name: MQSNOAUT\n          value: "yes"\n')),Object(i.b)("p",null," Then create the QueueManager resource: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"oc apply -f mq-manager.yaml \n# Get the UI route \noc describe queuemanager eda-mq-lab\n")),Object(i.b)("p",null," You should get the console from this URL: https://eda-mq-lab-ibm-mq-web-…containers.appdomain.cloud/ibmmq/console/#/"),Object(i.b)("p",null," ",Object(i.b)("span",Object(r.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABMElEQVQoz41RS4qDQBR0owtPYDbiRs+RwySBLALGLLxuYMYExJiYj3+7xnrQzkQYZh4U3dVdr6zXGr7vw/M8LJdLhGGI3W6H7XaL1WqF9Xr9hs1m8yvnnr1GEASwbRtxHIPVNg2GYYBSalr1vu97WTXI5/eG67owTVPSsaqqQtu2cvl6vVCWpXA2FUUhXBvf73fRaH3XdTAcx4FlWYgOhzFdi+PxiNPpNAmez6c0sJoxPQ118fx6vYpmSrhYLMRwH0XA0CH5/EB2uYiADUygkzL9ZbwjyHmeJAnO5zPyPJeeyTAaDZXiGMU0JhsoJB6PhyDLMtxuN9EwGc15zo8Rb4ZQEBGLb0YBOY25/tzTZM6J75H3ezGq61reQv8gLdSGf/HZyAppmspD8z20oRb/B18sy1/5Q5ILJAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4",title:"4",src:"/refarch-eda/static/fe9570011e21193e9d1b28598447f88e/3cbba/mq-console.png",srcSet:["/refarch-eda/static/fe9570011e21193e9d1b28598447f88e/7fc1e/mq-console.png 288w","/refarch-eda/static/fe9570011e21193e9d1b28598447f88e/a5df1/mq-console.png 576w","/refarch-eda/static/fe9570011e21193e9d1b28598447f88e/3cbba/mq-console.png 1152w","/refarch-eda/static/fe9570011e21193e9d1b28598447f88e/91a72/mq-console.png 1440w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"To access to the ",Object(i.b)("inlineCode",{parentName:"p"},"mqsc")," CLI and run configuration remote connect via ",Object(i.b)("inlineCode",{parentName:"p"},"oc exec -it <podname> bash"),"."),Object(i.b)("h2",null,"Running MQ in docker"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.ibm.com/tutorials/mq-connect-app-queue-manager-containers/"}),"following recent article")," from Richard J. Coppen presents such deployment, and can be summarized as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Use Docker to create a volume:\ndocker volume create qm1data\n# Start queue manager: QM1\ndocker run --env LICENSE=accept --env MQ_QMGR_NAME=QM1 --volume qm1data:/mnt/mqm --publish 1414:1414 --publish 9443:9443 --detach --env MQ_APP_PASSWORD=passw0rd ibmcom/mq:latest\n# The queue manager’s listener listens on port 1414 for incoming connections and port 9443 is used by MQ console\n")),Object(i.b)("p",null,"One queue is created DEV.QUEUE.1 and a channel: DEV.APP.SRVCONN. "),Object(i.b)("p",null,"Then ",Object(i.b)("inlineCode",{parentName:"p"},"docker exec")," on the docker container and use the ",Object(i.b)("inlineCode",{parentName:"p"},"mqsc")," CLI."),Object(i.b)("h2",null,"Getting access to the MQ manager"),Object(i.b)("p",null,"The MQ Console is a web browser based interface for interacting with MQ objects. It comes pre-configured inside the developer version of MQ in a container. On localhost deployment the URL is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://localhost:9443/ibmmq/console/"})," https://localhost:9443/ibmmq/console/")," while on OpenShift it depends of the Route created."),Object(i.b)("h2",null,"Important readings"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFKSJ/com.ibm.mq.helphome.doc/product_welcome_wmq.htm"}),"MQ family page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Cloud Pack for Integration product documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.2.0/com.ibm.mq.helphome.v92.doc/WelcomePagev9r1.htm"}),"MQ 9.2 product documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.ibm.com/components/ibm-mq/articles/mq-fundamentals"}),"Article for developer from Richard Coppen’s: ‘IBM MQ fundamentals’")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.ibm.com/tutorials/mq-connect-app-queue-manager-containers/"}),"MQ on Container"))),Object(i.b)("h2",null,"Code repositories"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:""})))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-mq-index-mdx-2198c305488890e3310b.js.map