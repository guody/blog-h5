<template>
    <div class="home-box">
        <h3>首页</h3>
        <child>
            <div class="menuList" slot-scope="menu">
                <span v-for="item in menu.data">{{item}}</span>
            </div>
        </child>
        <child>
            <template slot-scope="user">
                <ul>
                    <li v-for="item in user.data">{{item}}</li>
                </ul>
            </template>
        </child>
    </div>
</template>
<script>
import child from './child'
export default {
    components:{
        child
    }
}
</script>
<style lang="scss" scoped>
.home-box{
    h3{
        background: #ccc;
        font-size: 2.4rem;
        text-align: center;
        padding: 5px;
    }
    .menuList{
        background: #03ccbb;
        color: #fff;
        font-size: 1.4rem;
        display: flex;
        justify-content:space-around; 
    }
}
</style>


