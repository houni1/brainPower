<template>
  <div id="wifiList">
    <Headers>
      <span slot="title">添加设备</span>
    </Headers>
    <section>
      <group>
        <cell :title="item.deviceType" :value="item.deviceMacId" is-link  v-for="item in deviceList" @click.native="sureShow(item)"></cell>
      </group>
      <div class="none-wifi" v-if="deviceList.length < 1">
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
import { Group, Cell, CellBox, Confirm } from 'vux'
export default {
  name: 'wifiList',
  components: {
    Headers,
    Group,
    Cell,
    CellBox,
    Confirm
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
      deleflag2: true
    }
  },
  activated: function () {
    let _this = this
    this.$store.dispatch('scan', {terminalId: window.localStorage.getItem('terminalId')}).then((res) => {
      if (res.status == 0) {
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
      let params = {
        terminalMac: this.terminalMac,
        deviceMacId: this.saveData.deviceMacId,
        deviceType: this.saveData.deviceType
      }
      this.$store.dispatch('add', params).then((res) => {
        if (res.status == 0) {
          // 生成定时器
          var timer2 = setInterval(function () {
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
              window.clearInterval(timer2)
              _this.num2 = 0
              // _this.$store.dispatch('wiringList', {terminalId: window.localStorage.getItem('terminalId')})
              // _this.$router.back()
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
            this.deleflag2 = false
            this.$vux.toast.show({
              text: '添加成功',
              onHide () {
                this.$store.dispatch('wiringList', {terminalId: window.localStorage.getItem('terminalId')})
                this.$router.back()
              }
            })
          } else {
            this.deviceList = res.data.list.devicelist
            this.terminalMac = res.data.list.terminalMac
            this.deleflag = false
          }
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
