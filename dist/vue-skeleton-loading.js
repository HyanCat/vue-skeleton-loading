!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSkeletonLoading=t():e.VueSkeletonLoading=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=14)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var a=Object.create(u.computed||null);Object.keys(o).forEach(function(e){var t=o[e];a[e]=function(){return t}}),u.computed=a}return{esModule:r,exports:i,options:u}}},function(e,t,n){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(13),i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,a=0,c=!1,l=function(){},d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(h(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(h(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:s}}}}function p(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(c)return l;o.parentNode.removeChild(o)}if(d){var r=a++;o=u||(u=p()),t=m.bind(null,o,r,!1),n=m.bind(null,o,r,!0)}else o=p(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}e.exports=function(e,t,n){c=n;var o=r(e,t);return f(o),function(t){for(var n=[],s=0;s<o.length;s++){var u=o[s];(a=i[u.id]).refs--,n.push(a)}t?f(o=r(e,t)):o=[];for(s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,v=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function m(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){n(28);var o=n(1)(n(8),n(23),null,null);e.exports=o.exports},function(e,t,n){n(29);var o=n(1)(n(9),n(24),null,null);e.exports=o.exports},function(e,t,n){n(27);var o=n(1)(n(10),n(22),null,null);e.exports=o.exports},function(e,t,n){n(26);var o=n(1)(n(11),n(21),null,null);e.exports=o.exports},function(e,t,n){n(25);var o=n(1)(n(12),n(20),null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{height:0}},props:{backColor:{type:String,default:"#e7e7e7"},diameter:{type:String,default:"100%"}},updated:function(){this.height=window.getComputedStyle(this.$refs.circle).width},mounted:function(){this.height=window.getComputedStyle(this.$refs.circle).width}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{backColor:{type:String,default:"#e7e7e7"},boxProperties:{type:Object,default:function(){return{width:"100%",height:"16px",top:"0",bottom:"0"}}},count:{type:Number,default:1}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{gutter:{type:Number,default:0},span:{type:Number,required:!0,validator:function(e){return e<=24}},order:{type:Number}},computed:{perWidth:function(){return(100*this.span/24).toFixed(2)+"%"},gutterToPadding:function(){return"0 "+this.gutter+"px"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{gutter:{type:Object,default:function(){return{top:"0",bottom:"0"}}},align:{type:String,default:"top",validator:function(e){return["top","middle","bottom"].indexOf(e)>=0}},justify:{type:String,default:"start",validator:function(e){return["start","end","center","space-around","space-between"].indexOf(e)>=0}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(3)),r=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{}},components:{circleSkeleton:o.default,squareSkeleton:r.default}}},function(e,t,n){"use strict";e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],u={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=c(n(7)),i=c(n(4)),s=c(n(3)),u=c(n(5)),a=c(n(6));function c(e){return e&&e.__esModule?e:{default:e}}var l={install:function e(t){e.installed||(e.installed=!0,t.component("SkeletonLoading",r.default),t.component("SquareSkeleton",i.default),t.component("CircleSkeleton",s.default),t.component("Column",u.default),t.component("Row",a.default))},SkeletonLoading:r.default,SquareSkeleton:i.default,CircleSkeleton:s.default};void 0!==("undefined"==typeof window?"undefined":o(window))&&window.Vue&&window.Vue.use(r.default),t.default=l},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".vue-skeleton-loading{position:relative;width:100%}@keyframes backpos{0%{background-position-x:-200px}to{background-position-x:300px}}.vue-skeleton-loading .skeleton-bac-animation{position:absolute;z-index:auto;width:100%;height:100%;background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,0) 80%);background-size:30% 100%;background-repeat:no-repeat;-webkit-animation:backpos .9s ease-in-out 0s infinite;-o-animation:backpos .9s ease-in-out 0s infinite;animation:backpos .9s ease-in-out 0s infinite}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".row{display:flex;flex-direction:row;justify-content:space-around;align-items:top}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".circle{border-radius:50%}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".square-list{width:100%}",""])},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-skeleton-loading"},[t("div",{staticClass:"skeleton-bac-animation"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"row",style:{alignItems:this.align,justifyContent:this.justify,paddingTop:this.gutter.top,paddingBottom:this.gutter.bottom}},[this._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"col",style:{order:this.order,width:this.perWidth,padding:this.gutterToPadding}},[this._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"circle",staticClass:"circle",style:{backgroundColor:this.backColor,width:this.diameter,height:this.height}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square-list"},e._l(e.count,function(t){return n("div",{key:t,staticClass:"square",style:{backgroundColor:e.backColor,width:e.boxProperties.width?e.boxProperties.width:"100%",height:e.boxProperties.height?e.boxProperties.height:"16px",marginTop:e.boxProperties.top?e.boxProperties.top:"0",marginBottom:e.boxProperties.bottom?e.boxProperties.bottom:"0"}})}))},staticRenderFns:[]}},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("fc3200fa",o,!0)},function(e,t,n){var o=n(16);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("752e922f",o,!0)},function(e,t,n){var o=n(17);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("12464eae",o,!0)},function(e,t,n){var o=n(18);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("40becefb",o,!0)},function(e,t,n){var o=n(19);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("e3a4d0ac",o,!0)}])});
//# sourceMappingURL=vue-skeleton-loading.js.map