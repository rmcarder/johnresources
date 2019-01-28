const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
                        use: [/*{
                                loader: 'babel-loader',
                                options: {
                                    plugins: [DynamicImport]
                                }
                            },*/
                            {
                                loader: 'eslint-loader'
                            }
                        ]},
                        {
                            test: /\.css$/,
                            use: [{
                                    loader: 'style-loader'
                                }, {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true
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
                            test: /\.md$/,
                            use: [{
                                loader: 'html-loader'
                                },
                                {
                                    loader: 'markdown-loader',
                                    options: {
                                        smartypants: true
                                    }
                                },
                                
                            ]
                        }
                    ]
                },
                plugins: [
                    new CopyWebpackPlugin(
                        [
                            {
                                from: 'assets/**/*.*',
                                context: 'src'
                            },
                        ]
                    ),
                ],
                /*resolve: {
                    alias: {
                        "@UI": path.join(__dirname, 'submodules/UI-js/'),
                    }
                }*/
            }
        };