<template>
  <div id="Home">
    <div class="defaultBox" v-show="isAndroid">
      <div class="titleBox">
        <p class="title">首页</p>
        <span class="scan" @click="scan">
          <img src="../assets/images/home/icon_scanning.png" alt="">
        </span>
      </div>
    </div>
    <div v-show="isiOS" class="iosbox">
      <div class="titleBox">
        <p class="title">首页</p>
        <span class="scan" @click="scan">
          <img src="../assets/images/home/icon_scanning.png" alt="">
        </span>
      </div>
    </div>
    <div v-show="isPhoneX" class="iphonexbox">
      <div class="titleBox">
        <p class="title">首页</p>
        <span class="scan" @click="scan">
          <img src="../assets/images/home/icon_scanning.png" alt="">
        </span>
      </div>
    </div>
    <div class="homewrap" :style="{'padding-top': isPhoneX?'44px': (isiOS?'20px':'0')}">
      <pull-to :top-load-method="refresh">
        <div class="homeBox">
          <div class="box">
            <div class="temperatureList">
              <warmList></warmList>
            </div>
          </div>
          <family></family>
          <wiringList :showDetail="showDetail"  v-on:alertshow="alertshow"></wiringList>
        </div>
      </pull-to>
    </div>
    <p class="refresh-txt">下拉刷新</p>
    <alert v-model="show" title="提示消息">网关处于离线状态，仅能查询历史数据，部分功能将不可用</alert>
  </div>
</template>

