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
    sourceMapFilename: "js/bundle.map"
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
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join('!'))
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
