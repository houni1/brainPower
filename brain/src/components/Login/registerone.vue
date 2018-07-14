<template>
  <div id="registerone">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <p class="item phone">
        <span>手机号</span>
        <input class="inp inp_phone" type="text" v-model="phone">
        <button class="yzmbtn" :disabled='isDisabled' @click="getCode">{{codeTxt}}</button>
      </p>
      <p class="item yanzm">
        <span>验证码</span>
        <input class="inp" type="text" v-model="code" placeholder="请输入验证码">
      </p>
    </div>
    <div class="checkedBox">
      <div class="picbox">
        <p class="pic">
          <img class="checkbg" src="../../assets/images/login/icon_choiced_nor.png" alt="">
          <img class="checked" src="../../assets/images/login/icon_choiced_pre.png" alt="">
        </p>
      </div>
      <p class="txt">我已阅读并同意<a class="blue" href="#">《智能家居用户协议》</a></p>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn" @click="next">下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import checkUtil from '../../assets/util/checkUtil'

export default {
  name: 'registerone',
  data () {
    return {
      title: '新用户注册（1/3）',
      phone: '',
      code: '',
      codeTxt: '获取验证码',
      countdown: 60,
      isDisabled: false
    }
  },
  components: {
    Headers
  },
  activated: function () {
  },
  methods: {
    getCode () {
      // 修改验证手机号逻辑，之前的已经不能覆盖目前全部手机号
      if (checkUtil.checkMobile(this.phone)) {
        console.log('获取验证码')
        let _this = this
        console.log(_this.phone)
        let param = {
          mobilePhone: _this.phone
        }
        this.$store.dispatch('verificationCode', param).then(function (res) {
          console.log(res)
          if (res.status == '0') {
            console.log(res.data.list.verificationCode)
            _this.code = res.data.list.verificationCode
            _this.countDown()
          } else if (res.status == '1') {
            alert(res.message)
          }
        })
      } else {
        alert('请您输入正确的手机格式')
      }
    },
    countDown () {
      let _this = this
      if (_this.countdown == 0) {
        _this.codeTxt = '发送验证码'
        _this.isDisabled = false
        _this.countdown = 60
        return
      } else {
        _this.isDisabled = true
        _this.codeTxt = this.countdown + 's'
        _this.countdown--
      }
      setTimeout(function () {
        _this.countDown()
      }, 1000)
    },
    next () {
      console.log('注册111下一步')
      console.log(this.phone)
      console.log(this.code)
      if (this.phone == '' || this.code == '') {
        alert('请输入验证码')
      } else {
        this.$router.push({name: 'registertwo', params: { mobilePhone: this.phone, verificationCode: this.code }})
      }
    }
  }
}
</script>

<style scoped lang='less'>
.contBox {
  width: 100%;
  height: 101px;
  background: #fff;
  padding-left: 14px;
  box-sizing: border-box;
  margin-top: 10px;
  // margin-bottom: 30px;
  .item {
    line-height: 50px;
    display: flex;
    font-size: 13px;
    .inp {
      flex: 1;
      padding-left: 15px;
      padding-right: 10px;
      box-sizing: border-box;
      color: #aaa;
    }
  }
  .phone {
    border-bottom: 1px solid #eae8e8;
    position: relative;
    .inp_phone {
      width: 100%;
      padding-right: 110px;
      box-sizing: border-box;
      color: #666;
    }
    .yzmbtn {
      position: absolute;
      right: 10px;
      top: 9px;
      display: inline-block;
      width: 90px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dcdee0;
      border-radius: 5px;
      text-align: center;
      font-size: 12px;
      color: #aaa;
      background: #fff;
    }
  }
}
.checkedBox {
  padding-left: 13px;
  padding-right: 13px;
  box-sizing: border-box;
  height: 54px;
  line-height: 54px;
  width: 100%;
  .picbox {
    display: inline-block;
    width: 18px;
    height: 54px;
    padding-top: 18px;
    float: left;
    .pic {
      width: 18px;
      height: 18px;
      background: pink;
      border: 1px solid #ccc;
      box-sizing: border-box;
      position: relative;
      border-radius: 3px;
      img {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .txt {
    float: left;
    display: inline-block;
    font-size: 11px;
    color: #666;
    padding-left: 8px;
    .blue {
      color: #3d72e9;
    }
  }
}
.btnBox {
  padding-left: 13px;
  padding-right: 13px;
  box-sizing: border-box;
  .btn {
    width: 100%;
    height: 44px;
    .nextBtn {
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 15px;
      line-height: 44px;
      background: url('../../assets/images/login/btn_login_default.png') no-repeat;
      background-size: 100% 100%;
    }
    .nextBtn:active {
      background: url('../../assets/images/login/btn_login_pressed.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

