/**
 * Created by lx on 2018/3/1.
 */
import API from '../../cores/api.js'
import * as types from '../mutation-types'

const state = {
  homeData: {},
  wiringList: {},
  slideAction: 'slide-left'
}

const actions = {
  slide: function ({commit}) {
    commit(types.SLIDEACTION)
  },
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
        commit(types.WIRINGLIST, res.data)
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
  },
  // 设备开关
  switch: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.switch(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 绑定终端设备
  bind: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.bind(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 解除终端设备
  unbind: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.unbind(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // tabbar空调红外初始
  tabinit: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.tabinit(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // tabbar空调红外发送
  send: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.send(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // tabbar空调红外重置
  resetkt: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.resetkt(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 首页初始化
  homeinit: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.homeinit(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 删除设备
  deletedevice: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.deletedevice(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 删除设备
  editName: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.editName(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 扫描设备列表
  scan: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.scan(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 添加设备
  add: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.add(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  },
  // 添加设备
  queryChangeInfo: function ({commit}, data) {
    return new Promise((resolve, reject) => {
      API.queryChangeInfo(data).then((res) => {
        resolve(res)
      }, (error) => {
        reject(error)
      })
    })
  }
}

const mutations = {
  [types.WIRINGLIST] (state, data) {
    state.wiringList = data
  },
  editItemSwitchStatus (state, id) {
    state.wiringList.list.forEach((item) => {
      if (item.id == id) {
        if (item.switchStatus == '0') {
          item.switchStatus = '1'
        } else {
          item.switchStatus = '0'
        }
      }
    })
  },
  [types.SLIDEACTION] (state) {
    state.slideAction = 'slide-right'
    setTimeout(function () {
      state.slideAction = 'slide-left'
    }, 200)
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
