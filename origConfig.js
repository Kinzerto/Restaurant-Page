// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

//extract css into separate files
// npm install mini-css-extract-plugin --save-dev
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        // new MiniCssExtractPlugin({
        //     filename: "./src/styles/styles.css",
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                // IMAGES
                test: /\.(png|svg|webp|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                //FONTS
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
