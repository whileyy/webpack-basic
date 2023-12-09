const path = require("path");
// 打包时自动构建HTML
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 打包结束打开可视化打包文件大小网页
const TerserPlugin = require("terser-webpack-plugin");
// 编译ES 向下兼容
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
// 打包时覆盖原来存在的打包文件
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        // contenthash 根据文件计算生成不同的名称
        // name 默认 原本的对应文件名
        filename: "[web].[contenthash].js",
        //filename: "dist.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            // 路径别名
            utils: path.resolve(__dirname, "src/utils")
        }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    devServer: {
        static: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack-learning"
        }),
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
        new CleanWebpackPlugin.CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};