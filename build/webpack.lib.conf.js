var path = require('path')
const {join} = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'false',
    output: {
        path: resolve('dist'),
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [
            '', '.js', '.vue'
        ],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'doc': path.resolve(__dirname, '../doc'),
            'assets': path.resolve(__dirname, '../doc/assets'),
            'components': path.resolve(__dirname, '../doc/components'),
            'src': path.resolve(__dirname, '../src'),
            'a': path.resolve(__dirname, '../src/assets'),
            'c': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.pug$/,
                loader: 'pug'
            }, {
                test: /\.html$/,
                loader: 'vue-html'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: utils.cssLoaders()
    }
    plugins: [new CleanWebpackPlugin(['dist'], {root: resolve('./')})]
}
