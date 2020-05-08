import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state: {
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
      name:'kobe',
      age:42,
      height:1.98
    }
  },
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload){
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // state.info.name = 'qjc'
      // state.info['address'] = '洛杉矶'   //做不到响应式
      // Vue.set(state.info, 'address', '洛杉矶')
      // delete state.info.age   //做不到响应式
      Vue.delete(state.info, 'age')
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state, getters) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

//3.导出
export default store
