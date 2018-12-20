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
    // 添加文章菜单
    insertMenu(param){
        return http.post('/priv/insertMenu',param)
    },
    // 删除文章菜单
    deleteMenu(param){
        return http.post('/priv/deleteMenu',param)
    },

    // 添加文章分类
    insertCategory(param){
        return http.post('/priv/insertCategory',param)
    },
    // 删除文章分类
    deleteCategory(param){
        return http.post('/priv/deleteCategory',param)
    },

    // 编辑文章菜单
    editMenu(param){
        return http.post('/priv/editMenu',param)
    },
    // 编辑文章分类
    editCategory(param){
        return http.post('/priv/editCategory',param)
    },
    //用户登录
    login(param){
        return http.post('/pub/login',param)
    },
   //用户登录
   changePwd(param){
        return http.post('/priv/changePwd',param)
    },


    /** 
     * blog-admin 接口 
     */

    // 查询admin菜单
    findAdminMenu(param){
        return http.get('/priv/findAdminMenu',param)
    }
    

}