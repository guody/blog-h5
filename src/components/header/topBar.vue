<template>
    <div class="head-box slideDown">
        <nav>
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
            <div class="logo"><a href="">郭小迪的博客</a></div>
            <serach-box class="search"></serach-box>       
        </nav>
    </div>
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
.head-box{
    width: 100%;
    padding: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    background: #0b2731;
    nav{
        width:1000px;
        margin: auto;
        position: relative;
        .menu-list,.logo,.search{
            float: left;
            min-height: 60px;
        }
        .menu-list{
            width: 100%;
            text-align: center;
            .el-menu-item{
                display: inline-block;
                float: none;
                font-size: 1.6rem;
            }
        }
        .logo{
            position: relative;
            z-index: 99;
            margin-left:-100%; 
            width: 135px;
            font-size: 2.2rem;
            line-height: 60px;
            font-weight: bold;
            a{
                color: #5bd0fa;
            }
        }  
        .search{
            margin-left: -40px;
        }      
    }

}
</style>


