(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{225:function(e,t,n){e.exports=n(383)},230:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(56),o=n.n(c),l=(n(230),n(231),n(24)),u=n(36),i=n(49),s=n(25),m=n(65),d=n(42),p=n(15),f=n(398),b=n(384);var E=function(e){var t=e.anecdote,n=e.votes;return r.a.createElement("div",{"data-test":"anecdote"},r.a.createElement("blockquote",null,t),r.a.createElement("p",null,"Votes:",r.a.createElement("strong",null,n)),r.a.createElement("br",null))},v=n(31),h=n.n(v),g=n(28),x=n.n(g),w=function(e){return h.a.startCase(h.a.toLower(e))},k=function(e){return e.reduce((function(e,t){return e+t}),0)},y=function(e,t,n){return Number((k([1*e,-1*t,0*n])/k([e,t,n])).toFixed(3))},j=function(e,t,n){var a=Number((e/k([e,t,n])*100).toFixed(2));return"".concat(a," %")},O=function(e){return Math.floor(Math.random()*e.length)},S=function(e){var t=e.trim();return!t||0===t.length},C=function(e){return function(t){return e(t.target.value)}},F=function(e,t){return S(t)?e:e.filter((function(e){return e.name.toLowerCase().includes(t.trim().toLowerCase())||e.number&&e.number.toLowerCase().includes(t.trim().toLowerCase())}))},L=function(e,t){x.a.get(e).then((function(e){return t(e.data)})).catch((function(e){return console.error(e)}))},N=function(e,t){t(e),setTimeout((function(){t(null)}),5e3)},z="Display a random anecdote from the field of software engineering:",A="Anecdote with most votes",T=["If it hurts, do it more often","Adding manpower to a late software project makes it later!","The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","Premature optimization is the root of all evil.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."];function B(){var e=z,t=T,n=A,c=Object(a.useState)((function(){return O(t)})),o=Object(p.a)(c,2),l=o[0],u=o[1],i=Object(a.useState)((function(){return Array(t.length).fill(0)})),s=Object(p.a)(i,2),v=s[0],g=s[1],x=Object(a.useState)(),w=Object(p.a)(x,2),k=w[0],y=w[1];return Object(a.useEffect)((function(){var e;y((e=v,h.a.keys(e).reduce((function(t,n){return e[t]>e[n]?t:n}))))}),[v]),r.a.createElement("div",null,r.a.createElement(f.a,{content:e}),r.a.createElement(E,{anecdote:t[l],votes:v[l]?v[l]:0}),r.a.createElement(b.a,{content:"Random",onClick:function(){u(O(t))}}),r.a.createElement(b.a,{content:"Vote",color:"green",onClick:function(){g(Object(d.a)({},v,Object(m.a)({},l,v[l]+1)))}}),r.a.createElement(f.a,{content:n}),r.a.createElement(E,{anecdote:t[k]?t[k]:"",votes:v[l]?v[l]:0}))}var P=n(16),D=n.n(P),I=n(22),U=n(392),R=n(399),H=n(395),M=n(76),V=n(58),J=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(p.a)(n,2),o=c[0],l=c[1],u={display:o?"none":""},i={display:o?"":"none"},s=function(){l(!o)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:u},r.a.createElement(b.a,{onClick:s,content:e.buttonLabel,size:"mini",compact:!0})),r.a.createElement("div",{style:i,"data-test":"toggableContent"},e.children,r.a.createElement(b.a,{onClick:s,content:"Cancel",color:"red",size:"mini",compact:!0})))}));J.displayName="Togglable";var G=J;var W=function(e){var t=e.blog,n=e.addLike,a=e.deleteBlog,c=e.user;return r.a.createElement(H.a,{"data-test":"blog",id:"blog"},r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Header,null,r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title)),r.a.createElement(H.a.Description,null,t.author),r.a.createElement(G,{buttonLabel:"View"},r.a.createElement(H.a.Extra,null,t.url),r.a.createElement(H.a.Meta,null,r.a.createElement(b.a,{as:"div",labelPosition:"left",size:"mini"},r.a.createElement(M.a,{as:"a",basic:!0,pointing:"right","data-test-id":"likes-number"},t.likes),r.a.createElement(b.a,{icon:!0,size:"mini",onClick:function(e){e.preventDefault(),n(t)},id:"like-button"},r.a.createElement(V.a,{name:"heart"}),"Like")),t.user&&c.username===t.user.username&&r.a.createElement(b.a,{icon:!0,negative:!0,size:"mini",onClick:function(e){return e.preventDefault(),window.confirm("Do you really want to remove ".concat(t.title," by ").concat(t.author,"?"))&&a(t)},id:"delete-button"},r.a.createElement(V.a,{name:"delete"}))))))},q=n(393),X={title:"",author:"",url:"",likes:""},_=function(e){var t=e.createBlog,n=X,c=Object(a.useState)(n),o=Object(p.a)(c,2),l=o[0],u=o[1],i=function(e){var t=e.target.id;u(Object(d.a)({},l,Object(m.a)({},t,e.target.value)))},s=l.title,f=l.author,E=l.url,v=l.likes;return r.a.createElement(q.a,{onSubmit:function(e){e.preventDefault(),t(l),u(n)},"data-test":"blogForm"},r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"title"},"Title",r.a.createElement("input",{placeholder:"Title",value:s,onChange:i,id:"title",type:"text"}))),r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"author"},"Author",r.a.createElement("input",{placeholder:"Author",value:f,onChange:i,id:"author",type:"text"}))),r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"url"},"Url",r.a.createElement("input",{placeholder:"Url",value:E,onChange:i,id:"url",type:"text"}))),r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"likes"},"Likes",r.a.createElement("input",{placeholder:"Likes",value:v,onChange:i,id:"likes","data-test":"likes"}))),r.a.createElement(b.a,{type:"submit",content:"Add",color:"green",id:"add-blog-button"}))};var K=function(e){var t=e.login,n=Object(a.useState)(""),c=Object(p.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(""),i=Object(p.a)(u,2),s=i[0],m=i[1];return r.a.createElement(q.a,{onSubmit:function(e){e.preventDefault(),t({username:o,password:s}),m(""),l("")}},r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"username"},"username",r.a.createElement("input",{placeholder:"Username",value:o,onChange:C(l),id:"username",type:"text"}))),r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"password"},"password",r.a.createElement("input",{placeholder:"Password",value:s,onChange:C(m),type:"password",id:"password"}))),r.a.createElement(b.a,{type:"submit",content:"Login",color:"green",id:"login-button"}))},Q=n(396),Y=function(e){var t=e.message,n=e.color;return null===t?null:r.a.createElement(Q.a,{color:n,size:"tiny",id:"notification"},t)},Z={login:function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$=null,ee={getAll:function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:$}},e.next=3,x.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(I.a)(D.a.mark((function e(t,n){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:$}},e.next=3,x.a.put("".concat("/api/blogs","/").concat(t),n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(I.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:$}},e.next=3,x.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){$="Bearer ".concat(e)}};function te(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),l=Object(p.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(null),m=Object(p.a)(s,2),d=m[0],E=m[1],v=Object(a.useState)(null),g=Object(p.a)(v,2),x=g[0],w=g[1],k=Object(a.useRef)();Object(a.useEffect)((function(){j()}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);i(t),ee.setToken(t.token)}}),[]),Object(a.useEffect)((function(){var e=h.a.orderBy(n,"likes","desc");c(e)}),[h.a.sumBy(n,"likes")]);var y=function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.login(t);case 3:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),ee.setToken(n.token),i(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N("Wrong credentials",w);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.getAll();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(I.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k.current.toggleVisibility(),e.next=4,ee.create(t);case 4:a=e.sent,c(n.concat(a)),N("Blog '".concat(t.title,"' by ").concat(t.author," added successfuly"),E),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.response.data),N(e.t0.response.data.error,w);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(I.a)(D.a.mark((function e(t){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={user:t.user.id,author:t.author,url:t.url,title:t.title,likes:t.likes+1},e.prev=1,e.next=4,ee.update(t.id,a);case 4:r=e.sent,c(n.map((function(e){return e.id!==r.id?e:r}))),N("Blog '".concat(r.title,"' by ").concat(r.author," liked successfuly"),E),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),N(e.t0.response.data.error,w);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(I.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.remove(t.id);case 3:c(n.filter((function(e){return e.id!==t.id}))),N("Blog '".concat(t.title,"' by ").concat(t.author," deleted successfuly"),E),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),N(e.t0.response.data.error,w);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(U.a,null,r.a.createElement(R.a,{columns:2},r.a.createElement(R.a.Column,null,r.a.createElement(f.a,{floated:"left"},u?"".concat(u.name," logged in"):"Log in to apllication")),r.a.createElement(R.a.Column,{textAlign:"right"},r.a.createElement(b.a,{type:"submit",content:"Logout",color:"red",onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedUser"),i(null),ee.setToken(u.token)}}))),r.a.createElement(Y,{message:d,color:"green"}),r.a.createElement(Y,{message:x,color:"red"}),null===u&&r.a.createElement(K,{login:y}),u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a.Group,{divided:!0},n.map((function(e){return r.a.createElement(W,{key:e.id,blog:e,addLike:S,deleteBlog:C,user:u})}))),r.a.createElement(G,{buttonLabel:"New blog",ref:k},r.a.createElement(_,{createBlog:O}))))}function ne(){var e=Object(l.a)(["\n  padding: 5px 0;\n"]);return ne=function(){return e},e}var ae=s.a.div(ne());var re=function(e){var t=e.countries,n=e.show;return t.map((function(e){return r.a.createElement(ae,{key:e.alpha3Code},e.name,r.a.createElement(b.a,{content:"show",color:"grey",size:"mini",onClick:function(){return n(e.name)}}))}))};function ce(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-width: 600px;\n  div {\n    padding: 4px 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n  ul {\n    list-style: none;\n    padding-left: 10px;\n  }\n  span {\n    padding: 0 10px;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(l.a)(["\n  height: 50px;\n  width: 100px;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: 0 0 5px #333;\n"]);return oe=function(){return e},e}var le=s.a.div(oe(),(function(e){return e.src})),ue=s.a.div(ce());var ie=function(e){var t=e.country,n=t.name,a=t.capital,c=t.population,o=t.languages,l=t.region,u=t.borders,i=t.translations,s=t.flag;return r.a.createElement(ue,null,r.a.createElement(f.a,{content:n}),r.a.createElement("div",null,"Capital:",r.a.createElement("span",null,a)),r.a.createElement("div",null,"Population:",r.a.createElement("span",null,c)),r.a.createElement("div",null,"Languages:",r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("span",null,e.name))})))),r.a.createElement("div",null,"Region:",r.a.createElement("span",null,l)),r.a.createElement(le,{src:s}),r.a.createElement("div",null,r.a.createElement("span",null,"Translations:"),h.a.keys(i).map((function(e){return r.a.createElement("span",{key:e},i[e])}))),r.a.createElement("div",null,r.a.createElement("span",null,"Borders:"),u.map((function(e){return r.a.createElement("span",{key:e},e)}))))},se=n(397);var me=function(e){var t=e.searchIn,n=Object(a.useState)(""),c=Object(p.a)(n,2),o=c[0],l=c[1];return r.a.createElement(R.a,null,r.a.createElement(R.a.Column,{width:6},r.a.createElement(se.a,{onSearchChange:h.a.debounce((function(e){l(e.target.value),t(o)}),500,{leading:!0}),value:o,name:"search",showNoResults:!1})))};function de(){var e=Object(l.a)(["\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 50px;\n  height: 50px;\n  background-color: rgba(0, 0, 255, 0.4);\n"]);return de=function(){return e},e}var pe="Weather in",fe=s.a.div(de(),(function(e){return e.src}));var be=function(e){var t=e.weather,n=pe;if(!t)return r.a.createElement("p",null,"Loading...");var a,c=t.name,o=t.main,l=t.wind;return t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{content:"".concat(n," ").concat(c)}),r.a.createElement("p",null,r.a.createElement("strong",null,"Temperature:"),r.a.createElement("span",null,o.temp),r.a.createElement("span",null,"\u2103")),r.a.createElement(fe,{src:(a=t.weather[0].icon,"http://openweathermap.org/img/wn/".concat(a,"@2x.png"))}),r.a.createElement("p",null,r.a.createElement("strong",null,"Wind:"),l.speed,"m/s"))},Ee="https://restcountries.eu/rest/v2/all",ve="https://api.openweathermap.org/data/2.5/weather?",he="Search for country",ge="Nothing to display",xe="To many matches, specify another filter";function we(){var e=he,t=Ee,n=ge,c=xe,o=ve,l=Object(a.useState)(null),u=Object(p.a)(l,2),i=u[0],s=u[1],m=Object(a.useState)(null),d=Object(p.a)(m,2),b=d[0],E=d[1],v=Object(a.useState)(null),h=Object(p.a)(v,2),g=h[0],x=h[1],w=Object(a.useState)(0),k=Object(p.a)(w,2),y=k[0],j=k[1];Object(a.useEffect)((function(){L(t,s)}),[t]);Object(a.useEffect)((function(){var e,t;g&&(1!==g.length||b?1!==g.length&&E(null):L((e=o,t=g[0].capital,"".concat(e,"q=").concat(t,"&appid=").concat("0c6e3f6176d2671fba28c518a4811850","&units=metric")),E))}),[g,o,b]);return r.a.createElement("div",null,r.a.createElement(f.a,{content:e}),r.a.createElement(me,{searchIn:function(e){if(i){var t=F(i,e);x(t),j(t.length)}}}),y>10&&r.a.createElement("p",null,c),y<=10&&y>1&&r.a.createElement(re,{countries:g,show:function(e){var t=g.filter((function(t){return t.name===e}));x(t),j(t.length)}}),0===y&&r.a.createElement("p",null,n),1===y&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{country:g[0]}),r.a.createElement(be,{weather:b})))}function ke(){var e=Object(l.a)(["\n  padding: 5px 0;\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  justify-content: space-between;\n"]);return ke=function(){return e},e}var ye=s.a.p(ke());var je=function(e){var t=e.part,n=t.name,a=t.exercises;return r.a.createElement(ye,null,n,r.a.createElement("span",null,a))};var Oe=function(e){return e.parts.map((function(e){return r.a.createElement(je,{key:e.id,part:e})}))};var Se=function(e){var t=e.parts;return r.a.createElement(ye,null,"Number of exercises",r.a.createElement("span",null,k(t.map((function(e){return e.exercises})))))};var Ce=function(e){var t=e.course,n=t.name,a=t.parts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{content:n}),r.a.createElement(Oe,{parts:a}),r.a.createElement(Se,{parts:a}))},Fe=function(){return r.a.createElement(r.a.Fragment,null,[{name:"Half Stack application development",id:1,parts:[{name:"Fundamentals of React",exercises:10,id:1},{name:"Using props to pass data",exercises:7,id:2},{name:"State of a component",exercises:14,id:3},{name:"Redux",exercises:11,id:4}]},{name:"Node.js",id:2,parts:[{name:"Routing",exercises:3,id:1},{name:"Middlewares",exercises:7,id:2}]}].map((function(e){return r.a.createElement(Ce,{key:e.id,course:e})})))};function Le(){var e=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 980px;\n  padding: 0px 20px;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style: none;\n  border-bottom: 2px solid #ddd;\n  a {\n    text-decoration: none;\n    color: #333;\n    padding: 2px 4px;\n    margin: 0 2px;\n    border: 2px solid #333;\n    transition: all 0.2s ease;\n    font-size: 0.9rem;\n  }\n  a:hover {\n    color: #ddd;\n    border-color: #ddd;\n  }\n"]);return Le=function(){return e},e}function Ne(){var e=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #fff;\n  z-index: 99;\n"]);return Ne=function(){return e},e}var ze=s.a.nav(Ne()),Ae=s.a.ul(Le());function Te(){return r.a.createElement(ze,null,r.a.createElement(Ae,null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/halfstack"},"HalfStack")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/unicef"},"Unicef")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/anecdotes"},"Anecdotes")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/phonebook"},"Phonebook")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/countries"},"Countries")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/blog"},"BlogList"))))}var Be="Name:",Pe="Number:",De=function(e){var t=e.addPerson,n=e.persons,c=e.updateNumber,o=Be,l=Pe,u=Object(a.useState)(""),i=Object(p.a)(u,2),s=i[0],m=i[1],d=Object(a.useState)(""),f=Object(p.a)(d,2),E=f[0],v=f[1];return r.a.createElement(q.a,null,r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"name"},o,r.a.createElement("input",{placeholder:"Name",value:s,onChange:C(m),id:"name"}))),r.a.createElement(q.a.Field,null,r.a.createElement("label",{htmlFor:"number"},l,r.a.createElement("input",{placeholder:"Last Name",value:E,onChange:C(v),id:"number"}))),r.a.createElement(b.a,{type:"submit",content:"Add",color:"green",onClick:function(e){e.preventDefault();var a=function(e,t,n){var a={name:{isEmpty:!1,exist:!1},number:{isEmpty:!1,exist:!1}},r=a.name,c=a.number;return S(n)?r.isEmpty=!0:e.find((function(e){return e.name===n}))&&(r.exist=!0),S(t)?c.isEmpty=!0:e.find((function(e){return e.number===t}))&&(c.exist=!0),a}(n,E,s),r=a.name,o=a.number;return r.isEmpty?window.prompt("Name cannot be empty"):o.isEmpty?window.prompt("Number cannot be empty"):r.exist?window.confirm("".concat(s," already exist. Do you really want to change this contact?"))&&function(){var e=n.filter((function(e){return e.name===s}))[0].id;c(e,{name:s,number:E}),m(""),v("")}():o.exist?window.prompt("".concat(E," already exist.")):(t({name:s,number:E}),m(""),v(""),null)}}))};function Ie(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 300px;\n  padding: 4px 0;\n  transition: background-color 0.2s ease;\n  border-radius: 2px;\n  :hover {\n    background-color: rgba(0, 0, 255, 0.2);\n  }\n"]);return Ie=function(){return e},e}var Ue=s.a.p(Ie());function Re(e){var t=e.persons,n=e.remove;return t.map((function(e){return r.a.createElement(Ue,{key:e.id},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.number),r.a.createElement(b.a,{content:"X",color:"red",size:"tiny",onClick:function(){return n(e.id)}}))}))}var He=function(){return x.a.get("/api/persons").then((function(e){return console.log(e.data),e.data}))},Me=function(e){return x.a.post("/api/persons",e).then((function(e){return e.data}))},Ve=function(e,t){return x.a.put("".concat("/api/persons","/").concat(e),t).then((function(e){return e.data}))},Je=function(e){return x.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},Ge="Add new person to Phonebook",We="Numbers:",qe=[];function Xe(){var e=Ge,t=We,n=qe,c=Object(a.useState)(n),o=Object(p.a)(c,2),l=o[0],u=o[1],i=Object(a.useState)(n),s=Object(p.a)(i,2),m=s[0],d=s[1],b=Object(a.useState)(null),E=Object(p.a)(b,2),v=E[0],h=E[1],g=Object(a.useState)(null),x=Object(p.a)(g,2),w=x[0],k=x[1],y=function(){var e=Object(I.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,He();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Something went wrong",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Me(t);case 3:n=e.sent,console.log(n),u(l.concat(n)),N("Person '".concat(t.name,"' added successfuly"),h),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.response.data),N(e.t0.response.data.error,k);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(I.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.filter((function(e){return e.id===t}))[0].name,e.prev=1,e.next=4,Je(t);case 4:u(l.filter((function(e){return e.id!==t}))),N("Person '".concat(n,"' removed successfuly"),h),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),N("Person '".concat(n,"' has been removed from server"),k),u(l.filter((function(e){return e.id!==t})));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(I.a)(D.a.mark((function e(t,n){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ve(t,n);case 3:a=e.sent,r=l.map((function(e){return e.id===a.id?a:e})),u(r),N("Person '".concat(n.name,"' updated successfuly"),h),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0.response.data.error,k),u(l.filter((function(e){return e.id!==t})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){y()}),[]);return r.a.createElement("div",null,r.a.createElement(f.a,{content:e}),r.a.createElement(me,{searchInPersons:function(e){return d(F(l,e))}}),r.a.createElement(Y,{message:v,color:"green"}),r.a.createElement(Y,{message:w,color:"red"}),r.a.createElement(De,{addPerson:j,persons:l,updateNumber:S}),r.a.createElement(f.a,{content:t}),r.a.createElement(Re,{persons:m,remove:function(e){window.confirm("Do you really want to delete this contact?")&&O(e)}}))}var _e=function(e){var t=e.feedback;return r.a.createElement("table",null,r.a.createElement("tbody",null,h.a.keys(t).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,w(e),r.a.createElement("span",null,":")),r.a.createElement("td",null,t[e]))}))))},Ke="Statistics:",Qe=[{text:"bad",color:"red"},{text:"neutral"},{text:"good",color:"green"}],Ye="No feedback given";var Ze=function(e){var t=e.feedback,n=e.setFeedback,a=Ke,c=Qe,o=Ye,l=t.good,u=t.bad,i=t.neutral,s=t.all,m=function(e){return function(){var a;switch(e){case"good":a=Object(d.a)({},t,{good:l+1});break;case"neutral":a=Object(d.a)({},t,{neutral:i+1});break;case"bad":a=Object(d.a)({},t,{bad:u+1});break;default:a=t}a=Object(d.a)({},a,{},function(e){var t=e.good,n=e.bad,a=e.neutral;return{all:k([t,n,a]),average:y(t,n,a),possitive:j(t,n,a)}}(a)),n(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,c.map((function(e){return r.a.createElement(b.a,{key:e.text,content:e.text,color:e.color,onClick:m(e.text)})}))),r.a.createElement(f.a,{content:a}),"-"===s?r.a.createElement("p",null,o):r.a.createElement(_e,{feedback:t}))},$e="Give Unicafe a feedback",et={good:0,neutral:0,bad:0,all:"-",average:"-",possitive:"-"};function tt(){var e=$e,t=Object(a.useState)(et),n=Object(p.a)(t,2),c=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{content:e}),r.a.createElement(Ze,{feedback:c,setFeedback:o}))}function nt(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  max-width: 980px;\n  min-height: calc(100vh - 60px);\n  padding: 0 30px;\n  margin: 60px auto 0;\n"]);return nt=function(){return e},e}var at=s.a.div(nt());function rt(){return r.a.createElement(u.a,null,r.a.createElement(Te,null),r.a.createElement(at,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/halfstack"},r.a.createElement(Fe,null)),r.a.createElement(i.a,{exact:!0,path:"/unicef"},r.a.createElement(tt,null)),r.a.createElement(i.a,{exact:!0,path:"/anecdotes"},r.a.createElement(B,null)),r.a.createElement(i.a,{exact:!0,path:"/phonebook"},r.a.createElement(Xe,null)),r.a.createElement(i.a,{exact:!0,path:"/countries"},r.a.createElement(we,null)),r.a.createElement(i.a,{path:"/blog"},r.a.createElement(te,null)))))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(rt,null)),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.e935ebdb.chunk.js.map