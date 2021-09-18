const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash:8].js",
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
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/[name].[hash:8].[ext]",
              esModule: false,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "static/[name].[hash:8].[ext]",
                  esModule: false,
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".jsx"],
  },
  performance: {
    hints: false,
  },
  stats: {
    colors: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      //   filename: path.join(DIST_DIR, 'index.html'),
      //   favicon: './src/assets/favicon.ico',
    }),
    // new LodashModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
};
