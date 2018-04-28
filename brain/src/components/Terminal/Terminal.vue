<template>
  <div id="terminal">
    <Headers></Headers>
    <div class="contBox">
      <div class="pic">
        <img src="../../assets/images/terminal/icon_lianjie.png" alt="">
      </div>
      <p class="title">您的账号 <span class="color">15110078983</span> 即将绑定终端设备</p>
      <div class="cont">
        <!-- <group>
          <cell title="电力户号别名" value="请输入电力户号别名"></cell>
          <x-address title="请选择所在的城市" v-model="city" raw-value :list="addressData" value-text-align="left"></x-address>
          <cell title="电力户号" value="请输入电力户号"></cell>
        </group> -->
        <p class="cont_item">
          <span>电力户号别名</span>
          <input type="text" placeholder="请输入电力户号别名">
        </p>
        <p class="cont_item city">
          <span>所在城市</span>
          <!-- <input type="text" placeholder="请输入电力户号别名"> -->
          <x-address class="cityBox" title="" v-model="city" raw-value :list="addressData" value-text-align="left"></x-address>
        </p>
        <p class="cont_item">
          <span>电力户号</span>
          <input type="text" placeholder="请输入电力户号">
        </p>
      </div>
      <div class="btnBox" @click="sureBind">
        <img v-if="picflag" class="dis_btn" src="../../assets/images/terminal/btn_confirm_disabled.png" alt="">
        <img v-else class="def_btn" src="../../assets/images/terminal/btn_confirm_default.png" alt="">
        <span>确认绑定</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, XAddress, ChinaAddressV4Data, XButton, Cell } from 'vux'
export default {
  name: 'terminal',
  data () {
    return {
      title: '绑定终端设备',
      picflag: true,
      addressData: ChinaAddressV4Data,
      city: ['天津市', '市辖区', '和平区']
    }
  },
  components: {
    Headers,
    Group,
    XAddress,
    XButton,
    Cell
  },
  methods: {
    sureBind () {
      this.$router.push('/tabbar')
    }
  }
}
</script>

<style scoped lang='less'>
.vux-cell-box:not(:first-child):before {
  left: 0;
  top: -1px;
}
.contBox {
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  background: #fff;
  height: 100%;
  .pic {
    width: 92px;
    height: 92px;
    border-radius: 100%;
    margin: 40px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 14px;
    padding-bottom: 15px;
    color: #494a4c;
    .color {
      color: #ff5e3d;
    }
  }
  .cont {
    padding-left: 9px;
    padding-right: 9px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .cont_item {
      line-height: 50px;
      height: 50px;
      display: flex;
      font-size: 13px;
      span {
        display: inline-block;
        width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      input {
        flex: 1;
        padding-left: 5px;
        box-sizing: border-box;
      }
    }
    .city {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      .cityBox {
        display: inline-block;
        flex: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 5px;
      }
    }
  }
  .btnBox {
    margin-top: 40px;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    position: relative;
    font-size: 16px;
    color: #fff;
    .dis_btn {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .def_btn {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    span {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>

