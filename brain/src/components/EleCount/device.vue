<template>
  <div id="device">
    <!-- 设备设备设备{{index}} -->
    <div class="buttonTab">
      <div class="btnBox">
        <p class="btn_item">
          <img src="../../assets/images/elecount/btn_left_nor.png" alt="">
          <span>日</span>
        </p>
        <p class="btn_item">
          <img src="../../assets/images/elecount/btn_min_nor.png" alt="">
          <span>月</span>
        </p>
        <p class="btn_item">
          <img src="../../assets/images/elecount/btn_right_nor.png" alt="">
          <span>年</span>
        </p>
      </div>
    </div>
    <p class="title">设备用电总量： <span class="color">2000</span> 度</p>
    <div class="echartsBox">
      <Echarts></Echarts>
    </div>
  </div>
</template>

<script>
import Echarts from '../Common/echarts.vue'
export default {
  name: 'device',
  props: ['index'],
  components: {
    Echarts
  }
}
</script>

<style lang='less' scoped>
.buttonTab {
  padding-left: 37.5px;
  padding-right: 37.5px;
  padding-top: 17px;
  padding-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
.btnBox {
    width: 100%;
    height: 28px;
    // background: pink;
    display: flex;
    .btn_item {
    flex: 1;
    width: 100%;
    height: 28px;
    position: relative;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    span {
        display: inline-block;
        width: 100%;
        text-align: center;
        color: #407df2;
        font-size: 12px;
        line-height: 28px;
    }
    }
}
}
.title {
font-size: 13px;
width: 100%;
padding-left: 14px;
padding-bottom: 17px;
box-sizing: border-box;
.color {
    color: #ff963d;
}
}
</style>
