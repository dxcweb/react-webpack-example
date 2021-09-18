const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
 
  stats: 'minimal',
//   devtool: 'source-map',
  devtool: 'cheap-module-source-map',
  plugins: [
  ],
});