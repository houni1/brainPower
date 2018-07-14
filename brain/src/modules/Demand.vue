<template>
  <div id="Demand">
    <div class="defaultBox" v-show="isAndroid">
      <div class="titleBox">
        <p class="title">场景设置</p>
      </div>
    </div>
    <div v-show="isiOS" class="iosbox">
      <div class="titleBox">
        <p class="title">场景设置</p>
      </div>
    </div>
    <div v-show="isPhoneX" class="iphonexbox">
      <div class="titleBox">
        <p class="title">场景设置</p>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <p class="section-title">选择场景模式</p>
        <div class="card">
          <div class="card-text">
            <p class="card-title">节能模式</p>
            <p class="card-desc">空调固定温度  26℃</p>
          </div>
          <div class="card-switch">
            <div @click="switchMode('mode_energy')" class="icon-switch"
                 :class="currentMode === 'mode_energy' ? 'active' : ''"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <p class="card-title">舒适模式</p>
            <p class="card-desc">空调固定温度  24℃</p>
          </div>
          <div class="card-switch">
            <div @click="switchMode('mode_comfort')" class="icon-switch"
                 :class="currentMode === 'mode_comfort' ? 'active' : ''"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-text">
            <p class="card-title">智能模式</p>
            <div class="card-desc">
              <p>室温高于24<span style="display: inline-block; width: 1em;text-align: center;">℃</span>—制冷模式</p>
              <p>湿度高于60<span style="display: inline-block; width: 1em;text-align: center;">%</span>—除湿模式</p>
            </div>
          </div>
          <div class="card-switch">
            <div @click="switchMode('mode_intelligent')" class="icon-switch"
                 :class="currentMode === 'mode_intelligent' ? 'active' : ''"></div>
          </div>
        </div>
        <div class="card-custom">
          <div class="card-header">
            <p class="card-title">自定义模式</p>
            <div class="card-switch">
              <div @click="switchMode('mode_custom')" class="icon-switch"
                   :class="currentMode === 'mode_custom' ? 'active' : ''"></div>
            </div>
          </div>
          <div class="card-content">
            <div class="item">
              <p class="item-title">温度</p>
              <div class="action">
                <i v-if="currentMode !== 'mode_custom'" @click="changeValue('temperature', -1)"
                   class="icon-decrease"></i>
                <span class="action-value"
                      :class="currentMode === 'mode_custom' ? 'disabled' :''">{{temperature}}℃</span>
                <i v-if="currentMode !== 'mode_custom'" @click="changeValue('temperature', +1)"
                   class="icon-increase"></i>
              </div>
            </div>
            <div class="item">
              <p class="item-title">湿度</p>
              <div class="action">
                <i v-if="currentMode !== 'mode_custom'" @click="changeValue('humidity', -5)" class="icon-decrease"></i>
                <span class="action-value"
                      :class="currentMode === 'mode_custom' ? 'disabled' :''">{{humidity}}%</span>
                <i v-if="currentMode !== 'mode_custom'" @click="changeValue('humidity', +5)" class="icon-increase"></i>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <p class="tips">请先选择温湿度数值，再打开自定义模式</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {LoadMore} from 'vux'

  const MODE_ENERGY = 'mode_energy'
  const MODE_COMFORT = 'mode_comfort'
  const MODE_INTELLIGENT = 'mode_intelligent'
  const MODE_CUSTOM = 'mode_custom'

  export default {
    name: 'Demand',
    components: {
      LoadMore
    },
    data () {
      return {
        isAndroid: true,
        isiOS: false,
        isPhoneX: false,
        currentMode: '',
        temperature: 25,
        humidity: 30,
        infoList: {},
        noList: false,
        message: ''
      }
    },
    /**
     * 生命周期函数--在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
     */
    beforeCreate: function () {
    },
    /**
     * 生命周期函数--在实例创建完成后被立即调用
     */
    created: function () {
      let type = this.$route.query.type
      // alert(type)
      window.localStorage.setItem('type', type)
      let types = window.localStorage.getItem('type')
      // alert(type)
      if (types) {
        if (types == 1) {
          this.isiOS = true
          this.isAndroid = false
          this.isPhoneX = false
        } else if (types == 2) {
          this.isPhoneX = true
          this.isiOS = false
          this.isAndroid = false
        }
      }

      this.getList()
    },
    /**
     * 生命周期函数--在挂载开始之前被调用：相关的 render 函数首次被调用
     */
    beforeMount: function () {
    },
    /**
     * 生命周期函数--el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
     */
    mounted: function () {
    },
    /**
     * 生命周期函数--数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
     */
    beforeUpdate: function () {
    },
    /**
     * 生命周期函数--由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
     */
    updated: function () {
    },
    /**
     * 生命周期函数--keep-alive 组件激活时调用
     */
    activated: function () {
    },
    /**
     * 组件内方法
     */
    methods: {
      switchMode (mode) {
        if (this.noList) {
          this.$vux.toast.show({
            type: 'text',
            width: '20em',
            text: this.message
          })
          return
        }
        if (this.currentMode === mode) {
          // 取消
          this.setDeviceScenes(false).then((res) => {
            this.currentMode = ''
          })
        } else {
          this.currentMode = mode
          this.setDeviceScenes(true).then((res) => {
          }, (error) => {
            console.log(error)
            this.currentMode = ''
          })
        }
      },
      changeValue (type, diff) {
        if (type === 'temperature') {
          this.temperature += diff
        } else {
          this.humidity += diff
        }
        if (this.temperature > 27) {
          this.temperature = 27
          this.$vux.toast.show({
            text: '已到达最大值',
            type: 'text'
          })
          return
        }
        if (this.temperature < 18) {
          this.temperature = 18
          this.$vux.toast.show({
            text: '已到达最小值',
            type: 'text'
          })
          return
        }
        if (this.humidity > 70) {
          this.humidity = 70
          this.$vux.toast.show({
            text: '已到达最大值',
            type: 'text'
          })
          return
        }
        if (this.humidity < 30) {
          this.humidity = 30
          this.$vux.toast.show({
            text: '已到达最小值',
            type: 'text'
          })
        }
      },
      getList () {
        let params = {
          memberId: window.localStorage['memberId']
        }
        this.$store.dispatch('getDeviceIrList', params).then((res) => {
            if (res.list) {
              this.infoList = res.list
            } else {
              this.noList = true
              this.message = res.message
            }
          }
        )
      },
      setDeviceScenes (isopen) {
        let params = {
          memberId: this.infoList.memberId,
          deviceId: this.infoList.deviceId,
          terminalId: this.infoList.terminalId,
          regionId: this.infoList.regionId,
          key: this.infoList.key,
          operatType: isopen ? '1' : '0',
          scenesType: this.getScenesType(),
          rh: this.humidity,
          cTemp: this.temperature
        }
        return new Promise((resolve, reject) => {
          this.$store.dispatch('setDeviceScenes', params).then((res) => {
            if (res.status == 0) {
              resolve(res)
            } else {
              reject(res)
            }
          }, (error) => {
            reject(error)
          })
        })
      },
      getScenesType () {
        const list = [MODE_ENERGY, MODE_COMFORT, MODE_INTELLIGENT, MODE_CUSTOM]
        return list.indexOf(this.currentMode)
      }
    },
    /**
     * 计算属性
     */
    computed: {}
  }
