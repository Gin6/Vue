<template>
  <!--transition标签 按钮出现附带动画-->
  <transition name="el-fade-in">
    <div class="page-component-up" @click="scrollToTop" v-show="toTopShow">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        toTopShow: false,
      }
    },
    methods: {
      handleScroll() {
        //id scroller-box是自己在组件上添加的，为了方便获取dom
        this.scrollTop = document.getElementsByClassName('abc')[0].scrollTop
        if (this.scrollTop > 300) {
          this.toTopShow = true
        }else {
          this.toTopShow = false
        }
      },
      scrollToTop() {
        let timer = null, _that = this
        //动画，使用requestAnimationFrame代替setInterval
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50
            document.getElementsByClassName('abc')[0].scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.toTopShow = false
          }
        })
      }
    },
    mounted() {
　　　　//$nextTick 避免dom未加载
      this.$nextTick(function () {
        let targetScroll = document.getElementsByClassName('abc')[0]
        targetScroll.addEventListener('scroll', this.handleScroll)
      });
    },
    destroyed() {
      let targetScroll = document.getElementsByClassName('abc')[0]
      targetScroll.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style scoped lang="scss">
  .page-component-up{
    right: 3.5%;
    bottom: 50px;
    position: fixed;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 5;
    transition: 0.3s;
    .el-icon-caret-top{
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
    p{
      display: none;
      text-align: center;
      color: #fff;
    }
    &:hover{
      background-color: #f2f6fc;
    }
  }
</style>