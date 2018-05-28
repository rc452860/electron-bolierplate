const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'renderer', 'index')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'renderer')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader'
      }, {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true       //开启css modules
            }
          }
        ]
      }, {
        test: /\.(css)$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'sakura',
      template: './src/renderer/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'eval-source-map'
};