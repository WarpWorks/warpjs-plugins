const getPlugin = require('./lib/get-plugin');
const getPlugins = require('./lib/get-plugins');
const info = require('./lib/info');
const init = require('./lib/init');
const register = require('./lib/register');

module.exports = {
    getPlugin: (type) => getPlugin(type),
    getPlugins: (type) => getPlugins(type),
    info: () => info(),
    init: (domainName, persistenceConfig, pluginsConfigs) => init(domainName, persistenceConfig, pluginsConfigs),
    register: (warpCore, app, baseUrl, staticUrl) => register(warpCore, app, baseUrl, staticUrl)
};
