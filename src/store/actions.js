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
    // 路由的信息
    routerList({commit},routerList){
        commit(types.ROUTER_LIST, routerList);
    }, 
    
    // 打开的路由信息
    openRouterList({commit},openRouterList){
        commit(types.OPEN_ROUTER_LIST, openRouterList);
    } 
}