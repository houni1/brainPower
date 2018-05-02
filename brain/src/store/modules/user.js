/**
 * Created by lx on 2018/3/1.
 */
import API from '../../cores/api.js'
// import * as types from '../mutation-types'

const state = {
  userData: {}
}

const actions = {
  // 首页内容
  userhome: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.userhome(data).then((res) => {
        resolve(res.data)
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
