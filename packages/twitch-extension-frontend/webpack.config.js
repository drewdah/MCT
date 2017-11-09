const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const createSrcPath = (pathname) => path.resolve(__dirname, 'src', pathname);

const config = {
  entry: {
    config: './src/config',
    live_config: './src/live_config',
    viewer: './src/viewer'
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js',
    chunkFilename: '[name].js'
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), exclude: /node_modules/ },
      { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract("css-loader!sass-loader"), exclude: /node_modules/ },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    inline: true,
    open: true,
    port: 8080
  },

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css' }),
  ]
};

module.exports = config;
