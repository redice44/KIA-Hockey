var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');

const sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + Path.resolve(__dirname, './src')
];

module.exports = {
  entry: {
    app: ["./src/app/app.js"]
  },
  devtool: "source-map",
  output: {
    path: Path.join(__dirname, './public/'),
    filename: "js/bundle.js",
    sourceMapFilename: "[file].map"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join('!'))
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css')
  ],  
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [Path.join(__dirname, './src')]
  }
};
