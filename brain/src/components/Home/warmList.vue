<template>
  <div id="warmList">
    <div class="warmList">
      <outdoor></outdoor>
      <indoortem></indoortem>
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
