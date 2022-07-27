const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(__dirname);

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,

        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(css|scss)$/,
        include: [/client\/stylesheets\/modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build',
    },
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/api': '' },
      },
    },
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
