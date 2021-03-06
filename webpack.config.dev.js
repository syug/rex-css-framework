const path = require('path');
const webpackConfig = require('./webpack.config.common.js');

webpackConfig.output.path = path.resolve(__dirname, 'dev');
webpackConfig.devServer = {
  quiet: false,
  hot: true,
  open: true,
  openPage: 'css-framework/',
  historyApiFallback: {
    index: '/css-framework/',
  },
};

webpackConfig.module.rules.push(
  {
    test: /\.scss$|\.sass$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }
);

module.exports = webpackConfig;
