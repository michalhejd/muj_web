(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],f=0,m=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"15ee":function(t,e,n){},"34f3":function(t,e,n){"use strict";n("361c")},"361c":function(t,e,n){},5333:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mobileCart"),n("topBar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topBar"},[n("nav",[n("div",{staticClass:"leftBar"},[n("router-link",{attrs:{to:"/",exact:""}},[t._v("Domů")]),n("router-link",{attrs:{to:"#wall"}},[t._v("Zeď")]),n("router-link",{attrs:{to:"/contact"}},[t._v("Kontakty")])],1),n("div",{staticClass:"rightBar"},[n("router-link",{attrs:{to:"#login"}},[t._v("Přihlásit")]),n("div",{staticClass:"cart",on:{click:function(e){return t.cartOpen()}}},[n("div",{staticClass:"cartBack"}),t._m(0),n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Font_Awesome_5_solid_shopping-bag.svg",alt:""}})])],1),n("div",{staticClass:"hamburgerMenu"},[t._v("ouhotUpdate")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"numOrders"},[n("p",[t._v("1")])])}],c={name:"topBar",props:{username:String},methods:{cartOpen:function(){this.$emit("cartOpen")}}},l=c,u=(n("d838"),n("2877")),f=Object(u["a"])(l,o,s,!1,null,"4eb22dd4",null),m=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobileCart"},[n("div",{staticClass:"box"},[n("div",{staticClass:"numOrders"}),n("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Font_Awesome_5_solid_shopping-bag.svg",alt:""}})])])}],v={name:"mobileCart"},_=v,b=(n("f442"),Object(u["a"])(_,d,p,!1,null,"4d9dbb52",null)),h=b.exports,x={name:"app",components:{topBar:m,mobileCart:h}},C=x,B=(n("5c0b"),Object(u["a"])(C,i,r,!1,null,null,null)),g=B.exports,O=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("mainContent"),n("footerBar")],1)},w=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainContent"},[n("div",{staticClass:"page"},[n("slideBox"),n("div",{staticClass:"content"},[n("div",{staticClass:"news"},[t._m(0),n("div",{staticClass:"itemContainer"},[n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox")],1)]),n("div",{staticClass:"ecig"},[t._m(1),n("div",{staticClass:"itemContainer"},[n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox")],1)]),n("div",{staticClass:"liqs"},[t._m(2),n("div",{staticClass:"itemContainer"},[n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox"),n("itemBox")],1)])]),n("contactBox")],1)])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Novinky")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("E-Cigarety")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Liquidy")])])}],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"})},k=[],P={name:"itemBox"},S=P,T=(n("9d2b"),Object(u["a"])(S,$,k,!1,null,"e6a38430",null)),M=T.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"slideBox"})])}],q={name:"slideBox"},F=q,H=(n("873d"),Object(u["a"])(F,A,J,!1,null,"5d112f78",null)),K=H.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contactBox"},[n("div",{staticClass:"box"},[n("div",{staticClass:"insideText"},[n("div",{staticClass:"headerText"},[n("p",[t._v("Kontaktní údaje")])]),n("div",{staticClass:"contactText"},[n("p",[t._v("Email:")]),n("p",[t._v("Jméno a příjmení:")]),n("p",[t._v("Adresa:")]),n("p",[t._v("IČO:")])])])])])}],L={name:"contactBox"},N=L,U=(n("34f3"),Object(u["a"])(N,D,I,!1,null,"134bcf72",null)),Z=U.exports,z={name:"mainContent",components:{slideBox:K,itemBox:M,contactBox:Z}},G=z,Q=(n("97db"),Object(u["a"])(G,y,E,!1,null,"27258169",null)),R=Q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerBar"},[n("div",{staticClass:"bar"})])}],X={name:"footerBar"},Y=X,tt=(n("eed2"),Object(u["a"])(Y,V,W,!1,null,"22156eb2",null)),et=tt.exports,nt={name:"Home",components:{mainContent:R,footerBar:et}},at=nt,it=(n("c795"),Object(u["a"])(at,j,w,!1,null,"0a5782b0",null)),rt=it.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("p",[t._v("asufunasonfo")])])}],ct={name:"cart"},lt=ct,ut=Object(u["a"])(lt,ot,st,!1,null,null,null),ft=ut.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[t._v(" sandu "),n("footerBar")],1)},dt=[],pt={name:"contact",components:{footerBar:et}},vt=pt,_t=Object(u["a"])(vt,mt,dt,!1,null,"304290eb",null),bt=_t.exports;a["a"].use(O["a"]);var ht=[{path:"/",name:"Home",component:rt},{path:"/cart",name:"cart",component:ft},{path:"/contact",name:"contact",component:bt}],xt=new O["a"]({mode:"history",base:"",routes:ht}),Ct=xt,Bt=n("2f62");a["a"].use(Bt["a"]);var gt=new Bt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ot=n("f5af"),jt=n.n(Ot);n("e829");a["a"].config.productionTip=!1,new a["a"]({router:Ct,store:gt,render:function(t){return t(g)},mounted:function(){jt.a.init()}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7a3b":function(t,e,n){},"873d":function(t,e,n){"use strict";n("f36c")},"97db":function(t,e,n){"use strict";n("7a3b")},"9c0c":function(t,e,n){},"9d2b":function(t,e,n){"use strict";n("15ee")},a57a:function(t,e,n){},b48a:function(t,e,n){},c795:function(t,e,n){"use strict";n("b48a")},cbdf:function(t,e,n){},d838:function(t,e,n){"use strict";n("cbdf")},eed2:function(t,e,n){"use strict";n("5333")},f36c:function(t,e,n){},f442:function(t,e,n){"use strict";n("a57a")}});
//# sourceMappingURL=app.83fa6e5b.js.map