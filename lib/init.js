const cache = require('./cache');
const WarpjsPlugin = require('./model');

module.exports = (domainName, persistenceConfig, pluginsConfigs) => {
    if (!cache.initialized) {
        cache.plugins = pluginsConfigs.map((pluginConfig) => new WarpjsPlugin(domainName, persistenceConfig, pluginConfig));

        // abusing reduce() here to avoid using function().
        cache.plugins.reduce(
            (duplicates, plugin) => {
                if (plugin.type) {
                    if (duplicates[plugin.type]) {
                        console.log(`WARNING: Previous type '${plugin.type}' could be ignored.`);
                    }
                    duplicates[plugin.type] = true;
                }
                return duplicates;
            },
            {}
        );

        cache.initialized = true;
    }
};
