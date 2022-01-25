(window.webpackJsonp=window.webpackJsonp||[]).push([[68,117],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),r=a.n(s),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),h=a("TSYQ"),d=a.n(h),m=a("QH2O"),b=a.n(m),p=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(p.b)("div",{className:d()(b.a.pageHeader,(t={},t[b.a.withTabs]=s.length,t[b.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:b.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,r=i.subDirectory,c=s+"/edit/"+i.branch+r+"/src/pages"+t;return s?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),v=a("dI71"),O=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),l=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=s,t),O.listItem)},Object(p.b)(o.Link,{className:O.link,to:""+l},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},s))))))},t}(i.a.Component),j=a("MjG9"),A=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),k=a.n(x),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:k.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,h=void 0===s?{}:s,d=t.relativePagePath,m=t.titleType,b=h.tabs,g=h.title,v=h.theme,O=h.description,N=h.keywords,x=h.date,k=Object(A.a)().interiorTheme,S=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=S?n.pathname.replace(S,""):n.pathname,C=b?T.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",P=v||k;return Object(p.b)(l.a,{tabs:b,homepage:!1,theme:P,pageTitle:g,pageDescription:O,pageKeywords:N,titleType:m},Object(p.b)(u,{title:i?Object(p.b)(i,null):g,label:"label",tabs:b,theme:P}),b&&Object(p.b)(w,{title:g,slug:T,tabs:b,currentTab:C}),Object(p.b)(j.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(I,{date:x})),Object(p.b)(y.a,{pageContext:t,location:n,slug:T,tabs:b,currentTab:C}),Object(p.b)(c.a,null))}},"6mU6":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),r=a("013z"),o=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},l=c("InlineNotification"),h=c("AnchorLinks"),d=c("AnchorLink"),m={_frontmatter:o},b=r.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(b,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(s.b)("strong",null,"Updates 1/24/2022")),Object(s.b)("p",null,"This chapter describes what and why Avro and Schema registry are important elements of any event-driven solutions."),Object(s.b)(h,{mdxType:"AnchorLinks"},Object(s.b)(d,{mdxType:"AnchorLink"},"Why this is important"),Object(s.b)(d,{mdxType:"AnchorLink"},"Schema Registry"),Object(s.b)(d,{mdxType:"AnchorLink"},"Apache Avro"),Object(s.b)(d,{mdxType:"AnchorLink"},"Data Schemas"),Object(s.b)(d,{mdxType:"AnchorLink"},"Avro, Kafka and Schema Registry"),Object(s.b)(d,{mdxType:"AnchorLink"},"More reading")),Object(s.b)("h2",null,"Why this is important"),Object(s.b)("p",null,"Loosely coupling and asynchronous communication between applications does not mean there is no contract to enforce some constraint between producer and consumer.\nWhen we talk about contract we can first think about schema as we did with XSD. In the world of JSON, JSON schema and Avro schemas can be used to define\ndata structure of the message. As there is a need to get metadata around messaging, ",Object(s.b)("a",{parentName:"p",href:"https://cloudevents.io"},"cloudevents")," is well accepted and adopted as a specification\nto describe event data. Also ",Object(s.b)("a",{parentName:"p",href:"/refarch-eda/patterns/api-mgt/#support-for-async-api"},"AsyncAPI"),"\nestablishes standards for events and messaging in the asynchronous world with an API view, so combining message schema, channels and binding definitions so\nwe have most of the needed information for a consumer to access a data stream or queue. "),Object(s.b)("p",null,"So the contract is defined with a schema. From an EDA design point of view, the producer owns the definition of the schema as it owns the main business entity\nlife cycle, events are generated from. Producer will make sure the message complies with the schema at hand for serializing."),Object(s.b)("p",null,"On top of those specifications, there are technologies to support the contract management in the form of schema registry and API manager. The following\nfigure gives us the foundations for integration between producer, schema registry and consumers."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABibAAAYmwFJdYOUAAAB4UlEQVQoz5VSS2/TQBD2rwdxzAFx4lZV4oAQr6qAICcQIJqqRUqqSG3TJjhNY683fu7THzNrm5eEELMarTzeb2a+byZyvoW2LYzrbj6WbiFK1LWBp//OeRhlgze1xfqmQpLUUI2F1Q5t24Itp3/RWlq8nEg8+ywwnhaUSEHQ4/ncYrMx0JSkFBplpmAIXBQaV0uHb7GlghqakmpKNFi0FBaPPqTYe7fCi0kOkWmAuirKGssbCSElLi9X2G6yAHDO9dC2//ZoStNFqNNIVg6Tix0+zW7x9SoP1NmUNriVDQ7HYzzc38fpdBrixlgww4Emm1c/i0TOGqRJQnoYNFXBLwPAe4+WPElTZNRlo1SIWdvRs1R4ttaYnEt8mQtMYw1lPCKuVJQKObXt+8qe3DGY6Ax9cMwSXabIxgM8OCmwN46DPz/OUShOSJBtQkJfa0hpfmjzL7NU/eN5jcNjiYOjDO/nFWpNCTu9HPJch+5Yw7O4wSxWOCNKfzpTkzV1aj1N2UMTdpc3gRFLFQ0Vy8rQA9qxVOHO0xVGrwXuvxW49+Qadx8vMHq1xYOxxOhNhqOLknRXWCxIf9GQzhkl3XVr04Yh9DR7/dLSkzuIvzjr1w3Ih8XnE25em2F/fkv8n/Yr7DtTL0u81Mf1SgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"schema registry management",title:"schema registry management",src:"/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/4552c/schema-registry.png",srcSet:["/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/7fc1e/schema-registry.png 288w","/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/a5df1/schema-registry.png 576w","/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/4552c/schema-registry.png 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"Schema Registry provides producer and consumer APIs so that these can project whether the event they are about to produce or consume is compatible with previous versions or compatible with the version they are expecting. For that, both producers and consumers require the schema definition at hand at serialization and deserialization time. This can be done either by:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Reading the schema from a local local resource to your producer such as a file, variable, property (or kubernetes construct such as configmap or secret)."),Object(s.b)("li",{parentName:"ol"},"Retrieving the schema definition from the Schema Registry given a name/ID.")),Object(s.b)("p",null,"When the producer wants to send an event to a Kafka topic, two things happen:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The producer makes sure the event to be sent complies to the schema. Otherwise, it errors out."),Object(s.b)("li",{parentName:"ol"},"Project whether the event they are about to produce or consume is compatible with previous versions or compatible with the version they are expecting.")),Object(s.b)("p",null,"For the first action, the producer already holds the two things it needs: the schema definition the event to be sent needs to comply with and the event itself. The producer is therefore able to carry out that compliance check. However, for the second action, where the producer needs to make sure the schema definition your event complies with is compatible with the existing schema definition for the topic in question (if any), the producer might need to contact the schema registry."),Object(s.b)("p",null,"Producers (and consumers) maintain a local cache with the schema definitions (and their versions) along with their unique global IDs (all of these retrieved from the schema registry) for the topics they want to produce/consume events to/from. If the producer has a schema definition in its local cache that matches the schema definition at hand for the serialization of the event, it simply sends the event as the schema definitions match and the event complies with such schema definition. However, if the producer does not have any schema definition in its local cache that matches the schema defintion at hand for the serialization of the event, whether because these are different versions or the producer simply does not have any schema definition in its cache, it contacts the schema registry."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If a schema defintion for the topic in question that matches the schema definition at hand at serialization time in the producer already exists in the schema registry, the producer simply retrieves the global unique ID for that schema definition to locally cache it along with the schema definition itself for future events to be sent so that it avoids contacting the schema registry again.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If a schema definition for the topic in question that matches the schema definition at hand at serialization time in the producer does not already exist in the schema registry, the producer must be able to register the schema definition it has got at hand for the topic in question at serialization time in the schema registry so that such schema definition is now available for any consumer wanting or needing to consume events that comply with such schema definition. For that, the producer must be configured to be able to auto-register schemas and also be provided with the appropriate credentials to register schema definitions from the schema registry perspective if this implements any type of RBAC mechanism (as it is the case for IBM Event Streams)."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"If the producer is not configured to auto-register schema definitions or its credentials does not allow it to register schema definitions, then the send event action will fail until there is a schema definition for the topic in question that mateches the schema definition at hand at serialization time in the producer registered in the schema registry."),Object(s.b)("li",{parentName:"ul"},"If the producer is configured to auto-register schema definitions and its credentials allows it to register schema definitions, the schema registry validates the compatibility of the schema definition at hand at serialization time in the producer with existing schema definitions for the topic in questions (if any) to make sure that, if this schema definition to be registered is a newer version of any existing schema definition, it is complatible so that no consumer gets affected by this new schema definition version. Afer the schema definition or newer version of an exisint schema definition is registered in the schema registry, the producer retrieves its global unique ID to mantain its local cache up to date.")))),Object(s.b)(l,{kind:"warning",mdxType:"InlineNotification"},"We stongly recommend that producers are not allowed to register schema definitions in the schema registry for better governance and management of schema definitions. It is highly recommended that schema definitions registration is done by someone responsible for such task with appropriate role (such as an admin, an API manager, an asynchronous API manager, a development manager, an operator, etc)."),Object(s.b)("p",null,"Once the producer has a schema definition in its local cache, along with its global unique id, that matches the schema definition at hand for serialization of the event to be sent, it produces the event to the Kafka topic using the appropriate ",Object(s.b)("inlineCode",{parentName:"p"},"AvroKafkaSerializer")," class. The schema definition global unique ID gets serialized along with the event so that the event does not need to travel along with its schema definition as it was the case in older messaging or eventing techonolgies and systems."),Object(s.b)("p",null,"By default, when a consumer reads an event, the schema definition for such event is retrieved from the schema registry by the deserializer using the global unique ID, which is specified in the event being consumed. The schema definition for an event is retrieved from the schema registry only once, when an event comes with a global unique ID that can not be found in the schema definition cache the consumer maintains locally. The schema definition global unique ID can be located in the event headers or in the event payload, depending on the configuration of the producer application. When locating the global unique ID in the event payload, the format of the data begins with a magic byte, used as a signal to consumers, followed by the global unique ID, and the message data as normal. For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"# ...\n[MAGIC_BYTE]\n[GLOBAL_UNIQUE_ID]\n[MESSAGE DATA]\n")),Object(s.b)("p",null,"Be aware that non Java consumers use a C library that might require the schema definition at hand for the deserializer too (see ",Object(s.b)("a",{parentName:"p",href:"https://github.com/confluentinc/confluent-kafka-python/issues/834"},"https://github.com/confluentinc/confluent-kafka-python/issues/834"),") as opposed to letting the deserializer retrieve the schema definition from the schema registry as explained above. The strategy would be to have the schema loaded from the schema registry via API."),Object(s.b)("h2",null,"Schema Registry"),Object(s.b)("p",null,"With a pure open-source strategy, Event Streams within Cloud Pak for integration is using Apicu.io as schema registry.\nThe Event Streams ",Object(s.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/schemas/overview/"},"product documentation")," is doing an excellent job to\npresent the schema registry, we do not need to rewrite the story, just give you some summary from Apicur.io and links to code samples."),Object(s.b)("h3",null,"Apicurio"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.apicur.io"},"Apicur.io")," includes a ",Object(s.b)("a",{parentName:"p",href:"https://www.apicur.io/registry/docs/apicurio-registry/2.1.x/index.html"},"schema registry")," to store schema definitions.\nIt supports Avro, json, protobuf schemas, and an API registry to manage OpenApi and AsynchAPI."),Object(s.b)("p",null,"It is a Cloud-native Quarkus Java runtime for low memory footprint and fast deployment times. It supports ",Object(s.b)("a",{parentName:"p",href:"apicurio-registry/2.1.x/getting-started/assembly-intro-to-the-registry.html#registry-storage_registry"},"different persistences"),"\nlike Kafka, Postgresql, Infinispan and supports different deployment models."),Object(s.b)("h4",null,"Registry Characteristics"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Apicurio Registry is a datastore for sharing standard event schemas and API designs across API and event-driven architectures.\nIn the messaging and event streaming world, data that are published to topics and queues often must be serialized or validated using a Schema."),Object(s.b)("li",{parentName:"ul"},"The registry supports adding, removing, and updating the following types of artifacts: OpenAPI, AsyncAPI, GraphQL, Apache Avro, Google protocol buffers, JSON Schema, Kafka Connect schema, WSDL, XML Schema (XSD)."),Object(s.b)("li",{parentName:"ul"},"Schema can be created via Web Console, core REST API or Maven plugin"),Object(s.b)("li",{parentName:"ul"},"It includes configurable rules to control the validity and compatibility."),Object(s.b)("li",{parentName:"ul"},"Client applications can dynamically push or pull the latest schema updates to or from Apicurio Registry at runtime.\nApicurio is compatible with existing Confluent schema registry client applications."),Object(s.b)("li",{parentName:"ul"},"It includes client serializers/deserializers (Serdes) to validate Kafka and other message types at runtime."),Object(s.b)("li",{parentName:"ul"},"Operator-based installation of Apicurio Registry on OpenShift"),Object(s.b)("li",{parentName:"ul"},"Use the concept of artifact group to collect schema and APIs logically related."),Object(s.b)("li",{parentName:"ul"},"Support search for artifacts by label, name, group, and description")),Object(s.b)("p",null,"When using Kafka as persistence, special Kafka topic ",Object(s.b)("inlineCode",{parentName:"p"},"<kafkastore.topic>")," (default ",Object(s.b)("inlineCode",{parentName:"p"},"_schemas"),"), with a single partition, is used as a highly available write ahead log.\nAll schemas, subject/version and ID metadata, and compatibility settings are appended as messages to this log.\nA Schema Registry instance therefore both produces and consumes messages under the ",Object(s.b)("inlineCode",{parentName:"p"},"_schemas")," topic.\nIt produces messages to the log when, for example, new schemas are registered under a subject, or when updates to\ncompatibility settings are registered. Schema Registry consumes from the ",Object(s.b)("inlineCode",{parentName:"p"},"_schemas")," log in a background thread, and updates its local\ncaches on consumption of each new ",Object(s.b)("inlineCode",{parentName:"p"},"_schemas")," message to reflect the newly added schema or compatibility setting.\nUpdating local state from the Kafka log in this manner ensures durability, ordering, and easy recoverability."),Object(s.b)("p",null,"The way Event Streams / Apicur.io has to handle schema association to topics is by schema name. Given we have a topic called orders,\nthe schemas that will apply to it are avros-key (when using composite key) and orders-value (most likely based on cloudevents and then custom payload)."),Object(s.b)("h2",null,"Apache Avro"),Object(s.b)("p",null,"Avro is an open source data serialization system that helps with data exchange between systems, programming languages, and processing frameworks. Avro helps define a binary format for your data, as well as map it to the programming language of your choice."),Object(s.b)("h3",null,"Why Apache Avro"),Object(s.b)("p",null,"There are several websites that discuss the Apache Avro data serialization system benefits over other messaging data protocols. A simple google search will list dozens of them. Here, we will highlight just a few from a ",Object(s.b)("a",{parentName:"p",href:"https://www.confluent.io/blog/avro-kafka-data/"},"Confluent blog post"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"It has a direct mapping to and from JSON"),Object(s.b)("li",{parentName:"ul"},"It has a very compact format. The bulk of JSON, repeating every field name with every single record, is what makes JSON inefficient for high-volume usage."),Object(s.b)("li",{parentName:"ul"},"It is very fast."),Object(s.b)("li",{parentName:"ul"},"It has great bindings for a wide variety of programming languages so you can generate Java objects that make working with event data easier, but it does not require code generation so tools can be written generically for any data stream."),Object(s.b)("li",{parentName:"ul"},"It has a rich, extensible schema language defined in pure JSON"),Object(s.b)("li",{parentName:"ul"},"It has the best notion of compatibility for evolving your data over time.")),Object(s.b)("h2",null,"Data Schemas"),Object(s.b)("p",null,"Avro relies on schemas. When Avro data is produced or read, the Avro schema for such piece of data is always present. This permits each datum to be written with no per-value overheads, making serialization both fast and small. An Avro schema defines the structure of the Avro data format."),Object(s.b)("h3",null,"How does a data schema look like?"),Object(s.b)("p",null,"Let’s see how a data schema to define a person’s profile in a bank could look like:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "banking.schemas.demo",\n  "name": "profile",\n  "type": "record",\n  "doc": "Data schema to represent a profile for a banking entity",\n  "fields ": [\n    {\n      "name": "name",\n      "type": "string"\n    },\n    {\n      "name": "surname",\n      "type": "string"\n    },\n    {\n      "name": "age",\n      "type": "int"\n    },\n    {\n      "name": "account",\n      "type": "banking.schemas.demo.account"\n    },\n    {\n      "name": "gender",\n      "type": {\n        "type": "enum",\n        "name": "genderEnum",\n        "symbols": [\n          "male",\n          "female"\n        ]\n      }\n    }\n  ]\n}\n')),Object(s.b)("p",null,"Notice:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"There are primitive data types like ",Object(s.b)("inlineCode",{parentName:"li"},"string")," and ",Object(s.b)("inlineCode",{parentName:"li"},"int")," but also complex types like ",Object(s.b)("inlineCode",{parentName:"li"},"record")," or ",Object(s.b)("inlineCode",{parentName:"li"},"enum"),"."),Object(s.b)("li",{parentName:"ol"},"Complex type ",Object(s.b)("inlineCode",{parentName:"li"},"record")," requires a ",Object(s.b)("inlineCode",{parentName:"li"},"name")," attribute but it also can go along with a ",Object(s.b)("inlineCode",{parentName:"li"},"namespace")," attribute which is a JSON string that qualifies the name."),Object(s.b)("li",{parentName:"ol"},"Data schemas can be ",Object(s.b)("strong",{parentName:"li"},"nested")," as you can see for the ",Object(s.b)("inlineCode",{parentName:"li"},"account")," data attribute. See below.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "banking.schemas.demo",\n  "name": "account",\n  "type": "record",\n  "doc": "Data schema to represent a customer account with the credit cards associated to it",\n  "fields": [\n    {\n      "name": "id",\n      "type": "string"\n    },\n    {\n      "name": "savings",\n      "type": "long"\n    },\n    {\n      "name": "cards",\n      "type": {\n        "type": "array",\n        "items": "int"\n      }\n    }\n  ]\n}\n')),Object(s.b)("p",null,"In the picture below we see two messages, one complies with the above Apache Avro data schema and the other does not:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABNUlEQVQoz32S246DMAxE+f8P7NOqfaC0iNItkPt1dpxSaau9RBo5EHNiD+7WYKCjoyxUsLA5NDlKJYtQEl6rKIUs0rrFYgxgLSoF2fN9F/mBWjfc73ec+zM0E18rlYy4A2utgPfwIeA2z7hcr7iOI+qeK7E6hy6hYJom9H0PRZiV2/YMgb0BCXM8P51OeCwLNPe5FDlElSjAWDPWZcXI22KMLMIj59wgP4A8C4SOw4DC9gSAtFsiUAH6HNuzAI/HIw6HA4bLBSUXhPwOrHv1nnFk7vTxgYESG4oU0YDlCVzYgmimP2KBVB142W9Axw9v9PyT+eKj+B9YvXTQJbasN4XlscBoQy/qvz8lssWZAEO4E8i31Vpeg4bmuGxeU88RMsm30dn+GJu0bYhU4r5yXKTyKp5SX8tjboWEPUJiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"data examples",title:"data examples",src:"/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/3cbba/data_examples.png",srcSet:["/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/7fc1e/data_examples.png 288w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/a5df1/data_examples.png 576w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/3cbba/data_examples.png 1152w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/0b124/data_examples.png 1728w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/983e6/data_examples.png 2190w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"You might start realising by now the benefits of having the data flowing into your Apache Kafka event backbone validated against a schema. See next section for more."),Object(s.b)("p",null,"For more information on the Apache Avro Data Schema specification see ",Object(s.b)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"https://avro.apache.org/docs/current/spec.html")),Object(s.b)("h3",null,"Benefits of using Data Schemas"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Clarity and Semantics"),": They document the usage of the event and the meaning of each field in the “doc” fields."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Robustness"),": They protect downstream data consumers from malformed  data, as only valid data will be permitted in the topic. They let the producers or consumers of data streams know the right fields are need in an event and what type each field is (contract for microservices)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Compatibility"),": model and handle change in data format.")),Object(s.b)("h2",null,"Avro, Kafka and Schema Registry"),Object(s.b)("p",null,"In this section we try to put all the pieces together for the common flow of sending and receiving messages through an event backbone\nsuch as kafka having those messages serialized using the Apache Avro data serialization system and complying with their respective messages\nthat are stored and managed by a schema registry."),Object(s.b)("p",null,"Avro relies on schemas. When Avro data is produced or read, the Avro schema for such piece of data is always present. An Avro schema defines\nthe structure of the Avro data format. Schema Registry defines a scope in which schemas can evolve, and that scope is the subject.\nThe name of the subject depends on the configured subject name strategy, which by default is set to derive subject name from topic name."),Object(s.b)("p",null,"In this case, the messages are serialized using Avro and sent to a kafka topic. Each message is a key-value pair. Either the message key or the message value, or both, can be serialized as Avro. Integration with Schema Registry means that Kafka messages do not need to be written with the entire Avro schema. Instead, Kafka messages are written with the ",Object(s.b)("strong",{parentName:"p"},"schema id"),". The producers writing the messages and the consumers reading the messages must be using the same Schema Registry to get the same mapping between a schema and schema id."),Object(s.b)("h2",null,"More reading"),Object(s.b)("h3",null,"Articles and product documentation"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/schemas/overview/"},"IBM Event Streams-  Schemas overview")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.apicur.io/registry/docs/apicurio-registry/2.1.x/index.html"},"Apicur.io schema registry documentation")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.confluent.io/platform/current/schema-registry/index.html"},"Confluent schema registry overview")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/eda-quickstarts/tree/main/quarkus-reactive-kafka-producer"},"Producer code with reactive messaging and apicurio schema registry")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/eda-quickstarts/tree/main/quarkus-reactive-kafka-consumer"},"Consumer code with reactive messaging and apicurio schema registry"))),Object(s.b)("h3",null,"Labs"),Object(s.b)("p",null,"We have developed two labs, one for the IBM Event Streams product that comes with the IBM CloudPak for Integration installed on a RedHat OpenShift cluster and the other for the IBM Event Streams on IBM Cloud offering, to get hands-on experience working with Apache Avro, data schemas and the IBM Event Streams Schema Registry:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/schema-registry-on-cloud/"},"IBM Event Streams on IBM Cloud lab")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/schema-registry-on-ocp/"},"IBM Event Streams from IBM CloudPak for Integration lab"))))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-avro-schemas-index-mdx-93fb60f1921106b8eb5f.js.map