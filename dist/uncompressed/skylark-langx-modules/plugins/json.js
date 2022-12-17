define([
"../modular",
'./text'
], function(modules,modular) {
    'use strict';

	var map = Object.create(null);
	
	return modular.plugins.json = {
        load : function(name, req, onLoad, config) {
    		text.get(req.toUrl(name), function(json) {
                    if (config.isBuild) {
                    	map[name] = json; //during build caching: http://requirejs.org/docs/plugins.html#apiwrite
                        onLoad(json);
                    } else {
                        try {
                            var _json = JSON.parse(json);
                        } catch (e) {
                            onLoad.error(e);
                        }
                        onLoad(_json);
                    }
                },
                onLoad.error, 
                {accept: 'application/json'} //$NON-NLS-1$
             );
		},
		write : function(pluginName, moduleName, write) {
			var _json = map[moduleName];
            if(_json) {
                write('define("'+ pluginName +'!'+ moduleName +'", function(){ return '+ _json +';});\n'); //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
            }
        }
	};
});