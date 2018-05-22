const webpack = require('webpack');
const path = require('path');
const {version} = require('../../package');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIR_ROOT = path.join(__dirname, '../../');
const DIR_SOURCE = path.resolve(DIR_ROOT, 'src') + '/';
const DIR_PUBLIC = path.resolve(DIR_ROOT, 'dist') + '/';

module.exports = {
  entry: [ DIR_SOURCE + 'css/app.scss'],
  output: {
    path: DIR_PUBLIC,
    publicPath: DIR_PUBLIC,
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: DIR_SOURCE + 'img/', to: DIR_PUBLIC + 'img/' },
      { from: DIR_SOURCE + 'font/', to: DIR_PUBLIC + 'font/' },
    ]),
  ]
}
