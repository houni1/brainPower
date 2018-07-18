<template>
  <div id="eleDetails">
    <Headers>
      <span slot="title">{{title}}</span>
      <p slot="action" @click="moreShow = !moreShow" class="moreBox">
        <img src="../../assets/images/tabbar/icon_more.png" alt="">
      </p>
    </Headers>

    <div class="contBox">
      <div class="box">
        <p class="title">{{deviceDetail.name}}</p>
        <p class="state" v-if="deviceDetail.onlineStatus == '1'">
          <img src="../../assets/images/eledetails/icon_operation.png" alt="">
          <span class="stateTxt">在线</span>
        </p>
        <p class="state" v-else-if="deviceDetail.onlineStatus == '0'">
          <img src="../../assets/images/eledetails/icon_operation_nor.png" alt="">
          <span class="stateTxt">离线</span>
        </p>
        <!--<p class="switch" @click="isopenBtn(deviceDetail.id, deviceDetail.switchStatus, deviceDetail.onlineStatus)">-->
          <!--<img v-if="deviceDetail.switchStatus == '0'" src="../../assets/images/eledetails/switch_open.png" alt="">-->
          <!--<img v-else-if="deviceDetail.switchStatus == '1'" src="../../assets/images/eledetails/switch_close.png" alt="">-->
        <!--</p>-->
        <div>
          <ul class="control-box">
            <li @click="changeState(1)" class="up"></li>
            <li @click="changeState(2)" class="pause"></li>
            <li @click="changeState(3)" class="down"></li>
          </ul>
        </div>
        <!-- <p class="switch" @click="isopen(flag)">
          <img v-if="flag" src="../../assets/images/eledetails/switch_open.png" alt="">
          <img v-else src="../../assets/images/eledetails/switch_close.png" alt="">
        </p> -->
        <div class="infoBox">
          <p class="info_title">
            <span>基本信息</span>
          </p>
          <ul class="info_list">
            <li class="list_item">
              <span class="list_name">房间</span>
              <span class="list_cont">{{deviceDetail.roomName}}</span>
            </li>
            <li class="list_item">
              <span class="list_name">设备名称</span>
              <span class="list_cont">{{deviceDetail.name}}</span>
            </li>
            <li class="list_item">
              <span class="list_name">当前功率</span>
              <span class="list_cont">{{deviceDetail.currentPower}}W</span>
            </li>
            <li class="list_item">
              <span class="list_name">电流</span>
              <span class="list_cont">{{deviceDetail.elecCurrent}}A</span>
            </li>
            <li class="list_item">
              <span class="list_name">今日用电量</span>
              <span class="list_cont"><label class="color">{{deviceDetail.dailyElecSum}}</label> 度</span>
            </li>
            <li class="list_item">
              <span class="list_name">历史总用电量</span>
              <span class="list_cont"><label class="color">{{deviceDetail.accElecSum}}</label> 度</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <actionsheet
      v-model="moreShow"
      :menus="menus"
      @on-click-menu="clickMore" show-cancel></actionsheet>
    <confirm v-model="iscancel"
             title="删除设备"
             @on-cancel="onCancel"
             @on-confirm="onConfirm">
      <p style="text-align:center;">是否确定删除该设备</p>
    </confirm>
  </div>
