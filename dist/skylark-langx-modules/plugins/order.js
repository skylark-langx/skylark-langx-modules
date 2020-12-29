/**
 * skylark-langx-modules - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["../modular"],function(e){var t="undefined"!=typeof document&&"undefined"!=typeof window&&document.createElement("script"),r=t&&(t.async||window.opera&&"[object Opera]"===Object.prototype.toString.call(window.opera)||"MozAppearance"in document.documentElement.style),o=t&&"uninitialized"===t.readyState,n=/^(complete|loaded)$/,d=[],a={},i={},u=[];function l(e){var t,r,o,i=e.currentTarget||e.srcElement;if("load"===e.type||n.test(i.readyState)){for(r=i.getAttribute("data-requiremodule"),a[r]=!0,t=0;(o=d[t])&&a[o.name];t++)o.req([o.name],o.onLoad);t>0&&d.splice(0,t),setTimeout(function(){i.parentNode.removeChild(i)},15)}}function c(e){var t,r,o;for(e.setAttribute("data-orderloaded","loaded"),t=0;(o=u[t])&&((r=i[o])&&"loaded"===r.getAttribute("data-orderloaded"));t++)delete i[o],require.addScriptToDom(r);t>0&&u.splice(0,t)}return t=null,e.plugins.order={load:function(e,t,n,a){var p,s,m;!t.nameToUrl?t([e],n):(p=t.nameToUrl(e,null),require.s.skipAsync[p]=!0,r||a.isBuild?t([e],n):o?((m=require.s.contexts._).urlFetched[p]||m.loaded[e]||(m.urlFetched[p]=!0,require.resourcesReady(!1),m.scriptCount+=1,s=require.attach(p,m,e,null,null,c),i[e]=s,u.push(e)),t([e],n)):t.specified(e)?t([e],n):(d.push({name:e,req:t,onLoad:n}),require.attach(p,null,e,l,"script/cache")))}}});
//# sourceMappingURL=../sourcemaps/plugins/order.js.map
