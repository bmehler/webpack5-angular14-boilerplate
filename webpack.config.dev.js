const path = require('path'); 
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

module.exports = {
    mode: 'development',
    entry: ['./src/main.ts', './src/vendor.ts', './src/polyfills.ts','./src/app/styles.js'],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.[cm]?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        compact: false,
                        plugins: ['@angular/compiler-cli/linker/babel'],
                    },
                },
            },
            {
                test: /\.ts?$/,
                loader: '@ngtools/webpack',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'css-to-string-loader',
                    'style-loader',
                    "css-loader",
                    "sass-loader",
                ]
            },
        ],
    },
    plugins: [
        new AngularWebpackPlugin({
            tsconfig: './tsconfig.json',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/app/assets/index.html'
        }),
        new ProgressPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.scss'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        https: false,
        host: 'localhost',
        port: 8080,
    },
};