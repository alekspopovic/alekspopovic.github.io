(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1Cuc":function(e,t,n){e.exports={suggestedReadingContainer:"suggestedReading-module--suggestedReadingContainer--3U-7d",suggestedReading:"suggestedReading-module--suggestedReading--3fQYS",header:"suggestedReading-module--header--10e0f"}},"8A8R":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("9eSz"),i=n.n(r),u=n("+ZDr"),l=n.n(u),c=n("yBHA"),s=n("M3j0"),d=n.n(s),m=n("P1/v");t.a=function(e){var t,n,a,r=e.slug,u=e.title,s=e.subTitle,f=e.date,g=e.content,p=e.image,x=e.buttonText,b=e.buttonUrl,v=e.tags,E=e.isInternal,h=s?o.a.createElement("div",{className:d.a.subtitle},s):null;t=r?o.a.createElement(l.a,{to:r},o.a.createElement("div",null,u),h):o.a.createElement("div",null,o.a.createElement("div",null,u),h),v&&(n=o.a.createElement("div",{className:d.a.tags},v.map((function(e){return o.a.createElement("span",{key:e},e)})))),a=p.srcSet?o.a.createElement(i.a,{className:d.a.imageContainer,fluid:p}):o.a.createElement("img",{className:d.a.imageContainer,src:p,alt:"post thumbnail"});var C,_,R=E?o.a.createElement(l.a,{to:b},x):o.a.createElement("a",{href:b},x),y=Object(m.a)().filter((function(e){return e.title.toLowerCase()===u.toLowerCase()}))[0];return y&&(C=y.likes,_=y.comments),o.a.createElement("article",{className:d.a.contentCard},a,o.a.createElement("header",null,o.a.createElement("h1",null,t),o.a.createElement("div",{className:d.a.date},f),o.a.createElement(c.a,{likes:C,comments:_})),o.a.createElement("section",null,o.a.createElement("p",{dangerouslySetInnerHTML:{__html:g}}),n,o.a.createElement("div",{className:d.a.button},R)))}},"C/1q":function(e,t,n){e.exports={blogPost:"blogPost-module--blogPost--2rT0T",postNavigation:"blogPost-module--postNavigation--2NzXT",tags:"blogPost-module--tags--UHPni",paginationUrls:"blogPost-module--paginationUrls--1hR1H"}},M3j0:function(e,t,n){e.exports={contentCard:"contentCard-module--contentCard--1TxBF",imageContainer:"contentCard-module--imageContainer--3vSfe",subtitle:"contentCard-module--subtitle--3bnO9",date:"contentCard-module--date--3ZRmV",button:"contentCard-module--button--1nWrs",tags:"contentCard-module--tags--1A2Fd"}},M4XY:function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("Oyvg");var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+r+"]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",c="[\\u2700-\\u27bf]",s="[a-z\\xdf-\\xf6\\xf8-\\xff]",d="[^\\ud800-\\udfff"+r+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",g="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+s+"|"+d+")",x="(?:"+g+"|"+d+")",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",m,f].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),E="(?:"+[c,m,f].join("|")+")"+v,h=RegExp("['’]","g"),C=RegExp(u,"g"),_=RegExp([g+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,g,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,g+p,"$"].join("|")+")",g+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,E].join("|"),"g"),R=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,y="object"==typeof t&&t&&t.Object===Object&&t,A="object"==typeof self&&self&&self.Object===Object&&self,I=y||A||Function("return this")();var N,S=(N={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==N?void 0:N[e]});var T=Object.prototype.toString,w=I.Symbol,L=w?w.prototype:void 0,j=L?L.toString:void 0;function k(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return j?j.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function O(e){return null==e?"":k(e)}var U,H=(U=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var o=-1,r=e?e.length:0;for(a&&r&&(n=e[++o]);++o<r;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=O(e),void 0===(t=n?void 0:t)?function(e){return R.test(e)}(e)?function(e){return e.match(_)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=O(e))&&e.replace(o,S).replace(C,"")}(e).replace(h,"")),U,"")});e.exports=H}).call(this,n("yLpj"))},"P1/v":function(e,t,n){"use strict";var a=n("THrI");t.a=function(){return a.data.allDevArticles.edges.map((function(e){return{id:e.node.article.id,title:e.node.article.title,likes:e.node.article.positive_reactions_count,comments:e.node.article.comments_count}}))}},THrI:function(e){e.exports=JSON.parse('{"data":{"allDevArticles":{"edges":[{"node":{"article":{"title":"How to Integrate dev.to with Gatsby","positive_reactions_count":19,"comments_count":3}}},{"node":{"article":{"title":"Build Voice Navigation with React and Speech Recognition","positive_reactions_count":37,"comments_count":1}}},{"node":{"article":{"title":"Building a Task Management App in React","positive_reactions_count":53,"comments_count":4}}},{"node":{"article":{"title":"How to build a Pixel Art Drawing App in React","positive_reactions_count":98,"comments_count":16}}},{"node":{"article":{"title":"Easiest way to set up your Github profile page","positive_reactions_count":264,"comments_count":19}}},{"node":{"article":{"title":"Build Simple Timeline in React","positive_reactions_count":228,"comments_count":12}}},{"node":{"article":{"title":"How to build Instagram in React","positive_reactions_count":31,"comments_count":0}}},{"node":{"article":{"title":"How to build Netflix\'s Coming Soon page in React","positive_reactions_count":28,"comments_count":0}}},{"node":{"article":{"title":"Easy Dark Mode Switch with React and localStorage","positive_reactions_count":10,"comments_count":1}}}]}}}')},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return b}));var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("Bl7J"),u=n("vrFN"),l=n("M4XY"),c=n.n(l),s=n("C/1q"),d=n.n(s),m=n("P1/v"),f=n("8A8R"),g=n("1Cuc"),p=n.n(g);function x(e){var t=e.previous,n=e.next;return(t||n)&&o.a.createElement("div",{className:p.a.suggestedReadingContainer},o.a.createElement("h1",{className:p.a.header},"Here are some more articles you might enjoy"),o.a.createElement("div",{className:p.a.suggestedReading},t&&o.a.createElement(f.a,{slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,content:t.excerpt,image:t.frontmatter.featuredImage.publicURL,buttonText:"Continue reading",buttonUrl:t.fields.slug,isInternal:!0}),n&&o.a.createElement(f.a,{slug:n.fields.slug,title:n.frontmatter.title,date:n.frontmatter.date,content:n.excerpt,image:n.frontmatter.featuredImage.publicURL,buttonText:"Continue reading",buttonUrl:n.fields.slug,isInternal:!0})))}t.default=function(e){var t,n,a=e.data.markdownRemark,l=e.pageContext,s=l.previous,f=l.next,g=a.frontmatter.tags||[],p=Object(m.a)().filter((function(e){return e.title.toLowerCase()===a.frontmatter.title.toLowerCase()}))[0];p&&(t=p.likes,n=p.comments);var b=a.frontmatter.featuredImage.childImageSharp.fluid,v=a.frontmatter.date+" | Aleks Popovic";return o.a.createElement(i.a,{headerText:a.frontmatter.title,subHeaderText:a.frontmatter.series,seriesLink:a.frontmatter.seriesLink,dateText:v,background:!0,headerImageFluid:b,likes:t,comments:n},o.a.createElement(u.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.excerpt,pagePath:e.location.pathname,image:b.src}),o.a.createElement("article",{className:d.a.blogPost},o.a.createElement("section",{dangerouslySetInnerHTML:{__html:a.html}}),o.a.createElement("hr",null),o.a.createElement("div",{className:d.a.tags},o.a.createElement("ul",null,g.map((function(e){return o.a.createElement(r.Link,{key:c()(e),to:"/tags/"+c()(e)},o.a.createElement("li",null,e))}))))),o.a.createElement(x,{previous:s,next:f}))};var b="117900018"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f723aab23ecf9ed42c2d.js.map