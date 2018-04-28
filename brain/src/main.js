// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import echarts from 'echarts'

import { AjaxPlugin, ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
