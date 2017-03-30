const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 9000
  },
  entry: {
    ga: './src/ga.js',
    main: './src/main.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        enforce: 'pre',
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
        use: ['html-loader', 'pug-html-loader']
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
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      title: 'brummefar.dk',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/main.pug'
    })
  ]
}
