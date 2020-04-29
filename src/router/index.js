import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store'
import TodayClasses from '@/components/TodayClasses';
import Beranda from '@/components/Beranda';
import Login from '@/components/Login';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/pelajaran',
      name: 'TodayClasses',
      component: TodayClasses,
        meta: {
        requiresAuth: true
      }
    },
    {
	path: '/',
	name: 'Beranda',
	component: Beranda,
  meta: {
    requiresAuth: true
  }
    },
    {
    path: '/login',
    name: 'Login',
    component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router