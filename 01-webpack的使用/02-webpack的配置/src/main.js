//1.使用common.js的模块化规范
const {add,mul} = require('./js/mathUtil.js')
console.log(add(20,30));
console.log(mul(20,30));

//2.使用ES6的模块化规范
import {name,age} from "./js/info.js"
console.log(name);
console.log(age);
