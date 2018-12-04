<template>
   <section :class="[showMenu?'slide-body':'','home-box']">
       <top-bar :menuList="menuList"></top-bar>
       <section class="main-box">
           <aside-con></aside-con>
           <main>
               <div class="article-item" v-for="(item,index) in blogList" :key="index">
                   <h3 class="artile-title">
                       <a href="" target="_blank">两只蜗牛艰难又浪漫的一吻</a>
                   </h3>
                   <p class="blogtext">这是国外一摄影师拍摄到的，看到这一幕，还真有爱！于是想查查蜗牛是哪科的，百度科普了一下，原来蜗牛是蜗牛是陆生贝壳类软体动物，关键是蜗牛雌雄同体，异体交配，雌雄均...  </p>
                    <blog-info></blog-info>
               </div>
           </main>
       </section>
       <aside-menu :menuList="menuList"></aside-menu>
       <foot-bar></foot-bar>
   </section>
</template>
<script>
import topBar from "@/components/header/topBar"
import asideMenu from "@/components/header/asideMenu"
import asideCon from '@/components/asideCon'
import blogInfo from '@/components/blogInfo'
import footBar from "@/components/footer/footBar"
export default {
    name:'home',
    data(){
        return {
            showMenu:false,
            menuList:[],
            blogList:[1,2,3,4,5,6,7,8,9]
        }
    },
    components:{
        topBar,
        asideMenu,
        footBar,
        asideCon,
        blogInfo
    },
    created(){
        this.getMenuList()        
    },
    mounted() {  
        this.getMenuShow()
        this.getMenuClose()
    },
    methods:{
        // 获取菜单列表
       async getMenuList(){
          var menuData = await $api.findAllMenu();
          if(menuData.code=='0' && menuData.data){
              this.menuList = menuData.data
          }
        },
        // 监听打开移动端菜单
        getMenuShow(){
            const that = this;
            this.$bus.on('showMobileMenu',function(val) {
                that.showMenu = val
            })
        },
        // 监听关闭移动端菜单
        getMenuClose(){
            const that = this;
            this.$bus.on('closeMobileMenu',function(val) {
                that.showMenu = val
            })            
        }
    }
}
</script>
<style lang="scss" scoped>
.home-box{
    width: 100%;
    margin-left: 0px;
    transition: margin-left .3s ease-in-out;
}
.slide-body{
    margin-left: 270px;
    position: fixed;
}
.main-box{
    margin:80px auto 0;
    max-width: 1000px;
    width: 92%;
    overflow: hidden;
    box-sizing:border-box;
    @media screen and (max-width: 991px) {
        main{
            width: 100%;
        }
    } 
    @media screen and (min-width: 992px) {
        main{
            width: 68%;
        }
    } 
    main{
        overflow: hidden;
        float: left;
        // width: 68%;
        .article-item{
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
            background: #FFF;
            -webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
            -moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
            box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
            -webkit-transition: all 0.6s ease;
            -moz-transition: all 0.6s ease;
            -o-transition: all 0.6s ease;
            transition: all 0.6s ease;
            -webkit-transform: translatey(0);
            transform: translatey(0);
            opacity: 1;
            -webkit-transition: -webkit-transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s;
            transition: transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s;
            -webkit-perspective: 1000;
            -webkit-backface-visibility: hidden;
            .artile-title{
                margin: 0 0 10px 0;
                font-size: 20px;
                overflow: hidden;
                font-weight: bolder;
                a:hover{
                    color: #2c6fae;
                }
            }
           .blogtext {
                font-size: 14px;
                color: #566573;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                margin: 20px 0;
            }
        }        
    }
}

</style>


