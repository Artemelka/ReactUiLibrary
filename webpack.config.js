const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    devServer: {
        port: 9000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", '.jsx', ".json"]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader']
            },
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['source-map-loader']
            }
        ],
    },
    plugins: [
        new StyleLintPlugin({
            emitErrors: true
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
};
