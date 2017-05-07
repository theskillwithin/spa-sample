const webpack           = require('webpack');
const ExtrackTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./client.js', './main.css'],
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtrackTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-easy-import')({ glob: true })
        ]
      }
    }),
    new ExtrackTextPlugin('app.css')
  ],
  devtool: 'source-map'
};
