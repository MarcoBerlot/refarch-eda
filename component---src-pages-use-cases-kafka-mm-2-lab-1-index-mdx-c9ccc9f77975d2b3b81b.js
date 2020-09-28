(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{OQZX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var r=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=i("AnchorLinks"),b=i("AnchorLink"),l={_frontmatter:s},d=c.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(d,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(b,{mdxType:"AnchorLink"},"Start Kafka Connect"),Object(n.b)(b,{mdxType:"AnchorLink"},"Start Consumer from target cluster"),Object(n.b)(b,{mdxType:"AnchorLink"},"Start Producer to source cluster")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"For this scenario the source cluster is an Event Streams on IBM Cloud cluster instance, and the target is a local Kafka cluster running with docker compose."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABqUlEQVQoz2WRz27UMBCH83IcOPE4HJCoOIHEM9DugTMXpJ44sRIqCARLRVG7u92ilqVtuk6ysRPbsf0x8aJecDT+M+OZ+fJzYUyi6yLOgbVwW8L1DdRNwnuy3xjoB08fHDYORKAKho3b5rONnso79OAo2nYMg1I1q/NfUrChaSy2D5SlytZ30qA1qK2YauTeBaW6kyaOkCIhBhrrqb2lKO86zi//sJif8epgwuzbTIhaQhikzWgWVXnWUmgcF6sVB5MJR0cf8dbJH+wsxZhJC9N5lutLblTLZttTV1uRoCMl8S8D83lC9471RmeSMdH0VggbOtFCVRVaa5J8nUhSzM8Sey8Oefz8JYfvppni89sFb55N2X96IsReJOi5rTvRLuX4OA+77f2IKWWNi9M5fJ15/GAYfODL6ZLpj+98OD5mVS7kqmipPFdNixe6MdEGockVUz6ntFszob1VEjD3na6d4uH7PR59esKD/dcsFuMLRzadaCWFpKcUFMLIfyMT6tqzFdM6ouXF2zawqRytsfw8ify+Sjg7FvFCYHPSaON+JDL/fHro8/oXGtVeXwuYNMgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/02b7704cb1441ef01704702bdfbde798/3cbba/mm2-scen1.png",srcSet:["/refarch-eda/static/02b7704cb1441ef01704702bdfbde798/7fc1e/mm2-scen1.png 288w","/refarch-eda/static/02b7704cb1441ef01704702bdfbde798/a5df1/mm2-scen1.png 576w","/refarch-eda/static/02b7704cb1441ef01704702bdfbde798/3cbba/mm2-scen1.png 1152w","/refarch-eda/static/02b7704cb1441ef01704702bdfbde798/f3ebc/mm2-scen1.png 1448w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"As a pre-requisite you need to run your local cluster by using the docker compose as introduced in ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/refarch-eda/use-cases/kafka-mm2/#pre-requisites"}),"this note"),"."),Object(n.b)("h2",null,"Start local kafka cluster"),Object(n.b)("p",null,"If for security reason you are not able to install docker on your local workstation, but you have access to a kubernetes cluster, like OpenShift, see the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#running-docker-in-kubernetes-pod"}),"next section"),"."),Object(n.b)("p",null,"In this project main folder there is a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/ibm-cloud-architecture/refarch-eda-data-consistency/master/docker-compose.yml"}),"docker compose file")," to start a local two brokers cluster with one Zookeeper node."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"In one Terminal window, start the local cluster using ",Object(n.b)("inlineCode",{parentName:"li"},"docker-compose up &")," command. The data are persisted on the local disk within this folder.")),Object(n.b)("p",null,"Your local environment is up and running."),Object(n.b)("h2",null,"Start Kafka Connect"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If this is the first time you start this local Kafka cluster, you need to create the ",Object(n.b)("inlineCode",{parentName:"p"},"products")," topic. Start a Kafka container to access the Kafka tools with the command:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'docker run -ti -v $(pwd):/home --network kafkanet strimzi/kafka:latest-kafka-2.5.0 bash -c "/home/scripts/createProductsTopic.sh"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Verify the topic is created:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'docker exec -ti refarch-eda-data-consistency_kafka1_1 /bin/bash -c "/opt/kafka/bin/kafka-topics.sh --bootstrap-server kafka1:9092 --list"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Modify .env file to set environment variables for Source Event Streams cluster brokers address and APIKEY."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'export KAFKA_SOURCE_BROKERS=broker-...:9093\nexport KAFKA_SOURCE_PASSWORD="<replace with apikey from event streams service credentials>"\n')),Object(n.b)("p",{parentName:"li"},"The configuration file (mirror-maker-2/es-to-local/mm2.properties) is for standalone configuration, and looks like:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-properties"}),'clusters=source, target\nsource.bootstrap.servers=broker-3...:9093\nsource.security.protocol=SASL_SSL\nsource.ssl.protocol=TLSv1.2\nsource.sasl.mechanism=PLAIN\nsource.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="985...";\ntarget.bootstrap.servers=kafka1:9092,kafka2:9093\n# enable and configure individual replication flows\nsource->target.enabled=true\nsource->target.topics=products\n')),Object(n.b)("p",{parentName:"li"}," A lot of these properties are for the security settings. The ",Object(n.b)("inlineCode",{parentName:"p"},"clusters")," property defines the alias name for the source to target, and then ",Object(n.b)("inlineCode",{parentName:"p"},"source->target.*")," properties define the topic to replicate…")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Mirror Maker2.0, by using a new container to start another kakfa 2.5 docker container, connected to the  brokers via the ",Object(n.b)("inlineCode",{parentName:"p"},"kafkanet")," network, and mounting the configuration in the ",Object(n.b)("inlineCode",{parentName:"p"},"/home"),". We have done a script to modify the properties file from a template file then call mirror maker 2:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"./scripts/launchMM2.sh\n")),Object(n.b)("p",{parentName:"li"},"The command update the properties file from the environment variables and starts the container with a command very similar as:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),' docker run -ti --network kafkanet -v $(pwd):/home -v $(pwd)/mirror-maker-2/logs:/opt/kafka/logs strimzi/kafka:latest-kafka-2.5.0 /bin/bash -c "/opt/kafka/bin/connect-mirror-maker.sh /home/mirror-maker-2/es-to-local/mm2.properties"\n')),Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"mm2.properties")," file defines the source and target clusters and the topics to replicate."))),Object(n.b)("h2",null,"Start consumer from target cluster"),Object(n.b)("p",null,"We will use a simple and useful tool, called ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/obsidiandynamics/kafdrop"}),"Kafdrop")," to see messages in topics."),Object(n.b)("p",null,"We also have done a simple script to start or stop Kafdrop."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"./scripts/startKafdrop.sh\n")),Object(n.b)("h2",null,"Start Producer to source cluster"),Object(n.b)("p",null,"We are reusing the python environment as defined in the integration tests for the ‘kcontainer’ solution. ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/ibmcase/kcontainer-python"}),"https://hub.docker.com/r/ibmcase/kcontainer-python"),"."),Object(n.b)("p",null,"This time the script is producing products data. Here are the steps to send 5 records."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd mirror-maker-2\n# 1- if not done set environment variables to reach the remote kafka cluster, source of the replication\nsource ../.env\n# 2- Execute the script using docker\ndocker run -ti -v $(pwd):/home --rm -e  KAFKA_BROKERS=$KAFKA_SOURCE_BROKERS -e KAFKA_SOURCE_PASSWORD=$KAFKA_SOURCE_PASSWORD -e KAFKA_USER=$KAFKA_SOURCE_USER ibmcase/kcontainer-python:itgtests python /home/SendProductToKafka.py --file /home/data/products.json\n")),Object(n.b)("p",null,"The traces should look like:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"[KafkaProducer] - {'bootstrap.servers': 'broker-0-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-1-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093', 'group.id': 'ProductsProducer', 'delivery.timeout.ms': 15000, 'request.timeout.ms': 15000, 'security.protocol': 'SASL_SSL', 'sasl.mechanisms': 'PLAIN', 'sasl.username': 'token', 'sasl.password': '..hidden...'}\n{'product_id': 'P01', 'description': 'Carrots', 'target_temperature': 4, 'target_humidity_level': 0.4, 'content_type': 1}\n{'product_id': 'P02', 'description': 'Banana', 'target_temperature': 6, 'target_humidity_level': 0.6, 'content_type': 2}\n{'product_id': 'P03', 'description': 'Salad', 'target_temperature': 4, 'target_humidity_level': 0.4, 'content_type': 1}\n{'product_id': 'P04', 'description': 'Avocado', 'target_temperature': 6, 'target_humidity_level': 0.4, 'content_type': 1}\n{'product_id': 'P05', 'description': 'Tomato', 'target_temperature': 4, 'target_humidity_level': 0.4, 'content_type': 2}\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n")),Object(n.b)("p",null,"Validate the replication is done, using Kafdrop connected to the target cluster you can select the ",Object(n.b)("inlineCode",{parentName:"p"},"source.products")," topic. The last offset should have increased by 5,"),Object(n.b)("p",null," ",Object(n.b)("span",Object(r.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABi0lEQVQoz41SSW7CQBD0H5IT4G2MwbtZjDeIiJCMiHhE/pBDlN9XukYYOQuIQ6vH7p6aqq427LczvOwEb2xBmRMo24ZSCq7rPhbSqxwHbhjBnc1gjI7v8F8/YZcVRt0Jk9UatmVp0EfDk5heshHHKZZ5gWi1QlzVyMoSSRxDed7DYGPHxbNlYyLZWC6X2O/3eNnt0FYVdtstKsn3ZDsi0ZbROBKmnM9piK+2wCkOhGGSYLMpEUUxLJFqmqbOtxgRMAgCLBYL5FkG21U4phE+9g26JIKRyc/D4SCAkW6eTqfw/pHL/z1gmqbouk4r8X0fvpB5Mi0t3ZiJM5Sd5fndWfFhghKwv9M/XAtwIoSUcmlKjLZtsV6vkd8A5UXK7M+MoZKhIoONfI2S5/P5j4ZhJqv+TFM4a+aheRqQ8yDDrbhLtto9afwdw4s9iTAM/9S0KXVdo2kaPWw2MVM+h17KXvKb7FkjQzq8kzUjgV5dz96YSSMLBE5khdjMeRZFcZ0rzwRljcDXPbywG8Y3+MpebGmiSUsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/142531b3f65ad972c15ace06bbe3acf8/3cbba/kafdrop-src-topic.png",srcSet:["/refarch-eda/static/142531b3f65ad972c15ace06bbe3acf8/7fc1e/kafdrop-src-topic.png 288w","/refarch-eda/static/142531b3f65ad972c15ace06bbe3acf8/a5df1/kafdrop-src-topic.png 576w","/refarch-eda/static/142531b3f65ad972c15ace06bbe3acf8/3cbba/kafdrop-src-topic.png 1152w","/refarch-eda/static/142531b3f65ad972c15ace06bbe3acf8/f8f7e/kafdrop-src-topic.png 1174w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"Going to view messages you can see the last 5 messages match the one sent to the topic on the source cluster."),Object(n.b)("p",null," ",Object(n.b)("span",Object(r.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQoz12RzW7aUBCF/R4xwjbGwRjjPxDEP2AD/iNqk0os2rSCZRt10QdgwbJKF4mSDYn6BOlLnsxckgh1cTR3rnS/OWeu5Hke0jRFnCSYpVNYYYQmSSGpyRRaz4amqmi1WkKapgm998eie8lxXORFhWSSYj7PYVEv6zqUjokTqnJTgaooaDQakGUZCp2Vo15tNqE2qFLPg6VT4xSr1Qrb7Rbr9Qb/np/x8/oHkijC36cn/Lm5QRiG2O122O/3KIpCJLq9u8Pjwz2i77+g/n5EZ3cLw/Ug9TwfHy4/4eLiEh9J680GdV2LR1dfv+HzlyuMx2MktBKGjUYjDIdDZFmGYrHAIJ7AjKcwRiF0w4BkBQPk1ZIeTDDPaXo2w9kZA2JM0wzzRQ7f96FTfNM00e/3YVkW2u226O1uFzrFVuQTqBzZ8gMU9TlNnCEvKxSkOI5IMe22RL08F0B+zB/oOA5s20aXQK7rokdnHqa+ftYBuDwAi7KmWCUi2h9H5M8qqxpBEKBDQIYdA7myY3bL7gSwS8C8OuxsQZFZAkgOOS4DB4NAOGRH7PINyPD/gS/plgsucvG5ogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3",title:"3",src:"/refarch-eda/static/d0e39d3c5f7a21931d9b10a29390183b/3cbba/kafdrop-msg.png",srcSet:["/refarch-eda/static/d0e39d3c5f7a21931d9b10a29390183b/7fc1e/kafdrop-msg.png 288w","/refarch-eda/static/d0e39d3c5f7a21931d9b10a29390183b/a5df1/kafdrop-msg.png 576w","/refarch-eda/static/d0e39d3c5f7a21931d9b10a29390183b/3cbba/kafdrop-msg.png 1152w","/refarch-eda/static/d0e39d3c5f7a21931d9b10a29390183b/f9f56/kafdrop-msg.png 1167w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"Another way to validate the target ",Object(n.b)("inlineCode",{parentName:"p"},"source.products")," topic has records, is to use a Kafka console tool, delivered with Apache kafka open source."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'docker run -ti --network kafkanet --rm=true strimzi/kafka:latest-kafka-2.5.0  /bin/bash -c "bin/kafka-console-consumer.sh --bootstrap-server  kafka1:9092 --topic source.products --from-beginning"\n\n{ "product_id": "P01", "description": "Carrots", "target_temperature": 4,"target_humidity_level": 0.4,"content_type": 1}\n{ "product_id": "P02", "description": "Banana", "target_temperature": 6,"target_humidity_level": 0.6,"content_type": 2}\n{ "product_id": "P03", "description": "Salad", "target_temperature": 4,"target_humidity_level": 0.4,"content_type": 1}\n')),Object(n.b)("p",null,"Stop with Ctrl C."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-mm-2-lab-1-index-mdx-c9ccc9f77975d2b3b81b.js.map