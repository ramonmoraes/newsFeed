const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const distributionFolderName = "dist";

module.exports = (_, argv) => {
  const env = argv.mode || "development";
  const isDev = env === "development";
  console.log("The env mode was setted to: " + env + "\n");

  const webpackConfig = {
    entry: {
      bundle: "./src/index.js",
      sw: "./src/serviceWorker/initSw.js",
    },
    output: {
      path: path.resolve(__dirname, distributionFolderName),
      filename: isDev ? "[name]-.js" : "[name]-[hash].js",
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "NewsFeed",
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? "style-.js" : "style-[hash].css"
      }),
      new CleanWebpackPlugin(distributionFolderName)
    ]
  };

  return webpackConfig;
};
