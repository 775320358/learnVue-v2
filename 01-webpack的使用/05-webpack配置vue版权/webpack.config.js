const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //动态的获取路径
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            //当加载的图片，小于limit时，会将图片编译成base64字符串形式
            //当加载的图片，大于limit时，需要使用file-loader进行编译
            limit: 13000,
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        //exclude:排除
        //include:包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve: {
    extensions:['.js','.css','.vue'],
    //alias:别名
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归qjc所有')
  ]
}