</script>

<style lang="less">
  #Demand {
    flex: 1;
    overflow: scroll;
    padding-bottom: 63px;
    position: relative;
    .defaultBox {
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      background: url('../assets/images/header/pic_an.png') no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .iphonexbox {
      height: 94px;
      padding-top: 44px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      background: url('../assets/images/header/picx.png') no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .iosbox {
      height: 70px;
      padding-top: 20px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      background: url('../assets/images/header/pic_ios.png') no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .titleBox {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      position: relative;
      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .scan {
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .content-wrapper {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 50px;
      overflow: auto;
      .content {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 12px;
      }
    }
  }

  .section-title {
    font-size: 12px;
    color: #666666;
  }

  .card {
    margin: 10px 0;
    background: #fff;
    border-radius: 12px;
    padding: 18px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-title {
      font-size: 16px;
      font-weight: bold;
      color: #2c2d2e;
    }
    .card-desc {
      margin-top: 7px;
      color: #666666;
      font-size: 11px;
    }
    .card-switch {
      flex: 0 0 50px;
    }
  }

  .icon-switch {
    width: 50px;
    height: 30px;
    background-image: url("../assets/images/home/icon_switch_nor.png");
    background-repeat: no-repeat;
    background-size: cover;
    &.active {
      background-image: url("../assets/images/home/icon_switch.png");
    }
  }

  .icon-decrease, .icon-increase {
    background-repeat: no-repeat;
    background-size: cover;
  }

  .icon-decrease {
    background-image: url("../assets/images/home/icon_reduce.png");
  }

  .icon-increase {
    background-image: url("../assets/images/home/icon_add.png");
  }

  .card-custom {
    border-radius: 12px;
    background: #fff;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      box-sizing: border-box;
      padding: 0 13px;
      box-shadow: inset 0px -1px 0px 0px rgba(48, 25, 25, 0.1);
      .card-title {
        font-size: 16px;
        font-weight: bold;
        color: #2c2d2e;
      }
    }
    .card-content {
      .item {
        height: 45px;
        box-sizing: border-box;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-title {
          font-size: 15px;
          color: #2c2d2e;
        }
        .action {
          display: flex;
          align-items: center;
          i {
            width: 30px;
            height: 30px;
          }
          &-value {
            margin: 0 10px;
            width: 40px;
            text-align: center;
            display: inline-block;
            &.disabled {
              color: #dddddd;
            }
          }
        }
      }
    }
    .card-footer {
      box-sizing: border-box;
      padding: 0 10px 10px;
      font-size: 11px;
      color: #666666;
    }
  }

</style>
