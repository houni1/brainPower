<template>
  <div id="Headers">
    <div class="headersan" v-show="isAndroid">
      <span class="backIcon" @click="goBack">
        <img src="../../assets/images/icon/icon_back.png" alt="">
      </span>
      <p><slot name="title">标题</slot></p>
      <span class="action"><slot name="action" @click="action"></slot></span>
    </div>
    <div v-show="isiOS" class="iosbox">
      <div class="headersios">
        <span class="backIcon" @click="goBack">
          <img src="../../assets/images/icon/icon_back.png" alt="">
        </span>
        <p><slot name="title">标题</slot></p>
        <span class="action"><slot name="action" @click="action"></slot></span>
      </div>
    </div>
    <div v-show="isPhoneX" class="iphonexbox">
      <div class="headersios">
        <span class="backIcon" @click="goBack">
          <img src="../../assets/images/icon/icon_back.png" alt="">
        </span>
        <p><slot name="title">标题</slot></p>
        <span class="action"><slot name="action" @click="action"></slot></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  data () {
    return {
      title: '首页',
      isAndroid: true,
      isiOS: false,
      isPhoneX: false
    }
  },
  activated () {
    let type = window.localStorage.getItem('type')
    // alert(type)
    if (type) {
      if (type == 1) {
        this.isiOS = true
        this.isAndroid = false
        this.isPhoneX = false
      } else if (type == 2) {
        this.isPhoneX = true
        this.isiOS = false
        this.isAndroid = false
      }
    }
  },
  methods: {
    goBack () {
      this.$router ? this.$router.back() : window.history.back()
    },
    action () {
      this.$emit('on-click-right')
    }
  }
}
</script>

<style lang='less' scoped>
.headersan {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: url('../../assets/images/header/pic_an.png') no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  text-align: center;
  position: relative;
  color: #fff;
  .action {
    display: inline-block;
    padding-right: 12px;
    height: 44px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .backIcon {
    display: inline-block;
    width: 44px;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
}
.iosbox {
  height: 64px;
  padding-top: 20px;
  background: url('../../assets/images/header/pic_ios.png') no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  .headersios {
    width: 100%;
    height: 44px;
    line-height: 44px;
    // background: url('../../assets/images/tabbar/pic_home.png') no-repeat;
    // background-size: 100% 100%;
    // background-position: center center;
    text-align: center;
    position: relative;
    color: #fff;
    .action {
      display: inline-block;
      padding-right: 12px;
      height: 44px;
      position: absolute;
      right: 0;
      top: 0;
    }
    .backIcon {
      display: inline-block;
      width: 44px;
      height: 44px;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
}
.iphonexbox {
  height: 88px;
  padding-top: 44px;
  background: url('../../assets/images/header/picx.png') no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  .headersios {
    width: 100%;
    height: 44px;
    line-height: 44px;
    // background: url('../../assets/images/tabbar/pic_home.png') no-repeat;
    // background-size: 100% 100%;
    // background-position: center center;
    text-align: center;
    position: relative;
    color: #fff;
    .action {
      display: inline-block;
      padding-right: 12px;
      height: 44px;
      position: absolute;
      right: 0;
      top: 0;
    }
    .backIcon {
      display: inline-block;
      width: 44px;
      height: 44px;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
}
</style>
