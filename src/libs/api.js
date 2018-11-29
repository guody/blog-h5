import http from "./http"
// import { ElLoadingComponent } from "element-ui/types/loading";

export default {
    
    /**
     * 博客网站接口
     */

    // 查询文章菜单
    findAllMenu(param){
        return http.get('/pub/findallmenu',param)
    },
    //用户登录
    login(param){
        return http.post('/pub/login',param)
    },


    /** 
     * blog-admin 接口 
     */

    // 查询admin菜单
    findAdminMenu(param){
        return http.get('/priv/findAdminMenu',param)
    }
    

}