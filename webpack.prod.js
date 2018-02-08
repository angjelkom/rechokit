const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    entry: {
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new UglifyJsWebpackPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    output: {
        filename: '[name].[chunkhash].bundle.js'
    }
})