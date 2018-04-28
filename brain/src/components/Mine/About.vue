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
        <div class="cont">《走出非洲》是环球影业出品的爱情片，由西德尼·波拉克执导，梅丽尔·斯特里普，罗伯特·雷德福等主演。1985年12月10日，该片在美国上映。该片改编自卡伦·布里克森的同名自传体小说，讲述了凯伦为了得到一个男爵夫人的称号而远嫁肯尼亚，后来她跟英国探险家邓尼斯产生感情的故事。1986年，影片获得第58届奥斯卡最佳影片、第43届美国金球奖剧情类最佳影片等奖项。</div>
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

