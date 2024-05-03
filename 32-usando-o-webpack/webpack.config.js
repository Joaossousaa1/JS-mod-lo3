const path = require('path')

module.exports = {
  entry: {
    nomeArq: './src/index.js',
    outroArq: './src/hello.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'), //mesma coisa que /Documents/VSCode/.../public
    filename: '[name]bundle.min.js'
  }, 
  mode: 'development' //tem development e production
}