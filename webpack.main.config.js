const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', path.join(__dirname, 'src', 'main', 'index')],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist', 'main')
    },
    watch:true,
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        // new CleanWebpackPlugin([path.resolve(__dirname, 'dist', 'main')]),
    ],
    resolve: {
        extensions: ['.json', '.js']
    },
    target:'electron-main',
    devtool: 'eval-source-map'
};