import {
  UPDATENAME,
  AUPDATENAME
} from '../mutations-types'
export default {
  state: {
    name:'zhangsan'
  },
  mutations: {
    [UPDATENAME](state, payload) {
      state.name = payload
    }
  },
  actions: {
    [AUPDATENAME](context) {
      console.log(context)
      console.log(context.rootGetters)
      console.log(context.rootState)      
      setTimeout(() => {
        context.commit(UPDATENAME, 'wangwu')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name += '111'
    },
    fullName2(state, getters){
      return getters.fullName + '222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
}