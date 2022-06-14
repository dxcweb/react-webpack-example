const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const dotenv = require("dotenv");
dotenv.config("./env");

const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  target: ["web", "es5"],
  output: {
    filename: "[name].[contenthash:8].js",
    publicPath: devMode ? "/" : "https://xxxx.com/",
    environment: {
      // 是否使用箭头函数
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp3)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000000,
            name: "static/[name].[hash:8].[ext]",
            esModule: false,
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".web.js", ".js", ".jsx"],
  },
  performance: {
    hints: false,
  },
  stats: {
    colors: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { ENV: `"${process.env.ENV}"` },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      scriptLoading: "blocking",
      //   filename: path.join(DIST_DIR, 'index.html'),
      //   favicon: './src/assets/favicon.ico',
    }),
    // new LodashModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
};
