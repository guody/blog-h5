<template>
    <div class="admin-box">
        <left-menu></left-menu>
        <main-con></main-con>
    </div>
</template>
<script>

import leftMenu from "@/components/admin/leftMenu"
import mainCon from "@/components/admin/mainCon"
export default {
    data(){
        return {

        }
    },
    components:{
        leftMenu,
        mainCon
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


