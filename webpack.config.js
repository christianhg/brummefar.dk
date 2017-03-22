const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js' 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        enforce: 'pre',
        exclude: path.resolve(__dirname, 'src/vendor'),
        test: /\.js$/,
        use: 'standard-loader'
      },
      {
        test: /\.(jpg|woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'highlight-loader', 'markdown-loader']
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/googlecfb0a8661b3fb380.html'
      }
    ]),
    new ExtractTextPlugin('[hash].css'),
    new HtmlWebpackPlugin({
      template: './src/main.pug'
    })
  ]
}
