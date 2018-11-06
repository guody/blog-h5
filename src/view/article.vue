<template>
    <div class="box">
        <button @click="showSide">点击</button>
        <div class="mask" v-show="showMask" @click.self="closeSide">
            <transition name="fade" v-on:after-leave="afterLeave">
                <div class="sidebox" v-if="showMenu">
                    <h3>目录</h3>
                    <ul>
                        <li>web</li>
                        <li>node</li>
                        <li>db</li>
                    </ul>
                </div>
            </transition>    
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showMask:false,
            showMenu:false
        }
    },
    methods:{
        showSide(){
            this.showMask = true
            this.showMenu = true
        },
        closeSide(){
            this.showMenu = false
        },
        afterLeave: function (el) {
            this.showMask = false;
        }    
    }
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    background:#999;
    position: relative;
    button{
        width: 50px;
        height: 25px;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.mask{
    width: 100%;
    height: 100%;
    background:blueviolet;
    .sidebox{
        width: 70%;
        height: 100%;
        background: red;
        position: fixed;
        top:0;
        left:0;
    }
}

.fade-enter-active, .fade-leave-active {
  transform: translateX(0%);
  transition: transform .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
 transform: translateX(-100%);
}
</style>


