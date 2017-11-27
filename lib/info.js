const cache = require('./cache');

module.exports = () => cache.plugins.map((plugin) => plugin.info);
