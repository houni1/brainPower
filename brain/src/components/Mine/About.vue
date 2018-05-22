<template>
  <div id="about">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <div class="box">
        <div class="picBox">
          <img src="../../assets/images/mine/mine_logo.png" alt="">
        </div>
        <p class="name">智能云插座</p>
        <p class="version">V1.0.0</p>
        <div class="cont">《中国智能家居网》.OneNET物联网PaaS云服务,由中国移动打造的专为物联网设备接入云平台.丰富的API,大数据存储分析,云端管理控制,运营商级的推广渠道,让产品轻松走向市场!中国智能家居网.OneNET物联网PaaS云服务,由中国移动打造的专为物联网设备接入云平台.丰富的API,大数据存储分析,云端管理控制,运营商级的推广渠道,让产品轻松走向市场!</div>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, Cell } from 'vux'
export default {
  name: 'about',
  data () {
    return {
      title: '关于'
    }
  },
  components: {
    Headers,
    Group,
    Cell
  }
}
</script>

<style scoped lang='less'>
.contBox {
  padding: 10px 13px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .box {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: url('../../assets/images/mine/about_bg.png')no-repeat;
    background-size: 100% 100%;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    position: relative;
    padding-top: 160px;
    box-sizing: border-box;
    .picBox {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50px;
      left: 50%;
      margin-left: -50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      color: #2c2d2e;
      padding-bottom: 10px;
    }
    .version {
      font-size: 10px;
      text-align: center;
      color: #a8b1ba;
      padding-bottom: 30px;
    }
    .cont {
      width: 100%;
      font-size: 14px;
      line-height: 23px;
      color: #666;
      text-align: justify;
    }
  }
}
</style>

