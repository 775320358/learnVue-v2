import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  ADDSTUDENT,
  UPDATEINFO,
} from './mutations-types'

export default {
   //方法
   [INCREMENT](state) {
    state.counter++
  },
  [DECREMENT](state) {
    state.counter--
  },
  [INCREMENTCOUNT](state, payload) {
    state.counter += payload.count
  },
  [ADDSTUDENT](state, stu) {
    state.students.push(stu)
  },
  [UPDATEINFO](state) {
    state.info.name = 'qjc'
    // state.info['address'] = '洛杉矶'   //做不到响应式
    // Vue.set(state.info, 'address', '洛杉矶')
    // delete state.info.age   //做不到响应式
    // Vue.delete(state.info, 'age')
  }
}