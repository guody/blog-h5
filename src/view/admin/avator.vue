<template>
    <div class="userInfo-box">
        <div class="userInfo-item">
            <span class="item-label">用户名：</span>
            <el-input class="nameInput" v-model="userName" :disabled="true"></el-input>
        </div>
        <div class="userInfo-item">
            <span class="item-label">头像：</span>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="avator-memo">（点击修改头像）</p> 
        </div>
        <div class="userInfo-item">
            <el-button class="avator-btn" type="primary">保存</el-button>
        </div>       
    </div>    
</template>
<script>
  export default {
    data() {
        return {
            userName:'gxd',
            imageUrl: ''
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            console.log(file)
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传图片格式错误!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
    }
</script>
<style lang="scss">
    .userInfo-box{
        width: 50%;
        margin-left:10%; 
    }
    .userInfo-item{
        margin-top: 20px;
    }
    .nameInput{
        width: 200px;
        display: inline-block;
    }
    .item-label{
        font-size: 1.5rem;
        color: #666;
    }
    .avator-memo{
        color: #999;
        padding-left: 95px;
    }
    .avatar-uploader .el-upload {
        margin-left:70px; 
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 140px;
        height: 140px;
        line-height: 140px;
        text-align: center;
    }
    .avatar {
        width: 140px;
        height: 140px;
        display: block;
    }
    .avator-btn{
        width:140px;
        margin-top: 30px;
        margin-left: 75px; 
    }
</style>
