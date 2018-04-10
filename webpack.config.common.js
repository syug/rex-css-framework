const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    ENV_TYPE: JSON.stringify(process.env.ENV_TYPE),
  }),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'Rex CSS Framework',
    template: './src/index.html',
  }),
];

const rules = [
  // Babel automatic loading
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      cacheDirectory: true,
    },
  },
  //Extract Image and Icon Fonts
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: 'file-loader?name=img/[name].[ext]',
  },
  {
    test: /\.(svg|woff|woff2|eot|ttf)$/,
    use: 'url-loader?name=[name].[ext]',
  },
];


module.exports = {

  entry: ['babel-polyfill', './src/main'],
  cache: true,

  output: {
    path: path.resolve(__dirname, 'build/rex/css-framework/'),
    publicPath: '/rex/css-framework/',
    filename: 'rex-css-framework.js',
  },

  resolve: {

    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.jsx',
      '.scss',
      '.sass',
    ],
  },

  plugins,
  module: {
    rules,
  },
};
