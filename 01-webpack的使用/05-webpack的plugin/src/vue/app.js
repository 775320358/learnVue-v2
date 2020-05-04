export default {
  template: `
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <div>{{name}}</div>
  </div>
  `,
  data(){
    return{
      message: 'Hello World',
      name:'julice'
    }
  },
  methods:{
    btnClick(){}
  }
}