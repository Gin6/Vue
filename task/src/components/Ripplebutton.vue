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
      :before-close="handleClose">
    </el-drawer>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  methods: {
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

<style lang="scss" scoped>
.box {
  position: absolute;
  width: 50%;
  height: 50%;
  right: 0px;
  top: 50%;
}
.button {
  width: 200px;
  height: 50px;
  color: #fff;
  border-radius: 8px;
  line-height: 50px;
  text-align: center;
  background: #de8989;
  position: absolute;
  top: 0px;
  left: 20px;
  z-index: 2;
  overflow: hidden;
  p {
    margin: 0px;
    font-size: 20px;
    i {
      margin-left: 15px;
    }
  }
}
.button1 {
  left: -220px;
  color: #000;
  background: #ffffffdb;
}
@mixin wavesbtn {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.wavesbtn {
  @include wavesbtn;
}
.wavesbtn1 {
  @include wavesbtn;
}
</style>

<style lang="scss">
.effect {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.7s ease-out;
  background: #a7a7a782;
  transform: scale(0);
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1;
  pointer-events: none;
}
.rtl {
  width: 100%!important;
  animation: rtl-drawer-out 300ms cubic-bezier(0,0,.2,1) 0s;
}
.el-drawer__open .el-drawer.rtl {
  animation: rtl-drawer-in 500ms cubic-bezier(0,0,.2,1) 0s;
}
.el-dialog__wrapper {
  overflow-x: hidden;
}
</style>