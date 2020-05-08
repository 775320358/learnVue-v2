<template>
  <div id="app">
    <h2>-----App组件----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
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
    }
  }
}
</script>

<style>
</style>
