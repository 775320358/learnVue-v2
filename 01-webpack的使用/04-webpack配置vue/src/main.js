//1.使用common.js的模块化规范
const {add,mul} = require('./js/mathUtil.js')
console.log(add(20,30));
console.log(mul(20,30));

//2.使用ES6的模块化规范
import {name,age} from "./js/info.js"
console.log(name);
console.log(age);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

document.writeln('<h2>你好啊</h2>')

//4.使用vue进行开发
import Vue from 'vue'
const app = new Vue({
  el:'#app',
  data:{
    message:'Hello World'
  }
})