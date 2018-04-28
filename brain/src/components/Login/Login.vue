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
          <input type="text" placeholder="请输入手机号" class="user_input phone_input">
          <span class="yzmBtn">获取验证码</span>
        </p>
        <p class="item yanzm">
          <span class="icon">
            <img src="../../assets/images/login/icon_code.png" alt="">
          </span>
          <input type="password" placeholder="请输入验证码" class="user_input">
        </p>
      </div>
    </div>
    <div class="loginBtnBox">
      <div class="loginBtn">
        <span class="toLoginBtn" @click="toLogin">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      logoName: '智能云插座'
    }
  },
  methods: {
    toLogin () {
      console.log('toLogin')
      this.$router.push('/')
    }
  }
}
</script>

<style lang='less' scoped>
  #Login {
    background: url('../../assets/images/login/bg.png') no-repeat;
    background-size: 100% 100%;
    .logo {
      width: 102px;
      margin: 80px auto 0 auto;
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
      padding: 60px 20px 0 20px;
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
          position: relative;
          .phone_input {
            padding-right: 100px;
          }
          .yzmBtn {
            width: 90px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            position: absolute;
            right: 0;
            top: 15px;
            border: 1px solid #dcdee0;
            border-radius: 5px;
            font-size: 12px;
            color: #aaa;
            cursor: pointer;
          }
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
  }
</style>
