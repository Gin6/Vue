<template>
  <div>
  <el-carousel :style="{ height: height }" direction="vertical" :autoplay="false">  <!-- 跑马灯 -->
    <el-carousel-item v-for="(item, key) in background">
      <img :src="item.src" alt="background">
    </el-carousel-item>
  </el-carousel>
  <div class="header">
  	<div class="header-b">
  		<button @click="drawer = true" type="primary"><i class="el-icon-s-unfold"></i></button>
  	</div>
  	<h2>MYPHONE</h2>
  	<div class="header-icon">
  		<a @click="dialogVisible = true" style="position: relative;">  <!-- pointer-events: none;禁用点击 -->
        <i class="el-icon-user"></i>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </a>
	  	<a @click="drawerttb = true" type="primary"><i class="el-icon-search"></i></a>
	  	<a :plain="true" @click="open3"><i class="el-icon-star-off"></i></a>
      <a @click="dialogVisible1 = true"><i class="el-icon-setting"></i></a>
  	</div>
  </div>
  <el-dialog
	  :visible.sync="dialogVisible"
	  width="25%">  <!-- 登录 -->
	  <v-login></v-login>
	  </span>
  </el-dialog>
  <el-dialog
    :visible.sync="dialogVisible1"
    :custom-class="customclass"
    width="25%">  <!-- 设置 -->
    <v-setting></v-setting>
    </span>
  </el-dialog>
  <el-drawer
      :visible.sync="drawerttb"
      :direction="directionttb"
      :show-close="showclose"
      :modal="modalttb"
      :custom-class="eldrawerttb">  <!-- 搜索框 -->
      <v-search></v-search>
  </el-drawer>
  <el-drawer
	  title="Mobile Phone Brands"
	  :visible.sync="drawer"
	  :direction="direction"
    :destroy-on-close="destroyonclose">  <!-- 侧栏 -->
	  <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
	      <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>IOS</span>
	        </template>
          <!-- IOS机型循环 -->
            <el-submenu :index="'1-' + key+1" v-for="(ibn, key) in ibrand">
              <template slot="title">{{ibn.name}}</template>
              <el-menu-item :index="'1-1-' + key+1" v-for="(ibm, key) in ibn.model">{{ibm.title}}</el-menu-item>
            </el-submenu>
	      </el-submenu>
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>Android</span>
	        </template>
          <!-- Android机型循环 -->
            <el-submenu :index="'2-' + key+1" v-for="(abn, key) in abrand">
              <template slot="title">{{abn.name}}</template>
              <el-menu-item :index="'2-1-' + key+1" v-for="(abm, key) in abn.model" @click="go();">{{abm.title}}</el-menu-item>
            </el-submenu>
	      </el-submenu>
	  </el-menu>
  </el-drawer>
  </div>
</template>

<script>
import login from './Login.vue'
import search from './Search.vue'
import setting from './Setting.vue'

export default {
  components: {
  	'v-login': login,
  	'v-search': search,
    'v-setting': setting
  },
  data () {
  	return {
  		height: '',
  		background: [
  			{
  				'src': '/img/Background-image/iPhone2.jpg'
  			},
  			{
  				'src': '/img/Background-image/xiaomi.jpg'
  			},
  			{
  				'src': '/img/Background-image/sony.jpg'
  			}
  		],
  		isCollapse: true,
  		drawer: false,
  		drawerttb: false,
  		dialogVisible: false,
      dialogVisible1: false,
  		showclose: false,
  		modalttb: false,
      destroyonclose: true,
  		eldrawerttb: "eldrawerttb",
      direction: 'ltr',
      directionttb: 'ttb',
      customclass: 'dialog',
      ibrand: [
        {
          'name': 'iPhone X',
          'model': [
            { 'title': 'iPhone XS' },
            { 'title': 'iPhone XS Max' },
            { 'title': 'iPhone XR' },
            { 'title': 'iPhone X' }
          ]
        },
        {
          'name': 'iPhone 6/6s/7/8 Plus',
          'model': [
            { 'title': 'iPhone 8 Plus' },
            { 'title': 'iPhone 7 Plus' },
            { 'title': 'iPhone 6s Plus' },
            { 'title': 'iPhone 6 Plus' }
          ]
        },
        {
          'name': 'iPhone 6/6s/7/8',
          'model': [
            { 'title': 'iPhone 8' },
            { 'title': 'iPhone 7' },
            { 'title': 'iPhone 6s' },
            { 'title': 'iPhone 6' }
          ]
        },
        {
          'name': 'iPhone SE',
          'model': [
            { 'title': 'iPhone SE' },
            { 'title': 'iPhone 5s' },
            { 'title': 'iPhone 5' }
          ]
        },
      ],
      abrand: [
        {
          'name': '小米',
          'model': [
            { 'title': 'Xiaomi CC9' },
            { 'title': 'Xiaomi 9' },
            { 'title': 'Xiaomi 8' },
            { 'title': 'Xiaomi 6' },
            { 'title': 'Xiaomi 5' }
          ]
        },
        {
          'name': '华为',
          'model': [
            { 'title': 'P20 Pro' },
            { 'title': 'Honnor 6X' },
            { 'title': 'Honnor 5X' },
            { 'title': 'Honnor 4X' }
          ]
        }
      ]
  	}
  },
  created () { //页面加载前生命周期函数
  	this.screenHeight();
  },
  methods: {
  	screenHeight () { //index页面高度窗口自适应
  		this.height = window.innerHeight + 'px';
  	},
  	open3() {
        this.$message({
          message: '抱歉 , 该功能暂未开放',
          type: 'warning',
          center: true
        });
    },
    go () {
      this.$router.push("/details/0")
    }
  }
}
</script>

<style lang="scss" scoped src="../../public/css/index.scss"></style>
<style lang="scss">
  @import '/css/index.css';
</style>