<template>
    <div @click="closeMenu" :class="['aside-menu-box',!showMenu?'menu-active':'']">
        <div class="menu-bar-show menu-bar">
            <div class="menu-panel">
                <h3>菜单</h3>
                <hr>
                <ul class="aside-menu-list">
                    <li>首页</li>
                    <li>web</li>
                    <li>nodejs</li>
                    <li>数据库</li>
                    <li>TypeScript</li>
                    <li>工具</li>
                    <li>其他</li>                    
                </ul>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    data(){
        return{
            showMenu:false
        }
    },
    mounted() {
        this.getMenuShow();
    },
    methods:{
        //显示侧栏菜单
        getMenuShow(){
            const that = this;
            this.$root.eventBus.$on('showMobileMenu',function(val) {
                // console.log(val)
                that.showMenu = val
            })
        },
        // 关闭侧栏菜单
        closeMenu(){
            this.showMenu = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.menu-active{
    display: none;
}
.aside-menu-box{
    // display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    touch-action: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0,0,0,0.1);
    .menu-bar-show{
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    .menu-bar{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1002;
        width: 270px;
        max-width: 100%;
        background: blue;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        transform: translateX(-100%);
        -webkit-transition: -webkit-transform .3s ease-in-out;
        transition: transform .3s ease-in-out;        
    }
    .menu-panel{
        margin: 20px 15px;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0,0.5);
        text-shadow: none;  
        h3{
            padding: 10px 15px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            font-size: 1.6rem;
        }
        .aside-menu-list{
            margin-top: 15px;
            li{
                font-size: 1.5rem;
                display: list-item;
                padding: 8px 15px;
            }
            li.active{
                background: #666;
            }
        }
    }
}

</style>


