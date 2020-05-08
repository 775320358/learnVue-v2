<template>
  <div id="app">
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
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return{
      message:'我是App组件',
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtration() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      //payload ：负载
      //1.普通的提交风格
      // this.$store.commit('incrementCount',count)
      //2.特殊的提交风格
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 114, name: 'Allen',age: 45}
      this.$store.commit('addStudent',stu)
    }
  }
}
</script>

<style>
</style>
