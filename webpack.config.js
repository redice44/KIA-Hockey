module.exports = {
  entry: "./src/app/app.js",
  output: {
    path: "./public/js/",
    filename: "bundle.js",
    sourceMapFilename: "bundle.map"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
};
