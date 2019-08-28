<template>
  <div class="box">
    <div class="button" @click="wavesEffect">
      <p>Shop Now<i class="el-icon-right"></i></p>
      <div class="wavesbtn" ref="wavesbtn"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
    }
  }
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
  border-radius: 8px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #d24343e0;
  position: absolute;
  top: 0px;
  left: -100px;
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
.wavesbtn {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>

<style lang="scss">
.effect {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.7s ease-out;
  background: #e4e4e46e;
  transform: scale(0);
  transition-property: transform, opacity, -webkit-transform;
  opacity: 1;
  pointer-events: none;
}
</style>