var path = require("path");

module.exports = {
  devtool: 'eval-source-map',
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
