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
    <button v-on:click="requestData()" @click="Event($event)" data-aid="123">请求数据</button>
    <ul>
      <li v-for="(a,key) in list2">
        {{key}}
      </li>
    </ul>
    <hr>
    <input type="text" v-model="msg2" placeholder="请输入" @keyup="add($event)">
    <button @click="add2()" style="margin-left: 10px">添加</button>
    <p>未勾选</p>
    <ul>
      <li v-for="(b,key) in list3" v-if="!b.checked">
        <input type="checkbox" v-model="b.checked" @change="saveList()">
        {{b.title}}
        <button @click="remove(key)" style="margin: 5px">删除</button>
      </li>
    </ul>
    <p>已勾选</p>
    <ul>
      <li v-for="(b,key) in list3" v-if="b.checked">
        <input type="checkbox" v-model="b.checked" @change="saveList()">
        {{b.title}}
        <button @click="remove(key)" style="margin: 5px">删除</button>
      </li>
    </ul>
    <hr>
    <!-- <v-index :msg="msg3"></v-index> -->
    <router-link :to="'/index?id=' + msg3">组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import storage from './model/storage.js';
// import index from './components/Index.vue';

export default {
  name: 'app',
  // components: {
  //   // HelloWorld
  //   'v-index': index
  // },
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
      msg: '',
      list2: [],
      list3: [],
      msg2: '',
      msg3: '组件'
    }
  },
  methods: {
    setnum () {
      this.msg = '',
      this.$refs.p.style.color = "#000"
    },
    setcolor () {
      this.$refs.p.style.color = "#DC38E8"
    },
    requestData () {
      for (var i=0; i<10; i++) {
        this.list2.push(i)
      }
    },
    Event (e) {
      console.log(e);
      e.srcElement.style.backgroundColor = "#3A95BF";
      console.log(e.srcElement.dataset.aid)
    },
    add2 () {
      this.list3.push({
        title: this.msg2
      });
      this.msg2 = '';
      // localStorage.setItem('list3', JSON.stringify(this.list3));
      storage.set('list3', this.list3)
    },
    add (e) {
      if (e.keyCode == 13) {
        this.list3.push({
          title: this.msg2
        });
        this.msg2 = ''
      };
      // localStorage.setItem('list3', JSON.stringify(this.list3));
      storage.set('list3', this.list3)
    },
    remove (key) {
      this.list3.splice(key,1);
      // localStorage.setItem('list3', JSON.stringify(this.list3));
      storage.set('list3', this.list3)
    },
    saveList () {
      storage.set('list3', this.list3)
    }
  },
  mounted () {  /*生命周期函数*/
    // var list3 = JSON.parse(localStorage.getItem('list3'));
    var list3  = storage.get('list3');
    if (list3) {  /*判断是否为空*/
      this.list3 = list3
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
  li {
    list-style: none;
  }
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