<template>
    <div class="admin-box">
        <left-menu :menuList="menuList"></left-menu>
        <main-con></main-con>
    </div>
</template>
<script>

import leftMenu from "@/components/admin/leftMenu"
import mainCon from "@/components/admin/mainCon"
export default {
    data(){
        return {
            menuList:[]  // 菜单列表
        }
    },
    mounted(){
        this.getAdminMenuList()
    },
    components:{
        leftMenu,
        mainCon
    },
    methods:{
        // 获取菜单
       async getAdminMenuList(){
          var menuData = await $api.findAdminMenu();
          if(menuData.code=='0' && menuData.data){
              this.menuList = menuData.data
          }
        }
    }
}
</script>
<style lang="scss" scoped>
    .admin-box{
        width: 100%;
        height: 100%;
        display: flex;
    }
</style>


