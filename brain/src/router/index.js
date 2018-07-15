import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Main from '@/modules/Main.vue'
// 首页
import Home from '@/modules/Home.vue'
// 扫码
import wifiList from '../components/Home/wifiList.vue'
// 设备列表
import sweepcode from '../components/Common/sweepcode.vue'
// 绑定终端设备
import terminal from '../components/Terminal/Terminal.vue'
import Demand from '@/modules/Demand.vue'
import Demo from '@/modules/Demo.vue'
// 电器详情
import eleDetails from '../components/Common/eleDetails.vue'
// tabbar
import tabbar from '../components/Tabbar/tabbar.vue'
import timing from '../components/Tabbar/timing.vue'
import addTiming from '../components/Tabbar/addTiming.vue'
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
import mypowername from '../components/Mine/mypowername.vue'
import mypower from '../components/Mine/Mypower.vue'
import myfeedback from '../components/Mine/Myfeedback.vue'
import changePowerNumber from '../components/Mine/changePowerNumber.vue'
import about from '../components/Mine/about.vue'
// 登录
import Login from '@/components/Login/Login.vue'
// 找回密码1
import getpassone from '@/components/Login/getpassone.vue'
// 找回密码2
import getpasstwo from '@/components/Login/getpasstwo.vue'
// 新用户注册1
import registerone from '@/components/Login/registerone.vue'
// 新用户注册2
import registertwo from '@/components/Login/registertwo.vue'
// 新用户注册3
import registerthree from '@/components/Login/registerthree.vue'
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
  name: 'getpassone',
  path: '/getpassone',
  component: getpassone
}, {
  name: 'getpasstwo',
  path: '/getpasstwo',
  component: getpasstwo
}, {
  name: 'registerone',
  path: '/registerone',
  component: registerone
}, {
  name: 'registertwo',
  path: '/registertwo',
  component: registertwo
}, {
  name: 'registerthree',
  path: '/registerthree',
  component: registerthree
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
  name: 'mypowername',
  path: '/mypowername',
  component: mypowername
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
}, {
  name: 'wifiList',
  path: '/wifiList',
  component: wifiList
}, {
  name: 'changePowerNumber',
  path: '/changePowerNumber',
  component: changePowerNumber
}, {
  name: 'timing',
  path: '/timing',
  component: timing
}, {
  name: 'addTiming',
  path: '/addTiming',
  component: addTiming
}]
export default new Router({
  routes
})
