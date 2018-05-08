<template>
  <div id="mypower">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <group>
        <cell title="电力户号别名" :value="data.name" is-link></cell>
        <!-- <cell title="所在城市" value="张扬正源" is-link></cell> -->
        <div class="city">
          <p class="city_p">
            <span>所在城市</span>
            <x-address @on-hide="cityfn(flag, city)" :placeholder="data.region" class="cityBox" title="" v-model="city" raw-value :list="cityarr" value-text-align="right"></x-address>
          </p>
        </div>
        <cell title="电力户号" :value="data.code" is-link></cell>
      </group>
      <!-- <div v-transfer-dom>
        <alert v-model="show" :title="aaa"> successful </alert>
      </div> -->
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, Cell, XAddress, ChinaAddressV4Data, XButton, Alert, AlertPlugin } from 'vux'
export default {
  name: 'mypower',
  data () {
    return {
      title: '电力户号',
      addressData: ChinaAddressV4Data,
      city: ['天津市', '市辖区', '和平区'],
      id: '',
      data: {},
      flag: 'true',
      cityData: [],
      cityarr: [],
      show: false
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
    Alert
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
        // this.cityarr = []
        this.cityarr.push(item)
      })
    },
    cityfn (flag, city) {
      console.log(flag)
      console.log(city[2])
      let _this = this
      let param = {
        accountId: _this.data.id,
        regionId: city[2],
        editType: 'region'
      }
      this.$store.dispatch('editAccount', param).then(function (res) {
        console.log(res)
      })
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

