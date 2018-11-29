<template>
    <div class="main-box">
        <top-head></top-head>
        <open-tag></open-tag>
    </div>
</template>
<script>
import topHead from "@/components/admin/topHead"
import openTag from "@/components/admin/openTag"
export default {
    data() {
        return {

        }
    },
    mounted() {
        
    },
    components:{
        topHead,
        openTag
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .main-box{
        background: #fff;
        flex: 1;
    }
</style>


