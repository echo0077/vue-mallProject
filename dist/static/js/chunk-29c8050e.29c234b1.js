(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29c8050e"],{"05b58":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sure-pay"},[a("main-nav-bar",{attrs:{title:"确认支付"}}),a("scroll",{ref:"scroll",staticClass:"sure-pay-content"},[a("sure-pay-address",{attrs:{addrList:t.addrList}}),a("goods-list",{attrs:{shopList:t.shopList}}),a("order-list",{attrs:{acountObj:t.acountObj}}),a("div",{staticClass:"safe-tip"},[t._v("安全提醒：付款成功后，唯妮海购不会以付款异常，系统升级为理由联系您，请勿泄漏银行卡号，手机验证码，否则会造成钱款的损失。如有疑问请咨询客服，谨防电话诈骗。")]),a("remark"),a("pay-type")],1),a("sure-pay-bottom",{attrs:{amountAll:t.acountObj.amountAll}})],1)},i=[],c=a("1bab");function n(){return Object(c["a"])({url:"/trade/toMoPalaceOrder.shtml",method:"post"})}var o=a("099a"),r=a("5d17"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sure-pay-address",on:{click:t.toFromAddressPage}},[e("div",{staticClass:"address-left"},[t.addrList.length?e("p",{staticClass:"person-mesage"},[t._v(t._s(t.addrList[0].person_name)+" "+t._s(t.addrList[0].serv_num))]):t._e(),t.addrList.length?e("div",{staticClass:"address-content"},[e("p",{staticClass:"address-detail"},[e("img",{staticClass:"icon",attrs:{src:a("5118"),alt:""}}),t._v(t._s(t.addrList[0].area_name)+t._s(t.addrList[0].address))])]):t._e()]),e("img",{staticClass:"address-right",attrs:{src:"http://www.weinihaigou.com/m-images/my-tip.png",alt:""}})])},u=[],d={name:"SurePayAddress",props:{addrList:{type:Array,default:function(){return[]}}},methods:{toFromAddressPage:function(){this.$router.push("/fromAddress")}}},p=d,m=(a("cbf8"),a("2877")),f=Object(m["a"])(p,l,u,!1,null,"11b9291d",null),v=f.exports,_=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goods-list"},[a("ul",{staticClass:"shop-list"},t._l(t.shopList,(function(s){return a("li",{key:s.skuId,staticClass:"shop-item"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.imgUrl,expression:"item.imgUrl"}],staticClass:"goods-img",attrs:{alt:""}}),a("div",{staticClass:"goods-message"},[a("p",{staticClass:"title"},[t._v(t._s(s.goodsName2))]),a("p",{staticClass:"sku-name"},[t._v("规格:"+t._s(s.skuName))]),a("p",{staticClass:"sku-price"},[t._v("￥"+t._s(s.skuPrice.toFixed(2)))])]),a("div",{staticClass:"sku-num"},[t._v("×"+t._s(s.num))])])})),0)])},C=[],b={name:"GoodsList",props:{shopList:{type:Array,default:function(){return[]}}}},g=b,h=(a("5da2"),Object(m["a"])(g,_,C,!1,null,"493d4b4c",null)),y=h.exports,O=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-list"},[a("ul",{staticClass:"order-acount-list"},[a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("优惠券:")]),a("p",{staticClass:"desc"},[t._v("可用"),a("span",{staticClass:"num"},[t._v(t._s(t.acountObj.cList.length))]),t._v("张")])]),a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("商品金额(不含税):")]),a("p",{staticClass:"acount"},[t._v("￥"+t._s(t.acountObj.amountAll.toFixed(2)))])]),a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("活动:")]),a("p",{staticClass:"acount"},[t._v("-￥"+t._s(t.acountObj.discount.toFixed(2)))])]),a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("优惠券优惠:")]),a("p",{staticClass:"acount"},[t._v("-￥"+t._s(t.acountObj.couDiscount.toFixed(2)))])]),a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("运费:")]),a("p",{staticClass:"acount"},[t._v("￥"+t._s(t.acountObj.postAge.toFixed(2)))])]),a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("预计税费:")]),a("p",{staticClass:"acount"},[t._v("￥"+t._s(t.acountObj.taxAll.toFixed(2)))])]),a("li",{staticClass:"order-acount-item"},[a("p",{staticClass:"title"},[t._v("应付总额:")]),a("p",{staticClass:"acount"},[t._v("￥"+t._s(t.acountObj.totalAcount.toFixed(2)))])])])])},A=[],j={name:"OrderList",props:{acountObj:{type:Object,default:function(){return{}}}}},x=j,L=(a("6ad26"),Object(m["a"])(x,O,A,!1,null,"6fef43f1",null)),k=L.exports,P=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"remark"},[a("p",{staticClass:"title"},[t._v("留言备注:")]),a("textarea",{staticClass:"remark-input",attrs:{cols:"30",rows:"10"}})])}],$={name:"Remark"},E=$,F=(a("7101"),Object(m["a"])(E,P,w,!1,null,"6f9c5a9c",null)),N=F.exports,B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pay-type"},[e("p",{staticClass:"title"},[t._v("选择支付方式")]),e("div",{staticClass:"pay-type-item"},[e("img",{staticClass:"alipay",attrs:{src:a("154c"),alt:""}}),e("p",{staticClass:"pay-title"},[t._v("支付宝")]),e("img",{staticClass:"selected",attrs:{src:a("f540"),alt:""}})])])},S=[],D={name:"PayType"},M=D,U=(a("1456"),Object(m["a"])(M,B,S,!1,null,"4cd464c0",null)),R=U.exports,z=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sure-pay-bottom"},[a("div",{staticClass:"title"},[t._v("共计:"),a("span",{staticClass:"total-acount"},[t._v("￥"+t._s(t.amountAll.toFixed(2)))])]),a("div",{staticClass:"pay-btn"},[t._v("确认并付款")])])},G=[],J=(a("a9e3"),{name:"SurePayBottom",props:{amountAll:{type:Number,default:0}}}),T=J,I=(a("1223"),Object(m["a"])(T,z,G,!1,null,"db07455c",null)),q=I.exports,H={name:"SurePay",components:{MainNavBar:o["a"],Scroll:r["a"],SurePayAddress:v,GoodsList:y,OrderList:k,Remark:N,PayType:R,SurePayBottom:q},data:function(){return{addrList:[],shopList:[],acountObj:{amountAll:0,couDiscount:0,discount:0,postAge:0,realNameAndCard:"",shopCount:0,taxAll:0,cList:[],totalAcount:0}}},created:function(){this.getMoPalaceOrder()},methods:{getMoPalaceOrder:function(){var t=this;n().then((function(s){console.log(s),t.addrList=s.result.addrList,t.shopList=s.result.shopList,t.acountObj.amountAll=s.result.amountAll,t.acountObj.couDiscount=s.result.couDiscount,t.acountObj.discount=s.result.discount,t.acountObj.postAge=s.result.postAge,t.acountObj.realNameAndCard=s.result.realNameAndCard,t.acountObj.shopCount=s.result.shopCount,t.acountObj.taxAll=s.result.taxAll,t.acountObj.cList=s.result.cList,t.acountObj.totalAcount=s.result.amountAll+s.result.postAge+s.result.taxAll-s.result.couDiscount-s.result.discount})).catch((function(t){console.log(t)}))}}},K=H,Q=(a("3e8b"),Object(m["a"])(K,e,i,!1,null,"3e1a3cc1",null));s["default"]=Q.exports},"099a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-nav-bar"},[e("nav-bar",[e("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.goBack},slot:"left"},[e("img",{staticClass:"back-icon",attrs:{src:a("7ea1"),alt:""}})]),e("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},[t._v(" "+t._s(t.title)+" ")])])],1)},i=[],c=a("a7ac"),n={name:"MainNavBar",components:{NavBar:c["a"]},props:{title:{type:String,default:""}},data:function(){return{fromUrl:""}},beforeRouteEnter:function(t,s,a){a((function(t){t.fromUrl=s.fullPath}))},methods:{goBack:function(){this.$router.go(-1)}}},o=n,r=(a("6aec"),a("2877")),l=Object(r["a"])(o,e,i,!1,null,"779151a0",null);s["a"]=l.exports},1223:function(t,s,a){"use strict";var e=a("a392"),i=a.n(e);i.a},1456:function(t,s,a){"use strict";var e=a("b184"),i=a.n(e);i.a},"154c":function(t,s,a){t.exports=a.p+"static/img/alipay.270d421b.svg"},"36b2":function(t,s,a){},"3e8b":function(t,s,a){"use strict";var e=a("5c18"),i=a.n(e);i.a},5118:function(t,s,a){t.exports=a.p+"static/img/location.9b1a96d1.svg"},"5c18":function(t,s,a){},"5da2":function(t,s,a){"use strict";var e=a("fe0a"),i=a.n(e);i.a},6892:function(t,s,a){},"6ad26":function(t,s,a){"use strict";var e=a("36b2"),i=a.n(e);i.a},"6aec":function(t,s,a){"use strict";var e=a("6892"),i=a.n(e);i.a},7101:function(t,s,a){"use strict";var e=a("d822"),i=a.n(e);i.a},"7ea1":function(t,s,a){t.exports=a.p+"static/img/left.2ebaad22.svg"},a392:function(t,s,a){},b0b6:function(t,s,a){},b184:function(t,s,a){},cbf8:function(t,s,a){"use strict";var e=a("b0b6"),i=a.n(e);i.a},d822:function(t,s,a){},f540:function(t,s,a){t.exports=a.p+"static/img/choose_active.fd150d19.svg"},fe0a:function(t,s,a){}}]);
//# sourceMappingURL=chunk-29c8050e.29c234b1.js.map