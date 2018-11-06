<template>
   <section :class="[showMenu?'slide-body':'','home-box']">
       <top-bar></top-bar>
       <section class="main-box">
           <aside class="hidden-sm-and-down">
                <el-card class="box-card">
                    <h3>博客介绍</h3>
                </el-card>
                <el-card class="box-card">
                    <h3>推荐文章</h3>
                </el-card>
                <el-card class="box-card">
                    <h3>点击排行</h3>
                </el-card>  
                <el-card class="box-card">
                    <h3>友情链接</h3>
                </el-card>                                                 
           </aside>
           <main>
               <div class="article-item" v-for="item in blogList">
                   <h3 class="artile-title">
                       <a href="" target="_blank">两只蜗牛艰难又浪漫的一吻</a>
                   </h3>
                   <p class="blogtext">这是国外一摄影师拍摄到的，看到这一幕，还真有爱！于是想查查蜗牛是哪科的，百度科普了一下，原来蜗牛是蜗牛是陆生贝壳类软体动物，关键是蜗牛雌雄同体，异体交配，雌雄均...  </p>
                    <p class="blog-info">
                        <ul>
                            <li class="lmname">
                                <a href="">目录1</a>
                            </li>
                            <li class="public-time">2018-07-15</li>
                            <li class="comment-nums">0</li>
                            <li class="like-nums">0</li>
                            <li class="view-nums">0</li>
                        </ul>
                    </p>
               </div>
           </main>
       </section>
       <aside-menu></aside-menu>
       <foot-bar></foot-bar>
   </section>
</template>
<script>
import topBar from "../components/header/topBar"
import asideMenu from "../components/header/asideMenu"
import footBar from "../components/footer/footBar"
export default {
    name:'home',
    data(){
        return {
            showMenu:false,
            blogList:[1,2,3,4,5,6,7,8,9]
        }
    },
    components:{
        topBar,
        asideMenu,
        footBar
    },
    mounted() {
        this.getMenuShow()
        this.getMenuClose()
    },
    methods:{
        // 监听打开移动端菜单
        getMenuShow(){
            const that = this;
            this.$root.eventBus.$on('showMobileMenu',function(val) {
                that.showMenu = val
            })
        },
        // 监听关闭移动端菜单
        getMenuClose(){
            const that = this;
            this.$root.eventBus.$on('closeMobileMenu',function(val) {
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
    aside{
        float: right;
        width: 30%;
        .box-card{
            border-radius: 8px;
            min-height: 200px;
            width: 100%;
            margin-bottom: 25px;
        }
    }
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
                margin-top: 20px;
            }
            .blog-info{
                overflow: hidden;
                margin-top: 20px;
                ul li {
                    float: left;
                    font-size: 12px;
                    padding: 0 0 0 20px;
                    margin: 0 15px 0 0;
                    color: #748594;
                    line-height: 1.5;
                    display: inline-block;
                    a{
                        color: #748594;
                    }
                    a:hover{
                        color: #333;
                    }
                }
                @media screen and (max-width: 480px) {
                    .lmname{
                        display: none;
                    }
                }                 
                .lmname{
                    background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -23px left;
                }
                .public-time{
                    background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -44px left;
                }
                .comment-nums{
                     background: url('../assets/imgs/icons/comment.png') no-repeat left;
                     background-size:48% auto; 
                }
                .like-nums{
                    background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -85px left;
                }
                .view-nums{
                    background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -64px left;
                }
            }
        }        
    }
}

</style>


