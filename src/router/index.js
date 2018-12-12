import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * require.ensure 是 Webpack 按需加载
 */

 //网站首页
const home = resolve => require.ensure([], () => resolve(require('../view/blog/home.vue')), 'home');
// 文章详情
const article = resolve => require.ensure([], () => resolve(require('../view/blog/article.vue')), 'article');


// admin 登录
const login = resolve => require.ensure([], () => resolve(require('../view/admin/login.vue')), 'login');
// 编辑文章
const editArticle = resolve => require.ensure([], () => resolve(require('../view/admin/editArticle.vue')), 'editArticle');
// admin 首页
const admin = resolve => require.ensure([], () => resolve(require('../view/admin/index.vue')), 'admin');
// 菜单--首页
const adminHome = resolve => require.ensure([], () => resolve(require('../view/admin/home.vue')), 'adminHome');
// 菜单编辑
const manageMenu = resolve => require.ensure([], () => resolve(require('../view/admin/manageMenu.vue')), 'manageMenu');
// 文章管理
const manageArticle = resolve => require.ensure([], () => resolve(require('../view/admin/manageArticle.vue')), 'manageArticle');
// 修改头像
const avator = resolve => require.ensure([], () => resolve(require('../view/admin/avator.vue')), 'avator');
// 修改密码
const changePwd = resolve => require.ensure([], () => resolve(require('../view/admin/changePwd.vue')), 'changePwd');

export default new Router({
  routes: [
    {
      /**
       * 网站首页
       */
      path: '/(index)?',
      name: 'home',
      component: home,
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
      component: article,
      meta: {
        title: '文章'
      }
    },
    {
      /**
       * 登录
       */
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      /**
       * 编辑文章
       */
      path: '/admin/editArticle',
      name: 'editArticle',
      component: editArticle,
      meta: {
        title: '编辑文章'
      }
    },
    {
      /**
       * 默认重定向 admin/home
       */
      path: '/admin',
      redirect: '/admin/home'
    },    
    {
      /**
       * admin 首页
       */
      path: '/admin',
      name: 'admin',
      component: admin,
      children:[
        {
          path:'home',
          name:'adminHome',
          component:adminHome
        },         
        {
          path:'manageMenu',
          name:'manageMenu',
          component:manageMenu,
          meta: {
            title: '菜单管理'
          }
        },
        {
          path:'manageArticle',
          name:'manageArticle',
          component:manageArticle,
          meta: {
            title: '文章管理'
          }
        },
        {
          path:'user/avator',
          name:'avator',
          component:avator,
          meta: {
            title: '更换头像'
          }
        },
        {
          path:'user/changePwd',
          name:'changePwd',
          component:changePwd,
          meta: {
            title: '修改密码'
          }
        }
      ],
      meta: {
        title: '博客管理系统'
      }
    }          
  ]
})
