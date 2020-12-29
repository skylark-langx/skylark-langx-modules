/**
 * skylark-langx-modules - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["module","../modular"],function(module,o){"use strict";var n=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;function e(o,n,e,l,r,t){n[o]&&(e.push(o),!0!==n[o]&&1!==n[o]||l.push(r+o+"/"+t))}function l(o,n,e,l,r){var t=l+n+"/"+r;require._fileExists(o.toUrl(t+".js"))&&e.push(t)}function r(o,n,e){var l;for(l in n)!n.hasOwnProperty(l)||o.hasOwnProperty(l)&&!e?"object"==typeof n[l]&&(!o[l]&&n[l]&&(o[l]={}),r(o[l],n[l],e)):o[l]=n[l]}var t=module.config?module.config():{};return o.plugins.i18n={load:function(o,a,i,f){(f=f||{}).locale&&(t.locale=f.locale);var s,u,c,g=n.exec(o),p=g[1],h=g[4],v=g[5],d=h.split("-"),y=[],w={},j="";if(g[5]?s=(p=g[1])+v:(s=o,v=g[4],(h=t.locale)||(h=t.locale="undefined"==typeof navigator?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),d=h.split("-")),f.isBuild){for(y.push(s),l(a,"root",y,p,v),u=0;u<d.length;u++)c=d[u],l(a,j+=(j?"-":"")+c,y,p,v);var m,x;if(f.locales)for(m=0;m<f.locales.length;m++)for(h=f.locales[m],d=h.split("-"),j="",x=0;x<d.length;x++)c=d[x],l(a,j+=(j?"-":"")+c,y,p,v);a(y,function(){i()})}else a([s],function(o){var n,l=[];for(e("root",o,l,y,p,v),u=0;u<d.length;u++)n=d[u],e(j+=(j?"-":"")+n,o,l,y,p,v);a(y,function(){var n,e,t;for(n=l.length-1;n>-1&&l[n];n--)!0!==(e=o[t=l[n]])&&1!==e||(e=a(p+t+"/"+v)),r(w,e);i(w)})})}}});
//# sourceMappingURL=../sourcemaps/plugins/i18n.js.map
