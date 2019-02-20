const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = env => { // module.exports is function now to pass in env variable from cli defined in package.json
    return merge(common(), {
        devtool: 'source-map',
        devServer: {
            contentBase: './dist',
            hot: true
        },
        mode: 'development',
        
        plugins: [
            
            new webpack.HotModuleReplacementPlugin(),
            new webpack.EnvironmentPlugin({
                'NODE_ENV': env
            })
        ],
        output: {
            filename: '[name].js?v=[hash:6]',
            path: path.resolve(__dirname, 'dist')
        },
    });
};