const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.bundle.js",
    clean: true,
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/],
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  stats: true,
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "videos/", to: "videos/", context: "src/" },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
  ],
};
