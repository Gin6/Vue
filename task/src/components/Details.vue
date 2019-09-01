<template>
  <div class="details">
    <div class="header">
      <el-carousel>
        <el-carousel-item v-for="item in coverimg" :key="item">
          <img class="coverimg" :src="item.src" alt="background">
        </el-carousel-item>
      </el-carousel>
      <p class="title">小米CC9美图定制版（8GB/256GB/全网通）参数</p>
      <router-link class="closelink" to="main">
        <el-link icon="el-icon-close">关闭</el-link>
      </router-link>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 16px;">重要参数</span>
        </div>
        <div v-for="o in msg" :key="o" class="text item">
          <p>{{o.title}}{{o.list}}</p>
        </div>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        <div class="evaluation">
          <p><i class="el-icon-document"></i>专业评测</p>
          <a class="a1" :title="title[0]" :href="url[0]"><img src="/img/Moblie-phone/小米/CC9/evaluation.jpg"></a>
          <a class="a2 aa" :href="url[1]">{{title[1]}}</a>
          <a class="a3 aa" :href="url[2]">{{title[2]}}</a>
        </div>
      </el-card>
    </div>
    <div class="main">
      <p class="main_title">详细参数</p>
      <v-parameter></v-parameter>
    </div>
    <img class="details-img" src="/img/Moblie-phone/小米/CC9/details.png">
  </div>
</template>

<script>
import parameter from './Parameter.vue'

export default {
  components: {
    'v-parameter': parameter
  },
  data () {
    return {
      value: 3.7,
      title: [
        '小米CC9评测:为了捉住少男少女的心 小米酿了瓶新酒',
        '小米CC9美图定制版开箱体验：仙女机来了',
        '小米CC9美图定制版评测：小仙女最爱，不像美颜的美颜自拍',
      ],
      url: [
        'https://tech.sina.com.cn/mobile/n/c/2019-07-02/doc-ihytcerm0883488.shtml',
        'https://baijiahao.baidu.com/s?id=1638031418710807594&wfr=spider&for=pc',
        'https://laoyaoba.com/html/news/newsdetail?source=pc&news_id=722764',
      ],
      coverimg: [
        {
          'src': '/img/Moblie-phone/小米/CC9/cover_1.jpg'
        },
        {
          'src': '/img/Moblie-phone/小米/CC9/cover_2.jpg'
        },
        {
          'src': '/img/Moblie-phone/小米/CC9/cover_3.jpg'
        }
      ],
      msg: [
        {
          'title': 'CPU ：',
          'list': '高通 骁龙710',
        },
        {
          'title': '后置 ：',
          'list': '4800万像素超高清摄像头+800万像素超广角摄像头+200万像素景深镜头',
        },
        {
          'title': '前置 ：',
          'list': '3200万像素',
        },
        {
          'title': '内存 ：',
          'list': '8GB',
        },
        {
          'title': '电池 ：',
          'list': '4030mAh',
        },
        {
          'title': '屏幕 ：',
          'list': '6.39英寸',
        },
        {
          'title': '分辨率 ：',
          'list': '2340x1080像素',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped src="../../public/css/details.scss"></style>
<style lang="scss">
  .el-carousel__button {
    background-color: #c5c5c5;
  }
  .el-card__body {
    position: relative;
    padding: 5px 20px;
  }
  .el-carousel__container {
    height: 100%;
    width: 100%;
  }
  .el-rate {
    position: absolute;
    top: -37px;
    right: 30px;
  }
</style>