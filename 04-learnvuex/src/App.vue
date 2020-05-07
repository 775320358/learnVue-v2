<template>
  <div id="app">
    <h2>-----App组件----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
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
}
</script>

<style>
</style>
