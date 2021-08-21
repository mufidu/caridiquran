const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ChunksWebpackPlugin = require("chunks-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                test: /\.css$/,
            }),
        ],
    },
    plugins: [new ChunksWebpackPlugin()],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
});
