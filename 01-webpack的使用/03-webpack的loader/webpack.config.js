const path = require('path')
module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname, 'dist'),//动态的获取路径
    filename:'bundle.js'
  },
}