<template>
    <div class="con-box">
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }

}
</script>
<style lang="scss" scoped>
    .con-box{
        width: 100%;
        height: 100%;
        flex: 1;
        box-sizing: border-box; 
        padding: 20px 40px;
        overflow-y: auto;
    }
</style>


