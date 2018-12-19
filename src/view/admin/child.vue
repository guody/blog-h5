<template>
    <div class="child-box">
        <h4>子组件</h4>
        <slot :data="data"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:['图片','视频','文章','摄影']
        }
    }
}
</script>

<style lang="scss" scoped>
.child-box{
    h4{
        background: #999;
        font-size: 1.6rem;
        text-align: center;
        padding: 5px;        
    }
}
</style>

