<template>
    <div class="admin-box">
        <left-menu class="left-area" :menuList="menuList"></left-menu>
        <div class="right-area">
            <top-head></top-head>
            <open-tag></open-tag>
            <main-con></main-con>
        </div>
    </div>
</template>
<script>
import leftMenu from "@/components/admin/leftMenu"
import mainCon from "@/components/admin/mainCon"
import topHead from "@/components/admin/topHead"
import openTag from "@/components/admin/openTag"
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
        mainCon,
        topHead,
        openTag
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
        height: 100%;
        display: flex;
        .right-area{
            display: flex;
            flex-direction: column;
            height: 100%;
            background: #fff;
            flex: 1;
        }
    }
</style>


