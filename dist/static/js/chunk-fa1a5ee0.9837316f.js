(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa1a5ee0"],{"099a":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-nav-bar"},[s("nav-bar",[s("div",{staticClass:"left",attrs:{slot:"left"},on:{click:t.goBack},slot:"left"},[s("img",{staticClass:"back-icon",attrs:{src:n("7ea1"),alt:""}})]),s("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},[t._v(" "+t._s(t.title)+" ")])])],1)},a=[],o=n("a7ac"),i={name:"MainNavBar",components:{NavBar:o["a"]},props:{title:{type:String,default:""}},data:function(){return{fromUrl:""}},beforeRouteEnter:function(t,e,n){n((function(t){t.fromUrl=e.fullPath}))},methods:{goBack:function(){this.$router.go(-1)}}},c=i,r=(n("6aec"),n("2877")),u=Object(r["a"])(c,s,a,!1,null,"779151a0",null);e["a"]=u.exports},"0c2f":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return u}));var s=n("1bab");function a(t){return Object(s["a"])({url:"/person/saveUserDetail.shtml",params:{nickName:t},method:"post"})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(s["a"])({url:"/user/sendMoRandmoCode.shtml",params:{type:t},method:"post"})}function i(t){return Object(s["a"])({url:"/user/checkMobileCodePwd.shtml",params:{code:t},method:"post"})}function c(t){return Object(s["a"])({url:"/user/randomCodeUpdateCell.shtml",params:t,method:"post"})}function r(t){return Object(s["a"])({url:"/user/updateCellByCell.shtml",params:t,method:"post"})}function u(t){return Object(s["a"])({url:"/person/updateMoPwdByPwd.shtml",params:t,method:"post"})}},"394a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modify-mobile-success"},[n("main-nav-bar",{attrs:{title:"修改绑定手机号"}}),n("div",{staticClass:"modify-mobile-success-content"},[n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"mobile-input",attrs:{type:"number",placeholder:"请输入新手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),n("div",{staticClass:"code-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"code-input",attrs:{type:"number",placeholder:"请输入短信验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),n("div",{staticClass:"get-btn",class:{disabled:t.isCount},on:{click:t.getCode}},[t._v(t._s(t.getTimes>=1?"重新获取("+t.countDown+"s)":"获取短信验证码"))])])]),n("div",{staticClass:"change-btn",on:{click:t.confirmChange}},[t._v("确认更换")]),t._m(0)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip-main"},[n("h2",[t._v("温馨提示：")]),n("p",[t._v("1.手机号绑定成功即被视为已注册；")]),n("p",[t._v("2.一个手机号仅限绑定一个唯妮海购账号；")]),n("p",[t._v("3.为保证账号安全，手机号注册后无法解除绑定，可以更换手机号。")])])}],o=(n("5319"),n("498a"),n("099a")),i=n("8d29"),c=n("0c2f"),r={name:"ModifyMobileSuccess",components:{MainNavBar:o["a"]},mixins:[i["a"]],data:function(){return{mobile:"",code:"",sign:"",countDown:60,isCount:!1,timer:null,getTimes:0}},created:function(){this.getUserMessage(),this.sign=this.$route.query.sign},methods:{confirmChange:function(){var t=this;""==this.code?this.$toast.show("输入的验证码有误"):Object(c["e"])({code:this.code,mobile:this.mobile,sign:this.sign}).then((function(e){console.log(e),e.success?t.$router.replace("/profile"):t.$toast.show(e.message,1500)})).catch((function(t){console.log(t)}))},getCode:function(){var t=this;this.isCount||(/^0?1[3|4|5|7|8][0-9]\d{8}$/.test(this.mobile.trim())?Object(c["b"])({mobile:this.mobile,sign:this.sign}).then((function(e){console.log(e),e.success?(t.countDown=60,clearInterval(t.timer),t.isCount=!0,t.getTimes++,t.timer=setInterval((function(){t.countDown--,0==t.countDown&&(t.countDown=60,clearInterval(t.timer),t.isCount=!1)}),1e3)):t.$toast.show(e.message,1500)})).catch((function(t){console.log(t)})):this.$toast.show("手机号为空或者格式不正确",1500))}}},u=r,l=(n("e434"),n("2877")),m=Object(l["a"])(u,s,a,!1,null,"7f8fbc1a",null);e["default"]=m.exports},"498a":function(t,e,n){"use strict";var s=n("23e7"),a=n("58a8").trim,o=n("e070");s({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},6892:function(t,e,n){},"6aec":function(t,e,n){"use strict";var s=n("6892"),a=n.n(s);a.a},"7ea1":function(t,e,n){t.exports=n.p+"static/img/left.2ebaad22.svg"},"87d3":function(t,e,n){},a7ac:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},a=[],o={name:"NavBar"},i=o,c=(n("aabc"),n("2877")),r=Object(c["a"])(i,s,a,!1,null,"b6e3be1a",null);e["a"]=r.exports},aa25:function(t,e,n){},aabc:function(t,e,n){"use strict";var s=n("87d3"),a=n.n(s);a.a},e070:function(t,e,n){var s=n("d039"),a=n("5899"),o="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||o[t]()!=o||a[t].name!==t}))}},e434:function(t,e,n){"use strict";var s=n("aa25"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-fa1a5ee0.9837316f.js.map