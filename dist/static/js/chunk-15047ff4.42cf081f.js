(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15047ff4"],{"19bd":function(t,n,e){"use strict";var a=e("7355"),s=e.n(a);s.a},"4f83":function(t,n,e){"use strict";var a=e("b06d"),s=e.n(a);s.a},6251:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return u}));var a=e("1bab");function s(){return Object(a["a"])({url:"/active/getNotice.shtml",method:"post"})}function o(){return Object(a["a"])({url:"/ord/myTradeCount.shtml",method:"post"})}function c(t){return Object(a["a"])({url:"/coupon/getMyConpou.shtml",params:t,method:"post"})}function u(){return Object(a["a"])({url:"/user/loginOut.shtml",method:"post"})}},7355:function(t,n,e){},"7ea1":function(t,n,e){t.exports=e.p+"static/img/left.2ebaad22.svg"},"87d3":function(t,n,e){},a7ac:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-bar"},[e("div",{staticClass:"left"},[t._t("left")],2),e("div",{staticClass:"center"},[t._t("center")],2),e("div",{staticClass:"right"},[t._t("right")],2)])},s=[],o={name:"NavBar"},c=o,u=(e("aabc"),e("2877")),r=Object(u["a"])(c,a,s,!1,null,"b6e3be1a",null);n["a"]=r.exports},aabc:function(t,n,e){"use strict";var a=e("87d3"),s=e.n(a);s.a},b06d:function(t,n,e){},e83d:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"coupon"},[e("coupon-nav-bar",{attrs:{title:"优惠券"}}),e("coupon-tab-bar",{attrs:{conpouTypeList:t.conpouTypeList,currentType:t.currentType},on:{changeCouponType:t.changeCouponType}})],1)},s=[],o=e("6251"),c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"main-nav-bar"},[a("nav-bar",[a("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.goBack},slot:"left"},[a("img",{staticClass:"back-icon",attrs:{src:e("7ea1"),alt:""}})]),a("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"exchange",attrs:{slot:"right"},slot:"right"},[t._v(" 兑换 ")])])],1)},u=[],r=e("a7ac"),i={name:"CouponNavBar",components:{NavBar:r["a"]},props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.go(-1)}}},l=i,p=(e("4f83"),e("2877")),f=Object(p["a"])(l,c,u,!1,null,"be7ec34c",null),d=f.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"coupon-tab-bar"},[e("ul",{staticClass:"nav-list"},t._l(t.conpouTypeList,(function(n){return e("li",{key:n.status,staticClass:"nav-item",class:{active:n.status==t.currentType},on:{click:function(e){return t.changeCouponType(n.status)}}},[t._v(t._s(n.title))])})),0)])},h=[],b=(e("a9e3"),{name:"OrderNavBar",props:{conpouTypeList:{type:Array,default:function(){return[]}},currentType:{type:Number,default:0}},methods:{changeCouponType:function(t){this.$emit("changeCouponType",t)}}}),m=b,g=(e("19bd"),Object(p["a"])(m,v,h,!1,null,"111150e3",null)),C=g.exports,y={name:"Coupon",components:{CouponNavBar:d,CouponTabBar:C},data:function(){return{pageNum:1,status:0,conpouList:[],conpouTypeList:[{status:0,title:"未使用"},{status:1,title:"已使用"},{status:2,title:"已过期"}],currentType:0}},created:function(){this.getConpouList({pageNum:this.pageNum,status:this.status})},methods:{getConpouList:function(t){var n=this;Object(o["a"])(t).then((function(t){console.log(t),n.conpouList=t.result.list})).catch((function(t){console.log(t)}))},changeCouponType:function(t){this.currentType=t}}},T=y,_=Object(p["a"])(T,a,s,!1,null,"04394586",null);n["default"]=_.exports}}]);