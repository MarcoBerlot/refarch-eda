(window.webpackJsonp=window.webpackJsonp||[]).push([[79,88],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),p=a.n(u),b=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:p()(b.pageHeader,(t={},t[b.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:b.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),j=a("dI71"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,i);return Object(m.b)("li",{key:e,className:p()((t={},t[T.selectedItem]=r,t),T.listItem)},Object(m.b)(s.Link,{className:T.link,to:""+c},e))}));return Object(m.b)("div",{className:T.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:T.list},i))))))},t}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,u=void 0===r?{}:r,p=t.relativePagePath,b=t.titleType,h=u.tabs,j=u.title,T=u.theme,k=u.description,y=u.keywords,v=Object(s.useStaticQuery)("2456312558").site.pathPrefix,S=v?n.pathname.replace(v,""):n.pathname,w=h?S.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:h,homepage:!1,theme:T,pageTitle:j,pageDescription:k,pageKeywords:y,titleType:b},Object(m.b)(d,{title:i?Object(m.b)(i,null):j,label:"label",tabs:h}),h&&Object(m.b)(f,{slug:S,tabs:h,currentTab:w}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(g.a,{pageContext:t,location:n,slug:S,tabs:h,currentTab:w}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pZ90:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=l("AnchorLinks"),u=l("AnchorLink"),p={_frontmatter:s},b=o.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"AnchorLinks"},Object(r.b)(u,{mdxType:"AnchorLink"},"Overview"),Object(r.b)(u,{mdxType:"AnchorLink"},"Scenario Prerequisites"),Object(r.b)(u,{mdxType:"AnchorLink"},"Setting up the Quarkus Application"),Object(r.b)(u,{mdxType:"AnchorLink"},"Creating your first Test Class"),Object(r.b)(u,{mdxType:"AnchorLink"},"Creating your first Tests"),Object(r.b)(u,{mdxType:"AnchorLink"},"Next Steps")),Object(r.b)("h2",null,"Overview"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In this lab scenario we’re going to use ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://quarkus.io"}),"Quarkus")," - a subatomic and supersonic framework for Java for\nthe purposes of this lab."),Object(r.b)("li",{parentName:"ul"},"We will be testing using ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://kafka.apache.org/documentation/streams/"}),"Apache Kafka Streams")," TestDriver to mimic a Topology, a Stream and Table."),Object(r.b)("li",{parentName:"ul"},"While using the TestDriver we will perform basic stateless operations and understand the testing infrastructure.")),Object(r.b)("h2",null,"Scenario Prerequisites"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Java")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the purposes of this lab we suggest Java 8+")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Maven")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maven will be needed for bootstrapping our application from the command-line and running\nour application.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"An IDE of your choice")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ideally an IDE that supports Quarkus (such as Visual Studio Code)")),Object(r.b)("h2",null,"Setting up the Quarkus Application"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We will bootstrap the Quarkus application with the following Maven command")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'mvn io.quarkus:quarkus-maven-plugin:1.10.5.Final:create \\\n    -DprojectGroupId=com.ibm \\\n    -DprojectArtifactId=quarkus-kstreams-lab-zero \\\n    -Dextensions="resteasy-jsonb,quarkus-kafka-streams"\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Since we will be using the Kafka Streams testing functionalit,y we will need to edit the ",Object(r.b)("inlineCode",{parentName:"li"},"pom.xml")," to add\nthe dependency to our project. Open ",Object(r.b)("inlineCode",{parentName:"li"},"pom.xml")," and add the following:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>org.apache.kafka</groupId>\n    <artifactId>kafka-streams-test-utils</artifactId>\n    <version>2.5.0</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.hamcrest</groupId>\n    <artifactId>hamcrest</artifactId>\n    <version>2.2</version>\n</dependency>\n")),Object(r.b)("p",null,"The second dependency is for the hamcrest Domain Specific Language for test assertion."),Object(r.b)("h2",null,"Creating your first Test Class"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now let’s create our first Test Class.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the directory structure you will need for your Java file. ",Object(r.b)("em",{parentName:"p"},"(",Object(r.b)("strong",{parentName:"em"},"NOTE:")," If you are working in an IDE, this may be done for you when you create your package and classes.)")),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("inlineCode",{parentName:"p"},"mkdir -p src/test/java/eda/kafka/streams"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a new file named ",Object(r.b)("inlineCode",{parentName:"p"},"src/test/java/eda/kafka/streams/FirstKafkaStreamsTest.java"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Paste the following content into the ",Object(r.b)("inlineCode",{parentName:"p"},"FirstKafkaStreamsTest")," class:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package eda.kafka.streams;\n\nimport static org.hamcrest.CoreMatchers.equalTo;\nimport static org.hamcrest.CoreMatchers.is;\nimport static org.hamcrest.MatcherAssert.assertThat;\n\nimport java.util.Properties;\n\nimport org.apache.kafka.common.serialization.Serdes;\nimport org.apache.kafka.common.serialization.StringDeserializer;\nimport org.apache.kafka.common.serialization.StringSerializer;\nimport org.apache.kafka.streams.StreamsBuilder;\nimport org.apache.kafka.streams.StreamsConfig;\nimport org.apache.kafka.streams.TestInputTopic;\nimport org.apache.kafka.streams.TestOutputTopic;\nimport org.apache.kafka.streams.Topology;\nimport org.apache.kafka.streams.TopologyTestDriver;\nimport org.apache.kafka.streams.kstream.Consumed;\nimport org.apache.kafka.streams.kstream.KStream;\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n\nimport io.quarkus.test.junit.QuarkusTest;\n\n@QuarkusTest\npublic class FirstKafkaStreamsTest {\n\n    private static TopologyTestDriver testDriver;\n    private static String inTopicName = "my-input-topic";\n    private static String outTopicName = "my-output-topic";\n\n    private static TestInputTopic<String, String> inTopic;\n    private static TestOutputTopic<String, String> outTopic;\n\n    @BeforeEach\n    public void buildTopology() {\n\n        final Properties props = new Properties();\n        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "kstream-lab0");\n        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "dummmy:2345");\n        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());\n        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());\n\n        final StreamsBuilder builder = new StreamsBuilder();\n        KStream<String, String> basicColors = builder.stream(inTopicName,Consumed.with(Serdes.String(), Serdes.String()));\n        basicColors.peek((key, value) -> System.out.println("PRE-FILTER: key=" + key + ", value=" + value))\n            .filter((key, value) -> ("BLUE".equalsIgnoreCase(value)))\n            .peek((key, value) -> System.out.println("POST-FILTER: key=" + key + ", value=" + value))\n            .to(outTopicName);\n\n        Topology topology = builder.build();\n\n        testDriver = new TopologyTestDriver(topology, props);\n        inTopic = testDriver.createInputTopic(inTopicName, new StringSerializer(), new StringSerializer());\n        outTopic = testDriver.createOutputTopic(outTopicName, new StringDeserializer(), new StringDeserializer());\n\n    }\n\n    @AfterEach\n    public void teardown() {\n        testDriver.close();\n    }\n\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The above code does a lot in a few lines, so we’ll walk through some of that here.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"@BeforeEach")," annotation on the ",Object(r.b)("inlineCode",{parentName:"li"},"buildTopology")," method means that it will be run each time before each test is executed, while the ",Object(r.b)("inlineCode",{parentName:"li"},"@AfterEach")," annotation on the ",Object(r.b)("inlineCode",{parentName:"li"},"teardown")," method ensures that it will be run each time after each test execution. This allows us to spin up and tear down all the necessary components to test in isolation with each test case."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"buildTopology")," method utilizes the ",Object(r.b)("inlineCode",{parentName:"li"},"StreamsBuilder")," class to construct a simple topology, reading from the input Kafka topic defined by the ",Object(r.b)("inlineCode",{parentName:"li"},"inTopicName")," String."),Object(r.b)("li",{parentName:"ul"},"The topology, we build here, utilizes three of the stateless processors the Kafka Streams API:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"peek")," allows us to look at the key and the value of the record passing through the stream and continue processing it unaffected ",Object(r.b)("em",{parentName:"li"},"(so we leverage this before and after the next processor used to see what is making its way through the topology)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter")," allows us to drop records that do not meet the criteria specified ",Object(r.b)("em",{parentName:"li"},"(either for the key or the value)"),". In this test class, we are filtering on any value that does not match the word ",Object(r.b)("inlineCode",{parentName:"li"},'"BLUE"')," ",Object(r.b)("em",{parentName:"li"},"(using a case-insensitive search)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"to")," is the final processor used and to write the contents of the topology at that point to an output Kafka topic"))),Object(r.b)("li",{parentName:"ul"},"The Kafka Streams Test infrastructure provides us the capability to leverage driver classes that function as their own input and output topics, removing the need from connecting directly to a live Kafka instance. The ",Object(r.b)("inlineCode",{parentName:"li"},"inTopic")," and ",Object(r.b)("inlineCode",{parentName:"li"},"outTopic")," instantiation at the bottom of the ",Object(r.b)("inlineCode",{parentName:"li"},"buildTopology")," method hooks into this test infrastructure, so that our test methods can use them to write to and read from the topology."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"teardown")," method cleans up the topology and all the data that has been sent through it for any given test run, allowing us to reset and rerun test cases as needed.")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build the application by running the following:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./mvnw clean verify\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You should see output similar to the following:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"...\n[INFO]\n[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO]\n[INFO] Results:\n[INFO]\n[INFO] Tests run: 0, Failures: 0, Errors: 0, Skipped: 0\n[INFO]\n...\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  29.470 s\n[INFO] Finished at: 2020-09-17T09:34:26-05:00\n[INFO] ------------------------------------------------------------------------\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The build compiled and the test topology was successfully created. But no tests were run, because no tests were written!")),Object(r.b)("h2",null,"Creating your first Tests"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("inlineCode",{parentName:"li"},"src/test/java/eda/kafka/streams/FirstKafkaStreamsTest.java")," and add the following tests to the bottom of the ",Object(r.b)("inlineCode",{parentName:"li"},"FirstKafkaStreamsTest")," class:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'    @Test\n    public void isEmpty() {\n        assertThat(outTopic.isEmpty(), is(true));\n    }\n\n    @Test\n    public void isNotEmpty() {\n        assertThat(outTopic.isEmpty(), is(true));\n        inTopic.pipeInput("C01", "blue");\n        assertThat(outTopic.getQueueSize(), equalTo(1L) );\n        assertThat(outTopic.readValue(), equalTo("blue"));\n        assertThat(outTopic.getQueueSize(), equalTo(0L) );\n    }\n\n    @Test\n    public void selectBlues() {\n        assertThat(outTopic.isEmpty(), is(true));\n\n        inTopic.pipeInput("C01", "blue");\n        inTopic.pipeInput("C02", "red");\n        inTopic.pipeInput("C03", "green");\n        inTopic.pipeInput("C04", "Blue");\n\n        assertThat(outTopic.getQueueSize(), equalTo(2L) );\n\n        assertThat(outTopic.isEmpty(), is(false));\n\n        assertThat(outTopic.readValue(), equalTo("blue"));\n        assertThat(outTopic.readValue(), equalTo("Blue"));\n\n        assertThat(outTopic.getQueueSize(), equalTo(0L) );\n\n    }\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"These are three simple tests:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"isEmpty")," test method checks to make sure the output topic is empty when nothing is sent through the topology"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"isNotEmpty")," test method checks to make sure the output topic is not empty when an item matching our filters is sent through the topology"),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"selectBlues")," test method checks to make sure that our topology is filtering correctly when we send multiple items through the topology and the output topic empties correctly when the testing infrastructure reads from it."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Depending upon versions of the packages brought in, you may see an initial test failure due to needing to update the ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties")," file with the following properties: ",Object(r.b)("em",{parentName:"p"},"(The values are insignifcant for the execution of our tests, but he existence of the property is required by the underlying Quarkus & Kafka Streams integration)")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),"quarkus.kafka-streams.application-id=my-kafka-streams\nquarkus.kafka-streams.topics=topic1\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You should see the tests pass with the following output:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"[INFO]\n[INFO] -------------------------------------------------------\n[INFO]  T E S T S\n[INFO] -------------------------------------------------------\n[INFO] Running eda.kafka.streams.FirstKafkaStreamsTest\n2020-09-17 09:44:33,247 INFO  [io.sma.rea.mes.provider] (main) SRMSG00208: Deployment done... start processing\n2020-09-17 09:44:33,250 INFO  [io.sma.rea.mes.provider] (main) SRMSG00226: Found incoming connectors: [smallrye-kafka]\n2020-09-17 09:44:33,251 INFO  [io.sma.rea.mes.provider] (main) SRMSG00227: Found outgoing connectors: [smallrye-kafka]\n2020-09-17 09:44:33,252 INFO  [io.sma.rea.mes.provider] (main) SRMSG00229: Channel manager initializing...\n2020-09-17 09:44:33,254 INFO  [io.sma.rea.mes.provider] (main) SRMSG00209: Initializing mediators\n2020-09-17 09:44:33,255 INFO  [io.sma.rea.mes.provider] (main) SRMSG00215: Connecting mediators\n2020-09-17 09:44:33,382 INFO  [io.quarkus] (main) Quarkus 1.8.0.Final on JVM started in 2.029s. Listening on: http://0.0.0.0:8081\n2020-09-17 09:44:33,382 INFO  [io.quarkus] (main) Profile test activated.\n2020-09-17 09:44:33,382 INFO  [io.quarkus] (main) Installed features: [cdi, kafka-streams, mutiny, resteasy-jsonb, smallrye-context-propagation, smallrye-reactive-messaging, smallrye-reactive-messaging-kafka, vertx]\nPRE-FILTER: key=C01, value=blue\nPOST-FILTER: key=C01, value=blue\nPRE-FILTER: key=C02, value=red\nPRE-FILTER: key=C03, value=green\nPRE-FILTER: key=C04, value=Blue\nPOST-FILTER: key=C04, value=Blue\nPRE-FILTER: key=C01, value=blue\nPOST-FILTER: key=C01, value=blue\n[INFO] Tests run: 3, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 4.722 s - in eda.kafka.streams.FirstKafkaStreamsTest\n2020-09-17 09:44:34,026 INFO  [io.sma.rea.mes.provider] (main) SRMSG00207: Cancel subscriptions\n2020-09-17 09:44:34,038 INFO  [io.quarkus] (main) Quarkus stopped in 0.024s\n[INFO]\n[INFO] Results:\n[INFO]\n[INFO] Tests run: 3, Failures: 0, Errors: 0, Skipped: 0\n[INFO]\n[INFO]\n")),Object(r.b)("h2",null,"Next Steps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Now that you have finished the foundational Kafka Streams testing lab, you can proceed to ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/use-cases/kafka-streams/lab-1/"}),"Lab 1")," for a deeper dive into more robust real-world Kafka Streams testing use cases!")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-streams-lab-0-index-mdx-49659551e8999dcb2013.js.map