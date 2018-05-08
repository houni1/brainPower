<template>
  <div id="getpasstwo">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <p class="item phone">
        <span class="title">密码</span>
        <input class="inp inp_phone" v-model="pass" type="password" placeholder="请设置登录密码">
      </p>
      <p class="item yanzm">
        <span class="title">确认密码</span>
        <input class="inp" type="password" v-model="surepass" placeholder="再次确认登陆密码">
      </p>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn" @click="nextBtn">完成</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
export default {
  name: 'getpasstwo',
  data () {
    return {
      title: '找回密码（2/2）',
      pass: '',
      surepass: ''
    }
  },
  created () {
    console.log('找回密码222')
    console.log(this.$route.params)
    this.phone = this.$route.params.mobilePhone
    this.code = this.$route.params.verificationCode
  },
  components: {
    Headers
  },
  methods: {
    nextBtn () {
      console.log('完成密码')
      let _this = this
      if (_this.pass == '') {
        alert('请输入密码')
      } else if (_this.surepass == '') {
        alert('请输入确认密码')
      } else {
        if (_this.pass === _this.surepass) {
          console.log('next')
          let param = {
            mobilePhone: _this.phone,
            password: _this.surepass,
            verificationCode: _this.code
          }
          this.$store.dispatch('reset', param).then(function (res) {
            console.log(res)
            if (res.status == '0') {
              alert('密码修改成功')
              this.$router.push('/login')
            } else if (res.status == '1') {
              alert(res.message)
            }
          })
        } else {
          alert('请保证密码一致')
          _this.pass = ''
          _this.surepass = ''
        }
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
  margin-bottom: 30px;
  .item {
    line-height: 50px;
    display: flex;
    font-size: 13px;
    .title {
      display: inline-block;
      width: 80px;
    }
    .inp {
      flex: 1;
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

