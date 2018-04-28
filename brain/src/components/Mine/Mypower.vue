<template>
  <div id="mypower">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <group>
        <cell title="电力户号别名" value="AW12345" is-link></cell>
        <!-- <cell title="所在城市" value="张扬正源" is-link></cell> -->
        <div class="city">
          <p class="city_p">
            <span>所在城市</span>
            <x-address @on-shadow-change="cityfn(city)" class="cityBox" title="" v-model="city" raw-value :list="addressData" value-text-align="right"></x-address>
          </p>
        </div>
        <cell title="电力户号" value="123456" is-link></cell>
      </group>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, Cell, XAddress, ChinaAddressV4Data, XButton } from 'vux'
export default {
  name: 'mypower',
  data () {
    return {
      title: '电力户号',
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
    cityfn (city) {
      console.log(city)
    }
  }
}
</script>

<style scoped lang='less'>
.contBox {
  font-size: 13px;
  .city {
    width: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    position: relative;
    .city_p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-right: 15px;
      box-sizing: border-box;
      display: flex;
      span {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .cityBox {
        flex: 1;
      }
    }
  }
  .city:before {
    content: " ";
    position: absolute;
    left: 15px;
    right: 0;
    top: 0;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>

