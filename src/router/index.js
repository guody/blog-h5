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
              resolve(require('../view/blog/home.vue')),'home';
          });
      },
      meta: {
        title: '首页'
      }
    },
    {
      /**
       * 文章详情
       */
      path: '/article',
      name: 'article',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../view/blog/article.vue')),'article';
          });
      },
      meta: {
        title: '文章'
      }
    },
    {
      /**
       * 编辑文章
       */
      path: '/editArticle',
      name: 'editArticle',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../view/blog/editArticle.vue')),'editArticle';
          });
      },
      meta: {
        title: '编辑文章'
      }
    },
    {
      /**
       * 注册
       */
      path: '/regist',
      name: 'regist',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../view/admin/regist.vue')),'regist';
          });
      },
      meta: {
        title: '注册'
      }
    },
    {
      /**
       * 登录
       */
      path: '/login',
      name: 'login',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../view/admin/login.vue')),'login';
          });
      },
      meta: {
        title: '登录'
      }
    }       
  ]
})
