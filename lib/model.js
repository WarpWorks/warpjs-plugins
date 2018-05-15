const _ = require('lodash');

class WarpjsPlugin {
    constructor(domainName, persistenceConfig, pluginConfig) {
        this.name = pluginConfig.name;
        this.path = pluginConfig.path;
        this.type = pluginConfig.type;
        this.moduleName = pluginConfig.moduleName || pluginConfig.name;

        this.config = _.extend({},
            _.cloneDeep(pluginConfig.config),
            {
                domainName,
                persistence: _.cloneDeep(persistenceConfig)
            }
        );
    }

    get Persistence() {
        if (!this._Persistence) {
            // cache it.
            this._Persistence = require(this.config.persistence.module);
        }
        return this._Persistence;
    }

    get persistence() {
        return new this.Persistence(this.config.persistence.host, this.config.persistence.name);
    }

    get module() {
        if (!this._module) {
            this._module = require(this.moduleName);
        }
        return this._module;
    }

    get info() {
        if (!this.version) {
            this.version = require(`${this.moduleName}/package.json`).version;
        }

        return {
            name: this.name,
            moduleName: this.moduleName,
            path: this.path,
            type: this.type,
            version: this.version
        };
    }

    register(warpCore, app, baseUrl, staticUrl) {
        baseUrl = (baseUrl === '/') ? '' : baseUrl;

        const pluginApp = this.module(this.config, warpCore, this.Persistence);
        if (pluginApp) {
            app.use(this.path, pluginApp(baseUrl ? `${baseUrl}/${this.path}` : this.path, staticUrl));
        }
    }
}

module.exports = WarpjsPlugin;
