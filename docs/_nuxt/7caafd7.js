(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{393:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("1ad17cf1",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n(393)},395:function(t,e,n){var r=n(119)(!1);r.push([t.i,".flex-column[data-v-a896a094],.flex-row[data-v-a896a094]{display:flex}.middle-center[data-v-a896a094]{justify-content:center;align-items:center}.stretch-center[data-v-a896a094]{justify-content:center;align-items:stretch}.fill-screen[data-v-a896a094]{width:100%;height:100vh}#index[data-v-a896a094]{background-color:#470024;min-height:100vh}#title>span[data-v-a896a094]{font-weight:900}",""]),t.exports=r},396:function(t,e,n){"use strict";n.r(e);n(27);var r=n(0),o=n(28),c=(n(70),n(1),n(48),n(53),n(17),n(6),n(5),n(3),n(7),n(4),n(8),n(137)),l=n(138),f=n(52);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(c.b)({setup:function(){var t=Object(c.h)(),e=t.state.user,n=Object(c.g)().$api,r=Object(c.a)((function(){return e.name})),d=Object(c.a)((function(){return e.loggedIn})),m="".concat(Object(c.g)().$config.apiHost,"/login/google"),O=Object(c.e)(""),h=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(Object(f.axiosRequest)(f.METHODS.POST,"/post"))({content:O.value});case 2:j();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=Object(c.e)([]),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(Object(f.axiosRequest)(f.METHODS.GET,"/posts/latest"))();case 2:return e=t.sent,t.next=5,Promise.all(e.map(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(Object(l.b)(e.userId))();case 3:return r=t.sent,t.abrupt("return",v(v({},e),{},{user:r}));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));case 5:y.value=t.sent;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.d)((function(){j()})),{name:r,loggedIn:d,logout:function(){t.dispatch("user/logout")},googleLoginUrl:m,postContent:O,post:h,posts:y}}}),O=m,h=(n(394),n(89)),component=Object(h.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-white",attrs:{id:"index"}},[t._m(0),t.loggedIn?e("div",{staticClass:"container text-center"},[e("div",[t._v("Logged in as "+t._s(t.name))]),e("div",{staticClass:"my-2"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.logout()}}},[t._v("LOGOUT")])]),e("div",{staticClass:"row my-5"},[e("div",{staticClass:"col-md-10 col-9"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.postContent,expression:"postContent"}],staticClass:"w-100 h-100",attrs:{type:"text"},domProps:{value:t.postContent},on:{input:function(e){e.target.composing||(t.postContent=e.target.value)}}})]),e("div",{staticClass:"col-md-2 col-3"},[e("button",{staticClass:"btn btn-primary w-100 h-100",on:{click:function(e){return t.post("edit")}}},[t._v("POST")])])]),e("div",{staticClass:"row my-5"},t._l(t.posts,(function(n){return e("div",{staticClass:"col-lg-3 col-sm-6 col-12 my-2"},[e("b-card",{staticClass:"post-tiem bg-dark"},[e("b-card-title",[t._v(t._s(n.user?n.user.name:"unknown"))]),e("p",[t._v(t._s(n.content))])],1)],1)})),0)]):[e("form",{staticClass:"text-center",attrs:{action:t.googleLoginUrl,method:"post"}},[e("input",{staticClass:"btn btn-primary m-2",attrs:{type:"submit",value:"Login with Google"}})])]],2)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-center",attrs:{id:"title"}},[e("span",{staticClass:"display-1 my-5"},[e("strong",[t._v("Cardio")])])])}],!1,null,"a896a094",null);e.default=component.exports}}]);