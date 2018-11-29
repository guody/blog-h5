<template>
    <el-menu default-active="1-4-1" 
        class="el-menu-vertical" 
        background-color="#283B4E"
        text-color="#ccc"
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
        <div v-for="(item,index) in menuList" :key="index">
            <template v-if="item.childMenu">
                <el-submenu :index="index+1+''">
                    <template slot="title">
                        <i :class="getIconName(item.id)"></i>
                        <span v-show="!isCollapse" slot="title">{{item.menuName}}</span>
                    </template>
                    <el-menu-item v-for="(child,idx) in item.childMenu" :index="index+'-'+idx" :key="idx">{{child.categoryName}}</el-menu-item>
                </el-submenu>                            
            </template>
            <template v-else>
                <el-menu-item :index="index+1+''">
                    <i :class="getIconName(item.id)"></i>
                    <span slot="title">{{item.menuName}}</span>
                </el-menu-item>                            
            </template>
        </div>         
    </el-menu>    
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    props:['menuList'],
    mounted() {
        // 控制菜单显示
        this.adminSideMenuShow()
    },
    methods: {
        getIconName(id){
            let iconName;
            switch (id){
                case 1:
                    iconName = 'el-icon-menu'
                    break;
                case 2:
                    iconName = 'el-icon-tickets'
                    break;
                case 3:
                    iconName = 'el-icon-edit-outline'
                    break;
                case 4:
                    iconName = 'el-icon-setting'
                    break;
                case 5:
                    iconName = 'el-icon-more'
                    break;                
            }
            return iconName;
        },        
      adminSideMenuShow(){
            const that = this;
            this.$root.eventBus.$on('showAdminMenu',function(val) {
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
        float: left;
    }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    overflow: auto;
  }
</style>


