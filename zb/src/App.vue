<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="item in list">
        {{item.cate}}
        <ol>
          <li v-for="(num,key) in item.list" :class="{'bd1':key == 0, 'bd2':key == 1}">
            {{num.title}}
          </li>
        </ol>
      </li>
    </ul>
    <a v-bind:href="url" :class="{'bd bd1':color, 'bd bd2':!color}" :title="title" :style="{'font-size':fontsize + 'px'}">百度一下</a>
    <br>
    <input type="text" v-model="msg" placeholder="请输入">
    <button v-on:click="setnum()" style="margin: 0px 10px">初始化</button>
    <button v-on:click="setcolor()">改变颜色</button>
    <p ref="p">{{msg}}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
      list: [
        {
          "cate":"12",
          "list":[
            {'title':'111'},
            {'title':'222'}
          ]
        },
        {
          "cate":"34",
          "list":[
            {'title':'333'},
            {'title':'444'}
          ]
        }
      ],
      url: 'http://www.baidu.com',
      color: false,
      title: 'www.baidu.com',
      fontsize: 15,
      msg: ''
    }
  },
  methods: {
    setnum () {
      this.msg = '',
      this.$refs.p.style.color = "#000"
    },
    setcolor () {
      this.$refs.p.style.color = "#DC38E8"
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  .bd {
    text-decoration: none;
  }
  .bd1 {
    color: #E86363;
  }
  .bd2 {
    color: #6652E2;
  }
</style>
