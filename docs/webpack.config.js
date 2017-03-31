var DashboardPlugin = require('webpack-dashboard/plugin');
var postcssImport = require('postcss-import')
var autoprefixer = require('autoprefixer')
var precss = require('precss')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      }
    ]
  },
  postcss(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
    }),
      autoprefixer,
      precss
    ]
  },
  plugins: [
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: 'public'
  }
}