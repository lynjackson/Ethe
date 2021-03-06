const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },

  devServer: {
    contentBase: './dist',
    port: 3000,
    publicPath: '/',
    //publicPath allows you to specify the base path for all the assets within your application. 
    historyApiFallback: true,
    //historyAPIFallback will redirect 404s to /index.html.
    
    // publicPath: "http://localhost:3000/dist/",
    // hotOnly: true
  },
  devtool: 'inline-source-map',
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // {
      //   test: /\.(png|svg|jpg|gif|jpeg)$/,
      //   loader: "url-loader"
      // },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: "file-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.(otf|ttf|woff|eot)$/,
        loader: "file-loader"
      },
      // {
      //   test: /\.(png|svg|jpg|gif|jpeg)$/,
      //   loader: "html-loader"
      // }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  
  
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'output',
      template: './index.html'
    })
  ]
};