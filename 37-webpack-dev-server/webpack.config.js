const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true, //vai compactar tudo como um arquivo .zip
    port: 8000 //muda a porta que ele vai rodar
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist') ,
    filename: '[name].min.js' 
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, // Regra para arquivos CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/, // Regra para arquivos JavaScript
        use: ['babel-loader']
      }
    ]
  }
}
