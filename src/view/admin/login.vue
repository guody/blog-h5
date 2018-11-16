<template>
    <div class="login">
        <div class="login-box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" hide-required-asterisk  class="login-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                </el-form-item>
            </el-form>             
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    background: url('../../assets/imgs/bg.jpg') no-repeat center;
    background-size:cover;
    position: relative;
    .login-box{
        box-sizing: border-box;
        padding:60px 50px 30px 50px;
        width: 400px;
        height: 300px;
        background: rgba(255, 255, 255,0.7);
        position: absolute;
        right: 12%;
        top:50%;
        margin-top:-150px;
        border-radius: 15px;
        -webkit-box-shadow:0 0 10px #999;
        -moz-box-shadow:0 0 10px #999;
        box-shadow:0 0 30px #999;
        .login-ruleForm{
            margin: auto; 
            .login-btn{
              margin-left:100px;
            }         
        }

    }
}
</style>


