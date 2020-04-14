const path = require('path');
const webpack = require('webpack');
const WebpackNodeExternals = require('webpack-node-externals');
const ReloadServerPlugin = require('reload-server-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  target: 'node',
  entry: {
    index: ['./src/index.ts'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  externals: [
    WebpackNodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new ReloadServerPlugin({
      script: path.resolve('dist', 'index.js'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
