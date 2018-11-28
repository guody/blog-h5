import http from "./http"
// import { ElLoadingComponent } from "element-ui/types/loading";

export default {
    // 查询菜单
    findAllMenu(param){
        return http.get('/pub/findallmenu',param)
    },
    //用户登录
    login(param){
        return http.post('/pub/login',param)
    }
    

}