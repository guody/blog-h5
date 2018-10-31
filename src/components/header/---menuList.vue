<template>
    <el-header class="header-box slideDown">
        <nav>
            <div class="logo">郭小迪的博客</div>
            <el-menu
            :default-active="activeIndex"
            class="menu-list"
            mode="horizontal"
            @select="handleSelect"
            background-color="#0b2731"
            text-color="#5bd0fa"
            active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">web</el-menu-item>
            <el-menu-item index="3">nodejs</el-menu-item>
            <el-menu-item index="4">数据库</el-menu-item>
            <el-menu-item index="5">TypeScript</el-menu-item>
            <el-menu-item index="6">工具</el-menu-item>
            <el-menu-item index="7">其他</el-menu-item>
            </el-menu>
            <serach-box></serach-box>
        </nav>
    </el-header>
</template>
<script>
import serachBox from './search'
export default {
    data(){
        return {
            activeIndex:"1"
        }
    },
    components:{
        serachBox
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }        
    }
}
</script>

<style lang="scss" scoped>
    .slideDown {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: transform .5s ease-out;
        -o-transition: transform .5s ease-out;
        transition: transform .5s ease-out;
    }
    .header-box{
        overflow: hidden;
        background: #0b2731;
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: rgba(0,0,0,.9);
        text-align: center;
        z-index: 99999;
        nav{
            width: 1000px;
            margin: auto;
            position: relative;
            .logo{
                z-index: 999;
                position: absolute;
                height: 60px;
                line-height: 60px;
                top:0;
                left:0;
                font-size: 22px;
                font-weight: bold;
                color: #5bd0fa;
            }
            .el-menu{
                text-align: center;
            }
            .el-menu--horizontal>.el-menu-item{
                display: inline-block;
                float: none;
            }            
        }

    }
    .el-menu-item{
        font-size: 16px;
    }
</style>

