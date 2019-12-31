const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = (env) => {
    return ({
        entry: "./src/index.tsx",
        output: {
            publicPath: "/",
            filename: "bundle.js",
            path: path.resolve(__dirname, "./dist")
        },
        devServer: {
            port: 9000,
            open: true,
            historyApiFallback: true,
            hot: true,
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
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]-[hash:base64:3]',
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    use: ['babel-loader']
                },
                {
                    enforce: "pre",
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['source-map-loader', 'babel-loader']
                }
            ],
        },
        plugins: [
            new StyleLintPlugin({
                emitErrors: true
            }),
            new HtmlWebPackPlugin({
                template: './src/index.html'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    MOCK: JSON.stringify(env.MOCK)
                }
            })
        ]
    });
};
