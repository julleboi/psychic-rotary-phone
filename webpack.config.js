const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(_env, argv) {
  const isProd = argv.mode === "production";
  const isDev = !isProd;

  return {
    mode: isProd ? "production" : "development",
    devtool: isDev && "cheap-module-source-map",
    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
     path: path.resolve(__dirname, "dist"),
     filename: "assets/js/[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProd ? "production" : "development",
          },
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          loader: "url-loader",
          options: { limit: 8192, name: "static/media/[name].[ext]" },
        },
      ],
    },
    resolve: { extensions: [".js", ".jsx"] },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development")
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        inject: true
      }),
      isProd && new MiniCssExtractPlugin({
        filename: "assets/css/[name].css",
        chunkFilename: "assets/css/[name].chunk.css"
      }),
    ].filter(Boolean),
    optimization: {
      minimize: isProd,
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `${cacheGroupKey}.${packageName.replace("@", "")}`;
            }
          },
          common: {
            minChunks: 2,
            priority: -10
          }
        }
      },
      runtimeChunk: "single"
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true
    },
    performance: {
      hints: false
    }
  };
};