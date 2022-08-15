const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "./src/index.js",),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        // assetModuleFilename: "[name][ext]",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
            filname: "index.html",
            template: "src/template.html"
        })
    ]
};


