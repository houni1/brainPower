<template>
  <div class="warm_item indoortem" id="indoortem">
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
  </div>
</template>

<script>
export default {
  name: 'indoortem'
}
</script>

<style lang='less' scoped>
.indoortem {
    .num {
        border-left: 1px solid #659cf6;
        border-right: 1px solid #658ef1;
    }
}
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
</style>
