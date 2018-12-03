<template>
    <div class="head-box slideDown">
        <nav>
            <div @click="showMenu" class="menu-icon hidden-md-and-up"></div>
            <div class="logo"><a href="">郭小迪的博客</a></div>
            <ul class="menu-list hidden-sm-and-down">
                <li v-for='(item,index) in menuList' :key="index">{{item.name}}</li>
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
            showAsideMenu:false   //是否显示侧栏菜单
        }
    },
    components:{
        serachBox
    },
    props:['menuList'],
    methods:{
        //移动端点击menu-icon显示侧栏菜单
        showMenu(){
            this.showAsideMenu = true;
            this.$root.eventBus.$emit('showMobileMenu',this.showAsideMenu)
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
    padding: 0;
    position: fixed;
    -webkit-transform: translateZ(0);
    z-index: 999;
    top: 0;
    width: 100%;
    background: #0593d3;
    @media screen and (max-width: 991px) {
        nav{
            text-align: center;
        }
    }
    nav{
        max-width: 1000px;
        width: 100%;
        height: 60px;
        margin: auto;
        position: relative;
        .menu-icon{
            position: absolute;
            top:0;
            left: 4%;
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
                color: #0593d3;
                color: #fff;
            
            }
            li:hover{
                background: #1d5178;
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
                color: #fff;
            }
        }  
        .search{
            float: right;
        }
        
        .aside-menu-list{
            width: 100%;
            overflow: auto;
            background: #666;
        }
    }

}
</style>


