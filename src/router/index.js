import Vue from 'vue'
import Router from 'vue-router'
import Mian from '@/view/Main'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/',
      component: Mian,
      children:[
        {
          path:'/',
          meta:{
            title:'首页'
          },
          component: () => import('@/view/vHome/vHome')
        },
        {
          path: 'showNew',
          meta: {
            title: '详情页'
          },
          component: () => import('@/view/vShownew/vShownew')
        }
      ]
    },
    { path: '*', component: () => import('@/components/NotFoundComponent/NotFoundComponent') }
  ]
})
