<template>
  <div id="myfeedback">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <textarea class="text" placeholder="请输入您的意见或者建议"></textarea>
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
      title: '意见反馈'
    }
  },
  components: {
    Headers,
    Group,
    Cell
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
</style>

