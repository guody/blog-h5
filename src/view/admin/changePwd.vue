<template>
    <div class="pwd-box">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="新密码" prop="pass">
                <el-input :type="inputType" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input :type="inputType" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="show-pwd">
                    <el-checkbox @change="showPwd" v-model="checked">显示密码</el-checkbox>
                </div>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>       
    </div>
</template>
<script>
  export default {
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        checked: false,
        inputType:'password',
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            var result = await $api.changePwd({userId:'',password:this.ruleForm.checkPass});
            if(result.code==='00'){
                this.$message({
                    message: '密码修改成功',
                    type: 'success',
                    duration:2000,
                    center:true
                }); 
                // 重置表单
                this.$refs[formName].resetFields();         
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 显示/隐藏密码
      showPwd(){
          if(this.checked){
              this.inputType = 'text';
          }else{
              this.inputType = 'password';
          }
          
      }
    }
  }
</script>
<style lang="scss" scoped>
    .pwd-box{
        width: 40%;
        margin-left: 10%;
        margin-top: 5%; 
    }
    .show-pwd{
        margin: 10px 0;
    }
    .el-button{
        width: 120px;
    }
</style>