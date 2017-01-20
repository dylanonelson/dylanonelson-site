var path = require('path');
var webpack = require('webpack');

var config = require('./config');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(config.get('NODE_ENV'))
      }
    }),
  ],
  resolve: {
    root: path.resolve('./src')
  },
}