</template>
<script>
import { Confirm, Popup, Actionsheet, ButtonTab, ButtonTabItem } from 'vux'
import Headers from '../Common/Headers.vue'
export default {
  name: 'eleDetails',
  data () {
    return {
      title: '电器详情',
      // isopen: true,
      deviceId: '',
      deviceDetail: {},
      flag: true,
      moreShow: false,
      iscancel: false,
      menus: {
        menu1: '删除设备'
      },
      switchFlag: ''
    }
  },
  components: {
    Headers,
    Confirm,
    Popup,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  created () {
    console.log('getparams')
    console.log(this.$route.params)
  },
  activated () {
    this.getcreated()
  },
  // activated: function () {
    // let _this = this
    // _this.deviceId = this.$route.params.deviceId
    // let param = {
    //   deviceId: _this.deviceId
    // }
    // console.log(param)
    // this.$store.dispatch('eledetail', param).then(function (res) {
    //   console.log(res.data.list[0])
    //   _this.deviceDetail = res.data.list[0]
    // })
  // },
  methods: {
    moreBox (flag) {
      // alert(flag)
      if (flag) {
        this.moreshow = false
      } else {
        this.moreshow = true
      }
    },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      let _this = this
      let param = {
        deviceId: this.deviceId
      }
      // alert(param)
      this.$store.dispatch('deletedevice', param).then(function (res) {
        // alert(JSON.stringify(res))
        if (res.status == 0) {
          _this.$router.replace('/')
        } else {
          _this.$vux.toast.text(res.message, 'middle')
        }
      })
    },
    deleted () {
      // alert('删除设备！！')
      this.iscancel = true
    },
    getcreated () {
      let _this = this
      _this.deviceId = this.$route.params.deviceId
      let param = {
        deviceId: _this.deviceId
      }
      console.log(param)
      this.$store.dispatch('eledetail', param).then(function (res) {
        console.log(res.data.list[0])
        _this.deviceDetail = res.data.list[0]
      })
    },
    isopen (flag) {
      console.log(flag)
      if (flag) {
        this.flag = false
      } else {
        this.flag = true
      }
      console.log(this.flag)
    },
    isopenBtn (id, flag, status) {
      if (status == '1') {
        console.log(id)
        let flagstr = flag.toString()
        console.log(flagstr)
        let _this = this
        if (flagstr == '0') {
          flagstr = '1'
        } else if (flagstr == '1') {
          flagstr = '0'
        }
        let param = {
          deviceId: id,
          switchStatus: flagstr
        }
        // alert(JSON.stringify(param))
        this.$store.dispatch('switch', param).then(function (res) {
          console.log(res)
          if (res.status == '0') {
            _this.getcreated()
            // console.log(_this.deviceDataList)
          }
        })
      } else if (status == '0') {
        alert('设备离线，请检查设备')
        return false
      }
    },
    clickMore (key) {
      if (key == 'menu1') {
        this.iscancel = true
      }
    },
    changeState (num) {
      this.switchFlag = num
    }
  }
}
</script>

<style scoped lang='less'>
.morelist {
  position: absolute;
  right: 3px;
  top: 44px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #ccc;
  text-align: center;
  width: 100px;
  padding: 5px;
  z-index: 99;
  .morecont {
    line-height: 20px;
    font-size: 12px;
  }
  .moreshow {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    left: 77%;
    transform: translateX(-50%);
    top: -5px;
  }
}
.moreBox {
  width: 22px;
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  img {
    display: block;
    width: 22px;
    height: 4px;
  }
}
.contBox {
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  box-sizing: border-box;
  overflow: hidden;
  .box {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: #fff;
    border-radius: 5px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 20px;
    box-sizing: border-box;
    .title {
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      color: #2c2d2e;
      margin-bottom: 21px;
    }
    .state {
      height: 24px;
      width: 68px;
      margin: 0 auto;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .stateTxt {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        text-align: center;
        color: #fff;
        line-height: 24px;
        font-size: 13px;
      }
    }
    .switch {
      width: 195px;
      height: 90px;
      margin: 30px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .infoBox {
      .info_title {
        padding-top: 12px;
        padding-bottom: 10px;
        width: 100%;
        span {
          display: inline-block;
          border-left: 2px solid #4086f5;
          padding-left: 8px;
          box-sizing: border-box;
          color: #2c2d2e;
          font-size: 14px;
          font-weight: bold;
        }
      }
      .info_list {
        .list_item {
          line-height: 45px;
          border-bottom: 1px solid #eee;
          display: flex;
          span {
            flex: 1;
            font-size: 14px;
          }
          .list_name {
            text-align: left;
            color: #666;
          }
          .list_cont {
            text-align: right;
            color: #2c2d2e;
            .color {
              color: #ff963d;
            }
          }
        }
        .list_item:last-child {
          border: 0;
        }
      }
    }
  }
}
.control-box {border: 1px solid #ddd;width: 80px;margin: 0 auto;}
.control-box li{width: 50px;height: 50px;margin: 0 auto;background: #faf;}
.control-box .up {background: url("../../assets/images/up_nor.png")center no-repeat;background-size: 80%;}
.control-box .pause {background: url("../../assets/images/parse_nor.png")center no-repeat;background-size: 80%;}
.control-box .down {background: url("../../assets/images/down.png")center no-repeat;background-size: 80%;}
.control-box .up.active {background: url("../../assets/images/up_pre.png")center no-repeat;background-size: 80%;}
.control-box .pause.active {background: url("../../assets/images/parse_pre.png")center no-repeat;background-size: 80%;}
.control-box .down.active {background: url("../../assets/images/down_pre.png")center no-repeat;background-size: 80%;}
</style>