<script>
import warmList from '../components/Home/warmList.vue'
import family from '../components/Home/family.vue'
import wiringList from '../components/Home/wiringList.vue'
import PullTo from 'vue-pull-to'
import { Alert } from 'vux'
export default {
  name: 'Home',
  components: {
    PullTo,
    warmList,
    family,
    wiringList,
    Alert
  },
  data () {
    return {
      isAndroid: true,
      isiOS: false,
      isPhoneX: false,
      show: false,
      isopen: true,
      data: {},
      terminal: {},
      showDetail: {
        detailflag: true
      }
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
    console.log('home')
    let user = window.localStorage.getItem('user')
    console.log(user)
    if (user) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
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
    this.homeinit()
  },
  /**
   * 组件内方法
   */
  methods: {
    // 下拉刷新
    refresh (loaded) {
      let _this = this
      setTimeout(() => {
        // location.reload()
        // _this.$root.reload()
        // _this.$router.replace('/')
        _this.homeinit()
        // 触发设备列表更新
        this.$store.dispatch('wiringList', {terminalId: window.localStorage.getItem('terminalId')})
        loaded('done')
      }, 2000)
    },
    alertshow (flag) {
      this.show = flag
    },
    homeinit () {
      let _this = this
      let memberId = window.localStorage.getItem('memberId')
      let param = {
        memberId: memberId
      }
      console.log(param)
      this.$store.dispatch('homeinit', param).then(function (res) {
        console.log(res)
        if (res.data.list) {
          let terminalId = res.data.list.terminalId
          // alert(terminalId)
          window.localStorage.setItem('terminalId', terminalId)
          let regionId = res.data.list.regionId
          window.localStorage.setItem('regionId', regionId)
          let regionName = res.data.list.regionName
          window.localStorage.setItem('regionName', regionName)
          let accountId = res.data.list.accountId
          window.localStorage.setItem('accountId', accountId)
          if (res.data.list.terminalOnlineStatus == '离线') {
            // alert(res.data.list.terminalOnlineStatus)
            _this.showDetail.detailflag = false
            _this.show = true
          }
        }
      })
    },
    // 扫描二维码
    scan () {
      console.log('点击扫描按钮')
      // this.$router.push('/sweepcode')
      var dsBridge = require('dsbridge')
      console.log(dsBridge)
      // let _this = this
      // console.log(window.location.href)
      // let macid = '1c1cfd1ebde3'
      // window.location.href += 'terminal?macId=' + macid
      dsBridge.call('startScan', 'startScan', function (v) {
        // alert(v)
        console.log(v)
        let macid = v
        console.log(macid)
        window.location.href += 'terminal?macId=' + macid
        // _this.$router.push({name: 'terminal', params: {macId: macid}})
      })
      dsBridge.register('startScan', function (l, r) {
        console.log('l+r')
        console.log(l + r)
      })
    }
  },
  /**
   * 计算属性
   */
  computed: {
  }
}
</script>

<style lang='less' scoped>
  .refresh-txt {text-align: center; position: fixed; width: 100%; left:0;bottom: 60px;font-size: 10px;color: #999;z-index: 999;}
  #Home {
  flex: 1;
  overflow: scroll;
  padding-bottom: 53px;
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
  .homewrap {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  .box {
    background: #fff;
    .temperatureList {
      width: 100%;
      height: 214px;
      padding-top: 49px;
      box-sizing: border-box;
      background: url('../assets/images/home/pic_home.png') no-repeat;
      background-size: 100% 100%;
      .fixedBox {
        height: 32px;
        width: 100%;
        padding-top: 8px;
        box-sizing: border-box;
        .contBox {
          width: 145px;
          height: 24px;
          padding-left: 14px;
          box-sizing: border-box;
          border-radius: 0 20px 20px 0;
          background: rgba(51, 91, 192, .5);
          .txt {
            line-height: 24px;
            display: inline-block;
            float: left;
            padding-right: 4px;
            font-size: 11px;
            color: #fff;
          }
          .pic {
            display: inline-block;
            float: left;
            width: 15px;
            height: 15px;
            margin-top: 4.5px;
          }
        }
      }
      .warmList {
        width: 100%;
        height: 156px;
        // background: pink;
        display: flex;
        .warm_item {
          flex: 1;
          text-align: center;
          padding-top: 22px;
          box-sizing: border-box;
          color: #fff;
          .txt {
            padding-bottom: 12px;
            font-size: 12px;
          }
          .num {
            width: 100%;
            height: 30px;
            line-height: 30px;
            .number {
              font-size: 26px;
              display: inline-block;
            }
            .unit {
              font-size: 16px;
              display: inline-block;
            }
          }
          .air {
            padding-top: 10px;
            padding-bottom: 8px;
            font-size: 12px;
          }
          .pic {
            height: 14px;
            position: relative;
            .picTxt {
              display: inline-block;
              width: 100%;
              height: 14px;
              position: absolute;
              left: 0;
              top: 1px;
              font-size: 10px;
              line-height: 14px;
            }
            img {
              height: 100%;
              display: inline-block;
            }
          }
        }
        .indoortem {
          .num {
            border-left: 1px solid #659cf6;
            border-right: 1px solid #658ef1;
          }
        }
      }
      // .titleBox {
      //   width: 100%;
      //   height: 40px;
      //   line-height: 40px;
      //   text-align: center;
      //   color: #fff;
      //   position: relative;
      //   .title {
      //     font-size: 16px;
      //     font-weight: bold;
      //   }
      //   .scan {
      //     position: absolute;
      //     right: 0;
      //     top: 0;
      //     display: block;
      //     width: 40px;
      //     height: 40px;
      //     img {
      //       width: 100%;
      //       height: 100%;
      //     }
      //   }
      // }
    }
  }
  .family {
    width: 100%;
    height: 152px;
    background: #fff;
    margin-bottom: 10px;
    .electricList {
      padding-top: 10px;
      padding-bottom: 30px;
      width: 100%;
      height: 108px;
      box-sizing: border-box;
      background: #fff;
      display: flex;
      .ele_item {
        flex: 1;
        text-align: center;
        height: 68px;
        .ele_title {
          height: 15px;
          width: 105px;
          margin: 0 auto;
          span {
            display: inline-block;
          }
          .ele_txt {
            line-height: 15px;
            font-size: 11px;
            color: #515256;
            float: left;
            padding-left: 5px;
          }
          .ele_icon {
            width: 15px;
            height: 15px;
            float: left;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
        .ele_num {
          padding-top: 17px;
          .ele_number {
            font-size: 29px;
            color: #ff963d;
            font-weight: bold;
          }
          .ele_unit {
            font-size: 11px;
            color: #515256;
          }
        }
      }
      .day_item {
        border-left: 1px solid #eeeff1;
      }
    }
    .titleBox {
      height: 44px;
      width: 100%;
      background: #fff;
      padding: 14px 12px;
      box-sizing: border-box;
      position: relative;
      .titleTxt {
        border-left: 2px solid #4086f5;
        padding-left: 13px;
        font-size: 14px;
        font-weight: bold;
        color: #2c2d2e;
        line-height: 16px;
      }
      .titlePic {
        width: 75px;
        height: 20px;
        position: absolute;
        right: 12px;
        top: 11px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .wiringList {
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
}
</style>
