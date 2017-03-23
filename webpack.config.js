/**
 * Created by Ilia on 03.03.2017.
 */
var  webpack = require('webpack');

module.exports = {
    /*for Router*/
    devServer: {
        port:3000,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    entry: [
        './app/index.js'
    ],
    output: {
        path: require("path").resolve("./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test:  /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}