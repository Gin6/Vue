<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="基本参数 - Basic parameters" name="1">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </el-collapse-item>
    <el-collapse-item title="屏幕 - Screen" name="2">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>