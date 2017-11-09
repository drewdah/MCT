const path = require('path');

const createSrcPath = (pathname) => path.resolve(__dirname, 'src', pathname);

const config = {
  entry: {
    config: './src/config/index.js',
    live_config: './src/live_config/index.js',
    viewer: './src/viewer/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },

  resolve: {
    alias: {
      components: createSrcPath('components'),
      viewer: createSrcPath('viewer'),
      config: createSrcPath('config'),
      liveconfig: createSrcPath('live_config'),
      reducers: createSrcPath('reducers')
    }
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    inline: true,
    open: true,
    port: 8080
  }
};

module.exports = config;
