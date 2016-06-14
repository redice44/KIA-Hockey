var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/app/app.js",
  devtool: "source-map",
  output: {
    path: "./public/js/",
    filename: "bundle.js",
    sourceMapFilename: "bundle.map"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/bundle.css', {
      allChunks: true
    })
  ]
};
