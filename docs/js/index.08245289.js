(function(e){function t(t){for(var o,l,r=t[0],s=t[1],c=t[2],d=0,p=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={index:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/x5-modal/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("e35a")},"59f1":function(e,t,n){e.exports=n.p+"img/logo.4b4be503.svg"},8594:function(e,t,n){},a7e2:function(e,t,n){"use strict";var o=n("b021"),a=n.n(o);a.a},b021:function(e,t,n){},e35a:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrapper"},[o("img",{staticClass:"logo",attrs:{src:n("59f1"),width:"300"}}),o("h1",{staticClass:"title"},[e._v("x5-Modal Example")]),o("button",{staticClass:"button",on:{click:function(t){return e.$x5.openModal("plain")}}},[e._v("Plain")]),o("button",{staticClass:"button",on:{click:function(t){return e.$x5.openModal("noButtons")}}},[e._v("No Buttons")]),o("button",{staticClass:"button",on:{click:function(t){return e.$x5.openModal("double")}}},[e._v("Double")]),o("button",{staticClass:"button",on:{click:function(t){return e.$x5.openModal("full")}}},[e._v("Full")]),o("hr"),o("p",[e._v("You can also customise modals from the open call itself:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.dataIn,expression:"dataIn"}],staticClass:"boxed",attrs:{placeholder:"Something to send",maxlength:"20"},domProps:{value:e.dataIn},on:{input:function(t){t.target.composing||(e.dataIn=t.target.value)}}}),o("button",{staticClass:"button",on:{click:e.interactive}},[e._v("Interactive")]),o("p",[e._v(" And it returned: "),o("span",{staticClass:"boxed greyed"},[e._v(e._s(e.dataOut?e.dataOut+" 😀":"Nothing returned 😥"))])]),o("hr"),o("p",[e._v("We also disable back buttons when a modal is opened.")]),o("p",[e._v("Not ideal, but without it the modal persists even when the route changes.")]),o("router-view"),o("x5-modals")],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{name:"plain"}},[n("h1",[e._v("Plain Modal")]),n("p",[e._v("This has no settings whatsoever!")])])},r=[],s={name:"PlainModal"},c=s,u=n("2877"),d=Object(u["a"])(c,l,r,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{name:"noButtons",buttons:"",permanent:""}},[n("h1",[e._v("No Buttons Modal")]),n("p",[e._v("But if there are no buttons? How do we close this??")]),n("p",[e._v(" The modal can close itself by calling "),n("code",[e._v("this.$x5.closeModal('noButtons')")]),e._v(" from a method or even "),n("code",[e._v("@click=\"$x5.closeModal('noButtons')\"")]),e._v(" straight from the button. ")]),n("p",[e._v(" It can also close itself without a name "),n("code",[e._v("$x5.closeModal()")]),e._v(" which is fine as long as you don't have another modal above it. ")]),n("button",{on:{click:function(t){return e.$x5.closeModal()}}},[e._v("Like so")]),n("p",[e._v("Phew!")])])},m=[],v={name:"NoButtonsModal"},f=v,x=Object(u["a"])(f,h,m,!1,null,null,null),_=x.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{name:"double",buttons:"Cancel",permanent:"",title:"Double Modal"}},[n("h1",[e._v("Double Modal")]),n("button",{on:{click:e.openModal2}},[e._v("Open Second Modal")])])},g=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{name:"double2",buttons:"Cancel",permanent:"",title:"Double Modal the Second"}},[n("h1",[e._v("Double Modal the Second")]),n("button",{on:{click:e.openFullModal}},[e._v("Open Full Modal")])])},O=[],M={name:"DoubleModal2",methods:{openFullModal:function(){this.$x5.openModal("full",{},4)}}},y=M,w=Object(u["a"])(y,k,O,!1,null,null,null),$=w.exports,C={name:"DoubleModal",methods:{openModal2:function(){this.$x5.openModal("double2")}},mounted:function(){this.$x5.registerModal("double2",$)}},T=C,S=Object(u["a"])(T,b,g,!1,null,null,null),E=S.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{loading:e.loading,valid:e.checked,buttons:"OKCancel",cancelText:"Don't Send",name:"full",okText:"Send",permanent:"",title:"Kitchen Sink",width:"800px","z-index":"10"}},[n("p",[e._v("Hokay so, what does this one have?")]),n("ul",[n("li",[e._v("A "),n("code",[e._v("title")]),e._v(' of "Kitchen Sink" that gives us the header bar')]),n("li",[e._v("It's "),n("code",[e._v("permanent")]),e._v("/persistant (try close it without the buttons)")]),n("li",[e._v("Being permanent/persistant also removes the close button ↗")]),n("li",[e._v("Set "),n("code",[e._v("max")]),e._v('-width of "800px" (default is "650px")')]),n("li",[n("code",[e._v("OKCancel")]),e._v(" buttons (OK and Cancel)")]),n("li",[n("code",[e._v("okText")]),e._v(' of "Send" and '),n("code",[e._v("cancelText")]),e._v(' of "Don\'t Send"')]),n("li",[e._v(" Can open other modals from an inline click command "),n("code",[e._v("@click=\"$x5.openModal('plain')\"")]),n("a",{on:{click:function(t){return e.$x5.openModal("plain")}}},[e._v("here")])]),n("li",[e._v("The "),n("code",[e._v("zIndex")]),e._v(' is set to "10" so it remains below the opened modal (default zIndex of "200")')]),n("li",[e._v("All modals have a "),n("code",[e._v("loading")]),e._v(" attribute: "),n("a",{on:{click:e.load}},[e._v("Try it")])]),n("li",[e._v("To enable the OK (Send) button the "),n("code",[e._v("valid")]),e._v(" attribute needs to be TRUE (check the checkbox)")]),n("li",[e._v(" You can also change properties on the fly using "),n("code",[e._v("$x5.editModal(name, options, data)")]),n("a",{on:{click:e.edit}},[e._v("like so")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,o=t.target,a=!!o.checked;if(Array.isArray(n)){var i=null,l=e._i(n,i);o.checked?l<0&&(e.checked=n.concat([i])):l>-1&&(e.checked=n.slice(0,l).concat(n.slice(l+1)))}else e.checked=a}}}),n("label",{attrs:{for:"checkbox"}},[e._v("Validation: "+e._s(e.checked?"Now":"Not")+" ready to send")])])},I=[],P=(n("4795"),{name:"FullModal",data:function(){return{loading:!1,checked:!1}},methods:{load:function(){var e=this;this.loading=!0,setTimeout((function(){return e.loading=!1}),2e3)},edit:function(){this.$x5.editModal("full",{title:"Bathroom Sink"})}}}),A=P,B=Object(u["a"])(A,j,I,!1,null,null,null),K=B.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{name:"interactive",title:"Interactive Modal",buttons:"OKCancel",loading:e.loading,keepOpen:""},on:{ok:e.submit,cancel:e.close}},[n("ul",[n("li",[e._v(" This component set methods for "),n("code",[e._v("@ok")]),e._v(" and "),n("code",[e._v("@cancel")]),e._v(" events $emitted from the <x5-modal> component. ")]),n("li",[e._v(" It also has the "),n("code",[e._v("loading")]),e._v(" property set from outside and simulates processing a submission when you press OK. ")])]),n("p",[e._v(" The value sent for this instance of the modal was: "),n("span",{staticClass:"boxed greyed"},[e._v(e._s(e.data?e.data+" 😀":"Oh no, it was empty 😥"))])]),e._v(" Custom data sent to this modal: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.result,expression:"result"}],staticClass:"boxed",attrs:{placeholder:"Value to return",maxlength:"20"},domProps:{value:e.result},on:{input:function(t){t.target.composing||(e.result=t.target.value)}}})])},N=[],D=(n("d3b7"),n("96cf"),n("1da1")),V={name:"InteractiveModal",props:["data"],data:function(){return{loading:!1,result:null}},methods:{close:function(){this.$x5.closeModal("interactive",this.result)},submit:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,n=new Promise((function(e){return setTimeout((function(){return e()}),2e3)})),n.then((function(){return e.close()}))["finally"]((function(){return e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},z=V,F=Object(u["a"])(z,R,N,!1,null,null,null),L=F.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x5-modal",{attrs:{name:"route",buttons:""},on:{cancel:function(t){return e.$x5.closeModal()}}},[n("h1",[e._v("Route Modal")]),n("p",[e._v(" If you press back without closing this, the modal is closed. ")]),n("hr"),n("p",[e._v(" Alternatively, if you enable "),n("code",[e._v("keepOpen")]),e._v(" on the modal (i.e. you will handle the closing) then it will stay open even with a route change. ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keepOpen,expression:"keepOpen"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.keepOpen)?e._i(e.keepOpen,null)>-1:e.keepOpen},on:{change:function(t){var n=e.keepOpen,o=t.target,a=!!o.checked;if(Array.isArray(n)){var i=null,l=e._i(n,i);o.checked?l<0&&(e.keepOpen=n.concat([i])):l>-1&&(e.keepOpen=n.slice(0,l).concat(n.slice(l+1)))}else e.keepOpen=a}}}),n("label",{attrs:{for:"checkbox"}},[e._v("keepOpen")]),n("hr"),n("p",[e._v(" This modal also uses the "),n("code",[e._v("$x5.editModal()")]),e._v(" function to change the "),n("code",[e._v("keepOpen")]),e._v(" flag of the modal for demonstration purposes. ")])])},H=[],q={name:"RouteModal",data:function(){return{keepOpen:!1}},watch:{keepOpen:function(){this.$x5.editModal("route",{keepOpen:this.keepOpen})}}},J=q,Y=Object(u["a"])(J,G,H,!1,null,null,null),U=Y.exports,W={name:"Example-App",data:function(){return{dataOut:null,dataIn:null}},methods:{interactive:function(){var e=this;this.$x5.openModal("interactive",{},this.dataIn).then((function(t){e.dataOut=t}))}},created:function(){this.$x5.registerModal("full",K),this.$x5.registerModal("plain",p),this.$x5.registerModal("double",E),this.$x5.registerModal("noButtons",_),this.$x5.registerModal("interactive",L),this.$x5.registerModal("route",U)}},Q=W,X=(n("a7e2"),Object(u["a"])(Q,a,i,!1,null,null,null)),Z=X.exports,ee=n("2f62");o["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ne=n("8c4f"),oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Route A")]),n("router-link",{staticClass:"button",attrs:{tag:"button",to:"/b"}},[e._v("Goto Route B")])],1)},ae=[],ie={},le=Object(u["a"])(ie,oe,ae,!1,null,null,null),re=le.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Route B")]),n("button",{staticClass:"button",on:{click:function(t){return e.$x5.openModal("route")}}},[e._v("Open Modal")])])},ce=[],ue={},de=Object(u["a"])(ue,se,ce,!1,null,null,null),pe=de.exports;o["a"].use(ne["a"]);var he=new ne["a"]({mode:"history",base:"/x5-modal/",routes:[{path:"",alias:"/a",component:re},{path:"/b",component:pe}],scrollBehavior:function(e,t,n){return e.hash?e.hash:n||{x:0,y:0}}}),me=he,ve=(n("4de4"),n("7db0"),n("4160"),n("b0c0"),n("159b"),n("5530")),fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:"z-index:"+e.zIndex},[n("transition-group",{attrs:{name:"x5-m-fade",mode:"out-in",tag:"div"}},e._l(e.modals,(function(e){return n(e.component,{key:e.name,tag:"component",attrs:{data:e.data}})})),1)],1)},xe=[],_e=(n("a9e3"),{name:"x5-M-Component",props:{zIndex:{type:[String,Number],default:200}},computed:{modals:function(){return this.$store.getters["x5/m/allOpen"]}}}),be=_e,ge=Object(u["a"])(be,fe,xe,!1,null,null,null),ke=ge.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"x5-m-wrapper "+(e.isActive?"x5-m-overlay":""),on:{click:function(t){return t.target!==t.currentTarget?null:e.onOverlay(t)}}},[n("div",{class:"x5-m-modal "+(this.attention?"x5-m-attention":""),style:"max-width:"+e.options.width},[e.options.title?n("div",{staticClass:"x5-m-header"},[n("div",{staticClass:"x5-m-title",domProps:{innerHTML:e._s(e.options.title)}}),e.options.permanent?e._e():n("span",{staticClass:"x5-m-close",on:{click:function(t){return t.target!==t.currentTarget?null:e.cancel(t)}}},[e._v("❌")])]):e._e(),n("div",{staticClass:"x5-m-content"},[e._t("default")],2),e.options.buttons?n("div",{staticClass:"x5-m-footer"},[e.showCancel?n("button",{attrs:{disabled:e.options.loading},on:{click:e.cancel}},[e._v(e._s(e._cancelText))]):e._e(),e.showOK?n("button",{staticClass:"x5-m-ok",attrs:{disabled:!e.options.valid||e.options.loading},on:{click:e.ok}},[e._v(" "+e._s(e.options.okText)+" ")]):e._e()]):e._e(),n("transition",{attrs:{name:"x5-m-fade"}},[e.options.loading?n("div",{staticClass:"x5-m-loading-wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.denyClose(t)}}},[n("div",{staticClass:"x5-m-loading"},[n("div",{staticClass:"x5-m-spinner"})])]):e._e()])],1)])},Me=[],ye=(n("caad"),n("2532"),["OK","Cancel","OKCancel"]),we={name:"x5-M-Component",props:{buttons:{type:String,default:"OK"},cancelText:{type:String,default:"Cancel"},cancelValue:{default:!1},keepOpen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},name:{type:String,required:!0},okText:{type:String,default:"OK"},okValue:{default:!0},permanent:{type:Boolean,default:!1},title:{type:String,default:null},valid:{type:Boolean,default:!0},width:{type:String,default:"650px"}},data:function(){return{attention:!1}},computed:{modal:function(){var e=this;return this.$store.getters["x5/m/allOpen"].find((function(t){return t.name===e.name}))},options:function(){return this.modal?Object(ve["a"])({},this.$props,{},this.modal.options):{}},_cancelText:function(){return"Cancel"===this.options.buttons&&"Cancel"===this.options.cancelText?"Close":this.options.cancelText},showCancel:function(){return this.options.buttons.includes("Cancel")},showOK:function(){return this.options.buttons.includes("OK")},isActive:function(){return this.$store.getters["x5/m/active"]===this.name}},methods:{close:function(e){this.$x5.closeModal(this.name,e)},cancel:function(){this.$emit("cancel"),this.options.keepOpen||this.close(this.options.cancelValue)},denyClose:function(){var e=this;this.attention=!0,setTimeout((function(){return e.attention=!1}),150)},onOverlay:function(){!this.isActive||this.options.loading||this.options.permanent?this.denyClose():this.cancel()},ok:function(){this.$emit("ok"),this.options.keepOpen||this.close(this.options.okValue)}},mounted:function(){if(this.options.buttons&&!ye.includes(this.options.buttons))throw new Error("Invalid buttons property '".concat(ye,"' used in x5Modal Plugin."))},beforeDestroy:function(){this.isActive&&this.$x5.closeModal(this.name)},watch:{$route:function(){this.options.keepOpen||this.$x5.closeModal(this.name)}}},$e=we,Ce=Object(u["a"])($e,Oe,Me,!1,null,null,null),Te=Ce.exports,Se=(n("c740"),n("a434"),{namespaced:!0,state:{registered:{},open:[]},getters:{active:function(e){return e.open.length>0?e.open[e.open.length-1].name:null},allOpen:function(e){return e.open},allRegistered:function(e){return e.registered}},mutations:{OPEN:function(e,t){var n=t.name,o=t.options,a=t.data,i=t.resolve,l=e.registered[n];e.open.push({name:n,options:o,data:a,resolve:i,component:l})},EDIT:function(e,t){var n=t.name,o=t.options,a=t.data,i=e.open.findIndex((function(e){return e.name===n})),l=Object(ve["a"])({},e.open[i].options,{},o),r=a||e.open[i].data;e.open.splice(i,1,Object(ve["a"])({},e.open[i],{options:l,data:r}))},CLOSE:function(e,t){return e.open=e.open.filter((function(e){return e.name!==t}))},REGISTER:function(e,t){var n=t.name,o=t.component;return e.registered[n]=o}},actions:{register:function(e,t){var n=e.commit;return n("REGISTER",t)},open:function(e,t){var n=e.commit;return n("OPEN",t)},edit:function(e,t){var n=e.commit;return n("EDIT",t)},close:function(e,t){var n=e.commit;return n("CLOSE",t)}}}),Ee=Se,je=(n("8594"),function(e){}),Ie=function(e,t){if(!t)throw new Error("A Vuex store is required by the x5Modal plugin");t.registerModule("x5/m",Ee),e.component("x5Modal",Te),e.component("x5Modals",ke);var n=function(e,n){var o=!!t.getters["x5/m/allRegistered"][e];o&&je("Modal '".concat(e,"' already registered; it will be replaced.")),t.dispatch("x5/m/register",{name:e,component:n})},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!!t.getters["x5/m/allRegistered"][e];if(!a)return je("Modal '".concat(e,"' not registered."));var i,l=!!t.getters["x5/m/allOpen"].find((function(t){return t.name===e}));if(l)return je("Modal '".concat(e,"' already open."));var r=new Promise((function(e){return i=e}));return t.dispatch("x5/m/open",{name:e,options:n,data:o,resolve:i}),r},a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=!!t.getters["x5/m/allOpen"].find((function(t){return t.name===e}));if(!a)return je("Modal '".concat(e,"' cannot be edited until it is open."));t.dispatch("x5/m/edit",{name:e,options:n,data:o})},i=function(e,n){e||(e=t.getters["x5/m/active"]);var o=t.getters["x5/m/allOpen"].find((function(t){return t.name===e}));if(!o)return je("Modal '".concat(e,"' not found."));o.resolve(n),t.dispatch("x5/m/close",e)},l=function(){return t.getters["x5/m/allOpen"].filter((function(e){return!e.options.keepOpen})).forEach((function(e){je("Modal '".concat(e.name,"' force closed.")),i(e.name)}))};e.prototype.$x5=Object(ve["a"])({},e.prototype.$x5,{registerModal:n,openModal:o,editModal:a,closeModal:i,closeModals:l})};o["a"].use(Ie,te),o["a"].config.productionTip=!1,new o["a"]({router:me,store:te,render:function(e){return e(Z)}}).$mount("#app")}});
//# sourceMappingURL=index.08245289.js.map