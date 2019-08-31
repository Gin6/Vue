<template>
  <div>
    <el-input placeholder="请输入搜索内容" v-model="params.search" class="searchClass">
      <div slot="prepend">
        <div class="centerClass">
          <el-select v-model="select" placeholder="请选择" style="width: 90px">
            <el-option label="品牌" value="1"></el-option>
            <el-option label="型号" value="2"></el-option>
          </el-select>
        </div>
        <div class="centerClass">
          <div class="line"></div>
        </div>
      </div>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      params: {
        page: '1',
        search: ''
      }
    }
  },
  mounted () {
    const delay = (function () {
      let timer = 0
      return function (callback, ms) {
        clearTimeout(timer)
        timer = setTimeout(callback, ms)
      }
    })();
  },
  watch: {
    "params.search"() {
      delay(() => {
      this.fetchData();
      }, 1000);
    }
  },
}
</script>

<style lang="scss">
  @import '/css/search.css';
</style>