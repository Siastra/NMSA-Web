import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '@/components/Dashboard'

const Dashboard = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/Dashboard.vue'], () => {
    resolve(require('../components/Dashboard.vue'))
  })
}

const Log = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/Log.vue'], () => {
    resolve(require('../components/Log.vue'))
  })
}

const NotFound = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/NotFound.vue'], () => {
    resolve(require('../components/NotFound.vue'))
  })
}

const Explorer = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['../components/Explorer.vue'], () => {
    resolve(require('../components/Explorer.vue'))
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
      path: '/',
      redirect: '/dashboard'
    }
  ]
})

export default router
