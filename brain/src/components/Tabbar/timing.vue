<template>
  <div id="Timing">
    <Headers>
      <span slot="title">设备定时</span>
      <span slot="action" @click="addTiming">新增</span>
    </Headers>
    <section class="time-content">
      <ul class="d-list">
        <li class="vux-1px-tb" v-for="item in remindList">
            <div class="left" @click="goDetail(item)">
              <h4>{{item.startTime | toFormatTime}}</h4>
              <p>操作：{{item.runStatus | actionFilter}}</p>
            </div>
            <div class="right">
              <x-switch title="" @on-change="change(item)" v-model="item.runStatus == 1"></x-switch>
            </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Headers from '../Common/Headers.vue'
import { Swipeout, SwipeoutItem, SwipeoutButton, XSwitch, Group, dateFormat } from 'vux'
export default {
  name: 'Timing',
  components: {
    Headers,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XSwitch,
    Group
  },
  data () {
    return {
      remindList: []
    }
  },
  activated () {
    this.initData()
  },
  methods: {
    addTiming () {
      this.$router.push({path: '/addTiming', query: {deviceId: this.$route.query.deviceId}})
    },
    initData () {
      let param = {
        queryType: 0,
        deviceId: this.$route.query.deviceId,
        memberId: localStorage.memberId
      }
      this.$store.dispatch('timedTaskInfo', param).then((res) => {
        if (res.status == 0) {
          this.remindList = res.data.list
          console.log(this.remindList)
        }
      })
    },
    change (item) {
      let params = {
        operateType: item.runStatus == 0 ? 2 : 3, // 2打开 3关闭
        deviceId: this.$route.query.deviceId,
        memberId: localStorage.memberId,
        timedTaskId: item.id
      }
      this.$store.dispatch('switchTimedTask', params).then((res) => {
        if (res.status == 0) {
          if (item.switchStatus == 0) {
            item.switchStatus = 1
          } else {
            item.switchStatus = 0
          }
        } else {
          this.$vux.toast.show({
            text: res.message,
            width: '12em',
            type: 'warn'
          })
        }
      })
    },
    goDetail (item) {
      this.$router.push({path: '/addTiming', query: {detail: item, flag: 'detail', deviceId: this.$route.query.deviceId}})
    }
  },
  filters: {
    toFormatTime (time) {
      return dateFormat(time, 'HH:mm')
    },
    actionFilter (action) {
      if (action == 0) {
        return '启动'
      }
      if (action == 1) {
        return '关闭'
      }
    }
  }
}
</script>

<style lang='less' scoped>
  #Timing {background: #fff;}
  .time-item {overflow: hidden;margin-left: 1.5rem;padding: 0.8rem 1.5rem 0.8rem 0;}
  .time-item .left{float: left;width: 70%;}
  .time-item .left p{font-size: 12px;color: #999;margin-top: 0.5rem;}
  .d-list {overflow: hidden;padding-left: 15px;}
  .d-list li {overflow: hidden;padding: 1rem 1rem 1rem 0}
  .d-list li>div {float: left}
  .left {width: 70%}
  .left h4{font-size: 18px;}
  .left p{font-size: 14px;color: #999;margin-top: 8px;}
  .right {width: 30%}
</style>
