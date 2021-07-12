// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    // Errors should be considered fatal in development
    require.resolve('react-error-overlay'),
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    port: 8080,
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url 
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
});
