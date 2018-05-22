<template>
  <div id="terminal">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <div class="pic">
        <img src="../../assets/images/terminal/icon_lianjie.png" alt="">
      </div>
      <p class="title">您的账号 <span class="color">{{userphone}}</span> 即将绑定终端设备</p>
      <div class="cont">
        <p class="cont_item">
          <span>终端设备MAC地址</span>
          <input type="text" v-model="macId" readonly>
        </p>
        <p class="cont_item">
          <span>电力户号别名</span>
          <input type="text" v-model="name" placeholder="请输入电力户号别名">
        </p>
        <p class="cont_item city">
          <span>所在城市</span>
          <input type="text" v-model="regionName" readonly placeholder="请选择地区">
          <!-- <x-address @on-hide="cityfn(flag, city)" placeholder="请选择地区" class="cityBox" title="" v-model="city" raw-value :list="cityarr" value-text-align="left"></x-address> -->
        </p>
        <p class="cont_item">
          <span>电力户号</span>
          <input type="text" v-model="code" placeholder="请输入电力户号">
        </p>
      </div>
      <div class="tipBox">
        <p class="wring">温馨提示：请您输入您本人当前住房的真实有效的电力户号，否则您可能无法获得电力公司的电费红包奖励。</p>
        <p>用户编号为10位数字，在您的缴费卡和电费发票上可以查到（2009年前缴费卡不足10位数，可拨打95598咨询升位规则）</p>
      </div>
      <div class="btnBox" @click="sureBind">
        <!-- <img v-if="picflag" class="dis_btn" src="../../assets/images/terminal/btn_confirm_disabled.png" alt=""> -->
        <img class="def_btn" src="../../assets/images/terminal/btn_confirm_default.png" alt="">
        <span>确认绑定</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, XAddress, ChinaAddressV4Data, XButton, Cell } from 'vux'
export default {
  name: 'terminal',
  data () {
    return {
      title: '绑定终端设备',
      picflag: true,
      addressData: ChinaAddressV4Data,
      regionName: 'jiangsusheng nanjing xuanwu',
      // city: ['320100', '320101', '320106'],
      macId: '',
      code: '20180504002',
      name: '测试电力户3',
      regionId: '',
      flag: 'true',
      cityData: [],
      cityarr: [],
      userphone: '',
      memberId: ''
    }
  },
  components: {
    Headers,
    Group,
    XAddress,
    XButton,
    Cell
  },
  created () {
    console.log('绑定终端啊啊啊啊啊')
    console.log(window.location.href)
    let user = window.localStorage.getItem('user')
    let userphone = JSON.parse(user).mobilePhone
    this.userphone = userphone
    let _url = window.location.href
    let pos = _url.indexOf('=')
    let macid = _url.substr(pos + 1)
    console.log(macid)
    this.macId = macid
    // console.log(this.$route.params.macId)
    // this.macId = this.$route.params.macId
  },
  activated: function () {
    this.regionId = window.localStorage.getItem('regionId')
    this.memberId = window.localStorage.getItem('memberId')
    this.regionName = window.localStorage.getItem('regionName')
    this.accountId = window.localStorage.getItem('accountId')
  },
  methods: {
    sureBind () {
      console.log('确认绑定终端')
      console.log(this.regionId)
      let _this = this
      if (_this.name == '' && _this.code == '') {
        alert('电力户号别名和电力户号不能为空')
      } else {
        let reg = /^[0-9]*$/
        if (reg.test(_this.code)) {
          let param = {
            name: _this.name,
            regionId: _this.regionId,
            code: _this.code,
            macId: _this.macId,
            memberId: _this.memberId,
            accountId: _this.accountId
          }
          console.log(param)
          this.$store.dispatch('bind', param).then(function (res) {
            console.log(res)
            if (res.status == '0') {
              alert('绑定成功')
              let terminalId = res.data.list.terminalId
              // window.localStorage.removeItem('terminalId')
              window.localStorage.setItem('terminalId', terminalId)
              _this.$router.push('/')
            } else if (res.status == '1') {
              alert(res.message)
            } else if (res.status == '-1') {
              alert(res.message)
            }
          })
        } else {
          alert('电力户号必须为数字格式哦')
        }
      }
    }
  }
}
</script>

<style scoped lang='less'>
.vux-cell-box:not(:first-child):before {
  left: 0;
  top: -1px;
}
.contBox {
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  background: #fff;
  height: 100%;
  .pic {
    width: 92px;
    height: 92px;
    border-radius: 100%;
    margin: 25px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 14px;
    padding-bottom: 15px;
    color: #494a4c;
    .color {
      color: #ff5e3d;
    }
  }
  .cont {
    padding-left: 9px;
    padding-right: 9px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .cont_item {
      line-height: 50px;
      height: 50px;
      display: flex;
      font-size: 13px;
      border-bottom: 1px solid #ccc;
      span {
        display: inline-block;
        width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      input {
        flex: 1;
        padding-left: 5px;
        box-sizing: border-box;
      }
    }
    .cont_item:last-child {
      border-bottom: 0;
    }
    .city {
      // border-top: 1px solid #ccc;
      // border-bottom: 1px solid #ccc;
      .cityBox {
        display: inline-block;
        flex: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 5px;
      }
    }
  }
  .tipBox {
    font-size: 13px;
    padding-top: 15px;
    p {
      line-height: 16px;
      color: #999;
      // text-align: justify;
    }
    .wring {
      color: #FCBA63;
      padding-bottom: 15px;
    }
  }
  .btnBox {
    margin-top: 40px;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    position: relative;
    font-size: 16px;
    color: #fff;
    .dis_btn {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .def_btn {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    span {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>

