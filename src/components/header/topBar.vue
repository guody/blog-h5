<template>
    <div class="head-box slideDown">
        <nav>
            <div class="menu-icon hidden-md-and-up"></div>
            <div class="logo"><a href="">郭小迪的博客</a></div>
            <ul class="menu-list hidden-sm-and-down">
                <li>首页</li>
                <li>web</li>
                <li>nodejs</li>
                <li>数据库</li>
                <li>TypeScript</li>
                <li>工具</li>
                <li>其他</li>
            </ul>
            <serach-box class="search hidden-xs-only"></serach-box>       
        </nav>
    </div>
</template>
<script>
import serachBox from './search'
export default {
    data(){
        return {

        }
    },
    components:{
        serachBox
    },
    methods:{
   
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
    padding: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    background: #0b2731;
    @media screen and (max-width: 991px) {
        nav{
            text-align: center;
        }
    }
    nav{
        max-width: 1000px;
        width: 90%;
        height: 60px;
        margin: auto;
        .menu-icon{
            float: left;
            width: 30px;
            height: 30px;
            background: url('../../assets/imgs/icons/menu-icon.png');
            background-size:contain;
            margin-top: 15px;
        }
        .menu-list,.logo{
            float: left;
            min-height: 60px;
        }
        .search{
            float:right;
        }
        .menu-list{
            margin-left: 60px;
            display: flex;
            li{
                cursor: pointer;
                font-size: 1.6rem;
                display: block;
                height: 60px;
                line-height: 60px;
                padding: 0 20px;
                color: #5bd0fa;
            
            }
            li:hover{
                color: #fff;
            }
        }
        @media screen and (max-width: 991px) {
            .logo{
                display: inline-block;
                float: none;
            }
        }        
        .logo{
            height: 60px;
            width: 135px;
            font-size: 2.2rem;
            line-height: 60px;
            font-weight: bold;
            a{
                color: #5bd0fa;
            }
        }  
        .search{
            float: right;
        }      
    }

}
</style>


