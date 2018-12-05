import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

/**
 * 状态集中管理 state
 */
 const state = {
    // http请求状态  默认值为 false
    curLoading: false,
    // 存储登录后该用户的信息
    userInfo: {},
    // 路由信息
    routerList:[],
    //打开的路由
    openRouterList:[]
 }

 export default new Vuex.Store({
    state,
    mutations,
    actions
});