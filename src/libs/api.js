import http from "./http"

export default {
    // 查询菜单
    findAllMenu(param){
        return http.get('/pub/findallmenu',param)
    }
    

}