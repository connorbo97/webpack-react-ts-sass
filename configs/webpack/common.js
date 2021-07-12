// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.(js|jsx)?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: [/\.tsx?$/],
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          { loader: "css-loader", options: { modules: { auto: true, localIdentName: "[name]--[hash:base64:5]" } } },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["src/assets/scss"],
              }
            },
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name]_[hash].css' }), new HtmlWebpackPlugin({ template: "index.html.ejs" })],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  performance: {
    hints: false,
  },
};
