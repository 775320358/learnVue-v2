<template>
  <div id="app">
    <h2>----------info对象的内容是否是响应式的 -----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h2>-----App组件----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>-----vuex getters-------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
    <h2>---Hello---</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT, INCREMENTCOUNT, DECREMENT, ADDSTUDENT, UPDATEINFO, AUPDATEINFO} from './store/mutations-types';
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件'
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtration() {
      this.$store.commit(DECREMENT)
    },
    addCount(count) {
      //payload ：负载
      //1.普通的提交风格
      // this.$store.commit('incrementCount',count)
      //2.特殊的提交风格
      this.$store.commit({
        type: INCREMENTCOUNT,
        count
      })
    },
    addStudent() {
      const stu = { id: 114, name: 'Allen', age: 45 }
      this.$store.commit(ADDSTUDENT, stu)
    },
    updateInfo() {
      // this.$store.commit(UPDATEINFO)
      this.$store
      .dispatch(AUPDATEINFO, '我是携带的信息')
      .then(res => {
        console.log('里面完成了提交');        
        console.log(res);
      })
    }
  }
}
</script>

<style>
</style>
