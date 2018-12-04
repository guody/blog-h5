<template>
    <div class="opentag-box">
        <span class="tag-btn active" v-for="(tagname,index) in tagList" :key="index">
            <label>{{tagname}}</label>
            <span class="el-icon-close"></span>
        </span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tagList:['首页','用户信息','文章管理']
        }
    },
    created(){
        this.$bus.on('changeMenu',this.showOpenTab)
    },
    methods:{
        showOpenTab(routeInfo){
            console.log(routeInfo)
            this.routeInfo = routeInfo;
        } 
    },
    beforeDestroy(){
        this.$bus.off('changeMenu',this.showOpenTab)
    }
}
</script>
<style lang="scss" scoped>
.opentag-box{
    box-shadow:0 1px 3px #ddd;
    border-bottom: 1px solid #ddd;
    height: 32px;
    line-height: 32px;
    padding:0 10px;
    .tag-btn{
        border-radius: 2px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        height: 22x;
        line-height: 22px;
        padding: 0 8px;
        border: 1px solid #d8dce5;
        color: #495060;
        margin-right:8px; 
        label{
            cursor: pointer;
        }
        .el-icon-close{
            -webkit-transform-origin: 100% 50%;
            -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
            border-radius: 50%;
            height: 16px;
            text-align: center;
            transform-origin: 100% 50%;
            transition: all .3s cubic-bezier(.645,.045,.355,1);
            vertical-align: 2px;
            width: 16px;
        }
        .el-icon-close:before{
            -webkit-transform: scale(.6);
            display: inline-block;
            transform: scale(.7);
            vertical-align: -3px;
        }
        .el-icon-close:hover{
            background: #ccc;
        }
    }
    .active{
        background-color: #42b983;
        border-color: #42b983;
        color: #fff;
    }
    .active:before{
        background: #fff;
        border-radius: 50%;
        content: "";
        display: inline-block;
        height: 8px;
        margin-right: 4px;
        position: relative;
        width: 8px;
    }
}
</style>


