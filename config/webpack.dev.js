const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  stats: "minimal",
  //   devtool: 'source-map',
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
    allowedHosts: "all",
    port: 8888,
    proxy: {
      "/api": {
        target: "https://xxxx.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
        headers: {
          Referer: "https://xxxx.com",
        },
      },
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
