(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8A8R":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("9eSz"),c=n.n(i),l=n("+ZDr"),r=n.n(l),s=n("yBHA"),u=n("M3j0"),m=n.n(u),d=n("P1/v");t.a=function(e){var t,n,a,i=e.slug,l=e.title,u=e.subTitle,p=e.date,g=e.content,_=e.image,v=e.buttonText,b=e.buttonUrl,f=e.tags,w=e.isInternal,E=u?o.a.createElement("div",{className:m.a.subtitle},u):null;t=i?o.a.createElement(r.a,{to:i},o.a.createElement("div",null,l),E):o.a.createElement("div",null,o.a.createElement("div",null,l),E),f&&(n=o.a.createElement("div",{className:m.a.tags},f.map((function(e){return o.a.createElement("span",{key:e},e)})))),a=_.srcSet?o.a.createElement(c.a,{className:m.a.imageContainer,fluid:_}):o.a.createElement("img",{className:m.a.imageContainer,src:_,alt:"post thumbnail"});var h,C,A=w?o.a.createElement(r.a,{to:b},v):o.a.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},v),R=Object(d.a)().filter((function(e){return e.title.toLowerCase()===l.toLowerCase()}))[0];return R&&(h=R.likes,C=R.comments),o.a.createElement("article",{className:m.a.contentCard},a,o.a.createElement("header",null,o.a.createElement("h1",null,t),o.a.createElement("div",{className:m.a.date},p),o.a.createElement(s.a,{likes:h,comments:C})),o.a.createElement("section",null,o.a.createElement("p",{dangerouslySetInnerHTML:{__html:g}}),n,o.a.createElement("div",{className:m.a.button},A)))}},M3j0:function(e,t,n){e.exports={contentCard:"contentCard-module--contentCard--1TxBF",imageContainer:"contentCard-module--imageContainer--3vSfe",subtitle:"contentCard-module--subtitle--3bnO9",date:"contentCard-module--date--3ZRmV",button:"contentCard-module--button--1nWrs",tags:"contentCard-module--tags--1A2Fd"}},"P1/v":function(e,t,n){"use strict";var a=n("THrI");t.a=function(){return a.data.allDevArticles.edges.map((function(e){return{id:e.node.article.id,title:e.node.article.title,likes:e.node.article.positive_reactions_count,comments:e.node.article.comments_count}}))}},THrI:function(e){e.exports=JSON.parse('{"data":{"allDevArticles":{"edges":[{"node":{"article":{"title":"Radio Player App in React","positive_reactions_count":143,"comments_count":5}}},{"node":{"article":{"title":"Infinite Pomodoro App in React","positive_reactions_count":31,"comments_count":3}}},{"node":{"article":{"title":"How to get a job with no experience","positive_reactions_count":25,"comments_count":5}}},{"node":{"article":{"title":"Building Meal Planning App with React and Spoonacular API","positive_reactions_count":36,"comments_count":0}}},{"node":{"article":{"title":"How to choose your next side project","positive_reactions_count":32,"comments_count":2}}},{"node":{"article":{"title":"How to Integrate dev.to with Gatsby","positive_reactions_count":22,"comments_count":3}}},{"node":{"article":{"title":"Build Voice Navigation with React and Speech Recognition","positive_reactions_count":40,"comments_count":1}}},{"node":{"article":{"title":"Building a Task Management App in React","positive_reactions_count":51,"comments_count":4}}},{"node":{"article":{"title":"How to build a Pixel Art Drawing App in React","positive_reactions_count":100,"comments_count":16}}},{"node":{"article":{"title":"Easiest way to set up your Github profile page","positive_reactions_count":280,"comments_count":20}}},{"node":{"article":{"title":"Build Simple Timeline in React","positive_reactions_count":235,"comments_count":13}}},{"node":{"article":{"title":"How to build Instagram in React","positive_reactions_count":29,"comments_count":0}}},{"node":{"article":{"title":"How to build Netflix\'s Coming Soon page in React","positive_reactions_count":28,"comments_count":0}}},{"node":{"article":{"title":"Easy Dark Mode Switch with React and localStorage","positive_reactions_count":10,"comments_count":1}}},{"node":{"article":{"title":"Comic Book App With Marvel API and React","positive_reactions_count":6,"comments_count":3}}},{"node":{"article":{"title":"Address Search with React and Mapbox API","positive_reactions_count":11,"comments_count":3}}}]}}}')},c851:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));var a=n("q1tI"),o=n.n(a),i=n("Bl7J"),c=n("vrFN"),l=n("qszM"),r=n.n(l),s=n("8A8R");t.default=function(e){var t=e.data.allMarkdownRemark.edges;return o.a.createElement(i.a,null,o.a.createElement(c.a,{title:"Blog",pagePath:e.location.pathname}),o.a.createElement("div",{id:"content",className:r.a.blogContent},t.map((function(e){var t=e.node;return o.a.createElement(s.a,{key:t.fields.slug,slug:t.fields.slug,title:t.frontmatter.title,subTitle:t.frontmatter.series,date:t.frontmatter.date,content:t.excerpt,image:t.frontmatter.featuredImage.childImageSharp.fluid,buttonText:"Continue reading",buttonUrl:t.fields.slug,isInternal:!0})}))))};var u="2661769218"},qszM:function(e,t,n){e.exports={blogContent:"blog-module--blogContent--1ve2K",allTags:"blog-module--allTags--2UvFJ",paginationUrls:"blog-module--paginationUrls--1jAPq",tagSummary:"blog-module--tagSummary--3dklh",tag:"blog-module--tag--2wspA",impressions:"blog-module--impressions--1DF3q",postSubtitle:"blog-module--postSubtitle--iNo-h"}}}]);
//# sourceMappingURL=component---src-templates-blog-js-9dcc5488a8dc0b7c2127.js.map