(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],m=0,f=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"093a":function(t,e,n){"use strict";n("4e8d")},"26b9":function(t,e,n){},"4e8d":function(t,e,n){},5333:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mobileCart"),n("topBar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topBar"},[n("nav",[n("div",{staticClass:"leftBar"},[n("router-link",{attrs:{to:"/",exact:""}},[t._v("Domů")]),n("router-link",{attrs:{to:"#wall"}},[t._v("Zeď")]),n("router-link",{attrs:{to:"/contact"}},[t._v("Kontakty")])],1),n("div",{staticClass:"rightBar"},[n("router-link",{attrs:{to:"#login"}},[t._v("Přihlásit")]),n("div",{staticClass:"cart",on:{click:function(e){return t.cartOpen()}}},[n("div",{staticClass:"cartBack"}),t._m(0),n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Font_Awesome_5_solid_shopping-bag.svg",alt:""}})])],1),n("div",{staticClass:"hamburgerMenu"},[t._v("ouhotUpdate")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"numOrders"},[n("p",[t._v("1")])])}],c={name:"topBar",props:{username:String},methods:{cartOpen:function(){this.$emit("cartOpen")}}},l=c,u=(n("d838"),n("2877")),m=Object(u["a"])(l,s,o,!1,null,"4eb22dd4",null),f=m.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobileCart"},[n("div",{staticClass:"box"},[n("div",{staticClass:"numOrders"}),n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Font_Awesome_5_solid_shopping-bag.svg",alt:""}})])])}],p={name:"mobileCart"},_=p,b=(n("f442"),Object(u["a"])(_,d,v,!1,null,"4d9dbb52",null)),h=b.exports,x={name:"app",components:{topBar:f,mobileCart:h}},C=x,B=(n("5c0b"),Object(u["a"])(C,i,r,!1,null,null,null)),g=B.exports,O=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("mainContent"),n("footerBar")],1)},j=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainContent"},[n("div",{staticClass:"page"},[n("slideBox"),n("div",{staticClass:"content"},[n("div",{staticClass:"news"},[t._m(0),n("div",{staticClass:"itemContainer"},[n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox")],1)]),n("div",{staticClass:"ecig"},[t._m(1),n("div",{staticClass:"itemContainer"},[n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox")],1)]),n("div",{staticClass:"liqs"},[t._m(2),n("div",{staticClass:"itemContainer"},[n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox")],1)])]),n("contactBox")],1)])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Novinky")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("E-Cigarety")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Liquidy")])])}],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"container"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"https://www.zombievapes.co.uk/images/zombie-vapes-skittles-e-liquid-p708-3401_image.jpg",alt:""}})]),n("div",{staticClass:"insideText"},[n("div",{staticClass:"header"},[n("p",[t._v("Název")])]),n("div",{staticClass:"price"},[n("p",[t._v(" 1999,- ")])])]),n("div",{staticClass:"addtocart"},[n("button",[t._v("Přidat do košíku")])])])])}],P={name:"itemBox"},S=P,T=(n("db7f"),Object(u["a"])(S,y,k,!1,null,"1f3ae8b0",null)),M=T.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"slideBox"})])}],A={name:"slideBox"},J=A,F=(n("873d"),Object(u["a"])(J,q,z,!1,null,"5d112f78",null)),H=F.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contactBox"},[n("div",{staticClass:"box"},[n("div",{staticClass:"insideText"},[n("div",{staticClass:"headerText"},[n("p",[t._v("Kontaktní údaje")])]),n("div",{staticClass:"contactText"},[n("p",[t._v("Email:")]),n("p",[t._v("Jméno a příjmení:")]),n("p",[t._v("Adresa:")]),n("p",[t._v("IČO:")])])])])])}],D={name:"contactBox"},I=D,L=(n("be41"),Object(u["a"])(I,K,N,!1,null,"2174b0f2",null)),U=L.exports,Z={name:"mainContent",components:{slideBox:H,itemBox:M,contactBox:U}},G=Z,Q=(n("093a"),Object(u["a"])(G,E,$,!1,null,"0e6748b6",null)),R=Q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerBar"},[n("div",{staticClass:"bar"})])}],X={name:"footerBar"},Y=X,tt=(n("eed2"),Object(u["a"])(Y,V,W,!1,null,"22156eb2",null)),et=tt.exports,nt={name:"Home",components:{mainContent:R,footerBar:et}},at=nt,it=(n("c795"),Object(u["a"])(at,w,j,!1,null,"0a5782b0",null)),rt=it.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("p",[t._v("asufunasonfo")])])}],ct={name:"cart"},lt=ct,ut=Object(u["a"])(lt,st,ot,!1,null,null,null),mt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[t._v(" sandu "),n("footerBar")],1)},dt=[],vt={name:"contact",components:{footerBar:et}},pt=vt,_t=Object(u["a"])(pt,ft,dt,!1,null,"304290eb",null),bt=_t.exports;a["a"].use(O["a"]);var ht=[{path:"/",name:"Home",component:rt},{path:"/cart",name:"cart",component:mt},{path:"/contact",name:"contact",component:bt}],xt=new O["a"]({mode:"history",base:"",routes:ht}),Ct=xt,Bt=n("2f62");a["a"].use(Bt["a"]);var gt=new Bt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ot=n("f5af"),wt=n.n(Ot);n("e829");a["a"].config.productionTip=!1,new a["a"]({router:Ct,store:gt,render:function(t){return t(g)},mounted:function(){wt.a.init()}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"873d":function(t,e,n){"use strict";n("f36c")},"9c0c":function(t,e,n){},a57a:function(t,e,n){},b2e8:function(t,e,n){},b48a:function(t,e,n){},be41:function(t,e,n){"use strict";n("b2e8")},c795:function(t,e,n){"use strict";n("b48a")},cbdf:function(t,e,n){},d838:function(t,e,n){"use strict";n("cbdf")},db7f:function(t,e,n){"use strict";n("26b9")},eed2:function(t,e,n){"use strict";n("5333")},f36c:function(t,e,n){},f442:function(t,e,n){"use strict";n("a57a")}});
//# sourceMappingURL=app.7c5f60b4.js.map