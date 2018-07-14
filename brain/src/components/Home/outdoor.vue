<template>
  <div class="warm_item outdoor" id="outdoor">
    <p class="txt">室外环境</p>
    <p class="num">
        <span class="number">{{outdoor.temp}}</span>
        <span class="unit">℃</span>
    </p>
    <p class="air">空气质量 {{outdoor.pm}}</p>
    <p class="pic">
      <span style="line-height:14px;vertical-align:middle;" v-if="outdoor.pm < 0 || outdoor.pm <= 50" class="picTxt nice">优</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="outdoor.pm > 50 && outdoor.pm <= 100" class="picTxt good">良</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="outdoor.pm > 100 && outdoor.pm <= 150" class="picTxt goodmin">轻度污染</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="outdoor.pm > 150 && outdoor.pm <= 200" class="picTxt goodmiddle">中度污染</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="outdoor.pm > 200 && outdoor.pm <= 300" class="picTxt goodmax">重度污染</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="outdoor.pm > 200" class="picTxt bad">严重污染</span>
      <span v-else></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'outdoor',
  data () {
    return {
      outdoor: {
        temp: '-',
        pm: ''
      }
    }
  },
  activated: function () {
    this.initDate()
    setTimeout(() => {
      this.initDate()
    }, 200)
  },
  methods: {
    initDate () {
      let _this = this
      let regionId = window.localStorage.getItem('regionId')
      let param = {
        regionId: regionId
      }
      this.$store.dispatch('outdoor', param).then(function (res) {
        // console.log(res.list)
        _this.outdoor = res.list
      })
    }
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
      line-height: 14px;
      position: relative;
      .picTxt {
        display: block;
        position: absolute;
        padding-top: 2px;
        // box-sizing: border-box;
        top: 50%;
        margin-top: -7px;
        left: 50%;
        margin-left: -32px;
        display: block;
        width: 64px;
        height: 14px;
        line-height: 14px;
        font-size: 10px;
        border-radius: 7px;
        vertical-align: middle;
      }
      .nice {
        background: #57B12A;
      }
      .good {
        background: #e6e21e;
      }
      .goodmin {
        background: #Fda428;
      }
      .goodmiddle {
        background: #Fc0d1B;
      }
      .goodmax {
        background: #7F0F7E;
      }
      .bad {
        background: #7d0425;
      }
    }
  }
</style>
