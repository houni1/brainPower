<template>
  <div id="mypower">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <group>
        <cell title="电力户号别名" :value="data.name" is-link :link="{name:'mypowername', params: {id: data.id, name: data.name}}"></cell>
        <div class="city">
          <p class="city_p">
            <span>所在城市</span>
            <x-address @on-hide="cityfn(flag, city)" :placeholder="data.region" class="cityBox" title="" v-model="city" raw-value :list="cityarr" value-text-align="right"></x-address>
          </p>
        </div>
        <cell title="电力户号" :value="data.code"></cell>
        <cell title="终端MAC地址" :value="data.macId"></cell>
        <cell title="终端版本号" :value="data.version"></cell>
      </group>
    </div>
    <div class="btnBox" @click="cancelBind" v-if="isdisable">
      <img class="def_btn" src="../../assets/images/terminal/btn_confirm_default.png" alt="">
      <span>解除绑定</span>
    </div>
    <div class="btnBox" v-else>
      <img class="def_btn" src="../../assets/images/terminal/btn_confirm_disabled.png" alt="">
      <span>解除绑定</span>
    </div>
    <confirm v-model="iscancel"
      title="解除绑定"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
        <p style="text-align:center;">是否确认解除绑定</p>
    </confirm>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, Cell, XAddress, ChinaAddressV4Data, XButton, Alert, Confirm, AlertPlugin } from 'vux'
export default {
  name: 'mypower',
  data () {
    return {
      title: '电力户号',
      addressData: ChinaAddressV4Data,
      city: [],
      // city: ['江苏省', '南京', '玄武'],
      id: '',
      data: {},
      flag: 'true',
      cityData: [],
      cityarr: [],
      show: false,
      iscancel: false,
      isdisable: true
    }
  },
  created () {
    console.log(this.addressData)
    this.id = this.$route.params.id
  },
  activated: function () {
    let _this = this
    console.log('电力户号')
    let param = {
      memberId: _this.id
    }
    this.$store.dispatch('account', param).then(function (res) {
      console.log(res)
      if (res.status == '0') {
        console.log(res.data.list)
        _this.data = res.data.list
        if (_this.data.macId == '') {
          _this.isdisable = false
        } else {
          _this.isdisable = true
        }
        let region = _this.data.region
        let regionarr = region.split(' ')
        this.city = regionarr
      } else if (res.status == '1') {
        alert(res.message)
        _this.$router.push('/Mine')
      }
    })
    this.$store.dispatch('region', {}).then(function (res) {
      console.log('请求地区数据=======')
      _this.cityData = res.data.list
      _this.cityarr = []
      _this.filterCity(_this.cityData)
    })
  },
  components: {
    Headers,
    Group,
    XAddress,
    XButton,
    AlertPlugin,
    Cell,
    Alert,
    Confirm
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      let _this = this
      let accountId = window.localStorage.getItem('accountId')
      let param = {
        accountId: accountId
      }
      this.$store.dispatch('unbind', param).then(function (res) {
        console.log(res)
        // alert(res.message)
        _this.data = {}
        _this.$router.back()
      })
    },
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
        // this.cityarr = []
        this.cityarr.push(item)
      })
    },
    cityfn (flag, city) {
      // alert(flag)
      // alert(city[2])
      if (city[2] == undefined) {
         return false
      } else {
        let _this = this
        let param = {
          accountId: _this.data.id,
          regionId: city[2],
          editType: 'region'
        }
        this.$store.dispatch('editAccount', param).then(function (res) {
          console.log(res)
          if (res.status == '0') {
            // _this.$router.push('/Mine')
            alert('地区修改成功')
          }
        })
      }
    },
    cancelBind () {
      this.iscancel = true
    }
  }
}
</script>

<style scoped lang='less'>
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

