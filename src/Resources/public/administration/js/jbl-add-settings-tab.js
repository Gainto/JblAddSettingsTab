!function(e){function t(t){for(var n,i,s=t[0],a=t[1],o=0,l=[];o<s.length;o++)i=s[o],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);l.length;)l.shift()()}var n={},r={"jbl-add-settings-tab":0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=s);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"static/js/"+({}[e]||e)+".js"}(e);var u=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",u.name="ChunkLoadError",u.type=i,u.request=s,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p=(window.__sw__.assetPath + '/bundles/jbladdsettingstab/'),i.oe=function(e){throw console.error(e),e};var s=this["webpackJsonpPluginjbl-add-settings-tab"]=this["webpackJsonpPluginjbl-add-settings-tab"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=a;i(i.s="Y44p")}({"5T9Y":function(e,t,n){Shopware.Component.register("sw-settings-cumulated-weight",(function(){return n.e(0).then(n.bind(null,"FpJk"))})),Shopware.Module.register("sw-settings-cumulated-weight",{type:"plugin",name:"settings-cumulated-weight",title:"Akkumuliertes Elektrogewicht",description:"Akkumuliertes Elektrogewicht",color:"#9AA8B5",icon:"regular-analytics",favicon:"icon-module-settings.png",routes:{index:{component:"sw-settings-cumulated-weight",path:"index",meta:{parentPath:"sw.settings.index"}}},settingsItem:{group:"analytics",to:"sw.settings.cumulated.weight.index",icon:"regular-analytics",favicon:"regular-analytics",id:"sw-settings-analytics-accumulated-weight",name:"accumulated-weight",label:"Akkumuliertes Elektrogewicht"}})},Y44p:function(e,t,n){"use strict";n.r(t);Shopware.Component.override("sw-settings-index",{template:'{% block sw_settings_content_tab_plugins %}\n    {% parent %}\n\n    {% block sw_settings_content_tab_example %}\n        <sw-tabs-item\n                class="sw-settings__tab-example"\n                name="analytics"\n                :route="{ name: \'sw.settings.index.example\'}"\n                :active-tab="active"\n                title="Example"\n        >\n            Example\n        </sw-tabs-item>\n    {% endblock %}\n\n\n{% endblock %}'});n("5T9Y");Shopware.Module.register("sw-settings-index-example",{routeMiddleware:function(e,t){"sw.settings.index"===t.name&&t.children.push({name:"sw.settings.index.example",path:"/sw/settings/index/example",component:"sw-settings-index",meta:{parentPath:"sw.settings.index"}}),e(t)}})}});
//# sourceMappingURL=jbl-add-settings-tab.js.map