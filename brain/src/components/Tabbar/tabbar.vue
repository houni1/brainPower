<template>
  <div id="tabbar">
    <Headers>
      <div slot="title" class="tab_title">
        <div class="btnBox">
          <p @click="show1" :class="{isActive: isActive1}">空调插座</p>
          <p @click="show2" :class="{isActive: isActive2}">空调遥控器</p>
        </div>
      </div>
      <p slot="action" @click="moreBox(moreshow)" class="moreBox">
        <img src="../../assets/images/tabbar/icon_more.png" alt="">
      </p>
    </Headers>
    <div class="morelist" v-if="moreshow">
      <div class="morecont">
        <p @click="deleted">删除设备</p>
        <p @click="reset">红外重置</p>
        <p>定时</p>
        <p>刷新</p>
      </div>
      <div class="moreshow"></div>
    </div>
    <confirm v-model="iscancel"
      :title="删除设备"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
        <p style="text-align:center;">是否确定删除该设备</p>
    </confirm>
    <div class="tab_list">
      <div v-if="flag" class="contBox jack">
        <!-- <div class="box">
            <p class="title">空调智能插座</p>
            <p class="state">
            <img src="../../assets/images/eledetails/icon_operation.png" alt="">
            <span class="stateTxt">运行中</span>
            </p>
            <p class="switch" @click="isopenBtn">
              <img v-if="isopen" src="../../assets/images/eledetails/switch_open.png" alt="">
              <img v-else src="../../assets/images/eledetails/switch_close.png" alt="">
            </p>
            <div class="infoBox">
            <p class="info_title">
                <span>基本信息</span>
            </p>
            <ul class="info_list">
                <li class="list_item">
                <span class="list_name">房间</span>
                <span class="list_cont">卧室</span>
                </li>
                <li class="list_item">
                <span class="list_name">设备名称</span>
                <span class="list_cont">空调</span>
                </li>
                <li class="list_item">
                <span class="list_name">当前功率</span>
                <span class="list_cont">30W</span>
                </li>
                <li class="list_item">
                <span class="list_name">电流</span>
                <span class="list_cont">5A</span>
                </li>
                <li class="list_item">
                <span class="list_name">今日用电量</span>
                <span class="list_cont"><label class="color">10</label>度</span>
                </li>
                <li class="list_item">
                <span class="list_name">历史总用电量</span>
                <span class="list_cont"><label class="color">1000</label>度</span>
                </li>
            </ul>
            </div>
        </div> -->
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
          <p class="switch" @click="isopenBtn(deviceDetail.id, deviceDetail.switchStatus, deviceDetail.onlineStatus)">
            <img v-if="deviceDetail.switchStatus == '0'" src="../../assets/images/eledetails/switch_open.png" alt="">
            <img v-else-if="deviceDetail.switchStatus == '1'" src="../../assets/images/eledetails/switch_close.png" alt="">
          </p>
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
      <div v-else class="telecontroller">
        <div class="wrap">
          <div class="box">
            <p class="txt">设定温度</p>
            <p class="num"><span class="number">{{data.cTemp}}</span>℃</p>
            <p class="state">运行中</p>
            <dl class="left">
              <dt>
                <span class="pic">
                  <img src="../../assets/images/tabbar/icon_22.png" alt="">
                </span>
                <span class="left_txt">室内温度</span>
              </dt>
              <dd>28℃</dd>
            </dl>
            <div class="right" @click="isflag(cOnOff, 'cOnOff')">
              <img v-if="cOnOff == '关闭'" src="../../assets/images/tabbar/icon_close_big.png" alt="">
              <img v-else-if="cOnOff == '打开'" src="../../assets/images/tabbar/icon_open_big.png" alt="">
            </div>
          </div>
        </div>
        <div class="regulate">
          <span class="btn reduce" @click="reduce">
            <!-- <img src="../../assets/images/tabbar/btn_reduce.png" alt=""> -->
          </span>
          <span class="txt">调节温度</span>
          <span class="btn add" @click="add">
            <!-- <img src="../../assets/images/tabbar/btn_add.png" alt=""> -->
          </span>
        </div>
        <div class="btnsBox">
          <div class="btns_item" @click="isflag('自动', 'cMode')">
            <p class="pic">
              <img v-if="data.cMode == '自动'" src="../../assets/images/tabbar/icon_a_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_a_default.png" alt="">
            </p>
            <span class="txt">自动</span>
          </div>
          <div class="btns_item" @click="isflag('制冷', 'cMode')">
            <p class="pic">
              <img v-if="data.cMode == '制冷'" src="../../assets/images/tabbar/icon_b_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_b_default.png" alt="">
            </p>
            <span class="txt">制冷</span>
          </div>
          <div class="btns_item" @click="isflag('制热', 'cMode')">
            <p class="pic">
              <img v-if="data.cMode == '制热'" src="../../assets/images/tabbar/icon_c_icon_b_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_c_default.png" alt="">
            </p>
            <span class="txt">制热</span>
          </div>
          <div class="btns_item" @click="isflag('抽湿', 'cMode')">
            <p class="pic">
              <img v-if="data.cMode == '抽湿'" src="../../assets/images/tabbar/icon_d_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_d_default.png" alt="">
            </p>
            <span class="txt">除湿</span>
          </div>
          <div class="btns_item" @click="isflag('送风', 'cMode')">
            <p class="pic">
              <img v-if="data.cMode == '送风'" src="../../assets/images/tabbar/icon_j_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_j_default.png" alt="">
            </p>
            <span class="txt">送风</span>
          </div>
          <div class="btns_item" @click="isflag('风向', 'cWindDir')">
            <p class="pic">
              <img src="../../assets/images/tabbar/icon_bf_pre.png" alt="">
              <!-- <img src="../../assets/images/tabbar/icon_bf_nor.png" alt=""> -->
            </p>
            <span class="txt">风向</span>
          </div>
          <div class="btns_item" @click="isflag('风速3', 'cWind')">
            <p class="pic">
              <img v-if="data.cWind == '风速3'" src="../../assets/images/tabbar/icon_g_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_g_default.png" alt="">
            </p>
            <span class="txt">大风</span>
          </div>
          <div class="btns_item" @click="isflag('风速2', 'cWind')">
            <p class="pic">
              <img v-if="data.cWind == '风速2'" src="../../assets/images/tabbar/icon_h_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_h_default.png" alt="">
            </p>
            <span class="txt">中风</span>
          </div>
          <div class="btns_item" @click="isflag('风速1', 'cWind')">
            <p class="pic">
              <img v-if="data.cWind == '风速1'" src="../../assets/images/tabbar/icon_I_selected.png" alt="">
              <img v-else src="../../assets/images/tabbar/icon_I_default.png" alt="">
            </p>
            <span class="txt">小风</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../Common/Headers.vue'
