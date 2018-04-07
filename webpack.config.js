const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                    options: {
                        url: false,
                        minimize: true,
                        sourceMap: true
                    }
                })
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsWebpackPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        dead_code: true
                    }
                }
            })
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/videos/**/*', to: 'videos/', flatten: true },
            { from: 'src/_redirects', to: './', flatten: true }
        ]),
        new ExtractTextPlugin("estilo.css"),
    ]
};