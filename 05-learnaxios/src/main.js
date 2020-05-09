import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//1.axios基本使用
axios({
  url: 'http://httpbin.org' //http://httpbin.org 网络测试
}).then(res => {
  console.log(res);
})

// axios({
//   url: 'http://httpbin.org',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 3.使用全局axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 5000

// //2.axios发送并发请求
// axios.all([
//   axios({
//     url: '/home'
//   }),
//   axios({
//     url: '/data'
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'http://httpbin.org',
//   timeout:5000
// })

// instance1({
//   url:'/home'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url:'/data',
//   params:{
//     type:1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL:'http://111.222.111.1.org',
//   timeout:10000
// })

//5.封装request模块
import {
  instance1, instance2, request, requestc
} from './network/request'

// instance1({
//   url: '/home'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// instance2({
//   baseConfig:{},
//   success:function(res){},
//   failure:function(err){}
// })

// request({
//   url:'/home'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

requestc({
  url:'/image'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
