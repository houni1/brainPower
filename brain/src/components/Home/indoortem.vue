<template>
  <div class="warm_item indoortem" id="indoortem">
    <p class="txt">室内温度</p>
    <p class="num">
        <span class="number">{{indoortem.temp}}</span>
        <span class="unit">℃</span>
    </p>
    <p class="air">空气质量 {{indoortem.pm}}</p>
    <p class="pic" v-if="indoortem.pm <= 50">
        <img src="../../assets/images/home/label_good.png" alt="">
        <span class="picTxt">良</span>
    </p>
    <p class="pic" v-else-if="50 < indoortem.pm <= 100">
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
  name: 'indoortem',
  data () {
    return {
      indoortem: {}
    }
  },
  activated: function () {
    let _this = this
    let param = {
      terminalId: '888'
    }
    this.$store.dispatch('indoortem', param).then(function (res) {
      console.log(res.list[0])
      _this.indoortem = res.list[0]
    })
  }
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
    // .pic {
    //   height: 14px;
    //   position: relative;
    //   .picTxt {
    //     display: inline-block;
    //     width: 100%;
    //     height: 14px;
    //     position: absolute;
    //     left: 0;
    //     top: 1px;
    //     font-size: 10px;
    //     line-height: 14px;
    //   }
    //   img {
    //     height: 100%;
    //     display: inline-block;
    //   }
    // }
  }
</style>
