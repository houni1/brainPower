<template>
    <div class="wiringList" id="wiringList">
      <!-- <alert v-model="lineshow" title="提示消息">网关处于离线状态</alert> -->
      <div class="titleBox">
          <p class="titleTxt">我的电器</p>
      </div>
      <div class="wiringBox">
        <div class="wiring_item" v-for="(item, index) in wiringList.list" :key="index" @click="toEleDetail(item)">
          <div class="wiring_icon" :class="{'noOnline': item.onlineStatus == 0}">
            <img src="../../assets/images/home/icon_jiashiqi.png" alt="">
          </div>
          <div class="wiring_cont">
            <p class="wiring_name" :class="{'noOnlineTxt': item.onlineStatus == 0}">{{item.name}}({{item.roomName}})</p>
            <p class="wiring_power" v-if="item.onlineStatus == 1">当前功率：{{item.currentPower}}W</p>
            <p class="wiring_power" v-else>设备离线</p>
          </div>
          <div class="wiring_rightBox">
            <!-- <div class="wiring_btn" @click.stop="isopen(flag)">
              <img v-if="flag" src="../../assets/images/home/icon_switch.png" alt="">
              <img v-else src="../../assets/images/home/icon_switch_nor.png" alt="">
            </div> -->
            <div class="wiring_btn" @click.stop="isopenBtn(item.id, item.switchStatus, item.onlineStatus)">
              <img v-if="item.switchStatus == '0'" src="../../assets/images/home/icon_switch.png" alt="">
              <img v-else-if="item.switchStatus == '1'" src="../../assets/images/home/icon_switch_nor.png" alt="">
            </div>
            <div class="wiring_right">
              <img src="../../assets/images/home/icon_arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Alert } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'wiringList',
  props: ['showDetail'],
  components: {
    Alert
  },
  data () {
    return {
      deviceDataList: [],
      show: true,
      lineshow: false,
      datalist: [
        {
          'swicthStatus': '0',
          'currentPower': '2000',
          'name': '空调',
          'id': '1',
          'roomName': '主卧'
        }
      ],
      flag: false
    }
  },
  // activated: function () {
  //   let _this = this
  //   let param = {
  //     terminalId: '888'
  //     // terminalId: '999'
  //   }
  //   this.$store.dispatch('wiringList', param).then(function (res) {
  //     // console.log(res.list)
  //     _this.deviceDataList = res.list
  //   })
  // },
  activated () {
    this.getcreated()
  },
  methods: {
    getcreated () {
      let _this = this
      let terminalId = window.localStorage.getItem('terminalId')
      if (terminalId != '0') {
        let param = {
          terminalId: terminalId
        }
        this.$store.dispatch('wiringList', param).then(function (res) {
          console.log('设备列表11111')
          console.log('999', _this.wiringList)
          console.log(res.list)
          if (res.list) {
            _this.deviceDataList = res.list
          }
        })
      } else {
        _this.deviceDataList = []
      }
    },
    toEleDetail (item) {
      if (this.showDetail.detailflag) {
        if (item.onlineStatus == 0) {
          // 设别离线
          this.$vux.toast.text('设备已离线', 'middle')
          return
        }
        if (item.deviceType == '0' || item.deviceType == '2') {
          this.$router.push({name: 'tabbar', params: { deviceId: item.id }})
        } else {
          this.$router.push({name: 'eleDetails', params: { deviceId: item.id }})
        }
      } else {
        // alert('网关处于离线状态')
        this.$emit('alertshow', this.show)
        // this.show = true
        return false
      }
    },
    isopenBtn (id, flag, status) {
      if (this.showDetail.detailflag) {
        // alert(JSON.stringify(this.deviceDataList))
        if (status == '1') {
          this.deviceDataList.forEach((item) => {
            if (item.id == id) {
              if (item.switchStatus == '0') {
                item.switchStatus = '1'
                flag = '1'
              } else if (item.switchStatus == '1') {
                item.switchStatus = '0'
                flag = '0'
              }
            }
          })
          // alert(flag)
          // let _this = this
          let param = {
            deviceId: id,
            switchStatus: flag
          }
          // alert(JSON.stringify(param))
          this.$store.dispatch('switch', param).then(function (res) {
          })
        } else if (status == '0') {
          alert('设备离线，请检查设备')
          // this.lineshow = true
          return false
        }
      } else {
        // alert('网关处于离线状态')
        // this.show = true
        this.$emit('alertshow', this.show)
        return false
      }
    }
  },
  computed: {
    ...mapState({
      wiringList: state => state.home.wiringList
    })
  }
}
</script>

<style lang='less' scoped>
.wiringList {
    .noOnline {opacity: 0.4;}
    .noOnlineTxt {color: #888!important;}
    width: 100%;
    height: auto;
    background: #fff;
    .wiringBox {
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box;
      .wiring_item {
        padding-top: 10px;
        padding-bottom: 10px;
        height: 65px;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #eee;
        div {
          display: inline-block;
        }
        .wiring_cont {
          padding-left: 9px;
          flex: 1;
          height: 45px;
          .wiring_name {
            font-size: 15px;
            color: #515256;
          }
          .wiring_power {
            padding-top: 12px;
            font-size: 12px;
            color: #888;
          }
        }
        .wiring_rightBox {
          width: 70px;
          height: 45px;
          float: right;
          position: relative;
          .wiring_btn {
            position: absolute;
            top: 3.5px;
            width: 55px;
            height: 38px;
            right: 40px;
            img {
              position: absolute;
              left: 0;
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }
          .wiring_right {
            width: 25px;
            height: 25px;
            position: absolute;
            right: -10px;
            top: 10px;
            img {
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }
        }
        .wiring_icon {
          width: 45px;
          height: 45px;
          float: left;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .titleBox {
      height: 46px;
      width: 100%;
      padding: 14px 12px;
      box-sizing: border-box;
      margin-bottom: 3px;
      .titleTxt {
        border-left: 2px solid #4086f5;
        padding-left: 13px;
        font-size: 14px;
        font-weight: bold;
        color: #2c2d2e;
        line-height: 16px;
      }
    }
  }
</style>
