(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MN1z:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return u}));var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("Bl7J"),s=t("vrFN"),c=t("1eu9"),m=t.n(c),d=t("qszM"),i=t.n(d);a.default=function(e){var a=e.pageContext,t=e.data,n=e.location,c=a.tag,d=t.allMarkdownRemark.totalCount,u=t.allMarkdownRemark.edges,g=d+" post"+(1===d?"":"s")+' tagged with "'+c+'"',p="tags/"+c,f=d+" post"+(1===d?"":"s");return r.a.createElement(o.a,{headerText:p,subHeaderText:f,background:!0},r.a.createElement(s.a,{title:g,pagePath:n.pathname}),r.a.createElement("div",{className:i.a.blogContent},u.map((function(e){var a=e.node,t=null!==a.frontmatter.subtitle?r.a.createElement("span",{className:i.a.postSubtitle},a.frontmatter.subtitle):null,n=["linear-gradient(\n                120deg,\n                var(--blog-cover-one),\n                var(--blog-cover-two)\n              )",a.frontmatter.featuredImage.childImageSharp.fluid];return r.a.createElement("article",{key:a.fields.slug},r.a.createElement(m.a,{className:i.a.postImageContainer,fluid:n,backgroundColor:"#040e18"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(l.Link,{to:a.fields.slug},a.frontmatter.title,t)),r.a.createElement("div",{className:i.a.date},a.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}}),r.a.createElement("div",{className:i.a.readMore},r.a.createElement(l.Link,{to:a.fields.slug},"Read more")))))}))),r.a.createElement("div",{className:i.a.allTags},r.a.createElement(l.Link,{to:"/tags"},"All tags")))};var u="1025110291"}}]);
//# sourceMappingURL=component---src-templates-tags-js-da065da1e421bba2d437.js.map