<template>
  <div id="myinformation">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <group>
        <cell title="头像" value="hello" is-link></cell>
        <cell title="姓名" :value="data.name" is-link :link="{name:'revisename', params: {id: data.id, name: data.name}}"></cell>
        <cell title="电话" :value="data.mobilePhone" is-link :link="{name:'revisephoneone', params: {id: data.id, mobilePhone: data.mobilePhone}}"></cell>
      </group>
    </div>
  </div>
</template>
<script>
import Headers from '../Common/Headers.vue'
import { Group, Cell } from 'vux'
export default {
  name: 'myinformation',
  data () {
    return {
      title: '我的资料',
      data: {}
    }
  },
  components: {
    Headers,
    Group,
    Cell
  },
  activated: function () {
    let _this = this
    let memberId = window.localStorage.getItem('memberId')
    console.log(memberId)
    let param = {
      memberId: memberId
    }
    this.$store.dispatch('userinfo', param).then(function (res) {
      console.log(res)
      _this.data = res.data.list
    })
  }
}
</script>

<style scoped>
</style>

