<template>
  <div id="warmList">
    <div class="warmList">
      <!-- <div class="warm_item outdoor">
        <p class="txt">室外环境</p>
        <p class="num">
          <span class="number">32</span>
          <span class="unit">℃</span>
        </p>
        <p class="air">空气质量 22</p>
        <p class="pic" v-if="22 <= 50">
          <img src="../../assets/images/home/label_good.png" alt="">
          <span class="picTxt">良</span>
        </p>
        <p class="pic" v-else-if="50 < 22 <= 100">
          <img src="../../assets/images/home/label_comfortable.png" alt="">
          <span class="picTxt">舒适</span>
        </p>
        <p class="pic" v-else>
          <span class="picTxt">差</span>
        </p>
      </div> -->
      <outdoor></outdoor>
      <!-- <div class="warm_item indoortem">
        <p class="txt">室内温度</p>
        <p class="num">
          <span class="number">33</span>
          <span class="unit">℃</span>
        </p>
        <p class="air">空气质量 23</p>
        <p class="pic" v-if="23 <= 50">
          <img src="../../assets/images/home/label_good.png" alt="">
          <span class="picTxt">良</span>
        </p>
        <p class="pic" v-else-if="50 < 23 <= 100">
          <img src="../../assets/images/home/label_comfortable.png" alt="">
          <span class="picTxt">舒适</span>
        </p>
        <p class="pic" v-else>
          <span class="picTxt">差</span>
        </p>
      </div> -->
      <indoortem></indoortem>
      <!-- <div class="warm_item indoorhumidity">
        <p class="txt">室内湿度</p>
        <p class="num">
          <span class="number">45</span>
          <span class="unit">%</span>
        </p>
      </div> -->
      <indoorhumidity></indoorhumidity>
    </div>
  </div>
</template>

<script>
import outdoor from '../Home/outdoor.vue'
import indoortem from '../Home/indoortem.vue'
import indoorhumidity from '../Home/indoorhumidity.vue'
export default {
  name: 'warmList',
  components: {
    outdoor,
    indoortem,
    indoorhumidity
  }
}
</script>

<style lang='less' scoped>
.warmList {
  width: 100%;
  height: 156px;
  // background: pink;
  display: flex;
  .warm_item {
    flex: 1;
    text-align: center;
    padding-top: 22px;
    box-sizing: border-box;
    color: #fff;
    .txt {
      padding-bottom: 12px;
      font-size: 12px;
    }
    .num {
      width: 100%;
      height: 30px;
      line-height: 30px;
      .number {
        font-size: 26px;
        display: inline-block;
      }
      .unit {
        font-size: 16px;
        display: inline-block;
      }
    }
    .air {
      padding-top: 10px;
      padding-bottom: 8px;
      font-size: 12px;
    }
    .pic {
      height: 14px;
      position: relative;
      .picTxt {
        display: inline-block;
        width: 100%;
        height: 14px;
        position: absolute;
        left: 0;
        top: 1px;
        font-size: 10px;
        line-height: 14px;
      }
      img {
        height: 100%;
        display: inline-block;
      }
    }
  }
  .indoortem {
    .num {
      border-left: 1px solid #659cf6;
      border-right: 1px solid #658ef1;
    }
  }
}
</style>
