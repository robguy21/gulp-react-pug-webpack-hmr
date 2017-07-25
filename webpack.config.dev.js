const path = require('path');
const webpack = require('webpack');

const conf = require('./gulp/gulpconfig');
const webpackBase = require('./webpack.config.base');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.join(__dirname, conf.path.dev.js, 'index.js'),
    ],
  },

  output: {
    path: path.join(__dirname, '../', conf.path.dist.js),
    publicPath: webpackBase.output.publicPath,
    filename: webpackBase.output.filename,
  },

  externals: webpackBase.externals,

  resolve: webpackBase.resolve,

  devtool: 'eval',

  stats: {
    chunks: false,
    modules: false,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },

  plugins: [].concat.apply(
    [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    webpackBase.plugins
  ),
};
