<template>
  <div id="addTiming">
    <Headers>
      <span slot="title">{{title}}</span>
    </Headers>
    <section class="time-content">
      <group>
        <cell title="任务定时" :value="timeShow" is-link @click.native="showPlugin"></cell>
        <cell title="设备开关" :value="typeData" is-link @click.native="doShowType"></cell>
      </group>
      <checklist title="重复设置" :options="weekList" @on-change="change" v-model="checkDefault"></checklist>
      <div class="save">
        <x-button type="primary" @click.native="save">保存</x-button>
        <x-button v-if="deleteShow" type="warn" @click.native="deleteRemind">删除</x-button>
      </div>
    </section>
    <actionsheet
      v-model="typeShow"
      :menus="menus"
      @on-click-menu="choiceAction" show-cancel></actionsheet>
  </div>
</template>

<script>
import Headers from '../Common/Headers.vue'
import { XInput, Group, Cell, CellBox, XButton, DatetimeView, Checklist, Actionsheet, dateFormat } from 'vux'
export default {
  name: 'addTiming',
  components: {
    Headers,
    XInput,
    Group,
    Cell,
    CellBox,
    XButton,
    DatetimeView,
    Checklist,
    Actionsheet
  },
  data () {
    return {
      setTime: '请选择',
      weekList: [{key: 1, value: '星期一'}, {key: 2, value: '星期二'}, {key: 3, value: '星期三'}, {key: 4, value: '星期四'}, {key: 5, value: '星期五'}, {key: 6, value: '星期六'}, {key: 7, value: '星期日'}],
      timeShow: '请选择时间',
      typeShow: false,
      menus: ['打开', '关闭'],
      typeData: '请选择任务类型',
      week: '',
      title: '新增定时任务',
      checkDefault: [],
      detail: {},
      flag: false,
      timeSave: '',
      deleteShow: false,
      switchStatus: 0
    }
  },
  activated () {
    if (this.$route.query.flag == 'detail') {
      this.detail = this.$route.query.detail
      this.title = '任务详情'
      if (this.detail.runStatus == 0) {
        this.typeData = '启动'
      } else {
        this.typeData = '关闭'
      }
      let list = this.detail.weeks.split(',')
      for (var index in list) {
        list[index] = Number(list[index])
      }
      this.deleteShow = true
      this.checkDefault = list
      this.timeShow = dateFormat(this.detail.startTime, 'HH:mm')
      this.timeSave = this.detail.startTime
    } else {
      this.title = '新增定时任务'
      this.checkDefault = []
      this.typeData = '请选择'
      this.timeShow = '请选择'
      this.deleteShow = false
    }
  },
  methods: {
    showPlugin () {
      let _this = this
      let minDate = dateFormat((new Date()), 'YYYY-MM-DD')
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH:mm',
        value: '',
        startDate: minDate,
        onConfirm (val) {
          console.log('plugin confirm', val)
          _this.timeShow = val
          _this.timeSave = val + ':00'
        }
      })
    },
    doShowType () {
      this.typeShow = true
    },
    choiceAction (val) {
      console.log(val)
      if (val == 0) {
        this.typeData = '打开'
        this.switchStatus = 0
      }
      if (val == 1) {
        this.switchStatus = 1
        this.typeData = '关闭'
      }
    },
    change (val, label) {
      this.week = val.join(',')
      this.checkDefault = val
      console.log(this.week)
    },
    save () {
      let params = {
        operateType: this.$route.query.flag == 'detail' ? 5 : 1,
        deviceId: this.$route.query.deviceId,
        memberId: localStorage.memberId,
        switchStatus: this.switchStatus,
        weeks: this.week,
        startTime: this.timeSave,
        timedTaskId: this.detail.id
      }
      this.$store.dispatch('switchTimedTask', params).then((res) => {
        if (res.status == 0) {
          this.$router.replace({path: '/timing', query: {deviceId: this.$route.query.deviceId}})
        }
      })
    },
    deleteRemind () {
      let params = {
        operateType: 4,
        deviceId: this.$route.query.deviceId,
        memberId: localStorage.memberId,
        timedTaskId: this.$route.query.flag == 'detail' ? this.detail.id : ''
      }
      this.$store.dispatch('switchTimedTask', params).then((res) => {
        if (res.status == 0) {
          this.$router.replace({path: '/timing', query: {deviceId: this.$route.query.deviceId}})
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
  #addTiming {background: #fff;}
  .save {padding: 15px}
</style>
