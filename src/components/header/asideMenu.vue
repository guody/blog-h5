<template>
    <div @click.self="closeMenu" :class="['aside-menu-box']" v-show="showMask">
        <transition name='fade' v-on:after-leave="afterLeave">
            <div class="menu-bar" v-if="showMenu">
                <h4>目录</h4>
                <el-col :span="24">
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#45494c"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <div v-for="(item,index) in menuList" :key="index">
                            <template v-if="item.childMenu">
                                <el-submenu :index="index+1+''">
                                    <template slot="title">
                                        <span>{{item.menuName}}</span>
                                    </template>
                                    <el-menu-item v-for="(child,idx) in item.childMenu" :index="index+'-'+idx" :key="idx">{{child.menuName}}</el-menu-item>
                                </el-submenu>                            
                            </template>
                            <template v-else>
                                <el-menu-item :index="index+1+''">
                                    <span slot="title">{{item.menuName}}</span>
                                </el-menu-item>                            
                            </template>
                        </div>          
                    </el-menu>
                </el-col>
            </div>
        </transition>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            showMask:false,
            showMenu:false
        }
    },
    mounted() {
        this.getMenuShow();
    },
    props:['menuList'],
    methods:{
        //显示侧栏菜单
        getMenuShow(){
            const that = this;
            this.$bus.on('showMobileMenu',function(val) {
                that.showMask = val
                that.showMenu = val
            })
        },
        // 关闭侧栏菜单
        closeMenu(){
            this.showMenu = false;
            this.$bus.emit('closeMobileMenu',this.showMenu)
        },
        // 过渡状态钩子，当侧栏菜单消失时，蒙层消失
        afterLeave: function (el) {
            this.showMask = false;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss" scoped>
.aside-menu-box{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    touch-action: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0,0,0,0.2);  
    .menu-bar{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1002;
        width: 270px;
        max-width: 100%;
        height: 100%;
        background: #45494c;

        h4{
            height: 60px;
            width: 270px;
            max-width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            line-height: 60px;
            background: #45494c;
            color: #fff;
            box-sizing: border-box;
            padding:0 20px;
            font-size: 1.6rem;
            border-bottom:1px solid #4e5761;
            z-index: 1002;
        }
    }

}
.el-col-24{
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;    
    box-sizing: border-box;
    padding-top: 60px;
}
.el-col-24,.el-menu{
    height: 100%;
}
.el-menu{
    border: 0;
    padding-left:25px;
}

.fade-enter-active, .fade-leave-active {
  transform: translateX(0%);
  transition: transform .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
 transform: translateX(-100%);
}
</style>


