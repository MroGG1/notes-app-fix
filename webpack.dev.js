const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 8080,

    hot: true,
  },
});
