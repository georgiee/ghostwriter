const path = require('path');
const perfectionist = require('perfectionist');
const discardComments = require('postcss-discard-comments');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    application: path.join(__dirname, 'src', 'index.js'),
  },
  context: path.resolve(__dirname, "src"),
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.scss'],
  },
  output: {
    path: path.join(__dirname, 'static', 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new OptimizeCssAssetsPlugin({
      cssProcessor: discardComments,
      canPrint: false
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: perfectionist,
      cssProcessorOptions: {
        format: 'compact'
      },
      canPrint: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      }
    ]
  }
};

