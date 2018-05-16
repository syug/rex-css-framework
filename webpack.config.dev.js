const path = require('path');
const webpackConfig = require('./webpack.config.common.js');

webpackConfig.output.path = path.resolve(__dirname, 'dev');
webpackConfig.devServer = {
  quiet: false,
  hot: true,
  open: true,
  openPage: 'rex-default.css',
};

module.exports = webpackConfig;
