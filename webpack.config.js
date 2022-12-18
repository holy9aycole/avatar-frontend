const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.jsx",
  mode: devMode ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    compress: true,
    port: 3000,
    open: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: path.resolve(__dirname, "public"),
                },
              },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [].concat(
    devMode
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: "bundle.css",
          }),
        ]
  ),
};
