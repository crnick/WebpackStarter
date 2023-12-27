const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename:"[name][ext]" // so name stays the same
  },
  devtool: "source-map", // get js map file
  devServer: {
    //development server
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true, //opens browser automatically
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exlude: /node_modules/,
        use: ["babel-loader"],
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // i is if it is case sensitive.
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "/src/template.html",
    }),
  ],
};
