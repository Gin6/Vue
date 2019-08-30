<template>
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
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      msg: [],
      msg1: [],
      msg2: ['brand', 'price', 'size', 'unlock', 'screen', 'cpu', 'rom', 'ram', 'front', 'rear', ],
      msg3: [
        {
          'title': '品牌：',
          'list': ['小米', '华为', '索尼'],
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
          'list': ['骁龙835', '骁龙845', '骁龙855'],
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
      
      // 测试
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
    }
  }
};

</script>

<style lang="scss" scoped>
  .remove {
    position: absolute;
    border: none;
    width: 38px;
    height: 13px;
    background: #0000;
    outline: none;
    z-index: -1;
  }
  .select {
    position: relative;
    left: 5%;
    width: 90%;
    height: 300px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .select-lr {
      position: absolute;
      top: 20px;
      width: 49%;
      height: 260px;
    }
    .select-left {
      .pamItem {
        padding-left: 4%;
        p {
          width: 80px;
        }
        .pamItem-right {
          left: 80px;
        }
      }
      .pamItem5, .pamItem6, .pamItem7, .pamItem8, .pamItem9 {
        position: absolute;
        top: 0px;
        left: 100%;
        width: 100%;
        z-index: 2;
        p {
          width: 100px;
        }
        .pamItem-right {
          left: 100px;
        }
      }
      .pamItem6 {
        top: 50px;
      }
      .pamItem7 {
        top: 100px;
      }
      .pamItem8 {
        top: 150px;
      }
      .pamItem9 {
        top: 200px;
      }
    }
    .select-right {
      right: 0px;
      padding-left: 2%;
      border-left: 1px solid #eee;
    }
  }
  .pamItem {
    position: relative;
    height: 50px;
    p {
      padding: 14px 0px;
      margin: 0px;
      text-align: right;
      color: #72767b;
    }
    .pamItem-right {
      position: absolute;
      top: 0px;
      height: 100%;
      margin-left: 4%;
    }
    .el-button {
      padding: 17px 12px;
    }
  }
  .el-button--text {
    color: #409effd4;
  }
</style>
<style lang="scss">
  .el-button--text:hover span {
    color: #409eff;
    border-bottom: 1px solid #ff7878;
  }
  .el-breadcrumb {
    position: absolute;
    top: -35px;
  }
  .remove:hover + .el-breadcrumb__item > .el-breadcrumb__inner {
    color: rgba(64, 158, 255, 0.83);
  }
</style>