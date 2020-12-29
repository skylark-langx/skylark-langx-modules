/**
 * skylark-langx-modules - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["../modular"],function(n){"use strict";var e,t,d,o="undefined"!=typeof window&&window.document,i=!o,a=o?document:null,l=[];function c(){var n=l;i&&n.length&&(l=[],function(n){var e;for(e=0;e<n.length;e+=1)n[e](a)}(n))}function r(){i||(i=!0,d&&clearInterval(d),c())}if(o){if(document.addEventListener)document.addEventListener("DOMContentLoaded",r,!1),window.addEventListener("load",r,!1);else if(window.attachEvent){window.attachEvent("onload",r),t=document.createElement("div");try{e=null===window.frameElement}catch(n){}t.doScroll&&e&&window.external&&(d=setInterval(function(){try{t.doScroll(),r()}catch(n){}},30))}"complete"===document.readyState&&r()}function u(n){return i?n(a):l.push(n),u}return u.load=function(n,e,t,d){d.isBuild?t(null):u(t)},n.plugins.ready=u});
//# sourceMappingURL=../sourcemaps/plugins/ready.js.map
