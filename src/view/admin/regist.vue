<template>
    <div class="regist">
        <div class="regist-box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" hide-required-asterisk label-width="70px" class="regist-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirm_pwd">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="regist-btn" type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
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
          password: '',
          confirm_pwd: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          confirm_pwd: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 10个字符', trigger: 'blur' }
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
.regist{
    width: 100%;
    height: 100%;
    background: url('../../assets/imgs/bg.jpg') no-repeat center;
    background-size:cover;
    position: relative;
    .regist-box{
        box-sizing: border-box;
        padding:30px 50px 30px 50px;
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
        .regist-ruleForm{
            margin: auto; 
            .regist-btn{
              margin-left:40px;
            }         
        }

    }
}
</style>


