<template>
  <div id="Headers">
    <span class="backIcon" @click="goBack">
      <img src="../../assets/images/icon/icon_back.png" alt="">
    </span>
    <p><slot name="title">标题</slot></p>
    <span class="action"><slot name="action" @click="action"></slot></span>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  data () {
    return {
      title: '首页'
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
#Headers {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: url('../../assets/images/tabbar/pic_home.png') no-repeat;
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
</style>
