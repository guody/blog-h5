import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * require.ensure 是 Webpack 按需加载
 */
export default new Router({
  routes: [
    {
      /**
       * 首页
       */
      path: '/',
      name: 'home',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../view/home.vue')),'home';
          });
      }
    }  
  ]
})
