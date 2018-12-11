<template>
    <div class="admin-box">
        <left-menu class="left-area" :menuList='menuList'></left-menu>
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
import * as utils from '../../libs/utils'
export default {
    data(){
        return {
            menuList:[]
        }
    },
    created(){
        this.getAdminMenuList()
    },
    methods:{
        async getAdminMenuList(){
            let menuData =await $api.findAdminMenu()
            console.log(menuData)
            if(menuData.code=='0' && menuData.data){
                this.menuList = menuData.data;
            }
        }
    },
    components:{
        leftMenu,
        mainCon,
        topHead,
        openTag
    }
}
</script>
<style lang="scss" scoped>
    .admin-box{
        width: 100%;
        height: 100%;
        display: flex;
        .right-area{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background: #fff;
            flex: 1;
            overflow: hidden;
        }
    }
</style>


