<template>
  <div id="changeNumber">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <p class="item names">
        <span>电力户号</span>
        <input class="inp" v-model="number" type="text" placeholder="请输入电力户号">
      </p>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn" @click="save">保存</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
export default {
  name: 'changeNumber',
  data () {
    return {
      title: '电力户号修改',
      memberId: '',
      detail: '',
      number: ''
    }
  },
  created () {
  },
  /**
   * 生命周期函数--keep-alive 组件激活时调用
   */
  activated: function () {
    this.detail = this.$route.query.detail
    this.number = this.detail.code
  },
  components: {
    Headers
  },
  methods: {
    save () {
      let _this = this
      let param = {
        accountId: this.detail.id,
        accountCode: this.number,
        editType: 'code'
      }
      console.log(param)
      this.$store.dispatch('editAccount', param).then(function (res) {
        console.log(res)
        if (res.status == '0') {
          _this.$router.back()
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
  padding-left: 14px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 30px;
  .item {
    line-height: 50px;
    display: flex;
    font-size: 13px;
    .inp {
      flex: 1;
      padding-left: 15px;
      padding-right: 10px;
      box-sizing: border-box;
      color: #999;
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

