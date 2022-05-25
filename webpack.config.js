const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifiedCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        clean: true,
        assetModuleFilename: '[name][text]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Adido Test App',
            filename: 'index.html',
            template: './index.html',
        }),
        new MinifiedCssExtractPlugin({
            filename: 'style.css',
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/assets', to: 'assets' }],
        }),
    ],

    module: {
        rules: [
            {
                // scss css loader
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MinifiedCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                // js loader
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                // image loader
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
}
