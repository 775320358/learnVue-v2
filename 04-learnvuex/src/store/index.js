import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions';
import getters from "./getters";
import moduleA from './mudules/muduleA'
//1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [{
      id: 110,
      name: 'why',
      age: 18
    },
    {
      id: 111,
      name: 'kobe',
      age: 40
    },
    {
      id: 112,
      name: 'james',
      age: 36
    },
    {
      id: 113,
      name: 'juice',
      age: 10
    },
  ],
  info: {
    name: 'kobe',
    age: 42,
    height: 1.98
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

//3.导出
export default store
