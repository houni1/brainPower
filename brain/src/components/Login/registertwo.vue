<template>
  <div id="registertwo">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <p class="item phone">
        <span>密码<span style="color: #fff">密码</span></span>
        <input class="inp inp_phone" :type="type" v-model="pass" placeholder="请设置登录密码">
        <i class="eye" @click="changeEye(0)" :class="{'active': type == 'text'}"></i>
      </p>
      <p class="item yanzm">
        <span>确认密码</span>
        <input class="inp" :type="type2" v-model="surepass" placeholder="再次确认登录密码">
        <i class="eye" @click="changeEye(1)" :class="{'active': type2 == 'text'}"></i>
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
  name: 'registertwo',
  data () {
    return {
      title: '新用户注册（2/3）',
      phone: '',
      code: '',
      pass: '',
      surepass: '',
      type: 'password',
      type2: 'password'
    }
  },
  components: {
    Headers
  },
  created () {
    console.log('注册2222')
    console.log(this.$route.params)
    this.phone = this.$route.params.mobilePhone
    this.code = this.$route.params.verificationCode
  },
  methods: {
    // next () {
    //   console.log('注册222下一步')
    //   let _this = this
    //   if (_this.pass == '') {
    //     alert('请输入密码')
    //   } else if (_this.surepass == '') {
    //     alert('请输入确认密码')
    //   } else {
    //     if (_this.pass === _this.surepass) {
    //       console.log('next')
    //       this.$router.push({name: 'registerthree', params: { mobilePhone: _this.phone, verificationCode: _this.code, password: _this.surepass }})
    //     } else {
    //       alert('请保证密码一致')
    //       _this.pass = ''
    //       _this.surepass = ''
    //     }
    //   }
    // },
    next () {
      console.log('注册222下一步')
      let _this = this
      if (_this.pass == '') {
        alert('请输入密码')
      } else if (_this.surepass == '') {
        alert('请输入确认密码')
      } else {
        // let regx = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,14}$/
        let regx = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,14}$/
        if (regx.test(_this.pass)) {
          if (_this.pass === _this.surepass) {
            console.log('next')
            this.$router.push({name: 'registerthree', params: { mobilePhone: _this.phone, verificationCode: _this.code, password: _this.surepass }})
          } else {
            alert('请保证密码一致')
            _this.pass = ''
            _this.surepass = ''
          }
        } else {
          alert('密码格式应为6-14位字母加数字')
        }
      }
    },
    changeEye (position) {
      if (position == 0) {
        if (this.type == 'password') {
          this.type = 'text'
        } else {
          this.type = 'password'
        }
      }
      if (position == 1) {
        if (this.type2 == 'password') {
          this.type2 = 'text'
        } else {
          this.type2 = 'password'
        }
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .eye {position: absolute;right: 15px;top:15px;width: 20px;height: 20px;background: url("../../assets/images/login/eye-open.png")center no-repeat;background-size: 20px;}
  .active {background: url("../../assets/images/login/eye-close.png")center no-repeat;background-size: 20px;}
  .contBox {
  width: 100%;
  height: 101px;
  background: #fff;
  padding-left: 14px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 30px;
  p{position: relative}
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

