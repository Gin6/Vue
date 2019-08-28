<template>
  <div>
  <el-carousel :style="{ height: height }" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in background">
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
	          <span>导航一</span>
	        </template>
	        <el-menu-item-group>
	          <template slot="title">分组一</template>
	          <el-menu-item index="1-1">选项1</el-menu-item>
	          <el-menu-item index="1-2">选项2</el-menu-item>
	        </el-menu-item-group>
	        <el-menu-item-group title="分组2">
	          <el-menu-item index="1-3">选项3</el-menu-item>
	        </el-menu-item-group>
	        <el-submenu index="1-4">
	          <template slot="title">选项4</template>
	          <el-menu-item index="1-4-1">选项1</el-menu-item>
	        </el-submenu>
	      </el-submenu>
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>导航一</span>
	        </template>
	        <el-menu-item-group>
	          <template slot="title">分组一</template>
	          <el-menu-item index="2-1">选项1</el-menu-item>
	          <el-menu-item index="2-2">选项2</el-menu-item>
	        </el-menu-item-group>
	        <el-menu-item-group title="分组2">
	          <el-menu-item index="2-3">选项3</el-menu-item>
	        </el-menu-item-group>
	        <el-submenu index="2-4">
	          <template slot="title">选项4</template>
	          <el-menu-item index="2-4-1">选项1</el-menu-item>
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
  	}
  },
  created () {
  	this.screenHeight()
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