(function(e){function t(t){for(var n,i,c=t[0],u=t[1],o=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,o||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,c=1;c<s.length;c++){var u=s[c];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),r=s.n(n);r.a},2742:function(e,t,s){},2846:function(e,t,s){},"56c9":function(e,t,s){"use strict";var n=s("2742"),r=s.n(n);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.isVerified?e._e():s("SignUp",{on:{verifyUser:e.userCreated}}),e.isVerified?s("Chats"):e._e()],1)},a=[],i=(s("96cf"),s("1da1")),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"parent-div"},[s("div",{staticClass:"columns is-centered is-vcentered",staticStyle:{"min-height":"100%"}},[s("div",{staticClass:"column is-half"},[s("b-field",{attrs:{label:"Username","label-position":"on-border"}},[s("b-input",{attrs:{expanded:"",value:"ex: johnsilver",maxlength:"10"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("p",{staticClass:"control"},[s("b-button",{attrs:{type:"is-primary"},on:{click:e.signUp}},[e._v("Sign Up")])],1),s("p",{staticClass:"control"},[s("b-button",{attrs:{type:"is-success"},on:{click:e.signIn}},[e._v("Sign In")])],1)],1)],1),s("br")]),e.isUserExist?s("div",{staticClass:"alert"},[s("b-message",{attrs:{type:"is-danger"}},[e._v(" User Already Exist !! ")])],1):e._e(),e.isUserInValid?s("div",{staticClass:"alert"},[s("b-message",{attrs:{type:"is-danger"}},[e._v(" User Does not Exist !! ")])],1):e._e()])},u=[],o=s("bc3a"),l=s.n(o),d={data:function(){return{username:null,isUserExist:!1,isUserInValid:!1}},methods:{signUp:function(){var e=this;this.isUserInValid=!1,l.a.post("/http://localhost:5000/users/create",{userName:this.username}).then((function(t){return e.$emit("verifyUser",t.data.userName)})).catch((function(){return e.isUserExist=!0}))},signIn:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isUserExist=!1,t.next=3,l.a.get("http://localhost:5000/users/".concat(e.username));case 3:if(s=t.sent,n=s.data,!n){t.next=9;break}return t.abrupt("return",e.$emit("verifyUser",n.userName));case 9:return t.abrupt("return",e.isUserInValid=!0);case 10:case"end":return t.stop()}}),t)})))()}}},p=d,f=(s("56c9"),s("2877")),m=Object(f["a"])(p,c,u,!1,null,null,null),v=m.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chats",staticStyle:{"max-width":"500px",margin:"0 auto"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-full"},e._l(e.messages,(function(e){return s("UserMessage",{key:e._id,attrs:{message:e}})})),1)]),s("div",{staticClass:"div"}),s("div",{staticClass:"add-message"},[s("AddMessage")],1)])},h=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-vcentered"},[s("div",{staticClass:"column is-narrow"},[s("b-icon",{attrs:{icon:"account-circle-outline",size:"is-medium"}}),s("p",{staticClass:"title is-7"},[e._v(e._s(e.message.userName))])],1),s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"message"},[s("p",{staticClass:"subtitle is-5 has-text-dark"},[e._v(e._s(e.message.text))])]),s("p",{staticClass:"title is-7"},[e._v(" "+e._s(e.message.createdAt?e.message.createdAt.substring(0,10):"")+" ")])])])},x=[],_={props:["message"]},y=_,w=(s("e5c7"),Object(f["a"])(y,b,x,!1,null,null,null)),C=w.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box"},[s("b-input",{attrs:{placeholder:"Ex: Hello world",type:"textarea",maxlength:"100"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),s("b-button",{attrs:{type:"is-primary"},on:{click:e.addMessage}},[e._v("Send")])],1)},U=[],j={data:function(){return{message:""}},methods:{addMessage:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.message){t.next=6;break}return t.next=3,l.a.post("http://localhost:5000/messages/create",{userName:sessionStorage.getItem("userName"),text:e.message});case 3:s=t.sent,s.data,e.message="";case 6:case"end":return t.stop()}}),t)})))()}}},k=j,S=Object(f["a"])(k,O,U,!1,null,null,null),N=S.exports,E={components:{UserMessage:C,AddMessage:N},data:function(){return{messages:[]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("http://localhost:5000/messages");case 2:s=t.sent,n=s.data,e.messages=n;case 5:case"end":return t.stop()}}),t)})))()},created:function(){}},I=E,M=(s("6e45"),Object(f["a"])(I,g,h,!1,null,null,null)),V=M.exports,R={name:"App",data:function(){return{isVerified:null,userName:""}},components:{SignUp:v,Chats:V},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:sessionStorage.getItem("userName")?(e.isVerified=!0,e.userName=sessionStorage.getItem("userName")):console.log("NOt verified");case 1:case"end":return t.stop()}}),t)})))()},methods:{userCreated:function(e){this.isVerified=!0,this.userName=e,sessionStorage.setItem("userName",e)}}},$=R,P=(s("034f"),Object(f["a"])($,r,a,!1,null,null,null)),A=P.exports,T=s("289d");s("5abe");n["a"].use(T["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(A)}}).$mount("#app")},"6e45":function(e,t,s){"use strict";var n=s("d80c"),r=s.n(n);r.a},"85ec":function(e,t,s){},d80c:function(e,t,s){},e5c7:function(e,t,s){"use strict";var n=s("2846"),r=s.n(n);r.a}});
//# sourceMappingURL=app.8fad865b.js.map