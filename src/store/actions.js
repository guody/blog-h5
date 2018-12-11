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
    menuList({ commit ,menuList}) {
        commit(types.MENU_LIST,menuiList);  
    },    
    // 路由的信息
    curRouter({commit},curRouter){
        commit(types.CUR_ROUTER, curRouter);
    }
}