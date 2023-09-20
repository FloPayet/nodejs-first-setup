const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    hot: true
  }
}
