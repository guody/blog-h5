<template>
    <div class="search-box">
        <div :class="[showSearch?'search_open':'','search-bar']">
            <input v-show='showSearch' type="text" class="input" placeholder="想搜点什么呢.." name="keyboard">
            <p class="search-icon" @click="searchEvent" title="搜索">
                <i></i>  
            </p>            
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            showSearch:false
        }
    },
    methods:{
        // 点击搜索icon,显示输入框
        searchEvent(){
            if(!this.showSearch){
                this.showSearch = !this.showSearch;
            }else{
                console.log('查询。。。')
            }
        }

    }
}
</script>
<style lang="scss" scoped>
.search-box{
    position: absolute;
    top:0;
    right: 0;
    height: 60px;
    line-height: 60px;
    .search-bar{
        position: relative;
        width: 0%;
        min-width: 60px;
        height: 60px;
        float: right;
        overflow: hidden;
        transition: width 0.3s;
    }
    .search_open {
        width: 200px;
        display: inline-block;
        padding-left: 10px;
    }
    .input{
        position: absolute;
        top: 16px;
        right: 0;
        z-index: 10;
        height: 30px;
        line-height: 30px;
        width: 150px;
        border-radius: 3px;
        outline: none;
        border: none;
        font-size: 14px;
        color: #333;
        padding-left:10px;
    }
    .search-icon{
        z-index: 101;
        width: 40px;
        height: 60px;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        padding: 0;
        margin: 0;
        line-height: 60px;
        cursor: pointer;
        text-align: center;
        line-height: 60px;
        i{
            vertical-align:middle;
            display: inline-block;
            width: 22px;
            height: 22px;
            background: url('../../assets/imgs/icons/search.png') no-repeat center;
            background-size: 100% auto;
        }
    }
}
</style>

