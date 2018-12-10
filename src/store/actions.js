import * as types from './mutation-types';

export default {
    // http请求状态
    curLoading({ commit }, showFlag) {
        commit(types.CUR_LOADING, showFlag);
    }, 
    // 用户登录信息
    userInfo({ commit }, userInfo) {
        commit(types.USER_INFO, userInfo);
    },
    // 菜单
    menuList({ commit }) {
        let menuData = $api.findAdminMenu()
            .then((res)=>{
                if(res.code=='0' && res.data){
                    commit(types.MENU_LIST,res.data);
                }
            }).catch((error) => {
                console.log(error)
            })
        
    },    
    // 路由的信息
    curRouter({commit},curRouter){
        commit(types.CUR_ROUTER, curRouter);
    }
}