const getPlugins = require('./get-plugins');

module.exports = (type) => getPlugins(type).pop();
