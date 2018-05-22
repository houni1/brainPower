<template>
  <div id="revisephoneone">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <p class="item phone">
        <span>手机号</span>
        <input class="inp inp_phone" v-model="phone" type="text" readonly>
        <button class="yzmbtn" :disabled='isDisabled' @click="getCode">{{codeTxt}}</button>
      </p>
      <p class="item yanzm">
        <span>验证码</span>
        <input class="inp" v-model="code" type="text" placeholder="请输入验证码">
      </p>
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
export default {
  name: 'revisephoneone',
  data () {
    return {
      title: '修改手机号（1/2）',
      phone: '',
      id: '',
      code: '',
      codeTxt: '获取验证码',
      countdown: 60,
      isDisabled: false
    }
  },
  created () {
    console.log('修改手机号1')
    console.log(this.$route.params)
    this.phone = this.$route.params.mobilePhone
    this.id = this.$route.params.id
  },
  components: {
    Headers
  },
  methods: {
    getCode () {
      console.log('获取验证码')
      let _this = this
      console.log(_this.phone)
      let param = {
        mobilePhone: _this.phone,
        queryType: 'obtain'
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
      let _this = this
      let param = {
        mobilePhone: _this.phone,
        verificationCode: _this.code
      }
      console.log(param)
      this.$store.dispatch('verification', param).then(function (res) {
        console.log(res)
        if (res.status == '0') {
          _this.$router.push({name: 'revisephonetwo', params: {id: _this.id}})
        } else if (res.status == '1') {
          alert(res.message)
        }
      })
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
  margin-bottom: 30px;
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

