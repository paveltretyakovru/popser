var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = [
  {
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-source-map',
    entry: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/app',
    ],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/',
    },
    plugins: [
      new webpack.DefinePlugin({
        APP_MODE: JSON.stringify('SITE'),
      }),
      new WebpackNotifierPlugin({title: 'Webpack!', alwaysNotify: true}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          include: [path.resolve(__dirname, 'src')],
        },
      ],
      loaders: [
        {
          loaders: ['react-hot', 'babel-loader'],
          include: [path.resolve(__dirname, 'src')],
          test: /\.js$/,
          plugins: ['transform-runtime'],
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader',
        },
      ],
    },
    postcss: function () {
      return [autoprefixer, precss];
    },
  },
  {
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-source-map',
    devtool: '#inline-source-map',
    entry: [
      'babel-polyfill',
      './src/app',
    ],
    output: {
      path: path.join(__dirname, 'ext'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [
      new webpack.DefinePlugin({
        APP_MODE: JSON.stringify('EXTENSION'),
      }),
      new WebpackNotifierPlugin({title: 'Webpack!', alwaysNotify: true}),
      new webpack.optimize.OccurenceOrderPlugin(),
    ],
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          include: [path.resolve(__dirname, 'src')],
        },
      ],
      loaders: [
        {
          loaders: ['babel-loader'],
          include: [path.resolve(__dirname, 'src')],
          test: /\.js$/,
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader',
        },
      ],
    },
    postcss: function () {
      return [autoprefixer, precss];
    },
  },
]
