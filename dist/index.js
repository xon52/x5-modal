!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["x5-modal"]=t():e["x5-modal"]=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],p=n[l]||0,c="".concat(l," ").concat(p);n[l]=p+1;var d=s(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(u)):i.push({identifier:c,updater:h(u,t),references:1}),o.push(c)}return o}function p(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,x=0;function h(e,t){var n,o,r;if(t.singleton){var a=x++;n=f||(f=p(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=p(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);i[r].references--}for(var a=l(e,t),p=0;p<n.length;p++){var c=s(n[p]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"@keyframes x5-m-shake{14%,70%{transform:translate(-49%, -49%)}28%,56%,84%{transform:translate(-49%, -51%)}42%,98%{transform:translate(-51%, -51%)}}@keyframes x5-m-fade{0%{opacity:0}100%{opacity:1}}.x5-m-fade-enter-active{animation:x5-m-fade 0.3s}.x5-m-fade-leave-active{animation:x5-m-fade 0.3s reverse}@keyframes spin{to{transform:rotate(360deg)}}.x5-m-spinner{display:inline-block;width:150px;height:150px;border:20px solid #fff4;border-radius:50%;border-top-color:#fff;animation:spin 1s ease-in-out infinite}.x5-m-wrapper{height:100%;left:0;position:fixed;top:0;width:100%;text-align:initial}.x5-m-wrapper.x5-m-overlay{background-color:#0006;z-index:5}.x5-m-wrapper .x5-m-loading-wrapper{background-color:#0006;border-radius:10px;height:100%;left:0;position:absolute;top:0;width:100%}.x5-m-wrapper .x5-m-loading{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}.x5-m-wrapper .x5-m-modal{background-color:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.33);left:50%;position:fixed;top:50%;transform:translate(-50%, -50%);transition:all 0.3s ease;width:100%}.x5-m-wrapper .x5-m-modal.x5-m-attention{animation:x5-m-shake 150ms}.x5-m-wrapper .x5-m-modal .x5-m-header{position:relative;font-size:22px;border-radius:10px 10px 0 0;font-weight:bold;background:#fafafa;border-bottom:#eee 1px solid;color:#333;padding:20px 54px 16px 24px}.x5-m-wrapper .x5-m-modal .x5-m-header .x5-m-close{font-size:14px;position:absolute;top:50%;transform:translateY(-50%);right:24px;color:transparent;cursor:pointer;text-shadow:0 0 0 #999}.x5-m-wrapper .x5-m-modal .x5-m-header .x5-m-close:hover{text-shadow:0 0 0 #666}.x5-m-wrapper .x5-m-modal .x5-m-content{padding:16px 24px;max-height:70vh;overflow:auto}.x5-m-wrapper .x5-m-modal .x5-m-footer{background:#fbfbfb;border-top:#eee 1px solid;border-radius:0 0 10px 10px;text-align:end}.x5-m-wrapper .x5-m-modal .x5-m-footer button{background-color:transparent;border:0 solid #4442;color:#666;cursor:pointer;font-size:16px;font-weight:bold;height:40px;margin:4px 20px 4px 0;padding:1px 6px;min-width:80px}.x5-m-wrapper .x5-m-modal .x5-m-footer button.x5-m-ok{color:dodgerblue;border-color:#1e90ff80}.x5-m-wrapper .x5-m-modal .x5-m-footer button.x5-m-ok:hover{background-color:#68b1fa42}.x5-m-wrapper .x5-m-modal .x5-m-footer button:hover{border-width:1px}.x5-m-wrapper .x5-m-modal .x5-m-footer button:disabled{color:#ccc;border-width:0;cursor:unset}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{style:"z-index:"+this.zIndex},[t("transition-group",{attrs:{name:"x5-m-fade",mode:"out-in",tag:"div"}},this._l(this.modals,(function(e){return t(e.component,{key:e.name,tag:"component",attrs:{data:e.data}})})),1)],1)};function r(e,t,n,o,r,a,i,s){var l,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),o&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},p._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(p.functional){p._injectStyles=l;var c=p.render;p.render=function(e,t){return l.call(t),c(e,t)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:p}}o._withStripped=!0;var a=r({name:"x5-M-Component",props:{zIndex:{type:[String,Number],default:200}},computed:{modals(){return this.$store.getters["x5/m/allOpen"]}}},o,[],!1,null,null,null);a.options.__file="src/Component.vue";var i=a.exports,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"x5-m-wrapper "+(e.isActive?"x5-m-overlay":""),on:{click:function(t){return t.target!==t.currentTarget?null:e.onOverlay(t)}}},[n("div",{class:"x5-m-modal "+(this.attention?"x5-m-attention":""),style:"max-width:"+e.options.width},[e.options.title?n("div",{staticClass:"x5-m-header"},[n("div",{domProps:{innerHTML:e._s(e.options.title)}}),e._v(" "),e.options.permanent?e._e():n("span",{staticClass:"x5-m-close",on:{click:function(t){return t.target!==t.currentTarget?null:e.cancel(t)}}},[e._v("❌")])]):e._e(),e._v(" "),n("div",{staticClass:"x5-m-content"},[e._t("default")],2),e._v(" "),e.options.buttons?n("div",{staticClass:"x5-m-footer"},[e.showCancel?n("button",{attrs:{disabled:e.options.loading},on:{click:e.cancel}},[e._v(e._s(e.options.cancelText))]):e._e(),e._v(" "),e.showOK?n("button",{staticClass:"x5-m-ok",attrs:{disabled:!e.options.valid||e.options.loading},on:{click:e.ok}},[e._v("\n        "+e._s(e.options.okText)+"\n      ")]):e._e()]):e._e(),e._v(" "),n("transition",{attrs:{name:"x5-m-fade"}},[e.options.loading?n("div",{staticClass:"x5-m-loading-wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.denyClose(t)}}},[n("div",{staticClass:"x5-m-loading"},[n("div",{staticClass:"x5-m-spinner"})])]):e._e()])],1)])};s._withStripped=!0;const l=["OK","Cancel","OKCancel"];var p=r({name:"x5-M-Component",props:{buttons:{type:String,default:"OK"},cancelText:{type:String,default:"Cancel"},cancelValue:{default:!1},keepOpen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},name:{type:String,required:!0},okText:{type:String,default:"OK"},okValue:{default:!0},permanent:{type:Boolean,default:!1},title:{type:String,default:null},valid:{type:Boolean,default:!0},width:{type:String,default:"650px"}},data:()=>({attention:!1}),computed:{modal(){return this.$store.getters["x5/m/allOpen"].find(e=>e.name===this.name)},options(){return this.modal?{...this.$props,...this.modal.options}:{}},showCancel(){return this.options.buttons.includes("Cancel")},showOK(){return this.options.buttons.includes("OK")},isActive(){return this.$store.getters["x5/m/active"]===this.name}},methods:{close(e){this.$x5.closeModal(this.name,e)},cancel(){this.options.keepOpen?this.$emit("cancel"):this.close(this.options.cancelValue)},denyClose(){this.attention=!0,setTimeout(()=>this.attention=!1,150)},onOverlay(){!this.isActive||this.options.loading||this.options.permanent?this.denyClose():this.cancel()},ok(){this.options.keepOpen?this.$emit("ok"):this.close(this.options.okValue)}},mounted(){if(this.options.buttons&&!l.includes(this.options.buttons))throw new Error(`Invalid buttons property '${l}' used in x5Modal Plugin.`)},beforeDestroy(){this.isActive&&this.$x5.closeModal(this.name)},watch:{$route(e,t){this.options.keepOpen||this.$x5.closeModal(this.name)}}},s,[],!1,null,null,null);p.options.__file="src/Modal.vue";var c=p.exports;var d={namespaced:!0,state:{registered:{},open:[]},getters:{active:e=>e.open.length>0?e.open[e.open.length-1].name:null,allOpen:e=>e.open,allRegistered:e=>e.registered},mutations:{OPEN:(e,{name:t,options:n,data:o,resolve:r})=>{let a=e.registered[t];e.open.push({name:t,options:n,data:o,resolve:r,component:a})},EDIT:(e,{name:t,options:n,data:o})=>{let r=e.open.findIndex(e=>e.name===t),a={...e.open[r].options,...n},i=o||e.open[r].data;e.open.splice(r,1,{...e.open[r],options:a,data:i})},CLOSE:(e,t)=>e.open=e.open.filter(e=>e.name!==t),REGISTER:(e,{name:t,component:n})=>e.registered[t]=n},actions:{register:({commit:e},t)=>e("REGISTER",t),open:({commit:e},t)=>e("OPEN",t),edit:({commit:e},t)=>e("EDIT",t),close:({commit:e},t)=>e("CLOSE",t)}};n(0);t.default=function(e,t){if(!t)throw new Error("A Vuex store is required by the x5Modal plugin");t.registerModule("x5/m",d),e.component("x5Modal",c),e.component("x5Modals",i);const n=(e,n)=>{e||(e=t.getters["x5/m/active"]);let o=t.getters["x5/m/allOpen"].find(t=>t.name===e);o&&(o.resolve(n),t.dispatch("x5/m/close",e))};e.prototype.$x5={...e.prototype.$x5,registerModal:(e,n)=>{t.getters["x5/m/allRegistered"][e];t.dispatch("x5/m/register",{name:e,component:n})},openModal:(e,n={},o=null)=>{if(!!!t.getters["x5/m/allRegistered"][e])return;if(!!t.getters["x5/m/allOpen"].find(t=>t.name===e))return;let r;const a=new Promise(e=>r=e);return t.dispatch("x5/m/open",{name:e,options:n,data:o,resolve:r}),a},editModal:(e,n={},o=null)=>{!!t.getters["x5/m/allOpen"].find(t=>t.name===e)&&t.dispatch("x5/m/edit",{name:e,options:n,data:o})},closeModal:n,closeModals:()=>t.getters["x5/m/allOpen"].filter(e=>!e.options.keepOpen).forEach(e=>{e.name,n(e.name)})}}}])}));