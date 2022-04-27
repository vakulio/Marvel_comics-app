(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{215:function(t,e,n){},227:function(t,e,n){"use strict";n.r(e);var r=n(65),c=n(34),a=n(4),s=(n(215),n(1)),i=n(6),o=n(10),u=n(225),l=n(226),p=n(23),b=n(29),j=n(0),m=function(t,e,n){switch(t){case"waiting":return Object(j.jsx)(o.a,{});case"loading":return n?Object(j.jsx)(e,{}):Object(j.jsx)(o.a,{});case"confirmed":return Object(j.jsx)(e,{});case"error":return Object(j.jsx)(p.a,{});default:throw new Error("Unexpected process state")}},f=function(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(s.useState)(!1),p=Object(a.a)(o,2),f=p[0],d=p[1],h=Object(s.useState)(0),v=Object(a.a)(h,2),O=v[0],x=v[1],g=Object(s.useState)(!1),w=Object(a.a)(g,2),_=w[0],y=w[1],k=Object(b.a)(),C=k.getAllComics,N=k.process,A=k.setProcess;Object(s.useEffect)((function(){E(O,!0)}),[]);var E=function(t,e){d(!e),C(t).then(S).then((function(){return A("confirmed")}))},S=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t))})),d((function(t){return!1})),x((function(t){return t+8})),y((function(t){return e}))};return Object(j.jsxs)("div",{className:"comics__list",children:[m(N,(function(){return function(t){var e=t.map((function(t,e){return Object(j.jsx)(u.a,{timeout:500,classNames:"comics__item",children:Object(j.jsx)("li",{className:"comics__item",tabIndex:0,children:Object(j.jsxs)(i.b,{to:"/comics/".concat(t.id),children:[Object(j.jsx)("img",{src:t.thumbnail,className:"comics__item-img",alt:t.title}),Object(j.jsx)("div",{className:"comics__item-name",children:t.title}),Object(j.jsx)("div",{className:"comics__item-price",children:t.price})]})})},e)}));return Object(j.jsx)("ul",{className:"comics__grid",children:Object(j.jsx)(l.a,{component:null,children:e})})}(n)}),f),Object(j.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:_?"none":"block"},onClick:function(){return E(O)},children:Object(j.jsx)("div",{className:"inner",children:"load more"})})]})},d=n(52),h=n(35);e.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(h.a,{children:[Object(j.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(j.jsx)("title",{children:"Marvel comics Page"})]}),Object(j.jsx)(r.a,{}),Object(j.jsx)(d.a,{children:Object(j.jsx)(f,{})})]})}},23:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(0);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},29:function(t,e,n){"use strict";var r=n(30),c=n.n(r),a=n(31),s=n(4),i=n(1);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(s.a)(t,2),n=e[0],r=e[1];return{request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r("loading"),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status ").concat(i.status,"."));case 10:return t.next=12,i.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),r("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){r("loading")}),[]),process:n,setProcess:r}}(),e=t.request,n=t.clearError,r=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=156faa42555b87218bb091383c72c42d",p=function(){var t=Object(a.a)(c.a.mark((function t(){var n,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(n,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(d));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",d(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(n,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(d));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(){var n,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,e("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(n,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return{id:t.id,name:t.name,description:t.description?t.description.slice(0,200)+"...":"No data",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}};return{getAllCharacters:p,getCharacter:b,clearError:n,getAllComics:m,getComic:f,getCharacterByName:j,process:r,setProcess:o}}},52:function(t,e,n){"use strict";var r=n(21),c=n(22),a=n(25),s=n(27),i=n(1),o=n(23),u=n(0),l=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={error:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(o.a,{}):this.props.children}}]),n}(i.Component);e.a=l},64:function(t,e,n){},65:function(t,e,n){"use strict";n(64);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(0);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=8.d16b48c0.chunk.js.map