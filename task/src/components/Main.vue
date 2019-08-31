<template>
  <div>
    <div class="select">
      <div class="select-left select-lr">
        <div class="pamItem" v-for="(msg3, key) in msg3" :class="'pamItem'+key">
          <p>{{msg3.title}}</p>
          <div class="pamItem-right">
            <el-button type="text" v-for="(list, key2) in msg3.list" @click="add(list, key, key2); set()" :id="msg2[key]+key2" :class="msg2[key]">{{list}}</el-button>
          </div>
        </div>
      </div>
      <div class="select-right select-lr"></div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <button class="remove" @click="remove()"></button>
        <el-breadcrumb-item>全部</el-breadcrumb-item>
        <el-breadcrumb-item v-for="msg in msg">{{msg}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">综合</el-menu-item>
        <el-menu-item index="2">评分</el-menu-item>
        <el-submenu index="3">
          <template slot="title">价格</template>
          <el-menu-item index="3-1">从高到低</el-menu-item>
          <el-menu-item index="3-2">从低到高</el-menu-item>
        </el-submenu>
      </el-menu>
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
      <el-col :span="8" v-for="(o, index) in 15" :key="o" :offset="index > 0 ? 15 : 0">
        <el-card :body-style="{ padding: '0 0 15px 0' }" shadow="hover">
          <img src="/img/Moblie-phone/小米/CC9/cover_1.jpg" class="image">
          <span style="padding-left: 10px; color: #ff0e00;">￥2599</span>
          <div class="el-card-main">
            <a class="phonename phone-nt" style="font-size: 13px;">小米(MI) 小米CC9</a>
            <a class="phonetitle phone-nt">美图定制版 屏幕指纹 3200万美颜自拍 4800万超广角三摄</a>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
            <el-checkbox label="对比"></el-checkbox>
          </div>
        </el-card>
      </el-col>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from './Footer.vue'

export default {
  components: {
    'v-footer': footer
  },
  data () {
    return {
      value: 3.7,
      activeIndex: '1',
      currentDate: new Date(),
      msg: [],
      msg1: [],
      msg2: ['brand', 'price', 'size', 'unlock', 'screen', 'cpu', 'rom', 'ram', 'front', 'rear', ],
      msg3: [
        {
          'title': '品牌：',
          'list': ['小米', '华为', '索尼', 'OPPO', 'vivo', '三星', '一加', '魅族', 'realme', '努比亚', '谷歌', '苹果', '荣耀', '红米', '诺基亚', ],
        },
        {
          'title': '价格：',
          'list': ['500元以上', '500-1000元', '1000-1500元'],
        },
        {
          'title': '主屏尺寸：',
          'list': ['4.5-4.9英寸', '5.0英寸', '5.1-5.4英寸',],
        },
        {
          'title': '解锁方式：',
          'list': ['面部解锁', '虹膜解锁', '屏幕解锁',],
        },
        {
          'title': '屏幕类型：',
          'list': ['水滴屏', '刘海屏', '全面屏', '打孔屏'],
        },
        {
          'title': 'CPU型号：',
          'list': ['骁龙855', '骁龙845', '骁龙8535', '骁龙821', '骁龙820', '骁龙730', '骁龙712', '骁龙710', '骁龙675', '骁龙670', '骁龙660', '骁龙653', '骁龙636', '骁龙625', '联发科', '麒麟',],
        },
        {
          'title': 'ROM容量：',
          'list': ['16GB', '32GB', '64GB', '128GB'],
        },
        {
          'title': 'RAM容量：',
          'list': ['2GB', '3GB', '4GB', '6GB'],
        },
        {
          'title': '前置摄像头：',
          'list': ['500万像素', '800万像素', '1300万像素',],
        },
        {
          'title': '后置摄像头：',
          'list': ['800万像素', '1200万像素', '1300万像素'],
        }
      ],
    }
  },  
  methods: {
    add (e, k, y) {
      var m = this.msg;
      var u = this.msg1;
      var n = this.msg2;
      var c = u.indexOf(n[k]);
      m.push(e);
      u.push(n[k]);
      var l = m.length-1;
      var a = document.getElementsByClassName(n[k]);
      var b = document.getElementById(n[k]+y);
      for (var i = 0; i < a.length; i++) {
        a[i].disabled = false;
        a[i].style.color = '#d6d6d6';
      };
      b.disabled = true;
      b.style.color = '#409effd4';
      if (c != -1) {
        m.splice(c, 1, e);
        m.splice(l, 1);
      };
      
      // 测试面包屑
      // console.log(c);
      // for (var j = 0; j < m.length; j++) {
      //   console.log("第"+ (j+1) +"个元素："+ m[j] + u[j]);
      // }
    },
    set () {
      var a = document.getElementsByClassName("remove")[0];
      a.style.cssText = "z-index: 0;";
    },
    remove () {
      var l = this.msg.length;
      var k = this.msg1.length;
      var a = document.getElementsByClassName("remove")[0];
      var b = document.getElementsByClassName("el-button--text");
      for (var i = 0; i < b.length; i++) {
        b[i].disabled = false;
        b[i].style.color = '#409effd4';
      };
      a.style.cssText = "z-index: -1;";
      this.msg.splice(0, l);
      this.msg1.splice(0, k);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}

</script>

<style lang="scss" scoped src="../../public/css/main.scss"></style>
<style lang="scss">
  @import '/css/main.css';
</style>