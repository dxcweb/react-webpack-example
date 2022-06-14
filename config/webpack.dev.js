const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  stats: "minimal",
  //   devtool: 'source-map',
  devtool: "cheap-module-source-map",
  devServer: {
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
});
