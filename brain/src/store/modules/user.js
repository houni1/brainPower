/**
 * Created by lx on 2018/3/1.
 */
import API from '../../cores/api.js'
// import * as types from '../mutation-types'

const state = {
  userData: {}
}

const actions = {
  // 用户注册
  register: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.register(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 获取验证码
  verificationCode: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.verificationCode(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 用户登陆
  login: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.login(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 用户密码重置
  reset: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.reset(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 查找区域
  region: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.region(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 用户资料
  userinfo: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.userinfo(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 修改用户姓名，新手机号码保存
  edit: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.edit(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 用户原手机号验证
  verification: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.verification(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 电力户号资料
  account: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.account(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 用户反馈
  feedback: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.feedback(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 修改电力户号地区
  editAccount: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.editAccount(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  getDeviceIrList: function (context, data) {
    return new Promise((resolve, reject) => {
      API.getDeviceIrList(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  setDeviceScenes: function (context, data) {
    return new Promise((resolve, reject) => {
      API.setDeviceScenes(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  }
}

const mutations = {
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
