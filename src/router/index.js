import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      meta: { title: '' },
      children: [
        {
          path: '/',
          name: 'pagehome',
          meta: { title: '' },
          component: () => import('@/components/homepage/index')
        }
      ]
    },
  ]
})