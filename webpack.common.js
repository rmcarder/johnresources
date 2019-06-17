const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const DynamicImport = require('babel-plugin-syntax-dynamic-import');

module.exports = env => { // module.exports is function now to pass in env variable from cli defined in package.json
        return {
            entry: {
                'js/index': './src/index.js',
            },
            module: {
                
                rules: [{
                        test: /\.js$/,
                        exclude: [/node_modules/, /\.min\./, /vendor/],
                        use: [{
                                loader: 'babel-loader',
                               /* options: {
                                    plugins: [DynamicImport]
                                }*/
                            },
                            {
                                loader: 'eslint-loader'
                            }
                        ]},
                        {
                            test: /\.css$/,
                            use: [{ 
                                    loader: MiniCssExtractPlugin.loader,
                                },{
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true,
                                        importLoaders: 1
                                    }
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                          
                        {
                            test: /\.html$/,
                            exclude: /index\.html/,
                            loader: 'html-loader'
                        }
                    ]
                },
                plugins: [
                    new MiniCssExtractPlugin({
                        // Options similar to the same options in webpackOptions.output
                        // both options are optional
                        filename: "css/styles.css?v=[hash:6]",
                        chunkFilename: "[id].css",
                    }),
                    new CopyWebpackPlugin(
                        [
                            {
                                from: 'assets/**/*.*',
                                context: 'src'
                            },
                        ]
                    ),
                    new HtmlWebpackPlugin({
                        //title: 'title title title',
                        template: './src/index.html',
                     //   inject: false,
                    }),
                ],
                /*resolve: {
                    alias: {
                        "@UI": path.join(__dirname, 'submodules/UI-js/'),
                    }
                }*/
            }
        };