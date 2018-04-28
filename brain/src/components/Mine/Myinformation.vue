<template>
  <div id="myinformation">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <div class="contBox">
      <group>
        <cell title="头像" value="hello" is-link></cell>
        <cell title="姓名" value="张扬正源" is-link :link="{path:'/revisename'}"></cell>
        <cell title="电话" value="15198762345" is-link :link="{path:'/revisephoneone'}"></cell>
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
      title: '我的资料'
    }
  },
  components: {
    Headers,
    Group,
    Cell
  }
}
</script>

<style scoped>
</style>

