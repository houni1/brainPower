<template>
  <div id="elecount">
    <Headers>
      <span slot="title">{{title}}</span>
      <p slot="action" class="header_right" @click="changetime">
        <span class="pic">
          <img src="../../assets/images/elecount/icon_time.png" alt="">
        </span>
        <span class="time" style="float:left;padding-top:1px;margin-left:3px;">选择时间</span>
      </p>
    </Headers>
    <div class="contBox">
      <div class="tabbox">
        <tab>
          <tab-item v-for="n in 8" :key="n" :selected="n===1" @on-item-click="getIndex">设备{{ n }}</tab-item>
        </tab>
      </div>
      <div class="devicebox">
        <Device :index="index"></Device>
      </div>
    </div>
  </div>
</template>
<script>
import { ButtonTab, ButtonTabItem, Tab, TabItem } from 'vux'
import Headers from '../Common/Headers.vue'
import Device from '../EleCount/device.vue'
export default {
  name: 'elecount',
  data () {
    return {
      title: '电量统计',
      index: 0
    }
  },
  components: {
    Headers,
    ButtonTab,
    ButtonTabItem,
    Tab,
    TabItem,
    Device
  },
  cereated () {
  },
  methods: {
    changetime () {
      this.$router.push('/changetime')
    },
    getIndex (index) {
      console.log('this index is' + index)
      this.index = index
      console.log(this.index)
    }
  }
}
</script>

<style scoped lang='less'>
.header_right {
  margin-top: 14.5px;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  width: 80px;
  .pic {
    display: inline-block;
    width: 15px;
    height: 15px;
    float: left;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .tiem {
    display: inline-block;
    height: 15px;
    margin-left: 3px;
    padding-top: 1px;
    float: left;
  }
}
.contBox {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  height: 100%;
  .tabbox {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .tablist {
      white-space:nowrap;
      .tab_item {
        display: inline-block;
        line-height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
