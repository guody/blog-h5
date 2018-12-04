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
        box-sizing: border-box; 
        padding: 20px 40px;
        overflow-y: auto;
    }
</style>


