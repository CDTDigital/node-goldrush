'use strict';

let config = {
  entry: './client.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};

module.exports = config;
