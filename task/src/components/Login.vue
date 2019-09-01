<template>
  <p class="login">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="first">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button plan type="primary" @click="submitForm('ruleForm'); open1()">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
      <v-register></v-register>
      </el-tab-pane>
    </el-tabs>
  </p>
</template>

<script>
import register from './Register.vue'

export default {
  components: {
    'v-register': register
  },
 data() {
  var validatePass = (rule, value, callback) => {
   if (value === '') {
    callback(new Error('请输入密码'));
   } else {
    if (this.ruleForm.checkPass !== '') {
     this.$refs.ruleForm.validateField('checkPass');
    }
    callback();
   }
  };
  return {
   activeName: 'first',
   ruleForm: {
    name: '',
    pass: '',
    checkPass: '',
   },
   rules: {
    name: [
     { required: true, message: '请输入您的名称', trigger: 'blur' },
     { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
    ],
    pass: [
     { required: true, validator: validatePass, trigger: 'blur' }
    ]
   },
  };
 },
 methods: {
  //选项卡切换
  handleClick(tab, event) {
  },
  //重置表单
  resetForm(formName) {
   this.$refs[formName].resetFields();
  },
  //提交表单
  submitForm(formName) {
   this.$refs[formName].validate((valid) => {
    if (valid) {
     this.$message({
      type: 'success',
      message: '登录成功'
     });
     this.$router.push('HelloWorld');
    } else {
     console.log('error submit!!');
     return false;
    }
   });
  },
  open1() {
    this.$notify({
      title: '成功',
      message: '欢迎您 , ' + this.ruleForm.name + ' !',
      type: 'success'
    });
  }
 },
}
</script>

<style lang="scss">

</style>