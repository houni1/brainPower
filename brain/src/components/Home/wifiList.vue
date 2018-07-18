<template>
  <div id="wifiList">
    <Headers>
      <span slot="title">添加设备</span>
    </Headers>
    <section>
      <group>
        <load-more tip="正在扫描，请稍后..." v-if="scanTxt"></load-more>
        <cell :title="item.deviceType" :value="item.deviceMacId" is-link  v-for="item in deviceList" @click.native="sureShow(item)"></cell>
      </group>
      <div class="none-wifi" v-if="noneList">
        <img src="../../assets/images/home/none-wifi.png" alt="">
        <p>没有发现任何设备</p>
      </div>
    </section>

    <confirm v-model="show"
             title="添加设备"
             @on-confirm="onConfirm">
      <p style="text-align:center;">确认添加设备？</p>
    </confirm>
  </div>
</template>

<script>
  import Headers from '../Common/Headers.vue'
  import { Group, Cell, CellBox, Confirm, LoadMore } from 'vux'
  export default {
    name: 'wifiList',
    components: {
      Headers,
      Group,
      Cell,
      CellBox,
      Confirm,
      LoadMore
    },
    data () {
      return {
        show: false,
        deviceList: [],
        terminalMac: '',
        saveData: {},
        deleflag: true,
        num: 0,
        num2: 0,
        deleflag2: true,
        scanTxt: true,
        noneList: false
      }
    },
    activated: function () {
      let _this = this
      this.deviceList = []
      this.scanTxt = true
      this.deleflag = true
      this.deleflag2 = true
      this.$store.dispatch('scan', {terminalId: window.localStorage.getItem('terminalId')}).then((res) => {
        if (res.status == 0) {
          console.log('111')
          // 生成定时器
          var timer = setInterval(function () {
            if (_this.deleflag && _this.num < 5) {
              _this.clock('scan')
              _this.num ++
            } else {
              // 清除定时器
              window.clearInterval(timer)
              _this.num = 0
              // _this.$store.dispatch('wiringList', {terminalId: window.localStorage.getItem('terminalId')})
              // _this.$router.back()
            }
          }, 5000)
        }
      })
    },
    methods: {
      onConfirm () {
        let _this = this
        this.$vux.loading.show()
        let params = {
          terminalMac: this.terminalMac,
          deviceMacId: this.saveData.deviceMacId,
          deviceType: this.saveData.deviceType
        }
        this.$store.dispatch('add', params).then((res) => {
          if (res.status == 0) {
            // 生成定时器
            window.timer2 = setInterval(function () {
              if (_this.deleflag2 && _this.num2 < 5) {
                _this.clock('add')
                _this.num2 ++
              } else {
                // 清除定时器
                if (_this.num2 == 5) {
                  _this.$vux.toast.show({
                    text: '绑定失败'
                  })
                }
                window.clearInterval(window.timer2)
                _this.num2 = 0
              }
            }, 5000)
          } else {
            this.$vux.toast.show({
              text: res.message
            })
          }
        })
      },
      sureShow (item) {
        this.show = true
        this.saveData = item
      },
      // 定时器通知
      clock (type) {
        let _this = this
        let params = {}
        if (type == 'scan') {
          params = {
            queryType: type,
            terminalId: window.localStorage.getItem('terminalId')
          }
        } else {
          params = {
            queryType: type,
            terminalMac: this.terminalMac,
            deviceMacId: this.saveData.deviceMacId,
            deviceType: this.saveData.deviceType
          }
        }
        this.$store.dispatch('queryChangeInfo', params).then((res) => {
          if (res.status == 0) {
            if (type == 'add') {
              _this.deleflag2 = false
              _this.num2 = 0
              _this.$vux.loading.hide()
              _this.$vux.toast.show({
                text: '添加成功',
                onHide () {
                  _this.$store.dispatch('wiringList', {terminalId: window.localStorage.getItem('terminalId')})
                  _this.$router.push('/')
                }
              })
            } else {
              _this.deviceList = res.data.list.devicelist
              if (_this.deviceList.length < 1) {
                _this.noneList = true
              }
              _this.scanTxt = false
              _this.terminalMac = res.data.list.terminalMac
              _this.deleflag = false
            }
          }
          if (res.status != 0 && type == 'add') {
            _this.$vux.toast.show({
              text: '绑定失败'
            })
            window.clearInterval(window.timer2)
          }
        })
      }
    }
  }
</script>

<style lang='less' scoped>
  #wifiList {}
  .none-wifi {text-align: center;padding: 20px 0;font-size: 12px;color: #dbdbdb;margin-top: 50px;}
  .none-wifi img {width: 80px;}
</style>
