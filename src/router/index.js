import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import login from '@/page/login'
import articles from '@/page/articles'
import register from '@/page/register'
import mypost from '@/page/mypost'
import detail from '@/page/detail'

Vue.use(Router)
const vueRouter = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },    
     {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/mypost',
      name: 'mypost',
      component: mypost
    },
  ]
})
// vueRouter.beforeEach(function (to, from, next) {  
//   const nextRoute = [ 'account', 'order', 'course'];  
//   const auth = store.state.auth;  
//   //跳转至上述3个页面  
//   if (nextRoute.indexOf(to.name) >= 0) {  
//       //未登录  
//       if (!store.state.auth.IsLogin) {  
//           vueRouter.push({name: 'login'})  
//       }  
//   }  
//   //已登录的情况再去登录页，跳转至首页  
//   if (to.name === 'login') {  
//       if (auth.IsLogin) {  
//           vueRouter.push({name: 'home'});  
//       }  
//   }  
//   next();  
// });  

export default vueRouter;