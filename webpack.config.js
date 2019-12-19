var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

var browserConfig = {
  watch: true,
  entry: "./src/browser/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        exclude: /node_module/,
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }]
        },
      
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

var serverConfig = {
  watch: true,
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        exclude: /node_module/,
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }]
        },
      
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];
