<template>
    <div class="admin-box">
        <left-menu class="left-area"></left-menu>
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
            
        }
    },
    created(){
        
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


