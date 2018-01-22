const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist'
    },
    
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'output management',
            template: './index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new WebpackManifestPlugin(),
      //  new UglifyJSPlugin()
    ]
};