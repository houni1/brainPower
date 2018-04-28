<template>
  <div id="revisename">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <p class="item names">
        <span>姓名</span>
        <input class="inp" type="text" placeholder="请输入姓名">
      </p>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn">保存</span>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
export default {
  name: 'revisename',
  data () {
    return {
      title: '姓名'
    }
  },
  components: {
    Headers
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

