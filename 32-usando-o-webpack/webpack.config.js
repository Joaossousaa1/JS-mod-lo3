const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development' //tem development e production
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