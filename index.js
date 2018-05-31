const getPlugin = require('./lib/get-plugin');
const getPluginByName = require('./lib/get-plugin-by-name');
const getPlugins = require('./lib/get-plugins');
const info = require('./lib/info');
const init = require('./lib/init');
const register = require('./lib/register');
const RESERVED_PLUGIN_TYPES = require('./lib/reserved-plugin-types');

module.exports = Object.freeze({
    RESERVED_PLUGIN_TYPES,
    getPlugin: (type) => getPlugin(type),
    getPluginByName: (name) => getPluginByName(name),
    getPlugins: (type) => getPlugins(type),
    info: () => info(),
    init: (domainName, persistenceConfig, pluginsConfigs) => init(domainName, persistenceConfig, pluginsConfigs),
    register: (warpCore, app, baseUrl, staticUrl) => register(warpCore, app, baseUrl, staticUrl)
});
