const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    server: "./src/server.ts",
    benchmark: "./src/benchmark.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  resolve: {
    mainFields: ["module", "main"],
    extensions: [".ts", ".js"],
  },
};
