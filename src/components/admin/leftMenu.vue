<template>
    <el-menu :default-active="menuActive" 
        class="el-menu-vertical" 
        background-color="#283B4E"
        text-color="#ccc"
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
        <div v-for="(item,index) in menuList" :key="index">
            <template v-if="item.childMenu">
                <el-submenu :index="item.routeName">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span v-show="!isCollapse" slot="title">{{item.menuName}}</span>
                    </template>
                    <el-menu-item @click="skipPage(child,item.menuName)" v-for="(child,idx) in item.childMenu" :index="child.routeName" :key="idx">{{child.menuName}}</el-menu-item>
                </el-submenu>                            
            </template>
            <template v-else>
                <el-menu-item @click="skipPage(item)" :index="item.routeName">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.menuName}}</span>
                </el-menu-item>                            
            </template>
        </div>         
    </el-menu>    
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
      return {
        isCollapse: false,
        menuIndex:'',
        curRouterInfo:{} //当前路由信息
      };
    },
    computed:{
        menuActive(){
            return this.$route.name;
        },
        menuList(){
            return this.$store.state.menuList;
        }
    },
    created(){
        // 控制菜单栏显示
        this.adminSideMenuShow()
    },
    methods: {
        ...mapActions([
        'menuList', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        ]),        
        // 路由跳转
        skipPage(routeInfo,menuName){
            if(menuName){
                routeInfo.subName = menuName
            }
            this.$store.dispatch('curRouter',routeInfo)
            this.$router.push({name:routeInfo.routeName});
        },       
        adminSideMenuShow(){
            const that = this;
            this.$bus.on('showAdminMenu',function(val) {
                that.isCollapse = val
            })
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
  .el-menu-vertical{
    overflow-y: auto;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
</style>


