(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03b2ddff"],{"3b8d":function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("795b"),o=r.n(n);function a(t,e,r,n,a,i,c){try{var u=t[i](c),s=u.value}catch(h){return void r(h)}u.done?e(s):o.a.resolve(s).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new o.a(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}},"3d16":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ChangePassword"},[r("div",{staticClass:"list"},[r("div",{staticClass:"item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",placeholder:"填写手机号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),r("button",{staticClass:"code font-color-red",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:t.code}},[t._v("\n        "+t._s(t.text)+"\n      ")])])]),r("div",{staticClass:"confirmBnt bg-color-red",on:{click:t.confirm}},[t._v("确认绑定")])])},o=[],a=(r("a481"),r("96cf"),r("3b8d")),i=r("2f62"),c=r("f750"),u=r("61f7"),s=r("cba2"),h=r("c24f"),l={name:"BindingPhone",components:{},props:{},data:function(){return{captcha:"",phone:""}},mixins:[c["a"]],computed:Object(i["b"])(["userInfo"]),mounted:function(){},methods:{confirm:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,r,n,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,r=e.phone,n=e.captcha,t.prev=2,t.next=5,e.$validator({phone:[Object(u["b"])(u["b"].message("手机号码")),Object(u["a"])(u["a"].message())],captcha:[Object(u["d"])(u["d"].message("验证码")),Object(u["a"])(u["a"].message("验证码"))]}).validate({phone:r,captcha:n});case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](2),t.abrupt("return",Object(s["b"])(t.t0));case 10:Object(h["a"])({phone:this.phone,captcha:this.captcha}).then(function(t){void 0!==t.data&&t.data.is_bind?e.$dialog.confirm({mes:t.msg,opts:[{txt:"确认绑定",color:!1,callback:function(){Object(h["a"])({phone:o.phone,captcha:o.captcha,step:1}).then(function(t){e.$dialog.success(t.msg).then(function(){e.$router.replace({name:"PersonalData"})})}).catch(function(t){e.$dialog.error(t.msg).then(function(){e.$router.replace({name:"PersonalData"})})})}},{txt:"取消",color:!1,callback:function(){e.$dialog.error("已取消绑定").then(function(){e.$router.replace({name:"PersonalData"})})}}]}):e.$dialog.success(t.msg).then(function(){e.$router.replace({name:"PersonalData"})})}).catch(function(t){e.$dialog.error(t.msg)});case 11:case"end":return t.stop()}},t,this,[[2,7]])}));function e(){return t.apply(this,arguments)}return e}(),code:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,r=e.phone,t.prev=2,t.next=5,e.$validator({phone:[Object(u["d"])(u["d"].message("手机号码")),Object(u["b"])(u["b"].message())]}).validate({phone:r});case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](2),t.abrupt("return",Object(s["b"])(t.t0));case 10:Object(h["Q"])({phone:r}).then(function(t){e.$dialog.success(t.msg),e.sendCode()}).catch(function(t){e.$dialog.error(t.msg)});case 11:case"end":return t.stop()}},t,this,[[2,7]])}));function e(){return t.apply(this,arguments)}return e}()}},f=l,p=r("2877"),d=Object(p["a"])(f,n,o,!1,null,null,null);e["default"]=d.exports},"61f7":function(t,e,r){"use strict";r.d(e,"d",function(){return i}),r.d(e,"a",function(){return l}),r.d(e,"b",function(){return g});var n=r("bd86"),o=(r("ac6a"),r("456d"),r("cebc")),a=(r("a481"),function(t,e){t.message=function(t){return e.replace("%s",t||"")}});function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o["a"])({required:!0,message:t,type:"string"},e)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o["a"])({type:"url",message:t},e)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o["a"])({type:"email",message:t},e)}function s(t){return b.pattern(/^[\w]+$/,t)}function h(t){return b.pattern(/^[\w\d_-]+$/,t)}function l(t){return b.pattern(/^[\w\d]+$/,t)}function f(t){return b.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}function p(t){return b.pattern(/^[\u4e00-\u9fa5]+$/,t)}function d(t){return b.pattern(/^[\u4e00-\u9fa5\w]+$/,t)}function v(t){return b.pattern(/^[\u4e00-\u9fa5\w\d]+$/,t)}function m(t){return b.pattern(/^[\u4e00-\u9fa5\w\d-_]+$/,t)}function g(t){return b.pattern(/^1(3|4|5|7|8|9|6)\d{9}$/i,t)}a(i,"请输入%s"),a(c,"请输入正确的链接"),a(u,"请输入正确的邮箱地址"),a(s,"%s必须是字母"),a(h,"%s只能包含由字母、数字，以及 - 和 _"),a(l,"%s只能包含字母、数字"),a(f,"%s格式不正确"),a(p,"%s只能是汉字"),a(d,"%s只能包含汉字、字母"),a(v,"%s只能包含汉字、字母和数字"),a(m,"%s只能包含由汉字、字母、数字，以及 - 和 _"),a(g,"请输入正确的手机号码");var y={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"},b=Object.keys(y).reduce(function(t,e){return t[e]=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="range"===e?{min:t[0],max:t[1]}:Object(n["a"])({},e,t);return Object(o["a"])({message:r.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},i,a)},a(t[e],y[e]),t},{});e["c"]=b},"795b":function(t,e,r){t.exports=r("696e")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=L(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var h="suspendedStart",l="suspendedYield",f="executing",p="completed",d={};function v(){}function m(){}function g(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,a)&&(y=w);var x=g.prototype=v.prototype=Object.create(y);function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(h).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,i)})}i(c.arg)}var r;function o(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=o}function L(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return C()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=$(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function $(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,$(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[i]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,o){var a=new j(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},f750:function(t,e,r){"use strict";e["a"]={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var r=setInterval(function(){e-=1,e<0&&clearInterval(r),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")},1e3)}}}}}}]);
//# sourceMappingURL=chunk-03b2ddff.52eb72a0.js.map