<template>
  <div id="myfeedback">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <textarea class="text" v-model="info" placeholder="请输入您的意见或者建议"></textarea>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn" @click="next">提交</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, Cell } from 'vux'
export default {
  name: 'myfeedback',
  data () {
    return {
      title: '意见反馈',
      phone: '',
      info: ''
    }
  },
  created () {
    console.log(this.$route.params)
    this.phone = this.$route.params.phone
  },
  components: {
    Headers,
    Group,
    Cell
  },
  methods: {
    next () {
      let _this = this
      console.log('用户资料')
      let param = {
        mobilePhone: _this.phone,
        info: _this.info
      }
      this.$store.dispatch('feedback', param).then(function (res) {
        console.log(res)
        if (res.status == '0') {
          alert('感谢您的宝贵意见')
          _this.$router.push('/Mine')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.contBox {
  height: 257px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  .text {
    width: 100%;
    height: 100%;
    color: #acacac;
    font-size: 13px;
    line-height: 20px;
  }
}
.btnBox {
  padding-left: 13px;
  padding-right: 13px;
  box-sizing: border-box;
  margin-top: 20px;
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

