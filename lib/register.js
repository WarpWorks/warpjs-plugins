const cache = require('./cache');

module.exports = (warpCore, app, baseUrl, staticUrl) => cache.plugins.forEach((plugin) => plugin.register(warpCore, app, baseUrl, staticUrl));
