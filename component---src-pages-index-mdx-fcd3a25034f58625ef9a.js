(window.webpackJsonp=window.webpackJsonp||[]).push([[34,85],{"013z":function(A,e,a){"use strict";var t=a("q1tI"),o=a.n(t),c=a("NmYn"),i=a.n(c),r=a("Wbzz"),s=a("Xrax"),n=a("k4MR"),d=a("TSYQ"),b=a.n(d),g=a("QH2O"),l=a("qKvR"),m=function(A){var e,a=A.title,t=A.tabs,o=void 0===t?[]:t;return Object(l.b)("div",{className:b()(g.pageHeader,(e={},e[g.withTabs]=o.length,e))},Object(l.b)("div",{className:"bx--grid"},Object(l.b)("div",{className:"bx--row"},Object(l.b)("div",{className:"bx--col-lg-12"},Object(l.b)("h1",{id:"page-title",className:g.text},a)))))},h=a("BAC9"),p=function(A){var e=A.relativePagePath,a=A.repository,t=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||t,c=o.baseUrl,i=o.subDirectory,s=c+"/edit/"+o.branch+i+"/src/pages"+e;return c?Object(l.b)("div",{className:"bx--row "+h.row},Object(l.b)("div",{className:"bx--col"},Object(l.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),E=a("dI71"),B=a("I8xM"),f=function(A){function e(){return A.apply(this,arguments)||this}return Object(E.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,a=A.slug,t=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((function(A){var e,o=i()(A,{lower:!0,strict:!0}),c=o===t,s=new RegExp(t+"/?(#.*)?$"),n=a.replace(s,o);return Object(l.b)("li",{key:A,className:b()((e={},e[B.selectedItem]=c,e),B.listItem)},Object(l.b)(r.Link,{className:B.link,to:""+n},A))}));return Object(l.b)("div",{className:B.tabsContainer},Object(l.b)("div",{className:"bx--grid"},Object(l.b)("div",{className:"bx--row"},Object(l.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(l.b)("nav",null,Object(l.b)("ul",{className:B.list},o))))))},e}(o.a.Component),Q=a("MjG9");e.a=function(A){var e=A.pageContext,a=A.children,t=A.location,o=A.Title,c=e.frontmatter,d=void 0===c?{}:c,b=e.relativePagePath,g=e.titleType,h=d.tabs,E=d.title,B=d.theme,x=d.description,u=d.keywords,w=Object(r.useStaticQuery)("2456312558").site.pathPrefix,N=w?t.pathname.replace(w,""):t.pathname,Y=h?N.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(l.b)(n.a,{tabs:h,homepage:!1,theme:B,pageTitle:E,pageDescription:x,pageKeywords:u,titleType:g},Object(l.b)(m,{title:o?Object(l.b)(o,null):E,label:"label",tabs:h}),h&&Object(l.b)(f,{slug:N,tabs:h,currentTab:Y}),Object(l.b)(Q.a,{padded:!0},a,Object(l.b)(p,{relativePagePath:b})),Object(l.b)(j.a,{pageContext:e,location:t,slug:N,tabs:h,currentTab:Y}),Object(l.b)(s.a,null))}},BAC9:function(A,e,a){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,a){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,a){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pfKO:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return r})),a.d(e,"default",(function(){return m}));var t=a("wx14"),o=a("zLVn"),c=(a("q1tI"),a("7ljp")),i=(a("013z"),a("QH4P")),r=(a("qKvR"),{}),s=function(A){return function(e){return console.warn("Component '"+A+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}},n=s("Row"),d=s("Column"),b=s("ArticleCard"),g={_frontmatter:r},l=i.a;function m(A){var e,a,i,r,s,m,h,p=A.components,j=Object(o.a)(A,["components"]);return Object(c.b)(l,Object(t.a)({},g,j,{components:p,mdxType:"MDXLayout"}),Object(c.b)(n,{mdxType:"Row"},Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((e={color:"dark",title:"Introduction",subTitle:"Getting started with Event-Driven Architectures.",href:"/introduction/overview/",actionIcon:"arrowRight"}).color="light",e.mdxType="ArticleCard",e),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBP/EABUBAQEAAAAAAAAAAAAAAAAAAAME/9oADAMBAAIQAxAAAAHHTjNSZQkN/wD/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQITAyP/2gAIAQEAAQUChLLk/A0ZFvM//8QAGREAAgMBAAAAAAAAAAAAAAAAAAEREiFR/9oACAEDAQE/AWskqun/xAAWEQEBAQAAAAAAAAAAAAAAAAAAIUH/2gAIAQIBAT8B1X//xAAaEAABBQEAAAAAAAAAAAAAAAABAAIQESFB/9oACAEBAAY/An9OUUdyLREf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERIUFRMf/aAAgBAQABPyG+QlgV4ocKbdmixbOQ+n//2gAMAwEAAgADAAAAELvf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EG0i2n//xAAYEQACAwAAAAAAAAAAAAAAAAAAMQERcf/aAAgBAgEBPxCKRGD/xAAcEAEAAwEAAwEAAAAAAAAAAAABABExIUFhobH/2gAIAQEAAT8QYFQqEaVy4clHQdBXYrDfr1NJTwGUU+s/Yf8Aa/SUeU//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home introduction",title:"home introduction",src:"/refarch-eda/static/4e349610172ceef82e081526e3842a1e/2e753/home-introduction.jpg",srcSet:["/refarch-eda/static/4e349610172ceef82e081526e3842a1e/69549/home-introduction.jpg 288w","/refarch-eda/static/4e349610172ceef82e081526e3842a1e/473e3/home-introduction.jpg 576w","/refarch-eda/static/4e349610172ceef82e081526e3842a1e/2e753/home-introduction.jpg 1152w","/refarch-eda/static/4e349610172ceef82e081526e3842a1e/74f4b/home-introduction.jpg 1728w","/refarch-eda/static/4e349610172ceef82e081526e3842a1e/12e8d/home-introduction.jpg 1800w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((a={color:"dark",title:"Concepts of EDA",subTitle:"Delve into the foundational concepts of Event-Driven Architectures.",href:"/concepts/terms-and-definitions/",actionIcon:"arrowRight"}).color="light",a.mdxType="ArticleCard",a),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABU00wdjo//8QAGhABAAIDAQAAAAAAAAAAAAAAAQIDEhMhMf/aAAgBAQABBQKSQOInbPbZOdM3X//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAIDAQEAAAAAAAAAAAAAAAABAhEhEDH/2gAIAQEABj8CuWItecqOKSMxCP/EABkQAQADAQEAAAAAAAAAAAAAAAEAESExQf/aAAgBAQABPyFu9Psx6rRIXiIdVQ7fsEiwYA8hrt72f//aAAwDAQACAAMAAAAQBM//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EJlIz//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/EKf/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhQTFRgZH/2gAIAQEAAT8Q29QhxmCpBdAncY7R5EQVHW9rL+RFgBuACiEVneSt5Z//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home concepts",title:"home concepts",src:"/refarch-eda/static/0fde87730ff584de2282624c5bd37876/2e753/home-concepts.jpg",srcSet:["/refarch-eda/static/0fde87730ff584de2282624c5bd37876/69549/home-concepts.jpg 288w","/refarch-eda/static/0fde87730ff584de2282624c5bd37876/473e3/home-concepts.jpg 576w","/refarch-eda/static/0fde87730ff584de2282624c5bd37876/2e753/home-concepts.jpg 1152w","/refarch-eda/static/0fde87730ff584de2282624c5bd37876/74f4b/home-concepts.jpg 1728w","/refarch-eda/static/0fde87730ff584de2282624c5bd37876/de5bb/home-concepts.jpg 2304w","/refarch-eda/static/0fde87730ff584de2282624c5bd37876/9b2fb/home-concepts.jpg 5208w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((i={color:"dark",title:"Advantages of EDA",subTitle:"Explore some of the many benefits of Event-Driven Architectures.",href:"/advantages/push/",actionIcon:"arrowRight"}).color="light",i.mdxType="ArticleCard",i),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwH/2gAMAwEAAhADEAAAAcObWXJI6Ao//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAIBAxEQ/9oACAEBAAEFAuYYJXDC0Jn/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRE//aAAgBAwEBPwFyo3P/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8BiY//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAEBAQEBAAAAAAAAAAAAAAAAAREhUf/aAAgBAQABPyHGO0L2VN7f/9oADAMBAAIAAwAAABATP//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QMayN4X//xAAWEQEBAQAAAAAAAAAAAAAAAAABAFH/2gAIAQIBAT8QE2rf/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFBwf/aAAgBAQABPxDTtwWwV5LZeQmrhtUxdkMlOW2f/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home advantages",title:"home advantages",src:"/refarch-eda/static/332061b975c8b45b70f30721776beee3/2e753/home-advantages.jpg",srcSet:["/refarch-eda/static/332061b975c8b45b70f30721776beee3/69549/home-advantages.jpg 288w","/refarch-eda/static/332061b975c8b45b70f30721776beee3/473e3/home-advantages.jpg 576w","/refarch-eda/static/332061b975c8b45b70f30721776beee3/2e753/home-advantages.jpg 1152w","/refarch-eda/static/332061b975c8b45b70f30721776beee3/74f4b/home-advantages.jpg 1728w","/refarch-eda/static/332061b975c8b45b70f30721776beee3/de5bb/home-advantages.jpg 2304w","/refarch-eda/static/332061b975c8b45b70f30721776beee3/e5847/home-advantages.jpg 3887w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)(n,{mdxType:"Row"},Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((r={color:"dark",title:"Patterns in EDA",subTitle:"Complex data patterns solved with Event-Driven Architectures.",href:"/patterns/intro/",actionIcon:"arrowRight"}).color="light",r.mdxType="ArticleCard",r),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABZjn1I8IEf//EABoQAQACAwEAAAAAAAAAAAAAAAIAAQMREhP/2gAIAQEAAQUCAPI0ozWxmvzGezLXd//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwGMf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAQEAAgMAAAAAAAAAAAAAAAEAECEREkH/2gAIAQEABj8C8nRpwnBKF2v/xAAaEAADAAMBAAAAAAAAAAAAAAAAAREhMVFx/9oACAEBAAE/IUFqZ9h44KcEZ0P9ISR1Msc1sU//2gAMAwEAAgADAAAAEIf/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QwdkX/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQIBAT8Qd4Sz/8QAGhABAQADAQEAAAAAAAAAAAAAAREAITFRYf/aAAgBAQABPxAABEYb9yoxUot9YnjQ4ZAMM0t2H37mwpEIne5HVPhYaz//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home patterns",title:"home patterns",src:"/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/2e753/home-patterns.jpg",srcSet:["/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/69549/home-patterns.jpg 288w","/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/473e3/home-patterns.jpg 576w","/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/2e753/home-patterns.jpg 1152w","/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/74f4b/home-patterns.jpg 1728w","/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/de5bb/home-patterns.jpg 2304w","/refarch-eda/static/7bd4885079ae4a5b5d994c5a5d5a1f17/ec071/home-patterns.jpg 7952w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((s={color:"dark",title:"Methodology",subTitle:"Master Event-Driven Architectures methodologies from start to finish.",href:"/methodology/event-storming/",actionIcon:"arrowRight"}).color="light",s.mdxType="ArticleCard",s),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAaRjMLwVEf/EABoQAQADAAMAAAAAAAAAAAAAAAIBAxEAEhT/2gAIAQEAAQUCrrSDOExVhvmCru0exc//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPwGq/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAExAgMRoSEygf/aAAgBAQAGPwJYrclzPkkbYkh8bOqP/8QAGhABAQEAAwEAAAAAAAAAAAAAAREAITFBYf/aAAgBAQABPyGJAq1ZpAMD1izVdBQk+5hVXAQnR7zv/9oADAMBAAIAAwAAABBv7//EABcRAQADAAAAAAAAAAAAAAAAAAEQESH/2gAIAQMBAT8QErY//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERIYH/2gAIAQIBAT8QalRk/8QAGxABAQADAQEBAAAAAAAAAAAAAREAIXExYcH/2gAIAQEAAT8QeWk9yPzy41yEQxTrs7iAeC6v3LJAqj3WvMQIii2k5MCEwCkahPUz/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home methodology",title:"home methodology",src:"/refarch-eda/static/b81390d867cf799529131611cc78ed8e/2e753/home-methodology.jpg",srcSet:["/refarch-eda/static/b81390d867cf799529131611cc78ed8e/69549/home-methodology.jpg 288w","/refarch-eda/static/b81390d867cf799529131611cc78ed8e/473e3/home-methodology.jpg 576w","/refarch-eda/static/b81390d867cf799529131611cc78ed8e/2e753/home-methodology.jpg 1152w","/refarch-eda/static/b81390d867cf799529131611cc78ed8e/74f4b/home-methodology.jpg 1728w","/refarch-eda/static/b81390d867cf799529131611cc78ed8e/de5bb/home-methodology.jpg 2304w","/refarch-eda/static/b81390d867cf799529131611cc78ed8e/25c78/home-methodology.jpg 6181w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((m={color:"dark",title:"Technology",subTitle:"Leverage the technologies behind Event-Driven Architectures.",href:"/technology/kafka-overview/",actionIcon:"arrowRight"}).color="light",m.mdxType="ArticleCard",m),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.0138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAFBxGjcTTEP/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDABEhIjL/2gAIAQEAAQUCme9AUUFBkfdjtOM//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EAB4QAAEDBAMAAAAAAAAAAAAAAAACITEBEBFxcoGh/9oACAEBAAY/Asofo5PA6vLaoQf/xAAbEAACAwEBAQAAAAAAAAAAAAABEQAhQTFRgf/aAAgBAQABPyFLFsMGqA0pHwI35MTilcV9jtv9n//aAAwDAQACAAMAAAAQu+//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABFh/9oACAECAQE/ECa//8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBUYFx/9oACAEBAAE/EAmaJDx+cZL0biUHx6+YCh2Us164UZTWjtnV+4wqITds3httLyIz/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home technology",title:"home technology",src:"/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/2e753/home-technology.jpg",srcSet:["/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/69549/home-technology.jpg 288w","/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/473e3/home-technology.jpg 576w","/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/2e753/home-technology.jpg 1152w","/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/74f4b/home-technology.jpg 1728w","/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/de5bb/home-technology.jpg 2304w","/refarch-eda/static/2344a5fa20b5f58f208edf377ae1facd/12c2e/home-technology.jpg 4723w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(c.b)(n,{mdxType:"Row"},Object(c.b)(d,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(c.b)(b,((h={color:"dark",title:"Scenarios & Use Cases",subTitle:"Walk through real-world use cases of event-driven applications.",href:"/scenarios/overview/",actionIcon:"arrowRight"}).color="light",h.mdxType="ArticleCard",h),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAFJh7RMO3f/xAAbEAEAAgIDAAAAAAAAAAAAAAACABEBAxITIv/aAAgBAQABBQJcZnru9UOxWV6Tpf/EABcRAAMBAAAAAAAAAAAAAAAAAAABAhL/2gAIAQMBAT8BUyzMn//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAIAQIBAT8B7ohb/8QAGxAAAQQDAAAAAAAAAAAAAAAAAAECETIQElH/2gAIAQEABj8Co0rjaSOipB//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMRD/2gAIAQEAAT8hNpRHscuVk+I2m3K08wlLjL5v/9oADAMBAAIAAwAAABCwH//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxAYUmRZd//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qse4NKw//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMVFhsf/aAAgBAQABPxC6KAHjfUE0zlbX2Yl0PVxLNulzSUfuh9FayAueQ6zqf//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home usecases",title:"home usecases",src:"/refarch-eda/static/f17e4083d384b51db746da97723b13a0/2e753/home-usecases.jpg",srcSet:["/refarch-eda/static/f17e4083d384b51db746da97723b13a0/69549/home-usecases.jpg 288w","/refarch-eda/static/f17e4083d384b51db746da97723b13a0/473e3/home-usecases.jpg 576w","/refarch-eda/static/f17e4083d384b51db746da97723b13a0/2e753/home-usecases.jpg 1152w","/refarch-eda/static/f17e4083d384b51db746da97723b13a0/74f4b/home-usecases.jpg 1728w","/refarch-eda/static/f17e4083d384b51db746da97723b13a0/de5bb/home-usecases.jpg 2304w","/refarch-eda/static/f17e4083d384b51db746da97723b13a0/53e07/home-usecases.jpg 4288w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-fcd3a25034f58625ef9a.js.map