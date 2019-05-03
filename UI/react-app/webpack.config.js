const path = require("path");

module.exports = {
  entry: path.join(process.cwd(), 'app/src/index'),
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s)?css$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
        }]
      }
    ],
  },
  target: 'web',
};