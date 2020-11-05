const path = require('path')
const isDev = process.env.NODE_ENV == 'development'
const createVueLoaderOptions = require('./vue-loader.config')

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const config = {
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        // options: {
                        //     limit: 1024,
                        //     name: 'resources/[path][name].[hash:8].[ext]'
                        // }
                    }
                ]
            }
        ]
    },
    resolve: {
        // extensions: ['*', '.js', '.vue'],
        alias: {
            '@': resolve('client')
        }
    }

}

module.exports = config