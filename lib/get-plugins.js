const cache = require('./cache');

module.exports = (type) => type ? cache.plugins.filter((plugin) => plugin.type === type) : cache.plugins;
