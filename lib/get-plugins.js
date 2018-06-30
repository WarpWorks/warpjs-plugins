const _ = require('lodash');

const cache = require('./cache');

module.exports = (type) => type
    ? cache.plugins.filter((plugin) => _.isArray(type) ? type.indexOf(plugin.type) !== -1 : plugin.type === type)
    : cache.plugins
;
