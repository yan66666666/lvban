import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import lvpai from '@/pages/lvpai'
import my from '@/pages/my'
import gonglue from '@/pages/gonglue'
import shequ from '@/pages/shequ'
import login from '@/pages/login'
import zhuce from '@/pages/zhuce'
import xiugaiziliao from '@/pages/xiugaiziliao'
import jieban from '@/pages/jieban'
import fabu from '@/pages/fabu'
import detail from '@/pages/detail'
import usermy from '@/pages/usermy'
import fans from '@/pages/fans'
import guanzhu from '@/pages/guanzhu'
import myjieban from '@/pages/myjieban'
import tuichu from '@/pages/tuichu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/lvpai',
      name: 'lvpai',
      component: lvpai
    },{
      path: '/my',
      name: 'my',
      component: my
    },{
      path: '/gonglue',
      name: 'gonglue',
      component: gonglue
    },{
      path: '/shequ',
      name: 'shequ',
      component: shequ
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },{
      path: '/xiugaiziliao',
      name: 'xiugaiziliao',
      component: xiugaiziliao
    },{
      path: '/jieban',
      name: 'jieban',
      component: jieban
    },{
      path: '/fabu',
      name: 'fabu',
      component: fabu
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/usermy',
      name: 'usermy',
      component: usermy
    },{
      path: '/fans',
      name: 'fans',
      component: fans
    },{
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu
    },{
      path: '/myjieban',
      name: 'myjieban',
      component: myjieban
    },{
      path: '/tuichu',
      name: 'tuichu',
      component: tuichu
    }
    
  ]
})
