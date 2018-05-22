<template>
  <div class="warm_item indoorhumidity">
    <p class="txt">室内湿度</p>
    <p class="num">
        <span class="number">{{indoortem.rh}}</span>
        <span class="unit">%</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'indoorhumidity',
  data () {
    return {
      indoortem: {
        rh: '-'
      }
    }
  },
  activated: function () {
    let _this = this
    let terminalId = window.localStorage.getItem('terminalId')
    let param = {
      terminalId: terminalId
    }
    console.log(param)
    this.$store.dispatch('indoortem', param).then(function (res) {
      // console.log(res.list[0])
      if (res.list[0]) {
        _this.indoortem = res.list[0]
      } else {
        _this.indoortem.rh = '-'
      }
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
