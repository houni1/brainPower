<template>
  <div id="registerthree">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <x-address @on-hide="cityfn(flag, city)" placeholder="请选择地区" class="cityBox" title="城市" v-model="city" raw-value :list="cityarr" value-text-align="right"></x-address>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn" @click="toregister">完成注册</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, XAddress, ChinaAddressV2Data, XButton, Cell } from 'vux'
export default {
  name: 'registerthree',
  data () {
    return {
      title: '新用户注册（3/3）',
      addressData: ChinaAddressV2Data,
      city: ['320100', '321301', '321302'],
      phone: '',
      code: '',
      pass: '',
      id: '',
      flag: 'true',
      cityData: [],
      cityarr: []
    }
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
  created () {
    console.log('注册333')
    console.log(this.addressData)
    this.phone = this.$route.params.mobilePhone
    this.code = this.$route.params.verificationCode
    this.pass = this.$route.params.password
  },
  components: {
    Headers,
    Group,
    XAddress,
    XButton,
    Cell
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
      this.id = city[2]
    },
    toregister () {
      console.log('完成注册')
      let _this = this
      let param = {
        mobilePhone: _this.phone,
        verificationCode: _this.code,
        password: _this.pass,
        regionId: _this.id
      }
      console.log(param)
      this.$store.dispatch('register', param).then(function (res) {
        if (res.status == '0') {
          alert('注册成功')
          _this.$router.push('/login')
        } else if (res.status == '1') {
          alert(res.message)
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.contBox {
  width: 100%;
  background: #fff;
  padding: 15px 13px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 30px;
  .item {
    line-height: 50px;
    display: flex;
    font-size: 13px;
    .title {
      display: inline-block;
      width: 80px;
    }
    .inp {
      flex: 1;
      padding-right: 10px;
      box-sizing: border-box;
      color: #aaa;
    }
  }
  .phone {
    border-bottom: 1px solid #eae8e8;
    position: relative;
    .inp_phone {
      width: 100%;
      padding-right: 110px;
      box-sizing: border-box;
      color: #666;
    }
    .yzmbtn {
      position: absolute;
      right: 10px;
      top: 9px;
      display: inline-block;
      width: 90px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dcdee0;
      border-radius: 5px;
      text-align: center;
      font-size: 12px;
      color: #aaa;
    }
  }
}
.btnBox {
  padding-left: 13px;
  padding-right: 13px;
  box-sizing: border-box;
  .btn {
    width: 100%;
    height: 44px;
    .nextBtn {
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 15px;
      line-height: 44px;
      background: url('../../assets/images/login/btn_login_default.png') no-repeat;
      background-size: 100% 100%;
    }
    .nextBtn:active {
      background: url('../../assets/images/login/btn_login_pressed.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

