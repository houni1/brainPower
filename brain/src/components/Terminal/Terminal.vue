<template>
  <div id="terminal">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <div class="pic">
        <img src="../../assets/images/terminal/icon_lianjie.png" alt="">
      </div>
      <p class="title">您的账号 <span class="color">15110078983</span> 即将绑定终端设备</p>
      <div class="cont">
        <p class="cont_item">
          <span>电力户号别名</span>
          <input type="text" v-model="name" placeholder="请输入电力户号别名">
        </p>
        <p class="cont_item city">
          <span>所在城市</span>
          <x-address @on-hide="cityfn(flag, city)" placeholder="请选择地区" class="cityBox" title="" v-model="city" raw-value :list="cityarr" value-text-align="left"></x-address>
        </p>
        <p class="cont_item">
          <span>电力户号</span>
          <input type="text" v-model="code" placeholder="请输入电力户号">
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
      city: ['天津市', '市辖区', '和平区'],
      macId: '',
      code: '20180504002',
      name: '测试电力户3',
      regionId: '321011',
      flag: 'true',
      cityData: [],
      cityarr: []
    }
  },
  components: {
    Headers,
    Group,
    XAddress,
    XButton,
    Cell
  },
  created () {
    console.log('绑定终端啊啊啊啊啊')
    console.log(this.$route.params.macId)
    this.macId = this.$route.params.macId
  },
  activated: function () {
    let _this = this
    let param = {}
    this.$store.dispatch('region', param).then(function (res) {
      console.log('请求地区数据=======')
      _this.cityData = res.data.list
      _this.filterCity(_this.cityData)
    })
  },
  methods: {
    filterCity (data) {
      data.forEach((item) => {
        item['value'] = item.id
        if (item.children) {
          item.children.forEach((itemchild) => {
            itemchild['parent'] = item.id
          })
          this.filterCity(item.children)
          delete item.children
        }
        this.cityarr.push(item)
      })
    },
    cityfn (flag, city) {
      console.log(flag)
      console.log(city[2])
      this.regionId = city[2]
    },
    sureBind () {
      // this.$router.push('/tabbar')
      console.log('确认绑定终端')
      let _this = this
      let param = {
        name: _this.name,
        regionId: _this.regionId,
        code: _this.code,
        macId: _this.macId
      }
      console.log(param)
      this.$store.dispatch('bind', param).then(function (res) {
        console.log(res)
        if (res.status == '0') {
          alert('绑定成功')
          _this.$router.push('/')
        } else if (res.status == '1') {
          alert(res.message)
        }
      })
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

