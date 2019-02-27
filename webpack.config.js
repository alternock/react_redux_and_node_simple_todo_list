var webpack = require('webpack');
var path = require('path');

console.log("path root: " + __dirname);

var config = {
  entry: path.resolve(__dirname + '/root/src/main.jsx'),
  output: {
    path: path.resolve(__dirname + '/root/build/'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true    
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.js|.jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react']
        }
      }
    ]
  }
};

module.exports = config;