"use strict";(self["webpackChunksmart_mall"]=self["webpackChunksmart_mall"]||[]).push([[880],{9880:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("van-nav-bar",{attrs:{title:"用户登录","left-text":"返回","left-arrow":"","right-text":"主页"},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}}),e._m(0),t("div",{staticClass:"content"},[t("div",{staticClass:"inputbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})]),t("div",{staticClass:"inputbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputPicCode,expression:"inputPicCode"}],attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.inputPicCode},on:{input:function(t){t.target.composing||(e.inputPicCode=t.target.value)}}}),e.picUrl?t("img",{attrs:{src:e.picUrl,title:"点击切换图片"},on:{click:e.getPic}}):e._e()]),t("div",{staticClass:"inputbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.msgCode,expression:"msgCode"}],attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:e.msgCode},on:{input:function(t){t.target.composing||(e.msgCode=t.target.value)}}}),t("div",{staticClass:"send",on:{click:e.sendMsg}},[e._v("发送验证码"+e._s(null===e.timer.id?"":e.timer.second))])])]),t("van-button",{staticClass:"login",attrs:{type:"primary",block:!0,width:"100px"},on:{click:e.login}},[e._v("登录")])],1)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"top"},[t("h3",[e._v("手机号登录")]),t("p",[e._v("未注册的手机号登录后自动注册")])])}],o=(i(4114),i(7149)),a=i(8393),r=i(4341),l={name:"LoginIndex",data(){return{picUrl:"",picCode:"",inputPicCode:"",phoneNumber:"",msgCode:"",timer:{id:null,maxSecond:60,second:60}}},created(){this.getPic()},destroyed(){clearInterval(this.timer.id)},methods:{onClickLeft(){this.$router.go(-1)},onClickRight(){this.$router.push("/home")},async getPic(){const{data:{base64:e,key:t},status:i}=await(0,o.p)();this.picUrl=e,this.picCode=t,200===i&&(0,a.A)({message:"刷新成功"})},async sendMsg(){if(!1!==this.validateBeforeSendMsg()&&null===this.timer.id){const e=await(0,o.qG)(this.inputPicCode,this.picCode,this.phoneNumber);if(200!==e.status)return void a.A.fail({message:"发送失败"});a.A.success({message:"发送成功"}),(0,r.A)({message:`你的验证码为:${e.message}`,type:"success",duration:4e3}),this.timer.id=setInterval((()=>{this.timer.second--,0===this.timer.second&&(clearInterval(this.timer.id),this.timer.id=null,this.timer.second=this.timer.maxSecond)}),1e3)}},validateBeforeSendMsg(){return""===this.phoneNumber||11!==this.phoneNumber.length?(a.A.fail({message:"手机号不正确"}),!1):""!==this.inputPicCode&&4===this.inputPicCode.length||(a.A.fail({message:"验证码不正确"}),!1)},async login(){if(""===this.phoneNumber||11!==this.phoneNumber.length)return a.A.fail({message:"手机号不正确"}),!1;if(""===this.inputPicCode||4!==this.inputPicCode.length)return a.A.fail({message:"验证码不正确"}),!1;if(""===this.msgCode)return a.A.fail({message:"验证码不正确"}),!1;const e=await(0,o.iD)(this.phoneNumber,this.msgCode);return 200===e.status?(a.A.success({message:"登录成功"}),this.$store.commit("user/setUserInfo",e.data),void 0===this.$route.query.goodsId?this.$router.push("/home"):this.$router.replace(`/product?goodsId=${this.$route.query.goodsId}`)):a.A.fail({message:"登录失败"}),!0}}},c=l,u=i(1656),d=(0,u.A)(c,s,n,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=880.0764aba4.js.map