(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b9b0b3c"],{"705e":function(t,e,s){},"83a9":function(t,e,s){},"89a9":function(t,e,s){"use strict";var o=s("83a9"),a=s.n(o);a.a},9287:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-list"},[s("ul",{staticClass:"hot-goods-list"},t._l(t.goodsList,(function(e){return s("li",{key:e.goodsNo,staticClass:"hot-goods-item",on:{click:function(s){return t.toGoodsDetail(e.goodsNo)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],staticClass:"hot-goods-img",attrs:{alt:""},on:{load:t.loadImage}}),s("div",{staticClass:"hot-goods-delivery-type"},[t._v(t._s(t._f("deliveryTypeFilter")(e.deliveryType)))]),s("div",{staticClass:"hot-goods-title text-overflow2"},[t._v(t._s(e.goodsName))]),s("div",{staticClass:"hot-goods-price"},[s("span",{staticClass:"hot-goods-mall-price"},[t._v("￥"+t._s(e.mallPrice))]),s("span",{staticClass:"hot-goods-market-price"},[t._v("￥"+t._s(e.marketPrice))])]),e.realStock<=0?s("div",{staticClass:"no-goods"},[t._v("已抢光")]):t._e()])})),0)])},a=[],i={name:"GoodsList",props:{goodsList:{type:Array,default:function(){return[]}}},data:function(){return{loadTimes:0}},filters:{deliveryTypeFilter:function(t){switch(t){case 1:return"保税区邮";case 2:return"香港直邮";case 4:return"海外直邮";case 5:return"国内发货";default:break}}},methods:{loadImage:function(){this.loadTimes+=1,this.goodsList.length===this.loadTimes&&this.$bus.$emit("loadImage")},toGoodsDetail:function(t){this.$router.push("/goodsDetail/"+t)}}},n=i,r=(s("9559"),s("2877")),l=Object(r["a"])(n,o,a,!1,null,"e189c54e",null);e["a"]=l.exports},9559:function(t,e,s){"use strict";var o=s("e064"),a=s.n(o);a.a},"9bf7":function(t,e,s){"use strict";s.d(e,"d",(function(){return a})),s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return r}));var o=s("1bab");function a(t){return Object(o["a"])({url:"/find/themeBanner.shtml",params:{themeId:t},method:"post"})}function i(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return Object(o["a"])({url:"/solr/searchGoods.shtml",params:{themeId:t,pageNum:e,pageSize:s},method:"post"})}function n(t){return Object(o["a"])({url:"/solr/searchGoods.shtml",params:t,method:"post"})}function r(t){return Object(o["a"])({url:"/solrGoods/getSolrGroup.shtml",params:t,method:"post"})}},b625:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme"},[s("main-nav-bar",{attrs:{title:t.themeMessage.title}}),s("scroll",{ref:"scroll",staticClass:"theme-content",attrs:{probeType:3,pullUpLoad:!0},on:{scroll:t.scroll,pullingUp:t.pullingUp}},[s("theme-goods-list",{attrs:{goodsList:t.goodsList,themeImg:t.themeMessage.adImgUrl}}),s("page-end",{directives:[{name:"show",rawName:"v-show",value:!t.hasNextPage,expression:"!hasNextPage"}]})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.showBackTop,expression:"showBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},a=[],i=s("2909"),n=s("9bf7"),r=s("6e4f"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-goods-list"},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.themeImg,expression:"themeImg"}],staticClass:"theme-img",attrs:{alt:""}})]),s("goods-list",{attrs:{goodsList:t.goodsList}})],1)},c=[],u=s("9287"),d={name:"ThemeGoodsList",props:{themeImg:{type:String,default:""},goodsList:{type:Array,default:function(){return[]}}},components:{GoodsList:u["a"]}},h=d,m=(s("89a9"),s("2877")),g=Object(m["a"])(h,l,c,!1,null,"28b28e33",null),p=g.exports,f=s("5d17"),v=s("3527"),b=s("099a"),y={name:"Theme",data:function(){return{id:null,themeMessage:{},goodsList:[],pageNum:1,pageSize:20,hasNextPage:null}},mixins:[r["a"]],components:{Scroll:f["a"],PageEnd:v["a"],MainNavBar:b["a"],ThemeGoodsList:p},created:function(){this.id=this.$route.params.id,this.getThemeBanner(this.id),this.getSearchGoods(this.id,1,20)},methods:{getThemeBanner:function(t){var e=this;Object(n["d"])(t).then((function(t){console.log(t),e.themeMessage=t.result[0]}))},getSearchGoods:function(t,e,s){var o=this;Object(n["b"])(t,e,s).then((function(t){var e;o.hasNextPage=t.result.hasNextPage,(e=o.goodsList).push.apply(e,Object(i["a"])(t.result.list)),o.$refs.scroll.refresh(),o.$refs.scroll.finishPullUp(),console.log(t)}))},pullingUp:function(){this.hasNextPage&&(this.pageNum=this.pageNum+1,this.getSearchGoods(this.id,this.pageNum,this.pageSize))}}},N=y,w=(s("fb4f"),Object(m["a"])(N,o,a,!1,null,"6078e598",null));e["default"]=w.exports},e064:function(t,e,s){},fb4f:function(t,e,s){"use strict";var o=s("705e"),a=s.n(o);a.a}}]);
//# sourceMappingURL=chunk-8b9b0b3c.3b655465.js.map