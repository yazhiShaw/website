const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV == 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const extractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')


let config = {}
const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"prodoction"'
        }
    }),
    new HTMLPlugin(),
    new VueLoaderPlugin()
]
const devServer = {
    port: 8003,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    hot: true
}

if (isDev) {
    config = merge(baseConfig, {
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [{
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            }],
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
}
else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: extractPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new extractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            })
        ])
    })

}

module.exports = config


