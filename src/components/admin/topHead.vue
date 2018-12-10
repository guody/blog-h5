<template>
    <div class="headbox">
        <span :class="[showAsideMenu?'menu-open':'','admin-menu']" @click="showAdminMenu"></span>
        <div class="link-box">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
                <template v-if="curRouter.routeName!=='adminHome'">
                    <el-breadcrumb-item v-if="curRouter.subName">{{curRouter.subName}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{curRouter.menuName}}</el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <h3>博客管理系统</h3>
        <div class="user-box">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="avator" src="../../assets/imgs/admin/default-head.png" alt="avator">
                    <span class="user-down"></span>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>上传头像</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showAsideMenu:false  //是否显示侧栏菜单
        }
    },
    created(){
  
    },
    computed:{
        curRouter(){
            return this.$store.state.curRouter;
        }
    },
    methods:{
        // 点击菜单按钮，控制菜单显示
        showAdminMenu(){
            this.showAsideMenu = !this.showAsideMenu;
            this.$bus.$emit('showAdminMenu',this.showAsideMenu)
        }    
    }
}
</script>

<style lang="scss" scoped>
.headbox{
    padding: 0 50px 0 0;
    display: flex;
    display:-webkit-flex; 
    border-bottom: 1px solid #eee;
    align-items:center; 
    -webkit-align-items:center; 
    justify-content:center ; 
    .admin-menu{
        cursor: pointer;
        margin: 0 15px 0 8px;
        display: inline-block;
        width: 26px;
        height: 26px;
        background: url('../../assets/imgs/admin/icons/admin-menu.png') no-repeat center;
        background-size: cover;
    }
    .menu-open{
        transform:rotate(90deg);
        -ms-transform:rotate(90deg); 	/* IE 9 */
        -moz-transform:rotate(90deg); 	/* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */ 
    }
    .link-box{
        display: inline-block;
    }

    h3{
        flex: 1;
        height: 60px;
        line-height: 60px;
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        color: #555;
    }
    .user-box{
        cursor: pointer;       
        .avator{
            float: left;
            width: 40px;
            height: 40px;
        }
        .user-down{
            float: left;
            margin-top:14px; 
            margin-left: 10px;
            background: url('../../assets/imgs/admin/icons/down.png') no-repeat center;
            width: 16px;
            height: 16px;
            background-size:80% auto; 
        }
    }
}
</style>

