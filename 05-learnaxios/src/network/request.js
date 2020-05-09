import axios from 'axios'
export function instance1(config, success, failure) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })

  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}

export function instance2(config) {
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })
  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}

//真正方法
export function request(config) {
  return new Promise((reslove, reject) => {
    const instance = axios.create({
      baseURL: 'http://httpbin.org',
      timeout: 5000
    })
    instance(config)
      .then(res => {
        reslove(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

//axios.create本身就是promise  终极方案
export function requestc(config) {
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })
  return instance(config)
}
