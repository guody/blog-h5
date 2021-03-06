import * as types from './mutation-types';

export default {
    /**
     * 发送http请求时的动画 加载时动画
     * @param state 状态
     * @param showFlag 显示loading动画
     */
    [types.CUR_LOADING](state, showFlag) {
        state.curLoading = showFlag;
    },
    /**
     * 登录， 登录时存储用户的信息，这个信息在其它页面也需要用到
     * @param {any} state
     * @param {Object} userinfo
     */
    [types.USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },

    /**
     * 菜单List
     * @param {*} state 
     * @param {*} menuList 
     */
    [types.MENU_LIST](state, menuList) {
        state.menuList = menuList;
    },

    /**
     * 跳转路由的信息
     * @param {*} state 
     * @param {*} routerInfo 
     */
    [types.CUR_ROUTER](state, curRouter) {
        state.curRouter = curRouter;
    }

}

