<template>
  <div id="Mine">
    <div class="userBox" :style="{'padding-top': isPhoneX?'44px': (isiOS?'20px':'0')}">
      <div class="titleBox" :style="{'margin-bottom': isPhoneX?'10px': (isiOS?'15px':'35px')}">
        <p class="title">我的</p>
        <span class="logOff" @click="loginOut">退出登录</span>
      </div>
      <div class="userPic">
        <img src="../assets/images/mine/mine_logo.png" alt="">
      </div>
      <div class="userName">{{data.name}}</div>
    </div>
    <div class="userInfobox">
      <group class="user_item">
        <cell title="我的资料" is-link :link="{path:'/myinformation'}">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/images/mine/icon_personal.png">
        </cell>
      </group>
      <group class="user_item">
        <cell title="电力户号" is-link :link="{name:'mypower', params: {id: data.id}}">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/images/mine/icon_wifi.png">
        </cell>
      </group>
      <group class="user_item">
        <cell title="联系我们" is-link value="400-000-000">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/images/mine/icon_phone_mine.png">
        </cell>
        <cell title="意见反馈" is-link :link="{name:'myfeedback', params: {phone: data.mobilePhone}}">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/images/mine/icon_feedback.png">
        </cell>
      </group>
      <group class="user_item">
        <cell title="关于" is-link :link="{path:'/about'}">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/images/mine/icon_wifi_e.png">
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'Mine',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      data: {},
      isAndroid: true,
      isiOS: false,
      isPhoneX: false
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
    let _this = this
    let memberId = window.localStorage.getItem('memberId')
    console.log(memberId)
    let param = {
      memberId: memberId
    }
    this.$store.dispatch('userinfo', param).then(function (res) {
      console.log(res)
      _this.data = res.data.list
    })
  },
  /**
   * 组件内方法
   */
  methods: {
    loginOut () {
      console.log('退出登录')
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('memberId')
      window.localStorage.removeItem('regionId')
      window.localStorage.removeItem('regionName')
      window.localStorage.removeItem('terminalId')
      window.localStorage.removeItem('accountId')
      this.$router.push('/login')
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
  .title-say{font-size: 12px;color: #999;margin-top:20px;text-align: center;}
  #Mine {
    .userBox {
      width: 100%;
      height: 220px;
      box-sizing: border-box;
      background: url('../assets/images/mine/mine_pic.png')no-repeat;
      background-size: 100% 100%;
      margin-bottom: 16px;
      .titleBox {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        position: relative;
        margin-bottom: 35px;
        .title {
          font-size: 16px;
          font-weight: bold;
        }
        .logOff {
          position: absolute;
          right: 12px;
          top: 0;
          display: block;
          width: 50px;
          height: 40px;
          font-size: 12px;
        }
      }
      .userPic {
        width: 80px;
        height: 80px;
        border: 3px solid #3877e0;
        border-radius: 100%;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }
      .userName {
        padding-top: 15px;
        text-align: center;
        color: #fff;
        font-size: 15px;
      }
    }
    .userInfobox {
      .user_item {
        background: #fff;
        margin-bottom: 10px;
      }
    }
  }
</style>
