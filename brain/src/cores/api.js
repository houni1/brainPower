import Vue from 'vue'
import axios from 'axios'

// 基本配置
// localStorage.WT_IMAGE_URL = ''
// axios.defaults.baseURL = window.wtEnv.serverBaseUrl
// axios.defaults.baseURL = 'http://wiki.wangtiansoft.com:40017/server/'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

localStorage.WT_IMAGE_URL = ''
axios.defaults.baseURL = window.wtEnv.serverBaseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
// axios.defaults.headers.post['x-access-token'] = localStorage.token
axios.defaults.withCredentials = true

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('请求前')
  // console.log(config)
  Vue.$vux.loading.show()
  setTimeout(function () {
    Vue.$vux.loading.hide()
  }, 30000)
  return config
}, function (error) {
  console.log('请求前错误')
  return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('请求后')
  Vue.$vux.loading.hide()
  // console.log(response.data)
  return response.data
})

const user = {
  register: '/base/register/',
  verificationCode: '/base/verificationCode/',
  login: '/base/login/',
  reset: '/base/reset/',
  region: '/base/region/',
  userinfo: '/base/info/',
  edit: '/base/edit/',
  verification: '/base/verification/',
  account: '/base/account/',
  feedback: '/feedback/save/',
  editAccount: '/base/editAccount/',
  getDeviceIrList: '/deviceIr/list',
  setDeviceScenes: '/deviceIr/scenesControl'
}

const home = {
  outdoor: '/weather/outdoor/',
  indoortem: '/weather/indoor/',
  family: '/terminal/elecsum/',
  wiringList: '/device/list/',
  eledetail: '/device/detail/',
  switch: '/device/switch/',
  bind: '/terminal/bind/',
  unbind: '/terminal/unbind/',
  tabinit: '/deviceIr/init/',
  send: '/deviceIr/send/',
  resetkt: '/deviceIr/reset/',
  homeinit: '/base/init/',
  deletedevice: '/device/delete/',
  editName: '/device/edit/',
  scan: '/device/scan/',
  add: '/device/add/',
  queryChangeInfo: '/device/queryChangeInfo/'
}

// function apiGet (url, query) {
//   axios.defaults.headers.common['token'] = localStorage.WTtoken
//   var str = Object.keys(query).map(function (key) {
//     return encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
//   }).join('&')
//   console.log('发起 get 请求 -> ', url + '?' + str)
//   return axios.get(url + '?' + str)
// }

// function apiPost (url, data) {
//   axios.defaults.headers.common['token'] = localStorage.WTtoken
//   var str = Object.keys(data).map(function (key) {
//     return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
//   }).join('&')
//   console.log('发起 post 请求 -> ', url, data)
//   return axios.post(url + '?' + str, data)
// }

function apiPost (url, data) {
  let str = Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  }).join('&')
  console.log('发起 post 请求 -> ', url, data)
  return axios.post(url + '?' + str, data)
}

function apiGet (url) {
  return axios.get(url)
}

/**
 * 接口请求地址封装
 * 规则：
 */
export default {
  outdoor: (data) => apiPost(home.outdoor, data), // 室外环境
  indoortem: (data) => apiPost(home.indoortem, data), // 室内环境
  family: (data) => apiPost(home.family, data), // 家庭能效
  wiringList: (data) => apiPost(home.wiringList, data), // 设备列表
  eledetail: (data) => apiPost(home.eledetail, data), // 设备详情
  switch: (data) => apiPost(home.switch, data), // 设备开关
  bind: (data) => apiPost(home.bind, data), // 扫码绑定终端设备
  unbind: (data) => apiPost(home.unbind, data), // 解除终端设备
  tabinit: (data) => apiPost(home.tabinit, data), // tabbar空调红外初始
  send: (data) => apiPost(home.send, data), // tabbar空调红外发送
  resetkt: (data) => apiPost(home.resetkt, data), // tabbar空调红外重置
  homeinit: (data) => apiPost(home.homeinit, data), // 首页初始化
  deletedevice: (data) => apiPost(home.deletedevice, data), // 删除设备
  register: (data) => apiPost(user.register, data), //  用户注册
  verificationCode: (data) => apiPost(user.verificationCode, data), //  获取验证码
  login: (data) => apiPost(user.login, data), //  用户登陆
  reset: (data) => apiPost(user.reset, data), //  用户密码重置
  region: (data) => apiPost(user.region, data), //  查找区域
  userinfo: (data) => apiPost(user.userinfo, data), //  用户资料
  edit: (data) => apiPost(user.edit, data), //  修改用户姓名,新手机号码保存
  verification: (data) => apiPost(user.verification, data), //  用户原手机号验证
  account: (data) => apiPost(user.account, data), //  电力户号资料
  feedback: (data) => apiPost(user.feedback, data), //  用户反馈
  editAccount: (data) => apiPost(user.editAccount, data), //  修改电力户号地区
  editName: (data) => apiPost(home.editName, data), //  修改房间名
  scan: (data) => apiPost(home.scan, data), //  扫描设备列表
  add: (data) => apiPost(home.add, data), //  添加设备
  queryChangeInfo: (data) => apiPost(home.queryChangeInfo, data), //  通知
  getDeviceIrList: (data) => apiPost(user.getDeviceIrList, data), // 获取用户已学习的红外设备列表
  setDeviceScenes: (data) => apiPost(user.setDeviceScenes, data), // 场景控制接口
  apiGet: apiGet, // GET接口
  apiPost: apiPost // POST接口
}
