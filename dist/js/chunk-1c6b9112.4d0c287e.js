(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c6b9112"],{1294:function(t,s,e){"use strict";var a=e("60a7"),r=e.n(a);r.a},"1fae":function(t,s,e){"use strict";var a=e("3c1c"),r=e.n(a);r.a},"3c1c":function(t,s,e){},5899:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,s,e){var a=e("1d80"),r=e("5899"),i="["+r+"]",n=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(s){var e=String(a(s));return 1&t&&(e=e.replace(n,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},"60a7":function(t,s,e){},7156:function(t,s,e){var a=e("861d"),r=e("d2bb");t.exports=function(t,s,e){var i,n;return r&&"function"==typeof(i=s.constructor)&&i!==e&&a(n=i.prototype)&&n!==e.prototype&&r(t,n),t}},a673:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"install-container"},[e("div",{staticClass:"seach-bar"},[e("van-search",{attrs:{placeholder:"请输入搜索关键词"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),e("div",{staticClass:"content-tabs"},[e("div",{staticClass:"cate-bar"},t._l(t.actionBar,(function(s,a){return e("div",{key:s.id,staticClass:"bar-item",class:{active:t.curIndex===a},on:{click:function(s){return t.changeBar(a)}}},[e("span",[t._v(t._s(s.name))])])})),0),e("Card",{attrs:{tabs:t.tabs,curIndex:t.curIndex}})],1)])},r=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-box"},t._l(t.tabs,(function(s,a){return a===t.curIndex?e("div",{key:a},[t._l(s.list,(function(s,a){return[e("div",{staticClass:"box-item",on:{click:function(e){return t.clickToDetail(s.id)}}},[[e("div",{staticClass:"price-date"},[e("div",{staticClass:"bill-price"},[e("span",[t._v(t._s(s.price))]),e("span",[t._v("RMB")])]),e("div",{staticClass:"bill-date"},[t._v(" "+t._s(s.order_date)+" ")])]),e("div",{staticClass:"bill-order-status"},[e("div",{staticClass:"bill-order"},[t._v(t._s(s.order_num))]),e("div",{staticClass:"bill-status"},[t._v(" 状态："),s.status?t._e():e("span",[t._v("未知")]),"1"===s.status?e("span",[t._v("待确认")]):t._e(),"2"===s.status?e("span",[t._v("待安装")]):t._e(),"3"===s.status?e("span",[t._v("待审核")]):t._e(),"4"===s.status?e("span",[t._v("驳回")]):t._e(),"5"===s.status?e("span",[t._v("已结算")]):t._e()])]),e("div",{staticClass:"bill-info"},[e("div",{staticClass:"info-item"},[e("span",{staticClass:"info-title"},[t._v("产品：")]),e("span",{staticClass:"info-content"},[t._v(t._s(s.name))])]),e("div",{staticClass:"info-item"},[e("span",{staticClass:"info-title"},[t._v("车型：")]),e("span",{staticClass:"info-content"},[t._v(t._s(s.type))])]),e("div",{staticClass:"info-item"},[e("span",{staticClass:"info-title"},[t._v("客服：")]),e("span",{staticClass:"info-content"},[t._v(t._s(s.servicer))])]),e("div",{staticClass:"info-item"},[e("span",{staticClass:"info-title"},[t._v("安装店：")]),e("span",{staticClass:"info-content"},[t._v(t._s(s.shop)+" "+t._s(s.shop_assit))])]),t._m(0,!0)]),"4"===s.status?e("div",{staticClass:"re-reason"},[e("span",{staticClass:"type"},[t._v("*驳回原因：")]),t._v(" "),e("span",[t._v(t._s(s.re_msg))]),t._v(" "),e("span",{staticClass:"type"},[t._v(t._s(s.re_type))])]):t._e()],"5"===s.status?e("div",{staticClass:"rate",on:{click:function(s){return s.stopPropagation(),t.clickRate(a)}}},[t._v("评价")]):t._e()],2),t._l(s.rate,(function(r){return t.curRate===a&&t.showRate?e("div",{key:s.id,staticClass:"rate-content"},[e("div",{staticClass:"star"},[e("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#FF5861"},model:{value:r.rate_star,callback:function(s){t.$set(r,"rate_star",s)},expression:"rate.rate_star"}})],1),e("div",{staticClass:"rate-text"},[e("span",[t._v(t._s(r.content))])]),e("div",{staticClass:"img-list"},t._l(r.imgList,(function(t){return e("div",{staticClass:"img-item"},[e("img",{attrs:{src:t,alt:""}})])})),0)]):t._e()}))]}))],2):t._e()})),0)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-item"},[e("span",{staticClass:"info-title"},[t._v("说明：")]),e("span",{staticClass:"info-content"},[t._v("客服留言")])])}],c=(e("a9e3"),{name:"InstallCard",data:function(){return{showRate:!1,rate:3.5,value:"",curRate:0}},methods:{clickRate:function(t){console.log(t),this.curRate=t,this.showRate=!this.showRate},clickToDetail:function(t){this.$router.push("/order-detail/"+t)}},props:{tabs:{type:Array},curIndex:{type:Number}}}),o=c,p=(e("1fae"),e("2877")),d=Object(p["a"])(o,i,n,!1,null,"a8772368",null),_=d.exports,u={name:"Install",data:function(){return{showRate:!0,rate:3.5,value:"",actionBar:[{id:"1",name:"全部"},{id:"2",name:"待确认"},{id:"3",name:"待安装"},{id:"4",name:"待审核"},{id:"5",name:"驳回"},{id:"6",name:"已结算"}],tabs:[{list:[{id:"1",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"1",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"2",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"1",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""}]},{list:[{id:"2",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"前途车灯升级服务店",shop_assit:"朱汉振",status:"1",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"3",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"1",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"4",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"1",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""}]},{list:[{id:"4",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"2",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"5",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"2",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"6",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"2",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""}]},{list:[{id:"4",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"3",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"5",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"3",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""},{id:"6",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"3",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:""}]},{list:[{id:"7",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"4",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"未安装",re_type:"已安装被驳回"},{id:"8",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"4",price:800,order_num:3201,order_date:"2019.09.08",msg:"客服发送说明要求",re_msg:"客户要求临时取消安装",re_type:"待安装被驳回"},{id:"9",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"朱汉振",status:"4",price:800,order_num:6208,order_date:"2019.09.08",msg:"客服留言",re_msg:"未安装",re_type:"已安装被驳回"}]},{list:[{id:"10",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"5",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:"",rate:[{id:"1",rate_star:4.5,content:"买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",imgList:["https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg","https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg","https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=094e628b0824ab18e416e63505fbe69a/f9198618367adab411c59cee8ad4b31c8701e402.jpg"]}]},{id:"11",name:"征服者",type:"别克2017君威1.5t精英版",servicer:"安亿仕13755555555",shop:"阿帕斯灯(凯斯店)",shop_assit:"姜卫卫",status:"5",price:800,order_num:5502,order_date:"2019.09.08",msg:"客服留言",re_msg:"",re_type:"",rate:[{id:"1",rate_star:4.5,content:"买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",imgList:["https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"]}]}]}],curIndex:0}},components:{Card:_},methods:{changeBar:function(t){this.curIndex=t}}},l=u,m=(e("1294"),Object(p["a"])(l,a,r,!1,null,"caed7d38",null));s["default"]=m.exports},a9e3:function(t,s,e){"use strict";var a=e("83ab"),r=e("da84"),i=e("94ca"),n=e("6eeb"),c=e("5135"),o=e("c6b6"),p=e("7156"),d=e("c04e"),_=e("d039"),u=e("7c73"),l=e("241c").f,m=e("06cf").f,v=e("9bf2").f,f=e("58a8").trim,h="Number",g=r[h],b=g.prototype,y=o(u(b))==h,C=function(t){var s,e,a,r,i,n,c,o,p=d(t,!1);if("string"==typeof p&&p.length>2)if(p=f(p),s=p.charCodeAt(0),43===s||45===s){if(e=p.charCodeAt(2),88===e||120===e)return NaN}else if(48===s){switch(p.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+p}for(i=p.slice(2),n=i.length,c=0;c<n;c++)if(o=i.charCodeAt(c),o<48||o>r)return NaN;return parseInt(i,a)}return+p};if(i(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var I,k=function(t){var s=arguments.length<1?0:t,e=this;return e instanceof k&&(y?_((function(){b.valueOf.call(e)})):o(e)!=h)?p(new g(C(s)),e,k):C(s)},x=a?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)c(g,I=x[N])&&!c(k,I)&&v(k,I,m(g,I));k.prototype=b,b.constructor=k,n(r,h,k)}}}]);
//# sourceMappingURL=chunk-1c6b9112.4d0c287e.js.map