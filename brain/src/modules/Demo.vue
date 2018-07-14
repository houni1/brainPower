<template>
  <div id="Demo">
    <div class="defaultBox" v-show="isAndroid">
      <div class="titleBox">
        <p class="title">需求响应</p>
      </div>
    </div>
    <div v-show="isiOS" class="iosbox">
      <div class="titleBox">
        <p class="title">需求响应</p>
      </div>
    </div>
    <div v-show="isPhoneX" class="iphonexbox">
      <div class="titleBox">
        <p class="title">需求响应</p>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="notice-card">
          <div class="notice-content">
            <p class="notice-text">
              尊敬的用户：
              <br>
              <br>
              为了给您提供更好的智能用电提样，我们请您配合参与居民负荷需求响应活动，每年请您参与3-5次用电高峰期削峰活动，会给与一定的用电补贴和红包奖励，感谢您的支持和配合！
            </p>
          </div>
          <div class="notice-footer">
            <button @click="submit" class="btn-submit">{{submited ? '已签约' : '签约'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {LoadMore} from 'vux'

  export default {
    name: 'Demand',
    components: {
      LoadMore
    },
    data () {
      return {
        isAndroid: true,
        isiOS: false,
        isPhoneX: false,
        submited: false
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
      if (window.localStorage['submited']) {
        this.submited = true
      } else {
        this.submited = false
      }
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
    },
    /**
     * 组件内方法
     */
    methods: {
      submit () {
        if (this.submited) {
          return
        }
        this.$vux.loading.show()
        setTimeout(() => {
          this.$vux.loading.hide()
          this.$vux.toast.show({
            text: '感谢您的参与'
          })
          this.submited = true
          window.localStorage['submited'] = '1'
        }, 400)
      }
    },
    /**
     * 计算属性
     */
    computed: {}
  }
</script>

<style lang="less" scoped>
  #Demo {
    flex: 1;
    overflow: scroll;
    padding-bottom: 63px;
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
    .content-wrapper {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 50px;
      overflow: auto;
      .content {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 12px;
      }
    }
  }

  .notice-card {
    background: #FFFFFF;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .notice-content {
      box-sizing: border-box;
      padding: 21px 18px;
      flex: 1;
      overflow: auto;
      .notice-text {
        font-size: 14px;
        line-height: 21px;
        color: #3d3f40;
      }
    }
    .notice-footer {
      flex: 0 0 58px;
      box-shadow: inset 0 1px 0 0 #ddd;
      box-sizing: border-box;
      padding: 9px 15px;
      .btn-submit {
        width: 100%;
        height: 100%;
        line-height: 1;
        color: #fff;
        text-align: center;
        font-size: 16px;
        background-image: linear-gradient(0deg,
        #4c84f5 0%,
        #55adff 100%),
        linear-gradient(
          #407df2,
          #407df2);
        background-blend-mode: normal,
        normal;
        box-shadow: 0px 2px 4px 0px rgba(32, 78, 165, 0.3);
        border-radius: 4px;
      }
    }
  }

</style>
