
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const plugins = [
  new UglifyJSPlugin(),
  new CleanWebpackPlugin(['dist']),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
      ],
    },
  }),
];
const themeColors = [
  'default',
  'blue',
  'dark-blue',
  'green',
  'pink',
  'yellow',
  'purple',
  'red',
];
// //Theme Creation
const rules = [];
themeColors.map(color => {
  const colorExtract = new ExtractTextPlugin(`themes/rex-${color}.css`);
  const search = new RegExp(`app-${color}.scss`);
  plugins.push(colorExtract);
  rules.push({
    test: search,
    use: colorExtract.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }),
    exclude: path.resolve(__dirname, '/assets/fonts'),
  });
});

// include styles for the site in the webpack bundle
const searchForSite = new RegExp('prototype/app.scss');
rules.push({
  test: searchForSite,
  use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
});

module.exports = merge(common, {
  plugins,
  module: {
    rules,
  },
});
