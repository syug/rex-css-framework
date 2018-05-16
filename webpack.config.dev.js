const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'ReX CSS Framework',
    template: './dev/index.html',
    excludeChunks: ['js'],
  }),
];

const rules = [

];

common.output.path = path.resolve(__dirname, 'dev');
common.devServer = {
  quiet: false,
  hot: true,
  open: true,
  openPage: 'rex-default.css',
};

module.exports = merge(common, {
  plugins,
  module: {
    rules,
  },
});
