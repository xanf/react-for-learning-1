var path = require('path');
var webpack = require('webpack');
var entryPoint = [
  'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server'
];

module.exports = {
  devtool: 'inline-source-maps',
  entry: entryPoint.concat([
    './src/index'
  ]),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules&sourceMap&root=.&localIdentName=[path][name]---[local]---[hash:base64:5]",
        include: path.join(__dirname, 'src')
      }
    ]
  },
  watch: true
};