const Path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: Path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]    
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

//Antes de estudar loardes
// const path = require('path')
// module.exports = {
//   entry: {
//     nomeArq: './src/index.js',
//     outroArq: './src/hello.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'public'), //mesma coisa que /Documents/VSCode/.../public
//     filename: '[name]bundle.min.js'
//   }, 
//   mode: 'development' //tem development e production
// }