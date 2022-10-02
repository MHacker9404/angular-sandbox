// apps/myapp/webpack.config.js
const webpack = require('webpack');

function getClientEnvironment(configuration: any) {
    // Grab NODE_ENV and NX_* environment variables and prepare them to be
    // injected into the application via DefinePlugin in webpack configuration.
    const NX_APP = /^NX_/i;

    const raw = Object.keys(process.env)
        .filter((key) => NX_APP.test(key))
        .reduce(
            (env: any, key: string) => {
                env[key] = process.env[key];
                return env;
            },
            {
                NODE_ENV: process.env['NODE_ENV'] || configuration
            }
        );

    // Stringify all values so we can feed into webpack DefinePlugin
    return {
        'process.env': Object.keys(raw).reduce((env: any, key: string) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {})
    };
}

module.exports = (
    config: { plugins: any[] },
    options: any,
    context: { configuration: any }
) => {
    config.plugins.push(
        new webpack.DefinePlugin(getClientEnvironment(context.configuration))
    );
    return config;
};
