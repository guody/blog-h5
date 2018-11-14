<template>
    <section :class="[showMenu?'slide-body':'','article-box']">
        <top-bar :menuList="menuList"></top-bar>
         <section class="main-box">
            <aside-con></aside-con>
            <main>
                <article>
                    <p class="article-title">Socket.io详解</p>
                    <blog-info></blog-info>  
                    <blockquote class="brief">
                        <p>Socket.io提供了基于事件的实时双向通讯</p>
                    </blockquote>
                    <p>Browser和WebServer间的实时数据传输是一个很重要的需求，但最早只能通过AJAX轮询方式实现。在WebSocket标准没有推出之前，AJAX轮询是一种可行的方案。</p>              
                    <p>AJAX轮询原理是设置定时器，定时通过AJAX同步服务端数据。这种方式存在延时且对服务端造成很大负载。直至2011年，IETF才标准化WebSocket - 一种基于TCP套接字进行收发数据的协议。</p>
                    <p>Socket.io将数据传输部分独立出来形成engine.io，engine.io对WebSocket和AJAX轮询进行了封装，形成了一套API，屏蔽了细节差异和兼容性问题，实现了跨浏览器/跨设备进行双向数据通信</p>
                    <h3>WebSocket 协议</h3>
                    <p>WebSocket是HTML5新增的一种通信协议，其特点是服务端可以主动向客户端推送信息，客户端也可以主动向服务端发送信息，是真正的双向平等对话，属于服务器推送技术的一种。</p>
                    <p>在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后浏览器和服务端之间就形成了一条快速通道，两者之间就直接可以数据相互传送，带来的好处是</p>
                    <ol>
                        <li>1、相互沟通的Header很小，大概只有2Bytes。</li>
                        <li>2、服务器不再被动的接收到浏览器的请求之后才返回数据，而是在有新数据时就主动推送给浏览器。</li>
                    </ol>
                    <p>为了建立一个WebSocket连接，浏览器首先要向服务器发起一个HTTP请求，这个请求和通常的HTTP请求不同，包含了一些附加头信息，其中附加头信息Upgrade: WebSocket表明这是一个申请协议升级的HTTP请求。服务端解析这些头信息，然后产生应答信息返回给客户端，客户端和服务端的WebSocket连接就建立起来了。双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续直到客户端或者服务端的某一方主动关闭连接。</p>
                </article>
                <div class="praise-box" >
                    <div :class="[likeFlag?'praise-active':'','praise']"  @click="likeArticle">
                        <span><i :class="[likeFlag?'like-in':'','like-icon']"></i>喜欢</span>
                        <span :class="[likeFlag?'like-active':'','like-num']"><b>56</b></span>
                    </div>
                </div>
                <div class="near-article">
                    <p><span>上一篇：</span><a href="">关于web性能优化</a></p>
                    <p><span>下一篇：</span><a href="">node之koa2中间件原理</a></p>
                </div>
                <div class="comment-box">
                    <div class="comm-title">
                        <div class="tit-left">说点什么吧 ...</div>
                    </div>
                    <div class="input-comm">
                        <p><el-input v-model="input" class="text-input" placeholder="请输入用户名"></el-input></p>
                        <p><el-input v-model="input" class="text-input" placeholder="请输入邮箱"></el-input></p>
                        <p><el-input
                            type="textarea"
                            :autosize="{ minRows: 3, maxRows: 5}"
                            placeholder="写下你的评论"
                            v-model="textarea3">
                        </el-input></p>
                       <p class="submmit-box"><el-button type="primary">提交</el-button></p> 
                    </div>                   
                </div>
                <div class="comm-detail-box">
                    <div class="comm-num">共有<span>2</span>条评论</div>
                    <ul class="comment-list">
                        <li>
                            <div class="comm-head">
                                <div class="uname">芭拉雷小魔仙</div>
                                <div class="comm-info">
                                    <span>1</span>楼 · <span>2018-11-14 18:36</span>
                                </div>
                            </div>
                            <div class="comment-text">
                                你好，socketio 性能怎么样？ 适合于大型即时通信开发吗？
                            </div>
                        </li>
                        <li>
                            <div class="comm-head">
                                <div class="uname">芭拉雷小魔仙</div>
                                <div class="comm-info">
                                    <span>2</span>楼 · <span>2018-11-14 18:36</span>
                                </div>
                            </div>
                            <div class="comment-text">
                                你好，socketio 性能怎么样？ 适合于大型即时通信开发吗？
                            </div>
                        </li>                        
                    </ul>
                </div>                
            </main>
         </section>
        <aside-menu :menuList="menuList"></aside-menu>
        <foot-bar></foot-bar>        
    </section>
</template>
<script>
import topBar from "../components/header/topBar"
import asideMenu from "../components/header/asideMenu"
import asideCon from '../components/asideCon'
import blogInfo from '../components/blogInfo'
import footBar from "../components/footer/footBar"
export default {
    data(){
        return {
            showMenu:false,
            likeFlag:false,
            menuList:[]
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
        },
        likeArticle(){
            this.likeFlag = !this.likeFlag;
        }
    }
}
</script>
<style lang="scss" scoped>
 @import "../assets/scss/article.scss";
</style>


