(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd8bc"],{"829e":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("x5-modal",{attrs:{name:"route",buttons:""},on:{cancel:function(n){return e.$x5.closeModal()}}},[t("h1",[e._v("Route Modal")]),t("p",[e._v(" If you press back without closing this, the modal is closed. ")]),t("hr"),t("p",[e._v(" Alternatively, if you enable "),t("code",[e._v("keepOpen")]),e._v(" on the modal (i.e. you will handle the closing) then it will stay open even with a route change. ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.keepOpen,expression:"keepOpen"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.keepOpen)?e._i(e.keepOpen,null)>-1:e.keepOpen},on:{change:function(n){var t=e.keepOpen,o=n.target,a=!!o.checked;if(Array.isArray(t)){var p=null,c=e._i(t,p);o.checked?c<0&&(e.keepOpen=t.concat([p])):c>-1&&(e.keepOpen=t.slice(0,c).concat(t.slice(c+1)))}else e.keepOpen=a}}}),t("label",{attrs:{for:"checkbox"}},[e._v("keepOpen")]),t("hr"),t("p",[e._v(" This modal also uses the "),t("code",[e._v("$x5.editModal()")]),e._v(" function to change the "),t("code",[e._v("keepOpen")]),e._v(" flag of the modal for demonstration purposes. ")])])},a=[],p={name:"RouteModal",data:function(){return{keepOpen:!1}},watch:{keepOpen:function(){this.$x5.editModal("route",{keepOpen:this.keepOpen})}}},c=p,l=t("2877"),i=Object(l["a"])(c,o,a,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0dd8bc.5de08457.js.map