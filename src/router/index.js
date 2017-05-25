import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '@/components/Dashboard'

const Dashboard = resolve => {
  require.ensure(['../components/Dashboard.vue'], () => {
    resolve(require('../components/Dashboard.vue'))
  })
}

const Log = resolve => {
  require.ensure(['../components/Log.vue'], () => {
    resolve(require('../components/Log.vue'))
  })
}

const NotFound = resolve => {
  require.ensure(['../components/NotFound.vue'], () => {
    resolve(require('../components/NotFound.vue'))
  })
}

const Explorer = resolve => {
  require.ensure(['../components/Explorer.vue'], () => {
    resolve(require('../components/Explorer.vue'))
  })
}

const Ranking = resolve => {
  require.ensure(['../components/Ranking.vue'], () => {
    resolve(require('../components/Ranking.vue'))
  })
}

const User = resolve => {
  require.ensure(['../components/User.vue'], () => {
    resolve(require('../components/User.vue'))
  })
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/explorer',
      name: 'Explorer',
      component: Explorer
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/user/:name',
      name: 'User',
      component: User
    },
    {
      path: '/',
      redirect: '/dashboard'
    }
  ]
})

export default router
