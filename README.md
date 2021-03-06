# WarpJS Plugins

Library to manipulate WarpJS plugins. See the [HOWTO](HOWTO.md) to learn how to
write your own plugins.

## API

### .init(domainName, persistenceConfig, pluginsConfigs)

Initializes the plugins. The `domainName` is the string representing the default
domain to work with. The `persistenceConfig` is an object like:

    {
      module: "npm-package-implementation-of-persistence",
      host: "your-persistence-host",
      name: "your-default-persistence-storage"
    }

The `pluginsConfigs` is an array of:

    {
      name: "string",
      type: "optional to describe a feature",
      moduleName: "@some/module to use in a require()",
      path: "/path where to mount the plugin",
      config: {
        something: "that the plugin will need and understand"
      }
    }

If a `type` is defined, all plugins with a given type should implement the same
API (this API is out of scope for this module).

See [RESERVED_PLUGIN_TYPES](./lib/reserved-plugin-types.js) for a list of
reserved plugin types. You can defined your own types, but these will affect
Studio and Content sides.


### .getPlugins([type])

Gets all the plugins with the `plugin.type===type`. If `type` is not defined,
all plugins are returned.


### .getPlugin(type)

Returns the last plugin with the `type` === *type*.

## .getPluginByName(name)

Returns the last plugin with the `name` === *name*.

### .info()

Returns a basic info object for each plugin. The format is:

    {
      name: "Name of the plugin",
      moduleName: "npm-module-name",
      type: "optional to describe a feature",
      path: "/path where to mount the plugin",
      version: "plugin's package.json's version"
    }


### .register(warpCore, app, baseUrl, staticUrl)
