# HOWTO write a WarpJS plugin

This documentation should explain enough about how to write your own WarpJS
plugin package.

## Configuration

Plugins are configured with the following object:

    {
      name: "name-of-the-plugin",
      moduleName: "@npm/module that can be require()",
      path: "/application/path/to/use",
      config: {
        any: "object",
        that: "the",
        plugin: "wants"
      }
    }

The `README.md` of the plugin should describe the configuration needed for the
plugin.


## package's main

Your package should export a function with the following signature:

    module.exports = (config, warpCore, Persistence) => (baseUrl, staticUrl) => {
    };

The `config` is the object defined in the `plugins` section of
`.warp-works-warpjsrc` file, plus the following:

    {
      domainName: "string of warpjsrc's domainName",
      persistence: {
        module: "persistence-implementation-module",
        host: "persistence-host",
        name: "persistence-storage-name"
      }
    }

The `warpCore` object is the `warpjs` core library. This is passed down to avoid
cyclic dependencies.

The `Persistence` parameter may be drop in the near future since it's possible to
reconstruct it from the `config.persistence` info by doing the following:

    const Persistence = require(config.persistence.module);

This main export function will be used when registering the plugin to the
application.

    const pluginApp = package(config, warpCore, Persistence);
    app.use(config.path, pluginApp(baseUrl, staticUrl));

## Action plugin

An action plugin allows to do something specific when an action button is
clicked or when a menu item is selected.

### Button

WarpJS generate a button with the following information:

    <button type="button" class="btn btn-default"
        title="{action-desc-from-schema}"
        data-warpjs-can-edit="true|false"
        data-warpjs-name="{action-name-from-schema}"
        data-warpjs-desc="{action-desc-from-schema}"
        data-warpjs-type="{action-type-from-schema}"
        data-warpjs-id="{action-id-from-schema}"
        data-warpjs-doc-level="{document-level}"
        data-warpjs-js-script-url="{plugin-url}"
        data-warpjs-plugin-identifier="{plugin-identifier}"
        >
      <span class="glyphicon glyphicon-{plugin-config-glyphicon}"></span>
      {plugin-config-label}
    </button>

...TO CONTINUE...
