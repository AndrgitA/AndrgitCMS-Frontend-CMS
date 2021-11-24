const path = require('path');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const _envJS = path.resolve(__dirname, './config/env.js');
const _packageJSONPath = path.resolve(__dirname, './package.json');
const _packageJSON = require(_packageJSONPath);

module.exports = {
    publicPath: _envJS.publicPath,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: _packageJSON.name,
                filename: "remoteEntry.js",
            //     // exposes: {},
            //     // remotes: {},
            //     // shared: {},
            }),
        ],
    },

    devServer: {
        host: _envJS.host,
        port: _envJS.port,
    }
};