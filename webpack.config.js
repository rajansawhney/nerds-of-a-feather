const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['*', '.js']
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
    }
};