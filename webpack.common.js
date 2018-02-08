const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Web',
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /src/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                include: /src/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}