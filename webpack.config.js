const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable : process.env.NODE_ENV === 'development'
});

module.exports = {
    context : path.resolve(__dirname, './src'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets : ['es2015'] }
            }]
        },
        {
            test: /\.vue$/,
            use:[{
                loader: 'vue-loader'
            }]
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{ loader: 'css-loader' }, { loader: 'sass-loader'}],
                fallback: 'style-loader'
            })
        }]
    },
    externals: {
        vue: 'Vue',
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'common.js',
            minChunks: 2
        }),
        extractSass
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        inline: true
    }
};