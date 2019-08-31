<template>
  <div class="box">
    <div class="button button1" @click="wavesEffect1(); open3()" :plain="true">
      <p>Shop Now</p>
      <div class="wavesbtn1" ref="wavesbtn1"></div>
    </div>
    <div class="button" @click="wavesEffect(); drawer = true" type="primary">
      <p>Compared<i class="el-icon-right"></i></p>
      <div class="wavesbtn" ref="wavesbtn"></div>
    </div>
    <el-drawer
      title="MYPHONE"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :destroy-on-close="destroyonclose"
      :custom-class="customclass">
      <v-main></v-main>
      <v-scrolltop></v-scrolltop>
    </el-drawer>
  </div>
</template>

<script>
import main from './Main.vue'
import scrolltop from './ScrollTop.vue'

export default {
  components: {
    'v-main': main,
    'v-scrolltop': scrolltop
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      destroyonclose: true,
      customclass: 'abc',
    };
  },
  mounted() {
     // document.getElementsByClassName('abc')[0].addEventListener('scroll', this.handleScroll)  /*测试滚动条*/
  },
  methods: {
    // 测试  获取滚动条高度
    // handleScroll() {
    //     console.log(document.getElementsByClassName('abc')[0].scrollTop)
    // },
    open3() {
      this.$message({
        message: '抱歉 , 该功能暂未开放',
        type: 'warning',
        center: true
      });
    },
    wavesEffect(e) {
      e = e || window.event;
      let position = e.target.getBoundingClientRect();
      let doc = document.documentElement;
      let div = document.createElement("div");
      div.className = "effect";
      this.$refs.wavesbtn.appendChild(div);

      let top = e.pageY - (position.top + window.pageYOffset) - doc.clientTop;
      let left =
        e.pageX - (position.left + window.pageXOffset) - doc.clientLeft;
      let dur = 750;
      div.style = `
        left:${left}px;
        top:${top}px;
        transform:scale(20);
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);`;
      setTimeout(() => {
        div.style = `
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity:0;
        left:${left}px;
        top:${top}px;
        transform:scale(20);`;
        setTimeout(() => {
          this.$refs.wavesbtn.removeChild(div);
        }, dur);
      }, 100);
    },
    wavesEffect1(e) {
      e = e || window.event;
      let position = e.target.getBoundingClientRect();
      let doc = document.documentElement;
      let div = document.createElement("div");
      div.className = "effect";
      this.$refs.wavesbtn1.appendChild(div);

      let top = e.pageY - (position.top + window.pageYOffset) - doc.clientTop;
      let left =
        e.pageX - (position.left + window.pageXOffset) - doc.clientLeft;
      let dur = 750;
      div.style = `
        left:${left}px;
        top:${top}px;
        transform:scale(20);
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);`;
      setTimeout(() => {
        div.style = `
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity:0;
        left:${left}px;
        top:${top}px;
        transform:scale(20);`;
        setTimeout(() => {
          this.$refs.wavesbtn1.removeChild(div);
        }, dur);
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped src="../../public/css/ripplebutton.scss"></style>
<style lang="scss">
  @import '/css/ripplebutton.css';
</style>