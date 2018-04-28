import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Main from '@/modules/Main.vue'
// 首页
import Home from '@/modules/Home.vue'
// 扫码
import sweepcode from '../components/Common/sweepcode.vue'
// 绑定终端设备
import terminal from '../components/Terminal/Terminal.vue'
import Demand from '@/modules/Demand.vue'
import Demo from '@/modules/Demo.vue'
// 电器详情
import eleDetails from '../components/Common/eleDetails.vue'
// tabbar
import tabbar from '../components/Tabbar/tabbar.vue'
// 电量统计
import elecount from '../components/EleCount/elecount.vue'
// 选择时间
import changetime from '../components/EleCount/changeTime.vue'
// 我的
import Mine from '@/modules/Mine.vue'
import myinformation from '../components/Mine/Myinformation.vue'
import revisephoneone from '../components/Mine/Revisephoneone.vue'
import revisephonetwo from '../components/Mine/Revisephonetwo.vue'
import revisename from '../components/Mine/Revisename.vue'
import mypower from '../components/Mine/Mypower.vue'
import myfeedback from '../components/Mine/Myfeedback.vue'
import about from '../components/Mine/about.vue'
// 登录
import Login from '@/components/Login/Login.vue'
// 路由懒加载
const Explain = (resolve) => {
  import('@/modules/Explain.vue').then((module) => {
    resolve(module)
  })
}

const routes = [{
  path: '/',
  name: 'Main',
  component: Main,
  children: [{
    name: 'Home',
    path: '',
    component: Home
  }, {
    name: 'Demand',
    path: '/Demand',
    component: Demand
  }, {
    name: 'Demo',
    path: '/Demo',
    component: Demo
  }, {
    name: 'Mine',
    path: '/Mine',
    component: Mine
  }]
}, {
  name: 'Explain',
  path: '/Explain',
  component: Explain
}, {
  name: 'Login',
  path: '/login',
  component: Login
}, {
  name: 'elecount',
  path: '/elecount',
  component: elecount
}, {
  name: 'changetime',
  path: '/changetime',
  component: changetime
}, {
  name: 'tabbar',
  path: '/tabbar',
  component: tabbar
}, {
  name: 'eleDetails',
  path: '/eleDetails',
  component: eleDetails
}, {
  name: 'terminal',
  path: '/terminal',
  component: terminal
}, {
  name: 'myinformation',
  path: '/myinformation',
  component: myinformation
}, {
  name: 'revisephoneone',
  path: '/revisephoneone',
  component: revisephoneone
}, {
  name: 'revisephonetwo',
  path: '/revisephonetwo',
  component: revisephonetwo
}, {
  name: 'revisename',
  path: '/revisename',
  component: revisename
}, {
  name: 'mypower',
  path: '/mypower',
  component: mypower
}, {
  name: 'myfeedback',
  path: '/myfeedback',
  component: myfeedback
}, {
  name: 'about',
  path: '/about',
  component: about
}, {
  name: 'sweepcode',
  path: '/sweepcode',
  component: sweepcode
}]
export default new Router({
  routes
})
