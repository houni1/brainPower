/**
 * Created by lx on 2018/3/1.
 */
import API from '../../cores/api.js'
// import * as types from '../mutation-types'

const state = {
  homeData: {}
}

const actions = {
  // 室外环境
  outdoor: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.outdoor(data).then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 室内温度
  indoortem: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.indoortem(data).then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 室内湿度
  indoorhumidity: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.indoorhumidity(data).then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 家庭能效
  family: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.family(data).then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 设备列表
  wiringList: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.wiringList(data).then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 设备详情
  eledetail: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.eledetail(data).then((res) => {
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