import { Popover, Confirm } from 'vux'
export default {
  name: 'tabbar',
  data () {
    return {
      flag: true,
      isActive1: true,
      isActive2: false,
      isopen: true,
      deviceId: '',
      deviceDetail: {},
      data: {
        cOnOff: ''
      },
      cKey: '',
      cOnOff: '关闭',
      moreshow: false,
      iscancel: false
    }
  },
  components: {
    Headers,
    Popover,
    Confirm
  },
  created () {
    console.log('getparams')
    console.log(this.$route.params)
    let _this = this
    _this.deviceId = this.$route.params.deviceId
    let param = {
      deviceId: _this.deviceId
    }
    this.$store.dispatch('tabinit', param).then(function (res) {
      console.log('空调红外')
      // alert(JSON.stringify(res))
      _this.data = res.data.list
      _this.cOnOff = res.data.list.cOnOff
    })
  },
  activated () {
    this.getcreated()
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      let param = {
        deviceId: this.deviceId
      }
      // alert(param)
      this.$store.dispatch('deletedevice', param).then(function (res) {
        // alert(JSON.stringify(res))
      })
    },
    deleted () {
      // alert('删除设备！！')
      this.iscancel = true
    },
    reset () {
      let _this = this
      _this.moreshow = false
      let param = {
        deviceId: _this.deviceId
      }
      // alert(JSON.stringify(param))
      this.$store.dispatch('resetkt', param).then(function (res) {
        // alert(JSON.stringify(res))
      })
    },
    moreBox (flag) {
      // alert(flag)
      if (flag) {
        this.moreshow = false
      } else {
        this.moreshow = true
      }
    },
    isflag (flag, type) {
      // alert(flag)
      // alert(type)
      if (type == 'cOnOff') {
        this.data['cKey'] = '0'
        if (flag == '关闭') {
          this.cOnOff = '打开'
        } else {
          this.cOnOff = '关闭'
        }
      } else if (type == 'cMode') {
        this.data['cKey'] = '1'
        if (flag == '自动') {
          this.data.cMode = '自动'
        } else if (flag == '制冷') {
          this.data.cMode = '制冷'
        } else if (flag == '制热') {
          this.data.cMode = '制热'
        } else if (flag == '抽湿') {
          this.data.cMode = '抽湿'
        } else if (flag == '送风') {
          this.data.cMode = '送风'
        }
      } else if (type == 'cWind') {
        this.data['cKey'] = '3'
        if (flag == '自动') {
          this.data.cWind = '自动'
        } else if (flag == '风速1') {
          this.data.cWind = '风速1'
        } else if (flag == '风速2') {
          this.data.cWind = '风速2'
        } else if (flag == '风速3') {
          this.data.cWind = '风速3'
        }
      } else if (type == 'cTemp') {
        this.data['cKey'] = '2'
        this.data.cTemp = flag
      }
      this.data['deviceId'] = this.deviceId
      this.data['terminalId'] = window.localStorage.getItem('terminalId')
      this.data['cOnOff'] = this.cOnOff
      let param = this.data
      // alert(JSON.stringify(param))
      let _this = this
      this.$store.dispatch('send', param).then(function (res) {
        // alert(res.status, res.message)
        if (res.status == '0') {
          _this.data = param
        }
      })
    },
    getcreated () {
      let _this = this
      _this.deviceId = this.$route.params.deviceId
      let param = {
        deviceId: _this.deviceId
      }
      // alert(JSON.stringify(param))
      this.$store.dispatch('eledetail', param).then(function (res) {
        console.log(res.data.list[0])
        _this.deviceDetail = res.data.list[0]
        // alert(JSON.stringify(_this.deviceDetail))
      })
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
          // alert(JSON.stringify(res))
          if (res.status == '0') {
            _this.getcreated()
          }
        })
      } else if (status == '0') {
        alert('设备离线，请检查设备')
        return false
      }
    },
    show1 () {
      console.log(1)
      this.flag = true
      this.isActive1 = true
      this.isActive2 = false
    },
    show2 () {
      console.log(2)
      // alert(this.deviceDetail.irMatchStatus)
      this.flag = false
      this.isActive1 = false
      this.isActive2 = true
      if (this.deviceDetail.irMatchStatus == '0') {
        alert('您的设备尚未学习红外控制器')
        return false
      }
    },
    reduce () {
      this.data.cTemp = this.data.cTemp - 1
      this.isflag(this.data.cTemp, 'cTemp')
    },
    add () {
      console.log('+')
      this.data.cTemp = Number(this.data.cTemp) + 1
      // alert(this.data.cTemp)
      this.isflag(this.data.cTemp, 'cTemp')
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
.tab_title {
  padding-left: 67px;
  padding-right: 67px;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding-top: 8px;
  .btnBox {
    width: 100%;
    display: flex;
    height: 28px;
    background: pink;
    line-height: 28px;
    background: url('../../assets/images/tabbar/tabber_a.png')no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    p {
      flex: 1;
      text-align: center;
      font-size: 12px;
      line-height: 28px;
    }
    .isActive {
      background: url('../../assets/images/tabbar/tabber_b.png')no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      color: #407df2;
    }
  }
}
.telecontroller {
  .wrap {
    background: #fff;
  }
  .box {
    width: 100%;
    height: 236px;
    background: url('../../assets/images/tabbar/pic_home_02.png')no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    padding-top: 49px;
    box-sizing: border-box;
    position: relative;
    .right {
      position: absolute;
      top: 21px;
      right: 12px;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
    .left {
      position: absolute;
      width: 72px;
      height: 50px;
      left: 16px;
      top: 23px;
      text-align: center;
      color: #fff;
      dt {
        font-size: 12px;
        .pic {
          display: inline-block;
          width: 15px;
          height: 15px;
          float: left;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .left_txt {
          line-height: 15px;
          padding-left: 2px;
          padding-bottom: 8px;
          float: left;
          display: inline-block;
        }
      }
      dd {
        font-size: 13px;
        font-weight: bold;
      }
    }
    .txt {
      font-size: 10px;
      color: #fff;
      text-align: center;
    }
    .num {
      color: #fff;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
      .number {
        font-size: 60px;
      }
    }
    .state {
      width: 75px;
      height: 20px;
      line-height: 20px;
      margin: 0 auto;
      text-align: center;
      border-radius: 20px;
      border: 1px solid #fff;
      font-size: 10px;
      color: #fff;
      margin-top: 5px;
      padding-bottom: 1px;
      box-sizing: border-box;
    }
  }
  .btnsBox {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: auto;
    background: #fff;
    display: flex;
    flex-flow: wrap;
    .btns_item {
      width: 33.33%;
      text-align: center;
      padding-top: 13px;
      padding-bottom: 13px;
      height: 90px;
      box-sizing: border-box;
      border: 1px solid #eee;
      .pic {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .txt {
        padding-top: 11px;
        font-size: 13px;
        color: #aaa;
      }
    }
  }
  .regulate {
    width: 100%;
    height: 90px;
    background: #fff;
    padding: 15px 52px;
    display: flex;
    box-sizing: border-box;
    span {
      display: inline-block;
    }
    .btn {
      width: 60px;
      height: 60px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .reduce {
      background: url('../../assets/images/tabbar/btn_reduce.png')no-repeat;
      background-size: 100% 100%;
    }
    .reduce:active {
      background: url('../../assets/images/tabbar/btn_reduce_pre.png')no-repeat;
      background-size: 100% 100%;
    }
    .add {
      background: url('../../assets/images/tabbar/btn_add.png')no-repeat;
      background-size: 100% 100%;
    }
    .add:active {
      background: url('../../assets/images/tabbar/btn_add_pre.png')no-repeat;
      background-size: 100% 100%;
    }
    .txt {
      flex: 1;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #64676a;
      font-size: 15px;
    }
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
</style>
