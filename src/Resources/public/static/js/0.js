/*! For license information please see 0.js.LICENSE.txt */
(this["webpackJsonpPluginjbl-add-settings-tab"]=this["webpackJsonpPluginjbl-add-settings-tab"]||[]).push([[0],{FpJk:function(t,e,r){"use strict";r.r(e);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),u=new j(n||[]);return i(a,"_invoke",{value:E(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function d(){}function g(){}function y(){}var m={};l(m,u,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(k([])));w&&w!==e&&r.call(w,u)&&(m=w);var b=y.prototype=d.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,u,c){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:void 0,done:!0}}return g.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var a=Shopware,u=a.Context,c=(a.Component,a.Mixin),s=Shopware.Data.Criteria;e.default={template:'{% block sw_settings_cumulated_weight%}\n<sw-page class="sw-settings-cumulated-weight">\n\n    <template #content>\n        <div class="sw-settings-cumulated-weight__content">\n            <sw-data-grid  class="sw-settings-cumulated-weight-grid"\n                           ref="sw-settings-cumulated-weight-grid"\n                           identifier="sw-settings-cumulated-weight-grid"\n                           :fullPage="true"\n                           :showActions="false"\n                           :dataSource="data"\n                           :columns="cumulatedWeightColumns"\n                           :showSelection="false"\n                           :isLoading="isLoading"\n                           :sortBy="sortBy"\n                           :sortDirection="sortDirection"\n                           @page-change="onPageChange"\n                           @column-sort="onSortColumn"\n            >\n\n                <template #column-label="{ item }">\n                    <div style="margin-right:1em;">{{ item.label }}</div>\n                    <template v-for="opt in item.options">\n                        <sw-label appearance="pill" variant="info" size="small">{{ opt.group }}: {{ opt.option }}</sw-label>\n                    </template>\n                </template>\n\n            </sw-data-grid>\n        </div>\n\n        <sw-empty-state v-if="!isLoading && data.length == 0" title="Keine Einträge gefunden">\n            <template #icon>\n                <img :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset">\n            </template>\n        </sw-empty-state>\n\n    </template>\n</sw-page>\n{% endblock %}',inject:["repositoryFactory","filterFactory"],mixins:[c.getByName("listing")],data:function(){return{data:[],sortBy:"label",sortDirection:"DESC",isLoading:!1,filterCriteria:[],defaultFilters:[],storeKey:"grid.filter.cumulated.weight",activeFilterNumber:0}},metaInfo:function(){return{title:this.$createTitle()}},watch:{defaultCriteria:{handler:function(){this.getList()},deep:!0}},computed:{orderLineItemRepository:function(){return this.repositoryFactory.create("order_line_item")},cumulatedWeightColumns:function(){return this.getCumulatedWeightColumns()},defaultCriteria:function(){var t=this,e=new s(this.page,this.limit);return e.setTerm(this.term),this.sortBy.split(",").forEach((function(r){e.addSorting(s.sort(r,t.sortDirection))})),e.addFilter(s.equals("type","product")),this.filterCriteria.forEach((function(t){e.addFilter(t)})),e.addAssociation("product"),e},listFilters:function(){return[]}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getList()},getList:function(){var t,e=this;return(t=o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Shopware.Service("filterService").mergeWithStoredFilters(e.storeKey,e.defaultCriteria);case 3:r=t.sent,e.activeFilterNumber=r.filters.length,e.orderLineItemRepository.search(r,u.api).then((function(t){return e.total=t.total,e.data=e.cumulate(t),e.isLoading=!1,Promise.resolve()})).catch((function(){e.isLoading=!1}));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))})()},cumulate:function(t){var e=[];return t.forEach((function(t){var r=e.findIndex((function(e){return e.number===t.payload.productNumber}));-1===r&&(r=e.push({label:t.label,number:t.payload.productNumber,quantity:0,weight:0,options:{}})-1),e[r].quantity+=t.quantity,e[r].options=t.payload.options,null!==t.product.weight&&(e[r].weight+=t.quantity*t.product.weight)})),e},updateCriteria:function(t){this.page=1,this.filterCriteria=t},getCumulatedWeightColumns:function(){return[{property:"label",label:"Produkt"},{property:"number",label:"Produktnummer"},{property:"quantity",label:"Anzahl"},{property:"weight",label:"Gewicht"}]}}}}}]);
//# sourceMappingURL=0.js.map