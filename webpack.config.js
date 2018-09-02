var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "build/bundle.js",
    sourceMapFilename: "build/bundle.map"
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /(node_modules)/,
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
