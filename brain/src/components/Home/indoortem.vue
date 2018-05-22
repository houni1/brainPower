<template>
  <div class="warm_item indoortem" id="indoortem">
    <p class="txt">室内温度</p>
    <p class="num">
        <span class="number">{{indoortem.temp}}</span>
        <span class="unit">℃</span>
    </p>
    <p class="air">空气质量 {{indoortem.pm}}</p>
    <p class="pic">
      <span style="line-height:14px;vertical-align:middle;" v-if="indoortem.pm < 0 || indoortem.pm <= 50" class="picTxt nice">优</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="indoortem.pm > 50 && indoortem.pm <= 100" class="picTxt good">良</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="indoortem.pm > 100 && indoortem.pm <= 150" class="picTxt goodmin">轻度污染</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="indoortem.pm > 150 && indoortem.pm <= 200" class="picTxt goodmiddle">中度污染</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="indoortem.pm > 200 && indoortem.pm <= 300" class="picTxt goodmax">重度污染</span>
      <span style="line-height:14px;vertical-align:middle;" v-else-if="indoortem.pm > 200" class="picTxt bad">严重污染</span>
      <span v-else></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'indoortem',
  data () {
    return {
      aaa: '99',
      indoortem: {
        temp: '-',
        pm: '-'
      }
    }
  },
  activated: function () {
    let _this = this
    let terminalId = window.localStorage.getItem('terminalId')
    if (terminalId != '0') {
      let param = {
        terminalId: terminalId
      }
      console.log(param)
      this.$store.dispatch('indoortem', param).then(function (res) {
        // console.log(res.list[0])
        if (res.list[0]) {
          _this.indoortem = res.list[0]
        }
      })
    } else {
      _this.indoortem.pm = '-'
      _this.indoortem.temp = '-'
    }
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
