/**
 * skylark-langx-modules - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["../modular","./text"],function(t,e){"use strict";var n=Object.create(null);return e.plugins.json={load:function(t,e,r,i){text.get(e.toUrl(t),function(e){if(i.isBuild)n[t]=e,r(e);else{try{var c=JSON.parse(e)}catch(t){r.error(t)}r(c)}},r.error,{accept:"application/json"})},write:function(t,e,r){var i=n[e];i&&r('define("'+t+"!"+e+'", function(){ return '+i+";});\n")}}});
//# sourceMappingURL=../sourcemaps/plugins/json.js.map
