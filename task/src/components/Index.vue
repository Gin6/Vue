<template>
  <div>
  <el-carousel :style="{ height: height }" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="(item, bkey) in background">
      <img :src="item.src" alt="background">
    </el-carousel-item>
  </el-carousel>
  <div class="header">
  	<div class="header-b">
  		<button @click="drawer = true" type="primary"><i class="el-icon-s-unfold"></i></button>
  	</div>
  	<h2>MYPHONE</h2>
  	<div class="header-icon">
  		<a href=""><i class="el-icon-user"></i></a>
	  	<a><i class="el-icon-search"></i></a>
	  	<a href=""><i class="el-icon-shopping-cart-2"></i></a>
  	</div>
  </div>
  <el-drawer
	  title="手机品牌"
	  :visible.sync="drawer"
	  :direction="direction"
	  :before-close="handleClose">
	  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
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
              <el-menu-item :index="'2-1-' + key+1" v-for="(abm, key) in abn.model">{{abm.title}}</el-menu-item>
            </el-submenu>
	      </el-submenu>
	  </el-menu>
  </el-drawer>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
  	return {
  		height: '',
  		background: [
  			{
  				'src': '/img/sony.jpg'
  			},
  			{
  				'src': '/img/iPhone.jpg'
  			},
  			{
  				'src': '/img/pixel.jpg'
  			}
  		],
  		isCollapse: true,
  		drawer: false,
      direction: 'ltr',
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
  created () {
  	this.screenHeight();
  },
  methods: {
  	screenHeight () {
  		this.height = window.innerHeight + 'px';
  	},
  }
}
</script>

<style lang="scss" scoped>
  .header {
  	position: absolute;
  	width: 50%;
  	top: 3%;
  	right: 0px;
  	z-index: 2;
  	h2 {
  		position: relative;
  		width: 300px;
  		right: 150px;
  		text-align: center;
  		font-size: 50px;
  		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Î¢ÈíÑÅºÚ",Arial,sans-serif;
  	}
  	.header-icon {
  		position: absolute;
  		width: 100%;
  		top: 40%;
  		right: 0px;
  		text-align: center;
  		i {
  			font-size: 25px;
  			margin: 0px 20px;
  			color: #000;
  			transition: 0.3s;
			-moz-transition: 0.3s;	/* Firefox 4 */
			-webkit-transition: 0.3s;	/* Safari ºÍ Chrome */
			-o-transition: 0.3s;	/* Opera */
  			&:hover {
  				color: #c30a0a;
  				transition: 0.3s;
				-moz-transition: 0.3s;	/* Firefox 4 */
				-webkit-transition: 0.3s;	/* Safari ºÍ Chrome */
				-o-transition: 0.3s;	/* Opera */
  			}
  		}
  	}
  	.header-b {
  		position: absolute;
  		top: 38%;
  		left: -100%;
  		width: 100%;
  		text-align: center;
  		button {
  			background: #0000;
  			border: none;
  			outline: none;
  			i {
  				font-size: 30px;
  			}
  		}
  	}
  }
</style>

<style lang="scss">
  .el-carousel__container {
    height: 100%;
  }
  .el-drawer__close-btn {
    outline: none;
  }
  .el-drawer__header {
    text-align: center;
    font-size: 20px;
    span {
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Î¢ÈíÑÅºÚ",Arial,sans-serif;
    }
  }
  .el-drawer {
    overflow: auto;
  }
  .el-drawer::-webkit-scrollbar {
    display: none;
  }
</style>