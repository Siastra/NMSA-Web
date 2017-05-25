// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-awesome/icons/th'
import 'vue-awesome/icons/calendar'
import 'vue-awesome/icons/info'
import 'vue-awesome/icons/book'
import 'vue-awesome/icons/list-alt'

Vue.config.productionTip = false
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
