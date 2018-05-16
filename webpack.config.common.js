const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
      ],
    },
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: false
  }),
];

const rules = [
  {
    test: /\.scss$|\.sass$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }),
    exclude: path.resolve(__dirname, '/assets/fonts'),
  },
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

  // entry: ['./src/main'],
  entry: {
    'rex-default': './src/style/prototype/app-default',
    'rex-blue': './src/style/prototype/app-blue',
    // 'rex-red': './src/style/prototype/app-red',
    // 'rex-green': './src/style/prototype/app-green',
    // 'rex-yellow': './src/style/prototype/app-yellow',
    // 'rex-purple': './src/style/prototype/app-purple',
    // 'rex-pink': './src/style/prototype/app-pink',
    // 'rex-blue': './src/style/prototype/app-blue',
    // 'rex-dark-blue': './src/style/prototype/app-dark-blue'
  },
  cache: true,

  output: {
    path: path.resolve(__dirname, 'build/themes/'),
    filename: '[name].css',
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
