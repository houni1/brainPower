<template>
  <div class="warm_item outdoor" id="outdoor">
    <p class="txt">室外环境</p>
    <p class="num">
        <span class="number">{{outdoor.temp}}</span>
        <span class="unit">℃</span>
    </p>
    <p class="air">空气质量 {{outdoor.pm}}</p>
    <p class="pic" v-if="outdoor.pm <= 50">
        <img src="../../assets/images/home/label_good.png" alt="">
        <span class="picTxt">良</span>
    </p>
    <p class="pic" v-else-if="50 < outdoor.pm <= 100">
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
  name: 'outdoor',
  data () {
    return {
      outdoor: {}
    }
  },
  activated: function () {
    let _this = this
    let param = {
      regionId: '320101'
      // regionId: '320102'
    }
    this.$store.dispatch('outdoor', param).then(function (res) {
      console.log(res.list)
      _this.outdoor = res.list[0]
    })
  }
}
</script>

<style lang='less' scoped>
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
        height: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -7px;
        font-size: 10px;
        line-height: 14px;
        vertical-align: middle;
      }
      img {
        width: 45px;
        height: 100%;
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -22.5px;
        top: 0;
      }
    }
  }
</style>
