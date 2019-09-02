<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="基本参数 - Basic parameters" name="1">
      <el-card class="box-card">
        <div v-for="a in Basic" :key="a" class="text item">
          {{a}}
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="屏幕 - Screen" name="2">
      
    </el-collapse-item>
    <el-collapse-item title="硬件 - Hardware" name="3"></el-collapse-item>
    <el-collapse-item title="网络与连接 - Network And Connection" name="4"></el-collapse-item>
    <el-collapse-item title="摄像头 - Camera" name="5"></el-collapse-item>
    <el-collapse-item title="外观 - Exterior" name="6"></el-collapse-item>
    <el-collapse-item title="功能与服务 - Features And Services" name="7"></el-collapse-item>
    <el-collapse-item title="手机附件 - Mobile Phone Accessories" name="8"></el-collapse-item>
    <el-collapse-item title="保修信息 - Warranty Information" name="9"></el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    text-align: left;
    box-shadow: none;
    border: none;
  }
</style>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        Basic: ['上市日期', '电商报价','手机类型', '屏幕类型', '出厂系统内核', '操作系统', '拍照特色', 'CPU型号', '机身颜色', '解锁方式',],
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>