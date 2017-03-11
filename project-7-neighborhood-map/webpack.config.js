const Path = require('path');
const Webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CONFIG = {
  entry: './src/index.js',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          /* use style-loader in development */
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
        exclude: /node_modules/,
      },
      /* {
        test: /\.json$/,
        use: 'json-loader',
      },*/
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: Path.resolve(__dirname, 'src'),
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    /* Minimize all JavaScript output of chunks */
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    /* Switch loaders to minimize mode */
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}

module.exports = CONFIG;
