<template>
  <div id="changetime">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <group>
        <datetime
          v-model="startime"
          @on-change="changeStart"
          title="开始时间"
          @on-cancel="log('cancel')"
          @on-confirm="onConfirm"
          clear-text="开始时间"
          @on-hide="log('hide', $event)">
        </datetime>
        <datetime
          v-model="endtime"
          @on-change="changeEnd"
          title="结束时间"
          @on-cancel="log('cancel')"
          @on-confirm="onConfirm"
          clear-text="结束时间"
          @on-hide="log('hide', $event)">
        </datetime>
      </group>
    </div>
    <div class="btnBox">
      <div class="btn">
        <span class="nextBtn">保存</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Datetime, Group, XButton } from 'vux'
import Headers from '../Common/Headers.vue'
export default {
  name: 'changetime',
  data () {
    return {
      title: '选择时间',
      startime: '',
      endtime: '2016-08-13',
      color: '#218aff'
    }
  },
  components: {
    Headers,
    Datetime,
    Group,
    XButton
  },
  methods: {
    onConfirm (val) {
      console.log('on-confirm arg', val)
      console.log('current value', this.value1)
    },
    changeStart (value) {
      console.log('changestart', value)
    },
    changeEnd (value) {
      console.log('changeend', value)
    },
    log (str1, str2 = '') {
      console.log(str1, str2)
    }
  }
}
</script>

<style scoped lang='less'>
.contBox {
  width: 100%;
//   background: #fff;
//   padding-left: 14px;
//   box-sizing: border-box;
//   margin-top: 10px;
  margin-bottom: 30px;
  .item {
    line-height: 50px;
    display: flex;
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

