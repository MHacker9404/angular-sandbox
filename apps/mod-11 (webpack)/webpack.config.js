const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html')
    })],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: './index.html',
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
