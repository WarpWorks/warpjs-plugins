const getPlugins = require('./get-plugins');

module.exports = (name) => getPlugins().filter((plugin) => plugin.name === name).pop();
