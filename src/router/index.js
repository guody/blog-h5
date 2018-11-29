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
       * 网站首页
       */
      path: '/(index)?',
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
    },
    {
      /**
       * admin 首页
       */
      path: '/admin',
      name: 'admin',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../view/admin/index.vue')),'admin';
          });
      },
      meta: {
        title: '博客管理系统'
      }
    },
    {
      /**
       * admin 首页
       */
      path: '/manageMenu',
      name: 'manageMenu',
      component: resolve => {
          require.ensure([], () => {
              resolve(require('../components/admin/manageMenu.vue')),'manageMenu';
          });
      },
      meta: {
        title: '菜单管理'
      }
    }            
  ]
})
