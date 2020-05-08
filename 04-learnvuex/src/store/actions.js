import {
  UPDATEINFO,
  AUPDATEINFO,
} from './mutations-types'

export default {
  //异步操作
  //context:上下文
  [AUPDATEINFO](context, payload) {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        context.commit(UPDATEINFO)
        console.log(payload);
        reslove('111111')
      }, 1000)
    })
  }
}