(window.webpackJsonp=window.webpackJsonp||[]).push([[44,85],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),o=a.n(s),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,o=i.subDirectory,c=s+"/edit/"+i.branch+o+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),v=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),s=i===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,i);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=s,t),j.listItem)},Object(m.b)(r.Link,{className:j.link,to:""+l},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},i))))))},t}(i.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,p=t.titleType,u=b.tabs,v=b.title,j=b.theme,A=b.description,y=b.keywords,x=Object(r.useStaticQuery)("2456312558").site.pathPrefix,k=x?n.pathname.replace(x,""):n.pathname,N=u?k.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:j,pageTitle:v,pageDescription:A,pageKeywords:y,titleType:p},Object(m.b)(h,{title:i?Object(m.b)(i,null):v,label:"label",tabs:u}),u&&Object(m.b)(O,{slug:k,tabs:u,currentTab:N}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d})),Object(m.b)(f.a,{pageContext:t,location:n,slug:k,tabs:u,currentTab:N}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UiV1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("qKvR"),{}),c={_frontmatter:r},l=o.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"Event Sourcing"),Object(s.b)("h2",null,"Problems and Constraints"),Object(s.b)("p",null,"Most business applications are state based persistent where any update changes the previous state of business entities. The database keeps the last committed update. But some business application needs to ",Object(s.b)("strong",{parentName:"p"},"explain how it reaches its current state"),". For that the application needs to keep history of business facts.\nTraditional domain oriented implementation builds a domain data model and map it to a RDBMS. As an example, in the simple ",Object(s.b)("inlineCode",{parentName:"p"},"Order model")," below, the database record will keep the last state of the Order entity, with the different addresses and the last ordered items in separate tables."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfklEQVQoz3VSaU/CQBDt//8VfjYRD4KIIlcpaqwUo1wCAZEjpWBLD3rQ9jnbghDQSaaz3U7fvvdmOc3QsTQNaLoOc7VCHGH8DAMMp1NUG21UqnXUmh8YyfLmWxjlYXBnmQKucmWcZ4t46/Rg+4DmhHCoqpYLQZJwXRJwkrhBssCj3uv+ArJwXJf+66LWamOqKODGsoLJbE6pYGkYcAloYbPTY566aUK3TGJv4Xu5hLVRsQW0HQe5JxGpYgX98RjcIeV1EEIlhj5VJq/dH6I7HEVVUdUjuay6nktMHfi+D45tBHsNAaXhAR69io0WmCXJvICLbAnvne4RoGXb4F9qKIkSel+jGJCF561JngGVJLI0aM38CWgwfuDHSQwOAVkPL77iVnjG52S6A1xoGlJkfuKuiNN0HpnyY+RfDLCzZF9qpCgIiOWK0iLp3g6QncQGw4Y0kmc0sXnUsM9oH2y7XpHkNP+Ay/sy2oNBPJS/7tMho//22aHMW6nZgrxY4AdgUqzffnqrywAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/fe0436ff513d0d4142895493c5e80a43/3cbba/evt-src-ex1.png",srcSet:["/refarch-eda/static/fe0436ff513d0d4142895493c5e80a43/7fc1e/evt-src-ex1.png 288w","/refarch-eda/static/fe0436ff513d0d4142895493c5e80a43/a5df1/evt-src-ex1.png 576w","/refarch-eda/static/fe0436ff513d0d4142895493c5e80a43/3cbba/evt-src-ex1.png 1152w","/refarch-eda/static/fe0436ff513d0d4142895493c5e80a43/3a43e/evt-src-ex1.png 1262w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"If you need to implement a query that looks at what happened to the order over a time period, you need to change the model and add historical records, basically building a log table."),Object(s.b)("p",null,"Designing a service to manage the life cycle of this order will, most of the time, add a “delete operation” to remove data.  For legal reason, most businesses do not remove data. As an example, a business ledger has to include new record(s) to compensate a previous transaction. There is no erasing of previously logged transactions. It is always possible to understand what was done in the past. Most business application needs to keep this capability."),Object(s.b)("h2",null,"Solution and Pattern"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Event sourcing")," persists the state of a business entity, such an Order, as a sequence of state-changing events or immuttable “facts” ordered over time. Event sourcing has its roots in the domain-driven design community. "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"916px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxElEQVQoz11STW/TQBDN/5e4wY1L4QAXWjUQBIGQNHFC7PgztuMmPbWV0tZef7dAZTePmQ2xaiyNZmbfzNvZN+5UVYUwSXArBJI8R5xl2IYh7uIYeVkiJH+IBWFcF1Md126jCDdkfx4fwd9ut0OHAcU0pamui4XnYWwYmFoWzCCQnjFjtcJ8ucSEYva678v4TNflJS1CLtCIjIu4UfNcmVtEyNhPx5HnjKvuEgvfa+oY4xe0CL8qc/TOZpjZDk3o43QwwWhhwl6f04S2bLLOA4w0A73Rvk5zPbzvDfFxqEjJGsKsLCTBy7ddanYwd1y8ovj42wTOZo13nwY4OulLwu5AwYvXH/BFUWX+5riPk+9jROkzwrQoMFR1umkqyfhZPC1P46zX6E9VfKac9RzrJro/FNLUlnJMbZv0NttP5q3uRfZIm7aG5iqQS+L8oOHCdxsNuY+X1loKTzhzbLrNghH4sFg3iuck/vJi02Csp0ZECsVMaJMcjHEushSHr1PXNUSUIQxTJHGBPL1HLPImjuicLUv25//XxXGO++w30pT8wwM6T/UTxDX9tJcFon8mrtqxuCqf5WUbo97tJkGZ/UJVV/gL6O/KJ4q18JUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/a81718674ff286e03a778a06f6b31fc6/afc4b/evt-src.png",srcSet:["/refarch-eda/static/a81718674ff286e03a778a06f6b31fc6/7fc1e/evt-src.png 288w","/refarch-eda/static/a81718674ff286e03a778a06f6b31fc6/a5df1/evt-src.png 576w","/refarch-eda/static/a81718674ff286e03a778a06f6b31fc6/afc4b/evt-src.png 916w"],sizes:"(max-width: 916px) 100vw, 916px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"When the state of a system changes, an application issues a notification event of the state change. Any interested parties can become consumers of the event and take required actions.  The state-change event is immutable stored in an event log or event store in time order.  The event log becomes the principal source of truth. The system state can be recreated from a point in time by reprocessing the events. The history of state changes becomes an audit record for the business and is often a useful source of data for business analysts to gain insights into the business."),Object(s.b)("p",null,"You can see the “removing an item” event in the log is a new event. With this capability, we can count how often a specific product is removed for the shopping cart."),Object(s.b)("p",null,"In some cases, the event sourcing pattern is implemented completely within the event backbone.  Kafka topic and partitions are the building blocks for event sourcing. However, you can also consider implementing the pattern with an external event store, which provides optimizations for how the data may be accessed and used. For example ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/products/db2-event-store"}),"IBM Db2 Event store")," can provide the handlers and event store connected to the backbone and can provide optimization for down stream analytical processing of the data."),Object(s.b)("p",null,"An event store needs to store only three pieces of information:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The type of event or aggregate."),Object(s.b)("li",{parentName:"ul"},"The sequence number of the event."),Object(s.b)("li",{parentName:"ul"},"The data as a serialized entity.")),Object(s.b)("p",null,"More data can be added to help with diagnosis and audit, but the core functionality only requires a narrow set of fields. This gives rise to a very simple data design that can be heavily optimized for appending and retrieving sequences of records."),Object(s.b)("p",null,"With a central event logs, as provides by Kafka, producers append events to the log, and consumers read them from an ",Object(s.b)("strong",{parentName:"p"},"offset")," (a sequence number)."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1048px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABlUlEQVQoz22Qe08TQRTF98P6hx/DD6H/GFGqtnTZ0sY+UvrYQlsKTUjFhKCSSDBVlO3D2e2+hO7sz9kF1Ca9ycm598zcM/eOFtqXOI6LZc0QwkFGkmgN5D1iGfN/TBYR4e0/TTutPubj2Wc6u8d8OPmEJ8K1cOchi3nA/GqBuPaQS8nZWPBEPyd/8B3HCwhvbtF+TcYI28aaTnF9j3XhOSHWjznRTYxjhczGrnrkN7Xjr2Tbp5QG5zx6esKz2gVa0mA7Dp7vp83D0Yhmt4vZ79Pu9dgbDOgdDmkprTPo09zr0jC7+EHAMloyE4IgDLj46XE1C9DiWP6dJIoiSvU6G7kcme1tXuXzZHSdnVqVt4UdNlWeaG8KRrpVEnG8+qdaIjyIiWHd7JArljAqFfR3ZQqKy41GWhvlijorppxs9WCYQN6ztvpKTLFe43n2NS/1LV5sZVM2qmUyhp7WG/kcmyq3XUfdVkZSrhjfTchdYU98Dvbf09o9xGwe0W4c0WkN6e+PUjZVnehJ/u3LlOm1UJPJldX/AJ10QQmlIX1oAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4",title:"4",src:"/refarch-eda/static/05432d5799a5004046e7d20e24f9c165/e1201/evt-sourcing.png",srcSet:["/refarch-eda/static/05432d5799a5004046e7d20e24f9c165/7fc1e/evt-sourcing.png 288w","/refarch-eda/static/05432d5799a5004046e7d20e24f9c165/a5df1/evt-sourcing.png 576w","/refarch-eda/static/05432d5799a5004046e7d20e24f9c165/e1201/evt-sourcing.png 1048w"],sizes:"(max-width: 1048px) 100vw, 1048px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"To get the final state of an entity, the consumer needs to replay all the events, which means replaying the changes to the state from the last committed offset or from the last snapshot or the origin of “time”."),Object(s.b)("h3",null,"Advantages"),Object(s.b)("p",null,"The main goal is to be able to understand what happens to a business entity over time. But there are a set of interesting things that can be done:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"We can rebuild the data view within a microservice after it crashes, by reloading the event log."),Object(s.b)("li",{parentName:"ul"},"As events are ordered with time, we can apply complex event processing with temporal queries, time window operations, and looking at non-event."),Object(s.b)("li",{parentName:"ul"},"Be able to reverse the state and correct data with new events.")),Object(s.b)("h3",null,"Considerations"),Object(s.b)("p",null,"When replaying the events, it may be important to avoid generating side effects. A common side effect is to send a notification on state change to other consumers. So the consumer of events need to be adapted to the query and business requirements. For example, if the code needs to answer to the question: “what happened to the order ID 75 over time?” then there is no side effect, only a report can be created each time the consumer runs."),Object(s.b)("p",null,"Sometime it may be too long to replay hundreds of events. In that case we can use snapshot, to capture the current state of an entity, and then replay events from the most recent snapshot. This is an optimization technique not needed for all event sourcing implementations. When state change events are in low volume there is no need for snapshots."),Object(s.b)("p",null,"Kafka is supporting the event sourcing pattern with ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"../../technology/kafka-overview/#topics"}),"the topic and partition"),". In our ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc"}),"reference implementation")," we are validating event sourcing with Kafka in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms"}),"Order microservices")," demonstrate in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/itg-tests/itgtests"}),"this set of test cases.")),Object(s.b)("p",null,"The event sourcing pattern is well described in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://microservices.io/patterns/data/event-sourcing.html"}),"this article on microservices.io"),". It is a very important pattern to support eventual data consistency between microservices and for data synchronization between system as the event store becomes the source of truth."),Object(s.b)("p",null,"See also this ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://martinfowler.com/eaaDev/EventSourcing.html"}),"event sourcing article")," from Martin Fowler, where he is also using ship movement examples. ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc"}),"Our implementation")," differs as we are using Kafka topic as event store and use different entities to support the container shipping process: the Order, the Container and Voyage entities…"),Object(s.b)("p",null,"Another common use case, where event sourcing helps, is when developers push a new code version that corrupts the data: being able to see what was done on the data, and being able to reload from a previous state helps fixing problems."),Object(s.b)("h3",null,"Command sourcing"),Object(s.b)("p",null,"Command sourcing is a similar pattern as the event sourcing one, but the commands that modify the states are persisted instead of the events. This allows commands to be processed asynchronously, which can be relevant when the command execution takes a lot of time.\nOne derived challenge is that the command may be executed multiple times, especially in case of failure. Therefore, it has to be idempotent ( making multiple identical requests has the same effect as making a single request). Finally, there is a need also to perform validation of the command to avoid keeping wrong commands in queue. For example, ",Object(s.b)("inlineCode",{parentName:"p"},"AddItem")," command is becoming ",Object(s.b)("inlineCode",{parentName:"p"},"AddItemValidated"),", then once persisted to a database it becomes an event as ",Object(s.b)("inlineCode",{parentName:"p"},"ItemAdded"),". So mixing command and event sourcing is a common practice."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Business transactions are not ACID and span multiple services, they are more a serie of steps, each step is supported by a microservice responsible to update its own entity. We talk about “eventual data consistency”."),Object(s.b)("li",{parentName:"ul"},"The event backbone needs to guarantee that events are delivered at least once and the microservices are responsible to manage their offset from the stream source and deal with inconsistency, by detecting duplicate events."),Object(s.b)("li",{parentName:"ul"},"At the microservice level, updating data and emitting event needs to be an atomic operation, to avoid inconsistency if the service crashes after the update to the datasource and before emitting the event. This can be done with an eventTable added to the microservice datasource and an event publisher that reads this table on a regular basis and change the state of the event once published. Another solution is to have a database transaction log reader or miner responsible to publish event on new row added to the log."),Object(s.b)("li",{parentName:"ul"},"One other approach to avoid the two-phase commit and inconsistency is to use an Event Store or Event Sourcing pattern to keep track of what is done on the business entity with enough information to rebuild the data state. Events are becoming facts describing state changes done on the business entity.")),Object(s.b)("h2",null,"Code repository"),Object(s.b)("p",null,"All the microservices implementing the Reefer management solution is using event sourcing, as we use kafka with long persistence. The order management service is using CQRS combined with event sourcing: ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms"}),"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms")," and an integration test validate the pattern ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/itg-tests/#how-to-proof-the-event-sourcing"}),"here"),"."),Object(s.b)("h2",null,"Compendium"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://martinfowler.com/eaaDev/EventSourcing.html"}),"Martin Fowler - event sourcing pattern")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://microservices.io/patterns/data/event-sourcing.html"}),"Microservice design pattern from Chris Richardson")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=8JKjvY4etTY"}),"Greg Young video on event sourcing at the goto; conference"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-event-sourcing-index-mdx-065f651d516080b2f59e.js.map