(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{392:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(120).default)("79f5e526",content,!0,{sourceMap:!1})},393:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return d}));var n=r(53),o=function(t){return Object(n.axiosRequest)(n.METHODS.GET,"/post/"+t)},c=function(){return Object(n.axiosRequest)(n.METHODS.GET,"/posts/latest")},d=function(){return Object(n.axiosRequest)(n.METHODS.POST,"/post")}},394:function(t,e,r){"use strict";r(392)},395:function(t,e,r){var n=r(119)(!1);n.push([t.i,".flex-column[data-v-5e511045],.flex-row[data-v-5e511045]{display:flex}.middle-center[data-v-5e511045]{align-items:center}.middle-center[data-v-5e511045],.stretch-center[data-v-5e511045]{display:flex;justify-content:center}.stretch-center[data-v-5e511045]{align-items:stretch}.fill-screen[data-v-5e511045]{width:100%;height:100vh}[data-v-5e511045]::-webkit-scrollbar,body[data-v-5e511045]::-webkit-scrollbar{width:12px}[data-v-5e511045]::-webkit-scrollbar-thumb,body[data-v-5e511045]::-webkit-scrollbar-thumb{background:grey;background-clip:padding-box;border:4px solid transparent;border-radius:12px}.post-card .ago[data-v-5e511045],.post-card .name[data-v-5e511045]{background-color:#000;border:1px solid grey;border-bottom:none}.post-card .gap[data-v-5e511045]{border-bottom:1px solid grey}.post-card .card[data-v-5e511045]{width:240px;height:135px;border:1px solid grey;border-top:none;border-top-left-radius:0;border-top-right-radius:0;overflow-x:hidden;overflow-y:auto}.post-card .card .post-content[data-v-5e511045]{white-space:pre-wrap}",""]),t.exports=n},396:function(t,e,r){var content=r(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(120).default)("98ed9392",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";r.r(e);var n=r(28),o=(r(70),r(27),r(121)),c=r(397),d=r(135),l=r(393),v=Object(o.b)({props:{postId:{type:String,required:!0}},setup:function(t){var e=Object(o.g)(t).postId,r=Object(o.h)().$api,v=Object(o.e)(),f=Object(o.a)((function(){var t,e;return(null===(e=null===(t=v.value)||void 0===t?void 0:t.user)||void 0===e?void 0:e.name)||""})),content=Object(o.a)((function(){var t;return(null===(t=v.value)||void 0===t?void 0:t.content)||""})),x=Object(o.a)((function(){var t,e=null===(t=v.value)||void 0===t?void 0:t.createdAt;return e?c.DateTime.fromISO(e).setLocale("en").toRelative({style:"short"}):""}));return Object(o.d)(Object(n.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(Object(l.c)(e.value))();case 2:return n=t.sent,t.prev=3,t.next=6,r(Object(d.b)(n.userId))();case 6:n.user=t.sent;case 7:return t.prev=7,v.value=n,t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[3,,7,10]])})))),{user:f,content:content,timeAgo:x}}}),f=(r(394),r(79)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"post-card"},[e("div",{staticClass:"header flex-row"},[e("div",{staticClass:"name px-1 rounded-top"},[t._v(t._s(t.user))]),e("div",{staticClass:"gap flex-fill"}),e("div",{staticClass:"ago px-1 rounded-top"},[t._v(" "+t._s(t.timeAgo))])]),e("b-card",{staticClass:"card post-item bg-dark rounded-bottom",attrs:{"no-body":""}},[e("b-card-body",{staticClass:"px-1 py-0 post-content"},[t._v(t._s(t.content))])],1)],1)}),[],!1,null,"5e511045",null);e.default=component.exports},399:function(t,e,r){"use strict";r(396)},400:function(t,e,r){var n=r(119)(!1);n.push([t.i,".flex-column[data-v-6da3c63d],.flex-row[data-v-6da3c63d]{display:flex}.middle-center[data-v-6da3c63d]{align-items:center}.middle-center[data-v-6da3c63d],.stretch-center[data-v-6da3c63d]{display:flex;justify-content:center}.stretch-center[data-v-6da3c63d]{align-items:stretch}.fill-screen[data-v-6da3c63d]{width:100%;height:100vh}[data-v-6da3c63d]::-webkit-scrollbar,body[data-v-6da3c63d]::-webkit-scrollbar{width:12px}[data-v-6da3c63d]::-webkit-scrollbar-thumb,body[data-v-6da3c63d]::-webkit-scrollbar-thumb{background:grey;background-clip:padding-box;border:4px solid transparent;border-radius:12px}#index[data-v-6da3c63d]{background-color:#21130a;min-height:100vh}#index #title>span[data-v-6da3c63d]{font-weight:900}#index textarea[data-v-6da3c63d]{resize:none;height:120px;vertical-align:top}",""]),t.exports=n},402:function(t,e,r){"use strict";r.r(e);r(27);var n=r(28),o=(r(70),r(121)),c=r(393),d=Object(o.b)({setup:function(){var t=Object(o.i)(),e=t.state.user,r=Object(o.h)().$api,d=Object(o.a)((function(){return e.name})),l=Object(o.a)((function(){return e.loggedIn})),v="".concat(Object(o.h)().$config.apiHost,"/login/google"),f=Object(o.e)(""),x=Object(o.e)(!1),m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x.value=!0,t.prev=1,t.next=4,r(Object(c.a)())({content:f.value});case 4:f.value="",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:return t.next=12,w();case 12:x.value=!1;case 13:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),h=Object(o.e)([]),w=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(Object(c.b)())();case 2:h.value=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.d)((function(){w()})),{name:d,loggedIn:l,logout:function(){t.dispatch("user/logout")},googleLoginUrl:v,postContent:f,postButtonDisabled:x,post:m,postIds:h}}}),l=d,v=(r(399),r(79)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-white px-2 py-5",attrs:{id:"index"}},[t._m(0),t.loggedIn?e("div",{staticClass:"container text-center"},[e("div",[t._v("Logged in as "+t._s(t.name))]),e("div",{staticClass:"my-2"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.logout()}}},[t._v("LOGOUT")])]),e("div",{staticClass:"row my-5"},[e("div",{staticClass:"col-md-10 col-9"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postContent,expression:"postContent"}],staticClass:"bg-dark text-white w-100 rounded px-1",attrs:{type:"text"},domProps:{value:t.postContent},on:{input:function(e){e.target.composing||(t.postContent=e.target.value)}}})]),e("div",{staticClass:"col-md-2 col-3"},[e("button",{staticClass:"btn btn-primary w-100 h-100",attrs:{disabled:t.postButtonDisabled},on:{click:function(e){return t.post("edit")}}},[t._v("POST")])])])]):e("form",{staticClass:"text-center",attrs:{action:t.googleLoginUrl,method:"post"}},[e("input",{staticClass:"btn btn-primary m-2",attrs:{type:"submit",value:"Login with Google"}})]),e("div",{staticClass:"container"},[e("div",{staticClass:"row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 my-4"},t._l(t.postIds,(function(t){return e("div",{staticClass:"col my-2 middle-center"},[e("Card",{key:t,attrs:{postId:t}})],1)})),0)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-center",attrs:{id:"title"}},[e("span",{staticClass:"display-1 my-5"},[e("strong",[t._v("Cardio")])])])}],!1,null,"6da3c63d",null);e.default=component.exports;installComponents(component,{Card:r(398).default})}}]);