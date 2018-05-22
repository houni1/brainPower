<template>
  <div id="Login">
    <dl class="logo">
      <dd>
        <img src="../../assets/images/login/mine_logo.png" alt="">
      </dd>
      <dt>{{logoName}}</dt>
    </dl>
    <div class="loginBox">
      <div class="userInfo">
        <p class="item phone">
          <span class="icon">
            <img src="../../assets/images/login/icon_account.png" alt="">
          </span>
          <input type="text" v-model="phone" placeholder="请输入手机号" class="user_input phone_input">
        </p>
        <p class="item yanzm">
          <span class="icon">
            <img src="../../assets/images/login/icon_password.png" alt="">
          </span>
          <input type="password" v-model="pass" placeholder="请输入密码" class="user_input">
        </p>
      </div>
    </div>
    <div class="loginBtnBox">
      <div class="loginBtn">
        <span class="toLoginBtn" @click="toLogin">登录</span>
      </div>
    </div>
    <div class="loginBottom">
      <div class="txtBtn">
        <p class="register" @click="toregister">注册</p>
        <p class="forgetpass" @click="togetpass">忘记密码？</p>
      </div>
      <!-- <div class="elseBox">
        <p class="border">
          <span></span>
        </p>
        <p class="txt">其他方式登录</p>
        <p class="border">
          <span></span>
        </p>
      </div> -->
      <!-- <div class="wechatBox">
        <div class="picBox">
          <p class="pic">
            <img src="../../assets/images/login/icon_wechat.png" alt="">
          </p>
          <p class="txt">微信登录</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      logoName: '智能云插座',
      phone: '',
      pass: ''
    }
  },
  created () {
    let user = window.localStorage.getItem('user')
    if (user) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    toLogin () {
      console.log('toLogin')
      let _this = this
      let param = {
        mobilePhone: _this.phone,
        password: _this.pass
      }
      console.log(param)
      this.$store.dispatch('login', param).then(function (res) {
        console.log(res)
        if (res.status == '0') {
          _this.$router.push('/')
          _this.phone = ''
          _this.pass = ''
          window.localStorage.setItem('user', JSON.stringify(param))
        } else if (res.status == 1) {
          alert(res.message)
        }
        let memberId = res.data.list.memberId
        window.localStorage.setItem('memberId', memberId)
      })
    },
    toregister () {
      this.$router.push('/registerone')
    },
    togetpass () {
      this.$router.push('/getpassone')
    }
  }
}
</script>

<style lang='less' scoped>
  #Login {
    background: url('../../assets/images/login/bg.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .logo {
      width: 102px;
      margin: 70px auto 0 auto;
      dd {
        width: 102px;
        height: 102px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dt {
        text-align: center;
        padding-top: 10px;
        font-size: 14px;
        color: #fff;
      }
    }
    .loginBox {
      width: 100%;
      padding: 50px 20px 0 20px;
      box-sizing: border-box;
      .userInfo {
        width: 100%;
        height: 121px;
        background: #fff;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        .item {
          height: 60px;
        //   line-height: 60px;
          display: flex;
          .icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            text-align: center;
            padding-top: 15px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .user_input {
            flex: 1;
            padding-left: 13px;
            box-sizing: border-box;
            color: #a9a9a9;
          }
        }
        .phone {
          border-bottom: 1px solid #eee;
        }
      }
    }
    .loginBtnBox {
      width: 100%;
      height: 49px;
      padding-left: 18px;
      padding-right: 18px;
      box-sizing: border-box;
      margin-top: 30px;
      .loginBtn {
        width: 100%;
        height: 49px;
        position: relative;
        .loginBtn_pic {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
        }
        .toLoginBtn {
          position: absolute;
          left: 0;
          background: url('../../assets/images/login/btn_login_default.png') no-repeat;
          background-size: 100% 100%;
          display: block;
          width: 100%;
          line-height: 49px;
          text-align: center;
          color: #fff;
          font-size: 14px;
        }
        .toLoginBtn:active {
          background: url('../../assets/images/login/btn_login_pressed.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .loginBottom {
      padding-left: 18px;
      padding-right: 18px;
      width: 100%;
      padding-top: 10px;
      font-size: 12px;
      box-sizing: border-box;
      color: #fff;
      .txtBtn {
        display: flex;
        p {
          flex: 1;
        }
        .forgetpass {
          text-align: right;
        }
      }
      .elseBox {
        margin-top: 50px;
        display: flex;
        opacity: 0.5;
        .txt {
          height: 15px;
          line-height: 15px;
          font-size: 11px;
          text-align: center;
          width: 40%;
        }
        .border {
          width: 30%;
          height: 15px;
          padding-top: 7px;
          span {
            display: block;
            width: 100%;
            border-top: 1px solid #fff;
          }
        }
      }
      .wechatBox {
        padding-top: 20px;
        text-align: center;
        width: 100%;
        .picBox {
          width: 50px;
          height: 80px;
          margin: 0 auto;
          .pic {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .txt {
            padding-top: 6px;
          }
        }
      }
    }
  }
</style>
