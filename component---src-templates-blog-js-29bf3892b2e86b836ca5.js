(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"P1/v":function(e,t,a){"use strict";var o=a("THrI");t.a=function(){return o.data.allDevArticles.edges.map((function(e){return{id:e.node.article.id,title:e.node.article.title,likes:e.node.article.positive_reactions_count,comments:e.node.article.comments_count}}))}},THrI:function(e){e.exports=JSON.parse('{"data":{"allDevArticles":{"edges":[{"node":{"article":{"title":"How to build a Pixel Art Drawing App in React","positive_reactions_count":97,"comments_count":13}}},{"node":{"article":{"title":"Easiest way to set up your Github profile page","positive_reactions_count":258,"comments_count":19}}},{"node":{"article":{"title":"Build Simple Timeline in React","positive_reactions_count":215,"comments_count":11}}},{"node":{"article":{"title":"How to build Instagram in React","positive_reactions_count":31,"comments_count":0}}},{"node":{"article":{"title":"How to build Netflix\'s Coming Soon page in React","positive_reactions_count":28,"comments_count":0}}},{"node":{"article":{"title":"Easy Dark Mode Switch with React and localStorage","positive_reactions_count":9,"comments_count":1}}}]}}}')},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return b}));var o=a("q1tI"),n=a.n(o),l=a("Bl7J"),i=a("vrFN"),r=a("qszM"),s=a.n(r),c=a("+ZDr"),m=a.n(c),u=a("1eu9"),d=a.n(u),g=a("P1/v"),p=a("yBHA");t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=Object(g.a)();return n.a.createElement(l.a,null,n.a.createElement(i.a,{title:"Blog",pagePath:e.location.pathname}),n.a.createElement("div",{id:"content",className:s.a.blogContent},t.map((function(e){var t=e.node,o=null!==t.frontmatter.series?n.a.createElement("div",{className:s.a.postSubtitle},t.frontmatter.series):null,l=["linear-gradient(\n                120deg,\n                var(--blog-cover-one),\n                var(--blog-cover-two)\n              )",t.frontmatter.featuredImage.childImageSharp.fluid],i=a.filter((function(e){return e.title.toLowerCase()===t.frontmatter.title.toLowerCase()}))[0],r=0,c=0;return i&&(r=i.likes,c=i.comments),n.a.createElement("article",{key:t.fields.slug},n.a.createElement(d.a,{className:s.a.postImageContainer,fluid:l,backgroundColor:"#040e18"},n.a.createElement("header",null,n.a.createElement("h1",null,n.a.createElement(m.a,{to:t.fields.slug},n.a.createElement("div",null,t.frontmatter.title),o)),n.a.createElement("div",{className:s.a.date},t.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),n.a.createElement("div",{className:s.a.readMore},n.a.createElement(m.a,{to:t.fields.slug},"Read more")))),n.a.createElement(p.a,{likes:r,comments:c}))}))))};var b="2661769218"},qszM:function(e,t,a){e.exports={blogContent:"blog-module--blogContent--1ve2K",impressions:"blog-module--impressions--1DF3q",impression:"blog-module--impression--C2DML",impressionIcon:"blog-module--impressionIcon--1NtN-",readMore:"blog-module--readMore--pw-Xj",allTags:"blog-module--allTags--2UvFJ",paginationUrls:"blog-module--paginationUrls--1jAPq",date:"blog-module--date--KrVP_",postSubtitle:"blog-module--postSubtitle--iNo-h",postImageContainer:"blog-module--postImageContainer--7WtSB",tagSummary:"blog-module--tagSummary--3dklh",tag:"blog-module--tag--2wspA"}}}]);
//# sourceMappingURL=component---src-templates-blog-js-29bf3892b2e86b836ca5.js.map