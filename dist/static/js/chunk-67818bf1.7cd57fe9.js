(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67818bf1"],{"1cc1":function(t,s,e){},2141:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sort-nav"},[e("ul",{staticClass:"sort-list"},t._l(t.sortList,(function(s,r){return e("li",{key:s.sort,staticClass:"sort-item",class:{"sort-icon":s.icon,"sort-active":r==t.currentSort,"sort-active-top":s.top,"sort-active-bottom":s.bottom},on:{click:function(s){return t.sortClick(r)}}},[t._v(" "+t._s(s.title)+" ")])})),0)])},o=[],i={name:"SortNav",data:function(){return{sortList:[{sort:"xl",order:2,title:"销量",icon:!1,top:!1,bottom:!1},{sort:"sj",order:1,title:"价格",icon:!0,top:!1,bottom:!1},{sort:"kcl",order:1,title:"库存量",icon:!0,top:!1,bottom:!1},{sort:"sjsj",order:1,title:"上架时间",icon:!0,top:!1,bottom:!1},{sort:"sx",order:2,title:"筛选",icon:!1,top:!1,bottom:!1}],currentSort:-1}},computed:{},methods:{sortClick:function(t){this.currentSort>=0&&this.currentSort!=t&&(this.sortList[this.currentSort].bottom=!1,this.sortList[this.currentSort].top=!1,this.sortList[this.currentSort].order=1),this.currentSort=t,1!=t&&2!=t&&3!=t||1!=this.sortList[t].order?1!=t&&2!=t&&3!=t||2!=this.sortList[t].order||(this.sortList[t].order--,this.sortList[this.currentSort].bottom=!1,this.sortList[this.currentSort].top=!0):(this.sortList[t].order++,this.sortList[this.currentSort].bottom=!0,this.sortList[this.currentSort].top=!1),this.$emit("sortGoodsList",this.sortList[this.currentSort])}}},n=i,a=(e("7173"),e("2877")),c=Object(a["a"])(n,r,o,!1,null,"487fc7f9",null);s["a"]=c.exports},"49bd":function(t,s,e){"use strict";var r=e("ef9c"),o=e.n(r);o.a},"4e82":function(t,s,e){"use strict";var r=e("23e7"),o=e("1c0b"),i=e("7b0b"),n=e("d039"),a=e("b301"),c=[],u=c.sort,l=n((function(){c.sort(void 0)})),m=n((function(){c.sort(null)})),d=a("sort"),h=l||!m||d;r({target:"Array",proto:!0,forced:h},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},"5b66":function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sort-group"},[e("div",{staticClass:"mask",on:{click:function(s){return s.target!==s.currentTarget?null:t.hideSortGroup(s)}}}),e("div",{staticClass:"sort-group-list"},[e("scroll",{ref:"scroll",staticClass:"sort-group-content"},[e("div",{staticClass:"sort-group-list-container"},[e("sort-group-item",{ref:"typeList",attrs:{sortGroupList:t.typeList,sortGroupTitle:"分类",isCheckbox:!0}}),e("sort-group-item",{ref:"brandList",attrs:{sortGroupList:t.brandList,sortGroupTitle:"品牌",isCheckbox:!0}}),e("sort-group-item",{ref:"countryList",attrs:{sortGroupList:t.countryList,sortGroupTitle:"国家",isCheckbox:!0}}),e("sort-group-item",{ref:"priceList",attrs:{sortGroupList:t.priceList,sortGroupTitle:"价格",isCheckbox:!1},on:{sortInput:t.sortPrice}},[e("div",{staticClass:"sort-range",attrs:{slot:"sort-range"},slot:"sort-range"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.minPrice,expression:"minPrice"}],staticClass:"sort-range-input",attrs:{type:"text",placeholder:"最低价"},domProps:{value:t.minPrice},on:{input:function(s){s.target.composing||(t.minPrice=s.target.value)}}}),e("span",{staticClass:"sort-range-icon"},[t._v("——")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],staticClass:"sort-range-input",attrs:{type:"text",placeholder:"最高价"},domProps:{value:t.maxPrice},on:{input:function(s){s.target.composing||(t.maxPrice=s.target.value)}}})])]),e("sort-group-item",{ref:"stockList",attrs:{sortGroupList:t.stockList,sortGroupTitle:"库存",isCheckbox:!1},on:{sortInput:t.sortNumber}},[e("div",{staticClass:"sort-range",attrs:{slot:"sort-range"},slot:"sort-range"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.minNumber,expression:"minNumber"}],staticClass:"sort-range-input",attrs:{type:"text",placeholder:"最低量"},domProps:{value:t.minNumber},on:{input:function(s){s.target.composing||(t.minNumber=s.target.value)}}}),e("span",{staticClass:"sort-range-icon"},[t._v("——")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxNumber,expression:"maxNumber"}],staticClass:"sort-range-input",attrs:{type:"text",placeholder:"最高量"},domProps:{value:t.maxNumber},on:{input:function(s){s.target.composing||(t.maxNumber=s.target.value)}}})])]),e("sort-group-item",{ref:"deliverList",attrs:{sortGroupList:t.deliverList,sortGroupTitle:"发货",isCheckbox:!1}})],1)]),e("sort-btn",{on:{sortReset:t.sortReset,sortConfirm:t.sortConfirm}})],1)])},o=[],i=(e("a15b"),e("a9e3"),e("1276"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sort-group-item",class:{autoHeight:t.isShow}},[e("div",{staticClass:"sort-group-title"},[t._v(t._s(t.sortGroupTitle)),t.sortGroupList.length>6?e("div",{staticClass:"icon",class:{"show-icon":t.isShow},on:{click:t.showList}}):t._e()]),e("ul",{staticClass:"sort-list"},t._l(t.sortGroupList,(function(s){return e("li",{key:s.id,staticClass:"sort-item text-overflow1",class:{"sort-item-active":-1!=t.chooseItem.indexOf(s.id)},on:{click:function(e){return t.sortItemClick(s.id)}}},[t._v(t._s(s.name))])})),0),t._t("sort-range")],2)}),n=[],a=(e("c975"),e("a434"),{name:"SortGroupItem",props:{sortGroupList:{type:Array,default:function(){return{}}},sortGroupTitle:{type:String,default:""},isCheckbox:{type:Boolean,default:!1}},data:function(){return{isShow:!1,chooseItem:[]}},methods:{showList:function(){this.isShow=!this.isShow},sortItemClick:function(t){"number"!=typeof t&&-1!=t.indexOf("-")?(this.chooseItem=[t],this.$emit("sortInput",t)):this.isCheckbox?-1!=this.chooseItem.indexOf(t)?this.chooseItem.splice(this.chooseItem.indexOf(t),1):this.chooseItem.push(t):this.chooseItem=[t]}}}),c=a,u=(e("dbf5"),e("2877")),l=Object(u["a"])(c,i,n,!1,null,"682d542e",null),m=l.exports,d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sort-btn"},[e("div",{staticClass:"sort-reset",on:{click:t.sortReset}},[t._v("重置")]),e("div",{staticClass:"sort-confirm",on:{click:t.sortConfirm}},[t._v("确认")])])},h=[],p={name:"SortBtn",methods:{sortReset:function(){this.$emit("sortReset")},sortConfirm:function(){this.$emit("sortConfirm")}}},f=p,v=(e("49bd"),Object(u["a"])(f,d,h,!1,null,"32849f7a",null)),b=v.exports,g=e("5d17"),L={name:"SortGroup",props:{brandList:{type:Array,default:function(){return{}}},countryList:{type:Array,default:function(){return{}}},typeList:{type:Array,default:function(){return{}}}},components:{SortGroupItem:m,SortBtn:b,Scroll:g["a"]},data:function(){return{minPrice:null,maxPrice:null,minNumber:null,maxNumber:null,priceList:[{id:"0-99",name:"0-99"},{id:"100-199",name:"100-199"},{id:"200-299",name:"200-299"}],stockList:[{id:"0-99",name:"0-99"},{id:"100-499",name:"100-499"},{id:"500-",name:"500以上"}],deliverList:[{id:1,name:"保税区邮"},{id:2,name:"香港直邮"},{id:4,name:"海外直邮"},{id:5,name:"国内发货"}]}},methods:{sortPrice:function(t){this.minPrice=t.split("-")[0],this.maxPrice=t.split("-")[1]},sortNumber:function(t){this.minNumber=t.split("-")[0],this.maxNumber=t.split("-")[1]},sortReset:function(){this.$refs.typeList.chooseItem=[],this.$refs.brandList.chooseItem=[],this.$refs.countryList.chooseItem=[],this.$refs.priceList.chooseItem=[],this.$refs.stockList.chooseItem=[],this.$refs.deliverList.chooseItem=[],this.minPrice=null,this.maxPrice=null,this.minNumber=null,this.maxNumber=null},sortConfirm:function(){var t={};t.strCount=Number(this.minNumber)>0?Number(this.minNumber):null,t.endCount=Number(this.maxNumber)>0?Number(this.maxNumber):null,t.strPrice=Number(this.minPrice)>0?Number(this.minPrice):null,t.endPrice=Number(this.maxPrice)>0?Number(this.maxPrice):null,t.brandId=this.$refs.brandList.chooseItem.join(" "),t.countryId=this.$refs.countryList.chooseItem.join(" "),t.deliveryType=this.$refs.deliverList.chooseItem.join(" "),t.threeCategory=this.$refs.typeList.chooseItem.join(" "),console.log(t),this.$emit("sortConfirm",t)},hideSortGroup:function(){this.$emit("hideSortGroup")}}},C=L,x=(e("d88a"),Object(u["a"])(C,r,o,!1,null,"0c3fa61a",null));s["a"]=x.exports},7173:function(t,s,e){"use strict";var r=e("e68a"),o=e.n(r);o.a},9287:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods-list"},[e("ul",{staticClass:"hot-goods-list"},t._l(t.goodsList,(function(s){return e("li",{key:s.goodsNo,staticClass:"hot-goods-item",on:{click:function(e){return t.toGoodsDetail(s.goodsNo)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.imgUrl,expression:"item.imgUrl"}],staticClass:"hot-goods-img",attrs:{alt:""},on:{load:t.loadImage}}),e("div",{staticClass:"hot-goods-delivery-type"},[t._v(t._s(t._f("deliveryTypeFilter")(s.deliveryType)))]),e("div",{staticClass:"hot-goods-title text-overflow2"},[t._v(t._s(s.goodsName))]),e("div",{staticClass:"hot-goods-price"},[e("span",{staticClass:"hot-goods-mall-price"},[t._v("￥"+t._s(s.mallPrice))]),e("span",{staticClass:"hot-goods-market-price"},[t._v("￥"+t._s(s.marketPrice))])]),s.realStock<=0?e("div",{staticClass:"no-goods"},[t._v("已抢光")]):t._e()])})),0)])},o=[],i={name:"GoodsList",props:{goodsList:{type:Array,default:function(){return[]}}},data:function(){return{loadTimes:0}},filters:{deliveryTypeFilter:function(t){switch(t){case 1:return"保税区邮";case 2:return"香港直邮";case 4:return"海外直邮";case 5:return"国内发货";default:break}}},methods:{loadImage:function(){this.loadTimes+=1,this.goodsList.length===this.loadTimes&&this.$bus.$emit("loadImage")},toGoodsDetail:function(t){this.$router.push("/goodsDetail/"+t)}}},n=i,a=(e("9559"),e("2877")),c=Object(a["a"])(n,r,o,!1,null,"e189c54e",null);s["a"]=c.exports},9559:function(t,s,e){"use strict";var r=e("e064"),o=e.n(r);o.a},"9bf7":function(t,s,e){"use strict";e.d(s,"d",(function(){return o})),e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return n})),e.d(s,"a",(function(){return a}));var r=e("1bab");function o(t){return Object(r["a"])({url:"/find/themeBanner.shtml",params:{themeId:t},method:"post"})}function i(t,s){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return Object(r["a"])({url:"/solr/searchGoods.shtml",params:{themeId:t,pageNum:s,pageSize:e},method:"post"})}function n(t){return Object(r["a"])({url:"/solr/searchGoods.shtml",params:t,method:"post"})}function a(t){return Object(r["a"])({url:"/solrGoods/getSolrGroup.shtml",params:t,method:"post"})}},a434:function(t,s,e){"use strict";var r=e("23e7"),o=e("23cb"),i=e("a691"),n=e("50c4"),a=e("7b0b"),c=e("65f0"),u=e("8418"),l=e("1dde"),m=Math.max,d=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,s){var e,r,l,f,v,b,g=a(this),L=n(g.length),C=o(t,L),x=arguments.length;if(0===x?e=r=0:1===x?(e=0,r=L-C):(e=x-2,r=d(m(i(s),0),L-C)),L+e-r>h)throw TypeError(p);for(l=c(g,r),f=0;f<r;f++)v=C+f,v in g&&u(l,f,g[v]);if(l.length=r,e<r){for(f=C;f<L-r;f++)v=f+r,b=f+e,v in g?g[b]=g[v]:delete g[b];for(f=L;f>L-r+e;f--)delete g[f-1]}else if(e>r)for(f=L-r;f>C;f--)v=f+r-1,b=f+e-1,v in g?g[b]=g[v]:delete g[b];for(f=0;f<e;f++)g[f+C]=arguments[f+2];return g.length=L-r+e,l}})},d88a:function(t,s,e){"use strict";var r=e("1cc1"),o=e.n(r);o.a},dbf5:function(t,s,e){"use strict";var r=e("e2e6"),o=e.n(r);o.a},e064:function(t,s,e){},e2e6:function(t,s,e){},e68a:function(t,s,e){},ef9c:function(t,s,e){}}]);
//# sourceMappingURL=chunk-67818bf1.7cd57fe9.js.map