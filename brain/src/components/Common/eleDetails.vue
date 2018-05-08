<template>
  <div id="eleDetails">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <div class="box">
        <p class="title">{{deviceDetail.name}}</p>
        <p class="state" v-if="deviceDetail.onlineStatus == '0'">
          <img src="../../assets/images/eledetails/icon_operation.png" alt="">
          <span class="stateTxt">在线</span>
        </p>
        <p class="state" v-else-if="deviceDetail.onlineStatus == '1'">
          <img src="../../assets/images/eledetails/icon_operation_nor.png" alt="">
          <span class="stateTxt">离线</span>
        </p>
        <p class="switch" @click="isopenBtn(deviceDetail.id, deviceDetail.swicthStatus)">
          <img v-if="deviceDetail.swicthStatus == '1'" src="../../assets/images/eledetails/switch_open.png" alt="">
          <img v-else-if="deviceDetail.swicthStatus == '0'" src="../../assets/images/eledetails/switch_close.png" alt="">
        </p>
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
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
export default {
  name: 'eleDetails',
  data () {
    return {
      title: '电器详情',
      isopen: true,
      deviceId: '',
      deviceDetail: {}
    }
  },
  components: {
    Headers
  },
  created () {
    console.log('getparams')
    console.log(this.$route.params)
  },
  activated: function () {
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
  methods: {
    isopenBtn (id, flag) {
      console.log(id)
      let flagstr = flag.toString()
      console.log(flagstr)
      let param = {
        deviceId: id,
        switchStatus: flagstr
      }
      console.log(param)
      this.$store.dispatch('switch', param).then(function (res) {
        console.log(res)
      })
      if (flag == '1') {
        console.log('on')
      } else if (flag == '0') {
        console.log('off')
      }
    }
  }
}
</script>

<style scoped lang='less'>
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
    padding-top: 30px;
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
      margin: 33px auto;
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
</style>

