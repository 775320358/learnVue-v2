const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //动态的获取路径
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      //css-loader只负责将css文件进行加载
      //style-loader负责将样式添加到dom中
      //使用多个loader时，是从右向左
      use: [
        // {loader: "style-loader"},
        // {loader: "css-loader"}
        "style-loader","css-loader"
      ]
    }]
  }
}