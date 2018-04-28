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

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('请求前')
  // console.log(config)
  return config
}, function (error) {
  console.log('请求前错误')
  return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('请求后')
  // console.log(response.data)
  return response.data
})

const user = {
  userhome: '/user/index/',
  userswitchon: '/user/switch?status=on'
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
  var str = Object.keys(data).map(function (key) {
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
  userhome: (data) => apiGet(user.userhome, data),
  userswitch: (data) => apiGet(user.userswitchon, data),
  apiGet: apiGet, // GET接口
  apiPost: apiPost // POST接口
}
